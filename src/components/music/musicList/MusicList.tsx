import * as React from 'react';
import {Component} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../res/styles/Colors';
import ResponsivePixels from '../../../res/styles/ResponsivePixels';
import Images from '../../../common/Images';
import {BlurView} from '@react-native-community/blur';
import LinearGradient from 'react-native-linear-gradient';
import {MusicListUI} from './MusicListUI';
import {navigationConstant} from '../../../constants/NavigationConstant';
import {Clickable} from '../../../common/Clickable';

export interface IState {
  data: any;
  dataGenre: any;
  index: number;
}

export class MusicList extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: 0,
      data: [
        {
          title: 'Music 1',
          subTitle: 'Good',
          image: Images.ic_music_1,
          url: '',
        },
        {
          title: 'Music 2',
          subTitle: 'Better',
          image: Images.ic_music_2,
          url: '',
        },
        {
          title: 'Music 3',
          subTitle: 'Happy',
          image: Images.ic_music_3,
          url: '',
        },
      ],
      dataGenre: [
        {
          title: 'Dance',
          image: Images.ic_dance,
        },
        {
          title: 'Rock',
          image: Images.ic_rock,
        },
        {
          title: 'Techno',
          image: Images.ic_techno,
        },
      ],
    };
  }

  componentDidMount() {
    const {params} = this.props.route;
  }

  onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: any;
    changed: any;
  }) => {
    this.setState({index: viewableItems[0].index});
  };
  renderDataItem({item, index}: {item: any; index: number}) {
    let height =
      index === this.state.index
        ? ResponsivePixels.size350
        : ResponsivePixels.size300;

    let marginTop = index === this.state.index ? 0 : ResponsivePixels.size20;

    return (
      <Clickable
        onPress={() => this.navigateToMusicDetails(item)}
        style={{flex: 1}}>
        <ImageBackground
          style={{...myStyles.itemViewBg, marginTop: marginTop, height: height}}
          source={item.image}
          imageStyle={{
            borderRadius: ResponsivePixels.size30,
          }}>
          <View style={myStyles.subView}>
            <BlurView overlayColor="" blurAmount={20} style={myStyles.blurView}>
              <View
                style={{
                  padding: ResponsivePixels.size15,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={myStyles.mainText}>{item.title}</Text>
                  <Text style={myStyles.subText}>{item.subTitle}</Text>
                </View>
                <LinearGradient
                  colors={[
                    `#2ffcfd`,
                    `#0DB9FF`,
                    // '#000000',
                  ]}
                  style={myStyles.playBG}>
                  <Image style={myStyles.playImg} source={Images.ic_play} />
                </LinearGradient>
              </View>
            </BlurView>
          </View>
        </ImageBackground>
      </Clickable>
    );
  }

  renderDataGenreItem({item, index}: {item: any; index: number}) {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          style={{...myStyles.itemGenreViewBg}}
          source={item.image}
          imageStyle={{
            borderRadius: ResponsivePixels.size10,
          }}>
          <Text style={{...myStyles.mainText, fontWeight: 'bold'}}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    );
  }

  navigateToMusicDetails(musicItem: any) {
    this.props.navigation.navigate(navigationConstant.MUSIC_DETAILS, {
      musicDetails: musicItem,
    });
  }

  render() {
    return (
      <MusicListUI
        data={this.state.data}
        dataGenre={this.state.dataGenre}
        renderDataItem={({item, index}) => this.renderDataItem({item, index})}
        renderDataGenreItem={({item, index}) =>
          this.renderDataGenreItem({item, index})
        }
        onViewableItemsChanged={this.onViewableItemsChanged}
      />
    );
  }
}
const myStyles = StyleSheet.create({
  itemViewBg: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    height: ResponsivePixels.size300,
    width: ResponsivePixels.size220,
    marginHorizontal: ResponsivePixels.size20,
    borderRadius: ResponsivePixels.size30,
  },
  subView: {
    height: ResponsivePixels.size80,
    margin: ResponsivePixels.size15,
    overflow: 'hidden',
    borderRadius: ResponsivePixels.size10,
  },
  blurView: {
    flex: 1,
  },
  mainText: {
    fontSize: ResponsivePixels.size20,
    // marginHorizontal: ResponsivePixels.size10,
    color: Colors.Defaultwhite,
    // alignSelf: 'center',
  },
  subText: {
    fontSize: ResponsivePixels.size15,
    // marginHorizontal: ResponsivePixels.size10,
    color: Colors.normalGrey,
    // alignSelf: 'center',
  },
  playBG: {
    height: ResponsivePixels.size50,
    width: ResponsivePixels.size50,
    borderRadius: ResponsivePixels.size25,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playImg: {
    height: ResponsivePixels.size20,
    width: ResponsivePixels.size20,
    tintColor: Colors.Defaultwhite,
  },
  itemGenreViewBg: {
    // flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: ResponsivePixels.size100,
    width: ResponsivePixels.size100,
    marginHorizontal: ResponsivePixels.size10,
    borderRadius: ResponsivePixels.size10,
  },
});

import * as React from "react";
import { Component } from "react";
import { FavoritesUI } from "./FavoritesUI";
import Images from "../../common/Images";
import ResponsivePixels from "../../res/styles/ResponsivePixels";
import { Clickable } from "../../common/Clickable";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../res/styles/Colors";
import { navigationConstant } from "../../constants/NavigationConstant";

export interface IState {
  options: any;
}

export class Favorites extends Component<any, IState> {
  intervalID: any;
  constructor(props: any) {
    super(props);
    this.state = {
      options: [
        {
          title: "Music 1",
          subTitle: "Good",
          image: Images.ic_music_1,
          url: "",
        },
        {
          title: "Music 2",
          subTitle: "Better",
          image: Images.ic_music_2,
          url: "",
        },
        {
          title: "Music 3",
          subTitle: "Happy",
          image: Images.ic_music_3,
          url: "",
        },
        {
          title: "Music 1",
          subTitle: "Good",
          image: Images.ic_music_1,
          url: "",
        },
      ],
    };
  }

  componentDidMount() {
    const { params } = this.props.route;
  }

  handleBack() {
    this.props.navigation.goBack();
  }

  navigateToMusicDetails(musicItem: any) {
    this.props.navigation.navigate(navigationConstant.MUSIC_DETAILS, {
      musicDetails: musicItem,
    });
  }

  renderDataItem({ item, index }: { item: any; index: number }) {
    return (
      <Clickable
        rippleColor={"transparent"}
        onPress={() => this.navigateToMusicDetails(item)}
        style={{ flex: 1 }}
      >
        <View
          style={{
            marginVertical: ResponsivePixels.size10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                ...myStyles.itemImage,
              }}
              source={item.image}
            />
            <View
              style={{
                marginHorizontal: ResponsivePixels.size10,
              }}
            >
              <Text style={myStyles.mainText}>{item.title}</Text>
              <Text style={myStyles.subtext}>{item.subTitle}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              style={{ ...myStyles.rightImage, tintColor: Colors.green }}
              source={Images.ic_heart}
            />
            <Image
              style={{ ...myStyles.rightImage, tintColor: Colors.Defaultwhite }}
              source={Images.ic_more}
            />
          </View>
        </View>
      </Clickable>
    );
  }

  render() {
    return (
      <FavoritesUI
        goBack={() => this.handleBack()}
        options={this.state.options}
        renderDataItem={({ item, index }) =>
          this.renderDataItem({ item, index })
        }
      />
    );
  }
}

const myStyles = StyleSheet.create({
  itemViewBg: {
    // flex: 1,
    justifyContent: "flex-end",
    alignSelf: "center",
    height: ResponsivePixels.size300,
    width: ResponsivePixels.size220,
    marginHorizontal: ResponsivePixels.size20,
    borderRadius: ResponsivePixels.size30,
  },
  subView: {
    height: ResponsivePixels.size80,
    margin: ResponsivePixels.size15,
    overflow: "hidden",
    borderRadius: ResponsivePixels.size10,
  },
  blurView: {
    flex: 1,
  },
  mainText: {
    fontSize: ResponsivePixels.size18,
    color: Colors.Defaultwhite,
  },
  subtext: {
    fontSize: ResponsivePixels.size14,
    color: Colors.normalGrey,
  },
  itemImage: {
    height: ResponsivePixels.size50,
    width: ResponsivePixels.size50,
    borderRadius: ResponsivePixels.size10,
  },
  rightImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    marginHorizontal: ResponsivePixels.size10,
  },
  itemGenreViewBg: {
    // flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: ResponsivePixels.size100,
    width: ResponsivePixels.size100,
    marginHorizontal: ResponsivePixels.size10,
    borderRadius: ResponsivePixels.size10,
  },
});

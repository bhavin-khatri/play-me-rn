import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../../res/styles/Colors';
import MainContainer from '../../../common/MainContainer';
import Images from '../../../common/Images';
import ResponsivePixels from '../../../res/styles/ResponsivePixels';
import Slider from '@react-native-community/slider';

export interface IProps {
  musicDetails: any;
}

export const MusicDetailsUI = (props: IProps) => {
  const {musicDetails} = props;
  return (
    <MainContainer
      header={{
        left: [
          {
            image: Images.ic_back,
            imageStyle: myStyles.headerImage,
          },
        ],
        title: 'Playing now',
        titleColor: Colors.normalGrey,
        right: [
          {
            image: Images.ic_playlist,
            imageStyle: myStyles.headerImage,
          },
        ],
      }}>
      <View style={myStyles.mainView}>
        <View style={myStyles.subView}>
          <Image style={myStyles.musicImage} source={musicDetails.image} />
          <View
            style={{
              marginHorizontal: ResponsivePixels.size40,
              marginVertical: ResponsivePixels.size10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: ResponsivePixels.size10,
              }}>
              <Text style={myStyles.musicNameText}>{musicDetails.title}</Text>
              <Image style={myStyles.favImage} source={Images.ic_heart} />
            </View>
            <Text style={myStyles.genreNameText}>{musicDetails.subTitle}</Text>
            <Slider
              style={{
                width: ResponsivePixels.size300,
                height: ResponsivePixels.size50,
              }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            />
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

export const myStyles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  subView: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginHorizontal: ResponsivePixels.size25,
  },
  headerImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.normalGrey,
    marginHorizontal: ResponsivePixels.size20,
  },
  favImage: {
    height: ResponsivePixels.size30,
    width: ResponsivePixels.size30,
    tintColor: Colors.normalGrey,
  },
  musicImage: {
    height: ResponsivePixels.size350,
    width: ResponsivePixels.size300,
    borderRadius: ResponsivePixels.size30,
    marginVertical: ResponsivePixels.size20,
    alignSelf: 'center',
  },
  musicNameText: {
    fontSize: ResponsivePixels.size30,
    fontWeight: 'bold',
    color: Colors.Defaultwhite,
  },
  genreNameText: {
    fontSize: ResponsivePixels.size18,
    color: Colors.normalGrey,
  },
});

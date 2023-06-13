import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../../res/styles/Colors";
import MainContainer from "../../../common/MainContainer";
import Images from "../../../common/Images";
import ResponsivePixels from "../../../res/styles/ResponsivePixels";
import Slider from "@react-native-community/slider";
import { secondsToHms } from "../../../constants/Utils";
import LinearGradient from "react-native-linear-gradient";

export interface IProps {
  musicDetails: any;
  sliderValue: any;
  maximumValue: number;
  onSliderValueChange: (value: number) => void;
  goBack: () => void;
}

export const MusicDetailsUI = (props: IProps) => {
  const {
    goBack,
    onSliderValueChange,
    musicDetails,
    maximumValue,
    sliderValue,
  } = props;
  return (
    <MainContainer
      header={{
        left: [
          {
            image: Images.ic_back,
            imageStyle: myStyles.headerImage,
            onPress: () => goBack(),
          },
        ],
        title: "Playing now",
        titleColor: Colors.normalGrey,
        right: [
          {
            image: Images.ic_playlist,
            imageStyle: myStyles.headerImage,
          },
        ],
      }}
    >
      <View style={myStyles.mainView}>
        <View style={myStyles.subView}>
          <Image style={myStyles.musicImage} source={musicDetails.image} />
          <View
            style={{
              marginHorizontal: ResponsivePixels.size40,
              marginVertical: ResponsivePixels.size10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: ResponsivePixels.size10,
              }}
            >
              <Text style={myStyles.musicNameText}>{musicDetails.title}</Text>

              <Image style={myStyles.favImage} source={Images.ic_heart} />
            </View>
            <Text style={myStyles.genreNameText}>{musicDetails.subTitle}</Text>
            <Slider
              style={{
                width: ResponsivePixels.size300,
                height: ResponsivePixels.size50,
              }}
              step={1}
              minimumValue={0}
              maximumValue={maximumValue}
              value={sliderValue}
              onValueChange={onSliderValueChange(sliderValue)}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor={Colors.normalGrey}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={myStyles.timeText}>{secondsToHms(sliderValue)}</Text>
              <Text style={myStyles.timeText}>
                {secondsToHms(maximumValue)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: ResponsivePixels.size20,
              }}
            >
              <Image
                style={{
                  ...myStyles.bottomImage,
                  tintColor: Colors.normalGrey,
                }}
                source={Images.ic_info}
              />
              <Image
                style={{
                  ...myStyles.bottomImage,
                  tintColor: Colors.Defaultwhite,
                }}
                source={Images.ic_backward}
              />
              <LinearGradient
                colors={[
                  `#2ffcfd`,
                  `#0DB9FF`,
                  // '#000000',
                ]}
                style={myStyles.playPauseBtn}
              >
                <Image
                  style={{
                    ...myStyles.bottomImage,
                    tintColor: Colors.Defaultblack,
                  }}
                  source={Images.ic_pause}
                />
              </LinearGradient>
              <Image
                style={{
                  ...myStyles.bottomImage,
                  tintColor: Colors.Defaultwhite,
                }}
                source={Images.ic_forward}
              />
              <Image
                style={{
                  ...myStyles.bottomImage,
                  tintColor: Colors.normalGrey,
                }}
                source={Images.ic_reload}
              />
            </View>
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
    tintColor: Colors.green,
  },
  musicImage: {
    height: ResponsivePixels.size350,
    width: ResponsivePixels.size300,
    borderRadius: ResponsivePixels.size30,
    marginVertical: ResponsivePixels.size20,
    alignSelf: "center",
  },
  musicNameText: {
    fontSize: ResponsivePixels.size30,
    fontWeight: "bold",
    color: Colors.Defaultwhite,
  },
  genreNameText: {
    fontSize: ResponsivePixels.size18,
    color: Colors.normalGrey,
  },
  timeText: {
    fontSize: ResponsivePixels.size15,
    color: Colors.normalGrey,
  },
  playPauseBtn: {
    height: ResponsivePixels.size80,
    width: ResponsivePixels.size80,
    borderRadius: ResponsivePixels.size40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  bottomImage: {
    height: ResponsivePixels.size20,
    width: ResponsivePixels.size20,
  },
});

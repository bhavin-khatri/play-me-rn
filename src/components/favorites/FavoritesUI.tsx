import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "../../res/styles/Colors";
import MainContainer from "../../common/MainContainer";
import Images from "../../common/Images";
import ResponsivePixels from "../../res/styles/ResponsivePixels";
import { myStrings } from "../../constants/Strings";

export interface IProps {
  options: any;
  renderDataItem: ({ item, index }: { item: any; index: number }) => void;
  goBack: () => void;
}

export const FavoritesUI = (props: IProps) => {
  const { goBack, options, renderDataItem } = props;
  return (
    <MainContainer>
      <View style={myStyles.mainView}>
        <ImageBackground
          style={myStyles.profileImage}
          source={Images.ic_techno}
        >
          <View style={myStyles.playBg}>
            <Image style={myStyles.playImg} source={Images.ic_play} />
          </View>
        </ImageBackground>
        <ScrollView style={myStyles.subView}>
          <FlatList
            data={options}
            renderItem={({ item, index }) => renderDataItem({ item, index })}
          />
        </ScrollView>
      </View>
    </MainContainer>
  );
};

export const myStyles = StyleSheet.create({
  mainView: {
    // flex: 1,
  },
  subView: {
    // flex: 1,
    marginVertical: ResponsivePixels.size30,
    marginHorizontal: ResponsivePixels.size10,
  },
  headerImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.normalGrey,
    marginHorizontal: ResponsivePixels.size20,
  },
  profileImage: {
    flexDirection: "row",
    height: ResponsivePixels.size350,
    borderRadius: ResponsivePixels.size80,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  musicNameText: {
    fontSize: ResponsivePixels.size20,
    fontWeight: "bold",
    color: Colors.Defaultwhite,
  },
  genreNameText: {
    fontSize: ResponsivePixels.size14,
    color: Colors.normalGrey,
  },
  pointsMainView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  pointsSubView: {
    // flexDirection: "column",
    alignItems: "center",
  },
  pointsNameText: {
    fontSize: ResponsivePixels.size14,
    color: Colors.Defaultwhite,
  },
  playBg: {
    height: ResponsivePixels.size60,
    width: ResponsivePixels.size60,
    backgroundColor: Colors.green,
    borderRadius: ResponsivePixels.size30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: ResponsivePixels.size30,
    top: ResponsivePixels.size30,
  },
  playImg: {
    height: ResponsivePixels.size30,
    width: ResponsivePixels.size30,
  },
});

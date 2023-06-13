import React, { useState } from "react";
import {
  FlatList,
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

export interface IProps {
  data: any;
  dataGenre: any;
  onViewableItemsChanged: any;
  renderDataItem: ({ item, index }: { item: any; index: number }) => void;
  renderDataGenreItem: ({ item, index }: { item: any; index: number }) => void;
}

export const MusicListUI = (props: IProps) => {
  const {
    data,
    dataGenre,
    renderDataGenreItem,
    renderDataItem,
    onViewableItemsChanged,
  } = props;
  return (
    <MainContainer
      header={{
        left: [
          {
            image: Images.ic_notification,
            imageStyle: myStyles.headerImage,
          },
        ],
        title: "Play Me",
        titleColor: Colors.normalGrey,
        right: [
          {
            image: Images.ic_search,
            imageStyle: myStyles.headerImage,
          },
        ],
      }}
    >
      <View>
        <Text style={myStyles.mainText}>Music</Text>
        <FlatList
          data={data}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item, index }) => renderDataItem({ item, index })}
        />

        <Text style={myStyles.mainText}>Genre</Text>

        <FlatList
          data={dataGenre}
          horizontal={true}
          renderItem={({ item, index }) => renderDataGenreItem({ item, index })}
        />
      </View>
    </MainContainer>
  );
};

export const myStyles = StyleSheet.create({
  mainText: {
    fontSize: ResponsivePixels.size20,
    marginHorizontal: ResponsivePixels.size10,
    // marginVertical: ResponsivePixels.size10,
    color: Colors.Defaultwhite,
    marginVertical: ResponsivePixels.size25,
    alignSelf: "center",
  },
  ButtonLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  headerImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.normalGrey,
    marginHorizontal: ResponsivePixels.size20,
  },
});

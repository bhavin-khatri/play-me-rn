import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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

export const MyProfileUI = (props: IProps) => {
  const { goBack, options, renderDataItem } = props;
  return (
    <MainContainer
      header={{
        left: [
          {
            image: Images.ic_setting,
            imageStyle: myStyles.headerImage,
          },
        ],
        title: myStrings.MY_PROFILE_TITLE,
        titleColor: Colors.normalGrey,
        right: [
          {
            image: Images.ic_edit,
            imageStyle: myStyles.headerImage,
          },
        ],
      }}
    >
      <View style={myStyles.mainView}>
        <View style={myStyles.subView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: ResponsivePixels.size20,
            }}
          >
            <Image style={myStyles.profileImage} source={Images.ic_techno} />
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginHorizontal: ResponsivePixels.size20,
                flexDirection: "column",
              }}
            >
              <View>
                <Text style={myStyles.musicNameText}>{`Bhavin Khatri`}</Text>
                <Text
                  style={{
                    ...myStyles.genreNameText,
                    marginVertical: ResponsivePixels.size5,
                  }}
                >{`bk07@gmail.com`}</Text>
              </View>
              <View style={myStyles.pointsMainView}>
                <View style={myStyles.pointsSubView}>
                  <Text style={myStyles.pointsNameText}>{`20k`}</Text>
                  <Text style={myStyles.genreNameText}>{`Points`}</Text>
                </View>
                <View style={myStyles.pointsSubView}>
                  <Text style={myStyles.pointsNameText}>{`7`}</Text>
                  <Text style={myStyles.genreNameText}>{`Playlist`}</Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: ResponsivePixels.size10,
            }}
          >
            <FlatList
              data={options}
              renderItem={({ item, index }) => renderDataItem({ item, index })}
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
  subView: {},
  headerImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.normalGrey,
    marginHorizontal: ResponsivePixels.size20,
  },
  profileImage: {
    height: ResponsivePixels.size120,
    width: ResponsivePixels.size120,
    borderRadius: ResponsivePixels.size80,
    alignSelf: "center",
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
});

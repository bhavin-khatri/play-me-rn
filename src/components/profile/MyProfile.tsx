import * as React from "react";
import { Component } from "react";
import { MyProfileUI } from "./MyProfileUI";
import Images from "../../common/Images";
import ResponsivePixels from "../../res/styles/ResponsivePixels";
import { Clickable } from "../../common/Clickable";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";
import { Colors } from "../../res/styles/Colors";

export interface IState {
  options: any;
}

export class MyProfile extends Component<any, IState> {
  intervalID: any;
  constructor(props: any) {
    super(props);
    this.state = {
      options: [
        {
          title: "Songs",
          image: Images.ic_music,
        },
        {
          title: "Playlists",
          image: Images.ic_playlist,
        },
        {
          title: "Albums",
          image: Images.ic_album,
        },
        {
          title: "Downloads",
          image: Images.ic_download,
        },
        {
          title: "History",
          image: Images.ic_history,
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

  renderDataItem({ item, index }: { item: any; index: number }) {
    return (
      <Clickable style={{ flex: 1 }}>
        <View
          style={{
            padding: ResponsivePixels.size15,
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
            <Text style={myStyles.mainText}>{item.title}</Text>
          </View>
          <Image
            style={myStyles.rightImage}
            source={Images.ic_small_right_arrow}
          />
        </View>
      </Clickable>
    );
  }

  render() {
    return (
      <MyProfileUI
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
    marginHorizontal: ResponsivePixels.size10,
    color: Colors.Defaultwhite,
  },
  itemImage: {
    height: ResponsivePixels.size25,
    width: ResponsivePixels.size25,
    tintColor: Colors.Defaultwhite,
  },
  rightImage: {
    height: ResponsivePixels.size20,
    width: ResponsivePixels.size20,
    tintColor: Colors.normalGrey,
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

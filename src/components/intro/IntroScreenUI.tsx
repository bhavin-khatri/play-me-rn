import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Images from "../../common/Images";
import ResponsivePixels from "../../res/styles/ResponsivePixels";
import { Colors } from "../../res/styles/Colors";
import MainContainer from "../../common/MainContainer";

interface IProps {}

export const IntroScreenUI = (props: IProps) => {
  const {} = props;
  return (
    // <View>
    <MainContainer>
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Image source={Images.ic_headphone} />
        <View
          style={{
            marginHorizontal: ResponsivePixels.size30,
            alignSelf: "flex-start",
            padding: ResponsivePixels.size10,
          }}
        >
          <Text style={myStyles.text35}>Playme</Text>
          <Text style={myStyles.text15}>
            We're the second most popular place to listen to podcasts in the
            world - and growing fast
          </Text>
        </View>
      </View>
    </MainContainer>
    // </View>
  );
};

const myStyles = StyleSheet.create({
  text35: {
    fontSize: ResponsivePixels.size35,
    color: Colors.Defaultwhite,
    fontWeight: "bold",
  },
  text15: {
    fontSize: ResponsivePixels.size18,
    color: Colors.backgroundColorWithOpacity(0.7),
    marginTop: ResponsivePixels.size10,
    // letterSpacing: 1,
  },
});

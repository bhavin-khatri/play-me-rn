import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "../../res/styles/Colors";
import MainContainer from "../../common/MainContainer";
import Images from "../../common/Images";
import ResponsivePixels from "../../res/styles/ResponsivePixels";
import { MusicList } from "../music/musicList/MusicList";
import { navigationConstant } from "../../constants/NavigationConstant";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MyProfile } from "../profile/MyProfile";
import { Favorites } from "../favorites/Favorites";

export interface IProps {}

export const DashboardUI = (props: IProps) => {
  const Tabs = createBottomTabNavigator();
  const inActiveHeightWidth = ResponsivePixels.size26;
  const activeHeightWidth = ResponsivePixels.size35;
  return (
    <MainContainer>
      <Tabs.Navigator
        // default configuration from React Navigation
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.Defaultblack,
          tabBarInactiveTintColor: Colors.normalGrey,
          tabBarStyle: { ...myStyles.TabView },
        }}
      >
        <Tabs.Screen
          name={"Home"}
          component={MusicList}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              let tintColor = focused ? Colors.Defaultwhite : Colors.normalGrey;
              let height = focused ? activeHeightWidth : inActiveHeightWidth;
              let width = focused ? activeHeightWidth : inActiveHeightWidth;
              return (
                <View>
                  <Image
                    style={{
                      ...myStyles.bottomImage,
                      tintColor: tintColor,
                      height: height,
                      width: width,
                    }}
                    source={Images.ic_home}
                  />
                </View>
              );
            },
          }}
        />
        <Tabs.Screen
          name={navigationConstant.FAVORITES_SONGS}
          component={Favorites}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              let tintColor = focused ? Colors.Defaultwhite : Colors.normalGrey;
              let height = focused ? activeHeightWidth : inActiveHeightWidth;
              let width = focused ? activeHeightWidth : inActiveHeightWidth;
              return (
                <View>
                  <Image
                    style={{
                      ...myStyles.bottomImage,
                      tintColor: tintColor,
                      height: height,
                      width: width,
                    }}
                    source={Images.ic_heart}
                  />
                </View>
              );
            },
          }}
        />

        <Tabs.Screen
          name={"Profile"}
          component={MyProfile}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => {
              let tintColor = focused ? Colors.Defaultwhite : Colors.normalGrey;

              let height = focused ? activeHeightWidth : inActiveHeightWidth;
              let width = focused ? activeHeightWidth : inActiveHeightWidth;
              return (
                <View>
                  <Image
                    style={{
                      ...myStyles.bottomImage,
                      tintColor: tintColor,
                      height: height,
                      width: width,
                    }}
                    source={Images.ic_user}
                  />
                </View>
              );
            },
          }}
        />
      </Tabs.Navigator>
    </MainContainer>
  );
};

export const myStyles = StyleSheet.create({
  TextInput: {
    // flex: 1,
    padding: 10,
    fontSize: 16,
    color: Colors.Defaultblack,
  },
  Button: {
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    // backgroundColor: Colors.primaryColor,
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
    // tintColor: Colors.DefaultWhite,
    // padding:ResponsivePixels.size5,
    // borderRadius:ResponsivePixels.size20,
    // backgroundColor:Colors.defaultGreenColor
  },
  TabView: {
    backgroundColor: "transparent",
    borderTopColor: "transparent",
    // marginHorizontal: ResponsivePixels.size10,
    position: "absolute",
    // shadow: false,
    // borderRadius: 5,
    // padding: 5,
    zIndex: 100, //
    elevation: 0,
    // bottom: 0,
  },
  bottomImage: {
    height: ResponsivePixels.size35,
    width: ResponsivePixels.size35,
    tintColor: Colors.Defaultwhite,
    shadowColor: Colors.Defaultwhite,
  },
});

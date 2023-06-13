import React, { Component } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import RNKeyboardAvoidingView from "./RNKeyboardAvoidingView";
import { IProps } from "./CustomHeader";
import CustomHeader from "./CustomHeader";
import { Colors } from "../res/styles/Colors";
import LinearGradient from "react-native-linear-gradient";

export interface MainContainerProps {
  loading?: boolean;
  header?: IProps;
  isTabs?: boolean;
  children?: any;
  mainContainerBackgroundColor?: any;
}

export interface IState {
  loadingPatch: boolean;
}

export class MainContainer extends Component<MainContainerProps, IState> {
  render() {
    const { loading, header, isTabs, children, mainContainerBackgroundColor } =
      this.props;
    return (
      <LinearGradient
        colors={[
          "#000000",
          `rgba(29,30,34,255)`,
          `rgba(26,28,32,255)`,
          `rgba(33,47,53,255)`,
          `rgba(22,23,27,255)`,
          "#000000",
          `rgba(33,47,53,255)`,
          // '#000000',
        ]}
        style={{ flex: 1 }}
      >
        <RNKeyboardAvoidingView isTabs={isTabs ? isTabs : undefined}>
          {header ? <CustomHeader {...header} /> : null}
          {children}
        </RNKeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

export default MainContainer;

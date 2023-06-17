import React from "react";
import {
  Image,
  ImageStyle,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Center, HStack, Icon } from "native-base";
import { Colors } from "../res/styles/Colors";
import { Clickable } from "./Clickable";
import ResponsivePixels from "../res/styles/ResponsivePixels";

export interface IProps {
  left?: Array<Option>;
  backgroundColor?: any;
  right?: Array<Option>;
  customRightMenuOptions?: boolean;
  customLeftMenuOptions?: boolean;
  title?: string;
  image?: any;
  titleColor?: string;
  subTitle?: string;
  titleLeft?: string;
  isLoggedIn?: boolean;
  resetNavigation?: () => void;
}

export interface Option {
  icon?: any;
  image?: any;
  text?: string;
  onError?: any;
  onPress?: () => void;
  color?: string;
  imageStyle?: ImageStyle;
  imageBgStyle?: any;
  defaultImage?: any;
  ignoreInternetConnection?: boolean;
}

const CustomHeader: React.FC<IProps> = (props) => {
  const {
    backgroundColor,
    left,
    title,
    right,
    subTitle,
    customRightMenuOptions,
    customLeftMenuOptions,
    isLoggedIn,
    resetNavigation,
    titleLeft,
  } = props;

  const _renderTitle = () => {
    const { title, image, titleColor, subTitle, titleLeft } = props;

    const subtitleTextStyle: any = {
      color: titleColor,
      ...myStyles.titleStyle,
      fontSize: ResponsivePixels.size14,
      textAlign: "left",
    };
    const titleTextStyle: any = {
      ...myStyles.titleStyle,
      textAlign: "left",
      color: titleColor,
      fontSize: ResponsivePixels.size19,
    };

    if (title) {
      return (
        <View style={{ alignSelf: titleLeft ? "flex-start" : "center" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Text style={titleTextStyle}>{title}</Text>
              {subTitle ? (
                <Text style={subtitleTextStyle}>{subTitle}</Text>
              ) : null}
            </View>
          </View>
        </View>
      );
    }

    if (image) {
      return (
        <Image
          source={image}
          style={{
            alignSelf: "center",
            resizeMode: "center",
            tintColor: titleColor,
          }}
        />
      );
    }
  };

  const _renderRight = () => {
    if (right) {
      return right.map((right) => _renderOption(right));
    }
    if (customRightMenuOptions === undefined && isLoggedIn) {
      const defaultRightOption = [
        {
          onPress: () => {
            if (resetNavigation) {
              resetNavigation();
            }
          },
        },
      ];
      return defaultRightOption.map((right) => _renderOption(right));
    }
  };

  const _renderLeft = () => {
    if (left) {
      return left.map((left) => _renderOption(left));
    }
    if (customLeftMenuOptions === undefined && isLoggedIn) {
      const defaultLeftOption = [
        {
          onPress: () => {
            if (resetNavigation) {
              resetNavigation();
            }
          },
        },
      ];
      return defaultLeftOption.map((left) => _renderOption(left));
    }
  };

  const _renderOption = (option: Option) => {
    if (option) {
      const {
        icon,
        image,
        text,
        onError,
        onPress,
        color,
        imageStyle,
        imageBgStyle,
        defaultImage,
        ignoreInternetConnection,
      } = option;

      const iconStyle: any = {
        color: color,
      };

      if (icon) {
        return (
          <Clickable
            borderLess
            onPress={() => onPress}
            style={myStyles.iconStyle}
            ignoreInternetConnection={
              ignoreInternetConnection !== undefined
                ? ignoreInternetConnection
                : true
            }
          >
            <Icon name={icon} style={iconStyle} />
          </Clickable>
        );
      }
      if (image) {
        return (
          <TouchableOpacity style={imageBgStyle} onPress={onPress}>
            {
              <Image
                source={image}
                onError={onError}
                defaultSource={defaultImage}
                style={{
                  ...imageStyle,
                  // tintColor: color,
                }}
              />
            }
          </TouchableOpacity>
        );
      }
      if (text) {
        return (
          <TouchableOpacity
            style={myStyles.textContainerStyle}
            onPress={onPress}
          >
            <Text
              style={{
                ...myStyles.textStyle,
                color: color,
              }}
              numberOfLines={1}
            >
              {text.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      }
    }
  };

  const mainViewStyle: any = {
    ...myStyles.MainContainer,
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "space-between",
    elevation: 0,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
    // borderBottomColor: Colors.BackgroundGrey,
    paddingVertical: ResponsivePixels.size22,
  };
  return !titleLeft ? (
    <Center>
      <View style={mainViewStyle}>
        {left && left[0] && left[0].text && left[0].text.length > 3 ? (
          <HStack>{_renderLeft()}</HStack>
        ) : (
          <HStack>{_renderLeft()}</HStack>
        )}
        <HStack
          style={{
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {_renderTitle()}
        </HStack>

        {right && right[0] && right[0].text && right[0].text.length > 3 ? (
          <HStack>{_renderRight()}</HStack>
        ) : (
          <HStack>{_renderRight()}</HStack>
        )}
      </View>
    </Center>
  ) : (
    <Center>
      <View
        style={{
          ...mainViewStyle,
        }}
      >
        {left && left[0] && left[0].text && left[0].text.length > 3 ? (
          <HStack style={{ flex: 2 }}>{_renderLeft()}</HStack>
        ) : (
          <HStack style={{ flex: 1 }}>{_renderLeft()}</HStack>
        )}

        <HStack style={{ flex: 4 }}>{_renderTitle()}</HStack>
        {right && right[0] && right[0].text && right[0].text.length > 3 ? (
          <HStack style={{ flex: 2 }}>{_renderRight()}</HStack>
        ) : (
          <HStack style={{ flex: 1 }}>{_renderRight()}</HStack>
        )}
      </View>
    </Center>
  );
};

export default CustomHeader;

const myStyles = {
  MainContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // backgroundColor:'red'
  },
  textStyle: {
    marginRight: 0,
    fontSize: ResponsivePixels.size17,
    color: Colors.Defaultwhite,
    marginTop: 5,
  },
  titleStyle: {
    fontSize: ResponsivePixels.size19,
    fontWeight: "400",
  },
  textContainerStyle: {},
  iconStyle: {
    marginHorizontal: 4,
    padding: 4,
  },
};

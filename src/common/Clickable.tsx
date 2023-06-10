import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  ViewStyle,
} from 'react-native';

export interface IProps {
  style?: ViewStyle;
  onPress: () => void;
  children?: any;
  rippleColor?: string;
  borderLess?: boolean;
  ignoreInternetConnection?: boolean;
  activeOpacity?: number;
}

export const Clickable: React.FC<IProps> = props => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const {style, onPress, children, borderLess, rippleColor, activeOpacity} =
    props;

  const _onPress = async () => {
    onPress();
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const platformComponent = Platform.select({
    ios: (
      <TouchableOpacity
        disabled={disabled}
        style={style}
        onPress={_onPress}
        activeOpacity={activeOpacity}>
        {children}
      </TouchableOpacity>
    ),
    android: (
      <TouchableNativeFeedback
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(
          rippleColor || 'white',
          borderLess || false,
        )}
        onPress={_onPress}>
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    ),
  });

  return platformComponent ? platformComponent : null;
};

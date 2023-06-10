import {Dimensions, Text, ToastAndroid, View} from 'react-native';
import {Colors} from '../res/styles/Colors';
import ResponsivePixels from '../res/styles/ResponsivePixels';
import {Toast} from 'native-base';

let toastRef: any = undefined;
type TOAST_TYPES = 'success' | 'danger' | 'warning' | 'info';

export const isEmpty = (value: any) =>
  !value || value.toString().trim().length <= 0;

export const showToast = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    25,
    50,
  );
};

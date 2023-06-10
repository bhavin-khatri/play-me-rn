import { Dimensions, Text, ToastAndroid, View } from "react-native";
import { Colors } from "../res/styles/Colors";
import ResponsivePixels from "../res/styles/ResponsivePixels";
import { Toast } from "native-base";

let toastRef: any = undefined;
type TOAST_TYPES = "success" | "danger" | "warning" | "info";

export const isEmpty = (value: any) =>
  !value || value.toString().trim().length <= 0;

export const showToast = (message: string) => {
  ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    ToastAndroid.TOP,
    25,
    50
  );
};

export const secondsToHms = (sec: number) => {
  let result = "";
  sec = Number(sec);
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec % 3600) / 60);
  let seconds = Math.floor((sec % 3600) % 60);

  let newSeconds =
    seconds > 0 ? (seconds < 10 ? `0${seconds}` : seconds) : "00";
  let newMinutes =
    minutes > 0 ? (minutes < 10 ? `0${minutes}` : minutes) : "00";

  result = `${newMinutes}:${newSeconds}`;
  return result;
};

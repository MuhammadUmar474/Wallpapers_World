import { Platform } from "react-native";
import { W_HEIGHT } from "../dimensionUtils/dimensions";

export const isAndroid = Platform.OS === "android";

export const isIOS = Platform.OS === "ios";

// ios small device
export const isd = isIOS && W_HEIGHT < 675;

export const os_ver = Platform.Version;

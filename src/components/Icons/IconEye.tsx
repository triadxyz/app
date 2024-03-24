import React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function IconEye ({color}: {color?: string}) {
  return (
    <View>
      <Svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        width={24}
        height={24}
        stroke={color || "#fff"}
        className="w-6 h-6"
      >
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C13.9799 8.42 15.5799 10.02 15.5799 12Z"
        />
        <Path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z"
        />
      </Svg>
    </View>
  );
};


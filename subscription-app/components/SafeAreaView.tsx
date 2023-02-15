import { SafeAreaView, Text } from "react-native";
import React, { ReactNode } from "react";
import { Platform } from "react-native";
const isAndroid = Platform.OS === "android";

type Props = {
  children?: ReactNode;
  style?: any;
};

const SafeArea = ({ children, style }: Props) => {
  return (
    <SafeAreaView
      className={`${isAndroid && "mt-6"} flex-1 bg-gray-100 relative p-4`}
      style={{ ...style }}
    >
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

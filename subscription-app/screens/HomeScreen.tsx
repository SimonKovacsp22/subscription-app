import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import ActionRow from "../components/ActionRow";

const isAndroid = Platform.OS === "android";

const HomeScreen = () => {
  return (
    <SafeAreaView
      className={`${isAndroid && "mt-6"} flex-1 bg-gray-100 relative`}
    >
      <ScrollView>
        <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">UPGRADE</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri: "https://i.imgur.com/e14NE49.png",
          }}
          className="w-full h-64"
        />
        <ActionRow
          title="Connect with Friends"
          screen="Demo"
          color="#F44174"
          icon="share-social"
        ></ActionRow>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

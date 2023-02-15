import SafeArea from "../components/SafeAreaView";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RootSctackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootSctackParamList,
  "Demo"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeArea style={{ backgroundColor: "#E5962D" }}>
      <TouchableOpacity
        onPress={navigation.goBack}
        className="flex flex-row items-center"
      >
        <Ionicons name={"arrow-back"} size={45} color={"#FFFFFF"} />
        <Text className="text-white text-lg">Go Back</Text>
      </TouchableOpacity>
      <Text>DemoScreen</Text>
    </SafeArea>
  );
};

export default DemoScreen;

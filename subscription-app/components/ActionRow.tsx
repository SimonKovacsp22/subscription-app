import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootSctackParamList } from "../App";

export type NavigationProp = NativeStackNavigationProp<
  RootSctackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};
const ActionRow = ({ title, screen, color, icon, vertical }: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      className={`py-6 flex items-center justify-center rounded-lg space-x-2 m-2 ${
        vertical ? "flex-col flex-1" : "flex-row"
      }`}
      style={{ backgroundColor: color }}
      onPress={() => navigation.navigate(screen)}
    >
      <Ionicons name={icon} size={30} color={"#FFFFFF"} />
      <Text className="text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;

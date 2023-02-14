import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};
const ActionRow = ({ title, screen, color, icon, vertical }: Props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: color }}>
      <Ionicons name={icon} size={30} color={"#FFFFFF"} />
      <Text>ActionRow</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import SafeArea from "../components/SafeAreaView";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootSctackParamList } from "../App";
export type NavigationProp = NativeStackNavigationProp<
  RootSctackParamList,
  "Paywall"
>;

const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeArea style={{ backgroundColor: "#1A2f44" }}>
      <ScrollView>
        <View className="mt-10 items-center space-y-2">
          <Text className="text-white uppercase text-2xl text-center font-bold">
            upgrade
          </Text>
          <Text className="text-white text-center">
            Upgrade to Pro to Access all the Features
          </Text>
        </View>
        <TouchableOpacity
          className="absolute p-5 right-0 top-0"
          onPress={navigation.goBack}
        >
          <Ionicons
            name="md-close-circle-sharp"
            size={32}
            color="#E5962D"
          ></Ionicons>
        </TouchableOpacity>
      </ScrollView>
    </SafeArea>
  );
};

export default PaywallScreen;

import React from "react";
import { Text, View } from "react-native";
import BadgeView from "./BadgeView";

const Header = () => {
  return (
    <View className="mb-4 py-5 px-4 border-b border-dashed border-gray-200 bg-white">
      <View className="flex items-center justify-center my-2">
        <Text className="text-xl font-bold text-gray-900">
          DFM (Kick counter)
        </Text>
        <View className=" absolute right-0">
          <BadgeView />
        </View>
      </View>
    </View>
  );
};

export default Header;

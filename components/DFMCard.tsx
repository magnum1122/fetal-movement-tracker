import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { ArticleLogo } from "@/assets/Logo/article";
import { Ionicons } from "@expo/vector-icons";

const DFMCard = () => {
  const [save, setSave] = useState(false);
  return (
    <View className="flex items-center justify-center mx-4 h-[160] rounded-xl relative overflow-hidden shadow-lg shadow-gray-400/30">
      <Image
        source={images.momBg}
        className="w-full h-[180] items-center justify-center "
        resizeMode="contain"
      />
      <LinearGradient
        colors={[
          "rgba(194,194,194,1)",
          "rgba(255,255,255,0.0)",
          "rgba(48,48,48,0.7)",
        ]}
        locations={[0, 0.5, 1]}
        className="w-full h-full absolute rounded-xl"
      />
      <Text className="absolute text-lg font-bold bottom-4 left-4 text-white">
        DMF (fetal movement)
      </Text>
      <View className="absolute z-10 items-center flex-row top-4 left-3 h-6 w-6">
        <Image source={images.leapIcon} className="w-12 h-6" />
        <ArticleLogo />
      </View>
      <TouchableOpacity
        className="absolute flex-row justify-center items-center p-[5] gap-1 top-3 right-3 bg-white rounded-2xl"
        onPress={() => setSave(!save)}
      >
        <Ionicons
          name={!save ? "bookmark-outline" : "bookmark"}
          size={16}
          color="black"
        />
        <Text className="text-sm font-medium">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DFMCard;

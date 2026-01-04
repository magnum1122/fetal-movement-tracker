import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useModal } from "@/Context/modalContext";


const RecordHeader = () => {
  const route = useRouter();
  const {toggleModal} = useModal()
  return (
    <View className="py-5 pr-4 pl-3 border-b border-dashed border-gray-200 bg-white">
      <View className="flex-row items-center justify-between my-2">
        <TouchableOpacity className="w-11 h-7 flex items-center justify-center"
        onPress={route.back}>
          <Ionicons name="arrow-back-sharp" size={24} color={"black"} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Record DFM</Text>
        <TouchableOpacity
        onPress={toggleModal}
        >
          <Ionicons
            name="information-circle-outline"
            size={32}
            color={"black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RecordHeader;

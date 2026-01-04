import { useModal } from "@/Context/modalContext";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect } from "react";
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import InfoModal from "../components/InfoModal";
import RecordHeader from "../components/RecordHeader";
import TimerSection from "../components/TimerSection";

const recordScreen = () => {
  const insets = useSafeAreaInsets();
  const { modalVisible, toggleModal } = useModal();

  // --- Back Button Logic ---
  useEffect(() => {
    const backAction = () => {
      if (modalVisible) {
        toggleModal();
        return true;
      }

      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [modalVisible]);

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 relative">
      <RecordHeader />

      {/* Modal View */}
      {modalVisible && (
        <View
          className="flex-1 h-full w-full absolute z-10"
          style={{
            paddingTop: insets.top,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          <BlurView
            intensity={1}
            experimentalBlurMethod="dimezisBlurView"
            tint="dark"
            style={StyleSheet.absoluteFill}
          />
          <InfoModal />
        </View>
      )}

      {/* 1. Linear Gradient Background */}
      <View className="flex-1">
        <LinearGradient
          colors={[
            "rgba(231, 223, 255, 0.1)",
            "rgba(178, 123, 245, 0.1)",
            "rgba(242, 100, 201, 0.1)",
            "rgba(255, 148, 140, 0.1)",
          ]}
          locations={[0.0, 0.4, 0.7, 1.0]}
          className="flex-1 absolute inset-0 -z-10"
        />

        {/* stop recording */}
        <View className="size-12 bg-white min-w-80 h-32 flex justify-center items-center mt-[100] mx-auto rounded-2xl p-4">
          <Text className="text-[length:24] font-semibold text-center">
            Stop recording after 10 kicks
          </Text>
          <View
            style={{ transform: [{ rotate: "180deg" }] }}
            className="absolute -bottom-5"
          >
            <Ionicons name={"triangle"} size={20} color={"white"} />
          </View>
        </View>

        {/* Timer section */}
        <TimerSection />

        <TouchableOpacity className=" w-1/2 h-auto self-center mt-5">
          <Text className=" font-semibold text-lg text-center underline underline-offset-8">
            What if I am not getting enough kicks?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default recordScreen;

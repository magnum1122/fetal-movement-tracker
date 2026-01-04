import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FootStepsLogo from "@/assets/Logo/footsteps";
import CloseIcon from "@/assets/Logo/close";
import { useModal } from "@/Context/modalContext";

const InfoModal = () => {
  const { toggleModal } = useModal();

  const steps = [
    {
      number: 1,
      text: "Choose a time when you are least distracted or when you typically feel the fetus move.",
    },
    {
      number: 2,
      text: "Get comfortable. Lie on your left side or sit with your feet propped up.",
    },
    {
      number: 3,
      text: "Place your hands on your belly.",
    },
    {
      number: 4,
      text: "Start a timer or watch the clock.",
    },
    {
      number: 5,
      text: "Count each kick. Keep counting until you get to 10 kicks / flutters / swishes/rolls.",
    },
    {
      number: 6,
      text: "Once you reach 10 kicks, jot down how many minutes it took.",
    },
  ];

  return (
    <View className="flex-1 h-full w-full  justify-center items-center overflow-hidden">
      <View className="w-[90%] h-auto  flex">
        {/* Close Button */}
        <TouchableOpacity
          onPress={toggleModal}
          className="size-12 bg-gray-200/90 border border-white self-end rounded-full flex items-center justify-center my-2"
        >
          <CloseIcon />
        </TouchableOpacity>

        {/* Information Container */}
        <View className="border border-white rounded-2xl overflow-hidden p-1">
          {/* Header Title */}
          <View className="bg-white flex-row gap-2 p-4 rounded-2xl mb-2 border-b-1 border-dashed border-white">
            <FootStepsLogo />
            <Text className="text-xl font-bold">
              Steps to count fetal kicks
            </Text>
          </View>

          {/* Steps Container */}
          <View className="border border-white rounded-2xl overflow-hidden ">
            {steps.map((step, index) => (
              <View
                key={step.number}
                className={`flex-row h-[72] p-4 items-center ${index % 2 === 0 ? "bg-white" : "bg-[#EFEFEF]"}`}
              >
                <Text className="text-base font-extrabold mr-3">
                  {step.number}.
                </Text>

                <View className="flex-1">
                  <Text className="text-base font-medium">{step.text}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default InfoModal;

import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { KickSession } from "@/Context/sessionContext";

type Props = {
  session: KickSession;
};

const RecordDetailsCard = ({ session }: Props) => {
  return (
    <TouchableOpacity className="w-full bg-white border border-gray-300/30 rounded-xl elevation-[0.5] flex-row justify-between px-3 py-4 items-center">
      <Text className="text-base font-medium">{session.date}</Text>
      <Text className="text-base font-medium">{session.timeTaken}</Text>
    </TouchableOpacity>
  );
};

export default RecordDetailsCard;

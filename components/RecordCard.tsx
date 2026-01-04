import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import RecordDetailsCard from "./RecordDetailsCard";
import { Link, useFocusEffect } from "expo-router";
import { useSession } from "@/Context/sessionContext";

const RecordCard = () => {
  const { sessions, reloadSessions } = useSession();

  useFocusEffect(
    useCallback(() => {
      reloadSessions();
    }, [])
  );

  return (
    <View className="mx-4 flex-1">
      <Link href={"/recordScreen"} asChild>
        <TouchableOpacity className="border border-black my-7 p-5 flex justify-center items-center rounded-full">
          <Text className="text-lg font-semibold">Record Fetal Movement</Text>
        </TouchableOpacity>
      </Link>
      <View className="mb-2">
        <Text className="text-base font-semibold">Past records</Text>
      </View>
      <FlatList
        data={sessions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 6,
          paddingBottom: 15,
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-gray-500 text-center mt-10">
            No records yet. Start one!
          </Text>
        }
        renderItem={({ item }) => {
          return <RecordDetailsCard session={item} />;
        }}
      />
    </View>
  );
};

export default RecordCard;

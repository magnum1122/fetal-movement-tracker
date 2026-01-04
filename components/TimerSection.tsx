import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSession } from "@/Context/sessionContext";
import { formatReadableDate } from "@/utils/date";

const TimerSection = () => {
  const route = useRouter();
  const { addSession } = useSession();

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elaspedTime, setElaspedTime] = useState(0);
  const intervalIdRef = useRef<undefined | number>(undefined);
  const startTimerRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElaspedTime(Date.now() - startTimerRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimerRef.current = Date.now() - elaspedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElaspedTime(0);
    setIsRunning(false);
  }

  const handleToggle = () => {
    if (isRunning) {
      stop();
    } else {
      start();
    }
  };

  function formatTime() {
    let minutes: number | string = Math.floor((elaspedTime / (1000 * 60)) % 60);
    let seconds: number | string = Math.floor((elaspedTime / 1000) % 60);

    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  const handleSave = async () => {
    const now = new Date();
    const date = formatReadableDate(now);
    const timeTaken = formatTime();

    await addSession(date, timeTaken);

    reset();
    route.back();
  };

  return (
    <>
      {/* Timer Counter */}
      <View className="w-full mx-auto flex mt-6 justify-center items-center">
        <View className="w-[270] h-[160] bg-white/40 flex justify-center items-center rounded-[65] border-4 border-white relative">
          <View className=" flex justify-center items-center w-[240] h-[135] bg-white/50 rounded-[60] border-white border-4">
            <View className=" flex justify-center items-center w-[205] h-[110] bg-white/60 rounded-[60] border-white border-4">
              <Text className=" text-6xl font-bold text-[#EC523D] ">
                {formatTime()}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Play Pause Button */}
      <View className=" size-20 bg-white self-center mt-14 rounded-full flex items-center justify-center">
        <TouchableOpacity onPress={handleToggle}>
          <Ionicons
            name={isRunning ? "square" : "play"}
            size={50}
            className={`${isRunning ? "ml-0" : "ml-2"}`}
          />
        </TouchableOpacity>
      </View>

      {/* Save Button */}
      <TouchableOpacity
        onPress={handleSave}
        className="w-[90%] bg-white h-16 mx-auto mt-11 rounded-full border flex items-center justify-center"
      >
        <Text className=" text-xl font-semibold ">Save</Text>
      </TouchableOpacity>
    </>
  );
};

export default TimerSection;

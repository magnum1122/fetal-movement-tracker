import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DFMCard from "../components/DFMCard";
import Header from "../components/HomeHeader";
import RecordCard from "../components/RecordCard";

export default function Home() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      className="flex-1 bg-white"
    >
      <Header />
      <DFMCard />
      <RecordCard />
    </View>
  );
}

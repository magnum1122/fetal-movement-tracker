import { Stack } from "expo-router";
import "./global.css";
import { ModalProvider } from "@/Context/modalContext";
import { SessionProvider } from "@/Context/sessionContext";

export default function RootLayout() {
  return (
    <SessionProvider>
      <ModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="recordScreen"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ModalProvider>
    </SessionProvider>
  );
}

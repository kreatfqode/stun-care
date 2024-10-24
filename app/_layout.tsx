import { appQueryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <QueryClientProvider client={appQueryClient}>
      <PaperProvider theme={MD3LightTheme}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
      </PaperProvider>
    </QueryClientProvider>
  );
}

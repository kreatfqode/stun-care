import { InfantForm } from "@/features/screening/components/section/infant-form";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreeningPage = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <InfantForm />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 20,
  },
});

export default ScreeningPage;

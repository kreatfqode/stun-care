import * as React from "react";

import { InfantForm } from "@/features/screening/components/section/infant-form";
import { StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Stepper from "react-native-stepper-ui";
import { ScreeningResults } from "@/features/screening/components/section/screening-results";
import { ScreeningForm } from "@/features/screening/components/section/screening-form";

const ScreeningPage = () => {
  const [active, setActive] = React.useState(0);

  const content = [<InfantForm />, <ScreeningForm />, <ScreeningResults />];

  return (
    <PaperProvider>
      <SafeAreaView style={styles.safeArea}>
        <Stepper
          wrapperStyle={styles.stepWrapperStyle}
          buttonStyle={styles.buttonStyle}
          buttonTextStyle={styles.buttonTextStyle}
          active={active}
          content={content}
          onBack={() => setActive(p => p - 1)}
          onFinish={() => alert("Finish")}
          onNext={() => setActive(p => p + 1)}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    paddingHorizontal: 24,
    borderRadius: 9999,
  },
  buttonTextStyle: {
    fontSize: 16,
    textAlign: "center",
  },
  stepWrapperStyle: {
    paddingTop: 12,
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  safeArea: {
    paddingHorizontal: 20,
  },
});

export default ScreeningPage;

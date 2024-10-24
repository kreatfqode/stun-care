import { Button, PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreeningPage = () => {
  return (
    <PaperProvider>
      <SafeAreaView>
        <Button>Hello</Button>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default ScreeningPage;

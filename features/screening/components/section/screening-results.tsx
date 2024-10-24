import { View } from "react-native";
import { ActivityIndicator, Card, MD2Colors, Text } from "react-native-paper";
import { useCheckUp } from "../../queries/check-up-query";
import { useScreeningStore } from "../../stores/screening-store";
import { getScreeningBody } from "../../utils/get-screening-body";

export const ScreeningResults = () => {
  const { infant, screening } = useScreeningStore();

  const { data, isLoading } = useCheckUp({
    screeningData: getScreeningBody(infant, screening),
  });

  return (
    <View>
      {isLoading || !data ? (
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      ) : (
        <Card>
          <Card.Title title="Hasil Screening" />
          <Card.Content>
            <Text variant="bodyMedium">{data.head_circumference}</Text>
            <Text variant="bodyMedium">{data.height}</Text>
            <Text variant="bodyMedium">{data.recomendation}</Text>
            <Text variant="bodyMedium">{data.weight}</Text>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

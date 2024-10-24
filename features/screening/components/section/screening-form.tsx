import * as React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useScreeningStore } from "../../stores/screening-store";

export const ScreeningForm = () => {
  const { screening, updateScreening } = useScreeningStore();

  return (
    <ScrollView>
      <View>
        {/* Body Measurements Section */}
        <View style={styles.fieldsSection}>
          <Text variant="titleLarge" style={styles.title}>
            Pengukuran Badan
          </Text>

          <TextInput
            mode="outlined"
            keyboardType="numeric"
            label="Lingkar Kepala (cm)"
            value={screening.lingkar_kepala.toString()}
            onChangeText={text =>
              updateScreening({
                ...screening,
                lingkar_kepala: isNaN(parseFloat(text)) ? 0 : parseFloat(text),
              })
            }
          />
          <TextInput
            mode="outlined"
            keyboardType="numeric"
            label="Berat Badan (kg)"
            value={screening.berat_badan.toString()}
            onChangeText={text =>
              updateScreening({
                ...screening,
                berat_badan: isNaN(parseFloat(text)) ? 0 : parseFloat(text),
              })
            }
          />
        </View>

        {/* ASI Section */}
        {/* <View style={styles.asiSection}>
          <Text variant="titleLarge" style={styles.title}>
            ASI
          </Text>
          <Dropdown
            label="Jenis Asi"
            mode="outlined"
            value={screeningData.asiType}
            onSelect={text => handleInputChange("asiType", text as Asi)}
            options={asiList.map(asi => ({ value: asi, label: asi }))}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 12,
  },

  asiSection: {
    marginTop: 44,
  },

  aiSection: {
    marginTop: 20,
  },

  fieldsSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});

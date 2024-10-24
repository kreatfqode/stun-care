import * as React from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, TextInput, Checkbox } from "react-native-paper";
import MonthPicker from "react-native-month-year-picker";
import { asiList } from "../../constants/screening-constants";
import { Dropdown } from "react-native-paper-dropdown";
import { useScreeningStore } from "../../stores/screening-store";

export const InfantScreeningForm = () => {
  const { monthlyScreenings, updateScreening } = useScreeningStore();

  const selectedIndex = 0;
  const screeningData = monthlyScreenings[selectedIndex];
  const screeningDataDate = new Date(screeningData?.date ?? Date.now());

  const [showPicker, setShowPicker] = React.useState(false);
  const handleShowPicker = React.useCallback(
    (value: boolean) => setShow(value),
    [],
  );
  const handleMonthChange = React.useCallback(() => {}, []);

  return (
    <ScrollView>
      <View>
        {/* Select Month Section */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Text>Pilih Bulan & Tahun:</Text>
          <Button onPress={() => setShowPicker(true)}>
            {screeningDataDate.toLocaleDateString()}
          </Button>
        </View>

        {/* <MonthPicker
          selectedDate={screeningDataDate}
          onMonthChange={handleMonthChange}
          minimumDate={new Date(2000, 0)}
          maximumDate={new Date(2100, 11)}
        /> */}

        {/* Body Measurements Section */}
        <View>
          <Text style={{ fontWeight: "bold" }}>Pengukuran Badan</Text>
          <TextInput
            label="Berat Badan Saat Lahir (kg)"
            value={birthWeight}
            onChangeText={text =>
              handleDropdownChange(setBirthWeight, {
                name: "birthWeight",
                value: text,
              })
            }
            keyboardType="numeric"
          />
          <TextInput
            label="Lingkar Tangan Atas (cm)"
            value={upperArmCircumference}
            onChangeText={text =>
              handleDropdownChange(setUpperArmCircumference, {
                name: "upperArmCircumference",
                value: text,
              })
            }
            keyboardType="numeric"
          />
          <TextInput
            label="Lingkar Kepala (cm)"
            value={headCircumference}
            onChangeText={text =>
              handleDropdownChange(setHeadCircumference, {
                name: "headCircumference",
                value: text,
              })
            }
            keyboardType="numeric"
          />
          <TextInput
            label="Lingkar Badan (cm)"
            value={bodyCircumference}
            onChangeText={text =>
              handleDropdownChange(setBodyCircumference, {
                name: "bodyCircumference",
                value: text,
              })
            }
            keyboardType="numeric"
          />
        </View>

        {/* ASI Section */}
        <View>
          <Text style={{ fontWeight: "bold", marginTop: 24 }}>ASI</Text>
          <Dropdown
            label="Jenis ASI"
            mode="outlined"
            value={asiType}
            onChange={text =>
              handleDropdownChange(setAsiType, { name: "asiType", value: text })
            }
            options={asiList.map(asi => ({ value: asi, label: asi }))}
          />
        </View>

        {/* AI Recommendation Checkbox */}
        <Checkbox.Item
          label="Beri Rekomendasi AI"
          status={willGetAiRecommendation ? "checked" : "unchecked"}
          onPress={() => setWillGetAiRecommendation(!willGetAiRecommendation)}
        />
      </View>
    </ScrollView>
  );
};

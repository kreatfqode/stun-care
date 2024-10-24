import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { genders } from "../../constants/screening-constants";
import { useScreeningStore } from "../../stores/screening-store";
import { Gender } from "../../types/screening-types";
import DatePicker from "react-native-date-picker";

export const InfantForm = () => {
  const { infant, updateInfant } = useScreeningStore();

  return (
    <View>
      <View>
        <Text style={styles.title} variant="titleLarge">
          Bayi
        </Text>

        <View style={styles.fieldsSection}>
          {/* Nama Bayi Input */}
          <TextInput
            mode="outlined"
            label="Nama Bayi"
            value={infant.name}
            onChangeText={name => updateInfant({ ...infant, name })}
          />

          {/* Jenis Kelamin Dropdown */}
          <Dropdown
            label="Jenis Kelamin"
            mode="outlined"
            value={infant.gender}
            onSelect={gender =>
              updateInfant({
                ...infant,
                gender: (gender as Gender) || infant.gender,
              })
            }
            options={genders.map(gender => ({ value: gender, label: gender }))}
          />

          {/* Tanggal Lahir Input */}
          <TextInput
            mode="outlined"
            label="Tanggal Lahir"
            keyboardType="default"
          />

          <DatePicker
            date={new Date(infant.birthDate)}
            onDateChange={date =>
              updateInfant({ ...infant, birthDate: date.toISOString() })
            }
          />

          {/* Berat Badan Saat Lahir Input */}
          <TextInput
            mode="outlined"
            label="Berat Badan Saat Lahir (kg)"
            keyboardType="numeric"
            value={infant.birthWeight.toString()}
            onChangeText={weight =>
              updateInfant({
                ...infant,
                birthWeight: isNaN(Number(weight)) ? 0 : Number(weight),
              })
            }
          />
        </View>
      </View>

      {/* Orang Tua Section */}
      <View style={styles.orangTuaSection}>
        <Text style={styles.title} variant="titleLarge">
          Orang Tua
        </Text>

        <View style={styles.fieldsSection}>
          {/* Nama Ayah Input */}
          <TextInput
            mode="outlined"
            label="Nama Ayah"
            value={infant.fatherName}
            onChangeText={fatherName => updateInfant({ ...infant, fatherName })}
          />

          {/* Nama Ibu Input */}
          <TextInput
            mode="outlined"
            label="Nama Ibu"
            value={infant.motherName}
            onChangeText={motherName => updateInfant({ ...infant, motherName })}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 12,
  },

  orangTuaSection: {
    marginTop: 44,
  },

  fieldsSection: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
});

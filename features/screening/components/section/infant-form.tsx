import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-paper-dropdown";
import { genders } from "../../constants/screening-constants";
import { useScreeningStore } from "../../stores/screening-store";
import { Gender } from "../../types/screening-types";

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
            value={infant.jenis_kelamin}
            onSelect={gender =>
              updateInfant({
                ...infant,
                jenis_kelamin: (gender as Gender) || infant.jenis_kelamin,
              })
            }
            options={genders.map(gender => ({ value: gender, label: gender }))}
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
                birthWeight: isNaN(parseFloat(weight)) ? 0 : parseFloat(weight),
              })
            }
          />

          {/* Umur bulan Input */}
          <TextInput
            mode="outlined"
            label="Umur (bulan)"
            keyboardType="numeric"
            value={infant.umur_bulan.toString()}
            onChangeText={weight =>
              updateInfant({
                ...infant,
                umur_bulan: isNaN(parseInt(weight)) ? 0 : parseInt(weight),
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
          <TextInput
            mode="outlined"
            label="Nama Ayah"
            value={infant.fatherName}
            onChangeText={fatherName => updateInfant({ ...infant, fatherName })}
          />

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

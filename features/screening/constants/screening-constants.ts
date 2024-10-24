import {
  Asi,
  Gender,
  Infant,
  InfantScreening,
  MeasurementMethod,
} from "../types/screening-types";

export const defaultInfantData: Infant = {
  name: "",
  motherName: "",
  gender: "Laki-laki",
  fatherName: "",
  birthDate: new Date().toISOString(),
  birthWeight: 0,
};

export const defaultInfantScreeningData: InfantScreening = {
  date: new Date().toISOString(),
  asiType: "Asi campur",
  bodyCircumference: 0,
  headCircumference: 0,
  measurement: "Berdiri",
  upperArmCircumference: 0,
};

export const asiList: Asi[] = ["Asi eksklusif", "Asi campur"];
export const genders: Gender[] = ["Laki-laki", "Perempuan"];
export const measurementMethods: MeasurementMethod[] = ["Berdiri", "Telentang"];

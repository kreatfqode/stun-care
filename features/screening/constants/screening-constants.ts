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
  jenis_kelamin: "L",
  fatherName: "",
  umur_bulan: 0,
  birthWeight: 1.0,
};

export const defaultInfantScreeningData: InfantScreening = {
  date: new Date().toISOString(),
  asiType: "Asi campur",
  lingkar_kepala: 1.0,
  berat_badan: 1.0,
  measurement: "Berdiri",
  tinggi_badan: 1.0,
};

export const asiList: Asi[] = ["Asi eksklusif", "Asi campur"];
export const genders: Gender[] = ["L", "P"];
export const measurementMethods: MeasurementMethod[] = ["Berdiri", "Telentang"];

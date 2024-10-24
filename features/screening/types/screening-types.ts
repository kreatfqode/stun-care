export type Asi = "Asi eksklusif" | "Asi campur";
export type Gender = "L" | "P";
export type MeasurementMethod = "Berdiri" | "Telentang";

export type InfantScreening = {
  date: string;
  asiType: Asi;
  measurement: MeasurementMethod;
  tinggi_badan: number;
  lingkar_kepala: number;
  berat_badan: number;
};

export type Infant = {
  name: string;
  jenis_kelamin: Gender;
  umur_bulan: number;
  birthWeight: number;
  fatherName: string;
  motherName: string;
};

export type ScreeningApiBody = {
  umur_bulan: number;
  jenis_kelamin: Gender;
  berat_badan: number;
  tinggi_badan: number;
  lingkar_kepala: number;
};

export type ScreeningApiResponse = {
  head_circumference: string;
  height: string;
  id: number;
  recomendation: string;
  weight: string;
};

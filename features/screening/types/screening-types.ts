export type Asi = "Asi eksklusif" | "Asi campur";
export type Gender = "Laki-laki" | "Perempuan";
export type MeasurementMethod = "Berdiri" | "Telentang";

export type InfantScreening = {
  date: string;
  measurement: MeasurementMethod;
  upperArmCircumference: number;
  headCircumference: number;
  bodyCircumference: number;
  asiType: Asi;
};

export type Infant = {
  name: string;
  gender: Gender;
  birthDate: string;
  birthWeight: number;
  fatherName: string;
  motherName: string;
};

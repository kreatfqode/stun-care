import { Infant, InfantScreening } from "../types/screening-types";

export const getScreeningBody = (
  infant: Infant,
  screeningData: InfantScreening,
) => {
  return {
    berat_badan: screeningData.berat_badan,
    jenis_kelamin: infant.jenis_kelamin,
    lingkar_kepala: screeningData.lingkar_kepala,
    tinggi_badan: screeningData.tinggi_badan,
    umur_bulan: infant.umur_bulan,
  };
};

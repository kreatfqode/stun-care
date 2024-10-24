import { create } from "zustand";
import { Infant, InfantScreening } from "../types/screening-types";
import { defaultInfantData } from "../constants/screening-constants";

export type ScreeningStore = {
  infant: Infant;
  monthlyScreenings: InfantScreening[];
  willGetAiRecommendation: boolean;
  updateInfant: (infant: Infant) => void;
  updateScreening: (screenings: InfantScreening[]) => void;
  updateAiRecommendation: (willGetAiRecommendation: boolean) => void;
};

export const useScreeningStore = create<ScreeningStore>(set => ({
  infant: defaultInfantData,
  monthlyScreenings: [],
  willGetAiRecommendation: false,

  updateInfant: (infant: Infant) => {
    set(state => {
      return {
        ...state,
        infant: { ...state.infant, ...infant },
      };
    });
  },

  updateScreening: (screenings: InfantScreening[]) => {
    set(state => {
      return {
        ...state,
        monthlyScreenings: [...state.monthlyScreenings, ...screenings],
      };
    });
  },

  updateAiRecommendation: (willGetAiRecommendation: boolean) => {
    set({ willGetAiRecommendation });
  },
}));

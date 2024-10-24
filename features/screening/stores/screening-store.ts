import { create } from "zustand";
import { Infant, InfantScreening } from "../types/screening-types";
import {
  defaultInfantData,
  defaultInfantScreeningData,
} from "../constants/screening-constants";

export type ScreeningStore = {
  infant: Infant;
  screening: InfantScreening;
  willGetAiRecommendation: boolean;
  updateInfant: (infant: Infant) => void;
  updateScreening: (screening: InfantScreening) => void;
  updateAiRecommendation: (willGetAiRecommendation: boolean) => void;
};

export const useScreeningStore = create<ScreeningStore>(set => ({
  infant: defaultInfantData,
  screening: defaultInfantScreeningData,
  willGetAiRecommendation: false,

  updateInfant: (infant: Infant) => {
    set(state => {
      return { ...state, infant };
    });
  },

  updateScreening: (screening: InfantScreening) => {
    set(state => {
      return { ...state, screening };
    });
  },

  updateAiRecommendation: (willGetAiRecommendation: boolean) => {
    set({ willGetAiRecommendation });
  },
}));

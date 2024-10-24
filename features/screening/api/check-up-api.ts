import axios from "axios";
import {
  ScreeningApiBody,
  ScreeningApiResponse,
} from "../types/screening-types";

export const checkUp = async (body: ScreeningApiBody) => {
  const endpoint = new URL("/check-up", process.env.EXPO_PUBLIC_API_URL);

  const { data } = await axios.post<ScreeningApiResponse>(
    endpoint.toString(),
    body,
  );

  return data;
};

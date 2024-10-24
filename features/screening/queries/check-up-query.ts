import { queryOptions, useQuery } from "@tanstack/react-query";
import { type QueryConfig } from "@/lib/react-query";
import { checkUp } from "../api/check-up-api";
import { ScreeningApiBody } from "../types/screening-types";

export const CHECK_UP_QUERY_KEY = "menu-data";

export const checkUpQueryOptions = (screeningData: ScreeningApiBody) => {
  return queryOptions({
    staleTime: Infinity,
    queryKey: [CHECK_UP_QUERY_KEY],
    queryFn: () => {
      return checkUp(screeningData);
    },
  });
};

export type UseCheckUpOptions = {
  screeningData: ScreeningApiBody;
  queryConfig?: QueryConfig<typeof checkUpQueryOptions>;
};

export const useCheckUp = ({
  screeningData,
  queryConfig,
}: UseCheckUpOptions) => {
  return useQuery({ ...checkUpQueryOptions(screeningData), ...queryConfig });
};

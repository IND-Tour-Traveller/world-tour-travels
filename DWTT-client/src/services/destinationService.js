import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpointConfig } from "@/utils/constants";

// Define the API service
export const destinationApi = createApi({
  reducerPath: "destinationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getDestinations: builder.query({
      query: () => `${endpointConfig.API_BASE_URL}${endpointConfig.destinations}`,
    }),
  }),
});

export const { useGetDestinationsQuery } = destinationApi;

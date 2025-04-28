import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { destinationApi } from "@/services/destinationService";

export const store = configureStore({
  reducer: {
    [destinationApi.reducerPath]: destinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(destinationApi.middleware),
});

setupListeners(store.dispatch);
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import shoppingListReducer from "./slices/shoppingListSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistedShoppingListReducer = persistReducer(
  { key: "shoppingList", storage },
  shoppingListReducer
);

export const store = configureStore({
  reducer: {
    shoppingList: persistedShoppingListReducer,
  },
});

export const persistor = persistStore(store);

// These types helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

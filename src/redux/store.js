import { configureStore } from "@reduxjs/toolkit";
import  { reducer } from "./reducer";
// import {persistStore, persistReducer} from 'redux-persist';
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key:'persist-root',
//   storage,
//   whitelist: ['addTodoReducer']
// }

// const persistedReducer = persistReducer(persistConfig,reducer)

const store = configureStore({
  reducer: reducer,
});

// export const persistor = persistStore(store)

export default store;
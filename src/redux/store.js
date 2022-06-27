import { configureStore } from "@reduxjs/toolkit";
import  { addReducer } from "../redux/reducers/todo/reducer";
import { newsReducer } from "../redux/reducers/News/NewsSlice";

const store = configureStore({
  newsreducer:newsReducer,
  reducer:addReducer,
});

// const store = configureStore({ 
//   combineReducers:{
//     reducer:addReducer,
//     newsreducer:newsReducer,
//   }
// })

// const store = configureStore({
//   reducer:{
//    addReducer,
//    newsReducer,
//   }
// });


export default store;
import { configureStore } from "@reduxjs/toolkit";
import classroom from "./features/classroom.js";
import counterSlice from "./features/counterSlice.js";
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    classroom,
    counter: counterSlice
  },
});

export default store;


import { configureStore } from "@reduxjs/toolkit";
import classroom from "./features/classroom.js";
import counterSlice from "./features/counterSlice.js";
import user from "./features/user.js";
// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    classroom,
    counter: counterSlice,
    user,
  },
});

export default store;


// counterSlice.ts 文件

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value1: 0,
  title: "redux toolkit pre",
  value2:[1,2,3]
};

// 创建一个 Slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    increment: (state) => {
        console.log(state.value2)
      state.value2 = [33,22,11,0];
      console.log(state.value2)
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { increment, decrement } = counterSlice.actions;

// 默认导出
export default counterSlice.reducer;

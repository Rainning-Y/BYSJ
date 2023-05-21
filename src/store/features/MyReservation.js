// counterSlice.ts 文件

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  
};

// 创建一个 Slice
export const myReservation = createSlice({
  name: "counter",
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    addReservation: (state, { payload }) => {
      state[`${payload.value.id}`]=payload.value
      console.log("预约列表store:",state.value,state.list)
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { addReservation, decrement } = myReservation.actions;

// 默认导出
export default myReservation.reducer;
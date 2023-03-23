import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: {
    userName: "jack",
    studentId: "2019110225",
    sex: true,
  },
};

// 创建一个 Slice
export const user = createSlice({
  name: "counter",
  initialState,
  // 定义 reducers 并生成关联的操作
  reducers: {
    // 定义一个加的方法
    loginUser: (state, { payload }) => {
      console.log("loginUser", payload);
      state.isLogin=payload.isLogin
      state.user = payload.value;
    },
    // 定义一个减的方法
    decrement: (state) => {
      state.value -= 1;
    },
  },
});
// 导出加减的方法
export const { loginUser, decrement } = user.actions;

// 默认导出
export default user.reducer;

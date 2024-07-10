import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userSlice {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: userSlice = {
  isAuthenticated: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    register: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

export const { login, logout, register } = userSlice.actions;
export default userSlice.reducer;

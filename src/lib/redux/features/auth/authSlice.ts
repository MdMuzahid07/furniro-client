import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type tAuthState = {
  user: null;
  token: null | string;
  isLoading: boolean;
};

const initialState: tAuthState = {
  user: null,
  token: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Pick<tAuthState, "user">>) => {
      const { user } = action.payload;
      state.user = user;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false;
      state.token = null;
    },
    setState(state, action: PayloadAction<Partial<tAuthState>>) {
      return { ...state, ...action.payload };
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action?.payload || false;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

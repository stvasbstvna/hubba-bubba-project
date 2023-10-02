import { createSlice } from "@reduxjs/toolkit";
import { registerAccount } from "./accountActions";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    user: null,
    loading: false,
    status: "",
  },
  reducers: {
    clearStatusState: (state) => {
      state.status = "";
    },
    clearUserState: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.loading = false;
        action.payload.navigate("/login");
      })
      .addCase(registerAccount.rejected, (state) => {
        state.loading = false;
        state.status = "error";
      });
  },
});

export const { clearStatusState, clearUserState } = accountSlice.actions;
export default accountSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export interface IThemeState {
  theme: string
}

export type ThemePayload = {
  theme: string
}

const initialState: IThemeState = {
  theme: 'default',
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemePayload>) {
      state.theme = action.payload.theme;
    },
  },
});

export const getTheme = (state: RootState) => state.theme.theme

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
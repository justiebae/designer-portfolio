import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'default'
  },
  reducers: {
    setTheme(state, action) {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
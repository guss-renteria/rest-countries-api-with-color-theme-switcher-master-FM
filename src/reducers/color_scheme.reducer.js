import { createSlice } from '@reduxjs/toolkit';

export const COLOR_SCHEMES = [
  {
    name: 'DARK',
    next: 1,
  },
  {
    name: 'LIGHT',
    next: 0,
  },
]

export const colorSchemeSlice = createSlice({
  name: 'color_scheme',

  initialState: {
    theme: COLOR_SCHEMES[0],
  },

  reducers: {
    toggleTheme: (state) => {
      state.theme = COLOR_SCHEMES[state.theme.next]
    },
  }
})

export const { toggleTheme } = colorSchemeSlice.actions

export default colorSchemeSlice.reducer

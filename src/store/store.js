import { configureStore } from '@reduxjs/toolkit';

import color_scheme from '../reducers/color_scheme.reducer'

export default configureStore({
  reducer: {
    color_scheme,
  }
})

import thunkMiddleware from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';

import color_scheme from '../reducers/color_scheme.reducer'
import countries from '../reducers/countries.reducer'

export default configureStore({
  middleware: [ thunkMiddleware ],
  reducer: {
    color_scheme,
    countries,
  }
})

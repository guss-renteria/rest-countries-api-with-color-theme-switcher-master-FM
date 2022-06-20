import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ELEMENTS_PER_PAGE = 10

export const REGIONS = {
  AMERICA: 'ame',
  EUROPE: 'eur',
  ASIA: 'asi',
  AFRICA: 'afr',
  OCEANIA: 'oce'
}

// [~]
export const setCountries = createAsyncThunk(
  'countries/all',
  async (region) => {
    let data

    if(!region) {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      data = response.data
    }else {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${ region }`)
      data = response.data
    }

    return data
  }
)
//
export const countriesSlice = createSlice({
  name: 'countries',

  initialState: {
    all: [],
    listed: {
      page: 0,
      data: [],
    },
  },

  reducers: {
    addPageList: (state) => {
      const limit = ELEMENTS_PER_PAGE * (state.listed.page + 1)

      if(limit <= state.all.length) {
        state.listed.page += 1
        state.listed.data = state.all.slice(0, limit)
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(setCountries.fulfilled, (state, action) => {
      state.all = action.payload

      state.listed.page = 1
      state.listed.data = action.payload.slice(0, ELEMENTS_PER_PAGE * state.listed.page)
    })
  },
})

export const { addPageList } = countriesSlice.actions

export default countriesSlice.reducer

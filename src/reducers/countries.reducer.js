import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ELEMENTS_PER_PAGE = 12

export const REGIONS = {
  America: 'ame',
  Europe: 'eur',
  Asia: 'asi',
  Africa: 'afr',
  Oceania: 'oce'
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
    resetList: (state) => {
      state.all = []
      state.listed.page = 0
      state.listed.data = []
    },
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

export const { resetList, addPageList } = countriesSlice.actions

export default countriesSlice.reducer

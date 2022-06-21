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
export const fill = createAsyncThunk(
  'countries/fill',
  async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    return response.data
  }
)
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
    
    return {
      data,
      region
    }
  }
)
//
export const countriesSlice = createSlice({
  name: 'countries',

  initialState: {
    all: [],
    list: [],
    listed: {
      filter: undefined,
      page: 0,
      data: [],
    },
  },

  reducers: {
    resetList: (state) => {
      state.list = []
      state.listed.page = 0
      state.listed.data = []
    },
    addPageList: (state) => {
      const limit = ELEMENTS_PER_PAGE * (state.listed.page + 1)

      if(limit <= state.list.length) {
        state.listed.page += 1
        state.listed.data = state.list.slice(0, limit)
      }
    }
  },

  extraReducers: (builder) => {
    builder.addCase(setCountries.fulfilled, (state, action) => {
      state.list = action.payload.data

      state.listed.page = 1
      state.listed.filter = action.payload.region
      state.listed.data = action.payload.data.slice(0, ELEMENTS_PER_PAGE * state.listed.page)
    })
    builder.addCase(fill.fulfilled, (state, action) => {
      state.all = action.payload
    })
  },
})

export const { resetList, addPageList } = countriesSlice.actions

export default countriesSlice.reducer

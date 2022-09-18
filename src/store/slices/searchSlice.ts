import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearch: (state, action) => (state = action.payload),
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;

// store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'navbar',
  initialState: {
    clicked: false,
  },
  reducer: {
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
});

export const { setClicked } = clickSlice.actions;

export default clickSlice.reducer;

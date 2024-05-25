import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface lightDarkState {
  isLightTheme: boolean;
}

// Define the initial state using that type
const initialState: lightDarkState = {
  isLightTheme: true,
};

export const lightDarkSlice = createSlice({
  name: "lightDark",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLightDark: (state, action) => {
      state.isLightTheme = action.payload;
    },
  },
});

export const { setLightDark } = lightDarkSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default lightDarkSlice.reducer;

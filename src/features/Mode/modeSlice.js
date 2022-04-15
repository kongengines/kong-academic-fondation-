import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modes: ["JavaSript Certified", "Python Certified", "C# Certified", "3D Game Developer", "Junior Ingeneer Hollidays Class", "Graphic Designer Certified"]
}

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {}
})

export const selectModes = state => state.mode.modes

export default modeSlice.reducer
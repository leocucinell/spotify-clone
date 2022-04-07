import { createSlice } from "@reduxjs/toolkit";

export const currentSongSlice = createSlice({
    name: "currentSong",
    initialState: {value: {}},
    reducers: {
        setSong: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const {setSong} = currentSongSlice.actions;
export default currentSongSlice.reducer;
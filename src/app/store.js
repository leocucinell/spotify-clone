import { configureStore } from '@reduxjs/toolkit';

//Import reducers here
import userSlice from '../features/userSlice';
import currentSongSlice from '../features/currentSongSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        playingSong: currentSongSlice
    }
});


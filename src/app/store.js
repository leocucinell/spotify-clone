import { configureStore } from '@reduxjs/toolkit';

//Import reducers here
import userSlice from '../features/userSlice';

export const store = configureStore({
    reducer: {
        user: userSlice
    }
});


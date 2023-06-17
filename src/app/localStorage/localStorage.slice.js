import { createSlice } from '@reduxjs/toolkit';

export const localStorageSlice = createSlice({
    name: 'localStorage',
    initialState: {
        token: localStorage.getItem("token")
    },
    reducers: {
        setToken: (state, action) => {
            localStorage.setItem("token", action.payload);
            state.token = action.payload;
        },
        removeToken: (state) => {
            localStorage.removeItem("token");
            state.token = null;
        }
    }
})

export const { setToken, removeToken } = localStorageSlice.actions;

export default localStorageSlice.reducer;

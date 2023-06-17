import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email: "",
        code: ""
    },
    reducers: {
        addEmail: (state, { payload }) => {
            state.email = payload
        },
        addCode: (state, { payload }) => {
            state.code = payload
        }
    }
})

export const { addEmail, addCode } = authSlice.actions;

export default authSlice.reducer;

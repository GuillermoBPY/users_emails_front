import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        show: false,
        message: "",
        variant: "success"
    },
    reducers: {
        showNotification: (_, action) => ({
            show: true, ...action.payload
        }),
        closeNotification: (state) => {
            state.show = false
        }
    }
})

export const { showNotification, closeNotification } = notificationSlice.actions;

export default notificationSlice.reducer;

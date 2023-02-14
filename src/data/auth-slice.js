import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('token') ? true : false
    },
    reducers: {
        login(state) {
                state.isAuthenticated = true;
        },
        logout(state) {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
        }

    }

});

export const authActions = authSlice.actions;

export default authSlice;
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('token') ? true : false,
        userInfo: null
    },
    reducers: {
        login(state,{payload}) {
                state.isAuthenticated = true;
                localStorage.setItem('token', payload.token);
                state.userInfo = payload.user;
        },
        logout(state) {
            localStorage.removeItem('token');
            state.isAuthenticated = false;
        }

    }

});

export const authActions = authSlice.actions;

export default authSlice;
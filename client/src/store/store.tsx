import { configureStore, createSlice } from "@reduxjs/toolkit";

let loginInfo = createSlice({
    name: 'loginInfo',
    initialState: {accessToken: ''},
    reducers : {
        grantAccessToken(state, action) {
            state.accessToken = action.payload
        },
        distroyAccessToken(state) {
            state.accessToken = ''
        }
    }
})

export let { grantAccessToken, distroyAccessToken } = loginInfo.actions

export default configureStore({
    reducer: {
        loginInfo : loginInfo.reducer
    }
})
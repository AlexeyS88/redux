import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUserById} from "./user.actions";
import type {IUser, IUserState} from "../../types/user.type";

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUserById.pending, state => {
            state.isLoading = true
            })
            .addCase(getUserById.fulfilled, (state, action: PayloadAction<IUser>) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(getUserById.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload ?? null
                state.user = null
            })
    }
})
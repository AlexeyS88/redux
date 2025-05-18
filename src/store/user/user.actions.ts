import {createAsyncThunk} from "@reduxjs/toolkit";
import {IUser} from "../../types/user.type";

const users = [
    {id: 1, name: 'Irina'},
    {id: 2, name: 'Kristina'},
    {id: 3, name: 'Marina'},
];

const fetchUserById = (userId: number): Promise<IUser> => {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            const user = users.find(u => u.id === userId)
            if (user) {
                resolve(user)
            } else {
                reject(new Error("Пользователь не найден"))
            }
        }, 1000)
    )
}

export const getUserById = createAsyncThunk<IUser, number, {rejectValue: string}>(
    'users/by-id',
    async (id, {rejectWithValue}) => {
    try {
        return await fetchUserById(id)
    } catch (error) {
       return rejectWithValue((error as Error)?.message)
    }

})
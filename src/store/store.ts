import {combineReducers, configureStore} from '@reduxjs/toolkit';
import favoritesReducer from "./favorites/favorites.slice";
import {userSlice} from "./user/user.slice";
import {api} from "./api/api";
import {createLogger} from "redux-logger";

const logger = createLogger({
    collapsed: false,
})

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [api.reducerPath]: api.reducer
})

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(api.middleware)
        .concat(logger),
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
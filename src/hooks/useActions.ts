import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions} from "../store/favorites/favorites.slice"
import {userSlice} from "../store/user/user.slice";

const rootActions = {
    ...actions,
    ...userSlice.actions,
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

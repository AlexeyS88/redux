import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import {RootState} from "../store/store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector

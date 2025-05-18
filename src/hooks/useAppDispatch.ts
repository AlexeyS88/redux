import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store"; // путь скорректируйте под свой проект

export const useAppDispatch = () => useDispatch<AppDispatch>();
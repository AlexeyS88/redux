import {useTypedSelector} from "./useTypedSelector";

export const useFavorites = () => {
    const favorites = useTypedSelector(state => state.favorites)

    return {favorites}
}
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";
import {getUserById} from "../../store/user/user.actions";

export  default function User() {
    const {user, isLoading, error} = useTypedSelector(state => state.user)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserById(1))
    }, [dispatch]);

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                User: {isLoading ? 'Загрузка...' : user?.name || error || 'Нет данных'}
                </h1>
        </div>
    )
}
export interface IUser {
    id: number;
    name: string;
}

export interface IUserState {
    user: IUser | null,
    isLoading: boolean,
    error: string | null,
}
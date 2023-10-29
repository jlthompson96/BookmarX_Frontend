import { URLs } from "../common/constants";
import { UserTSO } from "../common/types";
import api from "./axios-wrapper";


export const getAllUsers = async () => {
    return await api.get<UserTSO[]>(URLs.ALL_USERS);
}
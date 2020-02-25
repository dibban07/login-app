import { GET_USERS, LOGIN } from './constants/constants';
import { users } from '../constants/table-data';

export function getUsers() {
    return { type: GET_USERS, users };
}

export function getLoginUser(credentials) {
    return { type: LOGIN, details: credentials  }
}
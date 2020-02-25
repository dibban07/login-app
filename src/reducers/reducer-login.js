import { GET_USERS, LOGIN } from '../actions/constants/constants';

export const initialState = {
    userDetails: [],
    loginUserDetail: []
}

const handlers = {
    [GET_USERS]: (state, action) => {
        return {
            ...state,
            userDetails: action.users
        }
    },
    [LOGIN]: (state, action) => {
        return {
            ...state,
            loginUserDetail: state.userDetails.filter(item => item.email === action.details.username)
        }
    }
}

export default function sourcesReducer(state = initialState, action) {
    const handler = handlers[action.type];
    if (!handler) return state;
    return { ...state, ...handler(state, action) };
}
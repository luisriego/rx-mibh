import { types } from "../types/types"


export const login = (iat, exp, username, id) => {
    return {
        type: types.login,
        payload: {
            iat,
            exp,
            username,
            id,
        }
    }
}

export const register = (id, name, email, roles, avatar, active) => {
    return {
        type: types.register,
        payload: {
            id,
            name,
            email,
            roles,
            avatar,
            active,
        }
    }
}

export const callEndpointLogin = (username, password) => {
    return (dispatch) => {      
        setTimeout(() => {
            dispatch(
                login(
                    1608053675,
                    1613237675,
                    'santi@api.com',
                    '9b5d7260-58f7-4f31-95c1-7d80da443e74',
                )
            )
        }, 3500);
    }
}

export const callEndpointRegister = (name, username, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(
                register(
                    '9b5d7260-58f7-4f31-95c1-7d80da443e74',
                    name,
                    'santi@api.com',
                    ['ROLE_USER', 'ROLE_ADMIN'],
                    'https://avatar.png',
                    false,
                )
            );
        }, 1500);
    }
}


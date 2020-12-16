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

export const register = (id, fullname, email, roles, avatar, active) => {
    return {
        type: types.register,
        payload: {
            id,
            fullname,
            email,
            roles,
            avatar,
            active,
        }
    }
}

export const callEndpointLogin = (username, password) => {
    return (dispatch) => {
        console.log(username, password);

        fetch('http://localhost:250/api/v1/users/login_check',{
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "password": password
                }
            ),
            }).then(response => {
                console.log(response.token)
            }).catch(err => {
                console.log(err)
            });
            
        // setTimeout(() => {
        //     dispatch(
        //         login(
        //             1608053675,
        //             1613237675,
        //             'santi@api.com',
        //             '9b5d7260-58f7-4f31-95c1-7d80da443e74',
        //         )
        //     )
        // }, 3500);
    }
}

export const callEndpointRegister = (name, username, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(
                register(
                    '9b5d7260-58f7-4f31-95c1-7d80da443e74',
                    'Santiago Riego',
                    'santi@api.com',
                    ['ROLE_USER', 'ROLE_ADMIN'],
                    'https://avatar.png',
                    false,
                )
            )
        }, 1500);
    }
}


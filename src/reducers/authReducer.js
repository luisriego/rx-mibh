import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                iat: action.payload.iat,
                exp: action.payload.exp,
                username: action.payload.username,
                id: action.payload.id,
            }
            
        case types.logout:
            return {}

        case types.register:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                roles: action.payload.roles,
                avatar: action.payload.avatar,
                active: action.payload.active
            }
    
        default:
            return state;
    }
}
import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                roles: action.payload.roles,
                avatar: action.payload.avatar,
            }
            
        case types.logout:
            return {}
    
        default:
            return state;
    }
}
import { types } from "../types/types"

export const loading = () => {
    return {
        type: types.uiStartLoading,
        payload: {
            loading: true
        }
    }
}

export const finished = () => {
    return {
        
        type: types.uiFinishLoading,
        payload: {
            loading: false
        }
    }
}

export const beginLoading = () => {
    return (dispatch) => {      
        setTimeout(() => {
            dispatch(
                loading()
            )
        }, 200);
    }
}

export const endLoading = () => {
    return (dispatch) => {      
        setTimeout(() => {
            dispatch(
                finished()
            )
        }, 3500);
    }
}

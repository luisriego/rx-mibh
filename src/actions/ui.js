import { types } from "../types/types"

export const startLoading = () => ({
    type: types.uiStartLoading
});

export const finishLoading = () => ({
    type: types.uiFinishLoading
});

// export const loading = () => {
//     return {
//         type: types.uiStartLoading,
//         payload: {
//             loading: true
//         }
//     }
// }

// export const finished = () => {
//     return {
        
//         type: types.uiFinishLoading,
//         payload: {
//             loading: false
//         }
//     }
// }

// export const beginLoading = () => {
//     return (dispatch) => {      
//         setTimeout(() => {
//             dispatch(
//                 loading()
//             )
//         }, 200);
//     }
// }

// export const endLoading = () => {
//     return (dispatch) => {      
//         setTimeout(() => {
//             dispatch(
//                 finished()
//             )
//         }, 3500);
//     }
// }

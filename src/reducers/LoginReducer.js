import { EDAME, SET_NAME, SET_PASSWORD } from "../actions/Items";


// const initialState = {
//     password: '',
//     name: '',
//     edame: false
// }
const initialState = [
    // password = '',
    // name = '',
    // edame = false
]



// export default (state = initialState, action) => {
//     switch (action.type) {
//         case EDAME:
//             return (...state, state.edame: true);
//         case SET_NAME:
//             return (...state, state.name: action.payload);
//         case SET_PASSWORD:
//             return (...state, state.password: action.payload);
//         default:
//             return state
//     }
// }


export default (state = initialState, action) => {
    switch (action.type) {
        case EDAME:
            return [...state, state.edame = false];
        case SET_NAME:
            return [...state, state.nameLo = action.payload];
        case SET_PASSWORD:
            return [...state, state.password = action.payload];
        default:
            return state
    }
}
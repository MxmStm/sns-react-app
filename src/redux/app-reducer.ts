import {getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./store";

const initialInitializedState = {
    initialized: false
}

export type initialInitializedStateType = typeof initialInitializedState

export const appReducer = (state = initialInitializedState, action: initializedAT): initialInitializedStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = (): ThunkType => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
}

type initializedAT = ReturnType<typeof initializedSuccess>
type ThunkType = ThunkAction<void, AppStateType, unknown, initializedAT>

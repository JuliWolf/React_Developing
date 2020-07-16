import * as actionTypes from "./actionTypes";

export const saveResult = (payload) => {
    return {
        ...payload,
        type:  actionTypes.STORE_RESULT
    }
}

export const storeResult = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(payload))
        }, 2000)
    }
}

export const deleteResult = (payload) => {
    return {
        ...payload,
        type:  actionTypes.DELETE_RESULT
    }
}
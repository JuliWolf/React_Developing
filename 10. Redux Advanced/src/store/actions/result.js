import * as actionTypes from "./actionTypes";

export const saveResult = (payload) => {
    return {
        ...payload,
        type:  actionTypes.STORE_RESULT
    }
}

export const storeResult = (payload) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
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
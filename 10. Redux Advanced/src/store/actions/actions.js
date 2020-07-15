export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type:  INCREMENT
    }
}

export const decrement = () => {
    return {
        type:  DECREMENT
    }
}

export const add = (payload) => {
    return {
        ...payload,
        type:  ADD
    }
}

export const subtract = (payload) => {
    return {
        ...payload,
        type:  SUBTRACT
    }
}

export const storeResult = (payload) => {
    return {
        ...payload,
        type:  STORE_RESULT
    }
}

export const deleteResult = (payload) => {
    return {
        ...payload,
        type:  DELETE_RESULT
    }
}
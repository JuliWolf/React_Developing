import * as actionTypes from "./actionTypes";

export const increment = () => {
    return {
        type:  actionTypes.INCREMENT
    }
}

export const decrement = () => {
    return {
        type:  actionTypes.DECREMENT
    }
}

export const add = (payload) => {
    return {
        ...payload,
        type:  actionTypes.ADD
    }
}

export const subtract = (payload) => {
    return {
        ...payload,
        type:  actionTypes.SUBTRACT
    }
}
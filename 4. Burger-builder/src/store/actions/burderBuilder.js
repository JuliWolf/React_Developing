import * as actionTypes from './actionTypes';

export const addIngredient = (payload) => {
    return {
        ...payload,
        type: actionTypes.ADD_INGREDIENT
    }
}

export const removeIngredient = (payload) => {
    return {
        ...payload,
        type: actionTypes.REMOVE_INGREDIENT
    }
}
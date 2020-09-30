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
export const setIngredients = (payload) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ...payload
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS
    }
}
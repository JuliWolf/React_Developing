import React, {useState, useEffect, useCallback} from "react";
import { useDispatch, useSelector } from 'react-redux';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

import Axios from '../../axios-orders';

const BurgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);

    const dispatch = useDispatch();
    const ings = useSelector(state => state.burgerBuilder.ingredients);
    const price = useSelector(state => state.burgerBuilder.totalPrice);
    const error = useSelector(state => state.burgerBuilder.error);
    const isAuthenticated = useSelector(state => state.auth.token !== null);

    const onIngredientAdded = (name) => dispatch(actions.addIngredient({ingredientName: name}));
    const onIngredientRemoved = (name) => dispatch(actions.removeIngredient({ingredientName: name}));
    const onInitIngredients = useCallback((name) => dispatch(actions.initIngredients()), []);
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetAuthRedirectPath = (path) => dispatch(actions.setAuthRedirectPath(path));

    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients]);

    const updatePurchaseState = (ingred) => {
        const ingredients = {
            ...ingred
        };
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0)
        return sum > 0;
    }

    const purchaseHandler =  () => {
        if(isAuthenticated){
            setPurchasing(true);
        }else{
            onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        }

    }
    const purchaseCancelHandler = () => {
        setPurchasing(false);
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push('/checkout');
    }

    const disableInfo = {
        ...ings
    };
    for(let key in disableInfo){
        disableInfo[key] = disableInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = error ? <p>Ingredient can't be loaded...</p> :<Spinner/>

    if(ings){
        burger = (
            <Aux>
                <Burger ingredients={ings}/>
                <BuildControls
                    ingredientAdded={onIngredientAdded}
                    ingredientRemoved={onIngredientRemoved}
                    disabled={disableInfo}
                    price={price}
                    purchasable={updatePurchaseState(ings)}
                    ordered={purchaseHandler}
                    isAuth={isAuthenticated}
                />
            </Aux>
        );
        orderSummary = <OrderSummary
            ingredients={ings}
            purchaseCancel={purchaseCancelHandler}
            purchaseContinued={purchaseContinueHandler}
            totalPrice={price}
        />
    }

    return (
        <Aux>
            <Modal
                show={purchasing}
                modalClosed={purchaseCancelHandler}
            >
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}

export default withErrorHandler(BurgerBuilder, Axios);
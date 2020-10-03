import React, {useState} from 'react';
import {connect} from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input';
import Axios from '../../../axios-orders';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import * as actions from '../../../store/actions/index'
import {updateObject, checkValidity} from "../../../shared/utility";

import classes from './ContactData.css'

const ContactData = props => {
    const [orderForm, setOrderForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your name'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'ZIP Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Your country'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Your e-mail'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: 'select',
            elementConfig: {
                options: [
                    {
                        value: 'fastest',
                        displayValue: 'Fastest'
                    },
                    {
                        value: 'cheapest',
                        displayValue: 'Cheapest'
                    }
                ]
            },
            value: 'fastest',
            validation: {},
            valid: true
        }
    });
    
    const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for(let formElementId in orderForm){
            formData[formElementId] = orderForm[formElementId].value
        }
        const order = {
            ingredients: props.ings,
            price: props.price,
            orderData: formData,
            userId: props.userId
        }

        props.onOrderBurger(order, props.token)
    }

    const inputChangedHandler = (event, id) => {
        const updatedFormElement =  updateObject(orderForm[id], {
            value: event.target.value,
            valid: checkValidity(event.target.value, orderForm[id].validation),
            touched: true
        });
        const updatedOrderForm = updateObject(orderForm, {
            [id]: updatedFormElement
        });
        let formIsValid = true;
        for(id in updatedOrderForm){
            formIsValid = updatedOrderForm[id].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];
    for(let key in orderForm){
        formElementsArray.push({
            id: key,
            config: orderForm[key]
        })
    }

    let form = (
        <form>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    change={(event) => inputChangedHandler(event, formElement.id)}
                />
            ))}
            <Button btnType="Success" disabled={!formIsValid} clicked={orderHandler}>ORDER</Button>
        </form>
    );

    if(props.loading){
        form = <Spinner/>
    }
    return (
        <div className={classes.ContactData}>
            <h4>Enter your contact Data</h4>
            {form}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, Axios));
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 1
        },
        totalPrice: null
    }


    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for(let param of query.entries()){
            if(param[0] !== 'price'){
                ingredients[param[0]] = +param[1];
            }else{
                price = param[1]
            }
        }

        this.setState({ingredients: ingredients, totalPrice: price})
    }

    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCanceled={this.checkoutCanceledHandler}
                />
                <Route path={this.props.match.path + '/contact-data'}
                       render={(props) => <ContactData
                           ingredients={this.state.ingredients}
                           price={this.state.totalPrice}
                           {...props}
                       />}/>
            </div>
        );
    }
}

export default Checkout;
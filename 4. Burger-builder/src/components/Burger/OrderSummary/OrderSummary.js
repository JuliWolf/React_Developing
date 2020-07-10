import React, {Component} from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux/Aux';

class OrderSummary extends Component{
    // This could be a functional component, doesn't have to be a classBased
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[OrderSummary] componentDidUpdate')
    }

    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:
                        {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong> </p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;
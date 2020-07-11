import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Axios from '../../../axios-orders';

import classes from './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Julia',
                address: {
                    street: 'Teststreet',
                    zipCode: '45325',
                    country: 'Russia'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        Axios.post('/orders.json', order)
            .then(response => {
                // console.log(response)
                this.setState({loading: false});
                this.props.history.push('/')
            }).catch(error => {
                this.setState({loading: false});
            })
    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your email"/>
                <input type="text" name="street" placeholder="Street"/>
                <input type="number" name="postal" placeholder="Postal code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
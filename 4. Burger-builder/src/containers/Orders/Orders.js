import React, {Component} from 'react';
import Axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        Axios.get('/orders.json')
            .then(res => {
                console.log(res.data)
                const fetchedOrders = [];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchedOrders, loading: false})
            }).catch(error => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div>
                <Order/>
            </div>
        );
    }
}

export default withErrorHandler(Orders, Axios);
import React, { Component } from 'react';
import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Aux';

class OrderSummary extends Component {
    // componentWillUpdate() {
    //     console.log('[OrderSummary] will update');
    // }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span>
                </li>
            );
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your burger has the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
                
            </Aux>
        );
    };
};
    

export default OrderSummary;
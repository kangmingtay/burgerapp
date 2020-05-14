import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li>{key}: {props.ingredients[key]}</li>
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your burger has the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>

        </Aux>
    );
};

export default orderSummary;
import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            return <li key={key}>{key}: {props.ingredients[key]}</li>
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with following:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total price: {props.price.toFixed(2)}</p>
            <p>Checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </Aux>
    );
}

export default orderSummary;

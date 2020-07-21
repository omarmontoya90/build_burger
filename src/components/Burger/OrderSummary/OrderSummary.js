import React  from 'react'
import Aux    from '../../../hoc/Aux'
import Button from '../../UI/Button/Button'

import './OrderSummary.css'

const orderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients)
    .map( ingredient => {
      return (
        <li key={ingredient}>
	  <span>{ingredient}</span>: {props.ingredients[ingredient]}
	</li>)
    })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button
        buttonType={"danger"}
	clicked={props.purchaseCanceled}
      >CANCEL</Button>
      <Button
        buttonType={"success"}
	clicked={props.purchaseContinued}
      >CONTINUE</Button>
    </Aux>
  )

}

export default orderSummary

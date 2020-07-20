import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import './Burger.css';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredient => {
       return [...Array(props.ingredients[ingredient])].map( (_, i) => {
	 return <BurgerIngredient key={ingredient + i} type={ingredient} />
       })
    })
    .reduce( (arr, element) => {
      return arr.concat(element)
    }, [])

  if (transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!!!</p>
  }

  return (
    <div className='burger'>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;

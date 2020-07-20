import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import './Burger.css';

const burger = (props) => {
  return (
    <div className='burger'>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;

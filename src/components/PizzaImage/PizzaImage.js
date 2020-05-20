import React from 'react';

import styles from './PizzaImage.css'
import image from '../../assets/pizza.jpg'

const PizzaImage = (props) => (
  <div className={styles.PizzaImage}>
    <img src={image} alt="pizza" className={styles.PizzaImg}/>
  </div>
);

export default PizzaImage;

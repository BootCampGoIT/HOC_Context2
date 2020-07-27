import React from 'react';
import css from './CardsItem.module.css';
import HighOrderComponent from '../../hock/Hock';

const CardsItem = ({ product, children }) => {
    return (
        <li data-id={product.id} className={css.productsItem}>
            <img src={product.productImage} className={css.productItemImage} />
            <h2 className={css.productItemName}>{product.productName}</h2>
            <p className={css.productItemPrice}><b>Price: </b>{product.productPrice}</p>
            {children}
            {/* <button type="button" data-button="cartbutton" className={css.button}>Add to cart</button> */}
        </li>
    );
}

export default HighOrderComponent(CardsItem);
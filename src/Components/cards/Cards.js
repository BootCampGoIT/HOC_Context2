import React, { Component } from 'react';
import css from './Cards.module.css';
import CardsItem from './cardsItem/CardsItem';
import { getProducts } from '../../apiServices';
import ContextHOC from '../contextHOC/ContextHOC';



class Cards extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        getProducts()
            .then(data => this.setState({ products: data }));
    }

    deleteCardItem = (id) => {
        this.setState((prevState) => ({
            products: [...prevState.products.filter(item => item.id !== id)]
        }))
    }

    render() {
        const { products } = this.state;
        return (
            <div className={css.cardsWrapper}>
                <ul className={css.productsList} style={this.props.style}>
                    {products.map(product => <CardsItem key={product.id} product={product} deleteCardItem={this.deleteCardItem} />)}
                </ul>
            </div>
        );
    }
}

export default ContextHOC(Cards);
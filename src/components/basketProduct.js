import React, { Component } from 'react';

class BasketProduct extends Component {
    state = {  }
    render() { 
        const { product } = this.props
        return ( 
            <div id="basket-product">
                <h4>{product.title}</h4>
                <p>{product.price}</p>
            </div>
         );
    }
}
 
export default BasketProduct;
import React, { Component } from 'react';

class ProductItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='product-item'>
                <img className='product-item-image' src={this.props.product['image']} alt='so annoying'/>
                <h4>{this.props.product['title']}</h4>
                <div>£{this.props.product['price']}</div>
            </div>
         );
    }
}
 
export default ProductItem;
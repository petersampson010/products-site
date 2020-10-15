import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductItem extends Component {

    render() { 
        const { product } = this.props
        return ( 
            <div id="product-item" onClick={()=>this.props.openModal(product)}>
                <img className='product-item-image' src={product['image']} alt='so annoying'/>
                <h4>{product['title']}</h4>
                <div>£{product['price']}</div>
            </div>
         );
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
 
export default connect(null, mapDispatchToProps)(ProductItem);
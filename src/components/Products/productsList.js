import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './productItem';

class ProductsList extends Component {
    state = {  }
    render() { 
        return ( 
            <div id='products-list-container'>
                <div id='products-list'>
                    {this.props.products.map(product => <ProductItem product={product}/>)}
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsList);
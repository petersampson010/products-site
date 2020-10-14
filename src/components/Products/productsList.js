import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from './productItem';
import ProductsModal from './ProductsModal';

class ProductsList extends Component {
    // state = { 
    //     modal: false,
    //     product: {
    //         title: '',
    //         price: 0,
    //         colour: '',
    //         hat_type: '',
    //         gender: '',
    //         image: '',
    //         size: '',
    //         bike_type: '',
    //         seats: 0
    //       }
    //  }

    //  openModal = product => {
    //      console.log('hit');
    //     this.setState({
    //         modal: true,
    //         product
    //     })
    //  }

    render() { 
        return ( 
            <div id='products-list-container'>
                <div id='products-list'>
                    {this.props.renderedProducts.map(product => <ProductItem product={product} openModal={this.openModal}/>)}
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        renderedProducts: state.renderedProducts
    }
}

export default connect(mapStateToProps)(ProductsList);
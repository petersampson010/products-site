import React, { Component } from 'react';
// import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProductsModal from './ProductsModal';

class ProductItem extends Component {

    state={
        modal: false
    }

    reverseModal = () => {
        console.log('hit also');
        this.setState({modal: !this.state.modal})

        // console.log("before: " + this.state.modal);
        // this.setState({modal: !this.state.modal});
        // console.log("after: " + this.state.modal);
    }

    render() { 
        const { product } = this.props
        return ( 
            <div id="product-item" onClick={this.state.modal ? null : this.reverseModal}>
                {this.state.modal ? <ProductsModal reverseModal={this.reverseModal} product={product}/> :  null}
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
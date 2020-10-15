import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import { connect } from 'react-redux';
import ProductItem from './productItem';

import { addToBasket } from '../../redux/actions';
import { NavLink } from 'react-router-dom';

const emptyProduct = {
    title: '',
    price: 0,
    colour: '',
    hat_type: '',
    gender: '',
    image: '',
    size: '',
    bike_type: '',
    seats: 0
  }


class ProductsList extends Component {
    state = { 
        modal: false,
        addedToBasket: false,
        product: emptyProduct
     }

    

    openModal = product => {
        this.setState({
            modal: true,
            product
        })
    }

    addToBasket = () => {
        this.setState({...this.state, addedToBasket: true})
        this.props.addToBasket(this.state.product);
    }

    render() { 
        const { product, modal, addedToBasket } = this.state
        return ( 
            <div id='products-list-container'>
                <div id='products-list'>
                    <Modal width="70%" height="60%" visible={modal} onClickAway={() => this.setState({...this.state, modal: false, product: emptyProduct})}>
                        <div id="modal-container">
                            <div id="modal-text">
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </div>
                            <Modal width="20%" height="auto" visible={addedToBasket} onClickAway={() => this.setState({...this.state, addedToBasket: false})}>
                                <NavLink exact to='/basket'>View Items in basket...</NavLink>
                                <button onClick={()=>this.setState({modal: false, addedToBasket: false, product: emptyProduct})}>...or continue shopping</button>
                            </Modal>
                            <div id="modal-image-container">
                                <img src={product.image} alt="ya" id="modal-image"/>
                                <p id="modal-image-text" onClick={this.addToBasket}>Buy Now(with basket image)</p>
                            </div>
                        </div>
                    </Modal>
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

const mapDispatchToProps = dispatch => {
    return {
        addToBasket: product => dispatch(addToBasket(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
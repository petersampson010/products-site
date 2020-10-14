import React, { Component } from 'react';


class ProductsModal extends Component {
    state = {  }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = e => {
        console.log(e.target);
        console.log(e.target.id);
        if (e.target.id!=="modal") {
            console.log("hit");
            this.props.reverseModal();
        }
    }
    
    render() { 
        return ( 
            <div id="modal">
                <h2>{this.props.product.title}</h2>
                <p>Price: {this.props.product.price}</p>
            </div>
         );
    }
}
 
export default ProductsModal;
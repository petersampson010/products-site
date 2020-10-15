import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import NavBar from '../components/navbar';
import BasketProduct from '../components/basketProduct';

class Basket extends Component {
    state = {  }
    componentDidMount() {
        console.log(this.props.basket)
    }
    render() { 
        return ( 
            <div>
                <Header/>
                <NavBar/>
                {this.props.basket.map(prod => <BasketProduct product={prod}/>)}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        basket: state.basket
    }
}
 
export default connect(mapStateToProps)(Basket);
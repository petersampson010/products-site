import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import NavBar from '../components/navbar';
import ProductsList from '../components/Products/productsList';
import SearchBar from '../components/searchBar';
import { setProducts } from '../redux/actions';

class Products extends Component {

    componentDidMount() {
        console.log('http://localhost:3000/' + this.props.sitePage)
        fetch('http://localhost:3000/' + this.props.sitePage)
        .then(res => res.json())
        .then(data => this.props.setProducts(data))
      }

    render() { 
        return ( 
            <div>
                <Header/>
                <NavBar/>
                <SearchBar/>
                <ProductsList/>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
      sitePage: state.sitePage,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setProducts: products => dispatch(setProducts(products))
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(Products);
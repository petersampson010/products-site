import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import NavBar from '../components/navbar';
import ProductsList from '../components/Products/productsList';
import SearchBar from '../components/searchBar';

class Products extends Component {

    componentDidMount() {
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
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(Products);
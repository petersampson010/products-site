import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = {
        min: 1000000,
        max: 0,
        searchParams: {
            
        }
    }

    componentDidMount() {
        let sortedPriceArr = this.props.products.map(prod => prod.price).sort(function(a, b){return a-b});
        this.setState({
            min: sortedPriceArr[0],
            max: sortedPriceArr[this.props.products.length-1],
            searchParams: {
                
            }
        })
    }

    // getMinimumPrice = () => {
    //     let prodPriceArray = this.props.products.map(prod => prod.price).sort()
    // }
    render() { 
        return ( 
            <div className='search-bar'>
                <label for='price'>Price</label>
                <input id='price' type='range' min={this.state.min} max={this.state.max} onChange={e=>this.setState/>
            </div>
         );
    }
}

// price   |    gender     |     colour    |    
// bike_type    |   seats    |    fabric    |    size    |    hat_type
 

const mapStateToProps = state => {
    return {
        sitePage: state.sitePage,
        products: state.products
    }
}

export default connect(mapStateToProps)(SearchBar);
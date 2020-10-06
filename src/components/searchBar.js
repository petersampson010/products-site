import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    state = {
        min_price: 0,
        max_price: 1000000,
        min: 0,
        max: 100000,
        fields: {}       
    }

    componentDidMount() {
        console.log(this.props.productFields);
        let sortedPriceArr = this.props.products.map(prod => prod.price).sort(function(a, b){return a-b});
        console.log(sortedPriceArr[this.props.products.length-1])
        this.setState({
                ...this.state,
                min_price: sortedPriceArr[0], 
                max_price: sortedPriceArr[this.props.products.length-1],
                min: sortedPriceArr[0],
                max: sortedPriceArr[this.props.products.length-1]
        })
        this.props.productFields.map(field => {
            this.setState({...this.state, fields: {...this.state.fields, [field]: 21}})
            return 1;
        })
    }

    updateMin = value => {
        if (value<this.state.max) {
            this.setState({...this.state, min: value})
        } else {

        }
    }
    
    updateMax = value => {
        if (value>this.state.min) {
            this.setState({...this.state, max: value})
        } else {

        }
    }

    formProducer = field => {
        switch(field) {
            case "colour":
                let colours = this.props.products.map(prod => prod.colour);
                return <select id="colours" name="colours">
                    {colours.map(c => <option value={c}>{c}</option>)}
                </select>
            default:
                break;
        }
    }

    render() { 
        return ( 
            <form className='search-bar'>
                <label for='min-price'>Minimum Price - {this.state.min}</label>
                <input type='range' min={`${this.state.min_price}`} max={this.state.max_price} onChange={e=>this.updateMin(e.target.value)} value={`${this.state.min}`}/>
                <label for='min-price'>Maximum Price - {this.state.max}</label>
                <input type='range' min={`${this.state.min_price}`} max={this.state.max_price} onChange={e=>this.updateMax(e.target.value)} value={`${this.state.max}`}/>
                {this.state.fields.map(field => this.formProducer(field))}
            </form>
         );
    }
}
 

const mapStateToProps = state => {
    return {
        sitePage: state.sitePage,
        products: state.products,
        productFields: state.productFields
    }
}

export default connect(mapStateToProps)(SearchBar);
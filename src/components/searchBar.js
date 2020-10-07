import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRenderedProducts } from '../redux/actions';

class SearchBar extends Component {
    state = {
        min_price: 0,
        max_price: 1000000,
        min: 0,
        max: 100000,
        fields: {
            colour: null,
            gender: null,
            seats: null,
            bike_type: null,
            fabric: null,
            hat_type: null   
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentDidMount() {
        let sortedPriceArr = this.props.products.map(prod => prod.price).sort(function(a, b){return a-b});
        this.setState({
                ...this.state,
                min_price: sortedPriceArr[0], 
                max_price: sortedPriceArr[this.props.products.length-1],
                min: sortedPriceArr[0],
                max: sortedPriceArr[this.props.products.length-1]
        })
    }

    updateMin = value => {
        if (value<this.state.max) {
            this.setState({...this.state, min: parseInt(value)})
        } else {

        }
    }
    
    updateMax = value => {
        if (value>this.state.min) {
            this.setState({...this.state, max: parseInt(value)})
        } else {

        }
    }

    formProducer = field => {
        console.log('here');
        console.log(field);
        switch(field) {
            case "colour":
                console.log('colour hit');
                let colours = this.props.products.map(prod => prod.colour);
                colours = [...new Set(colours)];
                console.log(colours);
                return <label for="colours">Colour
                    <select id="colours" name="colours" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, colour: e.target.value}})}>
                        <option value="none">None</option>
                        {colours.map(c => <option value={c}>{c}</option>)}
                    </select>
                </label>
            case "gender":
                return <label>Gender
                    <select id="gender" name="gender" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, gender: e.target.value}})}>
                        <option value="none">None</option>
                        <option value='M'>Male</option>
                        <option value='F'>Female</option>
                    </select>
                </label>
            case "size":
                return <label>Size
                    <select id="size" name="size" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, size: e.target.value}})}>
                        <option value="none">None</option>
                        <option value='S'>Small</option>
                        <option value='M'>Medium</option>
                        <option value='L'>Large</option>
                    </select>
                </label>
            case "seats":
                let seats = this.props.products.map(prod => prod.seats);
                seats = [...new Set(seats)];
                return <label>Seats
                    <select id="seats" name="seats" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, seats: e.target.value}})}>
                        <option value="none">None</option>
                        {seats.map(s => <option value={s}>{s}</option>)}
                    </select>
                </label>
            case "bike_type":
                return <label>Bike-Type
                    <select id="bike-type" name="bike-type" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, bike_type: e.target.value}})}>
                        <option value="none">None</option>
                        <option value="r">Road Bike</option>
                        <option value="m">Mountain Bike</option>
                        <option value="e">Electric Bike</option>
                        <option value="h">Hybrid Bike</option>
                    </select>
                </label>
            case "fabric":
                let fabrics = this.props.products.map(prod => prod.fabric);
                fabrics = [...new Set(fabrics)];
                return <label>fabric
                    <select id="fabric" name="fabric" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, fabric: e.target.value}})}>
                        <option value="none">None</option>
                        {fabrics.map(f => <option value={f}>{f}</option>)}
                    </select>
                </label>
            case "hat_type":
                let hats = this.props.products.map(prod => prod.hat_type);
                hats = [...new Set(hats)];
                return <label>fabric
                    <select id="hat-type" name="hat-type" onChange={e=>this.setState({...this.state, fields: {...this.state.fields, hat_type: e.target.value}})}>
                        <option value="none">None</option>
                        {hats.map(f => <option value={f}>{f}</option>)}
                    </select>
                </label>
            default:
                break;
        }
    }

    renderFormComponent = () => {
        return this.props.productFields.map(field => this.formProducer(field))
    }

    searchProducts = e => {
        e.preventDefault();
        let products = this.props.products.filter(prod => (prod.price<=this.state.max&&prod.price>=this.state.min));
        for (let [key, value] of Object.entries(this.state.fields)) {
            if (value && value!=="none") {
                products = products.filter(prod => prod[key]===this.state.fields[key])
            }
        }
        this.props.updateRenderedProducts(products);
    }

    render() { 
        return ( 
            <form className='search-bar'>
                <label for='min-price'>Minimum Price - {this.state.min}</label>
                <input type='range' min={`${this.state.min_price}`} max={`${this.state.max_price}`} onChange={e=>this.updateMin(e.target.value)} value={this.state.min}/>
                <label for='max-price'>Maximum Price - {this.state.max}</label>
                <input type='range' min={`${this.state.min_price}`} max={`${this.state.max_price}`} onChange={e=>this.updateMax(e.target.value)} value={this.state.max}/>
                {this.renderFormComponent()}
                <button onClick={e=>this.searchProducts(e)}>Search Products</button>
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

const mapDispatchToProps = dispatch => {
    return {
        updateRenderedProducts: products => dispatch(updateRenderedProducts(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
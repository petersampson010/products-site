import React, { Component } from 'react';

import Header from '../components/header';
import NavBar from '../components/navbar';
import Carousel from '../components/Carousel/carousel';

class Home extends Component {

    render() { 
        return ( 
            <div>
                <Header/>
                <NavBar/>
                <Carousel/>
            </div>
         );
    }
}

export default Home;
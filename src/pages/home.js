import React, { Component } from 'react';

import Header from '../components/header';
import NavBar from '../components/navbar';
import HorizontalSlider from '../components/horizontalSlider';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header/>
                <NavBar/>
                <HorizontalSlider/>
            </div>
         );
    }
}

export default Home;
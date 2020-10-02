import React, { Component } from 'react';
import CarouselIndicator from './carouselIndicator';
import CarouselSlide from './carouselSlide';
import './carouselSASS.scss';
import { connect } from 'react-redux';



class Carousel extends Component {
    
    constructor(props) {
        super(props);
    
        this.goToSlide = this.goToSlide.bind(this);
    
        this.state = {
          activeIndex: 0
        };
      }
    
      goToSlide(index) {
        this.setState({
          activeIndex: index
        });
      }
      
        render() {
          return (
            <div className="carousel">
      
              <ul className="carousel__slides">
                {this.props.slides[this.props.sitePage].map((slide, index) =>
                  <CarouselSlide
                    key={index}
                    index={index}
                    activeIndex={this.state.activeIndex}
                    slide={slide}
                  />
                )}
              </ul>

        <ul className="carousel__indicators">
          {this.props.slides[this.props.sitePage].map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sitePage: state.sitePage,
    slides: state.carouselSlidesData
  }
}
 
export default connect(mapStateToProps)(Carousel);
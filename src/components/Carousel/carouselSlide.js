import React, { Component } from 'react';

class CarouselSlide extends Component {
    state = {  }
    render() { 
        return ( 
            <li
        className={
          this.props.index === this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <img src={this.props.slide.image} alt={'ya bisch'} className="carousel-slide__image"/>

        <p>
          <strong className="carousel-slide__author">
            {this.props.slide.content}
          </strong>,
          {" "}
          <small className="carousel-slide__source">
            {this.props.slide.content}
          </small>
        </p>
      </li>
         );
    }
}
 
export default CarouselSlide;
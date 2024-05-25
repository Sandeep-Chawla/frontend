import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';

import { config } from "react-spring";

export default class SwiperSlider extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3, // Increase offsetRadius to display two elements on both sides
    showNavigation: false,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
      key: uuidv4(),
      content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
    },
    {
        key: uuidv4(),
        content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
      },
      {
        key: uuidv4(),
        content:<div style={{ background: 'red',height:'300px', width:'400px' }}></div>
      },
      {
        key: uuidv4(),
        content: <div style={{ background: 'red',height:'300px', width:'400px' }}></div>
      }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div className="md:w-10/12 w-11/12 mx-auto shadow-card" style={{ backgroundColor: "rgb(235, 232, 232)" }}>
        <h4 style={{ padding: "40px 40px" }}>Sponsored Listing</h4>
        <div className="md:px-52" style={{ height: "500px" }}>
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            autoplay
            autoplayInterval={3000} // Adjust interval as needed
          />
        </div>
      </div>
    );
  }
}

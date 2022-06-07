import React, { Component } from "react";
import { Card } from "../../components/Card 1"
import { ServiceContainer, Carousel } from "./style"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import prevArrow from "../../assets/prev.png"
import nextArrow from "../../assets/next.png"

const Service: React.ElementType = () => {
     
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <ServiceContainer>
            <title>Nossos <h1>serviços</h1></title>
            <Carousel>
                <Card>    
                </Card>

                <Card>
                </Card>

                <Card>   
                </Card>

                <Card>     
                </Card>

                <Card>
                </Card>
                
                <Card> 
                </Card>
            </Carousel>
    </ServiceContainer>
    )
}


const NextArrow: React.ElementType = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={nextArrow}/>
        </div>
    );
  }
  
const PrevArrow: React.ElementType = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
      <img src={prevArrow}/>
      </div>
    );
  }

  export default Service;
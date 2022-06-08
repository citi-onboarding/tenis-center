import React, { useState , useEffect } from "react";
import { Card } from "../../components/Card 1"
import { ServiceContainer, Carousel, Title, Contrast } from "./style"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {prevArrow, nextArrow} from "../../assets"
import axios from 'axios'


type CardProps ={
    id: number;
    image: string;
    title: string;
    description: string;
    blue: boolean;
}

const NextArrow: React.ElementType = (props) => {
    const { className, onClick} = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={nextArrow}  width="40px" height= "40px"/>
        </div>
    );
  }
  
const PrevArrow: React.ElementType = (props) => {
    const { className, onClick} = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
      <img src={prevArrow} width="40px" height= "40px"/>
      </div>
    );
  }

const Service: React.ElementType = () => {

    const[CarrosselInfo, setCarrosselInfo] = useState<CardProps[]>([])

    async function loadCarrosselInfo() {
        const res = await axios.get('http://localhost:3001/service');
        const { data } = res;
        console.log(data);
        setCarrosselInfo(data);
    }

    useEffect(() => {
        loadCarrosselInfo();
    },[])

    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }

    return (
        <ServiceContainer>
            <Title> Nossos <Contrast> serviços</Contrast></Title>
                <Carousel>
                    <Slider {...settings}>
                      {CarrosselInfo?.map(({image, title, description}, index) => (
                        <Card image={image} title={title} description={description} blue={(index %2 ===0)}/>
                      ))}
                    </Slider>
                </Carousel>
            </ServiceContainer>
    )
}

  export default Service;
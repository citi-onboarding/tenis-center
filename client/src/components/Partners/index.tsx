import React from 'react';
import { LogoPB, Next, Prev } from '../../assets';
import {PartnersBackgroud, Title, Blue, Pai, Filho, CardPartner} from "./styles"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type CardProps = {
    image: string;
};

const PrevArrow: React.ElementType = (props) => {
  const { className, onClick, style } = props;
  return (
      <div
        className={className}
        style={{ ...style, top: "-28px", zIndex:"1", left: "-15px"}}
        onClick={onClick}
      >
        <img src={Prev} alt="" />
      </div>
  );
}

const NextArrow: React.ElementType = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-28px", right: "78px" }}
      onClick={onClick}
    >
      <img src={Next} alt="" />
    </div>
  );
}

const Slide: React.ElementType = () => {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: <PrevArrow/>,
      nextArrow: <NextArrow/>,
    };
    return (
      <Pai>
        <Filho>
          <Slider {...settings}>
            <div>
              <CardPartner>
                <img src={LogoPB} alt=""/>
              </CardPartner>
            </div>
            <div>
              <CardPartner>
                <img src={LogoPB} alt="" />
              </CardPartner>
            </div>
            <div>
              <CardPartner>
                <img src={LogoPB} alt="" />
              </CardPartner>
            </div>
            <div>
              <CardPartner>
                <img src={LogoPB} alt="" />
              </CardPartner>
            </div>
            <div>
              <CardPartner>
                <img src={LogoPB} alt="" />
              </CardPartner>
            </div>
            <div>
              <CardPartner>
                <img src={LogoPB} alt="" />
              </CardPartner>
            </div>
          </Slider>
        </Filho>
      </Pai>
    );
  }

export const Partners: React.ElementType = ({image}: CardProps) => {
    return (
        <PartnersBackgroud>
            <Title>Nossos <Blue>parceiros</Blue></Title>
            <Slide/>
        </PartnersBackgroud>
    );
}
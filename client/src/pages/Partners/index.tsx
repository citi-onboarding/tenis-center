import React, {useEffect,useState} from 'react';
import { LogoPB, Next, Prev } from '../../assets';
import { Card } from '../../components';
import { PartnersBackgroud, Title, Blue, Pai, Filho, CardPartner } from "./styles"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import "./arrows.css"

type CardProps = {
    id: number;
    image: string;
};

const PrevArrow: React.ElementType = (props) => {
  const { className, onClick, style } = props;
  return (
      <div
        className={className}
        style={{ ...style, top: "-28px", zIndex:1, left: "-15px"}}
        onClick={onClick}
      >
        <img src={Prev} alt=""className=''/>
        <div className='circle left'>
          <div className='line'></div>
          <div className='line n2'></div>
        </div>
      </div>
  );
}

const NextArrow: React.ElementType = (props) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{ ...style, top: "-28px",  zIndex:1, right: "140px" }}
      onClick={onClick}
    >
      <img src={Next} alt="" />
      <div className='circle right'>
        <div className='line n3'></div>
        <div className='line n4'></div>
      </div>
    </div>
  );
}


const Slide: React.ElementType = () => {
  const [CarrosselInfo, setCarrosselInfo] = useState<CardProps[]>([]);

  async function loadCarrosselInfo() {
      const res = await axios.get('http://localhost:3001/partners');
      const { data } = res;
      console.log(data);
      setCarrosselInfo(data);
  }

  useEffect(() => {
    loadCarrosselInfo();
  }, [])

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
              {CarrosselInfo?.map(({image}) => (
                  <div>
                    <CardPartner src={image}/>
                  </div>
                ))}
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
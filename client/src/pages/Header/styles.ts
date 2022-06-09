import styled from "styled-components";

export const ParentDiv = styled.div`
    width: 1440px;
    height: 753px;
    
    margin: auto;
    position: relative;
`

export const BackgroundImage = styled.img`
    width: 1440px;
    height: 753px;
`

export const MainTitle = styled.h1`
    width: 600px;
    height: 82px;

    font-family: 'Barlow';
    font-style: italic;
    font-weight: 700;
    font-size: 68px;
    line-height: 82px;

    color: #FFFFFF;
`

export const HeaderDescription = styled.p`
    position: relative;
    top: 16px;
    width: 590px;
    height: 95px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
`

export const TextHolder = styled.div`
    position: absolute;
    left: 120px;
    top: 251px;
`

export const DownArrow = styled.img`
    position: absolute;
    left: 685px;
    top: 660px;
    border: 2px solid white;
    border-radius: 50%;
    padding: 1px 5px 11px 5px;
`

export const ArrowRight = styled.div`

    height: 3.898548640916105px;
    width: 26.355830988298777px;
    
    position: absolute;
    left: 20px;
    bottom: 20px;

    background: #F5F5F5;
    transform: matrix(-0.74, 0.64, 0.7, 0.74, 0, 0);
`

export const ArrowLeft = styled.div`
    height: 3.898548640916105px;
    width: 26.355830988298777px;

    position: absolute;
    left: 4px;
    bottom: 20px;

    background: #F5F5F5;
    transform: matrix(0.74, 0.64, -0.7, 0.74, 0, 0);
`

export const NullDiv = styled.div`
    width: 0px;
    height: 0px;
`

export const Anchor = styled.a`
    width: 50px;
    height: 3.898548640916105px;
    border: 2px solid white;
    border-radius: 50%;
    padding: 1px 5px 11px 5px;
`

export const ArrowHolder = styled.div`
    position: absolute;
    right: 700px;
    bottom: 42px;

    width: 55px;
    height: 55px;
    border: 2.3px solid rgba(255,255,255,0);
    border-radius: 50%;
    margin: 0px;
    
    &:hover{
        border: 2.3px solid rgba(245,245,245,1);
    }

    &:active{
        border: 2.3px solid rgba(245,245,245,1); 
        background: #F5F5F5;

        ${ArrowLeft}{
            background: black;
        }

        ${ArrowRight}{
            background: black;
        }
    }
`

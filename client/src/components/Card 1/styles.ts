import styled from 'styled-components';

type CardProps = {
    background?: string;
};

export const CardContainer = styled.div`
    width: 327px;
    height: 489px;
    margin: 20px;
    
    background: #515151;
    border-radius: 24px;

    display: grid;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    grid-column-start: 1;
    grid-row-start: 1;
`;

export const BlueGradient = styled.div`
    position: relative;
    width: 327px;
    top: 100px;
    height: 288px;
    background: linear-gradient(180deg, #064377 0%, rgba(6, 67, 119, 0.6) 61.98%, rgba(6, 67, 119, 0) 100%);

    border-radius: 24px 24px 0px 0px;
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: inline-grid;
    grid-column-start: 1;
    grid-row-start: 1;
`;

export const GreenGradient = styled.div`
    position: relative;
    width: 327px;
    top: 100px;
    height: 288px;
    background: linear-gradient(180deg, #167706 0%, rgba(22, 119, 6, 0.6) 61.98%, rgba(22, 119, 6, 0) 100%);

    border-radius: 24px 24px 0px 0px;
    transform: matrix(1, 0, 0, -1, 0, 0);
    display: inline-grid;
    grid-column-start: 1;
    grid-row-start: 1;
`;

export const CardImage = styled.img`
    position: relative;
    width: 327px;
    height: 489px;
    border-radius: 24px;

    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%;
    display: inline-grid;
    grid-column-start: 1;
    grid-row-start: 1;
`

export const CardTitle = styled.h1`
    position: relative; 
    width: 180px;
    height: 29px;
    left: 24px;
    top: 70px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: inline-grid;
    grid-column-start: 1;
    grid-row-start: 1;

    color: #FFFFFF;
`

export const CardText = styled.h2`
    position: relative;
    top: 140px;
    left: 24px;
    width: 279px;
    height: 86px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: inline-grid;
    grid-column-start: 1;
    grid-row-start: 1;

    color: #FFFFFF;
`
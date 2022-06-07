import styled from 'styled-components';

export const PartnersBackgroud = styled.div`
    background: #FFFFFF;
    width: 1200px;
    height: 246px;
    margin: auto;
`

export const Title = styled.h1`
    position: relative;
    width: 416px;
    height: 66px;
    left: 0px;
    top: 0px;

    font-family: 'Barlow';
    font-style: italic;
    font-weight: 600;
    font-size: 55px;
    line-height: 66px;

    text-align: left;

    color: #1E1E1E;
`

export const Blue = styled.span`
    font-weight: 900;
    font-size: 55px;
    color: #0476D9;
`

export const Pai = styled.div`
    width: 100%;
    position: relative;
    top: 70px;
    display: flex;
    justify-content: center;
`

export const Filho = styled.div`
    width: 80%;
`

export const CardPartner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    gap: 10px;

    width: 160.66px;
    height: 92px;

    background: #F7F7F7;
    border-radius: 24px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
`
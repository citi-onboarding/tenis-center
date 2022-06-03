import styled from 'styled-components';

type ButtonProps = {
    backgroundColor?: string;
}

export const ButtonComp = styled.div `
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ButtonProps) => props.backgroundColor};
    &:hover{
        background-color: #0262B6;
        letter-spacing: 1px;
    }
`

export const ButtonText = styled.div `
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`

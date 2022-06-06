import styled from 'styled-components';

type ButtonProps = {
    backgroundColor?: string;
    hoverBackground?: string;
}

export const ButtonComp = styled.div `
    border-radius: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${(props: ButtonProps) => props.backgroundColor};
    &:hover{
        background-color: ${(props: ButtonProps) => props.hoverBackground};
    }
`

export const ButtonText = styled.div `
    font-family: 'Barlow';
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`

import styled from 'styled-components'

export const Container = styled.div`
    padding: 80px 60px;
    background: radial-CanvasGradient(circle,rgba(92, 39, 251, 1)0%, rgba(112, 71, 247, 1) 100%) `

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;

`

export const Row = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fill, minmax(230px, 1fr));
    gridgap: 20px;

    @media (max-wigth: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.div`
    color: #fff;
    margin-bottom: 20px;
    front-size: 18px;
    text-descoration: none;

    &:hover {
        color: #ff9c00;
        transition: 200px ease-in;
    }
    `

export const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weigth: bold;
`
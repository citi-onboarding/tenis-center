import { relative } from 'path'
import { createGlobalStyle } from 'styled-component'

export const GlobalStyles = createGlobalStyle `
    html, body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: relative;
        top: 380px;
        background: #ff9c00;
    }
`
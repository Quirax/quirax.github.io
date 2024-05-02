import React from 'react'
import ReactDOM from 'react-dom/client'

import 'material-icons/iconfont/material-icons.css'

import App from './App'
import reportWebVitals from './reportWebVitals'
import './i18n'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'D2Coding';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        margin: 0;
        font-family: D2Coding, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: D2Coding, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

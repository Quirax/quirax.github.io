import { createGlobalStyle } from 'styled-components'

export const headerHeight = 64

export const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: ${headerHeight}px;
        --header-padding: 8px;
        --header-button-width: 128px;
        --header-background: #004087;
        --header-active-background: #0499f5;
        --header-color: white;
        --header-active-color: black;
        --header-button-font-size: 20px;
        --left-menu-background: #005be8;

        --modal-arrow-size: 8px;
        --modal-arrow-color: #005be8;
        --modal-margin: 4px;
        --modal-padding: 4px;
        --modal-radius: 4px;
        --modal-border-width: 1px;
        --modal-border: var(--modal-border-width) solid #005be8;
        --modal-color: white;
        --modal-active-color: black;
        --modal-background: #005be8;
        --modal-active-background: #0499f5;
        --modal-button-width: 128px;
        --modal-button-font-size: 16px;

        --front-background: #004087;
        --front-color: white;
        --front-font-size: 32px;
    }
`

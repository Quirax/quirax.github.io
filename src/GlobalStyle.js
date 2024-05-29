import { createGlobalStyle } from 'styled-components'

export const headerHeight = 64

export const GlobalStyle = createGlobalStyle`
    :root {
        --palette-normal: #004087;
        --palette-normal-text: white;
        --palette-semilight: #005be8;
        --palette-semilight-text: white;
        --palette-light: #0499f5;
        --palette-light-text: black;

        --header-height: ${headerHeight}px;
        --header-padding: 8px;
        --header-button-width: 128px;
        --header-background: var(--palette-normal);
        --header-active-background: var(--palette-light);
        --header-color: var(--palette-normal-text);
        --header-active-color: var(--palette-light-text);
        --header-button-font-size: 20px;
        --left-menu-background: var(--palette-semilight);

        --modal-arrow-size: 8px;
        --modal-arrow-color: var(--palette-semilight);
        --modal-margin: 4px;
        --modal-padding: 4px;
        --modal-radius: 4px;
        --modal-border-width: 1px;
        --modal-border: var(--modal-border-width) solid var(--palette-semilight);
        --modal-color: var(--palette-semilight-text);
        --modal-active-color: var(--palette-light-text);
        --modal-background: var(--palette-semilight);
        --modal-active-background: var(--palette-light);
        --modal-button-width: 128px;
        --modal-button-font-size: 1em;

        --front-background: var(--palette-normal);
        --front-color: var(--palette-normal-text);
        --front-font-size: 4em;

        --content-title-font-size: 3em;
        --content-title-color: var(--palette-normal);
        --content-margin: 16px;

        --final-section-background: var(--palette-normal);
        --final-section-color: var(--palette-normal-text);
    }
`

import styled, { css } from 'styled-components'
import { headerHeight } from '../GlobalStyle'

export const MaterialIcon = ({ children }) => <span className='material-icons'>{children}</span>

export const buttonStyle = css`
    height: 100%;
    padding: var(--header-padding);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    color: inherit;
    text-align: center;
    cursor: pointer;
    background: inherit;
    border: none;
    font: inherit;
    text-decoration: none;
    width: var(--header-height);
`

export const InlinedButton = styled.button(buttonStyle)

export const Section = styled.section`
    margin: var(--content-margin);

    &:before {
        content: "";
        display: block;
        height: ${headerHeight}px; /* fixed header height*/
        margin: calc(var(--content-margin) - ${headerHeight}px) 0 0; /* negative fixed header height */
    }
`

export const H2 = styled.h2`
    font-size: var(--content-title-font-size);
    color: var(--content-title-color);
`

export const Link = styled.a`
    background-color: transparent;
    color: #0969da;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:focus, &:focus-visible {
        outline-offset: 0;
        outline: 2px solid #0969da;
        box-shadow: none;
    }
`

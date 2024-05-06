import styled, { css } from 'styled-components'

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

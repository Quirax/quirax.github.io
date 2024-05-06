import styled from 'styled-components'

const Modal = styled.div`
    position: fixed;
    top: var(--header-height);
    color: black;
    margin-top: calc(var(--modal-arrow-size) + var(--modal-margin));
    border: var(--modal-border);
    border-radius: var(--modal-radius);
    padding: var(--modal-padding);

    &::before {
        content: '';
        border: var(--modal-arrow-size) solid transparent;
        border-bottom: var(--modal-arrow-size) solid var(--modal-arrow-color);
        height: 0;
        width: 0;
        display: block;
        position: absolute;
        top: calc(var(--modal-arrow-size) * -2);
        left: 50%;
        margin-left: calc(var(--modal-arrow-size) * -1);
    }
`

export function LanguageSelector() {
    return <Modal>한국어, English</Modal>
}

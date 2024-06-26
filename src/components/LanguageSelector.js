import styled from 'styled-components'
import { InlinedButton } from './common'
import { withTranslation } from 'react-i18next'
import { useCallback } from 'react'

const Modal = styled.dialog`
    position: fixed;
    color: var(--modal-color);
    margin: 0;
    margin-top: calc(var(--modal-arrow-size) + var(--modal-margin));
    border: var(--modal-border);
    border-radius: var(--modal-radius);
    padding: var(--modal-padding);
    background: var(--modal-background);
    inset-inline: auto;

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

const Button = styled(InlinedButton)`
    display: flex;
    width: var(--modal-button-width);

    font-size: var(--modal-button-font-size);

    &:hover, &:active {
        background: var(--modal-active-background);
        color: var(--modal-active-color);
    }
`

const languageSelectorStyle = {
    top: 'var(--header-height)',
    right: 'calc(var(--header-height) + ((var(--header-button-width) - var(--modal-button-width)) / 2) - (var(--modal-padding) + var(--modal-border-width)))',
}

const languageList = Object.freeze({
    ko: '한국어',
    en: 'English',
})

export const LanguageSelector = withTranslation()(({ i18n, open }) => {
    const onSelectLanguage = useCallback(
        (language) => {
            i18n.changeLanguage(language)
        },
        [i18n]
    )

    return (
        <Modal
            style={languageSelectorStyle}
            open={open}>
            {Object.entries(languageList).map(([code, desc], i) => (
                <Button
                    key={`language-${i}`}
                    onClick={() => onSelectLanguage(code)}>
                    {desc}
                </Button>
            ))}
        </Modal>
    )
})

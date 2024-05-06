import styled from 'styled-components'
import { InlinedButton } from './common'
import { withTranslation } from 'react-i18next'
import { useCallback } from 'react'

const Modal = styled.div`
    position: fixed;
    color: var(--modal-color);
    margin-top: calc(var(--modal-arrow-size) + var(--modal-margin));
    border: var(--modal-border);
    border-radius: var(--modal-radius);
    padding: var(--modal-padding);
    background: var(--modal-background);

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
`

const languageSelectorStyle = {
    top: 'var(--header-height)',
    right: 'calc(var(--header-height) + ((var(--header-button-width) - var(--modal-button-width)) / 2) - (var(--modal-padding) + var(--modal-border-width)))',
}

const languageList = Object.freeze({
    ko: '한국어',
    en: 'English',
})

export const LanguageSelector = withTranslation()(({ i18n }) => {
    const onSelectLanguage = useCallback(
        (language) => {
            i18n.changeLanguage(language)
        },
        [i18n]
    )

    return (
        <Modal style={languageSelectorStyle}>
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

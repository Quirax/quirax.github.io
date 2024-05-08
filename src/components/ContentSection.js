import { useTranslation, withTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './MarkdownRenderer'
import styled from 'styled-components'
import { headerHeight } from '../GlobalStyle'

const Section = styled.section`
    margin: var(--content-margin);

    &:before {
        content: "";
        display: block;
        height: ${headerHeight}px; /* fixed header height*/
        margin: calc(var(--content-margin) - ${headerHeight}px) 0 0; /* negative fixed header height */
    }
`

const H2 = styled.h2`
    font-size: var(--content-title-font-size);
    color: var(--content-title-color);
`

export const ContentSection = withTranslation()(({ i18n, t, tReady, title, srcObj, referer, ...props }) => {
    return (
        <Section
            {...props}
            ref={referer}>
            <H2>{title}</H2>
            <MarkdownFileRenderer src={srcObj[i18n.language]} />
        </Section>
    )
})

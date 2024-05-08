import { useTranslation, withTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './MarkdownRenderer'
import styled from 'styled-components'
import { headerHeight } from '../GlobalStyle'

const Section = styled.section`
    &:before {
        content: "";
        display: block;
        height: ${headerHeight}px; /* fixed header height*/
        margin: -${headerHeight}px 0 0; /* negative fixed header height */
    }
`

export const ContentSection = withTranslation()(({ i18n, title, srcObj, referer, ...props }) => {
    return (
        <Section
            {...props}
            ref={referer}>
            <h2>{title}</h2>
            <MarkdownFileRenderer src={srcObj[i18n.language]} />
        </Section>
    )
})

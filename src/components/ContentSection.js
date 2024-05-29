import { withTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './MarkdownRenderer'
import { H2, Section } from './common'

export const ContentSection = withTranslation()(({ i18n, t, tReady, title, srcObj, referer, ...props }) => (
    <Section
        {...props}
        ref={referer}>
        <H2>{title}</H2>
        <MarkdownFileRenderer src={srcObj[i18n.language]} />
    </Section>
))

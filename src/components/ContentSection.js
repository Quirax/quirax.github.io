import { useTranslation, withTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './MarkdownRenderer'

export const ContentSection = withTranslation()(({ i18n, title, srcObj, referer, ...props }) => {
    return (
        <section
            {...props}
            ref={referer}>
            <h2>{title}</h2>
            <MarkdownFileRenderer src={srcObj[i18n.language]} />
        </section>
    )
})

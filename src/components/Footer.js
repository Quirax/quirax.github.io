import { useTranslation } from 'react-i18next'
import { H2, Section } from './common'

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <Section>
                <H2>{t('contact-us')}</H2>
                <ul>
                    <li>
                        GitHub Issues:{' '}
                        <a href='https://github.com/Quirax/quirax.github.io/issues'>Quirax/quirax.github.io</a>
                    </li>
                    <li>
                        {t('email')}: quiraxical <i>at</i> gmail.com ({t('email-instruction')})
                    </li>
                </ul>
            </Section>
            <Section>
                <button>{t('reject-collect-email')}</button>
                <p>&copy; 2024 Quirax Lee. {t('all-rights-reserved')}</p>
                <p>
                    Profile image &copy; 2020{' '}
                    <a
                        href='https://twitter.com/Kim_Zoooin'
                        target='_blank'
                        rel='noreferrer noopener'>
                        Kim Zooin
                    </a>
                    .
                </p>
            </Section>
        </footer>
    )
}

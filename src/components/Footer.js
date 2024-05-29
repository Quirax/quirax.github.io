import { useTranslation } from 'react-i18next'

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <section>
                <h2>{t('contact-us')}</h2>
                <p>
                    GitHub Issues:{' '}
                    <a href='https://github.com/Quirax/quirax.github.io/issues'>Quirax/quirax.github.io</a>
                </p>
                <p>
                    {t('email')}: quiraxical <i>at</i> gmail.com ({t('email-instruction')})
                </p>
            </section>
            <section>
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
            </section>
        </footer>
    )
}

import { useTranslation } from 'react-i18next'
import { H2, Section, InlinedButton } from './common'
import styled from 'styled-components'

const Button = styled(InlinedButton)`
    width: initial;
    padding: 0;
`

const UL = styled.ul`
    padding: 0;
    margin: 0;

    li {
        list-style: none;
    }
`

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer>
            <Section>
                <H2>{t('contact-us')}</H2>
                <UL>
                    <li>
                        GitHub Issues:{' '}
                        <a href='https://github.com/Quirax/quirax.github.io/issues'>Quirax/quirax.github.io</a>
                    </li>
                    <li>
                        {t('email')}: quiraxical <i>at</i> gmail.com ({t('email-instruction')})
                    </li>
                </UL>
            </Section>
            <Section>
                <Button>{t('reject-collect-email')}</Button>
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

import { useTranslation } from 'react-i18next'
import { H2, Section, Link } from './common'
import styled from 'styled-components'

const UL = styled.ul`
    padding: 0;
    margin: 0;

    li {
        list-style: none;
    }
`

const FinalSection = styled.section`
    background: var(--final-section-background);
    color: var(--final-section-color);
    padding: var(--content-margin);
`

const FinalLink = styled(Link)`
    color: var(--final-section-color);

    &:focus, &:focus-visible {
        outline-color: var(--final-section-color);
    }
`

const Details = styled.details`
    width: fit-content;
    padding-left: var(--final-section-detail-margin);

    summary {
        cursor: pointer;
        user-select: none;
        display: block;
        margin-left: calc(var(--final-section-detail-margin) * -1);
    }

    &[open] summary {
        margin-bottom: var(--final-section-detail-margin);
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
                        <Link
                            href='https://github.com/Quirax/quirax.github.io/issues'
                            target='_blank'
                            rel='noreferrer noopener'>
                            Quirax/quirax.github.io
                        </Link>
                    </li>
                    <li>
                        {t('email')}: quiraxical <i>at</i> gmail.com ({t('email-instruction')})
                    </li>
                </UL>
            </Section>
            <FinalSection>
                <Details>
                    <summary>{t('reject-collect-email')}</summary>
                    asdfasdf
                </Details>
                <p>&copy; 2024 Quirax Lee. {t('all-rights-reserved')}</p>
                <p>
                    Profile image &copy; 2020{' '}
                    <FinalLink
                        href='https://twitter.com/Kim_Zoooin'
                        target='_blank'
                        rel='noreferrer noopener'>
                        Kim Zooin
                    </FinalLink>
                    .
                </p>
            </FinalSection>
        </footer>
    )
}

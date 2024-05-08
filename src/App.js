import test_md from './docs/test.md'

import { useTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'
import { Header } from './components/Header'
import { createGlobalStyle } from 'styled-components'
import { FrontSection } from './components/FrontSection'
import { useRef } from 'react'
import { ContentSection } from './components/ContentSection'
import { srcObj } from './i18n'
import { GlobalStyle } from './GlobalStyle'

function App() {
    const profileSection = useRef()

    const { t } = useTranslation()

    return (
        <>
            <GlobalStyle />
            <Header profileSection={profileSection} />
            <main>
                <FrontSection />
                <ContentSection
                    id='profile'
                    referer={profileSection}
                    title={t('profile')}
                    srcObj={srcObj.profile}
                />
                <ContentSection
                    id='portfolio'
                    title={t('portfolio')}
                    srcObj={srcObj.portfolio}
                />
                <ContentSection
                    id='project'
                    title={t('project')}
                    srcObj={srcObj.project}
                />
            </main>
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
        </>
    )
}

export default App

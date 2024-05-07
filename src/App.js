import test_md from './docs/test.md'

import { useTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'
import { ProfileImg } from './components/ProfileImg'
import { Header } from './components/Header'
import { createGlobalStyle } from 'styled-components'
import { FrontSection } from './components/FrontSection'

const GlobalStyle = createGlobalStyle`
    :root {
        --header-height: 64px;
        --header-padding: 8px;
        --header-button-width: 128px;
        --header-background: #004087;
        --header-active-background: #0499f5;
        --header-color: white;
        --header-active-color: black;
        --header-button-font-size: 20px;
        --left-menu-background: #005be8;

        --modal-arrow-size: 8px;
        --modal-arrow-color: #005be8;
        --modal-margin: 4px;
        --modal-padding: 4px;
        --modal-radius: 4px;
        --modal-border-width: 1px;
        --modal-border: var(--modal-border-width) solid #005be8;
        --modal-color: white;
        --modal-active-color: black;
        --modal-background: #005be8;
        --modal-active-background: #0499f5;
        --modal-button-width: 128px;
        --modal-button-font-size: 16px;

        --front-background: #004087;
        --front-color: white;
        --front-font-size: 32px;
    }
`

function App() {
    const { t } = useTranslation()

    return (
        <>
            <GlobalStyle />
            <Header />
            <main>
                <FrontSection />
                <section id='profile'>
                    <h2>{t('profile')}</h2>
                    <MarkdownFileRenderer src={test_md} />
                </section>
                <section id='portfolio'>
                    <h2>{t('portfolio')}</h2>
                    <MarkdownFileRenderer src={test_md} />
                </section>
                <section id='project'>
                    <h2>{t('project')}</h2>
                    <MarkdownFileRenderer src={test_md} />
                </section>
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
                </section>
            </footer>
        </>
    )
}

export default App

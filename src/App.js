import { useTranslation } from 'react-i18next'
import { Header } from './components/Header'
import { FrontSection } from './components/FrontSection'
import { useRef } from 'react'
import { ContentSection } from './components/ContentSection'
import { srcObj } from './i18n'
import { GlobalStyle } from './GlobalStyle'
import { Footer } from './components/Footer'

function App() {
    const profileSection = useRef()

    const { t } = useTranslation()

    return (
        <>
            <GlobalStyle />
            <Header />
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
            <Footer />
        </>
    )
}

export default App

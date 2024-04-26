import { useTranslation } from 'react-i18next'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'

import './App.css'

import test_md from './docs/test.md'
import profile_image from './profile.jpg'

const ProfileImg = () => (
    <img
        src={profile_image}
        alt='킈락의 프로필 이미지'
    />
)

function App() {
    const { t } = useTranslation()

    return (
        <>
            <header>
                <div id='left_header'>
                    <a href='#top'>
                        <ProfileImg />
                    </a>
                    <a href='#profile'>{t('profile')}</a>
                    <a href='#portfolio'>{t('portfolio')}</a>
                    <a href='#project'>{t('project')}</a>
                </div>
                <div id='right_header'>
                    <button>언어 선택</button>
                    <button>맨 위로</button>
                </div>
            </header>
            <main>
                <section>
                    <ProfileImg />
                    <h1>Quirax Lee</h1>
                </section>
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

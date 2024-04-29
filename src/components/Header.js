import { useTranslation } from 'react-i18next'
import { ProfileImg } from './ProfileImg'

import './Header.css'

export function Header({ ...props }) {
    const { t } = useTranslation()

    return (
        <header>
            <div id='left_header'>
                <a href='#top'>
                    <ProfileImg />
                </a>
                <a href='#profile'>
                    <span>{t('profile')}</span>
                </a>
                <a href='#portfolio'>
                    <span>{t('portfolio')}</span>
                </a>
                <a href='#project'>
                    <span>{t('project')}</span>
                </a>
            </div>
            <div id='right_header'>
                <button>
                    <span>언어 선택</span>
                </button>
                <a href='#top'>
                    <span>맨 위로</span>
                </a>
            </div>
        </header>
    )
}

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
                <a href='#profile'>{t('profile')}</a>
                <a href='#portfolio'>{t('portfolio')}</a>
                <a href='#project'>{t('project')}</a>
            </div>
            <div id='right_header'>
                <button>언어 선택</button>
                <button>맨 위로</button>
            </div>
        </header>
    )
}

import { useTranslation } from 'react-i18next'
import profile_image from '../profile.jpg'

export function ProfileImg() {
    const { t } = useTranslation()

    return (
        <img
            src={profile_image}
            alt='킈락의 프로필 이미지'
        />
    )
}

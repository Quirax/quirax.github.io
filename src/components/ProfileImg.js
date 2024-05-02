import { useTranslation } from 'react-i18next'
import profile_image from '../profile.png'
import styled from 'styled-components'

const Img = styled.img`
    height: 100%;
`

export function ProfileImg() {
    const { t } = useTranslation()

    return (
        <Img
            src={profile_image}
            alt={t('profile-img')}
        />
    )
}

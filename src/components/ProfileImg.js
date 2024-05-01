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
            alt='킈락의 프로필 이미지'
        />
    )
}

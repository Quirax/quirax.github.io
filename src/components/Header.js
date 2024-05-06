import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { css } from 'styled-components'

import { ProfileImg } from './ProfileImg'
import { MaterialIcon } from './common'
import { LanguageSelector } from './LanguageSelector'

const StyledHeader = styled.header`
    height: var(--header-height);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background: var(--header-background);
    color: var(--header-color);
`

const Div = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LeftMenus = styled(Div)`
    @media screen and (max-width: 660px) {
        position: fixed;
        top: var(--header-height);
        height: unset;
        flex-direction: column;
        width: 100%;
        display: ${({ open }) => (open ? 'flex' : 'none')};
    }
`

const buttonStyle = css`
    height: 100%;
    padding: var(--header-padding);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    color: inherit;
    text-align: center;
    cursor: pointer;
    background: inherit;
    border: none;
    font: inherit;
    text-decoration: none;
    width: var(--header-height);
`

const Button = styled.button(buttonStyle)

const A = styled.a(buttonStyle)

const interactiveStyle = css`
    width: var(--header-button-width);
    font-size: var(--header-button-font-size);

    &:hover, &:active {
        background: var(--header-active-background);
        color: var(--header-active-color);
    }
`

const Link = styled(A)`
    ${interactiveStyle}

    @media screen and (max-width: 660px) {
        width: 100%;
        background: var(--header-background);
        justify-content: flex-start;
    }
`

const LanguageButton = styled(Button)(interactiveStyle)

const MenuButton = styled(Button)`
    display: none;

    @media screen and (max-width: 660px) {
        display: inline-flex;
    }
`

export function Header({ ...props }) {
    const { t } = useTranslation()

    const [showMenus, setShowMenus] = useState(false)

    useEffect(() => {
        const onClickWindow = (e) => {
            // if (e.defaultPrevented) return
            setShowMenus(false)
        }

        const onResize = () => setShowMenus(false)

        window.addEventListener('click', onClickWindow)
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('click', onClickWindow)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const onClickMenuButton = (e) => {
        e.stopPropagation()
        setShowMenus((t) => !t)
    }

    return (
        <StyledHeader {...props}>
            <Div>
                <MenuButton onClick={onClickMenuButton}>
                    <MaterialIcon>menu</MaterialIcon>
                </MenuButton>
                <A href='#top'>
                    <ProfileImg />
                </A>
                <LeftMenus open={showMenus}>
                    <Link href='#profile'>
                        <span>{t('profile')}</span>
                    </Link>
                    <Link href='#portfolio'>
                        <span>{t('portfolio')}</span>
                    </Link>
                    <Link href='#project'>
                        <span>{t('project')}</span>
                    </Link>
                </LeftMenus>
            </Div>
            <Div>
                <LanguageButton>
                    <span>언어 선택</span>
                    <LanguageSelector />
                </LanguageButton>
                <A href='#top'>
                    <MaterialIcon>keyboard_double_arrow_up</MaterialIcon>
                </A>
            </Div>
        </StyledHeader>
    )
}

import { useTranslation } from 'react-i18next'
import styled, { createGlobalStyle } from 'styled-components'

import { ProfileImg } from './ProfileImg'

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
    }
`

const Button = styled.button`
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

const A = styled.a`
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

const Link = styled(A)`
    width: var(--header-button-width);
    font-size: var(--header-button-font-size);

    &:hover, &:active {
        background: var(--header-active-background);
        color: var(--header-active-color);
    }

    @media screen and (max-width: 660px) {
        width: 100%;
        background: var(--header-background);
        justify-content: flex-start;
    }
`

const LanguageButton = styled(Button)`
    width: var(--header-button-width);
    font-size: var(--header-button-font-size);

    &:hover, &:active {
        background: var(--header-active-background);
        color: var(--header-active-color);
    }
`

const MenuButton = styled(Button)`
    display: none;

    @media screen and (max-width: 660px) {
        display: inline-flex;
    }
`

export function Header({ ...props }) {
    const { t } = useTranslation()

    return (
        <StyledHeader>
            <Div>
                <MenuButton>
                    <span className='material-icons'>menu</span>
                </MenuButton>
                <A href='#top'>
                    <ProfileImg />
                </A>
                <LeftMenus>
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
                </LanguageButton>
                <A href='#top'>
                    <span className='material-icons'>keyboard_double_arrow_up</span>
                </A>
            </Div>
        </StyledHeader>
    )
}

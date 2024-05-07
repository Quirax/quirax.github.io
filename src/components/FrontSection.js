import styled from 'styled-components'
import { ProfileImg as InternalProfileImg } from './ProfileImg'

const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: var(--front-background);
    color: var(--front-color);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Content = styled.div`
    height: 50%;
    text-align: center;
`

const ProfileImg = styled.div.attrs({
    children: <InternalProfileImg />,
})`
    height: calc(100% - var(--front-font-size));
    width: 100%;
    display: inline-block;
`

const H1 = styled.h1`
    margin: 0;
    font-size: var(--front-font-size);
`

export const FrontSection = () => (
    <Section>
        <Content>
            <ProfileImg />
            <H1>Quirax Lee</H1>
        </Content>
    </Section>
)

import './App.css'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'
import test_md from './docs/test.md'
import profile_image from './profile.jpg'

function App() {
    return (
        <>
            <header>
                <div id='left_header'>
                    <img
                        src={profile_image}
                        alt='킈락의 프로필 이미지'
                    />
                    <a href='#front'>Quirax Lee</a>
                    <a href='#profile'>프로필</a>
                    <a href='#footer'>푸터</a>
                </div>
                <div id='right_header'>
                    <button>언어 선택</button>
                    <button>맨 위로</button>
                </div>
            </header>
            <main>
                <section id='front'>
                    <img
                        src={profile_image}
                        alt='킈락의 프로필 이미지'
                    />
                    <h1>Quirax Lee</h1>
                </section>
                <section id='profile'>
                    <MarkdownFileRenderer src={test_md} />
                </section>
            </main>
            <footer id='footer'>
                <section>
                    <h2>연락처</h2>
                    <p>
                        GitHub Issues:{' '}
                        <a href='https://github.com/Quirax/quirax.github.io/issues'>Quirax/quirax.github.io</a>
                    </p>
                    <p>
                        이메일 주소: quiraxical <i>at</i> gmail.com ('at'을 @으로 치환, 공백 제외)
                    </p>
                </section>
                <section>
                    <button>이메일 무단 수집 거부</button>
                    <p>&copy; 2024 Quirax Lee. 모든 권리 보유.</p>
                </section>
            </footer>
        </>
    )
}

export default App

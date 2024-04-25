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
                </section>
                <section id='profile'>
                    <MarkdownFileRenderer src={test_md} />
                </section>
            </main>
            <footer id='footer'>푸터</footer>
        </>
    )
}

export default App

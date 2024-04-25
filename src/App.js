import './App.css'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'
import test_md from './docs/test.md'

function App() {
    return (
        <>
            <header>헤더</header>
            <main>
                <section>처음</section>
                <section>
                    <MarkdownFileRenderer src={test_md} />
                </section>
            </main>
            <footer>푸터</footer>
        </>
    )
}

export default App

import './App.css'
import { MarkdownFileRenderer } from './components/MarkdownRenderer'
import test_md from './docs/test.md'

function App() {
    return <MarkdownFileRenderer src={test_md} />
}

export default App

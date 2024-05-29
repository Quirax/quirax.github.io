import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { githubGist } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const MarkdownStyle = styled.div.attrs({
    className: 'markdown-body',
})`
    font-size: 1rem;
`

const Wrapper = styled.span`
    white-space: pre-wrap;
`

const autoWrapper = (children) =>
    Array(children)
        .flat()
        .map((v, i) => {
            if (typeof v != 'string') return v
            if (v === '\n') return null
            return <Wrapper key={i}>{v}</Wrapper>
        })
        .filter((v) => v !== null)

export const MarkdownRenderer = ({ children }) => (
    <MarkdownStyle>
        <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code: ({ node, children, ...props }) => <code {...props}>{children}</code>,
                pre: ({ node, children, style, ...props }) => {
                    const match = /language-(\w+)/.exec(children.props.className)
                    return match ? (
                        <SyntaxHighlighter
                            language={match[1]}
                            codeTagProps={props}
                            style={githubGist}
                            customStyle={{
                                padding: '',
                                color: '',
                                backgroundColor: '',
                            }}>
                            {String(children.props.children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <pre>{children.props.children}</pre>
                    )
                }, // pre의 child로 code가 생기는 현상 방지
                p: ({ node, children, ...props }) => <p {...props}>{autoWrapper(children)}</p>,
                li: ({ node, children, ...props }) => <li {...props}>{autoWrapper(children)}</li>,
            }}>
            {children}
        </ReactMarkdown>
    </MarkdownStyle>
)

export function MarkdownFileRenderer({ src }) {
    const [contents, setContents] = useState('')

    useEffect(() => {
        fetch(src)
            .then((r) => r.text())
            .then((text) => setContents(text))
    }, [src])

    return <MarkdownRenderer>{contents}</MarkdownRenderer>
}

import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useEffect, useState } from 'react'

const MarkdownStyle = styled.div.attrs({
    className: 'markdown-body',
})`
    font-size: 1rem;
`

const InlineCode = styled.code`
`

const Pre = styled.pre`
    background: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;

    /* text wrapping: https://stackoverflow.com/questions/248011 */
    white-space: pre-wrap;
    word-wrap: break-word;
`

const BlockQuote = styled.blockquote`
    padding: 1rem;
    border: 1px dashed black;
`

function lf2br(str, idx = 0) {
    let ret = str.split('\n').flatMap((v, i) => [v, <br key={idx + i} />])
    ret.pop()
    return ret
}

export const MarkdownRenderer = ({ children }) => (
    <MarkdownStyle>
        <ReactMarkdown
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            rehypePlugins={[rehypeRaw]}
            components={{
                code: ({ node, ...props }) => <InlineCode {...props} />,
                pre: ({ node, children, ...props }) => (
                    <Pre {...props}>
                        <code>{children.props.children}</code>
                    </Pre>
                ), // pre의 child로 code가 생기는 현상 방지
                p: ({ node, children, ...props }) => {
                    let refined_children = children

                    switch (typeof children) {
                        case 'string':
                            refined_children = lf2br(children)
                            break
                        case 'object':
                            if (children instanceof Array) {
                                refined_children = children.flatMap((v, i) =>
                                    typeof v === 'string' ? lf2br(v, i * 10000000) : [v]
                                )
                                break
                            }
                            break
                        default:
                            console.error('Found new type of children of `p` node', children)
                    }

                    return <p {...props}>{refined_children}</p>
                },
                blockquote: ({ node, ...props }) => <BlockQuote {...props} />,
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

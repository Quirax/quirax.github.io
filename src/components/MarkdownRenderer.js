import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`

const InlineCode = styled.code`
`

const Pre = styled.pre`
    background: #e5eaee;
    padding: 2rem;
    line-height: 1.5rem;
    margin: 2rem auto;
`

const BlockQuote = styled.blockquote`
    padding: 1rem;
    border: 1px dashed black;
`

function lf2br(str) {
    let ret = str.split('\n').flatMap((v, i) => [v, <br key={i} />])
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
                                refined_children = children.flatMap((v) => (typeof v === 'string' ? lf2br(v) : [v]))
                                break
                            }
                            break
                        default:
                        // noop
                    }

                    return <p {...props}>{refined_children}</p>
                },
                blockquote: ({ node, ...props }) => <BlockQuote {...props} />,
            }}>
            {children}
        </ReactMarkdown>
    </MarkdownStyle>
)

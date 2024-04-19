import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
`

const InlineCode = styled.code`
    background: yellow;
`

const markdown = `
# Head

**Bold**

Text1
Text2

\`\`\`
function a() { ... }
a()
<p>PPAP</p>
\`\`\`

*Italic*

code \`block\`
it is the \`great\` thing

> quotes
`

function lf2br(str) {
    let ret = str.split('\n').flatMap((v, i) => [v, <br key={i} />])
    ret.pop()
    return ret
}

export const MarkdownRenderer = () => (
    <MarkdownStyle>
        <ReactMarkdown
            components={{
                code: ({ node, ...props }) => <InlineCode {...props} />,
                pre: ({ node, children, ...props }) => <pre {...props}>{children.props.children}</pre>, // pre의 child로 code가 생기는 현상 방지
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
                        default:
                        // noop
                    }

                    return <p {...props}>{refined_children}</p>
                },
            }}>
            {markdown}
        </ReactMarkdown>
    </MarkdownStyle>
)

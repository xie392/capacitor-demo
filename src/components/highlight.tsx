import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.min.css'

interface HighlightProps {
	children: string
	language: string
}

const Highlight: React.FC<HighlightProps> = ({ children, language }) => {
	useEffect(() => {
		hljs.highlightAll()
	}, [])

	return (
		<pre>
			<code className={`hljs language-${language}`}>{children}</code>
		</pre>
	)
}

export default Highlight

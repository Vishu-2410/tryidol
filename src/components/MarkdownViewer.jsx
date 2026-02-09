import React, { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

export default function MarkdownViewer({ file }) {
  const [content, setContent] = useState("")

  useEffect(() => {
    const reader = new FileReader()
    reader.onload = (e) => setContent(e.target.result)
    reader.readAsText(file)
  }, [file])

  return (
    <div style={{ padding: 20 }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

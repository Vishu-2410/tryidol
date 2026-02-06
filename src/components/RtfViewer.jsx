import React, { useEffect, useState } from "react"

export default function RtfViewer({ file }) {
  const [content, setContent] = useState("")

  useEffect(() => {
    const reader = new FileReader()

    reader.onload = (e) => {
      // Basic RTF text cleanup for readable preview
      const text = e.target.result
        .replace(/\\'[0-9a-fA-F]{2}/g, "")
        .replace(/\\[a-z]+\d*/g, "")
        .replace(/[{}]/g, "")

      setContent(text)
    }

    reader.readAsText(file)
  }, [file])

  return (
    <pre
      style={{
        whiteSpace: "pre-wrap",
        padding: "16px",
        border: "1px solid #ddd",
        maxHeight: "400px",
        overflow: "auto",
        fontSize: "14px"
      }}
    >
      {content}
    </pre>
  )
}

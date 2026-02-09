import React, { useEffect, useRef } from "react"
import { renderAsync } from "docx-preview"

export default function DocxViewer({ file }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!file || !ref.current) return

    // docx-preview expects ArrayBuffer
    file.arrayBuffer().then(buffer => {
      renderAsync(buffer, ref.current)
    })
  }, [file])

  return <div ref={ref} style={{ padding: "16px" }} />
}

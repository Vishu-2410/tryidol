import React, { useEffect, useState } from "react"

export default function ImageViewer({ file }) {
  const [src, setSrc] = useState("")

  useEffect(() => {
    const url = URL.createObjectURL(file)
    setSrc(url)

    return () => URL.revokeObjectURL(url)
  }, [file])

  return (
    <img
      src={src}
      alt="preview"
      style={{ maxWidth: "100%", maxHeight: "500px" }}
    />
  )
}

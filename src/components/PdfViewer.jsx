import React, { useEffect, useRef } from "react"
import * as pdfjsLib from "pdfjs-dist"
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url"

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

export default function PdfViewer({ file }) {
  const containerRef = useRef(null)
  const renderIdRef = useRef(0)

  useEffect(() => {
    if (!file) return

    const currentRenderId = ++renderIdRef.current
    containerRef.current.innerHTML = ""

    const loadPdf = async () => {
      try {
        const buffer = await file.arrayBuffer()
        if (currentRenderId !== renderIdRef.current) return

        const pdf = await pdfjsLib.getDocument({ data: buffer }).promise

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (currentRenderId !== renderIdRef.current) return

          const page = await pdf.getPage(pageNum)
          const viewport = page.getViewport({ scale: 1.4 })

          const canvas = document.createElement("canvas")
          const context = canvas.getContext("2d")

          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.style.margin = "0 auto 16px"
          canvas.style.display = "block"

          containerRef.current.appendChild(canvas)

          await page.render({
            canvasContext: context,
            viewport
          }).promise
        }
      } catch (err) {
        console.error(err)
      }
    }

    loadPdf()

    return () => {
      renderIdRef.current++
    }
  }, [file])

  return <div ref={containerRef} />
}

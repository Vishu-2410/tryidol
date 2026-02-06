import PdfViewer from './PdfViewer'
import ExcelViewer from './ExcelViewer'
import DocxViewer from './DocxViewer'
import RtfViewer from './RtfViewer'
import MarkdownViewer from './MarkdownViewer'
import ImageViewer from './ImageViewer'

export default function Viewer({ file, type }) {
  if (!file) return null

  switch (type) {
    case 'pdf': return <PdfViewer file={file} />
    case 'excel': return <ExcelViewer file={file} />
    case 'docx': return <DocxViewer file={file} />
    case 'rtf': return <RtfViewer file={file} />
    case 'markdown': return <MarkdownViewer file={file} />
    case 'image': return <ImageViewer file={file} />
    default: return <p>Unsupported File</p>
  }
}

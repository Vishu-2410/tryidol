import { useState } from 'react'
import FileUploader from './components/FileUploader'
import Viewer from './components/Viewer'
import { getFileType } from './utils/fileType'

function App() {
  const [file, setFile] = useState(null)

  return (
    <>
      {/* <h2>Offline Document Viewer</h2>
      <FileUploader onSelect={setFile} />
      <Viewer file={file} type={file && getFileType(file)} /> */}

<div className="app">
  <div className="header">
    <h1>Offline Document Viewer</h1>
  </div>

  <div className="upload-box">
    Click or Drop a file to view
  </div>

  <div className="viewer">
    <h2>Offline Document Viewer</h2>
      <FileUploader onSelect={setFile} />
      <Viewer file={file} type={file && getFileType(file)} /> 
  </div>
</div>
    </>
  )
}

export default App

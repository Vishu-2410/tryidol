import React, { useEffect, useState } from "react"
import * as XLSX from "xlsx"

export default function ExcelViewer({ file }) {
  const [rows, setRows] = useState([])

  useEffect(() => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const workbook = XLSX.read(e.target.result, { type: "binary" })
      const sheet = workbook.Sheets[workbook.SheetNames[0]]
      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 })
      setRows(data)
    }
    reader.readAsBinaryString(file)
  }, [file])

  return (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ddd",
        padding: "8px",
        fontSize: "14px"
      }}
    >
      {rows.map((row, i) => (
        <div key={i} style={{ whiteSpace: "nowrap" }}>
          {row.join(" | ")}
        </div>
      ))}
    </div>
  )
}

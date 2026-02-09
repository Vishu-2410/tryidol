export default function FileUploader({ onSelect }) {
  return (
    <input
      type="file"
      onChange={(e) => onSelect(e.target.files[0])}
      style={{ marginBottom: 20 }}
    />
  )
}

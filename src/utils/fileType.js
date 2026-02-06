export const getFileType = (file) => {
  const ext = file.name.split('.').pop().toLowerCase()

  if (ext === 'pdf') return 'pdf'
  if (['xls', 'xlsx'].includes(ext)) return 'excel'
  if (ext === 'docx') return 'docx'
  if (ext === 'rtf') return 'rtf'
  if (ext === 'md') return 'markdown'
  if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) return 'image'

  return 'unsupported'
}

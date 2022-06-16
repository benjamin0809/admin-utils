function downloadBlob(text: string, type: string, name: string) {
  const blob = new Blob([text], { type })
  const url = URL.createObjectURL(blob)
  const aLink = document.createElement('a')

  aLink.href = url
  aLink.download = name

  aLink.click()
  URL.revokeObjectURL(url)
}

export default downloadBlob

interface getAbbrProps {
  text: string
  showChars: number
}
export const getAbbr = ({ text = "", showChars = 2 }: getAbbrProps) => {
  const abbr = (text.match(/\b([A-Za-z0-9])/g) || []).join("")
  const abbrOrText = abbr.length < 2 ? text : abbr
  return abbrOrText.substring(0, showChars).toUpperCase()
}

/** Listing imageUrl may be absolute (seed) or /uploads/... from our API. */
export function mediaUrl(url) {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  const base = import.meta.env.VITE_API_URL || ''
  return `${base}${url.startsWith('/') ? url : `/${url}`}`
}

const base = import.meta.env.VITE_API_URL || ''

export function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  if (token) localStorage.setItem('token', token)
  else localStorage.removeItem('token')
}

export async function api(path, options = {}) {
  const token = getToken()
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }
  if (token) headers.Authorization = `Bearer ${token}`

  const res = await fetch(`${base}${path}`, { ...options, headers })
  const text = await res.text()
  let data = null
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      throw new Error('Invalid response from server')
    }
  }
  if (!res.ok) {
    const msg = data?.error || res.statusText
    throw new Error(msg)
  }
  return data
}

/** Multipart upload; do not set Content-Type (browser sets boundary). */
export async function uploadListingImage(file) {
  const token = getToken()
  if (!token) throw new Error('Not signed in')

  const fd = new FormData()
  fd.append('image', file)

  const res = await fetch(`${base}/api/upload`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: fd,
  })

  const text = await res.text()
  let data = null
  if (text) {
    try {
      data = JSON.parse(text)
    } catch {
      throw new Error('Invalid response from server')
    }
  }
  if (!res.ok) {
    throw new Error(data?.error || res.statusText)
  }
  return data
}

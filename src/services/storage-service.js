export const getUserToken = () => {
  if (process.browser) {
    return window.localStorage.getItem('user-token')
  }

  return null
}

export const removeUserToken = () => {
  if (process.browser) {
    return window.localStorage.removeItem('user-token')
  }
  return false
}

export const setUserToken = (token) => {
  if (process.browser) {
    return window.localStorage.setItem('user-token', token)
  }
  return null
}

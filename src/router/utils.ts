export function isUserLoggedIn() {
  return !!(localStorage.getItem('userData') && localStorage.getItem('token'))
}

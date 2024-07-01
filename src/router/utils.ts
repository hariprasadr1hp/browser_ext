export const isUserLoggedIn = () => !!(localStorage.getItem('userData') && localStorage.getItem('token'))

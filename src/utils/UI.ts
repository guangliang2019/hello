export const changeTheme = () => {
  const theme = document.body.getAttribute('arco-theme')
  switch (theme) {
    case 'dark':
      document.body.setAttribute('arco-theme', 'light')
      break;
    default:
      document.body.setAttribute('arco-theme', 'dark')
      break;
  }
}

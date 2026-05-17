
function logout() {

  localStorage.removeItem('usuarioLogado')

  window.location.href = 'login.html'
}

function verPerfil() {

  window.location.href = 'perfil.html'
}
const usuario = JSON.parse(
  localStorage.getItem('usuarioLogado')
)

if (!usuario) {
  window.location.href = 'login.html'
}

document.getElementById('usuario').innerHTML =
  `Bem-vindo, ${usuario.nome}`
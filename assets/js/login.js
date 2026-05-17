
async function login() {

  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value

  const resposta = await fetch(
    `http://localhost:3000/users?email=${email}&senha=${senha}`
  )

  const usuarios = await resposta.json()

  if (usuarios.length === 0) {
    alert('Email ou senha inválidos!')
    return
  }

  // salvar usuário logado
  localStorage.setItem(
    'usuarioLogado',
    JSON.stringify(usuarios[0])
  )

  alert('Login realizado!')

  window.location.href = 'home.html'
}
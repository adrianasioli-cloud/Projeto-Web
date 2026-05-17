
async function cadastrar() {

  const nome = document.getElementById('nome').value
  const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value
  const cidade = document.getElementById('cidade').value
  const estado = document.getElementById('estado').value

  // validação simples
  if (!nome || !email || !senha) {
    alert('Preencha todos os campos!')
    return
  }

  // verificar email existente
  const resposta = await fetch(`http://localhost:3000/users?email=${email}`)
  const usuarios = await resposta.json()

  if (usuarios.length > 0) {
    alert('Email já cadastrado!')
    return
  }

  // criar usuário
  const novoUsuario = {
    nome,
    email,
    senha,
    cidade,
    estado
  }

  await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
  })

  alert('Cadastro realizado com sucesso!')

  window.location.href = './login.html'
}


async function editarPorEmail() {

  const email = document.getElementById('email').value
  const nome = document.getElementById('nome').value
  const senha = document.getElementById('senha').value

  const resposta = await fetch(`http://localhost:3000/users?email=${email}`)
  const usuarios = await resposta.json()

  if (usuarios.length === 0) {
    alert('Usuário não encontrado!')
    return
  }

  const id = usuarios[0].id

  await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, senha })
  })

  alert('Dados atualizados!')
}
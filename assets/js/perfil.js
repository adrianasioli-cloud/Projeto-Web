
async function carregarPerfil() {

  const usuario = JSON.parse(
    localStorage.getItem('usuarioLogado')
  )

  if (!usuario) {
    window.location.href = 'login.html'
    return
  }

  document.getElementById('nome').value = usuario.nome
  document.getElementById('senha').value = usuario.senha
  document.getElementById('cidade').value = usuario.cidade
  document.getElementById('estado').value = usuario.estado
}


async function atualizarPerfil() {

  try {

    const usuario = JSON.parse(
      localStorage.getItem('usuarioLogado')
    )

    if (!usuario) {
      window.location.href = 'login.html'
      return
    }

    const nome = document.getElementById('nome').value
    const senha = document.getElementById('senha').value
    const cidade = document.getElementById('cidade').value
    const estado = document.getElementById('estado').value

    const dadosAtualizados = {
      nome,
      senha,
      cidade,
      estado
    }

    const resposta = await fetch(
      `http://localhost:3000/users/${usuario.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosAtualizados)
      }
    )

    const usuarioAtualizado = await resposta.json()

    localStorage.setItem(
      'usuarioLogado',
      JSON.stringify(usuarioAtualizado)
    )

    alert('Perfil atualizado!')

    window.location.href = './home.html'

  } catch (erro) {

    console.log(erro)

    alert('Erro ao atualizar perfil')
  }
}


async function deletarPerfil() {

  try {

    const usuario = JSON.parse(
      localStorage.getItem('usuarioLogado')
    )

    if (!usuario) {
      window.location.href = 'login.html'
      return
    }

    const confirmar = confirm(
      'Tem certeza que deseja deletar seu perfil?'
    )

    if (!confirmar) {
      return
    }

    await fetch(
      `http://localhost:3000/users/${usuario.id}`,
      {
        method: 'DELETE'
      }
    )

    localStorage.removeItem('usuarioLogado')

    alert('Perfil deletado com sucesso!')

    window.location.href = 'login.html'

  } catch (erro) {

    console.log(erro)

    alert('Erro ao deletar perfil')
  }
}


carregarPerfil()
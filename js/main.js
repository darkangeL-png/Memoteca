import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos()

  const formularioPensamento = document.getElementById('pensamento-form')
  const btnCancelar = document.getElementById('botao-cancelar') 

  formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario)
  btnCancelar.addEventListener('click', apaguarInf)
})

async function manipularSubmissaoFormulario(event) {
  event.preventDefault()
  const id = document.getElementById('pensamento-id').value
  const conteudo = document.getElementById('pensamento-conteudo').value
  const autoria = document.getElementById('pensamento-autoria').value

  try {
    if (id) {
      await api.EditarPensamento({ id, conteudo, autoria }) 
    } else {
      await api.salvarPensamento({ conteudo,autoria })
    }
      ui.renderizarPensamentos();
  } catch {
    alert('Erro ao salvar pensamento')
  }
}

function apaguarInf() {
  ui.apaguarFormulario();
}
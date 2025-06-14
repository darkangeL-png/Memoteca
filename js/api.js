const URL_BASE = "http://localhost:3000";  

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar pensamentos')
      throw error
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao Salvar pensamento')
      throw error
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`)
      return await response.data
    }
    catch {
      alert('Erro ao buscar pensamento')
      throw error
    }
  },

  async EditarPensamento(pensamento) {
    try {
      const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
      return await response.data
    }
    catch {
      alert('Erro ao editar pensamento')
      throw error
    }
  },

  async ExcluirPensamento(id) {
    try {
      const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`)
    }
    catch {
      alert('Erro ao excluir o pensamento')
      throw error
    }
  }
}

export default api    

const API_URL = import.meta.env.VITE_API_URL

export async function obtenerRelojes() {
  const respuesta = await fetch(`${API_URL}/relojes`)

  if (!respuesta.ok) {
    throw new Error('Error al obtener los relojes')
  }

  return respuesta.json()
}

export async function crearReloj(reloj) {
  const respuesta = await fetch(`${API_URL}/relojes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reloj),
  })

  if (!respuesta.ok) {
    throw new Error('Error al crear el reloj')
  }

  return respuesta.json()
}

export async function editarReloj(id, reloj) {
  const respuesta = await fetch(`${API_URL}/relojes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reloj),
  })

  if (!respuesta.ok) {
    throw new Error('Error al editar el reloj')
  }

  return respuesta.json()
}

export async function eliminarReloj(id) {
  const respuesta = await fetch(`${API_URL}/relojes/${id}`, {
    method: 'DELETE',
  })

  if (!respuesta.ok) {
    throw new Error('Error al eliminar el reloj')
  }
}
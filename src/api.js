// MISION 4 - FULL CONTACT FORMS / HUGO COBOS GUTIERREZ INSO3ºB

import { esquemaListaRelojes } from './esquemas' // Para el BONUS de la mision

const API_URL = import.meta.env.VITE_API_URL // Obtiene la direccion de la API desde el archivo .env

// Funcion que obtiene todos los relojes
export async function obtenerRelojes() {
  const respuesta = await fetch(`${API_URL}/relojes`)

  if (!respuesta.ok) {
    throw new Error('Error al obtener los relojes')
  }

  const datos = await respuesta.json()

  // BONUS: Comprueba con Zod si los datos recibidos cumplen el esquema establecido
  const resultado = esquemaListaRelojes.safeParse(datos)

  if (!resultado.success) {
    throw new Error('Los datos recibidos de la API no son validos')
  }

  return resultado.data
}

// Funcion para crear un nuevo reloj
export async function crearReloj(reloj) {
  const respuesta = await fetch(`${API_URL}/relojes`, {
    method: 'POST', // Nuevo registro
    headers: {
      'Content-Type': 'application/json', // En formato json
    },
    body: JSON.stringify(reloj),
  })

  if (!respuesta.ok) {
    throw new Error('Error al crear el reloj')
  }

  return respuesta.json()
}

// Funcion para editar un reloj
export async function editarReloj(id, reloj) {
  const respuesta = await fetch(`${API_URL}/relojes/${id}`, {
    method: 'PUT', // Actualizar el registro
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

// Funcion para eliminar un reloj
export async function eliminarReloj(id) {
  const respuesta = await fetch(`${API_URL}/relojes/${id}`, {
    method: 'DELETE', // Borrar el registro
  })

  if (!respuesta.ok) {
    throw new Error('Error al eliminar el reloj')
  }
}
// MISION 4 - FULL CONTACT FORMS / HUGO COBOS GUTIERREZ INSO3ºB

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query' // TanStack Query
import { // Funciones de la api
  obtenerRelojes,
  crearReloj,
  editarReloj,
  eliminarReloj,
} from './api'

// Hook personalizado
export function useRelojes() {
  const queryClient = useQueryClient()

  // Accede a los relojes
  const consulta = useQuery({
    queryKey: ['relojes'],
    queryFn: obtenerRelojes,
  })

  // Crea reloj
  const crear = useMutation({
    mutationFn: crearReloj,
    // Si la operacion tiene exito, invalida la consulta para actualizar la lista
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  // Editar reloj
  const editar = useMutation({
    mutationFn: ({ id, reloj }) => editarReloj(id, reloj),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  // Eliminar reloj
  const eliminar = useMutation({
    mutationFn: eliminarReloj,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  return { consulta, crear, editar, eliminar }
}

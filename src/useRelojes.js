
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {
  obtenerRelojes,
  crearReloj,
  editarReloj,
  eliminarReloj,
} from './api'

export function useRelojes() {
  const queryClient = useQueryClient()

  const consulta = useQuery({
    queryKey: ['relojes'],
    queryFn: obtenerRelojes,
  })

  const crear = useMutation({
    mutationFn: crearReloj,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  const editar = useMutation({
    mutationFn: ({ id, reloj }) => editarReloj(id, reloj),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  const eliminar = useMutation({
    mutationFn: eliminarReloj,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['relojes'] })
    },
  })

  return { consulta, crear, editar, eliminar }
}

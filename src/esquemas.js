import { z } from 'zod'

export const esquemaReloj = z.object({
  marca: z.string().min(1, 'La marca es obligatoria'),
  modelo: z.string().min(1, 'El modelo es obligatorio'),
  anio: z.coerce.number().min(1900, 'El año no es valido').max(2026, 'El año no es valido'),
  precio: z.coerce.number().min(0, 'El precio no puede ser negativo'),
  movimiento: z.string().min(1, 'El movimiento es obligatorio'),
  material: z.string().min(1, 'El material es obligatorio'),
})

// MISION 4 - FULL CONTACT FORMS / HUGO COBOS GUTIERREZ INSO3ºB

import { z } from 'zod' // Zod

// Esquema de validacion
export const esquemaReloj = z.object({
  marca: z.string().min(1, 'La marca es obligatoria'),
  modelo: z.string().min(1, 'El modelo es obligatorio'),
  anio: z.coerce.number().min(1900, 'El año no es valido').max(2026, 'El año no es valido'),
  precio: z.coerce.number().min(0, 'El precio no puede ser negativo'),
  movimiento: z.string().min(1, 'El movimiento es obligatorio'),
  material: z.string().min(1, 'El material es obligatorio'),
})

// BONUS: Comprueba los datos de cada reloj recibidos de la API
export const esquemaRelojAPI = z.object({
  id: z.union([z.string(), z.number()]),
  marca: z.string(),
  modelo: z.string(),
  anio: z.number(),
  precio: z.number(),
  movimiento: z.string(),
  material: z.string(),
})

export const esquemaListaRelojes = z.array(esquemaRelojAPI)
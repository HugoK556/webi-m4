
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { esquemaReloj } from './esquemas'

function FormularioReloj({ onGuardar, relojEditar, onCancelar }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(esquemaReloj),
    defaultValues: relojEditar || {
      marca: '',
      modelo: '',
      anio: '',
      precio: '',
      movimiento: '',
      material: '',
    },
  })

  function guardar(datos) {
    onGuardar(datos)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(guardar)}>
      <h2>{relojEditar ? 'Editar reloj' : 'Añadir reloj'}</h2>

      <label>Marca</label>
      <input {...register('marca')} />
      {errors.marca && <p>{errors.marca.message}</p>}

      <label>Modelo</label>
      <input {...register('modelo')} />
      {errors.modelo && <p>{errors.modelo.message}</p>}

      <label>Año</label>
      <input type="number" {...register('anio')} />
      {errors.anio && <p>{errors.anio.message}</p>}

      <label>Precio (€)</label>
      <input type="number" step="0.01" {...register('precio')} />
      {errors.precio && <p>{errors.precio.message}</p>}

      <label>Movimiento</label>
      <select {...register('movimiento')}>
        <option value="">Selecciona un movimiento</option>
        <option value="Automatico">Automatico</option>
        <option value="Cuarzo">Cuarzo</option>
        <option value="Manual">Manual</option>
      </select>
      {errors.movimiento && <p>{errors.movimiento.message}</p>}

      <label>Material</label>
      <select {...register('material')}>
        <option value="">Selecciona un material</option>
        <option value="Acero inoxidable">Acero inoxidable</option>
        <option value="Titanio">Titanio</option>
        <option value="Oro">Oro</option>
        <option value="Plata">Plata</option>
        <option value="Ceramica">Ceramica</option>
      </select>
      {errors.material && <p>{errors.material.message}</p>}

      <button type="submit">
        {relojEditar ? 'Guardar cambios' : 'Añadir reloj'}
      </button>

      {relojEditar && (
        <button type="button" onClick={onCancelar}>
          Cancelar
        </button>
      )}
    </form>
  )
}

export default FormularioReloj
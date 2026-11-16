
import { useState } from 'react'
import FormularioReloj from './FormularioReloj'
import ListaRelojes from './ListaRelojes'
import { useRelojes } from './useRelojes'

function App() {
  const { consulta, crear, editar, eliminar } = useRelojes()
  const [relojEditar, setRelojEditar] = useState(null)

  function guardarReloj(datos) {
    if (relojEditar) {
      editar.mutate(
        { id: relojEditar.id, reloj: datos },
        { onSuccess: () => setRelojEditar(null) }
      )
    } else {
      crear.mutate(datos)
    }
  }

  function eliminarReloj(id) {
    eliminar.mutate(id)
  }

  if (consulta.isPending) return <p>Cargando relojes...</p>

  if (consulta.isError) return <p>Error al cargar los relojes.</p>

  return (
    <main>
      <h1>RELOJES</h1>

      <FormularioReloj
        onGuardar={guardarReloj}
        relojEditar={relojEditar}
        onCancelar={() => setRelojEditar(null)}
      />

      <h2>Catalogo de relojes</h2>

      <ListaRelojes
        relojes={consulta.data}
        onEditar={setRelojEditar}
        onEliminar={eliminarReloj}
      />
    </main>
  )
}

export default App

// MISION 4 - FULL CONTACT FORMS / HUGO COBOS GUTIERREZ INSO3ºB

import { useState } from 'react'
import FormularioReloj from './FormularioReloj'
import ListaRelojes from './ListaRelojes'
import { useRelojes } from './useRelojes'
import { Footer } from './Footer'

function App() {
  const { consulta, crear, editar, eliminar } = useRelojes()
  const [relojEditar, setRelojEditar] = useState(null) // Reloj
  const [mensaje, setMensaje] = useState('') // Mensaje

  // Recibe los datos para guardar un reloj
  function guardarReloj(datos) {
    setMensaje('')

    if (relojEditar) { // Si esta en modo edicion
      editar.mutate( // Peticion para editar el reloj
        { id: relojEditar.id, reloj: datos },
        {
          onSuccess: () => {
            setRelojEditar(null)
            setMensaje('Reloj editado correctamente')
          },
          onError: () => {
            setMensaje('Error al editar el reloj')
          },
        }
      )
    } else {
      crear.mutate(datos, { // Si no estamos editando, envia los datos para crear un reloj nuevo
        onSuccess: () => {
          setMensaje('Reloj añadido correctamente')
        },
        onError: () => {
          setMensaje('Error al añadir el reloj')
        },
      })
    }
  } 

  // Recibe el identificador del reloj que queremos eliminar
  function eliminarReloj(id) {
    eliminar.mutate(id, {
      onSuccess: () => {
        setMensaje('Reloj eliminado correctamente')
      },
      onError: () => {
        setMensaje('Error al eliminar el reloj')
      },
    })
  }

  if (consulta.isPending) return <p>Cargando relojes...</p> // Cargando

  if (consulta.isError) return <p>Error al cargar los relojes.</p> // Error

  return (
    <main>
      <h1>RELOJES</h1>

      <FormularioReloj
        onGuardar={guardarReloj}
        relojEditar={relojEditar}
        onCancelar={() => setRelojEditar(null)}
      />

      {mensaje && <p>{mensaje}</p>}

      <h2>Catalogo de relojes</h2>

      <ListaRelojes
        relojes={consulta.data}
        onEditar={setRelojEditar}
        onEliminar={eliminarReloj}
      />

      <br/>

      <Footer/>
    </main>
  )
}

export default App

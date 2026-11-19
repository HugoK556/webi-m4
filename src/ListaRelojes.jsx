// MISION 4 - FULL CONTACT FORMS / HUGO COBOS GUTIERREZ INSO3ºB

// Listado de relojes
function ListaRelojes({ relojes, onEditar, onEliminar }) {
  if (relojes.length === 0) {
    return <p>No hay relojes registrados.</p>
  }

  // Devuelve el listado de relojes con su informacion y botones
  return (
    <div id="lista-relojes">
      {relojes.map((reloj) => (
        <div className="reloj" key={reloj.id}>
          <h3>{reloj.marca} {reloj.modelo}</h3>
          <p>Año: {reloj.anio}</p>
          <p>Precio: {reloj.precio} €</p>
          <p>Movimiento: {reloj.movimiento}</p>
          <p>Material: {reloj.material}</p>

          <button onClick={() => onEditar(reloj)}>Editar</button>
          <button onClick={() => onEliminar(reloj.id)}>Eliminar</button>
        </div>
      ))}
    </div>
  )
}

export default ListaRelojes

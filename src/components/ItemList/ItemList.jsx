

const ItemList = ({productos}) => {

    return (
        <div className="container my-5">
            <h2>Catalogo de Juegos</h2>
            <hr />

            <section className="row my-4">
            {productos.map((prod) => (
        <div key={prod.id} className="col-2 m-5">
          <h3>{prod.name}</h3>
          <p>
            Precio: <b>${prod.precio}</b>
          </p>
          <p><b>Descripción:</b> {prod.descr}

          </p>
          <img src={prod.img} alt={prod.nombre} />
        </div>
      ))}
            </section>
        </div>
    )
}

export default ItemList;


const FormPQRS = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container container-heigth">
      <form className="form-control my-5" onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <input className="form-control" type="text" placeholder="Ingrese nombre" />
        </div>
        <div className="form-group my-3">
          <input className="form-control" type="email" placeholder="Ingrese correo electrónico" />
        </div>
        <div className="form-group my-3">
          <input className="form-control" type="text" placeholder="Ingrese número telefónico" />
        </div>
        <div className="form-group my-3">
          <textarea className="form-control" rows="5" placeholder="Escriba su comentario"></textarea>
        </div>
        <div className="form-group my-3">
          <button className="btn button-flame">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default FormPQRS;
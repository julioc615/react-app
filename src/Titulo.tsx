function Titulo() {
  // jsx
  const Nombre = "Julio Alejandro Celaya ";
  if (Nombre) {
    return <h1>Hola {Nombre}</h1>;
  }
  return <h1>Hola Mundo</h1>;
}

export default Titulo;

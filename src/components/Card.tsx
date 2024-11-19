function Card(props) {
  const { body } = props;
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">Hola mundo</div>
    </div>
  );
}

export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content. Julio Celaya
      </p>
      <a href="#" className="card-link">
        Card link
      </a>
      <a href="#" className="card-link">
        Another link
      </a>
    </>
  );
}

export default Card;
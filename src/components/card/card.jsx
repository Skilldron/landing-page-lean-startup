function Card({ image, title, text, width=100}) {
  return (
    <div className="card border-0 bg-transparent">
      <img src={image} className="align-self-center" width={width} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="pt-4 card-text justify w-75 align-self-center mx-auto">
        {text}
        </p>
      </div>
    </div>
  );
}

export default Card;

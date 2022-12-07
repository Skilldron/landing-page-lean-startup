function Content() {
  return (
    <div class="text-center">
      <div class="custom-height row align-content-center justify-content-center">
        <div class="col d-flex">
            <div className="align-self-center">
            <h2 className="m-5">Découvrez Nouvel'Air</h2>
            <p className="text-start w-75 mx-auto">Une application qui vous permet de trouver les meilleures solutions pour vos trajets en transports en commun</p>
            </div>
        </div>
        <div class="col align-self-center">
            <img src="https://picsum.photos/200/300" className="w-50 align-self-center" alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Content;

import Banner from "../../components/banner/banner";
import Columns from "../columns/columns";

function Accueil() {
  return (
    <div className="background mt-5">
      <div className="text-center">
        <div className="row  custom-height align-content-center justify-content-center">
          <div className="col d-flex flex-column h-100">
            <div className="align-self-center mt-5">
              <h2 className="m-5 pt-5 pb-3 text-start">
                L'application qui encourage ceux qui souhaite obtenir un
                <span className="fw-bold text-uppercase">
                  {" "}
                  nouveau souffle{" "}
                </span>
              </h2>
              <p className="justify mx-5 mb-5">
                La meilleure application d'accompagnement et d'encouragement
                pour ceux qui souhaitent revivre. Soyez entouré d'une vraie
                communauté qui a le même objectif que vous et qui vous aideront
                à les atteindre. <br />
                Vous pourrez même alimenter une cagnotte avec système de
                CashBack pour vous faire plaisir avec des produits et services à
                prix avantageux.
              </p>
            </div>

            <div className="row  custom-height align-self-center pt-4">
              <div className="col align-self-center">
                <a href="/contact">
                  <img
                    className="btn_download_app_store"
                    src="/download_app_store.png"
                    alt="download_app_store"
                  />
                </a>
              </div>
              <div className="col align-self-center">
                <a href="/a-propos">
                  <img
                    className="btn_download_play_store"
                    src="/google-play-badge.png"
                    alt="download_play_store"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col align-self-center">
            <img
              src="/iphone.png"
              className="w-45 align-self-center"
              alt="illustration"
            />
          </div>
        </div>
      </div>
      <div className="faded_background">
      <Columns />
      </div>
      <Banner/>
    </div>
  );
}

export default Accueil;

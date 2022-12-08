function Banner() {
  return (
    <div className="m-5 p-5 d-flex justify-content-end rounded-5 banner-bg position-relative">
      <div className="position-absolute top-0 start-0 left-0 start-5 d-flex">
        <img
          src="/banner_image.png"
          className="banner-image-width mx-auto"
          alt="illustration"
        />
      </div>
      <div className="flex-column">
        <h1 className="pb-5">Un nouveau souffle, un nouvel air !</h1>
        <p className="py-2">
          Notre application est l'outil parfait pour rester motiver toute la durée
          de ce long combat.
          <br /> N’hésitez plus et venez partager l’aventure avec nous !
        </p>
        <div className="row">
            <div className="col d-flex justify-content-end align-items-center">
            <a href="/contact" className=" pr-2">
          <img
            className="btn_download_app_store"
            src="/download_app_store.png"
            alt="download_app_store"
          />
        </a>
        </div>
        <div className="col">
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
    </div>
  );
}

export default Banner;

function Header() {

  return (
    <header className="App-header">
      <nav class="navbar navbar-expand-lg bg-transparent px-5">
        <div class="container-fluid d-flex justify-content-between">
          <a class="navbar-brand" href="#">
            {/* image logo */}
            <img src="/logo.png" alt="logo" width="50" height="50" /> Nouvel'Air
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Notre application
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  A propos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
            <ul class="nav justify-content-end">
            <li class="nav-item">
                <button type="button" class="btn btn-primary gradiant-primary" href="#">
                  Télécharger
                </button>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

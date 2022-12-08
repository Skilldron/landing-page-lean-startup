function Header() {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand-lg bg-transparent px-5">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="/">
            {/* image logo */}
            <img src="/logo.png" alt="logo" width="50" height="50" /> Nouvel'Air
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center mb-lg-0 mb-sm-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/notre-application"
                >
                  Notre application
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/a-propos">
                  A propos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <ul className="nav justify-content-end">
            <a
              type="button"
              className="btn btn-outline-primary"
              href="/contact"
            >
              Télécharger
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

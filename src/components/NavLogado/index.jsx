import { Link } from "react-router-dom";
import Toggle from '../../contexts/darkmode';
import logo from "/src/imagem/logo.png"

function Nav() {
  return (
    <nav className={'navbar navbar-expand-lg navbar-light px-5 py-2 shadow-sm p-3 rounded ${colorMode === "light" ? "bg-white" : "bg-gray-800"}'}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Emprega Embarque" style={{ maxWidth: '120px', height: 'auto', marginLeft: '40px', marginTop: '20px' }} />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/transmissao" style={{ color: '#ACB3C2' }}>
                Transmissão
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vagas" style={{ color: '#ACB3C2' }}>
                Vagas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/perfilaluno" style={{ color: '#ACB3C2' }}>
                Perfil
              </Link>
            </li>
          </ul>
        </div>

        <Toggle />

      </div>
    </nav>
  );
}

export default Nav;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={'footer ${colorMode === "light" ? "bg-light" : "bg-dark"}'}>
      <div className="text-light py-3 py-md-5 py-xl-8">
        <div className="container overflow-hidden p-0">
          <div className="row gy-3 gy-md-5 gy-xl-0 justify-content-center m-0">
            <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
              <ul className="nav justify-content-center m-0">
                <li className="">
                  <Link className="nav-link text-dark px-2 px-md-3" to="/integrantes">
                    Integrantes
                  </Link>
                </li>
                <li className="">
                  <a className="nav-link text-dark px-2 px-md-3" href="#!">Termos</a>
                </li>
                <li className="">
                  <a className="nav-link text-dark px-2 px-md-3" href="#!">Privacidade</a>
                </li>
              </ul>
            </div>  
          </div>
        </div>
      </div>

      <div className="text-dark py-3 py-md-5 p-0">
        <div className="container overflow-hidden">
          <div className="row m-0">
            <div className="col m-0">
              <div className="footer-copyright-wrapper text-center">
                &copy; 2024. Todos os Direitos Reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

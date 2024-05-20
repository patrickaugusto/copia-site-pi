import Footer from "../../../../components/Footer";
import Nav from "/src/components/Nav/navEmpresa";
import { Link } from "react-router-dom";
import imglogin from "/src/imagem/imagemLoginEmpresa.png"

function LoginEmpresa() {
  return (
    <>
      <Nav />
        <div className="row g-0">
          <div className="col-12 col-md-6 align-items-center">
            <div className="card-body p-3 p-md-4 p-xl-5">
              <div className="text-center">
                <div className="col-12">
                  <div className="mb-5">
                    <h1
                      className="h1"
                      style={{ color: "#F9A826", fontSize: "46px" }}
                    >
                      Login Empresa
                    </h1>
                  </div>
                </div>
              </div>

              {/*Formulario */}
              <form action="#!" className="container col-10">
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  {/*Campo email*/}

                  <div className="col-12 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="januario@gmail.com"
                      required
                    />
                  </div>

                  {/*Campo senha*/}
                  <div className="col-12 mb-3">
                    <label htmlFor="password" className="form-label">
                      Senha<span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      required
                    />
                  </div>

                  {/*para manter logado*/}
                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember_me"
                          id="remember_me"
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="remember_me"
                        >
                          Lembrar de mim
                        </label>
                      </div>

                      {/*Esqueci senha*/}
                      <a
                        href="#!"
                        className="link-secondary text-decoration-none"
                        style={{ color: "#F9A826" }}
                      >
                        Esqueci minha Senha
                      </a>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <Link to="">
                        <button
                          className="btn bsb-btn-xl"
                          type="submit"
                          style={{ background: "#F9A826", color: "#FFFFFF" }}
                        >
                          Entrar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                    <p>
                      Não possui uma conta ainda?{" "}
                      <Link
                        to="/cadastroempresa"
                        className="link-secondary text-decoration-none"
                      >
                        <span style={{ color: "#F9A826" }}>
                          Criar uma conta
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Parte do lado direito. Colocar a imagem */}
          <div
            className="col-12 col-md-6 d-flex justify-content-center align-items-center"
            style={{ background: "#F9A826" }}
          >
            <div className="col-10 col-xl-8 py-3">
              <img
                className="img-responsive rounded mb-4"
                loading="lazy"
                src={imglogin}
                alt="Imagem Login Estudante"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default LoginEmpresa;

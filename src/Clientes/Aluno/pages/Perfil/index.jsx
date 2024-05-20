import { Link } from "react-router-dom";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/NavLogado";
import { LogoGithub } from "/src/components/SVGs/github";
import { LogoGmail } from "/src/components/SVGs/gmail";
import { LogoLinkedin } from "/src/components/SVGs/linkedin";
import Accordion from "./acordion";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import ProjetoPessoal from "./projeto/pessoal";
import ProjetoResidencia from "./projeto/residencia";


function PerfilAluno() {
  return (
    <>
      <Nav />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="/src/public/imagem/imagem-perfil.jpg"
                  alt="avatar"
                  className="rounded-circle img-fluid mb-3"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">XXXXXXXXX</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <div className="d-flex justify-content-center">
                  {/*SVGs*/}
                  <div className="order-1 order-xl-2">
                    <ul className="nav justify-content-center justify-content-sm-end">
                      <li className="nav-item">
                        <Link className="nav-link px-3" to="#">
                          <LogoGithub />
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link link-dark px-3" to="#">
                          <LogoLinkedin />
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link link-dark px-3" to="#">
                          <LogoGmail />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="accordion-container">
              <Accordion />
            </div>
          </div>
        </div>

        {/*Parte dos projetos */}
        <div class="mt-5 mb-5">
          <h3>Projetos</h3>
          <Tabs>
            <TabList>
              <Tab>Pessoal</Tab>
              <Tab>Residencia</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ProjetoPessoal />
              </TabPanel>
              <TabPanel>
                <ProjetoResidencia />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default PerfilAluno;

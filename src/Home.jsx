import React from 'react';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import './style.css';
import Card from './components/Cards';
import imgblack from '/src/imagem/black-square.png';
import imggreen from '/src/imagem/green-square.png';
import imgred from '/src/imagem/red-square.png';
import imgastronauta from '/src/imagem/astronaut.png';
import imginicio from '/src/imagem/img-inicio.png';
import embarquedigital from '/src/imagem/embarquedigital.jpeg'; 
import pcaluno from '/src/imagem/pcaluno.png'
import professoralunos from '/src/imagem/professoralunos.png'

function Home() {
  return (
    <>
      <Nav />
      <div id="carouselExampleIndicators" className="carousel slide w-100 mx-auto text-center" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner" style={{ height: 'auto', maxHeight: '500px', marginBottom: '80px' }}>
          <div className="carousel-item active">
            <img className="d-block w-100 h-100" src={embarquedigital} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={professoralunos} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 h-100" src={pcaluno} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Anterior</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>

      <div className='mt-5 p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <p className='h2'>Explore o <span className=''>Embarque Digital</span> e descubra uma oportunidade única de avançar em sua carreira no mundo da tecnologia</p>
            </div>
            <div className="col-lg-6">
              <img className="d-block w-100 h-auto" src={imginicio} alt="Inicio" />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 bg-light p-5'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <img className="d-block w-100 h-auto" src={imgastronauta} alt="Astronauta" />
            </div>

            <div className="col-lg-6">
              <h1 className='text-primary pt-5 pb-5'>+ Oportunidades</h1>
              <p className='text-break lead'>
              Para maximizar a visibilidade e as oportunidades dos estudantes do Embarque Digital, o site Embarque Emprega foi criado como uma plataforma que os conecta com o mercado de trabalho. Cada estudante tem um perfil detalhado que destaca suas informações pessoais, acadêmicas e projetos em andamento, oferecendo aos empregadores uma visão de suas competências e realizações.
              </p>
              <p className='text-break lead'>
              O site também promove eventos e atividades relacionados ao Embarque Digital, mantendo a comunidade informada sobre workshops, palestras entre outros. A seção de vagas em destaque, que facilita o acesso dos estudantes a oportunidades de emprego e estágio. Os estudantes podem encontrar posições alinhadas a seus interesses, promovendo uma transição para o mercado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5 ml-5 p-5'>
        <div className="">
          <div className="row justify-content-start">
            <div className="col-lg-6">
              <h2 className='text-left'>Veja o relato de alguns dos estudantes empregados</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <Card />
      </div>

      <Footer />
    </>
  );
}

export default Home;

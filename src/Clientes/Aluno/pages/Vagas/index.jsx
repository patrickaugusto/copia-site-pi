import React from 'react';
import Footer from '/src/components/Footer/index';
import Nav from '/src/components/NavLogado/index';
import semvagas from '../../../../imagem/SemVaga.jpg'
import { Container } from '@chakra-ui/react';

function Vagas() {
  return (
    <>
      <Nav />
      <Container>
        <div className='d-grid justify-content-center align-items-center'>
          <img src={semvagas} alt="" />
          <div className="text-center">
            <h1>Oops!</h1>
            <p>Nenhuma Vaga foi postada ainda</p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Vagas;
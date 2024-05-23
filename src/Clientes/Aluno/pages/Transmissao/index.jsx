import Nav from '/src/components/NavLogado/index'
import Footer from '/src/components/Footer/index';
import { Container } from '@chakra-ui/react';
import servico from '../../../../imagem/ServiçoIndisponivel.jpg'

function Transmissao() {
  return (
    <>
      <Nav />
      <Container>
        <div className='d-grid justify-content-center align-items-center'>
          <img src={servico} alt="" />
          <div className="text-center">
            <h1>Oops!</h1>
            <p>Serviço indisponível no momento</p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Transmissao;

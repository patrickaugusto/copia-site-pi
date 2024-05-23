import Nav from '/src/components/NavLogado/index'
import Footer from '/src/components/Footer/index';
import { Container } from '@chakra-ui/react';
import ops from '../imagem/pagenotfound.jpg'

function PageNotFound() {
  return (
    <>
      <Nav />
      <Container>
        <div className='d-grid justify-content-center align-items-center'>
          <img src={ops} alt="" />
          <div className="text-center">
            <h1>Oops!</h1>
            <p>Pagina não encontrada</p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default PageNotFound;

import img from '/src/imagem/imagem-perfil.jpg';

function Profile({ image, name, profession, quote }) {
  return (
    <div className='col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card'>
        <img src={image} alt={name} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>
            <strong>{name}</strong>
          </h5>
          <figure>
            <blockquote className='blockquote'>
              <p className='card-text'>{quote}</p>
            </blockquote>
            <figcaption className='blockquote-footer'>{profession}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <Profile
          image={img}
          name='Patrick Augusto'
          profession='Desenvolvedor na Empresa X'
          quote='“Um texto de como o embarque ajudou e tals”'
        />

        <Profile
          image={img}
          name='Igor Daniel'
          profession='Desenvolvedor na Empresa X'
          quote='“Um texto de como o embarque ajudou e tals”'
        />

        <Profile
          image={img}
          name='Danilo Santana'
          profession='Desenvolvedor na Empresa X'
          quote='“Um texto de como o embarque ajudou e tals”'
        />

      </div>
    </div>
  );
}

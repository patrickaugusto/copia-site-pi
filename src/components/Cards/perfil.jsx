import img from '/src/imagem/imagem-perfil.jpg'
import { LogoGithub } from "/src/components/SVGs/github";
import { LogoLinkedin } from "/src/components/SVGs/linkedin";

function Profile ({ image, name, github, linkedin }) {
  return (
    <div className='col-sm-6 col-lg-3 mb-5'>
      <div className='card'>
        <img src={image} alt={name} className='card-img-top' />
        <div className='card-body'>
          <h5 className='card-title'>
            <strong>{name}</strong>
          </h5>

          <div className='d-flex justify-content-center'>
            {/*SVGs*/}
            <div className='order-1 order-xl-2'>
              <ul className='nav justify-content-center justify-content-sm-end'>
                <li className='nav-item'>
                  <a className='nav-link px-3' href={github} target='_blank'>
                    <LogoGithub />
                  </a>
                </li>

                <li className='nav-item'>
                  <a className='nav-link link-dark px-3' href={linkedin} target='_blank'>
                    <LogoLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Gallery () {
  return (
    <div className='container d-flex justify-content-center'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        <Profile
          image={img}
          name='Patrick Augusto'
          github='https://github.com/patrickaugusto'
          linkedin='https://www.linkedin.com/in/patrick-nascimento-86405a25b'
        />

        <Profile
          image={img}
          name='Igor Daniel'
          github='https://github.com/IgorDanielS'
          linkedin='https://www.linkedin.com/in/igor-daniel-a73037211'
        />

        <Profile
          image={img}
          name='Danilo Santana'
          github='https://github.com/DaniloSantos31'
          linkedin='https://www.linkedin.com/in/danilo-santana-b8595326b'
        />

        <Profile
          image={img}
          name='Antonio Rodrigues'
          github='https://github.com/netow2005'
          linkedin='https://www.linkedin.com/in/antonio-rodrigues-de-carvalho-neto-523189262'
        />

        <Profile
          image={img}
          name='Bruna Roberta'
          github='https://github.com/brunartt'
          linkedin='https://www.linkedin.com/in/bruna-roberta-a46541285'
        />
      </div>
    </div>
  )
}
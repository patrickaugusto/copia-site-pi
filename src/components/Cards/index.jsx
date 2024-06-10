import img from "/src/imagem/imagem-perfil.jpg"

function Profile({
    image,
    name,
    profession,
    quote,
}) {
    return (
        <section className="col-md-6 col-lg-4 mb-4">
            <div class="card" style={{ width: '18rem' }}>
                <img src={image} alt={name} class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title"><strong>{name}</strong></h5>
                    <figure>
                        <blockquote class="blockquote">
                            <p class="card-text">{quote}</p>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            {profession}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default function Gallery() {
    return (
        <div className="row">
            
            <Profile
                image={img}
                name="Patrick Augusto"
                profession="Desenvolvedor na Empresa X"
                quote="“As conexões com os eventos foram fundamentais para oportunidades de emprego.”"
            />
            
            <Profile
                image={img}
                name='Igor Daniel'
                profession='Desenvolvedor na Empresa X'
                quote="“O site Embarque Emprega foi essencial para aumentar minha visibilidade.”"
            />
            
            <Profile
                image={img}
                name='Danilo Santana'
                profession='Desenvolvedor na Empresa X'
                quote="“Consegui uma vaga de estágio em uma empresa renomada graças à plataforma.”"
            />
            
        </div>
    );
}
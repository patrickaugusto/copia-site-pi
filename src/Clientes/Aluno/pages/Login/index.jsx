import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../../components/Footer";
import Nav from "../../../../components/Nav";
import imglogin from '/src/imagem/imagemLoginAluno.png';

function LoginAluno() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/student/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const student = await response.json();
        navigate('/transmissao'); 
      } else {
        alert('Email ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao tentar fazer login.');
    }
  };

  return (
    <>
      <Nav />
      <div className="row g-0">
        <div className="col-12 col-md-6 align-items-center">
          <div className="card-body p-3 p-md-4 p-xl-5">
            <div className="text-center">
              <div className="col-12">
                <div className="mb-5">
                  <h1 className="h1" style={{ color: "#00BF63", fontSize: "46px" }}>Login Aluno</h1>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="container col-10">
              <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12 mb-3">
                  <label htmlFor="email" className="form-label">Email<span className="text-danger">*</span></label>
                  <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="januario@gmail.com" required />
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="password" className="form-label">Senha<span className="text-danger">*</span></label>
                  <input type="password" className="form-control" name="password" id="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" name="remember_me" id="remember_me" />
                      <label className="form-check-label text-secondary" htmlFor="remember_me">Lembrar de mim</label>
                    </div>
                    <a href="#!" className="link-secondary text-decoration-none" style={{ color: "#00BF63" }}>Esqueci minha Senha</a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-center">
                    <button className="btn bsb-btn-xl" type="submit" style={{ background: "#00BF63", color: "#FFFFFF" }}>Entrar</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-12">
                <hr className="mt-5 mb-4 border-secondary-subtle" />
                <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                  <p>Não possui uma conta ainda? <Link to="/cadastroaluno" className="link-secondary text-decoration-none"><span style={{ color: "#00BF63" }}>Criar uma conta</span></Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center" style={{ background: "#00BF63" }}>
          <div className="col-10 col-xl-8 py-3">
            <img className="img-responsive rounded mb-4" loading="lazy" src={imglogin} alt="Imagem Login Estudante" style={{ maxWidth: "80%", height: "auto" }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginAluno;

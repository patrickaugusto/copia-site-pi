import { useState } from 'react';
import Footer from "../../../../components/Footer";
import { Input, Stack, FormControl, FormLabel, Checkbox, Button, Heading, Grid, Box } from '@chakra-ui/react';
import Nav from '../../../../components/Nav';
import imgcadastro from "/src/imagem/pessoasIlustracao.png";

function CadastroAluno() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleCpfChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = formatCpf(value);
    setFormData(prevState => ({ ...prevState, cpf: formattedValue }));
  };

  const formatCpf = (value) => {
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Você precisa aceitar os termos de privacidade e política.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    
    const studentData = {
      name: formData.name,
      email: formData.email,
      cpf: formData.cpf,
      password: formData.password
    };

    try {
      const response = await fetch('http://localhost:8080/api/student/add/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(studentData)
      });
      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
      } else {
        alert('Erro ao cadastrar.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao cadastrar.');
    }
  };

  return (
    <>
      <Nav />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '20px' }}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} style={{ flex: '1' }}>
          <div style={{ marginBottom: '20px', position: 'relative' }}>
            <img src={imgcadastro} alt="" style={{ width: '100%', maxWidth: '100%' }} />
          </div>
          <Box maxWidth="400px" mt="25px" mb="20px" ml={{ base: 0, md: '40px' }}>
            <Heading className='d-flex justify-content-center' as="h1" size="lg" color="green.500" mb={4}>CADASTRO</Heading>

            <form onSubmit={handleSubmit}>

              <FormControl isRequired>
                <FormLabel>Nome Completo</FormLabel>
                <Input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Nome Completo' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>CPF</FormLabel>
                <Input type='text' name='cpf' value={formData.cpf} onChange={handleCpfChange} placeholder='CPF' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Senha' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input type='password' name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} placeholder='Confirmar Senha' />
              </FormControl>

              <Stack spacing={6} direction="row" align="center">
                <Checkbox isChecked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)}>Concordo com os termos de privacidade e política.</Checkbox>
              </Stack>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button type="submit" colorScheme="green" mt={4} width="50%" borderRadius="20px">
                  Cadastrar
                </Button>
              </div>

            </form>
          </Box>
        </Grid>
        <Footer />
      </div>
    </>
  );
}

export default CadastroAluno;

import { Container, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Toggle from '../contexts/darkmode';

function Page404() {
    return (
        <>
            <nav className={'navbar navbar-expand-lg navbar-light px-5 py-2 shadow-sm p-3 rounded ${colorMode === "light" ? "bg-white" : "bg-gray-800"}'}>
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./dist/assets/imagem/Emprega-Embarque.png" alt="Emprega Embarque" style={{ width: '120px', height: 'auto', marginLeft: '40px', marginTop: '20px' }} />
                    </Link>
                    <Toggle />
                </div>
                
            </nav>

            <Flex height="80vh" alignItems="center" justifyContent="center">
                <Container>
                    <Text textAlign="center">
                        <h1>Algo de errado tu fex peste</h1>
                        <div className="text-center">
                            <p className="m-5">
                                <span className="bg-danger text-light display-1">
                                    404
                                </span>
                                <br />
                            </p>
                            <p className="">
                                <strong style={{ fontSize: "30px" }}>
                                    Página não localizada bobão
                                </strong>
                            </p>
                        </div>
                    </Text>
                </Container>
            </Flex>
        </>
    );
}

export default Page404;

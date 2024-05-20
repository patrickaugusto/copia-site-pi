import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';




export default function ProjetoPessoal() {
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Descrição</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>Pokedex</Td>
                            <Td>Coisa breve</Td>
                            <Td>
                                <a href='#'>
                                    <IconButton
                                        aria-label='Search database'
                                        variant="ghost" // Use ghost variant to remove background
                                        icon={<ExternalLinkIcon />}
                                        size="md"
                                    />
                                </a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Portifolio</Td>
                            <Td>Coisa Breve</Td>
                            <Td>
                                <a href='#'>
                                    <IconButton
                                        aria-label='Search database'
                                        variant="ghost" // Use ghost variant to remove background
                                        icon={<ExternalLinkIcon />}
                                        size="md"
                                    />
                                </a>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>Site Alura</Td>
                            <Td>Coisa Breve</Td>
                            <Td>
                                <a href='#'>
                                    <IconButton
                                        aria-label='Search database'
                                        variant="ghost" // Use ghost variant to remove background
                                        icon={<ExternalLinkIcon />}
                                        size="md"
                                    />
                                </a>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}
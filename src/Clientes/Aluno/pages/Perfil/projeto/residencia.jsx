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




export default function ProjetoResidencia() {
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
                            <Td>Site ODS</Td>
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
                            <Td>Bagulho de QA</Td>
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
                            <Td>Site Empresarial</Td>
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
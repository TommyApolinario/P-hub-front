import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../db/configdb';
import { Solution } from '../interfaces/Solutions';

interface Resultado {
  id: string;
  date: Date;
  iterations: number;
  solution: number;
  time: number;
  file: string;
}

export const History = () => {
  const navigate = useNavigate();
  const bg = useColorModeValue('gray.50', 'gray.800');
  const color = useColorModeValue('black', 'white');
  const colorSecondary = useColorModeValue('gray.600', 'gray.200');

  const [stateResult, setStateResult] = useState<Resultado[]>([]);
  useEffect(() => {
    const q = query(
      collection(db, 'resultados'),
      orderBy('date', 'desc'),
      limit(5)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const resultados: Resultado[] = [];
      querySnapshot.forEach((doc) => {
        const solution = doc.data() as Solution;
        resultados.push({
          id: doc.id,
          date: solution.date.toDate(),
          iterations: solution.iterations,
          solution: solution.solution,
          time: solution.timeElapsed,
          file: solution.file || 'No Registrado',
        });
      });

      setStateResult(resultados);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <Box
      minW={500}
      marginX={16}
      backgroundColor={bg}
      shadow="base"
      rounded="md"
      padding={8}
      marginBottom={16}
    >
      <Text fontSize="2xl" fontWeight={'normal'} mb={4} color={color}>
        📓 Historial de soluciones
      </Text>

      {stateResult.length < 1 ? (
        <Stack>
          <Skeleton height="20px" width={800} />
          <Skeleton height="20px" width={800} />
          <Skeleton height="20px" width={800} />
          <Skeleton height="20px" width={800} />
          <Skeleton height="20px" width={800} />
        </Stack>
      ) : (
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Fecha</Th>
                <Th>Hora</Th>
                <Th isNumeric>Iteraciones</Th>
                <Th isNumeric>Solución</Th>
                <Th isNumeric>Ejecución(seg)</Th>
                <Th>Archivo</Th>
              </Tr>
            </Thead>
            <Tbody>
              {stateResult.map((result) => (
                <Tr key={result.id}>
                  <Td color={color}>{result.date.toLocaleDateString()}</Td>
                  <Td color={color}>{result.date.toLocaleTimeString()}</Td>
                  <Td color={color} isNumeric>
                    {result.iterations}
                  </Td>
                  <Td color={color} isNumeric>
                    {result.solution.toFixed(2)}
                  </Td>

                  <Td color={color} isNumeric>
                    {result.time.toFixed(4)}
                  </Td>
                  <Td color={color}>{result.file}</Td>
                  <Td isNumeric>
                    <Button
                      size="xs"
                      colorScheme="blue"
                      as={Link}
                      to={`/graph/${result.id}`}
                    >
                      Ver grafica
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

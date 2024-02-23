import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue('#8EC5FC', '#000');
  const bgGradient = useColorModeValue(
    'linear-gradient(62deg, #000 0%, #E0C3FC 100%)',
    ''
  );
  const color = useColorModeValue('black', 'white');

  return (
    // background-color: ;
    // background-image: ;

    <Box
      w="100%"
      minH="100vh"
      bg={bg}
      bgGradient={bgGradient}
      display="flex"
      flexDirection="column"
      overflowY="auto"
    >
      <HStack paddingX={8} paddingY={4} justifyContent="space-between">
        <Text
          color={color}
          fontSize={'3xl'}
          fontWeight={'medium'}
          as={Link}
          to="/init"
        >
          Algoritmo de optimizacion P-HUB
        </Text>
        <Box>
          <Button variant="ghost" as={Link} to="/history" color={color}>
            Historial
          </Button>
        </Box>
      </HStack>

      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <Outlet />
      </Box>
    </Box>
  );

  // background-color: #4158D0;
  // background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  // background-color: #8EC5FC;
  // background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
}

export default App;

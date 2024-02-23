import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        color: 'black',
      },
    },
  },
  colors: {
    black: '#0c1012',
    gray: {
      '50': '#f0f9f4',
      '100': '#c6ecc1',
      '200': '#9cdb97',
      '300': '#6ecf6b',
      '400': '#4bb14d',
      '500': '#35a130', // Nuevo color verde
      '600': '#2b8a26',
      '700': '#23731d',
      '800': '#1b5b15',
      '900': '#12410e',
    },
    purple: {
      '50': '#f5f7fa',
      '100': '#dbe5f4',
      '200': '#bdcff0',
      '300': '#97b7ea',
      '400': '#739de3',
      '500': '#4f81da', // Nuevo tono de azul
      '600': '#3f6bcf',
      '700': '#3256c4',
      '800': '#2541b9',
      '900': '#1830ab',
    },
    yellow: {
      '50': '#fefefd',
      '100': '#f9f9f5',
      '200': '#eeede3',
      '300': '#e1e0ce',
      '400': '#cfcdb1',
      '500': '#adaa79',
      '600': '#8c8945',
      '700': '#706b16',
      '800': '#545008',
      '900': '#454207',
    },
    cyan: {
      '50': '#f4f7f9',
      '100': '#d4e5ed',
      '200': '#b5d1e1',
      '300': '#92b9d3',
      '400': '#729dbf',
      '500': '#5681aa', // Nuevo tono más azulado
      '600': '#416590',
      '700': '#2e4e75',
      '800': '#1e375b',
      '900': '#0e2243',
    },
    primary: {
      '50': '#f0f9f4',
      '100': '#c6ecc1',
      '200': '#9cdb97',
      '300': '#6ecf6b',
      '400': '#4bb14d',
      '500': '#35a130', // Nuevo color verde
      '600': '#2b8a26',
      '700': '#23731d',
      '800': '#1b5b15',
      '900': '#12410e',
    },
  },
});

export default theme;

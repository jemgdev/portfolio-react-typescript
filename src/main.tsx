import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>
)
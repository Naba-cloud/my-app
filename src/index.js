import { ColorModeScript } from '@chakra-ui/react';
import React from "react"
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  
<>
<ChakraProvider >
<App />
</ChakraProvider>
  
    </>,
  document.getElementById('root')
);


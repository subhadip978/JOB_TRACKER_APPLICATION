import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react' ;
import JobContext from './context/JobContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <JobContext>

        <App />
      </JobContext>

    </ChakraProvider>
  </React.StrictMode>,
)

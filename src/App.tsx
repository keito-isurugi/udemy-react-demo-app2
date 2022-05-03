import React from 'react';
import './App.css';
import { Button,ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <h1>hogehoge</h1>
      <Button colorScheme="teal">btn</Button>
      </ChakraProvider>
    </div>
  );
}

export default App;

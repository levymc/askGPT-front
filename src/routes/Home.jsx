import React from 'react';
import AskGPT from '../components/askGPT';
import styled from 'styled-components';

export default function Home() {
  return (
    <Div>
      <h1>Busque pelo texto extraído abaixo:</h1>
      <AskGPT />
    </Div>
  );
}

const Div = styled.div`
    min-width: 100vw;
    width: 100%;
    min-height: 100vh;
    height: auto;
    margin: auto;
    text-align: center;
`

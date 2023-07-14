import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function AskGPT() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/askGPT', { question });
            console.log(response.data)
            console.log(typeof response.data)
            setAnswer(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>

            <Form className="col s12" onSubmit={handleSubmit}>
                    <textarea
                        id="question"
                        type="text"
                        className="validate"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button htmlFor="question" type="submit">Busque</button>
            </Form>
            <h3>Nota: {answer.nota}</h3>
            <h3>Emissão: {answer.emissao}</h3>
            <h3>Discriminação: {answer.discriminacao}</h3>
            <h3>Valor Imposto: {answer.valorImpostos}</h3>
            <h3>Valor Serviço: {answer.valorServico}</h3>


        </Container>
    );
}


const Container = styled.div`
    width: 100vw;
    margin: auto;
`

const Form = styled.form`
    /* width: 60vw; */
    /* margin: auto; */
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;

`
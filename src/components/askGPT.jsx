import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function AskGPT() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.post('URL_DA_API_GPT', { question });
        setAnswer(response.data.answer);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <Container>

            <Form className="col s12" onSubmit={handleSubmit}>
                    <input
                        id="question"
                        type="text"
                        className="validate"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button htmlFor="question" type="submit">Busque</button>

            </Form>
            {answer && <p>{answer}</p>}
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
    justify-content: center;
    align-items: center;

`
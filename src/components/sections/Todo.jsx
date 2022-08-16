import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import ToDoBox from './TodoBox';
const Todo = () => {
    const [inputList, setInputeLIst] = useState('Btw');
    const [itemsList, setItemsList] = useState([]);

    const itemChanged = (event) => {
        setInputeLIst(event.target.value);
    };
    const saveItems = (event) => {
        setItemsList((Items) => {
            return [...Items, inputList];
        });
    };
    const deleteItem = (id) => {
        setItemsList((Items) => {
            return [...Items, inputList];
        });
    };
    return (
        <>
            <Container >
                <Row className='py-5'>
                    <Col sm={6}>
                        <Form >
                            <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicEmail">
                                <Form.Control placeholder='Task name' className='pe-3' onChange={itemChanged} type='text' name='task' />
                                <Button type='button' className='ms-3' onClick={saveItems}>Add</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    {
                        itemsList.map((itemValue, index) => {
                            return <ToDoBox task={itemValue} key={index} id={index} onSelect={deleteItem} />
                        })
                    }
                </Row>
            </Container>
        </>
    );
};

export default Todo;
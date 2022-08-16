import React from 'react';
import { Form, Col } from 'react-bootstrap';

const ToDoBox = (props) => {
    return (
        <>
            <Col sm={12}><span onClick={props.onSelect(props.id)} className='rounded-circle shadow-sm border font-weight-bold text-danger self-align-center m-2 px-2 text-center py-2' style={{ "cursor": "pointer" }}>-</span><Form.Label className='shadow-sm p-2 rounded-2'>{props.task}</Form.Label></Col>
        </>
    );
}

export default ToDoBox;
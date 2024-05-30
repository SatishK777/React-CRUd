import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
// import { Alert } from 'bootstrap';
import generateUniqueId from 'generate-unique-id';

function crud({ onSubmit }) {

    let key = 0;

    const [inputState, setInputState] = useState({
        pname: '',
        pprice: '',
        pcat: '',
        pmfg: '',
        paddr: '',
        // id:'',
    });

    const [viewData, setViewData] = useState([])

    const handleInput = (e) => {

        setInputState({
            ...inputState,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

            // if(inputState.pname && inputState.pprice && inputState.pcat && inputState.pmfg && inputState.paddr){

            const obj = {
                id: generateUniqueId({
                    length: 4,
                    useLetters: false
                }),
                ...inputState
            }
            setViewData([...viewData, obj])

            // console.log("Data : ", obj);


            setInputState(
                {
                    pname: '',
                    pprice: '',
                    pcat: '',
                    pmfg: '',
                    paddr: '',
                    // id:''
                }
            )
            // }else{
            //     alert("Please Fill All Fields....")
            // }

    }

    const handleEdit = (id) => {
        let rec = viewData;
        let updateRec = rec.find((data) => {
            return (
                data.id === id
            )
        })
        setInputState({ ...updateRec })
    };



    const handleDelete = (id) => {
        let record = viewData;
        let updateRecord = record.filter((data) => {
            return (
                data.id != id
            )
        })
        setViewData(updateRecord);
    };


    return (

        <Container >
            <h1 className='py-5 text-center'>
                PRODUCT DATA
            </h1>
            <Form className='border p-5 border-5 rounded bg-dark' onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Product Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your product" name='pname' value={inputState.pname} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" name='pprice' value={inputState.pprice} onChange={handleInput} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Catagory</Form.Label>
                        <FloatingLabel name='pcat' onChange={handleInput}>
                            <Form.Select aria-label="Floating label select example" name='pcat' onChange={handleInput} value={inputState.pcat}>
                                <option>Choose Product catagory</option>
                                <option>Fashion</option>
                                <option>Cosmetics</option>
                                <option>Gadjets</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Form.Group>
                    {/* <Form.Group as={Col}>
                        <Form.Label className='text-light'>Catagory</Form.Label>
                        <Form.Control type="name" placeholder="Enter Product Catagory" name='pcat' value={inputState.pcat} onChange={handleInput} />
                    </Form.Group> */}

                    <Form.Group as={Col}>
                        <Form.Label className='text-light'>Company</Form.Label>
                        <Form.Control type="name" placeholder="Manufacturer name" name='pmfg' value={inputState.pmfg} onChange={handleInput} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label className='text-light'>Address</Form.Label>
                    <Form.Control type='text' placeholder="1234 Main St" name='paddr' value={inputState.paddr} onChange={handleInput} />
                </Form.Group>

                <Form.Label className='text-light'>ID</Form.Label>
                <Form.Control type="name" name='id' value={inputState.id} />


                <Button variant="primary" type="submit" className='text-center mt-4 btn btn-success'>
                    Submit
                </Button>
            </Form>
            <table border='1' width='1300' align='center' className='mt-5 border border-5 rounded' >
                <thead >
                    <tr>
                        <th>
                            Sr.
                        </th>
                        <th>
                            Product ID
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Catagory
                        </th>
                        <th>
                            MFG
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {
                        viewData.map((data, index) => {
                            return (
                                <tr key={key++}>
                                    <td>
                                        {
                                            index + 1
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.id
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.pname
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.pprice
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.pcat
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.pmfg
                                        }
                                    </td>
                                    <td>
                                        {
                                            data.paddr
                                        }
                                    </td>
                                    <td>
                                        {
                                            <>
                                                <Button className='btn btn-primary rounded me-2' onClick={() => handleEdit(data.id)}>Edit</Button>
                                                <Button className='btn btn-danger rounded' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            </>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Container>


    )
}


export default Crud
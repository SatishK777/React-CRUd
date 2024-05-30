
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Alert } from 'bootstrap';
import generateUniqueId from 'generate-unique-id';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'


function Emp({ onSubmit }) {

    let key = 0;

    const [inputState, setInputState] = useState({
        fname: '',
        num: '',
        lname: '',
        email: '',
        add: '',
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
        if (inputState.id) {
            setViewData(viewData.map((record) => {

                if (record.id === inputState.id) {
                    
                    setInputState(
                        {
                            fname: '',
                            num: '',
                            lname: '',
                            email: '',
                            add: '',
                            // id:''
                        }
                    )
                    return { ...record, ...inputState }
                }
                else {
                    return record
                }
                
            }))
        }else{
               // if(inputState.fname && inputState.num && inputState.lname && inputState.email && inputState.add){

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
                fname: '',
                num: '',
                lname: '',
                email: '',
                add: '',
                // id:''
            }
        )
        // }else{
        //     alert("Please Fill All Fields....")
        // }

    }
        }

       

    // const handleEdit = (id) => {
    //     let rec = viewData;
    //     let updateRec = rec.find((data) => {
    //         return (
    //             data.id === id
    //         )
    //     })
    //     setInputState({ ...updateRec })
    // };

    const handleEdit = (id) => {

        let record = viewData;
        let updatedRecord = record.filter((data) => {
            return (
                data.id === id
            )
        })

        setInputState(updatedRecord[0]);
    }



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
        <>
            <Container className='my-5 col-6 formmm'>

                <h2 className=' text-light p-2 new'>New Employee</h2>

                <Form className='p-5' onSubmit={handleSubmit}>

                    <Form.Group as={Col}>
                        <Form.Label >First Name</Form.Label>
                        <Form.Control type="name"  name='fname' value={inputState.fname} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label >Last Name</Form.Label>
                        <Form.Control type="name"  name='lname' value={inputState.lname} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="Email"  name='email' value={inputState.email} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label >Address</Form.Label>
                        <Form.Control type='text'  name='add' value={inputState.add} onChange={handleInput} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label >Phone</Form.Label>
                        <Form.Control type="number"  name='num' value={inputState.num} onChange={handleInput} />
                    </Form.Group>












                    <Form.Control type="name" name='id' value={inputState.id} hidden />


                    <Button variant="primary" type="submit" className='text-center mt-4 btn btn-success'>
                        Submit
                    </Button>
                </Form>


            </Container>
            <Container>
                <div>
                    <h2 className='manage p-2 text-light'>
                        Manage Employees
                    </h2>
                </div>
                <table border='1' width='1400' align='center' className='mt-5 border border-5 rounded' >
                    <thead >
                        <tr>
                            <th>
                                Sr.
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                Phone
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
                                                data.fname
                                            }
                                        </td>

                                        <td>
                                            {
                                                data.lname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.email
                                            }
                                        </td>


                                        <td>
                                            {
                                                data.add
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.num
                                            }
                                        </td>
                                        <td>
                                            {
                                                <>
                                                <Button className='bg-light border border-light text-primary me-2'>
                                                    <FontAwesomeIcon icon={faEye} />
                                                    </Button>
                                                    <Button className='bg-light border border-light text-warning me-2' onClick={() => handleEdit(data.id)}>
                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                    </Button>
                                                    <Button className='bg-light border border-light me-2 text-danger' onClick={() => handleDelete(data.id)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                    </Button>
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
        </>




    )
}

export default Emp

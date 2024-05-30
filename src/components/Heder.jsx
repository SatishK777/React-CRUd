import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
function Heder() {
    return (
        <Container>
            <h1 className='py-5 text-center '>
                Employee Management CRUD
            </h1>
            <Navbar>
                <Container className='header'>
                    <Navbar.Brand className='d-flex justify-content-between flex-wrap'>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div className=' w-3'>
                                <a href="#" className='text-white'>
                                    <FontAwesomeIcon icon={faHouse} />
                                </a>

                            </div>

                            <div className=' w-3'>
                                <a href="#" className='text-white'>
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                                <span className='text-white'>
                                    Employee Management
                                </span>
                            </div>
                        </div>

                    </Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export default Heder
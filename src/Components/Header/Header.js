import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl, Nav, Navbar, Form } from 'react-bootstrap';
import { UserContext } from '../../App';



const Header = () => {
    const [userId,setUserId] = useContext(UserContext);
    const{displayName, email} = userId
    console.log(displayName)

    return (
        <div className='component' >
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to='/home'>FOOD VALLEY</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/Orders'>Orders</Nav.Link>
                    <Nav.Link as={Link} to='/addMore'>Admin</Nav.Link>
                    <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link >{displayName}</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;
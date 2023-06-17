import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { apiSlice } from '../app/api/apiSlice';
import { removeToken } from '../app/localStorage/localStorage.slice';
import './styles/navbar.css'

const NavBar = () => {

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(removeToken());
        dispatch(apiSlice.util.resetApiState())
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>Users app</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="user-tab" onClick={logout}>
                        log out
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
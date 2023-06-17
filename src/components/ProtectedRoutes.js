import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

const ProtectedRoutes = () => {
    const token = useSelector(state => state.localStorage.token);
    const location = useLocation();
    if (token) {
        return (
            <>
                <NavBar />
                <Container className="my-5">
                    <Outlet />
                </Container>
            </>
        )
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default ProtectedRoutes;

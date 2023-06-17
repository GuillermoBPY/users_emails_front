import React from 'react';
import { Card } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import usersImage from '../../assets/images/users.jpg';

const AuthWrapper = () => {
    return (

        <div className="login-container">
            <Card>
                <Card.Body>
                    <Outlet />
                </Card.Body>
            </Card>
            <img src={usersImage} className="users-image" alt="" />
        </div>
    );
};

export default AuthWrapper;
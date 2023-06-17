import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeNotification } from './notificationSlice';
import './notification.css';

const Notification = () => {

    const { variant, message, show } = useSelector(state => state.notification);
    const dispatch = useDispatch();

    return (
        <div className="notification-container">
            <ToastContainer position="middle-center">
                <Toast
                    className="d-inline-block m-1 text-light"
                    bg={variant}
                    show={show} 
                    delay={5000}
                    onClose={() => dispatch(closeNotification())}  
                    autohide
                >
                    <Toast.Body className={'text-white'}>
                        {message}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
};

export default Notification;
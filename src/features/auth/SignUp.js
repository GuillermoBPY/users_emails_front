import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonLoading from '../../components/ButtonLoading';
import { useEmailVerifyMutation } from './authApiSlice';
import { addEmail } from './authSlice';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [emailVerify, { isLoading }] = useEmailVerifyMutation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const verify = async(e) => {
        e.preventDefault();
        await emailVerify({ email }).unwrap()
        dispatch(addEmail(email));
        navigate("/signup/verify_code");
    }

    return (
        <Form onSubmit={verify}>
            <h2 className="mb-5">Email Verification</h2>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Type your email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </Form.Group>
            <ButtonLoading isLoading={isLoading} type='submit'>
                Send
            </ButtonLoading>
            <p className="text-muted mt-4">
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </Form>
    );
};

export default SignUp;
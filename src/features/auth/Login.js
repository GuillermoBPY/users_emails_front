import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from './authApiSlice';
import './login.css';
import ButtonLoading from '../../components/ButtonLoading';
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/localStorage/localStorage.slice';

const Login = () => {

    const navigate = useNavigate();

    const [login, { isLoading }] = useLoginMutation()

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const submit = async credentials => {
        const userData = await login(credentials).unwrap();
        dispatch(setToken(userData.token));
        navigate("/")
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <h1 className="mb-5">Users app</h1>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email")}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                />
            </Form.Group>
            <ButtonLoading
                isLoading={isLoading}
                type='submit'
            >
                Submit
            </ButtonLoading>
            <p className="text-muted mt-2">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
            <Link to="/reset_password/email">I forgot my password</Link>
        </Form>
    );
};

export default Login;
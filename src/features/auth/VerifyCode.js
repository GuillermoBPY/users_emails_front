import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCodeVerifyQuery } from './authApiSlice';
import checkmark from '../../assets/images/checkmark.jpg';
import timesmark from '../../assets/images/timesmark.png';
import LoadingScreen from '../../components/LoadingScreen';

const VerifyCode = () => {
    const { code } = useParams();

    const { error, isLoading } = useCodeVerifyQuery(code);


    if(isLoading) return <LoadingScreen />

    console.log(error);

    if(error?.response.originalStatus === 404) return(
        <div>
            <img 
                src={timesmark} 
                alt=""  
                style={{width: 200, display: "block", margin: "0 auto"}}/>
            <h2 className="my-4">Backend haven't added the endpoint to verify :(</h2>
            <p>Go to <Link to="/login">Login</Link></p>
        </div>
    )

    if(error?.response?.status === 401) return(
        <div>
            <img 
                src={timesmark} 
                alt=""  
                style={{width: 200, display: "block", margin: "0 auto"}}/>
            <h2 className="my-4">Code not found</h2>
            <p>Go to <Link to="/login">Login</Link></p>
        </div>
    )

    return (
        <div>
            <img 
                src={checkmark} 
                alt=""  
                style={{width: 200, display: "block", margin: "0 auto"}}/>
            <h2 className="my-4">Your email was verified!</h2>
            <p>Go to <Link to="/login">Login</Link></p>
        </div>
    );
};

export default VerifyCode;
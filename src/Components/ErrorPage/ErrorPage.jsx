import { Button } from 'flowbite-react';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <div>
                <div className='text-red-400 text-3xl py-5'>
                    <p>{error.status}</p>
                    <p>{error?.error?.message}</p>
                </div>
                <Link to={'/'}><Button>Back to home</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
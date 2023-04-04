import { Spinner } from 'flowbite-react';
import React from 'react';

const Loader = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Spinner color="info" aria-label="Default status example" size="xl" />
        </div>
    );
};

export default Loader;
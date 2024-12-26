import React from 'react';

const InvalidUser = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <h1 className="text-3xl font-bold text-red-600">You are not authorised to access this page!!!</h1>
            <p className='text-gray-500'>Please keep somethings to ourselves.</p>
        </div>
    );
};

export default InvalidUser;
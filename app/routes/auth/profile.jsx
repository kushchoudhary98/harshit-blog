import React from 'react';

const Profile = () => {

    const [name, setName] = React.useState('Catylin Kiramman');
    const [email, setEmail] = React.useState('catylin@arcane.com');
    const [bio, setBio] = React.useState('I am a decorated officer of the Arcane Order, and I am here to serve the people of the realm.');

    return (
        <div className="profile-container p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Admin Profile</h1>
            <div className="profile-details flex items-center mb-6 gap-10">
                { //<img src="" alt="Profile" className="w-24 h-24 rounded-full mr-6" />
                }
                <div className='w-[200px] h-[200px] bg-red-300 rounded-full flex justify-center items-center'>Profile Picture</div>
                <div>
                    <h2 className="text-2xl font-semibold">
                        {name}
                        <span className='ml-3 text-[16px]'>edit</span>
                    </h2>
                    <p className="text-gray-600">{email}</p>
                    <p className="text-gray-600 mt-5">{bio}</p>
                </div>
            </div>
            <div className="profile-posts">
                <h2 className="text-3xl font-semibold mb-4">Recent Posts</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-2">Post Title 1</li>
                    <li className="mb-2">Post Title 2</li>
                    <li className="mb-2">Post Title 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
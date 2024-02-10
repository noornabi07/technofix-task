import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1)
    }

    useEffect(() => {
        // Fetch user details from API based on user ID
        fetch(`https://dummyjson.com/users/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user details:', error));
    }, [id]);

    return (
        <div>
            {user && (
                <div className='px-20 my-10 md:w-3/4 mx-auto'>
                    <h2 className='text-center text-lg md:text-3xl font-bold text-purple-500 mb-5'>Details For About: <span className='text-teal-600'>{user.username}</span></h2>
                    <div className="card  md:card-side border-2 border-teal-300 p-5">
                        <figure><img className='rounded-lg md:ml-10' src={user.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2><span className="font-semibold text-xl text-black">Full Name:</span> {user.firstName} {user.lastName}<span className='text-fuchsia-600 font-semibold'>{}</span></h2>
                            <h2 ><span className=" font-semibold text-xl text-black">Email:</span> {user.email}<span className='text-fuchsia-600 font-semibold'>{}</span></h2>
                            <h2 ><span className=" font-semibold text-xl text-black">Company: </span><span className='text-fuchsia-600 font-semibold'> {user.company.name}</span></h2>
                            
                            <h2 ><span className=" font-semibold text-xl text-black">Address:</span> {user.address.address} <span className='text-fuchsia-600 font-semibold'>{}</span></h2>

                            <button onClick={handleBack} className="btn w-1/3 btn-active">Back Home</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
import React from 'react';
import { Link } from 'react-router-dom';

const UserCart = ({user}) => {
    return (
        <div>
            <div className="card hover:scale-105 py-2 hover:duration-300 bg-base-100 shadow-xl">
                <figure><img src={user.image} className='w-44' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Username:
                        <Link className="badge badge-accent">{user.username}</Link>
                    </h2>
                   <div className='mt-5'>
                        <p className='text-lg text-gray-600'>Full Name: <span className='text-green-600'>{user.firstName} {user.lastName}</span></p>
                        <p className='text-lg text-gray-600'>Email: <span className='text-green-600'>{user.email}</span></p>
                        <p className='text-lg text-gray-600'>Address: <span className='text-green-600'>{user.address.address}</span></p>
                        <p className='text-lg text-gray-600'>Company: <span className='text-green-600'>{user.company.name}</span></p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default UserCart;
import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import UserCart from './UserCart';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])
    return (
        <Container>
            <div className='mt-10'>
                <h2 className='text-2xl mb-5 font-bold text-center text-emerald-700'>Search your choice users</h2>
                <div className='grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 items-center justify-evenly'>
                    {/* search by username */}
                    <div className='flex justify-center gap-3 items-center'>
                        <input type="text" placeholder="Search by username" className="input input-bordered input-accent w-full max-w-xs" />
                        <button className="btn btn-outline font-semibold btn-success">Search</button>
                    </div>

                    {/* sort by category */}
                    <div className='flex justify-center gap-3 items-center'>
                        <input type="text" placeholder="Search by category" className="input input-bordered input-accent w-full max-w-xs" />

                        <select className="select select-success w-32 max-w-xs">
                            <option disabled selected>Sort By</option>
                            <option>Name</option>
                            <option>Email</option>
                            <option>Company</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid my-20 md:grid-cols-2 grid-cols-1 xl:grid-cols-3  justify-center gap-3 md:gap-8'>
                {
                    users.map(user => <UserCart key={user.id} user={user}></UserCart>)
                }
            </div>

            <div className='flex items-center justify-center'>
                <Link to='/adduser'><button className="btn btn-wide text-white bg-green-700 text-2xl font-bold">Add New User Here</button></Link>
            </div>
        </Container>
    );
};

export default Users;
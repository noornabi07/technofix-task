import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import UserCart from './UserCart';
import { Link } from 'react-router-dom';

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data.users)
                setFilteredUsers(data.users);
            })
    }, [])

    const handleChange = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        if (users) {
            const filteredUsers = users.filter((user) =>
                user.username.toLowerCase().includes(searchTerm)
            );
            setFilteredUsers(filteredUsers);
        }
    };


    return (
        <Container>
            <div className='mt-10'>
                <h2 className='text-2xl mb-5 font-bold text-center text-emerald-700'>Search your choice users</h2>



                <div className='flex justify-center gap-3 items-center'>
                    {/* sort by category */}
                    <input type="text" placeholder="Search by category" className="input input-bordered input-accent w-full max-w-xs" />

                    <select className="select select-success w-32 max-w-xs">
                        <option disabled selected>Sort By</option>
                        <option>Name</option>
                        <option>Email</option>
                        <option>Company</option>
                    </select>
                </div>
                {/* search by username */}

                <div className='flex justify-center mt-10'>
                    <input value={searchTerm} onChange={handleChange} type="text" placeholder="Search by username" className="input input-bordered input-accent w-full max-w-md" />

                </div>


            </div>
            <div className='grid my-20 md:grid-cols-2 grid-cols-1 xl:grid-cols-3  justify-center gap-3 md:gap-8'>
                {
                    filteredUsers.map(user => <UserCart key={user.id} user={user}></UserCart>)
                }
            </div>

            <div className='flex items-center justify-center'>
                <Link to='/adduser'><button className="btn btn-wide text-white bg-green-700 text-2xl font-bold">Add New User Here</button></Link>
            </div>
        </Container>
    );
};

export default Users;
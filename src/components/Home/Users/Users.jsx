import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import UserCart from './UserCart';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data => setUsers(data.users))
    }, [])
    return (
        <Container>
            <div className='grid my-20 md:grid-cols-2 grid-cols-1 xl:grid-cols-3  justify-center gap-3 md:gap-8'>
                {
                    users.map(user => <UserCart key={user.id} user={user}></UserCart>)
                }
            </div>
        </Container>
    );
};

export default Users;
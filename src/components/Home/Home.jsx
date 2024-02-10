import React from 'react';
import Banner from './Banner/Banner';
import Users from './Users/Users';
import AddUser from '../AddUser/UserList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Users></Users>
        </div>
    );
};

export default Home;
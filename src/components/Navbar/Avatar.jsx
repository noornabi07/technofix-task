import React from 'react';
import avatar from '../../assets/placeholder.jpg'

const Avatar = () => {
    return (
        <div>
            <img src={avatar} className='rounded-full' height='30' width='30' alt="Profile" />
        </div>
    );
};

export default Avatar;
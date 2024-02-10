import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Container from '../Container/Container';

const UserList = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        companyName: ''
      });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: Date.now(), ...formData };
    
        // Get existing users array from localStorage
        const existingUsers = localStorage.getItem('users');
        let users = [];
    
        if (existingUsers) {
          // If users array exists in localStorage, parse it
          users = JSON.parse(existingUsers);
        }
    
        // Add the new user to the users array
        users.push(newUser);
    
        // Save the updated users array back to localStorage
        localStorage.setItem('users', JSON.stringify(users));
    
        // Clear form fields
        setFormData({ firstName: '', lastName: '', email: '', address: '', companyName: '' });
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your user information saved",
            showConfirmButton: false,
            timer: 1500
          });
      };

    return (
        <Container>
            <div className=' px-10 py-5 mt-8 -mb-20 bg-gray-200 rounded-xl'>
                <form onSubmit={handleSubmit}>
                    {/* reciepe name input */}
                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">First Name*</span>
                            </label>
                            <input name="firstName" value={formData.firstName} onChange={handleInputChange} type="text" placeholder="First Name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Last Name*</span>
                            </label>
                            <input name="lastName" value={formData.lastName} onChange={handleInputChange} type="text" placeholder="Last Name" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Email*</span>
                            </label>
                            <input  name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="Enter Email" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Address*</span>
                            </label>
                            <input name="address" value={formData.address} onChange={handleInputChange} type="text" placeholder="Adress" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Company Name*</span>
                            </label>
                            <input name="companyName" value={formData.companyName} onChange={handleInputChange} type="text" placeholder="company name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">User Image*</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    
                    <div className='text-center'>
                        <input className='btn text-white font-semibold text-lg mt-4 text-center btn-wide bg-green-700 border-none' type="submit" value="Add User" />

                    </div>
                </form>
            </div>
        </Container>
    );
};

export default UserList;
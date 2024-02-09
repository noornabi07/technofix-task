import React from 'react';
import Container from '../Container/Container';

const AddUser = () => {
    return (
        <Container>
            <div className=' px-10 py-5 mt-8 bg-gray-200 rounded-xl'>
                <form onSubmit={''}>
                    {/* reciepe name input */}
                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">First Name*</span>
                            </label>
                            <input type="text" placeholder="First name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">First Name*</span>
                            </label>
                            <input type="text" placeholder="First name" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Email*</span>
                            </label>
                            <input type="email" placeholder="First name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Address*</span>
                            </label>
                            <input type="text" placeholder="First name" className="input input-bordered w-full " />
                        </div>
                    </div>

                    <div className='md:flex items-center justify-between gap-5'>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">Company Name*</span>
                            </label>
                            <input type="email" placeholder="company name" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold text-green-700">User Image*</span>
                            </label>
                            <input type="file" className="file-input file-input-bordered w-full " />
                        </div>
                    </div>
                    
                    <div className='text-center'>
                        <input className='btn text-white font-semibold text-lg mt-4 text-center btn-wide bg-green-700 border-none' type="submit" value="Add New Item" />
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default AddUser;
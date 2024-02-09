import React from 'react';
import banner from '../../../assets/banner.png'
import Container from '../../Container/Container';
import './Banner.css'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
    return (
        <Container>
            <div className='mt-5 bgcolor rounded-2xl'>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={banner} className="max-w-sm" />
                        <div>
                            <h1 className="text-5xl font-bold">Technofix Task Here</h1>
                            <p className="py-6 font-semibold text-gray-500">I am a front-end web developer. If I get the opportunity to work in your company, I will prioritize the work with my highest. I will finish the work on time. Hope you give me a chance</p>

                            <div className='flex mt-7 items-center justify-center bg-green-500	 w-44 rounded-2xl'>
                                <button className='p-2 text-black'>Subscribes here</button>
                                <FaArrowRight className='text-black mt-1'></FaArrowRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Banner;
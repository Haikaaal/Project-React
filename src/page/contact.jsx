import { Form } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[#ffffff] 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Made by Haikal</h1>
                    
                    <a href="https://github.com/Haikaaal" className="flex items-center space-x-2">
                        <FaGithub className="text-xl" />
                        <span>Github</span>
                    </a>

                    <a href="/" className="text-blue-500 mt-4"> --Back to Home</a>
                </div>
                <div className="w-full lg:w-8/12">
                    <img className="w-full h-full" src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/04/2024/03/22/ilham21-3396387015.png" alt="A group of People" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

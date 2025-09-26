import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='border-t'>
        <div className='container mx-auto p-5 text-center flex flex-col lg:flex-row lg:justify-between gap-2'>
            <p>© All Rights Reserved 2024</p>

            <div className='flex items-center gap-6 justify-center text-2xl'>
                <a href='' className='hover:text-primary-100'>
                    <FaFacebook/>
                </a>

                <a href='' className='hover:text-primary-100'>
                    <FaInstagram/>
                </a>

                <a href='' className='hover:text-primary-100'>
                <FaLinkedin />
                </a>

            </div>

        </div>

    </footer>
  )
}

export default Footer
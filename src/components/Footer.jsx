"use client"
import React from 'react'
import Link from "next/link"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer className="flex flex-col bg-gray-800 text-white py-10">
            <div className='flex flex-row p-10'>
                <div className='redes sociales w-1/4'>
                    <h2>Nos puedes encontrar tambien en:</h2>
                    <div className='flex gap-5 justify-start align-middle'>
                        <Link href="/" >
                            <InstagramIcon fontSize='large'/>
                        </Link>
                        <Link href="/" >
                            <FacebookIcon fontSize='large'/>
                        </Link>
                        <Link href="/" >
                            <YouTubeIcon fontSize='large'/>
                        </Link>
                    </div>
                    
                    
                </div>
                <div className='flex flex-row p-5 w-3/4'>
                    <div>
                        <h2 className='text-[#1D8647]'>Sobre la empresa</h2>
                        <ul>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                        </ul>   
                    </div>
                    <div>
                        <h2>Sobre la empresa</h2>
                        <ul>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                        </ul>   
                    </div>
                    <div>
                        <h2>Sobre la empresa</h2>
                        <ul>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                            <li>
                                <div className='text-white text-center rounded-md w-[150px] p-3 hover:underline decoration-2 decoration-white '>
                                    <Link href="/" >
                                        Log in
                                    </Link>
                                </div>  
                            </li>
                        </ul>   
                    </div>      
                </div>
            </div>
            
            <div className="container mx-auto text-center">
                <p>&copy; 2025 AdminCash. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
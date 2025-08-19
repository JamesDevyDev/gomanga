'use client'

import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { usePathname } from "next/navigation";
import Drawer from "./Drawer";

const Header = () => {

    const pathname = usePathname()

    return (
        <div>

            <div className="w-[100vw] h-[150px] overflow-hidden relative ">

                {/* <div className='w-full h-[100%] relative z-[5]  flex '>

                    <div className=' w-[100%] h-[100%] px-[50px] items-center justify-start hidden md:flex'>
                        <Link href='/' className='mr-[30px]'>
                            <img src='/header/logo.png' className='w-[100px] h-[100px]' />
                        </Link>

                        <Link
                            href="/manga-list/1"
                            className="h-[100%] w-[100px] flex items-center justify-center font-bold text-neutral-400 relative group cursor-pointer transition-colors duration-100"
                        >
                            <div
                                className={`${pathname.startsWith('/manga-list') && 'text-yellow-500'
                                    } group-hover:text-yellow-500`}
                            >
                                Manga List
                            </div>
                            <div
                                className={`${pathname.startsWith('/manga-list') && 'bg-yellow-500'
                                    } absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500`}
                            ></div>
                        </Link>

                        <Link href='/genre' className="h-[100%] w-[100px] flex items-center justify-center font-bold text-neutral-400  relative group cursor-pointer transition-colors duration-100">
                            <div className={`${pathname === '/genre' && 'text-yellow-500'} group-hover:text-yellow-500`}>
                                Genre
                            </div>
                            <div className={`${pathname === '/genre' && 'bg-yellow-500'} absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500`}></div>
                        </Link>

                    </div>

                    <div className='w-[100%] h-[100%] px-[50px] flex md:hidden items-center justify-between '>
                        <Link href='/' className='mr-[30px]'>
                            <img src='/header/logo.png' className='w-[100px] h-[100px]' />
                        </Link>

                        <div>
                            <Drawer />
                        </div>
                    </div>
                </div> */}

                <div className='w-[100%] h-[100%] px-[50px] flex md:hidden items-center justify-between z-[50]'>
                    <Link href='/' className='mr-[30px]'>
                        <img src='/header/logo.png' className='w-[100px] h-[100px]' />
                    </Link>

                    <div>
                        <Drawer />
                    </div>
                </div>
            </div>

            <div className='absolute  left-0 top-0 z-[-50]'>
                <Marquee gradient={false} speed={40}>
                    <img
                        src="/header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                    <img
                        src="/header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                    <img
                        src="/header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                </Marquee>
            </div>

        </div>


    );
};

export default Header;

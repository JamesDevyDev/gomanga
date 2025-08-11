import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <div className="w-[100vw] h-[150px] overflow-hidden relative bg-red-500">
            <div className='w-[100%] h-[100%] absolute z-[5] bg-red-300/20 flex items-center justify-start px-[50px]'>
                <Link href='/'>
                    <img src='./header/logo.png' className='w-[100px] h-[100px]' />
                </Link>

                {/* navbar */}
                <div className=' w-[100%] h-[100%] px-[50px] flex items-center justify-start'>

                    <div className="h-[100%] w-[100px] flex items-center justify-center font-bold text-white  relative group cursor-pointer transition-colors duration-100">
                        <div className='group-hover:text-yellow-500'>
                            Home
                        </div>
                        <div className="absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500"></div>
                    </div>


                    <div className="h-[100%] w-[100px] flex items-center justify-center font-bold text-white  relative group cursor-pointer transition-colors duration-100">
                        <div className='group-hover:text-yellow-500'>
                            Genre
                        </div>
                        <div className="absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500"></div>
                    </div>



                </div>
            </div>

            <div className='absolute '>
                <Marquee gradient={false} speed={40}>
                    <img
                        src="./header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                    <img
                        src="./header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                    <img
                        src="./header/bgheader.png"
                        className="h-[100%]"
                        alt="Header background"
                    />
                </Marquee>
            </div>

        </div>
    );
};

export default Header;

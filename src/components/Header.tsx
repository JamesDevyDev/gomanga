'use client'

import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { usePathname, useRouter } from "next/navigation";
import Drawer from "./Drawer";
import { Search } from "lucide-react";



const Header = () => {
    const pathname = usePathname();
    const router = useRouter()

    const [search, setSearch] = useState('')

    const searchFunction = () => {
        if (!search) return
        const formatted = search.trim().replace(/\s+/g, "_")
        router.push(`/search/${formatted}`)
    }

    return (
        <div>
            <div className="w-[100vw] h-[150px] overflow-hidden relative bg-red-700/5">
                <div className="w-full h-full flex items-center justify-between px-[50px]">
                    {/* Large screen */}
                    <div className="w-[100%] h-[100%] items-center justify-start hidden md:flex z-[50]">
                        <Link href="/" className="mr-[30px]">
                            <img src="/header/logo.png" className="w-[100px] h-[100px]" />
                        </Link>

                        <Link
                            href="/manga-list/1"
                            className="h-[100%] w-[100px] flex items-center justify-center font-bold text-neutral-400 relative group cursor-pointer transition-colors duration-100"
                        >
                            <div
                                className={`${pathname.startsWith("/manga-list") && "text-yellow-500"
                                    } group-hover:text-yellow-500`}
                            >
                                Manga List
                            </div>
                            <div
                                className={`${pathname.startsWith("/manga-list") && "bg-yellow-500"
                                    } absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500`}
                            ></div>
                        </Link>

                        <Link
                            href="/genre"
                            className="h-[100%] w-[100px] flex items-center justify-center font-bold text-neutral-400  relative group cursor-pointer transition-colors duration-100"
                        >
                            <div
                                className={`${pathname === "/genre" && "text-yellow-500"
                                    } group-hover:text-yellow-500`}
                            >
                                Genre
                            </div>
                            <div
                                className={`${pathname === "/genre" && "bg-yellow-500"
                                    } absolute bottom-0 w-full h-[6.5px] transition-colors duration-100 group-hover:bg-yellow-500`}
                            ></div>
                        </Link>
                    </div>

                    {/* Fixed search bar */}
                    <form className="hidden md:flex items-center relative" onSubmit={(e) => {
                        e.preventDefault()
                        searchFunction()
                    }}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-[350px] px-3 py-2 rounded-lg border border-black outline-none focus:ring-2 focus:ring-white text-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="absolute right-2 cursor-pointer" type="submit">
                            <Search size={22} className="text-white" />
                        </button>
                    </form>

                    {/* Small screen */}
                    <div className="w-[100%] h-[100%] flex md:hidden items-center justify-between z-[50]">
                        <Link href="/" className="mr-[30px]">
                            <img src="/header/logo.png" className="w-[100px] h-[100px]" />
                        </Link>
                        <div>
                            <Drawer />
                        </div>
                    </div>

                </div>
            </div>

            {/* Infinite Marquee */}
            <div className="absolute left-0 top-0 z-[-50]">
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

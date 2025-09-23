import React, { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const DrawerStyle = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(true); // mock user login state

    const searchFunction = () => {
        if (!search) return;
        const formatted = search.trim().replace(/\s+/g, "_");
        router.push(`/search/${formatted}`);
        closeDrawer();
    };

    const closeDrawer = () => {
        const checkbox = document.getElementById("my-drawer") as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className="drawer z-70">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-center min-h-screen">
                {/* Open drawer button */}
                <label
                    htmlFor="my-drawer"
                    className="btn border-none bg-red-700/50 drawer-button text-white flex items-center gap-2"
                >
                    <Menu className="w-6 h-6" />
                </label>
            </div>

            <div className="drawer-side fixed inset-0 z-[9999]">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay backdrop-blur-sm bg-black/40"
                ></label>

                <div className="min-h-full w-[300px] p-6 pt-[100px] text-white relative z-[50]">
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/70 to-red-800 opacity-95" />

                    {/* Close button */}
                    <label
                        htmlFor="my-drawer"
                        className="absolute top-4 right-4 z-20 cursor-pointer text-white hover:text-red-400 bg-black/70 p-[12px] rounded"
                    >
                        <X className="w-7 h-7" />
                    </label>

                    <ul className="menu relative z-10 flex flex-col gap-4 uppercase font-medium tracking-wide w-full">

                        {/* Static Visit & Read Count */}
                        <div className="h-[100px] w-full flex items-center justify-center gap-[10px]">
                            {/* Visit Count */}
                            <div className="w-[100px] h-[100px] rounded-lg border-2 border-gray-600 bg-black/50 text-white flex items-center justify-center flex-col">
                                <div className="font-bold text-[25px] text-red-400">123</div>
                                <div className="font-bold text-[11px]">VISIT COUNT</div>
                            </div>

                            {/* Read Count */}
                            <div className="w-[100px] h-[100px] rounded-lg border-2 border-gray-600 bg-black/50 text-white flex items-center justify-center flex-col">
                                <div className="font-bold text-[25px] text-red-400">45</div>
                                <div className="font-bold text-[11px]">READ COUNT</div>
                            </div>
                        </div>

                        {/* Search bar */}
                        <form
                            className="relative w-full mb-6"
                            onSubmit={(e) => {
                                e.preventDefault();
                                searchFunction();
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full h-[55px] pl-4 pr-12 rounded-lg border border-gray-600 bg-black/50 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                type="submit"
                            >
                                <Search size={24} className="text-white" />
                            </button>
                        </form>

                        {/* Links */}
                        <Link
                            href="/manga-list/1"
                            onClick={closeDrawer}
                            className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-red-400"
                        >
                            Manga List
                        </Link>
                        <Link
                            href="/genre"
                            onClick={closeDrawer}
                            className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-red-400"
                        >
                            Genre
                        </Link>

                        {isLoggedIn && <div>
                            <div
                                className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-red-400 cursor-pointer"
                            >
                                Liked Mangas
                            </div>
                            <div
                                className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-red-400 cursor-pointer"
                            >
                                User Settings
                            </div>
                        </div>}

                        {/* Auth Section */}
                        {!isLoggedIn ? (
                            <div className="flex flex-col gap-3 mt-6">
                                <Link
                                    href="/auth/register"
                                    onClick={closeDrawer}
                                    className="w-full h-[40px] flex items-center justify-center rounded-md bg-black/50 border border-gray-500 hover:bg-yellow-500 hover:text-black font-semibold"
                                >
                                    Register
                                </Link>
                                <Link
                                    href="/auth/login"
                                    onClick={closeDrawer}
                                    className="w-full h-[40px] flex items-center justify-center rounded-md bg-black/50 border border-gray-500 hover:bg-yellow-500 hover:text-black font-semibold"
                                >
                                    Login
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4 mt-6">
                                <div className="flex items-center gap-3 bg-black/50 border border-gray-500 rounded-md p-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black">
                                        JT
                                    </div>
                                    <div>
                                        <p className="font-bold">James Talamo</p>
                                        <p className="text-sm text-gray-300">Premium User</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="w-full h-[40px] flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DrawerStyle;

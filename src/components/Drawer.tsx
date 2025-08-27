import React from "react";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DrawerStyle = () => {
    const router = useRouter()

    const [search, setSearch] = useState('')

    const searchFunction = () => {
        if (!search) return
        const formatted = search.trim().replace(/\s+/g, "_")
        router.push(`/search/${formatted}`)
        closeDrawer()
    }

    // Function to close drawer
    const closeDrawer = () => {
        const checkbox = document.getElementById("my-drawer") as HTMLInputElement;
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div className="drawer z-[50]">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex items-center justify-center min-h-screen">
                {/* Page content here */}
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

                <div className="min-h-full w-full p-6 pt-[100px] text-white relative z-[50]">
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
                        {/* Fixed search bar */}
                        <form className="relative w-full mb-6" onSubmit={(e) => {
                            e.preventDefault()
                            searchFunction()
                        }}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full h-[55px] pl-4 pr-12 rounded-lg border border-gray-600 bg-black/50 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" type="submit">
                                <Search size={24} className="text-white" />
                            </button>
                        </form>

                        <Link
                            href="/manga-list/1"
                            onClick={closeDrawer}
                            className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-yellow-400"
                        >
                            Manga List
                        </Link>
                        <Link
                            href="/genre"
                            onClick={closeDrawer}
                            className="p-[20px] font-bold text-[20px] flex items-center justify-start hover:text-yellow-400"
                        >
                            Genre
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DrawerStyle;

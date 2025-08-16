import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const DrawerStyle = () => {
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
                    className="btn border-none  bg-red-700/50 drawer-button text-white flex items-center gap-2 "
                >
                    <Menu className="w-6 h-6" />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay backdrop-blur-sm bg-black/40 "
                ></label>

                <div className="min-h-full w-[100%] p-6 text-white relative z-[50]">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/70 to-red-800 opacity-95" />

                    <label
                        htmlFor="my-drawer"
                        className="absolute top-4 right-4 z-20 cursor-pointer text-white hover:text-red-400 bg-black/70 p-[12px] rounded"
                    >
                        <X className="w-7 h-7" />
                    </label>

                    <ul className="menu relative z-10 flex flex-col gap-4 uppercase font-medium tracking-wide">
                        <Link
                            href="/manga-list/1"
                            onClick={closeDrawer}
                            className="p-[25px] font-bold text-[20px] flex items-center justify-start"
                        >
                            Manga List
                        </Link>
                        <Link
                            href="/genre"
                            onClick={closeDrawer}
                            className="p-[25px] font-bold text-[20px] flex items-center justify-start"
                        >
                            Genre
                        </Link>
                    </ul>

                    {/* Footer links */}
                    {/* <div className="absolute bottom-6 w-full text-sm grid grid-cols-2 gap-2 px-2 z-10">
                        <a className="text-gray-300 hover:text-white">Help</a>
                        <a className="text-gray-300 hover:text-white">News and Events</a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DrawerStyle;

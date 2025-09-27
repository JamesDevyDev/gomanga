import React, { useEffect, useState } from "react";
import { Menu, X, Search, Github } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuthStore from "@/zustand/useAuthStore";
import useMangaStore from "@/zustand/useMangaStore";

const DrawerStyle = () => {

    const { getAuthUserFunction, authUser, LogoutFunction } = useAuthStore()
    const { getVisitCount, getReadCount, visitCount, readCount } = useMangaStore()


    const [isLoadingViews, setIsLoadingViews] = useState(false)
    const [isLoadingReads, setIsLoadingReads] = useState(false)


    useEffect(() => {
        const fetchCounts = async () => {
            setIsLoadingViews(true);
            setIsLoadingReads(true);
            await getVisitCount();
            await getReadCount();
            setIsLoadingViews(false);
            setIsLoadingReads(false);
        };
        getAuthUserFunction()
        fetchCounts();
    }, []);

    const router = useRouter();
    const [search, setSearch] = useState("");

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

                <div className="min-h-full w-[300px] px-6 text-white relative z-[50] ">

                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/70 to-red-800 opacity-95" />

                    <Link href='/manga-list/1' className="relative w-[100%] flex items-center justify-center h-[100px]">
                        <img src="/header/logo.png" className="w-[100px] h-[100px]" />
                    </Link>

                    <ul className="menu relative z-10 flex flex-col uppercase font-medium tracking-wide w-full">

                        {/* Static Visit & Read Count */}
                        <div className='h-[100px] w-full flex items-center justify-center gap-[10px]'>
                            <div className='w-[100px] h-[100px] rounded-lg border-2 border-black/70 bg-black/50 text-black relative flex items-center justify-center flex-col'>
                                {
                                    isLoadingViews
                                        ? <span className="loading loading-spinner loading-lg text-red-500"></span>
                                        : <>
                                            <div className='font-bold text-[25px] text-red-500'>
                                                {visitCount}
                                            </div>
                                            <div className='font-bold text-[11px] text-white'>
                                                VISIT COUNT
                                            </div>
                                        </>
                                }
                            </div>

                            <div className='w-[100px] h-[100px] rounded-lg border-2 border-black/70 bg-black/50 text-black relative flex items-center justify-center flex-col'>
                                {
                                    isLoadingReads
                                        ? <span className="loading loading-spinner loading-lg text-red-500"></span>
                                        : <>
                                            <div className='font-bold text-[25px] text-red-500'>
                                                {readCount}
                                            </div>
                                            <div className='font-bold text-[11px] text-white'>
                                                READ COUNT
                                            </div>
                                        </>
                                }
                            </div>
                        </div>

                        {/* Search bar */}
                        <form
                            className="relative w-full py-5"
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
                            className="p-[16px] font-bold text-[16px] flex items-center justify-start hover:text-red-400"
                        >
                            Manga List
                        </Link>
                        <Link
                            href="/genre"
                            onClick={closeDrawer}
                            className="p-[16px] font-bold text-[16px] flex items-center justify-start hover:text-red-400"
                        >
                            Genre
                        </Link>

                        {authUser && <div>
                            <Link
                                href='/likedManga'
                                className="p-[16px] font-bold text-[16px] flex items-center justify-start hover:text-red-400 cursor-pointer"
                            >
                                Liked Mangas
                            </Link>
                            {/* <div
                                className="p-[16px] font-bold text-[16px] flex items-center justify-start hover:text-red-400 cursor-pointer"
                            >
                                User Settings
                            </div> */}
                        </div>}

                        {/* Auth Section */}
                        {!authUser ? (
                            <div className="flex flex-col gap-3">
                                <Link
                                    href="/auth/login"
                                    onClick={closeDrawer}
                                    className="w-full h-[40px] flex items-center justify-center rounded-md bg-black/50 border border-gray-500 hover:bg-red-500 hover:text-black font-semibold"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/auth/register"
                                    onClick={closeDrawer}
                                    className="w-full h-[40px] flex items-center justify-center rounded-md bg-black/50 border border-gray-500 hover:bg-red-500 hover:text-black font-semibold"
                                >
                                    Register
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">

                                <div className="flex items-center gap-3 bg-black/50 border border-gray-500 rounded-md p-3">
                                    <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center font-bold text-black">
                                        {authUser?.username.split("")[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold">{authUser?.username}</p>
                                        <p className="text-sm text-gray-300">
                                            {authUser?.createdAt
                                                ? new Date(authUser.createdAt).toLocaleString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })
                                                : ""}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        LogoutFunction()
                                    }}
                                    className="bg-black/50 border border-gray-500 w-full h-[40px] flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold cursor-pointer"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </ul>

                    <div className='flex items-center justify-center flex-col absolute left-[50%] translate-x-[-50%] bottom-[1%] w-full'>

                        <p className='text-[10px] w-full text-white text-center mb-3'>
                            API : <span className='underline'><Link href='https://GOMANGA-API.vercel.app'>GOMANGA-API.vercel.app</Link></span>
                        </p>
                        <Link
                            title="https://github.com/JamesDevyDev"
                            href="https://github.com/JamesDevyDev"
                            className="w-[35px] h-[35px] bg-gray-900 rounded-lg flex items-center justify-center cursor-pointer"
                        >
                            <Github color={"#b91c1c"} />
                        </Link>
                        <div className="text-[9px] text-center text-gray-200 mt-[5px]">
                            show love by following my github.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerStyle;

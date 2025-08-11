'use client'

import React, { useEffect, useState } from 'react'
import useMangaStore from '@/zustand/useMangaStore'

const MangaDetails = ({ manga }: { manga: string }) => {
    const { getMangaDetails, mangaDetails } = useMangaStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getMangaDetails(manga).finally(() => setLoading(false))
    }, [manga])

    return (
        <div className="bg-neutral-900 w-[100vw] overflow px-[50px] py-[50px]">
            <div className='flex items-center justify-between flex-col lg:flex-row'>

                {/* Image */}
                <div className='w-[270px] h-[320px]'>
                    {loading ? (
                        <div className="skeleton rounded-none w-full h-full"></div>
                    ) : (
                        <img src={mangaDetails?.imageUrl} className='w-full h-full' />
                    )}
                </div>

                {/* Right Section */}
                <div className='h-[320px] w-full mt-[50px] lg:mt-[0px] pl-[0px] lg:pl-[50px]'>

                    {/* Title */}
                    {loading ? (
                        <div className="skeleton rounded-none h-[100px] w-full rounded-xl"></div>
                    ) : (
                        <div className="h-[100px] bg-gradient-to-r from-black to-transparent text-white font-bold text-[25px] flex items-center justify-center rounded-xl relative">
                            {mangaDetails?.title}
                        </div>
                    )}

                    {/* Info */}
                    <div className='w-full h-[100%] relative'>
                        <div className='font-bold text-white py-[20px] text-[15px]'>INFORMATION</div>
                        <div className='w-[100%] h-[1px] bg-gray-500 mb-4'></div>

                        {loading ? (
                            <div className="space-y-2">
                                <div className="skeleton rounded-none h-4 w-1/2"></div>
                                <div className="skeleton rounded-none h-4 w-1/3"></div>
                                <div className="skeleton rounded-none h-4 w-2/3"></div>
                                <div className="skeleton rounded-none h-4 w-1/4"></div>
                                <div className="skeleton rounded-none h-4 w-3/4"></div>
                                <div className="skeleton rounded-none h-4 w-1/5"></div>
                            </div>
                        ) : (
                            <div className='text-neutral-400 text-sm space-y-1'>
                                <p><span className="font-bold text-white">Author:</span> {mangaDetails?.author}</p>
                                <p><span className="font-bold text-white">Status:</span> {mangaDetails?.status}</p>
                                <p><span className="font-bold text-white">Last Updated:</span> {mangaDetails?.lastUpdated}</p>
                                <p><span className="font-bold text-white">Views:</span> {mangaDetails?.views}</p>
                                <p>
                                    <span className="font-bold text-white">Genres:</span>{" "}
                                    {mangaDetails?.genres?.join(", ")}
                                </p>
                                <p><span className="font-bold text-white">Rating:</span> {mangaDetails?.rating}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='w-full min-h-[100vh] bg-blue-500 mt-[50px]'></div>
        </div>
    )
}

export default MangaDetails

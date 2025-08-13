'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useMangaStore from '@/zustand/useMangaStore'


const MangaDetails = ({ manga }: { manga: string }) => {
    const { getMangaDetails, mangaDetails } = useMangaStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getMangaDetails(manga).finally(() => setLoading(false))
    }, [manga])

    const latestChapter = mangaDetails?.chapters?.[0]
    const oldestChapter = mangaDetails?.chapters?.[mangaDetails?.chapters?.length - 1]

    return (
        <div className="bg-neutral-900 w-[100vw] overflow px-[50px] py-[50px]">
            <div className='flex items-center justify-between flex-col lg:flex-row'>

                <div className='w-[270px] h-[320px]'>
                    {loading ? (
                        <div className="skeleton rounded-none w-full h-full"></div>
                    ) : (
                        <img src={mangaDetails?.imageUrl} className='w-full h-full' />
                    )}
                </div>

                <div className='h-[320px] w-full mt-[50px] lg:mt-[0px] pl-[0px] lg:pl-[50px]'>

                    {loading ? (
                        <div className="skeleton rounded-none h-[100px] w-full rounded-xl"></div>
                    ) : (
                        <div className="h-[100px] bg-gradient-to-r from-black to-transparent text-white font-bold text-[25px] flex items-center justify-center rounded-xl relative">
                            {mangaDetails?.title}
                        </div>
                    )}

                    <div className='w-full h-[100%] relative'>
                        <div className='font-bold text-white py-[20px] text-[15px]'>INFORMATION</div>
                        <div className='w-[100%] h-[1px] bg-gray-500 mb-4'></div>

                        {loading ? (
                            <div className="space-y-2">
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <div key={idx} className="skeleton rounded-none h-4 w-1/2"></div>
                                ))}
                            </div>
                        ) : (
                            <div className='text-neutral-400 text-sm space-y-1'>
                                <p><span className="font-bold text-white">Author:</span> {mangaDetails?.author}</p>
                                <p><span className="font-bold text-white">Status:</span> {mangaDetails?.status}</p>
                                <p><span className="font-bold text-white">Last Updated:</span> {mangaDetails?.lastUpdated}</p>
                                <p><span className="font-bold text-white">Views:</span> {mangaDetails?.views}</p>
                                <p><span className="font-bold text-white">Genres:</span> {mangaDetails?.genres?.join(", ")}</p>
                                <p><span className="font-bold text-white">Rating:</span> {mangaDetails?.rating}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='w-full min-h-[50vh] mt-[50px]'>
                <div className="flex justify-between items-center mb-4">
                    <h2 className='text-white text-xl font-bold'>Chapters</h2>
                    {!loading && mangaDetails?.chapters?.length > 0 && (
                        <div className="flex gap-2">
                            <Link
                                href={`/manga-details/${manga}/${latestChapter?.chapterId}`}
                                className="cursor-pointer bg-red-500 hover:bg-red-700 px-4 py-2  text-white text-sm font-bold relative z-50"
                            >
                                Read Latest
                            </Link>
                            <Link
                                href={`/manga-details/${manga}/${oldestChapter?.chapterId}`}
                                className="cursor-pointer bg-red-500 hover:bg-red-700 px-4 py-2  text-white text-sm font-bold relative z-50"
                            >
                                Read Oldest
                            </Link>
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="space-y-3">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <div key={idx} className="skeleton rounded-none h-12 w-full"></div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col space-y-3">
                        {mangaDetails?.chapters?.map((chapter: any) => (
                            <Link
                                href={`/manga-details/${manga}/${chapter?.chapterId}`}
                                key={chapter.chapterId}
                                className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-3  text-white flex justify-between items-center"
                            >
                                <span className='font-bold'>Chapter {chapter.chapterId}</span>
                                <div className="text-sm text-gray-400">
                                    {chapter.uploaded} • {chapter.views} views
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MangaDetails

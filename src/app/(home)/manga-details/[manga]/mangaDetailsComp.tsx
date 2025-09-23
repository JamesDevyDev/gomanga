'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import useMangaStore from '@/zustand/useMangaStore'

const MangaDetails = ({ manga }: { manga: string }) => {
    const { getMangaDetails, mangaDetails } = useMangaStore()
    const [loading, setLoading] = useState(true)
    const [reverseOrder, setReverseOrder] = useState(true) // 🔥 new state

    useEffect(() => {
        setLoading(true)
        getMangaDetails(manga).finally(() => setLoading(false))
    }, [manga])

    const latestChapter = mangaDetails?.chapters?.[0]
    const oldestChapter = mangaDetails?.chapters?.[mangaDetails?.chapters?.length - 1]

    // handle toggle
    const toggleOrder = () => setReverseOrder((prev) => !prev)

    return (
        <div className="bg-neutral-900 w-[100vw] overflow px-[50px] md:px-[150px] py-[50px]">

            {/* Banner + info */}
            <div className="relative flex items-center justify-between flex-col lg:flex-row h-auto ">

                {/* Banner */}
                <div className="absolute left-[-150px] right-[-150px] top-0 bottom-0 my-[-25px] overflow-hidden">
                    <img
                        src={mangaDetails?.imageUrl}
                        alt="Manga Background"
                        className="w-full h-full object-cover opacity-70 blur-lg"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Poster */}
                <div className="w-[270px] h-[320px] z-10">
                    {loading ? (
                        <div className="skeleton rounded-none w-full h-full"></div>
                    ) : (
                        <img src={mangaDetails?.imageUrl} className="w-full h-full" />
                    )}
                </div>

                {/* Details */}
                <div className="w-full mt-[50px] lg:mt-0 pl-0 lg:pl-[50px] z-10">
                    {loading ? (
                        <div className="skeleton rounded-none h-[100px] w-full rounded-xl"></div>
                    ) : (
                        <div className="h-[100px] bg-gradient-to-r from-black to-transparent text-white font-bold text-xl md:text-[32px] flex items-center justify-center rounded-xl relative">
                            {mangaDetails?.title}
                        </div>
                    )}

                    <div className="w-full h-full relative">
                        <div className="font-bold text-white py-[20px] text-[15px]">INFORMATION</div>
                        <div className="w-full h-[1px] bg-gray-500 mb-4"></div>

                        {loading ? (
                            <div className="space-y-2">
                                {Array.from({ length: 6 }).map((_, idx) => (
                                    <div key={idx} className="skeleton rounded-none h-4 w-1/2"></div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-neutral-400 text-sm space-y-1">
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


            {/* Chapters */}
            <div className="w-full min-h-[50vh] mt-[50px]">
                <div className="flex justify-between items-end flex-col gap-4 mb-4">
                    {!loading && mangaDetails?.chapters?.length > 0 && (
                        <div className="flex gap-2">

                            <Link
                                href={`/manga-details/${manga}/${latestChapter?.chapterId}`}
                                className="cursor-pointer bg-red-500 hover:bg-red-700 px-4 py-1 md:py-2 text-white md:text-sm font-bold relative z-50"
                            >
                                Read Latest
                            </Link>
                            <Link
                                href={`/manga-details/${manga}/${oldestChapter?.chapterId}`}
                                className="cursor-pointer bg-red-500 hover:bg-red-700 px-4 py-1 md:py-2 text-white md:text-sm font-bold relative z-50"
                            >
                                Read Oldest
                            </Link>
                        </div>
                    )}

                    <h2 className="text-white text-xl font-bold">Chapters</h2>
                    <button
                        onClick={toggleOrder}
                        className="cursor-pointer bg-red-400 hover:bg-red-500 px-4 py-1 md:py-2 text-white text-sm font-bold relative z-50"
                    >
                        {reverseOrder ? 'Reverse Order' : 'Undo reverse order'}
                    </button>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <div key={idx} className="skeleton rounded-none h-12 w-full"></div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {(reverseOrder
                            ? [...mangaDetails?.chapters].reverse()
                            : mangaDetails?.chapters
                        ).map((chapter: any) => (
                            <Link
                                href={`/manga-details/${manga}/${chapter?.chapterId}`}
                                key={chapter.chapterId}
                                className="bg-neutral-800 hover:bg-neutral-700 transition-colors p-3 text-white flex justify-between items-center"
                            >
                                <span className="font-bold">Chapter {chapter.chapterId}</span>
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

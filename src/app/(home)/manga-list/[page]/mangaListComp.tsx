'use client'
import React, { useEffect, useState } from 'react'
import useMangaStore from '@/zustand/useMangaStore'
import Link from 'next/link'

const MangaList = ({ page }: { page: string }) => {
    const { MangaList, pagination, getMangaList } = useMangaStore()
    const [loading, setLoading] = useState(true)
    const skeletonCount = 24

    useEffect(() => {
        setLoading(true) // show skeleton instantly
        getMangaList(Number(page)).finally(() => setLoading(false))
    }, [page])

    return (
        <div className="bg-neutral-900 w-[100vw] overflow">
            {/* Header */}
            <div className="bg-black text-white font-bold h-[50px] flex items-center justify-start p-[50px] text-[30px]">
                <div>Manga list <span className='text-red-700'> {page}</span></div>
            </div>

            {/* Grid */}
            <div
                className={`w-full px-[50px] min-h-[100vh] py-[50px] gap-4 
                    grid 
                    grid-cols-2 
                    sm:grid-cols-3
                    md:grid-cols-4
                    lg:grid-cols-6
                    xl:grid-cols-8`}
            >
                {loading
                    ? Array.from({ length: skeletonCount }).map((_, i) => (
                        <div
                            key={i}
                            className="aspect-[2/3] flex flex-col overflow-hidden rounded-none skeleton"
                        ></div>
                    ))
                    : MangaList.map((card, index) => (
                        <Link href={`/manga-details/${card?.id}`}
                            key={index}
                            className="aspect-[2/3] flex flex-col overflow-hidden min-w-0 group cursor-pointer"
                        >
                            <div className="bg-black w-full h-[80%] flex-shrink-0">
                                <img
                                    src={card?.imgUrl}
                                    alt={card?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="pt-2 flex flex-col gap-1 h-[20%] min-w-0 flex-shrink transition-all duration-300 group-hover:-translate-y-1">
                                <h3 className="text-white font-semibold text-sm truncate whitespace-nowrap overflow-hidden min-w-0 transition-colors duration-300 group-hover:text-yellow-400">
                                    {card?.title}
                                </h3>
                                {card?.latestChapter && (
                                    <p className="text-gray-400 text-xs truncate whitespace-nowrap overflow-hidden min-w-0">
                                        Latest: {card.latestChapter.replace('-', ' ')}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>

            {/* Pagination */}
            <div className="w-full h-[60px] flex gap-1 sm:gap-2 items-center justify-end  px-[50px] font-bold">
                {pagination.map((p, index) => {
                    const isCurrent = Number(p) === Number(page);
                    return (
                        <Link
                            href={`/manga-list/${p}`}
                            key={index}
                            className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-black cursor-pointer hover:bg-red-300
                    ${isCurrent
                                    ? 'bg-yellow-400' // current page
                                    : index === 0 || index === pagination.length - 1
                                        ? 'bg-red-700 text-white' // first or last page
                                        : 'bg-white'
                                }`}
                        >
                            {p}
                        </Link>
                    );
                })}
            </div>


        </div>
    )
}

export default MangaList

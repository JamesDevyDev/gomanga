'use client'
import React, { useEffect, useState } from 'react'
import useMangaStore from '@/zustand/useMangaStore'
import Link from 'next/link'

const SearchComp = ({ search }: { search: string }) => {
    const { setSearchManga, searchManga } = useMangaStore()
    const [loading, setLoading] = useState(true)
    const skeletonCount = 24

    const readableSearch = search.replace(/_/g, " ")

    useEffect(() => {
        setLoading(true)
        setSearchManga(search).finally(() => setLoading(false))
    }, [search, setSearchManga])

    return (
        <div className="bg-neutral-900 w-[100vw] overflow">
            {/* Header */}
            <div className="bg-black text-white font-bold h-[50px] flex items-center justify-start p-[50px] md:px-[150px] text-[30px]">
                <div>
                    Search  : <span className="text-red-700">{readableSearch}</span>
                </div>
            </div>

            {/* Grid */}
            <div
                className={`w-full px-[50px] md:px-[150px] min-h-[100vh] py-[50px] gap-4
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
                    : searchManga?.manga?.map((card: any, index: number) => (
                        <Link
                            href={`/manga-details/${card?.id}`}
                            key={index}
                            className="aspect-[2/3] flex flex-col overflow-hidden min-w-0 group cursor-pointer"
                        >
                            <div className="bg-black w-full h-[75%] flex-shrink-0 ">
                                <img
                                    src={card?.imgUrl}
                                    alt={card?.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="pt-2 flex flex-col min-w-0 flex-shrink transition-all duration-300 group-hover:-translate-y-1">
                                <h3 className="text-white font-semibold text-sm truncate whitespace-nowrap overflow-hidden min-w-0 transition-colors duration-300 group-hover:text-yellow-400">
                                    {card?.title}
                                </h3>

                                {/* Authors */}
                                {card?.authors && (
                                    <p className="text-gray-400 text-xs truncate whitespace-nowrap overflow-hidden min-w-0">
                                        {card.authors}
                                    </p>
                                )}

                                {/* Latest Chapter (only show first) */}
                                {card?.latestChapters?.length > 0 && (
                                    <p className="text-gray-400 text-xs truncate whitespace-nowrap overflow-hidden min-w-0">
                                        Latest: {card.latestChapters[0].name}
                                    </p>
                                )}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default SearchComp

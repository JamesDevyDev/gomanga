'use client'

import React, { useEffect, useState } from 'react'
import useMangaStore from '@/zustand/useMangaStore'
import Link from 'next/link'

const GenreComp = () => {
    const { genres, getMangaGenres, setMangaGenres, genreManga } = useMangaStore()
    const [loading, setLoading] = useState(false)
    const skeletonCount = 24

    useEffect(() => {
        getMangaGenres()
    }, [getMangaGenres])

    useEffect(() => {
        console.log("📌 genreManga changed:", genreManga)
    }, [genreManga])

    const handleGenreClick = async (genre: string) => {
        setLoading(true)
        await setMangaGenres(genre, "1") // always reset to page 1 when switching genre
        setLoading(false)
    }

    const handlePageClick = async (genre: string, page: number) => {
        setLoading(true)
        await setMangaGenres(genre, String(page))
        setLoading(false)
    }

    return (
        <div className="bg-neutral-900 w-full text-red-500">
            {/* Header */}
            <div className="bg-black text-white font-bold h-[50px] flex items-center justify-start p-[50px] text-[30px]">
                Genre
            </div>

            {/* Responsive container */}
            <div className="w-full flex flex-col md:flex-row">
                {/* Left Side (Manga grid) */}
                <div className="w-full md:w-[70%] px-[30px] py-[30px]">
                    <div
                        className={`w-full gap-4 
              grid 
              grid-cols-2 
              sm:grid-cols-2
              md:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-5`}
                    >
                        {loading
                            ? Array.from({ length: skeletonCount }).map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-[2/3] flex flex-col overflow-hidden rounded-none skeleton"
                                ></div>
                            ))
                            : genreManga?.manga?.map((card: any, index: number) => (
                                <Link
                                    href={`/manga-details/${card?.id}`}
                                    key={index}
                                    className="aspect-[2/3] flex flex-col overflow-hidden min-w-0 group cursor-pointer"
                                >
                                    <div className="bg-black w-full h-[80%] flex-shrink-0">
                                        <img
                                            src={card?.image}
                                            alt={card?.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="pt-2 flex flex-col gap-1 h-[20%] min-w-0 flex-shrink transition-all duration-300 group-hover:-translate-y-1">
                                        <h3 className="text-white font-semibold text-sm truncate whitespace-nowrap overflow-hidden min-w-0 transition-colors duration-300 group-hover:text-yellow-400">
                                            {card?.title}
                                        </h3>

                                        {card?.description && (
                                            <p className="text-gray-400 text-xs truncate whitespace-nowrap overflow-hidden min-w-0">
                                                {card.description}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                    </div>


                </div>

                {/* Right Side (Genres) */}
                <div className="w-full md:w-[30%] p-4 overflow-y-auto md:min-h-[100vh]">

                    {/* ✅ Pagination */}
                    {genreManga?.pagination && genreManga?.pagination.length > 0 && (
                        <div className="w-full h-[60px] flex gap-1 sm:gap-2 items-center justify-center px-[50px] font-bold mb-[20px]">
                            {genreManga.pagination.map((p: number, index: number) => {
                                const isCurrent = Number(p) === Number(genreManga.page)
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handlePageClick(genreManga.genre, p)}
                                        className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-black cursor-pointer hover:bg-red-300
                      ${isCurrent
                                                ? 'bg-yellow-400' // current page
                                                : index === 0 || index === genreManga.pagination.length - 1
                                                    ? 'bg-red-700 text-white' // first or last page
                                                    : 'bg-white'
                                            }`}
                                    >
                                        {p}
                                    </button>
                                )
                            })}
                        </div>
                    )}

                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
                        {genres?.map((genre: any, index: number) => (
                            <div
                                key={index}
                                className="h-[35px] bg-gradient-to-br from-red-700/50 to-black 
                  flex items-center justify-center rounded text-white 
                  text-[11px] font-medium shadow-md 
                  transition-colors duration-300 ease-in-out 
                  hover:from-red-700 hover:to-red-700 cursor-pointer"
                                onClick={() => handleGenreClick(genre)}
                            >
                                {genre}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenreComp

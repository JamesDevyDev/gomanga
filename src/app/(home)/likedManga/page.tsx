'use client'

import { useEffect } from 'react'
import useAuthStore from '@/zustand/useAuthStore'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LikedMangaPage = () => {

    const router = useRouter()
    const { authUser } = useAuthStore()

    useEffect(() => {
        if (!authUser) {
            router.push('/manga-list/1');
        }
    }, [authUser, router]);


    return (
        <div className="bg-neutral-900 w-[100vw] overflow">
            {/* Header */}
            <div className="bg-black text-white font-bold h-[50px] flex items-center justify-start p-[50px] text-[30px] md:px-[150px]">
                <div>
                    Liked Manga <span className="text-red-700">({authUser?.likedManga?.length || 0})</span>
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
                {authUser?.likedManga?.length > 0 ? (
                    authUser.likedManga.map((card: any, index: number) => (
                        <Link
                            href={`/manga-details/${card.MangaId}`}
                            key={index}
                            className="aspect-[2/3] flex flex-col overflow-hidden min-w-0 group cursor-pointer"
                        >
                            {/* Poster */}
                            <div className="bg-black w-full h-[80%] flex-shrink-0">
                                <img
                                    src={card?.image}
                                    alt={card?.MangaId}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <div className="pt-2 flex flex-col gap-1 h-[20%] min-w-0 flex-shrink transition-all duration-300 group-hover:-translate-y-1">
                                <h3 className="text-white font-semibold text-sm truncate whitespace-nowrap overflow-hidden min-w-0 transition-colors duration-300 group-hover:text-yellow-400">
                                    {card?.MangaId}
                                </h3>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-white text-center text-lg font-bold">
                        You haven’t liked any manga yet.
                    </div>
                )}
            </div>
        </div>
    )
}

export default LikedMangaPage

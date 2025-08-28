'use client'

import React, { useState } from 'react'
import useMangaStore from '@/zustand/useMangaStore'
import Link from 'next/link'

const staticGenres = [
    "Newest", "Latest", "Top read", "All", "Completed", "Ongoing", "Comedy", "Supernatural", "Drama", "Fantasy",
    "Action", "Josei", "Adventure", "Romance", "Smut", "Manhwa", "Tragedy", "Slice of life", "School life", "Seinen",
    "Historical", "Harem", "Horror", "Psychological", "Mystery", "Shounen", "Martial arts", "Manhua", "Shoujo", "Isekai",
    "Erotica", "Gender bender", "Mature", "Webtoons", "Shoujo ai", "Yaoi", "Yuri", "Medical", "Mecha", "Shounen ai",
    "Sports", "Cooking", "Sci fi", "One shot", "Ecchi", "Adult", "Pornographic", "Doujinshi", "Long Strip", "Survival",
    "Adaptation", "Official Colored", "Wuxia", "Thriller", "Web Comic", "Full Color", "Reincarnation", "Monsters",
    "Military", "Philosophical", "Gyaru", "Bloody", "Demons", "System", "Loli", "Ninja", "Incest", "Crime", "Office Workers",
    "Sexual Violence", "Crossdressing", "Gore", "Delinquents", "Shota", "Police", "Manga", "Time Travel", "Monster Girls",
    "Anthology", "4-Koma", "Oneshot", "Animals", "Heartwarming", "Superhero", "Magic", "Genderswap", "Post-Apocalyptic",
    "Music", "Self-Published", "Aliens", "Villainess", "Virtual Reality", "Ghosts", "Award Winning", "Video Games",
    "Magical Girls", "Reverse Harem", "Fan Colored", "Zombies", "Mafia", "Webtoon", "Royal family", "Manhwa Hot",
    "Traditional Games", "Magical", "Vampires", "Revenge", "ecchi 2", "Samurai", "Yaoi(BL)", "Monster", "Super Power",
    "Animal", "Game", "Comic", "Science fiction", "Office", "School", "Parody", "Iyashikei", "Girls Love", "Boys Love",
    "Mahou Shoujo", "Suspense", "Vampire", "Kids", "Space", "Gourmet", "Soft Yaoi", "Avant Garde", "cartoon", "violence",
    "imageset", "teacher_student", "cultivation", "death_game", "degeneratemc", "cars", "showbiz", "blackmail", "western",
    "xianxia", "fetish", "netorare", "age_gap", "ai_art", "master_servant", "college_life", "childhood_friends", "non_human",
    "dementia", "Informative", "Graphic Novel", "Royalty", "Liexing", "Ping Ping Jun", "Josei(W)", "Shoujo(G)", "User Created",
    "2019", "BL", "Reverse", "artbook", "omegaverse", "cheating_infidelity", "sm_bdsm", "bodyswap", "netori", "old_people",
    "beasts", "Seinen(M)", "Shounen(B)", "Creators", "Others", "step_family", "brocon_siscon", "Korean"
]

const GenreComp = () => {
    const { setMangaGenres, genreManga } = useMangaStore()
    const [loading, setLoading] = useState(false)
    const skeletonCount = 24

    const handleGenreClick = async (genre: string) => {
        setLoading(true)
        await setMangaGenres(genre, "1")
        setLoading(false)
    }

    const handlePageClick = async (genre: string, page: number) => {
        setLoading(true)
        await setMangaGenres(genre, String(page))
        setLoading(false)
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="bg-neutral-900 w-full text-red-500">
            {/* Header */}
            <div className="bg-black text-white font-bold h-[50px] flex items-center justify-start p-[50px] text-[30px]">
                Genre : <span className='text-red-700'> {genreManga?.genre || "Select a genre"}</span>
            </div>

            <div className="w-full flex flex-col md:flex-row">
                {/* Left Side (Manga grid) */}
                <div className="w-full md:w-[70%] px-[30px] py-[30px]">
                    <div
                        className={`w-full gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`}
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

                {/* Right Side (Static Genres + Pagination) */}
                <div className="w-full md:w-[30%] p-4 overflow-y-auto md:min-h-[100vh]">
                    {/* Pagination */}
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
                                                ? 'bg-yellow-400'
                                                : index === 0 || index === genreManga.pagination.length - 1
                                                    ? 'bg-red-700 text-white'
                                                    : 'bg-white'}`}
                                    >
                                        {p}
                                    </button>
                                )
                            })}
                        </div>
                    )}

                    {/* Static Genres */}
                    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
                        {staticGenres.map((genre, index) => (
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

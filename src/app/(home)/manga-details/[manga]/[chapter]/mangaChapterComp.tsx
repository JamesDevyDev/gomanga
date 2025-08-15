'use client'

import useMangaStore from "@/zustand/useMangaStore"
import { useEffect, useState } from "react"

const MangaChapterComp = ({ manga, chapter }: { manga: string, chapter: string }) => {
    const { mangaChapter, getMangaChapter } = useMangaStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getMangaChapter(manga, chapter).finally(() => {
            setLoading(false)
        })
    }, [manga, chapter, getMangaChapter])

    return (
        <div className="bg-neutral-900 w-[100vw] overflow md:px-[50px] py-[50px]">
            <div className='text-white font-bold text-[20px]'>
                {loading ? (
                    <div className="skeleton h-6 w-40"></div>
                ) : (
                    mangaChapter?.title
                )}
            </div>

            <div className='flex items-center justify-center flex-col mt-5'>
                {loading ? (
                    Array.from({ length: 5 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="skeleton w-full max-w-[800px] h-[600px]"
                        ></div>
                    ))
                ) : (
                    mangaChapter?.imageUrls?.map((url: string, index: number) => (
                        <img
                            key={index}
                            src={url}
                            alt={`Page ${index + 1}`}
                            className="w-full w-[100%] md:max-w-[800px] "
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default MangaChapterComp

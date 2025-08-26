'use client'

import useMangaStore from "@/zustand/useMangaStore"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const MangaChapterComp = ({ manga, chapter }: { manga: string, chapter: string }) => {
    const { mangaChapter, getMangaChapter, mangaDetails } = useMangaStore()
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        setLoading(true)
        getMangaChapter(manga, chapter).then((data) => {
            if (!data || data.error) {

                router.push(`/manga-details/${manga}`)
            }
        }).finally(() => {
            setLoading(false)
        })
    }, [manga, chapter, getMangaChapter, router])

    return (
        <div className="bg-neutral-900 w-[100vw] overflow md:px-[50px] py-[50px]">
            <div className="text-white font-bold text-[20px]">
                {loading ? (
                    <div className="skeleton h-6 w-40"></div>
                ) : (
                    mangaChapter?.title
                )}
            </div>

            <div className="flex items-center justify-center flex-col mt-5">
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
                            className="w-full md:max-w-[800px]"
                        />
                    ))
                )}
            </div>

            <div className="w-full flex items-center justify-center">
                <div className='w-[800px] h-[50px]'>
                    <div className="join grid grid-cols-2 pt-[50px]">
                        <Link href={`/manga-details/${manga}/${Number(chapter) - 1}`} className="join-item btn bg-[#b91c1c] text-black">Previous page</Link>
                        <Link href={`/manga-details/${manga}/${Number(chapter) + 1}`} className="join-item btn bg-[#b91c1c] text-black">Next</Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MangaChapterComp

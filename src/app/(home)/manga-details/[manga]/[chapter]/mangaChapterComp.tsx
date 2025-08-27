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

            <div className="w-full flex items-center justify-center flex-col">
                {/* Select chapter dropdown */}
                {!loading && mangaChapter?.chapters && (
                    <div className="my-[25px] flex justify-center">
                        <select
                            className="
    w-[250px] 
    rounded-xl border border-neutral-700 
    bg-neutral-900 px-4 py-3 
    text-white text-sm font-medium 
    shadow-md 
    focus:outline-none focus:ring-2 focus:ring-red-700 
    transition-all duration-200
  "
                            value={String(chapter).replace(/\./g, "-")} // force current chapter to use -
                            onChange={(e) => {
                                router.push(`/manga-details/${manga}/${e.target.value}`)
                            }}
                        >
                            {[...mangaChapter.chapters].reverse().map((ch: string, idx: number) => {
                                const chapterValue = ch.replace(/\./g, "-") // ✅ convert for value + display
                                return (
                                    <option
                                        key={idx}
                                        value={chapterValue} // ✅ URL-safe value
                                        className="bg-neutral-900 text-white"
                                    >
                                        Chapter {chapterValue}
                                    </option>
                                )
                            })}
                        </select>

                    </div>
                )}

                {/* Prev/Next navigation */}
                <div className='w-[400px]'>
                    <div className="join grid grid-cols-2 ">
                        <Link
                            href={`/manga-details/${manga}/${Number(chapter) - 1}`}
                            className="join-item btn bg-[#b91c1c] text-black"
                        >
                            Previous
                        </Link>
                        <Link
                            href={`/manga-details/${manga}/${Number(chapter) + 1}`}
                            className="join-item btn bg-[#b91c1c] text-black"
                        >
                            Next
                        </Link>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default MangaChapterComp

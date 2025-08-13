'use client'

const MangaChapterComp = ({ manga, chapter }: { manga: string, chapter: string }) => {


    return (
        <div className="bg-neutral-900 w-[100vw] overflow px-[50px] py-[50px]">
            {manga}
            {chapter}
        </div>
    )
}

export default MangaChapterComp

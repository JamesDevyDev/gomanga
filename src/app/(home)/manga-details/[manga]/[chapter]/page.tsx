import MangaChapterComp from "./mangaChapterComp";

export default async function Page({
    params
}: {
    params: Promise<{ manga: string, chapter: string }>
}) {

    const { manga, chapter } = await params;

    return <MangaChapterComp manga={manga} chapter={chapter} />;
}
import MangaList from "./mangaListComp";

export default async function Page({
    params
}: {
    params: Promise<{ page: string }>
}) {

    const { page } = await params;

    return <MangaList page={page} />;
}
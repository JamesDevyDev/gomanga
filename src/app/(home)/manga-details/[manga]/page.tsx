import MangaDetails from "./mangaDetailsComp";

export default async function Page({
    params
}: {
    params: Promise<{ manga: string }>
}) {

    const { manga } = await params;

    return <MangaDetails manga={manga} />;
}
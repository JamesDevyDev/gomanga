import SearchComp from "./SearchComp";

export default async function Page({
    params
}: {
    params: Promise<{ search: string }>
}) {

    const { search } = await params;

    return <SearchComp search={search} />;
}
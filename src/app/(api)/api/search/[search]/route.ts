import { NextResponse } from "next/server";

export const GET = async (
    request: Request,
    { params }: { params: Promise<{ search: string; }> }
) => {
    const { search } = await params;

    const res = await fetch(
        `https://gomanga-api.vercel.app/api/search/${search}`,
        {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }
    );

    if (!res.ok) throw new Error("Error in fetching search-list");
    const data = await res.json();


    if (!data) {
        return NextResponse.json(
            { error: "No data found" },
            { status: 404 }
        );
    }

    return NextResponse.json(data, { status: 200 });
};

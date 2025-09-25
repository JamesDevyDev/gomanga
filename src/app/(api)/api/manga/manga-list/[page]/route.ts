import { NextResponse } from "next/server"

export const GET = async (request: Request, {
    params
}: {
    params: Promise<{ page: string }>
}) => {

    const { page } = await params

    const res = await fetch(`https://gomanga-api.vercel.app/api/manga-list/${page}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    if (!res.ok) throw new Error('Error in fetching manga-list')
    const data = await res.json()

    return NextResponse.json(data, { status: 200 })
}
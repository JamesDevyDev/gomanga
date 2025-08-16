import { NextResponse } from "next/server"

export const GET = async (request: Request, {
    params
}: {
    params: Promise<{ genre: string, page: string }>
}) => {

    const { genre, page } = await params
    // Ito yung nag fix sa problem ko, di nagbabago yung data. ni suspect ko na dahil hindi natanggap ng uppercase yung url. IT WORKS now.
    const lowerCase = genre.toLowerCase()

    const res = await fetch(`https://gomanga-api.vercel.app/api/genre/${lowerCase}/${page}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    if (!res.ok) throw new Error('Error in fetching manga-list')

    const data = await res.json()
    return NextResponse.json(data, { status: 200 })
}
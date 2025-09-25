import { NextResponse } from "next/server"

export const GET = async (request: Request) => {

    const res = await fetch(`https://gomanga-api.vercel.app/api/genre`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })

    if (!res.ok) throw new Error('Error in fetching manga-list')
    const data = await res.json()
    return NextResponse.json(data, { status: 200 })
}
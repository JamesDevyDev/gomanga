import { getAuthenticatedUser } from "@/utils/verifyUser"
import { NextResponse } from "next/server"
import connectDb from "@/utils/connectDB"
import User from "@/utils/model/User.Model"

export const POST = async (request: Request) => {
    await connectDb()

    const body = await request.json()
    const { mangaId, image } = body

    const user = await getAuthenticatedUser()
    if (user?.error) return NextResponse.json('User is not authenticated or invalid token.', { status: 400 })

    const loggedInUser = await User.findById(user._id)
    const index = loggedInUser.likedManga.findIndex(
        (item: { MangaId: string }) => item.MangaId === mangaId
    )

    if (index !== -1) {
        loggedInUser.likedManga.splice(index, 1)
    } else {
        loggedInUser.likedManga.push({ MangaId: mangaId, image })
    }

    await loggedInUser.save()

    return NextResponse.json(loggedInUser.likedManga)
}
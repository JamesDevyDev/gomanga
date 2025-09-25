import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    likedManga: [
        {
            MangaId: String,
            image: String
        }
    ]
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User
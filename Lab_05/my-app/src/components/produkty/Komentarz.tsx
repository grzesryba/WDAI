import {useState} from "react"

interface User {
    id: number
    username: string
    fullName: string
}

interface KomentarzProps {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

function Komentarz({ id, body, postId, likes, user}: KomentarzProps) {
    const [likes_no, setLikes_no] = useState(likes)

    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>Komentarz #{id} (Post #{postId})</h3>
            <p>{body}</p>
            <p>Autor: {user.fullName} (@{user.username})</p>
            <div>
                <button onClick={() => setLikes_no((prev) => prev + 1)}>👍</button>
                <button onClick={() => setLikes_no((prev) => Math.max(prev - 1, 0))}>👎</button>
                <span> Likes: {likes_no}</span>
            </div>
        </div>)
}

export default Komentarz

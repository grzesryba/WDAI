import Komentarz from './Komentarz'
import {useEffect, useState} from "react"

interface User {
    id: number
    username: string
    fullName: string
}

interface KomentarzData {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

function Komentarze() {
    const [komentarze, setKomentarze] = useState<KomentarzData[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then((response) => response.json())
            .then((data) => setKomentarze(data.comments))
            .catch((error) => console.error('Błąd podczas pobierania komentarzy:', error))
    }, [])

    return (
        <div>
            <h2>Komentarze</h2>
            {komentarze.length > 0 ? (
                komentarze.map((komentarz) => (
                    <Komentarz
                        id={komentarz.id}
                        body={komentarz.body}
                        postId={komentarz.postId}
                        likes={komentarz.likes}
                        user={komentarz.user}
                    />
                ))
            ) : (
                <p>Ładowanie komentarzy...</p>
            )}
        </div>
    )
}

export default Komentarze

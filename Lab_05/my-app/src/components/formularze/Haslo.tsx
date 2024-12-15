import {useState} from "react";


function Haslo() {
    const [haslo, setHaslo] = useState('')
    const [haslo2, setHaslo2] = useState('')

    const checkPassword = () => {
            if (!haslo && !haslo2) {
                return "Proszę wprowadzić hasło"
            } else if (haslo !== haslo2) {
                return "Hasła nie są zgodne"
            } else if (haslo === haslo2) {
                return ""
            }
        }

    return (
        <>
            <input
                type="text"
                value={haslo}
                onChange={(e) => setHaslo(e.target.value)}
                placeholder="Wpisz Hasło"
            />
            <input
                type="text"
                value={haslo2}
                onChange={(e) => setHaslo2(e.target.value)}
                placeholder="Powtórz Hasło"
            />
            <div>{checkPassword()}</div>
        </>
    )

}

export default Haslo


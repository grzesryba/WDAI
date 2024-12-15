import {useState} from "react";


function Logowanie() {
    const [haslo, setHaslo] = useState('')
    const [haslo2, setHaslo2] = useState('')
    const [nazwa, setNazwa] = useState('')

    const checkPassword = () => {
        if (haslo !== haslo2) {
            return <button onClick={() => alert("Hasla nie są zgodne")}>Log in</button>
        } else if (haslo === haslo2) {
            return <button onClick={() => alert("Zalogowano poprawnie")}>Log in</button>
        }
    }

    const logIn = () => {
        if(!nazwa || !haslo || !haslo2){
            return <button disabled>Log in</button>
        } else {
            return checkPassword()
        }
    }

    return (
        <>
            <input
                type="text"
                value={nazwa}
                onChange={(e) => setNazwa(e.target.value)}
                placeholder="Nazwa użytkownika"
            />
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
            <div>{logIn()}</div>
        </>
    )

}

export default Logowanie


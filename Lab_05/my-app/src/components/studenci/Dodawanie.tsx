import {useState} from "react";

interface DodawanieProps{
    dodawanie: (student: {imie: string; nazwisko: string; rocznik: number}) => void
}

function Dodawanie({dodawanie}: DodawanieProps) {
    const [imie, setImie] = useState('')
    const [nazwisko, setNazwisko] = useState('')
    const [rocznik, setRocznik] = useState('')

    const dodaj = (e) => {
        e.preventDefault()
        if(imie && nazwisko && !isNaN(Number(rocznik))){
            dodawanie({imie: imie,nazwisko: nazwisko,rocznik: Number(rocznik)})
            setImie('')
            setNazwisko('')
            setRocznik('')
        } else {
            alert('Wprowadzone dane są niepoprawne')
        }
    }

    return (
        <form onSubmit={dodaj}>
            <input
                type="text"
                value={imie}
                onChange={(e) => setImie(e.target.value)}
                placeholder="Podaj Imię"
            />
            <input
                type="text"
                value={nazwisko}
                onChange={(e) => setNazwisko(e.target.value)}
                placeholder="Podaj Nazwisko"
            />
            <input
                type="text"
                value={rocznik}
                onChange={(e) => setRocznik(e.target.value)}
                placeholder="Podaj Rocznik"
            />
            <button type="submit">Dodaj</button>
        </form>
    )

}

export default Dodawanie

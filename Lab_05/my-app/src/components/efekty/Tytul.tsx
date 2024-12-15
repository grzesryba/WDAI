import {useEffect, useState} from "react";


function Tytul() {

    const [tytul, setTytul] = useState('')

    useEffect(() => {
        document.title = tytul
    }, [tytul]);

    return (
        <input
            type="text"
            value={tytul}
            placeholder="wpisz tytuł strony"
            onChange={(e) => setTytul(e.target.value)}
        />
    )

}

export default Tytul


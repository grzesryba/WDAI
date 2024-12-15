import {useState} from "react";


function Formularz() {
    const [text, SetText] = useState("")

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(e) => SetText(e.target.value)}
                placeholder="Wpisz tekst"
            />
            <div>Tekst: {text}</div>
        </>
    )
}

export default Formularz
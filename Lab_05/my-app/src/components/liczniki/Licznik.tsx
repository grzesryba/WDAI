import {useState} from "react";

function Licznik() {
    const [n, setN] = useState(0)

    return <div>
        <h1>{n}</h1>
        <button onClick={() => setN(n+1)}>Click me!!!</button>
    </div>

}

export default Licznik
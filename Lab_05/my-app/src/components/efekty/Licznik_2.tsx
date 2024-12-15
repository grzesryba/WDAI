import {useEffect, useState} from "react";

function Licznik_2() {
    const [n, setN] = useState(0)

    useEffect(() => {
        console.log("Hello world")
    }, []);

    useEffect(() => {
        console.log("Licznik zwiększył się do " + n)
    }, [n])

    return <div>
        <h1>{n}</h1>
        <button onClick={() => setN(n+1)}>Click me!!!</button>
    </div>

}

export default Licznik_2
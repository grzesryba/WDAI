import {useEffect, useState} from "react";

function Licznik() {
    const [n, setN] = useState<number>(() => {
        const saved = localStorage.getItem('n');
        return saved ? parseInt(saved, 10) : 0;
    });

    useEffect(() => {
        console.log(`zapis do local ${n}`)
        localStorage.setItem('n', n.toString())
    }, [n]);

    return <div>
        <h1>{n}</h1>
        <button onClick={() => setN(n+1)}>Click me!!!</button>
    </div>

}

export default Licznik
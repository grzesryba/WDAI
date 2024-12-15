import {useState} from "react";
import Przycisk from "./Przycisk.tsx";

function NowyLicznik() {
    const [n, setN] = useState(0)

    return <div>
        <h1>{n}</h1>
        <Przycisk onClick={() => setN(n + 1)}/>
    </div>

}

export default NowyLicznik
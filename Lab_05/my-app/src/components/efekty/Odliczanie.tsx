import {useEffect, useState} from "react";


function Odliczanie() {
    const [n, setN] = useState(15);
    const [countdown, setCountdown] = useState(false)

    useEffect(() => {
        let interval = null;
        if (countdown) {
            interval = setInterval(() => {
                setN((prev) => Math.max(prev - 0.1, 0));
            }, 100);
        } else if (!countdown && n > 0) {
            if (interval) clearInterval(interval);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [countdown]);

    useEffect(() => {
        if (n === 0 && countdown) {
            setCountdown(false);
        }
    }, [n, countdown]);

    return (
        <>
            <div>{n.toFixed(1)}</div>
            <button disabled={n<=0} onClick={() => setCountdown(true)}>Start</button>
            <button disabled={n<=0} onClick={() => setCountdown(false)}>Stop</button>
        </>
    )

}

export default Odliczanie
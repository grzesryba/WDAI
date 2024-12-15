import Produkt from "./Produkt.tsx";


function Koszyk() {
    return (
        <>
            <h2>Koszyk</h2>
            <div>
                <Produkt nazwa={"Jabłko"}/>
                <Produkt nazwa={"Gruszka"}/>
                <Produkt nazwa={"Pomarańcz"}/>
                <Produkt nazwa={"Banan"}/>
                <Produkt nazwa={"Winogrona"}/>
            </div>
        </>
    )
}

export default Koszyk


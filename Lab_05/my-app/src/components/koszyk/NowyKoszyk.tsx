import Produkt from "./Produkt.tsx";


function NowyKoszyk() {
    const produkty = ['Jabłko','Gruszka','Pomarańcza','Banan','Winogrona']
    return (
        <>
            <h2>NowyKoszyk</h2>
            <div>
                {produkty.map((nazwa) => <Produkt nazwa={nazwa}/>)}
            </div>
        </>
    )
}

export default NowyKoszyk


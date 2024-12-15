
interface ProductProps{
    nazwa: string;
}

function Produkt(props: ProductProps) {
    return <div>{props.nazwa}</div>
}

export default Produkt
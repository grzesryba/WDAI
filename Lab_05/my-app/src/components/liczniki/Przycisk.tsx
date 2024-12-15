
interface PrzyciskProps {
    onClick: () => void
}

function Przycisk(props: PrzyciskProps) {
    return <button onClick={props.onClick}>Click me 2.0</button>
}

export default Przycisk


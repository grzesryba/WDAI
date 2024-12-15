

interface Student {
    imie: string
    nazwisko: string
    rocznik: number
}

function Studenci() {
    const students: Student[] = [
        {imie: 'Jan', nazwisko: 'Kowalski', rocznik: 1991},
        {imie: 'Anna', nazwisko: 'Nowak', rocznik: 1992},
        {imie: 'Mateusz', nazwisko: 'Słoń', rocznik: 1993},
        {imie: 'Zygmunt', nazwisko: 'Waza', rocznik: 1994},
        {imie: 'Kacper', nazwisko: 'Szklarski', rocznik: 1995}
    ]

    return (
        <>
            <table border='10'>
                <thead>
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Rocznik</th>
                </tr>
                </thead>
                <tbody>
                {students.map((s) => {
                    return (<tr>
                        <td>{s.imie}</td>
                        <td>{s.nazwisko}</td>
                        <td>{s.rocznik}</td>
                    </tr>)
                })}
                </tbody>
            </table>
        </>
    )

}

export default Studenci

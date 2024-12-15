import {useState} from "react";
import Dodawanie from "./Dodawanie.tsx";


interface Student {
    imie: string
    nazwisko: string
    rocznik: number
}

function StudentManager() {
    const [students, setStudents] = useState<Student[]>([{imie:'', nazwisko:'', rocznik:''}])

    const dodajStudenta = (student: Student) => {
        setStudents((prevState) => [...prevState, student])
    }

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
            <Dodawanie dodawanie={dodajStudenta}/>
        </>
    )

}

export default StudentManager

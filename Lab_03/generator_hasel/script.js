function generate() {
    let min = document.getElementById("minimum").value
    let max = document.getElementById("maksimum").value

    if (!min.trim()) {
        alert("Wprowadź wartość do pola \"Minimalna długość hasła\"")
        return false
    }
    if (!max.trim()) {
        alert("Wprowadź wartość do pola \"Maksymalna długość hasła\"")
        return false
    }
    if (isNaN(min)) {
        alert("Nie wprowadzono wartości liczbowej do pola \"Minimalna długość hasła\"")
        return false
    }
    if (isNaN(max)) {
        alert("Nie wprowadzono wartości liczbowej do pola \"Maksymalna długość hasła\"")
        return false
    }
    if (max - min <= 0) {
        alert("Maksymalna długość hasła powinna być większa niż minimalna długość")
    }

    let duze = document.getElementById("duze_litery")
    let znaki = document.getElementById("znaki_specjalne")

    let characters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (duze.checked) {
        characters = characters.concat(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"])
    }
    if (znaki.checked) {
        characters = characters.concat(["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "\"", "\'", "<", ">", ",", ".", "/", "?", "|", "\\", "~", "`", "_", "-", "+", "=", ":", ";"])
    }
    let dlugosc = Math.floor(parseInt(min) + Math.random() * (max - min))
    let password = ""
    for (let i = 0; i < dlugosc; i++) {
        let rand = Math.floor(Math.random() * characters.length);
        password += characters[rand]
    }
    alert(password)
}
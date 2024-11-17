const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Novak Djokovic', 'Rafael Nadal', 'Roger Federer','Carlos Alcaraz', 'Stan Wawrinka', 'Andy Murray', 'Jannik Sinner', 'Reszta(9 osób po 1 tytuł)'], // etykiety na osi X
        datasets: [{
            data: [24,22,20,4,3,3,2,9], // dane do wykresu
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgb(188,239,141)',
                'rgb(64,249,255)'
            ],
            borderColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgb(188,239,141)',
                'rgb(64,249,255)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                ticks: {
                    color: 'black', // Kolor etykiet osi X
                    size: 15
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black', // Kolor etykiet osi X
                    size: 15
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                // labels: {
                //     color: 'purple' // Kolor etykiet legendy
                // }
            },
            // title: {
            //     display: true,
            //     text: 'Mój Wykres Słupkowy',
            //     color: 'red' // Kolor tytułu wykresu
            // }
        }
    }
});

function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


///////////////////////////////////////////////////////////////////////////////////////////

function validateForm(event) {
    const email = document.getElementById("email").value;
    const temat = document.getElementById("temat").value;
    const wiadomosc = document.getElementById("wiadomosc").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(email)) {
        alert("Wprowadź poprawny adres e-mail.");
        return false;
    }

    if (temat === "") {
        alert("Wybierz temat wiadomości.");
        event.preventDefault();
        return false;
    }

    if (wiadomosc.length < 10) {
        alert("Wiadomość musi zawierać co najmniej 10 znaków.");
        event.preventDefault();
        return false;
    }

    alert("Formularz przesłany pomyślnie!");
    return true;
}
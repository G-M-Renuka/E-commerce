const seats = document.querySelectorAll('.seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

movieSelect.addEventListener('change', () => {
    ticketPrice = +movieSelect.value;
    updateTotal();
});

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateTotal();
        }
    });
});

function updateTotal() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    count.textContent = selectedSeats.length;
    total.textContent = selectedSeats.length * ticketPrice;
}
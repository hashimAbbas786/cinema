import Movie from "./movie.js";
import { bookingStatus, changeState, exportToUI, setPrice } from "./helpers.js";
import Book from "./booking.js";
export const movieInstance = new Movie();
const booking = new Book();
movieInstance.create({id: 3, name: "Avengers: endgame", price: 12});
movieInstance.create({id: 2, name: "Antman and wasp: quantumania", price: 50});
// movieInstance.delete(2);
movieInstance.update(2, "She-hulk", 90);    
movieInstance.update(3, "Avengers: Secret wars", 1000);
movieInstance.create({id: 4, name: "Spider-man: 5", price: 100_000});
exportToUI(movieInstance.get());
bookingStatus(booking.showDetails);
const seats = document.querySelectorAll(".seat");
const movies = document.getElementById("movies");
// localStorage.movieValue = 0;
movies.addEventListener("change", () => {
    booking.showDetails();
    localStorage.movieValue = movies.value;
})
console.log(seats);
seats.forEach(seat => {
    seat.addEventListener("click", () => {
        const seatClass = seat.classList.toString().slice(5).trim();
        if(seatClass == "seat-empty") {
            booking.bookSeat(seat.id);
        } else {
            let flag = booking.removeSeat(seat.id);
        }
    })
})
movies.value = localStorage.movieValue;
setPrice();
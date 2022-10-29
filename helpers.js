export const setPrice = () => {
    const value = document.getElementById('movies').value;
    const unitPrice = document.querySelector(`option[value='${value}']`).dataset.price;
    const quantity = JSON.parse(localStorage.bookings ?? 0).length;
    const price = unitPrice * quantity;
    document.getElementById('price').innerHTML = price;
}
export const bookingStatus = callback => {
    const bookings = JSON.parse(localStorage.bookings ?? false);
    console.log(bookings);
    if(!bookings) return;
    bookings.forEach(booking => {
        const seat = document.getElementById(booking);
        seat.classList.remove("seat-empty");
        seat.classList.add("seat-occupied");
    });
    // document.getElementById("totalSeats").innerHTML = localStorage.quantity;
    callback();
}
export const exportToUI = object => {
    const movies = document.getElementById("movies");
    movies.innerHTML = "";
    object.forEach((movie, index) => {
        movies.innerHTML += `<option value="${index}" class="movie" data-price="${movie.price}">${movie.name} - ${movie.price}PKR</option>`
    })
}
export const changeState = id => {
    const prefix = "seat-";
    const seat = document.getElementById(id);
    const seatClass = seat.classList.toString().slice(5).trim();
    if(seatClass == (prefix + "occupied")) {
        seat.classList.remove("seat-occupied");
        seat.classList.add("seat-empty");
    } else {
        seat.classList.remove("seat-empty");
        seat.classList.add("seat-occupied");
    }
}
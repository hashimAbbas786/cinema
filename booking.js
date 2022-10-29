import { changeState } from "./helpers.js";
export default class Book {
    constructor() {
        if(localStorage.bookings) {
            this.books = [...JSON.parse(localStorage.bookings)];
        } else {
            this.books = [];
        }
        this.totalBooks = 0;
    }
    bookSeat(id) {
        this.books.push(id);
        localStorage.bookings = "";
        localStorage.setItem("bookings", JSON.stringify(this.books));
        changeState(id);
        this.totalBooks++;
        localStorage.setItem("quantity", this.totalBooks);
        this.showDetails();
    }
    removeSeat(id) {
        if(!this.books.includes(id)) return;
        const index = this.books.indexOf(id);
        this.books.splice(index, 1);
        localStorage.setItem("bookings", JSON.stringify(this.books));
        changeState(id);
        this.totalBooks--;
        localStorage.setItem("quantity", this.totalBooks);
        this.showDetails();
    }
    showDetails() {
        const value = document.querySelector("#movies").value;
        const price = document.querySelector(`option[value='${value}']`).dataset.price;
        document.getElementById("totalSeats").innerHTML = JSON.parse(localStorage.bookings ?? 0).length;     
        document.getElementById("price").innerHTML = (JSON.parse(localStorage.bookings ?? 0).length * price);      
    }
}
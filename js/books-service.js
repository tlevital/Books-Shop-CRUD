'use strict'

var gBooks = []
var coverCount = 0

function addBooks(n = 3) {
    for (var i = 0; i < n; i++) {
        gBooks.push(addBook())
        console.log(coverCount, 'coverCount');

    }
    return gBooks
}

function addBook(title = genBookName(), price = getRandomIntInclusive(15, 50)) {
    coverCount++
    return {
        id: makeId(),
        title: title,
        price: price,
        photo: `<img src = "img/${coverCount}.jpg>`
    }
}


function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function(book) {
        return bookId === book.id
    })
    gBooks.splice(bookIdx, 1)
}


function updateBook(bookId, updatedPrice) {
    var bookIdx = gBooks.findIndex(function(book) {
        return book.id === bookId;
    })
    gBooks[bookIdx].price = updatedPrice;
}


function readAndAddNewBook(title, price) {
    var book = addBook(title, price)
    gBooks.push(book)
}


function getBookById(bookId) {
    var book = gBooks.find(function(book) {
        return bookId === book.id
    })
    return book
}



















// var gCars;
// const PAGE_SIZE = 4
// var currPageIdx = 0


// function getCars() {
//     var fromIdx = currPageIdx * PAGE_SIZE
//     var cars = gCars.slice(fromIdx, fromIdx + PAGE_SIZE)
//     return cars
// }





// function deleteCar(carId) {
//     var carIdx = gCars.findIndex(function (car) {
//         return carId === car.id
//     })
//     gCars.splice(carIdx, 1)
// }







// function updateCar(carId, newSpeed) {
//     var carIdx = gCars.findIndex(function(car){
//         return car.id === carId;
//     })
//     gCars[carIdx].maxSpeed = newSpeed;
// }

// function nextPage() {
//     currPageIdx++
// }
'use strict'

init()

function init() {
    addBooks()
    renderTable()
}


function renderTable() {
    var books = gBooks
    var strHtmls = books.map(function(book) {
        return `
    <tr>
        <td>${book.id}</td>
        <td><a href="#"><span id="title-td"> ${book.title} </span> </a></td>
        <td><span id="date-td"> ${book.price} </span> </td>                        
        <td><span id="role-td"><img src = "img/${coverCount}.jpg" ></span></td>
        <td><span id="status-td" class="status text-success">&bull;</span> Active</td>
        <td>
        <a href="#" class="read" title="read" data-toggle="tooltip" onclick="onReadBook('${book.id}')"><i class="material-icons">📖</i></a>
        <a href="#" class="update" title="update" data-toggle="tooltip" onclick="onUpdateBook('${book.id}')"><i class="material-icons">&#xE8B8;</i></a>
        <a href="#" class="delete" title="Delete" data-toggle="tooltip" onclick="onDeleteBook('${book.id}')"><i class="material-icons">&#xE5C9;</i></a>
        </td>
    </tr>`
    })
    $('#books-table-container').html(strHtmls.join(''))
}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderTable()
}

function onUpdateBook(bookId) {
    var updatedPrice = +prompt('Updated price?');
    updateBook(bookId, updatedPrice);
    renderTable();
}

function onReadAndAddNewBook() {
    var title = prompt('What is the name of the book?');
    var price = +prompt('What is the name price the book?');
    readAndAddNewBook(title, price);
    renderTable();
}

function onReadBook(bookId) {
    readBook(bookId)
}

function readBook(bookId) {
    var book = getBookById(bookId)
    var $modal = $('.modal')
    $modal.find('h5').text(book.title)
    $modal.find('p').html(book.photo)
    $modal.show()
}

function onCloseModal() {
    $('.modal').hide()
}

















// function renderBooks() {
//     var books = getCars()
//     var strHtmls = books.map(function(book) {
//         return `
//         <div class="card car-item">
//             <img class="card-img-top" src="img/${car.vendor}.png" alt="Card image cap">
//             <span class="delete-btn" onclick="onDeleteCar('${car.id}')">X</span>
//             <div class="card-body">
//             <h5 class="card-title">${car.vendor}</h5>
//             <p class="card-text">max speed: ${car.maxSpeed}</p>
//             <a href="#" class="btn btn-primary" onclick="onReadCar('${car.id}')">details</a>
//             <a href="#" class="btn btn-small" onclick="onUpdateCar('${car.id}')">Update</a>
//             </div>
//         </div> 
//         `
//     })
//     $('.cars-container').html(strHtmls.join(''))
// }

// function onReadBook(carId) {
//     readCar(carId)
// }




// function onAddBook() {
//     var vendor = prompt('vendor?')
//     addCar(vendor)
//     renderCars()
// }



// function onNextPage() {
//     nextPage()
//     renderCars()
// }
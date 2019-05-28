function makeId() {
    var length = 3;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function genBookName() {
    var BookStartName = ['The ', 'A ', 'NightMare in ', ' Never Say ', 'The Summer of ', 'The Sunday of ', 'The story of ']
    var len = BookStartName.length
    var possible = 'bdfgklmnprstyz'
    var letter = possible.charAt(Math.floor(Math.random() * possible.length))
    var randNum = Math.floor(Math.random() * len - 1)

    var txt = BookStartName[randNum]
    txt += letter
    txt += 'a'
    txt += letter //possible.charAt(Math.floor(Math.random() * possible.length))
    txt += 'it'
    return txt;
}
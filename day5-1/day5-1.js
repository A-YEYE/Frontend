let num = 0;
let bookMap = new Map();

class Book{
    constructor(bookName, authors, delFlag){
        this.bookName=bookName;
        this.authors=authors;
    }
}

function addBook(){
    let bookName = document.getElementById("name").value;
    let authors = document.getElementById("authors").value;
    let newBook = new Book(bookName, authors);
    bookMap.set(num, newBook);

    let str;
    str = "<tr id='"+num+"'>";
    str += "<td>" + bookName + "</td>";
    str += "<td>" + authors + "</td>";
    str += "<td><button onclick='delBook(" + num + ")'>삭제</button></td>";
    str += "</tr>";

    document.getElementById("tbody").innerHTML += str;
    document.getElementById("name").value = "";
    document.getElementById("authors").value = "";
    
    let divStr;
    divStr = "<div id='resultDiv'>책이 추가 되었습니다.</div>";
    document.getElementById("result").innerHTML += divStr;

    num++;
}

function delBook(num){
    bookMap.delete(num);
    document.getElementById(num).style.display = "none";

    let divStr;
    divStr = "<div id='resultDiv'>책이 삭제 되었습니다.</div>";
    document.getElementById("result").innerHTML += divStr;
}   

document.getElementById("name").addEventListener("focus", () => {
    document.getElementById("resultDiv").remove();
});
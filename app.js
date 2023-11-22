function submitBtn() {
    var form = document.getElementsByTagName("tr");
    // form.length;
    // console.log(form);
    for (let i = 0; i < 6; i++) {
        form[i].className += "hide";
    }
    var data = document.getElementsByTagName("input");
    //  console.log(data);
    // console.log(data[3].value)
    let table = document.getElementsByClassName("tb");
    let newRow = table[0].insertRow();
    let newRow1 = table[0].insertRow();
    let nR = newRow.insertCell(0);
    nR.innerHTML = "Your relevant data:";
    let c0 = newRow1.insertCell(0);
    let c1 = newRow1.insertCell(1);
    let c2 = newRow1.insertCell(2);
    let c3 = newRow1.insertCell(3);
    data[2].value =  document.querySelector('input[name="gender"]:checked').value;
    c0.innerHTML = data[0].value;
    c1.innerHTML = data[1].value;
    c2.innerHTML = data[2].value;
    let selData = document.getElementsByTagName("select");
    // console.log(selData);
    // console.log(selData[0].value);
    c3.innerHTML = selData[0].value;
    c3.innerHTML += " " + selData[1].value;
    c3.innerHTML += " " + selData[2].value;
}

let a = "IPhone 15 Pro Max<br>Camera: 48MP Main<br>Display: 6.7 inch<br>Weight:  7.81 ounces (221 grams)<br>RAM: 8GB"; // 15
let b = "IPhone 14 Pro Max<br>Camera: 48MP Main<br>Display: 6.7 inch<br>Weight:  8.47 ounces (240 grams)<br>RAM: 6GB"; // 14
let c = "IPhone 13 Pro Max<br>Camera: 12MP Main<br>Display: 6.7 inch<br>Weight:  8.47 ounces (240 grams)<br>RAM: 6GB";// 13
let d = "IPhone 12<br>Camera: 12MP Main<br>Display: 6.1 inch<br>Weight:  5.78 ounces (164 grams)<br>RAM: 4GB"; // 12

let A = "IPhone 15 Pro Max"; let B = "IPhone 14 Pro Max"; let C = "IPhone 13 Pro Max"; let D = "IPhone 12";


function readMore(txt) {
    var p = document.getElementsByClassName(txt);
    // console.log(p);

    if (txt === "t15" && document.getElementsByClassName("i15")[0].innerHTML === "Read More") {
        document.getElementsByClassName("i15")[0].innerHTML = "Collapse";
        p[0].innerHTML = a;
    }
    else if (txt === "t15" && document.getElementsByClassName("i15")[0].innerHTML === "Collapse") {
        p[0].innerHTML = A;
        document.getElementsByClassName("i15")[0].innerHTML = "Read More";

    }
    else if (txt === "t14" && document.getElementsByClassName("i14")[0].innerHTML === "Read More") {
        p[0].innerHTML = b;
        document.getElementsByClassName("i14")[0].innerHTML = "Collapse";

    }
    else if (txt === "t14" && document.getElementsByClassName("i14")[0].innerHTML === "Collapse") {
        p[0].innerHTML = B;
        document.getElementsByClassName("i14")[0].innerHTML = "Read More";
    }
    else if (txt === "t13" && document.getElementsByClassName("i13")[0].innerHTML === "Read More") {
        p[0].innerHTML = c;
        document.getElementsByClassName("i13")[0].innerHTML = "Collapse";

    }
    else if (txt === "t13" && document.getElementsByClassName("i13")[0].innerHTML === "Collapse") {
        p[0].innerHTML = C;
        document.getElementsByClassName("i13")[0].innerHTML = "Read More";

    }
    else if (txt === "t12" && document.getElementsByClassName("i12")[0].innerHTML === "Read More") {
        p[0].innerHTML = d;
        document.getElementsByClassName("i12")[0].innerHTML = "Collapse";

    }
    else if (txt === "t12" && document.getElementsByClassName("i12")[0].innerHTML === "Collapse") {
        p[0].innerHTML = D;
        document.getElementsByClassName("i12")[0].innerHTML = "Read More";

    }
}

function addData() {
    var data = [];
    data[0] = document.getElementById("Name1").value;
    data[1] = document.getElementById("Email1").value;
    data[2] = document.getElementById("Phone").value;
    if (document.getElementById("Male1").value !== "") {
        data[3] = document.getElementById("Male1").value;
    }
    else {
        data[3] = document.getElementById("Female1").value;
    }
    data[4] = document.getElementById("Age").value;
    data[5] = document.getElementById("Qualification").value;
    console.log(data);
    let tbl = document.getElementsByClassName("t3");
    let newRow = tbl[0].insertRow();
    newRow.insertCell(0).innerHTML = data[0];
    newRow.insertCell(1).innerHTML = data[1];
    newRow.insertCell(2).innerHTML = data[2];
    newRow.insertCell(3).innerHTML = data[3];
    newRow.insertCell(4).innerHTML = data[4];
    newRow.insertCell(5).innerHTML = data[5];
    newRow.insertCell(6).innerHTML = '<button onclick="editRow(this)">Edit</button>' +
        '<button onclick="deleteRow(this)">Delete</button>';
}

function imgAlert() {
    alert("Thanks for purchasing a phone from us.");
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var data = [];
    data[0] = row.cells[0].innerHTML;
    data[1] = row.cells[1].innerHTML;
    data[2] = row.cells[2].innerHTML;
    data[3] = row.cells[3].innerHTML;
    data[4] = row.cells[4].innerHTML;
    data[5] = row.cells[5].innerHTML;
    let a = prompt("Enter updated name: ");
    let b = prompt("Enter updated email: ");
    let c = prompt("Enter updated number: ");
    let d = prompt("Enter updated gender: ");
    let e = prompt("Enter updated age: ");
    let f = prompt("Enter updated qualification: ");
    if (a !== "") {
        row.cells[0].innerHTML = a;
    }
    else {
        row.cells[0].innerHTML = data[0]
    }
    if (b !== "") {
        row.cells[1].innerHTML = b;
    }
    else {
        row.cells[1].innerHTML = data[1]
    }
    if (c !== "") {
        row.cells[2].innerHTML = c;
    }
    else {
        row.cells[2].innerHTML = data[2]
    }
    if (d !== "") {
        row.cells[3].innerHTML = d;
    }
    else {
        row.cells[3].innerHTML = data[3]
    }
    if (e !== "") {
        row.cells[4].innerHTML = e;
    }
    else {
        row.cells[4].innerHTML = data[4]
    }

    if (f !== "") {
        row.cells[5].innerHTML = f;
    }
    else {
        row.cells[5].innerHTML = data[5]
    }
    // console.log(row);
    // console.log(row.cells[0]);
}
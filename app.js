function submitBtn() {
    var form = document.getElementsByTagName("tr");
    for (let i = 0; i < form.length; i++) {
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
    // data[2].value =  document.querySelector('input[name="gender"]:checked');
    // console.log(document.querySelector('input[name="gender"]:checked'));
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
function readMore(txt) {
    var p = document.getElementsByClassName(txt);
    console.log(p);

    if (txt === "t15") {
        p[0].innerHTML = a;
    }
    else if (txt === "t14") {
        p[0].innerHTML = b;
    }
    else if (txt === "t13") {
        p[0].innerHTML = c;
    }
    else if (txt === "t12") {
        p[0].innerHTML = d;
    }
}

function addData()
{
    var data=[];
    data[0]=document.getElementById("Name1").value;
    data[1]=document.getElementById("Email1").value;
    data[2]=document.getElementById("Phone").value;
    if (document.getElementById("Male1").value!=="")
    {
        data[3]=document.getElementById("Male1").value;
    }
    else {
        data[3]=document.getElementById("Female1").value;
    }
    data[4]=document.getElementById("Age").value;
    data[5]=document.getElementById("Qualification").value;
    console.log(data);
    let tbl = document.getElementsByClassName("t3");
    let newRow = tbl[0].insertRow();
    newRow.insertCell(0).innerHTML=data[0];  
    newRow.insertCell(1).innerHTML=data[1];  
    newRow.insertCell(2).innerHTML=data[2];  
    newRow.insertCell(3).innerHTML=data[3];  
    newRow.insertCell(4).innerHTML=data[4];  
    newRow.insertCell(5).innerHTML=data[5];  
    newRow.insertCell(6).innerHTML='<button onclick="editRow(this)">Edit</button>'+ 
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
    var data=[];
    data[0]=row.cells[0].value;
    data[1]=row.cells[1].value;
    data[2]=row.cells[2].value;
    data[3]=row.cells[3].value;
    data[4]=row.cells[4].value;
    data[5]=row.cells[5].value;
    row.cells[0].innerHTML = prompt("Enter updated name: ");
    row.cells[1].innerHTML = prompt("Enter updated email: ");
    row.cells[2].innerHTML = prompt("Enter updated number: ");
    row.cells[3].innerHTML = prompt("Enter updated gender: ");
    row.cells[4].innerHTML = prompt("Enter updated age: ");
    row.cells[5].innerHTML = prompt("Enter updated qualification: ");
    // console.log(row);
    // console.log(row.cells[0]);
}
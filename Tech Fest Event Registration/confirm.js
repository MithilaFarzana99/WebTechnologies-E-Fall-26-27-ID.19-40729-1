let student = localStorage.getItem("studentName");
let events = JSON.parse(localStorage.getItem("events")) || [];

let results="Name: " +student+"<br> Events: <br>";
for (let i=0; i<events.length; i++) {
    results += events[i] + "<br>";
}

results += "<br> Total Fee: " +events.length * 150 + " Taka";
document.getElementById("summary").innerHTML = results;

function goBack(){
    window.location.href="index.html";
}
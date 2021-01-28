$(document).ready(function(){
 fetch('https://jsonplaceholder.typicode.com/todos/').then(r => r.json())
 .then(JSON => {
    var podaci = "";
    var pom = document.getElementById("tekst");
    $.each(JSON, function(index,data){
        podaci += '<tr class="text-' + Color(data.completed)  + '">' +
        '<th scope="row">' + data.userId + '</th>' +
        '<td>' + data.id + '</td>' +
        '<td>' + data.title + '</td>' +
        '<td><div><button id="dugme" type="button" class="btn btn-' + Button(data.completed) + '</button></div></td>' +
      '</tr>';
    });
    pom.innerHTML = podaci;
 });
});
function Button(completed){
    return completed ? 'success">Completed' : 'danger">Not Completed';
}
function Color(completed){
    return completed ? 'success' : 'danger';
}




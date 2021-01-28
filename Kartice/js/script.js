$(document).ready(function(){
    fetch('https://jsonplaceholder.typicode.com/todos/').then(r => r.json())
    .then(JSON => {
        var podaci = "";
        var smestanje = document.getElementById('ispis');
        $.each(JSON, function(index,data){
            podaci += '<div class="col col-sm-6 col-sm-4 col-lg-4 py-3">'+
            '<div class="card text-center border-' + Color(data.completed) + ' mb-3 h-100">'+
            '<div class="card-header">'+
              '<h2>UserId: ' + data.userId + '</h2>'+
            '</div>'+
            '<div class="card-body">'+
              '<h5 class="card-title">Id: ' + data.id + '</h5>'+
              '<p class="card-text">' + data.title + '</p>'+
            '</div>'+
            '<div class="card-footer">'+
                '<a href="#" class="btn btn-' + Button(data.completed) + '</a>'+
            '</div>'+
          '</div>'+
          '</div>';
        });
        smestanje.innerHTML = podaci;
    });
});

function Button(completed){
    return completed ? 'success">Completed' : 'danger">Not Completed';
}
function Color(completed){
    return completed ? 'success' : 'danger';
}

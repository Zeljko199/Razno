$(document).ready(function(){
    $('#dugme1').click(function(){
    var Id = document.getElementById('showPhoto1').value;
    fetch('https://jsonplaceholder.typicode.com/albums/' + Id +'/photos').then(r => r.json())
    .then(JSON => {
        var podaci = "";
        var lokacija = document.getElementById('ubaci');
        $.each(JSON, function(index, data){
            podaci += '<div class="col-3 mb-4">' +
            '<div class="card h-100">'+
                '<img class="card-img-top" src="' + data.thumbnailUrl +'" alt="Card image cap">'+
                '<div class="card-body">'+
                  '<h5>Album Id: ' + data.albumId + '</h5>'+
                  '<h6 class="card-title">Photo Id: ' + data.id + '</h6>' +
                  '<small class="card-text">' + data.title + '</small>' +
                '</div>'+
              '</div>'+
        '</div>';
        });
        lokacija.innerHTML = podaci;
    });
    });
    $('#dugme2').click(function(){
        var Id = document.getElementById('showPhoto1').value;
        var start = document.getElementById('showPhoto2').value;
        var end = document.getElementById('showPhoto3').value;
    fetch('https://jsonplaceholder.typicode.com/albums/' + Id +'/photos').then(r => r.json())
    .then(JSON => {
        var podaci = "";
        var lokacija = document.getElementById('ubaci');
        for(var i = start-1;i<end;i++){
            podaci += '<div class="col-3 mb-4">' +
            '<div class="card h-100">'+
                '<img class="card-img-top" src="' + JSON[i].thumbnailUrl +'" alt="Card image cap">'+
                '<div class="card-body">'+
                  '<h5>Album Id: ' + JSON[i].albumId + '</h5>'+
                  '<h6 class="card-title">Photo Id: ' + JSON[i].id + '</h6>' +
                  '<small class="card-text">' + JSON[i].title + '</small>' +
                '</div>'+
              '</div>'+
        '</div>';
        }
        lokacija.innerHTML = podaci;
    });
    });
});
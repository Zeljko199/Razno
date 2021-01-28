$(document).ready(function(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json())
    .then(JSON => {
        console.log(JSON);
        var podaci = "";
        var smestanje = document.getElementById("tabela");
        $.each(JSON,function(index,data){
            podaci += '<tr id="klik">'+
            '<td>' + data.id + '</td>'+
            '<td>' + data.title + '</td>'+
          '</tr>';
        });
        smestanje.innerHTML = podaci;
    });
});
    $(document).on('click','#klik',function(){
    var ID = this.cells[0].innerText;
    fetch('https://jsonplaceholder.typicode.com/posts/' + ID).then(r => r.json())
    .then(JSON => {
        var podaci = "";
        var smestanje = document.getElementById("tekst");
    
            podaci = '<p>' + JSON.body + '</p>';
            smestanje.innerHTML = podaci;
        });
    });

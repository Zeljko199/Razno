$(document).ready(function(){
    fetch('https://jsonplaceholder.typicode.com/photos').then(r => r.json())
    .then(JSON => {
        var pom=0;
        var slike = "";
        var smestanje = document.getElementById("boje");
        $.each(JSON, function(index, data){
            if(pom<=100){
            slike += '<a href="' + data.url + '" target="_blank">' + 
            '<img border="0" alt="' + data.title + '" src="' + data.thumbnailUrl + '">' +
            '</a>';
            pom++;
        }
        });
        smestanje.innerHTML = slike;
    });
});
$(document).ready(function(){
    $('#dugme1').click(function(){
        var ID = document.getElementById('show1').value;
        fetch('https://jsonplaceholder.typicode.com/albums/'+ ID + '/photos').then(r => r.json())
        .then(JSON => {
            var podaci = "";
            var smesti = document.getElementById('unos');
            $.each(JSON,function(index,data){
                podaci += '<a target="_blank" href="' + data.url + '">'+
                '<img alt="btn-' + data.title + '" src="' + data.thumbnailUrl + '">'+
                '</a>';
            });
            smesti.innerHTML = podaci;
        });
    });
});

var i = 1, j=2;
while(i<4){
    j+=2;
    i+=1;
}
console.log("i = " + ++i + " j = " + j++);
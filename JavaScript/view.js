function render (view) {
    var request = $.ajax({
        method: "GET",
        url: view + '.html'
    });

    request.done(function (viewrender) {
        
        document.getElementById('app').innerHTML += viewrender;
    });
}

render('layouts/reservar');
$('#loginform').submit(function (e){
    e.preventDefault();
})



function initMap() {
    var uluru = {lat: -23.693182, lng: -49.827264};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}




function checkmail() {

    var email = document.getElementById('signuptop');
    if(email.value=='')
    {
        $('.cst-error').text('enter  email').show().addClass('cst-danger').removeClass('cst-success');
        return false;
    }
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        $('.cst-error').text('E-mail inválido!').show().addClass('cst-danger').removeClass('cst-success');

        email.focus;
        return false;
    }
    else{
        $('.cst-error').text('Sucesso!').show().addClass('cst-success').removeClass('cst-danger');
    }
}
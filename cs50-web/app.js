//dynamic header and footer
$(document).ready(function(){
    MasterMenu();
    MasterFooter();
});

function MasterMenu() {
    var dynamicheader = document.getElementById("dynamicheader");
    dynamicheader.innerHTML = '<header>' +
    '<header>' +
        '<!-- Navbar -->' +
        '<nav class="navbar navbar-expand-lg navbar-dark bg-primary">' +
          '<div class="container">' +
              '<a class="navbar-brand" href="./index.html">' +
                 '<img src="./images/logo-300.png" width="50" height="50" alt="logo">' +
              '</a>' +
              '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
              '</button>' +
              '<!-- Collapsed Navbar -->' +
              '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                '<ul class="navbar-nav mr-auto smooth-scroll">' +
                  '<li class="nav-item active">' +
                    '<a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>' +
                  '</li>'+
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="./about.html">About Us</a>'+
                  '</li>'+
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="./species.html">Species and Care</a>'+
                  '</li>'+
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="./macroalgae.html">Macroalgae</a>'+
                  '</li>' +
                  '<li class="nav-item">'+
                    '<a class="nav-link" href="./reef.html">Reef</a>'+
                  '</li>'+
                '</ul>'+
                '<form action="https://www.google.com/search" method="get" class="form-inline my-2 my-lg-0">'+
                  '<input name="q" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">'+
                  '<button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>'+
                '</form>'+
              '</div>'+
          '</div>'+
        '</nav>'+
      '</header>'+
    '<header>';
}

function MasterFooter() {
    var dynamicfooter = document.getElementById("dynamicfooter");
    dynamicfooter.innerHTML = '<footer>'+
        '<footer>'+
            '<div class="container">'+
                '<nav class="navbar fixed-bottom navbar-dark bg-primary">'+
                    '<span class="align-middle">&copy; 2020 Seahorse Whisperer, LLC</span>'+
                    '<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">'+
                        '<a href="https://www.facebook.com/seahorsewhisperersociety/" class="fa fa-facebook"></a>'+
                        '<a href="https://twitter.com/Seahorsewhisper" class="fa fa-twitter"></a>'+
                        '<a href="https://www.youtube.com/seahorsewhisperer" class="fa fa-youtube"></a>'+
                        '<a href="https://www.instagram.com/seahorsewhisperer/" class="fa fa-instagram"></a>'+
                    '</div>'+
                '</nav>'+
            '</div>'+
        '</footer>'+
    '<footer>';
}



 //Model functions
function greet()
{
    let name = document.querySelector('#name').value;
    if (name=== '' || name == null)
    {
        document.querySelector('#result').innerHTML = 'You must enter an email';
        document.querySelector('#name').style.borderColor = "red";

    } else {
    document.querySelector('#result').innerHTML = 'Thank you for subscribing, ' + name + '!';
    document.querySelector('#name').style.borderColor = "green";
    }
}


//make model appear with button click
$(document).ready(function(){
  $("#modalButton").click(function(){
    $("#subscribeModal").modal();
  });
});

$(document).ready(function () {
    $('#closeButton').click(function () {
            location.reload();
    });
});






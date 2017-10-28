/* To open the tabs */
function openMenu(event, menuName) {
    var i, x, tabs;
    x = document.getElementsByClassName("menu");/* returns a list */
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";/* Hidding */
    }
    tabs = document.getElementsByClassName("redMouseOver");/* Every tab is of this class */
    for (i = 0; i < x.length; i++) {
        tabs[i].className = tabs[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    event.currentTarget.firstElementChild.className += " w3-red";/* Showing */
}

/* To access the maps */
function myMap() {
    myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapOptions = {
        center: myCenter,
        zoom: 12, scrollwheel: false, draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}

document.getElementById("pizzaTab").click();
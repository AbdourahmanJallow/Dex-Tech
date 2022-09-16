let map;

function initMap() {
  const loc = {lat: 13.406968,lng: -16.729134}
  map = new google.maps.Map(document.querySelector(".map"), {
    // center: { lat: -34.397, lng: 150.644 },
    zoom: 14,
    center: loc
  });
}
const marker = new google.maps.Marker({position: loc, map: map})
// window.initMap = initMap;

// Smooth Scrolling
$('#navbar a, .btn').on('click',function(event){
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html,body').animate(
      {
      scrollTop: $(hash).offset().top - 100
    },
    800
    );
  }
});
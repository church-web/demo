const initParallaxAnimation = () => {
    const imageRight = document.getElementsByClassName('thumbnail-right');
    new simpleParallax(imageRight, {
        orientation: 'right',
        scale: 3
    });


    const imageSimple = document.getElementsByClassName('thumbnail-simple');
    new simpleParallax(imageSimple, {
        scale: 3
    });

    const image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        overflow: true
    });
};

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 50.00062341750921, lng: 36.290058648251055 };
    // The map, centered at Uluru
    const styles = [
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        }
    ];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: uluru,
        styles: styles
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
};

const loadApp = () => {
    initParallaxAnimation();
};

const wheelDistance = (e) => {
    if (!e) {
        e = window.event;
    }
    let w = e.wheelDelta,
        d = e.detail;
    if (d) {
        return -d / 3; // Firefox;
    }
    // IE, Safari, Chrome & other browsers
    return w / 40;
};

document.addEventListener('DOMContentLoaded', function() {
    loadApp();
}, false);
document.addEventListener("mousewheel", wheelDistance);
document.addEventListener("DOMMouseScroll", wheelDistance);

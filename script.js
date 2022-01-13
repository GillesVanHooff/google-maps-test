const homeIcon = "files/icons8-home-64.png";
const parkingIcon = "files/icons8-parking-48.png";
const officeIcon = "files/icons8-office-64.png";

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 51.21200782515698, lng: 4.415332600470051 },
        zoom: 13,
        mapId: '75c4332c9312b58d',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    const homeMarker = new google.maps.Marker({
        position: { lat: 51.17969807781665, lng: 4.432087048020361 },
        map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: homeIcon,
            scaledSize: new google.maps.Size(32, 32)
        },
    });
    const homeInfowindow = new google.maps.InfoWindow({
        content: 'My <a href="https://www.google.be/maps/@51.1796239,4.4322447,3a,60y,318.26h,127.08t/data=!3m6!1e1!3m4!1sTb48naI2ivKfmc5xJ8KrYg!2e0!7i16384!8i8192">home!</a>',
    });
    homeMarker.addListener("click", () => {
        homeInfowindow.open({
            anchor: homeMarker,
            map,
            shouldFocus: false,
        });
    });

    const cityParkingMarker1 = new google.maps.Marker({
        position: { lat: 51.2134531807772, lng: 4.409154360402443 },
        map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: parkingIcon,
            scaledSize: new google.maps.Size(32, 32)
        },
    });

    const office = new google.maps.Marker({
        position: { lat: 51.21413776227707, lng: 4.41000211363326 },
        map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: officeIcon,
            scaledSize: new google.maps.Size(32, 32)
        },
    });
}

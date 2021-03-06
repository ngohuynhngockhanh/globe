var submitGoogle

angular.module('starter.directives', [])

.factory('City', function($filter) {
  var cities = [

{
  "cityName": "Ho Chi Minh",
  "area" : 2096,
  "population" : 8426,
  "averageTempe" : 27,
  "latitude" : 10.823099,
  "longitude" : 106.629664,
  "imageSource" : "http://img.v3.news.zdn.vn/Uploaded/OFH_oazszstq/2014_06_17/01.jpg",
  "slides": [
    "img/HoChiMinh/1.png",
    "img/HoChiMinh/2.png",
    "img/HoChiMinh/3.png",
    "img/HoChiMinh/4.png",
    "img/HoChiMinh/5.jpg",
    "img/HoChiMinh/6.jpg",
    "img/HoChiMinh/7.jpg",
  ]
},

{
  "cityName": "Ha Noi",
  "area" : 3329,
  "population" : 7588,
  "averageTempe" : 23.2,
  "latitude" : 21.027764,
  "longitude" : 105.834160,
  "imageSource" : "http://www.vyctravel.com/Upload/TourND/Mien%20Bac/Ha%20Noi%204.jpg",
  "slides": [
    "img/HaNoi/1.png",
    "img/HaNoi/2.png",
    "img/HaNoi/3.png",
    "img/HaNoi/4.png",
    "img/HaNoi/5.png",
  ]
},

{
  "cityName": "Da Nang",
  "area" : 1285,
  "population" : 1047,
  "averageTempe" : 25.9,
  "latitude" : 16.054407,
  "longitude" : 108.202167,
  "imageSource" : "https://www.vietravel.com/Images/NewsPicture/4.jpeg"
},

{
  "cityName": "Bangkok",
  "area" : 1569,
  "population" : 8281,
  "averageTempe" : 26,
  "latitude" : 13.756331,
  "longitude" : 100.501765,
  "imageSource" : "http://www.happytrips.com/photo/52040579/Eclectic-Bangkok.jpg"
},

{
  "cityName": "Dubai",
  "area" : 4114,
  "population" : 2261995,
  "averageTempe" : 35,
  "latitude" : 25.204849,
  "longitude" : 55.270783,
  "imageSource" : "http://www.eziholiday.com/common_area/tour_packages/580888e6471955014061.png"
},

{
  "cityName": "New York",
  "area" : 789,
  "population" : 8406,
  "averageTempe" : 21,
  "latitude" : 40.712784,
  "longitude" : -74.005941,
  "imageSource" : "https://media.timeout.com/images/103444978/image.jpg"
},

{
  "cityName": "London",
  "area" : 1572,
  "population" : 8674,
  "averageTempe" : 14,
  "latitude" : 51.507351,
  "longitude" : -0.127758,
  "imageSource" : "http://visco.edu.vn/wp-content/uploads/2016/08/17Londres.jpg"
},

{
  "cityName": "Madrid",
  "area" : 604,
  "population" : 3165,
  "averageTempe" : 17,
  "latitude" : 40.416775,
  "longitude" : -3.703790,
  "imageSource" : "http://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Spain/Madrid/madrid-overview-sunsetovermadrid-xlarge.jpg"
},

{
  "cityName": "Bắc Kinh",
  "area" : 16411,
  "population" : 21500000,
  "averageTempe" : 4,
  "latitude" : 39.904211,
  "longitude" : 116.407395,
  "imageSource" : "http://vtcorp.vn/data/image-article/1/images/Thi%C3%AAn-An-M%C3%B4n.jpg"
},

{
  "cityName": "Tokyo",
  "area" : 2188,
  "population" : 13620000,
  "averageTempe" : 4,
  "latitude" : 35.689487,
  "longitude" : 139.691706,
  "imageSource" : "http://blogdulich.com.vn/uploads/2-DU-NGOAN-NAM-CHAU/chau-a/tim-hieu-thu-do-la-lung-nhat-the-gioi-Tokyo-/tim-hieu-thu-do-la-lung-nhat-the-gioi-Tokyo-.jpg"
},

{
  "cityName": "New Delhi",
  "area" : 42.7,
  "population" : 21750000,
  "averageTempe" : 31,
  "latitude" : 28.613939,
  "longitude" : 77.209021,
  "imageSource" : "https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/15811/SITours/private-tour-to-agra-from-delhi-including-taj-mahal-and-agra-fort-in-new-delhi-230598.jpg"  
},

{
  "cityName": "Sydney",
  "area" : 12.368,
  "population" : 4293000,
  "averageTempe" :25,
  "latitude" : -33.868820,
  "longitude" : 151.209296,
  "imageSource" : "https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg"  
},

{
  "cityName": "Jakarta",
  "area" : 661.5,
  "population" : 9608000,
  "averageTempe" :27,
  "latitude" : -6.174465,
  "longitude" : 106.822745,
  "imageSource" : "https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg"  
},

{
  "cityName": "Rio de Janeiro",
  "area" : 1260,
  "population" : 5613000,
  "averageTempe" :23,
  "latitude" : -22.906847,
  "longitude" : -43.172896,
  "imageSource" : "https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg"  
},

{
  "cityName": "Buenos Aires",
  "area" : 203.3,
  "population" : 2891000,
  "averageTempe" :25,
  "latitude" : -34.603684,
  "longitude" : -58.381559,
  "imageSource" : "http://vuelos.rumbo.es/vuelos/rumbo/img/buenos_aires.jpg"  
},

{
  "cityName": "Cà Mau",
  "area" : 5331,
  "population" : 1220900,
  "averageTempe" :25,
  "latitude" : 9.152673,
  "longitude" : 105.196079,
  "imageSource" : "http://media.dulich24.com.vn/diemden/ca-mau-6645/ca-mau.jpg"  
},

{
  "cityName": "Sa Đéc",
  "area" : 58,
  "population" : 152500,
  "averageTempe" :27,
  "latitude" : 10.305768,
  "longitude" : 105.746854,
  "imageSource" : "http://media.dulich24.com.vn/diemden/ca-mau-6645/ca-mau.jpg"  
}

]

  return {
    all: function() {
      return cities
    },
    search: function(name) {
      var res;
      var maxRatio = 51
      for (var i = 0; i < cities.length; i++) {
        var city = cities[i]
        var s1 = $filter('xoaDau')(name)
        var s2 = $filter('xoaDau')(city.cityName)
        var sm = new difflib.SequenceMatcher(s1, s2);
        var ratio = sm.ratio() * 100
        console.log(name, city.cityName, ratio)
        if (ratio > maxRatio) {
          res = city
          maxRatio = ratio
        }
      }
      return res;
    }
  }
})
.filter('xoaDau', function() {
    return function(text) {
        return text.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\ /g, '-').replace(/đ/g, "d").replace(/đ/g, "d").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ+/g,"o").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ+/g, "e").replace(/ì|í|ị|ỉ|ĩ/g,"i");
    }
})
.directive('map', function($rootScope) {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(10.7626391,106.6820268),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);
        

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');


        console.log(input)
        var searchBox = new google.maps.places.SearchBox(input);

        submitGoogle = function() {
          google.maps.event.trigger(input, 'focus')
          google.maps.event.trigger(input, 'keydown', {
              keyCode: 13
          });
        }
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));
            console.log(place.geometry.location.lat(), place.geometry.location.lng())
            var lat = convert(place.geometry.location.lat(), 90, -90, 2, 182)
            var long = convert(place.geometry.location.lng(), -180, 180, 71, -27)
            if (long < 0)
              long += 99
            var pos = {
              lat: lat,
              long: long

            }
            //console.log(place.geometry)
            console.log("location", pos)
            $rootScope.$emit("moveToPos", pos)

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });


        $scope.onCreate({map: map});


        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
});
function convert(x, in_min, in_max, out_min, out_max)
{
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
angular.module('starter.controllers', [])
.controller('CityCtrl', function($scope, $rootScope, $timeout, mySocket, $ionicModal, City, $state, $stateParams) {
  console.log("init")
  console.log($stateParams)
  $scope.$on('$ionicView.beforeEnter', function() {
    console.log("enter")
    console.log($stateParams)
    $scope.city = $stateParams.city
  })
})
.controller('MapCtrl', function($scope, $ionicLoading, $rootScope, $timeout, mySocket, $ionicModal, City, $state) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };
  $scope.searchBox = ""
  
  $scope.speechToText = function() {
    console.log("speech to texx")
    /**/
    
    if ($rootScope.recognition)  {
      /*
      $scope.searchBox = text;
        $timeout(function() {
          submitGoogle();

        }, 300);
        alert(text)
      */
      //$rootScope.recognition.stop()
      $rootScope.recognition.start()
      
    } else {
      $scope.searchBox = "Hà Nội"
      $timeout(function() {
        submitGoogle();
        $scope.createInfoTable($scope.searchBox)
      }, 300);
    }

  }
  $rootScope.$on("speech", function(e, message) {
    $scope.searchBox = message;
    $scope.$apply()
    $timeout(function() {
      submitGoogle();
      $scope.createInfoTable($scope.searchBox)
    }, 300);
  })
  $scope.modal = undefined
  $scope.createInfoTable = function(name) {
    if ($scope.modal) {
      $scope.modal.remove();
    }
    var city = City.search(name)

    if (!city) {
      return console.log("error not found city")
    }
    $state.go("city", {city: city})
  }
  

  $scope.$on('$destroy', function() {
    if ($scope.modal)
      $scope.modal.remove();
  });

  $rootScope.$on("moveToPos", function(e, pos) {
    console.log("listen to pos", pos)
    var json = pos 
    json.speed = 37
    /*mySocket.emit("SPEED", {
      "speed": 35
    })*/
    $timeout(function() {
      mySocket.emit("MOVE", json)  
    }, 200)
    
  })
  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });



    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});

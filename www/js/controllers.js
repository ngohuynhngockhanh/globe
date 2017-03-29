angular.module('starter.controllers', [])

.controller('MapCtrl', function($scope, $ionicLoading, $rootScope, $timeout, mySocket, $ionicModal, City) {
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
      $rootScope.recognition.start()
    } else {
      $scope.searchBox = "Tuy Hòa"
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
    var city = City.search(name)
    if (!city) {
      return console.log("error not found city")
    }
    var new_scope = $rootScope.$new()
    new_scope.city = city
    $ionicModal.fromTemplateUrl('templates/map.html', {
      scope: new_scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      if ($scope.modal) {
        $scope.modal.remove();
      }
      $scope.modal = modal;
      $scope.modal.show();
    });
    
  }
  

  $scope.$on('$destroy', function() {
    if ($scope.modal)
      $scope.modal.remove();
  });

  $rootScope.$on("moveToPos", function(e, pos) {
    console.log("listen to pos", pos)
    var json = pos 
    mySocket.emit("SPEED", {
      "speed": 35
    })
    mySocket.emit("MOVE", json)
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

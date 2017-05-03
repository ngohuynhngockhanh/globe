angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives','btford.socket-io', 'ionic-modal-select'])

.factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('http://ourshark.mysmarthome.vn:8087/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
	
/////////////////////// Những dòng code ở trên phần này là phần cài đặt, các bạn hãy đọc thêm về angularjs để hiểu, cái này không nhảy cóc được nha!
})
.filter('toArray', function() {
        return function(obj, addKey) {
            if (!angular.isObject(obj)) return obj;
            if (addKey === false) {
                return Object.keys(obj).map(function(key) {
                    return obj[key];
                });
            } else {
                return Object.keys(obj).map(function(key) {
                    var value = obj[key];
                    return angular.isObject(value) ?
                        Object.defineProperty(value, '$key', {
                            enumerable: false,
                            value: key
                        }) : {
                            $key: key,
                            $value: value
                        };
                });
            }
        };
    })
.run(function($ionicPlatform, $ionicPopup, $rootScope, $timeout) {
	var recognitionAlert = undefined
    var timeoutAlert = undefined
    var recognitionAlertDisplay = function(message, title) {
        alert(message)
    }
    $rootScope.alert = recognitionAlertDisplay
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    

    

    if (window.SpeechRecognition) {
    	
        $rootScope.recognition = new window.SpeechRecognition("vi"); 
    	console.log( $rootScope.recognition)
    	 $rootScope.recognition.onresult = function(event) {
    		console.log(event)
            if (event.results.length > 0) {
                var message = event.results[0][0].transcript;
                //$rootScope.alert(message)
                $rootScope.$emit("speech", message)
            }
        }
        $rootScope.recognition.onspeechend = function() {
        	console.log("try again")
            
        }
        $rootScope.recognition.onerror = function() {
        	console.log("Error")
        	$rootScope.alert("Thử lại")
        }
        

    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        // setup an abstract state for the tabs directive
        .state('map', {
            url: '/map',
            views: {
                'view': {
                    templateUrl: 'templates/maps.html',
                    controller: "MapCtrl"
                }
            }
        })
        .state('city', {
            url: '/city',
            views: {
                'view': {
                    templateUrl: 'templates/info.html',
                    controller: "CityCtrl"
                }
            },
            params: {
                'city': null
            },
        })


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/map');

})
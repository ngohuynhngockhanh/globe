angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives','btford.socket-io'])
.factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('http://ourshark.co:8087/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
	
/////////////////////// Những dòng code ở trên phần này là phần cài đặt, các bạn hãy đọc thêm về angularjs để hiểu, cái này không nhảy cóc được nha!
}).run(function($ionicPlatform, $ionicPopup, $rootScope, $timeout) {
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
 
var app = angular.module('myApp', [])

app.controller('ParentCtrl',
  	function ParentCtrl ($rootScope) {
      $rootScope.$broadcast('parent', 'Some data');

  		$rootScope.parentData = "";

		  $rootScope.$on('child', function (event, data) {
			  $rootScope.parentData = data;
		  });

});

app.controller('OtherCtrl',
    function OtherCtrl ($rootScope) {

      $rootScope.otherData = {};

      $rootScope.$on('parent', function (event, data) {
        console.log(data);
        $rootScope.otherData = data;
      });

});

app.controller('ChildCtrl',
  function ChildCtrl ($rootScope) {

  	var emitCount = 0;
    var broadcastCount = 0;
  	this.click = function () {
  		emitCount++;
  		$rootScope.$emit('child', 'Child Emit ' + emitCount); 
      $rootScope.$broadcast('childBC', 'Child Broadcast ' + emitCount);
  	}

});

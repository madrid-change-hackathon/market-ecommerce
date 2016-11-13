angular.module('ecommerce').
service('MarketModel', ['', function(){

	var URL_TEST = "../server/getData.php";
	var marketModel = {};


	marketModel.getMarket= function(getMarket_IN) {
		var resultadoPeticion = $http.get(URL_TEST, {
		});

		return resultadoPeticion;
	};



	return marketModel;
}])
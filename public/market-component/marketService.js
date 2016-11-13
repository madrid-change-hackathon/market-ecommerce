angular.module('ecommerce').
service('MarketService', ['MarketModel', function(MarketModel){

	     var marketService = {};


       marketService.getMarkets= function(getMarkets_IN)
        {
          var deferred = $q.defer();
          MarketModel.getMarkets(getMarkets_IN).success(function(data,status) {
            deferred.resolve(data);
           }).error(function(data, status) {
           deferred.reject(crearObjetoError(data, status));
           });
        return deferred.promise;

        }
        function crearObjetoError(data, status){
	        var errorObj;
	        if(status === 500){
	          if((data.errorDescription !== undefined) && (data.errorDescription !== null)){
	            errorObj = {code:500, mensaje1:data.errorDescription, mensaje2:data.errorId, mensaje3:data.context};
	          }else{
	            errorObj = {code:status};
	          }
	        }else{
	          errorObj = {code:status};
	        }
	        return errorObj;
	      };

    return marketService;
}])
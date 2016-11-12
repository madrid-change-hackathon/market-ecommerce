angular.module('ecommerce')
  .service('MarketService', MarketService)

function MarketService ($q) {
  var service = this
  service.getMarket = function () {
    return $q.resolve({
      ID: 1,
      name: 'Mercado de Barceló'
    })
  }
  service.getStores = function (typeID, productIDs) {
    return $q.resolve([
      {
        ID: 1,
        name: 'Lupita',
        price: 20
      },
      {
        ID: 2,
        name: 'Carlos',
        price: 30
      }
    ])
  }
}
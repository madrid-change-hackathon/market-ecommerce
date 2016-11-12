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
  service.getStoresByProducts = function (typeID, productIDs) {
    var stores = [
      [
        [
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
        ],
        [
          {
            ID: 3,
            name: 'Pedro',
            price: 20
          }
        ]
      ]
    ]
    return $q.resolve(stores[0])
  }
}
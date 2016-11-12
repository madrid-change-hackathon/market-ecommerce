angular.module('ecommerce')
  .service('MarketService', MarketService)

function MarketService ($q) {
  var service = this
  service.getMarket = function () {
    return $q.resolve({
      Id: 1,
      name: 'Mercado de Barceló'
    })
  }
  service.getStoresByProducts = function (typeId, productIds) {
    var stores = [
      [
        [
          {
            Id: 1,
            name: 'Lupita',
            price: 20
          },
          {
            Id: 2,
            name: 'Carlos',
            price: 30
          }
        ],
        [
          {
            Id: 3,
            name: 'Pedro',
            price: 20
          }
        ]
      ]
    ]
    return $q.resolve(stores[typeId])
  }
}
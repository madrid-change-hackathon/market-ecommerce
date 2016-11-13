angular.module('ecommerce')
  .component('marketComponent', {
    templateUrl: './market-component/market-component-tmpl.html',
    controller: MarketComponent,
    controllerAs: 'marketC',
    bindings: {
      name: '='
    }
  })

function MarketComponent (MarketService) {
  var vm = this
  vm.text = vm.name + vm.name
  vm.title="Soy mercado";
}
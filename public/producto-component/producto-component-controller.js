angular.module('ecommerce')
  .component('productoComponent', {
    templateUrl: './producto-component/producto-component-tmpl.html',
    controller: ProductoComponent,
    controllerAs: 'productoC',
    bindings: {
      name: '='
    }
  })

function ProductoComponent () {
  var vm = this
  vm.text = vm.name + vm.name
  vm.title="Soy producto";
}
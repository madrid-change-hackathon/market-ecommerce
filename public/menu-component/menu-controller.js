angular.module('ecommerce')
  .component('menuComponent', {
    templateUrl: './menu-component/menu-tmpl.html',
    controller: MenuComponent,
    controllerAs: 'menuC',
    bindings: {
      name: '='
    }
  })

function MenuComponent () {
  var vm = this
  vm.text = vm.name + vm.name
}
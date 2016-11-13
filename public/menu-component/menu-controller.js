angular.module('ecommerce')
  /*.component('menuComponent', {
    templateUrl: './menu-component/menu-tmpl.html',
    controller: MenuComponent,
    controllerAs: 'menuC',
    bindings: {
      name: '='
    }
  })*/
  .controller('MenuController', MenuComponent)

function MenuComponent () {
  var vm = this
  vm.text = vm.name + vm.name
}
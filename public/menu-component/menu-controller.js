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

function MenuComponent (RecipeService) {
  var vm = this
  vm.text = vm.name + vm.name
  vm.recipes = []
  RecipeService.getRecipes().then(function (recipes) {
      vm.recipes = recipes
    }
  )
}
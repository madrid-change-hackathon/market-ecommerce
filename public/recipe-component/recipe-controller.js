var _ = require('lodash')
angular
  .module('ecommerce')
  .component('recipeComponent', {
    templateUrl: './recipe-component/recipe-tmpl.html',
    controller: RecipeController,
    controllerAs: 'rc',
    bindings: {
      recipeId: '='
    }
  })
function RecipeController (RecipeService, MarketService) {
  var vm = this
  vm.recipe = {
  }
  RecipeService.getRecipeById(vm.recipeId)
    .then(function (recipe) {
      Object.assign(vm.recipe, recipe)
      var productsByTypeId = _.groupBy(recipe.products, 'typeId')
      var types = Object.keys(productsByTypeId)
      return $q.all(_.map(productsById, (products, typeId) => MarketService.getStoresByProducts(typeId, products)))
        .then()
    })
    .then(function () {

    })
}
var _ = require('lodash')
angular
  .module('ecommerce')
  // ui router is not getting component :(
  /*.component('recipeComponent', {
    templateUrl: './recipe-component/recipe-tmpl.html',
    controller: RecipeController,
    controllerAs: 'rc',
    bindings: {
      recipeId: '='
    }
  })*/
  .controller('RecipeController', RecipeController)
function RecipeController (RecipeService, MarketService, $q, recipeId) {
  var vm = this
  vm.recipe = {
  }
  vm.prices = []
  console.log('recipe', recipeId)
  RecipeService.getRecipeById(recipeId)
    .then(function (recipe) {
      Object.assign(vm.recipe, recipe)
      var productsByTypeId = _.groupBy(recipe.products, 'typeId')
      var types = Object.keys(productsByTypeId)
      return $q.all(_.map(productsByTypeId, (products, typeId) => MarketService.getStoresByProducts(typeId, products)))
    })
    .then(function (prices) {
      vm.pricesByCategory = prices
      console.log(vm.pricesByCategory)
    })
}
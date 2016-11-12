angular
  .module('ecommerce')
  .component('recipeComponent', {
    templateUrl: './recipe-component/recipe-tmpl.html',
    controller: RecipeController,
    controllerAs: 'rc',
    bindings: {
      recipeID: '='
    }
  })
function RecipeController (RecipeService) {
  var vm = this
  vm.recipe = {
  }
  RecipeService.getRecipeByID(vm.recipeID)
    .then(function (recipe) {
      Object.assign(vm.recipe, recipe)
    })
}
angular.module('ecommerce')
  .config(stateConfig)

function stateConfig ($stateProvider) {
  $stateProvider
    .state('recipe', {
      name: 'recipe',
      url: '/recipe/:recipeId',
      controller: 'RecipeController',
      controllerAs: 'rc',
      templateUrl: 'recipe-component/recipe-tmpl.html',
      resolve: {
        recipeId: function ($stateParams) {
          console.log($stateParams)
          return parseInt($stateParams.recipeId)
        }
      }
    })

}
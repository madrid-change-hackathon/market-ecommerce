angular.module('ecommerce')
  .config(stateConfig)

function stateConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/menu/1')
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
    .state('menu', {
      name: 'menu',
      url: '/menu/:marketId',
      controller: 'MenuController',
      controllerAs: 'menuC',
      templateUrl: 'menu-component/menu-tmpl.html',
      resolve: {
        marketId: function ($stateParams) {
          return parseInt($stateParams.marketId)
        }
      }
    })

}
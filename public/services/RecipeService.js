angular.module('ecommerce')
  .service('RecipeService', RecipeService)

function RecipeService ($q) {
  var vm = this
  vm.getRecipes = function () {
    return $q.resolve([
      {
        ID: 1,
        url: '',
        name: 'Cocido'
      },
      {
        ID: 2,
        url: '',
        name: 'Callos'
      },
      {
        ID: 3,
        url: '',
        name: ''
      }
    ])
  }

  vm.getRecipe = function (id) {
    return $q.resolve(
      {
        ID: 1,
        name: 'Cocido',
        ingredients: [
          {

          }
        ]
      })
  }
}
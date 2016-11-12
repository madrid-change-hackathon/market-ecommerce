angular.module('ecommerce')
  .service('RecipeService', RecipeService)

function RecipeService ($q) {
  var service = this
  service.getRecipes = function () {
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

  service.getRecipeByID = function (id) {
    return $q.resolve(
      {
        ID: 1,
        name: 'Cocido',
        url: 'http://images.media-allrecipes.com/userphotos/250x250/4061386.jpg',
        ingredients: [
          {

          }
        ]
      })
  }
}
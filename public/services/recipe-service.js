angular.module('ecommerce')
  .service('RecipeService', RecipeService)

function RecipeService ($q) {
  var service = this
  service.getRecipes = function () {
    return $q.resolve([
      {
        Id: 1,
        url: '',
        name: 'Cocido'
      },
      {
        Id: 2,
        url: '',
        name: 'Callos'
      },
      {
        Id: 3,
        url: '',
        name: ''
      }
    ])
  }

  service.getRecipeById = function (id) {
    return $q.resolve(
      {
        Id: 1,
        name: 'Cocido',
        url: 'http://images.media-allrecipes.com/userphotos/250x250/4061386.jpg',
        products: [
          {
            Id: 1,
            typeId: 0,
            name: 'Estofado'
          },
          {
            Id: 2,
            typeId: 0,
            name: 'Tocino'
          },
          {
            Id: 3,
            typeId: 1,
            name: 'Garbanzos'
          }
        ]
      })
  }
}
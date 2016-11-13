angular.module('ecommerce')
  .service('RecipeService', RecipeService)

function RecipeService ($q) {
  var service = this
  service.getRecipes = function () {
    return $q.resolve([
      {
        Id: 1,
        url: 'images/3.jpg',
        name: 'Cocido',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus'
      },
      {
        Id: 2,
        url: 'images/6.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus',
        name: 'Callos'
      },
      {
        Id: 3,
        url: 'images/5.jpg',
        name: 'Estofado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus omnis minus temporibus perferendis nesciunt quam repellendus nulla nemo ipsum odit corrupti consequuntur possimus'
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
angular.module('ecommerce')
  .component('mainComponent', {
    templateUrl: './main-component/main-component-tmpl.html',
    controller: MainComponent,
    controllerAs: 'mc',
    bindings: {

    }
  })
function MainComponent () {
  var vm = this
  vm.text = 'Hi there yo'
}
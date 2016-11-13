require('./resources/css/main.scss')

angular.module('ecommerce', ['ui.router'])
require('./state-config')

require('./main-component/main-controller')
require('./menu-component/menu-controller')
require('./recipe-component/recipe-controller')
require('./cart-component/cart-controller')
// services
require('./services/recipe-service')
require('./services/market-service')
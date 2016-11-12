require('./resources/css/main.scss')

angular.module('ecommerce', [])
require('./main-component/main-controller')
require('./menu-component/menu-controller')
require('./recipe-component/recipe-controller')

// services
require('./services/recipe-service')
require('./services/market-service')
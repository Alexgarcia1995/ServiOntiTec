/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngCookies', 'facebook'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "frontend/modules/home/view/home.html", controller: "menuCtrl"})
    // Pages
    .when("/listado", {templateUrl: "frontend/modules/listado/view/list_coches.html", controller: "listadoCtrl"})
    .when("/pricing", {templateUrl: "frontend/modules/pricing.html", controller: "PageCtrl"})
    //.when("/services", {templateUrl: "view/services.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "frontend/modules/contact/view/contact.html", controller: "contactCtrl"})
    .when("/listado&id=:id", {
      templateUrl: "frontend/modules/listado/view/details_coches.html",
      controller: "detailsCtrl",
      resolve: {
          data: function (services, $route,CommonService) {
            //var pretty_list_articles = "?module=&function=redirect_details&aux="+;
            //alert(pretty_list_articles);
            return services.get("listcoches","redirect_details",$route.current.params.id);
      }
    }
  })
    // else 404
    //.otherwise("/404", {templateUrl: "view/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

app.controller('listadoCtrl', function (/* $scope, $location, $http */) {
  console.log("listado Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});
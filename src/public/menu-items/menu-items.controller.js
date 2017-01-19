(function () {
  'use strict';

  angular.module('public')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['menuItems'];
  function menuItemsController(menuItems) {
    var $ctrl = this;
    $ctrl.menuItems = menuItems;
    console.log("MenuItems:", $ctrl.menuItems);
  }
})()

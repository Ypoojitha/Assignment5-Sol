(function () {
  'use strict';

  angular.module('public')
  .component('menuItems', {
      templateUrl: 'src/public/menu-item/menu-item.html',
      bindings: {
        menuItem: '<'
      },
      controller: MenuItemController
  });


  MenuItemController.$inject = ['ApiPath'];
  function MenuItemController(ApiPath) {
    var $ctrl = this;
    $ctrl.basepath = ApiPath;
  }

})();

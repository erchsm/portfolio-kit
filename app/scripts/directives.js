(function () {
  'use strict';

  /* Directives */


  angular.module('myApp.directives', [])
  .directive('codepenembed', function() {
    var injectScript = function(element) {
      var scriptTag = angular.element(document.createElement('script'));
      scriptTag.attr('charset', 'utf-8');
      scriptTag.attr('src', '//assets.codepen.io/assets/embed/ei.js');
      element.append(scriptTag);
    };

    return {
      link: function(scope, element) {
        injectScript(element);
      }
    };
  });
})();

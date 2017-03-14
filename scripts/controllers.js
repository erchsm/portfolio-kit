(function () {
  'use strict';

  /* Controllers */


  angular.module('myApp.controllers', [])
  .controller('mainController', ['$scope', '$state', function($scope, $state) {
    // $scope.nav =  {
      // return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    // }
    $scope.isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return ($scope.isMobile.Android() || $scope.isMobile.BlackBerry() || $scope.isMobile.iOS() || $scope.isMobile.Opera() || $scope.isMobile.Windows());
      }
    };

    $scope.isBrowser =  {
      safari: function() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
      }
    }


    $scope.mobileMenuOutsideClick = function() {
      $(document).click(function (e) {
        var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ( $('body').hasClass('offcanvas') ) {
            $('body').removeClass('offcanvas');
            $('.js-fh5co-nav-toggle').removeClass('active');
          }
        }
      });
    };


    $scope.offcanvasMenu = function() {
      $(window).resize(function(){
        if ( $('#page').hasClass('offcanvas') ) {
          $('#page').removeClass('offcanvas');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }
      });
    };

    $scope.burgerMenu = function() {
      if (angular.element('#page').hasClass('overflow offcanvas')) {
        angular.element('#page').removeClass('overflow offcanvas');
        angular.element('.js-fh5co-nav-toggle').removeClass('active');
      } else {
        angular.element('#page').addClass('overflow offcanvas');
        angular.element('.js-fh5co-nav-toggle').addClass('active');
      }
      event.preventDefault();
    };

    $scope.burgerWayPoint = function() {
      $('#fh5co-header').waypoint( function( direction ) {
        if (direction == 'up') {
          $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
        }
      } , { offset: function() {
        return -this.element.clientHeight;
      } } );
      $('.fh5co-section').each(function() {
        $(this).waypoint( function( direction ) {
          if (direction == 'down') {
            if(this.element.classList.contains('fh5co-section--white'))
              $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
            if(this.element.classList.contains('fh5co-section--black'))
              $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
          }
        } , { offset: '5%' } );
      });
      $('.fh5co-section').each(function() {
        $(this).waypoint( function( direction ) {
          if (direction == 'up') {
            if(this.element.classList.contains('fh5co-section--white'))
              $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
            if(this.element.classList.contains('fh5co-section--black'))
              $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
          }
        } , { offset: function() {
          return -this.element.clientHeight;
        } } );
      });
      $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
    };


    $scope.contentWayPoint = function() {
      var i = 0;
      $('.animate-box').waypoint( function( direction ) {

        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function(){

            $('body .animate-box.item-animate').each(function(k){
              var el = $(this);
              setTimeout( function () {
                var effect = el.data('animate-effect');
                if ( effect === 'fadeIn') {
                  el.addClass('fadeIn animated-fast');
                } else if ( effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft animated-fast');
                } else if ( effect === 'fadeInRight') {
                  el.addClass('fadeInRight animated-fast');
                } else {
                  el.addClass('fadeInUp animated-fast');
                }

                el.removeClass('item-animate');
              },  k * 50, 'easeInOut' );
            });

          }, 100);

        }

      } , { offset: '85%' } );
    };
    $scope.videoWayPoint = function() {
      if (!($scope.isMobile.any())) {
        $('.play-on-scroll').waypoint(function( direction ) {
          if ( direction === 'down') {
            $(this.element)[0].play();
          }
        }, { offset: '50%' });
      }
    };



    $scope.goToTop = function() {

      $('.js-gotop').on('click', function(event){

        event.preventDefault();

        $('html, body').animate({
          scrollTop: $('html').offset().top
        }, 500, 'easeInOutExpo');

        return false;
      });

      $(window).scroll(function(){

        var $win = $(window);
        if ($win.scrollTop() > 200) {
          $('.js-top').addClass('active');
        } else {
          $('.js-top').removeClass('active');
        }

      });

    };

    $scope.parallax = function() {
      if (!($scope.isMobile.any()) && !($scope.isBrowser.safari())) {
        $(window).stellar();
      }
    };

    $scope.$on('$viewContentLoaded', function() {
      $scope.offcanvasMenu();
      $scope.mobileMenuOutsideClick();
      $scope.offcanvasMenu();
      // $scope.contentWayPoint();
      $scope.videoWayPoint();
      $scope.goToTop();
      $scope.$state = $state;
    });

    $scope.$on('$stateChangeSuccess', function() {
      window.scrollTo(0, 0);
      $scope.parallax();
      $scope.burgerWayPoint();
      $scope.contentWayPoint();
    });

    $scope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
    });

  }]);
})();

(function () {
  'use strict';

  /* Controllers */


  angular.module('myApp.controllers', [])
  .controller('mainController', ['$scope', function($scope) {
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


    $scope.scrollNavBar = function() {

    // if ( $(window).scrollTop() > 50)  {
    //   $('body').addClass('scrolled');
    //   $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
    // } else {
    //   $('body').removeClass('scrolled');
    //   $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
    // }

    // $(window).scroll(function(){
    //   if ( $(window).scrollTop() > 50)  {
    //     $('body').addClass('scrolled');
    //     $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
    //   } else {
    //     $('body').removeClass('scrolled');
    //     $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
    //   }
    // });


  };

  $scope.offcanvasMenu = function() {

    // Hover dropdown menu on mobile
    // $('.offcanvas-has-dropdown').mouseenter(function(){
    //   var $this = $(this);

    //   $this
    //   .addClass('active')
    //   .find('ul')
    //   .slideDown(500, 'easeOutExpo');
    // }).mouseleave(function(){

    //   var $this = $(this);
    //   $this
    //   .removeClass('active')
    //   .find('ul')
    //   .slideUp(500, 'easeOutExpo');
    // });


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
    // $('#fh5co-header').waypoint( function( direction ) {
    //   if (direction === 'up') {
    //     console.log('header');
    //     $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
    //   }
    // } , { offset: '5%' } );
    // $('.fh5co-section--black').waypoint( function( direction ) {
    //   if (direction === 'down') {
    //     console.log('black down');
    //     $('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
    //   }
    // } , { offset: '5%' } );
    // $('.fh5co-section--white').waypoint( function( direction ) {
    //   if (direction === 'down') {
    //     console.log('white down');
    //     $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
    //   }
    // },{ offset: '5%' });
    // $('.fh5co-section--white').waypoint( function( direction ) {
    //   if (direction === 'up') {
    //     console.log('white up');
    //     $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
    //   }
    // } , { offset: '5%' } );
    $('.fh5co-section').waypoint( function( direction ) {
      // if (direction === 'up') {
        console.log(this.element);
        $('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
      // }
    } , { offset: '5%' } );
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


  // Loading page
  $scope.loaderPage = function() {
    $(".fh5co-loader").fadeOut("slow");
  };

  $scope.counter = function() {
    $('.js-counter').countTo({
     formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
  });
  };

  $scope.counterWayPoint = function() {
    if ($('#fh5co-counter').length > 0 ) {
      $('#fh5co-counter').waypoint( function( direction ) {

        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
          setTimeout( counter , 400);
          $(this.element).addClass('animated');
        }
      } , { offset: '90%' } );
    }
  };

  $scope.parallax = function() {
    if (!($scope.isMobile.any()) && !($scope.isBrowser.safari())) {
      $(window).stellar();
    }
  };

  $scope.$on('$viewContentLoaded', function() {
    $scope.offcanvasMenu();
    $scope.mobileMenuOutsideClick();
    $scope.scrollNavBar();
    $scope.offcanvasMenu();
    $scope.contentWayPoint();
    $scope.videoWayPoint();
    $scope.burgerWayPoint();
    $scope.goToTop();
    $scope.loaderPage();
    $scope.counterWayPoint();
    $scope.parallax();
  });

  $scope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {
    window.scrollTo(0, 0);
  });

}]);
})();

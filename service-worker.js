/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/app-templates/agency/2.jpg","ec699fafe6a6e31bae76c811e4d71080"],["images/app-templates/agency/3.jpg","5a029f99edd4b03600ebf6ed8019fa62"],["images/app-templates/all-cards.jpg","ae58965fe2c5f35a65e1db54fa2fcb8e"],["images/app-templates/commerce/1.jpg","6df67d461b9d9356dc2e03fceb726355"],["images/app-templates/commerce/2.jpg","c13c9efb7babd95451017517197fbc0c"],["images/app-templates/commerce/3.jpg","6f16e07dc9f4218f2a5f6f42ecfdf63b"],["images/app-templates/commerce/4.jpg","d12bfc6acb805172550f8ea4d7e57e32"],["images/app-templates/commerce/5.jpg","ade0aebd2385503460d3991ed930a125"],["images/app-templates/commerce/6.jpg","5130e9035054a6ac39abfe5f4c82d6e2"],["images/app-templates/commerce/7.jpg","ca31d960ba242332918b725258312e69"],["images/app-templates/commerce/7.png","682170b9f61efb9c5cea94f0bd444ef9"],["images/app-templates/commerce/8.jpg","ae384cba782302468bc3a403ebc2248f"],["images/app-templates/conference/1.jpg","637feabd648e221fe5b9e201e266793f"],["images/app-templates/conference/2.jpg","669803c9261c91d1184a1e21fceff4eb"],["images/app-templates/conference/3.jpg","b898d0de8ce8f0b1d90b505eadbd123d"],["images/app-templates/conference/4.jpg","820380e4df8542e5efda1543477a77ad"],["images/app-templates/conference/5.jpg","3132546cb302cf4897fec7aa9a0725f9"],["images/app-templates/conference/6.jpg","e0c728942ffe0a09778bb62a7c940bf1"],["images/app-templates/conference/7.jpg","581d0481c4f3e4c508ba3a9b6e9888f6"],["images/app-templates/conference/8.jpg","8706ec76877fae03fe5765299d5aa3d5"],["images/app-templates/housewarming/1.jpg","1d142049de45edfd565fa6a18fb3e5f1"],["images/app-templates/housewarming/3.jpg","c6a4347cd5e795e3a873aec296d56fdc"],["images/banner_hero.svg","b9f65b5a98734b1bba402e8d1494695e"],["images/brooklyn.jpg","fa7b1d93d9e1f903bad8c82a9636d2a4"],["images/card-components/Facebook.svg","391cebc50a154e86ee92e85b13994bb4"],["images/card-components/Twitter.svg","93246c1f3588a987ec094df1cd66dfe4"],["images/card-components/banner-alt.jpg","dd26f2b3789d4f71015c2844bffcab3c"],["images/card-components/banner.jpg","01fe14bbc135d9a3dbce7a3fbf8e2431"],["images/card-components/bold-modern.jpg","bcfe394bfc3aa5dc93996f3f616fa518"],["images/card-components/card2.jpg","45e98383968d3def57bf614015c77d13"],["images/card-components/card3.jpg","d0d3af105cacf5e1492849bdbb5b7cd5"],["images/card-components/card4.jpg","bf3b99d5caa4be4de6970134f502ac30"],["images/card-components/card5.jpg","cc3fbb38289c7808cbb5909c2822b18d"],["images/card-components/card6.jpg","9f07826b54e3ac3c4a0ae9f8cac064e0"],["images/card-components/cart-animation.gif","4b90a72a3cb0a948a87c7eaa18a079e3"],["images/card-components/cover.jpg","ab58921ea3504273aea5beafb2a2326a"],["images/card-components/minted-hand.jpg","ec7341b28e075bbd17a6644a92347bea"],["images/card-components/pin.gif","516beb2c95a5924d76a5e09c09699760"],["images/card-components/sms-white.svg","99e2917f07d115319820e4d3d6ab4ea1"],["images/cisco/development.png","686d80107695735fa9080b0e76be607b"],["images/cisco/dropdown.png","9ff282ec759f499a3dd55bab6f010033"],["images/cisco/mate-ui.png","6dddc405a879b932640afb8b3adc4872"],["images/cisco/tooltip.png","94d01fa9bcdccf5d642a6fc79557dec8"],["images/img_bg_1.jpg","c001719061547924be222dea2d1fb187"],["images/loader.gif","96533f820a8aa4fa785533817cfbf2c7"],["images/logo.svg","7bd09874e0c0709cc16cb628399fd857"],["images/me.jpg","69118ba0247dd38f2ddb3d8826ee10d6"],["images/perforce/helix-cloud-import.jpg","41def2541150eaf014d934f6931111e2"],["images/perforce/prototype.jpg","c88317ee98f7df3d94954f6fbff9e7a7"],["images/perforce/sean.png","bee72ab57f36d2aa958600ac8ba4aaab"],["images/shape_brushes.svg","71c6f630d1735ee1873a1aba13497a55"],["images/shape_glyph.png","5d380477c82d7b1910b806724d40609b"],["images/shape_glyph.svg","002faf3d7bbe4609a70232c94d42ed31"],["images/shapes.ai","a9fdb88803a837a31e465775751b0728"],["images/touch/chrome-touch-icon-192x192.png","d4fe1c41edd7039f20ee2d78b41e2d8e"],["images/work-1.gif","3a41a888c126a39628e537f9ff39af60"],["images/work-2.jpg","274ac35fcf0d235530bba17e465d4f44"],["images/work-3.jpg","2100a1929d889bf51ed0bb3da447984e"],["images/work-4.jpg","39861a6b7a4662c1a0393b1477ceaa48"],["images/work-5.jpg","12639765febd717c026a16d7a4806265"],["images/work-6.jpg","e223e364999233f4262c85075725c48b"],["index-old.html","a1d10a8e9d3374e9f86001fe72774cfb"],["index.html","b5c80906a26382fa47844cb0fcf18e5d"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular-ui-router.min.js","111d8dc7b19b1df3dbbee8fab10a838c"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","7d395922fa7d13188712b341e28f0e80"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/controllers.js","822060a8807cff297cbea65c9ba59453"],["scripts/directives.js","4d128cc7404bde8dfbc054f6590168eb"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","c54da559a1ad8fccaca6ee201b571603"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","1899cbf09737a196efa6c3c4b63f998a"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","09d9d1be715d80f094c8854637e716f4"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});





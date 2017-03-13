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
var PrecacheConfig = [["images/app-templates/agency/1.jpg","9eaf3ef6542afea6d894f4d34f7537db"],["images/app-templates/agency/2.jpg","cf2f74d5da100e82650cd3b3ed6c13c5"],["images/app-templates/agency/3.jpg","fee353ed5fe9e4b0f56513db5e94be79"],["images/app-templates/commerce/1.jpg","a83159bbf4246012bb1fdcb542a8763e"],["images/app-templates/commerce/3.jpg","6f16e07dc9f4218f2a5f6f42ecfdf63b"],["images/app-templates/commerce/4.jpg","fbd8667a3b705f4afb6ac62972bda183"],["images/app-templates/commerce/5.jpg","4ff8d17bf1a4f75f63c3f76ca10709a1"],["images/app-templates/commerce/6.jpg","57e882e10ff38f45eaed09817ea514b8"],["images/app-templates/commerce/7.jpg","f61303f6384eac0d7a9358bdd4ce12e3"],["images/app-templates/commerce/7.png","682170b9f61efb9c5cea94f0bd444ef9"],["images/app-templates/commerce/8.jpg","e428db9cad02908d187e403dbb3e1843"],["images/app-templates/conference/1.jpg","637feabd648e221fe5b9e201e266793f"],["images/app-templates/conference/2.jpg","669803c9261c91d1184a1e21fceff4eb"],["images/app-templates/conference/3.jpg","b898d0de8ce8f0b1d90b505eadbd123d"],["images/app-templates/conference/4.jpg","820380e4df8542e5efda1543477a77ad"],["images/app-templates/conference/5.jpg","3132546cb302cf4897fec7aa9a0725f9"],["images/app-templates/conference/6.jpg","e0c728942ffe0a09778bb62a7c940bf1"],["images/app-templates/conference/7.jpg","581d0481c4f3e4c508ba3a9b6e9888f6"],["images/app-templates/conference/8.jpg","8706ec76877fae03fe5765299d5aa3d5"],["images/app-templates/conference2/1.jpg","d135e8770052b7f85087a1d4e6369f28"],["images/app-templates/housewarming/1.jpg","cbcf43ebf8925f843e5d9304f2c7a613"],["images/app-templates/housewarming/3.jpg","c6a4347cd5e795e3a873aec296d56fdc"],["images/banner_hero.svg","902ddd31d4754dd7460f5a82efadda36"],["images/card-components/Facebook.svg","de8c9ec0bf376d5c211a020e9104968d"],["images/card-components/Twitter.svg","1bffd1e6dd0c5593eec68fb2eb1c3c02"],["images/card-components/banner-alt.jpg","a0b0e2d89484d523aa5019ea0c60b4ee"],["images/card-components/banner.jpg","98ac1c23a8da296a24e3ab6f76448fb5"],["images/card-components/bold-modern.jpg","07c499a37c2f41cc7556ae7d9fb7190d"],["images/card-components/card2.jpg","2b4a8bd9424e1bdd995aab8cd877f9e0"],["images/card-components/card3.jpg","5c3b0b3ff5106e7bd9f56afc13382c87"],["images/card-components/card4.jpg","fec03aa68c9d5b593ae7894da16d41ca"],["images/card-components/card5.jpg","01afedbd2c2623ec2a28598299b50bde"],["images/card-components/card6.jpg","0caf5808ed08a74de139b126ec5182e1"],["images/card-components/cart-animation.gif","dcac71a2b60bd9ad57c4c7e580836d67"],["images/card-components/cover.jpg","74e596b3645712674c667f870b93326f"],["images/card-components/minted-hand.jpg","2ff6e8d08c87bd24744a7ee5500dc2bc"],["images/card-components/perspective-cards.jpg","3edbf48447363374277a51756130fd75"],["images/card-components/pin.gif","d7417a1fd7d25f35c5df100be2ce6783"],["images/card-components/sms-white.svg","18747518e14c22415c032ec5255a6dc8"],["images/cisco/development.png","4062cef84e4ee377389d654928c8664b"],["images/cisco/dropdown.png","067832720fa67519c9531e91ecaec082"],["images/cisco/mate-ui.png","ef6852e877aed3417da9ca1b9f5f13dc"],["images/cisco/tooltip.png","eb0ebc1b5e0ac313a246b629dd8e33e7"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","69257f2a6f8590a2fd2a3d6b71cc0746"],["images/me.jpg","50388a86ef51f77a69bcd5a4899bdb3a"],["images/perforce/helix-cloud-import.jpg","2824ed36e7c922d62ab86704d695273f"],["images/perforce/prototype.jpg","63496f3f56eda13caca63fa1550a17dd"],["images/perforce/sean.png","c5b99d6e4d9f8abea41b924e1a850d8b"],["images/protohack-givjoy/app-2.jpg","dbda7fdacbd881b9c0d4e4e0f273f2a0"],["images/protohack-givjoy/banner.jpg","fda555fcd3c7e5ee56ed9617d4224b46"],["images/protohack-givjoy/book.gif","870fc3e3fd15c057d2163562965c3ee4"],["images/protohack-givjoy/bottom.png","c270b9ae2fe0190268dba5e5ad769681"],["images/protohack-givjoy/desktop.jpg","3013862fa6e9f27d5b991993a68c3c9b"],["images/protohack-givjoy/middle.png","ecef736c30dbedb13dd94c544880576f"],["images/protohack-givjoy/sketches.jpg","d950092b533412f734efcdb0f0b7c3b2"],["images/protohack-givjoy/team.jpg","42ef46b0c7e98c403410947cfe539edd"],["images/protohack-givjoy/the-team.jpg","bfb564572ab4e8f40699bad8c4415c69"],["images/protohack-givjoy/top.png","dac52abf1629fa0fc9cb6142819df631"],["images/touch/chrome-touch-icon-192x192.png","71dccb0f19ada0e66918a1eafa9a1e2c"],["images/work-1.gif","3a41a888c126a39628e537f9ff39af60"],["images/work-2.jpg","791a69cef919f5091cb8ade99e833e7b"],["images/work-3.jpg","69570c464107179d6556e418801bbcc1"],["images/work-4.jpg","b51185d47f6f25db207ffd0a64911bdb"],["images/work-5.jpg","783fb24b0b89734aabe08573668c1017"],["images/work-6.jpg","2e25d536d252a83b6240e345fdc4b16e"],["index.html","63191d4d9a7a2d916bbb6db4bd959114"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular-ui-router.min.js","111d8dc7b19b1df3dbbee8fab10a838c"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","e4cb310557e134c6e79037bbdc18a97a"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/controllers.js","4698a74afb03f850aa21de2884ac7271"],["scripts/directives.js","4d128cc7404bde8dfbc054f6590168eb"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","db08ad8214ad63d198b25a64466fa221"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","1899cbf09737a196efa6c3c4b63f998a"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","f5fcb5713b04ff4c68c1f6936a2db19b"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
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





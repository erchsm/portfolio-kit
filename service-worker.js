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
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/app-templates/commerce/1.jpg","a5ddf29433fe915410c6dd3d83940b36"],["images/app-templates/commerce/2.jpg","87ed6fc8fc7f358017bcafb6e2c659ae"],["images/app-templates/commerce/3.jpg","6e070069158f24fcb917911cc6c3b618"],["images/app-templates/commerce/4.jpg","138d2c6fcbeabc67b740058e94ae6a73"],["images/app-templates/commerce/5.jpg","1d2cb7b5d868f048d67a83b3b10e3a14"],["images/app-templates/commerce/6.jpg","28f32ff7ed67892cc5b3c4dd562564e5"],["images/app-templates/commerce/7.jpg","eda0dfa22a32870c94027307b8b5e443"],["images/app-templates/commerce/7.png","7fc584efec76750dbdc55e7cd1c7b341"],["images/app-templates/commerce/8.jpg","af9d3f1407700973525380f2371d32fa"],["images/app-templates/conference/1.jpg","8c0fecb94c7592a07822b2f72ecdb377"],["images/app-templates/conference/2.jpg","ad0c90573ceae55724408dfc79d05a87"],["images/app-templates/conference/3.jpg","3d81baf20d35d4f288bca36795394508"],["images/app-templates/conference/4.jpg","dcec3dea5c187f40c4b9d7bb5b107f52"],["images/app-templates/conference/5.jpg","2b3a23ad6b8f2ad6f839becf4ad97ff3"],["images/app-templates/conference/6.jpg","d2862795dff76fbf9a491c47c1651088"],["images/app-templates/conference/7.jpg","e4ad94907eba72c0f53658cc73d1529c"],["images/app-templates/conference/8.jpg","e16b6111bb9d78a005343fef44242267"],["images/app-templates/housewarming/1.jpg","da1acd8536099a4de029828d58bf5127"],["images/app-templates/housewarming/3.jpg","faf0a6c4f05fa8b169e662d008f48d80"],["images/banner_hero.svg","470a4e15948215e26f0543ca513611d5"],["images/brooklyn.jpg","fa7b1d93d9e1f903bad8c82a9636d2a4"],["images/card-components/Facebook.svg","391cebc50a154e86ee92e85b13994bb4"],["images/card-components/Twitter.svg","93246c1f3588a987ec094df1cd66dfe4"],["images/card-components/banner-alt.jpg","dd26f2b3789d4f71015c2844bffcab3c"],["images/card-components/banner.jpg","01fe14bbc135d9a3dbce7a3fbf8e2431"],["images/card-components/bold-modern.jpg","bcfe394bfc3aa5dc93996f3f616fa518"],["images/card-components/card2.jpg","45e98383968d3def57bf614015c77d13"],["images/card-components/card3.jpg","d0d3af105cacf5e1492849bdbb5b7cd5"],["images/card-components/card4.jpg","bf3b99d5caa4be4de6970134f502ac30"],["images/card-components/card5.jpg","cc3fbb38289c7808cbb5909c2822b18d"],["images/card-components/card6.jpg","9f07826b54e3ac3c4a0ae9f8cac064e0"],["images/card-components/cover.jpg","ab58921ea3504273aea5beafb2a2326a"],["images/card-components/minted-hand.jpg","ec7341b28e075bbd17a6644a92347bea"],["images/card-components/pin.gif","516beb2c95a5924d76a5e09c09699760"],["images/card-components/sms-white.svg","99e2917f07d115319820e4d3d6ab4ea1"],["images/img_bg_1.jpg","c001719061547924be222dea2d1fb187"],["images/loader.gif","96533f820a8aa4fa785533817cfbf2c7"],["images/logo.svg","056d796d2c6a8ef7e7650098c778779c"],["images/me.jpg","69118ba0247dd38f2ddb3d8826ee10d6"],["images/person1.jpg","50a1289a4ef7e924376be3b31ed893f5"],["images/person2.jpg","5f2513d235a57f381c072690c399e6f1"],["images/person3.jpg","94609d7aae29b8ae26eb3a38b87ec4f4"],["images/roof.jpg","68a3fa74dd9c2b5334872fd4b65682dc"],["images/shape_brushes.svg","71c6f630d1735ee1873a1aba13497a55"],["images/shape_glyph.png","5d380477c82d7b1910b806724d40609b"],["images/shape_glyph.svg","002faf3d7bbe4609a70232c94d42ed31"],["images/shapes.ai","a9fdb88803a837a31e465775751b0728"],["images/touch/chrome-touch-icon-192x192.png","d8954b9990f2b6c3e6f69c6db898a322"],["images/work-1.gif","3a41a888c126a39628e537f9ff39af60"],["images/work-1.mkv","ebdf621affeb1e30af9c7c082024e2fc"],["images/work-2.jpg","274ac35fcf0d235530bba17e465d4f44"],["images/work-3.jpg","2100a1929d889bf51ed0bb3da447984e"],["images/work-4.jpg","39861a6b7a4662c1a0393b1477ceaa48"],["images/work-5.jpg","12639765febd717c026a16d7a4806265"],["images/work-6.jpg","e223e364999233f4262c85075725c48b"],["index-old.html","a1d10a8e9d3374e9f86001fe72774cfb"],["index.html","1b2177d9823c65d3b4fc6c3846d7fc46"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular-ui-router.min.js","111d8dc7b19b1df3dbbee8fab10a838c"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","7c10549c09f82a03cfffa385f078241d"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/directives.js","4d128cc7404bde8dfbc054f6590168eb"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","3fd52c91ce57f4612f5516b79da17fc6"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","6a87505bff86a8d6fed317f3cc04dbe8"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","2bc30f3258c3131a06da492c850e9ccf"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
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





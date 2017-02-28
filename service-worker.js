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
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/banner_hero.svg","a511683938803b222832d5b58a3c064e"],["images/brooklyn.jpg","3f7e20aff6049e445588c369e2ce1633"],["images/card-components/Facebook.svg","391cebc50a154e86ee92e85b13994bb4"],["images/card-components/Twitter.svg","93246c1f3588a987ec094df1cd66dfe4"],["images/card-components/banner-alt.jpg","dd26f2b3789d4f71015c2844bffcab3c"],["images/card-components/banner.jpg","01fe14bbc135d9a3dbce7a3fbf8e2431"],["images/card-components/bold-modern.jpg","bcfe394bfc3aa5dc93996f3f616fa518"],["images/card-components/card2.jpg","45e98383968d3def57bf614015c77d13"],["images/card-components/card3.jpg","d0d3af105cacf5e1492849bdbb5b7cd5"],["images/card-components/card4.jpg","bf3b99d5caa4be4de6970134f502ac30"],["images/card-components/card5.jpg","cc3fbb38289c7808cbb5909c2822b18d"],["images/card-components/card6.jpg","9f07826b54e3ac3c4a0ae9f8cac064e0"],["images/card-components/cover.jpg","ab58921ea3504273aea5beafb2a2326a"],["images/card-components/minted-hand.jpg","ec7341b28e075bbd17a6644a92347bea"],["images/card-components/pin.gif","516beb2c95a5924d76a5e09c09699760"],["images/card-components/sms-white.svg","99e2917f07d115319820e4d3d6ab4ea1"],["images/img_bg_1.jpg","6185ca226bdeb05d48230aea25b3a904"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","384a0cef9ccb68db120ac7dd39c9598e"],["images/me.jpg","9d14d42a9a11e7ab181b7bf69541bf10"],["images/person1.jpg","7a0ad3603b767bd383c6730018b3289f"],["images/person2.jpg","595746dc2f8d2e06e37a84fe6c2ecceb"],["images/person3.jpg","87db1d86047893bdd43c949fc55b7bc2"],["images/roof.jpg","ec939642047525a7553c57e928e4bbde"],["images/shape_brushes.svg","02f283937471c34a364716f6db123ca6"],["images/shape_glyph.png","30eea5c92d3160fdf58bd89dae90d6e7"],["images/shape_glyph.svg","06db26479956d0f5cf2e378c927e9506"],["images/shapes.ai","a9fdb88803a837a31e465775751b0728"],["images/touch/chrome-touch-icon-192x192.png","decfe452212fe691878fa4288dd23e16"],["images/work-1.mkv","ebdf621affeb1e30af9c7c082024e2fc"],["images/work-2.jpg","274ac35fcf0d235530bba17e465d4f44"],["images/work-3.jpg","2100a1929d889bf51ed0bb3da447984e"],["images/work-4.jpg","9d29ae0f0f2b38b40489341c5617f13e"],["images/work-5.jpg","12639765febd717c026a16d7a4806265"],["images/work-6.jpg","e223e364999233f4262c85075725c48b"],["index-old.html","a1d10a8e9d3374e9f86001fe72774cfb"],["index.html","94b21e3fefe60d09e494b87d8eca1fc2"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/angular-route.min.js","c44ece3cc8599b1171ea3106af0d2afd"],["scripts/angular.min.js","f4914c1fed1c60b90816b57b009c6162"],["scripts/app.js","345f35ce6a3d37bcfe8752077a90c939"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/directives.js","4d128cc7404bde8dfbc054f6590168eb"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.min.js","9922af8a1e1d83d26ac7398730995562"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","4936a5b3dfbb1ff2179129f73f0714cc"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","6a87505bff86a8d6fed317f3cc04dbe8"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","def2e58d1eb33fc569d6ce92bf6f5735"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
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





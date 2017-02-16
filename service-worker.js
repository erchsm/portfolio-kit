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
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/banner_hero.svg","bb4a694324a91934b43534dc27da8578"],["images/brooklyn.jpg","8e927c9064da03b00038375a037df8ef"],["images/card-components/Facebook.svg","391cebc50a154e86ee92e85b13994bb4"],["images/card-components/Twitter.svg","93246c1f3588a987ec094df1cd66dfe4"],["images/card-components/Weather.jpg","82375dc0f13c932dd1b5fd094ed42009"],["images/card-components/banner-alt.jpg","dd26f2b3789d4f71015c2844bffcab3c"],["images/card-components/banner.jpg","01fe14bbc135d9a3dbce7a3fbf8e2431"],["images/card-components/bold-modern.jpg","bcfe394bfc3aa5dc93996f3f616fa518"],["images/card-components/card-based.jpg","314777cffacfe3c583772478f5cfed96"],["images/card-components/config-custom-components.jpg","ec860978054f2ef656f2be298f73b0d4"],["images/card-components/current-location-icon.png","c3086df67264290eb28b10dc04d3765b"],["images/card-components/nearby-services-icons.jpg","268af2f4a36f985a55d59616010067bb"],["images/card-components/pharrel-williams.jpg","af60c67e309533d12f7b56de2bdae0dc"],["images/card-components/pin.gif","516beb2c95a5924d76a5e09c09699760"],["images/card-components/pin.mov","cc2bb33779c41446ca50f78bf8fb4228"],["images/card-components/sms-white.svg","99e2917f07d115319820e4d3d6ab4ea1"],["images/card-components/weather-icons.jpg","8f67e9a905a85a44be0c06932fdae1e5"],["images/card-components/weatherLayout2.jpg","f4eaea15d3d16dcdaefb2ca62eaef4ad"],["images/img_bg_1.jpg","6185ca226bdeb05d48230aea25b3a904"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","384a0cef9ccb68db120ac7dd39c9598e"],["images/me.jpg","cf04db65ae70c797b3aaeb068b6affe2"],["images/person1.jpg","7a0ad3603b767bd383c6730018b3289f"],["images/person2.jpg","595746dc2f8d2e06e37a84fe6c2ecceb"],["images/person3.jpg","87db1d86047893bdd43c949fc55b7bc2"],["images/roof.jpg","68a3fa74dd9c2b5334872fd4b65682dc"],["images/shape_brushes.svg","71c6f630d1735ee1873a1aba13497a55"],["images/shape_glyph.svg","002faf3d7bbe4609a70232c94d42ed31"],["images/shapes.ai","b512d8a5caa31758b304a06a4c1de634"],["images/touch/chrome-touch-icon-192x192.png","decfe452212fe691878fa4288dd23e16"],["images/work-1.mkv","ebdf621affeb1e30af9c7c082024e2fc"],["images/work-2.jpg","274ac35fcf0d235530bba17e465d4f44"],["images/work-3.jpg","2100a1929d889bf51ed0bb3da447984e"],["images/work-4.jpg","9d29ae0f0f2b38b40489341c5617f13e"],["images/work-5.jpg","12639765febd717c026a16d7a4806265"],["images/work-6.jpg","e223e364999233f4262c85075725c48b"],["index-old.html","a1d10a8e9d3374e9f86001fe72774cfb"],["index.html","0062fb4ec054d84b5dda175ecafd8c33"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/ei.js","345e163e075f2cb2d7f179a1e9a70058"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.js","72bacf0f339cff16cedc337d48f6287b"],["scripts/main.min.js","7c176ee8c03ee97ea061e1b14bb1627c"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","812ed4e24d3c20c11cef8c8fe8d13d38"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","6a87505bff86a8d6fed317f3cc04dbe8"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","bd70f289fcb78c6c0baa9e6e3945d567"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
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





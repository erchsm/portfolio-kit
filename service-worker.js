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
var PrecacheConfig = [["basic.html","e62dbac94d58b754a6fbbf84cf4644ef"],["images/banner_hero.png","a60779162fdf45fbc04abf12fbdd6f39"],["images/banner_hero.svg","4bbee64e2039f7c44e6992814cc08a92"],["images/card-components/Facebook.svg","de8c9ec0bf376d5c211a020e9104968d"],["images/card-components/Twitter.svg","1bffd1e6dd0c5593eec68fb2eb1c3c02"],["images/card-components/Weather.jpg","555f97b08d24e0ebaca160d82271843b"],["images/card-components/banner.jpg","98ac1c23a8da296a24e3ab6f76448fb5"],["images/card-components/bold-modern.jpg","07c499a37c2f41cc7556ae7d9fb7190d"],["images/card-components/card-based.jpg","83c3f557cb42e1793e0064a83d478459"],["images/card-components/config-custom-components.jpg","92c5142db2a70202260258d85c7bba66"],["images/card-components/current-location-icon.png","c7b5b0694cd06e3feec407bca35dc8ad"],["images/card-components/nearby-services-icons.jpg","327403f0512fb26e3664f830d90d8ddf"],["images/card-components/pharrel-williams.jpg","2e07bde689163a77d7461d95c1d4a1ee"],["images/card-components/pin.gif","d7417a1fd7d25f35c5df100be2ce6783"],["images/card-components/pin.mov","cc2bb33779c41446ca50f78bf8fb4228"],["images/card-components/sms-white.svg","18747518e14c22415c032ec5255a6dc8"],["images/card-components/weather-icons.jpg","0a47e094d30c8fe93567cba2861e47d2"],["images/card-components/weatherLayout2.jpg","67506982d4e09f827fd8fb1ba16d6754"],["images/img_bg_1.jpg","6185ca226bdeb05d48230aea25b3a904"],["images/loader.gif","60987038d7c8d6218833ee39ae4a75c7"],["images/logo.svg","39bde85a8c5d31950ba67511fbffef4c"],["images/person1.jpg","7a0ad3603b767bd383c6730018b3289f"],["images/person2.jpg","595746dc2f8d2e06e37a84fe6c2ecceb"],["images/person3.jpg","87db1d86047893bdd43c949fc55b7bc2"],["images/touch/chrome-touch-icon-192x192.png","971e620617c7bb08b942f17d1e437b35"],["images/work-1.jpg","66b20eb7da36e1d6044e7363eb40d614"],["images/work-2.jpg","a6737d11f4259907b7672d8d71371c52"],["images/work-3.jpg","5fb8503d17a97e02698ad904c9c02987"],["images/work-4.jpg","53939ef7e206c951b0af04c8125b3964"],["images/work-5.jpg","783fb24b0b89734aabe08573668c1017"],["images/work-6.jpg","2e25d536d252a83b6240e345fdc4b16e"],["index-old.html","a1d10a8e9d3374e9f86001fe72774cfb"],["index.html","e66a538803614af484bc6050232540ce"],["manifest.json","30d402e280a04e6fe03b32da34c70890"],["scripts/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["scripts/jquery.countTo.js","0f48c1b00e0bc4c33ed8aacfba285409"],["scripts/jquery.easing.1.3.js","2cb90c06cfc2084e0e11ca2b8a10f6c9"],["scripts/jquery.magnific-popup.min.js","d9267d6dda814fd767e1df7bfbe7eb57"],["scripts/jquery.min.js","4a356126b9573eb7bd1e9a7494737410"],["scripts/jquery.stellar.min.js","257c1e014bfdf359297cf2a80440a0ba"],["scripts/jquery.waypoints.min.js","28ef3dc306be44a30ec0d0ffe2bee109"],["scripts/magnific-popup-options.js","dff6a284a8ab2e228307c7b5f6d443dd"],["scripts/main.js","75486072aa16ee4fafd7767d4e92d0a2"],["scripts/main.min.js","449272e7dba3f3c47a00ff8d9160bb03"],["scripts/modernizr-2.6.2.min.js","c3076c3133684f1acfb50014a2aa0876"],["scripts/respond.min.js","fda355038387a38685fb8213c2c2374b"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["styles/animate.css","812ed4e24d3c20c11cef8c8fe8d13d38"],["styles/bootstrap.css","26f5b409de46ad4eebb7d6ed68ed1f91"],["styles/buttons.css","6a87505bff86a8d6fed317f3cc04dbe8"],["styles/colors.css","2b4a444cdc97725ad64f9e6011e0c63e"],["styles/fonts.css","14151dfbf57f752b1d9e869ec46082f0"],["styles/functions.css","d9baa7e28fb10329322952b92e013a87"],["styles/main.css","862456fdf8fa334cc0a2643785d3749c"],["styles/mixins.css","fbb899532a185dc8790651a17efe3102"],["styles/motion.css","c9fa6afc7d6f1935042e9eebcf0b4803"]];
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





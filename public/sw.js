if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>n(e,a),d={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0cc41a91caf7b13691adca8c636a4679"},{url:"/_next/static/ONSY6zIgU-iGC7ddVfC89/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/ONSY6zIgU-iGC7ddVfC89/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/135-f3fabe5b17471caa.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/183-bd73cffeff876851.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/23-9e3dd352681aa03f.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/556-d6657b610a294f13.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/723-723272defe9e3338.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/_not-found/page-42698eed4d7c509a.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/feed/%5Bfeed%5D/page-311d584b18c82ab2.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/layout-563c2784f45eb5f1.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/page-04ef9029cd9ad51c.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/profile/page-2eda6b335bec8bf0.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/app/subscriptions/page-9be687e7223ec695.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/fd9d1056-a28ca58defa4a65a.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/main-424ffa97e5983ff0.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/main-app-087d475613e7b669.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-597d84c99d6705a6.js",revision:"ONSY6zIgU-iGC7ddVfC89"},{url:"/_next/static/css/a93a70c940031d61.css",revision:"a93a70c940031d61"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/manifest.json",revision:"6f87de2000236c59ac5b10708fc0fc10"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

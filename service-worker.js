if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cf684d81"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"369881c43ea8b5940c94ff63ba3eacc0"},{url:"android-chrome-192x192.png",revision:"5c5a418d7c29275f4ae6ddfcae7a2090"},{url:"android-chrome-512x512.png",revision:"dbcaf7855b3bf777e1650fcfb2533b4f"},{url:"apple-touch-icon.png",revision:"328875080674ea578a41a970f9bf2d29"},{url:"assets/css/7441.styles.c199d3b5.css",revision:null},{url:"assets/css/styles.22bee4ec.css",revision:null},{url:"assets/js/1655.6c916e1c.js",revision:null},{url:"assets/js/3138.a07974f0.js",revision:null},{url:"assets/js/5205.2c5c216e.js",revision:null},{url:"assets/js/5415.bc9ced93.js",revision:null},{url:"assets/js/554.40014481.js",revision:null},{url:"assets/js/8054.7a488d50.js",revision:null},{url:"assets/js/app.89ce4ee0.js",revision:null},{url:"assets/js/runtime~app.e44299cb.js",revision:null},{url:"assets/js/v-08d798b2.8ed9025a.js",revision:null},{url:"assets/js/v-0921d17b.0ea3963a.js",revision:null},{url:"assets/js/v-0a96cd2d.0a9b5f02.js",revision:null},{url:"assets/js/v-0ce4876c.04dd82a0.js",revision:null},{url:"assets/js/v-100fe338.3b798498.js",revision:null},{url:"assets/js/v-10da9644.6c05b887.js",revision:null},{url:"assets/js/v-135e4503.283e355f.js",revision:null},{url:"assets/js/v-13d6e5f6.0049b83e.js",revision:null},{url:"assets/js/v-19eea59d.80a9a6e3.js",revision:null},{url:"assets/js/v-1cad7b10.7e17a0f3.js",revision:null},{url:"assets/js/v-1d73af95.f7cf57a2.js",revision:null},{url:"assets/js/v-22df3c61.e153ba40.js",revision:null},{url:"assets/js/v-24de54ee.7adb0375.js",revision:null},{url:"assets/js/v-2648ac1a.b45f51c8.js",revision:null},{url:"assets/js/v-275e2a2f.dbb6d5e1.js",revision:null},{url:"assets/js/v-29d78daa.2ec3bcb2.js",revision:null},{url:"assets/js/v-2b3a8924.a282cc40.js",revision:null},{url:"assets/js/v-2d0a870d.dab78be3.js",revision:null},{url:"assets/js/v-3706649a.989a7ff6.js",revision:null},{url:"assets/js/v-3bb27ea9.b7d0bcc0.js",revision:null},{url:"assets/js/v-3d21f522.7309b85f.js",revision:null},{url:"assets/js/v-3e6e95f0.5c06302e.js",revision:null},{url:"assets/js/v-466b2cb2.7ba8670c.js",revision:null},{url:"assets/js/v-52acee36.582e688d.js",revision:null},{url:"assets/js/v-578131e6.4fb7cdb2.js",revision:null},{url:"assets/js/v-5ccd7e2c.955a447e.js",revision:null},{url:"assets/js/v-5d526c16.57d63878.js",revision:null},{url:"assets/js/v-5fa3f531.9421cd71.js",revision:null},{url:"assets/js/v-6059229c.ed4bfdf7.js",revision:null},{url:"assets/js/v-60c55912.caa764ec.js",revision:null},{url:"assets/js/v-68763ece.6c4ed100.js",revision:null},{url:"assets/js/v-6cdf9fd9.7664dd13.js",revision:null},{url:"assets/js/v-6ce48554.5a2a0afe.js",revision:null},{url:"assets/js/v-6dc1ceac.42eb769d.js",revision:null},{url:"assets/js/v-6e61f61e.f40121c6.js",revision:null},{url:"assets/js/v-786147a6.341708cc.js",revision:null},{url:"assets/js/v-7919c9a2.ecfe48f8.js",revision:null},{url:"assets/js/v-7aa8fa6a.bee77b1c.js",revision:null},{url:"assets/js/v-8daa1a0e.9c60b6fb.js",revision:null},{url:"assets/js/v-945cf558.84bee077.js",revision:null},{url:"assets/js/v-9d397e8e.6dc56cac.js",revision:null},{url:"assets/js/v-a1a49808.e9d8e932.js",revision:null},{url:"assets/js/v-aa863f00.558cf915.js",revision:null},{url:"assets/js/v-aaf75552.56efff18.js",revision:null},{url:"assets/js/v-b147b508.b30532ef.js",revision:null},{url:"assets/js/v-bb011780.22a10a2e.js",revision:null},{url:"assets/js/v-ca9835b8.52fff5a1.js",revision:null},{url:"assets/js/v-cc6d4d78.cee9cfb4.js",revision:null},{url:"assets/js/v-d6ed953a.c638eac3.js",revision:null},{url:"assets/js/v-e45cc9ec.b562eaf2.js",revision:null},{url:"assets/js/v-e6412400.197904d3.js",revision:null},{url:"assets/js/v-fb0f0066.4eca0a62.js",revision:null},{url:"assets/js/v-fffb8e28.0be9d4e3.js",revision:null},{url:"contributing.html",revision:"e75cb90d8f3bde94e8dcaf011fa29ffa"},{url:"en/guide/index.html",revision:"98b7c6b930ea6d21860411240e766bec"},{url:"en/index.html",revision:"5ae4844d2ea98c111aca2e667631ca62"},{url:"favicon-16x16.png",revision:"85e898664445fdc5f71a2cca96278f52"},{url:"favicon-32x32.png",revision:"376de207c8dd3f4c2baa4445600d07cb"},{url:"guide/ado.html",revision:"fa36a996c9ee8259f0f1e3bbaa35ff8d"},{url:"guide/aop.html",revision:"cd7ade4756e69f17db428731845763b6"},{url:"guide/BaseEntity.html",revision:"cb348cbd2db8a0cd41cea0119df0e665"},{url:"guide/cascade-saving.html",revision:"1d4a9d2e7abb3c353e26eef514cb0976"},{url:"guide/code-first.html",revision:"f2d884ada31954d26e964a3b85437d76"},{url:"guide/config-entity-from-db-first.html",revision:"1ec1ef02b7115edda9aee8e348955800"},{url:"guide/custom-attribute.html",revision:"2f202c1fa09e91396b5fad3083d46e2f"},{url:"guide/db-context.html",revision:"b0610bdb3420db165e809f60ccc889c5"},{url:"guide/db-first.html",revision:"d1c48321fe3510103a2720be5c94910f"},{url:"guide/delegate.html",revision:"5f7f6b1fdce54190c07f4513cc6cd3a9"},{url:"guide/delete.html",revision:"12d08b420335a50976ed8c15fd42fe7b"},{url:"guide/entity-attribute.html",revision:"514694c71dd82ad8b2b09512bb0b939a"},{url:"guide/expression-function.html",revision:"487c669a1dc150b736a203f28bd4eec1"},{url:"guide/filters.html",revision:"e3b4bdd5132249cebf0e406f73afa90c"},{url:"guide/fluent-api.html",revision:"58030b60df477880ae1b5214641dfbcd"},{url:"guide/getting-started.html",revision:"ac3ea289a665cdfc8da15000cafe224e"},{url:"guide/index.html",revision:"170a62ef006bc6b6433e249b04a2451e"},{url:"guide/insert-or-update.html",revision:"9530b58c877c342e726cc45753a2860b"},{url:"guide/insert.html",revision:"c0aef9cd94847b7eedd1fe382c2c2c40"},{url:"guide/install.html",revision:"aa99642db9ac0ba6e54c481fc0cf61d6"},{url:"guide/linq-to-sql.html",revision:"ef513d02517b69282a034b74028925e2"},{url:"guide/more.html",revision:"cc6fea80cd8ab99c6c1a6e5b53f32976"},{url:"guide/multi-tenancy.html",revision:"23e9a7fddaffa804aff79b5089b73d7b"},{url:"guide/navigate-attribute.html",revision:"c19627aa8801eaab6cfcc1c606c316b8"},{url:"guide/paging.html",revision:"fec1bf6adf0f7595660f7d7d57d06333"},{url:"guide/performance.html",revision:"bdfe72cf749a2e8f978dbb84709258fe"},{url:"guide/read-write-splitting.html",revision:"52e6bec1f8dc9c9ab33d3d8c15d30d78"},{url:"guide/repository.html",revision:"175c64cdb7e34c334c29a1bb92e2a7d9"},{url:"guide/select-as-tree.html",revision:"c4c4547bfb4c3931e83da41c51168e26"},{url:"guide/select-group-by.html",revision:"e2b968cbaf6e1a4ad692dc1dffbe7af0"},{url:"guide/select-include.html",revision:"fcae00c7389106c746e21e8c24c04f76"},{url:"guide/select-lazy-loading.html",revision:"fdac8ad303573c9e171e2157d4dbafb5"},{url:"guide/select-multi-table.html",revision:"09817f3a29e3079683a696b92f58617e"},{url:"guide/select-return-data.html",revision:"b1830e95c39653be35c54ad5ef735e29"},{url:"guide/select-single-table.html",revision:"95f6c25c8bca5a159f1789286a589ba2"},{url:"guide/select.html",revision:"9d3c9ff88512e449e864afa75c5bd4f9"},{url:"guide/sharding.html",revision:"41f4c73a78b5e20809b2ad6a1770b258"},{url:"guide/transaction.html",revision:"a1451d13351722f4a4e5f296c74724a3"},{url:"guide/type-mapping.html",revision:"d7fb9190ba2937a8af6bfaa27b4eefcc"},{url:"guide/unit-of-work.html",revision:"4cd9337311a6120a2448a8627ca83b16"},{url:"guide/update.html",revision:"469a12e0a075d06d5e3140cab487ac63"},{url:"index.html",revision:"499b9483cd47daec59d8373c9a7ac752"},{url:"logo.png",revision:"994ed032d78dce0ef491b36fa4dc95d8"},{url:"mstile-150x150.png",revision:"905e91d3fe4a006d32a842f1e4473456"},{url:"reference/api.html",revision:"bbe54deb614d71cad15a6585c59dd3a9"},{url:"reference/awesome-freesql.html",revision:"79f5f43da2dfc97fee27b65599798676"},{url:"reference/change-log.html",revision:"5961b451ac4e76b27f268fcf76d745c6"},{url:"reference/donation.html",revision:"8bcfaa6277db2d4206677a1ce15c8032"},{url:"reference/faq.html",revision:"f219dbe8c2dba1815b709f01b27ee7ca"},{url:"reference/vs-dapper.html",revision:"0c2e2ccaf929ca9cbedc55d182c3758f"},{url:"reference/vs-entity-framework.html",revision:"2d45663f49e077571cd425e8fc43a3df"},{url:"wechat_qrcode.jpg",revision:"44d32d516f6ed4cfe9aa55eac560ea74"}],{})}));

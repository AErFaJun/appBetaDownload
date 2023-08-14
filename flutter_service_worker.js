'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "69596fdfc5c4808c65f8dbb845783662",
"index.html": "935bf60e34255a83ad57eed127066d5f",
"/": "935bf60e34255a83ad57eed127066d5f",
"main.dart.js": "a4c7b10eaca8d55de19bbf3bcbf33fc5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af0a5b5645b6b2f8a1d4b3d7f179f09e",
"assets/AssetManifest.json": "268d661381ad7fc53a24b1e2e81be83d",
"assets/NOTICES": "4c6c8fda654995ad298697173139ffc0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/video/vip_video.mp4": "15b8141140c1a652841c6d53ceeead3e",
"assets/assets/images/3.0x/home/bottom_navi_works_s.png": "7b094e857af2496417886a18b67ff35b",
"assets/assets/images/3.0x/home/fan_kui.png": "0b1e012fea4f6f38e24128711b1f980e",
"assets/assets/images/3.0x/home/icon_detail_delete.png": "2b13530e324ee8b81f850ff09858d3ef",
"assets/assets/images/3.0x/home/download.png": "9cac5d5ab738507e087d1b167df7bd13",
"assets/assets/images/3.0x/home/icon_detail_bg.png": "17edd2d8556728cfad4cbd2f0b9be66d",
"assets/assets/images/3.0x/home/icon_reference_add_large.png": "8e1e692beeaec0ea66192e3aba8f9f1b",
"assets/assets/images/3.0x/home/bottom_navi_my_n.png": "58db43e1a1069902e0cd135a77ac4929",
"assets/assets/images/3.0x/home/bottom_navi_bg.png": "2016760bae9be1b3da60a62017ea77d4",
"assets/assets/images/3.0x/home/home_artist_s.png": "7330ccd449f75b5f904e621c890a0745",
"assets/assets/images/3.0x/home/icon_title_size.png": "2fb8ae8b38bb8d0c3513637619d721aa",
"assets/assets/images/3.0x/home/cai_selected.png": "9f38f11093fcb4c29ea6bcd683220431",
"assets/assets/images/3.0x/home/bottom_navi_home_s.png": "ad2cc14604a62733f33ed6af2dd8e723",
"assets/assets/images/3.0x/home/icon_edit_32.png": "f75304005399bddd217f91fde6622f8f",
"assets/assets/images/3.0x/home/home_vip_icon.png": "540f7ce3c8630e7fc7c908913a67584e",
"assets/assets/images/3.0x/home/icon_home_detail_bg.png": "37f162f01b85174fe7f56bd4910a9fc8",
"assets/assets/images/3.0x/home/bottom_navi_plus.png": "4d1642c07e25a1e0d0b938062da4cd6a",
"assets/assets/images/3.0x/home/icon_reference_add.png": "92b7a2c857b84d8abebb2c152053934c",
"assets/assets/images/3.0x/home/icon_public_back_black.png": "8fc547011f32d475dbf54f3b1ad8cacc",
"assets/assets/images/3.0x/home/icon_detail_back.png": "c144163f05877fd41f57fd0faf501b54",
"assets/assets/images/3.0x/home/icon_title_artist.png": "3cd1b3c4fe38b1b21c45c95ace1a67db",
"assets/assets/images/3.0x/home/icon_edit_23.png": "bc6b5664f04ccb8d73432e8d58c5d696",
"assets/assets/images/3.0x/home/bottom_navi_paint_n.png": "6de94e1f4242c34a6cfeeeb3b9883b72",
"assets/assets/images/3.0x/home/icon_home_detail_close.png": "b73d922ebdb97e2d5d6cea06be55db3d",
"assets/assets/images/3.0x/home/bottom_navi_home_n.png": "d15180beaf37ad39592d85fa20014fb4",
"assets/assets/images/3.0x/home/icon_edit_11.png": "b76611aec51425bf8f1f94cfa4bf7421",
"assets/assets/images/3.0x/home/home_bg.png": "d3228cf2ebb9922c539fc034edbf833a",
"assets/assets/images/3.0x/home/home_brush.png": "85a0c81979c27dbd9e34c3bc38c55821",
"assets/assets/images/3.0x/home/zan_selected.png": "6841295dabccc9bdb4d37c8a1b543ec0",
"assets/assets/images/3.0x/home/bottom_navi_paint_s.png": "640f355a33f8ed6a560a52209bddbf21",
"assets/assets/images/3.0x/home/home_art_s.png": "a5e382c473970d1e3dfaed204e69e9ad",
"assets/assets/images/3.0x/home/cai_normal.png": "2b962c218b5a9d2a25d46365607f7607",
"assets/assets/images/3.0x/home/home_logo.png": "11046caad227dba86ceb27fb1de920ed",
"assets/assets/images/3.0x/home/icon_title_modifier.png": "98f9ca8071c7f862025fb8a049994e97",
"assets/assets/images/3.0x/home/icon_edit_11_select.png": "089776fdb2bb0fa61b45341d50fed3f2",
"assets/assets/images/3.0x/home/bottom_navi_works_n.png": "8c5bb6fed0552f3a7cdbfc86b122f015",
"assets/assets/images/3.0x/home/home_enroll_vip.png": "1f16fc61ba38d557145c66118a2c778e",
"assets/assets/images/3.0x/home/icon_public_back.png": "38fb1cdfd3ccde2894b017d8637cf581",
"assets/assets/images/3.0x/home/discovery_bg@3x.png": "3856c92c6cb54a6de6a26e6488358f78",
"assets/assets/images/3.0x/home/icon_edit_23_select.png": "e7ea28fab92f9a5684cc4242f61cf865",
"assets/assets/images/3.0x/home/bottom_navi_my_s.png": "df8e494dfb0f17d85c67aabad6208153",
"assets/assets/images/3.0x/home/icon_title_style.png": "62ef3c0855c5c02a0a44655a44059c97",
"assets/assets/images/3.0x/home/zan_normal.png": "8eef9a3e2b70a2046b31f9376fb4da7b",
"assets/assets/images/3.0x/home/home_add.png": "f2626860bde194718b24215525084f3d",
"assets/assets/images/3.0x/home/home_right_arrow_cyan.png": "981453682bd6151a8032b4716dbc32f0",
"assets/assets/images/3.0x/home/icon_edit_32_select.png": "898400b808e08792121ce368fce46afb",
"assets/assets/images/3.0x/picture/9_16_sel.png": "5ee991037fa1bb2f43de0fc0575f8cb3",
"assets/assets/images/3.0x/picture/adjunct_word_icon.png": "4f4a35e0dc0d208897762ab215723aa5",
"assets/assets/images/3.0x/picture/picture_bg.png": "7c5324699157008beea2c7f1e4f513b7",
"assets/assets/images/3.0x/picture/doodle_tool_paint.png": "81a30ce07cdf36c02f0d4d59abd47c61",
"assets/assets/images/3.0x/picture/9_16.png": "8a834a57f63ef0fd9c236fe61e152917",
"assets/assets/images/3.0x/picture/image_definition_hd.png": "332412888d95a8d5f164ac690adfb491",
"assets/assets/images/3.0x/picture/doodle_edit.png": "4ea5889b89b2acbd5871ab8c27c829cc",
"assets/assets/images/3.0x/picture/transparency_bg.png": "97e16165b4bedda174cf87d5903da857",
"assets/assets/images/3.0x/picture/image_style_title_bg.png": "70c36605e976fe54a5fd2d80f7fd4443",
"assets/assets/images/3.0x/picture/1_1_sel.png": "126eec601835948f7868c5e938c3e5a1",
"assets/assets/images/3.0x/picture/doodle_tool_eraser_sel.png": "3f96019af0b7c8786258152085aa1e64",
"assets/assets/images/3.0x/picture/picture_operation_ai.png": "e0555ef3588d2705e4c59564c4c41c28",
"assets/assets/images/3.0x/picture/picture_vip.png": "c7cc80b85fcde5b9a2fd70ad6a046468",
"assets/assets/images/3.0x/picture/3_4_sel.png": "26a59fc071d3b094ce887d07bf54640a",
"assets/assets/images/3.0x/picture/picture_operation_fix.png": "a7330aad398dcb38869163f02389f9e9",
"assets/assets/images/3.0x/picture/picture_operation_puzzle.png": "cc6ecb922e75fd68a28f6b993567282f",
"assets/assets/images/3.0x/picture/image_definition_sd_sel.png": "4167a869b9abcad0da67f4aab2a075bb",
"assets/assets/images/3.0x/picture/paint_image_close.png": "dcece9b46b47bfdb17db7c950d2af6b8",
"assets/assets/images/3.0x/picture/help_close_icon.png": "ae414981ab6729dece0408d38247d3a2",
"assets/assets/images/3.0x/picture/reference_drawing_iocn.png": "77c1ee2aac5f63e985c3cee00a048eea",
"assets/assets/images/3.0x/picture/1_2_sel.png": "3999526eba648e3ede204be227364430",
"assets/assets/images/3.0x/picture/picture_operation_mattring.png": "91f90817c1237cc9ee0a8a309a1a3044",
"assets/assets/images/3.0x/picture/doodle_tool_delete.png": "a202faeea4df7016b85a724b0d295693",
"assets/assets/images/3.0x/picture/picture_operation_icon_ai.png": "33fe8ac1940a3a8195eeb14f5a189d6f",
"assets/assets/images/3.0x/picture/picture_expand.png": "0f28494019dddcc5d3abd2fc883e2ed3",
"assets/assets/images/3.0x/picture/1_2.png": "3b6c7bbbc18b7e68a9519a750d7f27b5",
"assets/assets/images/3.0x/picture/channel_selected_icon.png": "9a36766e5d7bd68c8d79178bb744ac56",
"assets/assets/images/3.0x/picture/doodle_tool_paint_sel.png": "406f0be3cbf546b2b85002501af7888a",
"assets/assets/images/3.0x/picture/3_2.png": "0a34635faaad723c0dce4ded52755224",
"assets/assets/images/3.0x/picture/1_1.png": "245654034805f7745bbc8ede8e0ffb9c",
"assets/assets/images/3.0x/picture/2_3_sel.png": "142b406a7a7aedcb93c4761f4df866b2",
"assets/assets/images/3.0x/picture/patting_search.png": "cfa8040db821a0a050174557e01f1a57",
"assets/assets/images/3.0x/picture/doodle_import.png": "fe07cbb6262ace2b25ff9cd21ef20239",
"assets/assets/images/3.0x/picture/picture_operation_filter.png": "7cc844e1e206e2642b5c478c0d644c19",
"assets/assets/images/3.0x/picture/4_3_sel.png": "e75a3ae1495ad79a677e2d313f65dbe3",
"assets/assets/images/3.0x/picture/3_4.png": "7691abdce9466e1668c781af5dde71e9",
"assets/assets/images/3.0x/picture/doodle_tool_eraser.png": "1a73a37d90792984ca7ba8ce8f036f3d",
"assets/assets/images/3.0x/picture/doodle_tool_back.png": "833d6910631f9248ba7e082681027df3",
"assets/assets/images/3.0x/picture/image_definition_hd_sel.png": "6fa6c2dc6fae929d27d930d7470e8d31",
"assets/assets/images/3.0x/picture/picture_operation_ai_cover.png": "e8596d4b5c872939a4b8fefb462517a0",
"assets/assets/images/3.0x/picture/16_9.png": "ef6e48c4aecdf5fadcf0cef1b33007db",
"assets/assets/images/3.0x/picture/image_definition_sd.png": "71aed417821649430e1159899d8e1626",
"assets/assets/images/3.0x/picture/close_btn_icon.png": "cdda123b76aa27a75cf928872eb23b17",
"assets/assets/images/3.0x/picture/2_3.png": "a0fb811df7bea7610d6bce718e1cbab9",
"assets/assets/images/3.0x/picture/2_1.png": "c7e25a5d3f10894973f4872a6d183199",
"assets/assets/images/3.0x/picture/picture_search.png": "388ac8a5bdd89e8a6c57d15cecd40192",
"assets/assets/images/3.0x/picture/need_vip_icon.png": "b32b5414528b0119d732b9c42c7c4231",
"assets/assets/images/3.0x/picture/3_2_sel.png": "7a8236dc1a50beb37c5f06de64d5e51e",
"assets/assets/images/3.0x/picture/4_3.png": "48207a5a9406c2fb7cffcc9669127cc2",
"assets/assets/images/3.0x/picture/16_9_sel.png": "2a49a1bec5eddc7f5ff067f4bb72e061",
"assets/assets/images/3.0x/picture/paint_image_show.png": "2eee06bc7016161966e64fff76696c82",
"assets/assets/images/3.0x/picture/doodle_tool_undo.png": "6d54d9a14d400bbc1aa2d02d108de553",
"assets/assets/images/3.0x/picture/help_button_bg.png": "aa1ea077465ce7b42892600bbfae8f82",
"assets/assets/images/3.0x/picture/channel_deselected_icon.png": "975cea6708440cdabff74bee311800fe",
"assets/assets/images/3.0x/picture/2_1_sel.png": "379f5e05f67a190ed3f7c0c495ed507b",
"assets/assets/images/3.0x/picture/picture_operation_right_arrow.png": "b86d682a40f530f37835391b7127dcb5",
"assets/assets/images/3.0x/user/login_icon_wechat.png": "965bc44c7a0016a97f6ddeb8f3e591b7",
"assets/assets/images/3.0x/user/login_icon_apple.png": "92400a7a95fed65bd507c591a8a10732",
"assets/assets/images/3.0x/user/function_yvip_icon.png": "b222ac90c0be16f05b0f25f83b86d5f3",
"assets/assets/images/3.0x/user/login_icon_quick.png": "3d8800c7428ec8068003099c6d0abe55",
"assets/assets/images/3.0x/user/user_vip_tips_bg.png": "b04fa626eeb8eb7bfb8e01ee9b407e36",
"assets/assets/images/3.0x/user/vp_page_buy_bg.png": "e614685895d7fb55dee78efe75c1474d",
"assets/assets/images/3.0x/user/service_avatar.png": "59850141030a1efc1f8accad5e37c746",
"assets/assets/images/3.0x/user/vip_page_users.png": "358bb20c1427a09d6a4511858cf06a82",
"assets/assets/images/3.0x/user/login_icon_phone.png": "0a508371c2fad9eaf0bfc0a5fb4f9145",
"assets/assets/images/3.0x/user/login_icon_qq.png": "f0837b8eba43764067add1134d11355b",
"assets/assets/images/3.0x/user/vip_page_vip_tips_bg.png": "cce7f8ec035ae7329542bc2927a5719b",
"assets/assets/images/3.0x/user/login_icon_verity.png": "acf7968a45d92c665ddb62c076910bee",
"assets/assets/images/3.0x/user/function_vip_icon.png": "8d59d217a53bcf3be0d5acabc7fb53de",
"assets/assets/images/3.0x/user/user_ai_img.png": "2a2069d759016f5710c1f3cb529f830c",
"assets/assets/images/3.0x/user/user_bg.png": "71a343ffeab6ff28fd9425e8aab88125",
"assets/assets/images/3.0x/user/login_icon_agree_select.png": "85aa75fee8a7af150d60f4b8758ca0a6",
"assets/assets/images/3.0x/user/choosed_icon.png": "37a19fcd23bc404197ac07038800a193",
"assets/assets/images/3.0x/user/function_svip_icon.png": "9e27720b16283b46caa39d242ada67a0",
"assets/assets/images/3.0x/user/login_icon_close.png": "baa4092b3d816b8f1b75966dc51d898a",
"assets/assets/images/3.0x/user/no_works.png": "9bb6c8f69716118211d28d22f5480f72",
"assets/assets/images/3.0x/user/vip_page_privilege_noads.png": "140e4b33afc9504720e2a211eb1a3060",
"assets/assets/images/3.0x/user/vip_page_privilege_cloud.png": "fd935029da473bae1f4c1c1ca9b7c1a4",
"assets/assets/images/3.0x/user/login_icon_agree_deselect.png": "bf91eb0ac9d6e65153f456f5f03ebed0",
"assets/assets/images/3.0x/user/work_recommend.png": "221c93c1fc274aa8303192de1cfa64be",
"assets/assets/images/3.0x/user/vip_privilege_bottom_icon.png": "1297602bea991411940c91f74ad461cc",
"assets/assets/images/3.0x/user/user_isvip_tips_bg.png": "f051f9aef9e7a148acef43d1f1d3db68",
"assets/assets/images/3.0x/user/vip_page_privilege_fast.png": "fa1a267a1646738705721543e6a32421",
"assets/assets/images/3.0x/user/vip_page_privilege_style.png": "14da02ccf9c5864ec9eee454404d1620",
"assets/assets/images/3.0x/user/work_choiceness.png": "6a80b0325159adfe9097baa22f260720",
"assets/assets/images/3.0x/user/vip_page_goods_bg.png": "089656c81eede92fb4e960b762c51f6d",
"assets/assets/images/3.0x/user/app_avatar.png": "d3c4d96acad97307cc87b1184b5d960b",
"assets/assets/images/3.0x/user/vip_alert_image.png": "c34113256ec1b23f10a7b674358b0657",
"assets/assets/images/3.0x/common/show_error_icon.png": "559b14e9acf5188c28a286037e56848d",
"assets/assets/images/3.0x/common/common_button_bg.png": "165172ebd37f02a08988373fb0fb723d",
"assets/assets/images/3.0x/work/work_loading.gif": "7a41b7a5b4d670f9f66e11c11fa592af",
"assets/assets/images/3.0x/work/work_home.png": "259cc510ee0c68c297bf3273ee375fa0",
"assets/assets/images/3.0x/work/work_loading.png": "34e2e51551696cc58d37ab2186f3eec5",
"assets/assets/images/3.0x/android/pay_way_normal.png": "884722a1b7bc24837b0dd36bcadf226f",
"assets/assets/images/3.0x/android/pay_way_alipay.png": "d1935972e6215bf0a900d5749d112c12",
"assets/assets/images/3.0x/android/pay_way_wechat.png": "54e3b3c174596f0e0d3741d1e9d3918d",
"assets/assets/images/3.0x/android/pay_way_choosed.png": "f2bebde8339785e4b0a2c2e710ea26af",
"assets/assets/gif/gif_loading.gif": "ae0038c03d6b7f01bc8f8827c7ba217f",
"assets/assets/gif/gif_refresh_loading.gif": "1770aebc15f77efb563a4a20d07410e7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

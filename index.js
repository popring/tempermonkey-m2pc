// ==UserScript==
// @name         移动端链接跳电脑端
// @description  自动将移动端链接跳转为电脑端访问的网页
// @namespace    https://github.com/popring/tampermonkey-m2pc
// @version      2024-09-28
// @author       popring
// @match        https://m.huxiu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=huxiu.com
// @grant        none
// @license MIT
// @downloadURL https://update.greasyfork.org/scripts/510561/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%93%BE%E6%8E%A5%E8%B7%B3%E7%94%B5%E8%84%91%E7%AB%AF.user.js
// @updateURL https://update.greasyfork.org/scripts/510561/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%93%BE%E6%8E%A5%E8%B7%B3%E7%94%B5%E8%84%91%E7%AB%AF.meta.js
// ==/UserScript==

(function () {
  'use strict';
  const map = {
    'm.huxiu.com': 'www.huxiu.com',
  };
  const host = location.host;
  for (const [key, value] of Object.entries(map)) {
    if (host === key) {
      location.host = value;
      return;
    }
  }
})();

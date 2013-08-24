// ==UserScript==
// @match          http://lnk.co/*
// @match          http://rdlnk.co/*
// @exclude        http://lnk.co/
// ==/UserScript==

(function () {
  'use strict';

  $register({
    rule: {
      host: /^(rd?)lnk\.co$/,
    },
    run: function () {
      $removeNodes('iframe');

      var o = $_('#urlholder');
      if (o) {
        $redirect(o.value);
        return;
      }

      o = $_('#skipBtn');
      if (o) {
        o = o.querySelector('a');
        $redirect(o.href);
        return;
      }

      o = document.title.replace(/(LNK.co|Linkbee)\s*:\s*/, '');
      $redirect(o);
    },
  });

})();

// vim: ts=2 sts=2 sw=2 et
// sublime: tab_size 2; translate_tabs_to_spaces true; detect_indentation false; use_tab_stops true;
// kate: space-indent on; indent-width 2;

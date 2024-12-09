// ==UserScript==
// @name         ソレナリ用文字数表示スクリプト
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  文字数表示をします。
// @author       mochihiyo_fox
// @match        https://ermk.xsrv.jp/talk.php?TID=*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    var textarea = $('#postTalk');
    textarea.after('<span id="addon_char_count" style="margin-left: 8px; font-weight: bold;"></span>');
    var counter = $('#addon_char_count');

    textarea.on('input', function() {
        var count = textarea.val().length;
        counter.text(count + '/200 文字');
        if (count < 190) {
            counter.css({color: 'black', marginLeft: '8px', fontWeight: 'bold', userSelect: 'none'});
        } else {
            counter.css({color: 'red', marginLeft: '8px', fontWeight: 'bold', userSelect: 'none'});
        }
    });
})();

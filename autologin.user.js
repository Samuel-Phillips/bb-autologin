// ==UserScript==
// @description This script will automatically press the login button
// @match https://mymasonportal.gmu.edu/webapps/*
// @name bb-autologin
// @namespace https://www.samuelphillips.net/gmscripts
// @run-at document-idle
// @version 0.0.1
// ==/UserScript==

var form = document.querySelector('form[target=_top][name=login]' +
        '[action=/webapps/login/]');
if (form) form.submit();

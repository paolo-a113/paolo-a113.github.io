!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="https://cdn2.editmysite.com/js/",e.p="https://"+window.ASSETS_BASE+"/js/"||e.p,e(0)}({0:function(t,e,n){t.exports=n(621)},621:function(t,e){!function(t,e){function n(e,n){var l=t("#weebly-footer-signup-container-v3");if(l.length){if(o(e,n),d.element=l,d.iframe=t("#weebly-footer-signup-iframe"),!i())return void d.element.remove();r(),s(),p(),t(window).on({resize:a(p,500),scroll:a(p,500)})}}function o(e,n){var o='<link href="//'+e+"/css/free-footer-v3.css?buildtime="+n+'" rel="stylesheet">';t(o).appendTo("head")}function i(){var e=t("body"),n=!!document.getElementById("kb-container"),o=e.hasClass("splash-page");return!(n||o)}function r(){var e=t("body");e.css({minHeight:"100%",position:"relative"}),document.body.style.setProperty("height","auto","important"),e.append(d.element)}function s(){var e=t("#weebly-footer-signup-container-v3"),n=500;t(".signup-container-header").hover(a(function(){if(!l()){var t="288px";e.animate({height:t},n)}},2*n,!0),a(function(){if(!l()){var t="62px";e.animate({height:t},n)}},n,!1))}function a(t,e,n){var o;return function(){var i=this,r=arguments,s=function(){o=null,n||t.apply(i,r)},a=n&&!o;clearTimeout(o),o=setTimeout(s,e),a&&t.apply(i,r)}}function p(){var e=d.element[0];y(e),m();var n=t("#wsite-mini-cart");n.length&&window.innerHeight-n[0].getBoundingClientRect().bottom<=0&&e.style.setProperty("display","none","important");var o=window.location.pathname.indexOf("/store/checkout/")!==-1;o&&c()&&e.style.setProperty("display","none","important"),window.container=d}function l(){var t=window.matchMedia("(max-width: 480px)");return!t||t.matches}function c(){var t=window.matchMedia("(max-width: 800px)");return!t||t.matches}function y(e){var n=d.element.find("*");n.push(e),n.each(function(){var e=t(this),n=e[0],o="block";e.hasClass("weebly-icon")&&(o="inline-block"),n.style.setProperty("visibility","visible","important"),n.style.setProperty("display",o,"important")}),e.style.setProperty("height",d.getHeight()+"px","important"),e.style.setProperty("position","absolute","important"),e.style.setProperty("bottom","0","important"),e.style.setProperty("left","0","important"),e.style.setProperty("right","0","important"),e.style.setProperty("position","fixed","important"),e.style.setProperty("width","290px","important"),e.style.setProperty("left","10px","important"),e.style.setProperty("z-index","20","important"),l()&&(e.style.setProperty("width","100%","important"),e.style.setProperty("height","45px","important"),e.style.setProperty("left","0px","important"),e.style.setProperty("z-index","5","important"),t("img.footer-ab-published-toast-image").css("display","none","important"),t("span.footer-ab-published-toast-text").css("display","none","important"));var o=t("body"),i=o.css("paddingBottom"),r=d.element.outerHeight(!0)+"px";i!==r&&document.body.style.setProperty("padding-bottom",r,"important")}function m(){var e=t(".header"),n=t("#weebly-footer-signup-container-v3"),o=0,i=setInterval(function(){o++,e.hasClass("stuck")?(e.css("padding","10px 40px 60px"),clearInterval(i)):l()?n.css("left","0px"):n.css("left","10px"),5===o&&clearInterval(i)},200)}var d={height:62,mobileHeight:124,getHeight:function(){return l()?d.mobileHeight:d.height}};e.footer={setupContainer:n}}(window.jQuery,window.Weebly)}});
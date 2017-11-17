(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-7').attr('src', 'images/user-shape-23.png');
$('.js-8').attr('src', 'images/envelope-23.png');
$('.js-9').attr('src', 'images/padlock-22.png');
$('.js-10').attr('src', 'images/padlock-22.png');
$('.js-11').attr('src', 'images/user-shape-22.png');
$('.js-12').attr('src', 'images/padlock-22.png');}else{$('.js-7').attr('src', (dpi>1) ? 'images/user-shape-36.png' : 'images/user-shape-18.png');
$('.js-8').attr('src', (dpi>1) ? 'images/envelope-36.png' : 'images/envelope-18.png');
$('.js-9').attr('src', (dpi>1) ? 'images/padlock-36.png' : 'images/padlock-18.png');
$('.js-10').attr('src', (dpi>1) ? 'images/padlock-36.png' : 'images/padlock-18.png');
$('.js-11').attr('src', (dpi>1) ? 'images/user-shape-36.png' : 'images/user-shape-18.png');
$('.js-12').attr('src', (dpi>1) ? 'images/padlock-36.png' : 'images/padlock-18.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();

});
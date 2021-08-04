(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){dpi=window.devicePixelRatio;var a='data-src';var e=document.querySelector('.js2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bb4c3ecf9e2e4450-1580.jpg?da5a9ef4ba8a07b7f58b94a43ce8301b4f33615a':'images/bb4c3ecf9e2e4450-790.jpg?9651aa3a54f2dc8d77280cdb8234ee9d1d0206fd');
var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bb4b3bc8962941445e-1580.jpg?725826146a0e09455c488e3d0468e89e9efd56d3':'images/bb4b3bc8962941445e-790.jpg?74116da06481557f8cf5cbffa0ae48e94fa61ea3');
var a='data-src';var e=document.querySelector('.js6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/-g3rw6y02d0-1580.jpg?9ef7c63e52c745223f11c77039eae4fbdc16f594':'images/-g3rw6y02d0-790.jpg?415ca5b57eefc39e5a13b582a0b2740f2b350199');
var a='data-src';var e=document.querySelector('.js1 .slide0');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/1-1162.png?e8b81874b713b9c9374ee6a922b934945669e212':'images/1-581.png?d23410cb4945c183e2cdb4e85557db2538016486');
var a='data-src';var e=document.querySelector('.js1 .slide1');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/2-1162.png?99871a996f35a1d11280aac509eddfd054671a74':'images/2-581.png?928d2c08d0ef04c27b0429da456755292303ed39');
var a='data-src';var e=document.querySelector('.js1 .slide2');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/3-1162.png?08cfc271619c167bec53ed7d8a1ac82ee5a13ca7':'images/3-581.png?ee4d1a7957f1a184e5d38ef33472abb41064d519');
var a='data-src';var e=document.querySelector('.js1 .slide3');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/4-1162.png?67924fdda8a50111c047cc8ff509a4b7f1e9aa22':'images/4-581.png?cf8686b54924c2efa28e7d75abfc1091c38f0505');
var a='data-src';var e=document.querySelector('.js1 .slide4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/5-1162.png?62c8fb497067193cf8182cccba9ce3f157e8dcb5':'images/5-581.png?e7091833998a95b9743cf4e276c95643ac652083');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
ldsrc('.js2');ldsrcset('.js8 source');ldsrc('.js4');ldsrcset('.js9 source');ldsrc('.js6');ldsrcset('.js10 source');$('.c33').Stickyfill();
$('.js1 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,overflow: 'hidden',speed: 300,dots: false,arrows: true,infinite: true});wl=new woolite();
wl.init();
wl.addAnimation($('.js3')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js5')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});
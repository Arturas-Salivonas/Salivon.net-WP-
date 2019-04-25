<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/modernizr.custom.js"></script>

<script charset="utf-8">
  !function(t){var r=function(r,e){return"rgba(0, 0, 0, 0)"===r&&(r="rgb(255, 255, 255)"),t("<span></span>").css("color",r).css("background-color",e)},e=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},a=function(t){t.removeData(["typePosition","highlightPosition","leftStop","rightStop","primaryColor","backgroundColor","text","typing"])},n=function(t){var r=t.data("text"),e=t.data("oldLeft"),o=t.data("oldRight");return r&&0!==r.length?(t.text(e+r.charAt(0)+o).data({oldLeft:e+r.charAt(0),text:r.substring(1)}),void setTimeout(function(){n(t)},t.data("typerOptions").typeSpeed)):void a(t)},o=function(t){t.find("span").remove(),setTimeout(function(){n(t)},t.data("typerOptions").typeDelay)},i=function(t){var a,n,d,p=t.data("highlightPosition");return e(p)||(p=t.data("rightStop")+1),p<=t.data("leftStop")?void setTimeout(function(){o(t)},t.data("typerOptions").clearDelay):(a=t.text().substring(0,p-1),n=t.text().substring(p-1,t.data("rightStop")+1),d=t.text().substring(t.data("rightStop")+1),t.html(a).append(r(t.data("backgroundColor"),t.data("primaryColor")).append(n)).append(d),t.data("highlightPosition",p-1),void setTimeout(function(){return i(t)},t.data("typerOptions").highlightInterval))},d=function(r){var e,a=r.data("typerOptions").links;if(r.data("typerOptions").link&&r.css("cursor","pointer"),r.data("typerOptions").link&&r.is(":hover")&&null!=a&&r.click(function(t){t.preventDefault(),r.data("typerOptions").random&&null!=a[r.data("randomNumber")]?window.open(a[r.data("randomNumber")],r.data("typerOptions").linkTarget):null!=a[r.data("currentIndex")]&&window.open(a[r.data("currentIndex")],r.data("typerOptions").linkTarget)}),!(r.data("typing")||r.data("typerOptions").stopOnHover&&r.is(":hover"))){try{e=JSON.parse(r.attr(r.data("typerOptions").typerDataAttr)).targets}catch(n){}"undefined"==typeof e&&(e=t.map(r.attr(r.data("typerOptions").typerDataAttr).split(","),function(r){return t.trim(r)})),r.data("typerOptions").random?(r.data("randomNumber",Math.floor(Math.random()*e.length)),r.typeTo(e[r.data("randomNumber")],r.data("typerOptions"))):("undefined"==typeof r.data("currentIndex")?r.data("currentIndex",0):r.data("currentIndex",r.data("currentIndex")+1),"undefined"==typeof e[r.data("currentIndex")]&&r.data("currentIndex",0),r.typeTo(e[r.data("currentIndex")],r.data("typerOptions")))}};t.fn.typer=function(r){var e=t(this),a=t.extend({},t.fn.typer.defaults,r);return e.each(function(){var r=t(this);"undefined"!=typeof r.attr(a.typerDataAttr)&&(r.data("typerOptions",a),d(r),setInterval(function(){d(r)},r.data("typerOptions").typerInterval))})},t.fn.typeTo=function(r,e){var a=t(this),n=a.text(),o=t.extend({},t.fn.typer.defaults,e),d=0,p=0;if(n===r)return console.log("Our strings are equal, nothing to type"),a;if(n!==a.html())return console.error("Typer does not work on elements with child elements."),a;if(a.data("typing",!0),a.data("typerOptions",o),!a.data("typerOptions").wholeWord){for(;n.charAt(d)===r.charAt(d);)d++;for(;n.rightChars(p)===r.rightChars(p);)p++}return r=r.substring(d,r.length-p+1),a.data({oldLeft:n.substring(0,d),oldRight:n.rightChars(p-1),leftStop:d,rightStop:n.length-p,primaryColor:a.css("color"),backgroundColor:a.css("background-color"),text:r}),i(a),a},t.fn.typer.defaults={highlightSpeed:20,typeSpeed:100,clearDelay:500,typeDelay:200,clearOnHighlight:!0,typerDataAttr:"data-typer-targets",typerInterval:2e3,random:!1,wholeWord:!1,stopOnHover:!1,link:!1,links:null,linkTarget:"_blank"},String.prototype.rightChars=function(t){return 0>=t?"":t>this.length?this:this.substring(this.length,this.length-t)}}(jQuery);

</script>
<script>
jQuery(document).ready(function($){
$('[data-typer-targets]').typer({
  typerInterval: 3000,
  wholeWord: true,
});
});
</script>

<script src="/wp-content/themes/salivon.net_portfolio/js/pages-switcher.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/validator.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/masonry.pkgd.min.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/jquery.hoverdir.js"></script>
<script src="/wp-content/themes/salivon.net_portfolio/js/main.js"></script>
<!-- Reikalingas  -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/10.3.5/lazyload.min.js"></script>
<script>
	var myLazyLoad = new LazyLoad();
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script>
<script>
jQuery(document).ready(function($){

// tilt.js
$('.Buttonx').tilt({ scale: 1.1, speed: 1000 });
$('.item').tilt({ scale: 1.1, speed: 1000 });
$('.client-block').tilt({ scale: 1.1, speed: 1000 });


function rand(min, max) {
  return Math.floor(Math.random() * (max + 1)) + min;
}
});


</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-36192953-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-36192953-2');
</script>
<?php wp_footer(); ?>
</body>
</html>

(function($) {
  "use strict";

  function mobileMenuHide() {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $('#site_header').addClass('mobile-menu-hide');
    }
  }

  function customScroll() {
    var windowWidth = $(window).width();
    if (windowWidth > 991) {
      $(".pt-page").mCustomScrollbar({
        scrollInertia: 4,
        documentTouchScroll: false
      });
      $("#site_header").mCustomScrollbar({
        scrollInertia: 4,
        documentTouchScroll: false
      });
    } else {
      $(".pt-page").mCustomScrollbar('destroy');
      $("#site_header").mCustomScrollbar('destroy');
    }
  }
  $(window).on('load', function() {
    $(".preloader").fadeOut("slow");
    var ptPage = $('.subpages');
    if (ptPage[0]) {
      PageTransitions.init({
        menu: 'ul.site-main-menu',
      });
    }
    customScroll();
  }).on('resize', function() {
    mobileMenuHide();
    customScroll();
  });
  $(document).on('ready', function() {
    var $portfolio_container = $("#portfolio-grid");
    $(' #portfolio_grid > figure > a ').each(function() {
      $(this).hoverdir();
    });
    $('.menu-toggle').on("click", function() {
      $('#site_header').toggleClass('mobile-menu-hide');
    });
    $('.site-main-menu').on("click", "a", function(e) {
      mobileMenuHide();
    });
  });
})(jQuery);

$('.input--name').on('focus', function () {
$('.bird-arm').addClass('focus-lhand1');
$('.bird-eye').addClass('focus-eyes1');
$('.bird-body').addClass('focus-body1');
}).on('focusout', function () {
$('.bird-arm').removeClass('focus-lhand1');
$('.bird-eye').removeClass('focus-eyes1');
$('.bird-body').removeClass('focus-body1');
});;

$('.input--email').on('focus', function () {
$('.bird-arm').addClass('focus-lhand2');
$('.bird-eye').addClass('focus-eyes2');
$('.bird-body').addClass('focus-body2');
}).on('focusout', function () {
$('.bird-arm').removeClass('focus-lhand2');
$('.bird-eye').removeClass('focus-eyes2');
$('.bird-body').removeClass('focus-body2');
});;

$('.input--text').on('focus', function () {
$('.bird-arm').addClass('focus-lhand3');
$('.bird-eye').addClass('focus-eyes3');
$('.bird-body').addClass('focus-body3');
}).on('focusout', function () {
$('.bird-arm').removeClass('focus-lhand3');
$('.bird-eye').removeClass('focus-eyes3');
$('.bird-body').removeClass('focus-body3');
});;

// ! function(a) {
//   var b = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
//   "function" == typeof define && define.amd ? define(["exports"], function(c) {
//       b.ParticleNetwork = a(b, c)
//   }) : "object" == typeof module && module.exports ? module.exports = a(b, {}) : b.ParticleNetwork = a(b, {})
// }(function(a, b) {
//   var c = function(a) {
//       this.canvas = a.canvas, this.g = a.g, this.particleColor = a.options.particleColor, this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height, this.velocity = {
//           x: (Math.random() - .5) * a.options.velocity,
//           y: (Math.random() - .5) * a.options.velocity
//       }
//   };
//   return c.prototype.update = function() {
//       (this.x > this.canvas.width + 20 || this.x < -20) && (this.velocity.x = -this.velocity.x), (this.y > this.canvas.height + 20 || this.y < -20) && (this.velocity.y = -this.velocity.y), this.x += this.velocity.x, this.y += this.velocity.y
//   }, c.prototype.h = function() {
//       this.g.beginPath(), this.g.fillStyle = this.particleColor, this.g.globalAlpha = .7, this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI), this.g.fill()
//   }, b = function(a, b) {
//       this.i = a, this.i.size = {
//           width: this.i.offsetWidth,
//           height: this.i.offsetHeight
//       }, b = void 0 !== b ? b : {}, this.options = {
//           particleColor: void 0 !== b.particleColor ? b.particleColor : "#fff",
//           background: void 0 !== b.background ? b.background : "#1a252f",
//           interactive: void 0 !== b.interactive ? b.interactive : !0,
//           velocity: this.setVelocity(b.speed),
//           density: this.j(b.density)
//       }, this.init()
//   }, b.prototype.init = function() {
//       if (this.k = document.createElement("div"), this.i.appendChild(this.k), this.l(this.k, {
//               position: "absolute",
//               top: 0,
//               left: 0,
//               bottom: 0,
//               right: 0,
//               display: "none",
//               "z-index": 1
//           }), /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)) this.l(this.k, {
//           background: this.options.background
//       });
//       else {
//           if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)) return console.error("Please specify a valid background image or hexadecimal color"), !1;
//           this.l(this.k, {
//               background: 'url("' + this.options.background + '") no-repeat center',
//               "background-size": "cover"
//           })
//       }
//       if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)) return console.error("Please specify a valid particleColor hexadecimal color"), !1;
//       this.canvas = document.createElement("canvas"), this.i.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.canvas.width = this.i.size.width, this.canvas.height = this.i.size.height, this.l(this.i, {
//           position: "relative"
//       }), this.l(this.canvas, {
//           "z-index": "20",
//           top: 0,
//           position: "absolute"
//       }), window.addEventListener("resize", function() {
//           return this.i.offsetWidth === this.i.size.width && this.i.offsetHeight === this.i.size.height ? !1 : (this.canvas.width = this.i.size.width = this.i.offsetWidth, this.canvas.height = this.i.size.height = this.i.offsetHeight, clearTimeout(this.m), void(this.m = setTimeout(function() {
//               this.o = [];
//               for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
//               this.options.interactive && this.o.push(this.p), requestAnimationFrame(this.update.bind(this))
//           }.bind(this), 500)))
//       }.bind(this)), this.o = [];
//       for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) this.o.push(new c(this));
//       this.options.interactive && (this.p = new c(this), this.p.velocity = {
//           x: 0,
//           y: 0
//       }, this.o.push(this.p), this.canvas.addEventListener("mousemove", function(a) {
//           this.p.x = a.clientX - this.canvas.offsetLeft, this.p.y = a.clientY - this.canvas.offsetTop
//       }.bind(this)), this.canvas.addEventListener("mouseup", function(a) {
//           this.p.velocity = {
//               x: (Math.random() - .5) * this.options.velocity,
//               y: (Math.random() - .5) * this.options.velocity
//           }, this.p = new c(this), this.p.velocity = {
//               x: 0,
//               y: 0
//           }, this.o.push(this.p)
//       }.bind(this))), requestAnimationFrame(this.update.bind(this))
//   }, b.prototype.update = function() {
//       this.g.clearRect(0, 0, this.canvas.width, this.canvas.height), this.g.globalAlpha = 1;
//       for (var a = 0; a < this.o.length; a++) {
//           this.o[a].update(), this.o[a].h();
//           for (var b = this.o.length - 1; b > a; b--) {
//               var c = Math.sqrt(Math.pow(this.o[a].x - this.o[b].x, 2) + Math.pow(this.o[a].y - this.o[b].y, 2));
//               c > 120 || (this.g.beginPath(), this.g.strokeStyle = this.options.particleColor, this.g.globalAlpha = (120 - c) / 120, this.g.lineWidth = .7, this.g.moveTo(this.o[a].x, this.o[a].y), this.g.lineTo(this.o[b].x, this.o[b].y), this.g.stroke())
//           }
//       }
//       0 !== this.options.velocity && requestAnimationFrame(this.update.bind(this))
//   }, b.prototype.setVelocity = function(a) {
//       return "fast" === a ? 1 : "slow" === a ? .33 : "none" === a ? 0 : .66
//   }, b.prototype.j = function(a) {
//       return "high" === a ? 5e3 : "low" === a ? 2e4 : isNaN(parseInt(a, 10)) ? 1e4 : a
//   }, b.prototype.l = function(a, b) {
//       for (var c in b) a.style[c] = b[c]
//   }, b
// });

// var canvasDiv = document.getElementById('particle-canvas');
// var options = {
//   particleColor: '#e37575',
//   interactive: false,
//   speed: 'medium',
//   density: 'high'
// };
// var particleCanvas = new ParticleNetwork(canvasDiv, options);
// //https://github.com/JulianLaval/canvas-particle-network

// Load images only when page is fully loaded
function init() {
  var imgDefer = document.getElementsByTagName('img');
  for (var i = 0; i < imgDefer.length; i++) {
    if (imgDefer[i].getAttribute('data-src')) {
      imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }
  }
}
window.onload = init;


// tilt.js
jQuery(document).ready(function ($) {
  $('.Buttonx').tilt({ scale: 1.1, speed: 1000 });
  $('.item').tilt({ scale: 1.1, speed: 1000 });
  $('.client-block').tilt({ scale: 1.1, speed: 1000 });
  function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
  }
});

//home page typer

!function (t) { var r = function (r, e) { return "rgba(0, 0, 0, 0)" === r && (r = "rgb(255, 255, 255)"), t("<span></span>").css("color", r).css("background-color", e) }, e = function (t) { return !isNaN(parseFloat(t)) && isFinite(t) }, a = function (t) { t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"]) }, n = function (t) { var r = t.data("text"), e = t.data("oldLeft"), o = t.data("oldRight"); return r && 0 !== r.length ? (t.text(e + r.charAt(0) + o).data({ oldLeft: e + r.charAt(0), text: r.substring(1) }), void setTimeout(function () { n(t) }, t.data("typerOptions").typeSpeed)) : void a(t) }, o = function (t) { t.find("span").remove(), setTimeout(function () { n(t) }, t.data("typerOptions").typeDelay) }, i = function (t) { var a, n, d, p = t.data("highlightPosition"); return e(p) || (p = t.data("rightStop") + 1), p <= t.data("leftStop") ? void setTimeout(function () { o(t) }, t.data("typerOptions").clearDelay) : (a = t.text().substring(0, p - 1), n = t.text().substring(p - 1, t.data("rightStop") + 1), d = t.text().substring(t.data("rightStop") + 1), t.html(a).append(r(t.data("backgroundColor"), t.data("primaryColor")).append(n)).append(d), t.data("highlightPosition", p - 1), void setTimeout(function () { return i(t) }, t.data("typerOptions").highlightInterval)) }, d = function (r) { var e, a = r.data("typerOptions").links; if (r.data("typerOptions").link && r.css("cursor", "pointer"), r.data("typerOptions").link && r.is(":hover") && null != a && r.click(function (t) { t.preventDefault(), r.data("typerOptions").random && null != a[r.data("randomNumber")] ? window.open(a[r.data("randomNumber")], r.data("typerOptions").linkTarget) : null != a[r.data("currentIndex")] && window.open(a[r.data("currentIndex")], r.data("typerOptions").linkTarget) }), !(r.data("typing") || r.data("typerOptions").stopOnHover && r.is(":hover"))) { try { e = JSON.parse(r.attr(r.data("typerOptions").typerDataAttr)).targets } catch (n) { } "undefined" == typeof e && (e = t.map(r.attr(r.data("typerOptions").typerDataAttr).split(","), function (r) { return t.trim(r) })), r.data("typerOptions").random ? (r.data("randomNumber", Math.floor(Math.random() * e.length)), r.typeTo(e[r.data("randomNumber")], r.data("typerOptions"))) : ("undefined" == typeof r.data("currentIndex") ? r.data("currentIndex", 0) : r.data("currentIndex", r.data("currentIndex") + 1), "undefined" == typeof e[r.data("currentIndex")] && r.data("currentIndex", 0), r.typeTo(e[r.data("currentIndex")], r.data("typerOptions"))) } }; t.fn.typer = function (r) { var e = t(this), a = t.extend({}, t.fn.typer.defaults, r); return e.each(function () { var r = t(this); "undefined" != typeof r.attr(a.typerDataAttr) && (r.data("typerOptions", a), d(r), setInterval(function () { d(r) }, r.data("typerOptions").typerInterval)) }) }, t.fn.typeTo = function (r, e) { var a = t(this), n = a.text(), o = t.extend({}, t.fn.typer.defaults, e), d = 0, p = 0; if (n === r) return console.log("Our strings are equal, nothing to type"), a; if (n !== a.html()) return console.error("Typer does not work on elements with child elements."), a; if (a.data("typing", !0), a.data("typerOptions", o), !a.data("typerOptions").wholeWord) { for (; n.charAt(d) === r.charAt(d);)d++; for (; n.rightChars(p) === r.rightChars(p);)p++ } return r = r.substring(d, r.length - p + 1), a.data({ oldLeft: n.substring(0, d), oldRight: n.rightChars(p - 1), leftStop: d, rightStop: n.length - p, primaryColor: a.css("color"), backgroundColor: a.css("background-color"), text: r }), i(a), a }, t.fn.typer.defaults = { highlightSpeed: 20, typeSpeed: 100, clearDelay: 500, typeDelay: 200, clearOnHighlight: !0, typerDataAttr: "data-typer-targets", typerInterval: 2e3, random: !1, wholeWord: !1, stopOnHover: !1, link: !1, links: null, linkTarget: "_blank" }, String.prototype.rightChars = function (t) { return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t) } }(jQuery);

jQuery(document).ready(function ($) {
  $('[data-typer-targets]').typer({
    typerInterval: 3000,
    wholeWord: true,
  });
});
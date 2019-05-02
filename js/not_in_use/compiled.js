(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

require('./scripts/main.js');

require('./scripts/jquery.hoverdir.js');

},{"./scripts/jquery.hoverdir.js":2,"./scripts/main.js":3}],2:[function(require,module,exports){
'use strict';

;(function ($, window, undefined) {
  'use strict';
  $.HoverDir = function (options, element) {
    this.$el = $(element);this._init(options);
  };$.HoverDir.defaults = { speed: 300, easing: 'ease', hoverDelay: 0, inverse: false };$.HoverDir.prototype = { _init: function _init(options) {
      this.options = $.extend(true, {}, $.HoverDir.defaults, options);this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;this.support = Modernizr.csstransitions;this._loadEvents();
    }, _loadEvents: function _loadEvents() {
      var self = this;this.$el.on('mouseenter.hoverdir, mouseleave.hoverdir', function (event) {
        var $el = $(this),
            $hoverElem = $el.find('div'),
            direction = self._getDir($el, { x: event.pageX, y: event.pageY }),
            styleCSS = self._getStyle(direction);if (event.type === 'mouseenter') {
          $hoverElem.hide().css(styleCSS.from);clearTimeout(self.tmhover);self.tmhover = setTimeout(function () {
            $hoverElem.show(0, function () {
              var $el = $(this);if (self.support) {
                $el.css('transition', self.transitionProp);
              }self._applyAnimation($el, styleCSS.to, self.options.speed);
            });
          }, self.options.hoverDelay);
        } else {
          if (self.support) {
            $hoverElem.css('transition', self.transitionProp);
          }clearTimeout(self.tmhover);self._applyAnimation($hoverElem, styleCSS.from, self.options.speed);
        }
      });
    }, _getDir: function _getDir($el, coordinates) {
      var w = $el.width(),
          h = $el.height(),
          x = (coordinates.x - $el.offset().left - w / 2) * (w > h ? h / w : 1),
          y = (coordinates.y - $el.offset().top - h / 2) * (h > w ? w / h : 1),
          direction = Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;return direction;
    }, _getStyle: function _getStyle(direction) {
      var fromStyle,
          toStyle,
          slideFromTop = { left: '0px', top: '-100%' },
          slideFromBottom = { left: '0px', top: '100%' },
          slideFromLeft = { left: '-100%', top: '0px' },
          slideFromRight = { left: '100%', top: '0px' },
          slideTop = { top: '0px' },
          slideLeft = { left: '0px' };switch (direction) {case 0:
          fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;toStyle = slideTop;break;case 1:
          fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;toStyle = slideLeft;break;case 2:
          fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;toStyle = slideTop;break;case 3:
          fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;toStyle = slideLeft;break;};return { from: fromStyle, to: toStyle };
    }, _applyAnimation: function _applyAnimation(el, styleCSS, speed) {
      $.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;el.stop().applyStyle(styleCSS, $.extend(true, [], { duration: speed + 'ms' }));
    } };var logError = function logError(message) {
    if (window.console) {
      window.console.error(message);
    }
  };$.fn.hoverdir = function (options) {
    var instance = $.data(this, 'hoverdir');if (typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);this.each(function () {
        if (!instance) {
          logError("cannot call methods on hoverdir prior to initialization; " + "attempted to call method '" + options + "'");return;
        }if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
          logError("no such method '" + options + "' for hoverdir instance");return;
        }instance[options].apply(instance, args);
      });
    } else {
      this.each(function () {
        if (instance) {
          instance._init();
        } else {
          instance = $.data(this, 'hoverdir', new $.HoverDir(options, this));
        }
      });
    }return instance;
  };
})(jQuery, window);

},{}],3:[function(require,module,exports){
'use strict';

(function ($) {
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
  $(window).on('load', function () {
    $(".preloader").fadeOut("slow");
    var ptPage = $('.subpages');
    if (ptPage[0]) {
      PageTransitions.init({
        menu: 'ul.site-main-menu'
      });
    }
    customScroll();
  }).on('resize', function () {
    mobileMenuHide();
    customScroll();
  });
  $(document).on('ready', function () {
    var $portfolio_container = $("#portfolio-grid");
    $(' #portfolio_grid > figure > a ').each(function () {
      $(this).hoverdir();
    });
    $('.menu-toggle').on("click", function () {
      $('#site_header').toggleClass('mobile-menu-hide');
    });
    $('.site-main-menu').on("click", "a", function (e) {
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

!function (t) {
  var r = function r(_r, e) {
    return "rgba(0, 0, 0, 0)" === _r && (_r = "rgb(255, 255, 255)"), t("<span></span>").css("color", _r).css("background-color", e);
  },
      e = function e(t) {
    return !isNaN(parseFloat(t)) && isFinite(t);
  },
      a = function a(t) {
    t.removeData(["typePosition", "highlightPosition", "leftStop", "rightStop", "primaryColor", "backgroundColor", "text", "typing"]);
  },
      n = function n(t) {
    var r = t.data("text"),
        e = t.data("oldLeft"),
        o = t.data("oldRight");return r && 0 !== r.length ? (t.text(e + r.charAt(0) + o).data({ oldLeft: e + r.charAt(0), text: r.substring(1) }), void setTimeout(function () {
      n(t);
    }, t.data("typerOptions").typeSpeed)) : void a(t);
  },
      o = function o(t) {
    t.find("span").remove(), setTimeout(function () {
      n(t);
    }, t.data("typerOptions").typeDelay);
  },
      i = function i(t) {
    var a,
        n,
        d,
        p = t.data("highlightPosition");return e(p) || (p = t.data("rightStop") + 1), p <= t.data("leftStop") ? void setTimeout(function () {
      o(t);
    }, t.data("typerOptions").clearDelay) : (a = t.text().substring(0, p - 1), n = t.text().substring(p - 1, t.data("rightStop") + 1), d = t.text().substring(t.data("rightStop") + 1), t.html(a).append(r(t.data("backgroundColor"), t.data("primaryColor")).append(n)).append(d), t.data("highlightPosition", p - 1), void setTimeout(function () {
      return i(t);
    }, t.data("typerOptions").highlightInterval));
  },
      d = function d(r) {
    var e,
        a = r.data("typerOptions").links;if (r.data("typerOptions").link && r.css("cursor", "pointer"), r.data("typerOptions").link && r.is(":hover") && null != a && r.click(function (t) {
      t.preventDefault(), r.data("typerOptions").random && null != a[r.data("randomNumber")] ? window.open(a[r.data("randomNumber")], r.data("typerOptions").linkTarget) : null != a[r.data("currentIndex")] && window.open(a[r.data("currentIndex")], r.data("typerOptions").linkTarget);
    }), !(r.data("typing") || r.data("typerOptions").stopOnHover && r.is(":hover"))) {
      try {
        e = JSON.parse(r.attr(r.data("typerOptions").typerDataAttr)).targets;
      } catch (n) {}"undefined" == typeof e && (e = t.map(r.attr(r.data("typerOptions").typerDataAttr).split(","), function (r) {
        return t.trim(r);
      })), r.data("typerOptions").random ? (r.data("randomNumber", Math.floor(Math.random() * e.length)), r.typeTo(e[r.data("randomNumber")], r.data("typerOptions"))) : ("undefined" == typeof r.data("currentIndex") ? r.data("currentIndex", 0) : r.data("currentIndex", r.data("currentIndex") + 1), "undefined" == typeof e[r.data("currentIndex")] && r.data("currentIndex", 0), r.typeTo(e[r.data("currentIndex")], r.data("typerOptions")));
    }
  };t.fn.typer = function (r) {
    var e = t(this),
        a = t.extend({}, t.fn.typer.defaults, r);return e.each(function () {
      var r = t(this);"undefined" != typeof r.attr(a.typerDataAttr) && (r.data("typerOptions", a), d(r), setInterval(function () {
        d(r);
      }, r.data("typerOptions").typerInterval));
    });
  }, t.fn.typeTo = function (r, e) {
    var a = t(this),
        n = a.text(),
        o = t.extend({}, t.fn.typer.defaults, e),
        d = 0,
        p = 0;if (n === r) return console.log("Our strings are equal, nothing to type"), a;if (n !== a.html()) return console.error("Typer does not work on elements with child elements."), a;if (a.data("typing", !0), a.data("typerOptions", o), !a.data("typerOptions").wholeWord) {
      for (; n.charAt(d) === r.charAt(d);) {
        d++;
      }for (; n.rightChars(p) === r.rightChars(p);) {
        p++;
      }
    }return r = r.substring(d, r.length - p + 1), a.data({ oldLeft: n.substring(0, d), oldRight: n.rightChars(p - 1), leftStop: d, rightStop: n.length - p, primaryColor: a.css("color"), backgroundColor: a.css("background-color"), text: r }), i(a), a;
  }, t.fn.typer.defaults = { highlightSpeed: 20, typeSpeed: 100, clearDelay: 500, typeDelay: 200, clearOnHighlight: !0, typerDataAttr: "data-typer-targets", typerInterval: 2e3, random: !1, wholeWord: !1, stopOnHover: !1, link: !1, links: null, linkTarget: "_blank" }, String.prototype.rightChars = function (t) {
    return 0 >= t ? "" : t > this.length ? this : this.substring(this.length, this.length - t);
  };
}(jQuery);

jQuery(document).ready(function ($) {
  $('[data-typer-targets]').typer({
    typerInterval: 3000,
    wholeWord: true
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9zY3JpcHRzLmpzIiwianMvc2NyaXB0cy9qcXVlcnkuaG92ZXJkaXIuanMiLCJqcy9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0dBOztBQUNBOzs7OztBQ0pBLENBQUMsQ0FBQyxVQUFTLENBQVQsRUFBVyxNQUFYLEVBQWtCLFNBQWxCLEVBQTRCO0FBQUM7QUFBYSxJQUFFLFFBQUYsR0FBVyxVQUFTLE9BQVQsRUFBaUIsT0FBakIsRUFBeUI7QUFBQyxTQUFLLEdBQUwsR0FBUyxFQUFFLE9BQUYsQ0FBVCxDQUFvQixLQUFLLEtBQUwsQ0FBVyxPQUFYO0FBQXFCLEdBQTlFLENBQStFLEVBQUUsUUFBRixDQUFXLFFBQVgsR0FBb0IsRUFBQyxPQUFNLEdBQVAsRUFBVyxRQUFPLE1BQWxCLEVBQXlCLFlBQVcsQ0FBcEMsRUFBc0MsU0FBUSxLQUE5QyxFQUFwQixDQUF5RSxFQUFFLFFBQUYsQ0FBVyxTQUFYLEdBQXFCLEVBQUMsT0FBTSxlQUFTLE9BQVQsRUFBaUI7QUFBQyxXQUFLLE9BQUwsR0FBYSxFQUFFLE1BQUYsQ0FBUyxJQUFULEVBQWMsRUFBZCxFQUFpQixFQUFFLFFBQUYsQ0FBVyxRQUE1QixFQUFxQyxPQUFyQyxDQUFiLENBQTJELEtBQUssY0FBTCxHQUFvQixTQUFPLEtBQUssT0FBTCxDQUFhLEtBQXBCLEdBQTBCLEtBQTFCLEdBQWdDLEtBQUssT0FBTCxDQUFhLE1BQWpFLENBQXdFLEtBQUssT0FBTCxHQUFhLFVBQVUsY0FBdkIsQ0FBc0MsS0FBSyxXQUFMO0FBQW9CLEtBQXROLEVBQXVOLGFBQVksdUJBQVU7QUFBQyxVQUFJLE9BQUssSUFBVCxDQUFjLEtBQUssR0FBTCxDQUFTLEVBQVQsQ0FBWSwwQ0FBWixFQUF1RCxVQUFTLEtBQVQsRUFBZTtBQUFDLFlBQUksTUFBSSxFQUFFLElBQUYsQ0FBUjtBQUFBLFlBQWdCLGFBQVcs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S0FBMUIsQ0FBZ0M7QUFDOUIsbUJBQWUsSUFEZTtBQUU5QixlQUFXO0FBRm1CLEdBQWhDO0FBSUQsQ0FMRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vaW1wb3J0IGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbi8vd2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0galF1ZXJ5O1xyXG5cclxuaW1wb3J0ICcuL3NjcmlwdHMvbWFpbi5qcyc7XHJcbmltcG9ydCAnLi9zY3JpcHRzL2pxdWVyeS5ob3ZlcmRpci5qcyc7XHJcblxyXG5cclxuXHJcbiIsIjsoZnVuY3Rpb24oJCx3aW5kb3csdW5kZWZpbmVkKXsndXNlIHN0cmljdCc7JC5Ib3ZlckRpcj1mdW5jdGlvbihvcHRpb25zLGVsZW1lbnQpe3RoaXMuJGVsPSQoZWxlbWVudCk7dGhpcy5faW5pdChvcHRpb25zKTt9OyQuSG92ZXJEaXIuZGVmYXVsdHM9e3NwZWVkOjMwMCxlYXNpbmc6J2Vhc2UnLGhvdmVyRGVsYXk6MCxpbnZlcnNlOmZhbHNlfTskLkhvdmVyRGlyLnByb3RvdHlwZT17X2luaXQ6ZnVuY3Rpb24ob3B0aW9ucyl7dGhpcy5vcHRpb25zPSQuZXh0ZW5kKHRydWUse30sJC5Ib3ZlckRpci5kZWZhdWx0cyxvcHRpb25zKTt0aGlzLnRyYW5zaXRpb25Qcm9wPSdhbGwgJyt0aGlzLm9wdGlvbnMuc3BlZWQrJ21zICcrdGhpcy5vcHRpb25zLmVhc2luZzt0aGlzLnN1cHBvcnQ9TW9kZXJuaXpyLmNzc3RyYW5zaXRpb25zO3RoaXMuX2xvYWRFdmVudHMoKTt9LF9sb2FkRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHNlbGY9dGhpczt0aGlzLiRlbC5vbignbW91c2VlbnRlci5ob3ZlcmRpciwgbW91c2VsZWF2ZS5ob3ZlcmRpcicsZnVuY3Rpb24oZXZlbnQpe3ZhciAkZWw9JCh0aGlzKSwkaG92ZXJFbGVtPSRlbC5maW5kKCdkaXYnKSxkaXJlY3Rpb249c2VsZi5fZ2V0RGlyKCRlbCx7eDpldmVudC5wYWdlWCx5OmV2ZW50LnBhZ2VZfSksc3R5bGVDU1M9c2VsZi5fZ2V0U3R5bGUoZGlyZWN0aW9uKTtpZihldmVudC50eXBlPT09J21vdXNlZW50ZXInKXskaG92ZXJFbGVtLmhpZGUoKS5jc3Moc3R5bGVDU1MuZnJvbSk7Y2xlYXJUaW1lb3V0KHNlbGYudG1ob3Zlcik7c2VsZi50bWhvdmVyPXNldFRpbWVvdXQoZnVuY3Rpb24oKXskaG92ZXJFbGVtLnNob3coMCxmdW5jdGlvbigpe3ZhciAkZWw9JCh0aGlzKTtpZihzZWxmLnN1cHBvcnQpeyRlbC5jc3MoJ3RyYW5zaXRpb24nLHNlbGYudHJhbnNpdGlvblByb3ApO31zZWxmLl9hcHBseUFuaW1hdGlvbigkZWwsc3R5bGVDU1MudG8sc2VsZi5vcHRpb25zLnNwZWVkKTt9KTt9LHNlbGYub3B0aW9ucy5ob3ZlckRlbGF5KTt9ZWxzZXtpZihzZWxmLnN1cHBvcnQpeyRob3ZlckVsZW0uY3NzKCd0cmFuc2l0aW9uJyxzZWxmLnRyYW5zaXRpb25Qcm9wKTt9Y2xlYXJUaW1lb3V0KHNlbGYudG1ob3Zlcik7c2VsZi5fYXBwbHlBbmltYXRpb24oJGhvdmVyRWxlbSxzdHlsZUNTUy5mcm9tLHNlbGYub3B0aW9ucy5zcGVlZCk7fX0pO30sX2dldERpcjpmdW5jdGlvbigkZWwsY29vcmRpbmF0ZXMpe3ZhciB3PSRlbC53aWR0aCgpLGg9JGVsLmhlaWdodCgpLHg9KGNvb3JkaW5hdGVzLngtJGVsLm9mZnNldCgpLmxlZnQtKHcvMikpKih3Pmg/KGgvdyk6MSkseT0oY29vcmRpbmF0ZXMueS0kZWwub2Zmc2V0KCkudG9wLShoLzIpKSooaD53Pyh3L2gpOjEpLGRpcmVjdGlvbj1NYXRoLnJvdW5kKCgoKE1hdGguYXRhbjIoeSx4KSooMTgwL01hdGguUEkpKSsxODApLzkwKSszKSU0O3JldHVybiBkaXJlY3Rpb247fSxfZ2V0U3R5bGU6ZnVuY3Rpb24oZGlyZWN0aW9uKXt2YXIgZnJvbVN0eWxlLHRvU3R5bGUsc2xpZGVGcm9tVG9wPXtsZWZ0OicwcHgnLHRvcDonLTEwMCUnfSxzbGlkZUZyb21Cb3R0b209e2xlZnQ6JzBweCcsdG9wOicxMDAlJ30sc2xpZGVGcm9tTGVmdD17bGVmdDonLTEwMCUnLHRvcDonMHB4J30sc2xpZGVGcm9tUmlnaHQ9e2xlZnQ6JzEwMCUnLHRvcDonMHB4J30sc2xpZGVUb3A9e3RvcDonMHB4J30sc2xpZGVMZWZ0PXtsZWZ0OicwcHgnfTtzd2l0Y2goZGlyZWN0aW9uKXtjYXNlIDA6ZnJvbVN0eWxlPSF0aGlzLm9wdGlvbnMuaW52ZXJzZT9zbGlkZUZyb21Ub3A6c2xpZGVGcm9tQm90dG9tO3RvU3R5bGU9c2xpZGVUb3A7YnJlYWs7Y2FzZSAxOmZyb21TdHlsZT0hdGhpcy5vcHRpb25zLmludmVyc2U/c2xpZGVGcm9tUmlnaHQ6c2xpZGVGcm9tTGVmdDt0b1N0eWxlPXNsaWRlTGVmdDticmVhaztjYXNlIDI6ZnJvbVN0eWxlPSF0aGlzLm9wdGlvbnMuaW52ZXJzZT9zbGlkZUZyb21Cb3R0b206c2xpZGVGcm9tVG9wO3RvU3R5bGU9c2xpZGVUb3A7YnJlYWs7Y2FzZSAzOmZyb21TdHlsZT0hdGhpcy5vcHRpb25zLmludmVyc2U/c2xpZGVGcm9tTGVmdDpzbGlkZUZyb21SaWdodDt0b1N0eWxlPXNsaWRlTGVmdDticmVhazt9O3JldHVybntmcm9tOmZyb21TdHlsZSx0bzp0b1N0eWxlfTt9LF9hcHBseUFuaW1hdGlvbjpmdW5jdGlvbihlbCxzdHlsZUNTUyxzcGVlZCl7JC5mbi5hcHBseVN0eWxlPXRoaXMuc3VwcG9ydD8kLmZuLmNzczokLmZuLmFuaW1hdGU7ZWwuc3RvcCgpLmFwcGx5U3R5bGUoc3R5bGVDU1MsJC5leHRlbmQodHJ1ZSxbXSx7ZHVyYXRpb246c3BlZWQrJ21zJ30pKTt9LH07dmFyIGxvZ0Vycm9yPWZ1bmN0aW9uKG1lc3NhZ2Upe2lmKHdpbmRvdy5jb25zb2xlKXt3aW5kb3cuY29uc29sZS5lcnJvcihtZXNzYWdlKTt9fTskLmZuLmhvdmVyZGlyPWZ1bmN0aW9uKG9wdGlvbnMpe3ZhciBpbnN0YW5jZT0kLmRhdGEodGhpcywnaG92ZXJkaXInKTtpZih0eXBlb2Ygb3B0aW9ucz09PSdzdHJpbmcnKXt2YXIgYXJncz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7dGhpcy5lYWNoKGZ1bmN0aW9uKCl7aWYoIWluc3RhbmNlKXtsb2dFcnJvcihcImNhbm5vdCBjYWxsIG1ldGhvZHMgb24gaG92ZXJkaXIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiK1wiYXR0ZW1wdGVkIHRvIGNhbGwgbWV0aG9kICdcIitvcHRpb25zK1wiJ1wiKTtyZXR1cm47fWlmKCEkLmlzRnVuY3Rpb24oaW5zdGFuY2Vbb3B0aW9uc10pfHxvcHRpb25zLmNoYXJBdCgwKT09PVwiX1wiKXtsb2dFcnJvcihcIm5vIHN1Y2ggbWV0aG9kICdcIitvcHRpb25zK1wiJyBmb3IgaG92ZXJkaXIgaW5zdGFuY2VcIik7cmV0dXJuO31pbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSxhcmdzKTt9KTt9ZWxzZXt0aGlzLmVhY2goZnVuY3Rpb24oKXtpZihpbnN0YW5jZSl7aW5zdGFuY2UuX2luaXQoKTt9ZWxzZXtpbnN0YW5jZT0kLmRhdGEodGhpcywnaG92ZXJkaXInLG5ldyAkLkhvdmVyRGlyKG9wdGlvbnMsdGhpcykpO319KTt9cmV0dXJuIGluc3RhbmNlO307fSkoalF1ZXJ5LHdpbmRvdyk7IiwiKGZ1bmN0aW9uKCQpIHtcclxuICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgZnVuY3Rpb24gbW9iaWxlTWVudUhpZGUoKSB7XHJcbiAgICB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgIGlmICh3aW5kb3dXaWR0aCA8IDEwMjQpIHtcclxuICAgICAgJCgnI3NpdGVfaGVhZGVyJykuYWRkQ2xhc3MoJ21vYmlsZS1tZW51LWhpZGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGN1c3RvbVNjcm9sbCgpIHtcclxuICAgIHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgaWYgKHdpbmRvd1dpZHRoID4gOTkxKSB7XHJcbiAgICAgICQoXCIucHQtcGFnZVwiKS5tQ3VzdG9tU2Nyb2xsYmFyKHtcclxuICAgICAgICBzY3JvbGxJbmVydGlhOiA0LFxyXG4gICAgICAgIGRvY3VtZW50VG91Y2hTY3JvbGw6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgICAkKFwiI3NpdGVfaGVhZGVyXCIpLm1DdXN0b21TY3JvbGxiYXIoe1xyXG4gICAgICAgIHNjcm9sbEluZXJ0aWE6IDQsXHJcbiAgICAgICAgZG9jdW1lbnRUb3VjaFNjcm9sbDogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnB0LXBhZ2VcIikubUN1c3RvbVNjcm9sbGJhcignZGVzdHJveScpO1xyXG4gICAgICAkKFwiI3NpdGVfaGVhZGVyXCIpLm1DdXN0b21TY3JvbGxiYXIoJ2Rlc3Ryb3knKTtcclxuICAgIH1cclxuICB9XHJcbiAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnByZWxvYWRlclwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIHZhciBwdFBhZ2UgPSAkKCcuc3VicGFnZXMnKTtcclxuICAgIGlmIChwdFBhZ2VbMF0pIHtcclxuICAgICAgUGFnZVRyYW5zaXRpb25zLmluaXQoe1xyXG4gICAgICAgIG1lbnU6ICd1bC5zaXRlLW1haW4tbWVudScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY3VzdG9tU2Nyb2xsKCk7XHJcbiAgfSkub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgbW9iaWxlTWVudUhpZGUoKTtcclxuICAgIGN1c3RvbVNjcm9sbCgpO1xyXG4gIH0pO1xyXG4gICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyICRwb3J0Zm9saW9fY29udGFpbmVyID0gJChcIiNwb3J0Zm9saW8tZ3JpZFwiKTtcclxuICAgICQoJyAjcG9ydGZvbGlvX2dyaWQgPiBmaWd1cmUgPiBhICcpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykuaG92ZXJkaXIoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLm1lbnUtdG9nZ2xlJykub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnI3NpdGVfaGVhZGVyJykudG9nZ2xlQ2xhc3MoJ21vYmlsZS1tZW51LWhpZGUnKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnNpdGUtbWFpbi1tZW51Jykub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtb2JpbGVNZW51SGlkZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcblxyXG4kKCcuaW5wdXQtLW5hbWUnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiQoJy5iaXJkLWFybScpLmFkZENsYXNzKCdmb2N1cy1saGFuZDEnKTtcclxuJCgnLmJpcmQtZXllJykuYWRkQ2xhc3MoJ2ZvY3VzLWV5ZXMxJyk7XHJcbiQoJy5iaXJkLWJvZHknKS5hZGRDbGFzcygnZm9jdXMtYm9keTEnKTtcclxufSkub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKCkge1xyXG4kKCcuYmlyZC1hcm0nKS5yZW1vdmVDbGFzcygnZm9jdXMtbGhhbmQxJyk7XHJcbiQoJy5iaXJkLWV5ZScpLnJlbW92ZUNsYXNzKCdmb2N1cy1leWVzMScpO1xyXG4kKCcuYmlyZC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWJvZHkxJyk7XHJcbn0pOztcclxuXHJcbiQoJy5pbnB1dC0tZW1haWwnKS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XHJcbiQoJy5iaXJkLWFybScpLmFkZENsYXNzKCdmb2N1cy1saGFuZDInKTtcclxuJCgnLmJpcmQtZXllJykuYWRkQ2xhc3MoJ2ZvY3VzLWV5ZXMyJyk7XHJcbiQoJy5iaXJkLWJvZHknKS5hZGRDbGFzcygnZm9jdXMtYm9keTInKTtcclxufSkub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24gKCkge1xyXG4kKCcuYmlyZC1hcm0nKS5yZW1vdmVDbGFzcygnZm9jdXMtbGhhbmQyJyk7XHJcbiQoJy5iaXJkLWV5ZScpLnJlbW92ZUNsYXNzKCdmb2N1cy1leWVzMicpO1xyXG4kKCcuYmlyZC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWJvZHkyJyk7XHJcbn0pOztcclxuXHJcbiQoJy5pbnB1dC0tdGV4dCcpLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuJCgnLmJpcmQtYXJtJykuYWRkQ2xhc3MoJ2ZvY3VzLWxoYW5kMycpO1xyXG4kKCcuYmlyZC1leWUnKS5hZGRDbGFzcygnZm9jdXMtZXllczMnKTtcclxuJCgnLmJpcmQtYm9keScpLmFkZENsYXNzKCdmb2N1cy1ib2R5MycpO1xyXG59KS5vbignZm9jdXNvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiQoJy5iaXJkLWFybScpLnJlbW92ZUNsYXNzKCdmb2N1cy1saGFuZDMnKTtcclxuJCgnLmJpcmQtZXllJykucmVtb3ZlQ2xhc3MoJ2ZvY3VzLWV5ZXMzJyk7XHJcbiQoJy5iaXJkLWJvZHknKS5yZW1vdmVDbGFzcygnZm9jdXMtYm9keTMnKTtcclxufSk7O1xyXG5cclxuLy8gISBmdW5jdGlvbihhKSB7XHJcbi8vICAgdmFyIGIgPSBcIm9iamVjdFwiID09IHR5cGVvZiBzZWxmICYmIHNlbGYuc2VsZiA9PT0gc2VsZiAmJiBzZWxmIHx8IFwib2JqZWN0XCIgPT0gdHlwZW9mIGdsb2JhbCAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsO1xyXG4vLyAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW1wiZXhwb3J0c1wiXSwgZnVuY3Rpb24oYykge1xyXG4vLyAgICAgICBiLlBhcnRpY2xlTmV0d29yayA9IGEoYiwgYylcclxuLy8gICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gYShiLCB7fSkgOiBiLlBhcnRpY2xlTmV0d29yayA9IGEoYiwge30pXHJcbi8vIH0oZnVuY3Rpb24oYSwgYikge1xyXG4vLyAgIHZhciBjID0gZnVuY3Rpb24oYSkge1xyXG4vLyAgICAgICB0aGlzLmNhbnZhcyA9IGEuY2FudmFzLCB0aGlzLmcgPSBhLmcsIHRoaXMucGFydGljbGVDb2xvciA9IGEub3B0aW9ucy5wYXJ0aWNsZUNvbG9yLCB0aGlzLnggPSBNYXRoLnJhbmRvbSgpICogdGhpcy5jYW52YXMud2lkdGgsIHRoaXMueSA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLmNhbnZhcy5oZWlnaHQsIHRoaXMudmVsb2NpdHkgPSB7XHJcbi8vICAgICAgICAgICB4OiAoTWF0aC5yYW5kb20oKSAtIC41KSAqIGEub3B0aW9ucy52ZWxvY2l0eSxcclxuLy8gICAgICAgICAgIHk6IChNYXRoLnJhbmRvbSgpIC0gLjUpICogYS5vcHRpb25zLnZlbG9jaXR5XHJcbi8vICAgICAgIH1cclxuLy8gICB9O1xyXG4vLyAgIHJldHVybiBjLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgKHRoaXMueCA+IHRoaXMuY2FudmFzLndpZHRoICsgMjAgfHwgdGhpcy54IDwgLTIwKSAmJiAodGhpcy52ZWxvY2l0eS54ID0gLXRoaXMudmVsb2NpdHkueCksICh0aGlzLnkgPiB0aGlzLmNhbnZhcy5oZWlnaHQgKyAyMCB8fCB0aGlzLnkgPCAtMjApICYmICh0aGlzLnZlbG9jaXR5LnkgPSAtdGhpcy52ZWxvY2l0eS55KSwgdGhpcy54ICs9IHRoaXMudmVsb2NpdHkueCwgdGhpcy55ICs9IHRoaXMudmVsb2NpdHkueVxyXG4vLyAgIH0sIGMucHJvdG90eXBlLmggPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgdGhpcy5nLmJlZ2luUGF0aCgpLCB0aGlzLmcuZmlsbFN0eWxlID0gdGhpcy5wYXJ0aWNsZUNvbG9yLCB0aGlzLmcuZ2xvYmFsQWxwaGEgPSAuNywgdGhpcy5nLmFyYyh0aGlzLngsIHRoaXMueSwgMS41LCAwLCAyICogTWF0aC5QSSksIHRoaXMuZy5maWxsKClcclxuLy8gICB9LCBiID0gZnVuY3Rpb24oYSwgYikge1xyXG4vLyAgICAgICB0aGlzLmkgPSBhLCB0aGlzLmkuc2l6ZSA9IHtcclxuLy8gICAgICAgICAgIHdpZHRoOiB0aGlzLmkub2Zmc2V0V2lkdGgsXHJcbi8vICAgICAgICAgICBoZWlnaHQ6IHRoaXMuaS5vZmZzZXRIZWlnaHRcclxuLy8gICAgICAgfSwgYiA9IHZvaWQgMCAhPT0gYiA/IGIgOiB7fSwgdGhpcy5vcHRpb25zID0ge1xyXG4vLyAgICAgICAgICAgcGFydGljbGVDb2xvcjogdm9pZCAwICE9PSBiLnBhcnRpY2xlQ29sb3IgPyBiLnBhcnRpY2xlQ29sb3IgOiBcIiNmZmZcIixcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQ6IHZvaWQgMCAhPT0gYi5iYWNrZ3JvdW5kID8gYi5iYWNrZ3JvdW5kIDogXCIjMWEyNTJmXCIsXHJcbi8vICAgICAgICAgICBpbnRlcmFjdGl2ZTogdm9pZCAwICE9PSBiLmludGVyYWN0aXZlID8gYi5pbnRlcmFjdGl2ZSA6ICEwLFxyXG4vLyAgICAgICAgICAgdmVsb2NpdHk6IHRoaXMuc2V0VmVsb2NpdHkoYi5zcGVlZCksXHJcbi8vICAgICAgICAgICBkZW5zaXR5OiB0aGlzLmooYi5kZW5zaXR5KVxyXG4vLyAgICAgICB9LCB0aGlzLmluaXQoKVxyXG4vLyAgIH0sIGIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgaWYgKHRoaXMuayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHRoaXMuaS5hcHBlbmRDaGlsZCh0aGlzLmspLCB0aGlzLmwodGhpcy5rLCB7XHJcbi8vICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuLy8gICAgICAgICAgICAgICB0b3A6IDAsXHJcbi8vICAgICAgICAgICAgICAgbGVmdDogMCxcclxuLy8gICAgICAgICAgICAgICBib3R0b206IDAsXHJcbi8vICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbi8vICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbi8vICAgICAgICAgICAgICAgXCJ6LWluZGV4XCI6IDFcclxuLy8gICAgICAgICAgIH0pLCAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdCh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCkpIHRoaXMubCh0aGlzLmssIHtcclxuLy8gICAgICAgICAgIGJhY2tncm91bmQ6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgICBlbHNlIHtcclxuLy8gICAgICAgICAgIGlmICghL1xcLihnaWZ8anBnfGpwZWd8dGlmZnxwbmcpJC9pLnRlc3QodGhpcy5vcHRpb25zLmJhY2tncm91bmQpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgYmFja2dyb3VuZCBpbWFnZSBvciBoZXhhZGVjaW1hbCBjb2xvclwiKSwgITE7XHJcbi8vICAgICAgICAgICB0aGlzLmwodGhpcy5rLCB7XHJcbi8vICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3VybChcIicgKyB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCArICdcIikgbm8tcmVwZWF0IGNlbnRlcicsXHJcbi8vICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLXNpemVcIjogXCJjb3ZlclwiXHJcbi8vICAgICAgICAgICB9KVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGlmICghLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QodGhpcy5vcHRpb25zLnBhcnRpY2xlQ29sb3IpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgcGFydGljbGVDb2xvciBoZXhhZGVjaW1hbCBjb2xvclwiKSwgITE7XHJcbi8vICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSwgdGhpcy5pLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKSwgdGhpcy5nID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLCB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuaS5zaXplLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmkuc2l6ZS5oZWlnaHQsIHRoaXMubCh0aGlzLmksIHtcclxuLy8gICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCJcclxuLy8gICAgICAgfSksIHRoaXMubCh0aGlzLmNhbnZhcywge1xyXG4vLyAgICAgICAgICAgXCJ6LWluZGV4XCI6IFwiMjBcIixcclxuLy8gICAgICAgICAgIHRvcDogMCxcclxuLy8gICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCJcclxuLy8gICAgICAgfSksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgICAgICAgcmV0dXJuIHRoaXMuaS5vZmZzZXRXaWR0aCA9PT0gdGhpcy5pLnNpemUud2lkdGggJiYgdGhpcy5pLm9mZnNldEhlaWdodCA9PT0gdGhpcy5pLnNpemUuaGVpZ2h0ID8gITEgOiAodGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmkuc2l6ZS53aWR0aCA9IHRoaXMuaS5vZmZzZXRXaWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5pLnNpemUuaGVpZ2h0ID0gdGhpcy5pLm9mZnNldEhlaWdodCwgY2xlYXJUaW1lb3V0KHRoaXMubSksIHZvaWQodGhpcy5tID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgICB0aGlzLm8gPSBbXTtcclxuLy8gICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuY2FudmFzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5vcHRpb25zLmRlbnNpdHk7IGErKykgdGhpcy5vLnB1c2gobmV3IGModGhpcykpO1xyXG4vLyAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pbnRlcmFjdGl2ZSAmJiB0aGlzLm8ucHVzaCh0aGlzLnApLCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuLy8gICAgICAgICAgIH0uYmluZCh0aGlzKSwgNTAwKSkpXHJcbi8vICAgICAgIH0uYmluZCh0aGlzKSksIHRoaXMubyA9IFtdO1xyXG4vLyAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuY2FudmFzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5vcHRpb25zLmRlbnNpdHk7IGErKykgdGhpcy5vLnB1c2gobmV3IGModGhpcykpO1xyXG4vLyAgICAgICB0aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmUgJiYgKHRoaXMucCA9IG5ldyBjKHRoaXMpLCB0aGlzLnAudmVsb2NpdHkgPSB7XHJcbi8vICAgICAgICAgICB4OiAwLFxyXG4vLyAgICAgICAgICAgeTogMFxyXG4vLyAgICAgICB9LCB0aGlzLm8ucHVzaCh0aGlzLnApLCB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGEpIHtcclxuLy8gICAgICAgICAgIHRoaXMucC54ID0gYS5jbGllbnRYIC0gdGhpcy5jYW52YXMub2Zmc2V0TGVmdCwgdGhpcy5wLnkgPSBhLmNsaWVudFkgLSB0aGlzLmNhbnZhcy5vZmZzZXRUb3BcclxuLy8gICAgICAgfS5iaW5kKHRoaXMpKSwgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24oYSkge1xyXG4vLyAgICAgICAgICAgdGhpcy5wLnZlbG9jaXR5ID0ge1xyXG4vLyAgICAgICAgICAgICAgIHg6IChNYXRoLnJhbmRvbSgpIC0gLjUpICogdGhpcy5vcHRpb25zLnZlbG9jaXR5LFxyXG4vLyAgICAgICAgICAgICAgIHk6IChNYXRoLnJhbmRvbSgpIC0gLjUpICogdGhpcy5vcHRpb25zLnZlbG9jaXR5XHJcbi8vICAgICAgICAgICB9LCB0aGlzLnAgPSBuZXcgYyh0aGlzKSwgdGhpcy5wLnZlbG9jaXR5ID0ge1xyXG4vLyAgICAgICAgICAgICAgIHg6IDAsXHJcbi8vICAgICAgICAgICAgICAgeTogMFxyXG4vLyAgICAgICAgICAgfSwgdGhpcy5vLnB1c2godGhpcy5wKVxyXG4vLyAgICAgICB9LmJpbmQodGhpcykpKSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbi8vICAgfSwgYi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgIHRoaXMuZy5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCksIHRoaXMuZy5nbG9iYWxBbHBoYSA9IDE7XHJcbi8vICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5vLmxlbmd0aDsgYSsrKSB7XHJcbi8vICAgICAgICAgICB0aGlzLm9bYV0udXBkYXRlKCksIHRoaXMub1thXS5oKCk7XHJcbi8vICAgICAgICAgICBmb3IgKHZhciBiID0gdGhpcy5vLmxlbmd0aCAtIDE7IGIgPiBhOyBiLS0pIHtcclxuLy8gICAgICAgICAgICAgICB2YXIgYyA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLm9bYV0ueCAtIHRoaXMub1tiXS54LCAyKSArIE1hdGgucG93KHRoaXMub1thXS55IC0gdGhpcy5vW2JdLnksIDIpKTtcclxuLy8gICAgICAgICAgICAgICBjID4gMTIwIHx8ICh0aGlzLmcuYmVnaW5QYXRoKCksIHRoaXMuZy5zdHJva2VTdHlsZSA9IHRoaXMub3B0aW9ucy5wYXJ0aWNsZUNvbG9yLCB0aGlzLmcuZ2xvYmFsQWxwaGEgPSAoMTIwIC0gYykgLyAxMjAsIHRoaXMuZy5saW5lV2lkdGggPSAuNywgdGhpcy5nLm1vdmVUbyh0aGlzLm9bYV0ueCwgdGhpcy5vW2FdLnkpLCB0aGlzLmcubGluZVRvKHRoaXMub1tiXS54LCB0aGlzLm9bYl0ueSksIHRoaXMuZy5zdHJva2UoKSlcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAwICE9PSB0aGlzLm9wdGlvbnMudmVsb2NpdHkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbi8vICAgfSwgYi5wcm90b3R5cGUuc2V0VmVsb2NpdHkgPSBmdW5jdGlvbihhKSB7XHJcbi8vICAgICAgIHJldHVybiBcImZhc3RcIiA9PT0gYSA/IDEgOiBcInNsb3dcIiA9PT0gYSA/IC4zMyA6IFwibm9uZVwiID09PSBhID8gMCA6IC42NlxyXG4vLyAgIH0sIGIucHJvdG90eXBlLmogPSBmdW5jdGlvbihhKSB7XHJcbi8vICAgICAgIHJldHVybiBcImhpZ2hcIiA9PT0gYSA/IDVlMyA6IFwibG93XCIgPT09IGEgPyAyZTQgOiBpc05hTihwYXJzZUludChhLCAxMCkpID8gMWU0IDogYVxyXG4vLyAgIH0sIGIucHJvdG90eXBlLmwgPSBmdW5jdGlvbihhLCBiKSB7XHJcbi8vICAgICAgIGZvciAodmFyIGMgaW4gYikgYS5zdHlsZVtjXSA9IGJbY11cclxuLy8gICB9LCBiXHJcbi8vIH0pO1xyXG5cclxuLy8gdmFyIGNhbnZhc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWNsZS1jYW52YXMnKTtcclxuLy8gdmFyIG9wdGlvbnMgPSB7XHJcbi8vICAgcGFydGljbGVDb2xvcjogJyNlMzc1NzUnLFxyXG4vLyAgIGludGVyYWN0aXZlOiBmYWxzZSxcclxuLy8gICBzcGVlZDogJ21lZGl1bScsXHJcbi8vICAgZGVuc2l0eTogJ2hpZ2gnXHJcbi8vIH07XHJcbi8vIHZhciBwYXJ0aWNsZUNhbnZhcyA9IG5ldyBQYXJ0aWNsZU5ldHdvcmsoY2FudmFzRGl2LCBvcHRpb25zKTtcclxuLy8gLy9odHRwczovL2dpdGh1Yi5jb20vSnVsaWFuTGF2YWwvY2FudmFzLXBhcnRpY2xlLW5ldHdvcmtcclxuXHJcbi8vIExvYWQgaW1hZ2VzIG9ubHkgd2hlbiBwYWdlIGlzIGZ1bGx5IGxvYWRlZFxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciBpbWdEZWZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ0RlZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAoaW1nRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XHJcbiAgICAgIGltZ0RlZmVyW2ldLnNldEF0dHJpYnV0ZSgnc3JjJywgaW1nRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcblxyXG5cclxuLy8gdGlsdC5qc1xyXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XHJcbiAgJCgnLkJ1dHRvbngnKS50aWx0KHsgc2NhbGU6IDEuMSwgc3BlZWQ6IDEwMDAgfSk7XHJcbiAgJCgnLml0ZW0nKS50aWx0KHsgc2NhbGU6IDEuMSwgc3BlZWQ6IDEwMDAgfSk7XHJcbiAgJCgnLmNsaWVudC1ibG9jaycpLnRpbHQoeyBzY2FsZTogMS4xLCBzcGVlZDogMTAwMCB9KTtcclxuICBmdW5jdGlvbiByYW5kKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCArIDEpKSArIG1pbjtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9ob21lIHBhZ2UgdHlwZXJcclxuXHJcbiFmdW5jdGlvbiAodCkgeyB2YXIgciA9IGZ1bmN0aW9uIChyLCBlKSB7IHJldHVybiBcInJnYmEoMCwgMCwgMCwgMClcIiA9PT0gciAmJiAociA9IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIpLCB0KFwiPHNwYW4+PC9zcGFuPlwiKS5jc3MoXCJjb2xvclwiLCByKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGUpIH0sIGUgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodCkpICYmIGlzRmluaXRlKHQpIH0sIGEgPSBmdW5jdGlvbiAodCkgeyB0LnJlbW92ZURhdGEoW1widHlwZVBvc2l0aW9uXCIsIFwiaGlnaGxpZ2h0UG9zaXRpb25cIiwgXCJsZWZ0U3RvcFwiLCBcInJpZ2h0U3RvcFwiLCBcInByaW1hcnlDb2xvclwiLCBcImJhY2tncm91bmRDb2xvclwiLCBcInRleHRcIiwgXCJ0eXBpbmdcIl0pIH0sIG4gPSBmdW5jdGlvbiAodCkgeyB2YXIgciA9IHQuZGF0YShcInRleHRcIiksIGUgPSB0LmRhdGEoXCJvbGRMZWZ0XCIpLCBvID0gdC5kYXRhKFwib2xkUmlnaHRcIik7IHJldHVybiByICYmIDAgIT09IHIubGVuZ3RoID8gKHQudGV4dChlICsgci5jaGFyQXQoMCkgKyBvKS5kYXRhKHsgb2xkTGVmdDogZSArIHIuY2hhckF0KDApLCB0ZXh0OiByLnN1YnN0cmluZygxKSB9KSwgdm9pZCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbih0KSB9LCB0LmRhdGEoXCJ0eXBlck9wdGlvbnNcIikudHlwZVNwZWVkKSkgOiB2b2lkIGEodCkgfSwgbyA9IGZ1bmN0aW9uICh0KSB7IHQuZmluZChcInNwYW5cIikucmVtb3ZlKCksIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBuKHQpIH0sIHQuZGF0YShcInR5cGVyT3B0aW9uc1wiKS50eXBlRGVsYXkpIH0sIGkgPSBmdW5jdGlvbiAodCkgeyB2YXIgYSwgbiwgZCwgcCA9IHQuZGF0YShcImhpZ2hsaWdodFBvc2l0aW9uXCIpOyByZXR1cm4gZShwKSB8fCAocCA9IHQuZGF0YShcInJpZ2h0U3RvcFwiKSArIDEpLCBwIDw9IHQuZGF0YShcImxlZnRTdG9wXCIpID8gdm9pZCBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgbyh0KSB9LCB0LmRhdGEoXCJ0eXBlck9wdGlvbnNcIikuY2xlYXJEZWxheSkgOiAoYSA9IHQudGV4dCgpLnN1YnN0cmluZygwLCBwIC0gMSksIG4gPSB0LnRleHQoKS5zdWJzdHJpbmcocCAtIDEsIHQuZGF0YShcInJpZ2h0U3RvcFwiKSArIDEpLCBkID0gdC50ZXh0KCkuc3Vic3RyaW5nKHQuZGF0YShcInJpZ2h0U3RvcFwiKSArIDEpLCB0Lmh0bWwoYSkuYXBwZW5kKHIodC5kYXRhKFwiYmFja2dyb3VuZENvbG9yXCIpLCB0LmRhdGEoXCJwcmltYXJ5Q29sb3JcIikpLmFwcGVuZChuKSkuYXBwZW5kKGQpLCB0LmRhdGEoXCJoaWdobGlnaHRQb3NpdGlvblwiLCBwIC0gMSksIHZvaWQgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBpKHQpIH0sIHQuZGF0YShcInR5cGVyT3B0aW9uc1wiKS5oaWdobGlnaHRJbnRlcnZhbCkpIH0sIGQgPSBmdW5jdGlvbiAocikgeyB2YXIgZSwgYSA9IHIuZGF0YShcInR5cGVyT3B0aW9uc1wiKS5saW5rczsgaWYgKHIuZGF0YShcInR5cGVyT3B0aW9uc1wiKS5saW5rICYmIHIuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKSwgci5kYXRhKFwidHlwZXJPcHRpb25zXCIpLmxpbmsgJiYgci5pcyhcIjpob3ZlclwiKSAmJiBudWxsICE9IGEgJiYgci5jbGljayhmdW5jdGlvbiAodCkgeyB0LnByZXZlbnREZWZhdWx0KCksIHIuZGF0YShcInR5cGVyT3B0aW9uc1wiKS5yYW5kb20gJiYgbnVsbCAhPSBhW3IuZGF0YShcInJhbmRvbU51bWJlclwiKV0gPyB3aW5kb3cub3BlbihhW3IuZGF0YShcInJhbmRvbU51bWJlclwiKV0sIHIuZGF0YShcInR5cGVyT3B0aW9uc1wiKS5saW5rVGFyZ2V0KSA6IG51bGwgIT0gYVtyLmRhdGEoXCJjdXJyZW50SW5kZXhcIildICYmIHdpbmRvdy5vcGVuKGFbci5kYXRhKFwiY3VycmVudEluZGV4XCIpXSwgci5kYXRhKFwidHlwZXJPcHRpb25zXCIpLmxpbmtUYXJnZXQpIH0pLCAhKHIuZGF0YShcInR5cGluZ1wiKSB8fCByLmRhdGEoXCJ0eXBlck9wdGlvbnNcIikuc3RvcE9uSG92ZXIgJiYgci5pcyhcIjpob3ZlclwiKSkpIHsgdHJ5IHsgZSA9IEpTT04ucGFyc2Uoci5hdHRyKHIuZGF0YShcInR5cGVyT3B0aW9uc1wiKS50eXBlckRhdGFBdHRyKSkudGFyZ2V0cyB9IGNhdGNoIChuKSB7IH0gXCJ1bmRlZmluZWRcIiA9PSB0eXBlb2YgZSAmJiAoZSA9IHQubWFwKHIuYXR0cihyLmRhdGEoXCJ0eXBlck9wdGlvbnNcIikudHlwZXJEYXRhQXR0cikuc3BsaXQoXCIsXCIpLCBmdW5jdGlvbiAocikgeyByZXR1cm4gdC50cmltKHIpIH0pKSwgci5kYXRhKFwidHlwZXJPcHRpb25zXCIpLnJhbmRvbSA/IChyLmRhdGEoXCJyYW5kb21OdW1iZXJcIiwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZS5sZW5ndGgpKSwgci50eXBlVG8oZVtyLmRhdGEoXCJyYW5kb21OdW1iZXJcIildLCByLmRhdGEoXCJ0eXBlck9wdGlvbnNcIikpKSA6IChcInVuZGVmaW5lZFwiID09IHR5cGVvZiByLmRhdGEoXCJjdXJyZW50SW5kZXhcIikgPyByLmRhdGEoXCJjdXJyZW50SW5kZXhcIiwgMCkgOiByLmRhdGEoXCJjdXJyZW50SW5kZXhcIiwgci5kYXRhKFwiY3VycmVudEluZGV4XCIpICsgMSksIFwidW5kZWZpbmVkXCIgPT0gdHlwZW9mIGVbci5kYXRhKFwiY3VycmVudEluZGV4XCIpXSAmJiByLmRhdGEoXCJjdXJyZW50SW5kZXhcIiwgMCksIHIudHlwZVRvKGVbci5kYXRhKFwiY3VycmVudEluZGV4XCIpXSwgci5kYXRhKFwidHlwZXJPcHRpb25zXCIpKSkgfSB9OyB0LmZuLnR5cGVyID0gZnVuY3Rpb24gKHIpIHsgdmFyIGUgPSB0KHRoaXMpLCBhID0gdC5leHRlbmQoe30sIHQuZm4udHlwZXIuZGVmYXVsdHMsIHIpOyByZXR1cm4gZS5lYWNoKGZ1bmN0aW9uICgpIHsgdmFyIHIgPSB0KHRoaXMpOyBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiByLmF0dHIoYS50eXBlckRhdGFBdHRyKSAmJiAoci5kYXRhKFwidHlwZXJPcHRpb25zXCIsIGEpLCBkKHIpLCBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IGQocikgfSwgci5kYXRhKFwidHlwZXJPcHRpb25zXCIpLnR5cGVySW50ZXJ2YWwpKSB9KSB9LCB0LmZuLnR5cGVUbyA9IGZ1bmN0aW9uIChyLCBlKSB7IHZhciBhID0gdCh0aGlzKSwgbiA9IGEudGV4dCgpLCBvID0gdC5leHRlbmQoe30sIHQuZm4udHlwZXIuZGVmYXVsdHMsIGUpLCBkID0gMCwgcCA9IDA7IGlmIChuID09PSByKSByZXR1cm4gY29uc29sZS5sb2coXCJPdXIgc3RyaW5ncyBhcmUgZXF1YWwsIG5vdGhpbmcgdG8gdHlwZVwiKSwgYTsgaWYgKG4gIT09IGEuaHRtbCgpKSByZXR1cm4gY29uc29sZS5lcnJvcihcIlR5cGVyIGRvZXMgbm90IHdvcmsgb24gZWxlbWVudHMgd2l0aCBjaGlsZCBlbGVtZW50cy5cIiksIGE7IGlmIChhLmRhdGEoXCJ0eXBpbmdcIiwgITApLCBhLmRhdGEoXCJ0eXBlck9wdGlvbnNcIiwgbyksICFhLmRhdGEoXCJ0eXBlck9wdGlvbnNcIikud2hvbGVXb3JkKSB7IGZvciAoOyBuLmNoYXJBdChkKSA9PT0gci5jaGFyQXQoZCk7KWQrKzsgZm9yICg7IG4ucmlnaHRDaGFycyhwKSA9PT0gci5yaWdodENoYXJzKHApOylwKysgfSByZXR1cm4gciA9IHIuc3Vic3RyaW5nKGQsIHIubGVuZ3RoIC0gcCArIDEpLCBhLmRhdGEoeyBvbGRMZWZ0OiBuLnN1YnN0cmluZygwLCBkKSwgb2xkUmlnaHQ6IG4ucmlnaHRDaGFycyhwIC0gMSksIGxlZnRTdG9wOiBkLCByaWdodFN0b3A6IG4ubGVuZ3RoIC0gcCwgcHJpbWFyeUNvbG9yOiBhLmNzcyhcImNvbG9yXCIpLCBiYWNrZ3JvdW5kQ29sb3I6IGEuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKSwgdGV4dDogciB9KSwgaShhKSwgYSB9LCB0LmZuLnR5cGVyLmRlZmF1bHRzID0geyBoaWdobGlnaHRTcGVlZDogMjAsIHR5cGVTcGVlZDogMTAwLCBjbGVhckRlbGF5OiA1MDAsIHR5cGVEZWxheTogMjAwLCBjbGVhck9uSGlnaGxpZ2h0OiAhMCwgdHlwZXJEYXRhQXR0cjogXCJkYXRhLXR5cGVyLXRhcmdldHNcIiwgdHlwZXJJbnRlcnZhbDogMmUzLCByYW5kb206ICExLCB3aG9sZVdvcmQ6ICExLCBzdG9wT25Ib3ZlcjogITEsIGxpbms6ICExLCBsaW5rczogbnVsbCwgbGlua1RhcmdldDogXCJfYmxhbmtcIiB9LCBTdHJpbmcucHJvdG90eXBlLnJpZ2h0Q2hhcnMgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gMCA+PSB0ID8gXCJcIiA6IHQgPiB0aGlzLmxlbmd0aCA/IHRoaXMgOiB0aGlzLnN1YnN0cmluZyh0aGlzLmxlbmd0aCwgdGhpcy5sZW5ndGggLSB0KSB9IH0oalF1ZXJ5KTtcclxuXHJcbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcclxuICAkKCdbZGF0YS10eXBlci10YXJnZXRzXScpLnR5cGVyKHtcclxuICAgIHR5cGVySW50ZXJ2YWw6IDMwMDAsXHJcbiAgICB3aG9sZVdvcmQ6IHRydWUsXHJcbiAgfSk7XHJcbn0pOyJdfQ==

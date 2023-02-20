"use strict";
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return "Map" ===
      (n = "Object" === n && e.constructor ? e.constructor.name : n) ||
      "Set" === n
      ? Array.from(e)
      : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      ? _arrayLikeToArray(e, t)
      : void 0;
  }
}
function _iterableToArray(e) {
  if (
    ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
    null != e["@@iterator"]
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function ownKeys(t, e) {
  var n,
    r = Object.keys(t);
  return (
    Object.getOwnPropertySymbols &&
      ((n = Object.getOwnPropertySymbols(t)),
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
      r.push.apply(r, n)),
    r
  );
}
function _objectSpread(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {};
    e % 2
      ? ownKeys(Object(n), !0).forEach(function (e) {
          _defineProperty(t, e, n[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
  }
  return t;
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function slider(i, e) {
  var a,
    l,
    u,
    c,
    s,
    d,
    t,
    n,
    r,
    o = _objectSpread(
      _objectSpread({}, (null == e ? void 0 : e.responsive) || {}),
      {},
      {
        all: {
          show: (null == e ? void 0 : e.show) || 2,
          to: (null == e ? void 0 : e.to) || 1,
          gutter: (null == e ? void 0 : e.gutter) || 16,
        },
      }
    ),
    f = Object.keys(o)
      .filter(function (e) {
        return +e;
      })
      .map(function (e) {
        return +e;
      })
      .sort(function (e, t) {
        return e - t;
      }),
    h = Math.max.apply(
      Math,
      _toConsumableArray(
        Object.values(o).map(function (e) {
          return e.show || 0;
        })
      )
    ),
    v = o.all.to,
    p = o.all.gutter,
    y = (null == e ? void 0 : e.speed) || 500,
    m = null == e ? void 0 : e.auto,
    b = document.createElement("style"),
    w = i.firstElementChild,
    g = w.children,
    O = g.length,
    _ = Math.max(h, Math.ceil((5 * h - O) / 2)),
    j = [],
    A = [],
    E = 0,
    L = document.createDocumentFragment(),
    T = L.cloneNode(!0);
  if ((document.head.appendChild(b), b.sheet.insertRule(".s-i{}"), !(O <= h))) {
    if (_) {
      _toConsumableArray(g).forEach(function (e, t) {
        (e.dataset.id = t), e.classList.add("s-i"), A.push(t);
      });
      for (var C = _; C--; ) {
        var x = C % O,
          P = g[x].cloneNode(!0),
          x = g[O - 1 - x].cloneNode(!0);
        P.classList.add("clone"),
          T.insertBefore(P, T.firstChild),
          x.classList.add("clone"),
          L.appendChild(x);
      }
      w.insertBefore(L, w.firstChild),
        w.appendChild(T),
        _toConsumableArray(g).forEach(function (e) {
          return j.push(+e.dataset.id);
        }),
        I();
    }
    var S = function () {
        var e =
            []
              .concat(_toConsumableArray(f), [window.innerWidth])
              .sort(function (e, t) {
                return e - t;
              })
              .findIndex(function (e) {
                return e == window.innerWidth;
              }) - 1,
          e =
            ((p =
              -1 != e
                ? ((e = o[f[e]]),
                  (h = (null == e ? void 0 : e.show) || h),
                  (v = (null == e ? void 0 : e.to) || v),
                  (null == e ? void 0 : e.gutter) || p)
                : ((h = o.all.show), (v = o.all.to), o.all.gutter)),
            (r = (p * (h - 1)) / h),
            "calc((100% / ".concat(h, ") - ").concat(r, "px)")),
          t = b.sheet.cssRules[0].style;
        (t.maxWidth = e), (t.minWidth = e);
      },
      e =
        (S(),
        M(),
        i.addEventListener("mouseover", function () {
          l = !0;
        }),
        function (e) {
          var t, n, r, o;
          (u = !0),
            c && clearTimeout(c),
            e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (l = !0),
            (e.clientX || e.touches) &&
              ((t = i.getBoundingClientRect()),
              (n = (e.clientX || e.touches[0].clientX) - t.x),
              (r = E),
              (o = function (e) {
                s =
                  (-100 / h) * r -
                  (100 / window.innerWidth) * E * (p / h) -
                  ((n -
                    (e.clientX || (null == e ? void 0 : e.touches[0].clientX)) -
                    t.x) /
                    t.width) *
                    100;
              }),
              (d = function (e) {
                o(e),
                  (E = Math.round(Math.abs(s / (100 / h)))),
                  (s <= (j.length - h) * (-100 / h) || 0 <= s) &&
                    ((n =
                      (e.clientX ||
                        (null == e ? void 0 : e.touches[0].clientX)) - t.x),
                    a(0 <= s ? -1 : 1),
                    (r = E),
                    o(e)),
                  (w.style = "transform: translate3d(".concat(
                    s,
                    "%, 0px, 0px);transition:0s"
                  ));
              }),
              window.addEventListener("touchmove", d),
              window.addEventListener("mousemove", d));
        }),
      k = function () {
        u &&
          (window.removeEventListener("touchmove", d),
          window.removeEventListener("mousemove", d),
          (c = setTimeout(function () {
            return (l = !1);
          }, 2 * y)),
          s &&
            ((E = Math.round(Math.abs(s / (100 / h)))),
            W(y / 1e3 / 1.5),
            (s = 0)),
          (u = !1));
      };
    i.addEventListener("touchstart", e),
      i.addEventListener("mousedown", e),
      i.addEventListener("touchend", k),
      window.addEventListener("mouseup", k),
      i.addEventListener("mouseleave", function () {
        l = !1;
      }),
      window.addEventListener("resize", function () {
        t && clearTimeout(t),
          (t = setTimeout(function () {
            S(), I();
          }, 200));
      }),
      m &&
        setInterval(function () {
          l || M((null == m ? void 0 : m.deraction) || 1);
        }, (null == m ? void 0 : m.delay) || 2e3);
    return {
      click: function (e) {
        var t =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
        e.addEventListener("click", function () {
          clearTimeout(n),
            (l = !0),
            (n = setTimeout(function () {
              return (l = !1);
            }, 2 * y)),
            M(t);
        });
      },
    };
  }
  function I() {
    (E = _), W();
  }
  function M(e) {
    var t = 0 < arguments.length && void 0 !== e ? e : 1,
      e = E + v * t,
      n = e + v * t,
      o = [].concat(A).reverse();
    (a = function () {
      var e = j[E] - v,
        t = j[E] + h + v;
      if (
        (O < t && (t %= O),
        e < 0 && (e = o[-1 * e - 1]),
        -1 ==
          (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1))
      ) {
        for (var n = 0; n < j.length; n++)
          if (!(n <= E) && j[n] == j[E] && j[n - v] == e) {
            E = n;
            break;
          }
      } else
        for (var r = j.length; -1 < r; r--)
          if (!(E <= r) && j[r] == j[E] && j[r + h + v] == t) {
            E = r;
            break;
          }
      W(!1);
    }),
      t &&
        (0 <= e && e <= j.length - h && ((E = e), W()),
        (n < 0 || n > j.length - h) &&
          setTimeout(function () {
            return a(t);
          }, y));
  }
  function W(e) {
    e = 0 < arguments.length && void 0 !== e ? e : y / 1e3;
    w.style = "transform: translate3d("
      .concat(
        (-100 / h) * E - (100 / window.innerWidth) * E * (p / h),
        "%, 0px, 0px);"
      )
      .concat(e ? "transition: all ".concat(e, "s ease 0s") : "");
  }
}
!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function(t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 143));
})([
  function(e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(15),
      a = n(12),
      c = n(18),
      u = function(e, t, n) {
        var s,
          l,
          f,
          d,
          p = e & u.F,
          h = e & u.G,
          v = e & u.S,
          m = e & u.P,
          y = e & u.B,
          g = h ? r : v ? r[t] || (r[t] = {}) : (r[t] || {}).prototype,
          b = h ? i : i[t] || (i[t] = {}),
          w = b.prototype || (b.prototype = {});
        for (s in (h && (n = t), n))
          (f = ((l = !p && g && void 0 !== g[s]) ? g : n)[s]),
            (d =
              y && l
                ? c(f, r)
                : m && "function" == typeof f
                ? c(Function.call, f)
                : f),
            g && a(g, s, f, e & u.U),
            b[s] != f && o(b, s, d),
            m && w[s] != f && (w[s] = f);
      };
    (r.core = i),
      (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u);
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(144);
  },
  function(e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, n) {
    var r = n(5);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, n) {
    var r = n(51)("wks"),
      i = n(30),
      o = n(2).Symbol,
      a = "function" == typeof o;
    (e.exports = function(e) {
      return r[e] || (r[e] = (a && o[e]) || (a ? o : i)("Symbol." + e));
    }).store = r;
  },
  function(e, t, n) {
    var r = n(20),
      i = Math.min;
    e.exports = function(e) {
      return e > 0 ? i(r(e), 9007199254740991) : 0;
    };
  },
  function(e, t) {
    var n = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  function(e, t, n) {
    e.exports = !n(3)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(e, t, n) {
    var r = n(4),
      i = n(100),
      o = n(27),
      a = Object.defineProperty;
    t.f = n(9)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function(e, t, n) {
    var r = n(25);
    e.exports = function(e) {
      return Object(r(e));
    };
  },
  function(e, t, n) {
    var r = n(2),
      i = n(15),
      o = n(14),
      a = n(30)("src"),
      c = n(156),
      u = ("" + c).split("toString");
    (n(8).inspectSource = function(e) {
      return c.call(e);
    }),
      (e.exports = function(e, t, n, c) {
        var s = "function" == typeof n;
        s && (o(n, "name") || i(n, "name", t)),
          e[t] !== n &&
            (s && (o(n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))),
            e === r
              ? (e[t] = n)
              : c
              ? e[t]
                ? (e[t] = n)
                : i(e, t, n)
              : (delete e[t], i(e, t, n)));
      })(Function.prototype, "toString", function() {
        return ("function" == typeof this && this[a]) || c.call(this);
      });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(3),
      o = n(25),
      a = /"/g,
      c = function(e, t, n, r) {
        var i = String(o(e)),
          c = "<" + t;
        return (
          "" !== n &&
            (c += " " + n + '="' + String(r).replace(a, "&quot;") + '"'),
          c + ">" + i + "</" + t + ">"
        );
      };
    e.exports = function(e, t) {
      var n = {};
      (n[e] = t(c)),
        r(
          r.P +
            r.F *
              i(function() {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3;
              }),
          "String",
          n
        );
    };
  },
  function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t);
    };
  },
  function(e, t, n) {
    var r = n(10),
      i = n(29);
    e.exports = n(9)
      ? function(e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        };
  },
  function(e, t, n) {
    var r = n(46),
      i = n(25);
    e.exports = function(e) {
      return r(i(e));
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = function(e, t) {
      return (
        !!e &&
        r(function() {
          t ? e.call(null, function() {}, 1) : e.call(null);
        })
      );
    };
  },
  function(e, t, n) {
    var r = n(19);
    e.exports = function(e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t) {
    var n = Math.ceil,
      r = Math.floor;
    e.exports = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
    };
  },
  function(e, t, n) {
    var r = n(47),
      i = n(29),
      o = n(16),
      a = n(27),
      c = n(14),
      u = n(100),
      s = Object.getOwnPropertyDescriptor;
    t.f = n(9)
      ? s
      : function(e, t) {
          if (((e = o(e)), (t = a(t, !0)), u))
            try {
              return s(e, t);
            } catch (e) {}
          if (c(e, t)) return i(!r.f.call(e, t), e[t]);
        };
  },
  function(e, t, n) {
    var r = n(0),
      i = n(8),
      o = n(3);
    e.exports = function(e, t) {
      var n = (i.Object || {})[e] || Object[e],
        a = {};
      (a[e] = t(n)),
        r(
          r.S +
            r.F *
              o(function() {
                n(1);
              }),
          "Object",
          a
        );
    };
  },
  function(e, t, n) {
    var r = n(18),
      i = n(46),
      o = n(11),
      a = n(7),
      c = n(116);
    e.exports = function(e, t) {
      var n = 1 == e,
        u = 2 == e,
        s = 3 == e,
        l = 4 == e,
        f = 6 == e,
        d = 5 == e || f,
        p = t || c;
      return function(t, c, h) {
        for (
          var v,
            m,
            y = o(t),
            g = i(y),
            b = r(c, h, 3),
            w = a(g.length),
            S = 0,
            E = n ? p(t, w) : u ? p(t, 0) : void 0;
          w > S;
          S++
        )
          if ((d || S in g) && ((m = b((v = g[S]), S, y)), e))
            if (n) E[S] = m;
            else if (m)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return v;
                case 6:
                  return S;
                case 2:
                  E.push(v);
              }
            else if (l) return !1;
        return f ? -1 : s || l ? l : E;
      };
    };
  },
  function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
      return n.call(e).slice(8, -1);
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    if (n(9)) {
      var r = n(31),
        i = n(2),
        o = n(3),
        a = n(0),
        c = n(62),
        u = n(88),
        s = n(18),
        l = n(43),
        f = n(29),
        d = n(15),
        p = n(44),
        h = n(20),
        v = n(7),
        m = n(127),
        y = n(33),
        g = n(27),
        b = n(14),
        w = n(48),
        S = n(5),
        E = n(11),
        T = n(80),
        x = n(34),
        C = n(36),
        k = n(35).f,
        _ = n(82),
        P = n(30),
        R = n(6),
        O = n(23),
        M = n(52),
        I = n(49),
        L = n(84),
        N = n(41),
        A = n(55),
        D = n(42),
        j = n(83),
        F = n(118),
        U = n(10),
        z = n(21),
        W = U.f,
        V = z.f,
        B = i.RangeError,
        G = i.TypeError,
        $ = i.Uint8Array,
        H = Array.prototype,
        K = u.ArrayBuffer,
        Q = u.DataView,
        q = O(0),
        Y = O(2),
        J = O(3),
        X = O(4),
        Z = O(5),
        ee = O(6),
        te = M(!0),
        ne = M(!1),
        re = L.values,
        ie = L.keys,
        oe = L.entries,
        ae = H.lastIndexOf,
        ce = H.reduce,
        ue = H.reduceRight,
        se = H.join,
        le = H.sort,
        fe = H.slice,
        de = H.toString,
        pe = H.toLocaleString,
        he = R("iterator"),
        ve = R("toStringTag"),
        me = P("typed_constructor"),
        ye = P("def_constructor"),
        ge = c.CONSTR,
        be = c.TYPED,
        we = c.VIEW,
        Se = O(1, function(e, t) {
          return ke(I(e, e[ye]), t);
        }),
        Ee = o(function() {
          return 1 === new $(new Uint16Array([1]).buffer)[0];
        }),
        Te =
          !!$ &&
          !!$.prototype.set &&
          o(function() {
            new $(1).set({});
          }),
        xe = function(e, t) {
          var n = h(e);
          if (n < 0 || n % t) throw B("Wrong offset!");
          return n;
        },
        Ce = function(e) {
          if (S(e) && be in e) return e;
          throw G(e + " is not a typed array!");
        },
        ke = function(e, t) {
          if (!(S(e) && me in e))
            throw G("It is not a typed array constructor!");
          return new e(t);
        },
        _e = function(e, t) {
          return Pe(I(e, e[ye]), t);
        },
        Pe = function(e, t) {
          for (var n = 0, r = t.length, i = ke(e, r); r > n; ) i[n] = t[n++];
          return i;
        },
        Re = function(e, t, n) {
          W(e, t, {
            get: function() {
              return this._d[n];
            }
          });
        },
        Oe = function(e) {
          var t,
            n,
            r,
            i,
            o,
            a,
            c = E(e),
            u = arguments.length,
            l = u > 1 ? arguments[1] : void 0,
            f = void 0 !== l,
            d = _(c);
          if (null != d && !T(d)) {
            for (a = d.call(c), r = [], t = 0; !(o = a.next()).done; t++)
              r.push(o.value);
            c = r;
          }
          for (
            f && u > 2 && (l = s(l, arguments[2], 2)),
              t = 0,
              n = v(c.length),
              i = ke(this, n);
            n > t;
            t++
          )
            i[t] = f ? l(c[t], t) : c[t];
          return i;
        },
        Me = function() {
          for (var e = 0, t = arguments.length, n = ke(this, t); t > e; )
            n[e] = arguments[e++];
          return n;
        },
        Ie =
          !!$ &&
          o(function() {
            pe.call(new $(1));
          }),
        Le = function() {
          return pe.apply(Ie ? fe.call(Ce(this)) : Ce(this), arguments);
        },
        Ne = {
          copyWithin: function(e, t) {
            return F.call(
              Ce(this),
              e,
              t,
              arguments.length > 2 ? arguments[2] : void 0
            );
          },
          every: function(e) {
            return X(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          fill: function(e) {
            return j.apply(Ce(this), arguments);
          },
          filter: function(e) {
            return _e(
              this,
              Y(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0)
            );
          },
          find: function(e) {
            return Z(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          findIndex: function(e) {
            return ee(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          forEach: function(e) {
            q(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          indexOf: function(e) {
            return ne(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          includes: function(e) {
            return te(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          join: function(e) {
            return se.apply(Ce(this), arguments);
          },
          lastIndexOf: function(e) {
            return ae.apply(Ce(this), arguments);
          },
          map: function(e) {
            return Se(
              Ce(this),
              e,
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
          reduce: function(e) {
            return ce.apply(Ce(this), arguments);
          },
          reduceRight: function(e) {
            return ue.apply(Ce(this), arguments);
          },
          reverse: function() {
            for (
              var e, t = Ce(this).length, n = Math.floor(t / 2), r = 0;
              r < n;

            )
              (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
            return this;
          },
          some: function(e) {
            return J(Ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
          },
          sort: function(e) {
            return le.call(Ce(this), e);
          },
          subarray: function(e, t) {
            var n = Ce(this),
              r = n.length,
              i = y(e, r);
            return new (I(n, n[ye]))(
              n.buffer,
              n.byteOffset + i * n.BYTES_PER_ELEMENT,
              v((void 0 === t ? r : y(t, r)) - i)
            );
          }
        },
        Ae = function(e, t) {
          return _e(this, fe.call(Ce(this), e, t));
        },
        De = function(e) {
          Ce(this);
          var t = xe(arguments[1], 1),
            n = this.length,
            r = E(e),
            i = v(r.length),
            o = 0;
          if (i + t > n) throw B("Wrong length!");
          for (; o < i; ) this[t + o] = r[o++];
        },
        je = {
          entries: function() {
            return oe.call(Ce(this));
          },
          keys: function() {
            return ie.call(Ce(this));
          },
          values: function() {
            return re.call(Ce(this));
          }
        },
        Fe = function(e, t) {
          return (
            S(e) &&
            e[be] &&
            "symbol" != typeof t &&
            t in e &&
            String(+t) == String(t)
          );
        },
        Ue = function(e, t) {
          return Fe(e, (t = g(t, !0))) ? f(2, e[t]) : V(e, t);
        },
        ze = function(e, t, n) {
          return !(Fe(e, (t = g(t, !0))) && S(n) && b(n, "value")) ||
            b(n, "get") ||
            b(n, "set") ||
            n.configurable ||
            (b(n, "writable") && !n.writable) ||
            (b(n, "enumerable") && !n.enumerable)
            ? W(e, t, n)
            : ((e[t] = n.value), e);
        };
      ge || ((z.f = Ue), (U.f = ze)),
        a(a.S + a.F * !ge, "Object", {
          getOwnPropertyDescriptor: Ue,
          defineProperty: ze
        }),
        o(function() {
          de.call({});
        }) &&
          (de = pe = function() {
            return se.call(this);
          });
      var We = p({}, Ne);
      p(We, je),
        d(We, he, je.values),
        p(We, {
          slice: Ae,
          set: De,
          constructor: function() {},
          toString: de,
          toLocaleString: Le
        }),
        Re(We, "buffer", "b"),
        Re(We, "byteOffset", "o"),
        Re(We, "byteLength", "l"),
        Re(We, "length", "e"),
        W(We, ve, {
          get: function() {
            return this[be];
          }
        }),
        (e.exports = function(e, t, n, u) {
          var s = e + ((u = !!u) ? "Clamped" : "") + "Array",
            f = "get" + e,
            p = "set" + e,
            h = i[s],
            y = h || {},
            g = h && C(h),
            b = !h || !c.ABV,
            E = {},
            T = h && h.prototype,
            _ = function(e, n) {
              W(e, n, {
                get: function() {
                  return (function(e, n) {
                    var r = e._d;
                    return r.v[f](n * t + r.o, Ee);
                  })(this, n);
                },
                set: function(e) {
                  return (function(e, n, r) {
                    var i = e._d;
                    u &&
                      (r =
                        (r = Math.round(r)) < 0 ? 0 : r > 255 ? 255 : 255 & r),
                      i.v[p](n * t + i.o, r, Ee);
                  })(this, n, e);
                },
                enumerable: !0
              });
            };
          b
            ? ((h = n(function(e, n, r, i) {
                l(e, h, s, "_d");
                var o,
                  a,
                  c,
                  u,
                  f = 0,
                  p = 0;
                if (S(n)) {
                  if (
                    !(
                      n instanceof K ||
                      "ArrayBuffer" == (u = w(n)) ||
                      "SharedArrayBuffer" == u
                    )
                  )
                    return be in n ? Pe(h, n) : Oe.call(h, n);
                  (o = n), (p = xe(r, t));
                  var y = n.byteLength;
                  if (void 0 === i) {
                    if (y % t) throw B("Wrong length!");
                    if ((a = y - p) < 0) throw B("Wrong length!");
                  } else if ((a = v(i) * t) + p > y) throw B("Wrong length!");
                  c = a / t;
                } else (c = m(n)), (o = new K((a = c * t)));
                for (
                  d(e, "_d", { b: o, o: p, l: a, e: c, v: new Q(o) });
                  f < c;

                )
                  _(e, f++);
              })),
              (T = h.prototype = x(We)),
              d(T, "constructor", h))
            : (o(function() {
                h(1);
              }) &&
                o(function() {
                  new h(-1);
                }) &&
                A(function(e) {
                  new h(), new h(null), new h(1.5), new h(e);
                }, !0)) ||
              ((h = n(function(e, n, r, i) {
                var o;
                return (
                  l(e, h, s),
                  S(n)
                    ? n instanceof K ||
                      "ArrayBuffer" == (o = w(n)) ||
                      "SharedArrayBuffer" == o
                      ? void 0 !== i
                        ? new y(n, xe(r, t), i)
                        : void 0 !== r
                        ? new y(n, xe(r, t))
                        : new y(n)
                      : be in n
                      ? Pe(h, n)
                      : Oe.call(h, n)
                    : new y(m(n))
                );
              })),
              q(g !== Function.prototype ? k(y).concat(k(g)) : k(y), function(
                e
              ) {
                e in h || d(h, e, y[e]);
              }),
              (h.prototype = T),
              r || (T.constructor = h));
          var P = T[he],
            R = !!P && ("values" == P.name || null == P.name),
            O = je.values;
          d(h, me, !0),
            d(T, be, s),
            d(T, we, !0),
            d(T, ye, h),
            (u ? new h(1)[ve] == s : ve in T) ||
              W(T, ve, {
                get: function() {
                  return s;
                }
              }),
            (E[s] = h),
            a(a.G + a.W + a.F * (h != y), E),
            a(a.S, s, { BYTES_PER_ELEMENT: t }),
            a(
              a.S +
                a.F *
                  o(function() {
                    y.of.call(h, 1);
                  }),
              s,
              { from: Oe, of: Me }
            ),
            "BYTES_PER_ELEMENT" in T || d(T, "BYTES_PER_ELEMENT", t),
            a(a.P, s, Ne),
            D(s),
            a(a.P + a.F * Te, s, { set: De }),
            a(a.P + a.F * !R, s, je),
            r || T.toString == de || (T.toString = de),
            a(
              a.P +
                a.F *
                  o(function() {
                    new h(1).slice();
                  }),
              s,
              { slice: Ae }
            ),
            a(
              a.P +
                a.F *
                  (o(function() {
                    return (
                      [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
                    );
                  }) ||
                    !o(function() {
                      T.toLocaleString.call([1, 2]);
                    })),
              s,
              { toLocaleString: Le }
            ),
            (N[s] = R ? P : O),
            r || R || d(T, he, O);
        });
    } else e.exports = function() {};
  },
  function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t, n) {
    var r = n(30)("meta"),
      i = n(5),
      o = n(14),
      a = n(10).f,
      c = 0,
      u =
        Object.isExtensible ||
        function() {
          return !0;
        },
      s = !n(3)(function() {
        return u(Object.preventExtensions({}));
      }),
      l = function(e) {
        a(e, r, { value: { i: "O" + ++c, w: {} } });
      },
      f = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey: function(e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!o(e, r)) {
            if (!u(e)) return "F";
            if (!t) return "E";
            l(e);
          }
          return e[r].i;
        },
        getWeak: function(e, t) {
          if (!o(e, r)) {
            if (!u(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[r].w;
        },
        onFreeze: function(e) {
          return s && f.NEED && u(e) && !o(e, r) && l(e), e;
        }
      });
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  function(e, t) {
    var n = 0,
      r = Math.random();
    e.exports = function(e) {
      return "Symbol(".concat(
        void 0 === e ? "" : e,
        ")_",
        (++n + r).toString(36)
      );
    };
  },
  function(e, t) {
    e.exports = !1;
  },
  function(e, t, n) {
    var r = n(102),
      i = n(67);
    e.exports =
      Object.keys ||
      function(e) {
        return r(e, i);
      };
  },
  function(e, t, n) {
    var r = n(20),
      i = Math.max,
      o = Math.min;
    e.exports = function(e, t) {
      return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t);
    };
  },
  function(e, t, n) {
    var r = n(4),
      i = n(103),
      o = n(67),
      a = n(66)("IE_PROTO"),
      c = function() {},
      u = function() {
        var e,
          t = n(64)("iframe"),
          r = o.length;
        for (
          t.style.display = "none",
            n(68).appendChild(t),
            t.src = "javascript:",
            (e = t.contentWindow.document).open(),
            e.write("<script>document.F=Object</script>"),
            e.close(),
            u = e.F;
          r--;

        )
          delete u.prototype[o[r]];
        return u();
      };
    e.exports =
      Object.create ||
      function(e, t) {
        var n;
        return (
          null !== e
            ? ((c.prototype = r(e)),
              (n = new c()),
              (c.prototype = null),
              (n[a] = e))
            : (n = u()),
          void 0 === t ? n : i(n, t)
        );
      };
  },
  function(e, t, n) {
    var r = n(102),
      i = n(67).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function(e) {
        return r(e, i);
      };
  },
  function(e, t, n) {
    var r = n(14),
      i = n(11),
      o = n(66)("IE_PROTO"),
      a = Object.prototype;
    e.exports =
      Object.getPrototypeOf ||
      function(e) {
        return (
          (e = i(e)),
          r(e, o)
            ? e[o]
            : "function" == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? a
            : null
        );
      };
  },
  function(e, t, n) {
    var r = n(6)("unscopables"),
      i = Array.prototype;
    null == i[r] && n(15)(i, r, {}),
      (e.exports = function(e) {
        i[r][e] = !0;
      });
  },
  function(e, t, n) {
    var r = n(5);
    e.exports = function(e, t) {
      if (!r(e) || e._t !== t)
        throw TypeError("Incompatible receiver, " + t + " required!");
      return e;
    };
  },
  function(e, t, n) {
    var r = n(10).f,
      i = n(14),
      o = n(6)("toStringTag");
    e.exports = function(e, t, n) {
      e &&
        !i((e = n ? e : e.prototype), o) &&
        r(e, o, { configurable: !0, value: t });
    };
  },
  function(e, t, n) {
    var r = n(0),
      i = n(25),
      o = n(3),
      a = n(70),
      c = "[" + a + "]",
      u = RegExp("^" + c + c + "*"),
      s = RegExp(c + c + "*$"),
      l = function(e, t, n) {
        var i = {},
          c = o(function() {
            return !!a[e]() || "​" != "​"[e]();
          }),
          u = (i[e] = c ? t(f) : a[e]);
        n && (i[n] = u), r(r.P + r.F * c, "String", i);
      },
      f = (l.trim = function(e, t) {
        return (
          (e = String(i(e))),
          1 & t && (e = e.replace(u, "")),
          2 & t && (e = e.replace(s, "")),
          e
        );
      });
    e.exports = l;
  },
  function(e, t) {
    e.exports = {};
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = n(10),
      o = n(9),
      a = n(6)("species");
    e.exports = function(e) {
      var t = r[e];
      o &&
        t &&
        !t[a] &&
        i.f(t, a, {
          configurable: !0,
          get: function() {
            return this;
          }
        });
    };
  },
  function(e, t) {
    e.exports = function(e, t, n, r) {
      if (!(e instanceof t) || (void 0 !== r && r in e))
        throw TypeError(n + ": incorrect invocation!");
      return e;
    };
  },
  function(e, t, n) {
    var r = n(12);
    e.exports = function(e, t, n) {
      for (var i in t) r(e, i, t[i], n);
      return e;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = {
      generateIdentifier: function() {
        return Math.random()
          .toString(36)
          .substr(2, 10);
      }
    };
    (r.localCName = r.generateIdentifier()),
      (r.splitLines = function(e) {
        return e
          .trim()
          .split("\n")
          .map(function(e) {
            return e.trim();
          });
      }),
      (r.splitSections = function(e) {
        return e.split("\nm=").map(function(e, t) {
          return (t > 0 ? "m=" + e : e).trim() + "\r\n";
        });
      }),
      (r.getDescription = function(e) {
        var t = r.splitSections(e);
        return t && t[0];
      }),
      (r.getMediaSections = function(e) {
        var t = r.splitSections(e);
        return t.shift(), t;
      }),
      (r.matchPrefix = function(e, t) {
        return r.splitLines(e).filter(function(e) {
          return 0 === e.indexOf(t);
        });
      }),
      (r.parseCandidate = function(e) {
        for (
          var t,
            n = {
              foundation: (t =
                0 === e.indexOf("a=candidate:")
                  ? e.substring(12).split(" ")
                  : e.substring(10).split(" "))[0],
              component: parseInt(t[1], 10),
              protocol: t[2].toLowerCase(),
              priority: parseInt(t[3], 10),
              ip: t[4],
              address: t[4],
              port: parseInt(t[5], 10),
              type: t[7]
            },
            r = 8;
          r < t.length;
          r += 2
        )
          switch (t[r]) {
            case "raddr":
              n.relatedAddress = t[r + 1];
              break;
            case "rport":
              n.relatedPort = parseInt(t[r + 1], 10);
              break;
            case "tcptype":
              n.tcpType = t[r + 1];
              break;
            case "ufrag":
              (n.ufrag = t[r + 1]), (n.usernameFragment = t[r + 1]);
              break;
            default:
              n[t[r]] = t[r + 1];
          }
        return n;
      }),
      (r.writeCandidate = function(e) {
        var t = [];
        t.push(e.foundation),
          t.push(e.component),
          t.push(e.protocol.toUpperCase()),
          t.push(e.priority),
          t.push(e.address || e.ip),
          t.push(e.port);
        var n = e.type;
        return (
          t.push("typ"),
          t.push(n),
          "host" !== n &&
            e.relatedAddress &&
            e.relatedPort &&
            (t.push("raddr"),
            t.push(e.relatedAddress),
            t.push("rport"),
            t.push(e.relatedPort)),
          e.tcpType &&
            "tcp" === e.protocol.toLowerCase() &&
            (t.push("tcptype"), t.push(e.tcpType)),
          (e.usernameFragment || e.ufrag) &&
            (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
          "candidate:" + t.join(" ")
        );
      }),
      (r.parseIceOptions = function(e) {
        return e.substr(14).split(" ");
      }),
      (r.parseRtpMap = function(e) {
        var t = e.substr(9).split(" "),
          n = { payloadType: parseInt(t.shift(), 10) };
        return (
          (t = t[0].split("/")),
          (n.name = t[0]),
          (n.clockRate = parseInt(t[1], 10)),
          (n.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
          (n.numChannels = n.channels),
          n
        );
      }),
      (r.writeRtpMap = function(e) {
        var t = e.payloadType;
        void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
        var n = e.channels || e.numChannels || 1;
        return (
          "a=rtpmap:" +
          t +
          " " +
          e.name +
          "/" +
          e.clockRate +
          (1 !== n ? "/" + n : "") +
          "\r\n"
        );
      }),
      (r.parseExtmap = function(e) {
        var t = e.substr(9).split(" ");
        return {
          id: parseInt(t[0], 10),
          direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
          uri: t[1]
        };
      }),
      (r.writeExtmap = function(e) {
        return (
          "a=extmap:" +
          (e.id || e.preferredId) +
          (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") +
          " " +
          e.uri +
          "\r\n"
        );
      }),
      (r.parseFmtp = function(e) {
        for (
          var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0;
          i < r.length;
          i++
        )
          n[(t = r[i].trim().split("="))[0].trim()] = t[1];
        return n;
      }),
      (r.writeFmtp = function(e) {
        var t = "",
          n = e.payloadType;
        if (
          (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
          e.parameters && Object.keys(e.parameters).length)
        ) {
          var r = [];
          Object.keys(e.parameters).forEach(function(t) {
            e.parameters[t] ? r.push(t + "=" + e.parameters[t]) : r.push(t);
          }),
            (t += "a=fmtp:" + n + " " + r.join(";") + "\r\n");
        }
        return t;
      }),
      (r.parseRtcpFb = function(e) {
        var t = e.substr(e.indexOf(" ") + 1).split(" ");
        return { type: t.shift(), parameter: t.join(" ") };
      }),
      (r.writeRtcpFb = function(e) {
        var t = "",
          n = e.payloadType;
        return (
          void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType),
          e.rtcpFeedback &&
            e.rtcpFeedback.length &&
            e.rtcpFeedback.forEach(function(e) {
              t +=
                "a=rtcp-fb:" +
                n +
                " " +
                e.type +
                (e.parameter && e.parameter.length ? " " + e.parameter : "") +
                "\r\n";
            }),
          t
        );
      }),
      (r.parseSsrcMedia = function(e) {
        var t = e.indexOf(" "),
          n = { ssrc: parseInt(e.substr(7, t - 7), 10) },
          r = e.indexOf(":", t);
        return (
          r > -1
            ? ((n.attribute = e.substr(t + 1, r - t - 1)),
              (n.value = e.substr(r + 1)))
            : (n.attribute = e.substr(t + 1)),
          n
        );
      }),
      (r.parseSsrcGroup = function(e) {
        var t = e.substr(13).split(" ");
        return {
          semantics: t.shift(),
          ssrcs: t.map(function(e) {
            return parseInt(e, 10);
          })
        };
      }),
      (r.getMid = function(e) {
        var t = r.matchPrefix(e, "a=mid:")[0];
        if (t) return t.substr(6);
      }),
      (r.parseFingerprint = function(e) {
        var t = e.substr(14).split(" ");
        return { algorithm: t[0].toLowerCase(), value: t[1] };
      }),
      (r.getDtlsParameters = function(e, t) {
        return {
          role: "auto",
          fingerprints: r
            .matchPrefix(e + t, "a=fingerprint:")
            .map(r.parseFingerprint)
        };
      }),
      (r.writeDtlsParameters = function(e, t) {
        var n = "a=setup:" + t + "\r\n";
        return (
          e.fingerprints.forEach(function(e) {
            n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
          }),
          n
        );
      }),
      (r.parseCryptoLine = function(e) {
        var t = e.substr(9).split(" ");
        return {
          tag: parseInt(t[0], 10),
          cryptoSuite: t[1],
          keyParams: t[2],
          sessionParams: t.slice(3)
        };
      }),
      (r.writeCryptoLine = function(e) {
        return (
          "a=crypto:" +
          e.tag +
          " " +
          e.cryptoSuite +
          " " +
          ("object" == typeof e.keyParams
            ? r.writeCryptoKeyParams(e.keyParams)
            : e.keyParams) +
          (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
          "\r\n"
        );
      }),
      (r.parseCryptoKeyParams = function(e) {
        if (0 !== e.indexOf("inline:")) return null;
        var t = e.substr(7).split("|");
        return {
          keyMethod: "inline",
          keySalt: t[0],
          lifeTime: t[1],
          mkiValue: t[2] ? t[2].split(":")[0] : void 0,
          mkiLength: t[2] ? t[2].split(":")[1] : void 0
        };
      }),
      (r.writeCryptoKeyParams = function(e) {
        return (
          e.keyMethod +
          ":" +
          e.keySalt +
          (e.lifeTime ? "|" + e.lifeTime : "") +
          (e.mkiValue && e.mkiLength
            ? "|" + e.mkiValue + ":" + e.mkiLength
            : "")
        );
      }),
      (r.getCryptoParameters = function(e, t) {
        return r.matchPrefix(e + t, "a=crypto:").map(r.parseCryptoLine);
      }),
      (r.getIceParameters = function(e, t) {
        var n = r.matchPrefix(e + t, "a=ice-ufrag:")[0],
          i = r.matchPrefix(e + t, "a=ice-pwd:")[0];
        return n && i
          ? { usernameFragment: n.substr(12), password: i.substr(10) }
          : null;
      }),
      (r.writeIceParameters = function(e) {
        return (
          "a=ice-ufrag:" +
          e.usernameFragment +
          "\r\na=ice-pwd:" +
          e.password +
          "\r\n"
        );
      }),
      (r.parseRtpParameters = function(e) {
        for (
          var t = {
              codecs: [],
              headerExtensions: [],
              fecMechanisms: [],
              rtcp: []
            },
            n = r.splitLines(e)[0].split(" "),
            i = 3;
          i < n.length;
          i++
        ) {
          var o = n[i],
            a = r.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
          if (a) {
            var c = r.parseRtpMap(a),
              u = r.matchPrefix(e, "a=fmtp:" + o + " ");
            switch (
              ((c.parameters = u.length ? r.parseFmtp(u[0]) : {}),
              (c.rtcpFeedback = r
                .matchPrefix(e, "a=rtcp-fb:" + o + " ")
                .map(r.parseRtcpFb)),
              t.codecs.push(c),
              c.name.toUpperCase())
            ) {
              case "RED":
              case "ULPFEC":
                t.fecMechanisms.push(c.name.toUpperCase());
            }
          }
        }
        return (
          r.matchPrefix(e, "a=extmap:").forEach(function(e) {
            t.headerExtensions.push(r.parseExtmap(e));
          }),
          t
        );
      }),
      (r.writeRtpDescription = function(e, t) {
        var n = "";
        (n += "m=" + e + " "),
          (n += t.codecs.length > 0 ? "9" : "0"),
          (n += " UDP/TLS/RTP/SAVPF "),
          (n +=
            t.codecs
              .map(function(e) {
                return void 0 !== e.preferredPayloadType
                  ? e.preferredPayloadType
                  : e.payloadType;
              })
              .join(" ") + "\r\n"),
          (n += "c=IN IP4 0.0.0.0\r\n"),
          (n += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
          t.codecs.forEach(function(e) {
            (n += r.writeRtpMap(e)),
              (n += r.writeFmtp(e)),
              (n += r.writeRtcpFb(e));
          });
        var i = 0;
        return (
          t.codecs.forEach(function(e) {
            e.maxptime > i && (i = e.maxptime);
          }),
          i > 0 && (n += "a=maxptime:" + i + "\r\n"),
          (n += "a=rtcp-mux\r\n"),
          t.headerExtensions &&
            t.headerExtensions.forEach(function(e) {
              n += r.writeExtmap(e);
            }),
          n
        );
      }),
      (r.parseRtpEncodingParameters = function(e) {
        var t,
          n = [],
          i = r.parseRtpParameters(e),
          o = -1 !== i.fecMechanisms.indexOf("RED"),
          a = -1 !== i.fecMechanisms.indexOf("ULPFEC"),
          c = r
            .matchPrefix(e, "a=ssrc:")
            .map(function(e) {
              return r.parseSsrcMedia(e);
            })
            .filter(function(e) {
              return "cname" === e.attribute;
            }),
          u = c.length > 0 && c[0].ssrc,
          s = r.matchPrefix(e, "a=ssrc-group:FID").map(function(e) {
            return e
              .substr(17)
              .split(" ")
              .map(function(e) {
                return parseInt(e, 10);
              });
          });
        s.length > 0 && s[0].length > 1 && s[0][0] === u && (t = s[0][1]),
          i.codecs.forEach(function(e) {
            if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
              var r = {
                ssrc: u,
                codecPayloadType: parseInt(e.parameters.apt, 10)
              };
              u && t && (r.rtx = { ssrc: t }),
                n.push(r),
                o &&
                  (((r = JSON.parse(JSON.stringify(r))).fec = {
                    ssrc: u,
                    mechanism: a ? "red+ulpfec" : "red"
                  }),
                  n.push(r));
            }
          }),
          0 === n.length && u && n.push({ ssrc: u });
        var l = r.matchPrefix(e, "b=");
        return (
          l.length &&
            ((l =
              0 === l[0].indexOf("b=TIAS:")
                ? parseInt(l[0].substr(7), 10)
                : 0 === l[0].indexOf("b=AS:")
                ? 1e3 * parseInt(l[0].substr(5), 10) * 0.95 - 16e3
                : void 0),
            n.forEach(function(e) {
              e.maxBitrate = l;
            })),
          n
        );
      }),
      (r.parseRtcpParameters = function(e) {
        var t = {},
          n = r
            .matchPrefix(e, "a=ssrc:")
            .map(function(e) {
              return r.parseSsrcMedia(e);
            })
            .filter(function(e) {
              return "cname" === e.attribute;
            })[0];
        n && ((t.cname = n.value), (t.ssrc = n.ssrc));
        var i = r.matchPrefix(e, "a=rtcp-rsize");
        (t.reducedSize = i.length > 0), (t.compound = 0 === i.length);
        var o = r.matchPrefix(e, "a=rtcp-mux");
        return (t.mux = o.length > 0), t;
      }),
      (r.parseMsid = function(e) {
        var t,
          n = r.matchPrefix(e, "a=msid:");
        if (1 === n.length)
          return { stream: (t = n[0].substr(7).split(" "))[0], track: t[1] };
        var i = r
          .matchPrefix(e, "a=ssrc:")
          .map(function(e) {
            return r.parseSsrcMedia(e);
          })
          .filter(function(e) {
            return "msid" === e.attribute;
          });
        return i.length > 0
          ? { stream: (t = i[0].value.split(" "))[0], track: t[1] }
          : void 0;
      }),
      (r.parseSctpDescription = function(e) {
        var t,
          n = r.parseMLine(e),
          i = r.matchPrefix(e, "a=max-message-size:");
        i.length > 0 && (t = parseInt(i[0].substr(19), 10)),
          isNaN(t) && (t = 65536);
        var o = r.matchPrefix(e, "a=sctp-port:");
        if (o.length > 0)
          return {
            port: parseInt(o[0].substr(12), 10),
            protocol: n.fmt,
            maxMessageSize: t
          };
        if (r.matchPrefix(e, "a=sctpmap:").length > 0) {
          var a = r
            .matchPrefix(e, "a=sctpmap:")[0]
            .substr(10)
            .split(" ");
          return {
            port: parseInt(a[0], 10),
            protocol: a[1],
            maxMessageSize: t
          };
        }
      }),
      (r.writeSctpDescription = function(e, t) {
        var n = [];
        return (
          (n =
            "DTLS/SCTP" !== e.protocol
              ? [
                  "m=" +
                    e.kind +
                    " 9 " +
                    e.protocol +
                    " " +
                    t.protocol +
                    "\r\n",
                  "c=IN IP4 0.0.0.0\r\n",
                  "a=sctp-port:" + t.port + "\r\n"
                ]
              : [
                  "m=" + e.kind + " 9 " + e.protocol + " " + t.port + "\r\n",
                  "c=IN IP4 0.0.0.0\r\n",
                  "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n"
                ]),
          void 0 !== t.maxMessageSize &&
            n.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
          n.join("")
        );
      }),
      (r.generateSessionId = function() {
        return Math.random()
          .toString()
          .substr(2, 21);
      }),
      (r.writeSessionBoilerplate = function(e, t, n) {
        var i = void 0 !== t ? t : 2;
        return (
          "v=0\r\no=" +
          (n || "thisisadapterortc") +
          " " +
          (e || r.generateSessionId()) +
          " " +
          i +
          " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
        );
      }),
      (r.writeMediaSection = function(e, t, n, i) {
        var o = r.writeRtpDescription(e.kind, t);
        if (
          ((o += r.writeIceParameters(e.iceGatherer.getLocalParameters())),
          (o += r.writeDtlsParameters(
            e.dtlsTransport.getLocalParameters(),
            "offer" === n ? "actpass" : "active"
          )),
          (o += "a=mid:" + e.mid + "\r\n"),
          e.direction
            ? (o += "a=" + e.direction + "\r\n")
            : e.rtpSender && e.rtpReceiver
            ? (o += "a=sendrecv\r\n")
            : e.rtpSender
            ? (o += "a=sendonly\r\n")
            : e.rtpReceiver
            ? (o += "a=recvonly\r\n")
            : (o += "a=inactive\r\n"),
          e.rtpSender)
        ) {
          var a = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
          (o += "a=" + a),
            (o += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + a),
            e.sendEncodingParameters[0].rtx &&
              ((o +=
                "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + a),
              (o +=
                "a=ssrc-group:FID " +
                e.sendEncodingParameters[0].ssrc +
                " " +
                e.sendEncodingParameters[0].rtx.ssrc +
                "\r\n"));
        }
        return (
          (o +=
            "a=ssrc:" +
            e.sendEncodingParameters[0].ssrc +
            " cname:" +
            r.localCName +
            "\r\n"),
          e.rtpSender &&
            e.sendEncodingParameters[0].rtx &&
            (o +=
              "a=ssrc:" +
              e.sendEncodingParameters[0].rtx.ssrc +
              " cname:" +
              r.localCName +
              "\r\n"),
          o
        );
      }),
      (r.getDirection = function(e, t) {
        for (var n = r.splitLines(e), i = 0; i < n.length; i++)
          switch (n[i]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
              return n[i].substr(2);
          }
        return t ? r.getDirection(t) : "sendrecv";
      }),
      (r.getKind = function(e) {
        return r
          .splitLines(e)[0]
          .split(" ")[0]
          .substr(2);
      }),
      (r.isRejected = function(e) {
        return "0" === e.split(" ", 2)[1];
      }),
      (r.parseMLine = function(e) {
        var t = r
          .splitLines(e)[0]
          .substr(2)
          .split(" ");
        return {
          kind: t[0],
          port: parseInt(t[1], 10),
          protocol: t[2],
          fmt: t.slice(3).join(" ")
        };
      }),
      (r.parseOLine = function(e) {
        var t = r
          .matchPrefix(e, "o=")[0]
          .substr(2)
          .split(" ");
        return {
          username: t[0],
          sessionId: t[1],
          sessionVersion: parseInt(t[2], 10),
          netType: t[3],
          addressType: t[4],
          address: t[5]
        };
      }),
      (r.isValidSDP = function(e) {
        if ("string" != typeof e || 0 === e.length) return !1;
        for (var t = r.splitLines(e), n = 0; n < t.length; n++)
          if (t[n].length < 2 || "=" !== t[n].charAt(1)) return !1;
        return !0;
      }),
      (e.exports = r);
  },
  function(e, t, n) {
    var r = n(24);
    e.exports = Object("z").propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return "String" == r(e) ? e.split("") : Object(e);
        };
  },
  function(e, t) {
    t.f = {}.propertyIsEnumerable;
  },
  function(e, t, n) {
    var r = n(24),
      i = n(6)("toStringTag"),
      o =
        "Arguments" ==
        r(
          (function() {
            return arguments;
          })()
        );
    e.exports = function(e) {
      var t, n, a;
      return void 0 === e
        ? "Undefined"
        : null === e
        ? "Null"
        : "string" ==
          typeof (n = (function(e, t) {
            try {
              return e[t];
            } catch (e) {}
          })((t = Object(e)), i))
        ? n
        : o
        ? r(t)
        : "Object" == (a = r(t)) && "function" == typeof t.callee
        ? "Arguments"
        : a;
    };
  },
  function(e, t, n) {
    var r = n(4),
      i = n(19),
      o = n(6)("species");
    e.exports = function(e, t) {
      var n,
        a = r(e).constructor;
      return void 0 === a || null == (n = r(a)[o]) ? t : i(n);
    };
  },
  function(e, t, n) {
    e.exports = n(148)();
  },
  function(e, t, n) {
    var r = n(8),
      i = n(2),
      o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (e.exports = function(e, t) {
      return o[e] || (o[e] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: r.version,
      mode: n(31) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  },
  function(e, t, n) {
    var r = n(16),
      i = n(7),
      o = n(33);
    e.exports = function(e) {
      return function(t, n, a) {
        var c,
          u = r(t),
          s = i(u.length),
          l = o(a, s);
        if (e && n != n) {
          for (; s > l; ) if ((c = u[l++]) != c) return !0;
        } else
          for (; s > l; l++)
            if ((e || l in u) && u[l] === n) return e || l || 0;
        return !e && -1;
      };
    };
  },
  function(e, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function(e, t, n) {
    var r = n(24);
    e.exports =
      Array.isArray ||
      function(e) {
        return "Array" == r(e);
      };
  },
  function(e, t, n) {
    var r = n(6)("iterator"),
      i = !1;
    try {
      var o = [7][r]();
      (o.return = function() {
        i = !0;
      }),
        Array.from(o, function() {
          throw 2;
        });
    } catch (e) {}
    e.exports = function(e, t) {
      if (!t && !i) return !1;
      var n = !1;
      try {
        var o = [7],
          a = o[r]();
        (a.next = function() {
          return { done: (n = !0) };
        }),
          (o[r] = function() {
            return a;
          }),
          e(o);
      } catch (e) {}
      return n;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function() {
      var e = r(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(48),
      i = RegExp.prototype.exec;
    e.exports = function(e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var o = n.call(e, t);
        if ("object" != typeof o)
          throw new TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return o;
      }
      if ("RegExp" !== r(e))
        throw new TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t);
    };
  },
  function(e, t, n) {
    "use strict";
    n(120);
    var r = n(12),
      i = n(15),
      o = n(3),
      a = n(25),
      c = n(6),
      u = n(85),
      s = c("species"),
      l = !o(function() {
        var e = /./;
        return (
          (e.exec = function() {
            var e = [];
            return (e.groups = { a: "7" }), e;
          }),
          "7" !== "".replace(e, "$<a>")
        );
      }),
      f = (function() {
        var e = /(?:)/,
          t = e.exec;
        e.exec = function() {
          return t.apply(this, arguments);
        };
        var n = "ab".split(e);
        return 2 === n.length && "a" === n[0] && "b" === n[1];
      })();
    e.exports = function(e, t, n) {
      var d = c(e),
        p = !o(function() {
          var t = {};
          return (
            (t[d] = function() {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        h = p
          ? !o(function() {
              var t = !1,
                n = /a/;
              return (
                (n.exec = function() {
                  return (t = !0), null;
                }),
                "split" === e &&
                  ((n.constructor = {}),
                  (n.constructor[s] = function() {
                    return n;
                  })),
                n[d](""),
                !t
              );
            })
          : void 0;
      if (!p || !h || ("replace" === e && !l) || ("split" === e && !f)) {
        var v = /./[d],
          m = n(a, d, ""[e], function(e, t, n, r, i) {
            return t.exec === u
              ? p && !i
                ? { done: !0, value: v.call(t, n, r) }
                : { done: !0, value: e.call(n, t, r) }
              : { done: !1 };
          }),
          y = m[0],
          g = m[1];
        r(String.prototype, e, y),
          i(
            RegExp.prototype,
            d,
            2 == t
              ? function(e, t) {
                  return g.call(e, this, t);
                }
              : function(e) {
                  return g.call(e, this);
                }
          );
      }
    };
  },
  function(e, t, n) {
    var r = n(18),
      i = n(115),
      o = n(80),
      a = n(4),
      c = n(7),
      u = n(82),
      s = {},
      l = {};
    ((t = e.exports = function(e, t, n, f, d) {
      var p,
        h,
        v,
        m,
        y = d
          ? function() {
              return e;
            }
          : u(e),
        g = r(n, f, t ? 2 : 1),
        b = 0;
      if ("function" != typeof y) throw TypeError(e + " is not iterable!");
      if (o(y)) {
        for (p = c(e.length); p > b; b++)
          if ((m = t ? g(a((h = e[b]))[0], h[1]) : g(e[b])) === s || m === l)
            return m;
      } else
        for (v = y.call(e); !(h = v.next()).done; )
          if ((m = i(v, g, h.value, t)) === s || m === l) return m;
    }).BREAK = s),
      (t.RETURN = l);
  },
  function(e, t, n) {
    var r = n(2).navigator;
    e.exports = (r && r.userAgent) || "";
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = n(0),
      o = n(12),
      a = n(44),
      c = n(28),
      u = n(59),
      s = n(43),
      l = n(5),
      f = n(3),
      d = n(55),
      p = n(39),
      h = n(71);
    e.exports = function(e, t, n, v, m, y) {
      var g = r[e],
        b = g,
        w = m ? "set" : "add",
        S = b && b.prototype,
        E = {},
        T = function(e) {
          var t = S[e];
          o(
            S,
            e,
            "delete" == e
              ? function(e) {
                  return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "has" == e
              ? function(e) {
                  return !(y && !l(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function(e) {
                  return y && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : "add" == e
              ? function(e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : function(e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        "function" == typeof b &&
        (y ||
          (S.forEach &&
            !f(function() {
              new b().entries().next();
            })))
      ) {
        var x = new b(),
          C = x[w](y ? {} : -0, 1) != x,
          k = f(function() {
            x.has(1);
          }),
          _ = d(function(e) {
            new b(e);
          }),
          P =
            !y &&
            f(function() {
              for (var e = new b(), t = 5; t--; ) e[w](t, t);
              return !e.has(-0);
            });
        _ ||
          (((b = t(function(t, n) {
            s(t, b, e);
            var r = h(new g(), t, b);
            return null != n && u(n, m, r[w], r), r;
          })).prototype = S),
          (S.constructor = b)),
          (k || P) && (T("delete"), T("has"), m && T("get")),
          (P || C) && T(w),
          y && S.clear && delete S.clear;
      } else
        (b = v.getConstructor(t, e, m, w)), a(b.prototype, n), (c.NEED = !0);
      return (
        p(b, e),
        (E[e] = b),
        i(i.G + i.W + i.F * (b != g), E),
        y || v.setStrong(b, e, m),
        b
      );
    };
  },
  function(e, t, n) {
    for (
      var r,
        i = n(2),
        o = n(15),
        a = n(30),
        c = a("typed_array"),
        u = a("view"),
        s = !(!i.ArrayBuffer || !i.DataView),
        l = s,
        f = 0,
        d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
          ","
        );
      f < 9;

    )
      (r = i[d[f++]])
        ? (o(r.prototype, c, !0), o(r.prototype, u, !0))
        : (l = !1);
    e.exports = { ABV: s, CONSTR: l, TYPED: c, VIEW: u };
  },
  ,
  function(e, t, n) {
    var r = n(5),
      i = n(2).document,
      o = r(i) && r(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {};
    };
  },
  function(e, t, n) {
    t.f = n(6);
  },
  function(e, t, n) {
    var r = n(51)("keys"),
      i = n(30);
    e.exports = function(e) {
      return r[e] || (r[e] = i(e));
    };
  },
  function(e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
      ","
    );
  },
  function(e, t, n) {
    var r = n(2).document;
    e.exports = r && r.documentElement;
  },
  function(e, t, n) {
    var r = n(5),
      i = n(4),
      o = function(e, t) {
        if ((i(e), !r(t) && null !== t))
          throw TypeError(t + ": can't set as prototype!");
      };
    e.exports = {
      set:
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function(e, t, r) {
              try {
                (r = n(18)(
                  Function.call,
                  n(21).f(Object.prototype, "__proto__").set,
                  2
                ))(e, []),
                  (t = !(e instanceof Array));
              } catch (e) {
                t = !0;
              }
              return function(e, n) {
                return o(e, n), t ? (e.__proto__ = n) : r(e, n), e;
              };
            })({}, !1)
          : void 0),
      check: o
    };
  },
  function(e, t) {
    e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff";
  },
  function(e, t, n) {
    var r = n(5),
      i = n(69).set;
    e.exports = function(e, t, n) {
      var o,
        a = t.constructor;
      return (
        a !== n &&
          "function" == typeof a &&
          (o = a.prototype) !== n.prototype &&
          r(o) &&
          i &&
          i(e, o),
        e
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(20),
      i = n(25);
    e.exports = function(e) {
      var t = String(i(this)),
        n = "",
        o = r(e);
      if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
      for (; o > 0; (o >>>= 1) && (t += t)) 1 & o && (n += t);
      return n;
    };
  },
  function(e, t) {
    e.exports =
      Math.sign ||
      function(e) {
        return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
      };
  },
  function(e, t) {
    var n = Math.expm1;
    e.exports =
      !n ||
      n(10) > 22025.465794806718 ||
      n(10) < 22025.465794806718 ||
      -2e-17 != n(-2e-17)
        ? function(e) {
            return 0 == (e = +e)
              ? e
              : e > -1e-6 && e < 1e-6
              ? e + (e * e) / 2
              : Math.exp(e) - 1;
          }
        : n;
  },
  function(e, t, n) {
    var r = n(20),
      i = n(25);
    e.exports = function(e) {
      return function(t, n) {
        var o,
          a,
          c = String(i(t)),
          u = r(n),
          s = c.length;
        return u < 0 || u >= s
          ? e
            ? ""
            : void 0
          : (o = c.charCodeAt(u)) < 55296 ||
            o > 56319 ||
            u + 1 === s ||
            (a = c.charCodeAt(u + 1)) < 56320 ||
            a > 57343
          ? e
            ? c.charAt(u)
            : o
          : e
          ? c.slice(u, u + 2)
          : a - 56320 + ((o - 55296) << 10) + 65536;
      };
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(31),
      i = n(0),
      o = n(12),
      a = n(15),
      c = n(41),
      u = n(114),
      s = n(39),
      l = n(36),
      f = n(6)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = function() {
        return this;
      };
    e.exports = function(e, t, n, h, v, m, y) {
      u(n, t, h);
      var g,
        b,
        w,
        S = function(e) {
          if (!d && e in C) return C[e];
          switch (e) {
            case "keys":
            case "values":
              return function() {
                return new n(this, e);
              };
          }
          return function() {
            return new n(this, e);
          };
        },
        E = t + " Iterator",
        T = "values" == v,
        x = !1,
        C = e.prototype,
        k = C[f] || C["@@iterator"] || (v && C[v]),
        _ = k || S(v),
        P = v ? (T ? S("entries") : _) : void 0,
        R = ("Array" == t && C.entries) || k;
      if (
        (R &&
          (w = l(R.call(new e()))) !== Object.prototype &&
          w.next &&
          (s(w, E, !0), r || "function" == typeof w[f] || a(w, f, p)),
        T &&
          k &&
          "values" !== k.name &&
          ((x = !0),
          (_ = function() {
            return k.call(this);
          })),
        (r && !y) || (!d && !x && C[f]) || a(C, f, _),
        (c[t] = _),
        (c[E] = p),
        v)
      )
        if (
          ((g = {
            values: T ? _ : S("values"),
            keys: m ? _ : S("keys"),
            entries: P
          }),
          y)
        )
          for (b in g) b in C || o(C, b, g[b]);
        else i(i.P + i.F * (d || x), t, g);
      return g;
    };
  },
  function(e, t, n) {
    var r = n(78),
      i = n(25);
    e.exports = function(e, t, n) {
      if (r(t)) throw TypeError("String#" + n + " doesn't accept regex!");
      return String(i(e));
    };
  },
  function(e, t, n) {
    var r = n(5),
      i = n(24),
      o = n(6)("match");
    e.exports = function(e) {
      var t;
      return r(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
    };
  },
  function(e, t, n) {
    var r = n(6)("match");
    e.exports = function(e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[r] = !1), !"/./"[e](t);
        } catch (e) {}
      }
      return !0;
    };
  },
  function(e, t, n) {
    var r = n(41),
      i = n(6)("iterator"),
      o = Array.prototype;
    e.exports = function(e) {
      return void 0 !== e && (r.Array === e || o[i] === e);
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(10),
      i = n(29);
    e.exports = function(e, t, n) {
      t in e ? r.f(e, t, i(0, n)) : (e[t] = n);
    };
  },
  function(e, t, n) {
    var r = n(48),
      i = n(6)("iterator"),
      o = n(41);
    e.exports = n(8).getIteratorMethod = function(e) {
      if (null != e) return e[i] || e["@@iterator"] || o[r(e)];
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports = function(e) {
      for (
        var t = r(this),
          n = o(t.length),
          a = arguments.length,
          c = i(a > 1 ? arguments[1] : void 0, n),
          u = a > 2 ? arguments[2] : void 0,
          s = void 0 === u ? n : i(u, n);
        s > c;

      )
        t[c++] = e;
      return t;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(37),
      i = n(119),
      o = n(41),
      a = n(16);
    (e.exports = n(76)(
      Array,
      "Array",
      function(e, t) {
        (this._t = a(e)), (this._i = 0), (this._k = t);
      },
      function() {
        var e = this._t,
          t = this._k,
          n = this._i++;
        return !e || n >= e.length
          ? ((this._t = void 0), i(1))
          : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
      },
      "values"
    )),
      (o.Arguments = o.Array),
      r("keys"),
      r("values"),
      r("entries");
  },
  function(e, t, n) {
    "use strict";
    var r,
      i,
      o = n(56),
      a = RegExp.prototype.exec,
      c = String.prototype.replace,
      u = a,
      s =
        ((r = /a/),
        (i = /b*/g),
        a.call(r, "a"),
        a.call(i, "a"),
        0 !== r.lastIndex || 0 !== i.lastIndex),
      l = void 0 !== /()??/.exec("")[1];
    (s || l) &&
      (u = function(e) {
        var t,
          n,
          r,
          i,
          u = this;
        return (
          l && (n = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))),
          s && (t = u.lastIndex),
          (r = a.call(u, e)),
          s && r && (u.lastIndex = u.global ? r.index + r[0].length : t),
          l &&
            r &&
            r.length > 1 &&
            c.call(r[0], n, function() {
              for (i = 1; i < arguments.length - 2; i++)
                void 0 === arguments[i] && (r[i] = void 0);
            }),
          r
        );
      }),
      (e.exports = u);
  },
  function(e, t, n) {
    "use strict";
    var r = n(75)(!0);
    e.exports = function(e, t, n) {
      return t + (n ? r(e, t).length : 1);
    };
  },
  function(e, t, n) {
    var r,
      i,
      o,
      a = n(18),
      c = n(108),
      u = n(68),
      s = n(64),
      l = n(2),
      f = l.process,
      d = l.setImmediate,
      p = l.clearImmediate,
      h = l.MessageChannel,
      v = l.Dispatch,
      m = 0,
      y = {},
      g = function() {
        var e = +this;
        if (y.hasOwnProperty(e)) {
          var t = y[e];
          delete y[e], t();
        }
      },
      b = function(e) {
        g.call(e.data);
      };
    (d && p) ||
      ((d = function(e) {
        for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
        return (
          (y[++m] = function() {
            c("function" == typeof e ? e : Function(e), t);
          }),
          r(m),
          m
        );
      }),
      (p = function(e) {
        delete y[e];
      }),
      "process" == n(24)(f)
        ? (r = function(e) {
            f.nextTick(a(g, e, 1));
          })
        : v && v.now
        ? (r = function(e) {
            v.now(a(g, e, 1));
          })
        : h
        ? ((o = (i = new h()).port2),
          (i.port1.onmessage = b),
          (r = a(o.postMessage, o, 1)))
        : l.addEventListener &&
          "function" == typeof postMessage &&
          !l.importScripts
        ? ((r = function(e) {
            l.postMessage(e + "", "*");
          }),
          l.addEventListener("message", b, !1))
        : (r =
            "onreadystatechange" in s("script")
              ? function(e) {
                  u.appendChild(s("script")).onreadystatechange = function() {
                    u.removeChild(this), g.call(e);
                  };
                }
              : function(e) {
                  setTimeout(a(g, e, 1), 0);
                })),
      (e.exports = { set: d, clear: p });
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = n(9),
      o = n(31),
      a = n(62),
      c = n(15),
      u = n(44),
      s = n(3),
      l = n(43),
      f = n(20),
      d = n(7),
      p = n(127),
      h = n(35).f,
      v = n(10).f,
      m = n(83),
      y = n(39),
      g = r.ArrayBuffer,
      b = r.DataView,
      w = r.Math,
      S = r.RangeError,
      E = r.Infinity,
      T = g,
      x = w.abs,
      C = w.pow,
      k = w.floor,
      _ = w.log,
      P = w.LN2,
      R = i ? "_b" : "buffer",
      O = i ? "_l" : "byteLength",
      M = i ? "_o" : "byteOffset";
    function I(e, t, n) {
      var r,
        i,
        o,
        a = new Array(n),
        c = 8 * n - t - 1,
        u = (1 << c) - 1,
        s = u >> 1,
        l = 23 === t ? C(2, -24) - C(2, -77) : 0,
        f = 0,
        d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        (e = x(e)) != e || e === E
          ? ((i = e != e ? 1 : 0), (r = u))
          : ((r = k(_(e) / P)),
            e * (o = C(2, -r)) < 1 && (r--, (o *= 2)),
            (e += r + s >= 1 ? l / o : l * C(2, 1 - s)) * o >= 2 &&
              (r++, (o /= 2)),
            r + s >= u
              ? ((i = 0), (r = u))
              : r + s >= 1
              ? ((i = (e * o - 1) * C(2, t)), (r += s))
              : ((i = e * C(2, s - 1) * C(2, t)), (r = 0)));
        t >= 8;
        a[f++] = 255 & i, i /= 256, t -= 8
      );
      for (r = (r << t) | i, c += t; c > 0; a[f++] = 255 & r, r /= 256, c -= 8);
      return (a[--f] |= 128 * d), a;
    }
    function L(e, t, n) {
      var r,
        i = 8 * n - t - 1,
        o = (1 << i) - 1,
        a = o >> 1,
        c = i - 7,
        u = n - 1,
        s = e[u--],
        l = 127 & s;
      for (s >>= 7; c > 0; l = 256 * l + e[u], u--, c -= 8);
      for (
        r = l & ((1 << -c) - 1), l >>= -c, c += t;
        c > 0;
        r = 256 * r + e[u], u--, c -= 8
      );
      if (0 === l) l = 1 - a;
      else {
        if (l === o) return r ? NaN : s ? -E : E;
        (r += C(2, t)), (l -= a);
      }
      return (s ? -1 : 1) * r * C(2, l - t);
    }
    function N(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function A(e) {
      return [255 & e];
    }
    function D(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function j(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function F(e) {
      return I(e, 52, 8);
    }
    function U(e) {
      return I(e, 23, 4);
    }
    function z(e, t, n) {
      v(e.prototype, t, {
        get: function() {
          return this[n];
        }
      });
    }
    function W(e, t, n, r) {
      var i = p(+n);
      if (i + t > e[O]) throw S("Wrong index!");
      var o = e[R]._b,
        a = i + e[M],
        c = o.slice(a, a + t);
      return r ? c : c.reverse();
    }
    function V(e, t, n, r, i, o) {
      var a = p(+n);
      if (a + t > e[O]) throw S("Wrong index!");
      for (var c = e[R]._b, u = a + e[M], s = r(+i), l = 0; l < t; l++)
        c[u + l] = s[o ? l : t - l - 1];
    }
    if (a.ABV) {
      if (
        !s(function() {
          g(1);
        }) ||
        !s(function() {
          new g(-1);
        }) ||
        s(function() {
          return new g(), new g(1.5), new g(NaN), "ArrayBuffer" != g.name;
        })
      ) {
        for (
          var B,
            G = ((g = function(e) {
              return l(this, g), new T(p(e));
            }).prototype = T.prototype),
            $ = h(T),
            H = 0;
          $.length > H;

        )
          (B = $[H++]) in g || c(g, B, T[B]);
        o || (G.constructor = g);
      }
      var K = new b(new g(2)),
        Q = b.prototype.setInt8;
      K.setInt8(0, 2147483648),
        K.setInt8(1, 2147483649),
        (!K.getInt8(0) && K.getInt8(1)) ||
          u(
            b.prototype,
            {
              setInt8: function(e, t) {
                Q.call(this, e, (t << 24) >> 24);
              },
              setUint8: function(e, t) {
                Q.call(this, e, (t << 24) >> 24);
              }
            },
            !0
          );
    } else
      (g = function(e) {
        l(this, g, "ArrayBuffer");
        var t = p(e);
        (this._b = m.call(new Array(t), 0)), (this[O] = t);
      }),
        (b = function(e, t, n) {
          l(this, b, "DataView"), l(e, g, "DataView");
          var r = e[O],
            i = f(t);
          if (i < 0 || i > r) throw S("Wrong offset!");
          if (i + (n = void 0 === n ? r - i : d(n)) > r)
            throw S("Wrong length!");
          (this[R] = e), (this[M] = i), (this[O] = n);
        }),
        i &&
          (z(g, "byteLength", "_l"),
          z(b, "buffer", "_b"),
          z(b, "byteLength", "_l"),
          z(b, "byteOffset", "_o")),
        u(b.prototype, {
          getInt8: function(e) {
            return (W(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function(e) {
            return W(this, 1, e)[0];
          },
          getInt16: function(e) {
            var t = W(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function(e) {
            var t = W(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function(e) {
            return N(W(this, 4, e, arguments[1]));
          },
          getUint32: function(e) {
            return N(W(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function(e) {
            return L(W(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function(e) {
            return L(W(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function(e, t) {
            V(this, 1, e, A, t);
          },
          setUint8: function(e, t) {
            V(this, 1, e, A, t);
          },
          setInt16: function(e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setUint16: function(e, t) {
            V(this, 2, e, D, t, arguments[2]);
          },
          setInt32: function(e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setUint32: function(e, t) {
            V(this, 4, e, j, t, arguments[2]);
          },
          setFloat32: function(e, t) {
            V(this, 4, e, U, t, arguments[2]);
          },
          setFloat64: function(e, t) {
            V(this, 8, e, F, t, arguments[2]);
          }
        });
    y(g, "ArrayBuffer"),
      y(b, "DataView"),
      c(b.prototype, a.VIEW, !0),
      (t.ArrayBuffer = g),
      (t.DataView = b);
  },
  function(e, t) {
    var n = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = n);
  },
  function(e, t) {
    e.exports = function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    };
  },
  function(e, t, n) {
    e.exports = !n(132)(function() {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    });
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.usePortal = t.usePlaceholder = t.useLocalStorage = t.useLoadingPercentage = t.useCamera = t.useFormState = t.useSize = t.useScrollAnimation = t.useSwipe = t.useOnClickOutside = void 0);
    var r = p(n(133)),
      i = p(n(339)),
      o = p(n(134)),
      a = p(n(340)),
      c = p(n(135)),
      u = p(n(136)),
      s = p(n(93)),
      l = p(n(137)),
      f = p(n(138)),
      d = p(n(139));
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (t.useOnClickOutside = r.default),
      (t.useSwipe = o.default),
      (t.useScrollAnimation = i.default),
      (t.useSize = a.default),
      (t.useFormState = c.default),
      (t.useCamera = u.default),
      (t.useLoadingPercentage = s.default),
      (t.useLocalStorage = l.default),
      (t.usePlaceholder = f.default),
      (t.usePortal = d.default);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1);
    t.default = function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var o = (0, i.useState)(!1),
        a = r(o, 2),
        c = a[0],
        u = a[1],
        s = (0, i.useState)(0),
        l = r(s, 2),
        f = l[0],
        d = l[1],
        p = (0, i.useRef)(null),
        h = (0, i.useRef)(null),
        v = (0, i.useRef)(null),
        m = (0, i.useRef)(!0),
        y = (0, i.useCallback)(function() {
          p.current = setTimeout(function() {
            window.performance =
              window.performance ||
              window.mozPerformance ||
              window.msPerformance ||
              window.webkitPerformance ||
              {};
            var e = performance.timing || {},
              t = e.loadEventEnd - e.responseEnd;
            (v.current = t),
              (h.current = setInterval(function() {
                d(function(e) {
                  return e < 100 ? e + 10 : 100;
                });
              }, v.current / 10)),
              (m.current = !1);
          }, 0);
        }, []);
      return (
        (0, i.useEffect)(
          function() {
            100 === f && (clearInterval(h.current), u(!0));
          },
          [f]
        ),
        (0, i.useEffect)(function() {
          return (
            window.addEventListener("load", y),
            function() {
              window.removeEventListener("load", y),
                clearTimeout(p.current),
                clearInterval(h.current);
            }
          );
        }, []),
        (0, i.useEffect)(function() {
          m.current || (d(0), u(!1), y());
        }, [].concat(t)),
        [c, f]
      );
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    };
  },
  function(e, t, n) {
    var r = n(150);
    (e.exports = p),
      (e.exports.parse = o),
      (e.exports.compile = function(e, t) {
        return c(o(e, t), t);
      }),
      (e.exports.tokensToFunction = c),
      (e.exports.tokensToRegExp = d);
    var i = new RegExp(
      [
        "(\\\\.)",
        "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
      ].join("|"),
      "g"
    );
    function o(e, t) {
      for (
        var n, r = [], o = 0, a = 0, c = "", l = (t && t.delimiter) || "/";
        null != (n = i.exec(e));

      ) {
        var f = n[0],
          d = n[1],
          p = n.index;
        if (((c += e.slice(a, p)), (a = p + f.length), d)) c += d[1];
        else {
          var h = e[a],
            v = n[2],
            m = n[3],
            y = n[4],
            g = n[5],
            b = n[6],
            w = n[7];
          c && (r.push(c), (c = ""));
          var S = null != v && null != h && h !== v,
            E = "+" === b || "*" === b,
            T = "?" === b || "*" === b,
            x = n[2] || l,
            C = y || g;
          r.push({
            name: m || o++,
            prefix: v || "",
            delimiter: x,
            optional: T,
            repeat: E,
            partial: S,
            asterisk: !!w,
            pattern: C ? s(C) : w ? ".*" : "[^" + u(x) + "]+?"
          });
        }
      }
      return a < e.length && (c += e.substr(a)), c && r.push(c), r;
    }
    function a(e) {
      return encodeURI(e).replace(/[\/?#]/g, function(e) {
        return (
          "%" +
          e
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()
        );
      });
    }
    function c(e, t) {
      for (var n = new Array(e.length), i = 0; i < e.length; i++)
        "object" == typeof e[i] &&
          (n[i] = new RegExp("^(?:" + e[i].pattern + ")$", f(t)));
      return function(t, i) {
        for (
          var o = "",
            c = t || {},
            u = (i || {}).pretty ? a : encodeURIComponent,
            s = 0;
          s < e.length;
          s++
        ) {
          var l = e[s];
          if ("string" != typeof l) {
            var f,
              d = c[l.name];
            if (null == d) {
              if (l.optional) {
                l.partial && (o += l.prefix);
                continue;
              }
              throw new TypeError('Expected "' + l.name + '" to be defined');
            }
            if (r(d)) {
              if (!l.repeat)
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(d) +
                    "`"
                );
              if (0 === d.length) {
                if (l.optional) continue;
                throw new TypeError(
                  'Expected "' + l.name + '" to not be empty'
                );
              }
              for (var p = 0; p < d.length; p++) {
                if (((f = u(d[p])), !n[s].test(f)))
                  throw new TypeError(
                    'Expected all "' +
                      l.name +
                      '" to match "' +
                      l.pattern +
                      '", but received `' +
                      JSON.stringify(f) +
                      "`"
                  );
                o += (0 === p ? l.prefix : l.delimiter) + f;
              }
            } else {
              if (
                ((f = l.asterisk
                  ? encodeURI(d).replace(/[?#]/g, function(e) {
                      return (
                        "%" +
                        e
                          .charCodeAt(0)
                          .toString(16)
                          .toUpperCase()
                      );
                    })
                  : u(d)),
                !n[s].test(f))
              )
                throw new TypeError(
                  'Expected "' +
                    l.name +
                    '" to match "' +
                    l.pattern +
                    '", but received "' +
                    f +
                    '"'
                );
              o += l.prefix + f;
            }
          } else o += l;
        }
        return o;
      };
    }
    function u(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function s(e) {
      return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    function l(e, t) {
      return (e.keys = t), e;
    }
    function f(e) {
      return e && e.sensitive ? "" : "i";
    }
    function d(e, t, n) {
      r(t) || ((n = t || n), (t = []));
      for (
        var i = (n = n || {}).strict, o = !1 !== n.end, a = "", c = 0;
        c < e.length;
        c++
      ) {
        var s = e[c];
        if ("string" == typeof s) a += u(s);
        else {
          var d = u(s.prefix),
            p = "(?:" + s.pattern + ")";
          t.push(s),
            s.repeat && (p += "(?:" + d + p + ")*"),
            (a += p = s.optional
              ? s.partial
                ? d + "(" + p + ")?"
                : "(?:" + d + "(" + p + "))?"
              : d + "(" + p + ")");
        }
      }
      var h = u(n.delimiter || "/"),
        v = a.slice(-h.length) === h;
      return (
        i || (a = (v ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"),
        (a += o ? "$" : i && v ? "" : "(?=" + h + "|$)"),
        l(new RegExp("^" + a, f(n)), t)
      );
    }
    function p(e, t, n) {
      return (
        r(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function(e, t) {
              var n = e.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null
                  });
              return l(e, t);
            })(e, t)
          : r(e)
          ? (function(e, t, n) {
              for (var r = [], i = 0; i < e.length; i++)
                r.push(p(e[i], t, n).source);
              return l(new RegExp("(?:" + r.join("|") + ")", f(n)), t);
            })(e, t, n)
          : (function(e, t, n) {
              return d(o(e, n), t, n);
            })(e, t, n)
      );
    }
  },
  function(e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r =
        Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function(e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function(e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function(e, t) {
          for (var n, c, u = a(e), s = 1; s < arguments.length; s++) {
            for (var l in (n = Object(arguments[s])))
              i.call(n, l) && (u[l] = n[l]);
            if (r) {
              c = r(n);
              for (var f = 0; f < c.length; f++)
                o.call(n, c[f]) && (u[c[f]] = n[c[f]]);
            }
          }
          return u;
        };
  },
  function(e, t, n) {
    "use strict";
    !(function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      ) {
        0;
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (e) {
          console.error(e);
        }
      }
    })(),
      (e.exports = n(145));
  },
  function(e, t) {
    var n;
    n = (function() {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(151);
  },
  function(e, t, n) {
    e.exports =
      !n(9) &&
      !n(3)(function() {
        return (
          7 !=
          Object.defineProperty(n(64)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(e, t, n) {
    var r = n(2),
      i = n(8),
      o = n(31),
      a = n(65),
      c = n(10).f;
    e.exports = function(e) {
      var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
      "_" == e.charAt(0) || e in t || c(t, e, { value: a.f(e) });
    };
  },
  function(e, t, n) {
    var r = n(14),
      i = n(16),
      o = n(52)(!1),
      a = n(66)("IE_PROTO");
    e.exports = function(e, t) {
      var n,
        c = i(e),
        u = 0,
        s = [];
      for (n in c) n != a && r(c, n) && s.push(n);
      for (; t.length > u; ) r(c, (n = t[u++])) && (~o(s, n) || s.push(n));
      return s;
    };
  },
  function(e, t, n) {
    var r = n(10),
      i = n(4),
      o = n(32);
    e.exports = n(9)
      ? Object.defineProperties
      : function(e, t) {
          i(e);
          for (var n, a = o(t), c = a.length, u = 0; c > u; )
            r.f(e, (n = a[u++]), t[n]);
          return e;
        };
  },
  function(e, t, n) {
    var r = n(16),
      i = n(35).f,
      o = {}.toString,
      a =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    e.exports.f = function(e) {
      return a && "[object Window]" == o.call(e)
        ? (function(e) {
            try {
              return i(e);
            } catch (e) {
              return a.slice();
            }
          })(e)
        : i(r(e));
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(9),
      i = n(32),
      o = n(53),
      a = n(47),
      c = n(11),
      u = n(46),
      s = Object.assign;
    e.exports =
      !s ||
      n(3)(function() {
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function(e) {
            t[e] = e;
          }),
          7 != s({}, e)[n] || Object.keys(s({}, t)).join("") != r
        );
      })
        ? function(e, t) {
            for (
              var n = c(e), s = arguments.length, l = 1, f = o.f, d = a.f;
              s > l;

            )
              for (
                var p,
                  h = u(arguments[l++]),
                  v = f ? i(h).concat(f(h)) : i(h),
                  m = v.length,
                  y = 0;
                m > y;

              )
                (p = v[y++]), (r && !d.call(h, p)) || (n[p] = h[p]);
            return n;
          }
        : s;
  },
  function(e, t) {
    e.exports =
      Object.is ||
      function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(19),
      i = n(5),
      o = n(108),
      a = [].slice,
      c = {},
      u = function(e, t, n) {
        if (!(t in c)) {
          for (var r = [], i = 0; i < t; i++) r[i] = "a[" + i + "]";
          c[t] = Function("F,a", "return new F(" + r.join(",") + ")");
        }
        return c[t](e, n);
      };
    e.exports =
      Function.bind ||
      function(e) {
        var t = r(this),
          n = a.call(arguments, 1),
          c = function() {
            var r = n.concat(a.call(arguments));
            return this instanceof c ? u(t, r.length, r) : o(t, r, e);
          };
        return i(t.prototype) && (c.prototype = t.prototype), c;
      };
  },
  function(e, t) {
    e.exports = function(e, t, n) {
      var r = void 0 === n;
      switch (t.length) {
        case 0:
          return r ? e() : e.call(n);
        case 1:
          return r ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return r
            ? e(t[0], t[1], t[2], t[3])
            : e.call(n, t[0], t[1], t[2], t[3]);
      }
      return e.apply(n, t);
    };
  },
  function(e, t, n) {
    var r = n(2).parseInt,
      i = n(40).trim,
      o = n(70),
      a = /^[-+]?0[xX]/;
    e.exports =
      8 !== r(o + "08") || 22 !== r(o + "0x16")
        ? function(e, t) {
            var n = i(String(e), 3);
            return r(n, t >>> 0 || (a.test(n) ? 16 : 10));
          }
        : r;
  },
  function(e, t, n) {
    var r = n(2).parseFloat,
      i = n(40).trim;
    e.exports =
      1 / r(n(70) + "-0") != -1 / 0
        ? function(e) {
            var t = i(String(e), 3),
              n = r(t);
            return 0 === n && "-" == t.charAt(0) ? -0 : n;
          }
        : r;
  },
  function(e, t, n) {
    var r = n(24);
    e.exports = function(e, t) {
      if ("number" != typeof e && "Number" != r(e)) throw TypeError(t);
      return +e;
    };
  },
  function(e, t, n) {
    var r = n(5),
      i = Math.floor;
    e.exports = function(e) {
      return !r(e) && isFinite(e) && i(e) === e;
    };
  },
  function(e, t) {
    e.exports =
      Math.log1p ||
      function(e) {
        return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
      };
  },
  function(e, t, n) {
    "use strict";
    var r = n(34),
      i = n(29),
      o = n(39),
      a = {};
    n(15)(a, n(6)("iterator"), function() {
      return this;
    }),
      (e.exports = function(e, t, n) {
        (e.prototype = r(a, { next: i(1, n) })), o(e, t + " Iterator");
      });
  },
  function(e, t, n) {
    var r = n(4);
    e.exports = function(e, t, n, i) {
      try {
        return i ? t(r(n)[0], n[1]) : t(n);
      } catch (t) {
        var o = e.return;
        throw (void 0 !== o && r(o.call(e)), t);
      }
    };
  },
  function(e, t, n) {
    var r = n(246);
    e.exports = function(e, t) {
      return new (r(e))(t);
    };
  },
  function(e, t, n) {
    var r = n(19),
      i = n(11),
      o = n(46),
      a = n(7);
    e.exports = function(e, t, n, c, u) {
      r(t);
      var s = i(e),
        l = o(s),
        f = a(s.length),
        d = u ? f - 1 : 0,
        p = u ? -1 : 1;
      if (n < 2)
        for (;;) {
          if (d in l) {
            (c = l[d]), (d += p);
            break;
          }
          if (((d += p), u ? d < 0 : f <= d))
            throw TypeError("Reduce of empty array with no initial value");
        }
      for (; u ? d >= 0 : f > d; d += p) d in l && (c = t(c, l[d], d, s));
      return c;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(11),
      i = n(33),
      o = n(7);
    e.exports =
      [].copyWithin ||
      function(e, t) {
        var n = r(this),
          a = o(n.length),
          c = i(e, a),
          u = i(t, a),
          s = arguments.length > 2 ? arguments[2] : void 0,
          l = Math.min((void 0 === s ? a : i(s, a)) - u, a - c),
          f = 1;
        for (
          u < c && c < u + l && ((f = -1), (u += l - 1), (c += l - 1));
          l-- > 0;

        )
          u in n ? (n[c] = n[u]) : delete n[c], (c += f), (u += f);
        return n;
      };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return { value: t, done: !!e };
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(85);
    n(0)({ target: "RegExp", proto: !0, forced: r !== /./.exec }, { exec: r });
  },
  function(e, t, n) {
    n(9) &&
      "g" != /./g.flags &&
      n(10).f(RegExp.prototype, "flags", { configurable: !0, get: n(56) });
  },
  function(e, t, n) {
    "use strict";
    var r,
      i,
      o,
      a,
      c = n(31),
      u = n(2),
      s = n(18),
      l = n(48),
      f = n(0),
      d = n(5),
      p = n(19),
      h = n(43),
      v = n(59),
      m = n(49),
      y = n(87).set,
      g = n(266)(),
      b = n(123),
      w = n(267),
      S = n(60),
      E = n(124),
      T = u.TypeError,
      x = u.process,
      C = x && x.versions,
      k = (C && C.v8) || "",
      _ = u.Promise,
      P = "process" == l(x),
      R = function() {},
      O = (i = b.f),
      M = !!(function() {
        try {
          var e = _.resolve(1),
            t = ((e.constructor = {})[n(6)("species")] = function(e) {
              e(R, R);
            });
          return (
            (P || "function" == typeof PromiseRejectionEvent) &&
            e.then(R) instanceof t &&
            0 !== k.indexOf("6.6") &&
            -1 === S.indexOf("Chrome/66")
          );
        } catch (e) {}
      })(),
      I = function(e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t;
      },
      L = function(e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          g(function() {
            for (
              var r = e._v,
                i = 1 == e._s,
                o = 0,
                a = function(t) {
                  var n,
                    o,
                    a,
                    c = i ? t.ok : t.fail,
                    u = t.resolve,
                    s = t.reject,
                    l = t.domain;
                  try {
                    c
                      ? (i || (2 == e._h && D(e), (e._h = 1)),
                        !0 === c
                          ? (n = r)
                          : (l && l.enter(),
                            (n = c(r)),
                            l && (l.exit(), (a = !0))),
                        n === t.promise
                          ? s(T("Promise-chain cycle"))
                          : (o = I(n))
                          ? o.call(n, u, s)
                          : u(n))
                      : s(r);
                  } catch (e) {
                    l && !a && l.exit(), s(e);
                  }
                };
              n.length > o;

            )
              a(n[o++]);
            (e._c = []), (e._n = !1), t && !e._h && N(e);
          });
        }
      },
      N = function(e) {
        y.call(u, function() {
          var t,
            n,
            r,
            i = e._v,
            o = A(e);
          if (
            (o &&
              ((t = w(function() {
                P
                  ? x.emit("unhandledRejection", i, e)
                  : (n = u.onunhandledrejection)
                  ? n({ promise: e, reason: i })
                  : (r = u.console) &&
                    r.error &&
                    r.error("Unhandled promise rejection", i);
              })),
              (e._h = P || A(e) ? 2 : 1)),
            (e._a = void 0),
            o && t.e)
          )
            throw t.v;
        });
      },
      A = function(e) {
        return 1 !== e._h && 0 === (e._a || e._c).length;
      },
      D = function(e) {
        y.call(u, function() {
          var t;
          P
            ? x.emit("rejectionHandled", e)
            : (t = u.onrejectionhandled) && t({ promise: e, reason: e._v });
        });
      },
      j = function(e) {
        var t = this;
        t._d ||
          ((t._d = !0),
          ((t = t._w || t)._v = e),
          (t._s = 2),
          t._a || (t._a = t._c.slice()),
          L(t, !0));
      },
      F = function(e) {
        var t,
          n = this;
        if (!n._d) {
          (n._d = !0), (n = n._w || n);
          try {
            if (n === e) throw T("Promise can't be resolved itself");
            (t = I(e))
              ? g(function() {
                  var r = { _w: n, _d: !1 };
                  try {
                    t.call(e, s(F, r, 1), s(j, r, 1));
                  } catch (e) {
                    j.call(r, e);
                  }
                })
              : ((n._v = e), (n._s = 1), L(n, !1));
          } catch (e) {
            j.call({ _w: n, _d: !1 }, e);
          }
        }
      };
    M ||
      ((_ = function(e) {
        h(this, _, "Promise", "_h"), p(e), r.call(this);
        try {
          e(s(F, this, 1), s(j, this, 1));
        } catch (e) {
          j.call(this, e);
        }
      }),
      ((r = function(e) {
        (this._c = []),
          (this._a = void 0),
          (this._s = 0),
          (this._d = !1),
          (this._v = void 0),
          (this._h = 0),
          (this._n = !1);
      }).prototype = n(44)(_.prototype, {
        then: function(e, t) {
          var n = O(m(this, _));
          return (
            (n.ok = "function" != typeof e || e),
            (n.fail = "function" == typeof t && t),
            (n.domain = P ? x.domain : void 0),
            this._c.push(n),
            this._a && this._a.push(n),
            this._s && L(this, !1),
            n.promise
          );
        },
        catch: function(e) {
          return this.then(void 0, e);
        }
      })),
      (o = function() {
        var e = new r();
        (this.promise = e),
          (this.resolve = s(F, e, 1)),
          (this.reject = s(j, e, 1));
      }),
      (b.f = O = function(e) {
        return e === _ || e === a ? new o(e) : i(e);
      })),
      f(f.G + f.W + f.F * !M, { Promise: _ }),
      n(39)(_, "Promise"),
      n(42)("Promise"),
      (a = n(8).Promise),
      f(f.S + f.F * !M, "Promise", {
        reject: function(e) {
          var t = O(this);
          return (0, t.reject)(e), t.promise;
        }
      }),
      f(f.S + f.F * (c || !M), "Promise", {
        resolve: function(e) {
          return E(c && this === a ? _ : this, e);
        }
      }),
      f(
        f.S +
          f.F *
            !(
              M &&
              n(55)(function(e) {
                _.all(e).catch(R);
              })
            ),
        "Promise",
        {
          all: function(e) {
            var t = this,
              n = O(t),
              r = n.resolve,
              i = n.reject,
              o = w(function() {
                var n = [],
                  o = 0,
                  a = 1;
                v(e, !1, function(e) {
                  var c = o++,
                    u = !1;
                  n.push(void 0),
                    a++,
                    t.resolve(e).then(function(e) {
                      u || ((u = !0), (n[c] = e), --a || r(n));
                    }, i);
                }),
                  --a || r(n);
              });
            return o.e && i(o.v), n.promise;
          },
          race: function(e) {
            var t = this,
              n = O(t),
              r = n.reject,
              i = w(function() {
                v(e, !1, function(e) {
                  t.resolve(e).then(n.resolve, r);
                });
              });
            return i.e && r(i.v), n.promise;
          }
        }
      );
  },
  function(e, t, n) {
    "use strict";
    var r = n(19);
    function i(e) {
      var t, n;
      (this.promise = new e(function(e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = r(t)),
        (this.reject = r(n));
    }
    e.exports.f = function(e) {
      return new i(e);
    };
  },
  function(e, t, n) {
    var r = n(4),
      i = n(5),
      o = n(123);
    e.exports = function(e, t) {
      if ((r(e), i(t) && t.constructor === e)) return t;
      var n = o.f(e);
      return (0, n.resolve)(t), n.promise;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(10).f,
      i = n(34),
      o = n(44),
      a = n(18),
      c = n(43),
      u = n(59),
      s = n(76),
      l = n(119),
      f = n(42),
      d = n(9),
      p = n(28).fastKey,
      h = n(38),
      v = d ? "_s" : "size",
      m = function(e, t) {
        var n,
          r = p(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n;
      };
    e.exports = {
      getConstructor: function(e, t, n, s) {
        var l = e(function(e, r) {
          c(e, l, t, "_i"),
            (e._t = t),
            (e._i = i(null)),
            (e._f = void 0),
            (e._l = void 0),
            (e[v] = 0),
            null != r && u(r, n, e[s], e);
        });
        return (
          o(l.prototype, {
            clear: function() {
              for (var e = h(this, t), n = e._i, r = e._f; r; r = r.n)
                (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
              (e._f = e._l = void 0), (e[v] = 0);
            },
            delete: function(e) {
              var n = h(this, t),
                r = m(n, e);
              if (r) {
                var i = r.n,
                  o = r.p;
                delete n._i[r.i],
                  (r.r = !0),
                  o && (o.n = i),
                  i && (i.p = o),
                  n._f == r && (n._f = i),
                  n._l == r && (n._l = o),
                  n[v]--;
              }
              return !!r;
            },
            forEach: function(e) {
              h(this, t);
              for (
                var n,
                  r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                (n = n ? n.n : this._f);

              )
                for (r(n.v, n.k, this); n && n.r; ) n = n.p;
            },
            has: function(e) {
              return !!m(h(this, t), e);
            }
          }),
          d &&
            r(l.prototype, "size", {
              get: function() {
                return h(this, t)[v];
              }
            }),
          l
        );
      },
      def: function(e, t, n) {
        var r,
          i,
          o = m(e, t);
        return (
          o
            ? (o.v = n)
            : ((e._l = o = {
                i: (i = p(t, !0)),
                k: t,
                v: n,
                p: (r = e._l),
                n: void 0,
                r: !1
              }),
              e._f || (e._f = o),
              r && (r.n = o),
              e[v]++,
              "F" !== i && (e._i[i] = o)),
          e
        );
      },
      getEntry: m,
      setStrong: function(e, t, n) {
        s(
          e,
          t,
          function(e, n) {
            (this._t = h(e, t)), (this._k = n), (this._l = void 0);
          },
          function() {
            for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
            return this._t && (this._l = t = t ? t.n : this._t._f)
              ? l(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
              : ((this._t = void 0), l(1));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          f(t);
      }
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(44),
      i = n(28).getWeak,
      o = n(4),
      a = n(5),
      c = n(43),
      u = n(59),
      s = n(23),
      l = n(14),
      f = n(38),
      d = s(5),
      p = s(6),
      h = 0,
      v = function(e) {
        return e._l || (e._l = new m());
      },
      m = function() {
        this.a = [];
      },
      y = function(e, t) {
        return d(e.a, function(e) {
          return e[0] === t;
        });
      };
    (m.prototype = {
      get: function(e) {
        var t = y(this, e);
        if (t) return t[1];
      },
      has: function(e) {
        return !!y(this, e);
      },
      set: function(e, t) {
        var n = y(this, e);
        n ? (n[1] = t) : this.a.push([e, t]);
      },
      delete: function(e) {
        var t = p(this.a, function(t) {
          return t[0] === e;
        });
        return ~t && this.a.splice(t, 1), !!~t;
      }
    }),
      (e.exports = {
        getConstructor: function(e, t, n, o) {
          var s = e(function(e, r) {
            c(e, s, t, "_i"),
              (e._t = t),
              (e._i = h++),
              (e._l = void 0),
              null != r && u(r, n, e[o], e);
          });
          return (
            r(s.prototype, {
              delete: function(e) {
                if (!a(e)) return !1;
                var n = i(e);
                return !0 === n
                  ? v(f(this, t)).delete(e)
                  : n && l(n, this._i) && delete n[this._i];
              },
              has: function(e) {
                if (!a(e)) return !1;
                var n = i(e);
                return !0 === n ? v(f(this, t)).has(e) : n && l(n, this._i);
              }
            }),
            s
          );
        },
        def: function(e, t, n) {
          var r = i(o(t), !0);
          return !0 === r ? v(e).set(t, n) : (r[e._i] = n), e;
        },
        ufstore: v
      });
  },
  function(e, t, n) {
    var r = n(20),
      i = n(7);
    e.exports = function(e) {
      if (void 0 === e) return 0;
      var t = r(e),
        n = i(t);
      if (t !== n) throw RangeError("Wrong length!");
      return n;
    };
  },
  function(e, t, n) {
    var r = n(35),
      i = n(53),
      o = n(4),
      a = n(2).Reflect;
    e.exports =
      (a && a.ownKeys) ||
      function(e) {
        var t = r.f(o(e)),
          n = i.f;
        return n ? t.concat(n(e)) : t;
      };
  },
  function(e, t, n) {
    var r = n(7),
      i = n(72),
      o = n(25);
    e.exports = function(e, t, n, a) {
      var c = String(o(e)),
        u = c.length,
        s = void 0 === n ? " " : String(n),
        l = r(t);
      if (l <= u || "" == s) return c;
      var f = l - u,
        d = i.call(s, Math.ceil(f / s.length));
      return d.length > f && (d = d.slice(0, f)), a ? d + c : c + d;
    };
  },
  function(e, t, n) {
    var r = n(9),
      i = n(32),
      o = n(16),
      a = n(47).f;
    e.exports = function(e) {
      return function(t) {
        for (var n, c = o(t), u = i(c), s = u.length, l = 0, f = []; s > l; )
          (n = u[l++]), (r && !a.call(c, n)) || f.push(e ? [n, c[n]] : c[n]);
        return f;
      };
    };
  },
  function(e, t) {
    var n = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = n);
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function(e, t) {
        (0, r.useEffect)(
          function() {
            var n = function(n) {
              e.current && !e.current.contains(n.target) && t(n);
            };
            return (
              document.addEventListener("mousedown", n),
              document.addEventListener("touchstart", n),
              function() {
                document.removeEventListener("mousedown", n),
                  document.removeEventListener("touchstart", n);
              }
            );
          },
          [e, t]
        );
      });
    var r = n(1);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1);
    t.default = function(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 30,
        i = (0, r.useRef)({}),
        o = (0, r.useRef)({}),
        a = (0, r.useRef)(t);
      (0, r.useEffect)(
        function() {
          a.current = t;
        },
        [t]
      );
      var c = (0, r.useCallback)(function(e, t, n) {
          if (e && e.x && e.y && t && t.x && t.y && n) {
            var r = t.x - e.x,
              i = t.y - e.y;
            if (r > i && r > n) return "left";
            if (i > r && i > n) return "down";
            if (r < i && r < -n) return "right";
            if (i < r && i < -n) return "up";
          }
          return !1;
        }, []),
        u = (0, r.useCallback)(function(e) {
          var t = e.touches.length && {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
          };
          i.current = t || null;
        }, []),
        s = (0, r.useCallback)(function(e) {
          var t = e.changedTouches.length && {
              x: e.changedTouches[0].clientX - i.current.x,
              y: e.changedTouches[0].clientY - i.current.y
            },
            n = a.current.onTouchMove;
          n && n(t);
        }, []),
        l = (0, r.useCallback)(
          function(e) {
            var t = e.changedTouches.length && {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
              },
              r = a.current,
              u = r.onSwipeDown,
              s = r.onSwipeUp,
              l = r.onSwipeLeft,
              f = r.onSwipeRight,
              d = r.onDistanceLessThanDelta;
            switch (((o.current = t || null), c(i.current, o.current, n))) {
              case "down":
                u && u();
                break;
              case "up":
                s && s();
                break;
              case "left":
                l && l();
                break;
              case "right":
                f && f();
                break;
              default:
                return void (d && d());
            }
          },
          [n, c]
        );
      (0, r.useEffect)(
        function() {
          if (e && e.current) {
            var t = e.current;
            return (
              t.addEventListener("touchstart", u),
              t.addEventListener("touchmove", s),
              t.addEventListener("touchend", l),
              function() {
                t.addEventListener("touchstart", u),
                  t.addEventListener("touchmove", s),
                  t.addEventListener("touchend", l);
              }
            );
          }
        },
        [e, u, s, l]
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(1);
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = n),
        e
      );
    }
    var c = function(e, t) {
      var n = t.type,
        r = t.payload;
      switch (n) {
        case "SET_VALUE":
          var o = i({}, e, { formState: i({}, e.formState, r) });
          for (var a in r) delete o.errors[a];
          return o;
        case "SET_ERROR":
          return i({}, e, { errors: i({}, e.errors, r) });
        default:
          return i({}, e);
      }
    };
    t.default = function(e) {
      var t = (0, o.useState)(!1),
        n = r(t, 2),
        i = n[0],
        u = n[1],
        s = (0, o.useReducer)(c, { formState: {}, errors: {} }),
        l = r(s, 2),
        f = l[0],
        d = f.formState,
        p = f.errors,
        h = l[1],
        v = (0, o.useRef)(null),
        m = function(t) {
          t.preventDefault(), e && e(d, t);
        },
        y = (0, o.useCallback)(function(e) {
          if (e && "FORM" === e.tagName) {
            u(!0),
              (e.onchange = function(e) {
                h({
                  type: "SET_VALUE",
                  payload: a(
                    {},
                    e.target.name,
                    "checkbox" !== e.target.type
                      ? e.target.value
                      : e.target.checked
                  )
                });
              });
            var t = !0,
              n = !1,
              r = void 0;
            try {
              for (
                var i, o = e.children[Symbol.iterator]();
                !(t = (i = o.next()).done);
                t = !0
              ) {
                var c = i.value;
                "INPUT" === c.tagName &&
                  (c.oninvalid = function(e) {
                    var t = {};
                    for (var n in e.target.validity)
                      e.target.validity[n] && (t[n] = !0);
                    h({ type: "SET_ERROR", payload: a({}, e.target.name, t) });
                  });
              }
            } catch (e) {
              (n = !0), (r = e);
            } finally {
              try {
                !t && o.return && o.return();
              } finally {
                if (n) throw r;
              }
            }
            v.current = e;
          }
        }, []);
      return (
        (0, o.useEffect)(
          function() {
            if (i)
              return (
                v.current.addEventListener("submit", m),
                function() {
                  v.current.removeEventListener("submit", m);
                }
              );
          },
          [i, d]
        ),
        [y, d, p]
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1);
    function o(e) {
      return function() {
        var t = e.apply(this, arguments);
        return new Promise(function(e, n) {
          return (function r(i, o) {
            try {
              var a = t[i](o),
                c = a.value;
            } catch (e) {
              return void n(e);
            }
            if (!a.done)
              return Promise.resolve(c).then(
                function(e) {
                  r("next", e);
                },
                function(e) {
                  r("throw", e);
                }
              );
            e(c);
          })("next");
        });
      };
    }
    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    n(353);
    var c = [
        [640, 480, "480p - 4:3"],
        [1280, 720, "720p - 16:9"],
        [1920, 1080, "1080p - 16:9"]
      ],
      u = function(e) {
        var t = e.height,
          n = e.width;
        return c
          .filter(function(e) {
            return (
              e[0] >= n.min && e[0] <= n.max && e[1] >= t.min && e[1] <= t.max
            );
          })
          .map(function(e) {
            return { label: e[2], width: e[0], height: e[1] };
          });
      };
    var s = function(e, t) {
        var n = e.cameraList,
          r = e.selectedCameraId,
          i = t.type,
          o = t.id,
          c = t.list;
        switch (i) {
          case "SET_LIST":
            return { cameraList: c, selectedCameraId: c[0].deviceId };
          case "SELECT":
            return { cameraList: [].concat(a(n)), selectedCameraId: o };
          default:
            return { cameraList: [].concat(a(n)), selectedCameraId: r };
        }
      },
      l = function(e, t) {
        var n = e.stream,
          r = e.constraints,
          i = e.permitted,
          o = e.selectedConstraint,
          a = t.type,
          c = t.newstream,
          u = t.newConstraints,
          s = t.newSelectedConstraint;
        switch (a) {
          case "SET_STREAM":
            return {
              stream: c,
              permitted: !0,
              constraints: u,
              selectedConstraint: s
            };
          case "SET_STREAM_CONS":
            return (
              n.getVideoTracks()[0].applyConstraints(Object.assign({}, s)),
              { stream: n, permitted: i, constraints: r, selectedConstraint: s }
            );
          case "RESET_STREAM":
            return {
              stream: null,
              permitted: !1,
              constraints: [],
              selectedConstraint: null
            };
          default:
            return {
              stream: n,
              permitted: i,
              constraints: r,
              selectedConstraint: o
            };
        }
      };
    t.default = function() {
      var e = (0, i.useReducer)(s, { cameraList: [], selectedCameraId: null }),
        t = r(e, 2),
        n = t[0],
        a = n.selectedCameraId,
        c = n.cameraList,
        f = t[1],
        d = (0, i.useReducer)(l, {
          stream: null,
          permitted: !1,
          constraints: [],
          selectedConstraint: null
        }),
        p = r(d, 2),
        h = p[0],
        v = h.stream,
        m = h.permitted,
        y = h.constraints,
        g = h.selectedConstraint,
        b = p[1],
        w = (0, i.useState)(null),
        S = r(w, 2),
        E = S[0],
        T = S[1],
        x = (0, i.useCallback)(function(e) {
          f({ type: "SELECT", id: e });
        }, []),
        C = (0, i.useCallback)(function(e) {
          b({ type: "SET_STREAM_CONS", newSelectedConstraint: e });
        }),
        k = (0, i.useCallback)(
          function() {
            T(null),
              v &&
                v.getTracks().forEach(function(e) {
                  return e.stop();
                });
          },
          [v]
        );
      return (
        (0, i.useEffect)(
          function() {
            var e;
            return (
              ((e = o(
                regeneratorRuntime.mark(function e() {
                  var t, n;
                  return regeneratorRuntime.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              !(
                                "mediaDevices" in navigator &&
                                "enumerateDevices" in navigator.mediaDevices
                              )
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              navigator.mediaDevices.enumerateDevices()
                            );
                          case 4:
                            (t = e.sent),
                              (n = []),
                              t.forEach(function(e) {
                                if ("videoinput" === e.kind) {
                                  var t = {
                                    label: e.label,
                                    deviceId: e.deviceId
                                  };
                                  n.push(t);
                                }
                              }),
                              f({ type: "SET_LIST", list: n }),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10), (e.t0 = e.catch(1)), T(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    void 0,
                    [[1, 10]]
                  );
                })
              )),
              function() {
                return e.apply(this, arguments);
              })(),
              k
            );
          },
          [m]
        ),
        (0, i.useEffect)(
          function() {
            k();
            var e,
              t = c.length && a ? a : void 0;
            if (t)
              return (
                ((e = o(
                  regeneratorRuntime.mark(function e() {
                    var n, r, i;
                    return regeneratorRuntime.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  (navigator.mediaDevices &&
                                    navigator.mediaDevices.getUserMedia) ||
                                  navigator.webkitGetUserMedia ||
                                  navigator.mozGetUserMedia ||
                                  navigator.msGetUserMedia
                                ) ||
                                !t
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (e.prev = 1),
                                (e.next = 4),
                                navigator.mediaDevices.getUserMedia({
                                  video: { deviceId: { exact: t } }
                                })
                              );
                            case 4:
                              (n = e.sent),
                                (r = n.getTracks()[0].getCapabilities
                                  ? u(n.getTracks()[0].getCapabilities())
                                  : []),
                                (i = n.getTracks()[0].getSettings
                                  ? n.getTracks()[0].getSettings()
                                  : null),
                                b({
                                  type: "SET_STREAM",
                                  newstream: n,
                                  newConstraints: r,
                                  newSelectedConstraint: i
                                }),
                                (e.next = 13);
                              break;
                            case 10:
                              (e.prev = 10), (e.t0 = e.catch(1)), T(e.t0);
                            case 13:
                              e.next = 16;
                              break;
                            case 15:
                              return e.abrupt(
                                "return",
                                T(new Error("No camera device was found!"))
                              );
                            case 16:
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      void 0,
                      [[1, 10]]
                    );
                  })
                )),
                function() {
                  return e.apply(this, arguments);
                })(),
                k
              );
          },
          [a, c.length]
        ),
        [v, E, x, C, c, y, a, g]
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1);
    t.default = function(e) {
      var t = (0, i.useState)(!1),
        n = r(t, 2),
        o = n[0],
        a = n[1],
        c = (0, i.useState)(null),
        u = r(c, 2),
        s = u[0],
        l = u[1],
        f = (0, i.useRef)(null);
      return (
        (0, i.useEffect)(function() {
          var t = {};
          if (!window)
            return (f.current = {
              error: new Error("You have to execute this in the Browser!")
            });
          var n = window.localStorage;
          e
            ? ((t.set = function(r) {
                n.setItem(e, r), l(t.get());
              }),
              (t.get = function() {
                return n.getItem(e);
              }),
              l(t.get()),
              (t.remove = function() {
                n.removeItem(e), l(null);
              }))
            : ((t.set = function(e, t) {
                return n.setItem(e, t);
              }),
              (t.get = function(e) {
                return n.getItem(e);
              }),
              (t.remove = function(e) {
                return n.removeItem(e);
              })),
            (f.current = t),
            a(!0);
        }, []),
        o
          ? { value: s, set: f.current.set, remove: f.current.remove, ready: o }
          : { ready: o }
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = n(1),
      o = (r = i) && r.__esModule ? r : { default: r },
      a = n(97);
    t.default = function(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        r = (0, i.useRef)(null),
        c = (0, i.useRef)(null),
        u = (0, i.useCallback)(function(i) {
          (r.current = i),
            (c.current = document.createElement("span")),
            (c.current.style.cssText +=
              "\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tbackground: #4791b4;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t"),
            (c.current.style.cssText += n),
            t && (0, a.render)(o.default.createElement(t, null), c.current),
            e || r.current.appendChild(c.current);
        }, []);
      return (
        (0, i.useEffect)(
          function() {
            r.current &&
              c.current &&
              (e
                ? e && r.current.removeChild(c.current)
                : r.current.appendChild(c.current));
          },
          [e]
        ),
        u
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(1),
      a = n(133),
      c = (r = a) && r.__esModule ? r : { default: r };
    t.default = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.closeOnClickOutside,
        n = void 0 === t || t,
        r = e.closeOnESC,
        a = void 0 === r || r,
        u = e.defaultOpen,
        s = void 0 !== u && u,
        l = (0, o.useRef)(null),
        f = (0, o.useState)(s),
        d = i(f, 2),
        p = d[0],
        h = d[1];
      (0, c.default)(l, function() {
        return (
          n &&
          h(function(e) {
            return !1;
          })
        );
      });
      var v = (0, o.useCallback)(function(e) {
          e &&
            ((l.current = e),
            (l.current.style.cssText +=
              "\n\t\t\tposition: absolute;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\t" +
              (p
                ? "visibility: visible; opacity: 1;"
                : "visibility: visible; opacity: 0;") +
              "\n\t\t\ttransition: .3s all ease-out\n\t\t"));
        }, []),
        m = (0, o.useCallback)(function(e) {
          e &&
            e.addEventListener("click", function() {
              return h(function(e) {
                return !e;
              });
            });
        }, []);
      return (
        (0, o.useEffect)(
          function() {
            (l.current.style.visibility = p ? "visible" : "hidden"),
              (l.current.style.opacity = p ? "1" : "0");
          },
          [p]
        ),
        (0, o.useEffect)(function() {
          if (a) {
            var e = function(e) {
              27 == e.keyCode && a && h(!1);
            };
            return (
              window.addEventListener("keyup", e),
              function() {
                return window.addEventListener("keyup", e);
              }
            );
          }
        }, []),
        { setPortal: v, setTrigger: m }
      );
    };
  },
  function(e, t, n) {
    "use strict";
    (function(t) {
      var n = "__global_unique_id__";
      e.exports = function() {
        return (t[n] = (t[n] || 0) + 1);
      };
    }.call(this, n(98)));
  },
  function(e, t, n) {
    "use strict";
    var r = n(99),
      i = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
      },
      a = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
      },
      c = {};
    function u(e) {
      return r.isMemo(e) ? a : c[e.$$typeof] || i;
    }
    (c[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0
    }),
      (c[r.Memo] = a);
    var s = Object.defineProperty,
      l = Object.getOwnPropertyNames,
      f = Object.getOwnPropertySymbols,
      d = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      h = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (h) {
          var i = p(n);
          i && i !== h && e(t, i, r);
        }
        var a = l(n);
        f && (a = a.concat(f(n)));
        for (var c = u(t), v = u(n), m = 0; m < a.length; ++m) {
          var y = a[m];
          if (!(o[y] || (r && r[y]) || (v && v[y]) || (c && c[y]))) {
            var g = d(n, y);
            try {
              s(t, y, g);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(45);
    function i(e, t, n, i, o) {
      var a = r.writeRtpDescription(e.kind, t);
      if (
        ((a += r.writeIceParameters(e.iceGatherer.getLocalParameters())),
        (a += r.writeDtlsParameters(
          e.dtlsTransport.getLocalParameters(),
          "offer" === n ? "actpass" : o || "active"
        )),
        (a += "a=mid:" + e.mid + "\r\n"),
        e.rtpSender && e.rtpReceiver
          ? (a += "a=sendrecv\r\n")
          : e.rtpSender
          ? (a += "a=sendonly\r\n")
          : e.rtpReceiver
          ? (a += "a=recvonly\r\n")
          : (a += "a=inactive\r\n"),
        e.rtpSender)
      ) {
        var c = e.rtpSender._initialTrackId || e.rtpSender.track.id;
        e.rtpSender._initialTrackId = c;
        var u = "msid:" + (i ? i.id : "-") + " " + c + "\r\n";
        (a += "a=" + u),
          (a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + u),
          e.sendEncodingParameters[0].rtx &&
            ((a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + u),
            (a +=
              "a=ssrc-group:FID " +
              e.sendEncodingParameters[0].ssrc +
              " " +
              e.sendEncodingParameters[0].rtx.ssrc +
              "\r\n"));
      }
      return (
        (a +=
          "a=ssrc:" +
          e.sendEncodingParameters[0].ssrc +
          " cname:" +
          r.localCName +
          "\r\n"),
        e.rtpSender &&
          e.sendEncodingParameters[0].rtx &&
          (a +=
            "a=ssrc:" +
            e.sendEncodingParameters[0].rtx.ssrc +
            " cname:" +
            r.localCName +
            "\r\n"),
        a
      );
    }
    function o(e, t) {
      var n = { codecs: [], headerExtensions: [], fecMechanisms: [] },
        r = function(e, t) {
          e = parseInt(e, 10);
          for (var n = 0; n < t.length; n++)
            if (t[n].payloadType === e || t[n].preferredPayloadType === e)
              return t[n];
        },
        i = function(e, t, n, i) {
          var o = r(e.parameters.apt, n),
            a = r(t.parameters.apt, i);
          return o && a && o.name.toLowerCase() === a.name.toLowerCase();
        };
      return (
        e.codecs.forEach(function(r) {
          for (var o = 0; o < t.codecs.length; o++) {
            var a = t.codecs[o];
            if (
              r.name.toLowerCase() === a.name.toLowerCase() &&
              r.clockRate === a.clockRate
            ) {
              if (
                "rtx" === r.name.toLowerCase() &&
                r.parameters &&
                a.parameters.apt &&
                !i(r, a, e.codecs, t.codecs)
              )
                continue;
              ((a = JSON.parse(JSON.stringify(a))).numChannels = Math.min(
                r.numChannels,
                a.numChannels
              )),
                n.codecs.push(a),
                (a.rtcpFeedback = a.rtcpFeedback.filter(function(e) {
                  for (var t = 0; t < r.rtcpFeedback.length; t++)
                    if (
                      r.rtcpFeedback[t].type === e.type &&
                      r.rtcpFeedback[t].parameter === e.parameter
                    )
                      return !0;
                  return !1;
                }));
              break;
            }
          }
        }),
        e.headerExtensions.forEach(function(e) {
          for (var r = 0; r < t.headerExtensions.length; r++) {
            var i = t.headerExtensions[r];
            if (e.uri === i.uri) {
              n.headerExtensions.push(i);
              break;
            }
          }
        }),
        n
      );
    }
    function a(e, t, n) {
      return (
        -1 !==
        {
          offer: {
            setLocalDescription: ["stable", "have-local-offer"],
            setRemoteDescription: ["stable", "have-remote-offer"]
          },
          answer: {
            setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
            setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
          }
        }[t][e].indexOf(n)
      );
    }
    function c(e, t) {
      var n = e.getRemoteCandidates().find(function(e) {
        return (
          t.foundation === e.foundation &&
          t.ip === e.ip &&
          t.port === e.port &&
          t.priority === e.priority &&
          t.protocol === e.protocol &&
          t.type === e.type
        );
      });
      return n || e.addRemoteCandidate(t), !n;
    }
    function u(e, t) {
      var n = new Error(t);
      return (
        (n.name = e),
        (n.code = {
          NotSupportedError: 9,
          InvalidStateError: 11,
          InvalidAccessError: 15,
          TypeError: void 0,
          OperationError: void 0
        }[e]),
        n
      );
    }
    e.exports = function(e, t) {
      function n(t, n) {
        n.addTrack(t),
          n.dispatchEvent(
            new e.MediaStreamTrackEvent("addtrack", { track: t })
          );
      }
      function s(t, n, r, i) {
        var o = new Event("track");
        (o.track = n),
          (o.receiver = r),
          (o.transceiver = { receiver: r }),
          (o.streams = i),
          e.setTimeout(function() {
            t._dispatchEvent("track", o);
          });
      }
      var l = function(n) {
        var i = this,
          o = document.createDocumentFragment();
        if (
          (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(
            function(e) {
              i[e] = o[e].bind(o);
            }
          ),
          (this.canTrickleIceCandidates = null),
          (this.needNegotiation = !1),
          (this.localStreams = []),
          (this.remoteStreams = []),
          (this._localDescription = null),
          (this._remoteDescription = null),
          (this.signalingState = "stable"),
          (this.iceConnectionState = "new"),
          (this.connectionState = "new"),
          (this.iceGatheringState = "new"),
          (n = JSON.parse(JSON.stringify(n || {}))),
          (this.usingBundle = "max-bundle" === n.bundlePolicy),
          "negotiate" === n.rtcpMuxPolicy)
        )
          throw u(
            "NotSupportedError",
            "rtcpMuxPolicy 'negotiate' is not supported"
          );
        switch (
          (n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"),
          n.iceTransportPolicy)
        ) {
          case "all":
          case "relay":
            break;
          default:
            n.iceTransportPolicy = "all";
        }
        switch (n.bundlePolicy) {
          case "balanced":
          case "max-compat":
          case "max-bundle":
            break;
          default:
            n.bundlePolicy = "balanced";
        }
        if (
          ((n.iceServers = (function(e, t) {
            var n = !1;
            return (e = JSON.parse(JSON.stringify(e))).filter(function(e) {
              if (e && (e.urls || e.url)) {
                var r = e.urls || e.url;
                e.url &&
                  !e.urls &&
                  console.warn(
                    "RTCIceServer.url is deprecated! Use urls instead."
                  );
                var i = "string" == typeof r;
                return (
                  i && (r = [r]),
                  (r = r.filter(function(e) {
                    return 0 === e.indexOf("turn:") &&
                      -1 !== e.indexOf("transport=udp") &&
                      -1 === e.indexOf("turn:[") &&
                      !n
                      ? ((n = !0), !0)
                      : 0 === e.indexOf("stun:") &&
                          t >= 14393 &&
                          -1 === e.indexOf("?transport=udp");
                  })),
                  delete e.url,
                  (e.urls = i ? r[0] : r),
                  !!r.length
                );
              }
            });
          })(n.iceServers || [], t)),
          (this._iceGatherers = []),
          n.iceCandidatePoolSize)
        )
          for (var a = n.iceCandidatePoolSize; a > 0; a--)
            this._iceGatherers.push(
              new e.RTCIceGatherer({
                iceServers: n.iceServers,
                gatherPolicy: n.iceTransportPolicy
              })
            );
        else n.iceCandidatePoolSize = 0;
        (this._config = n),
          (this.transceivers = []),
          (this._sdpSessionId = r.generateSessionId()),
          (this._sdpSessionVersion = 0),
          (this._dtlsRole = void 0),
          (this._isClosed = !1);
      };
      Object.defineProperty(l.prototype, "localDescription", {
        configurable: !0,
        get: function() {
          return this._localDescription;
        }
      }),
        Object.defineProperty(l.prototype, "remoteDescription", {
          configurable: !0,
          get: function() {
            return this._remoteDescription;
          }
        }),
        (l.prototype.onicecandidate = null),
        (l.prototype.onaddstream = null),
        (l.prototype.ontrack = null),
        (l.prototype.onremovestream = null),
        (l.prototype.onsignalingstatechange = null),
        (l.prototype.oniceconnectionstatechange = null),
        (l.prototype.onconnectionstatechange = null),
        (l.prototype.onicegatheringstatechange = null),
        (l.prototype.onnegotiationneeded = null),
        (l.prototype.ondatachannel = null),
        (l.prototype._dispatchEvent = function(e, t) {
          this._isClosed ||
            (this.dispatchEvent(t),
            "function" == typeof this["on" + e] && this["on" + e](t));
        }),
        (l.prototype._emitGatheringStateChange = function() {
          var e = new Event("icegatheringstatechange");
          this._dispatchEvent("icegatheringstatechange", e);
        }),
        (l.prototype.getConfiguration = function() {
          return this._config;
        }),
        (l.prototype.getLocalStreams = function() {
          return this.localStreams;
        }),
        (l.prototype.getRemoteStreams = function() {
          return this.remoteStreams;
        }),
        (l.prototype._createTransceiver = function(e, t) {
          var n = this.transceivers.length > 0,
            r = {
              track: null,
              iceGatherer: null,
              iceTransport: null,
              dtlsTransport: null,
              localCapabilities: null,
              remoteCapabilities: null,
              rtpSender: null,
              rtpReceiver: null,
              kind: e,
              mid: null,
              sendEncodingParameters: null,
              recvEncodingParameters: null,
              stream: null,
              associatedRemoteMediaStreams: [],
              wantReceive: !0
            };
          if (this.usingBundle && n)
            (r.iceTransport = this.transceivers[0].iceTransport),
              (r.dtlsTransport = this.transceivers[0].dtlsTransport);
          else {
            var i = this._createIceAndDtlsTransports();
            (r.iceTransport = i.iceTransport),
              (r.dtlsTransport = i.dtlsTransport);
          }
          return t || this.transceivers.push(r), r;
        }),
        (l.prototype.addTrack = function(t, n) {
          if (this._isClosed)
            throw u(
              "InvalidStateError",
              "Attempted to call addTrack on a closed peerconnection."
            );
          var r;
          if (
            this.transceivers.find(function(e) {
              return e.track === t;
            })
          )
            throw u("InvalidAccessError", "Track already exists.");
          for (var i = 0; i < this.transceivers.length; i++)
            this.transceivers[i].track ||
              this.transceivers[i].kind !== t.kind ||
              (r = this.transceivers[i]);
          return (
            r || (r = this._createTransceiver(t.kind)),
            this._maybeFireNegotiationNeeded(),
            -1 === this.localStreams.indexOf(n) && this.localStreams.push(n),
            (r.track = t),
            (r.stream = n),
            (r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport)),
            r.rtpSender
          );
        }),
        (l.prototype.addStream = function(e) {
          var n = this;
          if (t >= 15025)
            e.getTracks().forEach(function(t) {
              n.addTrack(t, e);
            });
          else {
            var r = e.clone();
            e.getTracks().forEach(function(e, t) {
              var n = r.getTracks()[t];
              e.addEventListener("enabled", function(e) {
                n.enabled = e.enabled;
              });
            }),
              r.getTracks().forEach(function(e) {
                n.addTrack(e, r);
              });
          }
        }),
        (l.prototype.removeTrack = function(t) {
          if (this._isClosed)
            throw u(
              "InvalidStateError",
              "Attempted to call removeTrack on a closed peerconnection."
            );
          if (!(t instanceof e.RTCRtpSender))
            throw new TypeError(
              "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
            );
          var n = this.transceivers.find(function(e) {
            return e.rtpSender === t;
          });
          if (!n)
            throw u(
              "InvalidAccessError",
              "Sender was not created by this connection."
            );
          var r = n.stream;
          n.rtpSender.stop(),
            (n.rtpSender = null),
            (n.track = null),
            (n.stream = null),
            -1 ===
              this.transceivers
                .map(function(e) {
                  return e.stream;
                })
                .indexOf(r) &&
              this.localStreams.indexOf(r) > -1 &&
              this.localStreams.splice(this.localStreams.indexOf(r), 1),
            this._maybeFireNegotiationNeeded();
        }),
        (l.prototype.removeStream = function(e) {
          var t = this;
          e.getTracks().forEach(function(e) {
            var n = t.getSenders().find(function(t) {
              return t.track === e;
            });
            n && t.removeTrack(n);
          });
        }),
        (l.prototype.getSenders = function() {
          return this.transceivers
            .filter(function(e) {
              return !!e.rtpSender;
            })
            .map(function(e) {
              return e.rtpSender;
            });
        }),
        (l.prototype.getReceivers = function() {
          return this.transceivers
            .filter(function(e) {
              return !!e.rtpReceiver;
            })
            .map(function(e) {
              return e.rtpReceiver;
            });
        }),
        (l.prototype._createIceGatherer = function(t, n) {
          var r = this;
          if (n && t > 0) return this.transceivers[0].iceGatherer;
          if (this._iceGatherers.length) return this._iceGatherers.shift();
          var i = new e.RTCIceGatherer({
            iceServers: this._config.iceServers,
            gatherPolicy: this._config.iceTransportPolicy
          });
          return (
            Object.defineProperty(i, "state", { value: "new", writable: !0 }),
            (this.transceivers[t].bufferedCandidateEvents = []),
            (this.transceivers[t].bufferCandidates = function(e) {
              var n = !e.candidate || 0 === Object.keys(e.candidate).length;
              (i.state = n ? "completed" : "gathering"),
                null !== r.transceivers[t].bufferedCandidateEvents &&
                  r.transceivers[t].bufferedCandidateEvents.push(e);
            }),
            i.addEventListener(
              "localcandidate",
              this.transceivers[t].bufferCandidates
            ),
            i
          );
        }),
        (l.prototype._gather = function(t, n) {
          var i = this,
            o = this.transceivers[n].iceGatherer;
          if (!o.onlocalcandidate) {
            var a = this.transceivers[n].bufferedCandidateEvents;
            (this.transceivers[n].bufferedCandidateEvents = null),
              o.removeEventListener(
                "localcandidate",
                this.transceivers[n].bufferCandidates
              ),
              (o.onlocalcandidate = function(e) {
                if (!(i.usingBundle && n > 0)) {
                  var a = new Event("icecandidate");
                  a.candidate = { sdpMid: t, sdpMLineIndex: n };
                  var c = e.candidate,
                    u = !c || 0 === Object.keys(c).length;
                  if (u)
                    ("new" !== o.state && "gathering" !== o.state) ||
                      (o.state = "completed");
                  else {
                    "new" === o.state && (o.state = "gathering"),
                      (c.component = 1),
                      (c.ufrag = o.getLocalParameters().usernameFragment);
                    var s = r.writeCandidate(c);
                    (a.candidate = Object.assign(
                      a.candidate,
                      r.parseCandidate(s)
                    )),
                      (a.candidate.candidate = s),
                      (a.candidate.toJSON = function() {
                        return {
                          candidate: a.candidate.candidate,
                          sdpMid: a.candidate.sdpMid,
                          sdpMLineIndex: a.candidate.sdpMLineIndex,
                          usernameFragment: a.candidate.usernameFragment
                        };
                      });
                  }
                  var l = r.getMediaSections(i._localDescription.sdp);
                  (l[a.candidate.sdpMLineIndex] += u
                    ? "a=end-of-candidates\r\n"
                    : "a=" + a.candidate.candidate + "\r\n"),
                    (i._localDescription.sdp =
                      r.getDescription(i._localDescription.sdp) + l.join(""));
                  var f = i.transceivers.every(function(e) {
                    return e.iceGatherer && "completed" === e.iceGatherer.state;
                  });
                  "gathering" !== i.iceGatheringState &&
                    ((i.iceGatheringState = "gathering"),
                    i._emitGatheringStateChange()),
                    u || i._dispatchEvent("icecandidate", a),
                    f &&
                      (i._dispatchEvent(
                        "icecandidate",
                        new Event("icecandidate")
                      ),
                      (i.iceGatheringState = "complete"),
                      i._emitGatheringStateChange());
                }
              }),
              e.setTimeout(function() {
                a.forEach(function(e) {
                  o.onlocalcandidate(e);
                });
              }, 0);
          }
        }),
        (l.prototype._createIceAndDtlsTransports = function() {
          var t = this,
            n = new e.RTCIceTransport(null);
          n.onicestatechange = function() {
            t._updateIceConnectionState(), t._updateConnectionState();
          };
          var r = new e.RTCDtlsTransport(n);
          return (
            (r.ondtlsstatechange = function() {
              t._updateConnectionState();
            }),
            (r.onerror = function() {
              Object.defineProperty(r, "state", {
                value: "failed",
                writable: !0
              }),
                t._updateConnectionState();
            }),
            { iceTransport: n, dtlsTransport: r }
          );
        }),
        (l.prototype._disposeIceAndDtlsTransports = function(e) {
          var t = this.transceivers[e].iceGatherer;
          t &&
            (delete t.onlocalcandidate,
            delete this.transceivers[e].iceGatherer);
          var n = this.transceivers[e].iceTransport;
          n &&
            (delete n.onicestatechange,
            delete this.transceivers[e].iceTransport);
          var r = this.transceivers[e].dtlsTransport;
          r &&
            (delete r.ondtlsstatechange,
            delete r.onerror,
            delete this.transceivers[e].dtlsTransport);
        }),
        (l.prototype._transceive = function(e, n, i) {
          var a = o(e.localCapabilities, e.remoteCapabilities);
          n &&
            e.rtpSender &&
            ((a.encodings = e.sendEncodingParameters),
            (a.rtcp = {
              cname: r.localCName,
              compound: e.rtcpParameters.compound
            }),
            e.recvEncodingParameters.length &&
              (a.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
            e.rtpSender.send(a)),
            i &&
              e.rtpReceiver &&
              a.codecs.length > 0 &&
              ("video" === e.kind &&
                e.recvEncodingParameters &&
                t < 15019 &&
                e.recvEncodingParameters.forEach(function(e) {
                  delete e.rtx;
                }),
              e.recvEncodingParameters.length
                ? (a.encodings = e.recvEncodingParameters)
                : (a.encodings = [{}]),
              (a.rtcp = { compound: e.rtcpParameters.compound }),
              e.rtcpParameters.cname && (a.rtcp.cname = e.rtcpParameters.cname),
              e.sendEncodingParameters.length &&
                (a.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
              e.rtpReceiver.receive(a));
        }),
        (l.prototype.setLocalDescription = function(e) {
          var t,
            n,
            i = this;
          if (-1 === ["offer", "answer"].indexOf(e.type))
            return Promise.reject(
              u("TypeError", 'Unsupported type "' + e.type + '"')
            );
          if (
            !a("setLocalDescription", e.type, i.signalingState) ||
            i._isClosed
          )
            return Promise.reject(
              u(
                "InvalidStateError",
                "Can not set local " + e.type + " in state " + i.signalingState
              )
            );
          if ("offer" === e.type)
            (t = r.splitSections(e.sdp)),
              (n = t.shift()),
              t.forEach(function(e, t) {
                var n = r.parseRtpParameters(e);
                i.transceivers[t].localCapabilities = n;
              }),
              i.transceivers.forEach(function(e, t) {
                i._gather(e.mid, t);
              });
          else if ("answer" === e.type) {
            (t = r.splitSections(i._remoteDescription.sdp)), (n = t.shift());
            var c = r.matchPrefix(n, "a=ice-lite").length > 0;
            t.forEach(function(e, t) {
              var a = i.transceivers[t],
                u = a.iceGatherer,
                s = a.iceTransport,
                l = a.dtlsTransport,
                f = a.localCapabilities,
                d = a.remoteCapabilities;
              if (
                !(
                  r.isRejected(e) &&
                  0 === r.matchPrefix(e, "a=bundle-only").length
                ) &&
                !a.rejected
              ) {
                var p = r.getIceParameters(e, n),
                  h = r.getDtlsParameters(e, n);
                c && (h.role = "server"),
                  (i.usingBundle && 0 !== t) ||
                    (i._gather(a.mid, t),
                    "new" === s.state &&
                      s.start(u, p, c ? "controlling" : "controlled"),
                    "new" === l.state && l.start(h));
                var v = o(f, d);
                i._transceive(a, v.codecs.length > 0, !1);
              }
            });
          }
          return (
            (i._localDescription = { type: e.type, sdp: e.sdp }),
            "offer" === e.type
              ? i._updateSignalingState("have-local-offer")
              : i._updateSignalingState("stable"),
            Promise.resolve()
          );
        }),
        (l.prototype.setRemoteDescription = function(i) {
          var l = this;
          if (-1 === ["offer", "answer"].indexOf(i.type))
            return Promise.reject(
              u("TypeError", 'Unsupported type "' + i.type + '"')
            );
          if (
            !a("setRemoteDescription", i.type, l.signalingState) ||
            l._isClosed
          )
            return Promise.reject(
              u(
                "InvalidStateError",
                "Can not set remote " + i.type + " in state " + l.signalingState
              )
            );
          var f = {};
          l.remoteStreams.forEach(function(e) {
            f[e.id] = e;
          });
          var d = [],
            p = r.splitSections(i.sdp),
            h = p.shift(),
            v = r.matchPrefix(h, "a=ice-lite").length > 0,
            m = r.matchPrefix(h, "a=group:BUNDLE ").length > 0;
          l.usingBundle = m;
          var y = r.matchPrefix(h, "a=ice-options:")[0];
          return (
            (l.canTrickleIceCandidates =
              !!y &&
              y
                .substr(14)
                .split(" ")
                .indexOf("trickle") >= 0),
            p.forEach(function(a, u) {
              var s = r.splitLines(a),
                p = r.getKind(a),
                y =
                  r.isRejected(a) &&
                  0 === r.matchPrefix(a, "a=bundle-only").length,
                g = s[0].substr(2).split(" ")[2],
                b = r.getDirection(a, h),
                w = r.parseMsid(a),
                S = r.getMid(a) || r.generateIdentifier();
              if (
                y ||
                ("application" === p &&
                  ("DTLS/SCTP" === g || "UDP/DTLS/SCTP" === g))
              )
                l.transceivers[u] = {
                  mid: S,
                  kind: p,
                  protocol: g,
                  rejected: !0
                };
              else {
                var E, T, x, C, k, _, P, R, O;
                !y &&
                  l.transceivers[u] &&
                  l.transceivers[u].rejected &&
                  (l.transceivers[u] = l._createTransceiver(p, !0));
                var M,
                  I,
                  L = r.parseRtpParameters(a);
                y ||
                  ((M = r.getIceParameters(a, h)),
                  ((I = r.getDtlsParameters(a, h)).role = "client")),
                  (P = r.parseRtpEncodingParameters(a));
                var N = r.parseRtcpParameters(a),
                  A = r.matchPrefix(a, "a=end-of-candidates", h).length > 0,
                  D = r
                    .matchPrefix(a, "a=candidate:")
                    .map(function(e) {
                      return r.parseCandidate(e);
                    })
                    .filter(function(e) {
                      return 1 === e.component;
                    });
                if (
                  (("offer" === i.type || "answer" === i.type) &&
                    !y &&
                    m &&
                    u > 0 &&
                    l.transceivers[u] &&
                    (l._disposeIceAndDtlsTransports(u),
                    (l.transceivers[u].iceGatherer =
                      l.transceivers[0].iceGatherer),
                    (l.transceivers[u].iceTransport =
                      l.transceivers[0].iceTransport),
                    (l.transceivers[u].dtlsTransport =
                      l.transceivers[0].dtlsTransport),
                    l.transceivers[u].rtpSender &&
                      l.transceivers[u].rtpSender.setTransport(
                        l.transceivers[0].dtlsTransport
                      ),
                    l.transceivers[u].rtpReceiver &&
                      l.transceivers[u].rtpReceiver.setTransport(
                        l.transceivers[0].dtlsTransport
                      )),
                  "offer" !== i.type || y)
                ) {
                  if ("answer" === i.type && !y) {
                    (T = (E = l.transceivers[u]).iceGatherer),
                      (x = E.iceTransport),
                      (C = E.dtlsTransport),
                      (k = E.rtpReceiver),
                      (_ = E.sendEncodingParameters),
                      (R = E.localCapabilities),
                      (l.transceivers[u].recvEncodingParameters = P),
                      (l.transceivers[u].remoteCapabilities = L),
                      (l.transceivers[u].rtcpParameters = N),
                      D.length &&
                        "new" === x.state &&
                        ((!v && !A) || (m && 0 !== u)
                          ? D.forEach(function(e) {
                              c(E.iceTransport, e);
                            })
                          : x.setRemoteCandidates(D)),
                      (m && 0 !== u) ||
                        ("new" === x.state && x.start(T, M, "controlling"),
                        "new" === C.state && C.start(I)),
                      !o(
                        E.localCapabilities,
                        E.remoteCapabilities
                      ).codecs.filter(function(e) {
                        return "rtx" === e.name.toLowerCase();
                      }).length &&
                        E.sendEncodingParameters[0].rtx &&
                        delete E.sendEncodingParameters[0].rtx,
                      l._transceive(
                        E,
                        "sendrecv" === b || "recvonly" === b,
                        "sendrecv" === b || "sendonly" === b
                      ),
                      !k || ("sendrecv" !== b && "sendonly" !== b)
                        ? delete E.rtpReceiver
                        : ((O = k.track),
                          w
                            ? (f[w.stream] ||
                                (f[w.stream] = new e.MediaStream()),
                              n(O, f[w.stream]),
                              d.push([O, k, f[w.stream]]))
                            : (f.default || (f.default = new e.MediaStream()),
                              n(O, f.default),
                              d.push([O, k, f.default])));
                  }
                } else {
                  ((E = l.transceivers[u] || l._createTransceiver(p)).mid = S),
                    E.iceGatherer ||
                      (E.iceGatherer = l._createIceGatherer(u, m)),
                    D.length &&
                      "new" === E.iceTransport.state &&
                      (!A || (m && 0 !== u)
                        ? D.forEach(function(e) {
                            c(E.iceTransport, e);
                          })
                        : E.iceTransport.setRemoteCandidates(D)),
                    (R = e.RTCRtpReceiver.getCapabilities(p)),
                    t < 15019 &&
                      (R.codecs = R.codecs.filter(function(e) {
                        return "rtx" !== e.name;
                      })),
                    (_ = E.sendEncodingParameters || [
                      { ssrc: 1001 * (2 * u + 2) }
                    ]);
                  var j,
                    F = !1;
                  if ("sendrecv" === b || "sendonly" === b) {
                    if (
                      ((F = !E.rtpReceiver),
                      (k =
                        E.rtpReceiver ||
                        new e.RTCRtpReceiver(E.dtlsTransport, p)),
                      F)
                    )
                      (O = k.track),
                        (w && "-" === w.stream) ||
                          (w
                            ? (f[w.stream] ||
                                ((f[w.stream] = new e.MediaStream()),
                                Object.defineProperty(f[w.stream], "id", {
                                  get: function() {
                                    return w.stream;
                                  }
                                })),
                              Object.defineProperty(O, "id", {
                                get: function() {
                                  return w.track;
                                }
                              }),
                              (j = f[w.stream]))
                            : (f.default || (f.default = new e.MediaStream()),
                              (j = f.default))),
                        j && (n(O, j), E.associatedRemoteMediaStreams.push(j)),
                        d.push([O, k, j]);
                  } else
                    E.rtpReceiver &&
                      E.rtpReceiver.track &&
                      (E.associatedRemoteMediaStreams.forEach(function(t) {
                        var n = t.getTracks().find(function(e) {
                          return e.id === E.rtpReceiver.track.id;
                        });
                        n &&
                          (function(t, n) {
                            n.removeTrack(t),
                              n.dispatchEvent(
                                new e.MediaStreamTrackEvent("removetrack", {
                                  track: t
                                })
                              );
                          })(n, t);
                      }),
                      (E.associatedRemoteMediaStreams = []));
                  (E.localCapabilities = R),
                    (E.remoteCapabilities = L),
                    (E.rtpReceiver = k),
                    (E.rtcpParameters = N),
                    (E.sendEncodingParameters = _),
                    (E.recvEncodingParameters = P),
                    l._transceive(l.transceivers[u], !1, F);
                }
              }
            }),
            void 0 === l._dtlsRole &&
              (l._dtlsRole = "offer" === i.type ? "active" : "passive"),
            (l._remoteDescription = { type: i.type, sdp: i.sdp }),
            "offer" === i.type
              ? l._updateSignalingState("have-remote-offer")
              : l._updateSignalingState("stable"),
            Object.keys(f).forEach(function(t) {
              var n = f[t];
              if (n.getTracks().length) {
                if (-1 === l.remoteStreams.indexOf(n)) {
                  l.remoteStreams.push(n);
                  var r = new Event("addstream");
                  (r.stream = n),
                    e.setTimeout(function() {
                      l._dispatchEvent("addstream", r);
                    });
                }
                d.forEach(function(e) {
                  var t = e[0],
                    r = e[1];
                  n.id === e[2].id && s(l, t, r, [n]);
                });
              }
            }),
            d.forEach(function(e) {
              e[2] || s(l, e[0], e[1], []);
            }),
            e.setTimeout(function() {
              l &&
                l.transceivers &&
                l.transceivers.forEach(function(e) {
                  e.iceTransport &&
                    "new" === e.iceTransport.state &&
                    e.iceTransport.getRemoteCandidates().length > 0 &&
                    (console.warn(
                      "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
                    ),
                    e.iceTransport.addRemoteCandidate({}));
                });
            }, 4e3),
            Promise.resolve()
          );
        }),
        (l.prototype.close = function() {
          this.transceivers.forEach(function(e) {
            e.iceTransport && e.iceTransport.stop(),
              e.dtlsTransport && e.dtlsTransport.stop(),
              e.rtpSender && e.rtpSender.stop(),
              e.rtpReceiver && e.rtpReceiver.stop();
          }),
            (this._isClosed = !0),
            this._updateSignalingState("closed");
        }),
        (l.prototype._updateSignalingState = function(e) {
          this.signalingState = e;
          var t = new Event("signalingstatechange");
          this._dispatchEvent("signalingstatechange", t);
        }),
        (l.prototype._maybeFireNegotiationNeeded = function() {
          var t = this;
          "stable" === this.signalingState &&
            !0 !== this.needNegotiation &&
            ((this.needNegotiation = !0),
            e.setTimeout(function() {
              if (t.needNegotiation) {
                t.needNegotiation = !1;
                var e = new Event("negotiationneeded");
                t._dispatchEvent("negotiationneeded", e);
              }
            }, 0));
        }),
        (l.prototype._updateIceConnectionState = function() {
          var e,
            t = {
              new: 0,
              closed: 0,
              checking: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };
          if (
            (this.transceivers.forEach(function(e) {
              e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
            }),
            (e = "new"),
            t.failed > 0
              ? (e = "failed")
              : t.checking > 0
              ? (e = "checking")
              : t.disconnected > 0
              ? (e = "disconnected")
              : t.new > 0
              ? (e = "new")
              : t.connected > 0
              ? (e = "connected")
              : t.completed > 0 && (e = "completed"),
            e !== this.iceConnectionState)
          ) {
            this.iceConnectionState = e;
            var n = new Event("iceconnectionstatechange");
            this._dispatchEvent("iceconnectionstatechange", n);
          }
        }),
        (l.prototype._updateConnectionState = function() {
          var e,
            t = {
              new: 0,
              closed: 0,
              connecting: 0,
              connected: 0,
              completed: 0,
              disconnected: 0,
              failed: 0
            };
          if (
            (this.transceivers.forEach(function(e) {
              e.iceTransport &&
                e.dtlsTransport &&
                !e.rejected &&
                (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
            }),
            (t.connected += t.completed),
            (e = "new"),
            t.failed > 0
              ? (e = "failed")
              : t.connecting > 0
              ? (e = "connecting")
              : t.disconnected > 0
              ? (e = "disconnected")
              : t.new > 0
              ? (e = "new")
              : t.connected > 0 && (e = "connected"),
            e !== this.connectionState)
          ) {
            this.connectionState = e;
            var n = new Event("connectionstatechange");
            this._dispatchEvent("connectionstatechange", n);
          }
        }),
        (l.prototype.createOffer = function() {
          var n = this;
          if (n._isClosed)
            return Promise.reject(
              u("InvalidStateError", "Can not call createOffer after close")
            );
          var o = n.transceivers.filter(function(e) {
              return "audio" === e.kind;
            }).length,
            a = n.transceivers.filter(function(e) {
              return "video" === e.kind;
            }).length,
            c = arguments[0];
          if (c) {
            if (c.mandatory || c.optional)
              throw new TypeError(
                "Legacy mandatory/optional constraints not supported."
              );
            void 0 !== c.offerToReceiveAudio &&
              (o =
                !0 === c.offerToReceiveAudio
                  ? 1
                  : !1 === c.offerToReceiveAudio
                  ? 0
                  : c.offerToReceiveAudio),
              void 0 !== c.offerToReceiveVideo &&
                (a =
                  !0 === c.offerToReceiveVideo
                    ? 1
                    : !1 === c.offerToReceiveVideo
                    ? 0
                    : c.offerToReceiveVideo);
          }
          for (
            n.transceivers.forEach(function(e) {
              "audio" === e.kind
                ? --o < 0 && (e.wantReceive = !1)
                : "video" === e.kind && --a < 0 && (e.wantReceive = !1);
            });
            o > 0 || a > 0;

          )
            o > 0 && (n._createTransceiver("audio"), o--),
              a > 0 && (n._createTransceiver("video"), a--);
          var s = r.writeSessionBoilerplate(
            n._sdpSessionId,
            n._sdpSessionVersion++
          );
          n.transceivers.forEach(function(i, o) {
            var a = i.track,
              c = i.kind,
              u = i.mid || r.generateIdentifier();
            (i.mid = u),
              i.iceGatherer ||
                (i.iceGatherer = n._createIceGatherer(o, n.usingBundle));
            var s = e.RTCRtpSender.getCapabilities(c);
            t < 15019 &&
              (s.codecs = s.codecs.filter(function(e) {
                return "rtx" !== e.name;
              })),
              s.codecs.forEach(function(e) {
                "H264" === e.name &&
                  void 0 === e.parameters["level-asymmetry-allowed"] &&
                  (e.parameters["level-asymmetry-allowed"] = "1"),
                  i.remoteCapabilities &&
                    i.remoteCapabilities.codecs &&
                    i.remoteCapabilities.codecs.forEach(function(t) {
                      e.name.toLowerCase() === t.name.toLowerCase() &&
                        e.clockRate === t.clockRate &&
                        (e.preferredPayloadType = t.payloadType);
                    });
              }),
              s.headerExtensions.forEach(function(e) {
                (
                  (i.remoteCapabilities &&
                    i.remoteCapabilities.headerExtensions) ||
                  []
                ).forEach(function(t) {
                  e.uri === t.uri && (e.id = t.id);
                });
              });
            var l = i.sendEncodingParameters || [{ ssrc: 1001 * (2 * o + 1) }];
            a &&
              t >= 15019 &&
              "video" === c &&
              !l[0].rtx &&
              (l[0].rtx = { ssrc: l[0].ssrc + 1 }),
              i.wantReceive &&
                (i.rtpReceiver = new e.RTCRtpReceiver(i.dtlsTransport, c)),
              (i.localCapabilities = s),
              (i.sendEncodingParameters = l);
          }),
            "max-compat" !== n._config.bundlePolicy &&
              (s +=
                "a=group:BUNDLE " +
                n.transceivers
                  .map(function(e) {
                    return e.mid;
                  })
                  .join(" ") +
                "\r\n"),
            (s += "a=ice-options:trickle\r\n"),
            n.transceivers.forEach(function(e, t) {
              (s += i(e, e.localCapabilities, "offer", e.stream, n._dtlsRole)),
                (s += "a=rtcp-rsize\r\n"),
                !e.iceGatherer ||
                  "new" === n.iceGatheringState ||
                  (0 !== t && n.usingBundle) ||
                  (e.iceGatherer.getLocalCandidates().forEach(function(e) {
                    (e.component = 1),
                      (s += "a=" + r.writeCandidate(e) + "\r\n");
                  }),
                  "completed" === e.iceGatherer.state &&
                    (s += "a=end-of-candidates\r\n"));
            });
          var l = new e.RTCSessionDescription({ type: "offer", sdp: s });
          return Promise.resolve(l);
        }),
        (l.prototype.createAnswer = function() {
          var n = this;
          if (n._isClosed)
            return Promise.reject(
              u("InvalidStateError", "Can not call createAnswer after close")
            );
          if (
            "have-remote-offer" !== n.signalingState &&
            "have-local-pranswer" !== n.signalingState
          )
            return Promise.reject(
              u(
                "InvalidStateError",
                "Can not call createAnswer in signalingState " +
                  n.signalingState
              )
            );
          var a = r.writeSessionBoilerplate(
            n._sdpSessionId,
            n._sdpSessionVersion++
          );
          n.usingBundle &&
            (a +=
              "a=group:BUNDLE " +
              n.transceivers
                .map(function(e) {
                  return e.mid;
                })
                .join(" ") +
              "\r\n"),
            (a += "a=ice-options:trickle\r\n");
          var c = r.getMediaSections(n._remoteDescription.sdp).length;
          n.transceivers.forEach(function(e, r) {
            if (!(r + 1 > c)) {
              if (e.rejected)
                return (
                  "application" === e.kind
                    ? "DTLS/SCTP" === e.protocol
                      ? (a += "m=application 0 DTLS/SCTP 5000\r\n")
                      : (a +=
                          "m=application 0 " +
                          e.protocol +
                          " webrtc-datachannel\r\n")
                    : "audio" === e.kind
                    ? (a +=
                        "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                    : "video" === e.kind &&
                      (a +=
                        "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                  void (a +=
                    "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" + e.mid + "\r\n")
                );
              var u;
              if (e.stream)
                "audio" === e.kind
                  ? (u = e.stream.getAudioTracks()[0])
                  : "video" === e.kind && (u = e.stream.getVideoTracks()[0]),
                  u &&
                    t >= 15019 &&
                    "video" === e.kind &&
                    !e.sendEncodingParameters[0].rtx &&
                    (e.sendEncodingParameters[0].rtx = {
                      ssrc: e.sendEncodingParameters[0].ssrc + 1
                    });
              var s = o(e.localCapabilities, e.remoteCapabilities);
              !s.codecs.filter(function(e) {
                return "rtx" === e.name.toLowerCase();
              }).length &&
                e.sendEncodingParameters[0].rtx &&
                delete e.sendEncodingParameters[0].rtx,
                (a += i(e, s, "answer", e.stream, n._dtlsRole)),
                e.rtcpParameters &&
                  e.rtcpParameters.reducedSize &&
                  (a += "a=rtcp-rsize\r\n");
            }
          });
          var s = new e.RTCSessionDescription({ type: "answer", sdp: a });
          return Promise.resolve(s);
        }),
        (l.prototype.addIceCandidate = function(e) {
          var t,
            n = this;
          return e && void 0 === e.sdpMLineIndex && !e.sdpMid
            ? Promise.reject(new TypeError("sdpMLineIndex or sdpMid required"))
            : new Promise(function(i, o) {
                if (!n._remoteDescription)
                  return o(
                    u(
                      "InvalidStateError",
                      "Can not add ICE candidate without a remote description"
                    )
                  );
                if (e && "" !== e.candidate) {
                  var a = e.sdpMLineIndex;
                  if (e.sdpMid)
                    for (var s = 0; s < n.transceivers.length; s++)
                      if (n.transceivers[s].mid === e.sdpMid) {
                        a = s;
                        break;
                      }
                  var l = n.transceivers[a];
                  if (!l)
                    return o(u("OperationError", "Can not add ICE candidate"));
                  if (l.rejected) return i();
                  var f =
                    Object.keys(e.candidate).length > 0
                      ? r.parseCandidate(e.candidate)
                      : {};
                  if ("tcp" === f.protocol && (0 === f.port || 9 === f.port))
                    return i();
                  if (f.component && 1 !== f.component) return i();
                  if (
                    (0 === a ||
                      (a > 0 &&
                        l.iceTransport !== n.transceivers[0].iceTransport)) &&
                    !c(l.iceTransport, f)
                  )
                    return o(u("OperationError", "Can not add ICE candidate"));
                  var d = e.candidate.trim();
                  0 === d.indexOf("a=") && (d = d.substr(2)),
                    ((t = r.getMediaSections(n._remoteDescription.sdp))[a] +=
                      "a=" + (f.type ? d : "end-of-candidates") + "\r\n"),
                    (n._remoteDescription.sdp =
                      r.getDescription(n._remoteDescription.sdp) + t.join(""));
                } else for (var p = 0; p < n.transceivers.length && (n.transceivers[p].rejected || (n.transceivers[p].iceTransport.addRemoteCandidate({}), ((t = r.getMediaSections(n._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n"), (n._remoteDescription.sdp = r.getDescription(n._remoteDescription.sdp) + t.join("")), !n.usingBundle)); p++);
                i();
              });
        }),
        (l.prototype.getStats = function(t) {
          if (t && t instanceof e.MediaStreamTrack) {
            var n = null;
            if (
              (this.transceivers.forEach(function(e) {
                e.rtpSender && e.rtpSender.track === t
                  ? (n = e.rtpSender)
                  : e.rtpReceiver &&
                    e.rtpReceiver.track === t &&
                    (n = e.rtpReceiver);
              }),
              !n)
            )
              throw u("InvalidAccessError", "Invalid selector.");
            return n.getStats();
          }
          var r = [];
          return (
            this.transceivers.forEach(function(e) {
              [
                "rtpSender",
                "rtpReceiver",
                "iceGatherer",
                "iceTransport",
                "dtlsTransport"
              ].forEach(function(t) {
                e[t] && r.push(e[t].getStats());
              });
            }),
            Promise.all(r).then(function(e) {
              var t = new Map();
              return (
                e.forEach(function(e) {
                  e.forEach(function(e) {
                    t.set(e.id, e);
                  });
                }),
                t
              );
            })
          );
        });
      [
        "RTCRtpSender",
        "RTCRtpReceiver",
        "RTCIceGatherer",
        "RTCIceTransport",
        "RTCDtlsTransport"
      ].forEach(function(t) {
        var n = e[t];
        if (n && n.prototype && n.prototype.getStats) {
          var r = n.prototype.getStats;
          n.prototype.getStats = function() {
            return r.apply(this).then(function(e) {
              var t = new Map();
              return (
                Object.keys(e).forEach(function(n) {
                  var r;
                  (e[n].type =
                    {
                      inboundrtp: "inbound-rtp",
                      outboundrtp: "outbound-rtp",
                      candidatepair: "candidate-pair",
                      localcandidate: "local-candidate",
                      remotecandidate: "remote-candidate"
                    }[(r = e[n]).type] || r.type),
                    t.set(n, e[n]);
                }),
                t
              );
            });
          };
        }
      });
      var f = ["createOffer", "createAnswer"];
      return (
        f.forEach(function(e) {
          var t = l.prototype[e];
          l.prototype[e] = function() {
            var e = arguments;
            return "function" == typeof e[0] || "function" == typeof e[1]
              ? t.apply(this, [arguments[2]]).then(
                  function(t) {
                    "function" == typeof e[0] && e[0].apply(null, [t]);
                  },
                  function(t) {
                    "function" == typeof e[1] && e[1].apply(null, [t]);
                  }
                )
              : t.apply(this, arguments);
          };
        }),
        (f = [
          "setLocalDescription",
          "setRemoteDescription",
          "addIceCandidate"
        ]).forEach(function(e) {
          var t = l.prototype[e];
          l.prototype[e] = function() {
            var e = arguments;
            return "function" == typeof e[1] || "function" == typeof e[2]
              ? t.apply(this, arguments).then(
                  function() {
                    "function" == typeof e[1] && e[1].apply(null);
                  },
                  function(t) {
                    "function" == typeof e[2] && e[2].apply(null, [t]);
                  }
                )
              : t.apply(this, arguments);
          };
        }),
        ["getStats"].forEach(function(e) {
          var t = l.prototype[e];
          l.prototype[e] = function() {
            var e = arguments;
            return "function" == typeof e[1]
              ? t.apply(this, arguments).then(function() {
                  "function" == typeof e[1] && e[1].apply(null);
                })
              : t.apply(this, arguments);
          };
        }),
        l
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1),
      o = y(i),
      a = n(97),
      c = n(354);
    n(152);
    var u = y(n(338)),
      s = y(n(342)),
      l = y(n(347)),
      f = y(n(348)),
      d = y(n(93)),
      p = y(n(349)),
      h = y(n(350)),
      v = y(n(351)),
      m = y(n(352));
    function y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var g = {
        topNav: {
          position: "absolute",
          zIndex: 99,
          left: 0,
          top: 0,
          width: "100%",
          background: "#fff",
          boxShadow: "0 0 5px 0px #c77cff",
          transition: ".2s all ease-out"
        },
        trigger: {
          position: "absolute",
          top: "100%",
          left: "50%",
          background: "#fff",
          padding: "5px 10px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "rgb(199, 124, 255) 0px 5px 15px -5px",
          color: "#000000c7",
          cursor: "pointer"
        },
        close: { transform: "translateY(-90%)" }
      },
      b = function() {
        var e = (0, i.useState)(!1),
          t = r(e, 2),
          n = t[0],
          a = t[1];
        return o.default.createElement(
          "nav",
          { style: Object.assign({}, g.topNav, !n && g.close) },
          o.default.createElement(c.Link, { to: "/useSize" }, "useSize"),
          o.default.createElement(c.Link, { to: "/useCamera" }, "useCamera"),
          o.default.createElement(c.Link, { to: "/useSwipe" }, "useSwipe"),
          o.default.createElement(
            c.Link,
            { to: "/useLocalStorage" },
            "useLocalStorage"
          ),
          o.default.createElement(
            c.Link,
            { to: "/useFormState" },
            "useFormState"
          ),
          o.default.createElement(c.Link, { to: "/usePortal" }, "usePortal"),
          o.default.createElement(
            c.Link,
            { to: "/usePlaceholder" },
            "usePlaceHolder"
          ),
          o.default.createElement(
            c.Link,
            { to: "/useScrollAnimation" },
            "useScrollAnimation"
          ),
          o.default.createElement(
            "span",
            {
              onClick: function() {
                return a(!n);
              },
              style: g.trigger
            },
            "▽"
          )
        );
      },
      w = function() {
        var e = (0, c.useParams)().hook,
          t = (0, d.default)(e),
          n = r(t, 2),
          i = n[0],
          a = n[1];
        return o.default.createElement(
          o.default.Fragment,
          null,
          !i &&
            o.default.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "3px",
                  background: "#eee",
                  zIndex: 100
                }
              },
              o.default.createElement("div", {
                style: {
                  position: "absolute",
                  top: 0,
                  transition: ".1s all ease-out",
                  right: 100 - a + "%",
                  width: "100%",
                  height: "3px",
                  background: "#ff5200"
                }
              })
            ),
          (function() {
            switch (e) {
              case "useCamera":
                return o.default.createElement(s.default, null);
              case "useSize":
                return o.default.createElement(u.default, null);
              case "useSwipe":
                return o.default.createElement(l.default, null);
              case "useLocalStorage":
                return o.default.createElement(f.default, null);
              case "useFormState":
                return o.default.createElement(p.default, null);
              case "usePortal":
                return o.default.createElement(h.default, null);
              case "usePlaceholder":
                return o.default.createElement(v.default, null);
              case "useScrollAnimation":
                return o.default.createElement(m.default, null);
              default:
                return null;
            }
          })()
        );
      };
    (0, a.render)(
      o.default.createElement(function() {
        return o.default.createElement(
          c.HashRouter,
          null,
          o.default.createElement(b, null),
          o.default.createElement(
            c.Switch,
            null,
            o.default.createElement(
              c.Route,
              { path: "/:hook" },
              o.default.createElement(w, null)
            )
          )
        );
      }, null),
      document.getElementById("root")
    );
  },
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(96),
      i = "function" == typeof Symbol && Symbol.for,
      o = i ? Symbol.for("react.element") : 60103,
      a = i ? Symbol.for("react.portal") : 60106,
      c = i ? Symbol.for("react.fragment") : 60107,
      u = i ? Symbol.for("react.strict_mode") : 60108,
      s = i ? Symbol.for("react.profiler") : 60114,
      l = i ? Symbol.for("react.provider") : 60109,
      f = i ? Symbol.for("react.context") : 60110,
      d = i ? Symbol.for("react.forward_ref") : 60112,
      p = i ? Symbol.for("react.suspense") : 60113;
    i && Symbol.for("react.suspense_list");
    var h = i ? Symbol.for("react.memo") : 60115,
      v = i ? Symbol.for("react.lazy") : 60116;
    i && Symbol.for("react.fundamental"),
      i && Symbol.for("react.responder"),
      i && Symbol.for("react.scope");
    var m = "function" == typeof Symbol && Symbol.iterator;
    function y(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
      },
      b = {};
    function w(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || g);
    }
    function S() {}
    function E(e, t, n) {
      (this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = n || g);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (S.prototype = w.prototype);
    var T = (E.prototype = new S());
    (T.constructor = E), r(T, w.prototype), (T.isPureReactComponent = !0);
    var x = { current: null },
      C = { current: null },
      k = Object.prototype.hasOwnProperty,
      _ = { key: !0, ref: !0, __self: !0, __source: !0 };
    function P(e, t, n) {
      var r,
        i = {},
        a = null,
        c = null;
      if (null != t)
        for (r in (void 0 !== t.ref && (c = t.ref),
        void 0 !== t.key && (a = "" + t.key),
        t))
          k.call(t, r) && !_.hasOwnProperty(r) && (i[r] = t[r]);
      var u = arguments.length - 2;
      if (1 === u) i.children = n;
      else if (1 < u) {
        for (var s = Array(u), l = 0; l < u; l++) s[l] = arguments[l + 2];
        i.children = s;
      }
      if (e && e.defaultProps)
        for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
      return {
        $$typeof: o,
        type: e,
        key: a,
        ref: c,
        props: i,
        _owner: C.current
      };
    }
    function R(e) {
      return "object" == typeof e && null !== e && e.$$typeof === o;
    }
    var O = /\/+/g,
      M = [];
    function I(e, t, n, r) {
      if (M.length) {
        var i = M.pop();
        return (
          (i.result = e),
          (i.keyPrefix = t),
          (i.func = n),
          (i.context = r),
          (i.count = 0),
          i
        );
      }
      return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
    }
    function L(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > M.length && M.push(e);
    }
    function N(e, t, n) {
      return null == e
        ? 0
        : (function e(t, n, r, i) {
            var c = typeof t;
            ("undefined" !== c && "boolean" !== c) || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else
              switch (c) {
                case "string":
                case "number":
                  u = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case o:
                    case a:
                      u = !0;
                  }
              }
            if (u) return r(i, t, "" === n ? "." + A(t, 0) : n), 1;
            if (((u = 0), (n = "" === n ? "." : n + ":"), Array.isArray(t)))
              for (var s = 0; s < t.length; s++) {
                var l = n + A((c = t[s]), s);
                u += e(c, l, r, i);
              }
            else if (
              (null === t || "object" != typeof t
                ? (l = null)
                : (l =
                    "function" == typeof (l = (m && t[m]) || t["@@iterator"])
                      ? l
                      : null),
              "function" == typeof l)
            )
              for (t = l.call(t), s = 0; !(c = t.next()).done; )
                u += e((c = c.value), (l = n + A(c, s++)), r, i);
            else if ("object" === c)
              throw ((r = "" + t),
              Error(
                y(
                  31,
                  "[object Object]" === r
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : r,
                  ""
                )
              ));
            return u;
          })(e, "", t, n);
    }
    function A(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function(e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function D(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function j(e, t, n) {
      var r = e.result,
        i = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? F(e, r, n, function(e) {
              return e;
            })
          : null != e &&
            (R(e) &&
              (e = (function(e, t) {
                return {
                  $$typeof: o,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner
                };
              })(
                e,
                i +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(O, "$&/") + "/") +
                  n
              )),
            r.push(e));
    }
    function F(e, t, n, r, i) {
      var o = "";
      null != n && (o = ("" + n).replace(O, "$&/") + "/"),
        N(e, j, (t = I(t, o, r, i))),
        L(t);
    }
    function U() {
      var e = x.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    var z = {
        Children: {
          map: function(e, t, n) {
            if (null == e) return e;
            var r = [];
            return F(e, r, null, t, n), r;
          },
          forEach: function(e, t, n) {
            if (null == e) return e;
            N(e, D, (t = I(null, null, t, n))), L(t);
          },
          count: function(e) {
            return N(
              e,
              function() {
                return null;
              },
              null
            );
          },
          toArray: function(e) {
            var t = [];
            return (
              F(e, t, null, function(e) {
                return e;
              }),
              t
            );
          },
          only: function(e) {
            if (!R(e)) throw Error(y(143));
            return e;
          }
        },
        createRef: function() {
          return { current: null };
        },
        Component: w,
        PureComponent: E,
        createContext: function(e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: f,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        },
        forwardRef: function(e) {
          return { $$typeof: d, render: e };
        },
        lazy: function(e) {
          return { $$typeof: v, _ctor: e, _status: -1, _result: null };
        },
        memo: function(e, t) {
          return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
        },
        useCallback: function(e, t) {
          return U().useCallback(e, t);
        },
        useContext: function(e, t) {
          return U().useContext(e, t);
        },
        useEffect: function(e, t) {
          return U().useEffect(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return U().useImperativeHandle(e, t, n);
        },
        useDebugValue: function() {},
        useLayoutEffect: function(e, t) {
          return U().useLayoutEffect(e, t);
        },
        useMemo: function(e, t) {
          return U().useMemo(e, t);
        },
        useReducer: function(e, t, n) {
          return U().useReducer(e, t, n);
        },
        useRef: function(e) {
          return U().useRef(e);
        },
        useState: function(e) {
          return U().useState(e);
        },
        Fragment: c,
        Profiler: s,
        StrictMode: u,
        Suspense: p,
        createElement: P,
        cloneElement: function(e, t, n) {
          if (null == e) throw Error(y(267, e));
          var i = r({}, e.props),
            a = e.key,
            c = e.ref,
            u = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((c = t.ref), (u = C.current)),
              void 0 !== t.key && (a = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var s = e.type.defaultProps;
            for (l in t)
              k.call(t, l) &&
                !_.hasOwnProperty(l) &&
                (i[l] = void 0 === t[l] && void 0 !== s ? s[l] : t[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) i.children = n;
          else if (1 < l) {
            s = Array(l);
            for (var f = 0; f < l; f++) s[f] = arguments[f + 2];
            i.children = s;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: a,
            ref: c,
            props: i,
            _owner: u
          };
        },
        createFactory: function(e) {
          var t = P.bind(null, e);
          return (t.type = e), t;
        },
        isValidElement: R,
        version: "16.12.0",
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: x,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: C,
          IsSomeRendererActing: { current: !1 },
          assign: r
        }
      },
      W = { default: z },
      V = (W && z) || W;
    e.exports = V.default || V;
  },
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r = n(1),
      i = n(96),
      o = n(146);
    function a(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    if (!r) throw Error(a(227));
    var c = null,
      u = {};
    function s() {
      if (c)
        for (var e in u) {
          var t = u[e],
            n = c.indexOf(e);
          if (!(-1 < n)) throw Error(a(96, e));
          if (!f[n]) {
            if (!t.extractEvents) throw Error(a(97, e));
            for (var r in ((f[n] = t), (n = t.eventTypes))) {
              var i = void 0,
                o = n[r],
                s = t,
                p = r;
              if (d.hasOwnProperty(p)) throw Error(a(99, p));
              d[p] = o;
              var h = o.phasedRegistrationNames;
              if (h) {
                for (i in h) h.hasOwnProperty(i) && l(h[i], s, p);
                i = !0;
              } else
                o.registrationName
                  ? (l(o.registrationName, s, p), (i = !0))
                  : (i = !1);
              if (!i) throw Error(a(98, r, e));
            }
          }
        }
    }
    function l(e, t, n) {
      if (p[e]) throw Error(a(100, e));
      (p[e] = t), (h[e] = t.eventTypes[n].dependencies);
    }
    var f = [],
      d = {},
      p = {},
      h = {};
    function v(e, t, n, r, i, o, a, c, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var m = !1,
      y = null,
      g = !1,
      b = null,
      w = {
        onError: function(e) {
          (m = !0), (y = e);
        }
      };
    function S(e, t, n, r, i, o, a, c, u) {
      (m = !1), (y = null), v.apply(w, arguments);
    }
    var E = null,
      T = null,
      x = null;
    function C(e, t, n) {
      var r = e.type || "unknown-event";
      (e.currentTarget = x(n)),
        (function(e, t, n, r, i, o, c, u, s) {
          if ((S.apply(this, arguments), m)) {
            if (!m) throw Error(a(198));
            var l = y;
            (m = !1), (y = null), g || ((g = !0), (b = l));
          }
        })(r, t, void 0, e),
        (e.currentTarget = null);
    }
    function k(e, t) {
      if (null == t) throw Error(a(30));
      return null == e
        ? t
        : Array.isArray(e)
        ? Array.isArray(t)
          ? (e.push.apply(e, t), e)
          : (e.push(t), e)
        : Array.isArray(t)
        ? [e].concat(t)
        : [e, t];
    }
    function _(e, t, n) {
      Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e);
    }
    var P = null;
    function R(e) {
      if (e) {
        var t = e._dispatchListeners,
          n = e._dispatchInstances;
        if (Array.isArray(t))
          for (var r = 0; r < t.length && !e.isPropagationStopped(); r++)
            C(e, t[r], n[r]);
        else t && C(e, t, n);
        (e._dispatchListeners = null),
          (e._dispatchInstances = null),
          e.isPersistent() || e.constructor.release(e);
      }
    }
    function O(e) {
      if ((null !== e && (P = k(P, e)), (e = P), (P = null), e)) {
        if ((_(e, R), P)) throw Error(a(95));
        if (g) throw ((e = b), (g = !1), (b = null), e);
      }
    }
    var M = {
      injectEventPluginOrder: function(e) {
        if (c) throw Error(a(101));
        (c = Array.prototype.slice.call(e)), s();
      },
      injectEventPluginsByName: function(e) {
        var t,
          n = !1;
        for (t in e)
          if (e.hasOwnProperty(t)) {
            var r = e[t];
            if (!u.hasOwnProperty(t) || u[t] !== r) {
              if (u[t]) throw Error(a(102, t));
              (u[t] = r), (n = !0);
            }
          }
        n && s();
      }
    };
    function I(e, t) {
      var n = e.stateNode;
      if (!n) return null;
      var r = E(n);
      if (!r) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
      return n;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    L.hasOwnProperty("ReactCurrentDispatcher") ||
      (L.ReactCurrentDispatcher = { current: null }),
      L.hasOwnProperty("ReactCurrentBatchConfig") ||
        (L.ReactCurrentBatchConfig = { suspense: null });
    var N = /^(.*)[\\\/]/,
      A = "function" == typeof Symbol && Symbol.for,
      D = A ? Symbol.for("react.element") : 60103,
      j = A ? Symbol.for("react.portal") : 60106,
      F = A ? Symbol.for("react.fragment") : 60107,
      U = A ? Symbol.for("react.strict_mode") : 60108,
      z = A ? Symbol.for("react.profiler") : 60114,
      W = A ? Symbol.for("react.provider") : 60109,
      V = A ? Symbol.for("react.context") : 60110,
      B = A ? Symbol.for("react.concurrent_mode") : 60111,
      G = A ? Symbol.for("react.forward_ref") : 60112,
      $ = A ? Symbol.for("react.suspense") : 60113,
      H = A ? Symbol.for("react.suspense_list") : 60120,
      K = A ? Symbol.for("react.memo") : 60115,
      Q = A ? Symbol.for("react.lazy") : 60116;
    A && Symbol.for("react.fundamental"),
      A && Symbol.for("react.responder"),
      A && Symbol.for("react.scope");
    var q = "function" == typeof Symbol && Symbol.iterator;
    function Y(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (q && e[q]) || e["@@iterator"])
        ? e
        : null;
    }
    function J(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case F:
          return "Fragment";
        case j:
          return "Portal";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case $:
          return "Suspense";
        case H:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case V:
            return "Context.Consumer";
          case W:
            return "Context.Provider";
          case G:
            var t = e.render;
            return (
              (t = t.displayName || t.name || ""),
              e.displayName ||
                ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
            );
          case K:
            return J(e.type);
          case Q:
            if ((e = 1 === e._status ? e._result : null)) return J(e);
        }
      return null;
    }
    function X(e) {
      var t = "";
      do {
        e: switch (e.tag) {
          case 3:
          case 4:
          case 6:
          case 7:
          case 10:
          case 9:
            var n = "";
            break e;
          default:
            var r = e._debugOwner,
              i = e._debugSource,
              o = J(e.type);
            (n = null),
              r && (n = J(r.type)),
              (r = o),
              (o = ""),
              i
                ? (o =
                    " (at " +
                    i.fileName.replace(N, "") +
                    ":" +
                    i.lineNumber +
                    ")")
                : n && (o = " (created by " + n + ")"),
              (n = "\n    in " + (r || "Unknown") + o);
        }
        (t += n), (e = e.return);
      } while (e);
      return t;
    }
    var Z = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      ee = null,
      te = null,
      ne = null;
    function re(e) {
      if ((e = T(e))) {
        if ("function" != typeof ee) throw Error(a(280));
        var t = E(e.stateNode);
        ee(e.stateNode, e.type, t);
      }
    }
    function ie(e) {
      te ? (ne ? ne.push(e) : (ne = [e])) : (te = e);
    }
    function oe() {
      if (te) {
        var e = te,
          t = ne;
        if (((ne = te = null), re(e), t))
          for (e = 0; e < t.length; e++) re(t[e]);
      }
    }
    function ae(e, t) {
      return e(t);
    }
    function ce(e, t, n, r) {
      return e(t, n, r);
    }
    function ue() {}
    var se = ae,
      le = !1,
      fe = !1;
    function de() {
      (null === te && null === ne) || (ue(), oe());
    }
    new Map();
    var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      he = Object.prototype.hasOwnProperty,
      ve = {},
      me = {};
    function ye(e, t, n, r, i, o) {
      (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o);
    }
    var ge = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function(e) {
        ge[e] = new ye(e, 0, !1, e, null, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
      ].forEach(function(e) {
        var t = e[0];
        ge[t] = new ye(t, 1, !1, e[1], null, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(
        e
      ) {
        ge[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
      ].forEach(function(e) {
        ge[e] = new ye(e, 2, !1, e, null, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function(e) {
          ge[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        ge[e] = new ye(e, 3, !0, e, null, !1);
      }),
      ["capture", "download"].forEach(function(e) {
        ge[e] = new ye(e, 4, !1, e, null, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function(e) {
        ge[e] = new ye(e, 6, !1, e, null, !1);
      }),
      ["rowSpan", "start"].forEach(function(e) {
        ge[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1);
      });
    var be = /[\-:]([a-z])/g;
    function we(e) {
      return e[1].toUpperCase();
    }
    function Se(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    function Ee(e, t, n, r) {
      var i = ge.hasOwnProperty(t) ? ge[t] : null;
      (null !== i
        ? 0 === i.type
        : !r &&
          2 < t.length &&
          ("o" === t[0] || "O" === t[0]) &&
          ("n" === t[1] || "N" === t[1])) ||
        ((function(e, t, n, r) {
          if (
            null == t ||
            (function(e, t, n, r) {
              if (null !== n && 0 === n.type) return !1;
              switch (typeof t) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, t, n, r)
          )
            return !0;
          if (r) return !1;
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t;
              case 4:
                return !1 === t;
              case 5:
                return isNaN(t);
              case 6:
                return isNaN(t) || 1 > t;
            }
          return !1;
        })(t, n, i, r) && (n = null),
        r || null === i
          ? (function(e) {
              return (
                !!he.call(me, e) ||
                (!he.call(ve, e) &&
                  (pe.test(e) ? (me[e] = !0) : ((ve[e] = !0), !1)))
              );
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : i.mustUseProperty
          ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
          : ((t = i.attributeName),
            (r = i.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (i = i.type) || (4 === i && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    function Te(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === t || "radio" === t)
      );
    }
    function xe(e) {
      e._valueTracker ||
        (e._valueTracker = (function(e) {
          var t = Te(e) ? "checked" : "value",
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = "" + e[t];
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            "function" == typeof n.get &&
            "function" == typeof n.set
          ) {
            var i = n.get,
              o = n.set;
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                  return i.call(this);
                },
                set: function(e) {
                  (r = "" + e), o.call(this, e);
                }
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function() {
                  return r;
                },
                setValue: function(e) {
                  r = "" + e;
                },
                stopTracking: function() {
                  (e._valueTracker = null), delete e[t];
                }
              }
            );
          }
        })(e));
    }
    function Ce(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = Te(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      );
    }
    function ke(e, t) {
      var n = t.checked;
      return i({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked
      });
    }
    function _e(e, t) {
      var n = null == t.defaultValue ? "" : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked;
      (n = Se(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            "checkbox" === t.type || "radio" === t.type
              ? null != t.checked
              : null != t.value
        });
    }
    function Pe(e, t) {
      null != (t = t.checked) && Ee(e, "checked", t, !1);
    }
    function Re(e, t) {
      Pe(e, t);
      var n = Se(t.value),
        r = t.type;
      if (null != n)
        "number" === r
          ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      t.hasOwnProperty("value")
        ? Me(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Me(e, t.type, Se(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked);
    }
    function Oe(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return;
        (t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      "" !== (n = e.name) && (e.name = ""),
        (e.defaultChecked = !e.defaultChecked),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== n && (e.name = n);
    }
    function Me(e, t, n) {
      ("number" === t && e.ownerDocument.activeElement === e) ||
        (null == n
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    function Ie(e, t) {
      return (
        (e = i({ children: void 0 }, t)),
        (t = (function(e) {
          var t = "";
          return (
            r.Children.forEach(e, function(e) {
              null != e && (t += e);
            }),
            t
          );
        })(t.children)) && (e.children = t),
        e
      );
    }
    function Le(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          (i = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0);
      } else {
        for (n = "" + Se(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n)
            return (
              (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
            );
          null !== t || e[i].disabled || (t = e[i]);
        }
        null !== t && (t.selected = !0);
      }
    }
    function Ne(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
      return i({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
      });
    }
    function Ae(e, t) {
      var n = t.value;
      if (null == n) {
        if (((n = t.defaultValue), null != (t = t.children))) {
          if (null != n) throw Error(a(92));
          if (Array.isArray(t)) {
            if (!(1 >= t.length)) throw Error(a(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = "");
      }
      e._wrapperState = { initialValue: Se(n) };
    }
    function De(e, t) {
      var n = Se(t.value),
        r = Se(t.defaultValue);
      null != n &&
        ((n = "" + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = "" + r);
    }
    function je(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        "" !== t &&
        null !== t &&
        (e.value = t);
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function(e) {
        var t = e.replace(be, we);
        ge[t] = new ye(t, 1, !1, e, null, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function(e) {
          var t = e.replace(be, we);
          ge[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(be, we);
        ge[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1);
      }),
      ["tabIndex", "crossOrigin"].forEach(function(e) {
        ge[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1);
      }),
      (ge.xlinkHref = new ye(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0
      )),
      ["src", "href", "action", "formAction"].forEach(function(e) {
        ge[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0);
      });
    var Fe = "http://www.w3.org/1999/xhtml",
      Ue = "http://www.w3.org/2000/svg";
    function ze(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function We(e, t) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? ze(t)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var Ve,
      Be = (function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function(t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function() {
                return e(t, n);
              });
            }
          : e;
      })(function(e, t) {
        if (e.namespaceURI !== Ue || "innerHTML" in e) e.innerHTML = t;
        else {
          for (
            (Ve = Ve || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = Ve.firstChild;
            e.firstChild;

          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function Ge(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t);
      }
      e.textContent = t;
    }
    function $e(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var He = {
        animationend: $e("Animation", "AnimationEnd"),
        animationiteration: $e("Animation", "AnimationIteration"),
        animationstart: $e("Animation", "AnimationStart"),
        transitionend: $e("Transition", "TransitionEnd")
      },
      Ke = {},
      Qe = {};
    function qe(e) {
      if (Ke[e]) return Ke[e];
      if (!He[e]) return e;
      var t,
        n = He[e];
      for (t in n) if (n.hasOwnProperty(t) && t in Qe) return (Ke[e] = n[t]);
      return e;
    }
    Z &&
      ((Qe = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete He.animationend.animation,
        delete He.animationiteration.animation,
        delete He.animationstart.animation),
      "TransitionEvent" in window || delete He.transitionend.transition);
    var Ye = qe("animationend"),
      Je = qe("animationiteration"),
      Xe = qe("animationstart"),
      Ze = qe("transitionend"),
      et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      );
    function tt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do {
          0 != (1026 & (t = e).effectTag) && (n = t.return), (e = t.return);
        } while (e);
      }
      return 3 === t.tag ? n : null;
    }
    function nt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState;
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated;
      }
      return null;
    }
    function rt(e) {
      if (tt(e) !== e) throw Error(a(188));
    }
    function it(e) {
      if (
        !(e = (function(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = tt(e))) throw Error(a(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var i = n.return;
            if (null === i) break;
            var o = i.alternate;
            if (null === o) {
              if (null !== (r = i.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (i.child === o.child) {
              for (o = i.child; o; ) {
                if (o === n) return rt(i), e;
                if (o === r) return rt(i), t;
                o = o.sibling;
              }
              throw Error(a(188));
            }
            if (n.return !== r.return) (n = i), (r = o);
            else {
              for (var c = !1, u = i.child; u; ) {
                if (u === n) {
                  (c = !0), (n = i), (r = o);
                  break;
                }
                if (u === r) {
                  (c = !0), (r = i), (n = o);
                  break;
                }
                u = u.sibling;
              }
              if (!c) {
                for (u = o.child; u; ) {
                  if (u === n) {
                    (c = !0), (n = o), (r = i);
                    break;
                  }
                  if (u === r) {
                    (c = !0), (r = o), (n = i);
                    break;
                  }
                  u = u.sibling;
                }
                if (!c) throw Error(a(189));
              }
            }
            if (n.alternate !== r) throw Error(a(190));
          }
          if (3 !== n.tag) throw Error(a(188));
          return n.stateNode.current === n ? e : t;
        })(e))
      )
        return null;
      for (var t = e; ; ) {
        if (5 === t.tag || 6 === t.tag) return t;
        if (t.child) (t.child.return = t), (t = t.child);
        else {
          if (t === e) break;
          for (; !t.sibling; ) {
            if (!t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return null;
    }
    var ot,
      at,
      ct,
      ut = !1,
      st = [],
      lt = null,
      ft = null,
      dt = null,
      pt = new Map(),
      ht = new Map(),
      vt = [],
      mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(
        " "
      ),
      yt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(
        " "
      );
    function gt(e, t, n, r) {
      return {
        blockedOn: e,
        topLevelType: t,
        eventSystemFlags: 32 | n,
        nativeEvent: r
      };
    }
    function bt(e, t) {
      switch (e) {
        case "focus":
        case "blur":
          lt = null;
          break;
        case "dragenter":
        case "dragleave":
          ft = null;
          break;
        case "mouseover":
        case "mouseout":
          dt = null;
          break;
        case "pointerover":
        case "pointerout":
          pt.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ht.delete(t.pointerId);
      }
    }
    function wt(e, t, n, r, i) {
      return null === e || e.nativeEvent !== i
        ? ((e = gt(t, n, r, i)), null !== t && null !== (t = sr(t)) && at(t), e)
        : ((e.eventSystemFlags |= r), e);
    }
    function St(e) {
      var t = ur(e.target);
      if (null !== t) {
        var n = tt(t);
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = nt(n)))
              return (
                (e.blockedOn = t),
                void o.unstable_runWithPriority(e.priority, function() {
                  ct(n);
                })
              );
          } else if (3 === t && n.stateNode.hydrate)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Et(e) {
      if (null !== e.blockedOn) return !1;
      var t = Mn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
      if (null !== t) {
        var n = sr(t);
        return null !== n && at(n), (e.blockedOn = t), !1;
      }
      return !0;
    }
    function Tt(e, t, n) {
      Et(e) && n.delete(t);
    }
    function xt() {
      for (ut = !1; 0 < st.length; ) {
        var e = st[0];
        if (null !== e.blockedOn) {
          null !== (e = sr(e.blockedOn)) && ot(e);
          break;
        }
        var t = Mn(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        null !== t ? (e.blockedOn = t) : st.shift();
      }
      null !== lt && Et(lt) && (lt = null),
        null !== ft && Et(ft) && (ft = null),
        null !== dt && Et(dt) && (dt = null),
        pt.forEach(Tt),
        ht.forEach(Tt);
    }
    function Ct(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        ut ||
          ((ut = !0),
          o.unstable_scheduleCallback(o.unstable_NormalPriority, xt)));
    }
    function kt(e) {
      function t(t) {
        return Ct(t, e);
      }
      if (0 < st.length) {
        Ct(st[0], e);
        for (var n = 1; n < st.length; n++) {
          var r = st[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== lt && Ct(lt, e),
          null !== ft && Ct(ft, e),
          null !== dt && Ct(dt, e),
          pt.forEach(t),
          ht.forEach(t),
          n = 0;
        n < vt.length;
        n++
      )
        (r = vt[n]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < vt.length && null === (n = vt[0]).blockedOn; )
        St(n), null === n.blockedOn && vt.shift();
    }
    function _t(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    function Pt(e) {
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function Rt(e, t, n) {
      (t = I(e, n.dispatchConfig.phasedRegistrationNames[t])) &&
        ((n._dispatchListeners = k(n._dispatchListeners, t)),
        (n._dispatchInstances = k(n._dispatchInstances, e)));
    }
    function Ot(e) {
      if (e && e.dispatchConfig.phasedRegistrationNames) {
        for (var t = e._targetInst, n = []; t; ) n.push(t), (t = Pt(t));
        for (t = n.length; 0 < t--; ) Rt(n[t], "captured", e);
        for (t = 0; t < n.length; t++) Rt(n[t], "bubbled", e);
      }
    }
    function Mt(e, t, n) {
      e &&
        n &&
        n.dispatchConfig.registrationName &&
        (t = I(e, n.dispatchConfig.registrationName)) &&
        ((n._dispatchListeners = k(n._dispatchListeners, t)),
        (n._dispatchInstances = k(n._dispatchInstances, e)));
    }
    function It(e) {
      e && e.dispatchConfig.registrationName && Mt(e._targetInst, null, e);
    }
    function Lt(e) {
      _(e, Ot);
    }
    function Nt() {
      return !0;
    }
    function At() {
      return !1;
    }
    function Dt(e, t, n, r) {
      for (var i in ((this.dispatchConfig = e),
      (this._targetInst = t),
      (this.nativeEvent = n),
      (e = this.constructor.Interface)))
        e.hasOwnProperty(i) &&
          ((t = e[i])
            ? (this[i] = t(n))
            : "target" === i
            ? (this.target = r)
            : (this[i] = n[i]));
      return (
        (this.isDefaultPrevented = (null != n.defaultPrevented
        ? n.defaultPrevented
        : !1 === n.returnValue)
          ? Nt
          : At),
        (this.isPropagationStopped = At),
        this
      );
    }
    function jt(e, t, n, r) {
      if (this.eventPool.length) {
        var i = this.eventPool.pop();
        return this.call(i, e, t, n, r), i;
      }
      return new this(e, t, n, r);
    }
    function Ft(e) {
      if (!(e instanceof this)) throw Error(a(279));
      e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e);
    }
    function Ut(e) {
      (e.eventPool = []), (e.getPooled = jt), (e.release = Ft);
    }
    i(Dt.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : "unknown" != typeof e.returnValue && (e.returnValue = !1),
          (this.isDefaultPrevented = Nt));
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
          (this.isPropagationStopped = Nt));
      },
      persist: function() {
        this.isPersistent = Nt;
      },
      isPersistent: At,
      destructor: function() {
        var e,
          t = this.constructor.Interface;
        for (e in t) this[e] = null;
        (this.nativeEvent = this._targetInst = this.dispatchConfig = null),
          (this.isPropagationStopped = this.isDefaultPrevented = At),
          (this._dispatchInstances = this._dispatchListeners = null);
      }
    }),
      (Dt.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
          return null;
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: null,
        isTrusted: null
      }),
      (Dt.extend = function(e) {
        function t() {}
        function n() {
          return r.apply(this, arguments);
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t();
        return (
          i(o, n.prototype),
          (n.prototype = o),
          (n.prototype.constructor = n),
          (n.Interface = i({}, r.Interface, e)),
          (n.extend = r.extend),
          Ut(n),
          n
        );
      }),
      Ut(Dt);
    var zt = Dt.extend({
        animationName: null,
        elapsedTime: null,
        pseudoElement: null
      }),
      Wt = Dt.extend({
        clipboardData: function(e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
      }),
      Vt = Dt.extend({ view: null, detail: null }),
      Bt = Vt.extend({ relatedTarget: null });
    function Gt(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    var $t = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      },
      Ht = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      },
      Kt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
      };
    function Qt(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Kt[e]) && !!t[e];
    }
    function qt() {
      return Qt;
    }
    for (
      var Yt = Vt.extend({
          key: function(e) {
            if (e.key) {
              var t = $t[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = Gt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Ht[e.keyCode] || "Unidentified"
              : "";
          },
          location: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          repeat: null,
          locale: null,
          getModifierState: qt,
          charCode: function(e) {
            return "keypress" === e.type ? Gt(e) : 0;
          },
          keyCode: function(e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function(e) {
            return "keypress" === e.type
              ? Gt(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          }
        }),
        Jt = 0,
        Xt = 0,
        Zt = !1,
        en = !1,
        tn = Vt.extend({
          screenX: null,
          screenY: null,
          clientX: null,
          clientY: null,
          pageX: null,
          pageY: null,
          ctrlKey: null,
          shiftKey: null,
          altKey: null,
          metaKey: null,
          getModifierState: qt,
          button: null,
          buttons: null,
          relatedTarget: function(e) {
            return (
              e.relatedTarget ||
              (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            );
          },
          movementX: function(e) {
            if (("movementX" in e)) return e.movementX;
            var t = Jt;
            return (
              (Jt = e.screenX),
              Zt ? ("mousemove" === e.type ? e.screenX - t : 0) : ((Zt = !0), 0)
            );
          },
          movementY: function(e) {
            if (("movementY" in e)) return e.movementY;
            var t = Xt;
            return (
              (Xt = e.screenY),
              en ? ("mousemove" === e.type ? e.screenY - t : 0) : ((en = !0), 0)
            );
          }
        }),
        nn = tn.extend({
          pointerId: null,
          width: null,
          height: null,
          pressure: null,
          tangentialPressure: null,
          tiltX: null,
          tiltY: null,
          twist: null,
          pointerType: null,
          isPrimary: null
        }),
        rn = tn.extend({ dataTransfer: null }),
        on = Vt.extend({
          touches: null,
          targetTouches: null,
          changedTouches: null,
          altKey: null,
          metaKey: null,
          ctrlKey: null,
          shiftKey: null,
          getModifierState: qt
        }),
        an = Dt.extend({
          propertyName: null,
          elapsedTime: null,
          pseudoElement: null
        }),
        cn = tn.extend({
          deltaX: function(e) {
            return ("deltaX" in e)
              ? e.deltaX
              : ("wheelDeltaX" in e)
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function(e) {
            return ("deltaY" in e)
              ? e.deltaY
              : ("wheelDeltaY" in e)
              ? -e.wheelDeltaY
              : ("wheelDelta" in e)
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: null,
          deltaMode: null
        }),
        un = [
          ["blur", "blur", 0],
          ["cancel", "cancel", 0],
          ["click", "click", 0],
          ["close", "close", 0],
          ["contextmenu", "contextMenu", 0],
          ["copy", "copy", 0],
          ["cut", "cut", 0],
          ["auxclick", "auxClick", 0],
          ["dblclick", "doubleClick", 0],
          ["dragend", "dragEnd", 0],
          ["dragstart", "dragStart", 0],
          ["drop", "drop", 0],
          ["focus", "focus", 0],
          ["input", "input", 0],
          ["invalid", "invalid", 0],
          ["keydown", "keyDown", 0],
          ["keypress", "keyPress", 0],
          ["keyup", "keyUp", 0],
          ["mousedown", "mouseDown", 0],
          ["mouseup", "mouseUp", 0],
          ["paste", "paste", 0],
          ["pause", "pause", 0],
          ["play", "play", 0],
          ["pointercancel", "pointerCancel", 0],
          ["pointerdown", "pointerDown", 0],
          ["pointerup", "pointerUp", 0],
          ["ratechange", "rateChange", 0],
          ["reset", "reset", 0],
          ["seeked", "seeked", 0],
          ["submit", "submit", 0],
          ["touchcancel", "touchCancel", 0],
          ["touchend", "touchEnd", 0],
          ["touchstart", "touchStart", 0],
          ["volumechange", "volumeChange", 0],
          ["drag", "drag", 1],
          ["dragenter", "dragEnter", 1],
          ["dragexit", "dragExit", 1],
          ["dragleave", "dragLeave", 1],
          ["dragover", "dragOver", 1],
          ["mousemove", "mouseMove", 1],
          ["mouseout", "mouseOut", 1],
          ["mouseover", "mouseOver", 1],
          ["pointermove", "pointerMove", 1],
          ["pointerout", "pointerOut", 1],
          ["pointerover", "pointerOver", 1],
          ["scroll", "scroll", 1],
          ["toggle", "toggle", 1],
          ["touchmove", "touchMove", 1],
          ["wheel", "wheel", 1],
          ["abort", "abort", 2],
          [Ye, "animationEnd", 2],
          [Je, "animationIteration", 2],
          [Xe, "animationStart", 2],
          ["canplay", "canPlay", 2],
          ["canplaythrough", "canPlayThrough", 2],
          ["durationchange", "durationChange", 2],
          ["emptied", "emptied", 2],
          ["encrypted", "encrypted", 2],
          ["ended", "ended", 2],
          ["error", "error", 2],
          ["gotpointercapture", "gotPointerCapture", 2],
          ["load", "load", 2],
          ["loadeddata", "loadedData", 2],
          ["loadedmetadata", "loadedMetadata", 2],
          ["loadstart", "loadStart", 2],
          ["lostpointercapture", "lostPointerCapture", 2],
          ["playing", "playing", 2],
          ["progress", "progress", 2],
          ["seeking", "seeking", 2],
          ["stalled", "stalled", 2],
          ["suspend", "suspend", 2],
          ["timeupdate", "timeUpdate", 2],
          [Ze, "transitionEnd", 2],
          ["waiting", "waiting", 2]
        ],
        sn = {},
        ln = {},
        fn = 0;
      fn < un.length;
      fn++
    ) {
      var dn = un[fn],
        pn = dn[0],
        hn = dn[1],
        vn = dn[2],
        mn = "on" + (hn[0].toUpperCase() + hn.slice(1)),
        yn = {
          phasedRegistrationNames: { bubbled: mn, captured: mn + "Capture" },
          dependencies: [pn],
          eventPriority: vn
        };
      (sn[hn] = yn), (ln[pn] = yn);
    }
    var gn = {
        eventTypes: sn,
        getEventPriority: function(e) {
          return void 0 !== (e = ln[e]) ? e.eventPriority : 2;
        },
        extractEvents: function(e, t, n, r) {
          var i = ln[e];
          if (!i) return null;
          switch (e) {
            case "keypress":
              if (0 === Gt(n)) return null;
            case "keydown":
            case "keyup":
              e = Yt;
              break;
            case "blur":
            case "focus":
              e = Bt;
              break;
            case "click":
              if (2 === n.button) return null;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              e = tn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              e = rn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              e = on;
              break;
            case Ye:
            case Je:
            case Xe:
              e = zt;
              break;
            case Ze:
              e = an;
              break;
            case "scroll":
              e = Vt;
              break;
            case "wheel":
              e = cn;
              break;
            case "copy":
            case "cut":
            case "paste":
              e = Wt;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              e = nn;
              break;
            default:
              e = Dt;
          }
          return Lt((t = e.getPooled(i, t, n, r))), t;
        }
      },
      bn = o.unstable_UserBlockingPriority,
      wn = o.unstable_runWithPriority,
      Sn = gn.getEventPriority,
      En = [];
    function Tn(e) {
      var t = e.targetInst,
        n = t;
      do {
        if (!n) {
          e.ancestors.push(n);
          break;
        }
        var r = n;
        if (3 === r.tag) r = r.stateNode.containerInfo;
        else {
          for (; r.return; ) r = r.return;
          r = 3 !== r.tag ? null : r.stateNode.containerInfo;
        }
        if (!r) break;
        (5 !== (t = n.tag) && 6 !== t) || e.ancestors.push(n), (n = ur(r));
      } while (n);
      for (n = 0; n < e.ancestors.length; n++) {
        t = e.ancestors[n];
        var i = _t(e.nativeEvent);
        r = e.topLevelType;
        for (
          var o = e.nativeEvent, a = e.eventSystemFlags, c = null, u = 0;
          u < f.length;
          u++
        ) {
          var s = f[u];
          s && (s = s.extractEvents(r, t, o, i, a)) && (c = k(c, s));
        }
        O(c);
      }
    }
    var xn = !0;
    function Cn(e, t) {
      kn(t, e, !1);
    }
    function kn(e, t, n) {
      switch (Sn(t)) {
        case 0:
          var r = _n.bind(null, t, 1);
          break;
        case 1:
          r = Pn.bind(null, t, 1);
          break;
        default:
          r = On.bind(null, t, 1);
      }
      n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1);
    }
    function _n(e, t, n) {
      le || ue();
      var r = On,
        i = le;
      le = !0;
      try {
        ce(r, e, t, n);
      } finally {
        (le = i) || de();
      }
    }
    function Pn(e, t, n) {
      wn(bn, On.bind(null, e, t, n));
    }
    function Rn(e, t, n, r) {
      if (En.length) {
        var i = En.pop();
        (i.topLevelType = e),
          (i.eventSystemFlags = t),
          (i.nativeEvent = n),
          (i.targetInst = r),
          (e = i);
      } else
        e = {
          topLevelType: e,
          eventSystemFlags: t,
          nativeEvent: n,
          targetInst: r,
          ancestors: []
        };
      try {
        if (((t = Tn), (n = e), fe)) t(n, void 0);
        else {
          fe = !0;
          try {
            se(t, n, void 0);
          } finally {
            (fe = !1), de();
          }
        }
      } finally {
        (e.topLevelType = null),
          (e.nativeEvent = null),
          (e.targetInst = null),
          (e.ancestors.length = 0),
          En.length < 10 && En.push(e);
      }
    }
    function On(e, t, n) {
      if (xn)
        if (0 < st.length && -1 < mt.indexOf(e))
          (e = gt(null, e, t, n)), st.push(e);
        else {
          var r = Mn(e, t, n);
          null === r
            ? bt(e, n)
            : -1 < mt.indexOf(e)
            ? ((e = gt(r, e, t, n)), st.push(e))
            : (function(e, t, n, r) {
                switch (t) {
                  case "focus":
                    return (lt = wt(lt, e, t, n, r)), !0;
                  case "dragenter":
                    return (ft = wt(ft, e, t, n, r)), !0;
                  case "mouseover":
                    return (dt = wt(dt, e, t, n, r)), !0;
                  case "pointerover":
                    var i = r.pointerId;
                    return pt.set(i, wt(pt.get(i) || null, e, t, n, r)), !0;
                  case "gotpointercapture":
                    return (
                      (i = r.pointerId),
                      ht.set(i, wt(ht.get(i) || null, e, t, n, r)),
                      !0
                    );
                }
                return !1;
              })(r, e, t, n) || (bt(e, n), Rn(e, t, n, null));
        }
    }
    function Mn(e, t, n) {
      var r = _t(n);
      if (null !== (r = ur(r))) {
        var i = tt(r);
        if (null === i) r = null;
        else {
          var o = i.tag;
          if (13 === o) {
            if (null !== (r = nt(i))) return r;
            r = null;
          } else if (3 === o) {
            if (i.stateNode.hydrate)
              return 3 === i.tag ? i.stateNode.containerInfo : null;
            r = null;
          } else i !== r && (r = null);
        }
      }
      return Rn(e, t, n, r), null;
    }
    function In(e) {
      if (!Z) return !1;
      var t = (e = "on" + e) in document;
      return (
        t ||
          ((t = document.createElement("div")).setAttribute(e, "return;"),
          (t = "function" == typeof t[e])),
        t
      );
    }
    var Ln = new ("function" == typeof WeakMap ? WeakMap : Map)();
    function Nn(e) {
      var t = Ln.get(e);
      return void 0 === t && ((t = new Set()), Ln.set(e, t)), t;
    }
    function An(e, t, n) {
      if (!n.has(e)) {
        switch (e) {
          case "scroll":
            kn(t, "scroll", !0);
            break;
          case "focus":
          case "blur":
            kn(t, "focus", !0),
              kn(t, "blur", !0),
              n.add("blur"),
              n.add("focus");
            break;
          case "cancel":
          case "close":
            In(e) && kn(t, e, !0);
            break;
          case "invalid":
          case "submit":
          case "reset":
            break;
          default:
            -1 === et.indexOf(e) && Cn(e, t);
        }
        n.add(e);
      }
    }
    var Dn = {
        animationIterationCount: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
      },
      jn = ["Webkit", "ms", "Moz", "O"];
    function Fn(e, t, n) {
      return null == t || "boolean" == typeof t || "" === t
        ? ""
        : n ||
          "number" != typeof t ||
          0 === t ||
          (Dn.hasOwnProperty(e) && Dn[e])
        ? ("" + t).trim()
        : t + "px";
    }
    function Un(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf("--"),
            i = Fn(n, t[n], r);
          "float" === n && (n = "cssFloat"),
            r ? e.setProperty(n, i) : (e[n] = i);
        }
    }
    Object.keys(Dn).forEach(function(e) {
      jn.forEach(function(t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
      });
    });
    var zn = i(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }
    );
    function Wn(e, t) {
      if (t) {
        if (zn[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(a(137, e, ""));
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(a(60));
          if (
            !(
              "object" == typeof t.dangerouslySetInnerHTML &&
              "__html" in t.dangerouslySetInnerHTML
            )
          )
            throw Error(a(61));
        }
        if (null != t.style && "object" != typeof t.style)
          throw Error(a(62, ""));
      }
    }
    function Vn(e, t) {
      if (-1 === e.indexOf("-")) return "string" == typeof t.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Bn(e, t) {
      var n = Nn(
        (e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument)
      );
      t = h[t];
      for (var r = 0; r < t.length; r++) An(t[r], e, n);
    }
    function Gn() {}
    function $n(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    function Hn(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Kn(e, t) {
      var n,
        r = Hn(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
          e = n;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = Hn(r);
      }
    }
    function Qn() {
      for (var e = window, t = $n(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = "string" == typeof t.contentWindow.location.href;
        } catch (e) {
          n = !1;
        }
        if (!n) break;
        t = $n((e = t.contentWindow).document);
      }
      return t;
    }
    function qn(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        (("input" === t &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === t ||
          "true" === e.contentEditable)
      );
    }
    var Yn = null,
      Jn = null;
    function Xn(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Zn(e, t) {
      return (
        "textarea" === e ||
        "option" === e ||
        "noscript" === e ||
        "string" == typeof t.children ||
        "number" == typeof t.children ||
        ("object" == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      );
    }
    var er = "function" == typeof setTimeout ? setTimeout : void 0,
      tr = "function" == typeof clearTimeout ? clearTimeout : void 0;
    function nr(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType;
        if (1 === t || 3 === t) break;
      }
      return e;
    }
    function rr(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data;
          if ("$" === n || "$!" === n || "$?" === n) {
            if (0 === t) return e;
            t--;
          } else "/$" === n && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var ir = Math.random()
        .toString(36)
        .slice(2),
      or = "__reactInternalInstance$" + ir,
      ar = "__reactEventHandlers$" + ir,
      cr = "__reactContainere$" + ir;
    function ur(e) {
      var t = e[or];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[cr] || n[or])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = rr(e); null !== e; ) {
              if ((n = e[or])) return n;
              e = rr(e);
            }
          return t;
        }
        n = (e = n).parentNode;
      }
      return null;
    }
    function sr(e) {
      return !(e = e[or] || e[cr]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function lr(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(a(33));
    }
    function fr(e) {
      return e[ar] || null;
    }
    var dr = null,
      pr = null,
      hr = null;
    function vr() {
      if (hr) return hr;
      var e,
        t,
        n = pr,
        r = n.length,
        i = "value" in dr ? dr.value : dr.textContent,
        o = i.length;
      for (e = 0; e < r && n[e] === i[e]; e++);
      var a = r - e;
      for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
      return (hr = i.slice(e, 1 < t ? 1 - t : void 0));
    }
    var mr = Dt.extend({ data: null }),
      yr = Dt.extend({ data: null }),
      gr = [9, 13, 27, 32],
      br = Z && "CompositionEvent" in window,
      wr = null;
    Z && "documentMode" in document && (wr = document.documentMode);
    var Sr = Z && "TextEvent" in window && !wr,
      Er = Z && (!br || (wr && 8 < wr && 11 >= wr)),
      Tr = String.fromCharCode(32),
      xr = {
        beforeInput: {
          phasedRegistrationNames: {
            bubbled: "onBeforeInput",
            captured: "onBeforeInputCapture"
          },
          dependencies: ["compositionend", "keypress", "textInput", "paste"]
        },
        compositionEnd: {
          phasedRegistrationNames: {
            bubbled: "onCompositionEnd",
            captured: "onCompositionEndCapture"
          },
          dependencies: "blur compositionend keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionStart: {
          phasedRegistrationNames: {
            bubbled: "onCompositionStart",
            captured: "onCompositionStartCapture"
          },
          dependencies: "blur compositionstart keydown keypress keyup mousedown".split(
            " "
          )
        },
        compositionUpdate: {
          phasedRegistrationNames: {
            bubbled: "onCompositionUpdate",
            captured: "onCompositionUpdateCapture"
          },
          dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(
            " "
          )
        }
      },
      Cr = !1;
    function kr(e, t) {
      switch (e) {
        case "keyup":
          return -1 !== gr.indexOf(t.keyCode);
        case "keydown":
          return 229 !== t.keyCode;
        case "keypress":
        case "mousedown":
        case "blur":
          return !0;
        default:
          return !1;
      }
    }
    function _r(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Pr = !1;
    var Rr = {
        eventTypes: xr,
        extractEvents: function(e, t, n, r) {
          var i;
          if (br)
            e: {
              switch (e) {
                case "compositionstart":
                  var o = xr.compositionStart;
                  break e;
                case "compositionend":
                  o = xr.compositionEnd;
                  break e;
                case "compositionupdate":
                  o = xr.compositionUpdate;
                  break e;
              }
              o = void 0;
            }
          else
            Pr
              ? kr(e, n) && (o = xr.compositionEnd)
              : "keydown" === e &&
                229 === n.keyCode &&
                (o = xr.compositionStart);
          return (
            o
              ? (Er &&
                  "ko" !== n.locale &&
                  (Pr || o !== xr.compositionStart
                    ? o === xr.compositionEnd && Pr && (i = vr())
                    : ((pr = "value" in (dr = r) ? dr.value : dr.textContent),
                      (Pr = !0))),
                (o = mr.getPooled(o, t, n, r)),
                i ? (o.data = i) : null !== (i = _r(n)) && (o.data = i),
                Lt(o),
                (i = o))
              : (i = null),
            (e = Sr
              ? (function(e, t) {
                  switch (e) {
                    case "compositionend":
                      return _r(t);
                    case "keypress":
                      return 32 !== t.which ? null : ((Cr = !0), Tr);
                    case "textInput":
                      return (e = t.data) === Tr && Cr ? null : e;
                    default:
                      return null;
                  }
                })(e, n)
              : (function(e, t) {
                  if (Pr)
                    return "compositionend" === e || (!br && kr(e, t))
                      ? ((e = vr()), (hr = pr = dr = null), (Pr = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                      return null;
                    case "keypress":
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                      }
                      return null;
                    case "compositionend":
                      return Er && "ko" !== t.locale ? null : t.data;
                    default:
                      return null;
                  }
                })(e, n))
              ? (((t = yr.getPooled(xr.beforeInput, t, n, r)).data = e), Lt(t))
              : (t = null),
            null === i ? t : null === t ? i : [i, t]
          );
        }
      },
      Or = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
      };
    function Mr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === t ? !!Or[e.type] : "textarea" === t;
    }
    var Ir = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: "blur change click focus input keydown keyup selectionchange".split(
          " "
        )
      }
    };
    function Lr(e, t, n) {
      return (
        ((e = Dt.getPooled(Ir.change, e, t, n)).type = "change"),
        ie(n),
        Lt(e),
        e
      );
    }
    var Nr = null,
      Ar = null;
    function Dr(e) {
      O(e);
    }
    function jr(e) {
      if (Ce(lr(e))) return e;
    }
    function Fr(e, t) {
      if ("change" === e) return t;
    }
    var Ur = !1;
    function zr() {
      Nr && (Nr.detachEvent("onpropertychange", Wr), (Ar = Nr = null));
    }
    function Wr(e) {
      if ("value" === e.propertyName && jr(Ar))
        if (((e = Lr(Ar, e, _t(e))), le)) O(e);
        else {
          le = !0;
          try {
            ae(Dr, e);
          } finally {
            (le = !1), de();
          }
        }
    }
    function Vr(e, t, n) {
      "focus" === e
        ? (zr(), (Ar = n), (Nr = t).attachEvent("onpropertychange", Wr))
        : "blur" === e && zr();
    }
    function Br(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return jr(Ar);
    }
    function Gr(e, t) {
      if ("click" === e) return jr(t);
    }
    function $r(e, t) {
      if ("input" === e || "change" === e) return jr(t);
    }
    Z &&
      (Ur =
        In("input") && (!document.documentMode || 9 < document.documentMode));
    var Hr,
      Kr = {
        eventTypes: Ir,
        _isInputEventSupported: Ur,
        extractEvents: function(e, t, n, r) {
          var i = t ? lr(t) : window,
            o = i.nodeName && i.nodeName.toLowerCase();
          if ("select" === o || ("input" === o && "file" === i.type))
            var a = Fr;
          else if (Mr(i))
            if (Ur) a = $r;
            else {
              a = Br;
              var c = Vr;
            }
          else
            (o = i.nodeName) &&
              "input" === o.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type) &&
              (a = Gr);
          if (a && (a = a(e, t))) return Lr(a, n, r);
          c && c(e, i, t),
            "blur" === e &&
              (e = i._wrapperState) &&
              e.controlled &&
              "number" === i.type &&
              Me(i, "number", i.value);
        }
      },
      Qr = {
        mouseEnter: {
          registrationName: "onMouseEnter",
          dependencies: ["mouseout", "mouseover"]
        },
        mouseLeave: {
          registrationName: "onMouseLeave",
          dependencies: ["mouseout", "mouseover"]
        },
        pointerEnter: {
          registrationName: "onPointerEnter",
          dependencies: ["pointerout", "pointerover"]
        },
        pointerLeave: {
          registrationName: "onPointerLeave",
          dependencies: ["pointerout", "pointerover"]
        }
      },
      qr = {
        eventTypes: Qr,
        extractEvents: function(e, t, n, r, i) {
          var o = "mouseover" === e || "pointerover" === e,
            a = "mouseout" === e || "pointerout" === e;
          if (
            (o && 0 == (32 & i) && (n.relatedTarget || n.fromElement)) ||
            (!a && !o)
          )
            return null;
          if (
            ((i =
              r.window === r
                ? r
                : (i = r.ownerDocument)
                ? i.defaultView || i.parentWindow
                : window),
            a
              ? ((a = t),
                null !==
                  (t = (t = n.relatedTarget || n.toElement) ? ur(t) : null) &&
                  (t !== (o = tt(t)) || (5 !== t.tag && 6 !== t.tag)) &&
                  (t = null))
              : (a = null),
            a === t)
          )
            return null;
          if ("mouseout" === e || "mouseover" === e)
            var c = tn,
              u = Qr.mouseLeave,
              s = Qr.mouseEnter,
              l = "mouse";
          else
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = nn),
              (u = Qr.pointerLeave),
              (s = Qr.pointerEnter),
              (l = "pointer"));
          if (
            ((e = null == a ? i : lr(a)),
            (i = null == t ? i : lr(t)),
            ((u = c.getPooled(u, a, n, r)).type = l + "leave"),
            (u.target = e),
            (u.relatedTarget = i),
            ((r = c.getPooled(s, t, n, r)).type = l + "enter"),
            (r.target = i),
            (r.relatedTarget = e),
            (l = t),
            (c = a) && l)
          )
            e: {
              for (e = l, a = 0, t = s = c; t; t = Pt(t)) a++;
              for (t = 0, i = e; i; i = Pt(i)) t++;
              for (; 0 < a - t; ) (s = Pt(s)), a--;
              for (; 0 < t - a; ) (e = Pt(e)), t--;
              for (; a--; ) {
                if (s === e || s === e.alternate) break e;
                (s = Pt(s)), (e = Pt(e));
              }
              s = null;
            }
          else s = null;
          for (
            e = s, s = [];
            c && c !== e && (null === (a = c.alternate) || a !== e);

          )
            s.push(c), (c = Pt(c));
          for (
            c = [];
            l && l !== e && (null === (a = l.alternate) || a !== e);

          )
            c.push(l), (l = Pt(l));
          for (l = 0; l < s.length; l++) Mt(s[l], "bubbled", u);
          for (l = c.length; 0 < l--; ) Mt(c[l], "captured", r);
          return n === Hr ? ((Hr = null), [u]) : ((Hr = n), [u, r]);
        }
      };
    var Yr =
        "function" == typeof Object.is
          ? Object.is
          : function(e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      Jr = Object.prototype.hasOwnProperty;
    function Xr(e, t) {
      if (Yr(e, t)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof t ||
        null === t
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++)
        if (!Jr.call(t, n[r]) || !Yr(e[n[r]], t[n[r]])) return !1;
      return !0;
    }
    var Zr = Z && "documentMode" in document && 11 >= document.documentMode,
      ei = {
        select: {
          phasedRegistrationNames: {
            bubbled: "onSelect",
            captured: "onSelectCapture"
          },
          dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        }
      },
      ti = null,
      ni = null,
      ri = null,
      ii = !1;
    function oi(e, t) {
      var n =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      return ii || null == ti || ti !== $n(n)
        ? null
        : ("selectionStart" in (n = ti) && qn(n)
            ? (n = { start: n.selectionStart, end: n.selectionEnd })
            : (n = {
                anchorNode: (n = (
                  (n.ownerDocument && n.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: n.anchorOffset,
                focusNode: n.focusNode,
                focusOffset: n.focusOffset
              }),
          ri && Xr(ri, n)
            ? null
            : ((ri = n),
              ((e = Dt.getPooled(ei.select, ni, e, t)).type = "select"),
              (e.target = ti),
              Lt(e),
              e));
    }
    var ai = {
      eventTypes: ei,
      extractEvents: function(e, t, n, r) {
        var i,
          o =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
        if (!(i = !o)) {
          e: {
            (o = Nn(o)), (i = h.onSelect);
            for (var a = 0; a < i.length; a++)
              if (!o.has(i[a])) {
                o = !1;
                break e;
              }
            o = !0;
          }
          i = !o;
        }
        if (i) return null;
        switch (((o = t ? lr(t) : window), e)) {
          case "focus":
            (Mr(o) || "true" === o.contentEditable) &&
              ((ti = o), (ni = t), (ri = null));
            break;
          case "blur":
            ri = ni = ti = null;
            break;
          case "mousedown":
            ii = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            return (ii = !1), oi(n, r);
          case "selectionchange":
            if (Zr) break;
          case "keydown":
          case "keyup":
            return oi(n, r);
        }
        return null;
      }
    };
    M.injectEventPluginOrder(
      "ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(
        " "
      )
    ),
      (E = fr),
      (T = sr),
      (x = lr),
      M.injectEventPluginsByName({
        SimpleEventPlugin: gn,
        EnterLeaveEventPlugin: qr,
        ChangeEventPlugin: Kr,
        SelectEventPlugin: ai,
        BeforeInputEventPlugin: Rr
      }),
      new Set();
    var ci = [],
      ui = -1;
    function si(e) {
      0 > ui || ((e.current = ci[ui]), (ci[ui] = null), ui--);
    }
    function li(e, t) {
      ui++, (ci[ui] = e.current), (e.current = t);
    }
    var fi = {},
      di = { current: fi },
      pi = { current: !1 },
      hi = fi;
    function vi(e, t) {
      var n = e.type.contextTypes;
      if (!n) return fi;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i,
        o = {};
      for (i in n) o[i] = t[i];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
      );
    }
    function mi(e) {
      return null != (e = e.childContextTypes);
    }
    function yi(e) {
      si(pi), si(di);
    }
    function gi(e) {
      si(pi), si(di);
    }
    function bi(e, t, n) {
      if (di.current !== fi) throw Error(a(168));
      li(di, t), li(pi, n);
    }
    function wi(e, t, n) {
      var r = e.stateNode;
      if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
        return n;
      for (var o in (r = r.getChildContext()))
        if (!(o in e)) throw Error(a(108, J(t) || "Unknown", o));
      return i({}, n, {}, r);
    }
    function Si(e) {
      var t = e.stateNode;
      return (
        (t = (t && t.__reactInternalMemoizedMergedChildContext) || fi),
        (hi = di.current),
        li(di, t),
        li(pi, pi.current),
        !0
      );
    }
    function Ei(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(a(169));
      n
        ? ((t = wi(e, t, hi)),
          (r.__reactInternalMemoizedMergedChildContext = t),
          si(pi),
          si(di),
          li(di, t))
        : si(pi),
        li(pi, n);
    }
    var Ti = o.unstable_runWithPriority,
      xi = o.unstable_scheduleCallback,
      Ci = o.unstable_cancelCallback,
      ki = o.unstable_shouldYield,
      _i = o.unstable_requestPaint,
      Pi = o.unstable_now,
      Ri = o.unstable_getCurrentPriorityLevel,
      Oi = o.unstable_ImmediatePriority,
      Mi = o.unstable_UserBlockingPriority,
      Ii = o.unstable_NormalPriority,
      Li = o.unstable_LowPriority,
      Ni = o.unstable_IdlePriority,
      Ai = {},
      Di = void 0 !== _i ? _i : function() {},
      ji = null,
      Fi = null,
      Ui = !1,
      zi = Pi(),
      Wi =
        1e4 > zi
          ? Pi
          : function() {
              return Pi() - zi;
            };
    function Vi() {
      switch (Ri()) {
        case Oi:
          return 99;
        case Mi:
          return 98;
        case Ii:
          return 97;
        case Li:
          return 96;
        case Ni:
          return 95;
        default:
          throw Error(a(332));
      }
    }
    function Bi(e) {
      switch (e) {
        case 99:
          return Oi;
        case 98:
          return Mi;
        case 97:
          return Ii;
        case 96:
          return Li;
        case 95:
          return Ni;
        default:
          throw Error(a(332));
      }
    }
    function Gi(e, t) {
      return (e = Bi(e)), Ti(e, t);
    }
    function $i(e, t, n) {
      return (e = Bi(e)), xi(e, t, n);
    }
    function Hi(e) {
      return null === ji ? ((ji = [e]), (Fi = xi(Oi, Qi))) : ji.push(e), Ai;
    }
    function Ki() {
      if (null !== Fi) {
        var e = Fi;
        (Fi = null), Ci(e);
      }
      Qi();
    }
    function Qi() {
      if (!Ui && null !== ji) {
        Ui = !0;
        var e = 0;
        try {
          var t = ji;
          Gi(99, function() {
            for (; e < t.length; e++) {
              var n = t[e];
              do {
                n = n(!0);
              } while (null !== n);
            }
          }),
            (ji = null);
        } catch (t) {
          throw (null !== ji && (ji = ji.slice(e + 1)), xi(Oi, Ki), t);
        } finally {
          Ui = !1;
        }
      }
    }
    var qi = 3;
    function Yi(e, t, n) {
      return (
        1073741821 - (1 + (((1073741821 - e + t / 10) / (n /= 10)) | 0)) * n
      );
    }
    function Ji(e, t) {
      if (e && e.defaultProps)
        for (var n in ((t = i({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    var Xi = { current: null },
      Zi = null,
      eo = null,
      to = null;
    function no() {
      to = eo = Zi = null;
    }
    function ro(e, t) {
      var n = e.type._context;
      li(Xi, n._currentValue), (n._currentValue = t);
    }
    function io(e) {
      var t = Xi.current;
      si(Xi), (e.type._context._currentValue = t);
    }
    function oo(e, t) {
      for (; null !== e; ) {
        var n = e.alternate;
        if (e.childExpirationTime < t)
          (e.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t);
        else {
          if (!(null !== n && n.childExpirationTime < t)) break;
          n.childExpirationTime = t;
        }
        e = e.return;
      }
    }
    function ao(e, t) {
      (Zi = e),
        (to = eo = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (e.expirationTime >= t && (Wa = !0), (e.firstContext = null));
    }
    function co(e, t) {
      if (to !== e && !1 !== t && 0 !== t)
        if (
          (("number" == typeof t && 1073741823 !== t) ||
            ((to = e), (t = 1073741823)),
          (t = { context: e, observedBits: t, next: null }),
          null === eo)
        ) {
          if (null === Zi) throw Error(a(308));
          (eo = t),
            (Zi.dependencies = {
              expirationTime: 0,
              firstContext: t,
              responders: null
            });
        } else eo = eo.next = t;
      return e._currentValue;
    }
    var uo = !1;
    function so(e) {
      return {
        baseState: e,
        firstUpdate: null,
        lastUpdate: null,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function lo(e) {
      return {
        baseState: e.baseState,
        firstUpdate: e.firstUpdate,
        lastUpdate: e.lastUpdate,
        firstCapturedUpdate: null,
        lastCapturedUpdate: null,
        firstEffect: null,
        lastEffect: null,
        firstCapturedEffect: null,
        lastCapturedEffect: null
      };
    }
    function fo(e, t) {
      return {
        expirationTime: e,
        suspenseConfig: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
        nextEffect: null
      };
    }
    function po(e, t) {
      null === e.lastUpdate
        ? (e.firstUpdate = e.lastUpdate = t)
        : ((e.lastUpdate.next = t), (e.lastUpdate = t));
    }
    function ho(e, t) {
      var n = e.alternate;
      if (null === n) {
        var r = e.updateQueue,
          i = null;
        null === r && (r = e.updateQueue = so(e.memoizedState));
      } else
        (r = e.updateQueue),
          (i = n.updateQueue),
          null === r
            ? null === i
              ? ((r = e.updateQueue = so(e.memoizedState)),
                (i = n.updateQueue = so(n.memoizedState)))
              : (r = e.updateQueue = lo(i))
            : null === i && (i = n.updateQueue = lo(r));
      null === i || r === i
        ? po(r, t)
        : null === r.lastUpdate || null === i.lastUpdate
        ? (po(r, t), po(i, t))
        : (po(r, t), (i.lastUpdate = t));
    }
    function vo(e, t) {
      var n = e.updateQueue;
      null ===
      (n = null === n ? (e.updateQueue = so(e.memoizedState)) : mo(e, n))
        .lastCapturedUpdate
        ? (n.firstCapturedUpdate = n.lastCapturedUpdate = t)
        : ((n.lastCapturedUpdate.next = t), (n.lastCapturedUpdate = t));
    }
    function mo(e, t) {
      var n = e.alternate;
      return (
        null !== n && t === n.updateQueue && (t = e.updateQueue = lo(t)), t
      );
    }
    function yo(e, t, n, r, o, a) {
      switch (n.tag) {
        case 1:
          return "function" == typeof (e = n.payload) ? e.call(a, r, o) : e;
        case 3:
          e.effectTag = (-4097 & e.effectTag) | 64;
        case 0:
          if (
            null ==
            (o = "function" == typeof (e = n.payload) ? e.call(a, r, o) : e)
          )
            break;
          return i({}, r, o);
        case 2:
          uo = !0;
      }
      return r;
    }
    function go(e, t, n, r, i) {
      uo = !1;
      for (
        var o = (t = mo(e, t)).baseState,
          a = null,
          c = 0,
          u = t.firstUpdate,
          s = o;
        null !== u;

      ) {
        var l = u.expirationTime;
        l < i
          ? (null === a && ((a = u), (o = s)), c < l && (c = l))
          : (fu(l, u.suspenseConfig),
            (s = yo(e, 0, u, s, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastEffect
                ? (t.firstEffect = t.lastEffect = u)
                : ((t.lastEffect.nextEffect = u), (t.lastEffect = u)))),
          (u = u.next);
      }
      for (l = null, u = t.firstCapturedUpdate; null !== u; ) {
        var f = u.expirationTime;
        f < i
          ? (null === l && ((l = u), null === a && (o = s)), c < f && (c = f))
          : ((s = yo(e, 0, u, s, n, r)),
            null !== u.callback &&
              ((e.effectTag |= 32),
              (u.nextEffect = null),
              null === t.lastCapturedEffect
                ? (t.firstCapturedEffect = t.lastCapturedEffect = u)
                : ((t.lastCapturedEffect.nextEffect = u),
                  (t.lastCapturedEffect = u)))),
          (u = u.next);
      }
      null === a && (t.lastUpdate = null),
        null === l ? (t.lastCapturedUpdate = null) : (e.effectTag |= 32),
        null === a && null === l && (o = s),
        (t.baseState = o),
        (t.firstUpdate = a),
        (t.firstCapturedUpdate = l),
        du(c),
        (e.expirationTime = c),
        (e.memoizedState = s);
    }
    function bo(e, t, n) {
      null !== t.firstCapturedUpdate &&
        (null !== t.lastUpdate &&
          ((t.lastUpdate.next = t.firstCapturedUpdate),
          (t.lastUpdate = t.lastCapturedUpdate)),
        (t.firstCapturedUpdate = t.lastCapturedUpdate = null)),
        wo(t.firstEffect, n),
        (t.firstEffect = t.lastEffect = null),
        wo(t.firstCapturedEffect, n),
        (t.firstCapturedEffect = t.lastCapturedEffect = null);
    }
    function wo(e, t) {
      for (; null !== e; ) {
        var n = e.callback;
        if (null !== n) {
          e.callback = null;
          var r = t;
          if ("function" != typeof n) throw Error(a(191, n));
          n.call(r);
        }
        e = e.nextEffect;
      }
    }
    var So = L.ReactCurrentBatchConfig,
      Eo = new r.Component().refs;
    function To(e, t, n, r) {
      (n = null == (n = n(r, (t = e.memoizedState))) ? t : i({}, t, n)),
        (e.memoizedState = n),
        null !== (r = e.updateQueue) &&
          0 === e.expirationTime &&
          (r.baseState = n);
    }
    var xo = {
      isMounted: function(e) {
        return !!(e = e._reactInternalFiber) && tt(e) === e;
      },
      enqueueSetState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = Xc(),
          i = So.suspense;
        ((i = fo((r = Zc(r, e, i)), i)).payload = t),
          null != n && (i.callback = n),
          ho(e, i),
          eu(e, r);
      },
      enqueueReplaceState: function(e, t, n) {
        e = e._reactInternalFiber;
        var r = Xc(),
          i = So.suspense;
        ((i = fo((r = Zc(r, e, i)), i)).tag = 1),
          (i.payload = t),
          null != n && (i.callback = n),
          ho(e, i),
          eu(e, r);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternalFiber;
        var n = Xc(),
          r = So.suspense;
        ((r = fo((n = Zc(n, e, r)), r)).tag = 2),
          null != t && (r.callback = t),
          ho(e, r),
          eu(e, n);
      }
    };
    function Co(e, t, n, r, i, o, a) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, o, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !Xr(n, r) ||
            !Xr(i, o);
    }
    function ko(e, t, n) {
      var r = !1,
        i = fi,
        o = t.contextType;
      return (
        "object" == typeof o && null !== o
          ? (o = co(o))
          : ((i = mi(t) ? hi : di.current),
            (o = (r = null != (r = t.contextTypes)) ? vi(e, i) : fi)),
        (t = new t(n, o)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = xo),
        (e.stateNode = t),
        (t._reactInternalFiber = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
      );
    }
    function _o(e, t, n, r) {
      (e = t.state),
        "function" == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        "function" == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && xo.enqueueReplaceState(t, t.state, null);
    }
    function Po(e, t, n, r) {
      var i = e.stateNode;
      (i.props = n), (i.state = e.memoizedState), (i.refs = Eo);
      var o = t.contextType;
      "object" == typeof o && null !== o
        ? (i.context = co(o))
        : ((o = mi(t) ? hi : di.current), (i.context = vi(e, o))),
        null !== (o = e.updateQueue) &&
          (go(e, o, n, i, r), (i.state = e.memoizedState)),
        "function" == typeof (o = t.getDerivedStateFromProps) &&
          (To(e, t, o, n), (i.state = e.memoizedState)),
        "function" == typeof t.getDerivedStateFromProps ||
          "function" == typeof i.getSnapshotBeforeUpdate ||
          ("function" != typeof i.UNSAFE_componentWillMount &&
            "function" != typeof i.componentWillMount) ||
          ((t = i.state),
          "function" == typeof i.componentWillMount && i.componentWillMount(),
          "function" == typeof i.UNSAFE_componentWillMount &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && xo.enqueueReplaceState(i, i.state, null),
          null !== (o = e.updateQueue) &&
            (go(e, o, n, i, r), (i.state = e.memoizedState))),
        "function" == typeof i.componentDidMount && (e.effectTag |= 4);
    }
    var Ro = Array.isArray;
    function Oo(e, t, n) {
      if (
        null !== (e = n.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(a(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(a(147, e));
          var i = "" + e;
          return null !== t &&
            null !== t.ref &&
            "function" == typeof t.ref &&
            t.ref._stringRef === i
            ? t.ref
            : (((t = function(e) {
                var t = r.refs;
                t === Eo && (t = r.refs = {}),
                  null === e ? delete t[i] : (t[i] = e);
              })._stringRef = i),
              t);
        }
        if ("string" != typeof e) throw Error(a(284));
        if (!n._owner) throw Error(a(290, e));
      }
      return e;
    }
    function Mo(e, t) {
      if ("textarea" !== e.type)
        throw Error(
          a(
            31,
            "[object Object]" === Object.prototype.toString.call(t)
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : t,
            ""
          )
        );
    }
    function Io(e) {
      function t(t, n) {
        if (e) {
          var r = t.lastEffect;
          null !== r
            ? ((r.nextEffect = n), (t.lastEffect = n))
            : (t.firstEffect = t.lastEffect = n),
            (n.nextEffect = null),
            (n.effectTag = 8);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; null !== r; ) t(n, r), (r = r.sibling);
        return null;
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
        return e;
      }
      function i(e, t, n) {
        return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.effectTag = 2), n)
                : r
              : ((t.effectTag = 2), n)
            : n
        );
      }
      function c(t) {
        return e && null === t.alternate && (t.effectTag = 2), t;
      }
      function u(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Au(n, e.mode, r)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function s(e, t, n, r) {
        return null !== t && t.elementType === n.type
          ? (((r = i(t, n.props)).ref = Oo(e, t, n)), (r.return = e), r)
          : (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = Oo(
              e,
              t,
              n
            )),
            (r.return = e),
            r);
      }
      function l(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Du(n, e.mode, r)).return = e), t)
          : (((t = i(t, n.children || [])).return = e), t);
      }
      function f(e, t, n, r, o) {
        return null === t || 7 !== t.tag
          ? (((t = Nu(n, e.mode, r, o)).return = e), t)
          : (((t = i(t, n)).return = e), t);
      }
      function d(e, t, n) {
        if ("string" == typeof t || "number" == typeof t)
          return ((t = Au("" + t, e.mode, n)).return = e), t;
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case D:
              return (
                ((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = Oo(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              );
            case j:
              return ((t = Du(t, e.mode, n)).return = e), t;
          }
          if (Ro(t) || Y(t))
            return ((t = Nu(t, e.mode, n, null)).return = e), t;
          Mo(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = null !== t ? t.key : null;
        if ("string" == typeof n || "number" == typeof n)
          return null !== i ? null : u(e, t, "" + n, r);
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case D:
              return n.key === i
                ? n.type === F
                  ? f(e, t, n.props.children, r, i)
                  : s(e, t, n, r)
                : null;
            case j:
              return n.key === i ? l(e, t, n, r) : null;
          }
          if (Ro(n) || Y(n)) return null !== i ? null : f(e, t, n, r, null);
          Mo(e, n);
        }
        return null;
      }
      function h(e, t, n, r, i) {
        if ("string" == typeof r || "number" == typeof r)
          return u(t, (e = e.get(n) || null), "" + r, i);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case D:
              return (
                (e = e.get(null === r.key ? n : r.key) || null),
                r.type === F
                  ? f(t, e, r.props.children, i, r.key)
                  : s(t, e, r, i)
              );
            case j:
              return l(
                t,
                (e = e.get(null === r.key ? n : r.key) || null),
                r,
                i
              );
          }
          if (Ro(r) || Y(r)) return f(t, (e = e.get(n) || null), r, i, null);
          Mo(t, r);
        }
        return null;
      }
      function v(i, a, c, u) {
        for (
          var s = null, l = null, f = a, v = (a = 0), m = null;
          null !== f && v < c.length;
          v++
        ) {
          f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
          var y = p(i, f, c[v], u);
          if (null === y) {
            null === f && (f = m);
            break;
          }
          e && f && null === y.alternate && t(i, f),
            (a = o(y, a, v)),
            null === l ? (s = y) : (l.sibling = y),
            (l = y),
            (f = m);
        }
        if (v === c.length) return n(i, f), s;
        if (null === f) {
          for (; v < c.length; v++)
            null !== (f = d(i, c[v], u)) &&
              ((a = o(f, a, v)),
              null === l ? (s = f) : (l.sibling = f),
              (l = f));
          return s;
        }
        for (f = r(i, f); v < c.length; v++)
          null !== (m = h(f, i, v, c[v], u)) &&
            (e && null !== m.alternate && f.delete(null === m.key ? v : m.key),
            (a = o(m, a, v)),
            null === l ? (s = m) : (l.sibling = m),
            (l = m));
        return (
          e &&
            f.forEach(function(e) {
              return t(i, e);
            }),
          s
        );
      }
      function m(i, c, u, s) {
        var l = Y(u);
        if ("function" != typeof l) throw Error(a(150));
        if (null == (u = l.call(u))) throw Error(a(151));
        for (
          var f = (l = null), v = c, m = (c = 0), y = null, g = u.next();
          null !== v && !g.done;
          m++, g = u.next()
        ) {
          v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
          var b = p(i, v, g.value, s);
          if (null === b) {
            null === v && (v = y);
            break;
          }
          e && v && null === b.alternate && t(i, v),
            (c = o(b, c, m)),
            null === f ? (l = b) : (f.sibling = b),
            (f = b),
            (v = y);
        }
        if (g.done) return n(i, v), l;
        if (null === v) {
          for (; !g.done; m++, g = u.next())
            null !== (g = d(i, g.value, s)) &&
              ((c = o(g, c, m)),
              null === f ? (l = g) : (f.sibling = g),
              (f = g));
          return l;
        }
        for (v = r(i, v); !g.done; m++, g = u.next())
          null !== (g = h(v, i, m, g.value, s)) &&
            (e && null !== g.alternate && v.delete(null === g.key ? m : g.key),
            (c = o(g, c, m)),
            null === f ? (l = g) : (f.sibling = g),
            (f = g));
        return (
          e &&
            v.forEach(function(e) {
              return t(i, e);
            }),
          l
        );
      }
      return function(e, r, o, u) {
        var s =
          "object" == typeof o && null !== o && o.type === F && null === o.key;
        s && (o = o.props.children);
        var l = "object" == typeof o && null !== o;
        if (l)
          switch (o.$$typeof) {
            case D:
              e: {
                for (l = o.key, s = r; null !== s; ) {
                  if (s.key === l) {
                    if (7 === s.tag ? o.type === F : s.elementType === o.type) {
                      n(e, s.sibling),
                        ((r = i(
                          s,
                          o.type === F ? o.props.children : o.props
                        )).ref = Oo(e, s, o)),
                        (r.return = e),
                        (e = r);
                      break e;
                    }
                    n(e, s);
                    break;
                  }
                  t(e, s), (s = s.sibling);
                }
                o.type === F
                  ? (((r = Nu(o.props.children, e.mode, u, o.key)).return = e),
                    (e = r))
                  : (((u = Lu(
                      o.type,
                      o.key,
                      o.props,
                      null,
                      e.mode,
                      u
                    )).ref = Oo(e, r, o)),
                    (u.return = e),
                    (e = u));
              }
              return c(e);
            case j:
              e: {
                for (s = o.key; null !== r; ) {
                  if (r.key === s) {
                    if (
                      4 === r.tag &&
                      r.stateNode.containerInfo === o.containerInfo &&
                      r.stateNode.implementation === o.implementation
                    ) {
                      n(e, r.sibling),
                        ((r = i(r, o.children || [])).return = e),
                        (e = r);
                      break e;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r), (r = r.sibling);
                }
                ((r = Du(o, e.mode, u)).return = e), (e = r);
              }
              return c(e);
          }
        if ("string" == typeof o || "number" == typeof o)
          return (
            (o = "" + o),
            null !== r && 6 === r.tag
              ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
              : (n(e, r), ((r = Au(o, e.mode, u)).return = e), (e = r)),
            c(e)
          );
        if (Ro(o)) return v(e, r, o, u);
        if (Y(o)) return m(e, r, o, u);
        if ((l && Mo(e, o), void 0 === o && !s))
          switch (e.tag) {
            case 1:
            case 0:
              throw ((e = e.type),
              Error(a(152, e.displayName || e.name || "Component")));
          }
        return n(e, r);
      };
    }
    var Lo = Io(!0),
      No = Io(!1),
      Ao = {},
      Do = { current: Ao },
      jo = { current: Ao },
      Fo = { current: Ao };
    function Uo(e) {
      if (e === Ao) throw Error(a(174));
      return e;
    }
    function zo(e, t) {
      li(Fo, t), li(jo, e), li(Do, Ao);
      var n = t.nodeType;
      switch (n) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : We(null, "");
          break;
        default:
          t = We(
            (t = (n = 8 === n ? t.parentNode : t).namespaceURI || null),
            (n = n.tagName)
          );
      }
      si(Do), li(Do, t);
    }
    function Wo(e) {
      si(Do), si(jo), si(Fo);
    }
    function Vo(e) {
      Uo(Fo.current);
      var t = Uo(Do.current),
        n = We(t, e.type);
      t !== n && (li(jo, e), li(Do, n));
    }
    function Bo(e) {
      jo.current === e && (si(Do), si(jo));
    }
    var Go = { current: 0 };
    function $o(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState;
          if (
            null !== n &&
            (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
          )
            return t;
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (64 & t.effectTag)) return t;
        } else if (null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Ho(e, t) {
      return { responder: e, props: t };
    }
    var Ko = L.ReactCurrentDispatcher,
      Qo = L.ReactCurrentBatchConfig,
      qo = 0,
      Yo = null,
      Jo = null,
      Xo = null,
      Zo = null,
      ea = null,
      ta = null,
      na = 0,
      ra = null,
      ia = 0,
      oa = !1,
      aa = null,
      ca = 0;
    function ua() {
      throw Error(a(321));
    }
    function sa(e, t) {
      if (null === t) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Yr(e[n], t[n])) return !1;
      return !0;
    }
    function la(e, t, n, r, i, o) {
      if (
        ((qo = o),
        (Yo = t),
        (Xo = null !== e ? e.memoizedState : null),
        (Ko.current = null === Xo ? Ra : Oa),
        (t = n(r, i)),
        oa)
      ) {
        do {
          (oa = !1),
            (ca += 1),
            (Xo = null !== e ? e.memoizedState : null),
            (ta = Zo),
            (ra = ea = Jo = null),
            (Ko.current = Oa),
            (t = n(r, i));
        } while (oa);
        (aa = null), (ca = 0);
      }
      if (
        ((Ko.current = Pa),
        ((e = Yo).memoizedState = Zo),
        (e.expirationTime = na),
        (e.updateQueue = ra),
        (e.effectTag |= ia),
        (e = null !== Jo && null !== Jo.next),
        (qo = 0),
        (ta = ea = Zo = Xo = Jo = Yo = null),
        (na = 0),
        (ra = null),
        (ia = 0),
        e)
      )
        throw Error(a(300));
      return t;
    }
    function fa() {
      (Ko.current = Pa),
        (qo = 0),
        (ta = ea = Zo = Xo = Jo = Yo = null),
        (na = 0),
        (ra = null),
        (ia = 0),
        (oa = !1),
        (aa = null),
        (ca = 0);
    }
    function da() {
      var e = {
        memoizedState: null,
        baseState: null,
        queue: null,
        baseUpdate: null,
        next: null
      };
      return null === ea ? (Zo = ea = e) : (ea = ea.next = e), ea;
    }
    function pa() {
      if (null !== ta)
        (ta = (ea = ta).next), (Xo = null !== (Jo = Xo) ? Jo.next : null);
      else {
        if (null === Xo) throw Error(a(310));
        var e = {
          memoizedState: (Jo = Xo).memoizedState,
          baseState: Jo.baseState,
          queue: Jo.queue,
          baseUpdate: Jo.baseUpdate,
          next: null
        };
        (ea = null === ea ? (Zo = e) : (ea.next = e)), (Xo = Jo.next);
      }
      return ea;
    }
    function ha(e, t) {
      return "function" == typeof t ? t(e) : t;
    }
    function va(e) {
      var t = pa(),
        n = t.queue;
      if (null === n) throw Error(a(311));
      if (((n.lastRenderedReducer = e), 0 < ca)) {
        var r = n.dispatch;
        if (null !== aa) {
          var i = aa.get(n);
          if (void 0 !== i) {
            aa.delete(n);
            var o = t.memoizedState;
            do {
              (o = e(o, i.action)), (i = i.next);
            } while (null !== i);
            return (
              Yr(o, t.memoizedState) || (Wa = !0),
              (t.memoizedState = o),
              t.baseUpdate === n.last && (t.baseState = o),
              (n.lastRenderedState = o),
              [o, r]
            );
          }
        }
        return [t.memoizedState, r];
      }
      r = n.last;
      var c = t.baseUpdate;
      if (
        ((o = t.baseState),
        null !== c
          ? (null !== r && (r.next = null), (r = c.next))
          : (r = null !== r ? r.next : null),
        null !== r)
      ) {
        var u = (i = null),
          s = r,
          l = !1;
        do {
          var f = s.expirationTime;
          f < qo
            ? (l || ((l = !0), (u = c), (i = o)), f > na && du((na = f)))
            : (fu(f, s.suspenseConfig),
              (o = s.eagerReducer === e ? s.eagerState : e(o, s.action))),
            (c = s),
            (s = s.next);
        } while (null !== s && s !== r);
        l || ((u = c), (i = o)),
          Yr(o, t.memoizedState) || (Wa = !0),
          (t.memoizedState = o),
          (t.baseUpdate = u),
          (t.baseState = i),
          (n.lastRenderedState = o);
      }
      return [t.memoizedState, n.dispatch];
    }
    function ma(e) {
      var t = da();
      return (
        "function" == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = (e = t.queue = {
          last: null,
          dispatch: null,
          lastRenderedReducer: ha,
          lastRenderedState: e
        }).dispatch = _a.bind(null, Yo, e)),
        [t.memoizedState, e]
      );
    }
    function ya(e) {
      return va(ha);
    }
    function ga(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === ra
          ? ((ra = { lastEffect: null }).lastEffect = e.next = e)
          : null === (t = ra.lastEffect)
          ? (ra.lastEffect = e.next = e)
          : ((n = t.next), (t.next = e), (e.next = n), (ra.lastEffect = e)),
        e
      );
    }
    function ba(e, t, n, r) {
      var i = da();
      (ia |= e), (i.memoizedState = ga(t, n, void 0, void 0 === r ? null : r));
    }
    function wa(e, t, n, r) {
      var i = pa();
      r = void 0 === r ? null : r;
      var o = void 0;
      if (null !== Jo) {
        var a = Jo.memoizedState;
        if (((o = a.destroy), null !== r && sa(r, a.deps)))
          return void ga(0, n, o, r);
      }
      (ia |= e), (i.memoizedState = ga(t, n, o, r));
    }
    function Sa(e, t) {
      return ba(516, 192, e, t);
    }
    function Ea(e, t) {
      return wa(516, 192, e, t);
    }
    function Ta(e, t) {
      return "function" == typeof t
        ? ((e = e()),
          t(e),
          function() {
            t(null);
          })
        : null != t
        ? ((e = e()),
          (t.current = e),
          function() {
            t.current = null;
          })
        : void 0;
    }
    function xa() {}
    function Ca(e, t) {
      return (da().memoizedState = [e, void 0 === t ? null : t]), e;
    }
    function ka(e, t) {
      var n = pa();
      t = void 0 === t ? null : t;
      var r = n.memoizedState;
      return null !== r && null !== t && sa(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function _a(e, t, n) {
      if (!(25 > ca)) throw Error(a(301));
      var r = e.alternate;
      if (e === Yo || (null !== r && r === Yo))
        if (
          ((oa = !0),
          (e = {
            expirationTime: qo,
            suspenseConfig: null,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null
          }),
          null === aa && (aa = new Map()),
          void 0 === (n = aa.get(t)))
        )
          aa.set(t, e);
        else {
          for (t = n; null !== t.next; ) t = t.next;
          t.next = e;
        }
      else {
        var i = Xc(),
          o = So.suspense;
        o = {
          expirationTime: (i = Zc(i, e, o)),
          suspenseConfig: o,
          action: n,
          eagerReducer: null,
          eagerState: null,
          next: null
        };
        var c = t.last;
        if (null === c) o.next = o;
        else {
          var u = c.next;
          null !== u && (o.next = u), (c.next = o);
        }
        if (
          ((t.last = o),
          0 === e.expirationTime &&
            (null === r || 0 === r.expirationTime) &&
            null !== (r = t.lastRenderedReducer))
        )
          try {
            var s = t.lastRenderedState,
              l = r(s, n);
            if (((o.eagerReducer = r), (o.eagerState = l), Yr(l, s))) return;
          } catch (e) {}
        eu(e, i);
      }
    }
    var Pa = {
        readContext: co,
        useCallback: ua,
        useContext: ua,
        useEffect: ua,
        useImperativeHandle: ua,
        useLayoutEffect: ua,
        useMemo: ua,
        useReducer: ua,
        useRef: ua,
        useState: ua,
        useDebugValue: ua,
        useResponder: ua,
        useDeferredValue: ua,
        useTransition: ua
      },
      Ra = {
        readContext: co,
        useCallback: Ca,
        useContext: co,
        useEffect: Sa,
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ba(4, 36, Ta.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return ba(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = da();
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function(e, t, n) {
          var r = da();
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = (e = r.queue = {
              last: null,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t
            }).dispatch = _a.bind(null, Yo, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function(e) {
          return (e = { current: e }), (da().memoizedState = e);
        },
        useState: ma,
        useDebugValue: xa,
        useResponder: Ho,
        useDeferredValue: function(e, t) {
          var n = ma(e),
            r = n[0],
            i = n[1];
          return (
            Sa(
              function() {
                o.unstable_next(function() {
                  var n = Qo.suspense;
                  Qo.suspense = void 0 === t ? null : t;
                  try {
                    i(e);
                  } finally {
                    Qo.suspense = n;
                  }
                });
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function(e) {
          var t = ma(!1),
            n = t[0],
            r = t[1];
          return [
            Ca(
              function(t) {
                r(!0),
                  o.unstable_next(function() {
                    var n = Qo.suspense;
                    Qo.suspense = void 0 === e ? null : e;
                    try {
                      r(!1), t();
                    } finally {
                      Qo.suspense = n;
                    }
                  });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Oa = {
        readContext: co,
        useCallback: ka,
        useContext: co,
        useEffect: Ea,
        useImperativeHandle: function(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            wa(4, 36, Ta.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function(e, t) {
          return wa(4, 36, e, t);
        },
        useMemo: function(e, t) {
          var n = pa();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && sa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        },
        useReducer: va,
        useRef: function() {
          return pa().memoizedState;
        },
        useState: ya,
        useDebugValue: xa,
        useResponder: Ho,
        useDeferredValue: function(e, t) {
          var n = ya(),
            r = n[0],
            i = n[1];
          return (
            Ea(
              function() {
                o.unstable_next(function() {
                  var n = Qo.suspense;
                  Qo.suspense = void 0 === t ? null : t;
                  try {
                    i(e);
                  } finally {
                    Qo.suspense = n;
                  }
                });
              },
              [e, t]
            ),
            r
          );
        },
        useTransition: function(e) {
          var t = ya(),
            n = t[0],
            r = t[1];
          return [
            ka(
              function(t) {
                r(!0),
                  o.unstable_next(function() {
                    var n = Qo.suspense;
                    Qo.suspense = void 0 === e ? null : e;
                    try {
                      r(!1), t();
                    } finally {
                      Qo.suspense = n;
                    }
                  });
              },
              [e, n]
            ),
            n
          ];
        }
      },
      Ma = null,
      Ia = null,
      La = !1;
    function Na(e, t) {
      var n = Ou(5, null, null, 0);
      (n.elementType = "DELETED"),
        (n.type = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (n.effectTag = 8),
        null !== e.lastEffect
          ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
          : (e.firstEffect = e.lastEffect = n);
    }
    function Aa(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) && ((e.stateNode = t), !0)
          );
        case 6:
          return (
            null !==
              (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), !0)
          );
        case 13:
        default:
          return !1;
      }
    }
    function Da(e) {
      if (La) {
        var t = Ia;
        if (t) {
          var n = t;
          if (!Aa(e, t)) {
            if (!(t = nr(n.nextSibling)) || !Aa(e, t))
              return (
                (e.effectTag = (-1025 & e.effectTag) | 2),
                (La = !1),
                void (Ma = e)
              );
            Na(Ma, n);
          }
          (Ma = e), (Ia = nr(t.firstChild));
        } else (e.effectTag = (-1025 & e.effectTag) | 2), (La = !1), (Ma = e);
      }
    }
    function ja(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Ma = e;
    }
    function Fa(e) {
      if (e !== Ma) return !1;
      if (!La) return ja(e), (La = !0), !1;
      var t = e.type;
      if (
        5 !== e.tag ||
        ("head" !== t && "body" !== t && !Zn(t, e.memoizedProps))
      )
        for (t = Ia; t; ) Na(e, t), (t = nr(t.nextSibling));
      if ((ja(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(a(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n) {
                if (0 === t) {
                  Ia = nr(e.nextSibling);
                  break e;
                }
                t--;
              } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
            }
            e = e.nextSibling;
          }
          Ia = null;
        }
      } else Ia = Ma ? nr(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ua() {
      (Ia = Ma = null), (La = !1);
    }
    var za = L.ReactCurrentOwner,
      Wa = !1;
    function Va(e, t, n, r) {
      t.child = null === e ? No(t, null, n, r) : Lo(t, e.child, n, r);
    }
    function Ba(e, t, n, r, i) {
      n = n.render;
      var o = t.ref;
      return (
        ao(t, i),
        (r = la(e, t, n, r, o, i)),
        null === e || Wa
          ? ((t.effectTag |= 1), Va(e, t, r, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            oc(e, t, i))
      );
    }
    function Ga(e, t, n, r, i, o) {
      if (null === e) {
        var a = n.type;
        return "function" != typeof a ||
          Mu(a) ||
          void 0 !== a.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Lu(n.type, null, r, null, t.mode, o)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = a), $a(e, t, a, r, i, o));
      }
      return (
        (a = e.child),
        i < o &&
        ((i = a.memoizedProps),
        (n = null !== (n = n.compare) ? n : Xr)(i, r) && e.ref === t.ref)
          ? oc(e, t, o)
          : ((t.effectTag |= 1),
            ((e = Iu(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e))
      );
    }
    function $a(e, t, n, r, i, o) {
      return null !== e &&
        Xr(e.memoizedProps, r) &&
        e.ref === t.ref &&
        ((Wa = !1), i < o)
        ? oc(e, t, o)
        : Ka(e, t, n, r, o);
    }
    function Ha(e, t) {
      var n = t.ref;
      ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        (t.effectTag |= 128);
    }
    function Ka(e, t, n, r, i) {
      var o = mi(n) ? hi : di.current;
      return (
        (o = vi(t, o)),
        ao(t, i),
        (n = la(e, t, n, r, o, i)),
        null === e || Wa
          ? ((t.effectTag |= 1), Va(e, t, n, i), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.effectTag &= -517),
            e.expirationTime <= i && (e.expirationTime = 0),
            oc(e, t, i))
      );
    }
    function Qa(e, t, n, r, i) {
      if (mi(n)) {
        var o = !0;
        Si(t);
      } else o = !1;
      if ((ao(t, i), null === t.stateNode))
        null !== e &&
          ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
          ko(t, n, r),
          Po(t, n, r, i),
          (r = !0);
      else if (null === e) {
        var a = t.stateNode,
          c = t.memoizedProps;
        a.props = c;
        var u = a.context,
          s = n.contextType;
        "object" == typeof s && null !== s
          ? (s = co(s))
          : (s = vi(t, (s = mi(n) ? hi : di.current)));
        var l = n.getDerivedStateFromProps,
          f =
            "function" == typeof l ||
            "function" == typeof a.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
            "function" != typeof a.componentWillReceiveProps) ||
          ((c !== r || u !== s) && _o(t, a, r, s)),
          (uo = !1);
        var d = t.memoizedState;
        u = a.state = d;
        var p = t.updateQueue;
        null !== p && (go(t, p, r, a, i), (u = t.memoizedState)),
          c !== r || d !== u || pi.current || uo
            ? ("function" == typeof l &&
                (To(t, n, l, r), (u = t.memoizedState)),
              (c = uo || Co(t, n, c, r, d, u, s))
                ? (f ||
                    ("function" != typeof a.UNSAFE_componentWillMount &&
                      "function" != typeof a.componentWillMount) ||
                    ("function" == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    "function" == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  "function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4))
                : ("function" == typeof a.componentDidMount &&
                    (t.effectTag |= 4),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (a.props = r),
              (a.state = u),
              (a.context = s),
              (r = c))
            : ("function" == typeof a.componentDidMount && (t.effectTag |= 4),
              (r = !1));
      } else
        (a = t.stateNode),
          (c = t.memoizedProps),
          (a.props = t.type === t.elementType ? c : Ji(t.type, c)),
          (u = a.context),
          "object" == typeof (s = n.contextType) && null !== s
            ? (s = co(s))
            : (s = vi(t, (s = mi(n) ? hi : di.current))),
          (f =
            "function" == typeof (l = n.getDerivedStateFromProps) ||
            "function" == typeof a.getSnapshotBeforeUpdate) ||
            ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
              "function" != typeof a.componentWillReceiveProps) ||
            ((c !== r || u !== s) && _o(t, a, r, s)),
          (uo = !1),
          (u = t.memoizedState),
          (d = a.state = u),
          null !== (p = t.updateQueue) &&
            (go(t, p, r, a, i), (d = t.memoizedState)),
          c !== r || u !== d || pi.current || uo
            ? ("function" == typeof l &&
                (To(t, n, l, r), (d = t.memoizedState)),
              (l = uo || Co(t, n, c, r, u, d, s))
                ? (f ||
                    ("function" != typeof a.UNSAFE_componentWillUpdate &&
                      "function" != typeof a.componentWillUpdate) ||
                    ("function" == typeof a.componentWillUpdate &&
                      a.componentWillUpdate(r, d, s),
                    "function" == typeof a.UNSAFE_componentWillUpdate &&
                      a.UNSAFE_componentWillUpdate(r, d, s)),
                  "function" == typeof a.componentDidUpdate &&
                    (t.effectTag |= 4),
                  "function" == typeof a.getSnapshotBeforeUpdate &&
                    (t.effectTag |= 256))
                : ("function" != typeof a.componentDidUpdate ||
                    (c === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 4),
                  "function" != typeof a.getSnapshotBeforeUpdate ||
                    (c === e.memoizedProps && u === e.memoizedState) ||
                    (t.effectTag |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = d)),
              (a.props = r),
              (a.state = d),
              (a.context = s),
              (r = l))
            : ("function" != typeof a.componentDidUpdate ||
                (c === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 4),
              "function" != typeof a.getSnapshotBeforeUpdate ||
                (c === e.memoizedProps && u === e.memoizedState) ||
                (t.effectTag |= 256),
              (r = !1));
      return qa(e, t, n, r, o, i);
    }
    function qa(e, t, n, r, i, o) {
      Ha(e, t);
      var a = 0 != (64 & t.effectTag);
      if (!r && !a) return i && Ei(t, n, !1), oc(e, t, o);
      (r = t.stateNode), (za.current = t);
      var c =
        a && "function" != typeof n.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (t.effectTag |= 1),
        null !== e && a
          ? ((t.child = Lo(t, e.child, null, o)), (t.child = Lo(t, null, c, o)))
          : Va(e, t, c, o),
        (t.memoizedState = r.state),
        i && Ei(t, n, !0),
        t.child
      );
    }
    function Ya(e) {
      var t = e.stateNode;
      t.pendingContext
        ? bi(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && bi(0, t.context, !1),
        zo(e, t.containerInfo);
    }
    var Ja,
      Xa,
      Za,
      ec = { dehydrated: null, retryTime: 0 };
    function tc(e, t, n) {
      var r,
        i = t.mode,
        o = t.pendingProps,
        a = Go.current,
        c = !1;
      if (
        ((r = 0 != (64 & t.effectTag)) ||
          (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)),
        r
          ? ((c = !0), (t.effectTag &= -65))
          : (null !== e && null === e.memoizedState) ||
            void 0 === o.fallback ||
            !0 === o.unstable_avoidThisFallback ||
            (a |= 1),
        li(Go, 1 & a),
        null === e)
      ) {
        if ((void 0 !== o.fallback && Da(t), c)) {
          if (
            ((c = o.fallback),
            ((o = Nu(null, i, 0, null)).return = t),
            0 == (2 & t.mode))
          )
            for (
              e = null !== t.memoizedState ? t.child.child : t.child,
                o.child = e;
              null !== e;

            )
              (e.return = o), (e = e.sibling);
          return (
            ((n = Nu(c, i, n, null)).return = t),
            (o.sibling = n),
            (t.memoizedState = ec),
            (t.child = o),
            n
          );
        }
        return (
          (i = o.children),
          (t.memoizedState = null),
          (t.child = No(t, null, i, n))
        );
      }
      if (null !== e.memoizedState) {
        if (((i = (e = e.child).sibling), c)) {
          if (
            ((o = o.fallback),
            ((n = Iu(e, e.pendingProps)).return = t),
            0 == (2 & t.mode) &&
              (c = null !== t.memoizedState ? t.child.child : t.child) !==
                e.child)
          )
            for (n.child = c; null !== c; ) (c.return = n), (c = c.sibling);
          return (
            ((i = Iu(i, o, i.expirationTime)).return = t),
            (n.sibling = i),
            (n.childExpirationTime = 0),
            (t.memoizedState = ec),
            (t.child = n),
            i
          );
        }
        return (
          (n = Lo(t, e.child, o.children, n)),
          (t.memoizedState = null),
          (t.child = n)
        );
      }
      if (((e = e.child), c)) {
        if (
          ((c = o.fallback),
          ((o = Nu(null, i, 0, null)).return = t),
          (o.child = e),
          null !== e && (e.return = o),
          0 == (2 & t.mode))
        )
          for (
            e = null !== t.memoizedState ? t.child.child : t.child, o.child = e;
            null !== e;

          )
            (e.return = o), (e = e.sibling);
        return (
          ((n = Nu(c, i, n, null)).return = t),
          (o.sibling = n),
          (n.effectTag |= 2),
          (o.childExpirationTime = 0),
          (t.memoizedState = ec),
          (t.child = o),
          n
        );
      }
      return (t.memoizedState = null), (t.child = Lo(t, e, o.children, n));
    }
    function nc(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t),
        oo(e.return, t);
    }
    function rc(e, t, n, r, i, o) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: i,
            lastEffect: o
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.last = r),
          (a.tail = n),
          (a.tailExpiration = 0),
          (a.tailMode = i),
          (a.lastEffect = o));
    }
    function ic(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
      if ((Va(e, t, r.children, n), 0 != (2 & (r = Go.current))))
        (r = (1 & r) | 2), (t.effectTag |= 64);
      else {
        if (null !== e && 0 != (64 & e.effectTag))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && nc(e, n);
            else if (19 === e.tag) nc(e, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((li(Go, r), 0 == (2 & t.mode))) t.memoizedState = null;
      else
        switch (i) {
          case "forwards":
            for (n = t.child, i = null; null !== n; )
              null !== (e = n.alternate) && null === $o(e) && (i = n),
                (n = n.sibling);
            null === (n = i)
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
              rc(t, !1, i, n, o, t.lastEffect);
            break;
          case "backwards":
            for (n = null, i = t.child, t.child = null; null !== i; ) {
              if (null !== (e = i.alternate) && null === $o(e)) {
                t.child = i;
                break;
              }
              (e = i.sibling), (i.sibling = n), (n = i), (i = e);
            }
            rc(t, !0, n, null, o, t.lastEffect);
            break;
          case "together":
            rc(t, !1, null, null, void 0, t.lastEffect);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function oc(e, t, n) {
      null !== e && (t.dependencies = e.dependencies);
      var r = t.expirationTime;
      if ((0 !== r && du(r), t.childExpirationTime < n)) return null;
      if (null !== e && t.child !== e.child) throw Error(a(153));
      if (null !== t.child) {
        for (
          n = Iu((e = t.child), e.pendingProps, e.expirationTime),
            t.child = n,
            n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling),
            ((n = n.sibling = Iu(
              e,
              e.pendingProps,
              e.expirationTime
            )).return = t);
        n.sibling = null;
      }
      return t.child;
    }
    function ac(e) {
      e.effectTag |= 4;
    }
    function cc(e, t) {
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t; )
            null !== t.alternate && (n = t), (t = t.sibling);
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n; )
            null !== n.alternate && (r = n), (n = n.sibling);
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
    }
    function uc(e) {
      switch (e.tag) {
        case 1:
          mi(e.type) && yi();
          var t = e.effectTag;
          return 4096 & t ? ((e.effectTag = (-4097 & t) | 64), e) : null;
        case 3:
          if ((Wo(), gi(), 0 != (64 & (t = e.effectTag)))) throw Error(a(285));
          return (e.effectTag = (-4097 & t) | 64), e;
        case 5:
          return Bo(e), null;
        case 13:
          return (
            si(Go),
            4096 & (t = e.effectTag)
              ? ((e.effectTag = (-4097 & t) | 64), e)
              : null
          );
        case 19:
          return si(Go), null;
        case 4:
          return Wo(), null;
        case 10:
          return io(e), null;
        default:
          return null;
      }
    }
    function sc(e, t) {
      return { value: e, source: t, stack: X(t) };
    }
    (Ja = function(e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
        else if (4 !== n.tag && null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === t) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }),
      (Xa = function(e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
          var c,
            u,
            s = t.stateNode;
          switch ((Uo(Do.current), (e = null), n)) {
            case "input":
              (a = ke(s, a)), (r = ke(s, r)), (e = []);
              break;
            case "option":
              (a = Ie(s, a)), (r = Ie(s, r)), (e = []);
              break;
            case "select":
              (a = i({}, a, { value: void 0 })),
                (r = i({}, r, { value: void 0 })),
                (e = []);
              break;
            case "textarea":
              (a = Ne(s, a)), (r = Ne(s, r)), (e = []);
              break;
            default:
              "function" != typeof a.onClick &&
                "function" == typeof r.onClick &&
                (s.onclick = Gn);
          }
          for (c in (Wn(n, r), (n = null), a))
            if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
              if ("style" === c)
                for (u in (s = a[c]))
                  s.hasOwnProperty(u) && (n || (n = {}), (n[u] = ""));
              else
                "dangerouslySetInnerHTML" !== c &&
                  "children" !== c &&
                  "suppressContentEditableWarning" !== c &&
                  "suppressHydrationWarning" !== c &&
                  "autoFocus" !== c &&
                  (p.hasOwnProperty(c)
                    ? e || (e = [])
                    : (e = e || []).push(c, null));
          for (c in r) {
            var l = r[c];
            if (
              ((s = null != a ? a[c] : void 0),
              r.hasOwnProperty(c) && l !== s && (null != l || null != s))
            )
              if ("style" === c)
                if (s) {
                  for (u in s)
                    !s.hasOwnProperty(u) ||
                      (l && l.hasOwnProperty(u)) ||
                      (n || (n = {}), (n[u] = ""));
                  for (u in l)
                    l.hasOwnProperty(u) &&
                      s[u] !== l[u] &&
                      (n || (n = {}), (n[u] = l[u]));
                } else n || (e || (e = []), e.push(c, n)), (n = l);
              else
                "dangerouslySetInnerHTML" === c
                  ? ((l = l ? l.__html : void 0),
                    (s = s ? s.__html : void 0),
                    null != l && s !== l && (e = e || []).push(c, "" + l))
                  : "children" === c
                  ? s === l ||
                    ("string" != typeof l && "number" != typeof l) ||
                    (e = e || []).push(c, "" + l)
                  : "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    (p.hasOwnProperty(c)
                      ? (null != l && Bn(o, c), e || s === l || (e = []))
                      : (e = e || []).push(c, l));
          }
          n && (e = e || []).push("style", n),
            (o = e),
            (t.updateQueue = o) && ac(t);
        }
      }),
      (Za = function(e, t, n, r) {
        n !== r && ac(t);
      });
    var lc = "function" == typeof WeakSet ? WeakSet : Set;
    function fc(e, t) {
      var n = t.source,
        r = t.stack;
      null === r && null !== n && (r = X(n)),
        null !== n && J(n.type),
        (t = t.value),
        null !== e && 1 === e.tag && J(e.type);
      try {
        console.error(t);
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function dc(e) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            xu(e, t);
          }
        else t.current = null;
    }
    function pc(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          hc(2, 0, t);
          break;
        case 1:
          if (256 & t.effectTag && null !== e) {
            var n = e.memoizedProps,
              r = e.memoizedState;
            (t = (e = t.stateNode).getSnapshotBeforeUpdate(
              t.elementType === t.type ? n : Ji(t.type, n),
              r
            )),
              (e.__reactInternalSnapshotBeforeUpdate = t);
          }
          break;
        case 3:
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(a(163));
      }
    }
    function hc(e, t, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var r = (n = n.next);
        do {
          if (0 != (r.tag & e)) {
            var i = r.destroy;
            (r.destroy = void 0), void 0 !== i && i();
          }
          0 != (r.tag & t) && ((i = r.create), (r.destroy = i())), (r = r.next);
        } while (r !== n);
      }
    }
    function vc(e, t, n) {
      switch (("function" == typeof Pu && Pu(t), t.tag)) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
            var r = e.next;
            Gi(97 < n ? 97 : n, function() {
              var e = r;
              do {
                var n = e.destroy;
                if (void 0 !== n) {
                  var i = t;
                  try {
                    n();
                  } catch (e) {
                    xu(i, e);
                  }
                }
                e = e.next;
              } while (e !== r);
            });
          }
          break;
        case 1:
          dc(t),
            "function" == typeof (n = t.stateNode).componentWillUnmount &&
              (function(e, t) {
                try {
                  (t.props = e.memoizedProps),
                    (t.state = e.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  xu(e, t);
                }
              })(t, n);
          break;
        case 5:
          dc(t);
          break;
        case 4:
          bc(e, t, n);
      }
    }
    function mc(e) {
      var t = e.alternate;
      (e.return = null),
        (e.child = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.alternate = null),
        (e.firstEffect = null),
        (e.lastEffect = null),
        (e.pendingProps = null),
        (e.memoizedProps = null),
        null !== t && mc(t);
    }
    function yc(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function gc(e) {
      e: {
        for (var t = e.return; null !== t; ) {
          if (yc(t)) {
            var n = t;
            break e;
          }
          t = t.return;
        }
        throw Error(a(160));
      }
      switch (((t = n.stateNode), n.tag)) {
        case 5:
          var r = !1;
          break;
        case 3:
        case 4:
          (t = t.containerInfo), (r = !0);
          break;
        default:
          throw Error(a(161));
      }
      16 & n.effectTag && (Ge(t, ""), (n.effectTag &= -17));
      e: t: for (n = e; ; ) {
        for (; null === n.sibling; ) {
          if (null === n.return || yc(n.return)) {
            n = null;
            break e;
          }
          n = n.return;
        }
        for (
          n.sibling.return = n.return, n = n.sibling;
          5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

        ) {
          if (2 & n.effectTag) continue t;
          if (null === n.child || 4 === n.tag) continue t;
          (n.child.return = n), (n = n.child);
        }
        if (!(2 & n.effectTag)) {
          n = n.stateNode;
          break e;
        }
      }
      for (var i = e; ; ) {
        var o = 5 === i.tag || 6 === i.tag;
        if (o) {
          var c = o ? i.stateNode : i.stateNode.instance;
          if (n)
            if (r) {
              var u = c;
              (c = n),
                8 === (o = t).nodeType
                  ? o.parentNode.insertBefore(u, c)
                  : o.insertBefore(u, c);
            } else t.insertBefore(c, n);
          else
            r
              ? (8 === (u = t).nodeType
                  ? (o = u.parentNode).insertBefore(c, u)
                  : (o = u).appendChild(c),
                null != (u = u._reactRootContainer) ||
                  null !== o.onclick ||
                  (o.onclick = Gn))
              : t.appendChild(c);
        } else if (4 !== i.tag && null !== i.child) {
          (i.child.return = i), (i = i.child);
          continue;
        }
        if (i === e) break;
        for (; null === i.sibling; ) {
          if (null === i.return || i.return === e) return;
          i = i.return;
        }
        (i.sibling.return = i.return), (i = i.sibling);
      }
    }
    function bc(e, t, n) {
      for (var r, i, o = t, c = !1; ; ) {
        if (!c) {
          c = o.return;
          e: for (;;) {
            if (null === c) throw Error(a(160));
            switch (((r = c.stateNode), c.tag)) {
              case 5:
                i = !1;
                break e;
              case 3:
              case 4:
                (r = r.containerInfo), (i = !0);
                break e;
            }
            c = c.return;
          }
          c = !0;
        }
        if (5 === o.tag || 6 === o.tag) {
          e: for (var u = e, s = o, l = n, f = s; ; )
            if ((vc(u, f, l), null !== f.child && 4 !== f.tag))
              (f.child.return = f), (f = f.child);
            else {
              if (f === s) break;
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === s) break e;
                f = f.return;
              }
              (f.sibling.return = f.return), (f = f.sibling);
            }
          i
            ? ((u = r),
              (s = o.stateNode),
              8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s))
            : r.removeChild(o.stateNode);
        } else if (4 === o.tag) {
          if (null !== o.child) {
            (r = o.stateNode.containerInfo),
              (i = !0),
              (o.child.return = o),
              (o = o.child);
            continue;
          }
        } else if ((vc(e, o, n), null !== o.child)) {
          (o.child.return = o), (o = o.child);
          continue;
        }
        if (o === t) break;
        for (; null === o.sibling; ) {
          if (null === o.return || o.return === t) return;
          4 === (o = o.return).tag && (c = !1);
        }
        (o.sibling.return = o.return), (o = o.sibling);
      }
    }
    function wc(e, t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          hc(4, 8, t);
          break;
        case 1:
          break;
        case 5:
          var n = t.stateNode;
          if (null != n) {
            var r = t.memoizedProps,
              i = null !== e ? e.memoizedProps : r;
            e = t.type;
            var o = t.updateQueue;
            if (((t.updateQueue = null), null !== o)) {
              for (
                n[ar] = r,
                  "input" === e &&
                    "radio" === r.type &&
                    null != r.name &&
                    Pe(n, r),
                  Vn(e, i),
                  t = Vn(e, r),
                  i = 0;
                i < o.length;
                i += 2
              ) {
                var c = o[i],
                  u = o[i + 1];
                "style" === c
                  ? Un(n, u)
                  : "dangerouslySetInnerHTML" === c
                  ? Be(n, u)
                  : "children" === c
                  ? Ge(n, u)
                  : Ee(n, c, u, t);
              }
              switch (e) {
                case "input":
                  Re(n, r);
                  break;
                case "textarea":
                  De(n, r);
                  break;
                case "select":
                  (t = n._wrapperState.wasMultiple),
                    (n._wrapperState.wasMultiple = !!r.multiple),
                    null != (e = r.value)
                      ? Le(n, !!r.multiple, e, !1)
                      : t !== !!r.multiple &&
                        (null != r.defaultValue
                          ? Le(n, !!r.multiple, r.defaultValue, !0)
                          : Le(n, !!r.multiple, r.multiple ? [] : "", !1));
              }
            }
          }
          break;
        case 6:
          if (null === t.stateNode) throw Error(a(162));
          t.stateNode.nodeValue = t.memoizedProps;
          break;
        case 3:
          (t = t.stateNode).hydrate && ((t.hydrate = !1), kt(t.containerInfo));
          break;
        case 12:
          break;
        case 13:
          if (
            ((n = t),
            null === t.memoizedState
              ? (r = !1)
              : ((r = !0), (n = t.child), (zc = Wi())),
            null !== n)
          )
            e: for (e = n; ; ) {
              if (5 === e.tag)
                (o = e.stateNode),
                  r
                    ? "function" == typeof (o = o.style).setProperty
                      ? o.setProperty("display", "none", "important")
                      : (o.display = "none")
                    : ((o = e.stateNode),
                      (i =
                        null != (i = e.memoizedProps.style) &&
                        i.hasOwnProperty("display")
                          ? i.display
                          : null),
                      (o.style.display = Fn("display", i)));
              else if (6 === e.tag)
                e.stateNode.nodeValue = r ? "" : e.memoizedProps;
              else {
                if (
                  13 === e.tag &&
                  null !== e.memoizedState &&
                  null === e.memoizedState.dehydrated
                ) {
                  ((o = e.child.sibling).return = e), (e = o);
                  continue;
                }
                if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
              }
              if (e === n) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === n) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          Sc(t);
          break;
        case 19:
          Sc(t);
          break;
        case 17:
        case 20:
        case 21:
          break;
        default:
          throw Error(a(163));
      }
    }
    function Sc(e) {
      var t = e.updateQueue;
      if (null !== t) {
        e.updateQueue = null;
        var n = e.stateNode;
        null === n && (n = e.stateNode = new lc()),
          t.forEach(function(t) {
            var r = ku.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          });
      }
    }
    var Ec = "function" == typeof WeakMap ? WeakMap : Map;
    function Tc(e, t, n) {
      ((n = fo(n, null)).tag = 3), (n.payload = { element: null });
      var r = t.value;
      return (
        (n.callback = function() {
          Vc || ((Vc = !0), (Bc = r)), fc(e, t);
        }),
        n
      );
    }
    function xc(e, t, n) {
      (n = fo(n, null)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var i = t.value;
        n.payload = function() {
          return fc(e, t), r(i);
        };
      }
      var o = e.stateNode;
      return (
        null !== o &&
          "function" == typeof o.componentDidCatch &&
          (n.callback = function() {
            "function" != typeof r &&
              (null === Gc ? (Gc = new Set([this])) : Gc.add(this), fc(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: null !== n ? n : ""
            });
          }),
        n
      );
    }
    var Cc,
      kc = Math.ceil,
      _c = L.ReactCurrentDispatcher,
      Pc = L.ReactCurrentOwner,
      Rc = 0,
      Oc = null,
      Mc = null,
      Ic = 0,
      Lc = 0,
      Nc = null,
      Ac = 1073741823,
      Dc = 1073741823,
      jc = null,
      Fc = 0,
      Uc = !1,
      zc = 0,
      Wc = null,
      Vc = !1,
      Bc = null,
      Gc = null,
      $c = !1,
      Hc = null,
      Kc = 90,
      Qc = null,
      qc = 0,
      Yc = null,
      Jc = 0;
    function Xc() {
      return 0 != (48 & Rc)
        ? 1073741821 - ((Wi() / 10) | 0)
        : 0 !== Jc
        ? Jc
        : (Jc = 1073741821 - ((Wi() / 10) | 0));
    }
    function Zc(e, t, n) {
      if (0 == (2 & (t = t.mode))) return 1073741823;
      var r = Vi();
      if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
      if (0 != (16 & Rc)) return Ic;
      if (null !== n) e = Yi(e, 0 | n.timeoutMs || 5e3, 250);
      else
        switch (r) {
          case 99:
            e = 1073741823;
            break;
          case 98:
            e = Yi(e, 150, 100);
            break;
          case 97:
          case 96:
            e = Yi(e, 5e3, 250);
            break;
          case 95:
            e = 2;
            break;
          default:
            throw Error(a(326));
        }
      return null !== Oc && e === Ic && --e, e;
    }
    function eu(e, t) {
      if (50 < qc) throw ((qc = 0), (Yc = null), Error(a(185)));
      if (null !== (e = tu(e, t))) {
        var n = Vi();
        1073741823 === t
          ? 0 != (8 & Rc) && 0 == (48 & Rc)
            ? ou(e)
            : (ru(e), 0 === Rc && Ki())
          : ru(e),
          0 == (4 & Rc) ||
            (98 !== n && 99 !== n) ||
            (null === Qc
              ? (Qc = new Map([[e, t]]))
              : (void 0 === (n = Qc.get(e)) || n > t) && Qc.set(e, t));
      }
    }
    function tu(e, t) {
      e.expirationTime < t && (e.expirationTime = t);
      var n = e.alternate;
      null !== n && n.expirationTime < t && (n.expirationTime = t);
      var r = e.return,
        i = null;
      if (null === r && 3 === e.tag) i = e.stateNode;
      else
        for (; null !== r; ) {
          if (
            ((n = r.alternate),
            r.childExpirationTime < t && (r.childExpirationTime = t),
            null !== n &&
              n.childExpirationTime < t &&
              (n.childExpirationTime = t),
            null === r.return && 3 === r.tag)
          ) {
            i = r.stateNode;
            break;
          }
          r = r.return;
        }
      return (
        null !== i && (Oc === i && (du(t), 4 === Lc && Uu(i, Ic)), zu(i, t)), i
      );
    }
    function nu(e) {
      var t = e.lastExpiredTime;
      return 0 !== t
        ? t
        : Fu(e, (t = e.firstPendingTime))
        ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel)
          ? t
          : e
        : t;
    }
    function ru(e) {
      if (0 !== e.lastExpiredTime)
        (e.callbackExpirationTime = 1073741823),
          (e.callbackPriority = 99),
          (e.callbackNode = Hi(ou.bind(null, e)));
      else {
        var t = nu(e),
          n = e.callbackNode;
        if (0 === t)
          null !== n &&
            ((e.callbackNode = null),
            (e.callbackExpirationTime = 0),
            (e.callbackPriority = 90));
        else {
          var r = Xc();
          if (
            (1073741823 === t
              ? (r = 99)
              : 1 === t || 2 === t
              ? (r = 95)
              : (r =
                  0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r))
                    ? 99
                    : 250 >= r
                    ? 98
                    : 5250 >= r
                    ? 97
                    : 95),
            null !== n)
          ) {
            var i = e.callbackPriority;
            if (e.callbackExpirationTime === t && i >= r) return;
            n !== Ai && Ci(n);
          }
          (e.callbackExpirationTime = t),
            (e.callbackPriority = r),
            (t =
              1073741823 === t
                ? Hi(ou.bind(null, e))
                : $i(r, iu.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - Wi()
                  })),
            (e.callbackNode = t);
        }
      }
    }
    function iu(e, t) {
      if (((Jc = 0), t)) return Wu(e, (t = Xc())), ru(e), null;
      var n = nu(e);
      if (0 !== n) {
        if (((t = e.callbackNode), 0 != (48 & Rc))) throw Error(a(327));
        if ((Su(), (e === Oc && n === Ic) || uu(e, n), null !== Mc)) {
          var r = Rc;
          Rc |= 16;
          for (var i = lu(); ; )
            try {
              hu();
              break;
            } catch (t) {
              su(e, t);
            }
          if ((no(), (Rc = r), (_c.current = i), 1 === Lc))
            throw ((t = Nc), uu(e, n), Uu(e, n), ru(e), t);
          if (null === Mc)
            switch (
              ((i = e.finishedWork = e.current.alternate),
              (e.finishedExpirationTime = n),
              (r = Lc),
              (Oc = null),
              r)
            ) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
                Wu(e, 2 < n ? 2 : n);
                break;
              case 3:
                if (
                  (Uu(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = yu(i)),
                  1073741823 === Ac && 10 < (i = zc + 500 - Wi()))
                ) {
                  if (Uc) {
                    var o = e.lastPingedTime;
                    if (0 === o || o >= n) {
                      (e.lastPingedTime = n), uu(e, n);
                      break;
                    }
                  }
                  if (0 !== (o = nu(e)) && o !== n) break;
                  if (0 !== r && r !== n) {
                    e.lastPingedTime = r;
                    break;
                  }
                  e.timeoutHandle = er(gu.bind(null, e), i);
                  break;
                }
                gu(e);
                break;
              case 4:
                if (
                  (Uu(e, n),
                  n === (r = e.lastSuspendedTime) &&
                    (e.nextKnownPendingLevel = yu(i)),
                  Uc && (0 === (i = e.lastPingedTime) || i >= n))
                ) {
                  (e.lastPingedTime = n), uu(e, n);
                  break;
                }
                if (0 !== (i = nu(e)) && i !== n) break;
                if (0 !== r && r !== n) {
                  e.lastPingedTime = r;
                  break;
                }
                if (
                  (1073741823 !== Dc
                    ? (r = 10 * (1073741821 - Dc) - Wi())
                    : 1073741823 === Ac
                    ? (r = 0)
                    : ((r = 10 * (1073741821 - Ac) - 5e3),
                      0 > (r = (i = Wi()) - r) && (r = 0),
                      (n = 10 * (1073741821 - n) - i) <
                        (r =
                          (120 > r
                            ? 120
                            : 480 > r
                            ? 480
                            : 1080 > r
                            ? 1080
                            : 1920 > r
                            ? 1920
                            : 3e3 > r
                            ? 3e3
                            : 4320 > r
                            ? 4320
                            : 1960 * kc(r / 1960)) - r) && (r = n)),
                  10 < r)
                ) {
                  e.timeoutHandle = er(gu.bind(null, e), r);
                  break;
                }
                gu(e);
                break;
              case 5:
                if (1073741823 !== Ac && null !== jc) {
                  o = Ac;
                  var c = jc;
                  if (
                    (0 >= (r = 0 | c.busyMinDurationMs)
                      ? (r = 0)
                      : ((i = 0 | c.busyDelayMs),
                        (r =
                          (o =
                            Wi() -
                            (10 * (1073741821 - o) -
                              (0 | c.timeoutMs || 5e3))) <= i
                            ? 0
                            : i + r - o)),
                    10 < r)
                  ) {
                    Uu(e, n), (e.timeoutHandle = er(gu.bind(null, e), r));
                    break;
                  }
                }
                gu(e);
                break;
              default:
                throw Error(a(329));
            }
          if ((ru(e), e.callbackNode === t)) return iu.bind(null, e);
        }
      }
      return null;
    }
    function ou(e) {
      var t = e.lastExpiredTime;
      if (((t = 0 !== t ? t : 1073741823), e.finishedExpirationTime === t))
        gu(e);
      else {
        if (0 != (48 & Rc)) throw Error(a(327));
        if ((Su(), (e === Oc && t === Ic) || uu(e, t), null !== Mc)) {
          var n = Rc;
          Rc |= 16;
          for (var r = lu(); ; )
            try {
              pu();
              break;
            } catch (t) {
              su(e, t);
            }
          if ((no(), (Rc = n), (_c.current = r), 1 === Lc))
            throw ((n = Nc), uu(e, t), Uu(e, t), ru(e), n);
          if (null !== Mc) throw Error(a(261));
          (e.finishedWork = e.current.alternate),
            (e.finishedExpirationTime = t),
            (Oc = null),
            gu(e),
            ru(e);
        }
      }
      return null;
    }
    function au(e, t) {
      var n = Rc;
      Rc |= 1;
      try {
        return e(t);
      } finally {
        0 === (Rc = n) && Ki();
      }
    }
    function cu(e, t) {
      var n = Rc;
      (Rc &= -2), (Rc |= 8);
      try {
        return e(t);
      } finally {
        0 === (Rc = n) && Ki();
      }
    }
    function uu(e, t) {
      (e.finishedWork = null), (e.finishedExpirationTime = 0);
      var n = e.timeoutHandle;
      if ((-1 !== n && ((e.timeoutHandle = -1), tr(n)), null !== Mc))
        for (n = Mc.return; null !== n; ) {
          var r = n;
          switch (r.tag) {
            case 1:
              var i = r.type.childContextTypes;
              null != i && yi();
              break;
            case 3:
              Wo(), gi();
              break;
            case 5:
              Bo(r);
              break;
            case 4:
              Wo();
              break;
            case 13:
            case 19:
              si(Go);
              break;
            case 10:
              io(r);
          }
          n = n.return;
        }
      (Oc = e),
        (Mc = Iu(e.current, null)),
        (Ic = t),
        (Lc = 0),
        (Nc = null),
        (Dc = Ac = 1073741823),
        (jc = null),
        (Fc = 0),
        (Uc = !1);
    }
    function su(e, t) {
      for (;;) {
        try {
          if ((no(), fa(), null === Mc || null === Mc.return))
            return (Lc = 1), (Nc = t), null;
          e: {
            var n = e,
              r = Mc.return,
              i = Mc,
              o = t;
            if (
              ((t = Ic),
              (i.effectTag |= 2048),
              (i.firstEffect = i.lastEffect = null),
              null !== o && "object" == typeof o && "function" == typeof o.then)
            ) {
              var a = o,
                c = 0 != (1 & Go.current),
                u = r;
              do {
                var s;
                if ((s = 13 === u.tag)) {
                  var l = u.memoizedState;
                  if (null !== l) s = null !== l.dehydrated;
                  else {
                    var f = u.memoizedProps;
                    s =
                      void 0 !== f.fallback &&
                      (!0 !== f.unstable_avoidThisFallback || !c);
                  }
                }
                if (s) {
                  var d = u.updateQueue;
                  if (null === d) {
                    var p = new Set();
                    p.add(a), (u.updateQueue = p);
                  } else d.add(a);
                  if (0 == (2 & u.mode)) {
                    if (
                      ((u.effectTag |= 64), (i.effectTag &= -2981), 1 === i.tag)
                    )
                      if (null === i.alternate) i.tag = 17;
                      else {
                        var h = fo(1073741823, null);
                        (h.tag = 2), ho(i, h);
                      }
                    i.expirationTime = 1073741823;
                    break e;
                  }
                  (o = void 0), (i = t);
                  var v = n.pingCache;
                  if (
                    (null === v
                      ? ((v = n.pingCache = new Ec()),
                        (o = new Set()),
                        v.set(a, o))
                      : void 0 === (o = v.get(a)) &&
                        ((o = new Set()), v.set(a, o)),
                    !o.has(i))
                  ) {
                    o.add(i);
                    var m = Cu.bind(null, n, a, i);
                    a.then(m, m);
                  }
                  (u.effectTag |= 4096), (u.expirationTime = t);
                  break e;
                }
                u = u.return;
              } while (null !== u);
              o = Error(
                (J(i.type) || "A React component") +
                  " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." +
                  X(i)
              );
            }
            5 !== Lc && (Lc = 2), (o = sc(o, i)), (u = r);
            do {
              switch (u.tag) {
                case 3:
                  (a = o),
                    (u.effectTag |= 4096),
                    (u.expirationTime = t),
                    vo(u, Tc(u, a, t));
                  break e;
                case 1:
                  a = o;
                  var y = u.type,
                    g = u.stateNode;
                  if (
                    0 == (64 & u.effectTag) &&
                    ("function" == typeof y.getDerivedStateFromError ||
                      (null !== g &&
                        "function" == typeof g.componentDidCatch &&
                        (null === Gc || !Gc.has(g))))
                  ) {
                    (u.effectTag |= 4096),
                      (u.expirationTime = t),
                      vo(u, xc(u, a, t));
                    break e;
                  }
              }
              u = u.return;
            } while (null !== u);
          }
          Mc = mu(Mc);
        } catch (e) {
          t = e;
          continue;
        }
        break;
      }
    }
    function lu() {
      var e = _c.current;
      return (_c.current = Pa), null === e ? Pa : e;
    }
    function fu(e, t) {
      e < Ac && 2 < e && (Ac = e),
        null !== t && e < Dc && 2 < e && ((Dc = e), (jc = t));
    }
    function du(e) {
      e > Fc && (Fc = e);
    }
    function pu() {
      for (; null !== Mc; ) Mc = vu(Mc);
    }
    function hu() {
      for (; null !== Mc && !ki(); ) Mc = vu(Mc);
    }
    function vu(e) {
      var t = Cc(e.alternate, e, Ic);
      return (
        (e.memoizedProps = e.pendingProps),
        null === t && (t = mu(e)),
        (Pc.current = null),
        t
      );
    }
    function mu(e) {
      Mc = e;
      do {
        var t = Mc.alternate;
        if (((e = Mc.return), 0 == (2048 & Mc.effectTag))) {
          e: {
            var n = t,
              r = Ic,
              o = (t = Mc).pendingProps;
            switch (t.tag) {
              case 2:
              case 16:
                break;
              case 15:
              case 0:
                break;
              case 1:
                mi(t.type) && yi();
                break;
              case 3:
                Wo(),
                  gi(),
                  (o = t.stateNode).pendingContext &&
                    ((o.context = o.pendingContext), (o.pendingContext = null)),
                  (null === n || null === n.child) && Fa(t) && ac(t);
                break;
              case 5:
                Bo(t), (r = Uo(Fo.current));
                var c = t.type;
                if (null !== n && null != t.stateNode)
                  Xa(n, t, c, o, r), n.ref !== t.ref && (t.effectTag |= 128);
                else if (o) {
                  var u = Uo(Do.current);
                  if (Fa(t)) {
                    var s = (o = t).stateNode;
                    n = o.type;
                    var l = o.memoizedProps,
                      f = r;
                    switch (
                      ((s[or] = o), (s[ar] = l), (c = void 0), (r = s), n)
                    ) {
                      case "iframe":
                      case "object":
                      case "embed":
                        Cn("load", r);
                        break;
                      case "video":
                      case "audio":
                        for (s = 0; s < et.length; s++) Cn(et[s], r);
                        break;
                      case "source":
                        Cn("error", r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Cn("error", r), Cn("load", r);
                        break;
                      case "form":
                        Cn("reset", r), Cn("submit", r);
                        break;
                      case "details":
                        Cn("toggle", r);
                        break;
                      case "input":
                        _e(r, l), Cn("invalid", r), Bn(f, "onChange");
                        break;
                      case "select":
                        (r._wrapperState = { wasMultiple: !!l.multiple }),
                          Cn("invalid", r),
                          Bn(f, "onChange");
                        break;
                      case "textarea":
                        Ae(r, l), Cn("invalid", r), Bn(f, "onChange");
                    }
                    for (c in (Wn(n, l), (s = null), l))
                      l.hasOwnProperty(c) &&
                        ((u = l[c]),
                        "children" === c
                          ? "string" == typeof u
                            ? r.textContent !== u && (s = ["children", u])
                            : "number" == typeof u &&
                              r.textContent !== "" + u &&
                              (s = ["children", "" + u])
                          : p.hasOwnProperty(c) && null != u && Bn(f, c));
                    switch (n) {
                      case "input":
                        xe(r), Oe(r, l, !0);
                        break;
                      case "textarea":
                        xe(r), je(r);
                        break;
                      case "select":
                      case "option":
                        break;
                      default:
                        "function" == typeof l.onClick && (r.onclick = Gn);
                    }
                    (c = s), (o.updateQueue = c), (o = null !== c) && ac(t);
                  } else {
                    (n = t),
                      (f = c),
                      (l = o),
                      (s = 9 === r.nodeType ? r : r.ownerDocument),
                      u === Fe && (u = ze(f)),
                      u === Fe
                        ? "script" === f
                          ? (((l = s.createElement("div")).innerHTML =
                              "<script></script>"),
                            (s = l.removeChild(l.firstChild)))
                          : "string" == typeof l.is
                          ? (s = s.createElement(f, { is: l.is }))
                          : ((s = s.createElement(f)),
                            "select" === f &&
                              ((f = s),
                              l.multiple
                                ? (f.multiple = !0)
                                : l.size && (f.size = l.size)))
                        : (s = s.createElementNS(u, f)),
                      ((l = s)[or] = n),
                      (l[ar] = o),
                      Ja(l, t),
                      (t.stateNode = l);
                    var d = r,
                      h = Vn((f = c), (n = o));
                    switch (f) {
                      case "iframe":
                      case "object":
                      case "embed":
                        Cn("load", l), (r = n);
                        break;
                      case "video":
                      case "audio":
                        for (r = 0; r < et.length; r++) Cn(et[r], l);
                        r = n;
                        break;
                      case "source":
                        Cn("error", l), (r = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Cn("error", l), Cn("load", l), (r = n);
                        break;
                      case "form":
                        Cn("reset", l), Cn("submit", l), (r = n);
                        break;
                      case "details":
                        Cn("toggle", l), (r = n);
                        break;
                      case "input":
                        _e(l, n),
                          (r = ke(l, n)),
                          Cn("invalid", l),
                          Bn(d, "onChange");
                        break;
                      case "option":
                        r = Ie(l, n);
                        break;
                      case "select":
                        (l._wrapperState = { wasMultiple: !!n.multiple }),
                          (r = i({}, n, { value: void 0 })),
                          Cn("invalid", l),
                          Bn(d, "onChange");
                        break;
                      case "textarea":
                        Ae(l, n),
                          (r = Ne(l, n)),
                          Cn("invalid", l),
                          Bn(d, "onChange");
                        break;
                      default:
                        r = n;
                    }
                    Wn(f, r), (s = void 0), (u = f);
                    var v = l,
                      m = r;
                    for (s in m)
                      if (m.hasOwnProperty(s)) {
                        var y = m[s];
                        "style" === s
                          ? Un(v, y)
                          : "dangerouslySetInnerHTML" === s
                          ? null != (y = y ? y.__html : void 0) && Be(v, y)
                          : "children" === s
                          ? "string" == typeof y
                            ? ("textarea" !== u || "" !== y) && Ge(v, y)
                            : "number" == typeof y && Ge(v, "" + y)
                          : "suppressContentEditableWarning" !== s &&
                            "suppressHydrationWarning" !== s &&
                            "autoFocus" !== s &&
                            (p.hasOwnProperty(s)
                              ? null != y && Bn(d, s)
                              : null != y && Ee(v, s, y, h));
                      }
                    switch (f) {
                      case "input":
                        xe(l), Oe(l, n, !1);
                        break;
                      case "textarea":
                        xe(l), je(l);
                        break;
                      case "option":
                        null != n.value &&
                          l.setAttribute("value", "" + Se(n.value));
                        break;
                      case "select":
                        ((r = l).multiple = !!n.multiple),
                          null != (l = n.value)
                            ? Le(r, !!n.multiple, l, !1)
                            : null != n.defaultValue &&
                              Le(r, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" == typeof r.onClick && (l.onclick = Gn);
                    }
                    (o = Xn(c, o)) && ac(t);
                  }
                  null !== t.ref && (t.effectTag |= 128);
                } else if (null === t.stateNode) throw Error(a(166));
                break;
              case 6:
                if (n && null != t.stateNode) Za(0, t, n.memoizedProps, o);
                else {
                  if ("string" != typeof o && null === t.stateNode)
                    throw Error(a(166));
                  (r = Uo(Fo.current)),
                    Uo(Do.current),
                    Fa(t)
                      ? ((c = (o = t).stateNode),
                        (r = o.memoizedProps),
                        (c[or] = o),
                        (o = c.nodeValue !== r) && ac(t))
                      : ((c = t),
                        ((o = (9 === r.nodeType
                          ? r
                          : r.ownerDocument
                        ).createTextNode(o))[or] = c),
                        (t.stateNode = o));
                }
                break;
              case 11:
                break;
              case 13:
                if ((si(Go), (o = t.memoizedState), 0 != (64 & t.effectTag))) {
                  t.expirationTime = r;
                  break e;
                }
                (o = null !== o),
                  (c = !1),
                  null === n
                    ? void 0 !== t.memoizedProps.fallback && Fa(t)
                    : ((c = null !== (r = n.memoizedState)),
                      o ||
                        null === r ||
                        (null !== (r = n.child.sibling) &&
                          (null !== (l = t.firstEffect)
                            ? ((t.firstEffect = r), (r.nextEffect = l))
                            : ((t.firstEffect = t.lastEffect = r),
                              (r.nextEffect = null)),
                          (r.effectTag = 8)))),
                  o &&
                    !c &&
                    0 != (2 & t.mode) &&
                    ((null === n &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Go.current)
                      ? 0 === Lc && (Lc = 3)
                      : ((0 !== Lc && 3 !== Lc) || (Lc = 4),
                        0 !== Fc && null !== Oc && (Uu(Oc, Ic), zu(Oc, Fc)))),
                  (o || c) && (t.effectTag |= 4);
                break;
              case 7:
              case 8:
              case 12:
                break;
              case 4:
                Wo();
                break;
              case 10:
                io(t);
                break;
              case 9:
              case 14:
                break;
              case 17:
                mi(t.type) && yi();
                break;
              case 19:
                if ((si(Go), null === (o = t.memoizedState))) break;
                if (
                  ((c = 0 != (64 & t.effectTag)), null === (l = o.rendering))
                ) {
                  if (c) cc(o, !1);
                  else if (0 !== Lc || (null !== n && 0 != (64 & n.effectTag)))
                    for (n = t.child; null !== n; ) {
                      if (null !== (l = $o(n))) {
                        for (
                          t.effectTag |= 64,
                            cc(o, !1),
                            null !== (c = l.updateQueue) &&
                              ((t.updateQueue = c), (t.effectTag |= 4)),
                            null === o.lastEffect && (t.firstEffect = null),
                            t.lastEffect = o.lastEffect,
                            o = r,
                            c = t.child;
                          null !== c;

                        )
                          (n = o),
                            ((r = c).effectTag &= 2),
                            (r.nextEffect = null),
                            (r.firstEffect = null),
                            (r.lastEffect = null),
                            null === (l = r.alternate)
                              ? ((r.childExpirationTime = 0),
                                (r.expirationTime = n),
                                (r.child = null),
                                (r.memoizedProps = null),
                                (r.memoizedState = null),
                                (r.updateQueue = null),
                                (r.dependencies = null))
                              : ((r.childExpirationTime =
                                  l.childExpirationTime),
                                (r.expirationTime = l.expirationTime),
                                (r.child = l.child),
                                (r.memoizedProps = l.memoizedProps),
                                (r.memoizedState = l.memoizedState),
                                (r.updateQueue = l.updateQueue),
                                (n = l.dependencies),
                                (r.dependencies =
                                  null === n
                                    ? null
                                    : {
                                        expirationTime: n.expirationTime,
                                        firstContext: n.firstContext,
                                        responders: n.responders
                                      })),
                            (c = c.sibling);
                        li(Go, (1 & Go.current) | 2), (t = t.child);
                        break e;
                      }
                      n = n.sibling;
                    }
                } else {
                  if (!c)
                    if (null !== (n = $o(l))) {
                      if (
                        ((t.effectTag |= 64),
                        (c = !0),
                        null !== (r = n.updateQueue) &&
                          ((t.updateQueue = r), (t.effectTag |= 4)),
                        cc(o, !0),
                        null === o.tail &&
                          "hidden" === o.tailMode &&
                          !l.alternate)
                      ) {
                        null !== (t = t.lastEffect = o.lastEffect) &&
                          (t.nextEffect = null);
                        break;
                      }
                    } else
                      Wi() > o.tailExpiration &&
                        1 < r &&
                        ((t.effectTag |= 64),
                        (c = !0),
                        cc(o, !1),
                        (t.expirationTime = t.childExpirationTime = r - 1));
                  o.isBackwards
                    ? ((l.sibling = t.child), (t.child = l))
                    : (null !== (r = o.last) ? (r.sibling = l) : (t.child = l),
                      (o.last = l));
                }
                if (null !== o.tail) {
                  0 === o.tailExpiration && (o.tailExpiration = Wi() + 500),
                    (r = o.tail),
                    (o.rendering = r),
                    (o.tail = r.sibling),
                    (o.lastEffect = t.lastEffect),
                    (r.sibling = null),
                    (o = Go.current),
                    li(Go, (o = c ? (1 & o) | 2 : 1 & o)),
                    (t = r);
                  break e;
                }
                break;
              case 20:
              case 21:
                break;
              default:
                throw Error(a(156, t.tag));
            }
            t = null;
          }
          if (((o = Mc), 1 === Ic || 1 !== o.childExpirationTime)) {
            for (c = 0, r = o.child; null !== r; )
              (n = r.expirationTime) > c && (c = n),
                (l = r.childExpirationTime) > c && (c = l),
                (r = r.sibling);
            o.childExpirationTime = c;
          }
          if (null !== t) return t;
          null !== e &&
            0 == (2048 & e.effectTag) &&
            (null === e.firstEffect && (e.firstEffect = Mc.firstEffect),
            null !== Mc.lastEffect &&
              (null !== e.lastEffect &&
                (e.lastEffect.nextEffect = Mc.firstEffect),
              (e.lastEffect = Mc.lastEffect)),
            1 < Mc.effectTag &&
              (null !== e.lastEffect
                ? (e.lastEffect.nextEffect = Mc)
                : (e.firstEffect = Mc),
              (e.lastEffect = Mc)));
        } else {
          if (null !== (t = uc(Mc))) return (t.effectTag &= 2047), t;
          null !== e &&
            ((e.firstEffect = e.lastEffect = null), (e.effectTag |= 2048));
        }
        if (null !== (t = Mc.sibling)) return t;
        Mc = e;
      } while (null !== Mc);
      return 0 === Lc && (Lc = 5), null;
    }
    function yu(e) {
      var t = e.expirationTime;
      return t > (e = e.childExpirationTime) ? t : e;
    }
    function gu(e) {
      var t = Vi();
      return Gi(99, bu.bind(null, e, t)), null;
    }
    function bu(e, t) {
      do {
        Su();
      } while (null !== Hc);
      if (0 != (48 & Rc)) throw Error(a(327));
      var n = e.finishedWork,
        r = e.finishedExpirationTime;
      if (null === n) return null;
      if (
        ((e.finishedWork = null),
        (e.finishedExpirationTime = 0),
        n === e.current)
      )
        throw Error(a(177));
      (e.callbackNode = null),
        (e.callbackExpirationTime = 0),
        (e.callbackPriority = 90),
        (e.nextKnownPendingLevel = 0);
      var i = yu(n);
      if (
        ((e.firstPendingTime = i),
        r <= e.lastSuspendedTime
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1),
        r <= e.lastPingedTime && (e.lastPingedTime = 0),
        r <= e.lastExpiredTime && (e.lastExpiredTime = 0),
        e === Oc && ((Mc = Oc = null), (Ic = 0)),
        1 < n.effectTag
          ? null !== n.lastEffect
            ? ((n.lastEffect.nextEffect = n), (i = n.firstEffect))
            : (i = n)
          : (i = n.firstEffect),
        null !== i)
      ) {
        var o = Rc;
        (Rc |= 32), (Pc.current = null), (Yn = xn);
        var c = Qn();
        if (qn(c)) {
          if ("selectionStart" in c)
            var u = { start: c.selectionStart, end: c.selectionEnd };
          else
            e: {
              var s =
                (u = ((u = c.ownerDocument) && u.defaultView) || window)
                  .getSelection && u.getSelection();
              if (s && 0 !== s.rangeCount) {
                u = s.anchorNode;
                var l = s.anchorOffset,
                  f = s.focusNode;
                s = s.focusOffset;
                try {
                  u.nodeType, f.nodeType;
                } catch (e) {
                  u = null;
                  break e;
                }
                var d = 0,
                  p = -1,
                  h = -1,
                  v = 0,
                  m = 0,
                  y = c,
                  g = null;
                t: for (;;) {
                  for (
                    var b;
                    y !== u || (0 !== l && 3 !== y.nodeType) || (p = d + l),
                      y !== f || (0 !== s && 3 !== y.nodeType) || (h = d + s),
                      3 === y.nodeType && (d += y.nodeValue.length),
                      null !== (b = y.firstChild);

                  )
                    (g = y), (y = b);
                  for (;;) {
                    if (y === c) break t;
                    if (
                      (g === u && ++v === l && (p = d),
                      g === f && ++m === s && (h = d),
                      null !== (b = y.nextSibling))
                    )
                      break;
                    g = (y = g).parentNode;
                  }
                  y = b;
                }
                u = -1 === p || -1 === h ? null : { start: p, end: h };
              } else u = null;
            }
          u = u || { start: 0, end: 0 };
        } else u = null;
        (Jn = { focusedElem: c, selectionRange: u }), (xn = !1), (Wc = i);
        do {
          try {
            wu();
          } catch (e) {
            if (null === Wc) throw Error(a(330));
            xu(Wc, e), (Wc = Wc.nextEffect);
          }
        } while (null !== Wc);
        Wc = i;
        do {
          try {
            for (c = e, u = t; null !== Wc; ) {
              var w = Wc.effectTag;
              if ((16 & w && Ge(Wc.stateNode, ""), 128 & w)) {
                var S = Wc.alternate;
                if (null !== S) {
                  var E = S.ref;
                  null !== E &&
                    ("function" == typeof E ? E(null) : (E.current = null));
                }
              }
              switch (1038 & w) {
                case 2:
                  gc(Wc), (Wc.effectTag &= -3);
                  break;
                case 6:
                  gc(Wc), (Wc.effectTag &= -3), wc(Wc.alternate, Wc);
                  break;
                case 1024:
                  Wc.effectTag &= -1025;
                  break;
                case 1028:
                  (Wc.effectTag &= -1025), wc(Wc.alternate, Wc);
                  break;
                case 4:
                  wc(Wc.alternate, Wc);
                  break;
                case 8:
                  bc(c, (l = Wc), u), mc(l);
              }
              Wc = Wc.nextEffect;
            }
          } catch (e) {
            if (null === Wc) throw Error(a(330));
            xu(Wc, e), (Wc = Wc.nextEffect);
          }
        } while (null !== Wc);
        if (
          ((E = Jn),
          (S = Qn()),
          (w = E.focusedElem),
          (u = E.selectionRange),
          S !== w &&
            w &&
            w.ownerDocument &&
            (function e(t, n) {
              return (
                !(!t || !n) &&
                (t === n ||
                  ((!t || 3 !== t.nodeType) &&
                    (n && 3 === n.nodeType
                      ? e(t, n.parentNode)
                      : "contains" in t
                      ? t.contains(n)
                      : !!t.compareDocumentPosition &&
                        !!(16 & t.compareDocumentPosition(n)))))
              );
            })(w.ownerDocument.documentElement, w))
        ) {
          null !== u &&
            qn(w) &&
            ((S = u.start),
            void 0 === (E = u.end) && (E = S),
            "selectionStart" in w
              ? ((w.selectionStart = S),
                (w.selectionEnd = Math.min(E, w.value.length)))
              : (E =
                  ((S = w.ownerDocument || document) && S.defaultView) ||
                  window).getSelection &&
                ((E = E.getSelection()),
                (l = w.textContent.length),
                (c = Math.min(u.start, l)),
                (u = void 0 === u.end ? c : Math.min(u.end, l)),
                !E.extend && c > u && ((l = u), (u = c), (c = l)),
                (l = Kn(w, c)),
                (f = Kn(w, u)),
                l &&
                  f &&
                  (1 !== E.rangeCount ||
                    E.anchorNode !== l.node ||
                    E.anchorOffset !== l.offset ||
                    E.focusNode !== f.node ||
                    E.focusOffset !== f.offset) &&
                  ((S = S.createRange()).setStart(l.node, l.offset),
                  E.removeAllRanges(),
                  c > u
                    ? (E.addRange(S), E.extend(f.node, f.offset))
                    : (S.setEnd(f.node, f.offset), E.addRange(S))))),
            (S = []);
          for (E = w; (E = E.parentNode); )
            1 === E.nodeType &&
              S.push({ element: E, left: E.scrollLeft, top: E.scrollTop });
          for (
            "function" == typeof w.focus && w.focus(), w = 0;
            w < S.length;
            w++
          )
            ((E = S[w]).element.scrollLeft = E.left),
              (E.element.scrollTop = E.top);
        }
        (Jn = null), (xn = !!Yn), (Yn = null), (e.current = n), (Wc = i);
        do {
          try {
            for (w = r; null !== Wc; ) {
              var T = Wc.effectTag;
              if (36 & T) {
                var x = Wc.alternate;
                switch (((E = w), (S = Wc).tag)) {
                  case 0:
                  case 11:
                  case 15:
                    hc(16, 32, S);
                    break;
                  case 1:
                    var C = S.stateNode;
                    if (4 & S.effectTag)
                      if (null === x) C.componentDidMount();
                      else {
                        var k =
                          S.elementType === S.type
                            ? x.memoizedProps
                            : Ji(S.type, x.memoizedProps);
                        C.componentDidUpdate(
                          k,
                          x.memoizedState,
                          C.__reactInternalSnapshotBeforeUpdate
                        );
                      }
                    var _ = S.updateQueue;
                    null !== _ && bo(0, _, C);
                    break;
                  case 3:
                    var P = S.updateQueue;
                    if (null !== P) {
                      if (((c = null), null !== S.child))
                        switch (S.child.tag) {
                          case 5:
                            c = S.child.stateNode;
                            break;
                          case 1:
                            c = S.child.stateNode;
                        }
                      bo(0, P, c);
                    }
                    break;
                  case 5:
                    var R = S.stateNode;
                    null === x &&
                      4 & S.effectTag &&
                      Xn(S.type, S.memoizedProps) &&
                      R.focus();
                    break;
                  case 6:
                  case 4:
                  case 12:
                    break;
                  case 13:
                    if (null === S.memoizedState) {
                      var O = S.alternate;
                      if (null !== O) {
                        var M = O.memoizedState;
                        if (null !== M) {
                          var I = M.dehydrated;
                          null !== I && kt(I);
                        }
                      }
                    }
                    break;
                  case 19:
                  case 17:
                  case 20:
                  case 21:
                    break;
                  default:
                    throw Error(a(163));
                }
              }
              if (128 & T) {
                S = void 0;
                var L = Wc.ref;
                if (null !== L) {
                  var N = Wc.stateNode;
                  switch (Wc.tag) {
                    case 5:
                      S = N;
                      break;
                    default:
                      S = N;
                  }
                  "function" == typeof L ? L(S) : (L.current = S);
                }
              }
              Wc = Wc.nextEffect;
            }
          } catch (e) {
            if (null === Wc) throw Error(a(330));
            xu(Wc, e), (Wc = Wc.nextEffect);
          }
        } while (null !== Wc);
        (Wc = null), Di(), (Rc = o);
      } else e.current = n;
      if ($c) ($c = !1), (Hc = e), (Kc = t);
      else
        for (Wc = i; null !== Wc; )
          (t = Wc.nextEffect), (Wc.nextEffect = null), (Wc = t);
      if (
        (0 === (t = e.firstPendingTime) && (Gc = null),
        1073741823 === t ? (e === Yc ? qc++ : ((qc = 0), (Yc = e))) : (qc = 0),
        "function" == typeof _u && _u(n.stateNode, r),
        ru(e),
        Vc)
      )
        throw ((Vc = !1), (e = Bc), (Bc = null), e);
      return 0 != (8 & Rc) ? null : (Ki(), null);
    }
    function wu() {
      for (; null !== Wc; ) {
        var e = Wc.effectTag;
        0 != (256 & e) && pc(Wc.alternate, Wc),
          0 == (512 & e) ||
            $c ||
            (($c = !0),
            $i(97, function() {
              return Su(), null;
            })),
          (Wc = Wc.nextEffect);
      }
    }
    function Su() {
      if (90 !== Kc) {
        var e = 97 < Kc ? 97 : Kc;
        return (Kc = 90), Gi(e, Eu);
      }
    }
    function Eu() {
      if (null === Hc) return !1;
      var e = Hc;
      if (((Hc = null), 0 != (48 & Rc))) throw Error(a(331));
      var t = Rc;
      for (Rc |= 32, e = e.current.firstEffect; null !== e; ) {
        try {
          var n = e;
          if (0 != (512 & n.effectTag))
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                hc(128, 0, n), hc(0, 64, n);
            }
        } catch (t) {
          if (null === e) throw Error(a(330));
          xu(e, t);
        }
        (n = e.nextEffect), (e.nextEffect = null), (e = n);
      }
      return (Rc = t), Ki(), !0;
    }
    function Tu(e, t, n) {
      ho(e, (t = Tc(e, (t = sc(n, t)), 1073741823))),
        null !== (e = tu(e, 1073741823)) && ru(e);
    }
    function xu(e, t) {
      if (3 === e.tag) Tu(e, e, t);
      else
        for (var n = e.return; null !== n; ) {
          if (3 === n.tag) {
            Tu(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === Gc || !Gc.has(r)))
            ) {
              ho(n, (e = xc(n, (e = sc(t, e)), 1073741823))),
                null !== (n = tu(n, 1073741823)) && ru(n);
              break;
            }
          }
          n = n.return;
        }
    }
    function Cu(e, t, n) {
      var r = e.pingCache;
      null !== r && r.delete(t),
        Oc === e && Ic === n
          ? 4 === Lc || (3 === Lc && 1073741823 === Ac && Wi() - zc < 500)
            ? uu(e, Ic)
            : (Uc = !0)
          : Fu(e, n) &&
            ((0 !== (t = e.lastPingedTime) && t < n) ||
              ((e.lastPingedTime = n),
              e.finishedExpirationTime === n &&
                ((e.finishedExpirationTime = 0), (e.finishedWork = null)),
              ru(e)));
    }
    function ku(e, t) {
      var n = e.stateNode;
      null !== n && n.delete(t),
        0 === (t = 0) && (t = Zc((t = Xc()), e, null)),
        null !== (e = tu(e, t)) && ru(e);
    }
    Cc = function(e, t, n) {
      var r = t.expirationTime;
      if (null !== e) {
        var i = t.pendingProps;
        if (e.memoizedProps !== i || pi.current) Wa = !0;
        else {
          if (r < n) {
            switch (((Wa = !1), t.tag)) {
              case 3:
                Ya(t), Ua();
                break;
              case 5:
                if ((Vo(t), 4 & t.mode && 1 !== n && i.hidden))
                  return (t.expirationTime = t.childExpirationTime = 1), null;
                break;
              case 1:
                mi(t.type) && Si(t);
                break;
              case 4:
                zo(t, t.stateNode.containerInfo);
                break;
              case 10:
                ro(t, t.memoizedProps.value);
                break;
              case 13:
                if (null !== t.memoizedState)
                  return 0 !== (r = t.child.childExpirationTime) && r >= n
                    ? tc(e, t, n)
                    : (li(Go, 1 & Go.current),
                      null !== (t = oc(e, t, n)) ? t.sibling : null);
                li(Go, 1 & Go.current);
                break;
              case 19:
                if (
                  ((r = t.childExpirationTime >= n), 0 != (64 & e.effectTag))
                ) {
                  if (r) return ic(e, t, n);
                  t.effectTag |= 64;
                }
                if (
                  (null !== (i = t.memoizedState) &&
                    ((i.rendering = null), (i.tail = null)),
                  li(Go, Go.current),
                  !r)
                )
                  return null;
            }
            return oc(e, t, n);
          }
          Wa = !1;
        }
      } else Wa = !1;
      switch (((t.expirationTime = 0), t.tag)) {
        case 2:
          if (
            ((r = t.type),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (i = vi(t, di.current)),
            ao(t, n),
            (i = la(null, t, r, e, i, n)),
            (t.effectTag |= 1),
            "object" == typeof i &&
              null !== i &&
              "function" == typeof i.render &&
              void 0 === i.$$typeof)
          ) {
            if (((t.tag = 1), fa(), mi(r))) {
              var o = !0;
              Si(t);
            } else o = !1;
            t.memoizedState =
              null !== i.state && void 0 !== i.state ? i.state : null;
            var c = r.getDerivedStateFromProps;
            "function" == typeof c && To(t, r, c, e),
              (i.updater = xo),
              (t.stateNode = i),
              (i._reactInternalFiber = t),
              Po(t, r, e, n),
              (t = qa(null, t, r, !0, o, n));
          } else (t.tag = 0), Va(null, t, i, n), (t = t.child);
          return t;
        case 16:
          if (
            ((i = t.elementType),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (e = t.pendingProps),
            (function(e) {
              if (-1 === e._status) {
                e._status = 0;
                var t = e._ctor;
                (t = t()),
                  (e._result = t),
                  t.then(
                    function(t) {
                      0 === e._status &&
                        ((t = t.default), (e._status = 1), (e._result = t));
                    },
                    function(t) {
                      0 === e._status && ((e._status = 2), (e._result = t));
                    }
                  );
              }
            })(i),
            1 !== i._status)
          )
            throw i._result;
          switch (
            ((i = i._result),
            (t.type = i),
            (o = t.tag = (function(e) {
              if ("function" == typeof e) return Mu(e) ? 1 : 0;
              if (null != e) {
                if ((e = e.$$typeof) === G) return 11;
                if (e === K) return 14;
              }
              return 2;
            })(i)),
            (e = Ji(i, e)),
            o)
          ) {
            case 0:
              t = Ka(null, t, i, e, n);
              break;
            case 1:
              t = Qa(null, t, i, e, n);
              break;
            case 11:
              t = Ba(null, t, i, e, n);
              break;
            case 14:
              t = Ga(null, t, i, Ji(i.type, e), r, n);
              break;
            default:
              throw Error(a(306, i, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Ka(e, t, r, (i = t.elementType === r ? i : Ji(r, i)), n)
          );
        case 1:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Qa(e, t, r, (i = t.elementType === r ? i : Ji(r, i)), n)
          );
        case 3:
          if ((Ya(t), null === (r = t.updateQueue))) throw Error(a(282));
          if (
            ((i = null !== (i = t.memoizedState) ? i.element : null),
            go(t, r, t.pendingProps, null, n),
            (r = t.memoizedState.element) === i)
          )
            Ua(), (t = oc(e, t, n));
          else {
            if (
              ((i = t.stateNode.hydrate) &&
                ((Ia = nr(t.stateNode.containerInfo.firstChild)),
                (Ma = t),
                (i = La = !0)),
              i)
            )
              for (n = No(t, null, r, n), t.child = n; n; )
                (n.effectTag = (-3 & n.effectTag) | 1024), (n = n.sibling);
            else Va(e, t, r, n), Ua();
            t = t.child;
          }
          return t;
        case 5:
          return (
            Vo(t),
            null === e && Da(t),
            (r = t.type),
            (i = t.pendingProps),
            (o = null !== e ? e.memoizedProps : null),
            (c = i.children),
            Zn(r, i)
              ? (c = null)
              : null !== o && Zn(r, o) && (t.effectTag |= 16),
            Ha(e, t),
            4 & t.mode && 1 !== n && i.hidden
              ? ((t.expirationTime = t.childExpirationTime = 1), (t = null))
              : (Va(e, t, c, n), (t = t.child)),
            t
          );
        case 6:
          return null === e && Da(t), null;
        case 13:
          return tc(e, t, n);
        case 4:
          return (
            zo(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = Lo(t, null, r, n)) : Va(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (i = t.pendingProps),
            Ba(e, t, r, (i = t.elementType === r ? i : Ji(r, i)), n)
          );
        case 7:
          return Va(e, t, t.pendingProps, n), t.child;
        case 8:
        case 12:
          return Va(e, t, t.pendingProps.children, n), t.child;
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (i = t.pendingProps),
              (c = t.memoizedProps),
              ro(t, (o = i.value)),
              null !== c)
            ) {
              var u = c.value;
              if (
                0 ===
                (o = Yr(u, o)
                  ? 0
                  : 0 |
                    ("function" == typeof r._calculateChangedBits
                      ? r._calculateChangedBits(u, o)
                      : 1073741823))
              ) {
                if (c.children === i.children && !pi.current) {
                  t = oc(e, t, n);
                  break e;
                }
              } else
                for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                  var s = u.dependencies;
                  if (null !== s) {
                    c = u.child;
                    for (var l = s.firstContext; null !== l; ) {
                      if (l.context === r && 0 != (l.observedBits & o)) {
                        1 === u.tag && (((l = fo(n, null)).tag = 2), ho(u, l)),
                          u.expirationTime < n && (u.expirationTime = n),
                          null !== (l = u.alternate) &&
                            l.expirationTime < n &&
                            (l.expirationTime = n),
                          oo(u.return, n),
                          s.expirationTime < n && (s.expirationTime = n);
                        break;
                      }
                      l = l.next;
                    }
                  } else c = 10 === u.tag && u.type === t.type ? null : u.child;
                  if (null !== c) c.return = u;
                  else
                    for (c = u; null !== c; ) {
                      if (c === t) {
                        c = null;
                        break;
                      }
                      if (null !== (u = c.sibling)) {
                        (u.return = c.return), (c = u);
                        break;
                      }
                      c = c.return;
                    }
                  u = c;
                }
            }
            Va(e, t, i.children, n), (t = t.child);
          }
          return t;
        case 9:
          return (
            (i = t.type),
            (r = (o = t.pendingProps).children),
            ao(t, n),
            (r = r((i = co(i, o.unstable_observedBits)))),
            (t.effectTag |= 1),
            Va(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (o = Ji((i = t.type), t.pendingProps)),
            Ga(e, t, i, (o = Ji(i.type, o)), r, n)
          );
        case 15:
          return $a(e, t, t.type, t.pendingProps, r, n);
        case 17:
          return (
            (r = t.type),
            (i = t.pendingProps),
            (i = t.elementType === r ? i : Ji(r, i)),
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.effectTag |= 2)),
            (t.tag = 1),
            mi(r) ? ((e = !0), Si(t)) : (e = !1),
            ao(t, n),
            ko(t, r, i),
            Po(t, r, i, n),
            qa(null, t, r, !0, e, n)
          );
        case 19:
          return ic(e, t, n);
      }
      throw Error(a(156, t.tag));
    };
    var _u = null,
      Pu = null;
    function Ru(e, t, n, r) {
      (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.effectTag = 0),
        (this.lastEffect = this.firstEffect = this.nextEffect = null),
        (this.childExpirationTime = this.expirationTime = 0),
        (this.alternate = null);
    }
    function Ou(e, t, n, r) {
      return new Ru(e, t, n, r);
    }
    function Mu(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function Iu(e, t) {
      var n = e.alternate;
      return (
        null === n
          ? (((n = Ou(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.effectTag = 0),
            (n.nextEffect = null),
            (n.firstEffect = null),
            (n.lastEffect = null)),
        (n.childExpirationTime = e.childExpirationTime),
        (n.expirationTime = e.expirationTime),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t
            ? null
            : {
                expirationTime: t.expirationTime,
                firstContext: t.firstContext,
                responders: t.responders
              }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Lu(e, t, n, r, i, o) {
      var c = 2;
      if (((r = e), "function" == typeof e)) Mu(e) && (c = 1);
      else if ("string" == typeof e) c = 5;
      else
        e: switch (e) {
          case F:
            return Nu(n.children, i, o, t);
          case B:
            (c = 8), (i |= 7);
            break;
          case U:
            (c = 8), (i |= 1);
            break;
          case z:
            return (
              ((e = Ou(12, n, t, 8 | i)).elementType = z),
              (e.type = z),
              (e.expirationTime = o),
              e
            );
          case $:
            return (
              ((e = Ou(13, n, t, i)).type = $),
              (e.elementType = $),
              (e.expirationTime = o),
              e
            );
          case H:
            return (
              ((e = Ou(19, n, t, i)).elementType = H), (e.expirationTime = o), e
            );
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case W:
                  c = 10;
                  break e;
                case V:
                  c = 9;
                  break e;
                case G:
                  c = 11;
                  break e;
                case K:
                  c = 14;
                  break e;
                case Q:
                  (c = 16), (r = null);
                  break e;
              }
            throw Error(a(130, null == e ? e : typeof e, ""));
        }
      return (
        ((t = Ou(c, n, t, i)).elementType = e),
        (t.type = r),
        (t.expirationTime = o),
        t
      );
    }
    function Nu(e, t, n, r) {
      return ((e = Ou(7, e, r, t)).expirationTime = n), e;
    }
    function Au(e, t, n) {
      return ((e = Ou(6, e, null, t)).expirationTime = n), e;
    }
    function Du(e, t, n) {
      return (
        ((t = Ou(
          4,
          null !== e.children ? e.children : [],
          e.key,
          t
        )).expirationTime = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation
        }),
        t
      );
    }
    function ju(e, t, n) {
      (this.tag = t),
        (this.current = null),
        (this.containerInfo = e),
        (this.pingCache = this.pendingChildren = null),
        (this.finishedExpirationTime = 0),
        (this.finishedWork = null),
        (this.timeoutHandle = -1),
        (this.pendingContext = this.context = null),
        (this.hydrate = n),
        (this.callbackNode = null),
        (this.callbackPriority = 90),
        (this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0);
    }
    function Fu(e, t) {
      var n = e.firstSuspendedTime;
      return (e = e.lastSuspendedTime), 0 !== n && n >= t && e <= t;
    }
    function Uu(e, t) {
      var n = e.firstSuspendedTime,
        r = e.lastSuspendedTime;
      n < t && (e.firstSuspendedTime = t),
        (r > t || 0 === n) && (e.lastSuspendedTime = t),
        t <= e.lastPingedTime && (e.lastPingedTime = 0),
        t <= e.lastExpiredTime && (e.lastExpiredTime = 0);
    }
    function zu(e, t) {
      t > e.firstPendingTime && (e.firstPendingTime = t);
      var n = e.firstSuspendedTime;
      0 !== n &&
        (t >= n
          ? (e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0)
          : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1),
        t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t));
    }
    function Wu(e, t) {
      var n = e.lastExpiredTime;
      (0 === n || n > t) && (e.lastExpiredTime = t);
    }
    function Vu(e, t, n, r) {
      var i = t.current,
        o = Xc(),
        c = So.suspense;
      o = Zc(o, i, c);
      e: if (n) {
        t: {
          if (tt((n = n._reactInternalFiber)) !== n || 1 !== n.tag)
            throw Error(a(170));
          var u = n;
          do {
            switch (u.tag) {
              case 3:
                u = u.stateNode.context;
                break t;
              case 1:
                if (mi(u.type)) {
                  u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            u = u.return;
          } while (null !== u);
          throw Error(a(171));
        }
        if (1 === n.tag) {
          var s = n.type;
          if (mi(s)) {
            n = wi(n, s, u);
            break e;
          }
        }
        n = u;
      } else n = fi;
      return (
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = fo(o, c)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        ho(i, t),
        eu(i, o),
        o
      );
    }
    function Bu(e) {
      if (!(e = e.current).child) return null;
      switch (e.child.tag) {
        case 5:
        default:
          return e.child.stateNode;
      }
    }
    function Gu(e, t) {
      null !== (e = e.memoizedState) &&
        null !== e.dehydrated &&
        e.retryTime < t &&
        (e.retryTime = t);
    }
    function $u(e, t) {
      Gu(e, t), (e = e.alternate) && Gu(e, t);
    }
    function Hu(e, t, n) {
      var r = new ju(e, t, (n = null != n && !0 === n.hydrate)),
        i = Ou(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
      (r.current = i),
        (i.stateNode = r),
        (e[cr] = r.current),
        n &&
          0 !== t &&
          (function(e) {
            var t = Nn(e);
            mt.forEach(function(n) {
              An(n, e, t);
            }),
              yt.forEach(function(n) {
                An(n, e, t);
              });
          })(9 === e.nodeType ? e : e.ownerDocument),
        (this._internalRoot = r);
    }
    function Ku(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function Qu(e, t, n, r, i) {
      var o = n._reactRootContainer;
      if (o) {
        var a = o._internalRoot;
        if ("function" == typeof i) {
          var c = i;
          i = function() {
            var e = Bu(a);
            c.call(e);
          };
        }
        Vu(t, a, e, i);
      } else {
        if (
          ((o = n._reactRootContainer = (function(e, t) {
            if (
              (t ||
                (t = !(
                  !(t = e
                    ? 9 === e.nodeType
                      ? e.documentElement
                      : e.firstChild
                    : null) ||
                  1 !== t.nodeType ||
                  !t.hasAttribute("data-reactroot")
                )),
              !t)
            )
              for (var n; (n = e.lastChild); ) e.removeChild(n);
            return new Hu(e, 0, t ? { hydrate: !0 } : void 0);
          })(n, r)),
          (a = o._internalRoot),
          "function" == typeof i)
        ) {
          var u = i;
          i = function() {
            var e = Bu(a);
            u.call(e);
          };
        }
        cu(function() {
          Vu(t, a, e, i);
        });
      }
      return Bu(a);
    }
    function qu(e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: j,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    function Yu(e, t) {
      var n =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Ku(t)) throw Error(a(200));
      return qu(e, t, null, n);
    }
    (Hu.prototype.render = function(e, t) {
      Vu(e, this._internalRoot, null, void 0 === t ? null : t);
    }),
      (Hu.prototype.unmount = function(e) {
        var t = this._internalRoot,
          n = void 0 === e ? null : e,
          r = t.containerInfo;
        Vu(null, t, null, function() {
          (r[cr] = null), null !== n && n();
        });
      }),
      (ot = function(e) {
        if (13 === e.tag) {
          var t = Yi(Xc(), 150, 100);
          eu(e, t), $u(e, t);
        }
      }),
      (at = function(e) {
        if (13 === e.tag) {
          Xc();
          var t = qi++;
          eu(e, t), $u(e, t);
        }
      }),
      (ct = function(e) {
        if (13 === e.tag) {
          var t = Xc();
          eu(e, (t = Zc(t, e, null))), $u(e, t);
        }
      }),
      (ee = function(e, t, n) {
        switch (t) {
          case "input":
            if ((Re(e, n), (t = n.name), "radio" === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var i = fr(r);
                  if (!i) throw Error(a(90));
                  Ce(r), Re(r, i);
                }
              }
            }
            break;
          case "textarea":
            De(e, n);
            break;
          case "select":
            null != (t = n.value) && Le(e, !!n.multiple, t, !1);
        }
      }),
      (ae = au),
      (ce = function(e, t, n, r) {
        var i = Rc;
        Rc |= 4;
        try {
          return Gi(98, e.bind(null, t, n, r));
        } finally {
          0 === (Rc = i) && Ki();
        }
      }),
      (ue = function() {
        0 == (49 & Rc) &&
          ((function() {
            if (null !== Qc) {
              var e = Qc;
              (Qc = null),
                e.forEach(function(e, t) {
                  Wu(t, e), ru(t);
                }),
                Ki();
            }
          })(),
          Su());
      }),
      (se = function(e, t) {
        var n = Rc;
        Rc |= 2;
        try {
          return e(t);
        } finally {
          0 === (Rc = n) && Ki();
        }
      });
    var Ju,
      Xu,
      Zu = {
        createPortal: Yu,
        findDOMNode: function(e) {
          if (null == e) return null;
          if (1 === e.nodeType) return e;
          var t = e._reactInternalFiber;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(a(188));
            throw Error(a(268, Object.keys(e)));
          }
          return (e = null === (e = it(t)) ? null : e.stateNode);
        },
        hydrate: function(e, t, n) {
          if (!Ku(t)) throw Error(a(200));
          return Qu(null, e, t, !0, n);
        },
        render: function(e, t, n) {
          if (!Ku(t)) throw Error(a(200));
          return Qu(null, e, t, !1, n);
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
          if (!Ku(n)) throw Error(a(200));
          if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
          return Qu(e, t, n, !1, r);
        },
        unmountComponentAtNode: function(e) {
          if (!Ku(e)) throw Error(a(40));
          return (
            !!e._reactRootContainer &&
            (cu(function() {
              Qu(null, null, e, !1, function() {
                (e._reactRootContainer = null), (e[cr] = null);
              });
            }),
            !0)
          );
        },
        unstable_createPortal: function() {
          return Yu.apply(void 0, arguments);
        },
        unstable_batchedUpdates: au,
        flushSync: function(e, t) {
          if (0 != (48 & Rc)) throw Error(a(187));
          var n = Rc;
          Rc |= 1;
          try {
            return Gi(99, e.bind(null, t));
          } finally {
            (Rc = n), Ki();
          }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          Events: [
            sr,
            lr,
            fr,
            M.injectEventPluginsByName,
            d,
            Lt,
            function(e) {
              _(e, It);
            },
            ie,
            oe,
            On,
            O,
            Su,
            { current: !1 }
          ]
        }
      };
    (Xu = (Ju = {
      findFiberByHostInstance: ur,
      bundleType: 0,
      version: "16.12.0",
      rendererPackageName: "react-dom"
    }).findFiberByHostInstance),
      (function(e) {
        if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (t.isDisabled || !t.supportsFiber) return !0;
        try {
          var n = t.inject(e);
          (_u = function(e) {
            try {
              t.onCommitFiberRoot(
                n,
                e,
                void 0,
                64 == (64 & e.current.effectTag)
              );
            } catch (e) {}
          }),
            (Pu = function(e) {
              try {
                t.onCommitFiberUnmount(n, e);
              } catch (e) {}
            });
        } catch (e) {}
      })(
        i({}, Ju, {
          overrideHookState: null,
          overrideProps: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: L.ReactCurrentDispatcher,
          findHostInstanceByFiber: function(e) {
            return null === (e = it(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance: function(e) {
            return Xu ? Xu(e) : null;
          },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null
        })
      );
    var es = { default: Zu },
      ts = (es && Zu) || es;
    e.exports = ts.default || ts;
  },
  function(e, t, n) {
    "use strict";
    e.exports = n(147);
  },
  function(e, t, n) {
    "use strict";
    /** @license React v0.18.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, i, o, a, c;
    if (
      (Object.defineProperty(t, "__esModule", { value: !0 }),
      "undefined" == typeof window || "function" != typeof MessageChannel)
    ) {
      var u = null,
        s = null,
        l = function() {
          if (null !== u)
            try {
              var e = t.unstable_now();
              u(!0, e), (u = null);
            } catch (e) {
              throw (setTimeout(l, 0), e);
            }
        },
        f = Date.now();
      (t.unstable_now = function() {
        return Date.now() - f;
      }),
        (r = function(e) {
          null !== u ? setTimeout(r, 0, e) : ((u = e), setTimeout(l, 0));
        }),
        (i = function(e, t) {
          s = setTimeout(e, t);
        }),
        (o = function() {
          clearTimeout(s);
        }),
        (a = function() {
          return !1;
        }),
        (c = t.unstable_forceFrameRate = function() {});
    } else {
      var d = window.performance,
        p = window.Date,
        h = window.setTimeout,
        v = window.clearTimeout;
      if ("undefined" != typeof console) {
        var m = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          "function" != typeof m &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ("object" == typeof d && "function" == typeof d.now)
        t.unstable_now = function() {
          return d.now();
        };
      else {
        var y = p.now();
        t.unstable_now = function() {
          return p.now() - y;
        };
      }
      var g = !1,
        b = null,
        w = -1,
        S = 5,
        E = 0;
      (a = function() {
        return t.unstable_now() >= E;
      }),
        (c = function() {}),
        (t.unstable_forceFrameRate = function(e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (S = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var T = new MessageChannel(),
        x = T.port2;
      (T.port1.onmessage = function() {
        if (null !== b) {
          var e = t.unstable_now();
          E = e + S;
          try {
            b(!0, e) ? x.postMessage(null) : ((g = !1), (b = null));
          } catch (e) {
            throw (x.postMessage(null), e);
          }
        } else g = !1;
      }),
        (r = function(e) {
          (b = e), g || ((g = !0), x.postMessage(null));
        }),
        (i = function(e, n) {
          w = h(function() {
            e(t.unstable_now());
          }, n);
        }),
        (o = function() {
          v(w), (w = -1);
        });
    }
    function C(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = Math.floor((n - 1) / 2),
          i = e[r];
        if (!(void 0 !== i && 0 < P(i, t))) break e;
        (e[r] = t), (e[n] = i), (n = r);
      }
    }
    function k(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function _(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, i = e.length; r < i; ) {
            var o = 2 * (r + 1) - 1,
              a = e[o],
              c = o + 1,
              u = e[c];
            if (void 0 !== a && 0 > P(a, n))
              void 0 !== u && 0 > P(u, a)
                ? ((e[r] = u), (e[c] = n), (r = c))
                : ((e[r] = a), (e[o] = n), (r = o));
            else {
              if (!(void 0 !== u && 0 > P(u, n))) break e;
              (e[r] = u), (e[c] = n), (r = c);
            }
          }
        }
        return t;
      }
      return null;
    }
    function P(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var R = [],
      O = [],
      M = 1,
      I = null,
      L = 3,
      N = !1,
      A = !1,
      D = !1;
    function j(e) {
      for (var t = k(O); null !== t; ) {
        if (null === t.callback) _(O);
        else {
          if (!(t.startTime <= e)) break;
          _(O), (t.sortIndex = t.expirationTime), C(R, t);
        }
        t = k(O);
      }
    }
    function F(e) {
      if (((D = !1), j(e), !A))
        if (null !== k(R)) (A = !0), r(U);
        else {
          var t = k(O);
          null !== t && i(F, t.startTime - e);
        }
    }
    function U(e, n) {
      (A = !1), D && ((D = !1), o()), (N = !0);
      var r = L;
      try {
        for (
          j(n), I = k(R);
          null !== I && (!(I.expirationTime > n) || (e && !a()));

        ) {
          var c = I.callback;
          if (null !== c) {
            (I.callback = null), (L = I.priorityLevel);
            var u = c(I.expirationTime <= n);
            (n = t.unstable_now()),
              "function" == typeof u ? (I.callback = u) : I === k(R) && _(R),
              j(n);
          } else _(R);
          I = k(R);
        }
        if (null !== I) var s = !0;
        else {
          var l = k(O);
          null !== l && i(F, l.startTime - n), (s = !1);
        }
        return s;
      } finally {
        (I = null), (L = r), (N = !1);
      }
    }
    function z(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var W = c;
    (t.unstable_ImmediatePriority = 1),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_NormalPriority = 3),
      (t.unstable_IdlePriority = 5),
      (t.unstable_LowPriority = 4),
      (t.unstable_runWithPriority = function(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = L;
        L = e;
        try {
          return t();
        } finally {
          L = n;
        }
      }),
      (t.unstable_next = function(e) {
        switch (L) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = L;
        }
        var n = L;
        L = t;
        try {
          return e();
        } finally {
          L = n;
        }
      }),
      (t.unstable_scheduleCallback = function(e, n, a) {
        var c = t.unstable_now();
        if ("object" == typeof a && null !== a) {
          var u = a.delay;
          (u = "number" == typeof u && 0 < u ? c + u : c),
            (a = "number" == typeof a.timeout ? a.timeout : z(e));
        } else (a = z(e)), (u = c);
        return (
          (e = {
            id: M++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: (a = u + a),
            sortIndex: -1
          }),
          u > c
            ? ((e.sortIndex = u),
              C(O, e),
              null === k(R) && e === k(O) && (D ? o() : (D = !0), i(F, u - c)))
            : ((e.sortIndex = a), C(R, e), A || N || ((A = !0), r(U))),
          e
        );
      }),
      (t.unstable_cancelCallback = function(e) {
        e.callback = null;
      }),
      (t.unstable_wrapCallback = function(e) {
        var t = L;
        return function() {
          var n = L;
          L = t;
          try {
            return e.apply(this, arguments);
          } finally {
            L = n;
          }
        };
      }),
      (t.unstable_getCurrentPriorityLevel = function() {
        return L;
      }),
      (t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        j(e);
        var n = k(R);
        return (
          (n !== I &&
            null !== I &&
            null !== n &&
            null !== n.callback &&
            n.startTime <= e &&
            n.expirationTime < I.expirationTime) ||
          a()
        );
      }),
      (t.unstable_requestPaint = W),
      (t.unstable_continueExecution = function() {
        A || N || ((A = !0), r(U));
      }),
      (t.unstable_pauseExecution = function() {}),
      (t.unstable_getFirstCallbackNode = function() {
        return k(R);
      }),
      (t.unstable_Profiling = null);
  },
  function(e, t, n) {
    "use strict";
    var r = n(149);
    function i() {}
    function o() {}
    (o.resetWarningCache = i),
      (e.exports = function() {
        function e(e, t, n, i, o, a) {
          if (a !== r) {
            var c = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((c.name = "Invariant Violation"), c);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: i
        };
        return (n.PropTypes = n), n;
      });
  },
  function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function(e, t) {
    e.exports =
      Array.isArray ||
      function(e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
  },
  function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ Object.defineProperty(t, "__esModule", { value: !0 });
    var r = "function" == typeof Symbol && Symbol.for,
      i = r ? Symbol.for("react.element") : 60103,
      o = r ? Symbol.for("react.portal") : 60106,
      a = r ? Symbol.for("react.fragment") : 60107,
      c = r ? Symbol.for("react.strict_mode") : 60108,
      u = r ? Symbol.for("react.profiler") : 60114,
      s = r ? Symbol.for("react.provider") : 60109,
      l = r ? Symbol.for("react.context") : 60110,
      f = r ? Symbol.for("react.async_mode") : 60111,
      d = r ? Symbol.for("react.concurrent_mode") : 60111,
      p = r ? Symbol.for("react.forward_ref") : 60112,
      h = r ? Symbol.for("react.suspense") : 60113,
      v = r ? Symbol.for("react.suspense_list") : 60120,
      m = r ? Symbol.for("react.memo") : 60115,
      y = r ? Symbol.for("react.lazy") : 60116,
      g = r ? Symbol.for("react.fundamental") : 60117,
      b = r ? Symbol.for("react.responder") : 60118,
      w = r ? Symbol.for("react.scope") : 60119;
    function S(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case i:
            switch ((e = e.type)) {
              case f:
              case d:
              case a:
              case u:
              case c:
              case h:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case l:
                  case p:
                  case y:
                  case m:
                  case s:
                    return e;
                  default:
                    return t;
                }
            }
          case o:
            return t;
        }
      }
    }
    function E(e) {
      return S(e) === d;
    }
    (t.typeOf = S),
      (t.AsyncMode = f),
      (t.ConcurrentMode = d),
      (t.ContextConsumer = l),
      (t.ContextProvider = s),
      (t.Element = i),
      (t.ForwardRef = p),
      (t.Fragment = a),
      (t.Lazy = y),
      (t.Memo = m),
      (t.Portal = o),
      (t.Profiler = u),
      (t.StrictMode = c),
      (t.Suspense = h),
      (t.isValidElementType = function(e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === a ||
          e === d ||
          e === u ||
          e === c ||
          e === h ||
          e === v ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === y ||
              e.$$typeof === m ||
              e.$$typeof === s ||
              e.$$typeof === l ||
              e.$$typeof === p ||
              e.$$typeof === g ||
              e.$$typeof === b ||
              e.$$typeof === w))
        );
      }),
      (t.isAsyncMode = function(e) {
        return E(e) || S(e) === f;
      }),
      (t.isConcurrentMode = E),
      (t.isContextConsumer = function(e) {
        return S(e) === l;
      }),
      (t.isContextProvider = function(e) {
        return S(e) === s;
      }),
      (t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
      }),
      (t.isForwardRef = function(e) {
        return S(e) === p;
      }),
      (t.isFragment = function(e) {
        return S(e) === a;
      }),
      (t.isLazy = function(e) {
        return S(e) === y;
      }),
      (t.isMemo = function(e) {
        return S(e) === m;
      }),
      (t.isPortal = function(e) {
        return S(e) === o;
      }),
      (t.isProfiler = function(e) {
        return S(e) === u;
      }),
      (t.isStrictMode = function(e) {
        return S(e) === c;
      }),
      (t.isSuspense = function(e) {
        return S(e) === h;
      });
  },
  function(e, t, n) {
    "use strict";
    n(153);
    var r,
      i = (r = n(325)) && r.__esModule ? r : { default: r };
    i.default._babelPolyfill &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn(
        "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
      ),
      (i.default._babelPolyfill = !0);
  },
  function(e, t, n) {
    "use strict";
    n(154),
      n(297),
      n(299),
      n(302),
      n(304),
      n(306),
      n(308),
      n(310),
      n(312),
      n(314),
      n(316),
      n(318),
      n(320),
      n(324);
  },
  function(e, t, n) {
    n(155),
      n(158),
      n(159),
      n(160),
      n(161),
      n(162),
      n(163),
      n(164),
      n(165),
      n(166),
      n(167),
      n(168),
      n(169),
      n(170),
      n(171),
      n(172),
      n(173),
      n(174),
      n(175),
      n(176),
      n(177),
      n(178),
      n(179),
      n(180),
      n(181),
      n(182),
      n(183),
      n(184),
      n(185),
      n(186),
      n(187),
      n(188),
      n(189),
      n(190),
      n(191),
      n(192),
      n(193),
      n(194),
      n(195),
      n(196),
      n(197),
      n(198),
      n(199),
      n(201),
      n(202),
      n(203),
      n(204),
      n(205),
      n(206),
      n(207),
      n(208),
      n(209),
      n(210),
      n(211),
      n(212),
      n(213),
      n(214),
      n(215),
      n(216),
      n(217),
      n(218),
      n(219),
      n(220),
      n(221),
      n(222),
      n(223),
      n(224),
      n(225),
      n(226),
      n(227),
      n(228),
      n(229),
      n(230),
      n(231),
      n(232),
      n(233),
      n(234),
      n(236),
      n(237),
      n(239),
      n(240),
      n(241),
      n(242),
      n(243),
      n(244),
      n(245),
      n(247),
      n(248),
      n(249),
      n(250),
      n(251),
      n(252),
      n(253),
      n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(84),
      n(260),
      n(120),
      n(261),
      n(121),
      n(262),
      n(263),
      n(264),
      n(265),
      n(122),
      n(268),
      n(269),
      n(270),
      n(271),
      n(272),
      n(273),
      n(274),
      n(275),
      n(276),
      n(277),
      n(278),
      n(279),
      n(280),
      n(281),
      n(282),
      n(283),
      n(284),
      n(285),
      n(286),
      n(287),
      n(288),
      n(289),
      n(290),
      n(291),
      n(292),
      n(293),
      n(294),
      n(295),
      n(296),
      (e.exports = n(8));
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(9),
      a = n(0),
      c = n(12),
      u = n(28).KEY,
      s = n(3),
      l = n(51),
      f = n(39),
      d = n(30),
      p = n(6),
      h = n(65),
      v = n(101),
      m = n(157),
      y = n(54),
      g = n(4),
      b = n(5),
      w = n(11),
      S = n(16),
      E = n(27),
      T = n(29),
      x = n(34),
      C = n(104),
      k = n(21),
      _ = n(53),
      P = n(10),
      R = n(32),
      O = k.f,
      M = P.f,
      I = C.f,
      L = r.Symbol,
      N = r.JSON,
      A = N && N.stringify,
      D = p("_hidden"),
      j = p("toPrimitive"),
      F = {}.propertyIsEnumerable,
      U = l("symbol-registry"),
      z = l("symbols"),
      W = l("op-symbols"),
      V = Object.prototype,
      B = "function" == typeof L && !!_.f,
      G = r.QObject,
      $ = !G || !G.prototype || !G.prototype.findChild,
      H =
        o &&
        s(function() {
          return (
            7 !=
            x(
              M({}, "a", {
                get: function() {
                  return M(this, "a", { value: 7 }).a;
                }
              })
            ).a
          );
        })
          ? function(e, t, n) {
              var r = O(V, t);
              r && delete V[t], M(e, t, n), r && e !== V && M(V, t, r);
            }
          : M,
      K = function(e) {
        var t = (z[e] = x(L.prototype));
        return (t._k = e), t;
      },
      Q =
        B && "symbol" == typeof L.iterator
          ? function(e) {
              return "symbol" == typeof e;
            }
          : function(e) {
              return e instanceof L;
            },
      q = function(e, t, n) {
        return (
          e === V && q(W, t, n),
          g(e),
          (t = E(t, !0)),
          g(n),
          i(z, t)
            ? (n.enumerable
                ? (i(e, D) && e[D][t] && (e[D][t] = !1),
                  (n = x(n, { enumerable: T(0, !1) })))
                : (i(e, D) || M(e, D, T(1, {})), (e[D][t] = !0)),
              H(e, t, n))
            : M(e, t, n)
        );
      },
      Y = function(e, t) {
        g(e);
        for (var n, r = m((t = S(t))), i = 0, o = r.length; o > i; )
          q(e, (n = r[i++]), t[n]);
        return e;
      },
      J = function(e) {
        var t = F.call(this, (e = E(e, !0)));
        return (
          !(this === V && i(z, e) && !i(W, e)) &&
          (!(t || !i(this, e) || !i(z, e) || (i(this, D) && this[D][e])) || t)
        );
      },
      X = function(e, t) {
        if (((e = S(e)), (t = E(t, !0)), e !== V || !i(z, t) || i(W, t))) {
          var n = O(e, t);
          return (
            !n || !i(z, t) || (i(e, D) && e[D][t]) || (n.enumerable = !0), n
          );
        }
      },
      Z = function(e) {
        for (var t, n = I(S(e)), r = [], o = 0; n.length > o; )
          i(z, (t = n[o++])) || t == D || t == u || r.push(t);
        return r;
      },
      ee = function(e) {
        for (
          var t, n = e === V, r = I(n ? W : S(e)), o = [], a = 0;
          r.length > a;

        )
          !i(z, (t = r[a++])) || (n && !i(V, t)) || o.push(z[t]);
        return o;
      };
    B ||
      (c(
        (L = function() {
          if (this instanceof L)
            throw TypeError("Symbol is not a constructor!");
          var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) {
              this === V && t.call(W, n),
                i(this, D) && i(this[D], e) && (this[D][e] = !1),
                H(this, e, T(1, n));
            };
          return o && $ && H(V, e, { configurable: !0, set: t }), K(e);
        }).prototype,
        "toString",
        function() {
          return this._k;
        }
      ),
      (k.f = X),
      (P.f = q),
      (n(35).f = C.f = Z),
      (n(47).f = J),
      (_.f = ee),
      o && !n(31) && c(V, "propertyIsEnumerable", J, !0),
      (h.f = function(e) {
        return K(p(e));
      })),
      a(a.G + a.W + a.F * !B, { Symbol: L });
    for (
      var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
          ","
        ),
        ne = 0;
      te.length > ne;

    )
      p(te[ne++]);
    for (var re = R(p.store), ie = 0; re.length > ie; ) v(re[ie++]);
    a(a.S + a.F * !B, "Symbol", {
      for: function(e) {
        return i(U, (e += "")) ? U[e] : (U[e] = L(e));
      },
      keyFor: function(e) {
        if (!Q(e)) throw TypeError(e + " is not a symbol!");
        for (var t in U) if (U[t] === e) return t;
      },
      useSetter: function() {
        $ = !0;
      },
      useSimple: function() {
        $ = !1;
      }
    }),
      a(a.S + a.F * !B, "Object", {
        create: function(e, t) {
          return void 0 === t ? x(e) : Y(x(e), t);
        },
        defineProperty: q,
        defineProperties: Y,
        getOwnPropertyDescriptor: X,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: ee
      });
    var oe = s(function() {
      _.f(1);
    });
    a(a.S + a.F * oe, "Object", {
      getOwnPropertySymbols: function(e) {
        return _.f(w(e));
      }
    }),
      N &&
        a(
          a.S +
            a.F *
              (!B ||
                s(function() {
                  var e = L();
                  return (
                    "[null]" != A([e]) ||
                    "{}" != A({ a: e }) ||
                    "{}" != A(Object(e))
                  );
                })),
          "JSON",
          {
            stringify: function(e) {
              for (var t, n, r = [e], i = 1; arguments.length > i; )
                r.push(arguments[i++]);
              if (((n = t = r[1]), (b(t) || void 0 !== e) && !Q(e)))
                return (
                  y(t) ||
                    (t = function(e, t) {
                      if (
                        ("function" == typeof n && (t = n.call(this, e, t)),
                        !Q(t))
                      )
                        return t;
                    }),
                  (r[1] = t),
                  A.apply(N, r)
                );
            }
          }
        ),
      L.prototype[j] || n(15)(L.prototype, j, L.prototype.valueOf),
      f(L, "Symbol"),
      f(Math, "Math", !0),
      f(r.JSON, "JSON", !0);
  },
  function(e, t, n) {
    e.exports = n(51)("native-function-to-string", Function.toString);
  },
  function(e, t, n) {
    var r = n(32),
      i = n(53),
      o = n(47);
    e.exports = function(e) {
      var t = r(e),
        n = i.f;
      if (n)
        for (var a, c = n(e), u = o.f, s = 0; c.length > s; )
          u.call(e, (a = c[s++])) && t.push(a);
      return t;
    };
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", { create: n(34) });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S + r.F * !n(9), "Object", { defineProperty: n(10).f });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S + r.F * !n(9), "Object", { defineProperties: n(103) });
  },
  function(e, t, n) {
    var r = n(16),
      i = n(21).f;
    n(22)("getOwnPropertyDescriptor", function() {
      return function(e, t) {
        return i(r(e), t);
      };
    });
  },
  function(e, t, n) {
    var r = n(11),
      i = n(36);
    n(22)("getPrototypeOf", function() {
      return function(e) {
        return i(r(e));
      };
    });
  },
  function(e, t, n) {
    var r = n(11),
      i = n(32);
    n(22)("keys", function() {
      return function(e) {
        return i(r(e));
      };
    });
  },
  function(e, t, n) {
    n(22)("getOwnPropertyNames", function() {
      return n(104).f;
    });
  },
  function(e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("freeze", function(e) {
      return function(t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function(e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("seal", function(e) {
      return function(t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function(e, t, n) {
    var r = n(5),
      i = n(28).onFreeze;
    n(22)("preventExtensions", function(e) {
      return function(t) {
        return e && r(t) ? e(i(t)) : t;
      };
    });
  },
  function(e, t, n) {
    var r = n(5);
    n(22)("isFrozen", function(e) {
      return function(t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function(e, t, n) {
    var r = n(5);
    n(22)("isSealed", function(e) {
      return function(t) {
        return !r(t) || (!!e && e(t));
      };
    });
  },
  function(e, t, n) {
    var r = n(5);
    n(22)("isExtensible", function(e) {
      return function(t) {
        return !!r(t) && (!e || e(t));
      };
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S + r.F, "Object", { assign: n(105) });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", { is: n(106) });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Object", { setPrototypeOf: n(69).set });
  },
  function(e, t, n) {
    "use strict";
    var r = n(48),
      i = {};
    (i[n(6)("toStringTag")] = "z"),
      i + "" != "[object z]" &&
        n(12)(
          Object.prototype,
          "toString",
          function() {
            return "[object " + r(this) + "]";
          },
          !0
        );
  },
  function(e, t, n) {
    var r = n(0);
    r(r.P, "Function", { bind: n(107) });
  },
  function(e, t, n) {
    var r = n(10).f,
      i = Function.prototype,
      o = /^\s*function ([^ (]*)/;
    "name" in i ||
      (n(9) &&
        r(i, "name", {
          configurable: !0,
          get: function() {
            try {
              return ("" + this).match(o)[1];
            } catch (e) {
              return "";
            }
          }
        }));
  },
  function(e, t, n) {
    "use strict";
    var r = n(5),
      i = n(36),
      o = n(6)("hasInstance"),
      a = Function.prototype;
    o in a ||
      n(10).f(a, o, {
        value: function(e) {
          if ("function" != typeof this || !r(e)) return !1;
          if (!r(this.prototype)) return e instanceof this;
          for (; (e = i(e)); ) if (this.prototype === e) return !0;
          return !1;
        }
      });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(109);
    r(r.G + r.F * (parseInt != i), { parseInt: i });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(110);
    r(r.G + r.F * (parseFloat != i), { parseFloat: i });
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = n(14),
      o = n(24),
      a = n(71),
      c = n(27),
      u = n(3),
      s = n(35).f,
      l = n(21).f,
      f = n(10).f,
      d = n(40).trim,
      p = r.Number,
      h = p,
      v = p.prototype,
      m = "Number" == o(n(34)(v)),
      y = "trim" in String.prototype,
      g = function(e) {
        var t = c(e, !1);
        if ("string" == typeof t && t.length > 2) {
          var n,
            r,
            i,
            o = (t = y ? t.trim() : d(t, 3)).charCodeAt(0);
          if (43 === o || 45 === o) {
            if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
          } else if (48 === o) {
            switch (t.charCodeAt(1)) {
              case 66:
              case 98:
                (r = 2), (i = 49);
                break;
              case 79:
              case 111:
                (r = 8), (i = 55);
                break;
              default:
                return +t;
            }
            for (var a, u = t.slice(2), s = 0, l = u.length; s < l; s++)
              if ((a = u.charCodeAt(s)) < 48 || a > i) return NaN;
            return parseInt(u, r);
          }
        }
        return +t;
      };
    if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
      p = function(e) {
        var t = arguments.length < 1 ? 0 : e,
          n = this;
        return n instanceof p &&
          (m
            ? u(function() {
                v.valueOf.call(n);
              })
            : "Number" != o(n))
          ? a(new h(g(t)), n, p)
          : g(t);
      };
      for (
        var b,
          w = n(9)
            ? s(h)
            : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
                ","
              ),
          S = 0;
        w.length > S;
        S++
      )
        i(h, (b = w[S])) && !i(p, b) && f(p, b, l(h, b));
      (p.prototype = v), (v.constructor = p), n(12)(r, "Number", p);
    }
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(20),
      o = n(111),
      a = n(72),
      c = (1).toFixed,
      u = Math.floor,
      s = [0, 0, 0, 0, 0, 0],
      l = "Number.toFixed: incorrect invocation!",
      f = function(e, t) {
        for (var n = -1, r = t; ++n < 6; )
          (r += e * s[n]), (s[n] = r % 1e7), (r = u(r / 1e7));
      },
      d = function(e) {
        for (var t = 6, n = 0; --t >= 0; )
          (n += s[t]), (s[t] = u(n / e)), (n = (n % e) * 1e7);
      },
      p = function() {
        for (var e = 6, t = ""; --e >= 0; )
          if ("" !== t || 0 === e || 0 !== s[e]) {
            var n = String(s[e]);
            t = "" === t ? n : t + a.call("0", 7 - n.length) + n;
          }
        return t;
      },
      h = function(e, t, n) {
        return 0 === t
          ? n
          : t % 2 == 1
          ? h(e, t - 1, n * e)
          : h(e * e, t / 2, n);
      };
    r(
      r.P +
        r.F *
          ((!!c &&
            ("0.000" !== (8e-5).toFixed(3) ||
              "1" !== (0.9).toFixed(0) ||
              "1.25" !== (1.255).toFixed(2) ||
              "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
            !n(3)(function() {
              c.call({});
            })),
      "Number",
      {
        toFixed: function(e) {
          var t,
            n,
            r,
            c,
            u = o(this, l),
            s = i(e),
            v = "",
            m = "0";
          if (s < 0 || s > 20) throw RangeError(l);
          if (u != u) return "NaN";
          if (u <= -1e21 || u >= 1e21) return String(u);
          if ((u < 0 && ((v = "-"), (u = -u)), u > 1e-21))
            if (
              ((n =
                (t =
                  (function(e) {
                    for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                    for (; n >= 2; ) (t += 1), (n /= 2);
                    return t;
                  })(u * h(2, 69, 1)) - 69) < 0
                  ? u * h(2, -t, 1)
                  : u / h(2, t, 1)),
              (n *= 4503599627370496),
              (t = 52 - t) > 0)
            ) {
              for (f(0, n), r = s; r >= 7; ) f(1e7, 0), (r -= 7);
              for (f(h(10, r, 1), 0), r = t - 1; r >= 23; )
                d(1 << 23), (r -= 23);
              d(1 << r), f(1, 1), d(2), (m = p());
            } else f(0, n), f(1 << -t, 0), (m = p() + a.call("0", s));
          return (m =
            s > 0
              ? v +
                ((c = m.length) <= s
                  ? "0." + a.call("0", s - c) + m
                  : m.slice(0, c - s) + "." + m.slice(c - s))
              : v + m);
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(3),
      o = n(111),
      a = (1).toPrecision;
    r(
      r.P +
        r.F *
          (i(function() {
            return "1" !== a.call(1, void 0);
          }) ||
            !i(function() {
              a.call({});
            })),
      "Number",
      {
        toPrecision: function(e) {
          var t = o(this, "Number#toPrecision: incorrect invocation!");
          return void 0 === e ? a.call(t) : a.call(t, e);
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", { EPSILON: Math.pow(2, -52) });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(2).isFinite;
    r(r.S, "Number", {
      isFinite: function(e) {
        return "number" == typeof e && i(e);
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", { isInteger: n(112) });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", {
      isNaN: function(e) {
        return e != e;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(112),
      o = Math.abs;
    r(r.S, "Number", {
      isSafeInteger: function(e) {
        return i(e) && o(e) <= 9007199254740991;
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(110);
    r(r.S + r.F * (Number.parseFloat != i), "Number", { parseFloat: i });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(109);
    r(r.S + r.F * (Number.parseInt != i), "Number", { parseInt: i });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(113),
      o = Math.sqrt,
      a = Math.acosh;
    r(
      r.S +
        r.F *
          !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0),
      "Math",
      {
        acosh: function(e) {
          return (e = +e) < 1
            ? NaN
            : e > 94906265.62425156
            ? Math.log(e) + Math.LN2
            : i(e - 1 + o(e - 1) * o(e + 1));
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0),
      i = Math.asinh;
    r(r.S + r.F * !(i && 1 / i(0) > 0), "Math", {
      asinh: function e(t) {
        return isFinite((t = +t)) && 0 != t
          ? t < 0
            ? -e(-t)
            : Math.log(t + Math.sqrt(t * t + 1))
          : t;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = Math.atanh;
    r(r.S + r.F * !(i && 1 / i(-0) < 0), "Math", {
      atanh: function(e) {
        return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(73);
    r(r.S, "Math", {
      cbrt: function(e) {
        return i((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
      clz32: function(e) {
        return (e >>>= 0)
          ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E)
          : 32;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = Math.exp;
    r(r.S, "Math", {
      cosh: function(e) {
        return (i((e = +e)) + i(-e)) / 2;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(74);
    r(r.S + r.F * (i != Math.expm1), "Math", { expm1: i });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", { fround: n(200) });
  },
  function(e, t, n) {
    var r = n(73),
      i = Math.pow,
      o = i(2, -52),
      a = i(2, -23),
      c = i(2, 127) * (2 - a),
      u = i(2, -126);
    e.exports =
      Math.fround ||
      function(e) {
        var t,
          n,
          i = Math.abs(e),
          s = r(e);
        return i < u
          ? s * (i / u / a + 1 / o - 1 / o) * u * a
          : (n = (t = (1 + a / o) * i) - (t - i)) > c || n != n
          ? s * (1 / 0)
          : s * n;
      };
  },
  function(e, t, n) {
    var r = n(0),
      i = Math.abs;
    r(r.S, "Math", {
      hypot: function(e, t) {
        for (var n, r, o = 0, a = 0, c = arguments.length, u = 0; a < c; )
          u < (n = i(arguments[a++]))
            ? ((o = o * (r = u / n) * r + 1), (u = n))
            : (o += n > 0 ? (r = n / u) * r : n);
        return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(o);
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = Math.imul;
    r(
      r.S +
        r.F *
          n(3)(function() {
            return -5 != i(4294967295, 5) || 2 != i.length;
          }),
      "Math",
      {
        imul: function(e, t) {
          var n = +e,
            r = +t,
            i = 65535 & n,
            o = 65535 & r;
          return (
            0 |
            (i * o +
              ((((65535 & (n >>> 16)) * o + i * (65535 & (r >>> 16))) << 16) >>>
                0))
          );
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
      log10: function(e) {
        return Math.log(e) * Math.LOG10E;
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", { log1p: n(113) });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
      log2: function(e) {
        return Math.log(e) / Math.LN2;
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", { sign: n(73) });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(74),
      o = Math.exp;
    r(
      r.S +
        r.F *
          n(3)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
          }),
      "Math",
      {
        sinh: function(e) {
          return Math.abs((e = +e)) < 1
            ? (i(e) - i(-e)) / 2
            : (o(e - 1) - o(-e - 1)) * (Math.E / 2);
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0),
      i = n(74),
      o = Math.exp;
    r(r.S, "Math", {
      tanh: function(e) {
        var t = i((e = +e)),
          n = i(-e);
        return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (o(e) + o(-e));
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Math", {
      trunc: function(e) {
        return (e > 0 ? Math.floor : Math.ceil)(e);
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(33),
      o = String.fromCharCode,
      a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
      fromCodePoint: function(e) {
        for (var t, n = [], r = arguments.length, a = 0; r > a; ) {
          if (((t = +arguments[a++]), i(t, 1114111) !== t))
            throw RangeError(t + " is not a valid code point");
          n.push(
            t < 65536
              ? o(t)
              : o(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
          );
        }
        return n.join("");
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(16),
      o = n(7);
    r(r.S, "String", {
      raw: function(e) {
        for (
          var t = i(e.raw),
            n = o(t.length),
            r = arguments.length,
            a = [],
            c = 0;
          n > c;

        )
          a.push(String(t[c++])), c < r && a.push(String(arguments[c]));
        return a.join("");
      }
    });
  },
  function(e, t, n) {
    "use strict";
    n(40)("trim", function(e) {
      return function() {
        return e(this, 3);
      };
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(75)(!0);
    n(76)(
      String,
      "String",
      function(e) {
        (this._t = String(e)), (this._i = 0);
      },
      function() {
        var e,
          t = this._t,
          n = this._i;
        return n >= t.length
          ? { value: void 0, done: !0 }
          : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(75)(!1);
    r(r.P, "String", {
      codePointAt: function(e) {
        return i(this, e);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(7),
      o = n(77),
      a = "".endsWith;
    r(r.P + r.F * n(79)("endsWith"), "String", {
      endsWith: function(e) {
        var t = o(this, e, "endsWith"),
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = i(t.length),
          c = void 0 === n ? r : Math.min(i(n), r),
          u = String(e);
        return a ? a.call(t, u, c) : t.slice(c - u.length, c) === u;
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(77);
    r(r.P + r.F * n(79)("includes"), "String", {
      includes: function(e) {
        return !!~i(this, e, "includes").indexOf(
          e,
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.P, "String", { repeat: n(72) });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(7),
      o = n(77),
      a = "".startsWith;
    r(r.P + r.F * n(79)("startsWith"), "String", {
      startsWith: function(e) {
        var t = o(this, e, "startsWith"),
          n = i(
            Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
          ),
          r = String(e);
        return a ? a.call(t, r, n) : t.slice(n, n + r.length) === r;
      }
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("anchor", function(e) {
      return function(t) {
        return e(this, "a", "name", t);
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("big", function(e) {
      return function() {
        return e(this, "big", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("blink", function(e) {
      return function() {
        return e(this, "blink", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("bold", function(e) {
      return function() {
        return e(this, "b", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("fixed", function(e) {
      return function() {
        return e(this, "tt", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("fontcolor", function(e) {
      return function(t) {
        return e(this, "font", "color", t);
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("fontsize", function(e) {
      return function(t) {
        return e(this, "font", "size", t);
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("italics", function(e) {
      return function() {
        return e(this, "i", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("link", function(e) {
      return function(t) {
        return e(this, "a", "href", t);
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("small", function(e) {
      return function() {
        return e(this, "small", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("strike", function(e) {
      return function() {
        return e(this, "strike", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("sub", function(e) {
      return function() {
        return e(this, "sub", "", "");
      };
    });
  },
  function(e, t, n) {
    "use strict";
    n(13)("sup", function(e) {
      return function() {
        return e(this, "sup", "", "");
      };
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Date", {
      now: function() {
        return new Date().getTime();
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(11),
      o = n(27);
    r(
      r.P +
        r.F *
          n(3)(function() {
            return (
              null !== new Date(NaN).toJSON() ||
              1 !==
                Date.prototype.toJSON.call({
                  toISOString: function() {
                    return 1;
                  }
                })
            );
          }),
      "Date",
      {
        toJSON: function(e) {
          var t = i(this),
            n = o(t);
          return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0),
      i = n(235);
    r(r.P + r.F * (Date.prototype.toISOString !== i), "Date", {
      toISOString: i
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(3),
      i = Date.prototype.getTime,
      o = Date.prototype.toISOString,
      a = function(e) {
        return e > 9 ? e : "0" + e;
      };
    e.exports =
      r(function() {
        return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1));
      }) ||
      !r(function() {
        o.call(new Date(NaN));
      })
        ? function() {
            if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
            var e = this,
              t = e.getUTCFullYear(),
              n = e.getUTCMilliseconds(),
              r = t < 0 ? "-" : t > 9999 ? "+" : "";
            return (
              r +
              ("00000" + Math.abs(t)).slice(r ? -6 : -4) +
              "-" +
              a(e.getUTCMonth() + 1) +
              "-" +
              a(e.getUTCDate()) +
              "T" +
              a(e.getUTCHours()) +
              ":" +
              a(e.getUTCMinutes()) +
              ":" +
              a(e.getUTCSeconds()) +
              "." +
              (n > 99 ? n : "0" + a(n)) +
              "Z"
            );
          }
        : o;
  },
  function(e, t, n) {
    var r = Date.prototype,
      i = r.toString,
      o = r.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      n(12)(r, "toString", function() {
        var e = o.call(this);
        return e == e ? i.call(this) : "Invalid Date";
      });
  },
  function(e, t, n) {
    var r = n(6)("toPrimitive"),
      i = Date.prototype;
    r in i || n(15)(i, r, n(238));
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      i = n(27);
    e.exports = function(e) {
      if ("string" !== e && "number" !== e && "default" !== e)
        throw TypeError("Incorrect hint");
      return i(r(this), "number" != e);
    };
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Array", { isArray: n(54) });
  },
  function(e, t, n) {
    "use strict";
    var r = n(18),
      i = n(0),
      o = n(11),
      a = n(115),
      c = n(80),
      u = n(7),
      s = n(81),
      l = n(82);
    i(
      i.S +
        i.F *
          !n(55)(function(e) {
            Array.from(e);
          }),
      "Array",
      {
        from: function(e) {
          var t,
            n,
            i,
            f,
            d = o(e),
            p = "function" == typeof this ? this : Array,
            h = arguments.length,
            v = h > 1 ? arguments[1] : void 0,
            m = void 0 !== v,
            y = 0,
            g = l(d);
          if (
            (m && (v = r(v, h > 2 ? arguments[2] : void 0, 2)),
            null == g || (p == Array && c(g)))
          )
            for (n = new p((t = u(d.length))); t > y; y++)
              s(n, y, m ? v(d[y], y) : d[y]);
          else
            for (f = g.call(d), n = new p(); !(i = f.next()).done; y++)
              s(n, y, m ? a(f, v, [i.value, y], !0) : i.value);
          return (n.length = y), n;
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(81);
    r(
      r.S +
        r.F *
          n(3)(function() {
            function e() {}
            return !(Array.of.call(e) instanceof e);
          }),
      "Array",
      {
        of: function() {
          for (
            var e = 0,
              t = arguments.length,
              n = new ("function" == typeof this ? this : Array)(t);
            t > e;

          )
            i(n, e, arguments[e++]);
          return (n.length = t), n;
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(16),
      o = [].join;
    r(r.P + r.F * (n(46) != Object || !n(17)(o)), "Array", {
      join: function(e) {
        return o.call(i(this), void 0 === e ? "," : e);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(68),
      o = n(24),
      a = n(33),
      c = n(7),
      u = [].slice;
    r(
      r.P +
        r.F *
          n(3)(function() {
            i && u.call(i);
          }),
      "Array",
      {
        slice: function(e, t) {
          var n = c(this.length),
            r = o(this);
          if (((t = void 0 === t ? n : t), "Array" == r))
            return u.call(this, e, t);
          for (
            var i = a(e, n), s = a(t, n), l = c(s - i), f = new Array(l), d = 0;
            d < l;
            d++
          )
            f[d] = "String" == r ? this.charAt(i + d) : this[i + d];
          return f;
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(19),
      o = n(11),
      a = n(3),
      c = [].sort,
      u = [1, 2, 3];
    r(
      r.P +
        r.F *
          (a(function() {
            u.sort(void 0);
          }) ||
            !a(function() {
              u.sort(null);
            }) ||
            !n(17)(c)),
      "Array",
      {
        sort: function(e) {
          return void 0 === e ? c.call(o(this)) : c.call(o(this), i(e));
        }
      }
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(0),
      o = n(17)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
      forEach: function(e) {
        return i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    var r = n(5),
      i = n(54),
      o = n(6)("species");
    e.exports = function(e) {
      var t;
      return (
        i(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !i(t.prototype)) ||
            (t = void 0),
          r(t) && null === (t = t[o]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(1);
    r(r.P + r.F * !n(17)([].map, !0), "Array", {
      map: function(e) {
        return i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(2);
    r(r.P + r.F * !n(17)([].filter, !0), "Array", {
      filter: function(e) {
        return i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(3);
    r(r.P + r.F * !n(17)([].some, !0), "Array", {
      some: function(e) {
        return i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(4);
    r(r.P + r.F * !n(17)([].every, !0), "Array", {
      every: function(e) {
        return i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(117);
    r(r.P + r.F * !n(17)([].reduce, !0), "Array", {
      reduce: function(e) {
        return i(this, e, arguments.length, arguments[1], !1);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(117);
    r(r.P + r.F * !n(17)([].reduceRight, !0), "Array", {
      reduceRight: function(e) {
        return i(this, e, arguments.length, arguments[1], !0);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(52)(!1),
      o = [].indexOf,
      a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(17)(o)), "Array", {
      indexOf: function(e) {
        return a ? o.apply(this, arguments) || 0 : i(this, e, arguments[1]);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(16),
      o = n(20),
      a = n(7),
      c = [].lastIndexOf,
      u = !!c && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (u || !n(17)(c)), "Array", {
      lastIndexOf: function(e) {
        if (u) return c.apply(this, arguments) || 0;
        var t = i(this),
          n = a(t.length),
          r = n - 1;
        for (
          arguments.length > 1 && (r = Math.min(r, o(arguments[1]))),
            r < 0 && (r = n + r);
          r >= 0;
          r--
        )
          if (r in t && t[r] === e) return r || 0;
        return -1;
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.P, "Array", { copyWithin: n(118) }), n(37)("copyWithin");
  },
  function(e, t, n) {
    var r = n(0);
    r(r.P, "Array", { fill: n(83) }), n(37)("fill");
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(5),
      o = !0;
    "find" in [] &&
      Array(1).find(function() {
        o = !1;
      }),
      r(r.P + r.F * o, "Array", {
        find: function(e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      n(37)("find");
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(23)(6),
      o = "findIndex",
      a = !0;
    o in [] &&
      Array(1)[o](function() {
        a = !1;
      }),
      r(r.P + r.F * a, "Array", {
        findIndex: function(e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
        }
      }),
      n(37)(o);
  },
  function(e, t, n) {
    n(42)("Array");
  },
  function(e, t, n) {
    var r = n(2),
      i = n(71),
      o = n(10).f,
      a = n(35).f,
      c = n(78),
      u = n(56),
      s = r.RegExp,
      l = s,
      f = s.prototype,
      d = /a/g,
      p = /a/g,
      h = new s(d) !== d;
    if (
      n(9) &&
      (!h ||
        n(3)(function() {
          return (
            (p[n(6)("match")] = !1),
            s(d) != d || s(p) == p || "/a/i" != s(d, "i")
          );
        }))
    ) {
      s = function(e, t) {
        var n = this instanceof s,
          r = c(e),
          o = void 0 === t;
        return !n && r && e.constructor === s && o
          ? e
          : i(
              h
                ? new l(r && !o ? e.source : e, t)
                : l(
                    (r = e instanceof s) ? e.source : e,
                    r && o ? u.call(e) : t
                  ),
              n ? this : f,
              s
            );
      };
      for (
        var v = function(e) {
            (e in s) ||
              o(s, e, {
                configurable: !0,
                get: function() {
                  return l[e];
                },
                set: function(t) {
                  l[e] = t;
                }
              });
          },
          m = a(l),
          y = 0;
        m.length > y;

      )
        v(m[y++]);
      (f.constructor = s), (s.prototype = f), n(12)(r, "RegExp", s);
    }
    n(42)("RegExp");
  },
  function(e, t, n) {
    "use strict";
    n(121);
    var r = n(4),
      i = n(56),
      o = n(9),
      a = /./.toString,
      c = function(e) {
        n(12)(RegExp.prototype, "toString", e, !0);
      };
    n(3)(function() {
      return "/a/b" != a.call({ source: "a", flags: "b" });
    })
      ? c(function() {
          var e = r(this);
          return "/".concat(
            e.source,
            "/",
            "flags" in e
              ? e.flags
              : !o && e instanceof RegExp
              ? i.call(e)
              : void 0
          );
        })
      : "toString" != a.name &&
        c(function() {
          return a.call(this);
        });
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      i = n(7),
      o = n(86),
      a = n(57);
    n(58)("match", 1, function(e, t, n, c) {
      return [
        function(n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function(e) {
          var t = c(n, e, this);
          if (t.done) return t.value;
          var u = r(e),
            s = String(this);
          if (!u.global) return a(u, s);
          var l = u.unicode;
          u.lastIndex = 0;
          for (var f, d = [], p = 0; null !== (f = a(u, s)); ) {
            var h = String(f[0]);
            (d[p] = h),
              "" === h && (u.lastIndex = o(s, i(u.lastIndex), l)),
              p++;
          }
          return 0 === p ? null : d;
        }
      ];
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      i = n(11),
      o = n(7),
      a = n(20),
      c = n(86),
      u = n(57),
      s = Math.max,
      l = Math.min,
      f = Math.floor,
      d = /\$([$&`']|\d\d?|<[^>]*>)/g,
      p = /\$([$&`']|\d\d?)/g;
    n(58)("replace", 2, function(e, t, n, h) {
      return [
        function(r, i) {
          var o = e(this),
            a = null == r ? void 0 : r[t];
          return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i);
        },
        function(e, t) {
          var i = h(n, e, this, t);
          if (i.done) return i.value;
          var f = r(e),
            d = String(this),
            p = "function" == typeof t;
          p || (t = String(t));
          var m = f.global;
          if (m) {
            var y = f.unicode;
            f.lastIndex = 0;
          }
          for (var g = []; ; ) {
            var b = u(f, d);
            if (null === b) break;
            if ((g.push(b), !m)) break;
            "" === String(b[0]) && (f.lastIndex = c(d, o(f.lastIndex), y));
          }
          for (var w, S = "", E = 0, T = 0; T < g.length; T++) {
            b = g[T];
            for (
              var x = String(b[0]),
                C = s(l(a(b.index), d.length), 0),
                k = [],
                _ = 1;
              _ < b.length;
              _++
            )
              k.push(void 0 === (w = b[_]) ? w : String(w));
            var P = b.groups;
            if (p) {
              var R = [x].concat(k, C, d);
              void 0 !== P && R.push(P);
              var O = String(t.apply(void 0, R));
            } else O = v(x, d, C, k, P, t);
            C >= E && ((S += d.slice(E, C) + O), (E = C + x.length));
          }
          return S + d.slice(E);
        }
      ];
      function v(e, t, r, o, a, c) {
        var u = r + e.length,
          s = o.length,
          l = p;
        return (
          void 0 !== a && ((a = i(a)), (l = d)),
          n.call(c, l, function(n, i) {
            var c;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return e;
              case "`":
                return t.slice(0, r);
              case "'":
                return t.slice(u);
              case "<":
                c = a[i.slice(1, -1)];
                break;
              default:
                var l = +i;
                if (0 === l) return n;
                if (l > s) {
                  var d = f(l / 10);
                  return 0 === d
                    ? n
                    : d <= s
                    ? void 0 === o[d - 1]
                      ? i.charAt(1)
                      : o[d - 1] + i.charAt(1)
                    : n;
                }
                c = o[l - 1];
            }
            return void 0 === c ? "" : c;
          })
        );
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(4),
      i = n(106),
      o = n(57);
    n(58)("search", 1, function(e, t, n, a) {
      return [
        function(n) {
          var r = e(this),
            i = null == n ? void 0 : n[t];
          return void 0 !== i ? i.call(n, r) : new RegExp(n)[t](String(r));
        },
        function(e) {
          var t = a(n, e, this);
          if (t.done) return t.value;
          var c = r(e),
            u = String(this),
            s = c.lastIndex;
          i(s, 0) || (c.lastIndex = 0);
          var l = o(c, u);
          return (
            i(c.lastIndex, s) || (c.lastIndex = s), null === l ? -1 : l.index
          );
        }
      ];
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(78),
      i = n(4),
      o = n(49),
      a = n(86),
      c = n(7),
      u = n(57),
      s = n(85),
      l = n(3),
      f = Math.min,
      d = [].push,
      p = !l(function() {
        RegExp(4294967295, "y");
      });
    n(58)("split", 2, function(e, t, n, l) {
      var h;
      return (
        (h =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function(e, t) {
                var i = String(this);
                if (void 0 === e && 0 === t) return [];
                if (!r(e)) return n.call(i, e, t);
                for (
                  var o,
                    a,
                    c,
                    u = [],
                    l =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    f = 0,
                    p = void 0 === t ? 4294967295 : t >>> 0,
                    h = new RegExp(e.source, l + "g");
                  (o = s.call(h, i)) &&
                  !(
                    (a = h.lastIndex) > f &&
                    (u.push(i.slice(f, o.index)),
                    o.length > 1 &&
                      o.index < i.length &&
                      d.apply(u, o.slice(1)),
                    (c = o[0].length),
                    (f = a),
                    u.length >= p)
                  );

                )
                  h.lastIndex === o.index && h.lastIndex++;
                return (
                  f === i.length
                    ? (!c && h.test("")) || u.push("")
                    : u.push(i.slice(f)),
                  u.length > p ? u.slice(0, p) : u
                );
              }
            : "0".split(void 0, 0).length
            ? function(e, t) {
                return void 0 === e && 0 === t ? [] : n.call(this, e, t);
              }
            : n),
        [
          function(n, r) {
            var i = e(this),
              o = null == n ? void 0 : n[t];
            return void 0 !== o ? o.call(n, i, r) : h.call(String(i), n, r);
          },
          function(e, t) {
            var r = l(h, e, this, t, h !== n);
            if (r.done) return r.value;
            var s = i(e),
              d = String(this),
              v = o(s, RegExp),
              m = s.unicode,
              y =
                (s.ignoreCase ? "i" : "") +
                (s.multiline ? "m" : "") +
                (s.unicode ? "u" : "") +
                (p ? "y" : "g"),
              g = new v(p ? s : "^(?:" + s.source + ")", y),
              b = void 0 === t ? 4294967295 : t >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === u(g, d) ? [d] : [];
            for (var w = 0, S = 0, E = []; S < d.length; ) {
              g.lastIndex = p ? S : 0;
              var T,
                x = u(g, p ? d : d.slice(S));
              if (
                null === x ||
                (T = f(c(g.lastIndex + (p ? 0 : S)), d.length)) === w
              )
                S = a(d, S, m);
              else {
                if ((E.push(d.slice(w, S)), E.length === b)) return E;
                for (var C = 1; C <= x.length - 1; C++)
                  if ((E.push(x[C]), E.length === b)) return E;
                S = w = T;
              }
            }
            return E.push(d.slice(w)), E;
          }
        ]
      );
    });
  },
  function(e, t, n) {
    var r = n(2),
      i = n(87).set,
      o = r.MutationObserver || r.WebKitMutationObserver,
      a = r.process,
      c = r.Promise,
      u = "process" == n(24)(a);
    e.exports = function() {
      var e,
        t,
        n,
        s = function() {
          var r, i;
          for (u && (r = a.domain) && r.exit(); e; ) {
            (i = e.fn), (e = e.next);
            try {
              i();
            } catch (r) {
              throw (e ? n() : (t = void 0), r);
            }
          }
          (t = void 0), r && r.enter();
        };
      if (u)
        n = function() {
          a.nextTick(s);
        };
      else if (!o || (r.navigator && r.navigator.standalone))
        if (c && c.resolve) {
          var l = c.resolve(void 0);
          n = function() {
            l.then(s);
          };
        } else
          n = function() {
            i.call(r, s);
          };
      else {
        var f = !0,
          d = document.createTextNode("");
        new o(s).observe(d, { characterData: !0 }),
          (n = function() {
            d.data = f = !f;
          });
      }
      return function(r) {
        var i = { fn: r, next: void 0 };
        t && (t.next = i), e || ((e = i), n()), (t = i);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      try {
        return { e: !1, v: e() };
      } catch (e) {
        return { e: !0, v: e };
      }
    };
  },
  function(e, t, n) {
    "use strict";
    var r = n(125),
      i = n(38);
    e.exports = n(61)(
      "Map",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function(e) {
          var t = r.getEntry(i(this, "Map"), e);
          return t && t.v;
        },
        set: function(e, t) {
          return r.def(i(this, "Map"), 0 === e ? 0 : e, t);
        }
      },
      r,
      !0
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(125),
      i = n(38);
    e.exports = n(61)(
      "Set",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(e) {
          return r.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
        }
      },
      r
    );
  },
  function(e, t, n) {
    "use strict";
    var r,
      i = n(2),
      o = n(23)(0),
      a = n(12),
      c = n(28),
      u = n(105),
      s = n(126),
      l = n(5),
      f = n(38),
      d = n(38),
      p = !i.ActiveXObject && "ActiveXObject" in i,
      h = c.getWeak,
      v = Object.isExtensible,
      m = s.ufstore,
      y = function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      g = {
        get: function(e) {
          if (l(e)) {
            var t = h(e);
            return !0 === t
              ? m(f(this, "WeakMap")).get(e)
              : t
              ? t[this._i]
              : void 0;
          }
        },
        set: function(e, t) {
          return s.def(f(this, "WeakMap"), e, t);
        }
      },
      b = (e.exports = n(61)("WeakMap", y, g, s, !0, !0));
    d &&
      p &&
      (u((r = s.getConstructor(y, "WeakMap")).prototype, g),
      (c.NEED = !0),
      o(["delete", "has", "get", "set"], function(e) {
        var t = b.prototype,
          n = t[e];
        a(t, e, function(t, i) {
          if (l(t) && !v(t)) {
            this._f || (this._f = new r());
            var o = this._f[e](t, i);
            return "set" == e ? this : o;
          }
          return n.call(this, t, i);
        });
      }));
  },
  function(e, t, n) {
    "use strict";
    var r = n(126),
      i = n(38);
    n(61)(
      "WeakSet",
      function(e) {
        return function() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function(e) {
          return r.def(i(this, "WeakSet"), e, !0);
        }
      },
      r,
      !1,
      !0
    );
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(62),
      o = n(88),
      a = n(4),
      c = n(33),
      u = n(7),
      s = n(5),
      l = n(2).ArrayBuffer,
      f = n(49),
      d = o.ArrayBuffer,
      p = o.DataView,
      h = i.ABV && l.isView,
      v = d.prototype.slice,
      m = i.VIEW;
    r(r.G + r.W + r.F * (l !== d), { ArrayBuffer: d }),
      r(r.S + r.F * !i.CONSTR, "ArrayBuffer", {
        isView: function(e) {
          return (h && h(e)) || (s(e) && m in e);
        }
      }),
      r(
        r.P +
          r.U +
          r.F *
            n(3)(function() {
              return !new d(2).slice(1, void 0).byteLength;
            }),
        "ArrayBuffer",
        {
          slice: function(e, t) {
            if (void 0 !== v && void 0 === t) return v.call(a(this), e);
            for (
              var n = a(this).byteLength,
                r = c(e, n),
                i = c(void 0 === t ? n : t, n),
                o = new (f(this, d))(u(i - r)),
                s = new p(this),
                l = new p(o),
                h = 0;
              r < i;

            )
              l.setUint8(h++, s.getUint8(r++));
            return o;
          }
        }
      ),
      n(42)("ArrayBuffer");
  },
  function(e, t, n) {
    var r = n(0);
    r(r.G + r.W + r.F * !n(62).ABV, { DataView: n(88).DataView });
  },
  function(e, t, n) {
    n(26)("Int8", 1, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Uint8", 1, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)(
      "Uint8",
      1,
      function(e) {
        return function(t, n, r) {
          return e(this, t, n, r);
        };
      },
      !0
    );
  },
  function(e, t, n) {
    n(26)("Int16", 2, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Uint16", 2, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Int32", 4, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Uint32", 4, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Float32", 4, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    n(26)("Float64", 8, function(e) {
      return function(t, n, r) {
        return e(this, t, n, r);
      };
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(19),
      o = n(4),
      a = (n(2).Reflect || {}).apply,
      c = Function.apply;
    r(
      r.S +
        r.F *
          !n(3)(function() {
            a(function() {});
          }),
      "Reflect",
      {
        apply: function(e, t, n) {
          var r = i(e),
            u = o(n);
          return a ? a(r, t, u) : c.call(r, t, u);
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0),
      i = n(34),
      o = n(19),
      a = n(4),
      c = n(5),
      u = n(3),
      s = n(107),
      l = (n(2).Reflect || {}).construct,
      f = u(function() {
        function e() {}
        return !(l(function() {}, [], e) instanceof e);
      }),
      d = !u(function() {
        l(function() {});
      });
    r(r.S + r.F * (f || d), "Reflect", {
      construct: function(e, t) {
        o(e), a(t);
        var n = arguments.length < 3 ? e : o(arguments[2]);
        if (d && !f) return l(e, t, n);
        if (e == n) {
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
          }
          var r = [null];
          return r.push.apply(r, t), new (s.apply(e, r))();
        }
        var u = n.prototype,
          p = i(c(u) ? u : Object.prototype),
          h = Function.apply.call(e, p, t);
        return c(h) ? h : p;
      }
    });
  },
  function(e, t, n) {
    var r = n(10),
      i = n(0),
      o = n(4),
      a = n(27);
    i(
      i.S +
        i.F *
          n(3)(function() {
            Reflect.defineProperty(r.f({}, 1, { value: 1 }), 1, { value: 2 });
          }),
      "Reflect",
      {
        defineProperty: function(e, t, n) {
          o(e), (t = a(t, !0)), o(n);
          try {
            return r.f(e, t, n), !0;
          } catch (e) {
            return !1;
          }
        }
      }
    );
  },
  function(e, t, n) {
    var r = n(0),
      i = n(21).f,
      o = n(4);
    r(r.S, "Reflect", {
      deleteProperty: function(e, t) {
        var n = i(o(e), t);
        return !(n && !n.configurable) && delete e[t];
      }
    });
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(4),
      o = function(e) {
        (this._t = i(e)), (this._i = 0);
        var t,
          n = (this._k = []);
        for (t in e) n.push(t);
      };
    n(114)(o, "Object", function() {
      var e,
        t = this._k;
      do {
        if (this._i >= t.length) return { value: void 0, done: !0 };
      } while (!((e = t[this._i++]) in this._t));
      return { value: e, done: !1 };
    }),
      r(r.S, "Reflect", {
        enumerate: function(e) {
          return new o(e);
        }
      });
  },
  function(e, t, n) {
    var r = n(21),
      i = n(36),
      o = n(14),
      a = n(0),
      c = n(5),
      u = n(4);
    a(a.S, "Reflect", {
      get: function e(t, n) {
        var a,
          s,
          l = arguments.length < 3 ? t : arguments[2];
        return u(t) === l
          ? t[n]
          : (a = r.f(t, n))
          ? o(a, "value")
            ? a.value
            : void 0 !== a.get
            ? a.get.call(l)
            : void 0
          : c((s = i(t)))
          ? e(s, n, l)
          : void 0;
      }
    });
  },
  function(e, t, n) {
    var r = n(21),
      i = n(0),
      o = n(4);
    i(i.S, "Reflect", {
      getOwnPropertyDescriptor: function(e, t) {
        return r.f(o(e), t);
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(36),
      o = n(4);
    r(r.S, "Reflect", {
      getPrototypeOf: function(e) {
        return i(o(e));
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Reflect", {
      has: function(e, t) {
        return t in e;
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(4),
      o = Object.isExtensible;
    r(r.S, "Reflect", {
      isExtensible: function(e) {
        return i(e), !o || o(e);
      }
    });
  },
  function(e, t, n) {
    var r = n(0);
    r(r.S, "Reflect", { ownKeys: n(128) });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(4),
      o = Object.preventExtensions;
    r(r.S, "Reflect", {
      preventExtensions: function(e) {
        i(e);
        try {
          return o && o(e), !0;
        } catch (e) {
          return !1;
        }
      }
    });
  },
  function(e, t, n) {
    var r = n(10),
      i = n(21),
      o = n(36),
      a = n(14),
      c = n(0),
      u = n(29),
      s = n(4),
      l = n(5);
    c(c.S, "Reflect", {
      set: function e(t, n, c) {
        var f,
          d,
          p = arguments.length < 4 ? t : arguments[3],
          h = i.f(s(t), n);
        if (!h) {
          if (l((d = o(t)))) return e(d, n, c, p);
          h = u(0);
        }
        if (a(h, "value")) {
          if (!1 === h.writable || !l(p)) return !1;
          if ((f = i.f(p, n))) {
            if (f.get || f.set || !1 === f.writable) return !1;
            (f.value = c), r.f(p, n, f);
          } else r.f(p, n, u(0, c));
          return !0;
        }
        return void 0 !== h.set && (h.set.call(p, c), !0);
      }
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(69);
    i &&
      r(r.S, "Reflect", {
        setPrototypeOf: function(e, t) {
          i.check(e, t);
          try {
            return i.set(e, t), !0;
          } catch (e) {
            return !1;
          }
        }
      });
  },
  function(e, t, n) {
    n(298), (e.exports = n(8).Array.includes);
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(52)(!0);
    r(r.P, "Array", {
      includes: function(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }),
      n(37)("includes");
  },
  function(e, t, n) {
    n(300), (e.exports = n(8).Array.flatMap);
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(301),
      o = n(11),
      a = n(7),
      c = n(19),
      u = n(116);
    r(r.P, "Array", {
      flatMap: function(e) {
        var t,
          n,
          r = o(this);
        return (
          c(e),
          (t = a(r.length)),
          (n = u(r, 0)),
          i(n, r, r, t, 0, 1, e, arguments[1]),
          n
        );
      }
    }),
      n(37)("flatMap");
  },
  function(e, t, n) {
    "use strict";
    var r = n(54),
      i = n(5),
      o = n(7),
      a = n(18),
      c = n(6)("isConcatSpreadable");
    e.exports = function e(t, n, u, s, l, f, d, p) {
      for (var h, v, m = l, y = 0, g = !!d && a(d, p, 3); y < s; ) {
        if (y in u) {
          if (
            ((h = g ? g(u[y], y, n) : u[y]),
            (v = !1),
            i(h) && (v = void 0 !== (v = h[c]) ? !!v : r(h)),
            v && f > 0)
          )
            m = e(t, n, h, o(h.length), m, f - 1) - 1;
          else {
            if (m >= 9007199254740991) throw TypeError();
            t[m] = h;
          }
          m++;
        }
        y++;
      }
      return m;
    };
  },
  function(e, t, n) {
    n(303), (e.exports = n(8).String.padStart);
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(129),
      o = n(60),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
      padStart: function(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
      }
    });
  },
  function(e, t, n) {
    n(305), (e.exports = n(8).String.padEnd);
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(129),
      o = n(60),
      a = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);
    r(r.P + r.F * a, "String", {
      padEnd: function(e) {
        return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
      }
    });
  },
  function(e, t, n) {
    n(307), (e.exports = n(8).String.trimLeft);
  },
  function(e, t, n) {
    "use strict";
    n(40)(
      "trimLeft",
      function(e) {
        return function() {
          return e(this, 1);
        };
      },
      "trimStart"
    );
  },
  function(e, t, n) {
    n(309), (e.exports = n(8).String.trimRight);
  },
  function(e, t, n) {
    "use strict";
    n(40)(
      "trimRight",
      function(e) {
        return function() {
          return e(this, 2);
        };
      },
      "trimEnd"
    );
  },
  function(e, t, n) {
    n(311), (e.exports = n(65).f("asyncIterator"));
  },
  function(e, t, n) {
    n(101)("asyncIterator");
  },
  function(e, t, n) {
    n(313), (e.exports = n(8).Object.getOwnPropertyDescriptors);
  },
  function(e, t, n) {
    var r = n(0),
      i = n(128),
      o = n(16),
      a = n(21),
      c = n(81);
    r(r.S, "Object", {
      getOwnPropertyDescriptors: function(e) {
        for (
          var t, n, r = o(e), u = a.f, s = i(r), l = {}, f = 0;
          s.length > f;

        )
          void 0 !== (n = u(r, (t = s[f++]))) && c(l, t, n);
        return l;
      }
    });
  },
  function(e, t, n) {
    n(315), (e.exports = n(8).Object.values);
  },
  function(e, t, n) {
    var r = n(0),
      i = n(130)(!1);
    r(r.S, "Object", {
      values: function(e) {
        return i(e);
      }
    });
  },
  function(e, t, n) {
    n(317), (e.exports = n(8).Object.entries);
  },
  function(e, t, n) {
    var r = n(0),
      i = n(130)(!0);
    r(r.S, "Object", {
      entries: function(e) {
        return i(e);
      }
    });
  },
  function(e, t, n) {
    "use strict";
    n(122), n(319), (e.exports = n(8).Promise.finally);
  },
  function(e, t, n) {
    "use strict";
    var r = n(0),
      i = n(8),
      o = n(2),
      a = n(49),
      c = n(124);
    r(r.P + r.R, "Promise", {
      finally: function(e) {
        var t = a(this, i.Promise || o.Promise),
          n = "function" == typeof e;
        return this.then(
          n
            ? function(n) {
                return c(t, e()).then(function() {
                  return n;
                });
              }
            : e,
          n
            ? function(n) {
                return c(t, e()).then(function() {
                  throw n;
                });
              }
            : e
        );
      }
    });
  },
  function(e, t, n) {
    n(321), n(322), n(323), (e.exports = n(8));
  },
  function(e, t, n) {
    var r = n(2),
      i = n(0),
      o = n(60),
      a = [].slice,
      c = /MSIE .\./.test(o),
      u = function(e) {
        return function(t, n) {
          var r = arguments.length > 2,
            i = !!r && a.call(arguments, 2);
          return e(
            r
              ? function() {
                  ("function" == typeof t ? t : Function(t)).apply(this, i);
                }
              : t,
            n
          );
        };
      };
    i(i.G + i.B + i.F * c, {
      setTimeout: u(r.setTimeout),
      setInterval: u(r.setInterval)
    });
  },
  function(e, t, n) {
    var r = n(0),
      i = n(87);
    r(r.G + r.B, { setImmediate: i.set, clearImmediate: i.clear });
  },
  function(e, t, n) {
    for (
      var r = n(84),
        i = n(32),
        o = n(12),
        a = n(2),
        c = n(15),
        u = n(41),
        s = n(6),
        l = s("iterator"),
        f = s("toStringTag"),
        d = u.Array,
        p = {
          CSSRuleList: !0,
          CSSStyleDeclaration: !1,
          CSSValueList: !1,
          ClientRectList: !1,
          DOMRectList: !1,
          DOMStringList: !1,
          DOMTokenList: !0,
          DataTransferItemList: !1,
          FileList: !1,
          HTMLAllCollection: !1,
          HTMLCollection: !1,
          HTMLFormElement: !1,
          HTMLSelectElement: !1,
          MediaList: !0,
          MimeTypeArray: !1,
          NamedNodeMap: !1,
          NodeList: !0,
          PaintRequestList: !1,
          Plugin: !1,
          PluginArray: !1,
          SVGLengthList: !1,
          SVGNumberList: !1,
          SVGPathSegList: !1,
          SVGPointList: !1,
          SVGStringList: !1,
          SVGTransformList: !1,
          SourceBufferList: !1,
          StyleSheetList: !0,
          TextTrackCueList: !1,
          TextTrackList: !1,
          TouchList: !1
        },
        h = i(p),
        v = 0;
      v < h.length;
      v++
    ) {
      var m,
        y = h[v],
        g = p[y],
        b = a[y],
        w = b && b.prototype;
      if (w && (w[l] || c(w, l, d), w[f] || c(w, f, y), (u[y] = d), g))
        for (m in r) w[m] || o(w, m, r[m], !0);
    }
  },
  function(e, t, n) {
    var r = (function(e) {
      "use strict";
      var t = Object.prototype,
        n = t.hasOwnProperty,
        r = "function" == typeof Symbol ? Symbol : {},
        i = r.iterator || "@@iterator",
        o = r.asyncIterator || "@@asyncIterator",
        a = r.toStringTag || "@@toStringTag";
      function c(e, t, n, r) {
        var i = t && t.prototype instanceof l ? t : l,
          o = Object.create(i.prototype),
          a = new E(r || []);
        return (
          (o._invoke = (function(e, t, n) {
            var r = "suspendedStart";
            return function(i, o) {
              if ("executing" === r)
                throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === i) throw o;
                return x();
              }
              for (n.method = i, n.arg = o; ; ) {
                var a = n.delegate;
                if (a) {
                  var c = b(a, n);
                  if (c) {
                    if (c === s) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var l = u(e, t, n);
                if ("normal" === l.type) {
                  if (
                    ((r = n.done ? "completed" : "suspendedYield"), l.arg === s)
                  )
                    continue;
                  return { value: l.arg, done: n.done };
                }
                "throw" === l.type &&
                  ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
              }
            };
          })(e, n, a)),
          o
        );
      }
      function u(e, t, n) {
        try {
          return { type: "normal", arg: e.call(t, n) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }
      e.wrap = c;
      var s = {};
      function l() {}
      function f() {}
      function d() {}
      var p = {};
      p[i] = function() {
        return this;
      };
      var h = Object.getPrototypeOf,
        v = h && h(h(T([])));
      v && v !== t && n.call(v, i) && (p = v);
      var m = (d.prototype = l.prototype = Object.create(p));
      function y(e) {
        ["next", "throw", "return"].forEach(function(t) {
          e[t] = function(e) {
            return this._invoke(t, e);
          };
        });
      }
      function g(e) {
        var t;
        this._invoke = function(r, i) {
          function o() {
            return new Promise(function(t, o) {
              !(function t(r, i, o, a) {
                var c = u(e[r], e, i);
                if ("throw" !== c.type) {
                  var s = c.arg,
                    l = s.value;
                  return l && "object" == typeof l && n.call(l, "__await")
                    ? Promise.resolve(l.__await).then(
                        function(e) {
                          t("next", e, o, a);
                        },
                        function(e) {
                          t("throw", e, o, a);
                        }
                      )
                    : Promise.resolve(l).then(
                        function(e) {
                          (s.value = e), o(s);
                        },
                        function(e) {
                          return t("throw", e, o, a);
                        }
                      );
                }
                a(c.arg);
              })(r, i, t, o);
            });
          }
          return (t = t ? t.then(o, o) : o());
        };
      }
      function b(e, t) {
        var n = e.iterator[t.method];
        if (void 0 === n) {
          if (((t.delegate = null), "throw" === t.method)) {
            if (
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              b(e, t),
              "throw" === t.method)
            )
              return s;
            (t.method = "throw"),
              (t.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return s;
        }
        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type)
          return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), s;
        var i = r.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              s)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            s);
      }
      function w(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(w, this),
          this.reset(!0);
      }
      function T(e) {
        if (e) {
          var t = e[i];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              o = function t() {
                for (; ++r < e.length; )
                  if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (o.next = o);
          }
        }
        return { next: x };
      }
      function x() {
        return { value: void 0, done: !0 };
      }
      return (
        (f.prototype = m.constructor = d),
        (d.constructor = f),
        (d[a] = f.displayName = "GeneratorFunction"),
        (e.isGeneratorFunction = function(e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === f || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (e.mark = function(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), a in e || (e[a] = "GeneratorFunction")),
            (e.prototype = Object.create(m)),
            e
          );
        }),
        (e.awrap = function(e) {
          return { __await: e };
        }),
        y(g.prototype),
        (g.prototype[o] = function() {
          return this;
        }),
        (e.AsyncIterator = g),
        (e.async = function(t, n, r, i) {
          var o = new g(c(t, n, r, i));
          return e.isGeneratorFunction(n)
            ? o
            : o.next().then(function(e) {
                return e.done ? e.value : o.next();
              });
        }),
        y(m),
        (m[a] = "Generator"),
        (m[i] = function() {
          return this;
        }),
        (m.toString = function() {
          return "[object Generator]";
        }),
        (e.keys = function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return (
            t.reverse(),
            function n() {
              for (; t.length; ) {
                var r = t.pop();
                if (r in e) return (n.value = r), (n.done = !1), n;
              }
              return (n.done = !0), n;
            }
          );
        }),
        (e.values = T),
        (E.prototype = {
          constructor: E,
          reset: function(e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  n.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function(e) {
            if (this.done) throw e;
            var t = this;
            function r(n, r) {
              return (
                (a.type = "throw"),
                (a.arg = e),
                (t.next = n),
                r && ((t.method = "next"), (t.arg = void 0)),
                !!r
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var o = this.tryEntries[i],
                a = o.completion;
              if ("root" === o.tryLoc) return r("end");
              if (o.tryLoc <= this.prev) {
                var c = n.call(o, "catchLoc"),
                  u = n.call(o, "finallyLoc");
                if (c && u) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                } else if (c) {
                  if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function(e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var i = this.tryEntries[r];
              if (
                i.tryLoc <= this.prev &&
                n.call(i, "finallyLoc") &&
                this.prev < i.finallyLoc
              ) {
                var o = i;
                break;
              }
            }
            o &&
              ("break" === e || "continue" === e) &&
              o.tryLoc <= t &&
              t <= o.finallyLoc &&
              (o = null);
            var a = o ? o.completion : {};
            return (
              (a.type = e),
              (a.arg = t),
              o
                ? ((this.method = "next"), (this.next = o.finallyLoc), s)
                : this.complete(a)
            );
          },
          complete: function(e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              s
            );
          },
          finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.finallyLoc === e)
                return this.complete(n.completion, n.afterLoc), S(n), s;
            }
          },
          catch: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var n = this.tryEntries[t];
              if (n.tryLoc === e) {
                var r = n.completion;
                if ("throw" === r.type) {
                  var i = r.arg;
                  S(n);
                }
                return i;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function(e, t, n) {
            return (
              (this.delegate = { iterator: T(e), resultName: t, nextLoc: n }),
              "next" === this.method && (this.arg = void 0),
              s
            );
          }
        }),
        e
      );
    })(e.exports);
    try {
      regeneratorRuntime = r;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(r);
    }
  },
  function(e, t, n) {
    n(326), (e.exports = n(131).global);
  },
  function(e, t, n) {
    var r = n(327);
    r(r.G, { global: n(89) });
  },
  function(e, t, n) {
    var r = n(89),
      i = n(131),
      o = n(328),
      a = n(330),
      c = n(337),
      u = function(e, t, n) {
        var s,
          l,
          f,
          d = e & u.F,
          p = e & u.G,
          h = e & u.S,
          v = e & u.P,
          m = e & u.B,
          y = e & u.W,
          g = p ? i : i[t] || (i[t] = {}),
          b = g.prototype,
          w = p ? r : h ? r[t] : (r[t] || {}).prototype;
        for (s in (p && (n = t), n))
          ((l = !d && w && void 0 !== w[s]) && c(g, s)) ||
            ((f = l ? w[s] : n[s]),
            (g[s] =
              p && "function" != typeof w[s]
                ? n[s]
                : m && l
                ? o(f, r)
                : y && w[s] == f
                ? (function(e) {
                    var t = function(t, n, r) {
                      if (this instanceof e) {
                        switch (arguments.length) {
                          case 0:
                            return new e();
                          case 1:
                            return new e(t);
                          case 2:
                            return new e(t, n);
                        }
                        return new e(t, n, r);
                      }
                      return e.apply(this, arguments);
                    };
                    return (t.prototype = e.prototype), t;
                  })(f)
                : v && "function" == typeof f
                ? o(Function.call, f)
                : f),
            v &&
              (((g.virtual || (g.virtual = {}))[s] = f),
              e & u.R && b && !b[s] && a(b, s, f)));
      };
    (u.F = 1),
      (u.G = 2),
      (u.S = 4),
      (u.P = 8),
      (u.B = 16),
      (u.W = 32),
      (u.U = 64),
      (u.R = 128),
      (e.exports = u);
  },
  function(e, t, n) {
    var r = n(329);
    e.exports = function(e, t, n) {
      if ((r(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, i) {
            return e.call(t, n, r, i);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    };
  },
  function(e, t) {
    e.exports = function(e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  },
  function(e, t, n) {
    var r = n(331),
      i = n(336);
    e.exports = n(91)
      ? function(e, t, n) {
          return r.f(e, t, i(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        };
  },
  function(e, t, n) {
    var r = n(332),
      i = n(333),
      o = n(335),
      a = Object.defineProperty;
    t.f = n(91)
      ? Object.defineProperty
      : function(e, t, n) {
          if ((r(e), (t = o(t, !0)), r(n), i))
            try {
              return a(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        };
  },
  function(e, t, n) {
    var r = n(90);
    e.exports = function(e) {
      if (!r(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  },
  function(e, t, n) {
    e.exports =
      !n(91) &&
      !n(132)(function() {
        return (
          7 !=
          Object.defineProperty(n(334)("div"), "a", {
            get: function() {
              return 7;
            }
          }).a
        );
      });
  },
  function(e, t, n) {
    var r = n(90),
      i = n(89).document,
      o = r(i) && r(i.createElement);
    e.exports = function(e) {
      return o ? i.createElement(e) : {};
    };
  },
  function(e, t, n) {
    var r = n(90);
    e.exports = function(e, t) {
      if (!r(e)) return e;
      var n, i;
      if (t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      if ("function" == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i;
      if (!t && "function" == typeof (n = e.toString) && !r((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function(e, t) {
    e.exports = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  },
  function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
      return n.call(e, t);
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(1),
      a = (r = o) && r.__esModule ? r : { default: r },
      c = n(92);
    var u = {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      background: "white",
      border: "3px #aaa dashed",
      resize: "both",
      overflow: "auto",
      width: "50%",
      height: "50%",
      color: "#AAA",
      fontSize: "2em"
    };
    t.default = function() {
      var e = (0, o.useRef)(null),
        t = (0, c.useSize)(),
        n = i(t, 2),
        r = n[0],
        s = n[1],
        l = (0, c.useSize)(e),
        f = i(l, 2),
        d = f[0],
        p = f[1];
      return a.default.createElement(
        "div",
        null,
        a.default.createElement(
          "span",
          { style: { color: "#AAA", fontSize: "2em" } },
          s,
          " x ",
          r
        ),
        a.default.createElement(
          "div",
          { ref: e, style: u, disabled: !0 },
          a.default.createElement(
            "span",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
              }
            },
            p,
            " x ",
            d
          )
        )
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(1),
      a = n(134),
      c = (r = a) && r.__esModule ? r : { default: r };
    t.default = function(e) {
      var t = (0, o.useRef)(!1),
        n = (0, o.useRef)(0),
        r = (0, o.useState)(0),
        a = i(r, 2),
        u = a[0],
        s = a[1],
        l = (0, o.useRef)(null),
        f = (0, o.useState)(0),
        d = i(f, 2),
        p = d[0],
        h = d[1],
        v = (0, o.useCallback)(function(e, r, i) {
          t.current = !0;
          var o = i || (e.scrollTop < r ? "down" : "up");
          switch (o) {
            case "up":
              if (((e.scrollTop -= ++n.current), e.scrollTop <= r))
                return (n.current = 0), (e.scrollTop = r), (t.current = !1);
              break;
            case "down":
              if (((e.scrollTop += ++n.current), e.scrollTop >= r))
                return (n.current = 0), (e.scrollTop = r), (t.current = !1);
              break;
            default:
              return;
          }
          return requestAnimationFrame(function() {
            return v(e, r, o);
          });
        }, []),
        m = (0, o.useCallback)(
          function(e) {
            var t = l.current,
              n = p;
            e >= 0 && e * n <= t.scrollHeight - n && (v(t, e * n), s(e));
          },
          [p, v]
        );
      return (
        (0, c.default)(
          e,
          {
            onSwipeUp: function() {
              return m(u + 1);
            },
            onSwipeDown: function() {
              return m(u - 1);
            },
            onTouchMove: function(e) {
              l.current.scrollTop = u * p - e.y;
            },
            onDistanceLessThanDelta: function() {
              m(u);
            }
          },
          50
        ),
        (0, o.useEffect)(
          function() {
            var e = function(e) {
              38 === e.keyCode ? m(u - 1) : 40 === e.keyCode && m(u + 1);
            };
            return (
              window.addEventListener("keyup", e),
              function() {
                return window.removeEventListener("keyup", e);
              }
            );
          },
          [m, u]
        ),
        (0, o.useEffect)(
          function() {
            l.current && m(u);
          },
          [p, m]
        ),
        (0, o.useEffect)(
          function() {
            e && e.current
              ? ((l.current = e.current), h(e.current.offsetHeight))
              : ((l.current = document.body), h(window.innerHeight)),
              (l.current.style.overflowY = "hidden");
            var n = function(e) {
                e.preventDefault();
                var n =
                  Math.abs(e.deltaY) >= 40 && (e.deltaY < 0 ? "up" : "down");
                !t.current &&
                  n &&
                  ("down" === n && u < l.current.scrollHeight
                    ? m(u + 1)
                    : "up" === n && u > 0 && m(u - 1));
              },
              r = function() {
                e && e.current
                  ? h(e.current.offsetHeight)
                  : h(window.innerHeight);
              };
            return (
              window.addEventListener("resize", r),
              l.current.addEventListener("wheel", n),
              function() {
                l.current.removeEventListener("wheel", n),
                  window.removeEventListener("resize", r);
              }
            );
          },
          [u, e, m]
        ),
        [u, m]
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(1),
      a = n(341),
      c = (r = a) && r.__esModule ? r : { default: r };
    t.default = function() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = (0, o.useState)(0),
        n = i(t, 2),
        r = n[0],
        a = n[1],
        u = (0, o.useState)(0),
        s = i(u, 2),
        l = s[0],
        f = s[1],
        d = (0, o.useRef)(null),
        p = (0, o.useRef)(null),
        h = (0, o.useRef)(null),
        v = (0, o.useCallback)(function() {
          d.current && (a(window.innerHeight), f(window.innerWidth));
        }, []),
        m = (0, o.useCallback)(
          function() {
            d.current || (a(p.current.offsetHeight), f(p.current.offsetWidth));
          },
          [e]
        );
      return (
        (0, o.useEffect)(
          function() {
            return (
              e && e.current
                ? ((p.current = e.current),
                  a(e.current.offsetHeight),
                  f(e.current.offsetWidth),
                  (d.current = !1))
                : ((p.current = document.body),
                  a(window.innerHeight),
                  f(window.innerWidth),
                  (d.current = !0),
                  h.current && h.current.disconnect()),
              d.current
                ? window.addEventListener("resize", v)
                : (h.current || (h.current = new c.default(m)),
                  h.current.observe(p.current)),
              function() {
                d.current
                  ? window.removeEventListener("resize", v)
                  : h.current.unobserve(p.current);
              }
            );
          },
          [e]
        ),
        [r, l]
      );
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        var n = (function() {
            if ("undefined" != typeof Map) return Map;
            function e(e, t) {
              var n = -1;
              return (
                e.some(function(e, r) {
                  return e[0] === t && ((n = r), !0);
                }),
                n
              );
            }
            return (function() {
              function t() {
                this.__entries__ = [];
              }
              return (
                Object.defineProperty(t.prototype, "size", {
                  get: function() {
                    return this.__entries__.length;
                  },
                  enumerable: !0,
                  configurable: !0
                }),
                (t.prototype.get = function(t) {
                  var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                  return r && r[1];
                }),
                (t.prototype.set = function(t, n) {
                  var r = e(this.__entries__, t);
                  ~r
                    ? (this.__entries__[r][1] = n)
                    : this.__entries__.push([t, n]);
                }),
                (t.prototype.delete = function(t) {
                  var n = this.__entries__,
                    r = e(n, t);
                  ~r && n.splice(r, 1);
                }),
                (t.prototype.has = function(t) {
                  return !!~e(this.__entries__, t);
                }),
                (t.prototype.clear = function() {
                  this.__entries__.splice(0);
                }),
                (t.prototype.forEach = function(e, t) {
                  void 0 === t && (t = null);
                  for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0]);
                  }
                }),
                t
              );
            })();
          })(),
          r =
            "undefined" != typeof window &&
            "undefined" != typeof document &&
            window.document === document,
          i =
            void 0 !== e && e.Math === Math
              ? e
              : "undefined" != typeof self && self.Math === Math
              ? self
              : "undefined" != typeof window && window.Math === Math
              ? window
              : Function("return this")(),
          o =
            "function" == typeof requestAnimationFrame
              ? requestAnimationFrame.bind(i)
              : function(e) {
                  return setTimeout(function() {
                    return e(Date.now());
                  }, 1e3 / 60);
                };
        var a = [
            "top",
            "right",
            "bottom",
            "left",
            "width",
            "height",
            "size",
            "weight"
          ],
          c = "undefined" != typeof MutationObserver,
          u = (function() {
            function e() {
              (this.connected_ = !1),
                (this.mutationEventsAdded_ = !1),
                (this.mutationsObserver_ = null),
                (this.observers_ = []),
                (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
                (this.refresh = (function(e, t) {
                  var n = !1,
                    r = !1,
                    i = 0;
                  function a() {
                    n && ((n = !1), e()), r && u();
                  }
                  function c() {
                    o(a);
                  }
                  function u() {
                    var e = Date.now();
                    if (n) {
                      if (e - i < 2) return;
                      r = !0;
                    } else (n = !0), (r = !1), setTimeout(c, t);
                    i = e;
                  }
                  return u;
                })(this.refresh.bind(this), 20));
            }
            return (
              (e.prototype.addObserver = function(e) {
                ~this.observers_.indexOf(e) || this.observers_.push(e),
                  this.connected_ || this.connect_();
              }),
              (e.prototype.removeObserver = function(e) {
                var t = this.observers_,
                  n = t.indexOf(e);
                ~n && t.splice(n, 1),
                  !t.length && this.connected_ && this.disconnect_();
              }),
              (e.prototype.refresh = function() {
                this.updateObservers_() && this.refresh();
              }),
              (e.prototype.updateObservers_ = function() {
                var e = this.observers_.filter(function(e) {
                  return e.gatherActive(), e.hasActive();
                });
                return (
                  e.forEach(function(e) {
                    return e.broadcastActive();
                  }),
                  e.length > 0
                );
              }),
              (e.prototype.connect_ = function() {
                r &&
                  !this.connected_ &&
                  (document.addEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.addEventListener("resize", this.refresh),
                  c
                    ? ((this.mutationsObserver_ = new MutationObserver(
                        this.refresh
                      )),
                      this.mutationsObserver_.observe(document, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                      }))
                    : (document.addEventListener(
                        "DOMSubtreeModified",
                        this.refresh
                      ),
                      (this.mutationEventsAdded_ = !0)),
                  (this.connected_ = !0));
              }),
              (e.prototype.disconnect_ = function() {
                r &&
                  this.connected_ &&
                  (document.removeEventListener(
                    "transitionend",
                    this.onTransitionEnd_
                  ),
                  window.removeEventListener("resize", this.refresh),
                  this.mutationsObserver_ &&
                    this.mutationsObserver_.disconnect(),
                  this.mutationEventsAdded_ &&
                    document.removeEventListener(
                      "DOMSubtreeModified",
                      this.refresh
                    ),
                  (this.mutationsObserver_ = null),
                  (this.mutationEventsAdded_ = !1),
                  (this.connected_ = !1));
              }),
              (e.prototype.onTransitionEnd_ = function(e) {
                var t = e.propertyName,
                  n = void 0 === t ? "" : t;
                a.some(function(e) {
                  return !!~n.indexOf(e);
                }) && this.refresh();
              }),
              (e.getInstance = function() {
                return (
                  this.instance_ || (this.instance_ = new e()), this.instance_
                );
              }),
              (e.instance_ = null),
              e
            );
          })(),
          s = function(e, t) {
            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
              var i = r[n];
              Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
              });
            }
            return e;
          },
          l = function(e) {
            return (e && e.ownerDocument && e.ownerDocument.defaultView) || i;
          },
          f = y(0, 0, 0, 0);
        function d(e) {
          return parseFloat(e) || 0;
        }
        function p(e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
          return t.reduce(function(t, n) {
            return t + d(e["border-" + n + "-width"]);
          }, 0);
        }
        function h(e) {
          var t = e.clientWidth,
            n = e.clientHeight;
          if (!t && !n) return f;
          var r = l(e).getComputedStyle(e),
            i = (function(e) {
              for (
                var t = {}, n = 0, r = ["top", "right", "bottom", "left"];
                n < r.length;
                n++
              ) {
                var i = r[n],
                  o = e["padding-" + i];
                t[i] = d(o);
              }
              return t;
            })(r),
            o = i.left + i.right,
            a = i.top + i.bottom,
            c = d(r.width),
            u = d(r.height);
          if (
            ("border-box" === r.boxSizing &&
              (Math.round(c + o) !== t && (c -= p(r, "left", "right") + o),
              Math.round(u + a) !== n && (u -= p(r, "top", "bottom") + a)),
            !(function(e) {
              return e === l(e).document.documentElement;
            })(e))
          ) {
            var s = Math.round(c + o) - t,
              h = Math.round(u + a) - n;
            1 !== Math.abs(s) && (c -= s), 1 !== Math.abs(h) && (u -= h);
          }
          return y(i.left, i.top, c, u);
        }
        var v =
          "undefined" != typeof SVGGraphicsElement
            ? function(e) {
                return e instanceof l(e).SVGGraphicsElement;
              }
            : function(e) {
                return (
                  e instanceof l(e).SVGElement && "function" == typeof e.getBBox
                );
              };
        function m(e) {
          return r
            ? v(e)
              ? (function(e) {
                  var t = e.getBBox();
                  return y(0, 0, t.width, t.height);
                })(e)
              : h(e)
            : f;
        }
        function y(e, t, n, r) {
          return { x: e, y: t, width: n, height: r };
        }
        var g = (function() {
            function e(e) {
              (this.broadcastWidth = 0),
                (this.broadcastHeight = 0),
                (this.contentRect_ = y(0, 0, 0, 0)),
                (this.target = e);
            }
            return (
              (e.prototype.isActive = function() {
                var e = m(this.target);
                return (
                  (this.contentRect_ = e),
                  e.width !== this.broadcastWidth ||
                    e.height !== this.broadcastHeight
                );
              }),
              (e.prototype.broadcastRect = function() {
                var e = this.contentRect_;
                return (
                  (this.broadcastWidth = e.width),
                  (this.broadcastHeight = e.height),
                  e
                );
              }),
              e
            );
          })(),
          b = function(e, t) {
            var n,
              r,
              i,
              o,
              a,
              c,
              u,
              l =
                ((r = (n = t).x),
                (i = n.y),
                (o = n.width),
                (a = n.height),
                (c =
                  "undefined" != typeof DOMRectReadOnly
                    ? DOMRectReadOnly
                    : Object),
                (u = Object.create(c.prototype)),
                s(u, {
                  x: r,
                  y: i,
                  width: o,
                  height: a,
                  top: i,
                  right: r + o,
                  bottom: a + i,
                  left: r
                }),
                u);
            s(this, { target: e, contentRect: l });
          },
          w = (function() {
            function e(e, t, r) {
              if (
                ((this.activeObservations_ = []),
                (this.observations_ = new n()),
                "function" != typeof e)
              )
                throw new TypeError(
                  "The callback provided as parameter 1 is not a function."
                );
              (this.callback_ = e),
                (this.controller_ = t),
                (this.callbackCtx_ = r);
            }
            return (
              (e.prototype.observe = function(e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof l(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) ||
                    (t.set(e, new g(e)),
                    this.controller_.addObserver(this),
                    this.controller_.refresh());
                }
              }),
              (e.prototype.unobserve = function(e) {
                if (!arguments.length)
                  throw new TypeError(
                    "1 argument required, but only 0 present."
                  );
                if (
                  "undefined" != typeof Element &&
                  Element instanceof Object
                ) {
                  if (!(e instanceof l(e).Element))
                    throw new TypeError(
                      'parameter 1 is not of type "Element".'
                    );
                  var t = this.observations_;
                  t.has(e) &&
                    (t.delete(e),
                    t.size || this.controller_.removeObserver(this));
                }
              }),
              (e.prototype.disconnect = function() {
                this.clearActive(),
                  this.observations_.clear(),
                  this.controller_.removeObserver(this);
              }),
              (e.prototype.gatherActive = function() {
                var e = this;
                this.clearActive(),
                  this.observations_.forEach(function(t) {
                    t.isActive() && e.activeObservations_.push(t);
                  });
              }),
              (e.prototype.broadcastActive = function() {
                if (this.hasActive()) {
                  var e = this.callbackCtx_,
                    t = this.activeObservations_.map(function(e) {
                      return new b(e.target, e.broadcastRect());
                    });
                  this.callback_.call(e, t, e), this.clearActive();
                }
              }),
              (e.prototype.clearActive = function() {
                this.activeObservations_.splice(0);
              }),
              (e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0;
              }),
              e
            );
          })(),
          S = "undefined" != typeof WeakMap ? new WeakMap() : new n(),
          E = function e(t) {
            if (!(this instanceof e))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var n = u.getInstance(),
              r = new w(t, n, this);
            S.set(this, r);
          };
        ["observe", "unobserve", "disconnect"].forEach(function(e) {
          E.prototype[e] = function() {
            var t;
            return (t = S.get(this))[e].apply(t, arguments);
          };
        });
        var T = void 0 !== i.ResizeObserver ? i.ResizeObserver : E;
        t.default = T;
      }.call(this, n(98));
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      o = n(1),
      a = s(o),
      c = s(n(136)),
      u = s(n(343));
    s(n(93));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = function(e) {
        var t = e.children,
          n = e.onChange,
          c = e.value,
          s = (0, o.useState)(c),
          l = i(s, 2),
          f = l[0],
          d = l[1];
        return a.default.createElement(
          "div",
          { className: u.default.Select },
          t.map(function(e) {
            var t = e.props,
              i = e.key,
              o = Object.assign({}, t);
            return (
              (o.className =
                t.value === f
                  ? [u.default.Option, u.default.Selected].join(" ")
                  : u.default.Option),
              (o.onClick = function() {
                d(t.value), n(t.value);
              }),
              a.default.createElement("span", r({ key: i }, o), t.children)
            );
          })
        );
      },
      f = function(e) {
        var t = e.cameraList,
          n = e.selectedCameraId,
          r = e.selectCamera;
        return t.length
          ? a.default.createElement(
              l,
              {
                className: u.default.select,
                value: n,
                onChange: function(e) {
                  return r(e);
                }
              },
              t.map(function(e) {
                return a.default.createElement(
                  "option",
                  { key: e.deviceId, value: e.deviceId },
                  e.label
                );
              })
            )
          : null;
      },
      d = function(e) {
        var t = e.constraints,
          n = e.selectedConstraint,
          r = e.selectConstraint;
        return t.length
          ? a.default.createElement(
              l,
              {
                className: u.default.select,
                value: t.findIndex(function(e) {
                  return e.width === n.width;
                }),
                onChange: function(e) {
                  return r(t[e]);
                }
              },
              t.map(function(e, t) {
                return a.default.createElement(
                  "option",
                  { key: e.label, value: t },
                  e.label
                );
              })
            )
          : null;
      },
      p = function(e) {
        var t = e.streamProps,
          n = e.cameraProps,
          r = (0, o.useState)(!1),
          c = i(r, 2),
          s = c[0],
          l = c[1];
        return a.default.createElement(
          "div",
          {
            className: [
              u.default.container,
              s ? u.default.Open : u.default.Close
            ].join(" ")
          },
          a.default.createElement(
            "div",
            { style: { display: "inline-block", maxWidth: "100%" } },
            a.default.createElement(f, n),
            a.default.createElement(d, t)
          ),
          a.default.createElement(
            "span",
            {
              className: u.default.collapse,
              onClick: function() {
                return l(!s);
              }
            },
            s
              ? a.default.createElement(
                  "svg",
                  { className: u.default.svg, viewBox: "0 0 20 20" },
                  a.default.createElement("path", {
                    fill: "none",
                    d:
                      "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                  })
                )
              : a.default.createElement(
                  "svg",
                  { className: u.default.svg, viewBox: "0 0 20 20" },
                  a.default.createElement("path", {
                    fill: "none",
                    d:
                      "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                  })
                )
          )
        );
      };
    t.default = function() {
      var e = (0, c.default)(),
        t = i(e, 8),
        n = t[0],
        r = (t[1], t[2]),
        u = t[3],
        s = t[4],
        l = t[5],
        f = t[6],
        d = t[7],
        h = (0, o.useRef)(null);
      return (
        (0, o.useLayoutEffect)(
          function() {
            n && (h.current.srcObject = n);
          },
          [n]
        ),
        a.default.createElement(
          "div",
          {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }
          },
          a.default.createElement(p, {
            cameraProps: {
              cameraList: s,
              selectedCameraId: f,
              selectCamera: r
            },
            streamProps: {
              constraints: l,
              selectedConstraint: d,
              selectConstraint: u
            }
          }),
          a.default.createElement("video", {
            ref: h,
            autoPlay: !0,
            style: { position: "absolute" }
          })
        )
      );
    };
  },
  function(e, t, n) {
    var r = n(344),
      i = n(345);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var o = { insert: "head", singleton: !1 },
      a = (r(i, o), i.locals ? i.locals : {});
    e.exports = a;
  },
  function(e, t, n) {
    "use strict";
    var r,
      i = function() {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      o = (function() {
        var e = {};
        return function(t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function c(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function u(e, t) {
      for (var n = {}, r = [], i = 0; i < e.length; i++) {
        var o = e[i],
          u = t.base ? o[0] + t.base : o[0],
          s = n[u] || 0,
          l = "".concat(u, " ").concat(s);
        n[u] = s + 1;
        var f = c(l),
          d = { css: o[1], media: o[2], sourceMap: o[3] };
        -1 !== f
          ? (a[f].references++, a[f].updater(d))
          : a.push({ identifier: l, updater: m(d, t), references: 1 }),
          r.push(l);
      }
      return r;
    }
    function s(e) {
      var t = document.createElement("style"),
        r = e.attributes || {};
      if (void 0 === r.nonce) {
        var i = n.nc;
        i && (r.nonce = i);
      }
      if (
        (Object.keys(r).forEach(function(e) {
          t.setAttribute(e, r[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = o(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var l,
      f =
        ((l = []),
        function(e, t) {
          return (l[e] = t), l.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var i = n
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, i);
      else {
        var o = document.createTextNode(i),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(o, a[t]) : e.appendChild(o);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        i = n.media,
        o = n.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        o &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      v = 0;
    function m(e, t) {
      var n, r, i;
      if (t.singleton) {
        var o = v++;
        (n = h || (h = s(t))),
          (r = d.bind(null, n, o, !1)),
          (i = d.bind(null, n, o, !0));
      } else
        (n = s(t)),
          (r = p.bind(null, n, t)),
          (i = function() {
            !(function(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function(t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else i();
        }
      );
    }
    e.exports = function(e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = i());
      var n = u((e = e || []), t);
      return function(e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var r = 0; r < n.length; r++) {
            var i = c(n[r]);
            a[i].references--;
          }
          for (var o = u(e, t), s = 0; s < n.length; s++) {
            var l = c(n[s]);
            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
          }
          n = o;
        }
      };
    };
  },
  function(e, t, n) {
    (t = n(346)(!1)).push([
      e.i,
      ".zvQGdbOZ5I-wY4r33-ebS {\n\tmax-width: 100%;\n\tpadding: .2em;\n\tmargin: .1em;\n\tbackground: #95a5a6aa;\n\tborder-radius: 0px 4px 4px 0px;\n\tposition: fixed;\n\ttext-align: center;\n\ttop: 0;\n\tz-index: 1000;\n\ttransition: .5s all ease-out\n}\n._2aIeBjrSUdVni7as-s8s-8 svg{\n\tcolor: #fff;\n\tbackground: #95a5a688;\n\tborder-radius: 0px 4px 4px 0px;\n\tfont-size: 2em;\n\tfont-family: cursive;\n\tfont-weight: bold;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 100%;\n\ttransform: translateY(-50%);\n\tborder-left: 1px inset;\n\tcursor: pointer;\n}\n\n._1jv38p3lxcGPjr_ugalaf0 {\n\tbackground: #ffffff00;\n\tcolor: #fff;\n\tdisplay: flex;\n\theight: 1.8em;\n\tfont-size: .9em;\n\tline-height: 1.8em;\n\talign-items: center;\n\tpadding: .2em;\n\tjustify-content: space-evenly;\n\talign-content: space-evenly;\n}\n.QMZYbgLtRRMSy1L_QsVDW {\n\tbackground: #34495e;\n\tpadding: 0.1em;\n\tmargin: .2em;\n\tborder-radius: 3px;\n\tbox-shadow: 0px 0px 2px 0px;\n}\n._3OJEfvHLzQR-p12eRPRR10 {\n\tbackground: #16a085\n}\n\n._3uK78cDBKn2iNBevGwo7eQ {\n\ttransform: translateX(0);\n}\n.gKIxoGeOtL1yl9pCn6izv {\n\ttransform: translateX(-100%);\n}\n\n._33148EpZsknSMOL-N4WJTt {\n\twidth: 1em;\n\theight: 1em;\n}\n\n._33148EpZsknSMOL-N4WJTt path,\n._33148EpZsknSMOL-N4WJTt polygon,\n._33148EpZsknSMOL-N4WJTt rect {\n  fill: #fff;\n}\n\n._33148EpZsknSMOL-N4WJTt circle {\n  stroke: #fff;\n  stroke-width: 1;\n}",
      ""
    ]),
      (t.locals = {
        container: "zvQGdbOZ5I-wY4r33-ebS",
        collapse: "_2aIeBjrSUdVni7as-s8s-8",
        Select: "_1jv38p3lxcGPjr_ugalaf0",
        Option: "QMZYbgLtRRMSy1L_QsVDW",
        Selected: "_3OJEfvHLzQR-p12eRPRR10",
        Open: "_3uK78cDBKn2iNBevGwo7eQ",
        Close: "gKIxoGeOtL1yl9pCn6izv",
        svg: "_33148EpZsknSMOL-N4WJTt"
      }),
      (e.exports = t);
  },
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = (function(e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var i =
                    ((a = r),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(u, " */")),
                  o = r.sources.map(function(e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n]
                  .concat(o)
                  .concat([i])
                  .join("\n");
              }
              var a, c, u;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function(e, n, r) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (r)
            for (var o = 0; o < this.length; o++) {
              var a = this[o][0];
              null != a && (i[a] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var u = [].concat(e[c]);
            (r && i[u[0]]) ||
              (n &&
                (u[2]
                  ? (u[2] = "".concat(n, " and ").concat(u[2]))
                  : (u[2] = n)),
              t.push(u));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = n(1),
      o = (r = i) && r.__esModule ? r : { default: r },
      a = n(92);
    t.default = function() {
      var e = (0, i.useRef)(null);
      return (
        (0, a.useSwipe)(e, {
          onSwipeUp: function() {
            return (e.current.style.background = "red");
          },
          onSwipeDown: function() {
            return (e.current.style.background = "green");
          },
          onSwipeLeft: function() {
            return (e.current.style.background = "blue");
          },
          onSwipeRight: function() {
            return (e.current.style.background = "black");
          }
        }),
        o.default.createElement("div", {
          ref: e,
          style: {
            height: "100vh",
            background: "red",
            transition: ".3s all ease-in-out"
          }
        })
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(1),
      i = a(r),
      o = a(n(137));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = {
      input: {
        fontSize: "1.2em",
        padding: "10px",
        border: "2px solid #79afde"
      },
      button: {
        display: "inline",
        padding: "10px",
        margin: "5px",
        background: "white",
        border: "2px solid #79afde"
      }
    };
    t.default = function() {
      var e = (0, r.useRef)(null),
        t = (0, o.default)("example"),
        n = t.value,
        a = t.set,
        u = t.remove;
      return i.default.createElement(
        "div",
        { id: "localStorage" },
        i.default.createElement(
          "span",
          { style: { display: "block", textAlign: "center" } },
          n
        ),
        i.default.createElement("input", {
          style: c.input,
          type: "text",
          ref: e
        }),
        i.default.createElement(
          "div",
          { style: { textAlign: "center" } },
          i.default.createElement("input", {
            style: c.button,
            onClick: function() {
              a(e.current.value);
            },
            type: "button",
            value: n ? "update" : "set"
          }),
          i.default.createElement("input", {
            style: c.button,
            onClick: function() {
              u();
            },
            type: "button",
            value: "remove"
          })
        )
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1),
      o = c(i),
      a = c(n(135));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function() {
      var e = (0, a.default)(console.log),
        t = r(e, 3),
        n = t[0],
        c = t[1],
        u = t[2];
      return (
        (0, i.useEffect)(
          function() {
            console.log({ formData: c, errors: u });
          },
          [c, u]
        ),
        o.default.createElement(
          "form",
          { ref: n },
          o.default.createElement("input", {
            name: "test",
            required: !0,
            type: "text"
          }),
          o.default.createElement("input", {
            type: "checkbox",
            name: "ee",
            required: !0
          }),
          o.default.createElement("button", { type: "submit", value: "" })
        )
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = o(n(1)),
      i = o(n(139));
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function() {
      var e = (0, i.default)(),
        t = e.setPortal,
        n = e.setTrigger;
      return r.default.createElement(
        r.default.Fragment,
        null,
        r.default.createElement(
          "span",
          {
            style: {
              padding: "10px",
              fontSize: "1.3em",
              background: "#fa8",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              cursor: "pointer"
            },
            ref: n
          },
          "OPEN"
        ),
        r.default.createElement(
          "div",
          {
            style: {
              width: "50vw",
              padding: "30vh",
              background: "#af6",
              textAlign: "center"
            },
            ref: t
          },
          "usePortal();"
        )
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function(e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function(e, t) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, c = e[Symbol.iterator]();
                !(r = (a = c.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !r && c.return && c.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      i = n(1),
      o = c(i),
      a = c(n(138));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = function() {
      return o.default.createElement("img", {
        src: "https://samherbert.net/svg-loaders/svg-loaders/puff.svg"
      });
    };
    t.default = function() {
      var e = (0, i.useState)(!1),
        t = r(e, 2),
        n = t[0],
        c = t[1],
        s = (0, a.default)(n, u);
      return o.default.createElement(
        o.default.Fragment,
        null,
        o.default.createElement(
          "button",
          {
            onClick: function() {
              return c(function(e) {
                return !e;
              });
            }
          },
          "SWITCH"
        ),
        o.default.createElement("div", {
          style: {
            background: "#eee",
            width: "50vw",
            height: "50vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          },
          ref: s
        })
      );
    };
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      i = n(1),
      o = (r = i) && r.__esModule ? r : { default: r },
      a = n(92);
    t.default = function() {
      var e = (0, i.useRef)(null);
      return (
        (0, a.useScrollAnimation)(),
        o.default.createElement(
          "div",
          { style: { width: "100vw", height: "100vh" }, ref: e },
          o.default.createElement(
            "div",
            { style: { height: "100vh", background: "#e0f" } },
            "1"
          ),
          o.default.createElement(
            "div",
            { style: { height: "100vh", background: "#fae" } },
            "2"
          ),
          o.default.createElement(
            "div",
            { style: { height: "100vh", background: "#0ee" } },
            "3"
          )
        )
      );
    };
  },
  function(e, t, n) {
    "use strict";
    n.r(t);
    var r = {};
    n.r(r),
      n.d(r, "shimGetUserMedia", function() {
        return S;
      }),
      n.d(r, "shimGetDisplayMedia", function() {
        return E;
      }),
      n.d(r, "shimMediaStream", function() {
        return T;
      }),
      n.d(r, "shimOnTrack", function() {
        return x;
      }),
      n.d(r, "shimGetSendersWithDtmf", function() {
        return C;
      }),
      n.d(r, "shimGetStats", function() {
        return k;
      }),
      n.d(r, "shimSenderReceiverGetStats", function() {
        return _;
      }),
      n.d(r, "shimAddTrackRemoveTrackWithNative", function() {
        return P;
      }),
      n.d(r, "shimAddTrackRemoveTrack", function() {
        return R;
      }),
      n.d(r, "shimPeerConnection", function() {
        return O;
      }),
      n.d(r, "fixNegotiationNeeded", function() {
        return M;
      });
    var i = {};
    n.r(i),
      n.d(i, "shimGetUserMedia", function() {
        return N;
      }),
      n.d(i, "shimGetDisplayMedia", function() {
        return A;
      }),
      n.d(i, "shimPeerConnection", function() {
        return D;
      }),
      n.d(i, "shimReplaceTrack", function() {
        return j;
      });
    var o = {};
    n.r(o),
      n.d(o, "shimGetUserMedia", function() {
        return F;
      }),
      n.d(o, "shimGetDisplayMedia", function() {
        return U;
      }),
      n.d(o, "shimOnTrack", function() {
        return z;
      }),
      n.d(o, "shimPeerConnection", function() {
        return W;
      }),
      n.d(o, "shimSenderGetStats", function() {
        return V;
      }),
      n.d(o, "shimReceiverGetStats", function() {
        return B;
      }),
      n.d(o, "shimRemoveStream", function() {
        return G;
      }),
      n.d(o, "shimRTCDataChannel", function() {
        return $;
      }),
      n.d(o, "shimAddTransceiver", function() {
        return H;
      }),
      n.d(o, "shimCreateOffer", function() {
        return K;
      }),
      n.d(o, "shimCreateAnswer", function() {
        return Q;
      });
    var a = {};
    n.r(a),
      n.d(a, "shimLocalStreamsAPI", function() {
        return q;
      }),
      n.d(a, "shimRemoteStreamsAPI", function() {
        return Y;
      }),
      n.d(a, "shimCallbacksAPI", function() {
        return J;
      }),
      n.d(a, "shimGetUserMedia", function() {
        return X;
      }),
      n.d(a, "shimConstraints", function() {
        return Z;
      }),
      n.d(a, "shimRTCIceServerUrls", function() {
        return ee;
      }),
      n.d(a, "shimTrackEventTransceiver", function() {
        return te;
      }),
      n.d(a, "shimCreateOfferLegacy", function() {
        return ne;
      });
    var c = {};
    n.r(c),
      n.d(c, "shimRTCIceCandidate", function() {
        return oe;
      }),
      n.d(c, "shimMaxMessageSize", function() {
        return ae;
      }),
      n.d(c, "shimSendThrowTypeError", function() {
        return ce;
      }),
      n.d(c, "shimConnectionState", function() {
        return ue;
      }),
      n.d(c, "removeAllowExtmapMixed", function() {
        return se;
      });
    let u = !0,
      s = !0;
    function l(e, t, n) {
      const r = e.match(t);
      return r && r.length >= n && parseInt(r[n], 10);
    }
    function f(e, t, n) {
      if (!e.RTCPeerConnection) return;
      const r = e.RTCPeerConnection.prototype,
        i = r.addEventListener;
      r.addEventListener = function(e, r) {
        if (e !== t) return i.apply(this, arguments);
        const o = e => {
          const t = n(e);
          t && r(t);
        };
        return (
          (this._eventMap = this._eventMap || {}),
          (this._eventMap[r] = o),
          i.apply(this, [e, o])
        );
      };
      const o = r.removeEventListener;
      (r.removeEventListener = function(e, n) {
        if (e !== t || !this._eventMap || !this._eventMap[n])
          return o.apply(this, arguments);
        const r = this._eventMap[n];
        return delete this._eventMap[n], o.apply(this, [e, r]);
      }),
        Object.defineProperty(r, "on" + t, {
          get() {
            return this["_on" + t];
          },
          set(e) {
            this["_on" + t] &&
              (this.removeEventListener(t, this["_on" + t]),
              delete this["_on" + t]),
              e && this.addEventListener(t, (this["_on" + t] = e));
          },
          enumerable: !0,
          configurable: !0
        });
    }
    function d(e) {
      return "boolean" != typeof e
        ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
        : ((u = e),
          e ? "adapter.js logging disabled" : "adapter.js logging enabled");
    }
    function p(e) {
      return "boolean" != typeof e
        ? new Error("Argument type: " + typeof e + ". Please use a boolean.")
        : ((s = !e),
          "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"));
    }
    function h() {
      if ("object" == typeof window) {
        if (u) return;
        "undefined" != typeof console &&
          "function" == typeof console.log &&
          console.log.apply(console, arguments);
      }
    }
    function v(e, t) {
      s && console.warn(e + " is deprecated, please use " + t + " instead.");
    }
    function m(e) {
      const { navigator: t } = e,
        n = { browser: null, version: null };
      if (void 0 === e || !e.navigator)
        return (n.browser = "Not a browser."), n;
      if (t.mozGetUserMedia)
        (n.browser = "firefox"),
          (n.version = l(t.userAgent, /Firefox\/(\d+)\./, 1));
      else if (
        t.webkitGetUserMedia ||
        (!1 === e.isSecureContext &&
          e.webkitRTCPeerConnection &&
          !e.RTCIceGatherer)
      )
        (n.browser = "chrome"),
          (n.version = l(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
      else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/))
        (n.browser = "edge"),
          (n.version = l(t.userAgent, /Edge\/(\d+).(\d+)$/, 2));
      else {
        if (!e.RTCPeerConnection || !t.userAgent.match(/AppleWebKit\/(\d+)\./))
          return (n.browser = "Not a supported browser."), n;
        (n.browser = "safari"),
          (n.version = l(t.userAgent, /AppleWebKit\/(\d+)\./, 1)),
          (n.supportsUnifiedPlan =
            e.RTCRtpTransceiver &&
            "currentDirection" in e.RTCRtpTransceiver.prototype);
      }
      return n;
    }
    function y(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function g(e) {
      return y(e)
        ? Object.keys(e).reduce(function(t, n) {
            const r = y(e[n]),
              i = r ? g(e[n]) : e[n],
              o = r && !Object.keys(i).length;
            return void 0 === i || o ? t : Object.assign(t, { [n]: i });
          }, {})
        : e;
    }
    function b(e, t, n) {
      const r = n ? "outbound-rtp" : "inbound-rtp",
        i = new Map();
      if (null === t) return i;
      const o = [];
      return (
        e.forEach(e => {
          "track" === e.type && e.trackIdentifier === t.id && o.push(e);
        }),
        o.forEach(t => {
          e.forEach(n => {
            n.type === r &&
              n.trackId === t.id &&
              (function e(t, n, r) {
                n &&
                  !r.has(n.id) &&
                  (r.set(n.id, n),
                  Object.keys(n).forEach(i => {
                    i.endsWith("Id")
                      ? e(t, t.get(n[i]), r)
                      : i.endsWith("Ids") &&
                        n[i].forEach(n => {
                          e(t, t.get(n), r);
                        });
                  }));
              })(e, n, i);
          });
        }),
        i
      );
    }
    const w = h;
    function S(e) {
      const t = e && e.navigator;
      if (!t.mediaDevices) return;
      const n = m(e),
        r = function(e) {
          if ("object" != typeof e || e.mandatory || e.optional) return e;
          const t = {};
          return (
            Object.keys(e).forEach(n => {
              if ("require" === n || "advanced" === n || "mediaSource" === n)
                return;
              const r = "object" == typeof e[n] ? e[n] : { ideal: e[n] };
              void 0 !== r.exact &&
                "number" == typeof r.exact &&
                (r.min = r.max = r.exact);
              const i = function(e, t) {
                return e
                  ? e + t.charAt(0).toUpperCase() + t.slice(1)
                  : "deviceId" === t
                  ? "sourceId"
                  : t;
              };
              if (void 0 !== r.ideal) {
                t.optional = t.optional || [];
                let e = {};
                "number" == typeof r.ideal
                  ? ((e[i("min", n)] = r.ideal),
                    t.optional.push(e),
                    (e = {}),
                    (e[i("max", n)] = r.ideal),
                    t.optional.push(e))
                  : ((e[i("", n)] = r.ideal), t.optional.push(e));
              }
              void 0 !== r.exact && "number" != typeof r.exact
                ? ((t.mandatory = t.mandatory || {}),
                  (t.mandatory[i("", n)] = r.exact))
                : ["min", "max"].forEach(e => {
                    void 0 !== r[e] &&
                      ((t.mandatory = t.mandatory || {}),
                      (t.mandatory[i(e, n)] = r[e]));
                  });
            }),
            e.advanced && (t.optional = (t.optional || []).concat(e.advanced)),
            t
          );
        },
        i = function(e, i) {
          if (n.version >= 61) return i(e);
          if (
            (e = JSON.parse(JSON.stringify(e))) &&
            "object" == typeof e.audio
          ) {
            const t = function(e, t, n) {
              t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
            };
            t(
              (e = JSON.parse(JSON.stringify(e))).audio,
              "autoGainControl",
              "googAutoGainControl"
            ),
              t(e.audio, "noiseSuppression", "googNoiseSuppression"),
              (e.audio = r(e.audio));
          }
          if (e && "object" == typeof e.video) {
            let o = e.video.facingMode;
            o = o && ("object" == typeof o ? o : { ideal: o });
            const a = n.version < 66;
            if (
              o &&
              ("user" === o.exact ||
                "environment" === o.exact ||
                "user" === o.ideal ||
                "environment" === o.ideal) &&
              (!t.mediaDevices.getSupportedConstraints ||
                !t.mediaDevices.getSupportedConstraints().facingMode ||
                a)
            ) {
              let n;
              if (
                (delete e.video.facingMode,
                "environment" === o.exact || "environment" === o.ideal
                  ? (n = ["back", "rear"])
                  : ("user" !== o.exact && "user" !== o.ideal) ||
                    (n = ["front"]),
                n)
              )
                return t.mediaDevices.enumerateDevices().then(t => {
                  let a = (t = t.filter(e => "videoinput" === e.kind)).find(e =>
                    n.some(t => e.label.toLowerCase().includes(t))
                  );
                  return (
                    !a &&
                      t.length &&
                      n.includes("back") &&
                      (a = t[t.length - 1]),
                    a &&
                      (e.video.deviceId = o.exact
                        ? { exact: a.deviceId }
                        : { ideal: a.deviceId }),
                    (e.video = r(e.video)),
                    w("chrome: " + JSON.stringify(e)),
                    i(e)
                  );
                });
            }
            e.video = r(e.video);
          }
          return w("chrome: " + JSON.stringify(e)), i(e);
        },
        o = function(e) {
          return n.version >= 64
            ? e
            : {
                name:
                  {
                    PermissionDeniedError: "NotAllowedError",
                    PermissionDismissedError: "NotAllowedError",
                    InvalidStateError: "NotAllowedError",
                    DevicesNotFoundError: "NotFoundError",
                    ConstraintNotSatisfiedError: "OverconstrainedError",
                    TrackStartError: "NotReadableError",
                    MediaDeviceFailedDueToShutdown: "NotAllowedError",
                    MediaDeviceKillSwitchOn: "NotAllowedError",
                    TabCaptureError: "AbortError",
                    ScreenCaptureError: "AbortError",
                    DeviceCaptureError: "AbortError"
                  }[e.name] || e.name,
                message: e.message,
                constraint: e.constraint || e.constraintName,
                toString() {
                  return this.name + (this.message && ": ") + this.message;
                }
              };
        };
      if (
        ((t.getUserMedia = function(e, n, r) {
          i(e, e => {
            t.webkitGetUserMedia(e, n, e => {
              r && r(o(e));
            });
          });
        }.bind(t)),
        t.mediaDevices.getUserMedia)
      ) {
        const e = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
        t.mediaDevices.getUserMedia = function(t) {
          return i(t, t =>
            e(t).then(
              e => {
                if (
                  (t.audio && !e.getAudioTracks().length) ||
                  (t.video && !e.getVideoTracks().length)
                )
                  throw (e.getTracks().forEach(e => {
                    e.stop();
                  }),
                  new DOMException("", "NotFoundError"));
                return e;
              },
              e => Promise.reject(o(e))
            )
          );
        };
      }
    }
    function E(e, t) {
      (e.navigator.mediaDevices &&
        "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices &&
          ("function" == typeof t
            ? (e.navigator.mediaDevices.getDisplayMedia = function(n) {
                return t(n).then(t => {
                  const r = n.video && n.video.width,
                    i = n.video && n.video.height,
                    o = n.video && n.video.frameRate;
                  return (
                    (n.video = {
                      mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: t,
                        maxFrameRate: o || 3
                      }
                    }),
                    r && (n.video.mandatory.maxWidth = r),
                    i && (n.video.mandatory.maxHeight = i),
                    e.navigator.mediaDevices.getUserMedia(n)
                  );
                });
              })
            : console.error(
                "shimGetDisplayMedia: getSourceId argument is not a function"
              )));
    }
    function T(e) {
      e.MediaStream = e.MediaStream || e.webkitMediaStream;
    }
    function x(e) {
      if (
        "object" != typeof e ||
        !e.RTCPeerConnection ||
        "ontrack" in e.RTCPeerConnection.prototype
      )
        f(
          e,
          "track",
          e => (
            e.transceiver ||
              Object.defineProperty(e, "transceiver", {
                value: { receiver: e.receiver }
              }),
            e
          )
        );
      else {
        Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
          get() {
            return this._ontrack;
          },
          set(e) {
            this._ontrack && this.removeEventListener("track", this._ontrack),
              this.addEventListener("track", (this._ontrack = e));
          },
          enumerable: !0,
          configurable: !0
        });
        const t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
          return (
            this._ontrackpoly ||
              ((this._ontrackpoly = t => {
                t.stream.addEventListener("addtrack", n => {
                  let r;
                  r = e.RTCPeerConnection.prototype.getReceivers
                    ? this.getReceivers().find(
                        e => e.track && e.track.id === n.track.id
                      )
                    : { track: n.track };
                  const i = new Event("track");
                  (i.track = n.track),
                    (i.receiver = r),
                    (i.transceiver = { receiver: r }),
                    (i.streams = [t.stream]),
                    this.dispatchEvent(i);
                }),
                  t.stream.getTracks().forEach(n => {
                    let r;
                    r = e.RTCPeerConnection.prototype.getReceivers
                      ? this.getReceivers().find(
                          e => e.track && e.track.id === n.id
                        )
                      : { track: n };
                    const i = new Event("track");
                    (i.track = n),
                      (i.receiver = r),
                      (i.transceiver = { receiver: r }),
                      (i.streams = [t.stream]),
                      this.dispatchEvent(i);
                  });
              }),
              this.addEventListener("addstream", this._ontrackpoly)),
            t.apply(this, arguments)
          );
        };
      }
    }
    function C(e) {
      if (
        "object" == typeof e &&
        e.RTCPeerConnection &&
        !("getSenders" in e.RTCPeerConnection.prototype) &&
        "createDTMFSender" in e.RTCPeerConnection.prototype
      ) {
        const t = function(e, t) {
          return {
            track: t,
            get dtmf() {
              return (
                void 0 === this._dtmf &&
                  ("audio" === t.kind
                    ? (this._dtmf = e.createDTMFSender(t))
                    : (this._dtmf = null)),
                this._dtmf
              );
            },
            _pc: e
          };
        };
        if (!e.RTCPeerConnection.prototype.getSenders) {
          e.RTCPeerConnection.prototype.getSenders = function() {
            return (this._senders = this._senders || []), this._senders.slice();
          };
          const n = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addTrack = function(e, r) {
            let i = n.apply(this, arguments);
            return i || ((i = t(this, e)), this._senders.push(i)), i;
          };
          const r = e.RTCPeerConnection.prototype.removeTrack;
          e.RTCPeerConnection.prototype.removeTrack = function(e) {
            r.apply(this, arguments);
            const t = this._senders.indexOf(e);
            -1 !== t && this._senders.splice(t, 1);
          };
        }
        const n = e.RTCPeerConnection.prototype.addStream;
        e.RTCPeerConnection.prototype.addStream = function(e) {
          (this._senders = this._senders || []),
            n.apply(this, [e]),
            e.getTracks().forEach(e => {
              this._senders.push(t(this, e));
            });
        };
        const r = e.RTCPeerConnection.prototype.removeStream;
        e.RTCPeerConnection.prototype.removeStream = function(e) {
          (this._senders = this._senders || []),
            r.apply(this, [e]),
            e.getTracks().forEach(e => {
              const t = this._senders.find(t => t.track === e);
              t && this._senders.splice(this._senders.indexOf(t), 1);
            });
        };
      } else if (
        "object" == typeof e &&
        e.RTCPeerConnection &&
        "getSenders" in e.RTCPeerConnection.prototype &&
        "createDTMFSender" in e.RTCPeerConnection.prototype &&
        e.RTCRtpSender &&
        !("dtmf" in e.RTCRtpSender.prototype)
      ) {
        const t = e.RTCPeerConnection.prototype.getSenders;
        (e.RTCPeerConnection.prototype.getSenders = function() {
          const e = t.apply(this, []);
          return e.forEach(e => (e._pc = this)), e;
        }),
          Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
            get() {
              return (
                void 0 === this._dtmf &&
                  ("audio" === this.track.kind
                    ? (this._dtmf = this._pc.createDTMFSender(this.track))
                    : (this._dtmf = null)),
                this._dtmf
              );
            }
          });
      }
    }
    function k(e) {
      if (!e.RTCPeerConnection) return;
      const t = e.RTCPeerConnection.prototype.getStats;
      e.RTCPeerConnection.prototype.getStats = function() {
        const [e, n, r] = arguments;
        if (arguments.length > 0 && "function" == typeof e)
          return t.apply(this, arguments);
        if (
          0 === t.length &&
          (0 === arguments.length || "function" != typeof e)
        )
          return t.apply(this, []);
        const i = function(e) {
            const t = {};
            return (
              e.result().forEach(e => {
                const n = {
                  id: e.id,
                  timestamp: e.timestamp,
                  type:
                    {
                      localcandidate: "local-candidate",
                      remotecandidate: "remote-candidate"
                    }[e.type] || e.type
                };
                e.names().forEach(t => {
                  n[t] = e.stat(t);
                }),
                  (t[n.id] = n);
              }),
              t
            );
          },
          o = function(e) {
            return new Map(Object.keys(e).map(t => [t, e[t]]));
          };
        if (arguments.length >= 2) {
          const r = function(e) {
            n(o(i(e)));
          };
          return t.apply(this, [r, e]);
        }
        return new Promise((e, n) => {
          t.apply(this, [
            function(t) {
              e(o(i(t)));
            },
            n
          ]);
        }).then(n, r);
      };
    }
    function _(e) {
      if (
        !(
          "object" == typeof e &&
          e.RTCPeerConnection &&
          e.RTCRtpSender &&
          e.RTCRtpReceiver
        )
      )
        return;
      if (!("getStats" in e.RTCRtpSender.prototype)) {
        const t = e.RTCPeerConnection.prototype.getSenders;
        t &&
          (e.RTCPeerConnection.prototype.getSenders = function() {
            const e = t.apply(this, []);
            return e.forEach(e => (e._pc = this)), e;
          });
        const n = e.RTCPeerConnection.prototype.addTrack;
        n &&
          (e.RTCPeerConnection.prototype.addTrack = function() {
            const e = n.apply(this, arguments);
            return (e._pc = this), e;
          }),
          (e.RTCRtpSender.prototype.getStats = function() {
            const e = this;
            return this._pc.getStats().then(t => b(t, e.track, !0));
          });
      }
      if (!("getStats" in e.RTCRtpReceiver.prototype)) {
        const t = e.RTCPeerConnection.prototype.getReceivers;
        t &&
          (e.RTCPeerConnection.prototype.getReceivers = function() {
            const e = t.apply(this, []);
            return e.forEach(e => (e._pc = this)), e;
          }),
          f(e, "track", e => ((e.receiver._pc = e.srcElement), e)),
          (e.RTCRtpReceiver.prototype.getStats = function() {
            const e = this;
            return this._pc.getStats().then(t => b(t, e.track, !1));
          });
      }
      if (
        !(
          "getStats" in e.RTCRtpSender.prototype &&
          "getStats" in e.RTCRtpReceiver.prototype
        )
      )
        return;
      const t = e.RTCPeerConnection.prototype.getStats;
      e.RTCPeerConnection.prototype.getStats = function() {
        if (
          arguments.length > 0 &&
          arguments[0] instanceof e.MediaStreamTrack
        ) {
          const e = arguments[0];
          let t, n, r;
          return (
            this.getSenders().forEach(n => {
              n.track === e && (t ? (r = !0) : (t = n));
            }),
            this.getReceivers().forEach(
              t => (t.track === e && (n ? (r = !0) : (n = t)), t.track === e)
            ),
            r || (t && n)
              ? Promise.reject(
                  new DOMException(
                    "There are more than one sender or receiver for the track.",
                    "InvalidAccessError"
                  )
                )
              : t
              ? t.getStats()
              : n
              ? n.getStats()
              : Promise.reject(
                  new DOMException(
                    "There is no sender or receiver for the track.",
                    "InvalidAccessError"
                  )
                )
          );
        }
        return t.apply(this, arguments);
      };
    }
    function P(e) {
      e.RTCPeerConnection.prototype.getLocalStreams = function() {
        return (
          (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
          Object.keys(this._shimmedLocalStreams).map(
            e => this._shimmedLocalStreams[e][0]
          )
        );
      };
      const t = e.RTCPeerConnection.prototype.addTrack;
      e.RTCPeerConnection.prototype.addTrack = function(e, n) {
        if (!n) return t.apply(this, arguments);
        this._shimmedLocalStreams = this._shimmedLocalStreams || {};
        const r = t.apply(this, arguments);
        return (
          this._shimmedLocalStreams[n.id]
            ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) &&
              this._shimmedLocalStreams[n.id].push(r)
            : (this._shimmedLocalStreams[n.id] = [n, r]),
          r
        );
      };
      const n = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function(e) {
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
          e.getTracks().forEach(e => {
            if (this.getSenders().find(t => t.track === e))
              throw new DOMException(
                "Track already exists.",
                "InvalidAccessError"
              );
          });
        const t = this.getSenders();
        n.apply(this, arguments);
        const r = this.getSenders().filter(e => -1 === t.indexOf(e));
        this._shimmedLocalStreams[e.id] = [e].concat(r);
      };
      const r = e.RTCPeerConnection.prototype.removeStream;
      e.RTCPeerConnection.prototype.removeStream = function(e) {
        return (
          (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
          delete this._shimmedLocalStreams[e.id],
          r.apply(this, arguments)
        );
      };
      const i = e.RTCPeerConnection.prototype.removeTrack;
      e.RTCPeerConnection.prototype.removeTrack = function(e) {
        return (
          (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
          e &&
            Object.keys(this._shimmedLocalStreams).forEach(t => {
              const n = this._shimmedLocalStreams[t].indexOf(e);
              -1 !== n && this._shimmedLocalStreams[t].splice(n, 1),
                1 === this._shimmedLocalStreams[t].length &&
                  delete this._shimmedLocalStreams[t];
            }),
          i.apply(this, arguments)
        );
      };
    }
    function R(e) {
      if (!e.RTCPeerConnection) return;
      const t = m(e);
      if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
        return P(e);
      const n = e.RTCPeerConnection.prototype.getLocalStreams;
      e.RTCPeerConnection.prototype.getLocalStreams = function() {
        const e = n.apply(this);
        return (
          (this._reverseStreams = this._reverseStreams || {}),
          e.map(e => this._reverseStreams[e.id])
        );
      };
      const r = e.RTCPeerConnection.prototype.addStream;
      e.RTCPeerConnection.prototype.addStream = function(t) {
        if (
          ((this._streams = this._streams || {}),
          (this._reverseStreams = this._reverseStreams || {}),
          t.getTracks().forEach(e => {
            if (this.getSenders().find(t => t.track === e))
              throw new DOMException(
                "Track already exists.",
                "InvalidAccessError"
              );
          }),
          !this._reverseStreams[t.id])
        ) {
          const n = new e.MediaStream(t.getTracks());
          (this._streams[t.id] = n), (this._reverseStreams[n.id] = t), (t = n);
        }
        r.apply(this, [t]);
      };
      const i = e.RTCPeerConnection.prototype.removeStream;
      function o(e, t) {
        let n = t.sdp;
        return (
          Object.keys(e._reverseStreams || []).forEach(t => {
            const r = e._reverseStreams[t],
              i = e._streams[r.id];
            n = n.replace(new RegExp(i.id, "g"), r.id);
          }),
          new RTCSessionDescription({ type: t.type, sdp: n })
        );
      }
      function a(e, t) {
        let n = t.sdp;
        return (
          Object.keys(e._reverseStreams || []).forEach(t => {
            const r = e._reverseStreams[t],
              i = e._streams[r.id];
            n = n.replace(new RegExp(r.id, "g"), i.id);
          }),
          new RTCSessionDescription({ type: t.type, sdp: n })
        );
      }
      (e.RTCPeerConnection.prototype.removeStream = function(e) {
        (this._streams = this._streams || {}),
          (this._reverseStreams = this._reverseStreams || {}),
          i.apply(this, [this._streams[e.id] || e]),
          delete this._reverseStreams[
            this._streams[e.id] ? this._streams[e.id].id : e.id
          ],
          delete this._streams[e.id];
      }),
        (e.RTCPeerConnection.prototype.addTrack = function(t, n) {
          if ("closed" === this.signalingState)
            throw new DOMException(
              "The RTCPeerConnection's signalingState is 'closed'.",
              "InvalidStateError"
            );
          const r = [].slice.call(arguments, 1);
          if (1 !== r.length || !r[0].getTracks().find(e => e === t))
            throw new DOMException(
              "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
              "NotSupportedError"
            );
          const i = this.getSenders().find(e => e.track === t);
          if (i)
            throw new DOMException(
              "Track already exists.",
              "InvalidAccessError"
            );
          (this._streams = this._streams || {}),
            (this._reverseStreams = this._reverseStreams || {});
          const o = this._streams[n.id];
          if (o)
            o.addTrack(t),
              Promise.resolve().then(() => {
                this.dispatchEvent(new Event("negotiationneeded"));
              });
          else {
            const r = new e.MediaStream([t]);
            (this._streams[n.id] = r),
              (this._reverseStreams[r.id] = n),
              this.addStream(r);
          }
          return this.getSenders().find(e => e.track === t);
        }),
        ["createOffer", "createAnswer"].forEach(function(t) {
          const n = e.RTCPeerConnection.prototype[t],
            r = {
              [t]() {
                const e = arguments;
                return arguments.length && "function" == typeof arguments[0]
                  ? n.apply(this, [
                      t => {
                        const n = o(this, t);
                        e[0].apply(null, [n]);
                      },
                      t => {
                        e[1] && e[1].apply(null, t);
                      },
                      arguments[2]
                    ])
                  : n.apply(this, arguments).then(e => o(this, e));
              }
            };
          e.RTCPeerConnection.prototype[t] = r[t];
        });
      const c = e.RTCPeerConnection.prototype.setLocalDescription;
      e.RTCPeerConnection.prototype.setLocalDescription = function() {
        return arguments.length && arguments[0].type
          ? ((arguments[0] = a(this, arguments[0])), c.apply(this, arguments))
          : c.apply(this, arguments);
      };
      const u = Object.getOwnPropertyDescriptor(
        e.RTCPeerConnection.prototype,
        "localDescription"
      );
      Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
        get() {
          const e = u.get.apply(this);
          return "" === e.type ? e : o(this, e);
        }
      }),
        (e.RTCPeerConnection.prototype.removeTrack = function(e) {
          if ("closed" === this.signalingState)
            throw new DOMException(
              "The RTCPeerConnection's signalingState is 'closed'.",
              "InvalidStateError"
            );
          if (!e._pc)
            throw new DOMException(
              "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
              "TypeError"
            );
          if (!(e._pc === this))
            throw new DOMException(
              "Sender was not created by this connection.",
              "InvalidAccessError"
            );
          let t;
          (this._streams = this._streams || {}),
            Object.keys(this._streams).forEach(n => {
              this._streams[n].getTracks().find(t => e.track === t) &&
                (t = this._streams[n]);
            }),
            t &&
              (1 === t.getTracks().length
                ? this.removeStream(this._reverseStreams[t.id])
                : t.removeTrack(e.track),
              this.dispatchEvent(new Event("negotiationneeded")));
        });
    }
    function O(e) {
      const t = m(e);
      if (
        (!e.RTCPeerConnection &&
          e.webkitRTCPeerConnection &&
          (e.RTCPeerConnection = e.webkitRTCPeerConnection),
        !e.RTCPeerConnection)
      )
        return;
      const n = 0 === e.RTCPeerConnection.prototype.addIceCandidate.length;
      t.version < 53 &&
        [
          "setLocalDescription",
          "setRemoteDescription",
          "addIceCandidate"
        ].forEach(function(t) {
          const n = e.RTCPeerConnection.prototype[t],
            r = {
              [t]() {
                return (
                  (arguments[0] = new ("addIceCandidate" === t
                    ? e.RTCIceCandidate
                    : e.RTCSessionDescription)(arguments[0])),
                  n.apply(this, arguments)
                );
              }
            };
          e.RTCPeerConnection.prototype[t] = r[t];
        });
      const r = e.RTCPeerConnection.prototype.addIceCandidate;
      e.RTCPeerConnection.prototype.addIceCandidate = function() {
        return n || arguments[0]
          ? t.version < 78 && arguments[0] && "" === arguments[0].candidate
            ? Promise.resolve()
            : r.apply(this, arguments)
          : (arguments[1] && arguments[1].apply(null), Promise.resolve());
      };
    }
    function M(e) {
      f(e, "negotiationneeded", e => {
        if ("stable" === e.target.signalingState) return e;
      });
    }
    var I = n(142),
      L = n.n(I);
    function N(e) {
      const t = e && e.navigator,
        n = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
      t.mediaDevices.getUserMedia = function(e) {
        return n(e).catch(e =>
          Promise.reject(
            (function(e) {
              return {
                name:
                  { PermissionDeniedError: "NotAllowedError" }[e.name] ||
                  e.name,
                message: e.message,
                constraint: e.constraint,
                toString() {
                  return this.name;
                }
              };
            })(e)
          )
        );
      };
    }
    function A(e) {
      "getDisplayMedia" in e.navigator &&
        e.navigator.mediaDevices &&
        ((e.navigator.mediaDevices &&
          "getDisplayMedia" in e.navigator.mediaDevices) ||
          (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(
            e.navigator
          )));
    }
    function D(e) {
      const t = m(e);
      if (
        e.RTCIceGatherer &&
        (e.RTCIceCandidate ||
          (e.RTCIceCandidate = function(e) {
            return e;
          }),
        e.RTCSessionDescription ||
          (e.RTCSessionDescription = function(e) {
            return e;
          }),
        t.version < 15025)
      ) {
        const t = Object.getOwnPropertyDescriptor(
          e.MediaStreamTrack.prototype,
          "enabled"
        );
        Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
          set(e) {
            t.set.call(this, e);
            const n = new Event("enabled");
            (n.enabled = e), this.dispatchEvent(n);
          }
        });
      }
      !e.RTCRtpSender ||
        "dtmf" in e.RTCRtpSender.prototype ||
        Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
          get() {
            return (
              void 0 === this._dtmf &&
                ("audio" === this.track.kind
                  ? (this._dtmf = new e.RTCDtmfSender(this))
                  : "video" === this.track.kind && (this._dtmf = null)),
              this._dtmf
            );
          }
        }),
        e.RTCDtmfSender &&
          !e.RTCDTMFSender &&
          (e.RTCDTMFSender = e.RTCDtmfSender);
      const n = L()(e, t.version);
      (e.RTCPeerConnection = function(e) {
        return (
          e &&
            e.iceServers &&
            ((e.iceServers = (function(e, t) {
              let n = !1;
              return (e = JSON.parse(JSON.stringify(e))).filter(e => {
                if (e && (e.urls || e.url)) {
                  var t = e.urls || e.url;
                  e.url &&
                    !e.urls &&
                    v("RTCIceServer.url", "RTCIceServer.urls");
                  const r = "string" == typeof t;
                  return (
                    r && (t = [t]),
                    (t = t.filter(e => {
                      if (0 === e.indexOf("stun:")) return !1;
                      const t =
                        e.startsWith("turn") &&
                        !e.startsWith("turn:[") &&
                        e.includes("transport=udp");
                      return t && !n ? ((n = !0), !0) : t && !n;
                    })),
                    delete e.url,
                    (e.urls = r ? t[0] : t),
                    !!t.length
                  );
                }
              });
            })(e.iceServers, t.version)),
            h("ICE servers after filtering:", e.iceServers)),
          new n(e)
        );
      }),
        (e.RTCPeerConnection.prototype = n.prototype);
    }
    function j(e) {
      !e.RTCRtpSender ||
        "replaceTrack" in e.RTCRtpSender.prototype ||
        (e.RTCRtpSender.prototype.replaceTrack =
          e.RTCRtpSender.prototype.setTrack);
    }
    function F(e) {
      const t = m(e),
        n = e && e.navigator,
        r = e && e.MediaStreamTrack;
      if (
        ((n.getUserMedia = function(e, t, r) {
          v("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"),
            n.mediaDevices.getUserMedia(e).then(t, r);
        }),
        !(
          t.version > 55 &&
          "autoGainControl" in n.mediaDevices.getSupportedConstraints()
        ))
      ) {
        const e = function(e, t, n) {
            t in e && !(n in e) && ((e[n] = e[t]), delete e[t]);
          },
          t = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
        if (
          ((n.mediaDevices.getUserMedia = function(n) {
            return (
              "object" == typeof n &&
                "object" == typeof n.audio &&
                ((n = JSON.parse(JSON.stringify(n))),
                e(n.audio, "autoGainControl", "mozAutoGainControl"),
                e(n.audio, "noiseSuppression", "mozNoiseSuppression")),
              t(n)
            );
          }),
          r && r.prototype.getSettings)
        ) {
          const t = r.prototype.getSettings;
          r.prototype.getSettings = function() {
            const n = t.apply(this, arguments);
            return (
              e(n, "mozAutoGainControl", "autoGainControl"),
              e(n, "mozNoiseSuppression", "noiseSuppression"),
              n
            );
          };
        }
        if (r && r.prototype.applyConstraints) {
          const t = r.prototype.applyConstraints;
          r.prototype.applyConstraints = function(n) {
            return (
              "audio" === this.kind &&
                "object" == typeof n &&
                ((n = JSON.parse(JSON.stringify(n))),
                e(n, "autoGainControl", "mozAutoGainControl"),
                e(n, "noiseSuppression", "mozNoiseSuppression")),
              t.apply(this, [n])
            );
          };
        }
      }
    }
    function U(e, t) {
      (e.navigator.mediaDevices &&
        "getDisplayMedia" in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices &&
          (e.navigator.mediaDevices.getDisplayMedia = function(n) {
            if (!n || !n.video) {
              const e = new DOMException(
                "getDisplayMedia without video constraints is undefined"
              );
              return (
                (e.name = "NotFoundError"), (e.code = 8), Promise.reject(e)
              );
            }
            return (
              !0 === n.video
                ? (n.video = { mediaSource: t })
                : (n.video.mediaSource = t),
              e.navigator.mediaDevices.getUserMedia(n)
            );
          }));
    }
    function z(e) {
      "object" == typeof e &&
        e.RTCTrackEvent &&
        "receiver" in e.RTCTrackEvent.prototype &&
        !("transceiver" in e.RTCTrackEvent.prototype) &&
        Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
          get() {
            return { receiver: this.receiver };
          }
        });
    }
    function W(e) {
      const t = m(e);
      if (
        "object" != typeof e ||
        (!e.RTCPeerConnection && !e.mozRTCPeerConnection)
      )
        return;
      if (
        (!e.RTCPeerConnection &&
          e.mozRTCPeerConnection &&
          (e.RTCPeerConnection = e.mozRTCPeerConnection),
        t.version < 53 &&
          [
            "setLocalDescription",
            "setRemoteDescription",
            "addIceCandidate"
          ].forEach(function(t) {
            const n = e.RTCPeerConnection.prototype[t],
              r = {
                [t]() {
                  return (
                    (arguments[0] = new ("addIceCandidate" === t
                      ? e.RTCIceCandidate
                      : e.RTCSessionDescription)(arguments[0])),
                    n.apply(this, arguments)
                  );
                }
              };
            e.RTCPeerConnection.prototype[t] = r[t];
          }),
        t.version < 68)
      ) {
        const t = e.RTCPeerConnection.prototype.addIceCandidate;
        e.RTCPeerConnection.prototype.addIceCandidate = function() {
          return arguments[0]
            ? arguments[0] && "" === arguments[0].candidate
              ? Promise.resolve()
              : t.apply(this, arguments)
            : (arguments[1] && arguments[1].apply(null), Promise.resolve());
        };
      }
      const n = {
          inboundrtp: "inbound-rtp",
          outboundrtp: "outbound-rtp",
          candidatepair: "candidate-pair",
          localcandidate: "local-candidate",
          remotecandidate: "remote-candidate"
        },
        r = e.RTCPeerConnection.prototype.getStats;
      e.RTCPeerConnection.prototype.getStats = function() {
        const [e, i, o] = arguments;
        return r
          .apply(this, [e || null])
          .then(e => {
            if (t.version < 53 && !i)
              try {
                e.forEach(e => {
                  e.type = n[e.type] || e.type;
                });
              } catch (t) {
                if ("TypeError" !== t.name) throw t;
                e.forEach((t, r) => {
                  e.set(r, Object.assign({}, t, { type: n[t.type] || t.type }));
                });
              }
            return e;
          })
          .then(i, o);
      };
    }
    function V(e) {
      if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender)
        return;
      if (e.RTCRtpSender && "getStats" in e.RTCRtpSender.prototype) return;
      const t = e.RTCPeerConnection.prototype.getSenders;
      t &&
        (e.RTCPeerConnection.prototype.getSenders = function() {
          const e = t.apply(this, []);
          return e.forEach(e => (e._pc = this)), e;
        });
      const n = e.RTCPeerConnection.prototype.addTrack;
      n &&
        (e.RTCPeerConnection.prototype.addTrack = function() {
          const e = n.apply(this, arguments);
          return (e._pc = this), e;
        }),
        (e.RTCRtpSender.prototype.getStats = function() {
          return this.track
            ? this._pc.getStats(this.track)
            : Promise.resolve(new Map());
        });
    }
    function B(e) {
      if ("object" != typeof e || !e.RTCPeerConnection || !e.RTCRtpSender)
        return;
      if (e.RTCRtpSender && "getStats" in e.RTCRtpReceiver.prototype) return;
      const t = e.RTCPeerConnection.prototype.getReceivers;
      t &&
        (e.RTCPeerConnection.prototype.getReceivers = function() {
          const e = t.apply(this, []);
          return e.forEach(e => (e._pc = this)), e;
        }),
        f(e, "track", e => ((e.receiver._pc = e.srcElement), e)),
        (e.RTCRtpReceiver.prototype.getStats = function() {
          return this._pc.getStats(this.track);
        });
    }
    function G(e) {
      !e.RTCPeerConnection ||
        "removeStream" in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.removeStream = function(e) {
          v("removeStream", "removeTrack"),
            this.getSenders().forEach(t => {
              t.track && e.getTracks().includes(t.track) && this.removeTrack(t);
            });
        });
    }
    function $(e) {
      e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel);
    }
    function H(e) {
      if ("object" != typeof e || !e.RTCPeerConnection) return;
      const t = e.RTCPeerConnection.prototype.addTransceiver;
      t &&
        (e.RTCPeerConnection.prototype.addTransceiver = function() {
          this.setParametersPromises = [];
          const e = arguments[1],
            n = e && "sendEncodings" in e;
          n &&
            e.sendEncodings.forEach(e => {
              if ("rid" in e) {
                if (!/^[a-z0-9]{0,16}$/i.test(e.rid))
                  throw new TypeError("Invalid RID value provided.");
              }
              if (
                "scaleResolutionDownBy" in e &&
                !(parseFloat(e.scaleResolutionDownBy) >= 1)
              )
                throw new RangeError("scale_resolution_down_by must be >= 1.0");
              if ("maxFramerate" in e && !(parseFloat(e.maxFramerate) >= 0))
                throw new RangeError("max_framerate must be >= 0.0");
            });
          const r = t.apply(this, arguments);
          if (n) {
            const { sender: t } = r,
              n = t.getParameters();
            "encodings" in n ||
              ((n.encodings = e.sendEncodings),
              this.setParametersPromises.push(
                t.setParameters(n).catch(() => {})
              ));
          }
          return r;
        });
    }
    function K(e) {
      if ("object" != typeof e || !e.RTCPeerConnection) return;
      const t = e.RTCPeerConnection.prototype.createOffer;
      e.RTCPeerConnection.prototype.createOffer = function() {
        return this.setParametersPromises && this.setParametersPromises.length
          ? Promise.all(this.setParametersPromises)
              .then(() => t.apply(this, arguments))
              .finally(() => {
                this.setParametersPromises = [];
              })
          : t.apply(this, arguments);
      };
    }
    function Q(e) {
      if ("object" != typeof e || !e.RTCPeerConnection) return;
      const t = e.RTCPeerConnection.prototype.createAnswer;
      e.RTCPeerConnection.prototype.createAnswer = function() {
        return this.setParametersPromises && this.setParametersPromises.length
          ? Promise.all(this.setParametersPromises)
              .then(() => t.apply(this, arguments))
              .finally(() => {
                this.setParametersPromises = [];
              })
          : t.apply(this, arguments);
      };
    }
    function q(e) {
      if ("object" == typeof e && e.RTCPeerConnection) {
        if (
          ("getLocalStreams" in e.RTCPeerConnection.prototype ||
            (e.RTCPeerConnection.prototype.getLocalStreams = function() {
              return (
                this._localStreams || (this._localStreams = []),
                this._localStreams
              );
            }),
          !("addStream" in e.RTCPeerConnection.prototype))
        ) {
          const t = e.RTCPeerConnection.prototype.addTrack;
          (e.RTCPeerConnection.prototype.addStream = function(e) {
            this._localStreams || (this._localStreams = []),
              this._localStreams.includes(e) || this._localStreams.push(e),
              e.getAudioTracks().forEach(n => t.call(this, n, e)),
              e.getVideoTracks().forEach(n => t.call(this, n, e));
          }),
            (e.RTCPeerConnection.prototype.addTrack = function(e) {
              const n = arguments[1];
              return (
                n &&
                  (this._localStreams
                    ? this._localStreams.includes(n) ||
                      this._localStreams.push(n)
                    : (this._localStreams = [n])),
                t.apply(this, arguments)
              );
            });
        }
        "removeStream" in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.removeStream = function(e) {
            this._localStreams || (this._localStreams = []);
            const t = this._localStreams.indexOf(e);
            if (-1 === t) return;
            this._localStreams.splice(t, 1);
            const n = e.getTracks();
            this.getSenders().forEach(e => {
              n.includes(e.track) && this.removeTrack(e);
            });
          });
      }
    }
    function Y(e) {
      if (
        "object" == typeof e &&
        e.RTCPeerConnection &&
        ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.getRemoteStreams = function() {
            return this._remoteStreams ? this._remoteStreams : [];
          }),
        !("onaddstream" in e.RTCPeerConnection.prototype))
      ) {
        Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
          get() {
            return this._onaddstream;
          },
          set(e) {
            this._onaddstream &&
              (this.removeEventListener("addstream", this._onaddstream),
              this.removeEventListener("track", this._onaddstreampoly)),
              this.addEventListener("addstream", (this._onaddstream = e)),
              this.addEventListener(
                "track",
                (this._onaddstreampoly = e => {
                  e.streams.forEach(e => {
                    if (
                      (this._remoteStreams || (this._remoteStreams = []),
                      this._remoteStreams.includes(e))
                    )
                      return;
                    this._remoteStreams.push(e);
                    const t = new Event("addstream");
                    (t.stream = e), this.dispatchEvent(t);
                  });
                })
              );
          }
        });
        const t = e.RTCPeerConnection.prototype.setRemoteDescription;
        e.RTCPeerConnection.prototype.setRemoteDescription = function() {
          const e = this;
          return (
            this._onaddstreampoly ||
              this.addEventListener(
                "track",
                (this._onaddstreampoly = function(t) {
                  t.streams.forEach(t => {
                    if (
                      (e._remoteStreams || (e._remoteStreams = []),
                      e._remoteStreams.indexOf(t) >= 0)
                    )
                      return;
                    e._remoteStreams.push(t);
                    const n = new Event("addstream");
                    (n.stream = t), e.dispatchEvent(n);
                  });
                })
              ),
            t.apply(e, arguments)
          );
        };
      }
    }
    function J(e) {
      if ("object" != typeof e || !e.RTCPeerConnection) return;
      const t = e.RTCPeerConnection.prototype,
        n = t.createOffer,
        r = t.createAnswer,
        i = t.setLocalDescription,
        o = t.setRemoteDescription,
        a = t.addIceCandidate;
      (t.createOffer = function(e, t) {
        const r = arguments.length >= 2 ? arguments[2] : arguments[0],
          i = n.apply(this, [r]);
        return t ? (i.then(e, t), Promise.resolve()) : i;
      }),
        (t.createAnswer = function(e, t) {
          const n = arguments.length >= 2 ? arguments[2] : arguments[0],
            i = r.apply(this, [n]);
          return t ? (i.then(e, t), Promise.resolve()) : i;
        });
      let c = function(e, t, n) {
        const r = i.apply(this, [e]);
        return n ? (r.then(t, n), Promise.resolve()) : r;
      };
      (t.setLocalDescription = c),
        (c = function(e, t, n) {
          const r = o.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }),
        (t.setRemoteDescription = c),
        (c = function(e, t, n) {
          const r = a.apply(this, [e]);
          return n ? (r.then(t, n), Promise.resolve()) : r;
        }),
        (t.addIceCandidate = c);
    }
    function X(e) {
      const t = e && e.navigator;
      if (t.mediaDevices && t.mediaDevices.getUserMedia) {
        const e = t.mediaDevices,
          n = e.getUserMedia.bind(e);
        t.mediaDevices.getUserMedia = e => n(Z(e));
      }
      !t.getUserMedia &&
        t.mediaDevices &&
        t.mediaDevices.getUserMedia &&
        (t.getUserMedia = function(e, n, r) {
          t.mediaDevices.getUserMedia(e).then(n, r);
        }.bind(t));
    }
    function Z(e) {
      return e && void 0 !== e.video
        ? Object.assign({}, e, { video: g(e.video) })
        : e;
    }
    function ee(e) {
      const t = e.RTCPeerConnection;
      (e.RTCPeerConnection = function(e, n) {
        if (e && e.iceServers) {
          const t = [];
          for (let n = 0; n < e.iceServers.length; n++) {
            let r = e.iceServers[n];
            !r.hasOwnProperty("urls") && r.hasOwnProperty("url")
              ? (v("RTCIceServer.url", "RTCIceServer.urls"),
                (r = JSON.parse(JSON.stringify(r))),
                (r.urls = r.url),
                delete r.url,
                t.push(r))
              : t.push(e.iceServers[n]);
          }
          e.iceServers = t;
        }
        return new t(e, n);
      }),
        (e.RTCPeerConnection.prototype = t.prototype),
        "generateCertificate" in e.RTCPeerConnection &&
          Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
            get: () => t.generateCertificate
          });
    }
    function te(e) {
      "object" == typeof e &&
        e.RTCTrackEvent &&
        "receiver" in e.RTCTrackEvent.prototype &&
        !("transceiver" in e.RTCTrackEvent.prototype) &&
        Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
          get() {
            return { receiver: this.receiver };
          }
        });
    }
    function ne(e) {
      const t = e.RTCPeerConnection.prototype.createOffer;
      e.RTCPeerConnection.prototype.createOffer = function(e) {
        if (e) {
          void 0 !== e.offerToReceiveAudio &&
            (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
          const t = this.getTransceivers().find(
            e => "audio" === e.receiver.track.kind
          );
          !1 === e.offerToReceiveAudio && t
            ? "sendrecv" === t.direction
              ? t.setDirection
                ? t.setDirection("sendonly")
                : (t.direction = "sendonly")
              : "recvonly" === t.direction &&
                (t.setDirection
                  ? t.setDirection("inactive")
                  : (t.direction = "inactive"))
            : !0 !== e.offerToReceiveAudio || t || this.addTransceiver("audio"),
            void 0 !== e.offerToReceiveVideo &&
              (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
          const n = this.getTransceivers().find(
            e => "video" === e.receiver.track.kind
          );
          !1 === e.offerToReceiveVideo && n
            ? "sendrecv" === n.direction
              ? n.setDirection
                ? n.setDirection("sendonly")
                : (n.direction = "sendonly")
              : "recvonly" === n.direction &&
                (n.setDirection
                  ? n.setDirection("inactive")
                  : (n.direction = "inactive"))
            : !0 !== e.offerToReceiveVideo || n || this.addTransceiver("video");
        }
        return t.apply(this, arguments);
      };
    }
    var re = n(45),
      ie = n.n(re);
    function oe(e) {
      if (
        !e.RTCIceCandidate ||
        (e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)
      )
        return;
      const t = e.RTCIceCandidate;
      (e.RTCIceCandidate = function(e) {
        if (
          ("object" == typeof e &&
            e.candidate &&
            0 === e.candidate.indexOf("a=") &&
            ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(
              2
            )),
          e.candidate && e.candidate.length)
        ) {
          const n = new t(e),
            r = ie.a.parseCandidate(e.candidate),
            i = Object.assign(n, r);
          return (
            (i.toJSON = function() {
              return {
                candidate: i.candidate,
                sdpMid: i.sdpMid,
                sdpMLineIndex: i.sdpMLineIndex,
                usernameFragment: i.usernameFragment
              };
            }),
            i
          );
        }
        return new t(e);
      }),
        (e.RTCIceCandidate.prototype = t.prototype),
        f(
          e,
          "icecandidate",
          t => (
            t.candidate &&
              Object.defineProperty(t, "candidate", {
                value: new e.RTCIceCandidate(t.candidate),
                writable: "false"
              }),
            t
          )
        );
    }
    function ae(e) {
      if (!e.RTCPeerConnection) return;
      const t = m(e);
      "sctp" in e.RTCPeerConnection.prototype ||
        Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
          get() {
            return void 0 === this._sctp ? null : this._sctp;
          }
        });
      const n = function(e) {
          if (!e || !e.sdp) return !1;
          const t = ie.a.splitSections(e.sdp);
          return (
            t.shift(),
            t.some(e => {
              const t = ie.a.parseMLine(e);
              return (
                t &&
                "application" === t.kind &&
                -1 !== t.protocol.indexOf("SCTP")
              );
            })
          );
        },
        r = function(e) {
          const t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
          if (null === t || t.length < 2) return -1;
          const n = parseInt(t[1], 10);
          return n != n ? -1 : n;
        },
        i = function(e) {
          let n = 65536;
          return (
            "firefox" === t.browser &&
              (n =
                t.version < 57
                  ? -1 === e
                    ? 16384
                    : 2147483637
                  : t.version < 60
                  ? 57 === t.version
                    ? 65535
                    : 65536
                  : 2147483637),
            n
          );
        },
        o = function(e, n) {
          let r = 65536;
          "firefox" === t.browser && 57 === t.version && (r = 65535);
          const i = ie.a.matchPrefix(e.sdp, "a=max-message-size:");
          return (
            i.length > 0
              ? (r = parseInt(i[0].substr(19), 10))
              : "firefox" === t.browser && -1 !== n && (r = 2147483637),
            r
          );
        },
        a = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function() {
        if (((this._sctp = null), "chrome" === t.browser && t.version >= 76)) {
          const { sdpSemantics: e } = this.getConfiguration();
          "plan-b" === e &&
            Object.defineProperty(this, "sctp", {
              get() {
                return void 0 === this._sctp ? null : this._sctp;
              },
              enumerable: !0,
              configurable: !0
            });
        }
        if (n(arguments[0])) {
          const e = r(arguments[0]),
            t = i(e),
            n = o(arguments[0], e);
          let a;
          a =
            0 === t && 0 === n
              ? Number.POSITIVE_INFINITY
              : 0 === t || 0 === n
              ? Math.max(t, n)
              : Math.min(t, n);
          const c = {};
          Object.defineProperty(c, "maxMessageSize", { get: () => a }),
            (this._sctp = c);
        }
        return a.apply(this, arguments);
      };
    }
    function ce(e) {
      if (
        !(
          e.RTCPeerConnection &&
          "createDataChannel" in e.RTCPeerConnection.prototype
        )
      )
        return;
      function t(e, t) {
        const n = e.send;
        e.send = function() {
          const r = arguments[0],
            i = r.length || r.size || r.byteLength;
          if ("open" === e.readyState && t.sctp && i > t.sctp.maxMessageSize)
            throw new TypeError(
              "Message too large (can send a maximum of " +
                t.sctp.maxMessageSize +
                " bytes)"
            );
          return n.apply(e, arguments);
        };
      }
      const n = e.RTCPeerConnection.prototype.createDataChannel;
      (e.RTCPeerConnection.prototype.createDataChannel = function() {
        const e = n.apply(this, arguments);
        return t(e, this), e;
      }),
        f(e, "datachannel", e => (t(e.channel, e.target), e));
    }
    function ue(e) {
      if (
        !e.RTCPeerConnection ||
        "connectionState" in e.RTCPeerConnection.prototype
      )
        return;
      const t = e.RTCPeerConnection.prototype;
      Object.defineProperty(t, "connectionState", {
        get() {
          return (
            { completed: "connected", checking: "connecting" }[
              this.iceConnectionState
            ] || this.iceConnectionState
          );
        },
        enumerable: !0,
        configurable: !0
      }),
        Object.defineProperty(t, "onconnectionstatechange", {
          get() {
            return this._onconnectionstatechange || null;
          },
          set(e) {
            this._onconnectionstatechange &&
              (this.removeEventListener(
                "connectionstatechange",
                this._onconnectionstatechange
              ),
              delete this._onconnectionstatechange),
              e &&
                this.addEventListener(
                  "connectionstatechange",
                  (this._onconnectionstatechange = e)
                );
          },
          enumerable: !0,
          configurable: !0
        }),
        ["setLocalDescription", "setRemoteDescription"].forEach(e => {
          const n = t[e];
          t[e] = function() {
            return (
              this._connectionstatechangepoly ||
                ((this._connectionstatechangepoly = e => {
                  const t = e.target;
                  if (t._lastConnectionState !== t.connectionState) {
                    t._lastConnectionState = t.connectionState;
                    const n = new Event("connectionstatechange", e);
                    t.dispatchEvent(n);
                  }
                  return e;
                }),
                this.addEventListener(
                  "iceconnectionstatechange",
                  this._connectionstatechangepoly
                )),
              n.apply(this, arguments)
            );
          };
        });
    }
    function se(e) {
      if (!e.RTCPeerConnection) return;
      const t = m(e);
      if ("chrome" === t.browser && t.version >= 71) return;
      const n = e.RTCPeerConnection.prototype.setRemoteDescription;
      e.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
        return (
          e &&
            e.sdp &&
            -1 !== e.sdp.indexOf("\na=extmap-allow-mixed") &&
            (e.sdp = e.sdp
              .split("\n")
              .filter(e => "a=extmap-allow-mixed" !== e.trim())
              .join("\n")),
          n.apply(this, arguments)
        );
      };
    }
    const le = (function(
      { window: e } = {},
      t = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 }
    ) {
      const n = h,
        u = m(e),
        s = {
          browserDetails: u,
          commonShim: c,
          extractVersion: l,
          disableLog: d,
          disableWarnings: p
        };
      switch (u.browser) {
        case "chrome":
          if (!r || !O || !t.shimChrome)
            return n("Chrome shim is not included in this adapter release."), s;
          n("adapter.js shimming chrome."),
            (s.browserShim = r),
            S(e),
            T(e),
            O(e),
            x(e),
            R(e),
            C(e),
            k(e),
            _(e),
            M(e),
            oe(e),
            ue(e),
            ae(e),
            ce(e),
            se(e);
          break;
        case "firefox":
          if (!o || !W || !t.shimFirefox)
            return (
              n("Firefox shim is not included in this adapter release."), s
            );
          n("adapter.js shimming firefox."),
            (s.browserShim = o),
            F(e),
            W(e),
            z(e),
            G(e),
            V(e),
            B(e),
            $(e),
            H(e),
            K(e),
            Q(e),
            oe(e),
            ue(e),
            ae(e),
            ce(e);
          break;
        case "edge":
          if (!i || !D || !t.shimEdge)
            return (
              n("MS edge shim is not included in this adapter release."), s
            );
          n("adapter.js shimming edge."),
            (s.browserShim = i),
            N(e),
            A(e),
            D(e),
            j(e),
            ae(e),
            ce(e);
          break;
        case "safari":
          if (!a || !t.shimSafari)
            return n("Safari shim is not included in this adapter release."), s;
          n("adapter.js shimming safari."),
            (s.browserShim = a),
            ee(e),
            ne(e),
            J(e),
            q(e),
            Y(e),
            te(e),
            X(e),
            oe(e),
            ae(e),
            ce(e),
            se(e);
          break;
        default:
          n("Unsupported browser!");
      }
      return s;
    })({ window: window });
    t.default = le;
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.__proto__ = t);
    }
    n.r(t);
    var i = n(1),
      o = n.n(i),
      a = n(50),
      c = n.n(a);
    function u() {
      return (u =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function s(e) {
      return "/" === e.charAt(0);
    }
    function l(e, t) {
      for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1)
        e[n] = e[r];
      e.pop();
    }
    var f = function(e, t) {
      void 0 === t && (t = "");
      var n,
        r = (e && e.split("/")) || [],
        i = (t && t.split("/")) || [],
        o = e && s(e),
        a = t && s(t),
        c = o || a;
      if (
        (e && s(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
        !i.length)
      )
        return "/";
      if (i.length) {
        var u = i[i.length - 1];
        n = "." === u || ".." === u || "" === u;
      } else n = !1;
      for (var f = 0, d = i.length; d >= 0; d--) {
        var p = i[d];
        "." === p ? l(i, d) : ".." === p ? (l(i, d), f++) : f && (l(i, d), f--);
      }
      if (!c) for (; f--; f) i.unshift("..");
      !c || "" === i[0] || (i[0] && s(i[0])) || i.unshift("");
      var h = i.join("/");
      return n && "/" !== h.substr(-1) && (h += "/"), h;
    };
    function d(e) {
      return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
    }
    var p = function e(t, n) {
      if (t === n) return !0;
      if (null == t || null == n) return !1;
      if (Array.isArray(t))
        return (
          Array.isArray(n) &&
          t.length === n.length &&
          t.every(function(t, r) {
            return e(t, n[r]);
          })
        );
      if ("object" == typeof t || "object" == typeof n) {
        var r = d(t),
          i = d(n);
        return r !== t || i !== n
          ? e(r, i)
          : Object.keys(Object.assign({}, t, n)).every(function(r) {
              return e(t[r], n[r]);
            });
      }
      return !1;
    };
    var h = function(e, t) {
      if (!e) throw new Error("Invariant failed");
    };
    function v(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function m(e) {
      return "/" === e.charAt(0) ? e.substr(1) : e;
    }
    function y(e, t) {
      return (function(e, t) {
        return (
          0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(e.charAt(t.length))
        );
      })(e, t)
        ? e.substr(t.length)
        : e;
    }
    function g(e) {
      return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
    }
    function b(e) {
      var t = e.pathname,
        n = e.search,
        r = e.hash,
        i = t || "/";
      return (
        n && "?" !== n && (i += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (i += "#" === r.charAt(0) ? r : "#" + r),
        i
      );
    }
    function w(e, t, n, r) {
      var i;
      "string" == typeof e
        ? ((i = (function(e) {
            var t = e || "/",
              n = "",
              r = "",
              i = t.indexOf("#");
            -1 !== i && ((r = t.substr(i)), (t = t.substr(0, i)));
            var o = t.indexOf("?");
            return (
              -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
              {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r
              }
            );
          })(e)).state = t)
        : (void 0 === (i = u({}, e)).pathname && (i.pathname = ""),
          i.search
            ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
            : (i.search = ""),
          i.hash
            ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
            : (i.hash = ""),
          void 0 !== t && void 0 === i.state && (i.state = t));
      try {
        i.pathname = decodeURI(i.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                i.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : e;
      }
      return (
        n && (i.key = n),
        r
          ? i.pathname
            ? "/" !== i.pathname.charAt(0) &&
              (i.pathname = f(i.pathname, r.pathname))
            : (i.pathname = r.pathname)
          : i.pathname || (i.pathname = "/"),
        i
      );
    }
    function S() {
      var e = null;
      var t = [];
      return {
        setPrompt: function(t) {
          return (
            (e = t),
            function() {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo: function(t, n, r, i) {
          if (null != e) {
            var o = "function" == typeof e ? e(t, n) : e;
            "string" == typeof o
              ? "function" == typeof r
                ? r(o, i)
                : i(!0)
              : i(!1 !== o);
          } else i(!0);
        },
        appendListener: function(e) {
          var n = !0;
          function r() {
            n && e.apply(void 0, arguments);
          }
          return (
            t.push(r),
            function() {
              (n = !1),
                (t = t.filter(function(e) {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners: function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          t.forEach(function(e) {
            return e.apply(void 0, n);
          });
        }
      };
    }
    var E = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
    function T(e, t) {
      t(window.confirm(e));
    }
    function x() {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    }
    function C(e) {
      void 0 === e && (e = {}), E || h(!1);
      var t,
        n = window.history,
        r =
          ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history,
        i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
        o = e,
        a = o.forceRefresh,
        c = void 0 !== a && a,
        s = o.getUserConfirmation,
        l = void 0 === s ? T : s,
        f = o.keyLength,
        d = void 0 === f ? 6 : f,
        p = e.basename ? g(v(e.basename)) : "";
      function m(e) {
        var t = e || {},
          n = t.key,
          r = t.state,
          i = window.location,
          o = i.pathname + i.search + i.hash;
        return p && (o = y(o, p)), w(o, r, n);
      }
      function C() {
        return Math.random()
          .toString(36)
          .substr(2, d);
      }
      var k = S();
      function _(e) {
        u(U, e), (U.length = n.length), k.notifyListeners(U.location, U.action);
      }
      function P(e) {
        (function(e) {
          return (
            void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
          );
        })(e) || M(m(e.state));
      }
      function R() {
        M(m(x()));
      }
      var O = !1;
      function M(e) {
        if (O) (O = !1), _();
        else {
          k.confirmTransitionTo(e, "POP", l, function(t) {
            t
              ? _({ action: "POP", location: e })
              : (function(e) {
                  var t = U.location,
                    n = L.indexOf(t.key);
                  -1 === n && (n = 0);
                  var r = L.indexOf(e.key);
                  -1 === r && (r = 0);
                  var i = n - r;
                  i && ((O = !0), A(i));
                })(e);
          });
        }
      }
      var I = m(x()),
        L = [I.key];
      function N(e) {
        return p + b(e);
      }
      function A(e) {
        n.go(e);
      }
      var D = 0;
      function j(e) {
        1 === (D += e) && 1 === e
          ? (window.addEventListener("popstate", P),
            i && window.addEventListener("hashchange", R))
          : 0 === D &&
            (window.removeEventListener("popstate", P),
            i && window.removeEventListener("hashchange", R));
      }
      var F = !1;
      var U = {
        length: n.length,
        action: "POP",
        location: I,
        createHref: N,
        push: function(e, t) {
          var i = w(e, t, C(), U.location);
          k.confirmTransitionTo(i, "PUSH", l, function(e) {
            if (e) {
              var t = N(i),
                o = i.key,
                a = i.state;
              if (r)
                if ((n.pushState({ key: o, state: a }, null, t), c))
                  window.location.href = t;
                else {
                  var u = L.indexOf(U.location.key),
                    s = L.slice(0, u + 1);
                  s.push(i.key), (L = s), _({ action: "PUSH", location: i });
                }
              else window.location.href = t;
            }
          });
        },
        replace: function(e, t) {
          var i = w(e, t, C(), U.location);
          k.confirmTransitionTo(i, "REPLACE", l, function(e) {
            if (e) {
              var t = N(i),
                o = i.key,
                a = i.state;
              if (r)
                if ((n.replaceState({ key: o, state: a }, null, t), c))
                  window.location.replace(t);
                else {
                  var u = L.indexOf(U.location.key);
                  -1 !== u && (L[u] = i.key),
                    _({ action: "REPLACE", location: i });
                }
              else window.location.replace(t);
            }
          });
        },
        go: A,
        goBack: function() {
          A(-1);
        },
        goForward: function() {
          A(1);
        },
        block: function(e) {
          void 0 === e && (e = !1);
          var t = k.setPrompt(e);
          return (
            F || (j(1), (F = !0)),
            function() {
              return F && ((F = !1), j(-1)), t();
            }
          );
        },
        listen: function(e) {
          var t = k.appendListener(e);
          return (
            j(1),
            function() {
              j(-1), t();
            }
          );
        }
      };
      return U;
    }
    var k = {
      hashbang: {
        encodePath: function(e) {
          return "!" === e.charAt(0) ? e : "!/" + m(e);
        },
        decodePath: function(e) {
          return "!" === e.charAt(0) ? e.substr(1) : e;
        }
      },
      noslash: { encodePath: m, decodePath: v },
      slash: { encodePath: v, decodePath: v }
    };
    function _(e) {
      var t = e.indexOf("#");
      return -1 === t ? e : e.slice(0, t);
    }
    function P() {
      var e = window.location.href,
        t = e.indexOf("#");
      return -1 === t ? "" : e.substring(t + 1);
    }
    function R(e) {
      window.location.replace(_(window.location.href) + "#" + e);
    }
    function O(e) {
      void 0 === e && (e = {}), E || h(!1);
      var t = window.history,
        n = (window.navigator.userAgent.indexOf("Firefox"), e),
        r = n.getUserConfirmation,
        i = void 0 === r ? T : r,
        o = n.hashType,
        a = void 0 === o ? "slash" : o,
        c = e.basename ? g(v(e.basename)) : "",
        s = k[a],
        l = s.encodePath,
        f = s.decodePath;
      function d() {
        var e = f(P());
        return c && (e = y(e, c)), w(e);
      }
      var p = S();
      function m(e) {
        u(U, e), (U.length = t.length), p.notifyListeners(U.location, U.action);
      }
      var x = !1,
        C = null;
      function O() {
        var e,
          t,
          n = P(),
          r = l(n);
        if (n !== r) R(r);
        else {
          var o = d(),
            a = U.location;
          if (
            !x &&
            ((t = o),
            (e = a).pathname === t.pathname &&
              e.search === t.search &&
              e.hash === t.hash)
          )
            return;
          if (C === b(o)) return;
          (C = null),
            (function(e) {
              if (x) (x = !1), m();
              else {
                p.confirmTransitionTo(e, "POP", i, function(t) {
                  t
                    ? m({ action: "POP", location: e })
                    : (function(e) {
                        var t = U.location,
                          n = N.lastIndexOf(b(t));
                        -1 === n && (n = 0);
                        var r = N.lastIndexOf(b(e));
                        -1 === r && (r = 0);
                        var i = n - r;
                        i && ((x = !0), A(i));
                      })(e);
                });
              }
            })(o);
        }
      }
      var M = P(),
        I = l(M);
      M !== I && R(I);
      var L = d(),
        N = [b(L)];
      function A(e) {
        t.go(e);
      }
      var D = 0;
      function j(e) {
        1 === (D += e) && 1 === e
          ? window.addEventListener("hashchange", O)
          : 0 === D && window.removeEventListener("hashchange", O);
      }
      var F = !1;
      var U = {
        length: t.length,
        action: "POP",
        location: L,
        createHref: function(e) {
          var t = document.querySelector("base"),
            n = "";
          return (
            t && t.getAttribute("href") && (n = _(window.location.href)),
            n + "#" + l(c + b(e))
          );
        },
        push: function(e, t) {
          var n = w(e, void 0, void 0, U.location);
          p.confirmTransitionTo(n, "PUSH", i, function(e) {
            if (e) {
              var t = b(n),
                r = l(c + t);
              if (P() !== r) {
                (C = t),
                  (function(e) {
                    window.location.hash = e;
                  })(r);
                var i = N.lastIndexOf(b(U.location)),
                  o = N.slice(0, i + 1);
                o.push(t), (N = o), m({ action: "PUSH", location: n });
              } else m();
            }
          });
        },
        replace: function(e, t) {
          var n = w(e, void 0, void 0, U.location);
          p.confirmTransitionTo(n, "REPLACE", i, function(e) {
            if (e) {
              var t = b(n),
                r = l(c + t);
              P() !== r && ((C = t), R(r));
              var i = N.indexOf(b(U.location));
              -1 !== i && (N[i] = t), m({ action: "REPLACE", location: n });
            }
          });
        },
        go: A,
        goBack: function() {
          A(-1);
        },
        goForward: function() {
          A(1);
        },
        block: function(e) {
          void 0 === e && (e = !1);
          var t = p.setPrompt(e);
          return (
            F || (j(1), (F = !0)),
            function() {
              return F && ((F = !1), j(-1)), t();
            }
          );
        },
        listen: function(e) {
          var t = p.appendListener(e);
          return (
            j(1),
            function() {
              j(-1), t();
            }
          );
        }
      };
      return U;
    }
    function M(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function I(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.getUserConfirmation,
        r = t.initialEntries,
        i = void 0 === r ? ["/"] : r,
        o = t.initialIndex,
        a = void 0 === o ? 0 : o,
        c = t.keyLength,
        s = void 0 === c ? 6 : c,
        l = S();
      function f(e) {
        u(y, e),
          (y.length = y.entries.length),
          l.notifyListeners(y.location, y.action);
      }
      function d() {
        return Math.random()
          .toString(36)
          .substr(2, s);
      }
      var p = M(a, 0, i.length - 1),
        h = i.map(function(e) {
          return w(e, void 0, "string" == typeof e ? d() : e.key || d());
        }),
        v = b;
      function m(e) {
        var t = M(y.index + e, 0, y.entries.length - 1),
          r = y.entries[t];
        l.confirmTransitionTo(r, "POP", n, function(e) {
          e ? f({ action: "POP", location: r, index: t }) : f();
        });
      }
      var y = {
        length: h.length,
        action: "POP",
        location: h[p],
        index: p,
        entries: h,
        createHref: v,
        push: function(e, t) {
          var r = w(e, t, d(), y.location);
          l.confirmTransitionTo(r, "PUSH", n, function(e) {
            if (e) {
              var t = y.index + 1,
                n = y.entries.slice(0);
              n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                f({ action: "PUSH", location: r, index: t, entries: n });
            }
          });
        },
        replace: function(e, t) {
          var r = w(e, t, d(), y.location);
          l.confirmTransitionTo(r, "REPLACE", n, function(e) {
            e &&
              ((y.entries[y.index] = r), f({ action: "REPLACE", location: r }));
          });
        },
        go: m,
        goBack: function() {
          m(-1);
        },
        goForward: function() {
          m(1);
        },
        canGo: function(e) {
          var t = y.index + e;
          return t >= 0 && t < y.entries.length;
        },
        block: function(e) {
          return void 0 === e && (e = !1), l.setPrompt(e);
        },
        listen: function(e) {
          return l.appendListener(e);
        }
      };
      return y;
    }
    var L = n(94),
      N = n.n(L),
      A = n(140),
      D = n.n(A);
    function j(e) {
      var t = [];
      return {
        on: function(e) {
          t.push(e);
        },
        off: function(e) {
          t = t.filter(function(t) {
            return t !== e;
          });
        },
        get: function() {
          return e;
        },
        set: function(n, r) {
          (e = n),
            t.forEach(function(t) {
              return t(e, r);
            });
        }
      };
    }
    var F =
        o.a.createContext ||
        function(e, t) {
          var n,
            r,
            o = "__create-react-context-" + D()() + "__",
            a = (function(e) {
              function n() {
                var t;
                return (
                  ((t = e.apply(this, arguments) || this).emitter = j(
                    t.props.value
                  )),
                  t
                );
              }
              N()(n, e);
              var r = n.prototype;
              return (
                (r.getChildContext = function() {
                  var e;
                  return ((e = {})[o] = this.emitter), e;
                }),
                (r.componentWillReceiveProps = function(e) {
                  if (this.props.value !== e.value) {
                    var n,
                      r = this.props.value,
                      i = e.value;
                    ((o = r) === (a = i)
                    ? 0 !== o || 1 / o == 1 / a
                    : o != o && a != a)
                      ? (n = 0)
                      : ((n = "function" == typeof t ? t(r, i) : 1073741823),
                        0 !== (n |= 0) && this.emitter.set(e.value, n));
                  }
                  var o, a;
                }),
                (r.render = function() {
                  return this.props.children;
                }),
                n
              );
            })(i.Component);
          a.childContextTypes = (((n = {})[o] = c.a.object.isRequired), n);
          var u = (function(t) {
            function n() {
              var e;
              return (
                ((e = t.apply(this, arguments) || this).state = {
                  value: e.getValue()
                }),
                (e.onUpdate = function(t, n) {
                  0 != ((0 | e.observedBits) & n) &&
                    e.setState({ value: e.getValue() });
                }),
                e
              );
            }
            N()(n, t);
            var r = n.prototype;
            return (
              (r.componentWillReceiveProps = function(e) {
                var t = e.observedBits;
                this.observedBits = null == t ? 1073741823 : t;
              }),
              (r.componentDidMount = function() {
                this.context[o] && this.context[o].on(this.onUpdate);
                var e = this.props.observedBits;
                this.observedBits = null == e ? 1073741823 : e;
              }),
              (r.componentWillUnmount = function() {
                this.context[o] && this.context[o].off(this.onUpdate);
              }),
              (r.getValue = function() {
                return this.context[o] ? this.context[o].get() : e;
              }),
              (r.render = function() {
                return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                  this.state.value
                );
                var e;
              }),
              n
            );
          })(i.Component);
          return (
            (u.contextTypes = (((r = {})[o] = c.a.object), r)),
            { Provider: a, Consumer: u }
          );
        },
      U = n(95),
      z = n.n(U);
    n(99);
    function W(e, t) {
      if (null == e) return {};
      var n,
        r,
        i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
    }
    var V = n(141),
      B = n.n(V),
      G = (function(e) {
        var t = F();
        return (t.displayName = e), t;
      })("Router"),
      $ = (function(e) {
        function t(t) {
          var n;
          return (
            ((n = e.call(this, t) || this).state = {
              location: t.history.location
            }),
            (n._isMounted = !1),
            (n._pendingLocation = null),
            t.staticContext ||
              (n.unlisten = t.history.listen(function(e) {
                n._isMounted
                  ? n.setState({ location: e })
                  : (n._pendingLocation = e);
              })),
            n
          );
        }
        r(t, e),
          (t.computeRootMatch = function(e) {
            return { path: "/", url: "/", params: {}, isExact: "/" === e };
          });
        var n = t.prototype;
        return (
          (n.componentDidMount = function() {
            (this._isMounted = !0),
              this._pendingLocation &&
                this.setState({ location: this._pendingLocation });
          }),
          (n.componentWillUnmount = function() {
            this.unlisten && this.unlisten();
          }),
          (n.render = function() {
            return o.a.createElement(G.Provider, {
              children: this.props.children || null,
              value: {
                history: this.props.history,
                location: this.state.location,
                match: t.computeRootMatch(this.state.location.pathname),
                staticContext: this.props.staticContext
              }
            });
          }),
          t
        );
      })(o.a.Component);
    var H = (function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = I(
            t.props
          )),
          t
        );
      }
      return (
        r(t, e),
        (t.prototype.render = function() {
          return o.a.createElement($, {
            history: this.history,
            children: this.props.children
          });
        }),
        t
      );
    })(o.a.Component);
    var K = (function(e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      r(t, e);
      var n = t.prototype;
      return (
        (n.componentDidMount = function() {
          this.props.onMount && this.props.onMount.call(this, this);
        }),
        (n.componentDidUpdate = function(e) {
          this.props.onUpdate && this.props.onUpdate.call(this, this, e);
        }),
        (n.componentWillUnmount = function() {
          this.props.onUnmount && this.props.onUnmount.call(this, this);
        }),
        (n.render = function() {
          return null;
        }),
        t
      );
    })(o.a.Component);
    function Q(e) {
      var t = e.message,
        n = e.when,
        r = void 0 === n || n;
      return o.a.createElement(G.Consumer, null, function(e) {
        if ((e || h(!1), !r || e.staticContext)) return null;
        var n = e.history.block;
        return o.a.createElement(K, {
          onMount: function(e) {
            e.release = n(t);
          },
          onUpdate: function(e, r) {
            r.message !== t && (e.release(), (e.release = n(t)));
          },
          onUnmount: function(e) {
            e.release();
          },
          message: t
        });
      });
    }
    var q = {},
      Y = 0;
    function J(e, t) {
      return (
        void 0 === e && (e = "/"),
        void 0 === t && (t = {}),
        "/" === e
          ? e
          : (function(e) {
              if (q[e]) return q[e];
              var t = z.a.compile(e);
              return Y < 1e4 && ((q[e] = t), Y++), t;
            })(e)(t, { pretty: !0 })
      );
    }
    function X(e) {
      var t = e.computedMatch,
        n = e.to,
        r = e.push,
        i = void 0 !== r && r;
      return o.a.createElement(G.Consumer, null, function(e) {
        e || h(!1);
        var r = e.history,
          a = e.staticContext,
          c = i ? r.push : r.replace,
          s = w(
            t
              ? "string" == typeof n
                ? J(n, t.params)
                : u({}, n, { pathname: J(n.pathname, t.params) })
              : n
          );
        return a
          ? (c(s), null)
          : o.a.createElement(K, {
              onMount: function() {
                c(s);
              },
              onUpdate: function(e, t) {
                var n,
                  r,
                  i = w(t.to);
                (n = i),
                  (r = u({}, s, { key: i.key })),
                  (n.pathname === r.pathname &&
                    n.search === r.search &&
                    n.hash === r.hash &&
                    n.key === r.key &&
                    p(n.state, r.state)) ||
                    c(s);
              },
              to: n
            });
      });
    }
    var Z = {},
      ee = 0;
    function te(e, t) {
      void 0 === t && (t = {}),
        ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
      var n = t,
        r = n.path,
        i = n.exact,
        o = void 0 !== i && i,
        a = n.strict,
        c = void 0 !== a && a,
        u = n.sensitive,
        s = void 0 !== u && u;
      return [].concat(r).reduce(function(t, n) {
        if (!n && "" !== n) return null;
        if (t) return t;
        var r = (function(e, t) {
            var n = "" + t.end + t.strict + t.sensitive,
              r = Z[n] || (Z[n] = {});
            if (r[e]) return r[e];
            var i = [],
              o = { regexp: z()(e, i, t), keys: i };
            return ee < 1e4 && ((r[e] = o), ee++), o;
          })(n, { end: o, strict: c, sensitive: s }),
          i = r.regexp,
          a = r.keys,
          u = i.exec(e);
        if (!u) return null;
        var l = u[0],
          f = u.slice(1),
          d = e === l;
        return o && !d
          ? null
          : {
              path: n,
              url: "/" === n && "" === l ? "/" : l,
              isExact: d,
              params: a.reduce(function(e, t, n) {
                return (e[t.name] = f[n]), e;
              }, {})
            };
      }, null);
    }
    var ne = (function(e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        r(t, e),
        (t.prototype.render = function() {
          var e = this;
          return o.a.createElement(G.Consumer, null, function(t) {
            t || h(!1);
            var n = e.props.location || t.location,
              r = u({}, t, {
                location: n,
                match: e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? te(n.pathname, e.props)
                  : t.match
              }),
              i = e.props,
              a = i.children,
              c = i.component,
              s = i.render;
            return (
              Array.isArray(a) && 0 === a.length && (a = null),
              o.a.createElement(
                G.Provider,
                { value: r },
                r.match
                  ? a
                    ? "function" == typeof a
                      ? a(r)
                      : a
                    : c
                    ? o.a.createElement(c, r)
                    : s
                    ? s(r)
                    : null
                  : "function" == typeof a
                  ? a(r)
                  : null
              )
            );
          });
        }),
        t
      );
    })(o.a.Component);
    function re(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function ie(e, t) {
      if (!e) return t;
      var n = re(e);
      return 0 !== t.pathname.indexOf(n)
        ? t
        : u({}, t, { pathname: t.pathname.substr(n.length) });
    }
    function oe(e) {
      return "string" == typeof e ? e : b(e);
    }
    function ae(e) {
      return function() {
        h(!1);
      };
    }
    function ce() {}
    var ue = (function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return (
          ((t =
            e.call.apply(e, [this].concat(r)) || this).handlePush = function(
            e
          ) {
            return t.navigateTo(e, "PUSH");
          }),
          (t.handleReplace = function(e) {
            return t.navigateTo(e, "REPLACE");
          }),
          (t.handleListen = function() {
            return ce;
          }),
          (t.handleBlock = function() {
            return ce;
          }),
          t
        );
      }
      r(t, e);
      var n = t.prototype;
      return (
        (n.navigateTo = function(e, t) {
          var n = this.props,
            r = n.basename,
            i = void 0 === r ? "" : r,
            o = n.context,
            a = void 0 === o ? {} : o;
          (a.action = t),
            (a.location = (function(e, t) {
              return e ? u({}, t, { pathname: re(e) + t.pathname }) : t;
            })(i, w(e))),
            (a.url = oe(a.location));
        }),
        (n.render = function() {
          var e = this.props,
            t = e.basename,
            n = void 0 === t ? "" : t,
            r = e.context,
            i = void 0 === r ? {} : r,
            a = e.location,
            c = void 0 === a ? "/" : a,
            s = W(e, ["basename", "context", "location"]),
            l = {
              createHref: function(e) {
                return re(n + oe(e));
              },
              action: "POP",
              location: ie(n, w(c)),
              push: this.handlePush,
              replace: this.handleReplace,
              go: ae(),
              goBack: ae(),
              goForward: ae(),
              listen: this.handleListen,
              block: this.handleBlock
            };
          return o.a.createElement(
            $,
            u({}, s, { history: l, staticContext: i })
          );
        }),
        t
      );
    })(o.a.Component);
    var se = (function(e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (
        r(t, e),
        (t.prototype.render = function() {
          var e = this;
          return o.a.createElement(G.Consumer, null, function(t) {
            t || h(!1);
            var n,
              r,
              i = e.props.location || t.location;
            return (
              o.a.Children.forEach(e.props.children, function(e) {
                if (null == r && o.a.isValidElement(e)) {
                  n = e;
                  var a = e.props.path || e.props.from;
                  r = a ? te(i.pathname, u({}, e.props, { path: a })) : t.match;
                }
              }),
              r ? o.a.cloneElement(n, { location: i, computedMatch: r }) : null
            );
          });
        }),
        t
      );
    })(o.a.Component);
    function le(e) {
      var t = "withRouter(" + (e.displayName || e.name) + ")",
        n = function(t) {
          var n = t.wrappedComponentRef,
            r = W(t, ["wrappedComponentRef"]);
          return o.a.createElement(G.Consumer, null, function(t) {
            return t || h(!1), o.a.createElement(e, u({}, r, t, { ref: n }));
          });
        };
      return (n.displayName = t), (n.WrappedComponent = e), B()(n, e);
    }
    var fe = o.a.useContext;
    function de() {
      return fe(G).history;
    }
    function pe() {
      return fe(G).location;
    }
    function he() {
      var e = fe(G).match;
      return e ? e.params : {};
    }
    function ve(e) {
      return e ? te(pe().pathname, e) : fe(G).match;
    }
    n.d(t, "BrowserRouter", function() {
      return me;
    }),
      n.d(t, "HashRouter", function() {
        return ye;
      }),
      n.d(t, "Link", function() {
        return Te;
      }),
      n.d(t, "NavLink", function() {
        return ke;
      }),
      n.d(t, "MemoryRouter", function() {
        return H;
      }),
      n.d(t, "Prompt", function() {
        return Q;
      }),
      n.d(t, "Redirect", function() {
        return X;
      }),
      n.d(t, "Route", function() {
        return ne;
      }),
      n.d(t, "Router", function() {
        return $;
      }),
      n.d(t, "StaticRouter", function() {
        return ue;
      }),
      n.d(t, "Switch", function() {
        return se;
      }),
      n.d(t, "__RouterContext", function() {
        return G;
      }),
      n.d(t, "generatePath", function() {
        return J;
      }),
      n.d(t, "matchPath", function() {
        return te;
      }),
      n.d(t, "useHistory", function() {
        return de;
      }),
      n.d(t, "useLocation", function() {
        return pe;
      }),
      n.d(t, "useParams", function() {
        return he;
      }),
      n.d(t, "useRouteMatch", function() {
        return ve;
      }),
      n.d(t, "withRouter", function() {
        return le;
      });
    var me = (function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = C(
            t.props
          )),
          t
        );
      }
      return (
        r(t, e),
        (t.prototype.render = function() {
          return o.a.createElement($, {
            history: this.history,
            children: this.props.children
          });
        }),
        t
      );
    })(o.a.Component);
    var ye = (function(e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return (
          ((t = e.call.apply(e, [this].concat(r)) || this).history = O(
            t.props
          )),
          t
        );
      }
      return (
        r(t, e),
        (t.prototype.render = function() {
          return o.a.createElement($, {
            history: this.history,
            children: this.props.children
          });
        }),
        t
      );
    })(o.a.Component);
    var ge = function(e, t) {
        return "function" == typeof e ? e(t) : e;
      },
      be = function(e, t) {
        return "string" == typeof e ? w(e, null, null, t) : e;
      },
      we = function(e) {
        return e;
      },
      Se = o.a.forwardRef;
    void 0 === Se && (Se = we);
    var Ee = Se(function(e, t) {
      var n = e.innerRef,
        r = e.navigate,
        i = e.onClick,
        a = W(e, ["innerRef", "navigate", "onClick"]),
        c = a.target,
        s = u({}, a, {
          onClick: function(e) {
            try {
              i && i(e);
            } catch (t) {
              throw (e.preventDefault(), t);
            }
            e.defaultPrevented ||
              0 !== e.button ||
              (c && "_self" !== c) ||
              (function(e) {
                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
              })(e) ||
              (e.preventDefault(), r());
          }
        });
      return (s.ref = (we !== Se && t) || n), o.a.createElement("a", s);
    });
    var Te = Se(function(e, t) {
        var n = e.component,
          r = void 0 === n ? Ee : n,
          i = e.replace,
          a = e.to,
          c = e.innerRef,
          s = W(e, ["component", "replace", "to", "innerRef"]);
        return o.a.createElement(G.Consumer, null, function(e) {
          e || h(!1);
          var n = e.history,
            l = be(ge(a, e.location), e.location),
            f = l ? n.createHref(l) : "",
            d = u({}, s, {
              href: f,
              navigate: function() {
                var t = ge(a, e.location);
                (i ? n.replace : n.push)(t);
              }
            });
          return (
            we !== Se ? (d.ref = t || c) : (d.innerRef = c),
            o.a.createElement(r, d)
          );
        });
      }),
      xe = function(e) {
        return e;
      },
      Ce = o.a.forwardRef;
    void 0 === Ce && (Ce = xe);
    var ke = Ce(function(e, t) {
      var n = e["aria-current"],
        r = void 0 === n ? "page" : n,
        i = e.activeClassName,
        a = void 0 === i ? "active" : i,
        c = e.activeStyle,
        s = e.className,
        l = e.exact,
        f = e.isActive,
        d = e.location,
        p = e.strict,
        v = e.style,
        m = e.to,
        y = e.innerRef,
        g = W(e, [
          "aria-current",
          "activeClassName",
          "activeStyle",
          "className",
          "exact",
          "isActive",
          "location",
          "strict",
          "style",
          "to",
          "innerRef"
        ]);
      return o.a.createElement(G.Consumer, null, function(e) {
        e || h(!1);
        var n = d || e.location,
          i = be(ge(m, n), n),
          b = i.pathname,
          w = b && b.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
          S = w ? te(n.pathname, { path: w, exact: l, strict: p }) : null,
          E = !!(f ? f(S, n) : S),
          T = E
            ? (function() {
                for (
                  var e = arguments.length, t = new Array(e), n = 0;
                  n < e;
                  n++
                )
                  t[n] = arguments[n];
                return t
                  .filter(function(e) {
                    return e;
                  })
                  .join(" ");
              })(s, a)
            : s,
          x = E ? u({}, v, {}, c) : v,
          C = u(
            { "aria-current": (E && r) || null, className: T, style: x, to: i },
            g
          );
        return (
          xe !== Ce ? (C.ref = t || y) : (C.innerRef = y),
          o.a.createElement(Te, C)
        );
      });
    });
  }
]);

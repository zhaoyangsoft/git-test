var peckerwood = function(R) {
    "use strict";
    var M = function(e, t) {
        return (M = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    };
    function e(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        M(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var B = function() {
        return (B = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function q(e, t) {
        var n = {};
        for (o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }
    function U(t) {
        return function(e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }
    function v(e) {
        return null == e
    }
    function u(e) {
        return null == e || "" === e
    }
    function H(e) {
        return U("Number")(e)
    }
    function F(e) {
        return U("String")(e)
    }
    function z(e) {
        return U("Error")(e)
    }
    function a(e) {
        return U("Array")(e)
    }
    function s(e) {
        return "function" == typeof e
    }
    function W(e) {
        return U("Date")(e)
    }
    function J(e) {
        return U("Boolean")(e)
    }
    function g(e) {
        return U("Object")(e)
    }
    function G(e) {
        return null !== e && "object" == typeof e
    }
    function V(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function Q(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function p(e) {
        return Array.prototype.slice.call(e)
    }
    function K(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function f() {}
    function X(n, r) {
        var o;
        return void 0 === r && (r = 200),
        function() {
            var e = this
              , t = arguments;
            return clearTimeout(o),
            o = setTimeout(function() {
                n.apply(e, p(t))
            }, r)
        }
    }
    function Y(e, t) {
        if (!u(e) && !u(t)) {
            if (e === t)
                return 0;
            for (var n = e.split("."), r = t.split("."), o = Math.min(n.length, r.length), i = 0; i < o; i++) {
                var a = parseInt(n[i], 10)
                  , s = parseInt(r[i], 10);
                if (isNaN(a) || isNaN(s))
                    return;
                if (s < a)
                    return 1;
                if (a < s)
                    return -1
            }
            return n.length > r.length ? 1 : n.length < r.length ? -1 : void 0
        }
    }
    function l(e, t) {
        if (a(e))
            for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
        else if (g(e))
            for (var o in e)
                K(e, o) && t.call(null, e[o], o, e)
    }
    function c(e) {
        for (var n, r, t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return r = J(e) ? (n = e,
        t.shift()) : e,
        l(t, function(e) {
            l(e, function(e, t) {
                n && (a(e) || g(e)) ? (a(e) ? a(r[t]) || (r[t] = []) : g(r[t]) || (r[t] = {}),
                c(n, r[t], e)) : r[t] = e
            })
        }),
        r
    }
    var t = "visitorid"
      , n = "sessionid"
      , $ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function Z(t) {
        var n = this.constructor;
        return this.then(function(e) {
            return n.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return n.resolve(t()).then(function() {
                return n.reject(e)
            })
        })
    }
    function ee(n) {
        return new this(function(o, e) {
            if (!n || void 0 === n.length)
                return e(new TypeError(typeof n + " " + n + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var i = Array.prototype.slice.call(n);
            if (0 === i.length)
                return o([]);
            var a = i.length;
            for (var t = 0; t < i.length; t++)
                !function t(n, e) {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var r = e.then;
                        if ("function" == typeof r)
                            return void r.call(e, function(e) {
                                t(n, e)
                            }, function(e) {
                                i[n] = {
                                    status: "rejected",
                                    reason: e
                                },
                                0 == --a && o(i)
                            })
                    }
                    i[n] = {
                        status: "fulfilled",
                        value: e
                    },
                    0 == --a && o(i)
                }(t, i[t])
        }
        )
    }
    var te = setTimeout;
    function ne(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function re() {}
    function i(e) {
        if (!(this instanceof i))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        ue(e, this)
    }
    function oe(n, r) {
        for (; 3 === n._state; )
            n = n._value;
        0 === n._state ? n._deferreds.push(r) : (n._handled = !0,
        i._immediateFn(function() {
            var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
            if (null === t)
                (1 === n._state ? ie : ae)(r.promise, n._value);
            else {
                try {
                    e = t(n._value)
                } catch (e) {
                    return void ae(r.promise, e)
                }
                ie(r.promise, e)
            }
        }))
    }
    function ie(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof i)
                    return t._state = 3,
                    t._value = e,
                    void se(t);
                if ("function" == typeof n)
                    return void ue((r = n,
                    o = e,
                    function() {
                        r.apply(o, arguments)
                    }
                    ), t)
            }
            t._state = 1,
            t._value = e,
            se(t)
        } catch (e) {
            ae(t, e)
        }
        var r, o
    }
    function ae(e, t) {
        e._state = 2,
        e._value = t,
        se(e)
    }
    function se(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
            e._handled || i._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
            oe(e, e._deferreds[t]);
        e._deferreds = null
    }
    function ce(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = n
    }
    function ue(e, t) {
        var n = !1;
        try {
            e(function(e) {
                n || (n = !0,
                ie(t, e))
            }, function(e) {
                n || (n = !0,
                ae(t, e))
            })
        } catch (e) {
            if (n)
                return;
            n = !0,
            ae(t, e)
        }
    }
    i.prototype.catch = function(e) {
        return this.then(null, e)
    }
    ,
    i.prototype.then = function(e, t) {
        var n = new this.constructor(re);
        return oe(this, new ce(e,t,n)),
        n
    }
    ,
    i.prototype.finally = Z,
    i.all = function(t) {
        return new i(function(o, i) {
            if (!ne(t))
                return i(new TypeError("Promise.all accepts an array"));
            var a = Array.prototype.slice.call(t);
            if (0 === a.length)
                return o([]);
            var s = a.length;
            for (var e = 0; e < a.length; e++)
                !function t(n, e) {
                    try {
                        if (e && ("object" == typeof e || "function" == typeof e)) {
                            var r = e.then;
                            if ("function" == typeof r)
                                return void r.call(e, function(e) {
                                    t(n, e)
                                }, i)
                        }
                        a[n] = e,
                        0 == --s && o(a)
                    } catch (e) {
                        i(e)
                    }
                }(e, a[e])
        }
        )
    }
    ,
    i.allSettled = ee,
    i.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
            e(t)
        }
        )
    }
    ,
    i.reject = function(n) {
        return new i(function(e, t) {
            t(n)
        }
        )
    }
    ,
    i.race = function(o) {
        return new i(function(e, t) {
            if (!ne(o))
                return t(new TypeError("Promise.race accepts an array"));
            for (var n = 0, r = o.length; n < r; n++)
                i.resolve(o[n]).then(e, t)
        }
        )
    }
    ,
    i._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    }
    : function(e) {
        te(e, 0)
    }
    ,
    i._unhandledRejectionFn = function(e) {}
    ;
    var r = function() {
        if ("undefined" != typeof self)
            return self;
        if ("undefined" != typeof window)
            return window;
        if (void 0 !== $)
            return $;
        throw new Error("unable to locate global object")
    }();
    function pe(e, t) {
        if (e === t)
            return 1;
        if (e instanceof Object && t instanceof Object && e.constructor === t.constructor) {
            for (var n in e)
                if (K(e, n)) {
                    if (!K(t, n))
                        return;
                    if (e[n] !== t[n]) {
                        if ("object" != typeof e[n])
                            return;
                        if (!pe(e[n], t[n]))
                            return
                    }
                }
            for (n in t)
                if (K(t, n) && !K(e, n))
                    return;
            return 1
        }
    }
    "function" != typeof r.Promise ? r.Promise = i : (r.Promise.prototype.finally || (r.Promise.prototype.finally = Z),
    r.Promise.allSettled || (r.Promise.allSettled = ee));
    (r = {}).rejected = "reject",
    r.resolved = "resolve";
    var fe = r
      , le = (de.prototype.push = function(e) {
        var t;
        this.options.stateful && "pending" !== this.status ? s(t = e[fe[this.status]]) && t.apply(void 0, this.args) : -1 === this.queue.indexOf(e) && this.queue.push(e)
    }
    ,
    de.prototype.resolve = function() {
        this.execute("resolved", p(arguments))
    }
    ,
    de.prototype.reject = function() {
        this.execute("rejected", p(arguments))
    }
    ,
    de.prototype.execute = function(t, n) {
        this.queue.forEach(function(e) {
            e = e[fe[t]];
            s(e) && e.apply(void 0, n)
        }),
        this.options.stateful && (this.status = t,
        this.args = n,
        this.queue.length = 0)
    }
    ,
    de);
    function de(e) {
        void 0 === e && (e = {
            stateful: !0
        }),
        this.queue = [],
        this.status = "pending",
        this.args = [],
        this.options = e
    }
    function he(t) {
        try {
            return JSON.parse(t)
        } catch (e) {
            return t
        }
    }
    function d(e) {
        try {
            return G(e) && !Object.keys(e).length ? "" : JSON.stringify(e)
        } catch (e) {
            return ""
        }
    }
    ve.prototype.push = function(e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
        this
    }
    ,
    ve.prototype.invoke = function(e, t) {
        e = this.hooks[e];
        return e && e.length && e.forEach(function(e) {
            e(t)
        }),
        this
    }
    ,
    ve.prototype.invokeWaterfall = function(e, n, r) {
        var o = this.hooks[e];
        if (!o || !o.length)
            return r(),
            this;
        var i = 0;
        return o[i](n, function e(t) {
            return t instanceof Error ? r(t) : ++i >= o.length ? r() : void o[i](n, e)
        }),
        this
    }
    ;
    var me = ve;
    function ve() {
        this.hooks = Object.create(null)
    }
    ge.prototype.on = function(e, t, n) {
        void 0 === n && (n = !1);
        var r = this.handlers[e] || [];
        if ("function" == typeof t) {
            if (n && r.__emited)
                return t.call(void 0, r.__args),
                this;
            r.push(t),
            this.handlers[e] = r
        }
        return this
    }
    ,
    ge.prototype.once = function(t, n, e) {
        void 0 === e && (e = !1);
        var r = this;
        return "function" != typeof n ? this : this.on(t, function e() {
            r.off(t, e),
            n.apply(this, p(arguments))
        }, e)
    }
    ,
    ge.prototype.emit = function(e, t) {
        var n = this.handlers[e] || [];
        return n && (n.forEach(function(e) {
            e.call(void 0, t)
        }),
        n.__args = t,
        n.__emited = !0,
        this.handlers[e] = n),
        this
    }
    ,
    ge.prototype.off = function(e, t) {
        e = this.handlers[e];
        return e && "function" == typeof t && -1 !== (t = e.indexOf(t)) && e.splice(t, 1),
        this
    }
    ;
    r = ge;
    function ge() {
        this.handlers = {}
    }
    var ye, _e, h = new r, we = (ye = function(e) {
        for (var t, n, r, o, i, a, s, c, u = function(e, t) {
            return e << t | e >>> 32 - t
        }, p = function(e) {
            for (var t = "", n = 7; 0 <= n; n--)
                t += (e >>> 4 * n & 15).toString(16);
            return t
        }, f = new Array(80), l = 1732584193, d = 4023233417, h = 2562383102, m = 271733878, v = 3285377520, g = (e = unescape(encodeURIComponent(e))).length, y = [], _ = 0; _ < g - 3; _ += 4)
            n = e.charCodeAt(_) << 24 | e.charCodeAt(_ + 1) << 16 | e.charCodeAt(_ + 2) << 8 | e.charCodeAt(_ + 3),
            y.push(n);
        switch (g % 4) {
        case 0:
            _ = 2147483648;
            break;
        case 1:
            _ = e.charCodeAt(g - 1) << 24 | 8388608;
            break;
        case 2:
            _ = e.charCodeAt(g - 2) << 24 | e.charCodeAt(g - 1) << 16 | 32768;
            break;
        case 3:
            _ = e.charCodeAt(g - 3) << 24 | e.charCodeAt(g - 2) << 16 | e.charCodeAt(g - 1) << 8 | 128
        }
        for (y.push(_); y.length % 16 != 14; )
            y.push(0);
        for (y.push(g >>> 29),
        y.push(g << 3 & 4294967295),
        t = 0; t < y.length; t += 16) {
            for (_ = 0; _ < 16; _++)
                f[_] = y[t + _];
            for (_ = 16; _ <= 79; _++)
                f[_] = u(f[_ - 3] ^ f[_ - 8] ^ f[_ - 14] ^ f[_ - 16], 1);
            for (r = l,
            o = d,
            i = h,
            a = m,
            s = v,
            _ = 0; _ <= 19; _++)
                c = u(r, 5) + (o & i | ~o & a) + s + f[_] + 1518500249 & 4294967295,
                s = a,
                a = i,
                i = u(o, 30),
                o = r,
                r = c;
            for (_ = 20; _ <= 39; _++)
                c = u(r, 5) + (o ^ i ^ a) + s + f[_] + 1859775393 & 4294967295,
                s = a,
                a = i,
                i = u(o, 30),
                o = r,
                r = c;
            for (_ = 40; _ <= 59; _++)
                c = u(r, 5) + (o & i | o & a | i & a) + s + f[_] + 2400959708 & 4294967295,
                s = a,
                a = i,
                i = u(o, 30),
                o = r,
                r = c;
            for (_ = 60; _ <= 79; _++)
                c = u(r, 5) + (o ^ i ^ a) + s + f[_] + 3395469782 & 4294967295,
                s = a,
                a = i,
                i = u(o, 30),
                o = r,
                r = c;
            l = l + r & 4294967295,
            d = d + o & 4294967295,
            h = h + i & 4294967295,
            m = m + a & 4294967295,
            v = v + s & 4294967295
        }
        return (c = p(l) + p(d) + p(h) + p(m) + p(v)).toLowerCase()
    }
    ,
    _e = Object.create(null),
    function(e) {
        return _e[e] || (_e[e] = ye(e))
    }
    );
    function be(e, t) {
        return void 0 === t && (t = 32),
        we(e).slice(0, t)
    }
    var Ee = Promise.resolve();
    function Se(e) {
        Ee.then(e)
    }
    var ke = Object.create(null);
    function Te(e, t) {
        return K(ke, e) ? {
            cached: !0,
            value: ke[e]
        } : (ke[e] = !!v(t) || (s(t) ? t() : t),
        {
            cached: !1,
            value: ke[e]
        })
    }
    Oe.prototype.use = function(e) {
        return s(e) && -1 === this.plugins.indexOf(e) && (e.call(this),
        this.plugins.push(e)),
        this
    }
    ;
    var o = Oe;
    function Oe() {
        this.hooks = new me,
        this.plugins = []
    }
    var Ae = function(e, t) {
        return (Ae = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    };
    Ae(Ie = Le, Ne = Pe = function() {}
    ),
    Ie.prototype = null === Ne ? Object.create(Ne) : (Ce.prototype = Ne.prototype,
    new Ce),
    Le.prototype.get = function() {
        return this.data
    }
    ,
    Le.prototype.set = function(e) {
        this.data = e
    }
    ,
    Le.prototype.update = function(e) {
        return c(this.data, e),
        this
    }
    ;
    var Pe, Ie, xe = Le;
    function Ce() {
        this.constructor = Ie
    }
    function Le(e) {
        var t = Pe.call(this) || this;
        return t.data = e,
        t
    }
    je.prototype.combine = function() {
        return {
            name: this.meta.get(),
            value: this.data
        }
    }
    ;
    var Ne = je;
    function je(e, t) {
        this.date = new Date,
        this.data = Object.freeze(t),
        this.meta = e
    }
    function De() {}
    Me.prototype.combine = function(e) {
        var i = []
          , a = [];
        return (e = void 0 === e ? [] : e).forEach(function(e) {
            var n, r, e = e.combine(), t = e.name, e = e.value, o = (n = t,
            r = -1,
            i.some(function(e, t) {
                return !!pe(e, n) && (r = t,
                !0)
            }),
            r);
            if (-1 === o)
                return i.push(t),
                void (a[i.length - 1] = [e]);
            a[o].push(e)
        }),
        {
            names: i,
            values: a
        }
    }
    ;
    var Re = Me;
    function Me() {}
    var Be = window
      , qe = "; "
      , Ue = "="
      , He = new RegExp("([^" + Ue + "]+)" + Ue + "(.*)")
      , Fe = Be.decodeURIComponent
      , ze = Be.encodeURIComponent
      , We = Be.escape;
    function Je(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, Fe)
    }
    var Ge = {
        get: {
            name: Je,
            value: Je
        },
        set: {
            name: function(e) {
                return ze(e).replace(/%(23|24|26|2B|5E|60|7C)/g, Fe).replace(/[\(\)]/g, We)
            },
            value: function(e) {
                return ze(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, Fe)
            }
        }
    };
    function Ve(t) {
        var n;
        if (!u(t))
            return Be.document.cookie.split(qe).some(function(e) {
                e = e.match(He);
                return !(!e || Ge.get.name(e[1]) !== t) && (n = Ge.get.value(e[2]),
                !0)
            }),
            n
    }
    function Qe(e, t, n) {
        var r;
        u(e) || v(t) || ((n = c({
            path: "/"
        }, n)).expires = function(e) {
            if (W(e = H(e) ? new Date((new Date).getTime() + 1e3 * e) : e))
                return e.toUTCString()
        }(n.expires),
        r = "",
        l(n, function(e, t) {
            e && (r += qe + t,
            !0 !== e && (e = e.split(";")[0],
            r += Ue + e))
        }),
        e = Ge.set.name(e),
        t = Ge.set.value(t),
        Be.document.cookie = e + Ue + t + r)
    }
    var m = window
      , y = document
      , Ke = !!navigator.sendBeacon
      , Xe = !(!m.performance || !m.performance.getEntries)
      , Ye = "data-spider"
      , _ = "__spider__"
      , $e = _ + n
      , Ze = _ + t
      , et = _ + "token"
      , tt = "__kernel__"
      , nt = tt + n
      , rt = tt + t
      , ot = tt + "logs"
      , it = "prev_document_url"
      , at = [".weidian.com", ".koudai.com", ".vdian.com", ".geilicdn.com", ".fangxin.com", ".ruyu.com", ".vdian.net", ".91ruyu.com", ".bibikan.cn", ".youshop01.com", ".youshop02.com", ".youshop03.com", ".youshop04.com", ".youshop05.com", ".youshop06.com", ".youshop07.com", ".youshop08.com", ".youshop09.com", ".youshop10.com", ".kou6ai.cn", ".mitao.cn"]
      , st = ["url", "src", "filename"]
      , ct = "?"
      , ut = "&"
      , pt = "="
      , ft = window
      , lt = /^[^\?#]*\?([^#]*)/;
    function dt(e) {
        return encodeURIComponent(e)
    }
    function ht(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    function mt(e) {
        var t = (e = (t = e) && (t = t.match(lt)) && t[1] || "").split(ut)
          , n = {};
        return t.forEach(function(e) {
            var t;
            e && (t = (e = e.split(pt))[0],
            e = e.slice(1).join(pt) || "",
            t && (t = ht(t),
            e = ht(e),
            K(n, t) ? (a(n[t]) || (n[t] = [n[t]]),
            n[t].push(e)) : n[t] = e))
        }),
        n
    }
    function vt(e) {
        if (!g(e))
            return "";
        var n = [];
        return l(e, function(e, t) {
            v(e) || (a(e) || (e = [e]),
            t = dt(t),
            e.forEach(function(e) {
                n.push("" + t + pt + dt(e))
            }))
        }),
        n.join(ut)
    }
    var gt = "query"
      , yt = "port"
      , _t = ["hash", "host", "hostname", "pathname", "port", "protocol"]
      , wt = ["href", "search"]
      , bt = ["origin"]
      , Et = Object.defineProperty;
    function St(e, t) {
        return e === gt ? g(t) : e === yt ? H(t) && Math.floor(t) === t : F(t) || H(t)
    }
    function kt(e) {
        e = vt(e);
        return (e ? ct : "") + e
    }
    function Tt(e, n) {
        _t.forEach(function(t) {
            Et(e, t, {
                get: function() {
                    return n[t]
                },
                set: function(e) {
                    St(t, e) && (n[t] = e)
                },
                enumerable: !0
            })
        })
    }
    function Ot(e, n) {
        wt.forEach(function(t) {
            Et(e, t, {
                get: function() {
                    return n.search = kt(n[gt]),
                    n[t]
                },
                set: function(e) {
                    St(t, e) && (n[t] = e,
                    n[gt] = mt(n.search))
                },
                enumerable: !0
            })
        })
    }
    function At(t, n) {
        bt.forEach(function(e) {
            Et(t, e, {
                get: function() {
                    return n[e]
                },
                enumerable: !0
            })
        })
    }
    Ct.prototype.toString = function() {
        return this.href
    }
    ;
    var Pt, It, xt = Ct;
    function Ct(e) {
        u(e) && (e = ft.location.href);
        var t, n, r, o = this._element = ft.document.createElement("A");
        o.href = e,
        Tt(this, this._element),
        Ot(this, this._element),
        n = (t = this)._element,
        Et(t, r = gt, {
            get: function() {
                return t.search = kt(n[r]),
                n[r]
            },
            set: function(e) {
                St(r, e) && (n[r] = e)
            },
            enumerable: !0
        }),
        At(this, this._element),
        this.href = o.href
    }
    function Lt(e, t, n) {
        var r = ft.location.href
          , r = (g(e) && (n = t,
        t = e,
        e = r),
        v(e) && (e = r),
        n = c({
            replace: !0
        }, n),
        new xt(e));
        return n.replace ? r.query = c(r.query || {}, t) : (e = vt(t)) && (n = -1 === r.search.indexOf(ct) ? ct : ut,
        r.search += n + e),
        r.toString()
    }
    function Nt(e) {
        return mt(e = v(e) ? ft.location.href : e)
    }
    function jt(e) {
        var t, n, r, o = this.constructor, e = It.call(this, e) || this;
        return Object.defineProperty(e, "name", {
            value: o.name,
            enumerable: !1,
            configurable: !0
        }),
        r = e,
        o = o.prototype,
        (t = Object.setPrototypeOf) ? t(r, o) : r.__proto__ = o,
        t = e,
        void 0 === n && (n = t.constructor),
        (r = Error.captureStackTrace) && r(t, n),
        e
    }
    Pt = function(e, t) {
        return (Pt = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ,
    It = Error;
    var Dt = jt
      , _ = It;
    function Rt() {
        this.constructor = Dt
    }
    Pt(Dt, _),
    Dt.prototype = null === _ ? Object.create(_) : (Rt.prototype = _.prototype,
    new Rt);
    e(qt, Mt = jt),
    qt.prototype.toJSON = function() {
        return {
            name: this.name,
            message: this.message,
            stack: (this.originalError || this).stack,
            originalError: this.originalError,
            sample: this.sample
        }
    }
    ;
    var Mt, Bt = qt;
    function qt(e) {
        var t = Mt.call(this, e.message || "") || this;
        return e.name && Object.defineProperty(t, "name", {
            value: e.name
        }),
        t.originalError = e.originalError || null,
        t.sample = e.sample || !1,
        t
    }
    var Ut = g(m.kernel) ? m.kernel : {};
    var Ht = ["dev", "daily", "pre"]
      , Ft = new RegExp("(" + Ht.join("|") + ")\\.");
    function zt() {
        var e = function(e, t) {
            if (v(t))
                return F(e) ? Ut[e] : void 0;
            Ut[e] = t
        }("environment");
        if (!v(e))
            return e;
        var e = location.hostname.match(Ft);
        return e && e[1] && -1 !== (e = Ht.indexOf(e[1])) ? e : 3
    }
    function Wt() {
        return 3 === zt()
    }
    var Jt = !v(console) && !!console.log;
    function w() {
        var e = arguments[0];
        e instanceof Bt && (arguments[0] = e.toString(),
        e = c(!0, {}, e.toJSON(), {
            message: e.toString()
        }),
        h.emit("reportException", e)),
        Jt && !Wt() && m.console.error.apply(console, arguments)
    }
    function Gt() {
        Jt && !Wt() && m.console.info.apply(console, arguments)
    }
    function Vt() {
        var e = arguments[0];
        e instanceof Bt && (arguments[0] = e.toString(),
        e = c(!0, {}, e.toJSON(), {
            message: e.toString()
        }),
        h.emit("reportWarn", e)),
        Jt && !Wt() && m.console.warn.apply(console, arguments)
    }
    var b = window
      , Qt = document
      , Kt = ["weidian.com", "youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "91ruyu.com", "bibikan.cn", "koudai.com", "mitao.cn"]
      , Xt = ["youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "91ruyu.com", "bibikan.cn"]
      , Yt = /AppleWebKit.*Mobile.*/i
      , $t = /WDAPP\(WDBuyer/i
      , Zt = /WDAPP\(WD\//i
      , en = navigator.userAgent.toLowerCase();
    tn = function(e, t) {
        return (tn = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        tn(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(on, nn = Error);
    var tn, nn, rn = on;
    function on(e, t, n, r) {
        e = nn.call(this, e) || this;
        return e.url = t,
        e.code = n,
        e.subcode = r,
        e
    }
    function an(e, t, n, r) {
        return new rn(e,t,n,r)
    }
    function sn(e) {
        return 200 <= e && e < 300 || 304 == e
    }
    function cn(e) {
        var e = e.split(".")
          , t = e.length;
        return (e[t - 2] + "." + e[t - 1]).toLowerCase()
    }
    pn.prototype.push = function(e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
        this
    }
    ,
    pn.prototype.unshift = function(e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.unshift(t),
        this
    }
    ,
    pn.prototype.invokeWaterfall = function(e, n, r) {
        var o = this.hooks[e];
        if (!o || !o.length)
            return r(),
            this;
        var i = 0;
        return o[i](n, function e(t) {
            return z(t) ? r(t) : ++i >= o.length ? r() : void o[i](n, e)
        }),
        this
    }
    ;
    var un = pn;
    function pn() {
        this.hooks = {}
    }
    fn.prototype.use = function(e) {
        return -1 < this._installedPlugins.indexOf(e) || !s(e) || (e.call(this),
        this._installedPlugins.push(e)),
        this
    }
    ;
    n = fn;
    function fn(e) {
        this.hooks = new un,
        this._installedPlugins = [],
        this.options = e || {},
        this.hooks = new un,
        this._installedPlugins = []
    }
    var ln = "#"
      , dn = "?"
      , hn = "&";
    function mn(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }
    function vn(e) {
        if (Q(e))
            return e.toString();
        var n, t = e;
        return (g(e) || a(e)) && (n = [],
        l(e, function(e, t) {
            v(e) || (a(e) ? t += "[]" : e = [e],
            l(e, function(e) {
                W(e) ? e = e.toISOString() : G(e) && (e = JSON.stringify(e)),
                n.push(mn(t) + "=" + mn(e))
            }))
        }),
        t = n.join(hn)),
        t
    }
    function gn(e, t) {
        if (!F(e))
            return "";
        var n = e.split(ln)
          , t = (e = n[0],
        vn(t));
        return F(t) && t && (e += (-1 === e.indexOf(dn) ? dn : hn) + t),
        n[0] = e,
        n.join(ln)
    }
    var yn = "GET"
      , _n = "json";
    function wn(e, t, n) {
        n = n || f,
        s(e) ? e(t, function() {
            n(t)
        }) : n(t)
    }
    function bn(t, n) {
        if (4 === t.readyState) {
            var e, r, o = n.responseType, i = n.url, a = n.success, s = n.error, c = (e = t.status,
            c = (c = {
                url: i
            }).url,
            0 === e && 0 === c.indexOf("file:") ? 200 : {
                1223: 204
            }[e] || e);
            if (0 !== c)
                if (sn(c)) {
                    try {
                        r = function(e, t) {
                            var n = t.responseType
                              , t = t.status
                              , r = e.response;
                            if (n === _n && e.responseType !== _n && !g(r))
                                try {
                                    r = JSON.parse(e.responseText)
                                } catch (e) {
                                    throw e
                                }
                            return {
                                data: r,
                                status: t
                            }
                        }(t, {
                            responseType: o,
                            status: c
                        })
                    } catch (e) {
                        return wn(n.beforeError, {
                            request: t,
                            response: r,
                            options: n,
                            error: an(e.message, i, -1)
                        }, s)
                    }
                    wn(n.beforeSuccess, {
                        request: t,
                        response: r,
                        options: n
                    }, a)
                } else
                    wn(n.beforeError, {
                        request: t,
                        response: r,
                        options: n,
                        error: an("Request failed with HTTP status code " + c, i, -1, 2)
                    }, s)
        }
    }
    function En(e) {
        (e = c({
            method: yn,
            responseType: _n,
            withCredentials: !0,
            cache: !0
        }, e)).method = e.method || yn;
        var t = new XMLHttpRequest;
        function m(e) {
            var t = e.request
              , e = e.options;
            t.send(e.method === yn ? null : vn(e.data))
        }
        wn(e.configured, {
            request: t,
            options: e
        }, function(e) {
            var t, n, r, o, i, a = e.request, s = ((e = e.options).method = e.method.toUpperCase(),
            a.open(e.method, (s = e.url,
            c = (u = e).method,
            t = e.cache,
            u = e.data,
            c === yn && (s = gn(s, u),
            t || (s = gn(s, {
                _: Date.now()
            }))),
            s), !0),
            c = a,
            H(u = (u = e).timeout) && (c.timeout = u),
            t = a,
            e.withCredentials && (t.withCredentials = !0),
            a), c = e;
            if (c = c.responseType)
                try {
                    s.responseType = c
                } catch (e) {}
            var u, p = a, f = (u = e).headers, l = u.method, d = u.data;
            if (g(f))
                for (var h in f)
                    !f.hasOwnProperty(h) || v(f[h]) || "content-type" === h.toLowerCase() && (l === yn || V(d)) || p.setRequestHeader(h, f[h]);
            r = e,
            (n = a).onreadystatechange = function() {
                bn(n, r)
            }
            ,
            o = r.url,
            i = r.error,
            n.onabort = function() {
                wn(r.beforeError, {
                    request: n,
                    options: r,
                    error: an("Request aborted", o, -1, 5)
                }, i),
                n = null
            }
            ,
            n.onerror = function() {
                wn(r.beforeError, {
                    request: n,
                    options: r,
                    error: an("Network Error", o, -1, 3)
                }, i),
                n = null
            }
            ,
            n.ontimeout = function() {
                var e = r.timeout ? "Timeout of " + r.timeout + "ms exceeded" : "Timeout exceeded";
                wn(r.beforeError, {
                    request: n,
                    options: r,
                    error: an(e, o, -1, 4)
                }, i),
                n = null
            }
            ,
            wn(e.beforeRequest, {
                request: a,
                options: e
            }, m)
        })
    }
    Sn = function(e, t) {
        return (Sn = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    var Sn, kn = ["configured", "beforeRequest", "beforeSuccess", "beforeError"];
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        Sn(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(Pn, Tn = n),
    Pn.prototype.request = function(e, t) {
        var n = this
          , i = c(!0, {}, this.options, t || {}, {
            url: e,
            extra: {}
        });
        return new Promise(function(e, t) {
            var r, o;
            F(i.url) && i.url ? (r = i,
            o = n,
            l(kn, function(n) {
                r[n] = function(e, t) {
                    o.hooks.invokeWaterfall(n, e, t)
                }
            }),
            i.success = e,
            i.error = t,
            En(i)) : t({
                error: an("Url Error", i.url, -2)
            })
        }
        )
    }
    ;
    var Tn, On, An = Pn;
    function Pn(e) {
        return Tn.call(this, e) || this
    }
    function In(e) {
        return new xt(e).pathname.slice(1) || ""
    }
    On = function(e, t) {
        return (On = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        On(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(Cn, xn = n),
    Cn.prototype.request = function(e, t) {
        var o, i, t = c({
            url: In(e),
            data: (t = t && t.data) && t.param || {}
        }, this.options);
        return function(e) {
            if (F(e) && e)
                return (e = In(e)) && 3 === e.split("/").length
        }(e) ? (o = t.url,
        i = t.data,
        new Promise(function(n, r) {
            v(b.KDJSBridge2) ? r(an("Jsbridge Undefined", o, -3, 1)) : b.KDJSBridge2.call("WDJSBridge", "thorRequest", {
                url: o,
                param: i
            }, function(e) {
                var t = (null == (t = null == e ? void 0 : e.param) ? void 0 : t._errMsg) || {};
                0 === t.code ? n(e) : (e = t.message,
                10001 === t.code || -1 !== e.indexOf("暂未实现") || -1 !== e.indexOf("not implemented") ? r(an("Jsbridge Method Not Implement Error", o, -3, 2)) : r(an(t.message || "Jsbridge Method Call Error", o, -3, 3)))
            })
        }
        ).then(function(e) {
            return e.param.thorResponse
        })) : Promise.reject(an("Url Error Or Url Pathname Illegal", e, -2))
    }
    ;
    var xn, t = Cn;
    function Cn(e) {
        return xn.call(this, e) || this
    }
    function Ln(e) {
        var t = e.response
          , e = e.options
          , t = t.data;
        return "json" !== e.responseType || G(t) ? t : Promise.reject(an("JSON Data Error", e.url, -1, 1))
    }
    function Nn() {
        var e = this
          , t = (e.hooks.push("configured", function(e, t) {
            var n, e = e.options;
            g(n = e.data) && l(n, function(e, t) {
                (g(e) || a(e)) && (n[t] = JSON.stringify(e))
            }),
            t()
        }),
        e.request);
        e.request = function() {
            return t.apply(e, arguments).then(Ln, function(e) {
                e = z(e) ? e : e.error;
                return Promise.reject(e)
            })
        }
    }
    var jn = {}
      , Dn = !1
      , Rn = !1
      , Mn = [];
    function Bn() {
        return !v(b.KDJSBridge2) && ($t.test(en) || Zt.test(en))
    }
    function qn() {
        var e, t, n;
        function r() {
            var t;
            2 === ++e && (Dn = !0,
            t = jn,
            l(Mn, function(e) {
                e(t)
            }),
            Mn.length = 0)
        }
        Rn || (Rn = !0,
        e = 0,
        t = function(e) {
            e && (jn.suid = e),
            r()
        }
        ,
        Bn() ? b.KDJSBridge2.call("WDJSBridge", "getSuid", {}, function(e) {
            e && e.param && e.param.suid ? t(e.param.suid) : t()
        }) : t(),
        n = function(e) {
            e && (jn.cuid = e),
            r()
        }
        ,
        Bn() ? b.KDJSBridge2.call("WDJSBridge", "getCuid", {}, function(e) {
            e && e.param && e.param.cuid ? n(e.param.cuid) : n()
        }) : n())
    }
    function Un(e) {
        qn(),
        Dn ? e(jn) : Mn.push(e)
    }
    function Hn(e, t) {
        switch (t) {
        case "thor":
            return -1 < Kt.indexOf(e);
        case "vimg":
            return -1 < Xt.indexOf(e);
        default:
            return
        }
    }
    function Fn() {
        return cn(location.hostname)
    }
    function zn(e) {
        var t = new RegExp(cn(e) + "$");
        return e.replace(t, Fn())
    }
    function Wn(e) {
        var t, e = new xt(e), n = e.hostname, r = Fn();
        return /^thor\./gi.test(n) && Hn(r, "thor") && ((t = e).hostname = zn(t.hostname),
        e = t),
        /^vimg\./gi.test(n) && Hn(r, "vimg") && ((t = e).hostname = zn(t.hostname).replace(/^vimg\./gi, ""),
        t.pathname = "vimg" + t.pathname,
        e = t),
        e.href
    }
    var Jn = "wdtoken";
    function Gn(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function Vn(e, t) {
        return Promise.reject((t = t,
        z(e = e) ? (n = e.code,
        r = e.subcode,
        o = e.message,
        i = e.stack,
        {
            status: {
                code: v(n) ? -1 : n,
                subcode: r,
                message: o
            },
            result: null,
            url: e.url,
            stack: i
        }) : (i = an("Thor code is not equal zero", t, -4).stack,
        (e = e || {}).url = t,
        e.stack = i,
        e)));
        var n, r, o, i
    }
    function Qn() {
        if (Yt.test(en)) {
            var e = document.querySelectorAll('meta[name="viewport"]')
              , e = e[e.length - 1];
            if (e)
                return (e = (e = e.getAttribute("content")) && e.match(/initial\-scale=([\d\.]+)/)) ? 1 / Number(e[1]) : 1
        }
        return 1
    }
    var Kn = 20
      , Xn = "redirect"
      , Yn = 1e3;
    function $n(e) {
        var t, n;
        if (g(e)) {
            var r = g(e.status) ? e.status : {}
              , e = g(e.result) ? e.result : {}
              , o = e.authPageUrl;
            if (r.code == Kn && o)
                return o = Lt(o, ((r = {})[Xn] = b.location.href,
                r)),
                e.message && (r = e.message,
                e = Qn(),
                r = '<div class="hawk-toast">' + r + '</div><style type="text/css">.hawk-toast{position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10000;width:50%;color:#fff;background:rgba(33,33,33,0.9);line-height:1.5;border-radius:' + 8 * e + "px;max-width:" + 300 * e + "px;padding:" + 20 * e + "px;font-size:" + 16 * e + "px;}</style>",
                (n = Qt.body) && ((t = Qt.createElement("div")).innerHTML = r,
                n.appendChild(t),
                setTimeout(function() {
                    n.removeChild(t)
                }, 1500))),
                void setTimeout(function() {
                    var e;
                    (e = o) && b.location.assign(e)
                }, Yn)
        }
        return 1
    }
    var _ = b.XMLHttpRequest
      , Zn = _ && _.prototype
      , er = Zn && Zn.send;
    function tr(e, t, n) {
        try {
            var r;
            if (4 == t.readyState)
                if (sn(t.status))
                    return r = g(t.response) ? t.response : function(e, t) {
                        try {
                            return JSON.parse(e, t)
                        } catch (e) {
                            return
                        }
                    }(t.responseText),
                    e.beforeSuccess(r, n)
        } catch (e) {}
        n()
    }
    var n = b.Element
      , nr = n && n.prototype
      , rr = ["appendChild", "insertBefore"];
    function or(a) {
        l(rr, function(e) {
            var t = nr && nr[e];
            t && (nr[e] = function(e) {
                var o, i;
                return e && "SCRIPT" === e.tagName && e.src && F(e = Nt(e.src).callback) && (o = function(e) {
                    var t = e.split(".")
                      , n = t.length;
                    if (n) {
                        var r, o = b, i = b;
                        try {
                            for (var a = 0; a < n; a++) {
                                if (!i)
                                    return;
                                r = t[a],
                                i = (o = i)[r]
                            }
                            if (!s(i))
                                return
                        } catch (e) {
                            return
                        }
                        return {
                            namespace: o,
                            name: r,
                            definition: i
                        }
                    }
                }(e)) && (i = o.definition,
                o.namespace[o.name] = function(e) {
                    var t = arguments
                      , n = a
                      , r = function() {
                        i.apply(o.namespace, t)
                    };
                    try {
                        return void n.beforeSuccess(e, r)
                    } catch (e) {}
                    r()
                }
                ),
                t.apply(this, p(arguments))
            }
            )
        })
    }
    var ir = b.fetch;
    function ar(i) {
        var e;
        "function" == typeof (e = ir) && -1 !== e.toString().indexOf("[native code]") && (b.fetch = function() {
            return ir.apply(this, arguments).then(function(o) {
                return new Promise(function(e) {
                    var t = i
                      , n = o
                      , r = function() {
                        e(o)
                    };
                    try {
                        if (sn(n.status))
                            return void n.clone().json().then(function(e) {
                                t.beforeSuccess(e, r)
                            }).catch(function() {
                                r()
                            })
                    } catch (e) {}
                    r()
                }
                )
            })
        }
        )
    }
    function sr(e) {
        var i;
        g(e) && s(e.beforeSuccess) && (i = e,
        s(er) && (Zn.send = function() {
            var e = arguments
              , t = this
              , n = t.onreadystatechange
              , r = t.onload
              , o = !1;
            return n && (o = !0,
            t.onreadystatechange = function() {
                var e = arguments;
                tr(i, t, function() {
                    n.apply(t, e)
                })
            }
            ),
            r && !o && (t.onload = function() {
                var e = arguments;
                tr(i, t, function() {
                    r.apply(t, e)
                })
            }
            ),
            er.apply(t, e)
        }
        ),
        or(e),
        ar(e))
    }
    function cr(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function ur(e) {
        return Promise.reject((n = (t = e).code,
        r = e.subcode,
        o = e.message,
        i = e.url,
        t = e.stack,
        {
            status: {
                code: v(n) ? -3 : n,
                subcode: r,
                message: o
            },
            result: null,
            url: i,
            stack: t
        }));
        var t, n, r, o, i
    }
    b.hawk = b.hawk || {
        disabled: !1
    };
    var pr = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json, */*"
    };
    function fr(e) {
        e = c(!0, {}, {
            headers: pr,
            cache: !1
        }, e);
        e = new An(e);
        return e.use(Nn),
        e
    }
    _ = fr();
    _.use(function() {
        b.hawk.disabled || (sr({
            beforeSuccess: function(e, t) {
                $n(e) && t()
            }
        }),
        b.hawk.disabled = !0)
    }),
    _.use(function() {
        var e = this
          , n = (e.hooks.unshift("configured", function(e, t) {
            var n, r, o, i, e = e.options;
            e.url = Wn(e.url),
            e.responseType = "json",
            e.data = e.data || {},
            n = e.data,
            (r = Ve(Jn)) && (g(n) ? n[Jn] = r : V(n) ? n.append(Jn, r) : Q(n) && n.set(Jn, r)),
            e.extra.deviceId ? (o = e.data,
            i = function() {
                t()
            }
            ,
            Un(function(e) {
                g(o) && (o.context = c(o.context || {}, e)),
                i()
            })) : t()
        }),
        e.request);
        e.request = function() {
            var t = arguments[0];
            return n.apply(e, arguments).then(Gn).catch(function(e) {
                return Vn(e, t)
            })
        }
    });
    (new t).use(function() {
        var e = this
          , t = e.request;
        e.request = function() {
            return t.apply(e, arguments).then(cr, ur)
        }
    });
    var lr = fr();
    function dr(e, t) {
        return t = c({
            method: "post"
        }, t),
        lr.request(e, t)
    }
    function hr(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }
    function mr(e) {
        try {
            r = [],
            g(n = e) && l(n, function(e, t) {
                e = g(e) || a(e) ? d(e) : e,
                r.push(hr(t) + "=" + hr(e))
            });
            var t = r.join("&");
            if (t)
                return new Blob([t],{
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                })
        } catch (e) {}
        var n, r
    }
    var vr, gr = /(Android)\s+([\d.]+)/i, yr = /QQ\/([\d.]+)/i, _r = /micromessenger/i, wr = /wxwork\/.* MicroMessenger/i, br = /WDAPP\(WDBuyer/i, Er = /WDAPP\(WD\//i, Sr = /WDAPP\((?:wdbuyer|wd)\/([\d.]+)/i, kr = /miniProgram/i, Tr = navigator.userAgent.toLowerCase();
    function Or() {
        return gr.test(Tr)
    }
    function Ar() {
        return yr.test(Tr)
    }
    function Pr() {
        return _r.test(Tr) && !Ir()
    }
    function Ir() {
        return wr.test(Tr)
    }
    function xr() {
        return br.test(Tr)
    }
    function Cr() {
        return Er.test(Tr)
    }
    function Lr() {
        return "miniprogram" === window.__wxjs_environment || kr.test(Tr)
    }
    function Nr() {
        var e, t, n, r = [Math.random(), m.navigator.userAgent, y.cookie, m.location.href, d(m.performance), Date.now(), m.screen.availHeight, m.screen.availWidth, Math.random()];
        try {
            r.push((e = [],
            (t = document.createElement("canvas")).width = 2e3,
            t.height = 200,
            t.style.display = "inline",
            (n = t.getContext("2d")).rect(0, 0, 10, 10),
            n.rect(2, 2, 6, 6),
            e.push("canvas winding:" + (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
            n.textBaseline = "alphabetic",
            n.fillStyle = "#f60",
            n.fillRect(125, 1, 62, 20),
            n.fillStyle = "#069",
            n.font = "11pt no-real-font-123",
            n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
            n.fillStyle = "rgba(102, 204, 0, 0.7)",
            n.font = "18pt Arial",
            n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
            n.globalCompositeOperation = "multiply",
            n.fillStyle = "rgb(255,0,255)",
            n.beginPath(),
            n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            n.fillStyle = "rgb(0,255,255)",
            n.beginPath(),
            n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            n.fillStyle = "rgb(255,255,0)",
            n.beginPath(),
            n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
            n.closePath(),
            n.fill(),
            n.fillStyle = "rgb(255,0,255)",
            n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
            n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
            n.fill("evenodd"),
            e.push("canvas fp:" + t.toDataURL()),
            e.join()))
        } catch (e) {}
        return be(function(e) {
            for (var t = e.length - 1; 0 < t; t--) {
                var n = Math.floor(Math.random() * (t + 1))
                  , r = e[t];
                e[t] = e[n],
                e[n] = r
            }
            return e
        }(r).join())
    }
    function jr(e, t) {
        return be([vr = v(vr) ? Nr() : vr, Date.now(), Math.random(), e].join(), t || 16)
    }
    var Dr = m.document.createElement("A")
      , Rr = y.body;
    function Mr(e) {
        return "." + (e || location.hostname).split(":")[0].split(".").slice(-2).join(".")
    }
    function E() {
        return Math.round(performance.now())
    }
    function Br() {
        var e = zt()
          , t = "";
        return e < 2 ? t = Ht[1] + "." : 2 == e && (t = Ht[2] + "."),
        "https://logtake." + t + "weidian.com/h5collector/webcollect/3.0"
    }
    function qr() {
        return xr() || Cr()
    }
    function Ur(e) {
        return e.split("#")[0].split("?")[0]
    }
    function Hr(e) {
        return e instanceof Element
    }
    function Fr() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }
    function zr() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }
    function Wr(n) {
        return a(n) ? n.filter(function(e, t) {
            return n.indexOf(e, 0) === t
        }) : []
    }
    function Jr(e) {
        var t = [];
        return t = e && (e = e.split(",")) && e.length ? e.map(function(e) {
            return e.replace(/^\s*/g, "").replace(/\s*/g, "")
        }) : t
    }
    function Gr() {
        return Jr(Rr && Rr.dataset.vcollectDisabled)
    }
    function Vr(e) {
        return -1 < Gr().indexOf(e)
    }
    function Qr(e) {
        return -1 < Jr(Rr && Rr.dataset.vcollectPlugin).indexOf(e)
    }
    function Kr(e) {
        var t = (t = Jr(Rr && Rr.dataset.vcollectMultidomain)).length ? t : Rr && null !== Rr.getAttribute("data-vcollect-multidomain") ? ["pathtracker"] : [];
        return e ? -1 < t.indexOf(e) : t.length
    }
    function Xr(e, n) {
        return e.forEach(function(e) {
            var t;
            e.combine && ((t = he(e.combine().name.extend)).scene || (t.scene = n),
            e.combine().name.extend = d(t))
        }),
        e
    }
    var Yr = "https://assets.geilicdn.com/v-components/cdn/jweixin/1.6.0/index.fix.min.js"
      , $r = "gh_c6feb778444d"
      , Zr = ((n = {})[$r] = ["weidian.com", "koudai.com", "v5.cc"],
    n)
      , eo = {
        mpid: $r,
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "chooseImage", "getLocalImgData", "previewImage", "downloadImage", "openLocation", "getLocation", "launch3rdApp", "getInstallState", "uploadImage", "scanQRCode"]
    };
    function to(o) {
        return new Promise(function(e, t) {
            var n, r;
            F(o) ? (r = Te("LOAD_SCRIPT_" + o, function() {
                return new le
            }),
            n = r.value,
            r = r.cached,
            n.push({
                resolve: e,
                reject: t
            }),
            r || (e = y.head,
            (r = y.createElement("script")).addEventListener("load", function() {
                n.resolve()
            }),
            r.addEventListener("error", function() {
                return n.reject()
            }),
            r.crossOrigin = "anonymous",
            r.src = o,
            e.appendChild(r))) : t()
        }
        )
    }
    function no(o) {
        return new Promise(function(e, t) {
            var n = Te(o, function() {
                return new le
            })
              , r = n.value
              , n = n.cached;
            r.push({
                resolve: e,
                reject: t
            }),
            n || dr("https://thor." + (zt() < 3 ? Ht[2] + "." : "") + "weidian.com/weixin/getjsconfig/2.0", {
                data: {
                    param: {
                        url: m.location.href,
                        mpid: o
                    }
                }
            }).then(function(e) {
                return r.resolve(e)
            }).catch(function() {
                return r.reject()
            })
        }
        )
    }
    function ro(e, t) {
        Te(e).cached || h.emit(e, t)
    }
    function oo(e) {
        return n = e,
        new Promise(function(e, t) {
            try {
                return n === $r && Zr[n].indexOf(Mr().slice(1)) < 0 ? t() : e(null)
            } catch (e) {
                return t()
            }
        }
        ).then(function() {
            return no(e)
        });
        var n
    }
    function io(e) {
        var t = e || {}
          , e = t.mpid || $r;
        return Promise.all([new Promise(function(e, t) {
            var n = m.jWeixin;
            return n ? e(n) : to(Yr).then(e).catch(t)
        }
        ), oo(e)]).then(function(e) {
            return i = e[1],
            a = t,
            new Promise(function(t, e) {
                var n = i.status
                  , r = i.result
                  , o = m.jWeixin || m.wx;
                n && 0 === n.code ? (n = {
                    beta: !0,
                    debug: !1,
                    appId: r.appId,
                    timestamp: r.timestamp,
                    nonceStr: r.nonceStr,
                    signature: r.signature,
                    jsApiList: Wr((new Array).concat(eo.jsApiList, a.jsApiList || [])),
                    openTagList: ["wx-open-launch-app", "wx-open-launch-weapp"]
                },
                o.config(n),
                o.ready(function() {
                    ro("wxJsbridgeLoad", {
                        result: !0
                    }),
                    t(o)
                }),
                o.error(function(e) {
                    Vt(new Bt({
                        message: JSON.stringify(e),
                        name: "[Pathtracker Warn] WxConfigWarn"
                    })),
                    ro("wxJsbridgeLoad", {
                        result: !1
                    }),
                    t(o)
                })) : (ro("wxJsbridgeLoad", {
                    result: !1
                }),
                e(i))
            }
            );
            var i, a
        }).catch(function(e) {
            e && Vt(new Bt({
                message: e.message,
                name: "[Pathtracker Warn] WxConfigWarn",
                originalError: e
            }))
        })
    }
    function ao(n) {
        return void 0 === n && (n = !1),
        new Promise(function(e, t) {
            m.KDJSBridge2 && (n && ro("wdJsbridgeLoad", {
                result: !0
            }),
            e(m.KDJSBridge2)),
            to("https://assets.geilicdn.com/v-components/jsbridge/1.0.4/index.min.js").then(function() {
                m.KDJSBridge2 ? (n && ro("wdJsbridgeLoad", {
                    result: !0
                }),
                e(m.KDJSBridge2)) : (n && ro("wdJsbridgeLoad", {
                    result: !1
                }),
                t())
            }).catch(function() {
                n && ro("wdJsbridgeLoad", {
                    result: !1
                }),
                t()
            })
        }
        )
    }
    var so = /complete|interactive|loaded/;
    function co(e) {
        m.addEventListener("load", e)
    }
    var uo = !1;
    function po(e) {
        if (uo)
            return e();
        co(e)
    }
    function fo(e) {
        y.addEventListener("visibilitychange", e, !1)
    }
    function lo(e) {
        so.test(y.readyState) ? e() : y.addEventListener("DOMContentLoaded", e, !0)
    }
    co(function() {
        uo = !0
    });
    ho = new le,
    mo = new le,
    m.addEventListener("unload", function() {
        ho.resolve(),
        mo.resolve()
    }, !0);
    var ho, mo, _ = {
        beforeUnloadCacheQueue: ho,
        unloadCacheQueue: mo
    }, vo = _.beforeUnloadCacheQueue, t = _.unloadCacheQueue;
    function go(e) {
        vo.push({
            resolve: e
        })
    }
    var yo = window
      , _o = document
      , wo = _o.createElement("a")
      , n = /complete|loaded|interactive/
      , bo = [".weidian.com", ".koudai.com", ".vdian.com", ".geilicdn.com", ".fangxin.com", ".ruyu.com", ".vdian.net", ".91ruyu.com", ".bibikan.cn", ".youshop01.com", ".youshop02.com", ".youshop03.com", ".youshop04.com", ".youshop05.com", ".youshop06.com", ".youshop07.com", ".youshop08.com", ".youshop09.com", ".youshop10.com", ".kou6ai.cn", ".mitao.cn"]
      , Eo = /^(javascript|data):/i
      , So = (new RegExp("[" + Object.keys({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;",
        "`": "&#96;"
    }).join("") + "]","g"),
    ["url", "src", "filename"])
      , ko = "__safetyCache"
      , To = String.fromCharCode;
    var Oo = {};
    function Ao(e) {
        if (F(e))
            return Oo[e];
        c(Oo, e)
    }
    var Po = xo(bo);
    function Io(e) {
        return e = "." !== e[0] ? "^" + e : "(^|.)" + e.substr(1),
        e = (e += "$").replace(/\./g, "\\.")
    }
    function xo(e) {
        e = e.map(Io).join("|");
        return new RegExp("(" + e + ")")
    }
    function Co(e, t) {
        return (t && t.whiteDomains.length ? xo(function(e) {
            var e = c({
                append: !0
            }, e || {})
              , t = e.whiteDomains || [];
            {
                var n;
                return e.append ? (n = bo,
                t.forEach(function(e) {
                    n.push(e)
                }),
                n) : t
            }
        }(t)) : Po).test(e)
    }
    function Lo(e, t) {
        if (u(e))
            return !1;
        e = e.replace(/&#x([\dabcdef]+);?/gi, function(e, t) {
            return To(parseInt(t, 16))
        }).replace(/&#(\d+);?/g, function(e, t) {
            return To(parseInt(t, 10))
        }).trim(),
        e = e,
        wo.href = e;
        var n, e = wo;
        return n = e.protocol,
        !Eo.test(n) && Co(e.hostname, t)
    }
    function No(e) {
        var t, n, r = function(e) {
            switch (e.nodeName) {
            case "AUDIO":
            case "VIDEO":
                return e.src || e.currentSrc;
            case "OBJECT":
                return e.data;
            case "A":
                return e.href;
            case "PARAM":
                if (-1 !== So.indexOf(e.name))
                    return e.value
            }
            return e.src
        }(e);
        !r || (t = r,
        (n = e)[ko] && n[ko][t]) || (Lo(r) ? (n = r,
        (t = e)[ko] = t[ko] || {},
        t[ko][n] = !0) : (r = e).parentNode && r.parentNode.removeChild(r))
    }
    var jo = {
        A: No,
        IMG: No,
        IFRAME: No,
        AUDIO: No,
        VIDEO: No,
        EMBED: No,
        OBJECT: No,
        PARAM: No,
        SOURCE: No
    }
      , Do = Object.keys(jo).join(",");
    Object.keys({
        SCRIPT: No
    }).join(","),
    X(function() {
        _o.querySelectorAll(Do).forEach(function(e) {
            jo[e.nodeName](e)
        })
    });
    function Ro(e) {
        if (-1 !== e.indexOf(tt)) {
            var t = void 0;
            if (void 0 === t && (t = ""),
            m.opener)
                try {
                    m.opener.name = t
                } catch (e) {}
            m.name = t
        } else
            e = "";
        return e
    }
    _ = function() {
        try {
            var e;
            Ao("observeIframe") && (e = yo.document.referrer || "",
            yo.self == yo.top || Lo(e) || (yo.top.location.href = yo.location.href))
        } catch (e) {}
    }
    ,
    n.test(_o.readyState) && _o.body ? _() : yo.addEventListener("DOMContentLoaded", _),
    Ao({
        observeIframe: !0
    });
    g(Mo = he(Ro(function() {
        var e = "";
        if (m.opener)
            try {
                e = m.opener.name
            } catch (e) {}
        return e = e || m.name
    }()))) || (Mo = {}),
    t.push({
        resolve: function() {
            Ko() && (m.name = d(Mo))
        }
    });
    var Mo, Bo = {
        get: function(e) {
            return e ? Mo[e] : Mo
        },
        set: function(e, t) {
            Mo[e] = t
        },
        remove: function(e) {
            e ? delete Mo[e] : Mo = {}
        }
    };
    function qo(e) {
        return Bo.get(e)
    }
    function Uo(e, t) {
        Bo.set(e, t)
    }
    var Ho, Fo, zo = m.history, Wo = zo.pushState, Jo = zo.replaceState, n = m.history.pushState ? "popstate" : "hashchange", Go = new le({
        stateful: !1
    });
    function Vo(e) {
        var t = S();
        t !== Ho && (Go.resolve(e, {
            oldUrl: Ho,
            newUrl: t
        }),
        Ho = t)
    }
    function Qo(e) {
        Go.push({
            resolve: e
        })
    }
    function Ko() {
        var e = y.destination;
        return e && Lo(e)
    }
    function S() {
        return y.URL
    }
    Ho = S(),
    m.addEventListener(n, Vo),
    Wo && (zo.pushState = function() {
        var e = Wo.apply(zo, arguments);
        return Vo(),
        e
    }
    ,
    zo.replaceState = function() {
        var e = Jo.apply(zo, arguments);
        return Vo(),
        e
    }
    ),
    fo(function() {
        "visible" === y.visibilityState && (y.destination = null)
    }),
    Qo(function(e, t) {
        t = t.oldUrl;
        Fo = t
    }),
    go(function() {
        Uo(it, S())
    });
    var k = window
      , Xo = document
      , Yo = /AppleWebKit.*Mobile.*/i
      , $o = /WDAPP\(WDBuyer/i
      , Zo = navigator.userAgent.toLowerCase();
    function ei(e) {
        return (ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function ti() {}
    function ni(e) {
        return null == e
    }
    function ri(e) {
        return null == e || "" === e
    }
    function oi(t) {
        return function(e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }
    function ii(e) {
        return oi("String")(e)
    }
    function ai(e) {
        return oi("Error")(e)
    }
    function si(e) {
        return oi("Array")(e)
    }
    function ci(e) {
        return "function" == typeof e
    }
    function T(e) {
        return oi("Object")(e)
    }
    function ui(e) {
        return null !== e && "object" === ei(e)
    }
    function pi(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function fi(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function li(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function di(e, t) {
        if (si(e))
            for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
        else if (T(e))
            for (var o in e)
                li(e, o) && t.call(null, e[o], o, e)
    }
    function hi(e) {
        for (var n, r, t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return r = oi("Boolean")(e) ? (n = e,
        t.shift()) : e,
        di(t, function(e) {
            di(e, function(e, t) {
                n && (si(e) || T(e)) ? (si(e) ? si(r[t]) || (r[t] = []) : T(r[t]) || (r[t] = {}),
                hi(n, r[t], e)) : r[t] = e
            })
        }),
        r
    }
    mi = function(e, t) {
        return (mi = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        mi(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(yi, vi = Error);
    var mi, vi, gi = yi;
    function yi(e, t, n) {
        e = vi.call(this, e) || this;
        return e.code = t,
        e.subcode = n,
        e
    }
    function _i(e, t, n) {
        return new gi(e,t,n)
    }
    function wi(e) {
        return 200 <= e && e < 300 || 304 == e
    }
    function bi(e) {
        return $o.test(Zo) && null != (e = null == e ? void 0 : e.extra) && e.useNative
    }
    Si.prototype.push = function(e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
        this
    }
    ,
    Si.prototype.invokeWaterfall = function(e, n, r) {
        var o = this.hooks[e];
        if (!o || !o.length)
            return r(),
            this;
        var i = 0;
        return o[i](n, function e(t) {
            return ai(t) ? r(t) : ++i >= o.length ? r() : void o[i](n, e)
        }),
        this
    }
    ;
    var Ei = Si;
    function Si() {
        this.hooks = {}
    }
    ki.prototype.use = function(e) {
        return -1 < this._installedPlugins.indexOf(e) || !ci(e) || (e.call(this),
        this._installedPlugins.push(e)),
        this
    }
    ;
    _ = ki;
    function ki(e) {
        this.hooks = new Ei,
        this._installedPlugins = [],
        this.options = e || {},
        this.hooks = new Ei,
        this._installedPlugins = []
    }
    var Ti = "#"
      , Oi = "?"
      , Ai = "&";
    function Pi(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }
    function Ii(e) {
        if (fi(e))
            return e.toString();
        var n, t = e;
        return (T(e) || si(e)) && (n = [],
        di(e, function(e, t) {
            ni(e) || (si(e) ? t += "[]" : e = [e],
            di(e, function(e) {
                oi("Date")(e) ? e = e.toISOString() : ui(e) && (e = JSON.stringify(e)),
                n.push(Pi(t) + "=" + Pi(e))
            }))
        }),
        t = n.join(Ai)),
        t
    }
    function xi(e, t) {
        if (!ii(e))
            return "";
        var n = e.split(Ti)
          , t = (e = n[0],
        Ii(t));
        return ii(t) && t && (e += (-1 === e.indexOf(Oi) ? Oi : Ai) + t),
        n[0] = e,
        n.join(Ti)
    }
    var Ci = "GET"
      , Li = "json";
    function Ni(e, t, n) {
        n = n || ti,
        ci(e) ? e(t, function() {
            n(t)
        }) : n(t)
    }
    function ji(t, n) {
        var e = n.responseType
          , r = n.url
          , o = n.success
          , i = n.error;
        if (4 === t.readyState) {
            a = t.status,
            r = (r = {
                url: r
            }).url;
            var r = 0 === a && 0 === r.indexOf("file:") ? 200 : {
                1223: 204
            }[a] || a
              , a = void 0;
            if (wi(r)) {
                try {
                    a = function(e, t) {
                        var n = t.responseType
                          , t = t.status
                          , r = e.response;
                        if (n === Li && e.responseType !== Li && !T(r))
                            try {
                                r = JSON.parse(e.responseText)
                            } catch (e) {
                                throw e
                            }
                        return {
                            data: r,
                            status: t
                        }
                    }(t, {
                        responseType: e,
                        status: r
                    })
                } catch (e) {
                    return Ni(n.beforeError, {
                        request: t,
                        response: a,
                        options: n,
                        error: e
                    }, i)
                }
                Ni(n.beforeSuccess, {
                    request: t,
                    response: a,
                    options: n
                }, o)
            } else
                Ni(n.beforeError, {
                    request: t,
                    response: a,
                    options: n,
                    error: new Error("Network Error")
                }, i)
        }
    }
    function Di(e) {
        (e = hi({
            method: Ci,
            responseType: Li,
            withCredentials: !0,
            cache: !0
        }, e)).method = e.method || Ci;
        var t = new XMLHttpRequest;
        function f(e) {
            var t = e.request
              , e = e.options;
            t.send(e.method === Ci ? null : Ii(e.data))
        }
        Ni(e.configured, {
            request: t,
            options: e
        }, function(e) {
            var t, n = e.request, r = e.options, o = (r.method = r.method.toUpperCase(),
            n.open(r.method, (e = r.url,
            t = (o = r).method,
            i = r.cache,
            o = r.data,
            t === Ci && (e = xi(e, o),
            i || (e = xi(e, {
                _: Date.now()
            }))),
            e), !0),
            n.onreadystatechange = function() {
                ji(n, r)
            }
            ,
            t = n,
            r.withCredentials && (t.withCredentials = !0),
            n), i = r;
            if (i = i.responseType)
                try {
                    o.responseType = i
                } catch (e) {}
            var a = n
              , s = (e = r).headers
              , c = e.method
              , u = e.data;
            if (T(s))
                for (var p in s)
                    !s.hasOwnProperty(p) || ni(s[p]) || "content-type" === p.toLowerCase() && (c === Ci || pi(u)) || a.setRequestHeader(p, s[p]);
            Ni(r.beforeRequest, {
                request: n,
                options: r
            }, f)
        })
    }
    Ri = function(e, t) {
        return (Ri = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    var Ri, Mi = ["configured", "beforeRequest", "beforeSuccess", "beforeError"];
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        Ri(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(qi, Bi = _),
    qi.prototype.request = function(e, t) {
        var n = this
          , i = hi(!0, {}, this.options, t || {}, {
            url: e,
            extra: {}
        });
        return new Promise(function(e, t) {
            var r, o;
            ii(i.url) && i.url ? (r = i,
            o = n,
            di(Mi, function(n) {
                r[n] = function(e, t) {
                    o.hooks.invokeWaterfall(n, e, t)
                }
            }),
            i.success = e,
            i.error = t,
            Di(i)) : t({
                error: _i("Url Error", -2)
            })
        }
        )
    }
    ;
    var Bi, t = qi;
    function qi(e) {
        return Bi.call(this, e) || this
    }
    var Ui = "?"
      , Hi = "&"
      , Fi = "="
      , zi = window
      , Wi = /^[^\?#]*\?([^#]*)/;
    function Ji(e) {
        return encodeURIComponent(e)
    }
    function Gi(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    function Vi(e) {
        var t = (e = (t = e) && (t = t.match(Wi)) && t[1] || "").split(Hi)
          , n = {};
        return t.forEach(function(e) {
            var t;
            e && (t = (e = e.split(Fi))[0],
            e = e.slice(1).join(Fi) || "",
            t && (t = Gi(t),
            e = Gi(e),
            li(n, t) ? (si(n[t]) || (n[t] = [n[t]]),
            n[t].push(e)) : n[t] = e))
        }),
        n
    }
    function Qi(e) {
        if (!T(e))
            return "";
        var n = [];
        return di(e, function(e, t) {
            ni(e) || (si(e) || (e = [e]),
            t = Ji(t),
            e.forEach(function(e) {
                n.push("" + t + Fi + Ji(e))
            }))
        }),
        n.join(Hi)
    }
    var Ki = "query"
      , Xi = ["hash", "host", "hostname", "pathname", "port", "protocol"]
      , Yi = ["href", "search"]
      , $i = ["origin"]
      , Zi = Object.defineProperty;
    function ea(e, t) {
        return e === Ki ? T(t) : ii(t) || oi("Number")(t)
    }
    function ta(e) {
        e = Qi(e);
        return (e ? Ui : "") + e
    }
    function na(e, n) {
        Xi.forEach(function(t) {
            Zi(e, t, {
                get: function() {
                    return n[t]
                },
                set: function(e) {
                    ea(t, e) && (n[t] = e)
                },
                enumerable: !0
            })
        })
    }
    function ra(e, n) {
        Yi.forEach(function(t) {
            Zi(e, t, {
                get: function() {
                    return n.search = ta(n[Ki]),
                    n[t]
                },
                set: function(e) {
                    ea(t, e) && (n[t] = e,
                    n[Ki] = Vi(n.search))
                },
                enumerable: !0
            })
        })
    }
    function oa(t, n) {
        $i.forEach(function(e) {
            Zi(t, e, {
                get: function() {
                    return n[e]
                },
                enumerable: !0
            })
        })
    }
    sa.prototype.toString = function() {
        return this.href
    }
    ;
    var ia, aa = sa;
    function sa(e) {
        ri(e) && (e = zi.location.href);
        var t, n, r, o = this._element = zi.document.createElement("A");
        o.href = e,
        na(this, this._element),
        ra(this, this._element),
        n = (t = this)._element,
        Zi(t, r = Ki, {
            get: function() {
                return t.search = ta(n[r]),
                n[r]
            },
            set: function(e) {
                ea(r, e) && (n[r] = e)
            },
            enumerable: !0
        }),
        oa(this, this._element),
        this.href = o.href
    }
    function ca(e) {
        return new aa(e).pathname.slice(1) || ""
    }
    ia = function(e, t) {
        return (ia = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        function n() {
            this.constructor = e
        }
        ia(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(pa, ua = _),
    pa.prototype.request = function(e, t) {
        var o, i, t = hi({
            url: ca(e),
            data: (t = t && t.data) && t.param || {}
        }, this.options);
        return function(e) {
            if (ii(e) && e)
                return (e = ca(e)) && 3 === e.split("/").length
        }(e) ? (o = t.url,
        i = t.data,
        new Promise(function(n, r) {
            ni(k.KDJSBridge2) ? r(_i("Jsbridge Undefined", -3, 1)) : k.KDJSBridge2.call("WDJSBridge", "thorRequest", {
                url: o,
                param: i
            }, function(e) {
                var t = (null == (t = null == e ? void 0 : e.param) ? void 0 : t._errMsg) || {};
                0 === t.code ? n(e) : (e = t.message,
                10001 === t.code || -1 !== e.indexOf("暂未实现") || -1 !== e.indexOf("not implemented") ? r(_i("Jsbridge Method Not Implement Error", -3, 2)) : r(_i(t.message || "Jsbridge Method Call Error", -3, 3)))
            })
        }
        ).then(function(e) {
            return e.param.thorResponse
        })) : Promise.reject(_i("Url Error Or Url Pathname Illegal", -2))
    }
    ;
    var ua, n = pa;
    function pa(e) {
        return ua.call(this, e) || this
    }
    function fa(e) {
        var t = e.response
          , e = e.options
          , t = t.data;
        return "json" !== e.responseType || ui(t) ? t : Promise.reject(_i("JSON Data Error", -1, 1))
    }
    function la() {
        var e = this
          , t = (e.hooks.push("beforeRequest", function(e, t) {
            var n, e = e.options;
            T(n = e.data) && di(n, function(e, t) {
                (T(e) || si(e)) && (n[t] = JSON.stringify(e))
            }),
            t()
        }),
        e.request);
        e.request = function() {
            return t.apply(e, arguments).then(fa, function(e) {
                e = ai(e) ? e : e.error;
                return Promise.reject(e)
            })
        }
    }
    var da = window
      , ha = "; "
      , ma = new RegExp("([^=]+)=(.*)")
      , va = da.decodeURIComponent
      , ga = da.encodeURIComponent
      , ya = da.escape;
    function _a(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, va)
    }
    var wa = {
        get: {
            name: _a,
            value: _a
        },
        set: {
            name: function(e) {
                return ga(e).replace(/%(23|24|26|2B|5E|60|7C)/g, va).replace(/[\(\)]/g, ya)
            },
            value: function(e) {
                return ga(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, va)
            }
        }
    };
    var ba = {}
      , Ea = !1
      , Sa = !1
      , ka = [];
    function Ta() {
        var e, t, n;
        function r() {
            var t;
            2 === ++e && (Ea = !0,
            t = ba,
            di(ka, function(e) {
                e(t)
            }),
            ka.length = 0)
        }
        Sa || (Sa = !0,
        e = 0,
        t = function(e) {
            e && (ba.suid = e),
            r()
        }
        ,
        ni(k.KDJSBridge2) ? t() : k.KDJSBridge2.call("WDJSBridge", "getSuid", {}, function(e) {
            e && e.param && e.param.suid ? t(e.param.suid) : t()
        }),
        n = function(e) {
            e && (ba.cuid = e),
            r()
        }
        ,
        ni(k.KDJSBridge2) ? n() : k.KDJSBridge2.call("WDJSBridge", "getCuid", {}, function(e) {
            e && e.param && e.param.cuid ? n(e.param.cuid) : n()
        }))
    }
    function Oa(e) {
        Ta(),
        Ea ? e(ba) : ka.push(e)
    }
    var Aa = "wdtoken";
    function Pa(e) {
        var t = function(t) {
            var n;
            if (!ri(t))
                return da.document.cookie.split(ha).some(function(e) {
                    e = e.match(ma);
                    return !(!e || wa.get.name(e[1]) !== t) && (n = wa.get.value(e[2]),
                    !0)
                }),
                n
        }(Aa);
        t && (T(e) ? e[Aa] = t : pi(e) ? e.append(Aa, t) : fi(e) && e.set(Aa, t))
    }
    function Ia(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function xa(e) {
        return Promise.reject((n = (t = e).code,
        r = e.subcode,
        t = e.message,
        {
            status: {
                code: ni(n) ? -1 : n,
                subcode: r,
                message: t
            },
            result: null
        }));
        var t, n, r
    }
    function Ca() {
        if (Yo.test(Zo)) {
            var e = document.querySelectorAll('meta[name="viewport"]')
              , e = e[e.length - 1];
            if (e)
                return (e = (e = e.getAttribute("content")) && e.match(/initial\-scale=([\d\.]+)/)) ? 1 / Number(e[1]) : 1
        }
        return 1
    }
    var La = 20
      , Na = "redirect"
      , ja = 1e3;
    function Da(e) {
        var t, n, r, o, i;
        if (T(e)) {
            var a = T(e.status) ? e.status : {}
              , e = T(e.result) ? e.result : {}
              , s = e.authPageUrl;
            if (a.code == La && s)
                return a = s,
                (r = {})[Na] = k.location.href,
                r = r,
                i = zi.location.href,
                T(a) && (o = r,
                r = a,
                a = i),
                ni(a) && (a = i),
                o = hi({
                    replace: !0
                }, o),
                i = new aa(a),
                o.replace ? i.query = hi(i.query || {}, r) : (a = Qi(r)) && (o = -1 === i.search.indexOf(Ui) ? Ui : Hi,
                i.search += o + a),
                s = i.toString(),
                e.message && (r = e.message,
                o = Ca(),
                r = '<div class="hawk-toast">' + r + '</div><style type="text/css">.hawk-toast{position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10000;width:50%;color:#fff;background:rgba(33,33,33,0.9);line-height:1.5;border-radius:' + 8 * o + "px;max-width:" + 300 * o + "px;padding:" + 20 * o + "px;font-size:" + 16 * o + "px;}</style>",
                (n = Xo.body) && ((t = Xo.createElement("div")).innerHTML = r,
                n.appendChild(t),
                setTimeout(function() {
                    n.removeChild(t)
                }, 1500))),
                void setTimeout(function() {
                    var e;
                    (e = s) && k.location.assign(e)
                }, ja)
        }
        return 1
    }
    var _ = k.XMLHttpRequest
      , Ra = _ && _.prototype
      , Ma = Ra && Ra.send;
    function Ba(e, t, n) {
        try {
            var r;
            if (4 == t.readyState)
                if (wi(t.status))
                    return r = T(t.response) ? t.response : function(e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {}
                    }(t.responseText),
                    e.beforeSuccess(r, n)
        } catch (e) {}
        n()
    }
    var _ = k.Element
      , qa = _ && _.prototype
      , Ua = ["appendChild", "insertBefore"];
    function Ha(a) {
        di(Ua, function(e) {
            var t = qa && qa[e];
            t && (qa[e] = function(e) {
                var o, i;
                return e && "SCRIPT" === e.tagName && e.src && ii(e = Vi(e = ni(e = e.src) ? zi.location.href : e).callback) && (o = function(e) {
                    var t = e.split(".")
                      , n = t.length;
                    if (n) {
                        var r, o = k, i = k;
                        try {
                            for (var a = 0; a < n; a++) {
                                if (!i)
                                    return;
                                r = t[a],
                                i = (o = i)[r]
                            }
                            if (!ci(i))
                                return
                        } catch (e) {
                            return
                        }
                        return {
                            namespace: o,
                            name: r,
                            definition: i
                        }
                    }
                }(e)) && (i = o.definition,
                o.namespace[o.name] = function(e) {
                    var t = arguments
                      , n = a
                      , r = function() {
                        i.apply(o.namespace, t)
                    };
                    try {
                        return void n.beforeSuccess(e, r)
                    } catch (e) {}
                    r()
                }
                ),
                t.apply(this, (e = arguments,
                Array.prototype.slice.call(e)))
            }
            )
        })
    }
    var Fa = k.fetch;
    function za(i) {
        var e;
        "function" == typeof (e = Fa) && -1 !== e.toString().indexOf("[native code]") && (k.fetch = function() {
            return Fa.apply(this, arguments).then(function(o) {
                return new Promise(function(e) {
                    var t = i
                      , n = o
                      , r = function() {
                        e(o)
                    };
                    try {
                        if (wi(n.status))
                            return void n.clone().json().then(function(e) {
                                t.beforeSuccess(e, r)
                            }).catch(function() {
                                r()
                            })
                    } catch (e) {}
                    r()
                }
                )
            })
        }
        )
    }
    function Wa(e) {
        var i;
        T(e) && ci(e.beforeSuccess) && (i = e,
        ci(Ma) && (Ra.send = function() {
            var e = arguments
              , t = this
              , n = t.onreadystatechange
              , r = t.onload
              , o = !1;
            return n && (o = !0,
            t.onreadystatechange = function() {
                var e = arguments;
                Ba(i, t, function() {
                    n.apply(t, e)
                })
            }
            ),
            r && !o && (t.onload = function() {
                var e = arguments;
                Ba(i, t, function() {
                    r.apply(t, e)
                })
            }
            ),
            Ma.apply(t, e)
        }
        ),
        Ha(e),
        za(e))
    }
    function Ja(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function Ga(e) {
        return Promise.reject((n = (t = e).code,
        r = e.subcode,
        t = e.message,
        {
            status: {
                code: ni(n) ? -3 : n,
                subcode: r,
                message: t
            },
            result: null
        }));
        var t, n, r
    }
    k.hawk = k.hawk || {
        disabled: !1
    };
    I = hi(!0, {}, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "application/json, */*"
        },
        cache: !1
    }, I),
    (I = new t(I)).use(la);
    var Va = I
      , Qa = (Va.use(function() {
        k.hawk.disabled || (Wa({
            beforeSuccess: function(e, t) {
                Da(e) && t()
            }
        }),
        k.hawk.disabled = !0)
    }),
    Va.use(function() {
        var e = this
          , t = (e.hooks.push("configured", function(e, t) {
            var n, r, e = e.options;
            e.responseType = "json",
            e.data = e.data || {},
            Pa(e.data),
            e.extra.deviceId ? (n = e.data,
            r = function() {
                t()
            }
            ,
            Oa(function(e) {
                T(n) && (n.context = hi(n.context || {}, e)),
                r()
            })) : t()
        }),
        e.request);
        e.request = function() {
            return t.apply(e, arguments).then(Ia, xa)
        }
    }),
    new n);
    Qa.use(function() {
        var e = this
          , t = e.request;
        e.request = function() {
            return t.apply(e, arguments).then(Ja, Ga)
        }
    });
    function Ka() {
        var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ya.generateEnvStr();
        return t = "https://thor".concat(t, ".weidian.com/skittles/share.getConfig/1.0"),
        (bi(e) ? Qa : Va).request(t, e).then(function(e) {
            return e && e.result ? (e = e.result,
            Object.assign({}, e, {
                mpConfigList: e.mpConfigList,
                privateRuleList: e.privateRuleList,
                multidomainRuleMap: e.urlRules
            })) : null
        }).catch(function() {
            return null
        })
    }
    function Xa(e, t) {
        var n = t.dataMap
          , t = void 0 === (t = t.curUrl) ? window.location.href : t;
        if (!e || !Ya.isUrl(e))
            return e;
        var r = es(t);
        if (!t || !r)
            return e;
        var o = n[r];
        if (!o)
            return e;
        for (var i, a, s, t = (n = Ya.analyzeUrl(t)).protocol, n = n.host, c = e, u = -1, p = 0, f = o.length; p < f; p++)
            try {
                var l = o[p]
                  , d = l.status
                  , h = l.pathRegExp
                  , m = new RegExp(h);
                if (1 == d && m.test(c)) {
                    u = p;
                    break
                }
            } catch (e) {}
        return -1 !== u && (i = (e = Ya.analyzeUrl(e)).pathname,
        a = e.search,
        s = e.host,
        e = e.hash,
        "privateRuleList" === r && "i.weidian.com" === s && (n = "".concat(n, "/user")),
        c = "".concat(t, "//").concat(n).concat(i).concat(a).concat(e)),
        c
    }
    var Ya = {
        generateEnvStr: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.href
              , t = "";
            return /\.((daily)|(dev))\./.test(e) ? t = ".daily" : /(\.|\-)pre\./.test(e) && (t = ".pre"),
            t
        },
        isPrivateUrl: function(e) {
            return /^(http(s)?:)?\/\/shop\w+((\.daily)|(\.pre))?\.v\.weidian\.com/.test(e)
        },
        generateConfigDataNameByUrl: function(e) {
            return this.isPrivateUrl(e) ? "privateRuleList" : /^(http(s)?:)?\/\/.*\.youshop10\.com/.test(e) ? "groupRuleList" : ""
        },
        analyzeUrl: function(e) {
            return new aa(e)
        },
        isUrl: function(e) {
            if ("string" != typeof e)
                return !1;
            e = e.match(/^(?:\w+:)?\/\/(\S+)$/);
            if (!e)
                return !1;
            e = e[1];
            return !!e && !(!/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/.test(e) && !/^[^\s\.]+\.\S{2,}$/.test(e))
        }
    }
      , $a = function(e) {
        return Ya.isPrivateUrl(e)
    }
      , Za = function(t, e) {
        var n, r, o, e = e.multidomainRuleMap, i = Ya.analyzeUrl(t), a = i.protocol, s = i.host, c = (i.origin,
        i.pathname), u = (i.search,
        i.hash,
        c.replace(/^\//, "").replace(/\/$/, "").split("/")), i = t;
        try {
            var p = e[s];
            if (p) {
                for (var f = [], l = 0, d = p.length; l < d; l++) {
                    var h, m, v, g = p[l], y = g.backupHosts, _ = g.backupPath, w = g.pathRegExp;
                    1 == g.status && new RegExp(w).test(t) && y.length && (n = 0,
                    r = y.length,
                    o = void 0,
                    o = Math.random(),
                    h = y[n + parseInt(o * (r - n) + "")],
                    m = "".concat(a, "//").concat(s, "/").concat(u[0], "/"),
                    v = "".concat(a, "//").concat(h, "/").concat(u[0], "/"),
                    _ && (v = "".concat(a, "//").concat(h, "/").concat(_, "/")),
                    0 === t.indexOf(m) && f.push(t.replace(m, v)))
                }
                var b = f.length;
                1 <= b && (i = f[b - 1])
            }
        } catch (e) {
            i = t
        }
        return i = Ya.isUrl(i) ? i : t
    }
      , es = function(e) {
        return Ya.generateConfigDataNameByUrl(e)
    };
    var ts, ns, rs, os = function(e, t) {
        var n, r = "";
        return t && (n = t.mpConfigList,
        t = t.multidomainRuleMap,
        n && t && (e = Za(e, {
            multidomainRuleMap: t
        }),
        t = new aa(e).host,
        r = function(e, t) {
            var n = "";
            e = e.replace(/^((www)|(wd)|(rocker)|(h5)|(shop)|(im)|(k))\./, "");
            for (var r = 0, o = t.length; r < o; r++) {
                var i = t[r]
                  , a = i.hosts
                  , i = i.mpId;
                if (-1 !== a.indexOf(e)) {
                    n = i;
                    break
                }
            }
            return n
        }(/weidian\.com/.test(t) ? new aa(window.location.href).host : t, n))),
        r
    };
    ns = function() {
        (ts = Rr && !v(Rr.dataset.vcollectMultidomain) ? m.multiDomainRuleMap ? Promise.resolve(m.multiDomainRuleMap) : m.ruleMapPromise || Ka().then(function(e) {
            return m.multiDomainRuleMap = e,
            Promise.resolve(e)
        }).catch(function() {
            return Promise.reject()
        }) : null) && (m.ruleMapPromise = ts)
    }
    ,
    y.body ? ns() : (rs = !1,
    y.addEventListener("readystatechange", function() {
        !rs && y.body && (rs = !0,
        ns())
    }));
    var is, as = {}, ss = 0;
    function cs(e) {
        return ps(e)
    }
    function us(e) {
        ss = ss || m.setTimeout(function() {
            as = {},
            ss = 0
        }, 3e5);
        var t = as[e] || 0;
        return as[e] = t + 1,
        ps(4 < t ? (e = t - 4,
        1 / Math.pow(2, e)) : 1)
    }
    function ps(e) {
        return Math.random() < e
    }
    var fs;
    function ls() {
        return qo(nt) || Ve($e) || jr()
    }
    function ds(e) {
        Qe($e, is = e, {
            domain: Mr(),
            expires: 1800
        }),
        Uo(nt, e)
    }
    var hs, ms, vs;
    function gs(t) {
        function e(e) {
            t(e || jr())
        }
        var n, r = qo(rt);
        if (r)
            return t(r);
        if (r = Ve(Ze),
        qr()) {
            if ((n = r) && 16 < n.length)
                return t(r);
            new Promise(function(t, n) {
                ao().then(function(e) {
                    e.call("WDJSBridge", "getCuid", {}, function(e) {
                        if (e && e.param && e.param.cuid)
                            return t(e.param.cuid);
                        n()
                    })
                }).catch(n)
            }
            ).then(t, function() {
                e(r)
            })
        } else
            e(r)
    }
    function ys(n) {
        if (fs)
            return n(fs);
        gs(function(e) {
            var t;
            Qe(Ze, fs = t = e, {
                domain: Mr(),
                expires: 63072e3
            }),
            Uo(rt, t),
            n(e)
        })
    }
    function _s() {
        return void 0 !== hs ? hs : hs = Ve("sid") || Ve("WD_s_id") || null
    }
    function ws() {
        return void 0 !== ms ? ms : ms = Ve("duid") || Ve("uid") || Ve("WD_b_id") || null
    }
    var bs, Es = "data-spider-prior";
    function Ss() {
        var e = y.head
          , e = e.querySelector('meta[name="' + Es + '"]') || e.querySelector('meta[name="' + Ye + '"]');
        return e && e.getAttribute("content")
    }
    function ks() {
        var e = y.body;
        return e.getAttribute(Es) || e.getAttribute(Ye)
    }
    var Ts, Os, As = {
        "-1": "offline",
        0: "unknown",
        2: "wifi",
        3: "2g",
        4: "3g",
        5: "4g"
    };
    function Ps(t) {
        return v(bs) ? Pr() ? e((n = navigator.userAgent.match(/NetType\/(\S*)/i)) && n[1]) : qr() ? new Promise(function(t, n) {
            ao().then(function(e) {
                e.call("WDJSBridge", "getNetworkStatus", {}, function(e) {
                    if (e && e.param && e.param.network)
                        return t(As[e.param.network]);
                    n()
                })
            }).catch(n)
        }
        ).then(e, e) : void e() : t(bs);
        function e(e) {
            bs = ("" + (e || ((e = navigator.connection || navigator.webkitConnection) && e.type || "unknown"))).toLowerCase(),
            t(bs)
        }
        var n
    }
    function Is(o) {
        ys(function(r) {
            var t = function(n) {
                var e;
                e = function(t) {
                    var e;
                    e = function(e) {
                        if (u(t) || u(e))
                            return o();
                        o({
                            document_ref: Fo || qo(it) || y.referrer,
                            document_url: S(),
                            spma: t,
                            spmb: e,
                            visit_id: v(vs) ? vs = jr() : vs,
                            buyer_id: ws(),
                            seller_id: _s(),
                            session_id: function() {
                                if (is)
                                    return is;
                                var e = ls();
                                return ds(e),
                                go(function() {
                                    ds(is)
                                }),
                                e
                            }(),
                            visitor_id: r,
                            extend: n
                        })
                    }
                    ,
                    lo(function() {
                        e(ks())
                    })
                }
                ,
                lo(function() {
                    e(Ss())
                })
            };
            v(Ts) ? Ps(function(e) {
                Ts = d({
                    network_type: e,
                    sample: 1
                }),
                t(Ts)
            }) : t(Ts)
        })
    }
    function xs(n) {
        Is(function(e) {
            if (!e)
                return n();
            var t = Os;
            t && pe(t.get(), e) ? n(t) : (t = new xe(e),
            n(Os = t))
        })
    }
    e(Ls, Cs = o),
    Ls.prototype.send = function(i, a) {
        var s = this;
        xs(function(e) {
            if (e) {
                a && e.update(a);
                var t = new s.options.Record(e,i)
                  , t = (s.options.report.push(t),
                i);
                if ("spider" === t.type) {
                    var n = new RegExp("(^|&)spiderDebug([^&]*)(&|$)","i")
                      , n = window.location.search.substr(1).match(n);
                    if (null != n) {
                        var r = n[2].toLowerCase()
                          , o = ["%c[spider]"];
                        switch (t.subtype) {
                        case "click":
                            (-1 < r.indexOf("c") || "" === r) && (o[0] += "[click]:",
                            o[1] = "color:#F6416C;");
                            break;
                        case "page_view":
                            (-1 < r.indexOf("p") || "" === r) && (o[0] += "[page_view]:",
                            o[1] = "color:#1D6FA3;");
                            break;
                        case "expose":
                            (-1 < r.indexOf("e") || "" === r) && (o[0] += "[expose]:",
                            o[1] = "color:#28C76F;");
                            break;
                        default:
                            return
                        }
                        1 < o.length && (o.push({
                            meta: e.get(),
                            data: [].concat(t)
                        }),
                        m.console.log.apply(console, o))
                    }
                }
            }
        })
    }
    ;
    var Cs, _ = Ls;
    function Ls(e) {
        var t = Cs.call(this) || this;
        return t.options = e,
        t
    }
    e(js, Ns = Ne);
    var Ns, t = js;
    function js(e, t) {
        return t = c({
            report_time: Date.now(),
            uuid: jr(d(t) + d(e.get()))
        }, t),
        Ns.call(this, e, t) || this
    }
    var Ds, Rs = {
        delay: 300
    }, Ms = (e(Bs, Ds = De),
    Bs.prototype.push = function(e) {
        var t = this;
        -1 === this.records.indexOf(e) && this.records.push(e),
        this.pageLoaded && X(function() {
            return t.send()
        }, this.options.delay)()
    }
    ,
    Bs.prototype.addEventListener = function() {
        var e = this;
        setTimeout(function() {
            e.options.send.sendAfterEnter(),
            e.send(),
            e.pageLoaded = !0
        }, 1500),
        go(function() {
            return e.sendBeforeLeave()
        })
    }
    ,
    Bs.prototype.sendBeforeLeave = function() {
        var e;
        this.records.length && (e = Xr(this.records.slice(), "unload"),
        this.options.send.sendBeforeLeave({
            records: s(this.options.beforeLeaveFilter) ? this.options.beforeLeaveFilter(e) : e
        }),
        this.records.length = 0)
    }
    ,
    Bs.prototype.send = function() {
        var t = this;
        this.records.length && (this.options.send.send({
            records: Xr(this.records.slice(), "normal")
        }).catch(function(e) {
            t.records = Xr(t.records.concat(e), "fail")
        }),
        this.records.length = 0)
    }
    ,
    Bs);
    function Bs(e) {
        var t = Ds.call(this) || this;
        return t.records = [],
        t.pageLoaded = !1,
        t.options = c({}, Rs, e),
        t.addEventListener(),
        t
    }
    function qs() {
        return (qo(ot) || []).slice()
    }
    function Us() {
        qs().forEach(function(n) {
            Hs(n).then(function() {
                var e, t;
                Uo(ot, (e = qs(),
                t = n,
                void (-1 !== (t = e.indexOf(t)) && e.splice(t, 1))))
            })
        })
    }
    function Hs(e) {
        return dr(e.url, e)
    }
    function Fs(r, o) {
        return void 0 === o && (o = !0),
        new Promise(function(e) {
            n = r.url,
            t = r;
            var t, n = !!Ke && (!!(t = mr(t.data)) && navigator.sendBeacon(n, t));
            o && !n && (Ko() ? (t = {
                url: r.url,
                data: r.data
            },
            -1 === (n = qs()).indexOf(t) && (n.push(t),
            Uo(ot, n))) : Hs(r).catch(function() {})),
            e()
        }
        )
    }
    e(Js, zs = Re),
    Js.prototype.sendAfterEnter = function() {
        return Promise.resolve(Us())
    }
    ,
    Js.prototype.send = function(o) {
        var r = this
          , i = this.combine(o.records)
          , a = [];
        function s(e) {
            e.forEach(function(e) {
                t = o.records,
                n = e,
                r = null,
                t.some(function(e) {
                    return !!pe(e.combine().value, n) && (r = e,
                    !0)
                });
                var t, n, r, e = r;
                e && a.push(e)
            })
        }
        var e = i.values.map(function(e, t) {
            return n = e,
            e = i.names[t],
            Hs({
                url: r.options.url,
                data: {
                    log: {
                        meta: e,
                        data: n
                    }
                }
            }).then(function() {
                h.emit("reportSuccess", {
                    data: n
                })
            }).catch(function() {
                return s(n)
            });
            var n
        });
        return Promise.all(e).then(function() {
            return a.length ? Promise.reject(a) : Promise.resolve()
        })
    }
    ,
    Js.prototype.sendBeforeLeave = function(e, n) {
        var r = this
          , o = (void 0 === n && (n = !0),
        this.combine(e.records))
          , e = o.values.map(function(e, t) {
            return t = o.names[t],
            Fs({
                url: r.options.url,
                data: {
                    log: {
                        meta: t,
                        data: e
                    }
                }
            }, n)
        });
        return Promise.all(e)
    }
    ;
    var zs, Ws = Js;
    function Js(e) {
        var t = zs.call(this) || this;
        return t.options = e,
        t
    }
    var Gs = "x-trace-id"
      , Vs = "x-encrypt"
      , Qs = .001
      , Ks = 1e-4
      , Xs = .001
      , Ys = .01
      , $s = !(!Xe || !m.PerformanceObserver)
      , Zs = ((I = {}).rejected = "reject",
    I.resolved = "resolve",
    ec.stringify = function(e) {
        for (var t = [], n = 0; n < e.sigBytes; n++) {
            var r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            t.push((r >>> 4).toString(16)),
            t.push((15 & r).toString(16))
        }
        return t.join("")
    }
    ,
    ec.parse = function(e) {
        for (var t = e.length, n = [], r = 0; r < t; r += 2)
            n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
        return new O(n,t / 2)
    }
    ,
    ec);
    function ec() {}
    tc.random = function(e) {
        for (var t = [], n = 0, r = void 0; n < e; n += 4) {
            var o = function(t) {
                var n = 987654321
                  , r = 4294967295;
                return function() {
                    var e = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;
                    return (e / 4294967296 + .5) * (.5 < Math.random() ? 1 : -1)
                }
            }(4294967296 * (r || Math.random()))
              , r = 987654071 * o();
            t.push(4294967296 * o() | 0)
        }
        return new tc(t,e)
    }
    ,
    tc.prototype.toString = function(e) {
        return (e || Zs).stringify(this)
    }
    ,
    tc.prototype.concat = function(e) {
        if (this.clamp(),
        this.sigBytes % 4)
            for (var t = 0; t < e.sigBytes; t++) {
                var n = e.words[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                this.words[this.sigBytes + t >>> 2] |= n << 24 - (this.sigBytes + t) % 4 * 8
            }
        else
            for (t = 0; t < e.sigBytes; t += 4)
                this.words[this.sigBytes + t >>> 2] = e.words[t >>> 2];
        return this.sigBytes += e.sigBytes,
        this
    }
    ,
    tc.prototype.clamp = function() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8,
        this.words.length = Math.ceil(this.sigBytes / 4)
    }
    ,
    tc.prototype.clone = function() {
        return new tc(this.words.slice(0),this.sigBytes)
    }
    ;
    var O = tc;
    function tc(e, t) {
        this.words = e || [],
        this.sigBytes = void 0 !== t ? t : 4 * this.words.length
    }
    rc.stringify = function(e) {
        for (var t = [], n = 0; n < e.sigBytes; n++) {
            var r = e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255;
            t.push(String.fromCharCode(r))
        }
        return t.join("")
    }
    ,
    rc.parse = function(e) {
        for (var t = e.length, n = [], r = 0; r < t; r++)
            n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
        return new O(n,t)
    }
    ;
    var nc = rc;
    function rc() {}
    ic.stringify = function(e) {
        try {
            return decodeURIComponent(escape(nc.stringify(e)))
        } catch (e) {
            throw new Error("Malformed UTF-8 data")
        }
    }
    ,
    ic.parse = function(e) {
        return nc.parse(unescape(encodeURIComponent(e)))
    }
    ;
    var oc = ic;
    function ic() {}
    ac.prototype.reset = function() {
        this._data = new O,
        this._nDataBytes = 0
    }
    ,
    ac.prototype._append = function(e) {
        "string" == typeof e && (e = oc.parse(e)),
        this._data.concat(e),
        this._nDataBytes += e.sigBytes
    }
    ,
    ac.prototype._process = function(e) {
        if (!this.cfg.blockSize)
            throw new Error("missing blockSize in config");
        var t, n = 4 * this.cfg.blockSize, n = this._data.sigBytes / n, r = (n = e ? Math.ceil(n) : Math.max((0 | n) - this._minBufferSize, 0)) * this.cfg.blockSize, e = Math.min(4 * r, this._data.sigBytes);
        if (r) {
            for (var o = 0; o < r; o += this.cfg.blockSize)
                this._doProcessBlock(this._data.words, o);
            t = this._data.words.splice(0, r),
            this._data.sigBytes -= e
        }
        return new O(t,e)
    }
    ,
    ac.prototype.clone = function() {
        var e, t = this.constructor();
        for (e in this)
            this.hasOwnProperty(e) && (t[e] = this[e]);
        return t._data = this._data.clone(),
        t
    }
    ;
    n = ac;
    function ac(e) {
        this._minBufferSize = 0,
        this.cfg = Object.assign({
            blockSize: 1
        }, e),
        this._data = new O,
        this._nDataBytes = 0
    }
    e(uc, sc = function() {}
    ),
    uc.prototype.extend = function(e) {
        return void 0 !== e.ciphertext && (this.ciphertext = e.ciphertext),
        void 0 !== e.key && (this.key = e.key),
        void 0 !== e.iv && (this.iv = e.iv),
        void 0 !== e.salt && (this.salt = e.salt),
        void 0 !== e.algorithm && (this.algorithm = e.algorithm),
        void 0 !== e.mode && (this.mode = e.mode),
        void 0 !== e.padding && (this.padding = e.padding),
        void 0 !== e.blockSize && (this.blockSize = e.blockSize),
        void 0 !== e.formatter && (this.formatter = e.formatter),
        this
    }
    ,
    uc.prototype.toString = function(e) {
        if (e)
            return e.stringify(this);
        if (this.formatter)
            return this.formatter.stringify(this);
        throw new Error("cipher needs a formatter to be able to convert the result into a string")
    }
    ;
    var sc, cc = uc;
    function uc(e) {
        var t = sc.call(this) || this;
        return t.ciphertext = e.ciphertext,
        t.key = e.key,
        t.iv = e.iv,
        t.salt = e.salt,
        t.algorithm = e.algorithm,
        t.mode = e.mode,
        t.padding = e.padding,
        t.blockSize = e.blockSize,
        t.formatter = e.formatter,
        t
    }
    fc.stringify = function(e) {
        e.clamp();
        for (var t = [], n = 0; n < e.sigBytes; n += 3)
            for (var r = (e.words[n >>> 2] >>> 24 - n % 4 * 8 & 255) << 16 | (e.words[n + 1 >>> 2] >>> 24 - (n + 1) % 4 * 8 & 255) << 8 | e.words[n + 2 >>> 2] >>> 24 - (n + 2) % 4 * 8 & 255, o = 0; o < 4 && n + .75 * o < e.sigBytes; o++)
                t.push(this._map.charAt(r >>> 6 * (3 - o) & 63));
        var i = this._map.charAt(64);
        if (i)
            for (; t.length % 4; )
                t.push(i);
        return t.join("")
    }
    ,
    fc.parse = function(e) {
        var t = e.length;
        if (void 0 === this._reverseMap) {
            this._reverseMap = [];
            for (var n = 0; n < this._map.length; n++)
                this._reverseMap[this._map.charCodeAt(n)] = n
        }
        var r = this._map.charAt(64);
        return r && -1 !== (r = e.indexOf(r)) && (t = r),
        this.parseLoop(e, t, this._reverseMap)
    }
    ,
    fc.parseLoop = function(e, t, n) {
        for (var r, o, i = [], a = 0, s = 0; s < t; s++)
            s % 4 && (r = n[e.charCodeAt(s - 1)] << s % 4 * 2,
            o = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2,
            i[a >>> 2] |= (r | o) << 24 - a % 4 * 8,
            a++);
        return new O(i,a)
    }
    ,
    fc._map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    fc._reverseMap = void 0;
    var pc = fc;
    function fc() {}
    lc.stringify = function(e) {
        if (!e.ciphertext)
            throw new Error("missing ciphertext in params");
        var t, n = e.ciphertext, e = e.salt;
        if (e) {
            if ("string" == typeof e)
                throw new Error("salt is expected to be a WordArray");
            t = new O([1398893684, 1701076831]).concat(e).concat(n)
        } else
            t = n;
        return t.toString(pc)
    }
    ,
    lc.parse = function(e) {
        var t, e = pc.parse(e);
        return 1398893684 === e.words[0] && 1701076831 === e.words[1] && (t = new O(e.words.slice(2, 4)),
        e.words.splice(0, 4),
        e.sigBytes -= 16),
        new cc({
            ciphertext: e,
            salt: t
        })
    }
    ;
    o = lc;
    function lc() {}
    hc.encrypt = function(e, t, n, r) {
        var r = Object.assign({}, this.cfg, r)
          , o = e.createEncryptor(n, r)
          , t = o.finalize(t);
        return new cc({
            ciphertext: t,
            key: n,
            iv: o.cfg.iv,
            algorithm: e,
            mode: o.cfg.mode,
            padding: o.cfg.padding,
            blockSize: o.cfg.blockSize,
            formatter: r.format
        })
    }
    ,
    hc.decrypt = function(e, t, n, r) {
        r = Object.assign({}, this.cfg, r);
        if (!r.format)
            throw new Error("could not determine format");
        if ((t = this._parse(t, r.format)).ciphertext)
            return e.createDecryptor(n, r).finalize(t.ciphertext);
        throw new Error("could not determine ciphertext")
    }
    ,
    hc._parse = function(e, t) {
        return "string" == typeof e ? t.parse(e) : e
    }
    ,
    hc.cfg = {
        blockSize: 4,
        iv: new O([]),
        format: o
    };
    var dc = hc;
    function hc() {}
    e(vc, mc = n),
    vc._createHelper = function(n) {
        return function(e, t) {
            return new n(t).finalize(e)
        }
    }
    ,
    vc.prototype.update = function(e) {
        return this._append(e),
        this._process(),
        this
    }
    ,
    vc.prototype.finalize = function(e) {
        return e && this._append(e),
        this._doFinalize()
    }
    ;
    var mc, Re = vc;
    function vc(e) {
        e = mc.call(this, Object.assign({
            blockSize: 16
        }, e)) || this;
        return e.reset(),
        e
    }
    for (var A = [], gc = 0; gc < 64; gc++)
        A[gc] = 4294967296 * Math.abs(Math.sin(gc + 1)) | 0;
    e(P, yc = Re),
    P.FF = function(e, t, n, r, o, i, a) {
        e = e + (t & n | ~t & r) + o + a;
        return (e << i | e >>> 32 - i) + t
    }
    ,
    P.GG = function(e, t, n, r, o, i, a) {
        e = e + (t & r | n & ~r) + o + a;
        return (e << i | e >>> 32 - i) + t
    }
    ,
    P.HH = function(e, t, n, r, o, i, a) {
        e = e + (t ^ n ^ r) + o + a;
        return (e << i | e >>> 32 - i) + t
    }
    ,
    P.II = function(e, t, n, r, o, i, a) {
        e = e + (n ^ (t | ~r)) + o + a;
        return (e << i | e >>> 32 - i) + t
    }
    ,
    P.prototype.reset = function() {
        yc.prototype.reset.call(this),
        this._hash = new O([1732584193, 4023233417, 2562383102, 271733878])
    }
    ,
    P.prototype._doProcessBlock = function(e, t) {
        for (var n = 0; n < 16; n++) {
            var r = t + n
              , o = e[r];
            e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
        }
        var i = this._hash.words
          , a = e[t + 0]
          , s = e[t + 1]
          , c = e[t + 2]
          , u = e[t + 3]
          , p = e[t + 4]
          , f = e[t + 5]
          , l = e[t + 6]
          , d = e[t + 7]
          , h = e[t + 8]
          , m = e[t + 9]
          , v = e[t + 10]
          , g = e[t + 11]
          , y = e[t + 12]
          , _ = e[t + 13]
          , w = e[t + 14]
          , b = e[t + 15]
          , E = i[0]
          , S = i[1]
          , k = i[2]
          , T = i[3]
          , E = P.FF(E, S, k, T, a, 7, A[0])
          , T = P.FF(T, E, S, k, s, 12, A[1])
          , k = P.FF(k, T, E, S, c, 17, A[2])
          , S = P.FF(S, k, T, E, u, 22, A[3]);
        E = P.FF(E, S, k, T, p, 7, A[4]),
        T = P.FF(T, E, S, k, f, 12, A[5]),
        k = P.FF(k, T, E, S, l, 17, A[6]),
        S = P.FF(S, k, T, E, d, 22, A[7]),
        E = P.FF(E, S, k, T, h, 7, A[8]),
        T = P.FF(T, E, S, k, m, 12, A[9]),
        k = P.FF(k, T, E, S, v, 17, A[10]),
        S = P.FF(S, k, T, E, g, 22, A[11]),
        E = P.FF(E, S, k, T, y, 7, A[12]),
        T = P.FF(T, E, S, k, _, 12, A[13]),
        k = P.FF(k, T, E, S, w, 17, A[14]),
        S = P.FF(S, k, T, E, b, 22, A[15]),
        E = P.GG(E, S, k, T, s, 5, A[16]),
        T = P.GG(T, E, S, k, l, 9, A[17]),
        k = P.GG(k, T, E, S, g, 14, A[18]),
        S = P.GG(S, k, T, E, a, 20, A[19]),
        E = P.GG(E, S, k, T, f, 5, A[20]),
        T = P.GG(T, E, S, k, v, 9, A[21]),
        k = P.GG(k, T, E, S, b, 14, A[22]),
        S = P.GG(S, k, T, E, p, 20, A[23]),
        E = P.GG(E, S, k, T, m, 5, A[24]),
        T = P.GG(T, E, S, k, w, 9, A[25]),
        k = P.GG(k, T, E, S, u, 14, A[26]),
        S = P.GG(S, k, T, E, h, 20, A[27]),
        E = P.GG(E, S, k, T, _, 5, A[28]),
        T = P.GG(T, E, S, k, c, 9, A[29]),
        k = P.GG(k, T, E, S, d, 14, A[30]),
        S = P.GG(S, k, T, E, y, 20, A[31]),
        E = P.HH(E, S, k, T, f, 4, A[32]),
        T = P.HH(T, E, S, k, h, 11, A[33]),
        k = P.HH(k, T, E, S, g, 16, A[34]),
        S = P.HH(S, k, T, E, w, 23, A[35]),
        E = P.HH(E, S, k, T, s, 4, A[36]),
        T = P.HH(T, E, S, k, p, 11, A[37]),
        k = P.HH(k, T, E, S, d, 16, A[38]),
        S = P.HH(S, k, T, E, v, 23, A[39]),
        E = P.HH(E, S, k, T, _, 4, A[40]),
        T = P.HH(T, E, S, k, a, 11, A[41]),
        k = P.HH(k, T, E, S, u, 16, A[42]),
        S = P.HH(S, k, T, E, l, 23, A[43]),
        E = P.HH(E, S, k, T, m, 4, A[44]),
        T = P.HH(T, E, S, k, y, 11, A[45]),
        k = P.HH(k, T, E, S, b, 16, A[46]),
        S = P.HH(S, k, T, E, c, 23, A[47]),
        E = P.II(E, S, k, T, a, 6, A[48]),
        T = P.II(T, E, S, k, d, 10, A[49]),
        k = P.II(k, T, E, S, w, 15, A[50]),
        S = P.II(S, k, T, E, f, 21, A[51]),
        E = P.II(E, S, k, T, y, 6, A[52]),
        T = P.II(T, E, S, k, u, 10, A[53]),
        k = P.II(k, T, E, S, v, 15, A[54]),
        S = P.II(S, k, T, E, s, 21, A[55]),
        E = P.II(E, S, k, T, h, 6, A[56]),
        T = P.II(T, E, S, k, b, 10, A[57]),
        k = P.II(k, T, E, S, l, 15, A[58]),
        S = P.II(S, k, T, E, _, 21, A[59]),
        E = P.II(E, S, k, T, p, 6, A[60]),
        T = P.II(T, E, S, k, g, 10, A[61]),
        k = P.II(k, T, E, S, c, 15, A[62]),
        S = P.II(S, k, T, E, m, 21, A[63]),
        i[0] = i[0] + E | 0,
        i[1] = i[1] + S | 0,
        i[2] = i[2] + k | 0,
        i[3] = i[3] + T | 0
    }
    ,
    P.prototype._doFinalize = function() {
        for (var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes, o = (t[r >>> 5] |= 128 << 24 - r % 32,
        Math.floor(n / 4294967296)), o = (t[15 + (64 + r >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
        t[14 + (64 + r >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
        e.sigBytes = 4 * (t.length + 1),
        this._process(),
        this._hash), i = o.words, a = 0; a < 4; a++) {
            var s = i[a];
            i[a] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8)
        }
        return o
    }
    ;
    var yc, _c = P;
    function P() {
        return null !== yc && yc.apply(this, arguments) || this
    }
    bc.prototype.compute = function(e, t) {
        for (var n, r = new this.cfg.hasher, o = new O; o.words.length < this.cfg.keySize; ) {
            n && r.update(n),
            n = r.update(e).finalize(t),
            r.reset();
            for (var i = 1; i < this.cfg.iterations; i++)
                n = r.finalize(n),
                r.reset();
            o.concat(n)
        }
        return o.sigBytes = 4 * this.cfg.keySize,
        o
    }
    ;
    var wc = bc;
    function bc(e) {
        this.cfg = Object.assign({
            keySize: 4,
            hasher: _c,
            iterations: 1
        }, e)
    }
    Ec.execute = function(e, t, n, r) {
        r = r || O.random(8);
        e = new wc({
            keySize: t + n
        }).compute(e, r),
        n = new O(e.words.slice(t),4 * n);
        return e.sigBytes = 4 * t,
        new cc({
            key: e,
            iv: n,
            salt: r
        })
    }
    ;
    var I = Ec;
    function Ec() {}
    kc.encrypt = function(e, t, n, r) {
        r = Object.assign({}, this.cfg, r);
        if (void 0 === r.kdf)
            throw new Error("missing kdf in config");
        n = r.kdf.execute(n, e.keySize, e.ivSize);
        return void 0 !== n.iv && (r.iv = n.iv),
        dc.encrypt.call(this, e, t, n.key, r).extend(n)
    }
    ,
    kc.decrypt = function(e, t, n, r) {
        r = Object.assign({}, this.cfg, r);
        if (void 0 === r.format)
            throw new Error("missing format in config");
        if (t = this._parse(t, r.format),
        void 0 === r.kdf)
            throw new Error("the key derivation function must be set");
        n = r.kdf.execute(n, e.keySize, e.ivSize, t.salt);
        return void 0 !== n.iv && (r.iv = n.iv),
        dc.decrypt.call(this, e, t, n.key, r)
    }
    ,
    kc._parse = function(e, t) {
        return "string" == typeof e ? t.parse(e) : e
    }
    ,
    kc.cfg = {
        blockSize: 4,
        iv: new O([]),
        format: o,
        kdf: I
    };
    var Sc = kc;
    function kc() {}
    e(Oc, Tc = n),
    Oc.createEncryptor = function(e, t) {
        return new this(this._ENC_XFORM_MODE,e,t)
    }
    ,
    Oc.createDecryptor = function(e, t) {
        return new this(this._DEC_XFORM_MODE,e,t)
    }
    ,
    Oc._createHelper = function(r) {
        return {
            encrypt: function(e, t, n) {
                return ("string" == typeof t ? Sc : dc).encrypt(r, e, t, n)
            },
            decrypt: function(e, t, n) {
                return ("string" == typeof t ? Sc : dc).decrypt(r, e, t, n)
            }
        }
    }
    ,
    Oc.prototype.process = function(e) {
        return this._append(e),
        this._process()
    }
    ,
    Oc.prototype.finalize = function(e) {
        return e && this._append(e),
        this._doFinalize()
    }
    ,
    Oc._ENC_XFORM_MODE = 1,
    Oc._DEC_XFORM_MODE = 2,
    Oc.keySize = 4,
    Oc.ivSize = 4;
    var Tc, o = Oc;
    function Oc(e, t, n) {
        n = Tc.call(this, Object.assign({
            blockSize: 1
        }, n)) || this;
        return n._xformMode = e,
        n._key = t,
        n.reset(),
        n
    }
    Ac.prototype.init = function(e, t) {
        this._cipher = e,
        this._iv = t
    }
    ;
    I = Ac;
    function Ac(e, t) {
        this.init(e, t)
    }
    Pc.createEncryptor = function(e, t) {
        return new this.Encryptor(e,t)
    }
    ,
    Pc.createDecryptor = function(e, t) {
        return new this.Decryptor(e,t)
    }
    ,
    Pc.Encryptor = I,
    Pc.Decryptor = I;
    n = Pc;
    function Pc() {}
    e(xc, Ic = I),
    xc.prototype.processBlock = function(e, t) {
        if (void 0 === this._cipher.cfg.blockSize)
            throw new Error("missing blockSize in cipher config");
        this.xorBlock(e, t, this._cipher.cfg.blockSize),
        this._cipher.encryptBlock(e, t),
        this._prevBlock = e.slice(t, t + this._cipher.cfg.blockSize)
    }
    ,
    xc.prototype.xorBlock = function(e, t, n) {
        var r;
        if (this._iv ? (r = this._iv,
        this._iv = void 0) : r = this._prevBlock,
        void 0 !== r)
            for (var o = 0; o < n; o++)
                e[t + o] ^= r[o]
    }
    ;
    var Ic, x = xc;
    function xc() {
        return null !== Ic && Ic.apply(this, arguments) || this
    }
    e(Nc, Cc = I),
    Nc.prototype.processBlock = function(e, t) {
        if (void 0 === this._cipher.cfg.blockSize)
            throw new Error("missing blockSize in cipher config");
        var n = e.slice(t, t + this._cipher.cfg.blockSize);
        this._cipher.decryptBlock(e, t),
        this.xorBlock(e, t, this._cipher.cfg.blockSize),
        this._prevBlock = n
    }
    ,
    Nc.prototype.xorBlock = function(e, t, n) {
        var r;
        if (this._iv ? (r = this._iv,
        this._iv = void 0) : r = this._prevBlock,
        void 0 !== r)
            for (var o = 0; o < n; o++)
                e[t + o] ^= r[o]
    }
    ;
    var Cc, Lc = Nc;
    function Nc() {
        return null !== Cc && Cc.apply(this, arguments) || this
    }
    e(Rc, jc = n),
    Rc.Encryptor = x,
    Rc.Decryptor = Lc;
    var jc, Dc = Rc;
    function Rc() {
        return null !== jc && jc.apply(this, arguments) || this
    }
    Bc.pad = function(e, t) {
        for (var t = 4 * t, n = t - e.sigBytes % t, r = n << 24 | n << 16 | n << 8 | n, o = [], i = 0; i < n; i += 4)
            o.push(r);
        t = new O(o,n);
        e.concat(t)
    }
    ,
    Bc.unpad = function(e) {
        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
        e.sigBytes -= t
    }
    ;
    var Mc = Bc;
    function Bc() {}
    e(Uc, qc = o),
    Uc.prototype.reset = function() {
        if (qc.prototype.reset.call(this),
        void 0 === this.cfg.mode)
            throw new Error("missing mode in config");
        var e;
        this._xformMode === this.constructor._ENC_XFORM_MODE ? e = this.cfg.mode.createEncryptor : (e = this.cfg.mode.createDecryptor,
        this._minBufferSize = 1),
        this._mode && this._mode.__creator === e ? this._mode.init(this, this.cfg.iv && this.cfg.iv.words) : (this._mode = e.call(this.cfg.mode, this, this.cfg.iv && this.cfg.iv.words),
        this._mode.__creator = e)
    }
    ,
    Uc.prototype._doProcessBlock = function(e, t) {
        this._mode.processBlock(e, t)
    }
    ,
    Uc.prototype._doFinalize = function() {
        if (void 0 === this.cfg.padding)
            throw new Error("missing padding in config");
        var e;
        if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
            if (void 0 === this.cfg.blockSize)
                throw new Error("missing blockSize in config");
            this.cfg.padding.pad(this._data, this.cfg.blockSize),
            e = this._process(!0)
        } else
            e = this._process(!0),
            this.cfg.padding.unpad(e);
        return e
    }
    ;
    var qc, x = Uc;
    function Uc(e, t, n) {
        return qc.call(this, e, t, Object.assign({
            blockSize: 4,
            mode: Dc,
            padding: Mc
        }, n)) || this
    }
    for (var Hc = [], Fc = [], zc = [], Wc = [], Jc = [], Gc = [], Vc = [], Qc = [], Kc = [], Xc = [], Yc = [], $c = 0; $c < 256; $c++)
        Yc[$c] = $c < 128 ? $c << 1 : $c << 1 ^ 283;
    for (var Zc = 0, eu = 0, $c = 0; $c < 256; $c++) {
        var tu = eu ^ eu << 1 ^ eu << 2 ^ eu << 3 ^ eu << 4
          , nu = (Hc[Zc] = tu = tu >>> 8 ^ 255 & tu ^ 99,
        Yc[Fc[tu] = Zc])
          , ru = Yc[nu]
          , ou = Yc[ru]
          , iu = 257 * Yc[tu] ^ 16843008 * tu;
        zc[Zc] = iu << 24 | iu >>> 8,
        Wc[Zc] = iu << 16 | iu >>> 16,
        Jc[Zc] = iu << 8 | iu >>> 24,
        Gc[Zc] = iu,
        Vc[tu] = (iu = 16843009 * ou ^ 65537 * ru ^ 257 * nu ^ 16843008 * Zc) << 24 | iu >>> 8,
        Qc[tu] = iu << 16 | iu >>> 16,
        Kc[tu] = iu << 8 | iu >>> 24,
        Xc[tu] = iu,
        Zc ? (Zc = nu ^ Yc[Yc[Yc[ou ^ nu]]],
        eu ^= Yc[Yc[eu]]) : Zc = eu = 1
    }
    var au, su = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], Lc = (e(cu, au = x),
    cu.prototype.reset = function() {
        if (au.prototype.reset.call(this),
        !this._nRounds || this._keyPriorReset !== this._key) {
            for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * (1 + (this._nRounds = 6 + n)), o = this._keySchedule = [], i = 0; i < r; i++)
                i < n ? o[i] = t[i] : (c = o[i - 1],
                i % n ? 6 < n && i % n == 4 && (c = Hc[c >>> 24] << 24 | Hc[c >>> 16 & 255] << 16 | Hc[c >>> 8 & 255] << 8 | Hc[255 & c]) : (c = Hc[(c = c << 8 | c >>> 24) >>> 24] << 24 | Hc[c >>> 16 & 255] << 16 | Hc[c >>> 8 & 255] << 8 | Hc[255 & c],
                c ^= su[i / n | 0] << 24),
                o[i] = o[i - n] ^ c);
            for (var a = this._invKeySchedule = [], s = 0; s < r; s++) {
                var i = r - s
                  , c = void 0;
                c = s % 4 ? o[i] : o[i - 4],
                a[s] = s < 4 || i <= 4 ? c : Vc[Hc[c >>> 24]] ^ Qc[Hc[c >>> 16 & 255]] ^ Kc[Hc[c >>> 8 & 255]] ^ Xc[Hc[255 & c]]
            }
        }
    }
    ,
    cu.prototype.encryptBlock = function(e, t) {
        this._doCryptBlock(e, t, this._keySchedule, zc, Wc, Jc, Gc, Hc)
    }
    ,
    cu.prototype.decryptBlock = function(e, t) {
        var n = e[t + 1];
        e[t + 1] = e[t + 3],
        e[t + 3] = n,
        this._doCryptBlock(e, t, this._invKeySchedule, Vc, Qc, Kc, Xc, Fc),
        n = e[t + 1],
        e[t + 1] = e[t + 3],
        e[t + 3] = n
    }
    ,
    cu.prototype._doCryptBlock = function(e, t, n, r, o, i, a, s) {
        for (var c = e[t] ^ n[0], u = e[t + 1] ^ n[1], p = e[t + 2] ^ n[2], f = e[t + 3] ^ n[3], l = 4, d = 1; d < this._nRounds; d++)
            var h = r[c >>> 24] ^ o[u >>> 16 & 255] ^ i[p >>> 8 & 255] ^ a[255 & f] ^ n[l++]
              , m = r[u >>> 24] ^ o[p >>> 16 & 255] ^ i[f >>> 8 & 255] ^ a[255 & c] ^ n[l++]
              , v = r[p >>> 24] ^ o[f >>> 16 & 255] ^ i[c >>> 8 & 255] ^ a[255 & u] ^ n[l++]
              , g = r[f >>> 24] ^ o[c >>> 16 & 255] ^ i[u >>> 8 & 255] ^ a[255 & p] ^ n[l++]
              , c = h
              , u = m
              , p = v
              , f = g;
        var y = (s[c >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & f]) ^ n[l++]
          , _ = (s[u >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & c]) ^ n[l++]
          , w = (s[p >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & u]) ^ n[l++]
          , s = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & p]) ^ n[l++];
        e[t] = y,
        e[t + 1] = _,
        e[t + 2] = w,
        e[t + 3] = s
    }
    ,
    cu.keySize = 8,
    cu);
    function cu(e, t, n) {
        return au.call(this, e, t, n) || this
    }
    var uu, pu = [], fu = [], lu = [], o = (e(du, uu = Re),
    du.prototype.reset = function() {
        uu.prototype.reset.call(this),
        this._hash = new O(pu.slice(0))
    }
    ,
    du.prototype._doProcessBlock = function(e, t) {
        for (var n = this._hash.words, r = n[0], o = n[1], i = n[2], a = n[3], s = n[4], c = n[5], u = n[6], p = n[7], f = 0; f < 64; f++) {
            f < 16 ? lu[f] = 0 | e[t + f] : (l = lu[f - 15],
            d = lu[f - 2],
            lu[f] = ((l << 25 | l >>> 7) ^ (l << 14 | l >>> 18) ^ l >>> 3) + lu[f - 7] + ((d << 15 | d >>> 17) ^ (d << 13 | d >>> 19) ^ d >>> 10) + lu[f - 16]);
            var l = r & o ^ r & i ^ o & i
              , d = p + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & c ^ ~s & u) + fu[f] + lu[f]
              , p = u
              , u = c
              , c = s
              , s = a + d | 0
              , a = i
              , i = o
              , o = r
              , r = d + (((r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22)) + l) | 0
        }
        n[0] = n[0] + r | 0,
        n[1] = n[1] + o | 0,
        n[2] = n[2] + i | 0,
        n[3] = n[3] + a | 0,
        n[4] = n[4] + s | 0,
        n[5] = n[5] + c | 0,
        n[6] = n[6] + u | 0,
        n[7] = n[7] + p | 0
    }
    ,
    du.prototype._doFinalize = function() {
        var e = 8 * this._nDataBytes
          , t = 8 * this._data.sigBytes;
        return this._data.words[t >>> 5] |= 128 << 24 - t % 32,
        this._data.words[14 + (64 + t >>> 9 << 4)] = Math.floor(e / 4294967296),
        this._data.words[15 + (64 + t >>> 9 << 4)] = e,
        this._data.sigBytes = 4 * this._data.words.length,
        this._process(),
        this._hash
    }
    ,
    du);
    function du() {
        return null !== uu && uu.apply(this, arguments) || this
    }
    e(mu, hu = I),
    mu.prototype.processBlock = function(e, t) {
        this._cipher.encryptBlock(e, t)
    }
    ;
    var hu, C = mu;
    function mu() {
        return null !== hu && hu.apply(this, arguments) || this
    }
    e(gu, vu = I),
    gu.prototype.processBlock = function(e, t) {
        this._cipher.decryptBlock(e, t)
    }
    ;
    var vu, I = gu;
    function gu() {
        return null !== vu && vu.apply(this, arguments) || this
    }
    var yu;
    e(_u, yu = n),
    _u.Encryptor = C,
    _u.Decryptor = I;
    function _u() {
        return null !== yu && yu.apply(this, arguments) || this
    }
    n = {
        BlockCipher: x,
        WordArray: O,
        CipherParams: cc,
        Hasher: Re,
        SerializableCipher: dc,
        PasswordBasedCipher: Sc
    },
    C = {
        AES: Lc,
        SHA256: o
    };
    n.BlockCipher._createHelper(C.AES),
    n.Hasher._createHelper(C.SHA256);
    function wu() {
        return Br() + "?type=bat"
    }
    function bu(e) {
        return new xt(e).hostname === function() {
            switch (zt()) {
            case 0:
            case 1:
                return "thor.daily.weidian.com";
            case 2:
                return "thor.pre.weidian.com"
            }
            return "thor.weidian.com"
        }()
    }
    function Eu(e) {
        return F(e) ? e.trim() : e
    }
    e(Tu, Su = t);
    var Su, ku = Tu;
    function Tu(e, t) {
        var n, r;
        return h.emit("exceptionHappened", {
            type: t.subtype,
            subtype: t.name
        }),
        t.type = "log",
        g(r = (n = t).detail || {}) && (r.startTime = E(),
        l(r, function(e, t) {
            G(e) && (r[t] = d(e))
        }),
        n.detail = r),
        Su.call(this, e, t) || this
    }
    e(Au, Ou = _),
    Au.prototype.send = function(e) {
        var t = e.detail
          , n = e.url;
        "error" === t.level && !us(t + "_" + n) || Ou.prototype.send.call(this, e)
    }
    ,
    Au.prototype.errorFilterBeforePageLeave = function(e) {
        var e = e.combine().value
          , t = e.subtype
          , e = e.name;
        return "assets" === t && -1 !== e.indexOf("_not_found") ? cs(Ks) : "requests" !== t || -1 === ["error", "timeout", "abort"].indexOf(e) || ps(1e-4)
    }
    ;
    var Ou, I = Au;
    function Au() {
        var t = Ou.call(this, {
            report: new Ms({
                send: new Ws({
                    url: wu()
                }),
                beforeLeaveFilter: function(e) {
                    return e.filter(t.errorFilterBeforePageLeave.bind(t))
                }
            }),
            Record: ku
        }) || this;
        return t
    }
    function Pu(e) {
        var t, n, r;
        return z(e) ? (t = e.stack,
        n = e.message,
        e.cause,
        e.name,
        e.type,
        {
            message: n,
            stack: t,
            detail: r = q(e, ["stack", "message", "cause", "name", "type"])
        }) : G(e) ? (t = e.stack,
        n = e.message,
        r = q(e, ["stack", "message"]),
        t = "" + t,
        v(n) ? (n = d(e),
        r = void 0) : n = G(n) ? d(n) : Eu(e.message),
        {
            message: n,
            stack: t,
            detail: r
        }) : {
            message: Eu(e)
        }
    }
    function Iu(t) {
        m.addEventListener("unhandledrejection", function(e) {
            e = Pu((e = e).reason);
            e = {
                subtype: "scripts",
                name: "unhandled_rejection",
                url: S(),
                message: v(e.message) ? "Promise unhandledrejection error" : e.message,
                detail: B({
                    stack: e.stack,
                    level: "error"
                }, e.detail)
            };
            t.send(e)
        }, !1)
    }
    function xu(t) {
        m.addEventListener("rejectionhandled", function(e) {
            e = Pu((e = e).reason);
            e = {
                subtype: "scripts",
                name: "rejection_handled",
                url: S(),
                message: v(e.message) ? "Promise rejectionhandled error" : e.message,
                detail: B({
                    stack: e.stack,
                    level: "error"
                }, e.detail)
            };
            t.send(e)
        }, !1)
    }
    function Cu() {
        var e = p(y.querySelectorAll("script"))
          , r = [];
        return e.forEach(function(e) {
            var t, n = e.src;
            !n || (t = new xt(t = n)).host === location.host && t.protocol === location.protocol || null !== e.getAttribute("crossorigin") || r.push(n)
        }),
        r
    }
    function Lu(i) {
        m.addEventListener("error", function(e) {
            t = (e = e).lineno,
            n = e.colno,
            r = e.error,
            o = e.filename,
            r = r && r.stack,
            e = Eu(e.message);
            var t, n, r, o = u(r) && u(o) ? {
                subtype: "scripts",
                name: "script_cross_origin",
                url: o || S(),
                message: e,
                detail: {
                    urls: Cu(),
                    level: "error"
                }
            } : {
                subtype: "scripts",
                name: "error",
                url: o,
                message: e,
                detail: {
                    lineno: t,
                    colno: n,
                    stack: r,
                    level: "error"
                }
            };
            o && i.send(o)
        }, !1)
    }
    function Nu(e) {
        return e.replace(ju, function(e) {
            return e.toUpperCase()
        }).replace(/[-_]/g, "")
    }
    var ju = /(?:^|[-_])(\w)/g;
    function Du(e, t) {
        if (e.$root === e)
            return "<Root>";
        var n, e = "function" == typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e, r = e.name || e._componentTag, e = e.__file;
        return ((r = !r && e ? (n = e.match(/([^/\\]+)\.vue$/)) && n[1] : r) ? "<" + Nu(r) + ">" : "<Anonymous>") + (e && !1 !== t ? " at " + e : "")
    }
    function Ru(e, t) {
        for (var n = ""; t; )
            t % 2 == 1 && (n += e),
            1 < t && (e += e),
            t >>= 1;
        return n
    }
    function Mu(e) {
        var n, t = m.Vue && m.Vue.version;
        if (t && -1 !== Y(t, "3.0.0"))
            return "found in\n" + function(e) {
                if (!e)
                    return [];
                var t = [];
                for (; e; ) {
                    var n = t[0]
                      , n = (n && n.vnode === e ? n.recurseCount++ : t.push({
                        vnode: e,
                        recurseCount: 0
                    }),
                    e.component && e.component.parent);
                    e = n && n.vnode
                }
                return t
            }((n = e).$.vnode).map(function(e, t) {
                e = e.vnode;
                return "" + (0 === t ? "---\x3e " : Ru(" ", 5 + 2 * t)) + function(e, n, t) {
                    void 0 === t && (t = !1);
                    var r = s(n) && n.displayName || n.name
                      , o = "";
                    !r && n.__file && (o = n.__file,
                    (i = n.__file.match(/([^/\\]+)\.vue$/)) && (r = i[1]));
                    {
                        var i;
                        !r && e && e.parent && (r = (i = function(e) {
                            for (var t in e)
                                if (e[t] === n)
                                    return t
                        }
                        )(e.components || e.parent.type.components) || i(e.appContext.components))
                    }
                    return (r ? "<" + Nu(r) + ">" : t ? "<App>" : "<Anonymous>") + (o ? " at " + o : "")
                }(n.$, e.type)
            }).join("\n");
        var r = e;
        if (r._isVue && r.$parent) {
            for (var o = [], i = 0; r; ) {
                if (0 < o.length) {
                    var a = o[o.length - 1];
                    if (a.constructor === r.constructor) {
                        i++,
                        r = r.$parent;
                        continue
                    }
                    0 < i && (o[o.length - 1] = [a, i],
                    i = 0)
                }
                o.push(r),
                r = r.$parent
            }
            return "found in\n" + o.map(function(e, t) {
                return "" + (0 === t ? "---\x3e " : Ru(" ", 5 + 2 * t)) + (Array.isArray(e) ? Du(e[0]) + "... (" + e[1] + " recursive calls)" : Du(e))
            }).join("\n")
        }
        return "(found in " + Du(r) + ")"
    }
    function Bu(e, t, n) {
        return {
            subtype: "scripts",
            name: "vue_error",
            url: S(),
            message: Eu(e.message),
            detail: {
                info: n,
                stack: e.stack,
                trace: t ? Mu(t) : "",
                level: "error"
            }
        }
    }
    function qu(r) {
        var o, t, n, i;
        function a(e, t, n) {
            if (z(e)) {
                try {
                    Bu(e, t, n) && r.send(Bu(e, t, n))
                } catch (e) {}
                w(e),
                s(o) && o.apply(this, arguments)
            }
        }
        t = function(e) {
            e = function(e) {
                try {
                    var t = e.config || e.constructor.config;
                    return g(t) ? t : {}
                } catch (e) {
                    return {}
                }
            }(e);
            o = e.errorHandler,
            e.errorHandler = a
        }
        ,
        m.Vue ? t(m.Vue) : (i = !1,
        Object.defineProperty(m, "Vue", {
            enumerable: !0,
            set: function(e) {
                (n = e) && !i && (i = !0,
                t(n))
            },
            get: function() {
                return n
            }
        }))
    }
    function Uu() {
        var e;
        Lu(this),
        Iu(e = this),
        xu(e),
        qu(this)
    }
    function Hu(e) {
        var t = function(e) {
            switch (e.nodeName) {
            case "AUDIO":
            case "VIDEO":
                return e.src || e.currentSrc;
            case "OBJECT":
                return e.data;
            case "PARAM":
                if (-1 !== st.indexOf(e.name))
                    return e.value;
            case "LINK":
                return e.href
            }
            return e.src
        }(e)
          , n = e.nodeName.toLowerCase()
          , r = "link" === n ? "href" : "src"
          , r = zu(e) ? n + " " + r + " is empty" : (t ? Ur(t) : "undefined") + " is not found";
        if (t && n)
            return {
                subtype: "assets",
                name: n + "_not_found",
                url: t,
                message: r,
                detail: {
                    html: function(e) {
                        var t = e.outerHTML;
                        if (t) {
                            if (!(1 <= e.childNodes.length))
                                return t;
                            t = t.match(/^<[^>]+>/);
                            return t && t[0] ? t[0] + ("</" + e.nodeName.toLowerCase()) + ">" : void 0
                        }
                    }(e),
                    level: "error"
                }
            }
    }
    function Fu(e) {
        return "link" !== e.nodeName.toLowerCase() ? e.getAttribute("src") : e.getAttribute("href")
    }
    function zu(e) {
        return "" === Fu(e)
    }
    function Wu(r) {
        m.addEventListener("error", function(e) {
            var t, n;
            (n = e).message || !Hr(n.target) || !(e = Hu(n = e.target)) || y.destination || "" !== (t = Fu(n)) && null !== t && !new RegExp("" + at.join("|"),"g").test(t) || zu(n) && !cs(Ks) || r.send(e)
        }, !0)
    }
    var Ju = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
      , Gu = ["1200", "1000", "800", "640", "400", "256", "160", "100", "80", "40"]
      , Vu = ["w", "h", "cp", "sd"]
      , Qu = ["si.geilicdn.com", "sa.geilicdn.com", "wd.geilicdn.com", "img.geilicdn.com"]
      , Ku = ["origin", "protocol", "slash", "hostname", "port", "path", "query", "hash"];
    function Xu(e) {
        var t, n, r = [], o = (l(e, function(e, t) {
            return t && r.push(t + "")
        }),
        e.w), e = e.h, i = r.indexOf("w"), a = r.indexOf("h"), s = r.indexOf("cp"), c = r.indexOf("sd");
        return t = o,
        n = e,
        -1 === s && (t !== n || 0 === parseFloat(t) || 0 === parseFloat(n)) || (t = o,
        n = e,
        1 === s && (v(t) || v(n) || 0 === parseFloat(t) || 0 === parseFloat(n))) || (t = e,
        (n = o) && n === t && -1 === Gu.indexOf(n)) || (e = i,
        o = a,
        t = c,
        -1 !== (n = s) ? n < e || n < o || -1 !== t && t < n : -1 !== t ? -1 !== n && t < n || t < e || t < o : o < e)
    }
    function Yu(e) {
        var e = function(e) {
            try {
                var n = Ju.exec(e)
                  , r = {};
                return n && Ku.forEach(function(e, t) {
                    r[e] = n[t]
                }),
                r
            } catch (e) {
                return {}
            }
        }(e)
          , t = e.protocol
          , n = e.hostname
          , e = function(e) {
            try {
                var t = {};
                return e.split("&").forEach(function(e) {
                    e = e.split("=");
                    1 < e.length && -1 !== Vu.indexOf(e[0]) && (t[e[0]] = e[1])
                }),
                t
            } catch (e) {
                return {}
            }
        }(e.query);
        return 0 <= Qu.indexOf(n) && (/^https:\/\//g.test(t) || Xu(e))
    }
    function $u(e, t) {
        var n = c({}, e);
        return delete n.message,
        {
            subtype: "assets",
            name: t,
            url: S(),
            message: e.message,
            detail: n
        }
    }
    function Zu(e, t) {
        Yu(t) && (t = $u({
            message: t + " does not fit with CDN image usage specifications",
            url: t,
            level: "warn"
        }, "img_illegal")) && e.send(t)
    }
    function ep(e, t) {
        var n, r;
        n = this,
        r = e,
        512e3 < (t = t) && ((r = $u({
            message: r + " does not meet the specification (more than 500KB)",
            url: r,
            size: t,
            level: "warn"
        }, "img_is_big")) && n.send(r)),
        Zu(this, e)
    }
    function tp(e, t, n) {
        614400 < n && (delete (n = c({}, t = {
            message: t + " does not meet the specification (more than 600KB)",
            url: t,
            size: n,
            level: "warn"
        })).message,
        t = {
            subtype: "assets",
            name: "script_is_big",
            url: S(),
            message: t.message,
            detail: n
        },
        e.send(t))
    }
    function np(e, t, n) {
        204800 < n && (delete (n = c({}, t = {
            message: t + " does not meet the specification (more than 200KB)",
            url: t,
            size: n,
            level: "warn"
        })).message,
        t = {
            subtype: "assets",
            name: "link_is_big",
            url: S(),
            message: t.message,
            detail: n
        },
        e.send(t))
    }
    var rp = [".webp", ".png", ".jpg", ".JPG", ".jpeg", ".gif"];
    function op(e) {
        var t, n = e.initiatorType, e = e.name;
        return "img" === n || (t = e,
        rp.some(function(e) {
            return -1 !== t.indexOf(e)
        }))
    }
    function ip() {
        var e = p(y.querySelectorAll("img"))
          , t = [];
        return e.forEach(function(e) {
            (e = e.src) && t.push(e)
        }),
        t
    }
    var ap = {
        entryTypes: ["resource"]
    }
      , sp = "resource";
    function cp(i) {
        function t(e) {
            var t, n, r = e.name, o = e.initiatorType, e = e.decodedBodySize;
            return op({
                initiatorType: o,
                name: r
            }) ? ep.call(i, r, e) : (t = (n = {
                initiatorType: o,
                name: r
            }).initiatorType,
            n = n.name,
            "script" === t || -1 !== n.indexOf(".js") ? function(e, t) {
                tp(this, e, t)
            }
            .call(i, r, e) : (n = (t = {
                initiatorType: o,
                name: r
            }).initiatorType,
            t = t.name,
            "link" === n && -1 !== t.indexOf(".css") ? function(e, t) {
                np(this, e, t)
            }
            .call(i, r, e) : void 0))
        }
        function e() {
            var t = this;
            l(ip(), function(e) {
                return function(e) {
                    Zu(this, e)
                }
                .call(t, e)
            })
        }
        $s ? new PerformanceObserver(function(e) {
            e = e.getEntriesByType(sp);
            try {
                l(e, t)
            } catch (e) {}
        }
        ).observe(ap) : (co(function() {
            return e.call(i)
        }),
        go(function() {
            return e.call(i)
        }))
    }
    function up() {
        Wu(this),
        cs(Qs) && cp(this),
        cp(this)
    }
    var pp = XMLHttpRequest.prototype
      , fp = pp.open
      , lp = pp.send
      , dp = ["error", "abort", "timeout"];
    function hp(t) {
        s(lp) && s(fp) && (pp.open = function(e, t) {
            return this._request = {
                method: e ? e.toUpperCase() : "GET",
                url: (e = t,
                Dr.href = e,
                Dr.href)
            },
            fp.apply(this, p(arguments))
        }
        ,
        pp.send = function(e) {
            try {
                g(this._request) && (this._request.data = function(e) {
                    if (V(e)) {
                        var n = {};
                        try {
                            e.forEach(function(e, t) {
                                n[t] = e
                            })
                        } catch (e) {}
                        return d(n)
                    }
                    return v(e) ? "" : e
                }(e)),
                t(this)
            } catch (e) {}
            return lp.apply(this, p(arguments))
        }
        )
    }
    function mp(e) {
        var t = "";
        try {
            -1 !== e.getAllResponseHeaders().toLowerCase().indexOf(Gs) && (t = e.getResponseHeader(Gs) || "")
        } catch (e) {}
        return t
    }
    function vp(r, e) {
        var o, t, i, a = r._request;
        g(a) && (o = Ur(a.url),
        t = s(e.resolve) ? e.resolve : f,
        i = s(e.reject) ? e.reject : f,
        dp.forEach(function(n) {
            return r.addEventListener(n, function() {
                var e, t;
                i(a, {
                    status: r.status,
                    traceId: mp(r),
                    error: (t = (e = {
                        type: n,
                        message: o + " trigger " + n + " event"
                    }).message,
                    e = e.type,
                    (t = new Error(t)).type = e,
                    t)
                })
            }, !1)
        }),
        r.addEventListener("load", function() {
            !function(e) {
                var t = null;
                try {
                    -1 !== e.getAllResponseHeaders().toLowerCase().indexOf(Vs) && (t = e.getResponseHeader(Vs))
                } catch (e) {}
                return t
            }(r) && t(a, {
                status: r.status,
                traceId: mp(r),
                data: function(e) {
                    try {
                        var t = e.response;
                        if(window.beginCJ){
                            console.log('t---->',t);
                        }
                        return t = "json" === e.responseType || g(t) ? t : he(e.responseText)
                    } catch (e) {
                        return {}
                    }
                }(r)
            })
        }, !1))
    }
    function gp(t) {
        var e, r;
        hp(function(e) {
            vp(e, t)
        }),
        r = s((e = t).resolve) ? e.resolve : f,
        h.on("networkDecrypted", function(e) {
            var t = e.xhr
              , e = e.response
              , n = t._request;
            r(n, {
                status: t.status,
                traceId: mp(t),
                data: e
            })
        })
    }
    function yp(e) {
        var t = Te("REQUEST_INTERCEPT", function() {
            return new le({
                stateful: !1
            })
        })
          , n = t.value
          , t = t.cached;
        n.push(e),
        t || gp({
            resolve: function(e, t) {
                return n.resolve(e, t)
            },
            reject: function(e, t) {
                return n.reject(e, t)
            }
        })
    }
    var _p = new xt(wu()).hostname;
    function wp(e, t) {
        var n, r = "error", o = "", i = t.error;
        if (n = e.url,
        new xt(n).hostname !== _p)
            return i && (r = i.type,
            o = i.message),
            {
                subtype: "requests",
                name: r,
                message: o,
                url: e.url,
                detail: {
                    status: t.status,
                    method: e.method,
                    traceId: t.traceId,
                    request: {
                        data: e.data
                    },
                    level: "error"
                }
            }
    }
    function bp(e, t) {
        var n, r = t.data && t.data.status && t.data.status.code, o = e.url;
        if (n = o,
        0 !== r && bu(n))
            return {
                subtype: "requests",
                name: "non_zero_code",
                message: Ur(o) + " return error code " + r,
                url: o,
                detail: {
                    status: t.status,
                    method: e.method,
                    traceId: t.traceId,
                    code: r,
                    request: {
                        data: e.data
                    },
                    response: {
                        data: t.data
                    },
                    level: "error"
                }
            }
    }
    function Ep() {
        var n, r;
        n = this,
        yp({
            resolve: function(e, t) {
                e = bp(e, t);
                e && n.send(e)
            }
        }),
        r = this,
        yp({
            reject: function(e, t) {
                e = wp(e, t);
                e && !y.destination && cs(Ys) && r.send(e)
            }
        })
    }
    function Sp(e) {
        var t;
        {
            if (G(e) && !v(e.message))
                return delete (t = c({}, e)).message,
                delete t.sample,
                {
                    subtype: "custom",
                    name: "error",
                    url: S(),
                    message: e.message,
                    detail: t
                };
            Gt("The field of message is required.")
        }
    }
    function kp() {
        var n = this;
        h.on("reportException", function(e) {
            var t = Sp(e)
              , e = e.sample;
            t && (void 0 === e || e ? cs(Xs) && n.send(t) : (t.name = "error",
            t.detail.level = "error",
            n.send(t)))
        }),
        h.on("reportInformation", function(e) {
            var t = Sp(e)
              , e = e.sample;
            t && (void 0 === e || e ? cs(Xs) && n.send(t) : (t.name = "info",
            t.detail.level = "info",
            n.send(t)))
        }),
        h.on("reportWarn", function(e) {
            var t = Sp(e)
              , e = e.sample;
            t && (void 0 === e || e ? cs(Xs) && n.send(t) : (t.name = "warn",
            t.detail.level = "warn",
            n.send(t)))
        })
    }
    var Tp = !!("ontouchstart"in m || navigator.maxTouchPoints)
      , Op = Tp ? "touchstart" : "mousedown"
      , Ap = Tp ? "touchmove" : "mousemove"
      , Pp = Tp ? "touchend" : "mouseup"
      , Ip = "scroll"
      , xp = "input"
      , Cp = "resize"
      , Lp = !!(m.MutationObserver || m.WebKitMutationObserver);
    function Np(e) {
        function t(e) {
            return String.fromCharCode(e + 32)
        }
        var n, r;
        if (null == e)
            return "";
        for (var o, i, a = {}, s = {}, c = "", u = 2, p = 3, f = 2, l = [], d = 0, h = 0, m = 0; m < e.length; m += 1)
            if (o = e.charAt(m),
            Object.prototype.hasOwnProperty.call(a, o) || (a[o] = p++,
            s[o] = !0),
            i = c + o,
            Object.prototype.hasOwnProperty.call(a, i))
                c = i;
            else {
                if (Object.prototype.hasOwnProperty.call(s, c)) {
                    if (c.charCodeAt(0) < 256) {
                        for (n = 0; n < f; n++)
                            d <<= 1,
                            14 == h ? (h = 0,
                            l.push(t(d)),
                            d = 0) : h++;
                        for (r = c.charCodeAt(0),
                        n = 0; n < 8; n++)
                            d = d << 1 | 1 & r,
                            14 == h ? (h = 0,
                            l.push(t(d)),
                            d = 0) : h++,
                            r >>= 1
                    } else {
                        for (r = 1,
                        n = 0; n < f; n++)
                            d = d << 1 | r,
                            14 == h ? (h = 0,
                            l.push(t(d)),
                            d = 0) : h++,
                            r = 0;
                        for (r = c.charCodeAt(0),
                        n = 0; n < 16; n++)
                            d = d << 1 | 1 & r,
                            14 == h ? (h = 0,
                            l.push(t(d)),
                            d = 0) : h++,
                            r >>= 1
                    }
                    0 == --u && (u = Math.pow(2, f),
                    f++),
                    delete s[c]
                } else
                    for (r = a[c],
                    n = 0; n < f; n++)
                        d = d << 1 | 1 & r,
                        14 == h ? (h = 0,
                        l.push(t(d)),
                        d = 0) : h++,
                        r >>= 1;
                0 == --u && (u = Math.pow(2, f),
                f++),
                a[i] = p++,
                c = String(o)
            }
        if ("" !== c) {
            if (Object.prototype.hasOwnProperty.call(s, c)) {
                if (c.charCodeAt(0) < 256) {
                    for (n = 0; n < f; n++)
                        d <<= 1,
                        14 == h ? (h = 0,
                        l.push(t(d)),
                        d = 0) : h++;
                    for (r = c.charCodeAt(0),
                    n = 0; n < 8; n++)
                        d = d << 1 | 1 & r,
                        14 == h ? (h = 0,
                        l.push(t(d)),
                        d = 0) : h++,
                        r >>= 1
                } else {
                    for (r = 1,
                    n = 0; n < f; n++)
                        d = d << 1 | r,
                        14 == h ? (h = 0,
                        l.push(t(d)),
                        d = 0) : h++,
                        r = 0;
                    for (r = c.charCodeAt(0),
                    n = 0; n < 16; n++)
                        d = d << 1 | 1 & r,
                        14 == h ? (h = 0,
                        l.push(t(d)),
                        d = 0) : h++,
                        r >>= 1
                }
                0 == --u && (u = Math.pow(2, f),
                f++),
                delete s[c]
            } else
                for (r = a[c],
                n = 0; n < f; n++)
                    d = d << 1 | 1 & r,
                    14 == h ? (h = 0,
                    l.push(t(d)),
                    d = 0) : h++,
                    r >>= 1;
            0 == --u && (u = Math.pow(2, f),
            f++)
        }
        for (r = 2,
        n = 0; n < f; n++)
            d = d << 1 | 1 & r,
            14 == h ? (h = 0,
            l.push(t(d)),
            d = 0) : h++,
            r >>= 1;
        for (; ; ) {
            if (d <<= 1,
            14 == h) {
                l.push(t(d));
                break
            }
            h++
        }
        return l.join("")
    }
    function jp(n) {
        self.addEventListener("message", function(e) {
            e = function(e) {
                if (e) {
                    var t = e.command;
                    if (n[t])
                        return {
                            id: e.id,
                            data: n[t](e.data),
                            command: t
                        }
                }
            }(e.data);
            e && self.postMessage(e)
        }, !1)
    }
    function Dp() {
        return [Np.toString(), jp.toString(), function(e) {
            var t, n = "";
            for (t in e)
                e.hasOwnProperty(t) && (n += t + ":" + e[t].name);
            return jp.name + "({" + n + "})"
        }({
            compress: Np
        })].join(";")
    }
    var Rp = "message"
      , Mp = Math.random();
    var Bp = function() {
        try {
            if (m.Worker && m.Blob && m.URL)
                return new Worker(m.URL.createObjectURL(new Blob([Dp()])))
        } catch (e) {}
    }();
    function qp(t) {
        return new Promise(function(n, e) {
            if (!Bp)
                return e();
            var r = Mp++;
            Bp.addEventListener(Rp, function e(t) {
                t = t.data || {};
                r === t.id && (Bp.removeEventListener(Rp, e),
                n(t.data))
            }),
            Bp.postMessage({
                id: r,
                command: t.command,
                data: t.data
            })
        }
        )
    }
    function L(e) {
        return Math.round(e)
    }
    var Up, Hp, Fp, zp = new r;
    function Wp(e) {
        zp.on("INITIALIZATION_MUTATION_COMPLETED", e, !0)
    }
    function Jp() {
        Hp = !0,
        Up && clearTimeout(Up),
        y.removeEventListener(Op, Gp, !0),
        y.removeEventListener(Ip, Vp, !0),
        zp.emit("INTERACTION_HAPPENED")
    }
    function Gp(e) {
        e.isTrusted && Jp()
    }
    function Vp(e) {
        !e.isTrusted || Fp++ < 1 || Jp()
    }
    function Qp(e) {
        return e ? e.__id : void 0
    }
    function Kp(e) {
        var t;
        if (1 === e.nodeType)
            return t = e.type,
            "INPUT" === e.nodeName && ("checkbox" === t || "radio" === t)
    }
    function Xp(e) {
        return 1 === e.nodeType && "OPTION" === e.nodeName
    }
    function Yp(e, t) {
        return e.getAttribute(t)
    }
    function $p(e) {
        if (!Kp(e))
            return 1 === (t = e).nodeType && ("INPUT" === t.nodeName && "password" === t.type) ? e.value ? "******" : "" : e.value;
        var t
    }
    function Zp(e) {
        if (Kp(e))
            return e.checked
    }
    function ef(e) {
        if (Xp(e))
            return e.selected
    }
    Hp = !1,
    Fp = 0,
    po(function() {
        Hp || (Up = setTimeout(Jp, 6e3))
    }),
    y.addEventListener(Op, Gp, !0),
    y.addEventListener(Ip, Vp, !0);
    e(rf, tf = Ne);
    var tf, nf = rf;
    function rf(e, t) {
        return tf.call(this, e, (t = (e = t).detail,
        {
            type: "inter_ext1",
            report_time: Date.now(),
            uuid: "1",
            subtype: e.subtype,
            detail: g(t) ? d(t) : t
        })) || this
    }
    var of = {
        delay: 5e3
    };
    e(cf, af = De),
    cf.prototype.push = function(e) {
        var t = this;
        -1 === this.records.indexOf(e) && this.records.push(e),
        this.initializationCompleted || "initialization" !== e.combine().value.subtype || (this.initializationCompleted = !0),
        this.initializationCompleted && (50 < this.records.length ? this.send() : X(function() {
            5 < t.records.length && t.send()
        }, this.options.delay)())
    }
    ,
    cf.prototype.sendBeforeLeave = function() {
        this.records.length && (this.options.send.sendBeforeLeave({
            records: this.records.slice()
        }, !1).catch(function() {}),
        this.records.length = 0)
    }
    ,
    cf.prototype.send = function() {
        this.records.length && (this.options.send.send({
            records: this.records.slice()
        }).catch(function() {}),
        this.records.length = 0)
    }
    ;
    var af, sf = cf;
    function cf(e) {
        var t = af.call(this) || this;
        return t.records = [],
        t.initializationCompleted = !1,
        t.options = c({}, of, e),
        setTimeout(function() {
            go(function() {
                t.sendBeforeLeave()
            })
        }),
        t
    }
    function uf(o) {
        return new Promise(function(t) {
            var e, n, r;
            "initialization" === (r = (n = o).subtype) || "dom" === r && n.detail.addNodes ? qp({
                command: "compress",
                data: e = d(o.detail)
            }).catch(function() {
                return Np(e)
            }).then(function(e) {
                t({
                    subtype: o.subtype,
                    detail: e
                })
            }) : t({
                subtype: o.subtype,
                detail: o.detail
            })
        }
        )
    }
    e(lf, pf = _),
    lf.prototype.send = function(e) {
        var t = this;
        return uf(e).then(function(e) {
            pf.prototype.send.call(t, e)
        })
    }
    ;
    var pf, ff = lf;
    function lf() {
        return pf.call(this, {
            report: new sf({
                send: new Ws({
                    url: "https://logtake." + (zt() < 3 ? Ht[1] + "." : "") + "weidian.com/h5collector/webcollect/4.0/interaction"
                })
            }),
            Record: nf
        }) || this
    }
    var df = {
        "data-vcollect-multidomain": 1,
        "data-vcollect-plugin": 1,
        "data-spider-impression": 1,
        "data-spider-action-name": 1,
        "data-spider": 1,
        "data-spider-action-args": 1,
        "data-spider-mode": 1,
        "data-v-spiderid": 1,
        "data-v-loop": 1,
        "data-vcollect-disabled": 1,
        autocomplete: 1,
        min: 1,
        max: 1,
        alt: 1,
        tabindex: 1,
        role: 1,
        "aria-controls": 1,
        "aria-modal": 1,
        "aria-label": 1,
        "aria-hidden": 1,
        "aria-labelledby": 1,
        "aria-selected": 1,
        "aria-disabled": 1,
        "aria-checked": 1,
        "aria-describedby": 1,
        "aria-expanded": 1
    }
      , hf = {
        META: 1,
        SCRIPT: 1
    }
      , mf = "TEXT"
      , vf = 0;
    function gf(e) {
        var t, n = yf(e);
        return !n || (hf[n] || (n === mf && (u(t = e.textContent) || !/[^\n\r\s]/.test(t)) || "LINK" === n && "stylesheet" !== Yp(e, "rel")))
    }
    function yf(e) {
        var t = e.nodeType;
        return 1 === t ? e.tagName : 3 === t ? mf : void 0
    }
    function _f(e) {
        if (1 === e.nodeType) {
            var n, t = e.attributes;
            if (t && t.length)
                return n = {},
                p(t).forEach(function(e) {
                    var t = e.name
                      , e = e.value;
                    df[t] || (n[t] = e)
                }),
                (function(e) {
                    var t;
                    if (1 === e.nodeType)
                        return t = e.nodeName,
                        e = e.type,
                        "INPUT" === t && "button" !== e && "submit" !== e && "reset" !== e || "SELECT" === t || "TEXTAREA" === t
                }(e) || Xp(e)) && (Kp(e) ? n.checked = Zp(e) : Xp(e) ? n.selected = ef(e) : n.value = $p(e)),
                Object.keys(n).length ? n : void 0
        }
    }
    function wf(e) {
        var t;
        if (3 === e.nodeType)
            return t = e.textContent || "",
            e.parentElement && e.parentElement.tagName,
            t
    }
    function bf(e) {
        var t, n;
        if (!gf(e))
            return t = {
                id: ((t = e).__id || (t.__id = ++vf),
                t.__id),
                name: yf(e)
            },
            n = "svg" === (n = e).tagName || n instanceof SVGElement,
            n && (t.isSvg = n),
            n = _f(e),
            n && (t.attrs = n),
            n = wf(e),
            n && (t.text = n),
            n = function(e) {
                var t;
                if ((e = e.childNodes) && e.length)
                    return t = [],
                    p(e).forEach(function(e) {
                        e = bf(e);
                        e && t.push(e)
                    }),
                    t.length ? t : void 0
            }(e),
            n && (t.children = n),
            t
    }
    function Ef() {
        var t = this;
        lo(function() {
            setTimeout(function() {
                var e;
                e = bf(y.querySelector("html")),
                e = {
                    x: m.scrollX,
                    y: m.scrollY,
                    w: zr(),
                    h: Fr(),
                    node: e,
                    startTime: E()
                },
                t.send({
                    subtype: "initialization",
                    detail: e
                }),
                zp.emit("INITIALIZATION_MUTATION_COMPLETED")
            })
        })
    }
    var Sf = {
        CHILD_LIST: "childList",
        ATTRIBUTES: "attributes",
        CHARACTER_DATA: "characterData"
    };
    function kf(e) {
        var t;
        switch (null == (t = e.nextSibling) ? void 0 : t.nodeType) {
        case 1:
            return e.nextSibling;
        case 3:
            return Of(e.nextSibling);
        case 8:
            var n = function(e) {
                e = Array.prototype.filter.call(e, function(e) {
                    return 1 === e.nodeType || 3 === e.nodeType
                });
                return e && e[e.length - 1]
            }(e.addedNodes);
            return n && Of(n)
        }
    }
    function Tf(e) {
        var t = Qp(e.target);
        if (t) {
            var r = [];
            if (e.removedNodes.forEach(function(e) {
                var t, n = Qp(e);
                n && (function t(e) {
                    (n = e).__id && (n.__id = null);
                    var n = e.childNodes;
                    n && n.length && p(n).forEach(function(e) {
                        t(e)
                    })
                }(e),
                n = {
                    id: n
                },
                (t = yf(e)) === mf && (n.nextId = Qp(Of(e)),
                n.name = t),
                r.push(n))
            }),
            r.length)
                return {
                    parentId: t,
                    removeNodes: r,
                    startTime: E()
                }
        }
    }
    function Of(e) {
        return e.nextElementSibling
    }
    function Af(e) {
        switch (e.type) {
        case Sf.CHILD_LIST:
            if (e.addedNodes.length) {
                var t = e
                  , n = Qp(t.target);
                if (n) {
                    var r = [];
                    if (t.addedNodes.forEach(function(e) {
                        Qp(e) || (e = bf(e)) && r.push(e)
                    }),
                    r.length)
                        return {
                            parentId: n,
                            nextId: Qp(kf(t)),
                            addNodes: r,
                            startTime: E()
                        }
                }
                return
            }
            if (e.removedNodes.length)
                return Tf(e);
        case Sf.ATTRIBUTES:
            var n = e
              , t = n.attributeName
              , o = Qp(n.target);
            if (t && o && !df[t]) {
                var i = Yp(n.target, t);
                if (i !== n.oldValue)
                    return {
                        id: o,
                        attrs: [((n = {})[t] = i,
                        n)],
                        startTime: E()
                    }
            }
            return;
        case Sf.CHARACTER_DATA:
            o = e,
            i = Qp(o.target.parentElement);
            return i ? {
                id: Qp(o.target),
                parentId: i,
                nextId: Qp(Of(o.target)),
                text: wf(o.target),
                startTime: E()
            } : void 0
        }
    }
    function Pf(e) {
        var r = [];
        return e.forEach(function(e) {
            var t, n = Af(e);
            !n || (t = r.length) && function(e, t, n) {
                if (function(e, t, n) {
                    return xf === e && If(t) === If(n)
                }(e, t, n))
                    switch (e) {
                    case Sf.CHILD_LIST:
                        if (t.addNodes)
                            return n.addNodes = n.addNodes.concat(t.addNodes),
                            1;
                        if (t.removeNodes)
                            return n.removeNodes = n.removeNodes.concat(t.removeNodes),
                            1;
                    case Sf.ATTRIBUTES:
                        return function(e, t) {
                            for (var n = 0, r = e; n < r.length; n++) {
                                var o = r[n];
                                !function(e, t) {
                                    return e.some(function(e) {
                                        return d(e) === d(t)
                                    })
                                }(t, o) && t.push(o)
                            }
                        }(t.attrs, n.attrs),
                        1
                    }
                return
            }(e.type, n, r[t - 1]) || (r.push(n),
            xf = e.type)
        }),
        xf = "",
        r
    }
    function If(e) {
        return [e.id, e.parentId, e.nextId, Object.keys(e)].join(",")
    }
    var xf = "";
    function Cf(t) {
        var e, n;
        Lp && (e = y.querySelector("html"),
        e = e,
        n = function(e) {
            e = Pf(e);
            e.length && e.forEach(t)
        }
        ,
        (n = new MutationObserver(n)).observe(e, ((n = {
            subtree: !0
        })[Sf.CHILD_LIST] = !0,
        n[Sf.ATTRIBUTES] = !0,
        n[Sf.CHARACTER_DATA] = !0,
        n.attributeOldValue = !0,
        n)))
    }
    function Lf() {
        function e(e) {
            e && t.send({
                subtype: "dom",
                detail: e
            })
        }
        var t = this;
        Wp(function() {
            Cf(e)
        })
    }
    var Nf = 500;
    function jf(t) {
        var e = X(function(e) {
            e = function(e) {
                var t = e.target;
                if (Hr(t = t === y ? document.scrollingElement || document.documentElement : t))
                    return {
                        id: Qp(t),
                        x: L(t.scrollLeft),
                        y: L(t.scrollTop),
                        startTime: L(e.timeStamp)
                    }
            }(e);
            e && t(e)
        }, Nf);
        y.addEventListener(Ip, e, !0)
    }
    function Df() {
        function e(e) {
            e && t.send({
                subtype: "scroll",
                detail: e
            })
        }
        var t = this;
        Wp(function() {
            jf(e)
        })
    }
    var Rf = 500;
    function Mf(t) {
        var e = X(function(e) {
            t((e = e.timeStamp,
            {
                w: zr(),
                h: Fr(),
                startTime: L(e)
            }))
        }, Rf);
        m.addEventListener(Cp, e, !0)
    }
    function Bf() {
        function e(e) {
            e && t.send({
                subtype: "resize",
                detail: e
            })
        }
        var t = this;
        Wp(function() {
            Mf(e)
        })
    }
    var qf = 300;
    function Uf(e) {
        var t;
        return Tp ? (t = (t = e).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : void 0) ? {
            x: L(t.clientX),
            y: L(t.clientY)
        } : void 0 : {
            x: L(e.clientX),
            y: L(e.clientY)
        }
    }
    function Hf(e) {
        return 3 === e.which
    }
    function Ff(n) {
        function e(e) {
            var t = Uf(e);
            v(t) || n({
                x: t.x,
                y: t.y,
                eventType: "contextmenu",
                startTime: L(e.timeStamp)
            })
        }
        y.addEventListener("contextmenu", e, !0)
    }
    function zf(n) {
        function e(e) {
            var t;
            Hf(e) || (v(t = Uf(e)) || n({
                x: t.x,
                y: t.y,
                eventType: "pointerdown",
                startTime: L(e.timeStamp)
            }))
        }
        y.addEventListener(Op, e, !0)
    }
    function Wf(n) {
        function e(e) {
            var t;
            Hf(e) || (v(t = Uf(e)) || n({
                x: t.x,
                y: t.y,
                eventType: "pointerup",
                startTime: L(e.timeStamp)
            }))
        }
        y.addEventListener(Pp, e, !0)
    }
    function Jf() {
        function e(e) {
            e && r.send({
                subtype: "pointer",
                detail: e
            })
        }
        var n, t, r = this;
        zf(e),
        Wf(e),
        n = e,
        t = X(function(e) {
            var t = Uf(e);
            v(t) || n({
                x: t.x,
                y: t.y,
                eventType: "pointermove",
                startTime: L(e.timeStamp)
            })
        }, qf),
        y.addEventListener(Ap, t, !0),
        Ff(e)
    }
    function Gf() {
        if (s(m.performance.getEntriesByType)) {
            var e = m.performance.getEntriesByType("navigation");
            if (e.length)
                return e[0]
        }
        e = performance.timing;
        if (e)
            return {
                name: S(),
                startTime: 0,
                duration: e.loadEventEnd - e.navigationStart
            }
    }
    function Vf(n) {
        var e, t;
        function r(e) {
            var t = {
                entryType: "resource",
                url: (e = e).name,
                startTime: L(e.startTime),
                duration: L(e.duration)
            };
            setTimeout(function() {
                n(t)
            })
        }
        Xe && m.PerformanceObserver && (po(function() {
            setTimeout(function() {
                var e = Gf();
                e && n({
                    entryType: "navigation",
                    url: (e = e).name,
                    startTime: L(e.startTime),
                    duration: L(e.duration),
                    timeOrigin: m.performance.timeOrigin || m.performance.timing.navigationStart
                })
            })
        }),
        performance.getEntriesByType("resource").forEach(r),
        e = function(e) {
            e.getEntries().forEach(r)
        }
        ,
        void 0 === t && (t = {
            entryTypes: ["resource"]
        }),
        (e = new PerformanceObserver(e)).observe(t))
    }
    function Qf() {
        function e(e) {
            e && t.send({
                subtype: "network",
                detail: e
            })
        }
        var t = this;
        Wp(function() {
            Vf(e)
        })
    }
    var Kf = 300
      , Xf = 150;
    function Yf(e, t) {
        var n = Qp(e);
        if (n)
            return {
                id: n,
                value: $p(e),
                checked: Zp(e),
                selected: ef(e),
                startTime: t ? L(t) : E()
            }
    }
    function $f(n) {
        var r, e = X(function(e) {
            var t = e.target;
            !function(e) {
                var t;
                if (1 === e.nodeType)
                    return t = e.type,
                    "INPUT" === e.nodeName && "file" === t
            }(t) && (t = Yf(t, e.timeStamp)) && n(t)
        }, Kf), e = (y.addEventListener(xp, e, !0),
        X(function(e) {
            e = Yf(e);
            e && n(e)
        }, Xf));
        r = e,
        [{
            prototype: HTMLInputElement.prototype,
            key: "value"
        }, {
            prototype: HTMLInputElement.prototype,
            key: "checked"
        }, {
            prototype: HTMLTextAreaElement.prototype,
            key: "value"
        }, {
            prototype: HTMLSelectElement.prototype,
            key: "value"
        }, {
            prototype: HTMLOptionElement.prototype,
            key: "selected"
        }].forEach(function(n) {
            var e = n.prototype
              , t = n.key;
            n.descriptor = Object.getOwnPropertyDescriptor(e, t),
            n.descriptor && Object.defineProperty(e, t, {
                set: function(e) {
                    var t;
                    null != (t = null == (t = null == n ? void 0 : n.descriptor) ? void 0 : t.set) && t.call(this, e),
                    r(this)
                }
            })
        })
    }
    function Zf() {
        function e(e) {
            e && t.send({
                subtype: "input",
                detail: e
            })
        }
        var t = this;
        Wp(function() {
            $f(e)
        })
    }
    function el() {
        var t = this;
        go(function() {
            var e;
            e = E(),
            (e = {
                startTime: L(e)
            }) && t.send({
                subtype: "beforeunload",
                detail: e
            })
        })
    }
    function tl() {
        var e = function(e) {
            e = e.split("__");
            return {
                userId: e[0],
                startTime: e[1],
                endTime: e[2]
            }
        }((e = Nt(S()),
        function(e) {
            e = decodeURIComponent(e);
            for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), n = 1; n < e.length; n++)
                t += String.fromCharCode(e.charCodeAt(n) - t.charCodeAt(n - 1));
            return t
        }(decodeURIComponent(e.vc_pecker))))
          , t = e.userId
          , o = e.startTime
          , i = e.endTime;
        return new Promise(function(r) {
            var n;
            n = t,
            new Promise(function(t) {
                ys(function(e) {
                    t(ws() === n || _s() === n || e === n)
                })
            }
            ).then(function(e) {
                return r(e && (e = parseFloat(o),
                t = parseFloat(i),
                n = Date.now(),
                e <= n && n <= t));
                var t, n
            })
        }
        )
    }
    function nl(e) {
        if (s(e.toJSON))
            return e.toJSON();
        try {
            var t, n = {};
            for (t in e)
                K(e, t) && (n[t] = e[t]);
            return Object.keys(n).length ? n : void 0
        } catch (e) {}
    }
    function rl(e) {
        return Math.round(e)
    }
    function ol(e, t) {
        t = new MutationObserver(t);
        return t.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }),
        t
    }
    function il(e) {
        return 5 * e.querySelectorAll("img").length + e.querySelectorAll("*").length + .5 * (n = "",
        p(e.children).forEach(function(e) {
            var t = e.tagName;
            "SCRIPT" !== t && "STYLE" !== t && (n += e.textContent)
        }),
        n.replace(/[\s\n\r]/g, "").length);
        var n
    }
    var al = /\.(png|jpg|jpeg|gif|webp|bmp)/i;
    function sl(e) {
        return /^https?:\/\//.test(e) && al.test(e)
    }
    var cl, ul = m.innerWidth, pl = m.innerHeight;
    function fl() {
        if (cl)
            return cl;
        var e, t = (e = m.location).origin + e.pathname;
        return p(y.querySelectorAll("script[src]")).forEach(function(e) {
            t += e.src
        }),
        p(y.querySelectorAll("link[rel=stylesheet]")).forEach(function(e) {
            t += e.href
        }),
        cl = be(t, 16)
    }
    function ll(e) {
        return 0 <= e ? rl(e) : 0
    }
    var x = m.MutationObserver || m.WebKitMutationObserver
      , dl = tt + "owl_visit"
      , hl = !(!Xe || !m.PerformanceObserver)
      , ml = !!(!!x && Xe && m.performance.getEntriesByType)
      , vl = !!("ontouchstart"in m || navigator.maxTouchPoints)
      , gl = 5;
    var yl = [{
        regexp: /https:\/\/weidian.com\/item.html\/?\?.*itemID=.*/,
        rate: .02
    }, {
        regexp: /https:\/\/weidian.com\/?\?.*userid=.*/,
        rate: .04
    }];
    function _l() {
        n = .45,
        yl.some(function(e) {
            var t = e.regexp
              , e = e.rate;
            return !!t.test(location.href) && (n = e,
            !0)
        });
        var n, e = n;
        return Math.random() < e
    }
    function wl(e) {
        return void 0 === e && (e = 1),
        _l() && (e = e,
        Math.random() < 1 / e)
    }
    var bl, El = 1;
    function Sl(e, t) {
        void 0 === t && (t = -1);
        var n = fl()
          , r = Date.now()
          , o = (e = v(e) ? {
            timestamp: r,
            caches: []
        } : e).caches[t]
          , n = (v(o) ? o = {
            c: 1,
            h: n
        } : (e.caches.splice(t, 1),
        o.c = ++o.c),
        El = o.c,
        e.caches.unshift(o),
        e.timestamp = r,
        e);
        try {
            if (v(n))
                return void localStorage.removeItem(dl);
            localStorage.setItem(dl, d(n))
        } catch (e) {}
    }
    function kl() {
        return 0 === zt() || (v(bl) && (n = -1,
        t = 0,
        v(e = function() {
            var e;
            try {
                e = he(localStorage.getItem(dl) || "")
            } catch (e) {}
            if (g(e) && a(e.caches))
                return e.caches.splice(gl),
                e
        }()) || (r = e.caches,
        o = fl(),
        i = -1,
        a(r) && r.some(function(e, t) {
            return e.h === o && (i = t,
            !0)
        }),
        n = i,
        (r = e.caches[n]) && (t = r.c)),
        Sl(e, n),
        bl = wl(t + 1)),
        bl);
        var e, t, n, r, o, i
    }
    var N = new r
      , Tl = {
        connectEnd: {
            short: "A",
            type: 1
        },
        connectStart: {
            short: "B",
            type: 1
        },
        decodedBodySize: {
            short: "C",
            type: 1
        },
        domComplete: {
            short: "D",
            type: 1
        },
        domContentLoadedEventEnd: {
            short: "E",
            type: 1
        },
        domContentLoadedEventStart: {
            short: "F",
            type: 1
        },
        domInteractive: {
            short: "G",
            type: 1
        },
        domainLookupEnd: {
            short: "H",
            type: 1
        },
        domainLookupStart: {
            short: "I",
            type: 1
        },
        duration: {
            short: "J",
            type: 1
        },
        encodedBodySize: {
            short: "K",
            type: 1
        },
        entryType: {
            short: "L",
            type: 2
        },
        fetchStart: {
            short: "M",
            type: 1
        },
        initiatorType: {
            short: "N",
            type: 2
        },
        loadEventEnd: {
            short: "O",
            type: 1
        },
        loadEventStart: {
            short: "P",
            type: 1
        },
        name: {
            short: "Q",
            type: 2
        },
        nextHopProtocol: {
            short: "R",
            type: 2
        },
        redirectCount: {
            short: "S",
            type: 3
        },
        redirectEnd: {
            short: "T",
            type: 1
        },
        redirectStart: {
            short: "U",
            type: 1
        },
        requestStart: {
            short: "V",
            type: 1
        },
        responseEnd: {
            short: "W",
            type: 1
        },
        responseStart: {
            short: "S",
            type: 1
        },
        secureConnectionStart: {
            short: "Y",
            type: 1
        },
        serverTiming: {
            short: "Z",
            type: 4,
            remove: !0
        },
        startTime: {
            short: "A1",
            type: 1
        },
        transferSize: {
            short: "B1",
            type: 1
        },
        timingType: {
            short: "C1",
            type: 2
        },
        unloadEventEnd: {
            short: "D1",
            type: 1
        },
        unloadEventStart: {
            short: "E1",
            type: 1
        },
        workerStart: {
            short: "F1",
            type: 1,
            remove: !0
        },
        workerTiming: {
            short: "G1",
            type: 4,
            remove: !0
        },
        eventType: {
            short: "H1",
            type: 2
        },
        visit: {
            short: "I1",
            type: 3
        }
    }
      , Ol = {
        1: rl
    };
    function Al(e) {
        var n = {};
        return l(e, function(e, t) {
            t = function(e, t) {
                var n = Tl[e];
                if (n) {
                    if (n.remove)
                        return;
                    e = n.short;
                    n = Ol[n.type];
                    n && (t = n(t))
                }
                return {
                    name: e,
                    value: t
                }
            }(t, e);
            t && (n[t.name] = t.value)
        }),
        n
    }
    var Pl = "paint"
      , Il = "interaction"
      , xl = "measure";
    e(Nl, Cl = t);
    var Cl, Ll = Nl;
    function Nl(e, t) {
        var n;
        return t.type = "perf_ext1",
        (n = t).detail = d(Al(n.detail)),
        Cl.call(this, e, t) || this
    }
    var jl, Dl = {
        delay: 300
    }, Rl = (e(Ml, jl = De),
    Ml.prototype.push = function(e) {
        var t = this;
        -1 === this.records.indexOf(e) && this.records.push(e),
        this.resourceTimingSended && X(function() {
            return t.send()
        }, this.options.delay)()
    }
    ,
    Ml.prototype.addEventListener = function() {
        function e() {
            t.send(),
            t.resourceTimingSended = !0
        }
        var t = this;
        ml ? N.on("RESOURCE_TIMING_SENDED", e) : po(e),
        go(function() {
            t.resourceTimingSended && Se(function() {
                t.sendBeforeLeave()
            })
        })
    }
    ,
    Ml.prototype.sendBeforeLeave = function() {
        this.records.length && (this.options.send.sendBeforeLeave({
            records: this.records.slice()
        }),
        this.records.length = 0)
    }
    ,
    Ml.prototype.send = function() {
        this.records.length && (this.options.send.send({
            records: this.records.slice()
        }).catch(function() {}),
        this.records.length = 0)
    }
    ,
    Ml);
    function Ml(e) {
        var t = jl.call(this) || this;
        return t.records = [],
        t.resourceTimingSended = !1,
        t.options = c({}, Dl, e),
        t.addEventListener(),
        t
    }
    e(ql, Bl = _);
    var Bl, Re = ql;
    function ql() {
        return Bl.call(this, {
            report: new Rl({
                send: new Ws({
                    url: "https://logtake." + (zt() < 3 ? Ht[1] + "." : "") + "weidian.com/h5collector/webcollect/4.0/performance"
                })
            }),
            Record: Ll
        }) || this
    }
    function Ul(e) {
        return {
            queueing: ll((e.connectEnd === e.connectStart ? e.requestStart : e.domainLookupStart) - e.fetchStart),
            redirect: ll(e.redirectEnd - e.redirectEnd),
            httpCache: ll(e.domainLookupStart - e.fetchStart),
            dns: ll(e.domainLookupEnd - e.domainLookupStart),
            tcp: ll(e.secureConnectionStart - e.connectStart),
            ssl: ll(e.connectEnd - e.secureConnectionStart),
            request: ll(e.responseStart - e.requestStart),
            response: ll(e.responseEnd - e.responseStart)
        }
    }
    function Hl(e) {
        var t, n, e = nl(e);
        if (e)
            return n = (t = e).name,
            t.name = sl(n) ? n : Ur(n),
            c(t, Ul(t)),
            {
                subtype: "resource_timing",
                detail: e
            }
    }
    function Fl() {
        var n = this;
        Xe && N.on("FIRST_SCREEN_PAINT_HAS_COMPLETED", function(e) {
            var t;
            t = e.startTime,
            performance.getEntriesByType("resource").filter(function(e) {
                return e.responseEnd <= t
            }).forEach(function(e) {
                e = Hl(e);
                e && n.send(e)
            }),
            N.emit("RESOURCE_TIMING_SENDED")
        })
    }
    var zl = {
        connectEnd: 1,
        connectStart: 1,
        domComplete: 1,
        domContentLoadedEventEnd: 1,
        domContentLoadedEventStart: 1,
        domInteractive: 1,
        domLoading: 1,
        domainLookupEnd: 1,
        domainLookupStart: 1,
        fetchStart: 1,
        loadEventEnd: 1,
        loadEventStart: 1,
        requestStart: 1,
        responseEnd: 1,
        responseStart: 1,
        unloadEventEnd: 1,
        unloadEventStart: 1
    }
      , Wl = {
        0: "navigate",
        1: "reload",
        2: "back_forward",
        255: "prerender"
    };
    function Jl() {
        if (s(m.performance.getEntriesByType)) {
            var e = m.performance.getEntriesByType("navigation");
            if (e.length)
                return nl(e[0])
        }
        if (!v(m.performance.timing) && !v(m.performance.navigation)) {
            var t, n = nl(m.performance.timing);
            if (n)
                return l(n, function(e, t) {
                    zl[t] && (n[t] = e - n.navigationStart)
                }),
                t = (e = m.performance.navigation).redirectCount,
                e = e.type,
                delete (n = c({
                    redirectCount: t,
                    type: Wl[e],
                    startTime: 0,
                    duration: n.loadEventEnd,
                    entryType: "navigation",
                    initiatorType: "navigation",
                    name: S()
                }, n)).domLoading,
                delete n.navigationStart,
                n
        }
    }
    function Gl() {
        var e, t = Jl();
        if (t)
            return c(t, Ul(t), {
                unloadEvent: ll((e = t).unloadEventEnd - e.unloadEventStart),
                domContentLoaded: ll(e.domContentLoadedEventStart - e.responseEnd),
                domContentLoadedEvent: ll(e.domContentLoadedEventEnd - e.domContentLoadedEventStart),
                process: ll(e.domComplete - e.responseEnd),
                loadEvent: ll(e.loadEventEnd - e.loadEventStart)
            }),
            e = c({
                timingType: t.type,
                visit: El
            }, t),
            delete e.type,
            {
                subtype: "navigation_timing",
                detail: e
            }
    }
    function Vl() {
        var t = this;
        po(function() {
            setTimeout(function() {
                var e = Gl();
                e && t.send(e)
            })
        })
    }
    function Ql() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    }
    function Kl() {
        ad(function(e) {
            e = e.timeStamp;
            ud = e
        }, !0)
    }
    function Xl(t, e) {
        function n(e) {
            -1 < dd && t(e)
        }
        function r(e) {
            var t, n;
            e.hadRecentInput || (t = s[0],
            n = s[s.length - 1],
            a && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (a += e.value,
            s.push(e)) : (a = e.value,
            s = [e]),
            a > i.value && (i.value = a,
            i.entries = s,
            o()))
        }
        ld || (fd(function(e) {
            dd = e.value
        }),
        ld = !0);
        var o, i = od("CLS", 0), a = 0, s = [], c = id("layout-shift", r);
        c && (o = cd(n, i, e),
        ad(function() {
            c.takeRecords().map(r),
            o(!0)
        }),
        sd(function() {
            dd = -1,
            i = od("CLS", a = 0),
            o = cd(n, i, e)
        }))
    }
    function Yl(e, t) {
        ed || (ed = t,
        td = e,
        nd = new Date,
        yd(removeEventListener),
        vd())
    }
    function $l(e, t) {
        function n(e) {
            e.startTime < r.firstHiddenTime && (o.value = e.processingStart - e.startTime,
            o.entries.push(e),
            a(!0))
        }
        var r = pd()
          , o = od("FID")
          , i = id("first-input", n)
          , a = cd(e, o, t);
        i && ad(function() {
            i.takeRecords().map(n),
            i.disconnect()
        }, !0),
        i && sd(function() {
            o = od("FID"),
            a = cd(e, o, t),
            rd = [],
            td = -1,
            ed = null,
            yd(addEventListener),
            rd.push(n),
            vd()
        })
    }
    function Zl(t, n) {
        function e(e) {
            var t = e.startTime;
            t < i.firstHiddenTime && (a.value = t,
            a.entries.push(e),
            r())
        }
        var r, o, i = pd(), a = od("LCP"), s = id("largest-contentful-paint", e);
        s && (r = cd(t, a, n),
        o = function() {
            _d[a.id] || (s.takeRecords().map(e),
            s.disconnect(),
            _d[a.id] = !0,
            r(!0))
        }
        ,
        ["keydown", "click"].forEach(function(e) {
            addEventListener(e, o, {
                once: !0,
                capture: !0
            })
        }),
        ad(o, !0),
        sd(function(e) {
            a = od("LCP"),
            r = cd(t, a, n),
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    a.value = performance.now() - e.timeStamp,
                    _d[a.id] = !0,
                    r(!0)
                })
            })
        }))
    }
    var ed, td, nd, rd, od = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }, id = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming"in self))
                    return;
                var n = new PerformanceObserver(function(e) {
                    return e.getEntries().map(t)
                }
                );
                return n.observe({
                    type: e,
                    buffered: !0
                }),
                n
            }
        } catch (e) {}
    }, ad = function(t, n) {
        function r(e) {
            "pagehide" !== e.type && "hidden" !== document.visibilityState || (t(e),
            n && (removeEventListener("visibilitychange", r, !0),
            removeEventListener("pagehide", r, !0)))
        }
        addEventListener("visibilitychange", r, !0),
        addEventListener("pagehide", r, !0)
    }, sd = function(t) {
        addEventListener("pageshow", function(e) {
            e.persisted && t(e)
        }, !0)
    }, cd = function(t, n, r) {
        var o;
        return function(e) {
            0 <= n.value && (e || r) && (n.delta = n.value - (o || 0),
            !n.delta && void 0 !== o || (o = n.value,
            t(n)))
        }
    }, ud = -1, pd = function() {
        return ud < 0 && (ud = Ql(),
        Kl(),
        sd(function() {
            setTimeout(function() {
                ud = Ql(),
                Kl()
            }, 0)
        })),
        {
            get firstHiddenTime() {
                return ud
            }
        }
    }, fd = function(t, n) {
        function e(e) {
            "first-contentful-paint" === e.name && (s && s.disconnect(),
            e.startTime < o.firstHiddenTime && (i.value = e.startTime,
            i.entries.push(e),
            r(!0)))
        }
        var r, o = pd(), i = od("FCP"), a = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], s = a ? null : id("paint", e);
        (a || s) && (r = cd(t, i, n),
        a && e(a),
        sd(function(e) {
            i = od("FCP"),
            r = cd(t, i, n),
            requestAnimationFrame(function() {
                requestAnimationFrame(function() {
                    i.value = performance.now() - e.timeStamp,
                    r(!0)
                })
            })
        }))
    }, ld = !1, dd = -1, hd = {
        passive: !0,
        capture: !0
    }, md = new Date, vd = function() {
        var t;
        0 <= td && td < nd - md && (t = {
            entryType: "first-input",
            name: ed.type,
            target: ed.target,
            cancelable: ed.cancelable,
            startTime: ed.timeStamp,
            processingStart: ed.timeStamp + td
        },
        rd.forEach(function(e) {
            e(t)
        }),
        rd = [])
    }, gd = function(e) {
        var t, n, r, o;
        function i() {
            Yl(n, r),
            o()
        }
        function a() {
            o()
        }
        e.cancelable && (t = (1e12 < e.timeStamp ? new Date : performance.now()) - e.timeStamp,
        "pointerdown" == e.type ? (n = t,
        r = e,
        o = function() {
            removeEventListener("pointerup", i, hd),
            removeEventListener("pointercancel", a, hd)
        }
        ,
        addEventListener("pointerup", i, hd),
        addEventListener("pointercancel", a, hd)) : Yl(t, e))
    }, yd = function(t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
            return t(e, gd, hd)
        })
    }, _d = {};
    function wd() {
        return new Promise(function(t) {
            fd(function(e) {
                H(e.value) && (t((e = rl(e = e.value),
                {
                    entryType: Pl,
                    name: "first-visible-paint",
                    startTime: e,
                    value: e,
                    visit: El
                })),
                N.emit("FIRST_VISIBLE_PAINT_COMPLETED"))
            })
        }
        )
    }
    function bd(e, t) {
        return e.startTime > t - 300 && e.startTime < t + 500 && (v(e.decodedBodySize) || 1e3 < e.decodedBodySize) && e.duration < 1300 && 0 < e.duration && (("css" === (e = (t = e).initiatorType) || "img" === e) && sl(t.name))
    }
    function Ed(i) {
        return new Promise(function(o) {
            setTimeout(function() {
                var t, e, n, r;
                o((t = i,
                e = m.performance.getEntriesByType("resource"),
                r = n = 0,
                e.some(function(e) {
                    bd(e, t) && (r++,
                    n += e.duration)
                }),
                r && n / r))
            }, 1200)
        }
        )
    }
    var Sd = []
      , kd = [];
    function Td(e) {
        return 1 === e.nodeType && -1 === ["style", "title", "body", "link", "script", "head", "meta"].indexOf(e.tagName.toLowerCase())
    }
    function Od(e) {
        var t = il(y.body)
          , n = kd.length
          , n = kd[n - 1] && t - kd[n - 1].score || 0;
        return 10 < n && (kd.push({
            records: e,
            score: t,
            time: E(),
            diff: n
        }),
        1)
    }
    function Ad(e) {
        var t, n = function(e) {
            for (var t, n = Sd && Sd.length, r = 0; r < n; r++)
                Sd[r].el === e && (t = Sd[r]);
            return t
        }(e);
        return v(n) ? (t = function(e) {
            if (0 === (e = e.getBoundingClientRect()).width && 0 === e.height)
                return !1;
            var t = e.top + 5
              , n = e.bottom - 5
              , r = e.left + 5
              , e = e.right - 5;
            return (0 <= r && r <= ul || 0 <= e && e <= ul || r <= 0 && ul <= e) && (0 <= t && t <= pl || 0 <= n && n <= pl || t <= 0 && pl <= n)
        }(e),
        Sd.push({
            el: e,
            flag: t
        })) : t = n.flag,
        t
    }
    function Pd() {
        for (var e = kd.length - 1; 0 < e; e--)
            if (10 < kd[e].diff && function(e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                      , r = (n.addedNodes || []).length
                      , o = n.target;
                    if (r && 1 === o.nodeType && (!Td(o) || Ad(o)))
                        for (var i = 0; i < r; i++) {
                            var a = n.addedNodes[i];
                            if (Td(a) && !(il(a) < 5)) {
                                a = Ad(a);
                                if (a)
                                    return a
                            }
                        }
                }
            }(kd[e].records))
                return kd[e].time
    }
    function Id(c) {
        lo(function() {
            function t() {
                var t, e;
                a.disconnect(),
                clearTimeout(s),
                t = function(e) {
                    c(e),
                    Sd.length = 0,
                    kd.length = 0
                }
                ,
                (e = Pd()) ? t(e) : po(function() {
                    setTimeout(function() {
                        var e = Jl();
                        e && (kd[0] && 100 < kd[0].score ? t(e.domContentLoadedEventEnd) : t(e.duration))
                    })
                })
            }
            n = t,
            void 0 === (r = 1300) && (r = 200);
            var n, r, o, i = function() {
                var e = this
                  , t = arguments;
                return clearTimeout(o),
                o = setTimeout(function() {
                    n.apply(e, p(t))
                }, r)
            }, a = ol(y.body, function(e) {
                Od(e) && (s = i()),
                40 < kd.length && t()
            }), s = i()
        })
    }
    function xd(o) {
        return new Promise(function(r) {
            setTimeout(function() {
                var t, e, n;
                r((t = o,
                e = m.performance.getEntriesByType("resource"),
                n = 0,
                e.some(function(e) {
                    e.startTime < t + 1e3 && n++
                }),
                t + 4 * n))
            }, 1200)
        }
        )
    }
    function Cd() {
        return new Promise(function(n) {
            ml && new Promise(function(t) {
                var n = ol(y, function(e) {
                    y.body && (n.disconnect(),
                    Od(e),
                    Id(t))
                })
            }
            ).then(function(e) {
                xd(e).then(function(t) {
                    Ed(t).then(function(e) {
                        n((e = rl(e = t + e),
                        {
                            entryType: Pl,
                            name: "first-screen-paint",
                            startTime: e,
                            value: e,
                            visit: El
                        }))
                    })
                })
            })
        }
        )
    }
    function Ld() {
        return new Promise(function(n) {
            Xl(function(e) {
                var t;
                H(e.value) && (t = !a(e.entries) || null == (t = e.entries[0]) ? void 0 : t.startTime,
                n((e = e.value,
                t = null != t ? t : E(),
                {
                    entryType: Pl,
                    name: "cumulative-layout-shift",
                    startTime: rl(t),
                    value: e,
                    visit: El
                })))
            })
        }
        )
    }
    function Nd() {
        return new Promise(function(t) {
            Zl(function(e) {
                H(e.value) && t((e = rl(e = e.value),
                {
                    entryType: Pl,
                    name: "largest-contentful-paint",
                    startTime: e,
                    value: e,
                    visit: El
                }))
            })
        }
        )
    }
    function jd() {
        return new Promise(function(t) {
            var n;
            hl && (n = function(e, t) {
                void 0 === t && (t = {
                    entryTypes: ["paint"]
                }),
                e = new PerformanceObserver(e);
                try {
                    e.observe(t)
                } catch (e) {}
                return e
            }(function() {
                var e = function() {
                    var e = m.performance.getEntriesByName("first-paint");
                    if (e.length)
                        return (e = nl(e[0])).visit = El,
                        e
                }();
                e && (n.disconnect(),
                t(e))
            }))
        }
        )
    }
    function Dd() {
        function t(e) {
            e && n.send({
                subtype: "paint_timing",
                detail: e
            })
        }
        var n = this;
        wd().then(t),
        jd().then(t),
        Cd().then(function(e) {
            t(e),
            N.emit("FIRST_SCREEN_PAINT_HAS_COMPLETED", e)
        }),
        Ld().then(t),
        Nd().then(t)
    }
    var Rd = "keydown";
    function Md(e) {
        return Math.abs(e)
    }
    function Bd(n) {
        function e(e) {
            var t;
            (0 < Md((t = e).deltaY) || 0 < Md(t.deltaX) || 0 < Md(t.deltaZ)) && n(e)
        }
        return m.addEventListener("wheel", e, !0),
        function() {
            m.removeEventListener("wheel", e, !0)
        }
    }
    var qd = vl ? "touchstart" : "mousedown"
      , Ud = vl ? "touchend" : "mouseup";
    function Hd(e) {
        var t;
        return vl ? (t = e.touches && e.touches.length ? e.touches[0] : e.changedTouches ? e.changedTouches[0] : void 0) ? {
            x: t.clientX,
            y: t.clientY
        } : void 0 : {
            x: e.clientX,
            y: e.clientY
        }
    }
    function Fd(r) {
        function t() {
            y.removeEventListener(qd, e, !0),
            y.removeEventListener(Ud, n, !0)
        }
        var o, e = function(e) {
            v(o = Hd(e)) && t()
        }, n = function(e) {
            var t, n = Hd(e);
            n = n,
            (t = o) && n && (5 < Math.abs(n.x - t.x) || 5 < Math.abs(n.y - t.y)) && r(e),
            o = void 0
        };
        return y.addEventListener(qd, e, !0),
        y.addEventListener(Ud, n, !0),
        t
    }
    function zd(e) {
        t = e,
        y.addEventListener("click", t, !0);
        var t, n, r = function() {
            y.removeEventListener("click", t, !0)
        }, o = (n = e,
        y.addEventListener(Rd, n, !0),
        function() {
            y.removeEventListener(Rd, n, !0)
        }
        ), i = Bd(e), a = Fd(e);
        return function() {
            r(),
            o(),
            i(),
            a()
        }
    }
    function Wd() {
        return new Promise(function(t) {
            var n = zd(function(e) {
                n(),
                v(e = function(e) {
                    var e = e.eventType
                      , t = E();
                    if (!(20 < t))
                        return {
                            entryType: Il,
                            eventType: e,
                            name: "first-meaningful-interaction",
                            startTime: t,
                            value: t,
                            visit: El
                        }
                }({
                    eventType: e.type
                })) || t(e)
            })
        }
        )
    }
    function Jd() {
        return new Promise(function(n) {
            $l(function(e) {
                var t;
                H(e.value) && (t = !a(e.entries) || null == (t = e.entries[0]) ? void 0 : t.startTime,
                n((e = e.value,
                t = null != t ? t : E(),
                {
                    entryType: Il,
                    name: "first-input-delay",
                    startTime: rl(t),
                    value: rl(e),
                    visit: El
                })))
            })
        }
        )
    }
    var Gd = {
        spma: void 0,
        spmb: void 0
    };
    function Vd(e, t) {
        Gd.spma = e,
        Gd.spmb = t
    }
    function Qd(n) {
        lo(function() {
            var e = Ss()
              , t = ks();
            e && t && (Vd(e, t),
            n(),
            N.emit("PAGE_ENTER", {
                type: "PAGE_ENTER",
                startTime: E(),
                spma: e,
                spmb: t,
                reason: "PAGE_LOAD"
            }))
        })
    }
    var Kd = vl ? "touchmove" : "mousemove"
      , Xd = "keydown";
    function Yd() {
        fo(function() {
            t = "hidden" === y.visibilityState ? void N.emit("PAGE_HIDE", {
                type: "PAGE_HIDE",
                startTime: E(),
                reason: "VISIBILITY_CHANGE"
            }) : E()
        });
        var e, t = E();
        e = function() {
            var e = E();
            !v(t) && 18e4 <= e - t && (N.emit("PAGE_HIDE", {
                type: "PAGE_HIDE",
                startTime: t,
                reason: "OPERATION"
            }),
            N.emit("PAGE_SHOW", {
                type: "PAGE_SHOW",
                startTime: e,
                reason: "OPERATION"
            })),
            t = e
        }
        ,
        y.addEventListener(Kd, e, !0),
        y.addEventListener(Xd, e, !0)
    }
    function $d(t) {
        var n, r;
        N.on("PAGE_ENTER", function(e) {
            e.spma && e.spmb && (n = {
                startTime: (r = e).startTime,
                duration: 0,
                spma: e.spma,
                spmb: e.spmb
            })
        }),
        N.on("PAGE_LEAVE", function(e) {
            n && r && t(B(B({}, n), {
                duration: n.duration + e.startTime - r.startTime
            })),
            n = r = void 0
        }),
        N.on("PAGE_SHOW", function(e) {
            r = e
        }),
        N.on("PAGE_HIDE", function(e) {
            n && r && (n.duration += e.startTime - r.startTime,
            r = e)
        }),
        Qd(function() {
            Yd(),
            go(function() {
                N.emit("PAGE_LEAVE", {
                    type: "PAGE_LEAVE",
                    startTime: E()
                })
            }),
            Qo(function() {
                Se(function() {
                    var e, t = Ss(), n = ks();
                    t && n && (t !== Gd.spma || n !== Gd.spmb) && (e = E(),
                    N.emit("PAGE_LEAVE", {
                        type: "PAGE_LEAVE",
                        startTime: e,
                        reason: "SPMAB_CHANGE"
                    }),
                    N.emit("PAGE_ENTER", {
                        type: "PAGE_ENTER",
                        spma: t,
                        spmb: n,
                        startTime: e,
                        reason: "SPMAB_CHANGE"
                    }),
                    Vd(t, n))
                })
            }),
            fo(function() {
                "visible" === y.visibilityState && N.emit("PAGE_SHOW", {
                    type: "PAGE_SHOW",
                    startTime: E(),
                    reason: "VISIBILITY_CHANGE"
                })
            })
        })
    }
    function Zd(t) {
        $d(function(e) {
            t({
                entryType: Il,
                name: "time-on-page",
                startTime: e.startTime,
                value: e.duration,
                visit: El
            }, e)
        })
    }
    function eh(e) {
        return {
            subtype: "interaction_timing",
            detail: e
        }
    }
    function th() {
        function e(e) {
            e && n.send(eh(e))
        }
        var n = this;
        new Promise(function(e) {
            N.on("FIRST_VISIBLE_PAINT_COMPLETED", function() {
                lo(function() {
                    Wd().then(e)
                })
            })
        }
        ).then(e),
        Jd().then(e),
        Zd(function(e, t) {
            n.send(eh(e), {
                spma: t.spma,
                spmb: t.spmb
            })
        })
    }
    function nh() {
        var t = this;
        h.on("reportPerformanceTiming", function(e) {
            e = function(e) {
                var t, n = null != (n = e.value) ? n : e.duration;
                if (G(e) && !v(e.name) && H(n))
                    return delete (t = c({}, e)).name,
                    delete t.value,
                    delete t.startTime,
                    delete t.duration,
                    {
                        subtype: "custom_timing",
                        detail: {
                            entryType: xl,
                            name: e.name,
                            value: n,
                            startTime: e.startTime || Date.now(),
                            duration: n,
                            visit: El,
                            detail: t
                        }
                    };
                Gt("The field of name,value is required.")
            }(e);
            e && t.send(e)
        })
    }
    var rh, oh = "#ui-share-box", ih = "share_relation", ah = {
        WECHAT: "wxh5",
        WECHAT_MOMENT: "wxph5",
        QQ: "qfriendh5",
        QZONE: "qzoneh5"
    }, sh = "wx", ch = "vbuyer", uh = "kdweidian", ph = (e(fh, rh = Bt),
    fh.prototype.toJSON = function() {
        return c({}, this.option, {
            message: this.message,
            name: this.name,
            stack: (this.originalError || this).stack,
            originalError: this.originalError,
            sample: this.sample
        })
    }
    ,
    fh);
    function fh(e) {
        var t = this
          , n = e.originalError
          , r = n && n.message
          , o = n && n.name;
        return (t = rh.call(this, {
            message: e.message || r || "",
            name: ["[Pathtracker Error]", e.name || o].join(" "),
            originalError: n,
            sample: e.sample
        }) || this).option = e,
        t
    }
    function lh(n) {
        var r;
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return r = r || n.apply(this, e)
        }
    }
    function dh(e) {
        e = e.split("_");
        return {
            share_id: e[0] || "",
            share_buyer_id: e[1] || "",
            share_level: e[2] || ""
        }
    }
    var hh = lh(function() {
        var e, t = Nt()[ih], t = t && dh(t), n = Ve("duid") || Ve("uid") || Ve("WD_b_id") || "", t = t ? (e = t.share_id,
        parseInt(t.share_level || "0", 10) + 1) : (e = jr(),
        1);
        return [e, n, t].join("_")
    });
    function mh(e, t) {
        var n = Nt().wfr;
        return n ? (a(n) && (n = n[n.length - 1]),
        Object.getOwnPropertyNames(ah).forEach(function(e) {
            n = n.replace("_" + ah[e], "")
        })) : n = "h5direct",
        Lt(e, {
            wfr: n += "_" + t
        })
    }
    function vh() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = 1
          , r = t[0]
          , o = t.length;
        if ("function" == typeof r)
            return r.apply(null, t.slice(1));
        if ("string" != typeof r)
            return r;
        for (var i = String(r).replace(/%[sdj%]/g, function(e) {
            if ("%%" === e)
                return "%";
            if (o <= n)
                return e;
            switch (e) {
            case "%s":
                return String(t[n++]);
            case "%d":
                return t[n++];
            case "%j":
                try {
                    return JSON.stringify(t[n++])
                } catch (e) {
                    return "[Circular]"
                }
                break;
            default:
                return e
            }
        }), a = t[n]; n < o; a = t[++n])
            i += " " + a;
        return i
    }
    function gh(e) {
        var t;
        return e = e,
        (t = document.createElement("a")).href = e,
        t.hostname === m.location.hostname
    }
    function yh(e, t) {
        var n = Object.create(null);
        n.param = e,
        n.result = t;
        try {
            var r = t.bridgeParam.status.status_code
              , o = t.param.result
              , i = t.param.code
              , a = t.param && t.param._errMsg && t.param._errMsg.code
              , s = t.param && t.param._errMsg;
            0 != r ? c(n, {
                error: !0,
                message: "jsbridge分享面板唤起失败",
                detail: s
            }) : 0 === Number(o) || 0 === Number(i) || Cr() && 0 === Number(a) ? c(n, {
                error: !1,
                message: "share_success",
                detail: s
            }) : -1 === Number(o) || -1 === Number(i) ? c(n, {
                error: !0,
                message: "用户取消分享",
                detail: s
            }) : c(n, {
                error: !0,
                message: "share_fail",
                detail: s
            })
        } catch (e) {
            c(n, {
                error: !0,
                message: e.message
            })
        }
        return n
    }
    function _h(e) {
        var t, n;
        Sh((t = m.devicePixelRatio,
        n = (n = (n = (n = document.querySelector('meta[name="viewport"]')) && n.getAttribute("content")) && n.match(/initial\-scale=([\d\.]+)/)) && parseInt(n[1], 10) || t,
        (t = "#ui-share-box") + "{display:none;}" + t + " a{text-decoration:none;}" + t + " .ui-share__placeholder{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10}" + t + ".ui-share__hidden{overflow:hidden}" + t + " .ui-share{width:100%;position:fixed;left:0;top:0;background:#ededed;overflow:hidden;z-index:999}" + t + " .ui-share--panel{background:#fff;font-size:0;text-align:center}" + t + " .ui-share--closed{background:#fff;font-size: " + 20 * n + "px;text-align:center;padding: " + 12 * n + "px 0;color:#ee3431;display:block;margin-top:12.8px}" + t + " .ui-share--tips{margin:0;background:#fff;font-size:25.6px;color:#bbb;text-align:center;padding:9.6px 0}" + t + " .ui-share-copy{padding:" + 12 * n + "px;overflow:hidden;text-align:left}" + t + " .ui-share-copy>input{font-size: " + 16 * n + "px;padding: " + 5 * n + "px;width:90%;border:1px solid #ccc}" + t + " .ui-share-copy>p{font-size: " + 16 * n + "px;color:#222;margin:0 0 16px}")),
        Eh().innerHTML = '<a href="javascript:;" class="ui-share__placeholder J_closed"></a><section class="ui-share"><div class="ui-share--panel"><div class="ui-share-copy"><p>长按复制下方链接，去粘贴给好友吧</p><input class="copy-href" type="text" value="' + e + '"></div></div><a href="javascript:;" class="ui-share--closed J_closed">取消</a></section>',
        wh()
    }
    function wh() {
        for (var e = Array.from(document.querySelectorAll(".J_closed")), t = document.querySelector(oh), n = 0; n < e.length; n++)
            e[n].addEventListener("click", function() {
                t.style.display = "none"
            })
    }
    function bh() {
        var e = document.querySelector(oh);
        e && (e.style.display = "block")
    }
    var Eh = lh(function() {
        var e = document.createElement("div")
          , t = oh.replace(/^[\.|#]/, "");
        return e.id = t,
        e.dataset.spider = "share",
        e.style.display = "none",
        document.body.appendChild(e),
        e
    })
      , Sh = lh(function(e) {
        var t = document.createElement("style");
        return t.innerHTML = e,
        document.head.appendChild(t),
        t
    })
      , kh = {
        string: F,
        number: H,
        method: s,
        array: a,
        object: g,
        boolean: J,
        url: function(e) {
            var t = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i");
            return F(e) && !!e.match(t)
        }
    }
      , Th = {
        string: "%s is not a %s",
        method: "%s is not a %s (function)",
        array: "%s is not an %s",
        object: "%s is not an %s",
        number: "%s is not a %s",
        boolean: "%s is not a %s",
        url: "%s is not a valid %s"
    };
    var Oh = {
        string: function(e) {
            return e
        },
        array: function(e) {
            return e.length
        },
        object: function(e) {
            return Object.getOwnPropertyNames(e).length
        }
    };
    var Ah = Object.freeze({
        __proto__: null,
        type: function(r, o, e) {
            return function(e) {
                var t = o.type && kh[o.type]
                  , n = o.type && Th[o.type];
                return !t || t(e) ? Promise.resolve(e) : Promise.reject(new Error(vh(n, r, o.type)))
            }
        },
        required: function(n, r, e) {
            return function(e) {
                var t = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
                return !r.required || !Oh[t] || Oh[t](e) ? Promise.resolve(e) : Promise.reject(new Error(vh("%s is required", n)))
            }
        },
        validator: function(e, t, n) {
            return function(e) {
                return t.validator ? t.validator.call(null, e, n) : Promise.resolve(e)
            }
        }
    })
      , Ph = {
        title: {
            required: !0,
            type: "string"
        },
        content: {
            required: !0,
            type: "string"
        },
        url: {
            required: !0,
            type: "url"
        },
        img: {
            required: !0,
            type: "url"
        },
        success: {
            type: "method"
        },
        error: {
            type: "method"
        },
        pyqTitle: {
            type: "string"
        },
        modalTipImage: {
            type: "url"
        },
        hideMenuItems: {
            type: "array"
        },
        imgUrls: {
            type: "array"
        },
        miniPath: {
            type: "string"
        },
        miniId: {
            type: "string"
        },
        header: {
            type: "object"
        },
        text: {
            type: "string"
        },
        panelStyle: {
            type: "number"
        },
        posterUrl: {
            type: "string"
        },
        postList: {
            type: "array"
        },
        panel: {
            type: "array",
            validator: function(e, t) {
                if (!a(e))
                    return Promise.reject(new Error("panel field must be array"));
                if (e.some(function(e) {
                    return [1, 2, 3, 4, 104].indexOf(e) < 0
                }))
                    return Promise.reject(new Error("invalid panel item!"));
                if (-1 < e.indexOf(2) && !t.posterUrl && !t.postList)
                    return Promise.reject(new Error("panel field pass 2 value must contain posterUrl or postList field"));
                if (-1 < e.indexOf(3) && !t.text)
                    return Promise.reject(new Error("panel field pass 3 value must contain text field"));
                if (-1 < e.indexOf(4) && -1 === e.indexOf(1) && -1 === e.indexOf(3))
                    return Promise.reject(new Error("password panel depends on link panel or text panel"));
                if (-1 < e.indexOf(104)) {
                    if (-1 === e.indexOf(1))
                        return Promise.reject(new Error("qrcode panel depends on link panel"));
                    if (!t.postList || !t.postList.some(function(e) {
                        return 9 === e.postType
                    }))
                        return Promise.reject(new Error("panel field pass 104 value must contain postList with postType equal to 9"))
                }
                return Promise.resolve(e)
            }
        },
        vbuyerShare: {
            type: "boolean"
        },
        vsellerShare: {
            type: "boolean"
        },
        scene: {
            type: "array",
            validator: function(e, t) {
                return a(e) ? (-1 < e.indexOf(201) || -1 < e.indexOf(202)) && !t.posterUrl ? Promise.reject(new Error("scene field pass 201 or 202 value must contain posterUrl field")) : !(-1 < e.indexOf(18) || -1 < e.indexOf(19)) || t.extensionInfo && t.extensionInfo.passPhase ? Promise.resolve(e) : Promise.reject(new Error("extentionInfo.passPhase field must not be undefined if scene pass 18 or 19")) : Promise.reject(new Error("scene field must be array"))
            }
        },
        copyUrl: {
            type: "string"
        },
        momentMode: {
            type: "number"
        }
    };
    function Ih(i) {
        var r, o, e = Object.getOwnPropertyNames(Ph), a = (r = i,
        o = {},
        Object.getOwnPropertyNames(Ph).forEach(function(t) {
            var n = Ph[t]
              , e = Object.getOwnPropertyNames(n).map(function(e) {
                return Ah[e](t, n, r)
            });
            o[t] = e
        }),
        o), e = e.filter(function(e) {
            return Ph[e].required || !!i[e]
        }).map(function(e) {
            for (var t = a[e], e = i[e], n = (v(e) && (e = ""),
            t), t = e, r = (0,
            n[0])(t), o = 1; o < n.length; o++)
                r = r.then(n[o]);
            return r
        });
        return Promise.all(e)
    }
    function xh() {
        this.loadSdk()
    }
    var Ch, Lh = new r, Nh = (e(jh, Ch = xh),
    jh.prototype.loadSdk = function(e) {
        this.sdkPromise && this.sdkPromise.catch(function() {}),
        this.sdkPromise = io(e)
    }
    ,
    jh.prototype.option = function(n) {
        var r = this;
        return this.sdkPromise.then(function() {
            var e, t = m.jWeixin || m.wx;
            t && t.onMenuShareAppMessage(r.getWxConfig(n, ah.WECHAT)),
            t && t.onMenuShareTimeline(r.getWxConfig(n, ah.WECHAT_MOMENT)),
            t && t.onMenuShareQQ(r.getWxConfig(n, ah.QQ)),
            t && t.onMenuShareQZone(r.getWxConfig(n, ah.QZONE));
            try {
                Lr() && t && t.miniProgram.postMessage({
                    data: {
                        type: "share",
                        payload: {
                            title: n.title,
                            imageUrl: n.img,
                            path: mh(n.url, ah.WECHAT)
                        }
                    }
                })
            } catch (e) {}
            n.hideMenuItems && n.hideMenuItems.length && t && t.hideMenuItems({
                menuList: r.getMenuItems(n.hideMenuItems)
            });
            t = n.modalShareTipImage;
            Sh((e = "#ui-share-box") + "{display:none;}" + e + " a{text-decoration:none;}" + e + " .ui-share__placeholder{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10}.ui-share__hidden{overflow:hidden}" + e + " .ui-share--weixin{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10}" + e + " .ui-share--weixin > img{width:100%}"),
            Eh().innerHTML = '<a href="javascript:;" class="ui-share__placeholder J_closed"></a><a href="javascript:;" class="ui-share--weixin J_closed"><img src="' + (t || "https://si.geilicdn.com/110c5d9454010c64fc4366d75230a729.png") + '"></a>',
            wh()
        })
    }
    ,
    jh.prototype.evoke = function() {
        this.sdkPromise.then(bh)
    }
    ,
    jh.prototype.getWxConfig = function(t, n) {
        t.url = mh(t.url, n),
        Gt("option", JSON.stringify(t));
        var e = {
            title: t.title.slice(0, 45),
            desc: t.content.slice(0, 60),
            link: t.url,
            imgUrl: t.img,
            trigger: function() {
                m.spider && m.spider.trackAction({
                    actionName: "_share",
                    actionArgs: {
                        app: sh,
                        channel: n,
                        shareUrl: t.url
                    }
                })
            },
            success: function() {
                var e = {
                    error: !1,
                    channel: n,
                    message: "share_success"
                };
                m.spider && m.spider.trackAction({
                    actionName: "shareSuccess",
                    actionArgs: {
                        app: sh,
                        channel: n,
                        shareUrl: t.url
                    }
                }),
                s(t.success) && t.success(e)
            },
            fail: function(e) {
                e = {
                    error: !0,
                    channel: n,
                    message: d(e),
                    param: t
                };
                m.spider && m.spider.trackAction({
                    actionName: "shareFail",
                    actionArgs: {
                        app: sh,
                        channel: n,
                        shareUrl: t.url,
                        reason: e.message
                    }
                }),
                s(t.error) && t.error(e)
            }
        };
        return n === ah.WECHAT_MOMENT && (delete e.desc,
        e.title = t.pyqTitle || t.title),
        e
    }
    ,
    jh.prototype.getMenuItems = function(e) {
        var t = []
          , e = function(e, t, n) {
            if (n || 2 === arguments.length)
                for (var r, o = 0, i = t.length; o < i; o++)
                    !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
            return e.concat(r || Array.prototype.slice.call(t))
        }([], e)
          , n = e.indexOf("share")
          , n = (-1 < n && (t = t.concat(["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone"]),
        e.splice(n, 1)),
        e.indexOf("protect"));
        return -1 < n && (t = t.concat(["menuItem:editTag", "menuItem:delete", "menuItem:copyUrl", "menuItem:originPage", "menuItem:readMode", "menuItem:openWithQQBrowser", "menuItem:openWithSafari", "menuItem:share:email"]),
        e.splice(n, 1)),
        t.push.apply(t, e),
        t = Wr(t)
    }
    ,
    jh);
    function jh() {
        return Ch.call(this) || this
    }
    var Dh = {
        1: "weChat",
        2: "weChatMoment",
        3: "qq",
        4: "qzone",
        5: "weibo",
        6: "copy",
        15: "imGroup",
        99: "saveImage",
        201: "weChatImage",
        202: "weChatMomentImage",
        203: "weChatMiniProgram"
    };
    e(Bh, Rh = xh),
    Bh.prototype.loadSdk = function() {
        this.sdkPromise = ao(!0)
    }
    ,
    Bh.prototype.option = function(t) {
        var n = this;
        return this.sdkPromise.then(function() {
            n.config = c(!0, {}, t),
            Gt("option", JSON.stringify(n.config)),
            n.config.vsellerShare && m.KDJSBridge2.call("WDJSBridge", "share", {
                title: n.config.title,
                content: n.config.content,
                content_ext: n.config.pyqTitle,
                url: n.config.img,
                cmd: n.config.url,
                mini_path: n.config.miniPath,
                mini_id: n.config.miniId,
                mini_withShareTicket: "1",
                mini_programType: 0,
                img_urls: n.config.imgUrls,
                moments_mode: n.config.momentMode,
                scene: n.config.scene,
                action_immediately: 0,
                copy_url: n.config.copyUrl
            }, function(e) {
                m.spider && m.spider.trackAction({
                    actionName: "_share",
                    actionArgs: {
                        app: uh,
                        shareUrl: t.url
                    }
                });
                e = yh(n.config, e);
                e.error ? (t.error && t.error(e),
                m.spider && m.spider.trackAction({
                    actionName: "shareFail",
                    actionArgs: {
                        app: uh,
                        shareUrl: t.url,
                        reason: e.message
                    }
                })) : (t.success && t.success(e),
                m.spider && m.spider.trackAction({
                    actionName: "shareSuccess",
                    actionArgs: {
                        app: uh,
                        shareUrl: t.url
                    }
                }))
            })
        })
    }
    ,
    Bh.prototype.evoke = function() {
        var t = this
          , n = this.config;
        this.sdkPromise.then(function() {
            var e = t.getShareItemsBy(n);
            Gt("evoke", JSON.stringify(e)),
            m.KDJSBridge2 && m.KDJSBridge2.call("service", "SharePopupViewService", {
                shares: [{
                    items: e
                }]
            }, function(e) {
                m.spider && m.spider.trackAction({
                    actionName: "_share",
                    actionArgs: {
                        app: uh,
                        shareUrl: n.url
                    }
                });
                e = yh(n, e);
                e.error ? n.error && n.error(e) : n.success && n.success(e)
            })
        })
    }
    ,
    Bh.prototype.getShareItemsBy = function(e) {
        var t = {
            weChat: {
                scene: 1,
                title: "微信好友",
                iconName: "1",
                shareParams: {
                    type: "weChat",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            weChatMoment: {
                scene: 2,
                title: "微信朋友圈",
                iconName: "3",
                shareParams: {
                    type: "weChatMoment",
                    title: e.pyqTitle,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            qq: {
                scene: 3,
                title: "QQ好友",
                iconName: "5",
                shareParams: {
                    type: "qq",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            qzone: {
                scene: 4,
                title: "QQ空间",
                iconName: "6",
                shareParams: {
                    type: "qzone",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            weibo: {
                scene: 5,
                title: "微博",
                iconName: "7",
                shareParams: {
                    type: "weibo",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            copy: {
                scene: 6,
                title: "复制链接",
                iconName: "15",
                shareParams: {
                    type: "copy",
                    title: e.title,
                    des: e.content,
                    url: e.url
                }
            },
            imGroup: {
                scene: 15,
                title: "微店群聊",
                iconName: "9",
                shareParams: {
                    type: "imGroup",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img
                }
            },
            saveImage: {
                scene: 99,
                title: "保存图片",
                iconName: "12",
                shareParams: {
                    type: "saveImage",
                    imageUrl: e.posterUrl
                }
            },
            weChatImage: {
                scene: 201,
                title: "微信好友图片",
                iconName: "2",
                shareParams: {
                    type: "weChatImage",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.posterUrl
                }
            },
            weChatMomentImage: {
                scene: 202,
                title: "微信朋友圈图片",
                iconName: "4",
                shareParams: {
                    type: "weChatMomentImage",
                    imageUrl: e.posterUrl
                }
            },
            weChatMiniProgram: {
                scene: 203,
                title: "微信小程序",
                iconName: "1",
                shareParams: {
                    type: "weChatMiniProgram",
                    title: e.title,
                    des: e.content,
                    url: e.url,
                    imageUrl: e.img,
                    id: e.miniId,
                    environment: 0,
                    path: e.miniPath,
                    shareTicket: "yes"
                }
            }
        };
        return e.scene.map(function(e) {
            return t[Dh[e]]
        })
    }
    ;
    var Rh, Mh = Bh;
    function Bh() {
        return Rh.call(this) || this
    }
    function qh(o, i) {
        s = (n = o).scene;
        var t, e, n = [{
            panelType: 1,
            desc: "链接分享",
            content: {
                url: n.url,
                title: n.title,
                content: n.content,
                imageUrl: n.img,
                scene: s.join("_"),
                path: n.miniPath || "",
                userName: n.miniId || "",
                miniProgramType: n.miniProgramType || "",
                videoUrl: ""
            }
        }, {
            panelType: 2,
            desc: "海报分享",
            content: {
                postList: [{
                    postType: 0,
                    desc: "纯图片海报",
                    content: {
                        img: n.posterUrl
                    }
                }],
                scene: s.join("_"),
                url: n.url
            }
        }, {
            panelType: 3,
            desc: "文本分享",
            content: {
                text: n.text,
                scene: s.join("_")
            }
        }, {
            panelType: 4,
            desc: "口令分享",
            content: {
                scene: s.join("_")
            }
        }, {
            panelType: 104,
            desc: "二维码分享",
            content: {
                postList: [{
                    postType: 9,
                    desc: "群二维码",
                    content: {
                        groupImgUrl: "",
                        userName: "",
                        userLogo: "",
                        userDescription: ""
                    }
                }],
                scene: s.join("_")
            }
        }], r = o.panel, a = o.scene, s = n.filter(function(e) {
            return -1 < r.indexOf(e.panelType)
        }), c = s.map(function(e) {
            return e.panelType
        }), n = (0 === c.length && s.push(n[0]),
        s.forEach(function(e) {
            var t, n, r;
            t = 1 === e.panelType ? (t = c.filter(function(e) {
                return 2 === e || 3 === e
            }).map(function(e) {
                return Number("10" + e)
            }),
            -1 < c.indexOf(104) && t.push(104),
            Wr(a.concat(t).filter(function(e) {
                return 7 != e
            })).join("_")) : a.filter(function(e) {
                return [18, 101, 102, 103, 104].indexOf(e) < 0
            }).join("_"),
            e.content.scene = t,
            2 === e.panelType && (e.content.postList = (t = [],
            (r = o).postList && r.postList.length ? r.postList.filter(function(e) {
                return 9 !== e.postType
            }) : r.posterUrl ? [{
                postType: 0,
                desc: "纯图片海报",
                content: {
                    img: r.posterUrl
                }
            }] : t)),
            104 === e.panelType && (e.content.postList = (r = [],
            r = (n = o).postList && n.postList.length ? n.postList.filter(function(e) {
                return 9 === e.postType
            }) : r)),
            i && 4 !== e.panelType && 104 !== e.panelType && (e.content.directScene = i)
        }),
        {
            panelList: s,
            userInfo: {
                from: "h5",
                wdFriendTitle: o.title,
                wdFriendSubTitle: o.content,
                utInfo: {}
            }
        });
        return o.header && (n.headerInfo = o.header),
        o.panelStyle && (s = Tr.match(Sr),
        s = e = s ? s[1] : e,
        n.panelStyle = o.panelStyle,
        s && Or() && -1 === Y(s, "6.1.4") && (t = 0,
        (e = (e = n.panelList).filter(function(e) {
            return 2 === e.panelType
        })[0]) && e.content.postList && e.content.postList.some(function(e) {
            return e.postType === t
        })) && delete n.panelStyle),
        o.extensionInfo && (n.extensionInfo = o.extensionInfo),
        n
    }
    e(Fh, Uh = xh),
    Fh.prototype.loadSdk = function() {
        this.sdkPromise = ao(!0)
    }
    ,
    Fh.prototype.option = function(e) {
        var t = this;
        return this.sdkPromise.then(function() {
            return t.config = c(!0, {}, e),
            t.config.vbuyerShare && (t.isRegisterConerShareCallback || t.registerShareCallback(t.config),
            t.setShareConfig(t.config)),
            Promise.resolve(e)
        })
    }
    ,
    Fh.prototype.evoke = function(e) {
        var r = this.config;
        this.sdkPromise.then(function() {
            var n = qh(r, e);
            Gt("evoke", JSON.stringify(n)),
            m.KDJSBridge2 && m.KDJSBridge2.call("WDJSBridge", "share", {
                title: r.title,
                content: r.content,
                content_ext: r.pyqTitle,
                url: r.img,
                cmd: r.url,
                mini_path: r.miniPath,
                mini_id: r.miniId,
                mini_withShareTicket: "1",
                mini_programType: 0,
                img_urls: r.imgUrls,
                moments_mode: r.momentMode,
                scene: r.scene,
                copy_url: r.copyUrl,
                newShare: n
            }, function(e) {
                m.spider && m.spider.trackAction({
                    actionName: "_share",
                    actionArgs: {
                        app: ch,
                        scene: e && e.param && e.param.type || "unknow",
                        shareUrl: r.url
                    }
                });
                var t = yh(n, e);
                t.error ? (r.error && r.error(t),
                m.spider && m.spider.trackAction({
                    actionName: "shareFail",
                    actionArgs: {
                        app: ch,
                        scene: e && e.param && e.param.type || "unknow",
                        shareUrl: r.url,
                        reason: t.message
                    }
                })) : (t.scene = e.param.type,
                r.success && r.success(t),
                m.spider && m.spider.trackAction({
                    actionName: "shareSuccess",
                    actionArgs: {
                        app: ch,
                        scene: e && e.param && e.param.type || "unknow",
                        shareUrl: r.url
                    }
                }))
            })
        })
    }
    ,
    Fh.prototype.registerShareCallback = function(n) {
        var r = this;
        m.KDJSBridge2.FN_registerHandler("share", "nativeShareResult", function(e) {
            var t = {
                param: e,
                bridgeParam: {
                    status: {
                        status_code: 0,
                        status_reason: ""
                    }
                }
            }
              , t = (m.spider && m.spider.trackAction({
                actionName: "_share",
                actionArgs: {
                    app: ch,
                    scene: e && e.type || "unknow",
                    shareUrl: n.url
                }
            }),
            yh(n, t));
            t.error ? n.error && n.error(t) : (t.scene = e && e.type,
            n.success && n.success(t)),
            r.isRegisterConerShareCallback = !0
        })
    }
    ,
    Fh.prototype.setShareConfig = function(t) {
        var e, n, r = qh(t);
        Gt("newShareOption", JSON.stringify(r)),
        e = {
            module: "Share",
            identifier: "showOption"
        },
        n = function(e) {
            e && e.param && e.param.exist ? m.KDJSBridge2.call("Share", "showOption", {
                title: t.title,
                content: t.content,
                content_ext: t.pyqTitle,
                url: t.img,
                cmd: t.url,
                scene: t.scene,
                src: m.location.href,
                newShare: r,
                h5ShareContext: {}
            }, function(e) {
                e = yh(r, e);
                e.error && (e.message = "webview 右上角唤起失败",
                t.error && t.error(e))
            }) : Gt("当前场景不支持Share.showOption方法", e)
        }
        ,
        (m.KDJSBridge2 || {}).call("WDJSBridge", "isMethodExist", e, n)
    }
    ;
    var Uh, Hh = Fh;
    function Fh() {
        var e = Uh.call(this) || this;
        return e.isRegisterConerShareCallback = !1,
        e
    }
    var zh, Wh = ["qfriendh5", "qzoneh5", "wxh5", "wxph5"], Jh = (e(Gh, zh = xh),
    Gh.prototype.loadSdk = function() {
        this.sdkPromise = new Promise(function(e, t) {
            m.mqq ? (ro("qqJsbridgeLoad", {
                result: !0
            }),
            e(m.mqq)) : to("https://assets.geilicdn.com/v-components/cdn/qqsdk/default/index.fix.min.js").then(function() {
                m.mqq ? (ro("qqJsbridgeLoad", {
                    result: !0
                }),
                e(m.mqq)) : (ro("qqJsbridgeLoad", {
                    result: !1
                }),
                t())
            }).catch(function() {
                ro("qqJsbridgeLoad", {
                    result: !1
                }),
                t()
            })
        }
        )
    }
    ,
    Gh.prototype.option = function(e) {
        return this.sdkPromise.then(function() {
            e.url = mh(e.url, Wh[0]),
            Gt("option", JSON.stringify(e)),
            gh(e.url) || Vt("QQ不支持跨域分享", e.url),
            m.mqq.data.setShareInfo({
                share_url: e.url,
                title: e.title.slice(0, 45),
                desc: e.content.slice(0, 60),
                image_url: e.img
            })
        })
    }
    ,
    Gh.prototype.evoke = function() {
        this.sdkPromise.then(function() {
            m.mqq.ui.showShareMenu()
        })
    }
    ,
    Gh);
    function Gh() {
        return zh.call(this) || this
    }
    e(Kh, Vh = xh),
    Kh.prototype.loadSdk = function() {}
    ,
    Kh.prototype.option = function(e) {
        return Promise.resolve(_h(e.url))
    }
    ,
    Kh.prototype.evoke = function() {
        bh()
    }
    ;
    var Vh, Qh = Kh;
    function Kh() {
        return Vh.call(this) || this
    }
    var Xh = {
        vbuyerShare: !0,
        vsellerShare: !0,
        panel: [1],
        scene: [1, 2, 3, 4, 5],
        momentMode: 0
    }
      , Lc = (Yh.prototype.option = function(e) {
        var t = this;
        this.config = this.getMergeConfig(e);
        this.optionPromise && this.optionPromise.catch(function() {}),
        this.optionPromise = Ih(t.config).then(function() {
            return t.invokeHooks()
        }).catch(function(e) {
            return e ? (e.name = "[Pathtracker Error] ValidationError",
            Lh.emit("PATHTRACKER_EXCEPTION", e),
            Promise.reject(e)) : Promise.resolve()
        })
    }
    ,
    Yh.prototype.evoke = function(e) {
        var t, n = this;
        if (!this.config || !this.optionPromise)
            return w(t = new ph({
                message: "config is not initialized before evoke",
                name: "ValidationError"
            })),
            void Lh.emit("PATHTRACKER_EXCEPTION", t);
        this.optionPromise.then(function() {
            return n.instance.evoke(e)
        })
    }
    ,
    Yh.prototype.use = function(e) {
        return !s(e) || -1 < this.installedPlugins.indexOf(e) || (e.call(this),
        this.installedPlugins.push(e)),
        this
    }
    ,
    Yh.prototype.catch = function(t) {
        this.isOnCatched || Lh.on("PATHTRACKER_EXCEPTION", function(e) {
            s(t) && t.call(null, e)
        }, !0),
        this.isOnCatched = !0
    }
    ,
    Yh.prototype.getShareInstance = function() {
        return new (Pr() ? Nh : xr() || /WDThirdSDK\(CloudMall/i.test(navigator.userAgent.toLowerCase()) ? Hh : Cr() ? Mh : Ar() ? Jh : Qh)
    }
    ,
    Yh.prototype.invokeHooks = function() {
        var n = this;
        return new Promise(function(e, t) {
            n.hooks.invokeWaterfall("configured", n.config, function() {
                n.instance.option(n.config).then(e).catch(t)
            })
        }
        )
    }
    ,
    Yh.prototype.getMergeConfig = function(e) {
        var t = c(!0, {}, Xh, e = e || {});
        return a(e.panel) && e.panel.length ? t.panel = c(!0, [], e.panel) : t.panel = Xh.panel,
        a(e.scene) && e.scene.length ? t.scene = c(!0, [], e.scene) : t.scene = Xh.scene,
        t.momentMode = e.momentMode || 0,
        t.vbuyerShare = !!v(e.vbuyerShare) || e.vbuyerShare,
        t.vsellerShare = !!v(e.vsellerShare) || e.vsellerShare,
        t.pyqTitle = e.pyqTitle || e.title,
        t.content = e.content || e.title,
        t
    }
    ,
    Yh);
    function Yh() {
        this.hooks = new me,
        this.installedPlugins = [],
        this.instance = this.getShareInstance(),
        this.isOnCatched = !1
    }
    e(em, $h = t);
    var $h, Zh = em;
    function em(e, t) {
        var n, r;
        return t.type = "pathtracker",
        g(r = (n = t).detail || {}) && (r.startTime = E(),
        l(r, function(e, t) {
            G(e) && (r[t] = d(e))
        }),
        n.detail = r),
        $h.call(this, e, t) || this
    }
    e(nm, tm = _);
    var tm, o = nm;
    function nm() {
        return tm.call(this, {
            report: new Ms({
                send: new Ws({
                    url: Br() + "?type=pathtracker"
                })
            }),
            Record: Zh
        }) || this
    }
    (function(e) {
        function o(e) {
            var t, n, e = void 0 === e ? function() {
                var e = (e = v.location.hostname.match(/(?=.)\bdev\b|\bdaily\b|\bpre\b(?=.)/)) ? e[0] : null;
                switch (e) {
                case "dev":
                    return O.DEV;
                case "daily":
                    return O.DAILY;
                case "pre":
                    return O.PRE;
                default:
                    return O.PROD
                }
            }() : Number(e);
            return t = (e = e) === O.DEV || e === O.DAILY ? "-daily.test" : e === O.PRE ? "-pre.test" : "",
            n = e === O.DEV || e === O.DAILY ? ".daily" : e === O.PRE ? ".pre" : "",
            {
                backendHost: "https://sso" + t + ".weidian.com",
                loginPageHost: "https://h5" + n + ".weidian.com",
                ssoPageHost: "https://" + (e === O.DEV || e === O.DAILY ? "wd.daily" : e === O.PRE ? "wd.pre" : "sso") + ".weidian.com",
                thorHost: "https://thor" + n + ".weidian.com"
            }
        }
        function n() {
            return v.navigator.userAgent
        }
        function r(e) {
            return void 0 === e || e
        }
        function i(t) {
            t = t || location.hostname;
            var n = !1;
            return ["koudai.com", "91ruyu.com", "bibikan.cn", "fangxin.com", "xihuan.com.cn", "youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "ynet.com", "mitao.cn"].forEach(function(e) {
                !n && -1 < t.indexOf(e) && (n = e)
            }),
            n
        }
        function a(e, t) {
            e = e || v.location.href;
            switch (t) {
            case k:
                i() && !m() && (e = o().backendHost + "/user/synclogin" + "?type=" + i() + "&redirect=" + encodeURIComponent(e));
                break;
            case T:
                i() && (e = o().backendHost + "/user/synclogout" + "?type=" + location.hostname.split(".").slice(-2).join(".") + "&redirect=" + encodeURIComponent(e))
            }
            return e = t !== T && /android/i.test(n()) && m() && function(e, t) {
                if (e !== t) {
                    for (var n = e.split("."), r = t.split("."), o = Math.min(n.length, r.length), i = 0; i < o; i++) {
                        if (parseInt(n[i]) > parseInt(r[i]))
                            return 1;
                        if (parseInt(n[i]) < parseInt(r[i]))
                            return -1
                    }
                    if (n.length > r.length)
                        return 1;
                    if (n.length < r.length)
                        return -1
                }
                return 0
            }(function() {
                var e, t = n(), t = t.match(/WDAPP\((.*?)\/(.*?)[\s|\)]/i);
                t && 3 == t.length && (t[1],
                e = t[2]);
                return e
            }(), "5.5.2.1") < 0 ? encodeURIComponent(e) : e
        }
        function s(e) {
            return (e = new RegExp("(?:^|; )" + e + "=([^;]*)").exec(g.cookie)) ? e[1] : null
        }
        function f(e) {
            var t, n = [];
            for (t in e)
                "object" == typeof e[t] ? n.push(t + "=" + JSON.stringify(e[t])) : n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return n.join("&")
        }
        function u() {
            return {
                status: {
                    code: "",
                    message: "",
                    description: ""
                },
                result: {}
            }
        }
        function c(e, t, n) {
            var r = u();
            if (e && e.status) {
                var o, i, a = e.status, s = a.status_code, c = a.message;
                switch (s) {
                case 0:
                    o = w,
                    i = E;
                    break;
                case 420010:
                    o = b,
                    i = S;
                    break;
                default:
                    o = s,
                    i = c
                }
                r.status.code = o,
                r.status.message = i,
                r.result = e.result,
                s === w ? t && t(r) : n && n(r)
            } else
                n && n(new Error("interface isn't legal"))
        }
        function p(e) {
            return void 0 !== e
        }
        function l(e, t, n) {
            var r = ""
              , r = e + t;
            return p(n) && (r += "?" + f(n)),
            r
        }
        function d(e) {
            var t, n = (e = e || {}).data || {}, r = e.jsonp || "callback", o = e.success, i = e.error, e = e.url;
            if (!e)
                return i && i(new Error("url is not defined!"));
            var a, s = "jsonp_" + y++, c = document.getElementsByTagName("head")[0], u = document.createElement("script"), p = (n[r] = s,
            a = !1,
            function() {
                a || (a = !0,
                t ? o && o(t) : i && i(new Error("callback function error!")))
            }
            );
            u.onreadystatechange = function() {
                "complete" !== this.readyState && "loaded" !== this.readyState || p()
            }
            ,
            u.onload = p,
            u.onerror = function(e) {
                c.removeChild(u),
                window[s] = null,
                i && i(e)
            }
            ,
            window[s] = function(e) {
                c.removeChild(u),
                window[s] = null,
                t = e
            }
            ,
            u.src = e + (-1 == e.indexOf("?") ? "?" : "&") + f(n),
            c.appendChild(u)
        }
        function h() {
            return !!(s("is_login") || s("uid") || s("sid"))
        }
        function m() {
            return /WDBuyer/i.test(n())
        }
        function t(e) {
            var t = o((e = e || {}).environment)
              , n = encodeURIComponent(a(e.url, k));
            return [r(e.device) ? t.ssoPageHost + "/login/index.php" : t.loginPageHost + "/m/signin/index.html", "?redirect=" + n, p(e.oauth) ? "&oauth=0" : "", p(e.force) ? "&force=1" : "", p(e.bind) ? "&bind=1" : "", p(e.nochoice) ? "&nochoice=1" : "", p(e.seller) ? "&seller=1" : "", p(e.sellerswitchshop) ? "&sellerswitchshop=" + e.sellerswitchshop : ""].join("")
        }
        var v, g, y, _, w, b, E, S, k, T, O;
        v = window,
        g = document,
        _ = "login_source",
        E = "OK",
        S = "LOGIN ERROR",
        O = {
            DEV: w = y = 0,
            DAILY: k = 1,
            PRE: T = b = 2,
            PROD: 3
        },
        t = {
            isLogin: h,
            isSellerLogin: function() {
                return !(!h() || !s("sid"))
            },
            isWechatLogin: function() {
                return !(!h() || "LOGIN_USER_SOURCE_WECHAT" !== s(_))
            },
            isQQLogin: function() {
                return !(!h() || "LOGIN_USER_SOURCE_QQ" !== s(_))
            },
            isSubAccount: function() {
                return !(!h() || "SUB_ACCOUNT" !== s("login_type"))
            },
            getUserInfo: function(e) {
                var t = (e = e || {}).success
                  , n = e.error
                  , e = o(e.environment).backendHost + "/user/getinfo"
                  , r = u();
                h() ? d({
                    url: e,
                    success: function(e) {
                        c(e, function(e) {
                            t && t(e)
                        }, function(e) {
                            n && n(e)
                        })
                    },
                    error: function(e) {
                        n && n(e)
                    }
                }) : (r.status.code = b,
                r.status.message = S,
                r.result = "",
                n && n(r))
            },
            qqLogin: function(e) {
                var t = a((e = e || {}).url, k)
                  , n = o(e.environment)
                  , e = e.device;
                return l(n.backendHost, "/user/oauth/qq/login", {
                    redirect: t,
                    type: r(e) ? "mobile" : "pc"
                })
            },
            wechatSlientLogin: function(e) {
                var t = a((e = e || {}).url, k);
                return l(o(e.environment).backendHost, "/user/oauth/wechat/silentlogin", {
                    redirect: t
                })
            },
            wechatForceLogin: function(e) {
                var t = a((e = e || {}).url, k);
                return l(o(e.environment).backendHost, "/user/oauth/wechat/login", {
                    redirect: t
                })
            },
            login: t,
            register: function(e) {
                var t = a((e = e || {}).url, k);
                return [o(e.environment).ssoPageHost + "/login/index.php", "?redirect=" + t, "&register=1"].join("")
            },
            logout: function(e) {
                var t = a((e = e || {}).url, T);
                return l(o(e.environment).backendHost, "/user/logout", {
                    redirect: t
                })
            },
            bind: function(e) {
                var t = a((e = e || {}).url, 0);
                return l(o(e.environment).ssoPageHost, "/login/index.php", {
                    redirect: t,
                    bind: 1
                })
            },
            getBindStatus: function(e) {
                var t = (e = e || {}).success
                  , n = e.error;
                d({
                    url: o(e.environment).backendHost + "/user/oauth/bind/getdemand",
                    success: function(e) {
                        c(e, function(e) {
                            t && t(e)
                        }, function(e) {
                            n && n(e)
                        })
                    },
                    error: function(e) {
                        n && n(e)
                    }
                })
            },
            isWeixin: function() {
                return /MicroMessenger/i.test(n()) && !/wxwork/i.test(n())
            },
            isQQ: function() {
                return /QQ\/([\d\.]+)/i.test(n())
            },
            isOpenShop: function(e) {
                var t = (e = e || {}).success
                  , n = e.error
                  , e = o(e.environment).thorHost + "/wdshop/shop.base.getShopExistInfo/1.0"
                  , r = s("sid");
                if (!r)
                    return n && n(new Error("没获取到当前登录的卖家id"));
                d({
                    url: e,
                    data: {
                        context: {
                            shop_id: r
                        }
                    },
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e) {
                        n && n(e)
                    }
                })
            },
            addShop: function(e) {
                var t = (e = e || {}).success
                  , n = e.error
                  , r = e.param
                  , e = o(e.environment).thorHost + "/wdshop/shop.base.mutiAddShop/1.0";
                if (!s("sid"))
                    return n && n(new Error("没获取到当前登录的卖家id"));
                r = r || {
                    shopName: "我的小店",
                    shopLogo: "https://si.geilicdn.com/img-390300000174535cb4ed0a21924a-unadjust_62_62.png"
                },
                d({
                    url: e,
                    data: {
                        param: JSON.stringify(r)
                    },
                    success: function(e) {
                        t && t(e)
                    },
                    error: function(e) {
                        n && n(e)
                    }
                })
            }
        },
        e.exports ? e.exports = t : v.login = t
    }
    )(n = {
        exports: {}
    });
    var rm = n.exports;
    rm.isLogin,
    rm.wechatSlientLogin;
    function om() {
        var e = Nt()[ih]
          , i = e && dh(e);
        return new Promise(function(r, o) {
            xs(function(e) {
                var e = e && e.get()
                  , t = e && e.spma
                  , n = e && e.spmb;
                !e || u(t) || u(n) || u(i) ? o() : r({
                    subtype: "share_click",
                    share_id: i.share_id,
                    page_id: t + "." + n,
                    share_buyer_id: i.share_buyer_id,
                    share_channel: (t = a(t = Nt().wfr) ? t[t.length - 1] : t) || "unknown",
                    click_buyer_id: e && e.buyer_id,
                    click_seller_id: e && e.seller_id,
                    share_level: parseInt(i.share_level, 10),
                    gmt_action: Date.now()
                })
            })
        }
        )
    }
    function im(e, t) {
        var i, a, s, c, n = Nt()[ih];
        n ? (n = {
            channel: e,
            pathInfo: dh(n)
        },
        s = n.pathInfo,
        c = n.channel,
        new Promise(function(r, o) {
            xs(function(e) {
                var e = e && e.get()
                  , t = e && e.spma
                  , n = e && e.spmb;
                !e || u(t) || u(n) ? o() : r({
                    subtype: "share_reshare",
                    share_id: s.share_id,
                    page_id: t + "." + n,
                    share_buyer_id: s.share_buyer_id,
                    reshare_buyer_id: e && e.buyer_id,
                    reshare_seller_id: e && e.seller_id,
                    share_level: parseInt(s.share_level || 0, 10) + 1,
                    gmt_action: Date.now(),
                    reshare_channel: c
                })
            })
        }
        ).then(function(e) {
            return t.send(e)
        }).catch(f)) : (i = {
            channel: e
        },
        a = dh(hh()),
        new Promise(function(r, o) {
            xs(function(e) {
                var e = e && e.get()
                  , t = e && e.spma
                  , n = e && e.spmb;
                !e || u(t) || u(n) ? o() : r({
                    subtype: "share_first",
                    share_id: a.share_id,
                    page_id: t + "." + n,
                    share_buyer_id: e && e.buyer_id,
                    share_seller_id: e && e.seller_id,
                    share_level: 1,
                    gmt_action: Date.now(),
                    share_channel: i.channel
                })
            })
        }
        ).then(function(e) {
            return t.send(e)
        }).catch(f))
    }
    var am = new o;
    function sm(e) {
        var t = hh();
        return Lt(e, ((e = {})[ih] = t,
        e))
    }
    function cm() {
        this.hooks.push("configured", function(e, t) {
            (e = e || {}).url && (e.url = sm(e.url));
            var n = e.success
              , r = e.error;
            e.success = function(e) {
                var t = e && e.channel || "unknown";
                Gt(e),
                (Cr() || Pr()) && im(t, am),
                s(n) && n(e)
            }
            ,
            e.error = function(e) {
                "用户取消分享" === e.message ? Gt(JSON.stringify(e)) : (delete e.error,
                w(new ph(B(B({}, e), {
                    name: "CallbackError"
                })))),
                s(r) && r(e)
            }
            ,
            t && t()
        })
    }
    function um() {
        var o = this;
        this.hooks.push("configured", function(t, n) {
            var r = t.url;
            !Ar() && ts ? ts.then(function(e) {
                Kr("pathtracker") && !$a(S()) && (t.url = Za(r, e),
                e = os(r, e),
                Pr() && o.instance.loadSdk({
                    mpid: e
                })),
                n && n()
            }).catch(function() {
                n && n()
            }) : n && n()
        })
    }
    function pm(e) {
        var t, n, r = e.config, e = e.option, r = {
            title: (r = r || {}).title,
            content: r.content,
            url: r.url,
            img: r.img,
            success: (e = e || {}).wxSuccessCb || e.appSuccessCb,
            pyqTitle: r.pyq,
            modalShareTipImage: e.wxShareTipImge,
            hideMenuItems: e.hideMenuItems,
            imgUrls: r.img_urls,
            miniPath: r.path,
            miniId: r.id,
            miniProgramType: r.miniProgramType,
            header: r.header,
            text: r.text,
            posterUrl: r.posterUrl,
            panel: e.panel,
            vbuyerShare: e.vbuyerShare,
            vsellerShare: e.wdShare,
            scene: e.scene,
            copyUrl: e.copyUrl,
            momentMode: e.momentMode,
            extensionInfo: e.extensionInfo
        };
        return t = r,
        n = Object.create(null),
        Object.keys(t).forEach(function(e) {
            void 0 !== t[e] && (n[e] = t[e])
        }),
        n
    }
    function fm(e, t) {
        e && a(t) && t.length
    }
    function lm(e, t) {
        Vt("[Pathtracker Warn] 方法 " + e + " 已经废弃不再维护，请使用新版的API方法 " + t + "\n详情参见文档：https://h5.daily.weidian.com/v-components/pecker/docs/pathtracker/interfaces/pathtracker.html")
    }
    function dm(n) {
        var r, o = this;
        c(o, {
            share: function(e) {
                var t = e.config
                  , e = e.option;
                return r = pm({
                    config: t,
                    option: e
                }),
                n.option(r),
                lm("pathTracker.share", "pecker.pathtracker.option"),
                o
            },
            resetUserConfig: function(e) {
                return r = c(r, pm({
                    config: e
                })),
                n.option(r),
                lm("pathTracker.resetUserConfig", "pecker.pathtracker.option"),
                o
            },
            resetShareOption: function(e) {
                e = pm({
                    option: e
                });
                return fm((r = c(r, e)).panel, e.panel),
                fm(r.scene, e.scene),
                fm(r.hideMenuItems, e.hideMenuItems),
                fm(r.imgUrls, e.imgUrls),
                n.option(r),
                lm("pathTracker.resetShareOption", "pecker.pathtracker.option"),
                o
            },
            showPanel: function() {
                return n.evoke(),
                lm("pathTracker.showPanel", "pecker.pathtracker.evoke"),
                o
            },
            getShareUrl: function(e) {
                return lm("pathTracker.getShareUrl", "pecker.pathtracker.getUrl"),
                sm(e)
            },
            direct: function(e) {
                return n.evoke(e),
                lm("pathTracker.direct", "pecker.pathtracker.evoke"),
                o
            }
        })
    }
    am.use(function() {
        var e, t, n, r = this;
        if ((n = Pr() && !Lr() && !rm.isLogin() && !Ir() && Gr().indexOf("silentlogin") < 0) && h.emit("pageNavigate"),
        n)
            return n = m.location.hash,
            t = Nt(),
            "" !== n && Or() ? (n = t.slr || "",
            t.slr = jr(n, 4)) : t.slr && delete t.slr,
            n = m.location.href,
            e = (n = n.split("#"))[0],
            n = (n = n[1]) ? "#" + n : "",
            e = Lt(e.split("?")[0] + n, t),
            void (m.location.href = rm.wechatSlientLogin({
                url: e
            }));
        om().then(function(e) {
            r.send(e)
        }).catch(f)
    });
    var j, hm = "data-spider", mm = "data-spider-prior", vm = "data-spider-mode", gm = "data-spider-action-name", ym = "data-spider-action-args", _m = "data-spider-impression", wm = "spider_action", bm = "spider_token", Em = "spider_token_alias", Sm = "javascript:";
    function km(e) {
        return "" === e || null === e ? e : Number(e)
    }
    function Tm(e) {
        var t, n = e.actionName, e = e.actionArgs, r = Object.create(null);
        (t = {})[j.ITEM] = function(e) {
            e && e.itemId && e.shopId ? r.isOk = !0 : (r.isOk = !1,
            r.message = "pageArgs._page=_item时 pageArgs必须包含itemId和shopId属性")
        }
        ,
        t[j.SHOP] = function(e) {
            e && e.shopId ? r.isOk = !0 : (r.isOk = !1,
            r.message = "actionName=_shop或者pageArgs._page=_shop时 actionArgs或者pageArgs必须包含shopId属性")
        }
        ,
        t[j.DYNAMIC] = function(e) {
            e && e.authorId && e.feedId ? r.isOk = !0 : (r.isOk = !1,
            r.message = "actionName=_dynamic或者pageArgs._page=_dynamic时 actionArgs或者pageArgs必须包含authorId属性和feedId属性")
        }
        ,
        t[j.IM] = function(e) {
            r.isOk = !0
        }
        ,
        t[j.ADD_TO_CART] = function(e) {
            r.isOk = !0
        }
        ,
        t[j.ADD_TO_FAVORITES] = function(e) {
            e && e.shopId ? 0 === (e = km(e.type)) || 1 === e ? r.isOk = !0 : (r.isOk = !1,
            r.message = "actionName=_addToFavorites type属性必须传0(取消)或1(关注)") : (r.isOk = !1,
            r.message = "actionName=_addToFavorites actionArgs必须包含shopId和type属性")
        }
        ,
        t[j.BUY_NOW] = function(e) {
            r.isOk = !0
        }
        ,
        t[j.COLLECTION] = function(e) {
            e && e.itemId ? 0 === (e = km(e.type)) || 1 === e ? r.isOk = !0 : (r.isOk = !1,
            r.message = "actionName=_collection type属性必须传0(取消)或1(关注)") : (r.isOk = !1,
            r.message = "actionName=_collection actionArgs必须包含itemId和type属性")
        }
        ,
        t[j.LIKE] = function(e) {
            var t = km(e && e.type);
            !e || 0 !== t && 1 !== t ? (r.isOk = !1,
            r.message = "actionName=_like actionArgs必须包含type属性且必须传0(取消)或1(关注)") : r.isOk = !0
        }
        ,
        t[j.SHARE] = function(e) {
            r.isOk = !0
        }
        ,
        t[j.DOWNLOAD] = function(e) {
            r.isOk = !0
        }
        ;
        return n && t[n] && t[n](e),
        void 0 === r.isOk && (r.isOk = !1,
        r.message = "actionName " + n + "不是内置actionName"),
        r
    }
    (C = j = j || {}).BUY_NOW = "_buyNow",
    C.ADD_TO_CART = "_addToCart",
    C.ADD_TO_FAVORITES = "_addToFavorites",
    C.COLLECTION = "_collection",
    C.SHARE = "_share",
    C.LIKE = "_like",
    C.IM = "_im",
    C.ITEM = "_item",
    C.SHOP = "_shop",
    C.DYNAMIC = "_dynamic",
    C.DOWNLOAD = "_download",
    Om = function(e, t) {
        return (Om = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Om(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(Im, Am = Bt);
    var Om, Am, Pm = Im;
    function Im(e) {
        var t = "[Spider Error]";
        return e.name && (t += " " + e.name),
        Am.call(this, {
            message: e.message || "",
            name: t,
            originalError: e.originalError,
            sample: e.sample
        }) || this
    }
    var xm, Cm = function() {
        return (Cm = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function Lm(e) {
        var t = e.getAttribute("href")
          , n = t && "" !== t && 0 !== t.indexOf("#");
        return !(!("A" === e.nodeName && e instanceof HTMLAnchorElement && e.protocol) || 0 !== e.protocol.indexOf("http") && 0 !== e.protocol.indexOf("weidianbuyer:") || !n || (e = t) && /^\/lib\//.test(e))
    }
    function Nm(e) {
        var t = y.createElement("A");
        return t.href = e,
        t
    }
    function jm(e) {
        e = he(e);
        return g(e) ? e : null
    }
    function Dm(e, t) {
        var t = Nt(t);
        return e ? a(t = t[e]) ? t[t.length - 1] : t : null
    }
    function Rm(e) {
        return e instanceof HTMLElement && e.nodeType == Node.ELEMENT_NODE
    }
    function Mm(e, t) {
        for (var n = e; ; ) {
            if (n === y.body)
                return null;
            if (n === y.documentElement)
                return null;
            if (null === n)
                return null;
            if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                return null;
            if (t(n))
                return n;
            n = n.parentElement
        }
    }
    function Bm(e) {
        return !(!e.hasAttribute(hm) || "" !== e.getAttribute(hm)) || (!!e.hasAttribute(gm) || (!!e.hasAttribute(_m) || !!Lm(e)))
    }
    function qm(e) {
        return !(!e.getAttribute(mm) && !e.getAttribute(hm))
    }
    function Um(t) {
        xs(function(e) {
            e = e && e.get();
            xm = e,
            t()
        })
    }
    function Hm(e) {
        if (!Rm(e) || !Bm(e))
            return null;
        var t, n = e.getAttribute(gm) || null, r = jm(e.getAttribute(ym)), o = Mm(e.parentElement, qm), o = o ? (t = o.getAttribute(mm) || o.getAttribute(hm),
        String(function(e, t) {
            for (var n = e.querySelectorAll("[" + hm + "],[" + gm + "],[" + _m + "], a[href]"), r = 0, o = 0; o < n.length; o++)
                if (Bm(n[o]) && r++,
                t === n[o])
                    return r;
            return 0
        }(o, e) || "_")) : (t = "_",
        String(function(e) {
            for (var t = y.querySelectorAll("[" + gm + "], [" + _m + "]"), n = 0, r = 0; r < t.length; r++)
                if (null === Mm(t[r].parentElement, qm) && n++,
                e === t[r])
                    return n;
            return 0
        }(e) || "_"));
        return "_" !== t || "" !== n && null !== n || !Lm(e) || (t = "spider-auto",
        o = String(function(e) {
            for (var t = 0, n = Array.prototype.filter.call(y.querySelectorAll("a"), function(e) {
                var t = Mm(e.parentElement, qm)
                  , n = e.getAttribute(gm)
                  , e = e.getAttribute(hm);
                return !t && !n && !e
            }), r = 0; r < n.length; r++)
                if (t++,
                e === n[r])
                    return t;
            return 0
        }(e) || "_")),
        {
            spmc: t,
            spmd: o,
            actionName: n,
            actionArgs: r
        }
    }
    function Fm(e) {
        return null !== String(e).match(/^[a-zA-Z0-9\-\_]+$/)
    }
    function zm(t) {
        return Object.keys(j).some(function(e) {
            return j[e] === t
        })
    }
    function Wm(e) {
        if (g(e)) {
            var t = e.spmc
              , n = e.spmd
              , r = e.actionName
              , o = e.actionArgs;
            if (e.actionType && Vt(new Pm({
                message: "action.actionType=" + e.actionType + "已废弃，请使用 action.actionName 代替",
                name: "ValidationError"
            })),
            Fm(t))
                if (Fm(n))
                    if (o && !g(o))
                        w(new Pm({
                            message: "actionArgs 必须是一个对象，" + JSON.stringify(o) + "不是对象类型",
                            name: "ValidationError"
                        }));
                    else {
                        if (r && 0 === r.indexOf("_")) {
                            if (!zm(r) && "_cancelToFavorites" !== r && "_deprecated" !== r && "_expose" !== r)
                                return void w(new Pm({
                                    message: "actionName=" + r + "不是内置actionName\n下划线起始的 actionName 代表特定功能，禁止自定义，请查看 spider.constants 了解内置的 actionName",
                                    name: "InternalActionNameError"
                                }));
                            o = Tm(e);
                            if (r !== j.ITEM && !o.isOk)
                                return w(new Pm({
                                    message: o.message,
                                    name: "InternalActionNameError"
                                })),
                                1
                        }
                        if ("_" !== t || r) {
                            if ("_" === t || "_" !== n)
                                return 1;
                            w(new Pm({
                                message: "spmc 有值时 spmd 不能为空",
                                name: "ValidationError"
                            }))
                        } else
                            w(new Pm({
                                message: "spmc, actionName 不能同时为空",
                                name: "ValidationError"
                            }))
                    }
                else
                    w(new Pm({
                        message: "spm只允许英文、数字、中划线、下划线组成，" + n + "不合法",
                        name: "ValidationError"
                    }));
            else
                w(new Pm({
                    message: "spm只允许英文、数字、中划线、下划线组成，" + t + "不合法",
                    name: "ValidationError"
                }))
        } else
            w(new Pm({
                message: "action 必须是一个对象," + JSON.stringify(e) + "不是对象类型",
                name: "ValidationError"
            }))
    }
    function Jm(e) {
        return e.prev_spm ? {
            cur_spm: e.prev_spm,
            cur_page_args: e.prev_page_args,
            cur_action_name: e.prev_action_name,
            cur_action_args: e.prev_action_args
        } : e.cur_spm ? {
            prev_spm: e.cur_spm,
            prev_page_args: e.cur_page_args,
            prev_action_name: e.cur_action_name,
            prev_action_args: e.cur_action_args
        } : null
    }
    function Gm(e) {
        return 0 === (t = e).indexOf("vc_") && t.length > "vc_".length || "wfr" === e || "ifr" === e;
        var t
    }
    function Vm() {
        var t = Nt()
          , e = Object.getOwnPropertyNames(t)
          , n = {};
        return e.forEach(function(e) {
            Gm(e) && (n[e] = t[e])
        }),
        n
    }
    function Qm(e) {
        return F(e) ? e.replace(/(%[0-9A-Z]{2})+/g, m.decodeURIComponent) : ""
    }
    function Km() {
        var e = m.document.cookie.split("; ")
          , t = Object.create(null);
        return e.forEach(function(e) {
            u(e) || (e = e.split("="),
            t[Qm(e[0])] = Qm(e[1]))
        }),
        t
    }
    function Xm() {
        return {
            spma: Ss(),
            spmb: ks()
        }
    }
    function Ym(e, t, n) {
        G(e) && n && (n[t] = d(e))
    }
    function $m(e) {
        var t, n;
        g(e) && (void 0 === e.spmd && (e.spmd = "1"),
        e.spmc = String(e.spmc || "_"),
        e.spmd = String(e.spmd || "_"),
        t = String(e.actionName || ""),
        n = String(e.actionType || ""),
        e.actionName = t || n,
        e.actionArgs = e.actionArgs || null)
    }
    function Zm(e, t) {
        Vt("[Spider Warn] 方法 " + e + " 已经废弃不再维护，请使用其他API替代 " + (t || "") + "\n详情参见文档：http://docsify.daily.vdian.net/spider/46/refactor-changes.html")
    }
    function ev(e) {
        Zm("spider.getCooke");
        var t = Km();
        return e ? t[e] || null : t
    }
    function tv() {
        return Zm("spider.getSearchParams"),
        Nt()
    }
    var nv = [];
    var rv = {
        0: "navigate",
        1: "reload",
        2: "back_forward",
        255: "prerender"
    };
    function ov() {
        if (s(m.performance.getEntriesByType)) {
            var e = m.performance.getEntriesByType("navigation");
            if (e.length)
                return (e = function(e) {
                    if (s(e.toJSON))
                        return e.toJSON();
                    try {
                        var t, n = {};
                        for (t in e)
                            K(e, t) && (n[t] = e[t]);
                        return Object.keys(n).length ? n : void 0
                    } catch (e) {}
                }(e[0])) ? e.type : null
        } else if (m.performance.navigation)
            return e = m.performance.navigation.type,
            rv[e];
        return null
    }
    var iv = {
        prev_spm: "",
        prev_page_args: null,
        prev_action_name: null,
        prev_action_args: null
    };
    function av(e) {
        var t = jr(JSON.stringify(e), 4)
          , e = c(!0, {}, e)
          , n = ((n = e).prev_page_args || (n.prev_page_args = {}),
        n.prev_action_args || (n.prev_action_args = {}),
        et + "_" + t);
        return Uo(n, e),
        Qe(n, d(e), {
            domain: Mr(),
            path: "/",
            expires: 30
        }),
        t
    }
    function sv(e) {
        var t, n, e = et + "_" + e, e = qo(e) || he(Ve(e) || "");
        return e || (t = Dm("spider"),
        n = Dm(wm) || null,
        e = t ? c(!0, {}, iv, {
            prev_spm: t,
            prev_action_name: n
        }) : null),
        l(Km(), function(e, t) {
            var n;
            "string" == typeof t && 0 === t.indexOf(et) && (t = t,
            n = {
                domain: Mr(),
                path: "/"
            },
            Qe(t, "", c(n || {}, {
                expires: -864e5
            })))
        }),
        l(qo(), function(e, t) {
            "string" == typeof t && 0 === t.indexOf(et) && Bo.remove(t)
        }),
        e
    }
    function cv(n) {
        lo(function() {
            var t = uv();
            new MutationObserver(function() {
                var e = uv();
                e && e !== t && (n(e, t),
                t = e)
            }
            ).observe(y.body, {
                attributes: !0
            })
        })
    }
    function uv() {
        return y.body.getAttribute(mm) || y.body.getAttribute(hm)
    }
    var pv = new r
      , fv = Qr("tapper")
      , lv = "beforeAutoReportPageView"
      , dv = "beforeReportSpiderLog"
      , hv = (mv.prototype.trackPageview = function(e) {
        var t = Xm()
          , n = t.spma
          , t = t.spmb;
        n && t ? (e && !g(e) && (w(new Pm({
            message: "pageArgs必须是一个对象," + JSON.stringify(e) + "不是对象",
            name: "ValidationError"
        })),
        e = {}),
        this.setBase(n, t, e),
        t = (n = this.root.get()).prevData,
        e = n.curPageArgs,
        n = n.curSpm,
        pv.emit("report_prev_data"),
        fv && pv.emit(lv),
        this.reportSpiderData(t, e, n)) : Vt("[spider 提示] meta & body 上必须包含 data-spider 值")
    }
    ,
    mv.prototype.setBase = function(e, t, n) {
        this.root.setCurSpmArray({
            spma: e,
            spmb: t,
            spmc: "0",
            spmd: "0"
        });
        e = sv(this.root.get().token);
        this.root.setPrevData(e, n),
        this.root.setCurPageArgs(n)
    }
    ,
    mv.prototype.reportSpiderData = function(e, t, n) {
        e = c(!0, {}, e);
        e.cur_spm = n,
        e.cur_page_args = t,
        this.root.report("page_view", e)
    }
    ,
    mv);
    function mv(e) {
        this.root = e
    }
    var vv = function() {
        return (vv = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
      , gv = (yv.prototype.trackAction = function(e, t, n) {
        try {
            this.root.updateSpmaAndSpmb()
        } catch (e) {
            return void w(e)
        }
        var r = this.root.get()
          , o = r.curPageArgs
          , r = r.prevData;
        n && Vt("[Spider Warn]方法 spider." + ("click" === t ? "trackAction" : "trackImpression") + "不再兼容支持传第二个参数回调监听callback\n详情参见文档：http://docsify.daily.vdian.net/spider/46/refactor-changes.html"),
        $m(n = Rm(e) ? Hm(e) : c(!0, {}, e)),
        Wm(n) && (this.root.setCurSpmArray({
            spmc: String(n.spmc || "_"),
            spmd: String(n.spmd || "_")
        }),
        e = this.root.get().curSpm,
        this.root.report(t, vv({
            cur_spm: e,
            cur_page_args: o,
            cur_action_name: n.actionName || null,
            cur_action_args: n.actionArgs || null
        }, r)))
    }
    ,
    yv.prototype.onCustomEvents = function() {
        var t = this;
        pv.on("report_prev_data", function() {
            var e = t.root.get().prevData;
            e && e.prev_spm && t.root.report("click", Jm(e))
        })
    }
    ,
    yv);
    function yv(e) {
        this.root = e,
        this.onCustomEvents()
    }
    bv.prototype.transferActionBy = function(t, e, n) {
        var r = this;
        void 0 === n && (n = !1),
        pv.emit(dv),
        y.destination = t;
        try {
            this.root.updateSpmaAndSpmb()
        } catch (e) {
            return w(e),
            t
        }
        if (!Lm(Nm(t)))
            return w(new Pm({
                message: "url仅支持透传http协议跳转链接",
                name: "ValidationError"
            })),
            t;
        var o = Rm(e) ? Hm(e) : c(!0, {}, e);
        if ($m(o),
        !Wm(o))
            return t;
        var i = {
            url: t,
            action: o,
            value: e,
            context: this
        };
        return this.root.hooks.invokeWaterfall("beforeNavigate", i, function(e) {
            e instanceof Error || r.handleSpiderToken(i)
        }),
        n ? (m.location.href = i.url,
        Sm) : i.url
    }
    ,
    bv.prototype.transferAction = function(e) {
        try {
            this.root.updateSpmaAndSpmb()
        } catch (e) {
            return void w(e)
        }
        var e = Rm(e) ? Hm(e) : c(!0, {}, e);
        $m(e),
        Wm(e) && (this.root.setCurSpmArray({
            spmc: String(e.spmc || "_"),
            spmd: String(e.spmd || "_")
        }),
        e = av(this.generatePrevData(e)),
        this.root.setToken(e))
    }
    ,
    bv.prototype.handleSpiderToken = function(e) {
        this.root.setCurSpmArray({
            spmc: String(e.action.spmc || "_"),
            spmd: String(e.action.spmd || "_")
        });
        var t = av(this.generatePrevData(e.action))
          , t = (this.root.setToken(t),
        this.getSpiderTokenParams(e));
        e.url = Lt(e.url, t)
    }
    ,
    bv.prototype.generatePrevData = function(e) {
        var t = this.root.get()
          , n = t.curSpm
          , t = t.curPageArgs
          , r = xm;
        return Jm({
            cur_spm: n,
            cur_page_args: t,
            cur_action_name: e.actionName || null,
            cur_action_args: c({}, e.actionArgs, {
                realVisitId: r && r.visit_id
            })
        })
    }
    ,
    bv.prototype.getSpiderTokenParams = function(e) {
        var t = Object.create(null)
          , n = this.root.get()
          , r = n.curSpm
          , n = n.token
          , o = Nm(e.url);
        return Mr(o.hostname) === Mr() ? n && (t[bm] = n) : (t[Em] = n,
        t.spider = r,
        e.action.actionName && (t[wm] = e.action.actionName)),
        t
    }
    ;
    var _v, wv = bv;
    function bv(e) {
        this.root = e
    }
    _v = function(e, t) {
        return (_v = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        _v(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(kv, Ev = t);
    var Ev, Sv = kv;
    function kv(e, t) {
        var n, r;
        return t.type = "spider",
        g(r = (n = t).detail || {}) && (r.startTime = E(),
        l(r, Ym),
        n.detail = r),
        "page_view" !== n.subtype && (g(r = n.cur_action_args) ? l(r, Ym) : r = null,
        n.cur_action_args = r),
        Ev.call(this, e, t) || this
    }
    Tv = function(e, t) {
        return (Tv = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Tv(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(Av, Ov = _),
    Av.prototype.report = function(n, r) {
        this.notNeedReport() ? xs(function(e) {
            var t;
            e && ((t = []).push(c({}, r, {
                subtype: n
            })),
            Gt("[spider][" + n + "]:", {
                data: t,
                meta: e.data
            }))
        }) : (pv.emit(dv),
        this.send(c({}, r, {
            subtype: n
        })))
    }
    ,
    Av.prototype.notNeedReport = function() {
        var e = location.origin
          , t = nv;
        return t.length && -1 < t.indexOf(e)
    }
    ;
    var Tv, Ov, Ne = Av;
    function Av() {
        return Ov.call(this, {
            report: new Ms({
                send: new Ws({
                    url: Br() + "?type=spider"
                })
            }),
            Record: Sv
        }) || this
    }
    Pv = function(e, t) {
        return (Pv = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    var Pv, Iv, xv = function(e, t) {
        var n = {};
        for (o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }, x = (function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Pv(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }(Cv, Iv = Ne),
    Cv.prototype.updateSpmaAndSpmb = function() {
        var e = Xm()
          , t = e.spma
          , e = e.spmb
          , t = this.curSpmArray[0] || t
          , e = this.curSpmArray[1] || e;
        if (!t || !e)
            throw new Pm({
                message: "meta & body 上必须包含 data-spider 值",
                name: "ValidationError"
            });
        this.setCurSpmArray({
            spma: t,
            spmb: e
        })
    }
    ,
    Cv.prototype.setCurSpmArray = function(e) {
        var t = e.spma
          , n = e.spmb
          , r = e.spmc
          , e = e.spmd;
        t && (this.curSpmArray[0] = t),
        n && (this.curSpmArray[1] = n),
        r && (this.curSpmArray[2] = r),
        e && (this.curSpmArray[3] = e)
    }
    ,
    Cv.prototype.setCurPageArgs = function(e) {
        var n, r, e = c(!0, {}, e), e = c(!0, {}, (n = e,
        r = Gm,
        Object.keys(n).reduce(function(e, t) {
            return !(!a(r) || -1 === r.indexOf(t)) || s(r) && r(t) ? e : Cm(Cm({}, e), ((e = {})[t] = n[t],
            e))
        }, {})), Vm());
        e.navigation_type = ov(),
        e.ts = this.timestamp,
        e.device_resolution = m.screen.width * m.devicePixelRatio + "*" + m.screen.height * m.devicePixelRatio,
        delete e._page,
        l(e, Ym),
        this.curPageArgs = e
    }
    ,
    Cv.prototype.setPrevData = function(e, t) {
        var n, e = c(!0, {}, e);
        e.prev_spm ? (t && t._page && zm(t._page) && ((n = Tm({
            actionName: t._page,
            actionArgs: t
        })).isOk || w(new Pm({
            message: n.message,
            name: "InternalActionNameError"
        })),
        n = t._page,
        t = xv(t, ["_page"]),
        e.prev_action_name = n,
        e.prev_action_args = c(!0, {}, t, e.prev_action_args)),
        e.prev_action_name || (e.prev_action_name = "_jumpTo_" + this.curSpmArray[0] + "." + this.curSpmArray[1]),
        this.prevData = e) : this.prevData = null
    }
    ,
    Cv.prototype.setToken = function(e) {
        this.token = e
    }
    ,
    Cv.prototype.refreshTimestamp = function() {
        this.timestamp = String(+new Date)
    }
    ,
    Cv.prototype.setCurSpiderElement = function(e) {
        this.curSpiderElement = e
    }
    ,
    Cv.prototype.get = function() {
        var e = this.curSpmArray.join(".");
        return {
            curSpmArray: this.curSpmArray,
            curSpm: e,
            curPageArgs: this.curPageArgs,
            prevData: this.prevData,
            timestamp: this.timestamp,
            token: this.token,
            curSpiderElement: this.curSpiderElement
        }
    }
    ,
    Cv);
    function Cv() {
        var e = Iv.call(this) || this;
        return e.curSpmArray = [],
        e.curPageArgs = null,
        e.prevData = null,
        e.token = Dm(bm) || Dm(Em),
        e.timestamp = String(+new Date),
        e.curSpiderElement = null,
        e
    }
    Lv = function(e, t) {
        return (Lv = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        )(e, t)
    }
    ;
    (function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Lv(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    )(Uv, Nv = x),
    Uv.prototype.init = function(e) {
        nv = (e = e) && e.showLog && e.showLog.blackDomainList || []
    }
    ,
    Uv.prototype.trackPageview = function(e) {
        this.spiderPageview.trackPageview(e)
    }
    ,
    Uv.prototype.trackAction = function(e, t) {
        this.spiderClick.trackAction(e, "click", t)
    }
    ,
    Uv.prototype.transferActionBy = function(e, t, n) {
        return this.spiderNavigation.transferActionBy(e, t, n)
    }
    ,
    Uv.prototype.transferAction = function(e) {
        return this.spiderNavigation.transferAction(e)
    }
    ,
    Uv.prototype.trackImpression = function(e, t) {
        this.spiderClick.trackAction(e, "expose", t)
    }
    ;
    var Lv, Nv, jv, Dv, Rv, Mv, Bv, qv, n = Uv;
    function Uv() {
        var e = Nv.call(this) || this;
        return e.spiderPageview = new hv(e),
        e.spiderClick = new gv(e),
        e.spiderNavigation = new wv(e),
        e
    }
    function Hv(i) {
        y.body.addEventListener("click", function(e) {
            var t = Mm(e.target, Bm);
            if (null !== t) {
                var n = Hm(t);
                if (null !== n)
                    if ("_" !== n.spmc || "" !== n.actionName)
                        switch (i.setCurSpiderElement(t),
                        t.getAttribute(vm)) {
                        case "none":
                            break;
                        case "transferAction":
                            i.transferAction(n);
                            break;
                        case "transferActionBy":
                            var r = t.getAttribute("data-href");
                            r && t.setAttribute("data-href", i.transferActionBy(r, n));
                            break;
                        case "trackAction":
                            i.trackAction(n);
                            break;
                        default:
                            var o, r = Mm(t, Lm);
                            r instanceof HTMLAnchorElement ? (o = i.transferActionBy(r.href, n)) === Sm ? e.preventDefault() : (h.emit("pageNavigate"),
                            r.href = o) : i.trackAction(n)
                        }
            }
        }, !0)
    }
    function Fv(e) {
        Um(function() {
            Vr("spider") || (e.refreshTimestamp(),
            e.trackPageview())
        })
    }
    function zv(e) {
        try {
            return e.defaultView && e.defaultView.frameElement || null
        } catch (e) {
            return null
        }
    }
    function Wv(e) {
        this.time = e.time,
        this.target = e.target,
        this.rootBounds = Kv(e.rootBounds),
        this.boundingClientRect = Kv(e.boundingClientRect),
        this.intersectionRect = Kv(e.intersectionRect || Qv()),
        this.isIntersecting = !!e.intersectionRect;
        var e = this.boundingClientRect
          , e = e.width * e.height
          , t = this.intersectionRect
          , t = t.width * t.height;
        this.intersectionRatio = e ? Number((t / e).toFixed(4)) : this.isIntersecting ? 1 : 0
    }
    function D(e, t) {
        var n, r, o, t = t || {};
        if ("function" != typeof e)
            throw new Error("callback must be a function");
        if (t.root && 1 != t.root.nodeType)
            throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this),
        r = this.THROTTLE_TIMEOUT,
        o = null,
        function() {
            o = o || setTimeout(function() {
                n(),
                o = null
            }, r)
        }
        ),
        this._callback = e,
        this._observationTargets = [],
        this._queuedEntries = [],
        this._rootMarginValues = this._parseRootMargin(t.rootMargin),
        this.thresholds = this._initThresholds(t.threshold),
        this.root = t.root || null,
        this.rootMargin = this._rootMarginValues.map(function(e) {
            return e.value + e.unit
        }).join(" "),
        this._monitoringDocuments = [],
        this._monitoringUnsubscribes = []
    }
    function Jv(e, t, n, r) {
        "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
    }
    function Gv(e, t, n, r) {
        "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
    }
    function Vv(e) {
        var t;
        try {
            t = e.getBoundingClientRect()
        } catch (e) {}
        return t ? t.width && t.height ? t : {
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.right - t.left,
            height: t.bottom - t.top
        } : Qv()
    }
    function Qv() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }
    function Kv(e) {
        return !e || "x"in e ? e : {
            top: e.top,
            y: e.top,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            right: e.right,
            width: e.width,
            height: e.height
        }
    }
    function Xv(e, t) {
        var n = t.top - e.top
          , e = t.left - e.left;
        return {
            top: n,
            left: e,
            height: t.height,
            width: t.width,
            bottom: n + t.height,
            right: e + t.width
        }
    }
    function Yv(e, t) {
        for (var n = t; n; ) {
            if (n == e)
                return !0;
            n = $v(n)
        }
        return !1
    }
    function $v(e) {
        var t = e.parentNode;
        return 9 == e.nodeType && e != jv ? zv(e) : t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
    }
    "object" == typeof window && ("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype ? "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
            return 0 < this.intersectionRatio
        }
    }) : (jv = function() {
        for (var e = window.document, t = zv(e); t; )
            t = zv(e = t.ownerDocument);
        return e
    }(),
    Dv = [],
    Mv = Rv = null,
    D.prototype.THROTTLE_TIMEOUT = 100,
    D.prototype.POLL_INTERVAL = null,
    D.prototype.USE_MUTATION_OBSERVER = !0,
    D._setupCrossOriginUpdater = function() {
        return Rv = Rv || function(e, t) {
            Mv = e && t ? Xv(e, t) : Qv(),
            Dv.forEach(function(e) {
                e._checkForIntersections()
            })
        }
    }
    ,
    D._resetCrossOriginUpdater = function() {
        Mv = Rv = null
    }
    ,
    D.prototype.observe = function(t) {
        var e = this._observationTargets.some(function(e) {
            return e.element == t
        });
        if (!e) {
            if (!t || 1 != t.nodeType)
                throw new Error("target must be an Element");
            this._registerInstance(),
            this._observationTargets.push({
                element: t,
                entry: null
            }),
            this._monitorIntersections(t.ownerDocument),
            this._checkForIntersections()
        }
    }
    ,
    D.prototype.unobserve = function(t) {
        this._observationTargets = this._observationTargets.filter(function(e) {
            return e.element != t
        }),
        this._unmonitorIntersections(t.ownerDocument),
        0 == this._observationTargets.length && this._unregisterInstance()
    }
    ,
    D.prototype.disconnect = function() {
        this._observationTargets = [],
        this._unmonitorAllIntersections(),
        this._unregisterInstance()
    }
    ,
    D.prototype.takeRecords = function() {
        var e = this._queuedEntries.slice();
        return this._queuedEntries = [],
        e
    }
    ,
    D.prototype._initThresholds = function(e) {
        e = e || [0];
        return (e = Array.isArray(e) ? e : [e]).sort().filter(function(e, t, n) {
            if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e)
                throw new Error("threshold must be a number between 0 and 1 inclusively");
            return e !== n[t - 1]
        })
    }
    ,
    D.prototype._parseRootMargin = function(e) {
        e = (e || "0px").split(/\s+/).map(function(e) {
            e = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
            if (e)
                return {
                    value: parseFloat(e[1]),
                    unit: e[2]
                };
            throw new Error("rootMargin must be specified in pixels or percent")
        });
        return e[1] = e[1] || e[0],
        e[2] = e[2] || e[0],
        e[3] = e[3] || e[1],
        e
    }
    ,
    D.prototype._monitorIntersections = function(t) {
        var n, r, o, e = t.defaultView;
        e && -1 == this._monitoringDocuments.indexOf(t) && (n = this._checkForIntersections,
        o = r = null,
        this.POLL_INTERVAL ? r = e.setInterval(n, this.POLL_INTERVAL) : (Jv(e, "resize", n, !0),
        Jv(t, "scroll", n, !0),
        this.USE_MUTATION_OBSERVER && "MutationObserver"in e && (o = new e.MutationObserver(n)).observe(t, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        })),
        this._monitoringDocuments.push(t),
        this._monitoringUnsubscribes.push(function() {
            var e = t.defaultView;
            e && (r && e.clearInterval(r),
            Gv(e, "resize", n, !0)),
            Gv(t, "scroll", n, !0),
            o && o.disconnect()
        }),
        t != (this.root && this.root.ownerDocument || jv) && (e = zv(t)) && this._monitorIntersections(e.ownerDocument))
    }
    ,
    D.prototype._unmonitorIntersections = function(r) {
        var o, e, t = this._monitoringDocuments.indexOf(r);
        -1 != t && (o = this.root && this.root.ownerDocument || jv,
        this._observationTargets.some(function(e) {
            if ((t = e.element.ownerDocument) == r)
                return !0;
            for (; t && t != o; ) {
                var t, n = zv(t);
                if ((t = n && n.ownerDocument) == r)
                    return !0
            }
            return !1
        }) || (e = this._monitoringUnsubscribes[t],
        this._monitoringDocuments.splice(t, 1),
        this._monitoringUnsubscribes.splice(t, 1),
        e(),
        r != o && (t = zv(r)) && this._unmonitorIntersections(t.ownerDocument)))
    }
    ,
    D.prototype._unmonitorAllIntersections = function() {
        var e = this._monitoringUnsubscribes.slice(0);
        this._monitoringDocuments.length = 0;
        for (var t = this._monitoringUnsubscribes.length = 0; t < e.length; t++)
            e[t]()
    }
    ,
    D.prototype._checkForIntersections = function() {
        var a, s;
        !this.root && Rv && !Mv || (a = this._rootIsInDom(),
        s = a ? this._getRootRect() : Qv(),
        this._observationTargets.forEach(function(e) {
            var t = e.element
              , n = Vv(t)
              , r = this._rootContainsTarget(t)
              , o = e.entry
              , i = a && r && this._computeTargetAndRootIntersection(t, n, s)
              , e = e.entry = new Wv({
                time: window.performance && performance.now && performance.now(),
                target: t,
                boundingClientRect: n,
                rootBounds: Rv && !this.root ? null : s,
                intersectionRect: i
            });
            o ? a && r ? this._hasCrossedThreshold(o, e) && this._queuedEntries.push(e) : o && o.isIntersecting && this._queuedEntries.push(e) : this._queuedEntries.push(e)
        }, this),
        this._queuedEntries.length && this._callback(this.takeRecords(), this))
    }
    ,
    D.prototype._computeTargetAndRootIntersection = function(e, t, n) {
        if ("none" != window.getComputedStyle(e).display) {
            for (var r, o, i = t, a = $v(e), s = !1; !s && a; ) {
                var c, u, p, f = null, l = 1 == a.nodeType ? window.getComputedStyle(a) : {};
                if ("none" == l.display)
                    return null;
                if (a == this.root || 9 == a.nodeType ? (s = !0,
                a == this.root || a == jv ? Rv && !this.root ? !Mv || 0 == Mv.width && 0 == Mv.height ? i = f = a = null : f = Mv : f = n : (c = (p = $v(a)) && Vv(p),
                u = p && this._computeTargetAndRootIntersection(p, c, n),
                c && u ? (a = p,
                f = Xv(c, u)) : i = a = null)) : a != (p = a.ownerDocument).body && a != p.documentElement && "visible" != l.overflow && (f = Vv(a)),
                f && (c = f,
                u = i,
                o = r = f = l = void 0,
                l = Math.max(c.top, u.top),
                f = Math.min(c.bottom, u.bottom),
                r = Math.max(c.left, u.left),
                c = Math.min(c.right, u.right),
                o = f - l,
                i = 0 <= (u = c - r) && 0 <= o ? {
                    top: l,
                    bottom: f,
                    left: r,
                    right: c,
                    width: u,
                    height: o
                } : null),
                !i)
                    break;
                a = a && $v(a)
            }
            return i
        }
    }
    ,
    D.prototype._getRootRect = function() {
        var e, t;
        return t = this.root ? Vv(this.root) : (t = jv.documentElement,
        e = jv.body,
        {
            top: 0,
            left: 0,
            right: t.clientWidth || e.clientWidth,
            width: t.clientWidth || e.clientWidth,
            bottom: t.clientHeight || e.clientHeight,
            height: t.clientHeight || e.clientHeight
        }),
        this._expandRectByRootMargin(t)
    }
    ,
    D.prototype._expandRectByRootMargin = function(n) {
        var e = this._rootMarginValues.map(function(e, t) {
            return "px" == e.unit ? e.value : e.value * (t % 2 ? n.width : n.height) / 100
        })
          , e = {
            top: n.top - e[0],
            right: n.right + e[1],
            bottom: n.bottom + e[2],
            left: n.left - e[3]
        };
        return e.width = e.right - e.left,
        e.height = e.bottom - e.top,
        e
    }
    ,
    D.prototype._hasCrossedThreshold = function(e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1
          , r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== r)
            for (var o = 0; o < this.thresholds.length; o++) {
                var i = this.thresholds[o];
                if (i == n || i == r || i < n != i < r)
                    return !0
            }
    }
    ,
    D.prototype._rootIsInDom = function() {
        return !this.root || Yv(jv, this.root)
    }
    ,
    D.prototype._rootContainsTarget = function(e) {
        return Yv(this.root || jv, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
    }
    ,
    D.prototype._registerInstance = function() {
        Dv.indexOf(this) < 0 && Dv.push(this)
    }
    ,
    D.prototype._unregisterInstance = function() {
        var e = Dv.indexOf(this);
        -1 != e && Dv.splice(e, 1)
    }
    ,
    window.IntersectionObserver = D,
    window.IntersectionObserverEntry = Wv));
    var Zv = [];
    function eg() {
        Zv.forEach(function(t) {
            var e = y.querySelectorAll(t.selector);
            Array.prototype.slice.call(e).forEach(function(e) {
                e.load || (e.load = !0,
                t.fn(e))
            })
        })
    }
    function tg(n) {
        function r(e) {
            e.forEach(function(e) {
                var t = jm(e.target.getAttribute(ym))
                  , t = t && t.intersectionRatio || 0;
                e.intersectionRatio > t && (e.target.setAttribute(_m, "impressed"),
                n.trackImpression(e.target),
                Bv.unobserve(e.target))
            })
        }
        var o = {
            threshold: [1e-4, .25, .45, .65, .85, 1]
        };
        Um(function() {
            var e, t;
            Qr("impression") && (Bv = new IntersectionObserver(r,o),
            e = "[" + _m + "]",
            t = function(e) {
                var t;
                "" !== (t = (t = e).getAttribute(_m)) && "true" !== t || Bv.observe(e)
            }
            ,
            Zv.push({
                selector: e,
                fn: t
            }),
            qv || (qv = new MutationObserver(eg)).observe(y.body, {
                childList: !0,
                subtree: !0
            }),
            eg())
        })
    }
    function ng() {
        var t;
        Hv(this),
        Fv(t = this),
        cv(function() {
            Fv(t)
        }),
        m.addEventListener("pageshow", function(e) {
            !0 !== e.persisted && "back_forward" !== ov() || Fv(t)
        }),
        h.on("reportSuccess", function(e) {
            e.data.forEach(function(e) {
                "page_view" === e.subtype && h.emit("reportSpiderPageview", e)
            })
        }),
        tg(this)
    }
    function rg() {
        var a = this;
        this.hooks.push("beforeNavigate", function(e, t) {
            var n, r = e.url, o = e.value, i = e.context;
            "weidianbuyer:" === Nm(r).protocol ? ((n = r) && 0 <= n.indexOf("weidianbuyer://wdb/webview") && (n = Dm("url", r)) ? (i = i.transferActionBy(n, o),
            e.url = Lt(r, {
                url: i
            })) : (a.trackAction(o),
            e.url = r),
            t && t(new Error(""))) : t && t()
        })
    }
    var og = /weidian.com\/item\.html.*(item)ID=(\d+)/
      , ig = /weidian\.com\/?\?.*(user)id=(\d+)/
      , ag = {
        NAVIGATE_TO: "navigateTo",
        SWITCH_TAB: "switchTab"
    }
      , sg = {
        item: {
            minaPath: "/lib/item/dist/pages/index/index?itemId=",
            actionName: j.ITEM
        },
        user: {
            minaPath: "/lib/shop/dist/pages/index/index?shopId=",
            actionName: j.SHOP
        }
    };
    function cg() {
        var s = this;
        this.hooks.push("beforeNavigate", function(e, t) {
            var n, r, o, i = e.url, a = e.action;
            Lr() ? ("thirdApp" !== Dm("invoke") && "thirdApp" !== Dm("vc_invoke") || (i = Lt(i, {
                invoke: "thirdApp"
            }),
            e.url = i),
            "0" === Dm("urlIntercept", i) ? t && t() : (n = (n = i).match(og) || n.match(ig),
            "wx_zhuanzhuan" !== Dm("vc_minip") && n ? (o = i,
            r = sg[(r = n)[1]].minaPath + r[2],
            (o = (o = (o = o).match(/^[^\?#]*\?([^#]*)/)) ? o[1] : "") && (r += "&" + o),
            o = r,
            r = a,
            a = s,
            "item" === (n = n)[1] && (r.actionName = j.ITEM,
            r.actionArgs = c({}, r.actionArgs, {
                itemId: n[2]
            })),
            "user" === n[1] && (r.actionName = j.SHOP,
            r.actionArgs = c({}, r.actionArgs, {
                shopId: n[2]
            })),
            a.trackAction(r),
            (n = m.jWeixin || m.wx) && (n.miniProgram[ag.NAVIGATE_TO]({
                url: o
            }),
            n.miniProgram[ag.SWITCH_TAB]({
                url: o
            })),
            e.url = "javascript:",
            t && t(new Error(""))) : (e.url = i,
            t && t()))) : t && t()
        })
    }
    function ug() {
        this.hooks.push("beforeNavigate", function(e, t) {
            try {
                m.multiDomainRuleMap && Kr("spider") && !xr() && !Cr() && (e.url = Za(e.url, m.multiDomainRuleMap)),
                !m.multiDomainRuleMap || Vr("privateDomain") || xr() || (Lr() || (e.url = Xa(e.url, {
                    dataMap: m.multiDomainRuleMap
                })),
                Lr() && "weituantuan" === Dm("vc_invoke") && (e.url = Xa(e.url, {
                    dataMap: m.multiDomainRuleMap
                })))
            } catch (e) {
                w(e)
            }
            t && t()
        })
    }
    function pg() {
        rg.call(this),
        function() {
            var o = this;
            this.hooks.push("beforeNavigate", function(e, t) {
                var n = e.url
                  , r = e.value;
                Lo(n) ? t && t() : (o.trackAction(r),
                e.url = n,
                t && t(new Error("")))
            })
        }
        .call(this),
        cg.call(this),
        ug.call(this),
        function() {
            this.hooks.push("beforeNavigate", function(e, t) {
                var n = Object.create(null)
                  , r = Dm("share_relation");
                c(n, Vm(), Nt(e.url)),
                r && (n.share_relation = r),
                e.url = Lt(e.url, n),
                t && t()
            })
        }
        .call(this)
    }
    function fg(e) {
        var t, n = (n = m.name.match(/^visual-window:([\S\s]+)$/)) && n[1].split("|"), r = ["assets.geilicdn.com", "assets.pre.geilicdn.com", "assets.daily.geilicdn.com", "h5.dev.weidian.com"];
        m !== m.top && n && n.length && (m.spider_visual ? lg(e) : (n = n.filter(function(e) {
            e = Nm(e);
            return Lm(e) && -1 < r.indexOf(e.hostname)
        }),
        t = [],
        n && n.forEach(function(e) {
            return t.push(to(e))
        }),
        Promise.all(t).then(function() {
            return lg(e)
        })))
    }
    function lg(e) {
        var e = e.get()
          , t = e.curSpm
          , e = e.curPageArgs;
        t && m.spider_visual.init(t, e)
    }
    function dg() {
        var e = this;
        h.on("reportSpiderPageview", function() {
            fg(e)
        })
    }
    function hg() {
        if (navigator.userAgent.match(/iPhone OS [\d_]+/)) {
            var e = y.createElement("style");
            e.type = "text/css",
            e.innerHTML = '    [data-spider=""],     [data-spider-action-type],     [data-spider-action-name] {        cursor: pointer;     }';
            try {
                y.getElementsByTagName("head").item(0).appendChild(e)
            } catch (e) {}
        }
    }
    var mg = "__kernel__pecker__tapper"
      , o = window
      , vg = o.localStorage
      , gg = (/\.(dev|daily|pre)\./.test(o.location.hostname) ? "https://logtake.daily.weidian.com" : "https://logtake.weidian.com") + "/h5collector/webcollect/3.0";
    function yg(t) {
        var n = new window.XMLHttpRequest;
        n.onreadystatechange = function() {
            var e;
            4 == n.readyState && (200 == n.status ? (e = n.responseText,
            t.success(function(e) {
                try {
                    var t = JSON.parse(e);
                    return "object" == typeof t && null !== t ? t : {}
                } catch (e) {
                    return {}
                }
            }(e))) : t.error && t.error())
        }
        ,
        n.open("POST", t.url, !0),
        n.withCredentials = !0,
        t && (t.timeout && (n.timeout = t.timeout),
        n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        n.setRequestHeader("Accept", "application/json")),
        t.data instanceof FormData || (t.data = function(e) {
            var t, n = [], r = ["string", "boolean", "number"];
            for (t in e)
                if ("" !== t && -1 < r.indexOf(typeof e[t]))
                    switch (e[t]) {
                    case !0:
                        n.push(encodeURIComponent(t));
                        break;
                    case !1:
                        break;
                    default:
                        n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]))
                    }
            return 0 === n.length ? "" : n.join("&")
        }(t.data)),
        n.send(t.data)
    }
    function _g() {}
    function wg() {
        this.tapperSend = !1,
        this.lockLogCount = 0
    }
    wg.getInstance = function() {
        return this.instance || (this.instance = new wg,
        this.instance)
    }
    ,
    wg.prototype.initTapperData = function() {
        this.setStorageData({
            startTime: +new Date,
            logCount: 0
        })
    }
    ,
    wg.prototype.isTapperSend = function() {
        return this.tapperSend
    }
    ,
    wg.prototype.getLockLogCount = function() {
        return this.lockLogCount
    }
    ,
    wg.prototype.changeTapperSend = function() {
        this.tapperSend = !0
    }
    ,
    wg.prototype.addLockLogCount = function(e) {
        this.lockLogCount += e = void 0 === e ? 1 : e
    }
    ,
    wg.prototype.cleanLockLog = function() {
        this.lockLogCount = 0
    }
    ,
    wg.prototype.tap = function(e) {
        void 0 === e && (e = 1);
        var t, n = this.getTapperData();
        n && (t = n.startTime,
        n = n.logCount,
        this.setStorageData({
            startTime: t,
            logCount: n + e
        }))
    }
    ,
    wg.prototype.getTapperData = function() {
        return this.getStorageData()
    }
    ,
    wg.prototype.sendTapData = function(n, r) {
        return new Promise(function(e, t) {
            yg({
                url: gg,
                data: {
                    log: function(e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return ""
                        }
                    }({
                        meta: n,
                        data: [{
                            detail: r,
                            message: "pecker_tapper_data",
                            name: "info",
                            report_time: +new Date,
                            subtype: "custom",
                            type: "log"
                        }]
                    })
                },
                success: e,
                error: t
            })
        }
        ).catch(_g)
    }
    ,
    wg.prototype.setStorageData = function(e) {
        try {
            vg.setItem(mg, JSON.stringify(e))
        } catch (e) {}
    }
    ,
    wg.prototype.getStorageData = function() {
        try {
            var e = JSON.parse(vg.getItem(mg) || "");
            return this.isTapperData(e) ? e : null
        } catch (e) {
            return null
        }
    }
    ,
    wg.prototype.isTapperData = function(e) {
        if ("[object Object]" !== toString.call(e))
            return !1;
        var t = e.startTime
          , e = e.logCount;
        return "number" == typeof t && "number" == typeof e
    }
    ;
    var bg = wg.getInstance();
    function Eg(e) {
        void 0 === e && (e = 1);
        try {
            bg.isTapperSend() ? bg.tap(e) : bg.addLockLogCount(e)
        } catch (e) {}
    }
    function Sg() {
        var t = this;
        pv.on(lv, function() {
            xs(function(e) {
                e = e && e.get();
                try {
                    var t = bg.getTapperData()
                      , n = (t && bg.sendTapData(e, t),
                    bg.changeTapperSend(),
                    bg.initTapperData(),
                    bg.getLockLogCount());
                    0 < n && (bg.tap(n),
                    bg.cleanLockLog())
                } catch (e) {}
            })
        }),
        pv.on("report_prev_data", function() {
            var e = t.get().prevData;
            e && e.prev_spm && fv && Eg(-1)
        }),
        pv.on(dv, function() {
            fv && Eg()
        })
    }
    C = {
        getFirstScreenInfo: f,
        ignoreRequestUrl: f,
        init: f,
        onReport: f,
        perf: {
            docRetrieveEnd: f,
            docRetrieveStart: f,
            install: f,
            mark: f,
            measure: f,
            onRecord: !1,
            recordFirstScreen: f,
            reportTime: f,
            xhrLoad: f
        },
        reportPerf: f
    },
    r = {
        debug: f,
        info: f,
        error: f,
        init: f,
        isNotValidConfig: !1,
        report: f,
        setError: f,
        warn: f,
        _erroCode: {
            ">": null,
            ">=": null,
            "<": null,
            "<=": null,
            "=": null,
            "!=": [0]
        }
    },
    t = window.navigator.userAgent,
    _ = {
        QQ_BROWSER: "qqbrowser",
        WX: "wx",
        QQ: "qq",
        APP: "app",
        VBUYER: "vbuyer",
        WD: "kdweidian"
    };
    Ne = "0.0.0",
    x = "browser",
    o = null,
    /MQQBrowser\//i.test(t) && (x = "qqbrowser"),
    /MicroMessenger/i.test(t) && (x = "wx"),
    /QQ\/([\d\.]+)/i.test(t) && (x = "qq"),
    /WDAPP\(/.test(t) && (x = "app"),
    /WDAPP\(WDBuyer/.test(t) && (x = "vbuyer",
    o = t.match(/WDAPP\(WDBuyer\/([\d\.]+)/)),
    /WDAPP\(WD\//.test(t) && (x = "kdweidian",
    o = t.match(/WDAPP\(WD\/([\d\.]+)/));
    var kg, Tg, Og, Ag, Pg, Ig, t = {
        name: x,
        version: Ne = o ? o && o[1] : Ne,
        constant: _,
        isWx: x === _.WX,
        isQQ: x === _.QQ,
        isQQBrowser: x === _.QQ_BROWSER,
        isVbuyer: x === _.VBUYER,
        isWD: x === _.WD,
        isApp: x === _.WD || x === _.VBUYER || x === _.APP
    }, o = (kg = new Re,
    kl() && l([nh, Vl, Fl, Dd, th], function(e) {
        return kg.use(e)
    }),
    {
        use: function(e) {
            kg.use(e)
        },
        measure: function(e) {
            h.emit("reportPerformanceTiming", e)
        }
    }), Ne = ((Tg = new Lc).use(cm),
    Tg.use(um),
    Og = {
        option: function(e) {
            return Tg.option(e),
            Og
        },
        evoke: function(e) {
            return Tg.evoke(e),
            Og
        },
        getUrl: sm,
        use: function(e) {
            return Tg.use(e),
            Og
        },
        catch: function(e) {
            return Tg.catch(e),
            Og
        }
    },
    dm.call(Og, Tg),
    Og), x = (Ag = new n,
    fv && Ag.use(Sg),
    l([ng, pg, dg, hg], function(e) {
        return Ag.use(e)
    }),
    {
        use: function(e) {
            return Ag.use(e)
        },
        trackPageview: function(e) {
            var t = Vr("spider")
              , n = arguments;
            t ? Ag.trackPageview(n.length ? n[n.length - 1] : void 0) : Vt("手动上报pageview之前需在body上声明禁用spider自动pageview data-spider-disabled=[spider]")
        },
        trackAction: function(e, t) {
            Ag.trackAction(e, t)
        },
        trackImpression: function(e, t) {
            Ag.trackImpression(e, t)
        },
        transferAction: function(e) {
            Ag.transferAction(e)
        },
        transferActionBy: function(e, t, n) {
            return Ag.transferActionBy(e, t, n)
        },
        extractActionFrom: Hm,
        constants: j,
        getClickElement: function() {
            return Ag.get().curSpiderElement
        },
        impression: {
            traverse: f,
            observe: f,
            disconnect: f
        },
        getCookie: ev,
        getSearchParams: tv,
        disableAutoReport: f,
        reset: f,
        init: function(e) {
            Ag.init(e)
        },
        VERSION: "0.1.3"
    }), _ = (tl().then(function(e) {
        e && (Pg = new ff,
        l([Ef, Lf, Df, Bf, Jf, Qf, Zf, el], function(e) {
            return Pg.use(e)
        }))
    }),
    {
        use: function(e) {
            Pg && Pg.use(e)
        }
    }), Re = (Ig = new I,
    l([kp, Uu, up, Ep], function(e) {
        return Ig.use(e)
    }),
    {
        use: function(e) {
            Ig.use(e)
        },
        error: function(e) {
            h.emit("reportException", e)
        },
        info: function(e) {
            h.emit("reportInformation", e)
        },
        warn: function(e) {
            h.emit("reportWarn", e)
        }
    });
    function xg(e, t, n) {
        h.on(e, t, n)
    }
    function Cg(e, t, n) {
        h.once(e, t, n)
    }
    function Lg(e, t) {
        h.emit(e, t)
    }
    return m.pathTracker = Ne,
    m.vcollect = {
        ua: t,
        reportError: f,
        setError: f
    },
    m.owl = C,
    m.cat = r,
    m.spider = x,
    m.pecker = {
        on: xg,
        once: Cg,
        emit: Lg,
        bat: Re,
        interaction: _,
        spider: x,
        owl: o,
        pathtracker: Ne
    },
    R.bat = Re,
    R.emit = Lg,
    R.interaction = _,
    R.on = xg,
    R.once = Cg,
    R.owl = o,
    R.pathtracker = Ne,
    R.spider = x,
    R
}({});

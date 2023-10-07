var peckerwood = function (R) {
    "use strict";
    var q = function (e, t) {
        return (q = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
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
        q(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    var M = function () {
        return (M = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function U(e, t) {
        var n = {};
        for (o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }
    function B(t) {
        return function (e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }
    function v(e) {
        return null == e
    }
    function u(e) {
        return null == e || "" === e
    }
    function W(e) {
        return B("Number")(e)
    }
    function s(e) {
        return B("String")(e)
    }
    function H(e) {
        return B("Error")(e)
    }
    function a(e) {
        return B("Array")(e)
    }
    function c(e) {
        return "function" == typeof e
    }
    function J(e) {
        return B("Date")(e)
    }
    function V(e) {
        return B("Boolean")(e)
    }
    function g(e) {
        return B("Object")(e)
    }
    function F(e) {
        return null !== e && "object" == typeof e
    }
    function G(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function Q(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function p(e) {
        return Array.prototype.slice.call(e)
    }
    function z(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function l() { }
    function K(n, r) {
        var o;
        return void 0 === r && (r = 200),
            function () {
                var e = this
                    , t = arguments;
                return clearTimeout(o),
                    o = setTimeout(function () {
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
    function f(e, t) {
        if (a(e))
            for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
        else if (g(e))
            for (var o in e)
                z(e, o) && t.call(null, e[o], o, e)
    }
    function d(e) {
        for (var n, r, t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return r = V(e) ? (n = e,
            t.shift()) : e,
            f(t, function (e) {
                f(e, function (e, t) {
                    n && (a(e) || g(e)) ? (a(e) ? a(r[t]) || (r[t] = []) : g(r[t]) || (r[t] = {}),
                        d(n, r[t], e)) : r[t] = e
                })
            }),
            r
    }
    var t = "visitorid"
        , n = "sessionid"
        , $ = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function X(t) {
        var n = this.constructor;
        return this.then(function (e) {
            return n.resolve(t()).then(function () {
                return e
            })
        }, function (e) {
            return n.resolve(t()).then(function () {
                return n.reject(e)
            })
        })
    }
    function Z(n) {
        return new this(function (o, e) {
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
                            return void r.call(e, function (e) {
                                t(n, e)
                            }, function (e) {
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
    function ee(e, t) {
        this.name = "AggregateError",
            this.errors = e,
            this.message = t || ""
    }
    function te(i) {
        var a = this;
        return new a(function (e, t) {
            if (!i || void 0 === i.length)
                return t(new TypeError("Promise.any accepts an array"));
            var n = Array.prototype.slice.call(i);
            if (0 === n.length)
                return t();
            for (var r = [], o = 0; o < n.length; o++)
                try {
                    a.resolve(n[o]).then(e).catch(function (e) {
                        r.push(e),
                            r.length === n.length && t(new ee(r, "All promises were rejected"))
                    })
                } catch (e) {
                    t(e)
                }
        }
        )
    }
    ee.prototype = Error.prototype;
    var ne = setTimeout;
    function re(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function oe() { }
    function i(e) {
        if (!(this instanceof i))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
            this._handled = !1,
            this._value = void 0,
            this._deferreds = [],
            pe(e, this)
    }
    function ie(n, r) {
        for (; 3 === n._state;)
            n = n._value;
        0 === n._state ? n._deferreds.push(r) : (n._handled = !0,
            i._immediateFn(function () {
                var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null === t)
                    (1 === n._state ? ae : se)(r.promise, n._value);
                else {
                    try {
                        e = t(n._value)
                    } catch (e) {
                        return void se(r.promise, e)
                    }
                    ae(r.promise, e)
                }
            }))
    }
    function ae(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var n = e.then;
                if (e instanceof i)
                    return t._state = 3,
                        t._value = e,
                        void ce(t);
                if ("function" == typeof n)
                    return void pe((r = n,
                        o = e,
                        function () {
                            r.apply(o, arguments)
                        }
                    ), t)
            }
            t._state = 1,
                t._value = e,
                ce(t)
        } catch (e) {
            se(t, e)
        }
        var r, o
    }
    function se(e, t) {
        e._state = 2,
            e._value = t,
            ce(e)
    }
    function ce(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function () {
            e._handled || i._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++)
            ie(e, e._deferreds[t]);
        e._deferreds = null
    }
    function ue(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null,
            this.onRejected = "function" == typeof t ? t : null,
            this.promise = n
    }
    function pe(e, t) {
        var n = !1;
        try {
            e(function (e) {
                n || (n = !0,
                    ae(t, e))
            }, function (e) {
                n || (n = !0,
                    se(t, e))
            })
        } catch (e) {
            if (n)
                return;
            n = !0,
                se(t, e)
        }
    }
    i.prototype.catch = function (e) {
        return this.then(null, e)
    }
        ,
        i.prototype.then = function (e, t) {
            var n = new this.constructor(oe);
            return ie(this, new ue(e, t, n)),
                n
        }
        ,
        i.prototype.finally = X,
        i.all = function (t) {
            return new i(function (o, i) {
                if (!re(t))
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
                                    return void r.call(e, function (e) {
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
        i.any = te,
        i.allSettled = Z,
        i.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === i ? t : new i(function (e) {
                e(t)
            }
            )
        }
        ,
        i.reject = function (n) {
            return new i(function (e, t) {
                t(n)
            }
            )
        }
        ,
        i.race = function (o) {
            return new i(function (e, t) {
                if (!re(o))
                    return t(new TypeError("Promise.race accepts an array"));
                for (var n = 0, r = o.length; n < r; n++)
                    i.resolve(o[n]).then(e, t)
            }
            )
        }
        ,
        i._immediateFn = "function" == typeof setImmediate ? function (e) {
            setImmediate(e)
        }
            : function (e) {
                ne(e, 0)
            }
        ,
        i._unhandledRejectionFn = function (e) { }
        ;
    var r = function () {
        if ("undefined" != typeof self)
            return self;
        if ("undefined" != typeof window)
            return window;
        if (void 0 !== $)
            return $;
        throw new Error("unable to locate global object")
    }();
    function le(e, t) {
        if (e === t)
            return 1;
        if (e instanceof Object && t instanceof Object && e.constructor === t.constructor) {
            for (var n in e)
                if (z(e, n)) {
                    if (!z(t, n))
                        return;
                    if (e[n] !== t[n]) {
                        if ("object" != typeof e[n])
                            return;
                        if (!le(e[n], t[n]))
                            return
                    }
                }
            for (n in t)
                if (z(t, n) && !z(e, n))
                    return;
            return 1
        }
    }
    "function" != typeof r.Promise ? r.Promise = i : (r.Promise.prototype.finally || (r.Promise.prototype.finally = X),
        r.Promise.allSettled || (r.Promise.allSettled = Z),
        r.Promise.any || (r.Promise.any = te));
    (r = {}).rejected = "reject",
        r.resolved = "resolve";
    var fe = r
        , de = (he.prototype.push = function (e) {
            var t;
            this.options.stateful && "pending" !== this.status ? c(t = e[fe[this.status]]) && t.apply(void 0, this.args) : -1 === this.queue.indexOf(e) && this.queue.push(e)
        }
            ,
            he.prototype.resolve = function () {
                this.execute("resolved", p(arguments))
            }
            ,
            he.prototype.reject = function () {
                this.execute("rejected", p(arguments))
            }
            ,
            he.prototype.execute = function (t, n) {
                this.queue.forEach(function (e) {
                    e = e[fe[t]];
                    c(e) && e.apply(void 0, n)
                }),
                    this.options.stateful && (this.status = t,
                        this.args = n,
                        this.queue.length = 0)
            }
            ,
            he);
    function he(e) {
        void 0 === e && (e = {
            stateful: !0
        }),
            this.queue = [],
            this.status = "pending",
            this.args = [],
            this.options = e
    }
    function me(t) {
        try {
            return JSON.parse(t)
        } catch (e) {
            return t
        }
    }
    function h(e) {
        try {
            return F(e) && !Object.keys(e).length ? "" : JSON.stringify(e)
        } catch (e) {
            return ""
        }
    }
    ge.prototype.push = function (e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
            this
    }
        ,
        ge.prototype.invoke = function (e, t) {
            e = this.hooks[e];
            return e && e.length && e.forEach(function (e) {
                e(t)
            }),
                this
        }
        ,
        ge.prototype.invokeWaterfall = function (e, n, r) {
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
    var ve = ge;
    function ge() {
        this.hooks = Object.create(null)
    }
    ye.prototype.on = function (e, t, n) {
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
        ye.prototype.once = function (t, n, e) {
            void 0 === e && (e = !1);
            var r = this;
            return "function" != typeof n ? this : this.on(t, function e() {
                r.off(t, e),
                    n.apply(this, p(arguments))
            }, e)
        }
        ,
        ye.prototype.emit = function (e, t) {
            var n = this.handlers[e] || [];
            return n && (n.forEach(function (e) {
                e.call(void 0, t)
            }),
                n.__args = t,
                n.__emited = !0,
                this.handlers[e] = n),
                this
        }
        ,
        ye.prototype.off = function (e, t) {
            e = this.handlers[e];
            return e && "function" == typeof t && -1 !== (t = e.indexOf(t)) && e.splice(t, 1),
                this
        }
        ;
    r = ye;
    function ye() {
        this.handlers = {}
    }
    var _e, we, m = new r, be = (_e = function (e) {
        for (var t, n, r, o, i, a, s, c, u = function (e, t) {
            return e << t | e >>> 32 - t
        }, p = function (e) {
            for (var t = "", n = 7; 0 <= n; n--)
                t += (e >>> 4 * n & 15).toString(16);
            return t
        }, l = new Array(80), f = 1732584193, d = 4023233417, h = 2562383102, m = 271733878, v = 3285377520, g = (e = unescape(encodeURIComponent(e))).length, y = [], _ = 0; _ < g - 3; _ += 4)
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
        for (y.push(_); y.length % 16 != 14;)
            y.push(0);
        for (y.push(g >>> 29),
            y.push(g << 3 & 4294967295),
            t = 0; t < y.length; t += 16) {
            for (_ = 0; _ < 16; _++)
                l[_] = y[t + _];
            for (_ = 16; _ <= 79; _++)
                l[_] = u(l[_ - 3] ^ l[_ - 8] ^ l[_ - 14] ^ l[_ - 16], 1);
            for (r = f,
                o = d,
                i = h,
                a = m,
                s = v,
                _ = 0; _ <= 19; _++)
                c = u(r, 5) + (o & i | ~o & a) + s + l[_] + 1518500249 & 4294967295,
                    s = a,
                    a = i,
                    i = u(o, 30),
                    o = r,
                    r = c;
            for (_ = 20; _ <= 39; _++)
                c = u(r, 5) + (o ^ i ^ a) + s + l[_] + 1859775393 & 4294967295,
                    s = a,
                    a = i,
                    i = u(o, 30),
                    o = r,
                    r = c;
            for (_ = 40; _ <= 59; _++)
                c = u(r, 5) + (o & i | o & a | i & a) + s + l[_] + 2400959708 & 4294967295,
                    s = a,
                    a = i,
                    i = u(o, 30),
                    o = r,
                    r = c;
            for (_ = 60; _ <= 79; _++)
                c = u(r, 5) + (o ^ i ^ a) + s + l[_] + 3395469782 & 4294967295,
                    s = a,
                    a = i,
                    i = u(o, 30),
                    o = r,
                    r = c;
            f = f + r & 4294967295,
                d = d + o & 4294967295,
                h = h + i & 4294967295,
                m = m + a & 4294967295,
                v = v + s & 4294967295
        }
        return (c = p(f) + p(d) + p(h) + p(m) + p(v)).toLowerCase()
    }
        ,
        we = Object.create(null),
        function (e) {
            return we[e] || (we[e] = _e(e))
        }
    );
    function Ee(e, t) {
        return void 0 === t && (t = 32),
            be(e).slice(0, t)
    }
    var Se = Promise.resolve();
    function ke(e) {
        Se.then(e)
    }
    var Te = Object.create(null);
    function Oe(e, t) {
        return z(Te, e) ? {
            cached: !0,
            value: Te[e]
        } : (Te[e] = !!v(t) || (c(t) ? t() : t),
        {
            cached: !1,
            value: Te[e]
        })
    }
    Ae.prototype.use = function (e) {
        return c(e) && -1 === this.plugins.indexOf(e) && (e.call(this),
            this.plugins.push(e)),
            this
    }
        ;
    var Pe = Ae;
    function Ae() {
        this.hooks = new ve,
            this.plugins = []
    }
    var Ie = function (e, t) {
        return (Ie = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    };
    Ie(Ce = De, Ne = xe = function () { }
    ),
        Ce.prototype = null === Ne ? Object.create(Ne) : (je.prototype = Ne.prototype,
            new je),
        De.prototype.get = function () {
            return this.data
        }
        ,
        De.prototype.set = function (e) {
            this.data = e
        }
        ,
        De.prototype.update = function (e) {
            return d(this.data, e),
                this
        }
        ;
    var xe, Ce, Le = De;
    function je() {
        this.constructor = Ce
    }
    function De(e) {
        var t = xe.call(this) || this;
        return t.data = e,
            t
    }
    Re.prototype.combine = function () {
        return {
            name: this.meta.get(),
            value: this.data
        }
    }
        ;
    var Ne = Re;
    function Re(e, t) {
        this.date = new Date,
            this.data = Object.freeze(t),
            this.meta = e
    }
    function qe() { }
    Ue.prototype.combine = function (e) {
        var i = []
            , a = [];
        return (e = void 0 === e ? [] : e).forEach(function (e) {
            var n, r, e = e.combine(), t = e.name, e = e.value, o = (n = t,
                r = -1,
                i.some(function (e, t) {
                    return !!le(e, n) && (r = t,
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
    var Me = Ue;
    function Ue() { }
    var Be = window
        , We = "; "
        , He = "="
        , Je = new RegExp("([^" + He + "]+)" + He + "(.*)")
        , Ve = Be.decodeURIComponent
        , Fe = Be.encodeURIComponent
        , Ge = Be.escape;
    function Qe(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, Ve)
    }
    var ze = {
        get: {
            name: Qe,
            value: Qe
        },
        set: {
            name: function (e) {
                return Fe(e).replace(/%(23|24|26|2B|5E|60|7C)/g, Ve).replace(/[\(\)]/g, Ge)
            },
            value: function (e) {
                return Fe(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, Ve)
            }
        }
    };
    function y(t) {
        var n;
        if (!u(t))
            return Be.document.cookie.split(We).some(function (e) {
                e = e.match(Je);
                return !(!e || ze.get.name(e[1]) !== t) && (n = ze.get.value(e[2]),
                    !0)
            }),
                n
    }
    function Ke(e, t, n) {
        var r;
        u(e) || v(t) || ((n = d({
            path: "/"
        }, n)).expires = function (e) {
            if (J(e = W(e) ? new Date((new Date).getTime() + 1e3 * e) : e))
                return e.toUTCString()
        }(n.expires),
            r = "",
            f(n, function (e, t) {
                e && (r += We + t,
                    !0 !== e && (e = e.split(";")[0],
                        r += He + e))
            }),
            e = ze.set.name(e),
            t = ze.set.value(t),
            Be.document.cookie = e + He + t + r)
    }
    var _ = window
        , w = document
        , Ye = !!navigator.sendBeacon
        , $e = !(!_.performance || !_.performance.getEntries)
        , Xe = "data-spider"
        , o = "__spider__"
        , Ze = o + n
        , et = o + t
        , tt = o + "token"
        , nt = "__kernel__"
        , rt = nt + n
        , ot = nt + t
        , it = nt + "logs"
        , at = "prev_document_url"
        , st = [".weidian.com", ".koudai.com", ".vdian.com", ".geilicdn.com", ".fangxin.com", ".ruyu.com", ".vdian.net", ".91ruyu.com", ".bibikan.cn", ".youshop01.com", ".youshop02.com", ".youshop03.com", ".youshop04.com", ".youshop05.com", ".youshop06.com", ".youshop07.com", ".youshop08.com", ".youshop09.com", ".youshop10.com", ".kou6ai.cn", ".mitao.cn"]
        , ct = ["url", "src", "filename"]
        , ut = "?"
        , pt = "&"
        , lt = "="
        , ft = window
        , dt = /^[^\?#]*\?([^#]*)/;
    function ht(e) {
        return encodeURIComponent(e)
    }
    function mt(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    function vt(e) {
        var t = (e = (t = e) && (t = t.match(dt)) && t[1] || "").split(pt)
            , n = {};
        return t.forEach(function (e) {
            var t;
            e && (t = (e = e.split(lt))[0],
                e = e.slice(1).join(lt) || "",
                t && (t = mt(t),
                    e = mt(e),
                    z(n, t) ? (a(n[t]) || (n[t] = [n[t]]),
                        n[t].push(e)) : n[t] = e))
        }),
            n
    }
    function gt(e) {
        if (!g(e))
            return "";
        var n = [];
        return f(e, function (e, t) {
            v(e) || (a(e) || (e = [e]),
                t = ht(t),
                e.forEach(function (e) {
                    n.push("" + t + lt + ht(e))
                }))
        }),
            n.join(pt)
    }
    var yt = "query"
        , _t = "port"
        , wt = ["hash", "host", "hostname", "pathname", "port", "protocol"]
        , bt = ["href", "search"]
        , Et = ["origin"]
        , St = Object.defineProperty;
    function kt(e, t) {
        return e === yt ? g(t) : e === _t ? W(t) && Math.floor(t) === t : s(t) || W(t)
    }
    function Tt(e) {
        e = gt(e);
        return (e ? ut : "") + e
    }
    function Ot(e, n) {
        wt.forEach(function (t) {
            St(e, t, {
                get: function () {
                    return n[t]
                },
                set: function (e) {
                    kt(t, e) && (n[t] = e)
                },
                enumerable: !0
            })
        })
    }
    function Pt(e, n) {
        bt.forEach(function (t) {
            St(e, t, {
                get: function () {
                    return n.search = Tt(n[yt]),
                        n[t]
                },
                set: function (e) {
                    kt(t, e) && (n[t] = e,
                        n[yt] = vt(n.search))
                },
                enumerable: !0
            })
        })
    }
    function At(t, n) {
        Et.forEach(function (e) {
            St(t, e, {
                get: function () {
                    return n[e]
                },
                enumerable: !0
            })
        })
    }
    Lt.prototype.toString = function () {
        return this.href
    }
        ;
    var It, xt, Ct = Lt;
    function Lt(e) {
        u(e) && (e = ft.location.href);
        var t, n, r, o = this._element = ft.document.createElement("A");
        o.href = e,
            Ot(this, this._element),
            Pt(this, this._element),
            n = (t = this)._element,
            St(t, r = yt, {
                get: function () {
                    return t.search = Tt(n[r]),
                        n[r]
                },
                set: function (e) {
                    kt(r, e) && (n[r] = e)
                },
                enumerable: !0
            }),
            At(this, this._element),
            this.href = o.href
    }
    function jt(e, t, n) {
        var r = ft.location.href
            , r = (g(e) && (n = t,
                t = e,
                e = r),
                v(e) && (e = r),
                n = d({
                    replace: !0
                }, n),
                new Ct(e));
        return n.replace ? r.query = d(r.query || {}, t) : (e = gt(t)) && (n = -1 === r.search.indexOf(ut) ? ut : pt,
            r.search += n + e),
            r.toString()
    }
    function b(e) {
        return vt(e = v(e) ? ft.location.href : e)
    }
    function Dt(e) {
        var t, n, r, o = this.constructor, e = xt.call(this, e) || this;
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
    It = function (e, t) {
        return (It = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ,
        xt = Error;
    var Nt = Dt
        , o = xt;
    function Rt() {
        this.constructor = Nt
    }
    It(Nt, o),
        Nt.prototype = null === o ? Object.create(o) : (Rt.prototype = o.prototype,
            new Rt);
    e(Ut, qt = Dt),
        Ut.prototype.toJSON = function () {
            return {
                name: this.name,
                message: this.message,
                stack: (this.originalError || this).stack,
                originalError: this.originalError,
                sample: this.sample
            }
        }
        ;
    var qt, Mt = Ut;
    function Ut(e) {
        var t = qt.call(this, e.message || "") || this;
        return e.name && Object.defineProperty(t, "name", {
            value: e.name
        }),
            t.originalError = e.originalError || null,
            t.sample = e.sample || !1,
            t
    }
    var Bt = g(_.kernel) ? _.kernel : {};
    var Wt = ["dev", "daily", "pre"]
        , Ht = new RegExp("(" + Wt.join("|") + ")\\.");
    function Jt() {
        var e = function (e, t) {
            if (v(t))
                return s(e) ? Bt[e] : void 0;
            Bt[e] = t
        }("environment");
        if (!v(e))
            return e;
        var e = location.hostname.match(Ht);
        return e && e[1] && -1 !== (e = Wt.indexOf(e[1])) ? e : 3
    }
    function Vt() {
        return 3 === Jt()
    }
    var Ft = !v(console) && !!console.log;
    function E() {
        var e = arguments[0];
        e instanceof Mt && (arguments[0] = e.toString(),
            e = d(!0, {}, e.toJSON(), {
                message: e.toString()
            }),
            m.emit("reportException", e)),
            Ft && !Vt() && _.console.error.apply(console, arguments)
    }
    function Gt() {
        Ft && !Vt() && _.console.info.apply(console, arguments)
    }
    function Qt() {
        var e = arguments[0];
        e instanceof Mt && (arguments[0] = e.toString(),
            e = d(!0, {}, e.toJSON(), {
                message: e.toString()
            }),
            m.emit("reportWarn", e)),
            Ft && !Vt() && _.console.warn.apply(console, arguments)
    }
    var S = window
        , zt = document
        , Kt = ["weidian.com", "youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "91ruyu.com", "bibikan.cn", "koudai.com", "mitao.cn"]
        , Yt = ["youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "91ruyu.com", "bibikan.cn"]
        , $t = /AppleWebKit.*Mobile.*/i
        , Xt = /WDAPP\(WDBuyer/i
        , Zt = /WDAPP\(WD\//i
        , en = navigator.userAgent.toLowerCase();
    tn = function (e, t) {
        return (tn = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
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
        return new rn(e, t, n, r)
    }
    function sn(e) {
        return 200 <= e && e < 300 || 304 == e
    }
    function cn(e) {
        var e = e.split(".")
            , t = e.length;
        return (e[t - 2] + "." + e[t - 1]).toLowerCase()
    }
    pn.prototype.push = function (e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
            this
    }
        ,
        pn.prototype.unshift = function (e, t) {
            e = this.hooks[e] || (this.hooks[e] = []);
            return "function" == typeof t && e.unshift(t),
                this
        }
        ,
        pn.prototype.invokeWaterfall = function (e, n, r) {
            var o = this.hooks[e];
            if (!o || !o.length)
                return r(),
                    this;
            var i = 0;
            return o[i](n, function e(t) {
                return H(t) ? r(t) : ++i >= o.length ? r() : void o[i](n, e)
            }),
                this
        }
        ;
    var un = pn;
    function pn() {
        this.hooks = {}
    }
    ln.prototype.use = function (e) {
        return -1 < this._installedPlugins.indexOf(e) || !c(e) || (e.call(this),
            this._installedPlugins.push(e)),
            this
    }
        ;
    n = ln;
    function ln(e) {
        this.hooks = new un,
            this._installedPlugins = [],
            this.options = e || {},
            this.hooks = new un,
            this._installedPlugins = []
    }
    var fn = "#"
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
            f(e, function (e, t) {
                v(e) || (a(e) ? t += "[]" : e = [e],
                    f(e, function (e) {
                        J(e) ? e = e.toISOString() : F(e) && (e = JSON.stringify(e)),
                            n.push(mn(t) + "=" + mn(e))
                    }))
            }),
            t = n.join(hn)),
            t
    }
    function gn(e, t) {
        if (!s(e))
            return "";
        var n = e.split(fn)
            , t = (e = n[0],
                vn(t));
        return s(t) && t && (e += (-1 === e.indexOf(dn) ? dn : hn) + t),
            n[0] = e,
            n.join(fn)
    }
    var yn = "GET"
        , _n = "json";
    function wn(e, t, n) {
        n = n || l,
            c(e) ? e(t, function () {
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
                        r = function (e, t) {
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
        (e = d({
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
        }, function (e) {
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
                W(u = (u = e).timeout) && (c.timeout = u),
                t = a,
                e.withCredentials && (t.withCredentials = !0),
                a), c = e;
            if (c = c.responseType)
                try {
                    s.responseType = c
                } catch (e) { }
            var u, p = a, l = (u = e).headers, f = u.method, d = u.data;
            if (g(l))
                for (var h in l)
                    !l.hasOwnProperty(h) || v(l[h]) || "content-type" === h.toLowerCase() && (f === yn || G(d)) || p.setRequestHeader(h, l[h]);
            r = e,
                (n = a).onreadystatechange = function () {
                    bn(n, r)
                }
                ,
                o = r.url,
                i = r.error,
                n.onabort = function () {
                    wn(r.beforeError, {
                        request: n,
                        options: r,
                        error: an("Request aborted", o, -1, 5)
                    }, i),
                        n = null
                }
                ,
                n.onerror = function () {
                    wn(r.beforeError, {
                        request: n,
                        options: r,
                        error: an("Network Error", o, -1, 3)
                    }, i),
                        n = null
                }
                ,
                n.ontimeout = function () {
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
    Sn = function (e, t) {
        return (Sn = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    var Sn, kn = ["configured", "beforeRequest", "beforeSuccess", "beforeError"];
    (function (e, t) {
        function n() {
            this.constructor = e
        }
        Sn(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(An, Tn = n),
        An.prototype.request = function (e, t) {
            var n = this
                , i = d(!0, {}, this.options, t || {}, {
                    url: e,
                    extra: {}
                });
            return new Promise(function (e, t) {
                var r, o;
                s(i.url) && i.url ? (r = i,
                    o = n,
                    f(kn, function (n) {
                        r[n] = function (e, t) {
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
    var Tn, On, Pn = An;
    function An(e) {
        return Tn.call(this, e) || this
    }
    function In(e) {
        return new Ct(e).pathname.slice(1) || ""
    }
    On = function (e, t) {
        return (On = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        function n() {
            this.constructor = e
        }
        On(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(Cn, xn = n),
        Cn.prototype.request = function (e, t) {
            var o, i, t = d({
                url: In(e),
                data: (t = t && t.data) && t.param || {}
            }, this.options);
            return function (e) {
                if (s(e) && e)
                    return (e = In(e)) && 3 === e.split("/").length
            }(e) ? (o = t.url,
                i = t.data,
                new Promise(function (n, r) {
                    v(S.KDJSBridge2) ? r(an("Jsbridge Undefined", o, -3, 1)) : S.KDJSBridge2.call("WDJSBridge", "thorRequest", {
                        url: o,
                        param: i
                    }, function (e) {
                        var t = (null == (t = null == e ? void 0 : e.param) ? void 0 : t._errMsg) || {};
                        0 === t.code ? n(e) : (e = t.message,
                            10001 === t.code || -1 !== e.indexOf("暂未实现") || -1 !== e.indexOf("not implemented") ? r(an("Jsbridge Method Not Implement Error", o, -3, 2)) : r(an(t.message || "Jsbridge Method Call Error", o, -3, 3)))
                    })
                }
                ).then(function (e) {
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
        return "json" !== e.responseType || F(t) ? t : Promise.reject(an("JSON Data Error", e.url, -1, 1))
    }
    function jn() {
        var e = this
            , t = (e.hooks.push("configured", function (e, t) {
                var n, e = e.options;
                g(n = e.data) && f(n, function (e, t) {
                    (g(e) || a(e)) && (n[t] = JSON.stringify(e))
                }),
                    t()
            }),
                e.request);
        e.request = function () {
            return t.apply(e, arguments).then(Ln, function (e) {
                e = H(e) ? e : e.error;
                return Promise.reject(e)
            })
        }
    }
    var Dn = {}
        , Nn = !1
        , Rn = !1
        , qn = [];
    function Mn() {
        return !v(S.KDJSBridge2) && (Xt.test(en) || Zt.test(en))
    }
    function Un() {
        var e, t, n;
        function r() {
            var t;
            2 === ++e && (Nn = !0,
                t = Dn,
                f(qn, function (e) {
                    e(t)
                }),
                qn.length = 0)
        }
        Rn || (Rn = !0,
            e = 0,
            t = function (e) {
                e && (Dn.suid = e),
                    r()
            }
            ,
            Mn() ? S.KDJSBridge2.call("WDJSBridge", "getSuid", {}, function (e) {
                e && e.param && e.param.suid ? t(e.param.suid) : t()
            }) : t(),
            n = function (e) {
                e && (Dn.cuid = e),
                    r()
            }
            ,
            Mn() ? S.KDJSBridge2.call("WDJSBridge", "getCuid", {}, function (e) {
                e && e.param && e.param.cuid ? n(e.param.cuid) : n()
            }) : n())
    }
    function Bn(e) {
        Un(),
            Nn ? e(Dn) : qn.push(e)
    }
    function Wn(e, t) {
        switch (t) {
            case "thor":
                return -1 < Kt.indexOf(e);
            case "vimg":
                return -1 < Yt.indexOf(e);
            default:
                return
        }
    }
    function Hn() {
        return cn(location.hostname)
    }
    function Jn(e) {
        var t = new RegExp(cn(e) + "$");
        return e.replace(t, Hn())
    }
    function Vn(e) {
        var t, e = new Ct(e), n = e.hostname, r = Hn();
        return /^thor\./gi.test(n) && Wn(r, "thor") && ((t = e).hostname = Jn(t.hostname),
            e = t),
            /^vimg\./gi.test(n) && Wn(r, "vimg") && ((t = e).hostname = Jn(t.hostname).replace(/^vimg\./gi, ""),
                t.pathname = "vimg" + t.pathname,
                e = t),
            e.href
    }
    var Fn = "wdtoken";
    function Gn(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function Qn(e, t) {
        return Promise.reject((t = t,
            H(e = e) ? (n = e.code,
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
    function zn() {
        if ($t.test(en)) {
            var e = document.querySelectorAll('meta[name="viewport"]')
                , e = e[e.length - 1];
            if (e)
                return (e = (e = e.getAttribute("content")) && e.match(/initial\-scale=([\d\.]+)/)) ? 1 / Number(e[1]) : 1
        }
        return 1
    }
    var Kn = 20
        , Yn = "redirect"
        , $n = 1e3;
    function Xn(e) {
        var t, n;
        if (g(e)) {
            var r = g(e.status) ? e.status : {}
                , e = g(e.result) ? e.result : {}
                , o = e.authPageUrl;
            if (r.code == Kn && o)
                return o = jt(o, ((r = {})[Yn] = S.location.href,
                    r)),
                    e.message && (r = e.message,
                        e = zn(),
                        r = '<div class="hawk-toast">' + r + '</div><style type="text/css">.hawk-toast{position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10000;width:50%;color:#fff;background:rgba(33,33,33,0.9);line-height:1.5;border-radius:' + 8 * e + "px;max-width:" + 300 * e + "px;padding:" + 20 * e + "px;font-size:" + 16 * e + "px;}</style>",
                        (n = zt.body) && ((t = zt.createElement("div")).innerHTML = r,
                            n.appendChild(t),
                            setTimeout(function () {
                                n.removeChild(t)
                            }, 1500))),
                    void setTimeout(function () {
                        var e;
                        (e = o) && S.location.assign(e)
                    }, $n)
        }
        return 1
    }
    var o = S.XMLHttpRequest
        , Zn = o && o.prototype
        , er = Zn && Zn.send;
    function tr(e, t, n) {
        try {
            var r;
            if (4 == t.readyState)
                if (sn(t.status))
                    return r = g(t.response) ? t.response : function (e, t) {
                        try {
                            return JSON.parse(e, t)
                        } catch (e) {
                            return
                        }
                    }(t.responseText),
                        e.beforeSuccess(r, n)
        } catch (e) { }
        n()
    }
    var n = S.Element
        , nr = n && n.prototype
        , rr = ["appendChild", "insertBefore"];
    function or(a) {
        f(rr, function (e) {
            var t = nr && nr[e];
            t && (nr[e] = function (e) {
                var o, i;
                return e && "SCRIPT" === e.tagName && e.src && s(e = b(e.src).callback) && (o = function (e) {
                    var t = e.split(".")
                        , n = t.length;
                    if (n) {
                        var r, o = S, i = S;
                        try {
                            for (var a = 0; a < n; a++) {
                                if (!i)
                                    return;
                                r = t[a],
                                    i = (o = i)[r]
                            }
                            if (!c(i))
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
                    o.namespace[o.name] = function (e) {
                        var t = arguments
                            , n = a
                            , r = function () {
                                i.apply(o.namespace, t)
                            };
                        try {
                            return void n.beforeSuccess(e, r)
                        } catch (e) { }
                        r()
                    }
                    ),
                    t.apply(this, p(arguments))
            }
            )
        })
    }
    var ir = S.fetch;
    function ar(i) {
        var e;
        "function" == typeof (e = ir) && -1 !== e.toString().indexOf("[native code]") && (S.fetch = function () {
            return ir.apply(this, arguments).then(function (o) {
                return new Promise(function (e) {
                    var t = i
                        , n = o
                        , r = function () {
                            e(o)
                        };
                    try {
                        if (sn(n.status))
                            return void n.clone().json().then(function (e) {
                                t.beforeSuccess(e, r)
                            }).catch(function () {
                                r()
                            })
                    } catch (e) { }
                    r()
                }
                )
            })
        }
        )
    }
    function sr(e) {
        var i;
        g(e) && c(e.beforeSuccess) && (i = e,
            c(er) && (Zn.send = function () {
                var e = arguments
                    , t = this
                    , n = t.onreadystatechange
                    , r = t.onload
                    , o = !1;
                return n && (o = !0,
                    t.onreadystatechange = function () {
                        var e = arguments;
                        tr(i, t, function () {
                            n.apply(t, e)
                        })
                    }
                ),
                    r && !o && (t.onload = function () {
                        var e = arguments;
                        tr(i, t, function () {
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
    S.hawk = S.hawk || {
        disabled: !1
    };
    var pr = {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Accept: "application/json, */*"
    };
    function lr(e) {
        e = d(!0, {}, {
            headers: pr,
            cache: !1
        }, e);
        e = new Pn(e);
        return e.use(jn),
            e
    }
    o = lr();
    o.use(function () {
        S.hawk.disabled || (sr({
            beforeSuccess: function (e, t) {
                Xn(e) && t()
            }
        }),
            S.hawk.disabled = !0)
    }),
        o.use(function () {
            var e = this
                , n = (e.hooks.unshift("configured", function (e, t) {
                    var n, r, o, i, e = e.options;
                    e.url = Vn(e.url),
                        e.responseType = "json",
                        e.data = e.data || {},
                        n = e.data,
                        (r = y(Fn)) && (g(n) ? n[Fn] = r : G(n) ? n.append(Fn, r) : Q(n) && n.set(Fn, r)),
                        e.extra.deviceId ? (o = e.data,
                            i = function () {
                                t()
                            }
                            ,
                            Bn(function (e) {
                                g(o) && (o.context = d(o.context || {}, e)),
                                    i()
                            })) : t()
                }),
                    e.request);
            e.request = function () {
                var t = arguments[0];
                return n.apply(e, arguments).then(Gn).catch(function (e) {
                    return Qn(e, t)
                })
            }
        });
    (new t).use(function () {
        var e = this
            , t = e.request;
        e.request = function () {
            return t.apply(e, arguments).then(cr, ur)
        }
    });
    var fr = lr();
    function dr(e, t) {
        return t = d({
            method: "post"
        }, t),
            fr.request(e, t)
    }
    function hr(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }
    function mr(e) {
        try {
            r = [],
                g(n = e) && f(n, function (e, t) {
                    e = g(e) || a(e) ? h(e) : e,
                        r.push(hr(t) + "=" + hr(e))
                });
            var t = r.join("&");
            if (t)
                return new Blob([t], {
                    type: "application/x-www-form-urlencoded; charset=UTF-8"
                })
        } catch (e) { }
        var n, r
    }
    var vr, gr = /(Android)\s+([\d.]+)/i, yr = /QQ\/([\d.]+)/i, _r = /micromessenger/i, wr = /wxwork\/.* MicroMessenger/i, br = /WDAPP\(WDBuyer/i, Er = /WDAPP\(WD\//i, Sr = /WDAPP\((?:wdbuyer|wd)\/([\d.]+)/i, kr = /miniProgram/i, Tr = navigator.userAgent.toLowerCase();
    function Or() {
        return gr.test(Tr)
    }
    function Pr() {
        return yr.test(Tr)
    }
    function Ar() {
        return _r.test(Tr) && !Ir()
    }
    function Ir() {
        return wr.test(Tr)
    }
    function xr() {
        return br.test(Tr)
    }
    function Cr() {
        var e, t = Tr.match(Sr);
        return e = t ? t[1] : e
    }
    function Lr() {
        return Er.test(Tr)
    }
    function jr() {
        return "miniprogram" === window.__wxjs_environment || kr.test(Tr)
    }
    function Dr() {
        var e, t, n, r = [Math.random(), _.navigator.userAgent, w.cookie, _.location.href, h(_.performance), Date.now(), _.screen.availHeight, _.screen.availWidth, Math.random()];
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
        } catch (e) { }
        return Ee(function (e) {
            for (var t = e.length - 1; 0 < t; t--) {
                var n = Math.floor(Math.random() * (t + 1))
                    , r = e[t];
                e[t] = e[n],
                    e[n] = r
            }
            return e
        }(r).join())
    }
    function Nr(e, t) {
        return Ee([vr = v(vr) ? Dr() : vr, Date.now(), Math.random(), e].join(), t || 16)
    }
    var Rr = _.document.createElement("A")
        , qr = w.body;
    function Mr(e) {
        return "." + (e || location.hostname).split(":")[0].split(".").slice(-2).join(".")
    }
    function k() {
        return Math.round(performance.now())
    }
    function Ur() {
        var e = Jt()
            , t = "";
        return e < 2 ? t = Wt[1] + "." : 2 == e && (t = Wt[2] + "."),
            "https://logtake." + t + "weidian.com/h5collector/webcollect/3.0"
    }
    function Br() {
        return xr() || Lr()
    }
    function Wr(e) {
        return e.split("#")[0].split("?")[0]
    }
    function Hr(n) {
        return a(n) ? n.filter(function (e, t) {
            return n.indexOf(e, 0) === t
        }) : []
    }
    function Jr(e) {
        var t = [];
        return t = e && (e = e.split(",")) && e.length ? e.map(function (e) {
            return e.replace(/^\s*/g, "").replace(/\s*/g, "")
        }) : t
    }
    function Vr() {
        return Jr(qr && qr.dataset.vcollectDisabled)
    }
    function Fr(e) {
        return -1 < Vr().indexOf(e)
    }
    function Gr(e) {
        return -1 < Jr(qr && qr.dataset.vcollectPlugin).indexOf(e)
    }
    function Qr(e) {
        var t = (t = Jr(qr && qr.dataset.vcollectMultidomain)).length ? t : qr && null !== qr.getAttribute("data-vcollect-multidomain") ? ["pathtracker"] : [];
        return e ? -1 < t.indexOf(e) : t.length
    }
    function zr(e, n) {
        return e.forEach(function (e) {
            var t;
            e.combine && ((t = me(e.combine().name.extend)).scene || (t.scene = n),
                e.combine().name.extend = h(t))
        }),
            e
    }
    var Kr = "https://assets.geilicdn.com/v-components/cdn/jweixin/1.6.0/index.fix.min.js"
        , Yr = "gh_c6feb778444d"
        , $r = ((n = {})[Yr] = ["weidian.com", "koudai.com", "v5.cc", "rua.fun"],
            n)
        , Xr = {
            mpid: Yr,
            jsApiList: ["updateAppMessageShareData", "updateTimelineShareData", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone", "hideMenuItems", "showMenuItems", "chooseImage", "getLocalImgData", "previewImage", "downloadImage", "openLocation", "getLocation", "launch3rdApp", "getInstallState", "uploadImage", "scanQRCode"]
        };
    function Zr(o) {
        return new Promise(function (e, t) {
            var n, r;
            s(o) ? (r = Oe("LOAD_SCRIPT_" + o, function () {
                return new de
            }),
                n = r.value,
                r = r.cached,
                n.push({
                    resolve: e,
                    reject: t
                }),
                r || (e = w.head,
                    (r = w.createElement("script")).addEventListener("load", function () {
                        n.resolve()
                    }),
                    r.addEventListener("error", function (e) {
                        return n.reject(e.message)
                    }),
                    r.crossOrigin = "anonymous",
                    r.src = o,
                    e.appendChild(r))) : t()
        }
        )
    }
    function eo(o) {
        return new Promise(function (e, t) {
            var n = Oe(o, function () {
                return new de
            })
                , r = n.value
                , n = n.cached;
            r.push({
                resolve: e,
                reject: t
            }),
                n || dr("https://thor." + (Jt() < 3 ? Wt[2] + "." : "") + "weidian.com/weixin/getjsconfig/2.0", {
                    data: {
                        param: {
                            url: _.location.href,
                            mpid: o
                        }
                    }
                }).then(function (e) {
                    return r.resolve(e)
                }).catch(function () {
                    return r.reject()
                })
        }
        )
    }
    function to(e, t) {
        Oe(e).cached || m.emit(e, t)
    }
    function no(e) {
        return n = e,
            new Promise(function (e, t) {
                try {
                    return n === Yr && $r[n].indexOf(Mr().slice(1)) < 0 ? t() : e(null)
                } catch (e) {
                    return t()
                }
            }
            ).then(function () {
                return eo(e)
            });
        var n
    }
    function ro(e) {
        var t = e || {}
            , e = t.mpid || Yr;
        return Promise.all([new Promise(function (e, t) {
            var n = _.jWeixin;
            return n ? e(n) : Zr(Kr).then(e).catch(t)
        }
        ), no(e)]).then(function (e) {
            return i = e[1],
                a = t,
                new Promise(function (t, e) {
                    var n = i.status
                        , r = i.result
                        , o = _.jWeixin || _.wx;
                    n && 0 === n.code ? (n = {
                        beta: !0,
                        debug: !1,
                        appId: r.appId,
                        timestamp: r.timestamp,
                        nonceStr: r.nonceStr,
                        signature: r.signature,
                        jsApiList: Hr((new Array).concat(Xr.jsApiList, a.jsApiList || [])),
                        openTagList: ["wx-open-launch-app", "wx-open-launch-weapp"]
                    },
                        o.config(n),
                        o.ready(function () {
                            to("wxJsbridgeLoad", {
                                result: !0
                            }),
                                t(o)
                        }),
                        o.error(function (e) {
                            Qt(new Mt({
                                message: JSON.stringify(e),
                                name: "[Pathtracker Warn] WxConfigWarn"
                            })),
                                to("wxJsbridgeLoad", {
                                    result: !1
                                }),
                                t(o)
                        })) : (to("wxJsbridgeLoad", {
                            result: !1
                        }),
                            e(i))
                }
                );
            var i, a
        }).catch(function (e) {
            e && Qt(new Mt({
                message: e.message,
                name: "[Pathtracker Warn] WxConfigWarn",
                originalError: e
            }))
        })
    }
    function oo(n) {
        return void 0 === n && (n = !1),
            new Promise(function (e, t) {
                _.KDJSBridge2 && (n && to("wdJsbridgeLoad", {
                    result: !0
                }),
                    e(_.KDJSBridge2)),
                    Zr("https://assets.geilicdn.com/v-components/jsbridge/1.0.4/index.min.js").then(function () {
                        _.KDJSBridge2 ? (n && to("wdJsbridgeLoad", {
                            result: !0
                        }),
                            e(_.KDJSBridge2)) : (n && to("wdJsbridgeLoad", {
                                result: !1
                            }),
                                t("Get weidian sdk error"))
                    }).catch(function (e) {
                        n && to("wdJsbridgeLoad", {
                            result: !1
                        }),
                            t(e)
                    })
            }
            )
    }
    var io = /complete|interactive|loaded/;
    function ao(e) {
        _.addEventListener("load", e)
    }
    var so = !1;
    function co(e) {
        if (so)
            return e();
        ao(e)
    }
    function uo(e) {
        w.addEventListener("visibilitychange", e, !1)
    }
    function po(e) {
        io.test(w.readyState) ? e() : w.addEventListener("DOMContentLoaded", e, !0)
    }
    ao(function () {
        so = !0
    }),
        lo = new de,
        fo = new de,
        _.addEventListener("unload", function () {
            lo.resolve(),
                fo.resolve()
        }, !0);
    var lo, fo, ho = {
        beforeUnloadCacheQueue: lo,
        unloadCacheQueue: fo
    }.beforeUnloadCacheQueue;
    function mo(e) {
        ho.push({
            resolve: e
        })
    }
    var vo = window
        , go = document
        , yo = go.createElement("a")
        , o = /complete|loaded|interactive/
        , _o = [".weidian.com", ".koudai.com", ".vdian.com", ".geilicdn.com", ".fangxin.com", ".ruyu.com", ".vdian.net", ".91ruyu.com", ".bibikan.cn", ".youshop01.com", ".youshop02.com", ".youshop03.com", ".youshop04.com", ".youshop05.com", ".youshop06.com", ".youshop07.com", ".youshop08.com", ".youshop09.com", ".youshop10.com", ".kou6ai.cn", ".mitao.cn"]
        , wo = /^(javascript|data):/i
        , bo = (new RegExp("[" + Object.keys({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&#34;",
            "'": "&#39;",
            "`": "&#96;"
        }).join("") + "]", "g"),
            ["url", "src", "filename"])
        , Eo = "__safetyCache"
        , So = String.fromCharCode;
    var ko = {};
    function To(e) {
        if (s(e))
            return ko[e];
        d(ko, e)
    }
    var Oo = Ao(_o);
    function Po(e) {
        return e = "." !== e[0] ? "^" + e : "(^|.)" + e.substr(1),
            e = (e += "$").replace(/\./g, "\\.")
    }
    function Ao(e) {
        e = e.map(Po).join("|");
        return new RegExp("(" + e + ")")
    }
    function Io(e, t) {
        return (t && t.whiteDomains.length ? Ao(function (e) {
            var e = d({
                append: !0
            }, e || {})
                , t = e.whiteDomains || [];
            {
                var n;
                return e.append ? (n = _o,
                    t.forEach(function (e) {
                        n.push(e)
                    }),
                    n) : t
            }
        }(t)) : Oo).test(e)
    }
    function xo(e, t) {
        if (u(e))
            return !1;
        e = e.replace(/&#x([\dabcdef]+);?/gi, function (e, t) {
            return So(parseInt(t, 16))
        }).replace(/&#(\d+);?/g, function (e, t) {
            return So(parseInt(t, 10))
        }).trim(),
            e = e,
            yo.href = e;
        var n, e = yo;
        return n = e.protocol,
            !wo.test(n) && Io(e.hostname, t)
    }
    function Co(e) {
        var t, n, r = function (e) {
            switch (e.nodeName) {
                case "AUDIO":
                case "VIDEO":
                    return e.src || e.currentSrc;
                case "OBJECT":
                    return e.data;
                case "A":
                    return e.href;
                case "PARAM":
                    if (-1 !== bo.indexOf(e.name))
                        return e.value
            }
            return e.src
        }(e);
        !r || (t = r,
            (n = e)[Eo] && n[Eo][t]) || (xo(r) ? (n = r,
                (t = e)[Eo] = t[Eo] || {},
                t[Eo][n] = !0) : (r = e).parentNode && r.parentNode.removeChild(r))
    }
    var Lo = {
        A: Co,
        IMG: Co,
        IFRAME: Co,
        AUDIO: Co,
        VIDEO: Co,
        EMBED: Co,
        OBJECT: Co,
        PARAM: Co,
        SOURCE: Co
    }
        , jo = Object.keys(Lo).join(",");
    Object.keys({
        SCRIPT: Co
    }).join(","),
        K(function () {
            go.querySelectorAll(jo).forEach(function (e) {
                Lo[e.nodeName](e)
            })
        });
    function Do(e) {
        if (-1 !== e.indexOf(nt)) {
            var t = void 0;
            if (void 0 === t && (t = ""),
                _.opener)
                try {
                    _.opener.name = t
                } catch (e) { }
            _.name = t
        } else
            e = ""
    }
    t = function () {
        try {
            var e;
            To("observeIframe") && (e = vo.document.referrer || "",
                vo.self == vo.top || xo(e) || (vo.top.location.href = vo.location.href))
        } catch (e) { }
    }
        ,
        o.test(go.readyState) && go.body ? t() : vo.addEventListener("DOMContentLoaded", t),
        To({
            observeIframe: !0
        });
    n = function () {
        var e = "";
        if (_.opener)
            try {
                e = _.opener.name
            } catch (e) { }
        return e = e || _.name
    }(),
        g(No = me(n)) || (No = {}),
        mo(function () {
            _.name = h(No)
        }),
        _.addEventListener("beforeunload", function () {
            _.name = h(No)
        }, !0),
        Do(n);
    var No, Ro = {
        get: function (e) {
            return e ? No[e] : No
        },
        set: function (e, t) {
            No[e] = t
        },
        remove: function (e) {
            e ? delete No[e] : No = {}
        }
    };
    function qo(e) {
        return Ro.get(e)
    }
    function Mo(e, t) {
        Ro.set(e, t)
    }
    var Uo, Bo, Wo = _.history, Ho = Wo.pushState, Jo = Wo.replaceState, o = _.history.pushState ? "popstate" : "hashchange", Vo = new de({
        stateful: !1
    });
    function Fo(e) {
        var t = T();
        t !== Uo && (Vo.resolve(e, {
            oldUrl: Uo,
            newUrl: t
        }),
            Uo = t)
    }
    function Go(e) {
        Vo.push({
            resolve: e
        })
    }
    function Qo() {
        var e = w.destination;
        return e && xo(e)
    }
    function T() {
        return w.URL
    }
    Uo = T(),
        _.addEventListener(o, Fo),
        Ho && (Wo.pushState = function () {
            var e = Ho.apply(Wo, arguments);
            return Fo(),
                e
        }
            ,
            Wo.replaceState = function () {
                var e = Jo.apply(Wo, arguments);
                return Fo(),
                    e
            }
        ),
        uo(function () {
            "visible" === w.visibilityState && (w.destination = null)
        }),
        Go(function (e, t) {
            t = t.oldUrl;
            Bo = t
        }),
        mo(function () {
            Mo(at, T())
        });
    var O = window
        , zo = document
        , Ko = /AppleWebKit.*Mobile.*/i
        , Yo = /WDAPP\(WDBuyer/i
        , $o = navigator.userAgent.toLowerCase();
    function Xo(e) {
        return (Xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        )(e)
    }
    function Zo() { }
    function ei(e) {
        return null == e
    }
    function ti(e) {
        return null == e || "" === e
    }
    function ni(t) {
        return function (e) {
            return Object.prototype.toString.call(e) === "[object " + t + "]"
        }
    }
    function ri(e) {
        return ni("String")(e)
    }
    function oi(e) {
        return ni("Error")(e)
    }
    function ii(e) {
        return ni("Array")(e)
    }
    function ai(e) {
        return "function" == typeof e
    }
    function P(e) {
        return ni("Object")(e)
    }
    function si(e) {
        return null !== e && "object" === Xo(e)
    }
    function ci(e) {
        return "undefined" != typeof FormData && e instanceof FormData
    }
    function ui(e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
    }
    function pi(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function li(e, t) {
        if (ii(e))
            for (var n = 0, r = e.length; n < r; n++)
                t.call(null, e[n], n, e);
        else if (P(e))
            for (var o in e)
                pi(e, o) && t.call(null, e[o], o, e)
    }
    function fi(e) {
        for (var n, r, t = [], o = 1; o < arguments.length; o++)
            t[o - 1] = arguments[o];
        return r = ni("Boolean")(e) ? (n = e,
            t.shift()) : e,
            li(t, function (e) {
                li(e, function (e, t) {
                    n && (ii(e) || P(e)) ? (ii(e) ? ii(r[t]) || (r[t] = []) : P(r[t]) || (r[t] = {}),
                        fi(n, r[t], e)) : r[t] = e
                })
            }),
            r
    }
    di = function (e, t) {
        return (di = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        function n() {
            this.constructor = e
        }
        di(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(vi, hi = Error);
    var di, hi, mi = vi;
    function vi(e, t, n) {
        e = hi.call(this, e) || this;
        return e.code = t,
            e.subcode = n,
            e
    }
    function gi(e, t, n) {
        return new mi(e, t, n)
    }
    function yi(e) {
        return 200 <= e && e < 300 || 304 == e
    }
    function _i(e) {
        return Yo.test($o) && null != (e = null == e ? void 0 : e.extra) && e.useNative
    }
    bi.prototype.push = function (e, t) {
        e = this.hooks[e] || (this.hooks[e] = []);
        return "function" == typeof t && e.push(t),
            this
    }
        ,
        bi.prototype.invokeWaterfall = function (e, n, r) {
            var o = this.hooks[e];
            if (!o || !o.length)
                return r(),
                    this;
            var i = 0;
            return o[i](n, function e(t) {
                return oi(t) ? r(t) : ++i >= o.length ? r() : void o[i](n, e)
            }),
                this
        }
        ;
    var wi = bi;
    function bi() {
        this.hooks = {}
    }
    Ei.prototype.use = function (e) {
        return -1 < this._installedPlugins.indexOf(e) || !ai(e) || (e.call(this),
            this._installedPlugins.push(e)),
            this
    }
        ;
    t = Ei;
    function Ei(e) {
        this.hooks = new wi,
            this._installedPlugins = [],
            this.options = e || {},
            this.hooks = new wi,
            this._installedPlugins = []
    }
    var Si = "#"
        , ki = "?"
        , Ti = "&";
    function Oi(e) {
        return encodeURIComponent(e).replace(/%20/g, "+")
    }
    function Pi(e) {
        if (ui(e))
            return e.toString();
        var n, t = e;
        return (P(e) || ii(e)) && (n = [],
            li(e, function (e, t) {
                ei(e) || (ii(e) ? t += "[]" : e = [e],
                    li(e, function (e) {
                        ni("Date")(e) ? e = e.toISOString() : si(e) && (e = JSON.stringify(e)),
                            n.push(Oi(t) + "=" + Oi(e))
                    }))
            }),
            t = n.join(Ti)),
            t
    }
    function Ai(e, t) {
        if (!ri(e))
            return "";
        var n = e.split(Si)
            , t = (e = n[0],
                Pi(t));
        return ri(t) && t && (e += (-1 === e.indexOf(ki) ? ki : Ti) + t),
            n[0] = e,
            n.join(Si)
    }
    var Ii = "GET"
        , xi = "json";
    function Ci(e, t, n) {
        n = n || Zo,
            ai(e) ? e(t, function () {
                n(t)
            }) : n(t)
    }
    function Li(t, n) {
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
            if (yi(r)) {
                try {
                    a = function (e, t) {
                        var n = t.responseType
                            , t = t.status
                            , r = e.response;
                        if (n === xi && e.responseType !== xi && !P(r))
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
                    return Ci(n.beforeError, {
                        request: t,
                        response: a,
                        options: n,
                        error: e
                    }, i)
                }
                Ci(n.beforeSuccess, {
                    request: t,
                    response: a,
                    options: n
                }, o)
            } else
                Ci(n.beforeError, {
                    request: t,
                    response: a,
                    options: n,
                    error: new Error("Network Error")
                }, i)
        }
    }
    function ji(e) {
        (e = fi({
            method: Ii,
            responseType: xi,
            withCredentials: !0,
            cache: !0
        }, e)).method = e.method || Ii;
        var t = new XMLHttpRequest;
        function l(e) {
            var t = e.request
                , e = e.options;
            t.send(e.method === Ii ? null : Pi(e.data))
        }
        Ci(e.configured, {
            request: t,
            options: e
        }, function (e) {
            var t, n = e.request, r = e.options, o = (r.method = r.method.toUpperCase(),
                n.open(r.method, (e = r.url,
                    t = (o = r).method,
                    i = r.cache,
                    o = r.data,
                    t === Ii && (e = Ai(e, o),
                        i || (e = Ai(e, {
                            _: Date.now()
                        }))),
                    e), !0),
                n.onreadystatechange = function () {
                    Li(n, r)
                }
                ,
                t = n,
                r.withCredentials && (t.withCredentials = !0),
                n), i = r;
            if (i = i.responseType)
                try {
                    o.responseType = i
                } catch (e) { }
            var a = n
                , s = (e = r).headers
                , c = e.method
                , u = e.data;
            if (P(s))
                for (var p in s)
                    !s.hasOwnProperty(p) || ei(s[p]) || "content-type" === p.toLowerCase() && (c === Ii || ci(u)) || a.setRequestHeader(p, s[p]);
            Ci(r.beforeRequest, {
                request: n,
                options: r
            }, l)
        })
    }
    Di = function (e, t) {
        return (Di = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    var Di, Ni = ["configured", "beforeRequest", "beforeSuccess", "beforeError"];
    (function (e, t) {
        function n() {
            this.constructor = e
        }
        Di(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(qi, Ri = t),
        qi.prototype.request = function (e, t) {
            var n = this
                , i = fi(!0, {}, this.options, t || {}, {
                    url: e,
                    extra: {}
                });
            return new Promise(function (e, t) {
                var r, o;
                ri(i.url) && i.url ? (r = i,
                    o = n,
                    li(Ni, function (n) {
                        r[n] = function (e, t) {
                            o.hooks.invokeWaterfall(n, e, t)
                        }
                    }),
                    i.success = e,
                    i.error = t,
                    ji(i)) : t({
                        error: gi("Url Error", -2)
                    })
            }
            )
        }
        ;
    var Ri, n = qi;
    function qi(e) {
        return Ri.call(this, e) || this
    }
    var Mi = "?"
        , Ui = "&"
        , Bi = "="
        , Wi = window
        , Hi = /^[^\?#]*\?([^#]*)/;
    function Ji(e) {
        return encodeURIComponent(e)
    }
    function Vi(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    function Fi(e) {
        var t = (e = (t = e) && (t = t.match(Hi)) && t[1] || "").split(Ui)
            , n = {};
        return t.forEach(function (e) {
            var t;
            e && (t = (e = e.split(Bi))[0],
                e = e.slice(1).join(Bi) || "",
                t && (t = Vi(t),
                    e = Vi(e),
                    pi(n, t) ? (ii(n[t]) || (n[t] = [n[t]]),
                        n[t].push(e)) : n[t] = e))
        }),
            n
    }
    function Gi(e) {
        if (!P(e))
            return "";
        var n = [];
        return li(e, function (e, t) {
            ei(e) || (ii(e) || (e = [e]),
                t = Ji(t),
                e.forEach(function (e) {
                    n.push("" + t + Bi + Ji(e))
                }))
        }),
            n.join(Ui)
    }
    var Qi = "query"
        , zi = ["hash", "host", "hostname", "pathname", "port", "protocol"]
        , Ki = ["href", "search"]
        , Yi = ["origin"]
        , $i = Object.defineProperty;
    function Xi(e, t) {
        return e === Qi ? P(t) : ri(t) || ni("Number")(t)
    }
    function Zi(e) {
        e = Gi(e);
        return (e ? Mi : "") + e
    }
    function ea(e, n) {
        zi.forEach(function (t) {
            $i(e, t, {
                get: function () {
                    return n[t]
                },
                set: function (e) {
                    Xi(t, e) && (n[t] = e)
                },
                enumerable: !0
            })
        })
    }
    function ta(e, n) {
        Ki.forEach(function (t) {
            $i(e, t, {
                get: function () {
                    return n.search = Zi(n[Qi]),
                        n[t]
                },
                set: function (e) {
                    Xi(t, e) && (n[t] = e,
                        n[Qi] = Fi(n.search))
                },
                enumerable: !0
            })
        })
    }
    function na(t, n) {
        Yi.forEach(function (e) {
            $i(t, e, {
                get: function () {
                    return n[e]
                },
                enumerable: !0
            })
        })
    }
    ia.prototype.toString = function () {
        return this.href
    }
        ;
    var ra, oa = ia;
    function ia(e) {
        ti(e) && (e = Wi.location.href);
        var t, n, r, o = this._element = Wi.document.createElement("A");
        o.href = e,
            ea(this, this._element),
            ta(this, this._element),
            n = (t = this)._element,
            $i(t, r = Qi, {
                get: function () {
                    return t.search = Zi(n[r]),
                        n[r]
                },
                set: function (e) {
                    Xi(r, e) && (n[r] = e)
                },
                enumerable: !0
            }),
            na(this, this._element),
            this.href = o.href
    }
    function aa(e) {
        return new oa(e).pathname.slice(1) || ""
    }
    ra = function (e, t) {
        return (ra = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        function n() {
            this.constructor = e
        }
        ra(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(ca, sa = t),
        ca.prototype.request = function (e, t) {
            var o, i, t = fi({
                url: aa(e),
                data: (t = t && t.data) && t.param || {}
            }, this.options);
            return function (e) {
                if (ri(e) && e)
                    return (e = aa(e)) && 3 === e.split("/").length
            }(e) ? (o = t.url,
                i = t.data,
                new Promise(function (n, r) {
                    ei(O.KDJSBridge2) ? r(gi("Jsbridge Undefined", -3, 1)) : O.KDJSBridge2.call("WDJSBridge", "thorRequest", {
                        url: o,
                        param: i
                    }, function (e) {
                        var t = (null == (t = null == e ? void 0 : e.param) ? void 0 : t._errMsg) || {};
                        0 === t.code ? n(e) : (e = t.message,
                            10001 === t.code || -1 !== e.indexOf("暂未实现") || -1 !== e.indexOf("not implemented") ? r(gi("Jsbridge Method Not Implement Error", -3, 2)) : r(gi(t.message || "Jsbridge Method Call Error", -3, 3)))
                    })
                }
                ).then(function (e) {
                    return e.param.thorResponse
                })) : Promise.reject(gi("Url Error Or Url Pathname Illegal", -2))
        }
        ;
    var sa, o = ca;
    function ca(e) {
        return sa.call(this, e) || this
    }
    function ua(e) {
        var t = e.response
            , e = e.options
            , t = t.data;
        return "json" !== e.responseType || si(t) ? t : Promise.reject(gi("JSON Data Error", -1, 1))
    }
    function pa() {
        var e = this
            , t = (e.hooks.push("beforeRequest", function (e, t) {
                var n, e = e.options;
                P(n = e.data) && li(n, function (e, t) {
                    (P(e) || ii(e)) && (n[t] = JSON.stringify(e))
                }),
                    t()
            }),
                e.request);
        e.request = function () {
            return t.apply(e, arguments).then(ua, function (e) {
                e = oi(e) ? e : e.error;
                return Promise.reject(e)
            })
        }
    }
    var la = window
        , fa = "; "
        , da = new RegExp("([^=]+)=(.*)")
        , ha = la.decodeURIComponent
        , ma = la.encodeURIComponent
        , va = la.escape;
    function ga(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, ha)
    }
    var ya = {
        get: {
            name: ga,
            value: ga
        },
        set: {
            name: function (e) {
                return ma(e).replace(/%(23|24|26|2B|5E|60|7C)/g, ha).replace(/[\(\)]/g, va)
            },
            value: function (e) {
                return ma(e).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, ha)
            }
        }
    };
    var _a = {}
        , wa = !1
        , ba = !1
        , Ea = [];
    function Sa() {
        var e, t, n;
        function r() {
            var t;
            2 === ++e && (wa = !0,
                t = _a,
                li(Ea, function (e) {
                    e(t)
                }),
                Ea.length = 0)
        }
        ba || (ba = !0,
            e = 0,
            t = function (e) {
                e && (_a.suid = e),
                    r()
            }
            ,
            ei(O.KDJSBridge2) ? t() : O.KDJSBridge2.call("WDJSBridge", "getSuid", {}, function (e) {
                e && e.param && e.param.suid ? t(e.param.suid) : t()
            }),
            n = function (e) {
                e && (_a.cuid = e),
                    r()
            }
            ,
            ei(O.KDJSBridge2) ? n() : O.KDJSBridge2.call("WDJSBridge", "getCuid", {}, function (e) {
                e && e.param && e.param.cuid ? n(e.param.cuid) : n()
            }))
    }
    function ka(e) {
        Sa(),
            wa ? e(_a) : Ea.push(e)
    }
    var Ta = "wdtoken";
    function Oa(e) {
        var t = function (t) {
            var n;
            if (!ti(t))
                return la.document.cookie.split(fa).some(function (e) {
                    e = e.match(da);
                    return !(!e || ya.get.name(e[1]) !== t) && (n = ya.get.value(e[2]),
                        !0)
                }),
                    n
        }(Ta);
        t && (P(e) ? e[Ta] = t : ci(e) ? e.append(Ta, t) : ui(e) && e.set(Ta, t))
    }
    function Pa(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function Aa(e) {
        return Promise.reject((n = (t = e).code,
            r = e.subcode,
            t = e.message,
        {
            status: {
                code: ei(n) ? -1 : n,
                subcode: r,
                message: t
            },
            result: null
        }));
        var t, n, r
    }
    function Ia() {
        if (Ko.test($o)) {
            var e = document.querySelectorAll('meta[name="viewport"]')
                , e = e[e.length - 1];
            if (e)
                return (e = (e = e.getAttribute("content")) && e.match(/initial\-scale=([\d\.]+)/)) ? 1 / Number(e[1]) : 1
        }
        return 1
    }
    var xa = 20
        , Ca = "redirect"
        , La = 1e3;
    function ja(e) {
        var t, n, r, o, i;
        if (P(e)) {
            var a = P(e.status) ? e.status : {}
                , e = P(e.result) ? e.result : {}
                , s = e.authPageUrl;
            if (a.code == xa && s)
                return a = s,
                    (r = {})[Ca] = O.location.href,
                    r = r,
                    i = Wi.location.href,
                    P(a) && (o = r,
                        r = a,
                        a = i),
                    ei(a) && (a = i),
                    o = fi({
                        replace: !0
                    }, o),
                    i = new oa(a),
                    o.replace ? i.query = fi(i.query || {}, r) : (a = Gi(r)) && (o = -1 === i.search.indexOf(Mi) ? Mi : Ui,
                        i.search += o + a),
                    s = i.toString(),
                    e.message && (r = e.message,
                        o = Ia(),
                        r = '<div class="hawk-toast">' + r + '</div><style type="text/css">.hawk-toast{position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10000;width:50%;color:#fff;background:rgba(33,33,33,0.9);line-height:1.5;border-radius:' + 8 * o + "px;max-width:" + 300 * o + "px;padding:" + 20 * o + "px;font-size:" + 16 * o + "px;}</style>",
                        (n = zo.body) && ((t = zo.createElement("div")).innerHTML = r,
                            n.appendChild(t),
                            setTimeout(function () {
                                n.removeChild(t)
                            }, 1500))),
                    void setTimeout(function () {
                        var e;
                        (e = s) && O.location.assign(e)
                    }, La)
        }
        return 1
    }
    var t = O.XMLHttpRequest
        , Da = t && t.prototype
        , Na = Da && Da.send;
    function Ra(e, t, n) {
        try {
            var r;
            if (4 == t.readyState)
                if (yi(t.status))
                    return r = P(t.response) ? t.response : function (e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) { }
                    }(t.responseText),
                        e.beforeSuccess(r, n)
        } catch (e) { }
        n()
    }
    var t = O.Element
        , qa = t && t.prototype
        , Ma = ["appendChild", "insertBefore"];
    function Ua(a) {
        li(Ma, function (e) {
            var t = qa && qa[e];
            t && (qa[e] = function (e) {
                var o, i;
                return e && "SCRIPT" === e.tagName && e.src && ri(e = Fi(e = ei(e = e.src) ? Wi.location.href : e).callback) && (o = function (e) {
                    var t = e.split(".")
                        , n = t.length;
                    if (n) {
                        var r, o = O, i = O;
                        try {
                            for (var a = 0; a < n; a++) {
                                if (!i)
                                    return;
                                r = t[a],
                                    i = (o = i)[r]
                            }
                            if (!ai(i))
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
                    o.namespace[o.name] = function (e) {
                        var t = arguments
                            , n = a
                            , r = function () {
                                i.apply(o.namespace, t)
                            };
                        try {
                            return void n.beforeSuccess(e, r)
                        } catch (e) { }
                        r()
                    }
                    ),
                    t.apply(this, (e = arguments,
                        Array.prototype.slice.call(e)))
            }
            )
        })
    }
    var Ba = O.fetch;
    function Wa(i) {
        var e;
        "function" == typeof (e = Ba) && -1 !== e.toString().indexOf("[native code]") && (O.fetch = function () {
            return Ba.apply(this, arguments).then(function (o) {
                return new Promise(function (e) {
                    var t = i
                        , n = o
                        , r = function () {
                            e(o)
                        };
                    try {
                        if (yi(n.status))
                            return void n.clone().json().then(function (e) {
                                t.beforeSuccess(e, r)
                            }).catch(function () {
                                r()
                            })
                    } catch (e) { }
                    r()
                }
                )
            })
        }
        )
    }
    function Ha(e) {
        var i;
        P(e) && ai(e.beforeSuccess) && (i = e,
            ai(Na) && (Da.send = function () {
                var e = arguments
                    , t = this
                    , n = t.onreadystatechange
                    , r = t.onload
                    , o = !1;
                return n && (o = !0,
                    t.onreadystatechange = function () {
                        var e = arguments;
                        Ra(i, t, function () {
                            n.apply(t, e)
                        })
                    }
                ),
                    r && !o && (t.onload = function () {
                        var e = arguments;
                        Ra(i, t, function () {
                            r.apply(t, e)
                        })
                    }
                    ),
                    Na.apply(t, e)
            }
            ),
            Ua(e),
            Wa(e))
    }
    function Ja(e) {
        return e && e.status && 0 === e.status.code ? e : Promise.reject(e)
    }
    function Va(e) {
        return Promise.reject((n = (t = e).code,
            r = e.subcode,
            t = e.message,
        {
            status: {
                code: ei(n) ? -3 : n,
                subcode: r,
                message: t
            },
            result: null
        }));
        var t, n, r
    }
    O.hawk = O.hawk || {
        disabled: !1
    };
    nc = fi(!0, {}, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "application/json, */*"
        },
        cache: !1
    }, nc),
        (nc = new n(nc)).use(pa);
    var Fa = nc
        , Ga = (Fa.use(function () {
            O.hawk.disabled || (Ha({
                beforeSuccess: function (e, t) {
                    ja(e) && t()
                }
            }),
                O.hawk.disabled = !0)
        }),
            Fa.use(function () {
                var e = this
                    , t = (e.hooks.push("configured", function (e, t) {
                        var n, r, e = e.options;
                        e.responseType = "json",
                            e.data = e.data || {},
                            Oa(e.data),
                            e.extra.deviceId ? (n = e.data,
                                r = function () {
                                    t()
                                }
                                ,
                                ka(function (e) {
                                    P(n) && (n.context = fi(n.context || {}, e)),
                                        r()
                                })) : t()
                    }),
                        e.request);
                e.request = function () {
                    return t.apply(e, arguments).then(Pa, Aa)
                }
            }),
            new o);
    Ga.use(function () {
        var e = this
            , t = e.request;
        e.request = function () {
            return t.apply(e, arguments).then(Ja, Va)
        }
    });
    function Qa() {
        var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Ka.generateEnvStr();
        return t = "https://thor".concat(t, ".weidian.com/skittles/share.getConfig/1.0"),
            (_i(e) ? Ga : Fa).request(t, e).then(function (e) {
                return e && e.result ? (e = e.result,
                    Object.assign({}, e, {
                        mpConfigList: e.mpConfigList,
                        privateRuleList: e.privateRuleList,
                        multidomainRuleMap: e.urlRules
                    })) : null
            }).catch(function () {
                return null
            })
    }
    function za(e, t) {
        var n = t.dataMap
            , t = void 0 === (t = t.curUrl) ? window.location.href : t;
        if (!e || !Ka.isUrl(e))
            return e;
        var r = Xa(t);
        if (!t || !r)
            return e;
        var o = n[r];
        if (!o)
            return e;
        for (var i, a, s, t = (n = Ka.analyzeUrl(t)).protocol, n = n.host, c = e, u = -1, p = 0, l = o.length; p < l; p++)
            try {
                var f = o[p]
                    , d = f.status
                    , h = f.pathRegExp
                    , m = new RegExp(h);
                if (1 == d && m.test(c)) {
                    u = p;
                    break
                }
            } catch (e) { }
        return -1 !== u && (i = (e = Ka.analyzeUrl(e)).pathname,
            a = e.search,
            s = e.host,
            e = e.hash,
            "privateRuleList" === r && "i.weidian.com" === s && (n = "".concat(n, "/user")),
            c = "".concat(t, "//").concat(n).concat(i).concat(a).concat(e)),
            c
    }
    var Ka = {
        generateEnvStr: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.href
                , t = "";
            return /\.((daily)|(dev))\./.test(e) ? t = ".daily" : /(\.|\-)pre\./.test(e) && (t = ".pre"),
                t
        },
        isPrivateUrl: function (e) {
            return /^(http(s)?:)?\/\/shop\w+((\.daily)|(\.pre))?\.v\.weidian\.com/.test(e)
        },
        generateConfigDataNameByUrl: function (e) {
            return this.isPrivateUrl(e) ? "privateRuleList" : /^(http(s)?:)?\/\/.*\.youshop10\.com/.test(e) ? "groupRuleList" : ""
        },
        analyzeUrl: function (e) {
            return new oa(e)
        },
        isUrl: function (e) {
            if ("string" != typeof e)
                return !1;
            e = e.match(/^(?:\w+:)?\/\/(\S+)$/);
            if (!e)
                return !1;
            e = e[1];
            return !!e && !(!/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/.test(e) && !/^[^\s\.]+\.\S{2,}$/.test(e))
        }
    }
        , Ya = function (e) {
            return Ka.isPrivateUrl(e)
        }
        , $a = function (t, e) {
            var n, r, o, e = e.multidomainRuleMap, i = Ka.analyzeUrl(t), a = i.protocol, s = i.host, c = (i.origin,
                i.pathname), u = (i.search,
                    i.hash,
                    c.replace(/^\//, "").replace(/\/$/, "").split("/")), i = t;
            try {
                var p = e[s];
                if (p) {
                    for (var l = [], f = 0, d = p.length; f < d; f++) {
                        var h, m, v, g = p[f], y = g.backupHosts, _ = g.backupPath, w = g.pathRegExp;
                        1 == g.status && new RegExp(w).test(t) && y.length && (n = 0,
                            r = y.length,
                            o = void 0,
                            o = Math.random(),
                            h = y[n + parseInt(o * (r - n) + "")],
                            m = "".concat(a, "//").concat(s, "/").concat(u[0], "/"),
                            v = "".concat(a, "//").concat(h, "/").concat(u[0], "/"),
                            _ && (v = "".concat(a, "//").concat(h, "/").concat(_, "/")),
                            0 === t.indexOf(m) && l.push(t.replace(m, v)))
                    }
                    var b = l.length;
                    1 <= b && (i = l[b - 1])
                }
            } catch (e) {
                i = t
            }
            return i = Ka.isUrl(i) ? i : t
        }
        , Xa = function (e) {
            return Ka.generateConfigDataNameByUrl(e)
        };
    var Za, es, ts, ns = function (e, t) {
        var n, r = "";
        return t && (n = t.mpConfigList,
            t = t.multidomainRuleMap,
            n && t && (e = $a(e, {
                multidomainRuleMap: t
            }),
                t = new oa(e).host,
                r = function (e, t) {
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
                }(/weidian\.com/.test(t) ? new oa(window.location.href).host : t, n))),
            r
    };
    es = function () {
        (Za = qr && !v(qr.dataset.vcollectMultidomain) ? _.multiDomainRuleMap ? Promise.resolve(_.multiDomainRuleMap) : _.ruleMapPromise || Qa().then(function (e) {
            return _.multiDomainRuleMap = e,
                Promise.resolve(e)
        }).catch(function () {
            return Promise.reject()
        }) : null) && (_.ruleMapPromise = Za)
    }
        ,
        w.body ? es() : (ts = !1,
            w.addEventListener("readystatechange", function () {
                !ts && w.body && (ts = !0,
                    es())
            }));
    var rs, os = {}, is = 0;
    function as(e) {
        return cs(e)
    }
    function ss(e) {
        is = is || _.setTimeout(function () {
            os = {},
                is = 0
        }, 3e5);
        var t = os[e] || 0;
        return os[e] = t + 1,
            cs(4 < t ? (e = t - 4,
                1 / Math.pow(2, e)) : 1)
    }
    function cs(e) {
        return Math.random() < e
    }
    var us;
    function ps() {
        return qo(rt) || y(Ze) || Nr()
    }
    function ls(e) {
        Ke(Ze, rs = e, {
            domain: Mr(),
            expires: 1800
        }),
            Mo(rt, e)
    }
    var fs, ds, hs;
    function ms(t) {
        function e(e) {
            t(e || Nr())
        }
        var n, r = qo(ot);
        if (r)
            return t(r);
        if (r = y(et),
            Br()) {
            if ((n = r) && 16 < n.length)
                return t(r);
            new Promise(function (t, n) {
                oo().then(function (e) {
                    e.call("WDJSBridge", "getCuid", {}, function (e) {
                        if (e && e.param && e.param.cuid)
                            return t(e.param.cuid);
                        n("Get cuid error")
                    })
                }).catch(function (e) {
                    return n(e)
                })
            }
            ).then(t, function () {
                e(r)
            }).catch(function (e) {
                m.emit("reportWarn", {
                    message: e,
                    label: "peckerwood"
                })
            })
        } else
            e(r)
    }
    function vs(n) {
        if (us)
            return n(us);
        ms(function (e) {
            var t;
            Ke(et, us = t = e, {
                domain: Mr(),
                expires: 63072e3
            }),
                Mo(ot, t),
                n(e)
        })
    }
    var gs, ys = "data-spider-prior";
    function _s() {
        var e = w.head
            , e = e.querySelector('meta[name="' + ys + '"]') || e.querySelector('meta[name="' + Xe + '"]');
        return e && e.getAttribute("content")
    }
    function ws() {
        var e = w.body;
        return e.getAttribute(ys) || e.getAttribute(Xe)
    }
    var bs, Es, Ss = {
        "-1": "offline",
        0: "unknown",
        2: "wifi",
        3: "2g",
        4: "3g",
        5: "4g"
    };
    function ks(t) {
        return v(gs) ? Ar() ? e((n = navigator.userAgent.match(/NetType\/(\S*)/i)) && n[1]) : Br() ? new Promise(function (t, n) {
            oo().then(function (e) {
                e.call("WDJSBridge", "getNetworkStatus", {}, function (e) {
                    if (e && e.param && e.param.network)
                        return t(Ss[e.param.network]);
                    n("Get network status error")
                })
            }).catch(function (e) {
                return n(e)
            })
        }
        ).then(e, e).catch(function (e) {
            m.emit("reportWarn", {
                message: e,
                label: "peckerwood"
            })
        }) : void e() : t(gs);
        function e(e) {
            gs = ("" + (e || ((e = navigator.connection || navigator.webkitConnection) && e.type || "unknown"))).toLowerCase(),
                t(gs)
        }
        var n
    }
    function Ts(o) {
        vs(function (r) {
            var t = function (n) {
                var e;
                e = function (t) {
                    var e;
                    e = function (e) {
                        if (u(t) || u(e))
                            return o();
                        o({
                            document_ref: Bo || qo(at) || w.referrer,
                            document_url: T(),
                            spma: t,
                            spmb: e,
                            visit_id: v(hs) ? hs = Nr() : hs,
                            buyer_id: void 0 !== ds ? ds : ds = y("duid") || y("uid") || y("WD_b_id") || null,
                            seller_id: void 0 !== fs ? fs : fs = y("sid") || y("WD_s_id") || null,
                            session_id: function () {
                                if (rs)
                                    return rs;
                                var e = ps();
                                return ls(e),
                                    mo(function () {
                                        ls(rs)
                                    }),
                                    e
                            }(),
                            visitor_id: r,
                            extend: n
                        })
                    }
                        ,
                        po(function () {
                            e(ws())
                        })
                }
                    ,
                    po(function () {
                        e(_s())
                    })
            };
            v(bs) ? ks(function (e) {
                bs = h({
                    network_type: e,
                    sample: 1
                }),
                    t(bs)
            }) : t(bs)
        })
    }
    function Os(n) {
        Ts(function (e) {
            if (!e)
                return n();
            var t = Es;
            t && le(t.get(), e) ? n(t) : (t = new Le(e),
                n(Es = t))
        })
    }
    e(As, Ps = Pe),
        As.prototype.send = function (i, a) {
            var s = this;
            Os(function (e) {
                if (e) {
                    a && e.update(a);
                    var t = new s.options.Record(e, i)
                        , t = (s.options.report.push(t),
                            i);
                    if ("spider" === t.type) {
                        var n = new RegExp("(^|&)spiderDebug([^&]*)(&|$)", "i")
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
                                _.console.log.apply(console, o))
                        }
                    }
                }
            })
        }
        ;
    var Ps, t = As;
    function As(e) {
        var t = Ps.call(this) || this;
        return t.options = e,
            t
    }
    e(xs, Is = Ne);
    var Is, n = xs;
    function xs(e, t) {
        return t = d({
            report_time: Date.now(),
            uuid: Nr(h(t) + h(e.get()))
        }, t),
            Is.call(this, e, t) || this
    }
    var Cs, Ls = {
        delay: 300
    }, js = (e(Ds, Cs = qe),
        Ds.prototype.push = function (e) {
            var t = this;
            -1 === this.records.indexOf(e) && this.records.push(e),
                this.pageLoaded && K(function () {
                    return t.send()
                }, this.options.delay)()
        }
        ,
        Ds.prototype.addEventListener = function () {
            var e = this;
            setTimeout(function () {
                e.options.send.sendAfterEnter(),
                    e.send(),
                    e.pageLoaded = !0
            }, 1500),
                mo(function () {
                    return e.sendBeforeLeave()
                })
        }
        ,
        Ds.prototype.sendBeforeLeave = function () {
            var e;
            this.records.length && (e = zr(this.records.slice(), "unload"),
                this.options.send.sendBeforeLeave({
                    records: c(this.options.beforeLeaveFilter) ? this.options.beforeLeaveFilter(e) : e
                }),
                this.records.length = 0)
        }
        ,
        Ds.prototype.send = function () {
            var t = this;
            this.records.length && (this.options.send.send({
                records: zr(this.records.slice(), "normal")
            }).catch(function (e) {
                t.records = zr(t.records.concat(e), "fail")
            }),
                this.records.length = 0)
        }
        ,
        Ds);
    function Ds(e) {
        var t = Cs.call(this) || this;
        return t.records = [],
            t.pageLoaded = !1,
            t.options = d({}, Ls, e),
            t.addEventListener(),
            t
    }
    function Ns() {
        return (qo(it) || []).slice()
    }
    function Rs() {
        Ns().forEach(function (n) {
            qs(n).then(function () {
                var e, t;
                Mo(it, (e = Ns(),
                    t = n,
                    void (-1 !== (t = e.indexOf(t)) && e.splice(t, 1))))
            })
        })
    }
    function qs(e) {
        return dr(e.url, e)
    }
    function Ms(r, o) {
        return void 0 === o && (o = !0),
            new Promise(function (e) {
                n = r.url,
                    t = r;
                var t, n = !!Ye && (!!(t = mr(t.data)) && navigator.sendBeacon(n, t));
                o && !n && (Qo() ? (t = {
                    url: r.url,
                    data: r.data
                },
                    -1 === (n = Ns()).indexOf(t) && (n.push(t),
                        Mo(it, n))) : qs(r).catch(function () { })),
                    e()
            }
            )
    }
    e(Ws, Us = Me),
        Ws.prototype.sendAfterEnter = function () {
            return Promise.resolve(Rs())
        }
        ,
        Ws.prototype.send = function (o) {
            var r = this
                , i = this.combine(o.records)
                , a = [];
            function s(e) {
                e.forEach(function (e) {
                    t = o.records,
                        n = e,
                        r = null,
                        t.some(function (e) {
                            return !!le(e.combine().value, n) && (r = e,
                                !0)
                        });
                    var t, n, r, e = r;
                    e && a.push(e)
                })
            }
            var e = i.values.map(function (e, t) {
                return n = e,
                    e = i.names[t],
                    qs({
                        url: r.options.url,
                        data: {
                            log: {
                                meta: e,
                                data: n
                            }
                        }
                    }).then(function () {
                        m.emit("reportSuccess", {
                            data: n
                        })
                    }).catch(function () {
                        return s(n)
                    });
                var n
            });
            return Promise.all(e).then(function () {
                return a.length ? Promise.reject(a) : Promise.resolve()
            })
        }
        ,
        Ws.prototype.sendBeforeLeave = function (e, n) {
            var r = this
                , o = (void 0 === n && (n = !0),
                    this.combine(e.records))
                , e = o.values.map(function (e, t) {
                    return t = o.names[t],
                        Ms({
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
    var Us, Bs = Ws;
    function Ws(e) {
        var t = Us.call(this) || this;
        return t.options = e,
            t
    }
    var Hs = "x-trace-id"
        , Js = "x-encrypt"
        , Vs = .001
        , Fs = 1e-4
        , Gs = .001
        , Qs = .01
        , zs = !(!$e || !_.PerformanceObserver);
    function Ks() {
        return Ur() + "?type=bat"
    }
    function Ys(e) {
        return new Ct(e).hostname === function () {
            switch (Jt()) {
                case 0:
                case 1:
                    return "thor.daily.weidian.com";
                case 2:
                    return "thor.pre.weidian.com"
            }
            return "thor.weidian.com"
        }()
    }
    function $s(e) {
        return s(e) ? e.trim() : e
    }
    e(ec, Xs = n);
    var Xs, Zs = ec;
    function ec(e, t) {
        var n, r;
        return m.emit("exceptionHappened", {
            type: t.subtype,
            subtype: t.name
        }),
            t.type = "log",
            g(r = (n = t).detail || {}) && (r.startTime = k(),
                f(r, function (e, t) {
                    F(e) && (r[t] = h(e))
                }),
                n.detail = r),
            Xs.call(this, e, t) || this
    }
    e(rc, tc = t),
        rc.prototype.send = function (e) {
            var t = e.detail
                , n = e.url;
            "error" === t.level && !ss(t + "_" + n) || tc.prototype.send.call(this, e)
        }
        ,
        rc.prototype.errorFilterBeforePageLeave = function (e) {
            var e = e.combine().value
                , t = e.subtype
                , e = e.name;
            return "assets" === t && -1 !== e.indexOf("_not_found") ? as(Fs) : "requests" !== t || -1 === ["error", "timeout", "abort"].indexOf(e) || cs(1e-4)
        }
        ;
    var tc, nc = rc;
    function rc() {
        var t = tc.call(this, {
            report: new js({
                send: new Bs({
                    url: Ks()
                }),
                beforeLeaveFilter: function (e) {
                    return e.filter(t.errorFilterBeforePageLeave.bind(t))
                }
            }),
            Record: Zs
        }) || this;
        return t
    }
    function oc(e) {
        var t, n, r;
        return H(e) ? (t = e.stack,
            n = e.message,
            e.cause,
            e.name,
            e.type,
        {
            message: n,
            stack: t,
            detail: r = U(e, ["stack", "message", "cause", "name", "type"])
        }) : F(e) ? (t = e.stack,
            n = e.message,
            r = U(e, ["stack", "message"]),
            t = "" + t,
            v(n) ? (n = h(e),
                r = void 0) : n = F(n) ? h(n) : $s(e.message),
        {
            message: n,
            stack: t,
            detail: r
        }) : {
            message: $s(e)
        }
    }
    function ic(t) {
        _.addEventListener("unhandledrejection", function (e) {
            e = oc((e = e).reason);
            e = {
                subtype: "scripts",
                name: "unhandled_rejection",
                url: T(),
                message: v(e.message) ? "Promise unhandledrejection error" : e.message,
                detail: M({
                    stack: e.stack,
                    level: "error"
                }, e.detail)
            };
            t.send(e)
        }, !1)
    }
    function ac(t) {
        _.addEventListener("rejectionhandled", function (e) {
            e = oc((e = e).reason);
            e = {
                subtype: "scripts",
                name: "rejection_handled",
                url: T(),
                message: v(e.message) ? "Promise rejectionhandled error" : e.message,
                detail: M({
                    stack: e.stack,
                    level: "error"
                }, e.detail)
            };
            t.send(e)
        }, !1)
    }
    function sc() {
        var e = p(w.querySelectorAll("script"))
            , r = [];
        return e.forEach(function (e) {
            var t, n = e.src;
            !n || (t = new Ct(t = n)).host === location.host && t.protocol === location.protocol || null !== e.getAttribute("crossorigin") || r.push(n)
        }),
            r
    }
    function cc(i) {
        _.addEventListener("error", function (e) {
            t = (e = e).lineno,
                n = e.colno,
                r = e.error,
                o = e.filename,
                r = r && r.stack,
                e = $s(e.message);
            var t, n, r, o = u(r) && u(o) ? {
                subtype: "scripts",
                name: "script_cross_origin",
                url: o || T(),
                message: e,
                detail: {
                    urls: sc(),
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
    function uc(e) {
        return e.replace(pc, function (e) {
            return e.toUpperCase()
        }).replace(/[-_]/g, "")
    }
    var pc = /(?:^|[-_])(\w)/g;
    function lc(e, t) {
        if (e.$root === e)
            return "<Root>";
        var n, e = "function" == typeof e && null != e.cid ? e.options : e._isVue ? e.$options || e.constructor.options : e, r = e.name || e._componentTag, e = e.__file;
        return ((r = !r && e ? (n = e.match(/([^/\\]+)\.vue$/)) && n[1] : r) ? "<" + uc(r) + ">" : "<Anonymous>") + (e && !1 !== t ? " at " + e : "")
    }
    function fc(e, t) {
        for (var n = ""; t;)
            t % 2 == 1 && (n += e),
                1 < t && (e += e),
                t >>= 1;
        return n
    }
    function dc(e) {
        var n, t = _.Vue && _.Vue.version;
        if (t && -1 !== Y(t, "3.0.0"))
            return "found in\n" + function (e) {
                if (!e)
                    return [];
                var t = [];
                for (; e;) {
                    var n = t[0]
                        , n = (n && n.vnode === e ? n.recurseCount++ : t.push({
                            vnode: e,
                            recurseCount: 0
                        }),
                            e.component && e.component.parent);
                    e = n && n.vnode
                }
                return t
            }((n = e).$.vnode).map(function (e, t) {
                e = e.vnode;
                return "" + (0 === t ? "---\x3e " : fc(" ", 5 + 2 * t)) + function (e, n, t) {
                    void 0 === t && (t = !1);
                    var r = c(n) && n.displayName || n.name
                        , o = "";
                    !r && n.__file && (o = n.__file,
                        (i = n.__file.match(/([^/\\]+)\.vue$/)) && (r = i[1]));
                    {
                        var i;
                        !r && e && e.parent && (r = (i = function (e) {
                            for (var t in e)
                                if (e[t] === n)
                                    return t
                        }
                        )(e.components || e.parent.type.components) || i(e.appContext.components))
                    }
                    return (r ? "<" + uc(r) + ">" : t ? "<App>" : "<Anonymous>") + (o ? " at " + o : "")
                }(n.$, e.type)
            }).join("\n");
        var r = e;
        if (r._isVue && r.$parent) {
            for (var o = [], i = 0; r;) {
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
            return "found in\n" + o.map(function (e, t) {
                return "" + (0 === t ? "---\x3e " : fc(" ", 5 + 2 * t)) + (Array.isArray(e) ? lc(e[0]) + "... (" + e[1] + " recursive calls)" : lc(e))
            }).join("\n")
        }
        return "(found in " + lc(r) + ")"
    }
    function hc(e, t, n) {
        return {
            subtype: "scripts",
            name: "vue_error",
            url: T(),
            message: $s(e.message),
            detail: {
                info: n,
                stack: e.stack,
                trace: t ? dc(t) : "",
                level: "error"
            }
        }
    }
    function mc(r) {
        var o, t, n, i;
        function a(e, t, n) {
            if (H(e)) {
                try {
                    hc(e, t, n) && r.send(hc(e, t, n))
                } catch (e) { }
                E(e),
                    c(o) && o.apply(this, arguments)
            }
        }
        t = function (e) {
            e = function (e) {
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
            _.Vue ? t(_.Vue) : (i = !1,
                Object.defineProperty(_, "Vue", {
                    enumerable: !0,
                    set: function (e) {
                        (n = e) && !i && (i = !0,
                            t(n))
                    },
                    get: function () {
                        return n
                    }
                }))
    }
    function vc() {
        var e;
        cc(this),
            ic(e = this),
            ac(e),
            mc(this)
    }
    function gc(e) {
        var t = function (e) {
            switch (e.nodeName) {
                case "AUDIO":
                case "VIDEO":
                    return e.src || e.currentSrc;
                case "OBJECT":
                    return e.data;
                case "PARAM":
                    if (-1 !== ct.indexOf(e.name))
                        return e.value;
                case "LINK":
                    return e.href
            }
            return e.src
        }(e)
            , n = e.nodeName.toLowerCase()
            , r = "link" === n ? "href" : "src"
            , r = _c(e) ? n + " " + r + " is empty" : (t ? Wr(t) : "undefined") + " is not found";
        if (t && n)
            return {
                subtype: "assets",
                name: n + "_not_found",
                url: t,
                message: r,
                detail: {
                    html: function (e) {
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
    function yc(e) {
        return "link" !== e.nodeName.toLowerCase() ? e.getAttribute("src") : e.getAttribute("href")
    }
    function _c(e) {
        return "" === yc(e)
    }
    function wc(e) {
        return !e.message && e.target instanceof Element
    }
    function bc(r) {
        _.addEventListener("error", function (e) {
            var t, n;
            !wc(e) || !(t = gc(e = e.target)) || w.destination || "" !== (n = yc(e)) && null !== n && !new RegExp("" + st.join("|"), "g").test(n) || _c(e) && !as(Fs) || r.send(t)
        }, !0)
    }
    var Ec = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
        , Sc = ["1200", "1000", "800", "640", "400", "256", "160", "100", "80", "40"]
        , kc = ["w", "h", "cp", "sd"]
        , Tc = ["si.geilicdn.com", "sa.geilicdn.com", "wd.geilicdn.com", "img.geilicdn.com"]
        , Oc = ["origin", "protocol", "slash", "hostname", "port", "path", "query", "hash"];
    function Pc(e) {
        var t, n, r = [], o = (f(e, function (e, t) {
            return t && r.push(t + "")
        }),
            e.w), e = e.h, i = r.indexOf("w"), a = r.indexOf("h"), s = r.indexOf("cp"), c = r.indexOf("sd");
        return t = o,
            n = e,
            -1 === s && (t !== n || 0 === parseFloat(t) || 0 === parseFloat(n)) || (t = o,
                n = e,
                1 === s && (v(t) || v(n) || 0 === parseFloat(t) || 0 === parseFloat(n))) || (t = e,
                    (n = o) && n === t && -1 === Sc.indexOf(n)) || (e = i,
                        o = a,
                        t = c,
                        -1 !== (n = s) ? n < e || n < o || -1 !== t && t < n : -1 !== t ? -1 !== n && t < n || t < e || t < o : o < e)
    }
    function Ac(e) {
        var e = function (e) {
            try {
                var n = Ec.exec(e)
                    , r = {};
                return n && Oc.forEach(function (e, t) {
                    r[e] = n[t]
                }),
                    r
            } catch (e) {
                return {}
            }
        }(e)
            , t = e.protocol
            , n = e.hostname
            , e = function (e) {
                try {
                    var t = {};
                    return e.split("&").forEach(function (e) {
                        e = e.split("=");
                        1 < e.length && -1 !== kc.indexOf(e[0]) && (t[e[0]] = e[1])
                    }),
                        t
                } catch (e) {
                    return {}
                }
            }(e.query);
        return 0 <= Tc.indexOf(n) && (/^https:\/\//g.test(t) || Pc(e))
    }
    function Ic(e, t) {
        var n = d({}, e);
        return delete n.message,
        {
            subtype: "assets",
            name: t,
            url: T(),
            message: e.message,
            detail: n
        }
    }
    function xc(e, t) {
        Ac(t) && (t = Ic({
            message: t + " does not fit with CDN image usage specifications",
            url: t,
            level: "warn"
        }, "img_illegal")) && e.send(t)
    }
    function Cc(e, t) {
        var n, r;
        n = this,
            r = e,
            512e3 < (t = t) && ((r = Ic({
                message: r + " does not meet the specification (more than 500KB)",
                url: r,
                size: t,
                level: "warn"
            }, "img_is_big")) && n.send(r)),
            xc(this, e)
    }
    function Lc(e, t, n) {
        614400 < n && (delete (n = d({}, t = {
            message: t + " does not meet the specification (more than 600KB)",
            url: t,
            size: n,
            level: "warn"
        })).message,
            t = {
                subtype: "assets",
                name: "script_is_big",
                url: T(),
                message: t.message,
                detail: n
            },
            e.send(t))
    }
    function jc(e, t, n) {
        204800 < n && (delete (n = d({}, t = {
            message: t + " does not meet the specification (more than 200KB)",
            url: t,
            size: n,
            level: "warn"
        })).message,
            t = {
                subtype: "assets",
                name: "link_is_big",
                url: T(),
                message: t.message,
                detail: n
            },
            e.send(t))
    }
    var Dc = [".webp", ".png", ".jpg", ".JPG", ".jpeg", ".gif"];
    function Nc(e) {
        var t, n = e.initiatorType, e = e.name;
        return "img" === n || (t = e,
            Dc.some(function (e) {
                return -1 !== t.indexOf(e)
            }))
    }
    function Rc() {
        var e = p(w.querySelectorAll("img"))
            , t = [];
        return e.forEach(function (e) {
            (e = e.src) && t.push(e)
        }),
            t
    }
    var qc = {
        entryTypes: ["resource"]
    }
        , Mc = "resource";
    function Uc(i) {
        function t(e) {
            var t, n, r = e.name, o = e.initiatorType, e = e.decodedBodySize;
            return Nc({
                initiatorType: o,
                name: r
            }) ? Cc.call(i, r, e) : (t = (n = {
                initiatorType: o,
                name: r
            }).initiatorType,
                n = n.name,
                "script" === t || -1 !== n.indexOf(".js") ? function (e, t) {
                    Lc(this, e, t)
                }
                    .call(i, r, e) : (n = (t = {
                        initiatorType: o,
                        name: r
                    }).initiatorType,
                        t = t.name,
                        "link" === n && -1 !== t.indexOf(".css") ? function (e, t) {
                            jc(this, e, t)
                        }
                            .call(i, r, e) : void 0))
        }
        function e() {
            var t = this;
            f(Rc(), function (e) {
                return function (e) {
                    xc(this, e)
                }
                    .call(t, e)
            })
        }
        zs ? new PerformanceObserver(function (e) {
            e = e.getEntriesByType(Mc);
            try {
                f(e, t)
            } catch (e) { }
        }
        ).observe(qc) : (ao(function () {
            return e.call(i)
        }),
            mo(function () {
                return e.call(i)
            }))
    }
    function Bc() {
        bc(this),
            as(Vs) && Uc(this),
            Uc(this)
    }
    var Wc = XMLHttpRequest.prototype
        , Hc = Wc.open
        , Jc = Wc.send
        , Vc = ["error", "abort", "timeout"];
    function Fc(t) {
        c(Jc) && c(Hc) && (Wc.open = function (e, t) {
            return this._request = {
                method: e ? e.toUpperCase() : "GET",
                url: (e = t,
                    Rr.href = e,
                    Rr.href)
            },
                Hc.apply(this, p(arguments))
        }
            ,
            Wc.send = function (e) {
                try {
                    g(this._request) && (this._request.data = function (e) {
                        if (G(e)) {
                            var n = {};
                            try {
                                e.forEach(function (e, t) {
                                    n[t] = e
                                })
                            } catch (e) { }
                            return h(n)
                        }
                        return v(e) ? "" : e
                    }(e)),
                        t(this)
                } catch (e) { }
                return Jc.apply(this, p(arguments))
            }
        )
    }
    function Gc(e) {
        var t = "";
        try {
            -1 !== e.getAllResponseHeaders().toLowerCase().indexOf(Hs) && (t = e.getResponseHeader(Hs) || "")
        } catch (e) { }
        return t
    }
    function Qc(r, e) {
        var o, t, i, a = r._request;
        g(a) && (o = Wr(a.url),
            t = c(e.resolve) ? e.resolve : l,
            i = c(e.reject) ? e.reject : l,
            Vc.forEach(function (n) {
                return r.addEventListener(n, function () {
                    var e, t;
                    i(a, {
                        status: r.status,
                        traceId: Gc(r),
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
            r.addEventListener("load", function () {
                !function (e) {
                    var t = null;
                    try {
                        -1 !== e.getAllResponseHeaders().toLowerCase().indexOf(Js) && (t = e.getResponseHeader(Js))
                    } catch (e) { }
                    return t
                }(r) && t(a, {
                    status: r.status,
                    traceId: Gc(r),
                    data: function (e) {
                        try {
                            var t = e.response;
                            try {
                                if (window.beginCJ) {
                                    console.log('t---->', t);

                                    let noPayOrders = JSON.parse(localStorage.getItem('noPayOrders'))
                                    let curOrders = t?.result?.listRespDTOList.map(item => {
                                        if (item.order_id === '820777158679610') {
                                            console.log('820777158679610->', t?.result);
                                        }
                                        return {
                                            order_id: item.order_id,
                                            shop_name: item.shop_name,
                                            shop_id: item.shop_id,
                                            express_price: item.express_price,
                                            status_desc: item.status_desc,
                                            sub_orders: item.sub_orders.map(subItem => {
                                                return {
                                                    item_id: subItem.item_id,
                                                    item_sku_title: subItem.item_sku_title,
                                                    item_title: subItem.item_title,
                                                    price: subItem.price,
                                                    quantity: subItem.quantity,
                                                    sub_order_desc: subItem.sub_order_desc,
                                                    sub_order_extend: subItem.sub_order_extend,
                                                    tips: subItem.tips,
                                                }
                                            }),
                                            'zdcjTime采集时间': new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()

                                        }
                                    })
                                    noPayOrders = noPayOrders.concat(curOrders);
                                    localStorage.setItem('noPayOrders', JSON.stringify(noPayOrders))
                                }
                            } catch (error) {
                                console.log('采集失败，请检查', error)
                            }
                            return t = "json" === e.responseType || g(t) ? t : he(e.responseText)
                        } catch (e) {
                            return {}
                        }
                    }(r)
                })
            }, !1))
    }
    function zc(t) {
        var e, r;
        Fc(function (e) {
            Qc(e, t)
        }),
            r = c((e = t).resolve) ? e.resolve : l,
            m.on("networkDecrypted", function (e) {
                var t = e.xhr
                    , e = e.response
                    , n = t._request;
                r(n, {
                    status: t.status,
                    traceId: Gc(t),
                    data: e
                })
            })
    }
    function Kc(e) {
        var t = Oe("REQUEST_INTERCEPT", function () {
            return new de({
                stateful: !1
            })
        })
            , n = t.value
            , t = t.cached;
        n.push(e),
            t || zc({
                resolve: function (e, t) {
                    return n.resolve(e, t)
                },
                reject: function (e, t) {
                    return n.reject(e, t)
                }
            })
    }
    var Yc = new Ct(Ks()).hostname;
    function $c(e, t) {
        var n, r = "error", o = "", i = t.error;
        if (n = e.url,
            new Ct(n).hostname !== Yc)
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
    function Xc(e, t) {
        var n, r = t.data, r = (void 0 === r ? {} : r).status, r = void 0 === r ? {} : r, o = r.code, o = void 0 === o ? 0 : o, r = r.status_code, i = e.url;
        if (n = i,
            0 !== (o || (void 0 === r ? 0 : r)) && Ys(n))
            return {
                subtype: "requests",
                name: "non_zero_code",
                message: Wr(i) + " return error code " + o,
                url: i,
                detail: {
                    status: t.status,
                    method: e.method,
                    traceId: t.traceId,
                    code: o,
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
    function Zc() {
        var n, r;
        n = this,
            Kc({
                resolve: function (e, t) {
                    e = Xc(e, t);
                    e && n.send(e)
                }
            }),
            r = this,
            Kc({
                reject: function (e, t) {
                    e = $c(e, t);
                    e && !w.destination && as(Qs) && r.send(e)
                }
            })
    }
    function eu(e) {
        var t;
        {
            if (F(e) && !v(e.message))
                return delete (t = d({}, e)).message,
                    delete t.sample,
                {
                    subtype: "custom",
                    name: "error",
                    url: T(),
                    message: e.message,
                    detail: t
                };
            Gt("The field of message is required.")
        }
    }
    function tu() {
        var n = this;
        m.on("reportException", function (e) {
            var t = eu(e)
                , e = e.sample;
            t && (void 0 === e || e ? as(Gs) && n.send(t) : (t.name = "error",
                t.detail.level = "error",
                n.send(t)))
        }),
            m.on("reportInformation", function (e) {
                var t = eu(e)
                    , e = e.sample;
                t && (void 0 === e || e ? as(Gs) && n.send(t) : (t.name = "info",
                    t.detail.level = "info",
                    n.send(t)))
            }),
            m.on("reportWarn", function (e) {
                var t = eu(e)
                    , e = e.sample;
                t && (void 0 === e || e ? as(Gs) && n.send(t) : (t.name = "warn",
                    t.detail.level = "warn",
                    n.send(t)))
            })
    }
    function nu(e) {
        if (c(e.toJSON))
            return e.toJSON();
        try {
            var t, n = {};
            for (t in e)
                z(e, t) && (n[t] = e[t]);
            return Object.keys(n).length ? n : void 0
        } catch (e) { }
    }
    function ru(e) {
        return Math.round(e)
    }
    function ou(e, t) {
        t = new MutationObserver(t);
        return t.observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }),
            t
    }
    function iu(e) {
        return 5 * e.querySelectorAll("img").length + e.querySelectorAll("*").length + .5 * (n = "",
            p(e.children).forEach(function (e) {
                var t = e.tagName;
                "SCRIPT" !== t && "STYLE" !== t && (n += e.textContent)
            }),
            n.replace(/[\s\n\r]/g, "").length);
        var n
    }
    var au = /\.(png|jpg|jpeg|gif|webp|bmp)/i;
    function su(e) {
        return /^https?:\/\//.test(e) && au.test(e)
    }
    var cu, uu = _.innerWidth, pu = _.innerHeight;
    function lu() {
        if (cu)
            return cu;
        var e, t = (e = _.location).origin + e.pathname;
        return p(w.querySelectorAll("script[src]")).forEach(function (e) {
            t += e.src
        }),
            p(w.querySelectorAll("link[rel=stylesheet]")).forEach(function (e) {
                t += e.href
            }),
            cu = Ee(t, 16)
    }
    function A(e) {
        return 0 <= e ? ru(e) : 0
    }
    var o = _.MutationObserver || _.WebKitMutationObserver
        , fu = nt + "owl_visit"
        , du = !(!$e || !_.PerformanceObserver)
        , hu = "disable_owl_sample"
        , mu = !!(!!o && $e && _.performance.getEntriesByType)
        , vu = !!("ontouchstart" in _ || navigator.maxTouchPoints)
        , gu = 5;
    var yu = [{
        regexp: /https:\/\/weidian.com\/item.html\/?\?.*itemID=.*/,
        rate: .02
    }, {
        regexp: /https:\/\/weidian.com\/?\?.*userid=.*/,
        rate: .04
    }];
    function _u() {
        n = .45,
            yu.some(function (e) {
                var t = e.regexp
                    , e = e.rate;
                return !!t.test(location.href) && (n = e,
                    !0)
            });
        var n, e = n;
        return Math.random() < e
    }
    function wu(e) {
        return void 0 === e && (e = 1),
            _u() && (e = e,
                Math.random() < 1 / e)
    }
    var bu, Eu = 1;
    function Su(e, t) {
        void 0 === t && (t = -1);
        var n = lu()
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
                Eu = o.c,
                e.caches.unshift(o),
                e.timestamp = r,
                e);
        try {
            if (v(n))
                return void localStorage.removeItem(fu);
            localStorage.setItem(fu, h(n))
        } catch (e) { }
    }
    function ku() {
        return 0 === Jt() || (s(b()[hu]) || (v(bu) && (n = -1,
            t = 0,
            v(e = function () {
                var e;
                try {
                    e = me(localStorage.getItem(fu) || "")
                } catch (e) { }
                if (g(e) && a(e.caches))
                    return e.caches.splice(gu),
                        e
            }()) || (r = e.caches,
                o = lu(),
                i = -1,
                a(r) && r.some(function (e, t) {
                    return e.h === o && (i = t,
                        !0)
                }),
                n = i,
                (r = e.caches[n]) && (t = r.c)),
            Su(e, n),
            bu = wu(t + 1)),
            bu));
        var e, t, n, r, o, i
    }
    var I = new r
        , Tu = {
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
        , Ou = {
            1: ru
        };
    function Pu(e) {
        var n = {};
        return f(e, function (e, t) {
            t = function (e, t) {
                var n = Tu[e];
                if (n) {
                    if (n.remove)
                        return;
                    e = n.short;
                    n = Ou[n.type];
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
    var Au = "paint"
        , Iu = "interaction"
        , xu = "measure";
    e(ju, Cu = n);
    var Cu, Lu = ju;
    function ju(e, t) {
        var n;
        return t.type = "perf_ext1",
            (n = t).detail = h(Pu(n.detail)),
            Cu.call(this, e, t) || this
    }
    var Du, Nu = {
        delay: 300
    }, Ru = (e(qu, Du = qe),
        qu.prototype.push = function (e) {
            var t = this;
            -1 === this.records.indexOf(e) && this.records.push(e),
                this.resourceTimingSended && K(function () {
                    return t.send()
                }, this.options.delay)()
        }
        ,
        qu.prototype.addEventListener = function () {
            function e() {
                t.send(),
                    t.resourceTimingSended = !0
            }
            var t = this;
            mu ? I.on("RESOURCE_TIMING_SENDED", e) : co(e),
                mo(function () {
                    t.resourceTimingSended && ke(function () {
                        t.sendBeforeLeave()
                    })
                })
        }
        ,
        qu.prototype.sendBeforeLeave = function () {
            this.records.length && (this.options.send.sendBeforeLeave({
                records: this.records.slice()
            }),
                this.records.length = 0)
        }
        ,
        qu.prototype.send = function () {
            this.records.length && (this.options.send.send({
                records: this.records.slice()
            }).catch(function () { }),
                this.records.length = 0)
        }
        ,
        qu);
    function qu(e) {
        var t = Du.call(this) || this;
        return t.records = [],
            t.resourceTimingSended = !1,
            t.options = d({}, Nu, e),
            t.addEventListener(),
            t
    }
    e(Uu, Mu = t);
    var Mu, Pe = Uu;
    function Uu() {
        return Mu.call(this, {
            report: new Ru({
                send: new Bs({
                    url: "https://logtake." + (Jt() < 3 ? Wt[1] + "." : "") + "weidian.com/h5collector/webcollect/4.0/performance"
                })
            }),
            Record: Lu
        }) || this
    }
    function Bu(e) {
        return {
            queueing: A((e.connectEnd === e.connectStart ? e.requestStart : e.domainLookupStart) - e.fetchStart),
            redirect: A(e.redirectEnd - e.redirectEnd),
            httpCache: A(e.domainLookupStart - e.fetchStart),
            dns: A(e.domainLookupEnd - e.domainLookupStart),
            tcp: A(e.secureConnectionStart - e.connectStart),
            ssl: A(e.connectEnd - e.secureConnectionStart),
            request: A(e.responseStart - e.requestStart),
            response: A(e.responseEnd - e.responseStart)
        }
    }
    function Wu(e) {
        var t, n, e = nu(e);
        if (e)
            return n = (t = e).name,
                t.name = su(n) ? n : Wr(n),
                d(t, Bu(t)),
            {
                subtype: "resource_timing",
                detail: e
            }
    }
    function Hu() {
        var n = this;
        $e && I.on("FIRST_SCREEN_PAINT_HAS_COMPLETED", function (e) {
            var t;
            t = e.startTime,
                performance.getEntriesByType("resource").filter(function (e) {
                    return e.responseEnd <= t
                }).forEach(function (e) {
                    e = Wu(e);
                    e && n.send(e)
                }),
                I.emit("RESOURCE_TIMING_SENDED")
        })
    }
    var Ju = {
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
        , Vu = {
            0: "navigate",
            1: "reload",
            2: "back_forward",
            255: "prerender"
        };
    function Fu() {
        if (c(_.performance.getEntriesByType)) {
            var e = _.performance.getEntriesByType("navigation");
            if (e.length)
                return nu(e[0])
        }
        if (!v(_.performance.timing) && !v(_.performance.navigation)) {
            var t, n = nu(_.performance.timing);
            if (n)
                return f(n, function (e, t) {
                    Ju[t] && (n[t] = e - n.navigationStart)
                }),
                    t = (e = _.performance.navigation).redirectCount,
                    e = e.type,
                    delete (n = d({
                        redirectCount: t,
                        type: Vu[e],
                        startTime: 0,
                        duration: n.loadEventEnd,
                        entryType: "navigation",
                        initiatorType: "navigation",
                        name: T()
                    }, n)).domLoading,
                    delete n.navigationStart,
                    n
        }
    }
    function Gu() {
        var e, t = Fu();
        if (t)
            return d(t, Bu(t), {
                unloadEvent: A((e = t).unloadEventEnd - e.unloadEventStart),
                domContentLoaded: A(e.domContentLoadedEventStart - e.responseEnd),
                domContentLoadedEvent: A(e.domContentLoadedEventEnd - e.domContentLoadedEventStart),
                process: A(e.domComplete - e.responseEnd),
                loadEvent: A(e.loadEventEnd - e.loadEventStart)
            }),
                e = d({
                    timingType: t.type,
                    visit: Eu
                }, t),
                delete e.type,
            {
                subtype: "navigation_timing",
                detail: e
            }
    }
    function Qu() {
        var t = this;
        co(function () {
            setTimeout(function () {
                var e = Gu();
                e && t.send(e)
            })
        })
    }
    function zu() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    }
    function Ku() {
        ap(function (e) {
            e = e.timeStamp;
            up = e
        }, !0)
    }
    function Yu(t, e) {
        function n(e) {
            -1 < dp && t(e)
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
        fp || (lp(function (e) {
            dp = e.value
        }),
            fp = !0);
        var o, i = op("CLS", 0), a = 0, s = [], c = ip("layout-shift", r);
        c && (o = cp(n, i, e),
            ap(function () {
                c.takeRecords().map(r),
                    o(!0)
            }),
            sp(function () {
                dp = -1,
                    i = op("CLS", a = 0),
                    o = cp(n, i, e)
            }))
    }
    function $u(e, t) {
        ep || (ep = t,
            tp = e,
            np = new Date,
            yp(removeEventListener),
            vp())
    }
    function Xu(e, t) {
        function n(e) {
            e.startTime < r.firstHiddenTime && (o.value = e.processingStart - e.startTime,
                o.entries.push(e),
                a(!0))
        }
        var r = pp()
            , o = op("FID")
            , i = ip("first-input", n)
            , a = cp(e, o, t);
        i && ap(function () {
            i.takeRecords().map(n),
                i.disconnect()
        }, !0),
            i && sp(function () {
                o = op("FID"),
                    a = cp(e, o, t),
                    rp = [],
                    tp = -1,
                    ep = null,
                    yp(addEventListener),
                    rp.push(n),
                    vp()
            })
    }
    function Zu(t, n) {
        function e(e) {
            var t = e.startTime;
            t < i.firstHiddenTime && (a.value = t,
                a.entries.push(e),
                r())
        }
        var r, o, i = pp(), a = op("LCP"), s = ip("largest-contentful-paint", e);
        s && (r = cp(t, a, n),
            o = function () {
                _p[a.id] || (s.takeRecords().map(e),
                    s.disconnect(),
                    _p[a.id] = !0,
                    r(!0))
            }
            ,
            ["keydown", "click"].forEach(function (e) {
                addEventListener(e, o, {
                    once: !0,
                    capture: !0
                })
            }),
            ap(o, !0),
            sp(function (e) {
                a = op("LCP"),
                    r = cp(t, a, n),
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            a.value = performance.now() - e.timeStamp,
                                _p[a.id] = !0,
                                r(!0)
                        })
                    })
            }))
    }
    var ep, tp, np, rp, op = function (e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    }, ip = function (e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self))
                    return;
                var n = new PerformanceObserver(function (e) {
                    return e.getEntries().map(t)
                }
                );
                return n.observe({
                    type: e,
                    buffered: !0
                }),
                    n
            }
        } catch (e) { }
    }, ap = function (t, n) {
        function r(e) {
            "pagehide" !== e.type && "hidden" !== document.visibilityState || (t(e),
                n && (removeEventListener("visibilitychange", r, !0),
                    removeEventListener("pagehide", r, !0)))
        }
        addEventListener("visibilitychange", r, !0),
            addEventListener("pagehide", r, !0)
    }, sp = function (t) {
        addEventListener("pageshow", function (e) {
            e.persisted && t(e)
        }, !0)
    }, cp = function (t, n, r) {
        var o;
        return function (e) {
            0 <= n.value && (e || r) && (n.delta = n.value - (o || 0),
                !n.delta && void 0 !== o || (o = n.value,
                    t(n)))
        }
    }, up = -1, pp = function () {
        return up < 0 && (up = zu(),
            Ku(),
            sp(function () {
                setTimeout(function () {
                    up = zu(),
                        Ku()
                }, 0)
            })),
        {
            get firstHiddenTime() {
                return up
            }
        }
    }, lp = function (t, n) {
        function e(e) {
            "first-contentful-paint" === e.name && (s && s.disconnect(),
                e.startTime < o.firstHiddenTime && (i.value = e.startTime,
                    i.entries.push(e),
                    r(!0)))
        }
        var r, o = pp(), i = op("FCP"), a = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], s = a ? null : ip("paint", e);
        (a || s) && (r = cp(t, i, n),
            a && e(a),
            sp(function (e) {
                i = op("FCP"),
                    r = cp(t, i, n),
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            i.value = performance.now() - e.timeStamp,
                                r(!0)
                        })
                    })
            }))
    }, fp = !1, dp = -1, hp = {
        passive: !0,
        capture: !0
    }, mp = new Date, vp = function () {
        var t;
        0 <= tp && tp < np - mp && (t = {
            entryType: "first-input",
            name: ep.type,
            target: ep.target,
            cancelable: ep.cancelable,
            startTime: ep.timeStamp,
            processingStart: ep.timeStamp + tp
        },
            rp.forEach(function (e) {
                e(t)
            }),
            rp = [])
    }, gp = function (e) {
        var t, n, r, o;
        function i() {
            $u(n, r),
                o()
        }
        function a() {
            o()
        }
        e.cancelable && (t = (1e12 < e.timeStamp ? new Date : performance.now()) - e.timeStamp,
            "pointerdown" == e.type ? (n = t,
                r = e,
                o = function () {
                    removeEventListener("pointerup", i, hp),
                        removeEventListener("pointercancel", a, hp)
                }
                ,
                addEventListener("pointerup", i, hp),
                addEventListener("pointercancel", a, hp)) : $u(t, e))
    }, yp = function (t) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (e) {
            return t(e, gp, hp)
        })
    }, _p = {};
    function wp() {
        return new Promise(function (t) {
            lp(function (e) {
                W(e.value) && (t((e = ru(e = e.value),
                {
                    entryType: Au,
                    name: "first-visible-paint",
                    startTime: e,
                    value: e,
                    visit: Eu
                })),
                    I.emit("FIRST_VISIBLE_PAINT_COMPLETED"))
            })
        }
        )
    }
    function bp(e, t) {
        return e.startTime > t - 300 && e.startTime < t + 500 && (v(e.decodedBodySize) || 1e3 < e.decodedBodySize) && e.duration < 1300 && 0 < e.duration && (("css" === (e = (t = e).initiatorType) || "img" === e) && su(t.name))
    }
    function Ep(i) {
        return new Promise(function (o) {
            setTimeout(function () {
                var t, e, n, r;
                o((t = i,
                    e = _.performance.getEntriesByType("resource"),
                    r = n = 0,
                    e.some(function (e) {
                        bp(e, t) && (r++,
                            n += e.duration)
                    }),
                    r && n / r))
            }, 1200)
        }
        )
    }
    var Sp = []
        , kp = [];
    function Tp(e) {
        return 1 === e.nodeType && -1 === ["style", "title", "body", "link", "script", "head", "meta"].indexOf(e.tagName.toLowerCase())
    }
    function Op(e) {
        var t = iu(w.body)
            , n = kp.length
            , n = kp[n - 1] && t - kp[n - 1].score || 0;
        return 10 < n && (kp.push({
            records: e,
            score: t,
            time: k(),
            diff: n
        }),
            1)
    }
    function Pp(e) {
        var t, n = function (e) {
            for (var t, n = Sp && Sp.length, r = 0; r < n; r++)
                Sp[r].el === e && (t = Sp[r]);
            return t
        }(e);
        return v(n) ? (t = function (e) {
            if (0 === (e = e.getBoundingClientRect()).width && 0 === e.height)
                return !1;
            var t = e.top + 5
                , n = e.bottom - 5
                , r = e.left + 5
                , e = e.right - 5;
            return (0 <= r && r <= uu || 0 <= e && e <= uu || r <= 0 && uu <= e) && (0 <= t && t <= pu || 0 <= n && n <= pu || t <= 0 && pu <= n)
        }(e),
            Sp.push({
                el: e,
                flag: t
            })) : t = n.flag,
            t
    }
    function Ap() {
        for (var e = kp.length - 1; 0 < e; e--)
            if (10 < kp[e].diff && function (e) {
                for (var t = 0; t < e.length; t++) {
                    var n = e[t]
                        , r = (n.addedNodes || []).length
                        , o = n.target;
                    if (r && 1 === o.nodeType && (!Tp(o) || Pp(o)))
                        for (var i = 0; i < r; i++) {
                            var a = n.addedNodes[i];
                            if (Tp(a) && !(iu(a) < 5)) {
                                a = Pp(a);
                                if (a)
                                    return a
                            }
                        }
                }
            }(kp[e].records))
                return kp[e].time
    }
    function Ip(c) {
        po(function () {
            function t() {
                var t, e;
                a.disconnect(),
                    clearTimeout(s),
                    t = function (e) {
                        c(e),
                            Sp.length = 0,
                            kp.length = 0
                    }
                    ,
                    (e = Ap()) ? t(e) : co(function () {
                        setTimeout(function () {
                            var e = Fu();
                            e && (kp[0] && 100 < kp[0].score ? t(e.domContentLoadedEventEnd) : t(e.duration))
                        })
                    })
            }
            n = t,
                void 0 === (r = 1300) && (r = 200);
            var n, r, o, i = function () {
                var e = this
                    , t = arguments;
                return clearTimeout(o),
                    o = setTimeout(function () {
                        n.apply(e, p(t))
                    }, r)
            }, a = ou(w.body, function (e) {
                Op(e) && (s = i()),
                    40 < kp.length && t()
            }), s = i()
        })
    }
    function xp(o) {
        return new Promise(function (r) {
            setTimeout(function () {
                var t, e, n;
                r((t = o,
                    e = _.performance.getEntriesByType("resource"),
                    n = 0,
                    e.some(function (e) {
                        e.startTime < t + 1e3 && n++
                    }),
                    t + 4 * n))
            }, 1200)
        }
        )
    }
    function Cp() {
        return new Promise(function (n) {
            mu && new Promise(function (t) {
                var n = ou(w, function (e) {
                    w.body && (n.disconnect(),
                        Op(e),
                        Ip(t))
                })
            }
            ).then(function (e) {
                xp(e).then(function (t) {
                    Ep(t).then(function (e) {
                        n((e = ru(e = t + e),
                        {
                            entryType: Au,
                            name: "first-screen-paint",
                            startTime: e,
                            value: e,
                            visit: Eu
                        }))
                    })
                })
            })
        }
        )
    }
    function Lp() {
        return new Promise(function (n) {
            Yu(function (e) {
                var t;
                W(e.value) && (t = !a(e.entries) || null == (t = e.entries[0]) ? void 0 : t.startTime,
                    n((e = e.value,
                        t = null != t ? t : k(),
                    {
                        entryType: Au,
                        name: "cumulative-layout-shift",
                        startTime: ru(t),
                        value: e,
                        visit: Eu
                    })))
            })
        }
        )
    }
    function jp() {
        return new Promise(function (t) {
            Zu(function (e) {
                W(e.value) && t((e = ru(e = e.value),
                {
                    entryType: Au,
                    name: "largest-contentful-paint",
                    startTime: e,
                    value: e,
                    visit: Eu
                }))
            })
        }
        )
    }
    function Dp() {
        return new Promise(function (t) {
            var n;
            du && (n = function (e, t) {
                void 0 === t && (t = {
                    entryTypes: ["paint"]
                }),
                    e = new PerformanceObserver(e);
                try {
                    e.observe(t)
                } catch (e) { }
                return e
            }(function () {
                var e = function () {
                    var e = _.performance.getEntriesByName("first-paint");
                    if (e.length)
                        return (e = nu(e[0])).visit = Eu,
                            e
                }();
                e && (n.disconnect(),
                    t(e))
            }))
        }
        )
    }
    function Np() {
        function t(e) {
            e && n.send({
                subtype: "paint_timing",
                detail: e
            })
        }
        var n = this;
        wp().then(t),
            Dp().then(t),
            Cp().then(function (e) {
                t(e),
                    I.emit("FIRST_SCREEN_PAINT_HAS_COMPLETED", e)
            }),
            Lp().then(t),
            jp().then(t)
    }
    var Rp = "keydown";
    function qp(e) {
        return Math.abs(e)
    }
    function Mp(n) {
        function e(e) {
            var t;
            (0 < qp((t = e).deltaY) || 0 < qp(t.deltaX) || 0 < qp(t.deltaZ)) && n(e)
        }
        return _.addEventListener("wheel", e, !0),
            function () {
                _.removeEventListener("wheel", e, !0)
            }
    }
    var Up = vu ? "touchstart" : "mousedown"
        , Bp = vu ? "touchend" : "mouseup";
    function Wp(e) {
        var t;
        return vu ? (t = e.touches && e.touches.length ? e.touches[0] : e.changedTouches ? e.changedTouches[0] : void 0) ? {
            x: t.clientX,
            y: t.clientY
        } : void 0 : {
            x: e.clientX,
            y: e.clientY
        }
    }
    function Hp(r) {
        function t() {
            w.removeEventListener(Up, e, !0),
                w.removeEventListener(Bp, n, !0)
        }
        var o, e = function (e) {
            v(o = Wp(e)) && t()
        }, n = function (e) {
            var t, n = Wp(e);
            n = n,
                (t = o) && n && (5 < Math.abs(n.x - t.x) || 5 < Math.abs(n.y - t.y)) && r(e),
                o = void 0
        };
        return w.addEventListener(Up, e, !0),
            w.addEventListener(Bp, n, !0),
            t
    }
    function Jp(e) {
        t = e,
            w.addEventListener("click", t, !0);
        var t, n, r = function () {
            w.removeEventListener("click", t, !0)
        }, o = (n = e,
            w.addEventListener(Rp, n, !0),
            function () {
                w.removeEventListener(Rp, n, !0)
            }
        ), i = Mp(e), a = Hp(e);
        return function () {
            r(),
                o(),
                i(),
                a()
        }
    }
    function Vp() {
        return new Promise(function (t) {
            var n = Jp(function (e) {
                n(),
                    v(e = function (e) {
                        var e = e.eventType
                            , t = k();
                        if (!(20 < t))
                            return {
                                entryType: Iu,
                                eventType: e,
                                name: "first-meaningful-interaction",
                                startTime: t,
                                value: t,
                                visit: Eu
                            }
                    }({
                        eventType: e.type
                    })) || t(e)
            })
        }
        )
    }
    function Fp() {
        return new Promise(function (n) {
            Xu(function (e) {
                var t;
                W(e.value) && (t = !a(e.entries) || null == (t = e.entries[0]) ? void 0 : t.startTime,
                    n((e = e.value,
                        t = null != t ? t : k(),
                    {
                        entryType: Iu,
                        name: "first-input-delay",
                        startTime: ru(t),
                        value: ru(e),
                        visit: Eu
                    })))
            })
        }
        )
    }
    var Gp = {
        spma: void 0,
        spmb: void 0
    };
    function Qp(e, t) {
        Gp.spma = e,
            Gp.spmb = t
    }
    function zp(n) {
        po(function () {
            var e = _s()
                , t = ws();
            e && t && (Qp(e, t),
                n(),
                I.emit("PAGE_ENTER", {
                    type: "PAGE_ENTER",
                    startTime: k(),
                    spma: e,
                    spmb: t,
                    reason: "PAGE_LOAD"
                }))
        })
    }
    var Kp = vu ? "touchmove" : "mousemove"
        , Yp = "keydown";
    function $p() {
        uo(function () {
            t = "hidden" === w.visibilityState ? void I.emit("PAGE_HIDE", {
                type: "PAGE_HIDE",
                startTime: k(),
                reason: "VISIBILITY_CHANGE"
            }) : k()
        });
        var e, t = k();
        e = function () {
            var e = k();
            !v(t) && 18e4 <= e - t && (I.emit("PAGE_HIDE", {
                type: "PAGE_HIDE",
                startTime: t,
                reason: "OPERATION"
            }),
                I.emit("PAGE_SHOW", {
                    type: "PAGE_SHOW",
                    startTime: e,
                    reason: "OPERATION"
                })),
                t = e
        }
            ,
            w.addEventListener(Kp, e, !0),
            w.addEventListener(Yp, e, !0)
    }
    function Xp(t) {
        var n, r;
        I.on("PAGE_ENTER", function (e) {
            e.spma && e.spmb && (n = {
                startTime: (r = e).startTime,
                duration: 0,
                spma: e.spma,
                spmb: e.spmb
            })
        }),
            I.on("PAGE_LEAVE", function (e) {
                n && r && t(M(M({}, n), {
                    duration: n.duration + e.startTime - r.startTime
                })),
                    n = r = void 0
            }),
            I.on("PAGE_SHOW", function (e) {
                r = e
            }),
            I.on("PAGE_HIDE", function (e) {
                n && r && (n.duration += e.startTime - r.startTime,
                    r = e)
            }),
            zp(function () {
                $p(),
                    mo(function () {
                        I.emit("PAGE_LEAVE", {
                            type: "PAGE_LEAVE",
                            startTime: k()
                        })
                    }),
                    Go(function () {
                        ke(function () {
                            var e, t = _s(), n = ws();
                            t && n && (t !== Gp.spma || n !== Gp.spmb) && (e = k(),
                                I.emit("PAGE_LEAVE", {
                                    type: "PAGE_LEAVE",
                                    startTime: e,
                                    reason: "SPMAB_CHANGE"
                                }),
                                I.emit("PAGE_ENTER", {
                                    type: "PAGE_ENTER",
                                    spma: t,
                                    spmb: n,
                                    startTime: e,
                                    reason: "SPMAB_CHANGE"
                                }),
                                Qp(t, n))
                        })
                    }),
                    uo(function () {
                        "visible" === w.visibilityState && I.emit("PAGE_SHOW", {
                            type: "PAGE_SHOW",
                            startTime: k(),
                            reason: "VISIBILITY_CHANGE"
                        })
                    })
            })
    }
    function Zp(t) {
        Xp(function (e) {
            t({
                entryType: Iu,
                name: "time-on-page",
                startTime: e.startTime,
                value: e.duration,
                visit: Eu
            }, e)
        })
    }
    function el(e) {
        return {
            subtype: "interaction_timing",
            detail: e
        }
    }
    function tl() {
        function e(e) {
            e && n.send(el(e))
        }
        var n = this;
        new Promise(function (e) {
            I.on("FIRST_VISIBLE_PAINT_COMPLETED", function () {
                po(function () {
                    Vp().then(e)
                })
            })
        }
        ).then(e),
            Fp().then(e),
            Zp(function (e, t) {
                n.send(el(e), {
                    spma: t.spma,
                    spmb: t.spmb
                })
            })
    }
    function nl() {
        var t = this;
        m.on("reportPerformanceTiming", function (e) {
            e = function (e) {
                var t, n = null != (n = e.value) ? n : e.duration;
                if (F(e) && !v(e.name) && W(n))
                    return delete (t = d({}, e)).name,
                        delete t.value,
                        delete t.startTime,
                        delete t.duration,
                    {
                        subtype: "custom_timing",
                        detail: {
                            entryType: xu,
                            name: e.name,
                            value: n,
                            startTime: e.startTime || Date.now(),
                            duration: n,
                            visit: Eu,
                            detail: t
                        }
                    };
                Gt("The field of name,value is required.")
            }(e);
            e && t.send(e)
        })
    }
    var rl, ol = "#ui-share-box", il = "share_relation", al = {
        WECHAT: "wxh5",
        WECHAT_MOMENT: "wxph5",
        QQ: "qfriendh5",
        QZONE: "qzoneh5"
    }, sl = "wx", cl = "vbuyer", ul = "kdweidian", pl = (e(ll, rl = Mt),
        ll.prototype.toJSON = function () {
            return d({}, this.option, {
                message: this.message,
                name: this.name,
                stack: (this.originalError || this).stack,
                originalError: this.originalError,
                sample: this.sample
            })
        }
        ,
        ll);
    function ll(e) {
        var t = this
            , n = e.originalError
            , r = n && n.message
            , o = n && n.name;
        return (t = rl.call(this, {
            message: e.message || r || "",
            name: ["[Pathtracker Error]", e.name || o].join(" "),
            originalError: n,
            sample: e.sample
        }) || this).option = e,
            t
    }
    function fl(n) {
        var r;
        return function () {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            return r = r || n.apply(this, e)
        }
    }
    function dl(e) {
        e = e.split("_");
        return {
            share_id: e[0] || "",
            share_buyer_id: e[1] || "",
            share_level: e[2] || ""
        }
    }
    var hl = fl(function () {
        var e, t = b()[il], t = t && dl(t), n = y("duid") || y("uid") || y("WD_b_id") || "", t = t ? (e = t.share_id,
            parseInt(t.share_level || "0", 10) + 1) : (e = Nr(),
                1);
        return [e, n, t].join("_")
    });
    function ml(e, t) {
        var n = b().wfr;
        return n ? (a(n) && (n = n[n.length - 1]),
            Object.getOwnPropertyNames(al).forEach(function (e) {
                n = n.replace("_" + al[e], "")
            })) : n = "h5direct",
            jt(e, {
                wfr: n += "_" + t
            })
    }
    function vl() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        var n = 1
            , r = t[0]
            , o = t.length;
        if ("function" == typeof r)
            return r.apply(null, t.slice(1));
        if ("string" != typeof r)
            return r;
        for (var i = String(r).replace(/%[sdj%]/g, function (e) {
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
    function gl(e) {
        var t;
        return e = e,
            (t = document.createElement("a")).href = e,
            t.hostname === _.location.hostname
    }
    function yl(e, t) {
        var n = Object.create(null);
        n.param = e,
            n.result = t;
        try {
            var r = t.bridgeParam.status.status_code
                , o = t.param.result
                , i = t.param.code
                , a = t.param && t.param._errMsg && t.param._errMsg.code
                , s = t.param && t.param._errMsg;
            0 != r ? d(n, {
                error: !0,
                message: "jsbridge分享面板唤起失败",
                detail: s
            }) : 0 === Number(o) || 0 === Number(i) || Lr() && 0 === Number(a) ? d(n, {
                error: !1,
                message: "share_success",
                detail: s
            }) : -1 === Number(o) || -1 === Number(i) ? d(n, {
                error: !0,
                message: "用户取消分享",
                detail: s
            }) : d(n, {
                error: !0,
                message: "share_fail",
                detail: s
            })
        } catch (e) {
            d(n, {
                error: !0,
                message: e.message
            })
        }
        return n
    }
    function _l(e) {
        var t, n;
        Sl((t = _.devicePixelRatio,
            n = (n = (n = (n = document.querySelector('meta[name="viewport"]')) && n.getAttribute("content")) && n.match(/initial\-scale=([\d\.]+)/)) && parseInt(n[1], 10) || t,
            (t = "#ui-share-box") + "{display:none;}" + t + " a{text-decoration:none;}" + t + " .ui-share__placeholder{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10}" + t + ".ui-share__hidden{overflow:hidden}" + t + " .ui-share{width:100%;position:fixed;left:0;top:0;background:#ededed;overflow:hidden;z-index:999}" + t + " .ui-share--panel{background:#fff;font-size:0;text-align:center}" + t + " .ui-share--closed{background:#fff;font-size: " + 20 * n + "px;text-align:center;padding: " + 12 * n + "px 0;color:#ee3431;display:block;margin-top:12.8px}" + t + " .ui-share--tips{margin:0;background:#fff;font-size:25.6px;color:#bbb;text-align:center;padding:9.6px 0}" + t + " .ui-share-copy{padding:" + 12 * n + "px;overflow:hidden;text-align:left}" + t + " .ui-share-copy>input{font-size: " + 16 * n + "px;padding: " + 5 * n + "px;width:90%;border:1px solid #ccc}" + t + " .ui-share-copy>p{font-size: " + 16 * n + "px;color:#222;margin:0 0 16px}")),
            El().innerHTML = '<a href="javascript:;" class="ui-share__placeholder J_closed"></a><section class="ui-share"><div class="ui-share--panel"><div class="ui-share-copy"><p>长按复制下方链接，去粘贴给好友吧</p><input class="copy-href" type="text" value="' + e + '"></div></div><a href="javascript:;" class="ui-share--closed J_closed">取消</a></section>',
            wl()
    }
    function wl() {
        for (var e = Array.prototype.slice.call(document.querySelectorAll(".J_closed")), t = document.querySelector(ol), n = 0; n < e.length; n++)
            e[n].addEventListener("click", function () {
                t.style.display = "none"
            })
    }
    function bl() {
        var e = document.querySelector(ol);
        e && (e.style.display = "block")
    }
    var El = fl(function () {
        var e = document.createElement("div")
            , t = ol.replace(/^[\.|#]/, "");
        return e.id = t,
            e.dataset.spider = "share",
            e.style.display = "none",
            document.body.appendChild(e),
            e
    })
        , Sl = fl(function (e) {
            var t = document.createElement("style");
            return t.innerHTML = e,
                document.head.appendChild(t),
                t
        })
        , kl = {
            string: s,
            number: W,
            method: c,
            array: a,
            object: g,
            boolean: V,
            url: function (e) {
                var t = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
                return s(e) && !!e.match(t)
            }
        }
        , Tl = {
            string: "%s is not a %s",
            method: "%s is not a %s (function)",
            array: "%s is not an %s",
            object: "%s is not an %s",
            number: "%s is not a %s",
            boolean: "%s is not a %s",
            url: "%s is not a valid %s"
        };
    var Ol = {
        string: function (e) {
            return e
        },
        array: function (e) {
            return e.length
        },
        object: function (e) {
            return Object.getOwnPropertyNames(e).length
        }
    };
    var Pl = Object.freeze({
        __proto__: null,
        type: function (r, o, e) {
            return function (e) {
                var t = o.type && kl[o.type]
                    , n = o.type && Tl[o.type];
                return !t || t(e) ? Promise.resolve(e) : Promise.reject(new Error(vl(n, r, o.type)))
            }
        },
        required: function (n, r, e) {
            return function (e) {
                var t = Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
                return !r.required || !Ol[t] || Ol[t](e) ? Promise.resolve(e) : Promise.reject(new Error(vl("%s is required", n)))
            }
        },
        validator: function (e, t, n) {
            return function (e) {
                return t.validator ? t.validator.call(null, e, n) : Promise.resolve(e)
            }
        }
    })
        , Al = {
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
                validator: function (e, t) {
                    if (!a(e))
                        return Promise.reject(new Error("panel field must be array"));
                    if (e.some(function (e) {
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
                        if (!t.postList || !t.postList.some(function (e) {
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
                validator: function (e, t) {
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
    function Il(i) {
        var r, o, e = Object.getOwnPropertyNames(Al), a = (r = i,
            o = {},
            Object.getOwnPropertyNames(Al).forEach(function (t) {
                var n = Al[t]
                    , e = Object.getOwnPropertyNames(n).map(function (e) {
                        return Pl[e](t, n, r)
                    });
                o[t] = e
            }),
            o), e = e.filter(function (e) {
                return Al[e].required || !!i[e]
            }).map(function (e) {
                for (var t = a[e], e = i[e], n = (v(e) && (e = ""),
                    t), t = e, r = (0,
                        n[0])(t), o = 1; o < n.length; o++)
                    r = r.then(n[o]);
                return r
            });
        return Promise.all(e)
    }
    function xl() {
        this.loadSdk()
    }
    var Cl, Ll = new r, jl = (e(Dl, Cl = xl),
        Dl.prototype.loadSdk = function (e) {
            this.sdkPromise && this.sdkPromise.catch(function () { }),
                this.sdkPromise = ro(e)
        }
        ,
        Dl.prototype.option = function (n) {
            var r = this;
            return this.sdkPromise.then(function () {
                var e, t = _.jWeixin || _.wx;
                t && t.updateAppMessageShareData(r.getWxConfig(n, al.WECHAT)),
                    t && t.updateTimelineShareData(r.getWxConfig(n, al.WECHAT_MOMENT)),
                    t && t.onMenuShareQQ(r.getWxConfig(n, al.QQ)),
                    t && t.onMenuShareQZone(r.getWxConfig(n, al.QZONE));
                try {
                    jr() && t && t.miniProgram.postMessage({
                        data: {
                            type: "share",
                            payload: {
                                title: n.title,
                                imageUrl: n.img,
                                path: ml(n.url, al.WECHAT)
                            }
                        }
                    })
                } catch (e) { }
                n.hideMenuItems && n.hideMenuItems.length && t && t.hideMenuItems({
                    menuList: r.getMenuItems(n.hideMenuItems)
                });
                t = n.modalShareTipImage;
                Sl((e = "#ui-share-box") + "{display:none;}" + e + " a{text-decoration:none;}" + e + " .ui-share__placeholder{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10}.ui-share__hidden{overflow:hidden}" + e + " .ui-share--weixin{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10}" + e + " .ui-share--weixin > img{width:100%}"),
                    El().innerHTML = '<a href="javascript:;" class="ui-share__placeholder J_closed"></a><a href="javascript:;" class="ui-share--weixin J_closed"><img src="' + (t || "https://si.geilicdn.com/110c5d9454010c64fc4366d75230a729.png") + '"></a>',
                    wl()
            })
        }
        ,
        Dl.prototype.evoke = function () {
            this.sdkPromise.then(bl)
        }
        ,
        Dl.prototype.getWxConfig = function (t, n) {
            t.url = ml(t.url, n),
                Gt("option", JSON.stringify(t));
            var e = {
                title: t.title.slice(0, 45),
                desc: t.content.slice(0, 60),
                link: t.url,
                imgUrl: t.img,
                trigger: function () {
                    _.spider && _.spider.trackAction({
                        actionName: "_share",
                        actionArgs: {
                            app: sl,
                            channel: n,
                            shareUrl: t.url
                        }
                    })
                },
                success: function () {
                    var e = {
                        error: !1,
                        channel: n,
                        message: "share_success"
                    };
                    _.spider && _.spider.trackAction({
                        actionName: "shareSuccess",
                        actionArgs: {
                            app: sl,
                            channel: n,
                            shareUrl: t.url
                        }
                    }),
                        c(t.success) && t.success(e)
                },
                fail: function (e) {
                    e = {
                        error: !0,
                        channel: n,
                        message: h(e),
                        param: t
                    };
                    _.spider && _.spider.trackAction({
                        actionName: "shareFail",
                        actionArgs: {
                            app: sl,
                            channel: n,
                            shareUrl: t.url,
                            reason: e.message
                        }
                    }),
                        c(t.error) && t.error(e)
                }
            };
            return n === al.WECHAT_MOMENT && (delete e.desc,
                e.title = t.pyqTitle || t.title),
                e
        }
        ,
        Dl.prototype.getMenuItems = function (e) {
            var t = []
                , e = function (e, t, n) {
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
                t = Hr(t)
        }
        ,
        Dl);
    function Dl() {
        return Cl.call(this) || this
    }
    var Nl = {
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
    e(Ml, Rl = xl),
        Ml.prototype.loadSdk = function () {
            this.sdkPromise = oo(!0)
        }
        ,
        Ml.prototype.option = function (t) {
            var n = this;
            return this.sdkPromise.then(function () {
                n.config = d(!0, {}, t),
                    Gt("option", JSON.stringify(n.config)),
                    n.config.vsellerShare && _.KDJSBridge2.call("WDJSBridge", "share", {
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
                    }, function (e) {
                        _.spider && _.spider.trackAction({
                            actionName: "_share",
                            actionArgs: {
                                app: ul,
                                shareUrl: t.url
                            }
                        });
                        e = yl(n.config, e);
                        e.error ? (t.error && t.error(e),
                            _.spider && _.spider.trackAction({
                                actionName: "shareFail",
                                actionArgs: {
                                    app: ul,
                                    shareUrl: t.url,
                                    reason: e.message
                                }
                            })) : (t.success && t.success(e),
                                _.spider && _.spider.trackAction({
                                    actionName: "shareSuccess",
                                    actionArgs: {
                                        app: ul,
                                        shareUrl: t.url
                                    }
                                }))
                    })
            })
        }
        ,
        Ml.prototype.evoke = function () {
            var t = this
                , n = this.config;
            this.sdkPromise.then(function () {
                var e = t.getShareItemsBy(n);
                Gt("evoke", JSON.stringify(e)),
                    _.KDJSBridge2 && _.KDJSBridge2.call("service", "SharePopupViewService", {
                        shares: [{
                            items: e
                        }]
                    }, function (e) {
                        _.spider && _.spider.trackAction({
                            actionName: "_share",
                            actionArgs: {
                                app: ul,
                                shareUrl: n.url
                            }
                        });
                        e = yl(n, e);
                        e.error ? n.error && n.error(e) : n.success && n.success(e)
                    })
            })
        }
        ,
        Ml.prototype.getShareItemsBy = function (e) {
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
            return e.scene.map(function (e) {
                return t[Nl[e]]
            })
        }
        ;
    var Rl, ql = Ml;
    function Ml() {
        return Rl.call(this) || this
    }
    function Ul(o, i) {
        r = (e = o).scene;
        var t, e = [{
            panelType: 1,
            desc: "链接分享",
            content: {
                url: e.url,
                title: e.title,
                content: e.content,
                imageUrl: e.img,
                scene: r.join("_"),
                path: e.miniPath || "",
                userName: e.miniId || "",
                miniProgramType: e.miniProgramType || "",
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
                        img: e.posterUrl
                    }
                }],
                scene: r.join("_"),
                url: e.url
            }
        }, {
            panelType: 3,
            desc: "文本分享",
            content: {
                text: e.text,
                scene: r.join("_")
            }
        }, {
            panelType: 4,
            desc: "口令分享",
            content: {
                scene: r.join("_")
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
                scene: r.join("_")
            }
        }], n = o.panel, a = o.scene, r = e.filter(function (e) {
            return -1 < n.indexOf(e.panelType)
        }), s = r.map(function (e) {
            return e.panelType
        }), e = (0 === s.length && r.push(e[0]),
            r.forEach(function (e) {
                var t, n, r;
                t = 1 === e.panelType ? (t = s.filter(function (e) {
                    return 2 === e || 3 === e
                }).map(function (e) {
                    return Number("10" + e)
                }),
                    -1 < s.indexOf(104) && t.push(104),
                    Hr(a.concat(t).filter(function (e) {
                        return 7 != e
                    })).join("_")) : a.filter(function (e) {
                        return [18, 101, 102, 103, 104].indexOf(e) < 0
                    }).join("_"),
                    e.content.scene = t,
                    2 === e.panelType && (e.content.postList = (t = [],
                        (r = o).postList && r.postList.length ? r.postList.filter(function (e) {
                            return 9 !== e.postType
                        }) : r.posterUrl ? [{
                            postType: 0,
                            desc: "纯图片海报",
                            content: {
                                img: r.posterUrl
                            }
                        }] : t)),
                    104 === e.panelType && (e.content.postList = (r = [],
                        r = (n = o).postList && n.postList.length ? n.postList.filter(function (e) {
                            return 9 === e.postType
                        }) : r)),
                    i && 4 !== e.panelType && 104 !== e.panelType && (e.content.directScene = i)
            }),
        {
            panelList: r,
            userInfo: {
                from: "h5",
                wdFriendTitle: o.title,
                wdFriendSubTitle: o.content,
                utInfo: {}
            }
        });
        return o.header && (e.headerInfo = o.header),
            o.panelStyle && (r = Cr(),
                e.panelStyle = o.panelStyle,
                r && Or() && -1 === Y(r, "6.1.4") && (t = 0,
                    (r = (r = e.panelList).filter(function (e) {
                        return 2 === e.panelType
                    })[0]) && r.content.postList && r.content.postList.some(function (e) {
                        return e.postType === t
                    })) && delete e.panelStyle),
            o.extensionInfo && (e.extensionInfo = o.extensionInfo),
            e
    }
    e(Hl, Bl = xl),
        Hl.prototype.loadSdk = function () {
            this.sdkPromise = oo(!0)
        }
        ,
        Hl.prototype.option = function (e) {
            var t = this;
            return this.sdkPromise.then(function () {
                return t.config = d(!0, {}, e),
                    t.config.vbuyerShare && (t.isRegisterConerShareCallback || t.registerShareCallback(t.config),
                        t.setShareConfig(t.config)),
                    Promise.resolve(e)
            })
        }
        ,
        Hl.prototype.evoke = function (e) {
            var r = this.config;
            this.sdkPromise.then(function () {
                var n = Ul(r, e);
                Gt("evoke", JSON.stringify(n)),
                    _.KDJSBridge2 && _.KDJSBridge2.call("WDJSBridge", "share", {
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
                    }, function (e) {
                        _.spider && _.spider.trackAction({
                            actionName: "_share",
                            actionArgs: {
                                app: cl,
                                scene: e && e.param && e.param.type || "unknow",
                                shareUrl: r.url
                            }
                        });
                        var t = yl(n, e);
                        t.error ? (r.error && r.error(t),
                            _.spider && _.spider.trackAction({
                                actionName: "shareFail",
                                actionArgs: {
                                    app: cl,
                                    scene: e && e.param && e.param.type || "unknow",
                                    shareUrl: r.url,
                                    reason: t.message
                                }
                            })) : (t.scene = e.param.type,
                                r.success && r.success(t),
                                _.spider && _.spider.trackAction({
                                    actionName: "shareSuccess",
                                    actionArgs: {
                                        app: cl,
                                        scene: e && e.param && e.param.type || "unknow",
                                        shareUrl: r.url
                                    }
                                }))
                    })
            })
        }
        ,
        Hl.prototype.registerShareCallback = function (n) {
            var r = this;
            _.KDJSBridge2.FN_registerHandler("share", "nativeShareResult", function (e) {
                var t = {
                    param: e,
                    bridgeParam: {
                        status: {
                            status_code: 0,
                            status_reason: ""
                        }
                    }
                }
                    , t = (_.spider && _.spider.trackAction({
                        actionName: "_share",
                        actionArgs: {
                            app: cl,
                            scene: e && e.type || "unknow",
                            shareUrl: n.url
                        }
                    }),
                        yl(n, t));
                t.error ? n.error && n.error(t) : (t.scene = e && e.type,
                    n.success && n.success(t)),
                    r.isRegisterConerShareCallback = !0
            })
        }
        ,
        Hl.prototype.setShareConfig = function (t) {
            var e, n, r = Ul(t);
            Gt("newShareOption", JSON.stringify(r)),
                e = {
                    module: "Share",
                    identifier: "showOption"
                },
                n = function (e) {
                    e && e.param && e.param.exist ? _.KDJSBridge2.call("Share", "showOption", {
                        title: t.title,
                        content: t.content,
                        content_ext: t.pyqTitle,
                        url: t.img,
                        cmd: t.url,
                        scene: t.scene,
                        src: _.location.href,
                        newShare: r,
                        h5ShareContext: {}
                    }, function (e) {
                        e = yl(r, e);
                        e.error && (e.message = "webview 右上角唤起失败",
                            t.error && t.error(e))
                    }) : Gt("当前场景不支持Share.showOption方法", e)
                }
                ,
                (_.KDJSBridge2 || {}).call("WDJSBridge", "isMethodExist", e, n)
        }
        ;
    var Bl, Wl = Hl;
    function Hl() {
        var e = Bl.call(this) || this;
        return e.isRegisterConerShareCallback = !1,
            e
    }
    var Jl, Vl = ["qfriendh5", "qzoneh5", "wxh5", "wxph5"], Fl = (e(Gl, Jl = xl),
        Gl.prototype.loadSdk = function () {
            this.sdkPromise = new Promise(function (e, t) {
                _.mqq ? (to("qqJsbridgeLoad", {
                    result: !0
                }),
                    e(_.mqq)) : Zr("https://assets.geilicdn.com/v-components/cdn/qqsdk/default/index.fix.min.js").then(function () {
                        _.mqq ? (to("qqJsbridgeLoad", {
                            result: !0
                        }),
                            e(_.mqq)) : (to("qqJsbridgeLoad", {
                                result: !1
                            }),
                                t())
                    }).catch(function () {
                        to("qqJsbridgeLoad", {
                            result: !1
                        }),
                            t()
                    })
            }
            )
        }
        ,
        Gl.prototype.option = function (e) {
            return this.sdkPromise.then(function () {
                e.url = ml(e.url, Vl[0]),
                    Gt("option", JSON.stringify(e)),
                    gl(e.url) || Qt("QQ不支持跨域分享", e.url),
                    _.mqq.data.setShareInfo({
                        share_url: e.url,
                        title: e.title.slice(0, 45),
                        desc: e.content.slice(0, 60),
                        image_url: e.img
                    })
            })
        }
        ,
        Gl.prototype.evoke = function () {
            this.sdkPromise.then(function () {
                _.mqq.ui.showShareMenu()
            })
        }
        ,
        Gl);
    function Gl() {
        return Jl.call(this) || this
    }
    e(Kl, Ql = xl),
        Kl.prototype.loadSdk = function () { }
        ,
        Kl.prototype.option = function (e) {
            return Promise.resolve(_l(e.url))
        }
        ,
        Kl.prototype.evoke = function () {
            bl()
        }
        ;
    var Ql, zl = Kl;
    function Kl() {
        return Ql.call(this) || this
    }
    var Yl = {
        vbuyerShare: !0,
        vsellerShare: !0,
        panel: [1],
        scene: [1, 2, 3, 4, 5],
        momentMode: 0
    }
        , Ne = ($l.prototype.option = function (e) {
            var t = this;
            this.config = this.getMergeConfig(e);
            this.optionPromise && this.optionPromise.catch(function () { }),
                this.optionPromise = Il(t.config).then(function () {
                    return t.invokeHooks()
                }).catch(function (e) {
                    return e ? (e.name = "[Pathtracker Error] ValidationError",
                        Ll.emit("PATHTRACKER_EXCEPTION", e),
                        Promise.reject(e)) : Promise.resolve()
                })
        }
            ,
            $l.prototype.evoke = function (e) {
                var t, n = this;
                if (!this.config || !this.optionPromise)
                    return E(t = new pl({
                        message: "config is not initialized before evoke",
                        name: "ValidationError"
                    })),
                        void Ll.emit("PATHTRACKER_EXCEPTION", t);
                this.optionPromise.then(function () {
                    return n.instance.evoke(e)
                })
            }
            ,
            $l.prototype.use = function (e) {
                return !c(e) || -1 < this.installedPlugins.indexOf(e) || (e.call(this),
                    this.installedPlugins.push(e)),
                    this
            }
            ,
            $l.prototype.catch = function (t) {
                this.isOnCatched || Ll.on("PATHTRACKER_EXCEPTION", function (e) {
                    c(t) && t.call(null, e)
                }, !0),
                    this.isOnCatched = !0
            }
            ,
            $l.prototype.getShareInstance = function () {
                return new (Ar() ? jl : xr() || /WDThirdSDK\(CloudMall/i.test(navigator.userAgent.toLowerCase()) ? Wl : Lr() ? ql : Pr() ? Fl : zl)
            }
            ,
            $l.prototype.invokeHooks = function () {
                var n = this;
                return new Promise(function (e, t) {
                    n.hooks.invokeWaterfall("configured", n.config, function () {
                        n.instance.option(n.config).then(e).catch(t)
                    })
                }
                )
            }
            ,
            $l.prototype.getMergeConfig = function (e) {
                var t = d(!0, {}, Yl, e = e || {});
                return a(e.panel) && e.panel.length ? t.panel = d(!0, [], e.panel) : t.panel = Yl.panel,
                    a(e.scene) && e.scene.length ? t.scene = d(!0, [], e.scene) : t.scene = Yl.scene,
                    t.momentMode = e.momentMode || 0,
                    t.vbuyerShare = !!v(e.vbuyerShare) || e.vbuyerShare,
                    t.vsellerShare = !!v(e.vsellerShare) || e.vsellerShare,
                    t.pyqTitle = e.pyqTitle || e.title,
                    t.content = e.content || e.title,
                    t
            }
            ,
            $l);
    function $l() {
        this.hooks = new ve,
            this.installedPlugins = [],
            this.instance = this.getShareInstance(),
            this.isOnCatched = !1
    }
    e(ef, Xl = n);
    var Xl, Zl = ef;
    function ef(e, t) {
        var n, r;
        return t.type = "pathtracker",
            g(r = (n = t).detail || {}) && (r.startTime = k(),
                f(r, function (e, t) {
                    F(e) && (r[t] = h(e))
                }),
                n.detail = r),
            Xl.call(this, e, t) || this
    }
    e(nf, tf = t);
    var tf, Me = nf;
    function nf() {
        return tf.call(this, {
            report: new js({
                send: new Bs({
                    url: Ur() + "?type=pathtracker"
                })
            }),
            Record: Zl
        }) || this
    }
    (function (e) {
        function o(e) {
            var t, n, e = void 0 === e ? function () {
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
            return ["koudai.com", "91ruyu.com", "bibikan.cn", "fangxin.com", "xihuan.com.cn", "youshop01.com", "youshop02.com", "youshop03.com", "youshop04.com", "youshop05.com", "youshop06.com", "youshop07.com", "youshop08.com", "youshop09.com", "youshop10.com", "kou6ai.cn", "ynet.com", "mitao.cn"].forEach(function (e) {
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
            return e = t !== T && /android/i.test(n()) && m() && function (e, t) {
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
            }(function () {
                var e, t = n(), t = t.match(/WDAPP\((.*?)\/(.*?)[\s|\)]/i);
                t && 3 == t.length && (t[1],
                    e = t[2]);
                return e
            }(), "5.5.2.1") < 0 ? encodeURIComponent(e) : e
        }
        function s(e) {
            return (e = new RegExp("(?:^|; )" + e + "=([^;]*)").exec(g.cookie)) ? e[1] : null
        }
        function l(e) {
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
        function f(e, t, n) {
            var r = ""
                , r = e + t;
            return p(n) && (r += "?" + l(n)),
                r
        }
        function d(e) {
            var t, n = (e = e || {}).data || {}, r = e.jsonp || "callback", o = e.success, i = e.error, e = e.url;
            if (!e)
                return i && i(new Error("url is not defined!"));
            var a, s = "jsonp_" + y++, c = document.getElementsByTagName("head")[0], u = document.createElement("script"), p = (n[r] = s,
                a = !1,
                function () {
                    a || (a = !0,
                        t ? o && o(t) : i && i(new Error("callback function error!")))
                }
            );
            u.onreadystatechange = function () {
                "complete" !== this.readyState && "loaded" !== this.readyState || p()
            }
                ,
                u.onload = p,
                u.onerror = function (e) {
                    c.removeChild(u),
                        window[s] = null,
                        i && i(e)
                }
                ,
                window[s] = function (e) {
                    c.removeChild(u),
                        window[s] = null,
                        t = e
                }
                ,
                u.src = e + (-1 == e.indexOf("?") ? "?" : "&") + l(n),
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
                isSellerLogin: function () {
                    return !(!h() || !s("sid"))
                },
                isWechatLogin: function () {
                    return !(!h() || "LOGIN_USER_SOURCE_WECHAT" !== s(_))
                },
                isQQLogin: function () {
                    return !(!h() || "LOGIN_USER_SOURCE_QQ" !== s(_))
                },
                isSubAccount: function () {
                    return !(!h() || "SUB_ACCOUNT" !== s("login_type"))
                },
                getUserInfo: function (e) {
                    var t = (e = e || {}).success
                        , n = e.error
                        , e = o(e.environment).backendHost + "/user/getinfo"
                        , r = u();
                    h() ? d({
                        url: e,
                        success: function (e) {
                            c(e, function (e) {
                                t && t(e)
                            }, function (e) {
                                n && n(e)
                            })
                        },
                        error: function (e) {
                            n && n(e)
                        }
                    }) : (r.status.code = b,
                        r.status.message = S,
                        r.result = "",
                        n && n(r))
                },
                qqLogin: function (e) {
                    var t = a((e = e || {}).url, k)
                        , n = o(e.environment)
                        , e = e.device;
                    return f(n.backendHost, "/user/oauth/qq/login", {
                        redirect: t,
                        type: r(e) ? "mobile" : "pc"
                    })
                },
                wechatSlientLogin: function (e) {
                    var t = a((e = e || {}).url, k);
                    return f(o(e.environment).backendHost, "/user/oauth/wechat/silentlogin", {
                        redirect: t
                    })
                },
                wechatForceLogin: function (e) {
                    var t = a((e = e || {}).url, k);
                    return f(o(e.environment).backendHost, "/user/oauth/wechat/login", {
                        redirect: t
                    })
                },
                login: t,
                register: function (e) {
                    var t = a((e = e || {}).url, k);
                    return [o(e.environment).ssoPageHost + "/login/index.php", "?redirect=" + t, "&register=1"].join("")
                },
                logout: function (e) {
                    var t = a((e = e || {}).url, T);
                    return f(o(e.environment).backendHost, "/user/logout", {
                        redirect: t
                    })
                },
                bind: function (e) {
                    var t = a((e = e || {}).url, 0);
                    return f(o(e.environment).ssoPageHost, "/login/index.php", {
                        redirect: t,
                        bind: 1
                    })
                },
                getBindStatus: function (e) {
                    var t = (e = e || {}).success
                        , n = e.error;
                    d({
                        url: o(e.environment).backendHost + "/user/oauth/bind/getdemand",
                        success: function (e) {
                            c(e, function (e) {
                                t && t(e)
                            }, function (e) {
                                n && n(e)
                            })
                        },
                        error: function (e) {
                            n && n(e)
                        }
                    })
                },
                isWeixin: function () {
                    return /MicroMessenger/i.test(n()) && !/wxwork/i.test(n())
                },
                isQQ: function () {
                    return /QQ\/([\d\.]+)/i.test(n())
                },
                isOpenShop: function (e) {
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
                        success: function (e) {
                            t && t(e)
                        },
                        error: function (e) {
                            n && n(e)
                        }
                    })
                },
                addShop: function (e) {
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
                            success: function (e) {
                                t && t(e)
                            },
                            error: function (e) {
                                n && n(e)
                            }
                        })
                }
            },
            e.exports ? e.exports = t : v.login = t
    }
    )(o = {
        exports: {}
    });
    var rf = o.exports;
    rf.isLogin,
        rf.wechatSlientLogin;
    function of() {
        var e = b()[il]
            , i = e && dl(e);
        return new Promise(function (r, o) {
            Os(function (e) {
                var e = e && e.get()
                    , t = e && e.spma
                    , n = e && e.spmb;
                !e || u(t) || u(n) || u(i) ? o() : r({
                    subtype: "share_click",
                    share_id: i.share_id,
                    page_id: t + "." + n,
                    share_buyer_id: i.share_buyer_id,
                    share_channel: (t = a(t = b().wfr) ? t[t.length - 1] : t) || "unknown",
                    click_buyer_id: e && e.buyer_id,
                    click_seller_id: e && e.seller_id,
                    share_level: parseInt(i.share_level, 10),
                    gmt_action: Date.now()
                })
            })
        }
        )
    }
    function af(e, t) {
        var i, a, s, c, n = b()[il];
        n ? (n = {
            channel: e,
            pathInfo: dl(n)
        },
            s = n.pathInfo,
            c = n.channel,
            new Promise(function (r, o) {
                Os(function (e) {
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
            ).then(function (e) {
                return t.send(e)
            }).catch(l)) : (i = {
                channel: e
            },
                a = dl(hl()),
                new Promise(function (r, o) {
                    Os(function (e) {
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
                ).then(function (e) {
                    return t.send(e)
                }).catch(l))
    }
    var sf = new Me;
    function cf(e) {
        var t = hl();
        return jt(e, ((e = {})[il] = t,
            e))
    }
    function uf() {
        this.hooks.push("configured", function (e, t) {
            (e = e || {}).url && (e.url = cf(e.url));
            var n = e.success
                , r = e.error;
            e.success = function (e) {
                var t = e && e.channel || "unknown";
                Gt(e),
                    (Lr() || Ar()) && af(t, sf),
                    c(n) && n(e)
            }
                ,
                e.error = function (e) {
                    "用户取消分享" === e.message ? Gt(JSON.stringify(e)) : (delete e.error,
                        E(new pl(M(M({}, e), {
                            name: "CallbackError"
                        })))),
                        c(r) && r(e)
                }
                ,
                t && t()
        })
    }
    function pf() {
        var o = this;
        this.hooks.push("configured", function (t, n) {
            var r = t.url;
            !Pr() && Za ? Za.then(function (e) {
                Qr("pathtracker") && !Ya(T()) && (t.url = $a(r, e),
                    e = ns(r, e),
                    Ar() && o.instance.loadSdk({
                        mpid: e
                    })),
                    n && n()
            }).catch(function () {
                n && n()
            }) : n && n()
        })
    }
    function lf(e) {
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
            Object.keys(t).forEach(function (e) {
                void 0 !== t[e] && (n[e] = t[e])
            }),
            n
    }
    function ff(e, t) {
        e && a(t) && t.length
    }
    function df(e, t) {
        Qt("[Pathtracker Warn] 方法 " + e + " 已经废弃不再维护，请使用新版的API方法 " + t + "\n详情参见文档：https://h5.daily.weidian.com/v-components/pecker/docs/pathtracker/interfaces/pathtracker.html")
    }
    function hf(n) {
        var r, o = this;
        d(o, {
            share: function (e) {
                var t = e.config
                    , e = e.option;
                return r = lf({
                    config: t,
                    option: e
                }),
                    n.option(r),
                    df("pathTracker.share", "pecker.pathtracker.option"),
                    o
            },
            resetUserConfig: function (e) {
                return r = d(r, lf({
                    config: e
                })),
                    n.option(r),
                    df("pathTracker.resetUserConfig", "pecker.pathtracker.option"),
                    o
            },
            resetShareOption: function (e) {
                e = lf({
                    option: e
                });
                return ff((r = d(r, e)).panel, e.panel),
                    ff(r.scene, e.scene),
                    ff(r.hideMenuItems, e.hideMenuItems),
                    ff(r.imgUrls, e.imgUrls),
                    n.option(r),
                    df("pathTracker.resetShareOption", "pecker.pathtracker.option"),
                    o
            },
            showPanel: function () {
                return n.evoke(),
                    df("pathTracker.showPanel", "pecker.pathtracker.evoke"),
                    o
            },
            getShareUrl: function (e) {
                return df("pathTracker.getShareUrl", "pecker.pathtracker.getUrl"),
                    cf(e)
            },
            direct: function (e) {
                return n.evoke(e),
                    df("pathTracker.direct", "pecker.pathtracker.evoke"),
                    o
            }
        })
    }
    sf.use(function () {
        var e, t, n, r = this;
        if ((n = Ar() && !jr() && !rf.isLogin() && !Ir() && Vr().indexOf("silentlogin") < 0) && m.emit("pageNavigate"),
            n)
            return n = _.location.hash,
                t = b(),
                "" !== n && Or() ? (n = t.slr || "",
                    t.slr = Nr(n, 4)) : t.slr && delete t.slr,
                n = _.location.href,
                e = (n = n.split("#"))[0],
                n = (n = n[1]) ? "#" + n : "",
                e = jt(e.split("?")[0] + n, d({}, g(_.__silentAppendParam) ? _.__silentAppendParam : {}, t)),
                void (_.location.href = rf.wechatSlientLogin({
                    url: e
                }));
        of().then(function (e) {
            r.send(e)
        }).catch(l)
    });
    var x, mf = "data-spider", vf = "data-spider-prior", gf = "data-spider-mode", yf = "data-spider-action-name", _f = "data-spider-action-args", wf = "data-spider-impression", bf = "spider_action", Ef = "spider_token", Sf = "spider_token_alias", kf = "javascript:", Tf = "undefined", Of = "time_on_page_spm", Pf = ((o = x = x || {}).BUY_NOW = "_buyNow",
        o.ADD_TO_CART = "_addToCart",
        o.ADD_TO_FAVORITES = "_addToFavorites",
        o.COLLECTION = "_collection",
        o.SHARE = "_share",
        o.LIKE = "_like",
        o.IM = "_im",
        o.ITEM = "_item",
        o.SHOP = "_shop",
        o.DYNAMIC = "_dynamic",
        o.DOWNLOAD = "_download",
        !!_.sessionStorage);
    function Af(e) {
        return "" === e || null === e ? e : Number(e)
    }
    function If(e) {
        var t, n = e.actionName, e = e.actionArgs, r = Object.create(null);
        (t = {})[x.ITEM] = function (e) {
            e && e.itemId && e.shopId ? r.isOk = !0 : (r.isOk = !1,
                r.message = "pageArgs._page=_item时 pageArgs必须包含itemId和shopId属性")
        }
            ,
            t[x.SHOP] = function (e) {
                e && e.shopId ? r.isOk = !0 : (r.isOk = !1,
                    r.message = "actionName=_shop或者pageArgs._page=_shop时 actionArgs或者pageArgs必须包含shopId属性")
            }
            ,
            t[x.DYNAMIC] = function (e) {
                e && e.authorId && e.feedId ? r.isOk = !0 : (r.isOk = !1,
                    r.message = "actionName=_dynamic或者pageArgs._page=_dynamic时 actionArgs或者pageArgs必须包含authorId属性和feedId属性")
            }
            ,
            t[x.IM] = function (e) {
                r.isOk = !0
            }
            ,
            t[x.ADD_TO_CART] = function (e) {
                r.isOk = !0
            }
            ,
            t[x.ADD_TO_FAVORITES] = function (e) {
                e && e.shopId ? 0 === (e = Af(e.type)) || 1 === e ? r.isOk = !0 : (r.isOk = !1,
                    r.message = "actionName=_addToFavorites type属性必须传0(取消)或1(关注)") : (r.isOk = !1,
                        r.message = "actionName=_addToFavorites actionArgs必须包含shopId和type属性")
            }
            ,
            t[x.BUY_NOW] = function (e) {
                r.isOk = !0
            }
            ,
            t[x.COLLECTION] = function (e) {
                e && e.itemId ? 0 === (e = Af(e.type)) || 1 === e ? r.isOk = !0 : (r.isOk = !1,
                    r.message = "actionName=_collection type属性必须传0(取消)或1(关注)") : (r.isOk = !1,
                        r.message = "actionName=_collection actionArgs必须包含itemId和type属性")
            }
            ,
            t[x.LIKE] = function (e) {
                var t = Af(e && e.type);
                !e || 0 !== t && 1 !== t ? (r.isOk = !1,
                    r.message = "actionName=_like actionArgs必须包含type属性且必须传0(取消)或1(关注)") : r.isOk = !0
            }
            ,
            t[x.SHARE] = function (e) {
                r.isOk = !0
            }
            ,
            t[x.DOWNLOAD] = function (e) {
                r.isOk = !0
            }
            ;
        return n && t[n] && t[n](e),
            void 0 === r.isOk && (r.isOk = !1,
                r.message = "actionName " + n + "不是内置actionName"),
            r
    }
    xf = function (e, t) {
        return (xf = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        xf(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(Lf, Cf = Mt);
    var xf, Cf, C = Lf;
    function Lf(e) {
        var t = "[Spider Error]";
        return e.name && (t += " " + e.name),
            Cf.call(this, {
                message: e.message || "",
                name: t,
                originalError: e.originalError,
                sample: e.sample
            }) || this
    }
    var jf, Df = function () {
        return (Df = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    };
    function Nf(e) {
        var t = e.getAttribute("href")
            , n = t && "" !== t && 0 !== t.indexOf("#");
        return !(!("A" === e.nodeName && e instanceof HTMLAnchorElement && e.protocol) || 0 !== e.protocol.indexOf("http") && 0 !== e.protocol.indexOf("weidianbuyer:") || !n || (e = t) && /^\/lib\//.test(e))
    }
    function Rf(e) {
        var t = w.createElement("A");
        return t.href = e,
            t
    }
    function qf(e) {
        e = me(e);
        return g(e) ? e : null
    }
    function Mf(e, t) {
        var t = b(t);
        return e ? a(t = t[e]) ? t[t.length - 1] : t : null
    }
    function Uf(e) {
        return e instanceof HTMLElement && e.nodeType == Node.ELEMENT_NODE
    }
    function Bf(e, t) {
        for (var n = e; ;) {
            if (n === w.body)
                return null;
            if (n === w.documentElement)
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
    function Wf(e) {
        return !(!e.hasAttribute(mf) || "" !== e.getAttribute(mf)) || (!!e.hasAttribute(yf) || (!!e.hasAttribute(wf) || !!Nf(e)))
    }
    function Hf(e) {
        return !(!e.getAttribute(vf) && !e.getAttribute(mf))
    }
    function Jf(t) {
        Os(function (e) {
            e = e && e.get();
            jf = e,
                t()
        })
    }
    function Vf(e) {
        if (!Uf(e) || !Wf(e))
            return null;
        var t, n = e.getAttribute(yf) || null, r = qf(e.getAttribute(_f)), o = Bf(e.parentElement, Hf), o = o ? (t = o.getAttribute(vf) || o.getAttribute(mf),
            String(function (e, t) {
                for (var n = e.querySelectorAll("[" + mf + "],[" + yf + "],[" + wf + "], a[href]"), r = 0, o = 0; o < n.length; o++)
                    if (Wf(n[o]) && r++,
                        t === n[o])
                        return r;
                return 0
            }(o, e) || "_")) : (t = "_",
                String(function (e) {
                    for (var t = w.querySelectorAll("[" + yf + "], [" + wf + "]"), n = 0, r = 0; r < t.length; r++)
                        if (null === Bf(t[r].parentElement, Hf) && n++,
                            e === t[r])
                            return n;
                    return 0
                }(e) || "_"));
        return "_" !== t || "" !== n && null !== n || !Nf(e) || (t = "spider-auto",
            o = String(function (e) {
                for (var t = 0, n = Array.prototype.filter.call(w.querySelectorAll("a"), function (e) {
                    var t = Bf(e.parentElement, Hf)
                        , n = e.getAttribute(yf)
                        , e = e.getAttribute(mf);
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
    function Ff(e) {
        return null !== String(e).match(/^[a-zA-Z0-9\-\_]+$/)
    }
    function Gf(t) {
        return Object.keys(x).some(function (e) {
            return x[e] === t
        })
    }
    function Qf(e) {
        if (g(e)) {
            var t = e.spmc
                , n = e.spmd
                , r = e.actionName
                , o = e.actionArgs;
            if (e.actionType && Qt(new C({
                message: "action.actionType=" + e.actionType + "已废弃，请使用 action.actionName 代替",
                name: "ValidationError"
            })),
                Ff(t))
                if (Ff(n))
                    if (o && !g(o))
                        E(new C({
                            message: "actionArgs 必须是一个对象，" + JSON.stringify(o) + "不是对象类型",
                            name: "ValidationError"
                        }));
                    else {
                        if (r && 0 === r.indexOf("_")) {
                            if (!Gf(r) && "_cancelToFavorites" !== r && "_deprecated" !== r && "_expose" !== r)
                                return void E(new C({
                                    message: "actionName=" + r + "不是内置actionName\n下划线起始的 actionName 代表特定功能，禁止自定义，请查看 spider.constants 了解内置的 actionName",
                                    name: "InternalActionNameError"
                                }));
                            o = If(e);
                            if (r !== x.ITEM && !o.isOk)
                                return E(new C({
                                    message: o.message,
                                    name: "InternalActionNameError"
                                })),
                                    1
                        }
                        if ("_" !== t || r) {
                            if ("_" === t || "_" !== n)
                                return 1;
                            E(new C({
                                message: "spmc 有值时 spmd 不能为空",
                                name: "ValidationError"
                            }))
                        } else
                            E(new C({
                                message: "spmc, actionName 不能同时为空",
                                name: "ValidationError"
                            }))
                    }
                else
                    E(new C({
                        message: "spm只允许英文、数字、中划线、下划线组成，" + n + "不合法",
                        name: "ValidationError"
                    }));
            else
                E(new C({
                    message: "spm只允许英文、数字、中划线、下划线组成，" + t + "不合法",
                    name: "ValidationError"
                }))
        } else
            E(new C({
                message: "action 必须是一个对象," + JSON.stringify(e) + "不是对象类型",
                name: "ValidationError"
            }))
    }
    function zf(e) {
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
    function Kf(e) {
        return 0 === (t = e).indexOf("vc_") && t.length > "vc_".length || "wfr" === e || "ifr" === e;
        var t
    }
    function Yf() {
        var t = b()
            , e = Object.getOwnPropertyNames(t)
            , n = {};
        return e.forEach(function (e) {
            Kf(e) && (n[e] = t[e])
        }),
            n
    }
    function $f(e) {
        return s(e) ? e.replace(/(%[0-9A-Z]{2})+/g, _.decodeURIComponent) : ""
    }
    function Xf() {
        var e = _.document.cookie.split("; ")
            , t = Object.create(null);
        return e.forEach(function (e) {
            u(e) || (e = e.split("="),
                t[$f(e[0])] = $f(e[1]))
        }),
            t
    }
    function Zf() {
        return {
            spma: _s(),
            spmb: ws()
        }
    }
    function ed(e, t, n) {
        F(e) && n && (n[t] = h(e))
    }
    function td(e) {
        var t, n;
        g(e) && (void 0 === e.spmd && (e.spmd = "1"),
            e.spmc = String(e.spmc || "_"),
            e.spmd = String(e.spmd || "_"),
            t = String(e.actionName || ""),
            n = String(e.actionType || ""),
            e.actionName = t || n,
            e.actionArgs = e.actionArgs || null)
    }
    function nd(e, t) {
        Qt("[Spider Warn] 方法 " + e + " 已经废弃不再维护，请使用其他API替代 " + (t || "") + "\n详情参见文档：http://docsify.daily.vdian.net/spider/46/refactor-changes.html")
    }
    function rd(e) {
        nd("spider.getCooke");
        var t = Xf();
        return e ? t[e] || null : t
    }
    function od() {
        return nd("spider.getSearchParams"),
            b()
    }
    var id = [];
    function ad(t) {
        var e = oo(!0);
        xr() && 0 < Y(Cr() || "", "7.0.7") ? e.then(function () {
            new Promise(function (n, r) {
                _.KDJSBridge2 && _.KDJSBridge2.call("WDJSBridge", "getWdPrePage", {}, function (e) {
                    var t;
                    (0 === (null == (t = null == (t = null == e ? void 0 : e.param) ? void 0 : t._errMsg) ? void 0 : t.code) ? n : r)(e)
                })
            }
            ).then(function (e) {
                t(e.param.page)
            }).catch(function () {
                t()
            })
        }) : t()
    }
    function sd(t) {
        var e = oo(!0);
        xr() && 0 < Y(Cr() || "", "7.0.7") && e.then(function () {
            _.KDJSBridge2 && _.KDJSBridge2.call("WDJSBridge", "webviewLifeCycleChange", {}, function (e) {
                t(e.param)
            })
        })
    }
    var cd = {
        0: "navigate",
        1: "reload",
        2: "back_forward",
        255: "prerender"
    };
    function ud() {
        if (c(_.performance.getEntriesByType)) {
            var e = _.performance.getEntriesByType("navigation");
            if (e.length)
                return (e = function (e) {
                    if (c(e.toJSON))
                        return e.toJSON();
                    try {
                        var t, n = {};
                        for (t in e)
                            z(e, t) && (n[t] = e[t]);
                        return Object.keys(n).length ? n : void 0
                    } catch (e) { }
                }(e[0])) ? e.type : null
        } else if (_.performance.navigation)
            return e = _.performance.navigation.type,
                cd[e];
        return null
    }
    var pd = {
        prev_spm: "",
        prev_page_args: null,
        prev_action_name: null,
        prev_action_args: null
    };
    function ld(e) {
        var t = Nr(JSON.stringify(e), 4)
            , e = d(!0, {}, e)
            , n = ((n = e).prev_page_args || (n.prev_page_args = {}),
                n.prev_action_args || (n.prev_action_args = {}),
                tt + "_" + t);
        return Mo(n, e),
            Ke(n, h(e), {
                domain: Mr(),
                path: "/",
                expires: 30
            }),
            t
    }
    function fd(e) {
        var t, n, e = tt + "_" + e, e = qo(e) || me(y(e) || "");
        return e || (t = Mf("spider"),
            n = Mf(bf) || null,
            e = t ? d(!0, {}, pd, {
                prev_spm: t,
                prev_action_name: n
            }) : null),
            f(Xf(), function (e, t) {
                var n;
                "string" == typeof t && 0 === t.indexOf(tt) && (t = t,
                    n = {
                        domain: Mr(),
                        path: "/"
                    },
                    Ke(t, "", d(n || {}, {
                        expires: -864e5
                    })))
            }),
            f(qo(), function (e, t) {
                "string" == typeof t && 0 === t.indexOf(tt) && Ro.remove(t)
            }),
            e
    }
    function dd(n) {
        po(function () {
            var t = hd();
            new MutationObserver(function () {
                var e = hd();
                e && e !== t && (n(e, t),
                    t = e)
            }
            ).observe(w.body, {
                attributes: !0
            })
        })
    }
    function hd() {
        return w.body.getAttribute(vf) || w.body.getAttribute(mf)
    }
    var L = new r
        , md = Gr("tapper")
        , vd = "beforeAutoReportPageView"
        , gd = "beforeReportSpiderLog"
        , yd = (_d.prototype.trackPageview = function (e) {
            var t = Zf()
                , n = t.spma
                , t = t.spmb;
            n && t && n !== Tf && t !== Tf ? (e && !g(e) && (E(new C({
                message: "pageArgs必须是一个对象," + JSON.stringify(e) + "不是对象",
                name: "ValidationError"
            })),
                e = {}),
                this.setBase(n, t, e),
                t = (n = this.root.get()).prevData,
                e = n.curPageArgs,
                n = n.curSpm,
                L.emit("report_prev_data"),
                md && L.emit(vd),
                this.reportSpiderData(t, e, n)) : Qt("[spider 提示] meta & body 上必须包含 data-spider 值")
        }
            ,
            _d.prototype.setBase = function (e, t, n) {
                this.root.setCurSpmArray({
                    spma: e,
                    spmb: t,
                    spmc: "0",
                    spmd: "0"
                });
                e = fd(this.root.get().token);
                this.root.setPrevData(e, n),
                    this.root.setCurPageArgs(n)
            }
            ,
            _d.prototype.reportSpiderData = function (e, t, n) {
                e = d(!0, {}, e);
                e.cur_spm = n,
                    e.cur_page_args = t,
                    this.root.report("page_view", e)
            }
            ,
            _d);
    function _d(e) {
        this.root = e
    }
    var wd = function () {
        return (wd = Object.assign || function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }
        , bd = (Ed.prototype.trackAction = function (e, t, n) {
            try {
                this.root.updateSpmaAndSpmb()
            } catch (e) {
                return void E(e)
            }
            var r = this.root.get()
                , o = r.curPageArgs
                , r = r.prevData;
            n && Qt("[Spider Warn]方法 spider." + ("click" === t ? "trackAction" : "trackImpression") + "不再兼容支持传第二个参数回调监听callback\n详情参见文档：http://docsify.daily.vdian.net/spider/46/refactor-changes.html"),
                td(n = Uf(e) ? Vf(e) : d(!0, {}, e)),
                Qf(n) && (this.root.setCurSpmArray({
                    spmc: String(n.spmc || "_"),
                    spmd: String(n.spmd || "_")
                }),
                    e = this.root.get().curSpm,
                    this.root.report(t, wd({
                        cur_spm: e,
                        cur_page_args: o,
                        cur_action_name: n.actionName || null,
                        cur_action_args: n.actionArgs || null
                    }, r)))
        }
            ,
            Ed.prototype.onCustomEvents = function () {
                var t = this;
                L.on("report_prev_data", function () {
                    var e = t.root.get().prevData;
                    e && e.prev_spm && t.root.report("click", zf(e))
                })
            }
            ,
            Ed);
    function Ed(e) {
        this.root = e,
            this.onCustomEvents()
    }
    Td.prototype.transferActionBy = function (t, e, n) {
        var r = this;
        void 0 === n && (n = !1),
            L.emit(gd),
            w.destination = t;
        try {
            this.root.updateSpmaAndSpmb()
        } catch (e) {
            return E(e),
                t
        }
        if (!Nf(Rf(t)))
            return E(new C({
                message: "url仅支持透传http协议跳转链接",
                name: "ValidationError"
            })),
                t;
        var o = Uf(e) ? Vf(e) : d(!0, {}, e);
        if (td(o),
            !Qf(o))
            return t;
        var i = {
            url: t,
            action: o,
            value: e,
            context: this
        };
        return this.root.hooks.invokeWaterfall("beforeNavigate", i, function (e) {
            e instanceof Error || r.handleSpiderToken(i)
        }),
            n ? (_.location.href = i.url,
                kf) : i.url
    }
        ,
        Td.prototype.transferAction = function (e) {
            try {
                this.root.updateSpmaAndSpmb()
            } catch (e) {
                return void E(e)
            }
            var e = Uf(e) ? Vf(e) : d(!0, {}, e);
            td(e),
                Qf(e) && (this.root.setCurSpmArray({
                    spmc: String(e.spmc || "_"),
                    spmd: String(e.spmd || "_")
                }),
                    e = ld(this.generatePrevData(e)),
                    this.root.setToken(e))
        }
        ,
        Td.prototype.handleSpiderToken = function (e) {
            this.root.setCurSpmArray({
                spmc: String(e.action.spmc || "_"),
                spmd: String(e.action.spmd || "_")
            });
            var t = ld(this.generatePrevData(e.action))
                , t = (this.root.setToken(t),
                    this.getSpiderTokenParams(e));
            e.url = jt(e.url, t)
        }
        ,
        Td.prototype.generatePrevData = function (e) {
            var t = this.root.get()
                , n = t.curSpm
                , t = t.curPageArgs
                , r = jf;
            return zf({
                cur_spm: n,
                cur_page_args: t,
                cur_action_name: e.actionName || null,
                cur_action_args: d({}, e.actionArgs, {
                    realVisitId: r && r.visit_id
                })
            })
        }
        ,
        Td.prototype.getSpiderTokenParams = function (e) {
            var t = Object.create(null)
                , n = this.root.get()
                , r = n.curSpm
                , n = n.token
                , o = Rf(e.url);
            return Mr(o.hostname) === Mr() ? n && (t[Ef] = n) : (t[Sf] = n,
                t.spider = r,
                e.action.actionName && (t[bf] = e.action.actionName)),
                t
        }
        ;
    var Sd, kd = Td;
    function Td(e) {
        this.root = e
    }
    Sd = function (e, t) {
        return (Sd = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Sd(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(Ad, Od = n);
    var Od, Pd = Ad;
    function Ad(e, t) {
        var n, r;
        return t.type = "spider",
            g(r = (n = t).detail || {}) && (r.startTime = k(),
                f(r, ed),
                n.detail = r),
            "page_view" !== n.subtype && "event" !== n.subtype && (g(r = n.cur_action_args) ? f(r, ed) : r = null,
                n.cur_action_args = r),
            Od.call(this, e, t) || this
    }
    Id = function (e, t) {
        return (Id = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Id(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(Ld, xd = js),
        Ld.prototype.push = function (e) {
            var t;
            "event" === (null == e ? void 0 : e.data.subtype) ? ((t = []).push(e),
                this.reportOptions.send.sendBeforeLeave({
                    records: zr(t.slice(), "normal")
                })) : xd.prototype.push.call(this, e)
        }
        ;
    var Id, xd, Cd = Ld;
    function Ld(e) {
        var t = xd.call(this, e) || this;
        return t.reportOptions = e,
            t
    }
    jd = function (e, t) {
        return (jd = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        jd(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(Nd, Dd = t),
        Nd.prototype.report = function (n, r) {
            this.notNeedReport() ? Os(function (e) {
                var t;
                e && ((t = []).push(d({}, r, {
                    subtype: n
                })),
                    Gt("[spider][" + n + "]:", {
                        data: t,
                        meta: e.data
                    }))
            }) : (L.emit(gd),
                this.send(d({}, r, {
                    subtype: n
                })))
        }
        ,
        Nd.prototype.notNeedReport = function () {
            var e = location.origin
                , t = id;
            return t.length && -1 < t.indexOf(e)
        }
        ;
    var jd, Dd, Me = Nd;
    function Nd() {
        return Dd.call(this, {
            report: new Cd({
                send: new Bs({
                    url: Ur() + "?type=spider"
                })
            }),
            Record: Pd
        }) || this
    }
    Rd = function (e, t) {
        return (Rd = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    var Rd, qd, Md = function (e, t) {
        var n = {};
        for (o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
        return n
    }, o = (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Rd(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }(Ud, qd = Me),
        Ud.prototype.updateSpmaAndSpmb = function () {
            var e = Zf()
                , t = e.spma
                , e = e.spmb
                , t = this.curSpmArray[0] || t
                , e = this.curSpmArray[1] || e;
            if (!t || !e)
                throw new C({
                    message: "meta & body 上必须包含 data-spider 值",
                    name: "ValidationError"
                });
            this.setCurSpmArray({
                spma: t,
                spmb: e
            })
        }
        ,
        Ud.prototype.setCurSpmArray = function (e) {
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
        Ud.prototype.setCurPageArgs = function (e) {
            var n, r, e = d(!0, {}, e), e = d(!0, {}, (n = e,
                r = Kf,
                Object.keys(n).reduce(function (e, t) {
                    return !(!a(r) || -1 === r.indexOf(t)) || c(r) && r(t) ? e : Df(Df({}, e), ((e = {})[t] = n[t],
                        e))
                }, {})), Yf());
            e.navigation_type = ud(),
                e.ts = this.timestamp,
                e.device_resolution = _.screen.width * _.devicePixelRatio + "*" + _.screen.height * _.devicePixelRatio,
                delete e._page,
                f(e, ed),
                this.curPageArgs = e
        }
        ,
        Ud.prototype.setPrevData = function (e, t) {
            var n, e = d(!0, {}, e);
            e.prev_spm ? (t && t._page && Gf(t._page) && ((n = If({
                actionName: t._page,
                actionArgs: t
            })).isOk || E(new C({
                message: n.message,
                name: "InternalActionNameError"
            })),
                n = t._page,
                t = Md(t, ["_page"]),
                e.prev_action_name = n,
                e.prev_action_args = d(!0, {}, t, e.prev_action_args)),
                e.prev_action_name || (e.prev_action_name = "_jumpTo_" + this.curSpmArray[0] + "." + this.curSpmArray[1]),
                this.prevData = e) : this.prevData = null
        }
        ,
        Ud.prototype.setToken = function (e) {
            this.token = e
        }
        ,
        Ud.prototype.refreshTimestamp = function () {
            this.timestamp = String(+new Date)
        }
        ,
        Ud.prototype.setCurSpiderElement = function (e) {
            this.curSpiderElement = e
        }
        ,
        Ud.prototype.get = function () {
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
        Ud);
    function Ud() {
        var e = qd.call(this) || this;
        return e.curSpmArray = [],
            e.curPageArgs = null,
            e.prevData = null,
            e.token = Mf(Ef) || Mf(Sf),
            e.timestamp = String(+new Date),
            e.curSpiderElement = null,
            e
    }
    Bd = function (e, t) {
        return (Bd = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (e, t) {
            e.__proto__ = t
        }
            || function (e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
        )(e, t)
    }
        ;
    (function (e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Bd(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
                new n)
    }
    )(zd, Wd = o),
        zd.prototype.init = function (e) {
            id = (e = e) && e.showLog && e.showLog.blackDomainList || []
        }
        ,
        zd.prototype.trackPageview = function (e) {
            this.spiderPageview.trackPageview(e)
        }
        ,
        zd.prototype.trackAction = function (e, t) {
            this.spiderClick.trackAction(e, "click", t)
        }
        ,
        zd.prototype.transferActionBy = function (e, t, n) {
            return this.spiderNavigation.transferActionBy(e, t, n)
        }
        ,
        zd.prototype.transferAction = function (e) {
            return this.spiderNavigation.transferAction(e)
        }
        ,
        zd.prototype.trackImpression = function (e, t) {
            this.spiderClick.trackAction(e, "expose", t)
        }
        ;
    var Bd, Wd, Hd, Jd, Vd, Fd, Gd, Qd, r = zd;
    function zd() {
        var e = Wd.call(this) || this;
        return e.spiderPageview = new yd(e),
            e.spiderClick = new bd(e),
            e.spiderNavigation = new kd(e),
            e
    }
    function Kd(i) {
        w.body.addEventListener("click", function (e) {
            var t = Bf(e.target, Wf);
            if (null !== t) {
                var n = Vf(t);
                if (null !== n)
                    if ("_" !== n.spmc || "" !== n.actionName)
                        switch (i.setCurSpiderElement(t),
                        t.getAttribute(gf)) {
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
                                var o, r = Bf(t, Nf);
                                r instanceof HTMLAnchorElement ? (o = i.transferActionBy(r.href, n)) === kf ? e.preventDefault() : (m.emit("pageNavigate"),
                                    r.href = o) : i.trackAction(n)
                        }
            }
        }, !0)
    }
    function Yd(e) {
        try {
            return e.defaultView && e.defaultView.frameElement || null
        } catch (e) {
            return null
        }
    }
    function $d(e) {
        this.time = e.time,
            this.target = e.target,
            this.rootBounds = nh(e.rootBounds),
            this.boundingClientRect = nh(e.boundingClientRect),
            this.intersectionRect = nh(e.intersectionRect || th()),
            this.isIntersecting = !!e.intersectionRect;
        var e = this.boundingClientRect
            , e = e.width * e.height
            , t = this.intersectionRect
            , t = t.width * t.height;
        this.intersectionRatio = e ? Number((t / e).toFixed(4)) : this.isIntersecting ? 1 : 0
    }
    function j(e, t) {
        var n, r, o, t = t || {};
        if ("function" != typeof e)
            throw new Error("callback must be a function");
        if (t.root && 1 != t.root.nodeType)
            throw new Error("root must be an Element");
        this._checkForIntersections = (n = this._checkForIntersections.bind(this),
            r = this.THROTTLE_TIMEOUT,
            o = null,
            function () {
                o = o || setTimeout(function () {
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
            this.rootMargin = this._rootMarginValues.map(function (e) {
                return e.value + e.unit
            }).join(" "),
            this._monitoringDocuments = [],
            this._monitoringUnsubscribes = []
    }
    function Xd(e, t, n, r) {
        "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
    }
    function Zd(e, t, n, r) {
        "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
    }
    function eh(e) {
        var t;
        try {
            t = e.getBoundingClientRect()
        } catch (e) { }
        return t ? t.width && t.height ? t : {
            top: t.top,
            right: t.right,
            bottom: t.bottom,
            left: t.left,
            width: t.right - t.left,
            height: t.bottom - t.top
        } : th()
    }
    function th() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        }
    }
    function nh(e) {
        return !e || "x" in e ? e : {
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
    function rh(e, t) {
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
    function oh(e, t) {
        for (var n = t; n;) {
            if (n == e)
                return !0;
            n = ih(n)
        }
        return !1
    }
    function ih(e) {
        var t = e.parentNode;
        return 9 == e.nodeType && e != Hd ? Yd(e) : t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
    }
    "object" == typeof window && ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function () {
            return 0 < this.intersectionRatio
        }
    }) : (Hd = function () {
        for (var e = window.document, t = Yd(e); t;)
            t = Yd(e = t.ownerDocument);
        return e
    }(),
        Jd = [],
        Fd = Vd = null,
        j.prototype.THROTTLE_TIMEOUT = 100,
        j.prototype.POLL_INTERVAL = null,
        j.prototype.USE_MUTATION_OBSERVER = !0,
        j._setupCrossOriginUpdater = function () {
            return Vd = Vd || function (e, t) {
                Fd = e && t ? rh(e, t) : th(),
                    Jd.forEach(function (e) {
                        e._checkForIntersections()
                    })
            }
        }
        ,
        j._resetCrossOriginUpdater = function () {
            Fd = Vd = null
        }
        ,
        j.prototype.observe = function (t) {
            var e = this._observationTargets.some(function (e) {
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
        j.prototype.unobserve = function (t) {
            this._observationTargets = this._observationTargets.filter(function (e) {
                return e.element != t
            }),
                this._unmonitorIntersections(t.ownerDocument),
                0 == this._observationTargets.length && this._unregisterInstance()
        }
        ,
        j.prototype.disconnect = function () {
            this._observationTargets = [],
                this._unmonitorAllIntersections(),
                this._unregisterInstance()
        }
        ,
        j.prototype.takeRecords = function () {
            var e = this._queuedEntries.slice();
            return this._queuedEntries = [],
                e
        }
        ,
        j.prototype._initThresholds = function (e) {
            e = e || [0];
            return (e = Array.isArray(e) ? e : [e]).sort().filter(function (e, t, n) {
                if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e)
                    throw new Error("threshold must be a number between 0 and 1 inclusively");
                return e !== n[t - 1]
            })
        }
        ,
        j.prototype._parseRootMargin = function (e) {
            e = (e || "0px").split(/\s+/).map(function (e) {
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
        j.prototype._monitorIntersections = function (t) {
            var n, r, o, e = t.defaultView;
            e && -1 == this._monitoringDocuments.indexOf(t) && (n = this._checkForIntersections,
                o = r = null,
                this.POLL_INTERVAL ? r = e.setInterval(n, this.POLL_INTERVAL) : (Xd(e, "resize", n, !0),
                    Xd(t, "scroll", n, !0),
                    this.USE_MUTATION_OBSERVER && "MutationObserver" in e && (o = new e.MutationObserver(n)).observe(t, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })),
                this._monitoringDocuments.push(t),
                this._monitoringUnsubscribes.push(function () {
                    var e = t.defaultView;
                    e && (r && e.clearInterval(r),
                        Zd(e, "resize", n, !0)),
                        Zd(t, "scroll", n, !0),
                        o && o.disconnect()
                }),
                t != (this.root && this.root.ownerDocument || Hd) && (e = Yd(t)) && this._monitorIntersections(e.ownerDocument))
        }
        ,
        j.prototype._unmonitorIntersections = function (r) {
            var o, e, t = this._monitoringDocuments.indexOf(r);
            -1 != t && (o = this.root && this.root.ownerDocument || Hd,
                this._observationTargets.some(function (e) {
                    if ((t = e.element.ownerDocument) == r)
                        return !0;
                    for (; t && t != o;) {
                        var t, n = Yd(t);
                        if ((t = n && n.ownerDocument) == r)
                            return !0
                    }
                    return !1
                }) || (e = this._monitoringUnsubscribes[t],
                    this._monitoringDocuments.splice(t, 1),
                    this._monitoringUnsubscribes.splice(t, 1),
                    e(),
                    r != o && (t = Yd(r)) && this._unmonitorIntersections(t.ownerDocument)))
        }
        ,
        j.prototype._unmonitorAllIntersections = function () {
            var e = this._monitoringUnsubscribes.slice(0);
            this._monitoringDocuments.length = 0;
            for (var t = this._monitoringUnsubscribes.length = 0; t < e.length; t++)
                e[t]()
        }
        ,
        j.prototype._checkForIntersections = function () {
            var a, s;
            !this.root && Vd && !Fd || (a = this._rootIsInDom(),
                s = a ? this._getRootRect() : th(),
                this._observationTargets.forEach(function (e) {
                    var t = e.element
                        , n = eh(t)
                        , r = this._rootContainsTarget(t)
                        , o = e.entry
                        , i = a && r && this._computeTargetAndRootIntersection(t, n, s)
                        , e = e.entry = new $d({
                            time: window.performance && performance.now && performance.now(),
                            target: t,
                            boundingClientRect: n,
                            rootBounds: Vd && !this.root ? null : s,
                            intersectionRect: i
                        });
                    o ? a && r ? this._hasCrossedThreshold(o, e) && this._queuedEntries.push(e) : o && o.isIntersecting && this._queuedEntries.push(e) : this._queuedEntries.push(e)
                }, this),
                this._queuedEntries.length && this._callback(this.takeRecords(), this))
        }
        ,
        j.prototype._computeTargetAndRootIntersection = function (e, t, n) {
            if ("none" != window.getComputedStyle(e).display) {
                for (var r, o, i = t, a = ih(e), s = !1; !s && a;) {
                    var c, u, p, l = null, f = 1 == a.nodeType ? window.getComputedStyle(a) : {};
                    if ("none" == f.display)
                        return null;
                    if (a == this.root || 9 == a.nodeType ? (s = !0,
                        a == this.root || a == Hd ? Vd && !this.root ? !Fd || 0 == Fd.width && 0 == Fd.height ? i = l = a = null : l = Fd : l = n : (c = (p = ih(a)) && eh(p),
                            u = p && this._computeTargetAndRootIntersection(p, c, n),
                            c && u ? (a = p,
                                l = rh(c, u)) : i = a = null)) : a != (p = a.ownerDocument).body && a != p.documentElement && "visible" != f.overflow && (l = eh(a)),
                        l && (c = l,
                            u = i,
                            o = r = l = f = void 0,
                            f = Math.max(c.top, u.top),
                            l = Math.min(c.bottom, u.bottom),
                            r = Math.max(c.left, u.left),
                            c = Math.min(c.right, u.right),
                            o = l - f,
                            i = 0 <= (u = c - r) && 0 <= o ? {
                                top: f,
                                bottom: l,
                                left: r,
                                right: c,
                                width: u,
                                height: o
                            } : null),
                        !i)
                        break;
                    a = a && ih(a)
                }
                return i
            }
        }
        ,
        j.prototype._getRootRect = function () {
            var e, t;
            return t = this.root ? eh(this.root) : (t = Hd.documentElement,
                e = Hd.body,
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
        j.prototype._expandRectByRootMargin = function (n) {
            var e = this._rootMarginValues.map(function (e, t) {
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
        j.prototype._hasCrossedThreshold = function (e, t) {
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
        j.prototype._rootIsInDom = function () {
            return !this.root || oh(Hd, this.root)
        }
        ,
        j.prototype._rootContainsTarget = function (e) {
            return oh(this.root || Hd, e) && (!this.root || this.root.ownerDocument == e.ownerDocument)
        }
        ,
        j.prototype._registerInstance = function () {
            Jd.indexOf(this) < 0 && Jd.push(this)
        }
        ,
        j.prototype._unregisterInstance = function () {
            var e = Jd.indexOf(this);
            -1 != e && Jd.splice(e, 1)
        }
        ,
        window.IntersectionObserver = j,
        window.IntersectionObserverEntry = $d));
    var ah = [];
    function sh() {
        ah.forEach(function (t) {
            var e = w.querySelectorAll(t.selector);
            Array.prototype.slice.call(e).forEach(function (e) {
                e.load || (e.load = !0,
                    t.fn(e))
            })
        })
    }
    function ch(n) {
        function r(e) {
            e.forEach(function (e) {
                var t = qf(e.target.getAttribute(_f))
                    , t = t && t.intersectionRatio || 0;
                e.intersectionRatio > t && (e.target.setAttribute(wf, "impressed"),
                    n.trackImpression(e.target),
                    Gd.unobserve(e.target))
            })
        }
        var o = {
            threshold: [1e-4, .25, .45, .65, .85, 1]
        };
        Jf(function () {
            var e, t;
            Gr("impression") && (Gd = new IntersectionObserver(r, o),
                e = "[" + wf + "]",
                t = function (e) {
                    var t;
                    "" !== (t = (t = e).getAttribute(wf)) && "true" !== t || Gd.observe(e)
                }
                ,
                ah.push({
                    selector: e,
                    fn: t
                }),
                Qd || (Qd = new MutationObserver(sh)).observe(w.body, {
                    childList: !0,
                    subtree: !0
                }),
                sh())
        })
    }
    function uh(e) {
        Jf(function () {
            Fr("spider") || (e.refreshTimestamp(),
                e.trackPageview())
        })
    }
    var ph = {
        spma: void 0,
        spmb: void 0
    };
    function lh(e, t) {
        t = t,
            ph.spma = e,
            ph.spmb = t
    }
    function fh(t) {
        var n, e, o, r = {};
        function i(e, t) {
            var n = Zf()
                , r = n.spma
                , n = n.spmb;
            r && n && (lh(r, n),
                o || (t && t(),
                    o = !0),
                L.emit("PAGE_ENTER", {
                    type: "PAGE_ENTER",
                    startTime: k(),
                    spma: r,
                    spmb: n,
                    reason: e,
                    document_ref: w.referrer
                }))
        }
        L.on("PAGE_ENTER", function (e) {
            e.spma && e.spmb && (n = e,
                Pf && !sessionStorage.getItem(Of) && sessionStorage.setItem(Of, e.spma + "_" + e.spmb))
        }),
            L.on("PAGE_LEAVE", function (e) {
                n && (e = d({}, r, {
                    duration: (e.startTime - n.startTime).toString(),
                    spma: n.spma,
                    spmb: n.spmb,
                    document_ref: n.document_ref,
                    isReport: Pf && sessionStorage.getItem(Of) === n.spma + "_" + n.spmb
                }),
                    t(e)),
                    n = void 0
            }),
            ad(function (e) {
                e && (r.referer = e)
            }),
            o = !(e = function () {
                var o;
                mo(function () {
                    L.emit("PAGE_LEAVE", {
                        type: "PAGE_LEAVE",
                        startTime: k()
                    })
                }),
                    Go(function () {
                        ke(function () {
                            var e = Zf()
                                , t = e.spma
                                , e = e.spmb;
                            t && e && (t !== ph.spma || e !== ph.spmb) && (t = k(),
                                L.emit("PAGE_LEAVE", {
                                    type: "PAGE_LEAVE",
                                    startTime: t,
                                    reason: "SPMAB_CHANGE"
                                }))
                        })
                    }),
                    uo(function () {
                        "hidden" === w.visibilityState && L.emit("PAGE_LEAVE", {
                            type: "PAGE_LEAVE",
                            startTime: k(),
                            reason: "VISIBILITY_CHANGE"
                        })
                    }),
                    _.addEventListener("pagehide", function () {
                        L.emit("PAGE_LEAVE", {
                            type: "PAGE_LEAVE",
                            startTime: k(),
                            reason: "PAGE_HIDE"
                        })
                    }),
                    sd(function (e) {
                        o(e)
                    }),
                    o = function (e) {
                        var t = k()
                            , n = (setTimeout(function () {
                                sd(function (e) {
                                    o(e)
                                })
                            }, 100),
                                Zf())
                            , r = n.spma
                            , n = n.spmb;
                        "background" === e.type ? L.emit("PAGE_LEAVE", {
                            type: "PAGE_LEAVE",
                            startTime: t,
                            reason: "WEBVIEW_LIFECYCLE_CHANGE"
                        }) : "foreground" === e.type && L.emit("PAGE_ENTER", {
                            type: "PAGE_ENTER",
                            spma: r,
                            spmb: n,
                            startTime: t,
                            document_ref: w.referrer,
                            reason: "WEBVIEW_LIFECYCLE_CHANGE"
                        })
                    }
            }
            ),
            po(function () {
                i("PAGE_LOAD", e)
            }),
            dd(function () {
                i("SPMAB_CHANGE", e)
            }),
            uo(function () {
                "visible" === w.visibilityState && i("VISIBILITY_CHANGE")
            })
    }
    function dh() {
        var t, r;
        Kd(this),
            uh(t = this),
            dd(function () {
                uh(t)
            }),
            _.addEventListener("pageshow", function (e) {
                e.persisted && uh(t)
            }),
            m.on("reportSuccess", function (e) {
                e.data.forEach(function (e) {
                    "page_view" === e.subtype && m.emit("reportSpiderPageview", e)
                })
            }),
            ch(this),
            r = this,
            fh(function (e) {
                var t = r.get()
                    , n = t.curPageArgs
                    , t = t.curSpm;
                r.report("event", {
                    subtype: "event",
                    cur_event_name: "time_on_page",
                    cur_spm: t,
                    cur_page_args: n,
                    cur_event_args: e
                })
            })
    }
    function hh() {
        var a = this;
        this.hooks.push("beforeNavigate", function (e, t) {
            var n, r = e.url, o = e.value, i = e.context;
            "weidianbuyer:" === Rf(r).protocol ? ((n = r) && 0 <= n.indexOf("weidianbuyer://wdb/webview") && (n = Mf("url", r)) ? (i = i.transferActionBy(n, o),
                e.url = jt(r, {
                    url: i
                })) : (a.trackAction(o),
                    e.url = r),
                t && t(new Error(""))) : t && t()
        })
    }
    var mh = /weidian.com\/item\.html.*(item)ID=(\d+)/
        , vh = /weidian\.com\/?\?.*(user)id=(\d+)/
        , gh = {
            NAVIGATE_TO: "navigateTo",
            SWITCH_TAB: "switchTab"
        }
        , yh = {
            item: {
                minaPath: "/lib/item/dist/pages/index/index?itemId=",
                actionName: x.ITEM
            },
            user: {
                minaPath: "/lib/shop/dist/pages/index/index?shopId=",
                actionName: x.SHOP
            }
        };
    function _h() {
        var s = this;
        this.hooks.push("beforeNavigate", function (e, t) {
            var n, r, o, i = e.url, a = e.action;
            jr() ? ("thirdApp" !== Mf("invoke") && "thirdApp" !== Mf("vc_invoke") || (i = jt(i, {
                invoke: "thirdApp"
            }),
                e.url = i),
                "0" === Mf("urlIntercept", i) ? t && t() : (n = (n = i).match(mh) || n.match(vh),
                    "wx_zhuanzhuan" !== Mf("vc_minip") && n ? (o = i,
                        r = yh[(r = n)[1]].minaPath + r[2],
                        (o = (o = (o = o).match(/^[^\?#]*\?([^#]*)/)) ? o[1] : "") && (r += "&" + o),
                        o = r,
                        r = a,
                        a = s,
                        "item" === (n = n)[1] && (r.actionName = x.ITEM,
                            r.actionArgs = d({}, r.actionArgs, {
                                itemId: n[2]
                            })),
                        "user" === n[1] && (r.actionName = x.SHOP,
                            r.actionArgs = d({}, r.actionArgs, {
                                shopId: n[2]
                            })),
                        a.trackAction(r),
                        (n = _.jWeixin || _.wx) && (n.miniProgram[gh.NAVIGATE_TO]({
                            url: o
                        }),
                            n.miniProgram[gh.SWITCH_TAB]({
                                url: o
                            })),
                        e.url = "javascript:",
                        t && t(new Error(""))) : (e.url = i,
                            t && t()))) : t && t()
        })
    }
    function wh() {
        this.hooks.push("beforeNavigate", function (e, t) {
            try {
                _.multiDomainRuleMap && Qr("spider") && !xr() && !Lr() && (e.url = $a(e.url, _.multiDomainRuleMap)),
                    !_.multiDomainRuleMap || Fr("privateDomain") || xr() || (jr() || (e.url = za(e.url, {
                        dataMap: _.multiDomainRuleMap
                    })),
                        jr() && "weituantuan" === Mf("vc_invoke") && (e.url = za(e.url, {
                            dataMap: _.multiDomainRuleMap
                        })))
            } catch (e) {
                E(e)
            }
            t && t()
        })
    }
    function bh() {
        hh.call(this),
            function () {
                var o = this;
                this.hooks.push("beforeNavigate", function (e, t) {
                    var n = e.url
                        , r = e.value;
                    xo(n) ? t && t() : (o.trackAction(r),
                        e.url = n,
                        t && t(new Error("")))
                })
            }
                .call(this),
            _h.call(this),
            wh.call(this),
            function () {
                this.hooks.push("beforeNavigate", function (e, t) {
                    var n = Object.create(null)
                        , r = Mf("share_relation");
                    d(n, Yf(), b(e.url)),
                        r && (n.share_relation = r),
                        e.url = jt(e.url, n),
                        t && t()
                })
            }
                .call(this)
    }
    function Eh(e) {
        n = /^visual-window:([\S\s]+)$/;
        var t, n = (n = _.name.match(n) || _.parent && _.parent.name && _.parent.name.match(n)) && n[1].split("|"), r = ["assets.geilicdn.com", "assets.pre.geilicdn.com", "assets.daily.geilicdn.com", "h5.dev.weidian.com"];
        _ !== _.top && n && n.length && (_.spider_visual ? Sh(e) : (n = n.filter(function (e) {
            e = Rf(e);
            return Nf(e) && -1 < r.indexOf(e.hostname)
        }),
            t = [],
            n && n.forEach(function (e) {
                return t.push(Zr(e))
            }),
            Promise.all(t).then(function () {
                return Sh(e)
            })))
    }
    function Sh(e) {
        var e = e.get()
            , t = e.curSpm
            , e = e.curPageArgs;
        t && _.spider_visual && _.spider_visual.init(t, e)
    }
    function kh() {
        var e = this;
        m.on("reportSpiderPageview", function () {
            Eh(e)
        })
    }
    function Th() {
        if (navigator.userAgent.match(/iPhone OS [\d_]+/)) {
            var e = w.createElement("style");
            e.type = "text/css",
                e.innerHTML = '    [data-spider=""],     [data-spider-action-type],     [data-spider-action-name] {        cursor: pointer;     }';
            try {
                w.getElementsByTagName("head").item(0).appendChild(e)
            } catch (e) { }
        }
    }
    var Oh = "__kernel__pecker__tapper"
        , n = window
        , Ph = n.localStorage
        , Ah = (/\.(dev|daily|pre)\./.test(n.location.hostname) ? "https://logtake.daily.weidian.com" : "https://logtake.weidian.com") + "/h5collector/webcollect/3.0";
    function Ih(t) {
        var n = new window.XMLHttpRequest;
        n.onreadystatechange = function () {
            var e;
            4 == n.readyState && (200 == n.status ? (e = n.responseText,
                t.success(function (e) {
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
            t.data instanceof FormData || (t.data = function (e) {
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
    function xh() { }
    function D() {
        this.tapperSend = !1,
            this.lockLogCount = 0
    }
    D.getInstance = function () {
        return this.instance || (this.instance = new D,
            this.instance)
    }
        ,
        D.prototype.initTapperData = function () {
            this.setStorageData({
                startTime: +new Date,
                logCount: 0
            })
        }
        ,
        D.prototype.isTapperSend = function () {
            return this.tapperSend
        }
        ,
        D.prototype.getLockLogCount = function () {
            return this.lockLogCount
        }
        ,
        D.prototype.changeTapperSend = function () {
            this.tapperSend = !0
        }
        ,
        D.prototype.addLockLogCount = function (e) {
            this.lockLogCount += e = void 0 === e ? 1 : e
        }
        ,
        D.prototype.cleanLockLog = function () {
            this.lockLogCount = 0
        }
        ,
        D.prototype.tap = function (e) {
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
        D.prototype.getTapperData = function () {
            return this.getStorageData()
        }
        ,
        D.prototype.sendTapData = function (n, r) {
            return new Promise(function (e, t) {
                Ih({
                    url: Ah,
                    data: {
                        log: function (e) {
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
            ).catch(xh)
        }
        ,
        D.prototype.setStorageData = function (e) {
            try {
                Ph.setItem(Oh, JSON.stringify(e))
            } catch (e) { }
        }
        ,
        D.prototype.getStorageData = function () {
            try {
                var e = JSON.parse(Ph.getItem(Oh) || "");
                return this.isTapperData(e) ? e : null
            } catch (e) {
                return null
            }
        }
        ,
        D.prototype.isTapperData = function (e) {
            if ("[object Object]" !== toString.call(e))
                return !1;
            var t = e.startTime
                , e = e.logCount;
            return "number" == typeof t && "number" == typeof e
        }
        ;
    var Ch = D.getInstance();
    function Lh(e) {
        void 0 === e && (e = 1);
        try {
            Ch.isTapperSend() ? Ch.tap(e) : Ch.addLockLogCount(e)
        } catch (e) { }
    }
    function jh() {
        var t = this;
        L.on(vd, function () {
            Os(function (e) {
                e = e && e.get();
                try {
                    var t = Ch.getTapperData()
                        , n = (t && Ch.sendTapData(e, t),
                            Ch.changeTapperSend(),
                            Ch.initTapperData(),
                            Ch.getLockLogCount());
                    0 < n && (Ch.tap(n),
                        Ch.cleanLockLog())
                } catch (e) { }
            })
        }),
            L.on("report_prev_data", function () {
                var e = t.get().prevData;
                e && e.prev_spm && md && Lh(-1)
            }),
            L.on(gd, function () {
                md && Lh()
            })
    }
    t = {
        getFirstScreenInfo: l,
        ignoreRequestUrl: l,
        init: l,
        onReport: l,
        perf: {
            docRetrieveEnd: l,
            docRetrieveStart: l,
            install: l,
            mark: l,
            measure: l,
            onRecord: !1,
            recordFirstScreen: l,
            reportTime: l,
            xhrLoad: l
        },
        reportPerf: l
    },
        Me = {
            debug: l,
            info: l,
            error: l,
            init: l,
            isNotValidConfig: !1,
            report: l,
            setError: l,
            warn: l,
            _erroCode: {
                ">": null,
                ">=": null,
                "<": null,
                "<=": null,
                "=": null,
                "!=": [0]
            }
        },
        o = window.navigator.userAgent,
        n = {
            QQ_BROWSER: "qqbrowser",
            WX: "wx",
            QQ: "qq",
            APP: "app",
            VBUYER: "vbuyer",
            WD: "kdweidian"
        };
    Bh = "0.0.0",
        N = "browser",
        Uh = null,
        /MQQBrowser\//i.test(o) && (N = "qqbrowser"),
        /MicroMessenger/i.test(o) && (N = "wx"),
        /QQ\/([\d\.]+)/i.test(o) && (N = "qq"),
        /WDAPP\(/.test(o) && (N = "app"),
        /WDAPP\(WDBuyer/.test(o) && (N = "vbuyer",
            Uh = o.match(/WDAPP\(WDBuyer\/([\d\.]+)/)),
        /WDAPP\(WD\//.test(o) && (N = "kdweidian",
            Uh = o.match(/WDAPP\(WD\/([\d\.]+)/));
    var Dh, Nh, Rh, qh, Mh, o = {
        name: N,
        version: Bh = Uh ? Uh && Uh[1] : Bh,
        constant: n,
        isWx: N === n.WX,
        isQQ: N === n.QQ,
        isQQBrowser: N === n.QQ_BROWSER,
        isVbuyer: N === n.VBUYER,
        isWD: N === n.WD,
        isApp: N === n.WD || N === n.VBUYER || N === n.APP
    }, Uh = (Dh = new Pe,
        ku() && f([nl, Qu, Hu, Np, tl], function (e) {
            return Dh.use(e)
        }),
    {
        use: function (e) {
            Dh.use(e)
        },
        measure: function (e) {
            m.emit("reportPerformanceTiming", e)
        }
    }), Bh = ((Nh = new Ne).use(uf),
        Nh.use(pf),
        Rh = {
            option: function (e) {
                return Nh.option(e),
                    Rh
            },
            evoke: function (e) {
                return Nh.evoke(e),
                    Rh
            },
            getUrl: cf,
            use: function (e) {
                return Nh.use(e),
                    Rh
            },
            catch: function (e) {
                return Nh.catch(e),
                    Rh
            }
        },
        hf.call(Rh, Nh),
        Rh), N = (qh = new r,
            md && qh.use(jh),
            f([dh, bh, kh, Th], function (e) {
                return qh.use(e)
            }),
        {
            use: function (e) {
                return qh.use(e)
            },
            trackPageview: function (e) {
                var t = Fr("spider")
                    , n = arguments;
                t ? qh.trackPageview(n.length ? n[n.length - 1] : void 0) : Qt("手动上报pageview之前需在body上声明禁用spider自动pageview data-spider-disabled=[spider]")
            },
            trackAction: function (e, t) {
                qh.trackAction(e, t)
            },
            trackImpression: function (e, t) {
                qh.trackImpression(e, t)
            },
            transferAction: function (e) {
                qh.transferAction(e)
            },
            transferActionBy: function (e, t, n) {
                return qh.transferActionBy(e, t, n)
            },
            extractActionFrom: Vf,
            constants: x,
            getClickElement: function () {
                return qh.get().curSpiderElement
            },
            impression: {
                traverse: l,
                observe: l,
                disconnect: l
            },
            getCookie: rd,
            getSearchParams: od,
            disableAutoReport: l,
            reset: l,
            init: function (e) {
                qh.init(e)
            },
            VERSION: "0.1.3"
        }), n = (Mh = new nc,
            f([tu, vc, Bc, Zc], function (e) {
                return Mh.use(e)
            }),
        {
            use: function (e) {
                Mh.use(e)
            },
            error: function (e) {
                m.emit("reportException", e)
            },
            info: function (e) {
                m.emit("reportInformation", e)
            },
            warn: function (e) {
                m.emit("reportWarn", e)
            }
        });
    function Wh(e, t, n) {
        m.on(e, t, n)
    }
    function Hh(e, t, n) {
        m.once(e, t, n)
    }
    function Jh(e, t) {
        m.emit(e, t)
    }
    return _.pathTracker = Bh,
        _.vcollect = {
            ua: o,
            reportError: l,
            setError: l
        },
        _.owl = t,
        _.cat = Me,
        _.spider = N,
        _.pecker = {
            on: Wh,
            once: Hh,
            emit: Jh,
            bat: n,
            spider: N,
            owl: Uh,
            pathtracker: Bh
        },
        R.bat = n,
        R.emit = Jh,
        R.on = Wh,
        R.once = Hh,
        R.owl = Uh,
        R.pathtracker = Bh,
        R.spider = N,
        R
}({});

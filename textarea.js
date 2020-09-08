try {
    var h, _lastCalFunc = function() {},
        aaa = function(a, b, c) {
            if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
            return a + ""
        },
        baa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] =
                c.value)
        },
        caa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global ? global : this,
        aa = function(a, b) {
            if (b) {
                for (var c = caa, d = a.split("."), e = 0; e < d.length - 1; e++) {
                    var f = d[e];
                    f in c || (c[f] = {});
                    c = c[f]
                }
                d = d[d.length - 1];
                e = c[d];
                f = b(e);
                f != e && null != f && baa(c, d, {
                    configurable: !0,
                    writable: !0,
                    value: f
                })
            }
        };
    aa("String.prototype.repeat", function(a) {
        return a ? a : function(a) {
            var b = aaa(this, null, "repeat");
            if (0 > a || 1342177279 < a) throw new RangeError("Invalid count value");
            a |= 0;
            for (var d = ""; a;)
                if (a & 1 && (d += b), a >>>= 1) b += b;
            return d
        }
    });
    aa("String.prototype.includes", function(a) {
        return a ? a : function(a, c) {
            return -1 !== aaa(this, a, "includes").indexOf(a, c || 0)
        }
    });
    aa("Number.isNaN", function(a) {
        return a ? a : function(a) {
            return "number" === typeof a && isNaN(a)
        }
    });
    var ba = ba || {},
        ca = this,
        n = function(a) {
            return void 0 !== a
        },
        da = function(a, b, c) {
            a = a.split(".");
            c = c || ca;
            a[0] in c || !c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) !a.length && n(b) ? c[d] = b : c[d] ? c = c[d] : c = c[d] = {}
        },
        ea = function(a, b) {
            for (var c = a.split("."), d = b || ca, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else return null;
            return d
        },
        ia = function() {},
        la = function(a) {
            a.va = function() {
                return a.HI ? a.HI : a.HI = new a
            }
        },
        ma = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        na = function(a) {
            return "array" == ma(a)
        },
        oa = function(a) {
            var b = ma(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        pa = function(a) {
            return "string" == typeof a
        },
        qa = function(a) {
            return "number" == typeof a
        },
        ra = function(a) {
            return "function" == ma(a)
        },
        ta = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        va = function(a) {
            return a[daa] || (a[daa] = ++eaa)
        },
        daa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        eaa = 0,
        faa = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        gaa = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        p = function(a, b, c) {
            p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? faa : gaa;
            return p.apply(null, arguments)
        },
        q = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        wa = function(a, b) {
            for (var c in b) a[c] = b[c]
        },
        t = Date.now || function() {
            return +new Date
        },
        ya = function(a) {
            if (ca.execScript) ca.execScript(a, "JavaScript");
            else if (ca.eval) {
                if (null == xa)
                    if (ca.eval("var _evalTest_ = 1;"), "undefined" != typeof ca._evalTest_) {
                        try {
                            delete ca._evalTest_
                        } catch (d) {}
                        xa = !0
                    } else xa = !1;
                if (xa) ca.eval(a);
                else {
                    var b = ca.document,
                        c = b.createElement("SCRIPT");
                    c.type = "text/javascript";
                    c.defer = !1;
                    c.appendChild(b.createTextNode(a));
                    b.body.appendChild(c);
                    b.body.removeChild(c)
                }
            } else throw Error("a");
        },
        xa = null,
        haa = function(a, b) {
            da("_GCAL_wizbind", a, b)
        },
        v = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.qa = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.hs = function(a, c, f) {
                for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
                return b.prototype[c].apply(a, d)
            }
        };
    var Aa, Ba;
    Aa = function(a) {
        return "+" + a + " more"
    };
    Ba = function(a, b) {
        return "" + a + " \u2013 " + b
    };
    var iaa = function(a, b, c, d) {
        this.type = a.type;
        this.event = a;
        this.b = b;
        this.o = c;
        this.data = a.data;
        this.source = d
    };
    var Ca = function(a, b, c) {
        this.T = c;
        this.H = a;
        this.R = b;
        this.o = 0;
        this.b = null
    };
    Ca.prototype.get = function() {
        var a;
        0 < this.o ? (this.o--, a = this.b, this.b = a.next, a.next = null) : a = this.H();
        return a
    };
    var jaa = function(a, b) {
        a.R(b);
        a.o < a.T && (a.o++, b.next = a.b, a.b = b)
    };
    var Da = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Da);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    v(Da, Error);
    Da.prototype.name = "CustomError";
    var kaa;
    var Ea = function(a) {
        this.id = a
    };
    Ea.prototype.toString = function() {
        return this.id
    };
    var Fa = function(a) {
            return function() {
                return a
            }
        },
        Ga = Fa(!1),
        Ha = Fa(!0),
        laa = Fa(null),
        Ia = function(a) {
            return a
        },
        maa = function(a) {
            return function() {
                throw Error(a);
            }
        },
        naa = function(a) {
            return function() {
                throw a;
            }
        },
        Ja = function(a) {
            var b = arguments,
                c = b.length;
            return function() {
                for (var a, e = 0; e < c; e++) a = b[e].apply(this, arguments);
                return a
            }
        },
        oaa = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            c = new c;
            a.apply(c, Array.prototype.slice.call(arguments, 1));
            return c
        };
    var paa = /<[^>]*>|&[^;]+;/g,
        Ka = function(a, b) {
            return b ? a.replace(paa, "") : a
        },
        qaa = RegExp("[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
        raa = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        saa = RegExp("^[^\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        taa = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"),
        La = function(a) {
            return taa.test(Ka(a, void 0))
        },
        uaa = /^http:\/\/.*/,
        vaa = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g,
        Ma = function(a) {
            var b = qaa.test(Ka(a, void 0)) ? "\u200f" : "\u200e";
            return a.replace(vaa, b + "$&" + b)
        },
        waa = /\s+/,
        xaa = /[\d\u06f0-\u06f9]/,
        yaa = function(a, b) {
            for (var c = 0, d = 0, e = !1, f = Ka(a, b).split(waa), g = 0; g < f.length; g++) {
                var k = f[g];
                La(k) ? (c++, d++) : uaa.test(k) ? e = !0 : raa.test(Ka(k, void 0)) ? d++ : xaa.test(k) && (e = !0)
            }
            return 0 == d ? e ? 1 : 0 : .4 < c / d ? -1 : 1
        },
        Na = function(a) {
            return -1 == yaa(a, void 0)
        };
    var Oa = function(a) {
            return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
        },
        Pa = function(a) {
            a = String(a);
            if (Oa(a)) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("b`" + a);
        },
        Qa = function(a) {
            return eval("(" + a + ")")
        },
        Sa = function(a, b) {
            var c = [];
            Ra(new zaa(b), a, c);
            return c.join("")
        },
        zaa = function(a) {
            this.b = a
        },
        Ra = function(a, b, c) {
            if (null == b) c.push("null");
            else {
                if ("object" == typeof b) {
                    if (na(b)) {
                        var d = b;
                        b = d.length;
                        c.push("[");
                        for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], Ra(a, a.b ? a.b.call(d, String(f), e) : e, c), e = ",";
                        c.push("]");
                        return
                    }
                    if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                    else {
                        c.push("{");
                        f = "";
                        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), Aaa(d, c), c.push(":"), Ra(a, a.b ? a.b.call(b, d, e) : e, c), f = ","));
                        c.push("}");
                        return
                    }
                }
                switch (typeof b) {
                    case "string":
                        Aaa(b, c);
                        break;
                    case "number":
                        c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                        break;
                    case "boolean":
                        c.push(String(b));
                        break;
                    case "function":
                        c.push("null");
                        break;
                    default:
                        throw Error("c`" + typeof b);
                }
            }
        },
        Baa = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        Caa = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
        Aaa = function(a, b) {
            b.push('"', a.replace(Caa, function(a) {
                var b = Baa[a];
                b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Baa[a] = b);
                return b
            }), '"')
        };
    var Ta = function(a, b) {
            this.width = a;
            this.height = b
        },
        Daa = function(a, b) {
            return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
        };
    h = Ta.prototype;
    h.clone = function() {
        return new Ta(this.width, this.height)
    };
    h.ZQ = function() {
        return this.width * this.height
    };
    h.isEmpty = function() {
        return !this.ZQ()
    };
    h.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    h.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    h.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Ua = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Va = function(a, b) {
            var c = {},
                d;
            for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
            return c
        },
        Wa = function(a, b) {
            var c = {},
                d;
            for (d in a) c[d] = b.call(void 0, a[d], d, a);
            return c
        },
        Xa = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        Ya = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Za = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        $a = function(a, b) {
            return null !== a && b in a
        },
        ab = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        bb =
        function(a) {
            for (var b in a) return !1;
            return !0
        },
        cb = function(a, b) {
            var c;
            (c = b in a) && delete a[b];
            return c
        },
        db = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        },
        Eaa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        eb = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Eaa.length; f++) c = Eaa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        },
        fb = function(a) {
            var b = arguments.length;
            if (1 ==
                b && na(arguments[0])) return fb.apply(null, arguments[0]);
            if (b % 2) throw Error("e");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        gb = function(a) {
            var b = arguments.length;
            if (1 == b && na(arguments[0])) return gb.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var Faa = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Gaa = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var hb = function(a) {
        hb[" "](a);
        return a
    };
    hb[" "] = ia;
    var ib = function(a, b) {
            try {
                return hb(a[b]), !0
            } catch (c) {}
            return !1
        },
        jb = function(a, b, c) {
            return Object.prototype.hasOwnProperty.call(a, b) ? a[b] : a[b] = c(b)
        };
    var kb = function(a, b) {
            return 0 == a.lastIndexOf(b, 0)
        },
        lb = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        mb = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        nb = function(a) {
            return a.replace(/(\r\n|\r|\n)/g, "\n")
        },
        ob = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        pb = function(a, b) {
            var c = String(a).toLowerCase(),
                d = String(b).toLowerCase();
            return c < d ? -1 : c == d ? 0 : 1
        },
        qb = function(a) {
            return encodeURIComponent(String(a))
        },
        rb = function(a) {
            return decodeURIComponent(a.replace(/\+/g,
                " "))
        },
        sb = function(a) {
            if (!Haa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Iaa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Jaa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Kaa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Laa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Maa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Naa, "&#0;"));
            return a
        },
        Iaa = /&/g,
        Jaa = /</g,
        Kaa = />/g,
        Laa = /"/g,
        Maa = /'/g,
        Naa = /\x00/g,
        Haa = /[\x00&<>"']/,
        ub = function(a) {
            return tb(a, "&") ? "document" in ca ? Oaa(a) : Paa(a) : a
        },
        Oaa = function(a) {
            var b = {
                    "&amp;": "&",
                    "&lt;": "<",
                    "&gt;": ">",
                    "&quot;": '"'
                },
                c;
            c = ca.document.createElement("div");
            return a.replace(Qaa, function(a, e) {
                var d = b[a];
                if (d) return d;
                if ("#" == e.charAt(0)) {
                    var g = Number("0" + e.substr(1));
                    isNaN(g) || (d = String.fromCharCode(g))
                }
                d || (c.innerHTML = a + " ", d = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = d
            })
        },
        Paa = function(a) {
            return a.replace(/&([^;]+);/g, function(a, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        if ("#" == c.charAt(0)) {
                            var b = Number("0" +
                                c.substr(1));
                            if (!isNaN(b)) return String.fromCharCode(b)
                        }
                        return a
                }
            })
        },
        Qaa = /&([^;\s<&]+);?/g,
        tb = function(a, b) {
            return -1 != a.indexOf(b)
        },
        vb = function(a) {
            return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        wb = String.prototype.repeat ? function(a, b) {
            return a.repeat(b)
        } : function(a, b) {
            return Array(b + 1).join(a)
        },
        xb = function(a) {
            return Array.prototype.join.call(arguments, "")
        },
        yb = function() {
            return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 *
                Math.random()) ^ t()).toString(36)
        },
        Ab = function(a, b) {
            for (var c = 0, d = ob(String(a)).split("."), e = ob(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
                var k = d[g] || "",
                    l = e[g] || "";
                do {
                    k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                    l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                    if (0 == k[0].length && 0 == l[0].length) break;
                    c = zb(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == l[1].length ? 0 : parseInt(l[1], 10)) || zb(0 == k[2].length, 0 == l[2].length) || zb(k[2], l[2]);
                    k = k[3];
                    l = l[3]
                } while (0 == c)
            }
            return c
        },
        zb = function(a, b) {
            return a <
                b ? -1 : a > b ? 1 : 0
        },
        Cb = 2147483648 * Math.random() | 0,
        Db = function(a) {
            return String(a).replace(/\-([a-z])/g, function(a, c) {
                return c.toUpperCase()
            })
        },
        Raa = function(a) {
            var b = pa(void 0) ? vb(void 0) : "\\s";
            return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
                return b + e.toUpperCase()
            })
        };
    var Saa = function(a, b) {
        if (null === b) return !1;
        if ("contains" in a && 1 == b.nodeType) return a.contains(b);
        if ("compareDocumentPosition" in a) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var x = function() {
        this.Mf = this.Mf;
        this.uf = this.uf
    };
    x.prototype.Mf = !1;
    x.prototype.isDisposed = function() {
        return this.Mf
    };
    x.prototype.Oa = function() {
        this.Mf || (this.Mf = !0, this.wa())
    };
    x.prototype.Gb = function(a) {
        Eb(this, q(y, a))
    };
    var Eb = function(a, b, c) {
        a.Mf ? n(c) ? b.call(c) : b() : (a.uf || (a.uf = []), a.uf.push(n(c) ? p(b, c) : b))
    };
    x.prototype.wa = function() {
        if (this.uf)
            for (; this.uf.length;) this.uf.shift()()
    };
    var y = function(a) {
            a && "function" == typeof a.Oa && a.Oa()
        },
        Taa = function(a) {
            for (var b = 0, c = arguments.length; b < c; ++b) {
                var d = arguments[b];
                oa(d) ? Taa.apply(null, d) : y(d)
            }
        };
    var Uaa = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
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
    };
    var Fb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Gb = function(a) {
            return !(!a || !a[Fb])
        },
        Vaa = 0;
    var Hb;
    a: {
        var Waa = ca.navigator;
        if (Waa) {
            var Xaa = Waa.userAgent;
            if (Xaa) {
                Hb = Xaa;
                break a
            }
        }
        Hb = ""
    }
    var Ib = function(a) {
        return tb(Hb, a)
    };
    var Jb = {};
    var Yaa = function(a, b) {
            return function(c) {
                c || (c = window.event);
                return b.call(a, c)
            }
        },
        Kb = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        Lb = function(a) {
            a = a.target || a.srcElement;
            !a.getAttribute && a.parentNode && (a = a.parentNode);
            return a
        },
        Zaa = "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
        $aa = "undefined" != typeof navigator && !/Opera/.test(navigator.userAgent) && /WebKit/.test(navigator.userAgent),
        aba = "undefined" != typeof navigator && !/Opera|WebKit/.test(navigator.userAgent) &&
        /Gecko/.test(navigator.product),
        bba = {
            A: 1,
            INPUT: 1,
            TEXTAREA: 1,
            SELECT: 1,
            BUTTON: 1
        },
        cba = function() {
            this._mouseEventsPrevented = !0
        },
        Mb = function(a) {
            var b = ca.document;
            if (b && !b.createEvent && b.createEventObject) try {
                return b.createEventObject(a)
            } catch (c) {
                return a
            } else return a
        },
        dba = {
            A: 13,
            BUTTON: 0,
            CHECKBOX: 32,
            COMBOBOX: 13,
            GRIDCELL: 13,
            LINK: 13,
            LISTBOX: 13,
            MENU: 0,
            MENUBAR: 0,
            MENUITEM: 0,
            MENUITEMCHECKBOX: 0,
            MENUITEMRADIO: 0,
            OPTION: 0,
            RADIO: 32,
            RADIOGROUP: 32,
            RESET: 0,
            SUBMIT: 0,
            TAB: 0,
            TREE: 13,
            TREEITEM: 13
        },
        fba = function(a) {
            return (a.getAttribute("type") ||
                a.tagName).toUpperCase() in eba
        },
        hba = function(a) {
            return (a.getAttribute("type") || a.tagName).toUpperCase() in gba
        },
        eba = {
            CHECKBOX: !0,
            OPTION: !0,
            RADIO: !0
        },
        gba = {
            COLOR: !0,
            DATE: !0,
            DATETIME: !0,
            "DATETIME-LOCAL": !0,
            EMAIL: !0,
            MONTH: !0,
            NUMBER: !0,
            PASSWORD: !0,
            RANGE: !0,
            SEARCH: !0,
            TEL: !0,
            TEXT: !0,
            TEXTAREA: !0,
            TIME: !0,
            URL: !0,
            WEEK: !0
        },
        iba = {
            A: !0,
            AREA: !0,
            BUTTON: !0,
            DIALOG: !0,
            IMG: !0,
            INPUT: !0,
            LINK: !0,
            MENU: !0,
            OPTGROUP: !0,
            OPTION: !0,
            PROGRESS: !0,
            SELECT: !0,
            TEXTAREA: !0
        };
    var Nb = function(a, b, c) {
        this.o = a;
        this.Kz = b || null;
        this.b = c || []
    };
    Nb.prototype.toString = function() {
        return this.o
    };
    var jba = function(a, b, c) {
            this.action = a;
            this.target = b || null;
            this.Mc = c || null
        },
        kba = function(a) {
            this.b = [];
            if (a)
                for (var b = 0; b < a.length; b++) this.b.push(a[b])
        },
        lba = /^\.?(\w+)(?:\(([\w|=]+)\))?$/,
        mba = {},
        nba = function(a) {
            var b = mba[a];
            if (b) return b;
            for (var b = a.split(","), c = new kba, d = 0; d < b.length; d++) {
                var e = ob(b[d]),
                    f = e.match(lba);
                if (!f) throw Error("f`" + e);
                var g = e = null;
                if (f[2])
                    for (var k = f[2].split("|"), l = 0; l < k.length; l++) {
                        var m = k[l].split("=");
                        m[1] ? (e || (e = {}), e[m[0]] = m[1]) : g || (g = m[0])
                    }
                c.b.push(new jba(f[1], g, e))
            }
            return mba[a] = c
        };
    kba.prototype.get = function() {
        return this.b
    };
    var Ob = function(a) {
            return a[a.length - 1]
        },
        Pb = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (pa(a)) return pa(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        oba = Array.prototype.lastIndexOf ? function(a, b, c) {
            return Array.prototype.lastIndexOf.call(a, b, null == c ? a.length - 1 : c)
        } : function(a, b, c) {
            c = null == c ? a.length - 1 : c;
            0 > c && (c = Math.max(0, a.length + c));
            if (pa(a)) return pa(b) &&
                1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1
        },
        C = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = pa(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Qb = function(a, b, c) {
            for (var d = a.length, e = pa(a) ? a.split("") : a, d = d - 1; 0 <= d; --d) d in e && b.call(c, e[d], d, a)
        },
        Rb = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = pa(a) ?
                    a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var l = g[k];
                    b.call(c, l, k, a) && (e[f++] = l)
                }
            return e
        },
        Sb = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = pa(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Tb = Array.prototype.reduce ? function(a, b, c, d) {
            d && (b = p(b, d));
            return Array.prototype.reduce.call(a, b, c)
        } : function(a, b, c, d) {
            var e = c;
            C(a, function(c, g) {
                e = b.call(d, e, c, g, a)
            });
            return e
        },
        Ub = Array.prototype.some ? function(a,
            b, c) {
            return Array.prototype.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = pa(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Vb = Array.prototype.every ? function(a, b, c) {
            return Array.prototype.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = pa(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Yb = function(a, b, c) {
            b = Wb(a, b, c);
            return 0 > b ? null : pa(a) ? a.charAt(b) : a[b]
        },
        Wb = function(a, b, c) {
            for (var d = a.length, e = pa(a) ? a.split("") : a, f = 0; f <
                d; f++)
                if (f in e && b.call(c, e[f], f, a)) return f;
            return -1
        },
        Zb = function(a, b) {
            return 0 <= Pb(a, b)
        },
        $b = function(a) {
            return 0 == a.length
        },
        ac = function(a) {
            if (!na(a))
                for (var b = a.length - 1; 0 <= b; b--) delete a[b];
            a.length = 0
        },
        pba = function(a, b) {
            Zb(a, b) || a.push(b)
        },
        cc = function(a, b) {
            var c = Pb(a, b),
                d;
            (d = 0 <= c) && bc(a, c);
            return d
        },
        bc = function(a, b) {
            return 1 == Array.prototype.splice.call(a, b, 1).length
        },
        ec = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        fc = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c =
                        Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        },
        gc = function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (oa(d)) {
                    var e = a.length || 0,
                        f = d.length || 0;
                    a.length = e + f;
                    for (var g = 0; g < f; g++) a[e + g] = d[g]
                } else a.push(d)
            }
        },
        ic = function(a, b, c, d) {
            return Array.prototype.splice.apply(a, hc(arguments, 1))
        },
        hc = function(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        },
        jc = function(a, b, c) {
            b = b || a;
            var d = function(a) {
                return ta(a) ? "o" + va(a) : (typeof a).charAt(0) +
                    a
            };
            c = c || d;
            for (var d = {}, e = 0, f = 0; f < a.length;) {
                var g = a[f++],
                    k = c(g);
                Object.prototype.hasOwnProperty.call(d, k) || (d[k] = !0, b[e++] = g)
            }
            b.length = e
        },
        lc = function(a, b) {
            a.sort(b || kc)
        },
        mc = function(a, b, c) {
            if (!oa(a) || !oa(b) || a.length != b.length) return !1;
            var d = a.length;
            c = c || qba;
            for (var e = 0; e < d; e++)
                if (!c(a[e], b[e])) return !1;
            return !0
        },
        kc = function(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        },
        qba = function(a, b) {
            return a === b
        },
        nc = function(a, b) {
            for (var c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = b.call(void 0, e, d, a);
                n(f) && (c[f] || (c[f] = [])).push(e)
            }
            return c
        },
        oc = function(a) {
            for (var b = [], c = 0; c < a; c++) b[c] = 0;
            return b
        },
        rba = function(a, b) {
            return ec.apply([], Sb(a, b, void 0))
        };
    var pc = function() {
            this.o = this.b = null
        },
        sba = new Ca(function() {
            return new qc
        }, function(a) {
            a.reset()
        }, 100);
    pc.prototype.add = function(a, b) {
        var c = sba.get();
        c.set(a, b);
        this.o ? this.o.next = c : this.b = c;
        this.o = c
    };
    pc.prototype.remove = function() {
        var a = null;
        this.b && (a = this.b, this.b = this.b.next, this.b || (this.o = null), a.next = null);
        return a
    };
    var qc = function() {
        this.next = this.b = this.$d = null
    };
    qc.prototype.set = function(a, b) {
        this.$d = a;
        this.b = b;
        this.next = null
    };
    qc.prototype.reset = function() {
        this.next = this.b = this.$d = null
    };
    var rc = [],
        sc = [],
        tba = !1,
        tc = function(a) {
            rc[rc.length] = a;
            if (tba)
                for (var b = 0; b < sc.length; b++) a(p(sc[b].o, sc[b]))
        },
        uba = function(a) {
            tba = !0;
            for (var b = p(a.o, a), c = 0; c < rc.length; c++) rc[c](b);
            sc.push(a)
        };
    var D = function(a, b) {
        this.type = a instanceof Ea ? String(a) : a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.R = !1;
        this.KK = !0
    };
    D.prototype.stopPropagation = function() {
        this.R = !0
    };
    D.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.KK = !1
    };
    var vba = function(a, b, c, d, e) {
            this.listener = a;
            this.b = null;
            this.src = b;
            this.type = c;
            this.$o = !!d;
            this.Rd = e;
            this.key = ++Vaa;
            this.ri = this.ls = !1
        },
        uc = function(a) {
            a.ri = !0;
            a.listener = null;
            a.b = null;
            a.src = null;
            a.Rd = null
        };
    var vc = function() {
        return Ib("iPhone") && !Ib("iPod") && !Ib("iPad")
    };
    var wc = function() {
        x.call(this)
    };
    v(wc, x);
    wc.prototype.hc = function() {};
    var xc = function() {
        this.b = "";
        this.o = wba
    };
    xc.prototype.fk = !0;
    xc.prototype.Wh = function() {
        return this.b
    };
    xc.prototype.toString = function() {
        return "Const{" + this.b + "}"
    };
    var yc = function(a) {
            return a instanceof xc && a.constructor === xc && a.o === wba ? a.b : "type_error:Const"
        },
        wba = {},
        zc = function(a) {
            var b = new xc;
            b.b = a;
            return b
        };
    var xba = function(a) {
        var b = {},
            c = {},
            d = [],
            e = [],
            f = function(a) {
                if (!c[a]) {
                    var e = a instanceof Nb ? a.b : [];
                    c[a] = fc(e);
                    C(e, function(c) {
                        b[c] = b[c] || [];
                        b[c].push(a)
                    });
                    e.length || d.push(a);
                    C(e, f)
                }
            };
        for (C(a, f); d.length;) {
            var g = d.shift();
            e.push(g);
            b[g] && C(b[g], function(a) {
                cc(c[a], g);
                c[a].length || d.push(a)
            })
        }
        var k = {},
            l = [];
        C(e, function(a) {
            a instanceof Nb && (a = a.Kz, null == a || k[a] || (k[a] = !0, l.push(a)))
        });
        return {
            jr: e,
            D3: l
        }
    };
    var Ac = function(a) {
        this.b = a
    };
    Ac.prototype.toString = function() {
        return this.b
    };
    var Bc = function(a) {
        return new Ac(a)
    };
    var Cc = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return pa(a) && a.match(/\S+/g) || []
        },
        Dc = function(a, b) {
            return a.classList ? a.classList.contains(b) : Zb(Cc(a), b)
        },
        Ec = function(a, b) {
            a.classList ? a.classList.add(b) : Dc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        Gc = function(a, b) {
            a.classList ? a.classList.remove(b) : Dc(a, b) && (a.className = Rb(Cc(a), function(a) {
                return a != b
            }).join(" "))
        },
        Hc = function(a, b) {
            a.classList ? C(b, function(b) {
                Gc(a, b)
            }) : a.className = Rb(Cc(a), function(a) {
                return !Zb(b, a)
            }).join(" ")
        },
        Ic = function(a, b, c) {
            c ? Ec(a, b) : Gc(a, b)
        };
    var Jc = function(a) {
        this.src = a;
        this.b = {};
        this.o = 0
    };
    Jc.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.b[f];
        a || (a = this.b[f] = [], this.o++);
        var g = Kc(a, b, d, e); - 1 < g ? (b = a[g], c || (b.ls = !1)) : (b = new vba(b, this.src, f, !!d, e), b.ls = c, a.push(b));
        return b
    };
    Jc.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.b)) return !1;
        var e = this.b[a];
        b = Kc(e, b, c, d);
        return -1 < b ? (uc(e[b]), bc(e, b), 0 == e.length && (delete this.b[a], this.o--), !0) : !1
    };
    var yba = function(a, b) {
            var c = b.type;
            if (!(c in a.b)) return !1;
            var d = cc(a.b[c], b);
            d && (uc(b), 0 == a.b[c].length && (delete a.b[c], a.o--));
            return d
        },
        Lc = function(a, b, c, d, e) {
            a = a.b[b.toString()];
            b = -1;
            a && (b = Kc(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Kc = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.ri && f.listener == b && f.$o == !!c && f.Rd == d) return e
            }
            return -1
        };
    var Mc = function() {
        this.b = "";
        this.o = zba
    };
    Mc.prototype.fk = !0;
    var zba = {};
    Mc.prototype.Wh = function() {
        return this.b
    };
    var Nc = function(a) {
            if (a instanceof Mc && a.constructor === Mc && a.o === zba) return a.b;
            ma(a);
            return "type_error:SafeStyle"
        },
        Aba = function(a) {
            var b = new Mc;
            b.b = a;
            return b
        },
        Bba = Aba(""),
        Dba = function(a) {
            var b = "",
                c;
            for (c in a) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("i`" + c);
                var d = a[c];
                if (null != d) {
                    if (d instanceof xc) d = yc(d);
                    else if (Cba.test(d)) {
                        for (var e = !0, f = !0, g = 0; g < d.length; g++) {
                            var k = d.charAt(g);
                            "'" == k && f ? e = !e : '"' == k && e && (f = !f)
                        }
                        e && f || (d = "zClosurez")
                    } else d = "zClosurez";
                    b += c + ":" + d + ";"
                }
            }
            return b ? Aba(b) : Bba
        },
        Cba = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;
    var Oc = function() {
        this.b = "";
        this.o = Eba
    };
    Oc.prototype.fk = !0;
    var Eba = {};
    Oc.prototype.Wh = function() {
        return this.b
    };
    var Pc = function(a) {
        var b = new Oc;
        b.b = a;
        return b
    };
    Pc("");
    var Qc = function() {
        this.b = "";
        this.o = Fba
    };
    Qc.prototype.fk = !0;
    Qc.prototype.Wh = function() {
        return this.b
    };
    Qc.prototype.az = !0;
    Qc.prototype.ul = function() {
        return 1
    };
    var Rc = function(a) {
            if (a instanceof Qc && a.constructor === Qc && a.o === Fba) return a.b;
            ma(a);
            return "type_error:SafeUrl"
        },
        Gba = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
        Tc = function(a) {
            if (a instanceof Qc) return a;
            a = a.fk ? a.Wh() : String(a);
            Gba.test(a) || (a = "about:invalid#zClosurez");
            return Sc(a)
        },
        Fba = {},
        Sc = function(a) {
            var b = new Qc;
            b.b = a;
            return b
        };
    Sc("about:blank");
    var Uc = function() {
        this.b = "";
        this.o = Hba
    };
    Uc.prototype.fk = !0;
    Uc.prototype.Wh = function() {
        return this.b
    };
    Uc.prototype.az = !0;
    Uc.prototype.ul = function() {
        return 1
    };
    var Vc = function(a) {
            if (a instanceof Uc && a.constructor === Uc && a.o === Hba) return a.b;
            ma(a);
            return "type_error:TrustedResourceUrl"
        },
        Hba = {},
        Wc = function(a) {
            var b = new Uc;
            b.b = a;
            return b
        };
    var Xc = function() {
        return (Ib("Chrome") || Ib("CriOS")) && !Ib("Edge")
    };
    var Yc = function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        Zc = function(a, b, c) {
            return a + c * (b - a)
        };
    var $c = function(a, b) {
        this.b = a;
        this.o = b
    };
    $c.prototype.execute = function(a) {
        this.b && (this.b.call(this.o || null, a), this.b = this.o = null)
    };
    $c.prototype.abort = function() {
        this.o = this.b = null
    };
    tc(function(a) {
        $c.prototype.execute = a($c.prototype.execute)
    });
    var Iba = function(a) {
            return a.$b && "function" == typeof a.$b ? a.$b() : oa(a) || pa(a) ? a.length : Xa(a)
        },
        ad = function(a) {
            if (a.dc && "function" == typeof a.dc) return a.dc();
            if (pa(a)) return a.split("");
            if (oa(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Ya(a)
        },
        bd = function(a) {
            if (a.mc && "function" == typeof a.mc) return a.mc();
            if (!a.dc || "function" != typeof a.dc) {
                if (oa(a) || pa(a)) {
                    var b = [];
                    a = a.length;
                    for (var c = 0; c < a; c++) b.push(c);
                    return b
                }
                return Za(a)
            }
        },
        cd = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b,
                c);
            else if (oa(a) || pa(a)) C(a, b, c);
            else
                for (var d = bd(a), e = ad(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        },
        Jba = function(a, b, c) {
            if ("function" == typeof a.every) return a.every(b, c);
            if (oa(a) || pa(a)) return Vb(a, b, c);
            for (var d = bd(a), e = ad(a), f = e.length, g = 0; g < f; g++)
                if (!b.call(c, e[g], d && d[g], a)) return !1;
            return !0
        };
    var dd = function(a) {
            ca.setTimeout(function() {
                throw a;
            }, 0)
        },
        Mba = function(a) {
            a = Kba(a);
            !ra(ca.setImmediate) || ca.Window && ca.Window.prototype && !Ib("Edge") && ca.Window.prototype.setImmediate == ca.setImmediate ? (ed || (ed = Lba()), ed(a)) : ca.setImmediate(a)
        },
        ed, Lba = function() {
            var a = ca.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !Ib("Presto") && (a = function() {
                var a = document.createElement("IFRAME");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = p(function(a) {
                        if (("*" == d || a.origin == d) && a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !Ib("Trident") && !Ib("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    if (n(c.next)) {
                        c = c.next;
                        var a =
                            c.cb;
                        c.cb = null;
                        a()
                    }
                };
                return function(a) {
                    d.next = {
                        cb: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
                var b = document.createElement("SCRIPT");
                b.onreadystatechange = function() {
                    b.onreadystatechange = null;
                    b.parentNode.removeChild(b);
                    b = null;
                    a();
                    a = null
                };
                document.documentElement.appendChild(b)
            } : function(a) {
                ca.setTimeout(a, 0)
            }
        },
        Kba = Ia;
    tc(function(a) {
        Kba = a
    });
    var fd = function() {
        this.b = "";
        this.H = Nba;
        this.o = null
    };
    fd.prototype.az = !0;
    fd.prototype.ul = function() {
        return this.o
    };
    fd.prototype.fk = !0;
    fd.prototype.Wh = function() {
        return this.b
    };
    var gd = function(a) {
            if (a instanceof fd && a.constructor === fd && a.H === Nba) return a.b;
            ma(a);
            return "type_error:SafeHtml"
        },
        id = function(a) {
            if (a instanceof fd) return a;
            var b = null;
            a.az && (b = a.ul());
            a = sb(a.fk ? a.Wh() : String(a));
            return hd(a, b)
        },
        Oba = /^[a-zA-Z0-9-]+$/,
        Pba = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Qba = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        jd = function(a, b, c) {
            var d = String(a);
            if (!Oba.test(d)) throw Error("j`" +
                d);
            if (d.toUpperCase() in Qba) throw Error("k`" + d);
            return Rba(String(a), b, c)
        },
        Sba = function(a, b) {
            a && Vc(a);
            var c = {};
            c.src = a || null;
            c.srcdoc = null;
            var d = {
                    sandbox: ""
                },
                e = {},
                f;
            for (f in c) e[f] = c[f];
            for (f in d) e[f] = d[f];
            for (f in b) {
                var g = f.toLowerCase();
                if (g in c) throw Error("p`" + g + "`" + f + "`" + b[f]);
                g in d && delete e[g];
                e[f] = b[f]
            }
            return Rba("iframe", e, void 0)
        },
        kd = function(a) {
            var b = 0,
                c = "",
                d = function(a) {
                    na(a) ? C(a, d) : (a = id(a), c += gd(a), a = a.ul(), 0 == b ? b = a : 0 != a && b != a && (b = null))
                };
            C(arguments, d);
            return hd(c, b)
        },
        Nba = {},
        hd =
        function(a, b) {
            var c = new fd;
            c.b = a;
            c.o = b;
            return c
        },
        Rba = function(a, b, c) {
            var d = null,
                e, f = "";
            if (b)
                for (e in b) {
                    if (!Oba.test(e)) throw Error("o`" + e);
                    var g = b[e];
                    if (null != g) {
                        var k, l = a;
                        k = e;
                        if (g instanceof xc) g = yc(g);
                        else if ("style" == k.toLowerCase()) {
                            if (!ta(g)) throw Error("n`" + typeof g + "`" + g);
                            g instanceof Mc || (g = Dba(g));
                            g = Nc(g)
                        } else {
                            if (/^on/i.test(k)) throw Error("l`" + k + "`" + g);
                            if (k.toLowerCase() in Pba)
                                if (g instanceof Uc) g = Vc(g);
                                else if (g instanceof Qc) g = Rc(g);
                            else if (pa(g)) g = Tc(g).Wh();
                            else throw Error("m`" + k +
                                "`" + l + "`" + g);
                        }
                        g.fk && (g = g.Wh());
                        k = k + '="' + sb(String(g)) + '"';
                        f += " " + k
                    }
                }
            e = "<" + a + f;
            null != c ? na(c) || (c = [c]) : c = [];
            !0 === Uaa[a.toLowerCase()] ? e += ">" : (d = kd(c), e += ">" + gd(d) + "</" + a + ">", d = d.ul());
            (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
            return hd(e, d)
        },
        Tba = hd("<!DOCTYPE html>", 0),
        ld = hd("", 0),
        Uba = hd("<br>", 0);
    var md = "StopIteration" in ca ? ca.StopIteration : {
            message: "StopIteration",
            stack: ""
        },
        nd = function() {};
    nd.prototype.next = function() {
        throw md;
    };
    nd.prototype.te = function() {
        return this
    };
    var od = function(a) {
        if (a instanceof nd) return a;
        if ("function" == typeof a.te) return a.te(!1);
        if (oa(a)) {
            var b = 0,
                c = new nd;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw md;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("q");
    };
    var pd = function(a, b) {
        this.x = n(a) ? a : 0;
        this.y = n(b) ? b : 0
    };
    pd.prototype.clone = function() {
        return new pd(this.x, this.y)
    };
    pd.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    pd.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    pd.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    var qd = Ib("Opera"),
        E = Ib("Trident") || Ib("MSIE"),
        rd = Ib("Edge"),
        Vba = rd || E,
        sd = Ib("Gecko") && !(tb(Hb.toLowerCase(), "webkit") && !Ib("Edge")) && !(Ib("Trident") || Ib("MSIE")) && !Ib("Edge"),
        td = tb(Hb.toLowerCase(), "webkit") && !Ib("Edge"),
        Wba = td && Ib("Mobile"),
        ud = Ib("Macintosh"),
        vd = Ib("Windows"),
        Xba = Ib("Linux") || Ib("CrOS"),
        Yba = ca.navigator || null;
    Yba && tb(Yba.appVersion || "", "X11");
    var Zba = Ib("Android"),
        $ba = vc(),
        aca = Ib("iPad"),
        bca = Ib("iPod"),
        cca = function() {
            var a = ca.document;
            return a ? a.documentMode : void 0
        },
        wd;
    a: {
        var xd = "",
            yd = function() {
                var a = Hb;
                if (sd) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (rd) return /Edge\/([\d\.]+)/.exec(a);
                if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (td) return /WebKit\/(\S+)/.exec(a);
                if (qd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();yd && (xd = yd ? yd[1] : "");
        if (E) {
            var zd = cca();
            if (null != zd && zd > parseFloat(xd)) {
                wd = String(zd);
                break a
            }
        }
        wd = xd
    }
    var Ad = wd,
        dca = {},
        Bd = function(a) {
            return jb(dca, a, function() {
                return 0 <= Ab(Ad, a)
            })
        },
        Cd = function(a) {
            return Number(eca) >= a
        },
        fca = ca.document,
        eca = fca && E ? cca() || ("CSS1Compat" == fca.compatMode ? parseInt(Ad, 10) : 5) : void 0;
    var Dd = Bc("ZYIfFd"),
        gca = Bc("g6cJHd"),
        hca = Bc("otb29e"),
        ica = Bc("sPvj8e"),
        Ed = Bc("rcuQ6b"),
        Fd = Bc("dyRcpb");
    var Hd = function(a, b, c) {
            b = new Nb(a, b, c);
            return Gd[a] = b
        },
        Gd = {};
    var Kd = function(a, b) {
            Id || jca();
            Jd || (Id(), Jd = !0);
            kca.add(a, b)
        },
        Id, jca = function() {
            if (ca.Promise && ca.Promise.resolve) {
                var a = ca.Promise.resolve(void 0);
                Id = function() {
                    a.then(lca)
                }
            } else Id = function() {
                Mba(lca)
            }
        },
        Jd = !1,
        kca = new pc,
        lca = function() {
            for (var a; a = kca.remove();) {
                try {
                    a.$d.call(a.b)
                } catch (b) {
                    dd(b)
                }
                jaa(sba, a)
            }
            Jd = !1
        };
    var mca = !E || Cd(9),
        nca = !sd && !E || E && Cd(9) || sd && Bd("1.9.1"),
        oca = E && !Bd("9"),
        pca = E || qd || td,
        qca = E && !Cd(9);
    var Ld = function(a) {
        var b = window.location;
        a = a instanceof Qc ? a : Tc(a);
        b.href = Rc(a)
    };
    var rca = !E || Cd(9),
        sca = !E || Cd(9),
        tca = E && !Bd("9");
    !td || Bd("528");
    sd && Bd("1.9b") || E && Bd("8") || qd && Bd("9.5") || td && Bd("528");
    sd && !Bd("8") || E && Bd("9");
    var uca = E ? "focusin" : "DOMFocusIn",
        vca = E ? "focusout" : "DOMFocusOut";
    var Md = function(a, b, c) {
        return hd(b, c || null)
    };
    var Nd = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    h = Nd.prototype;
    h.getHeight = function() {
        return this.bottom - this.top
    };
    h.clone = function() {
        return new Nd(this.top, this.right, this.bottom, this.left)
    };
    h.contains = function(a) {
        return this && a ? a instanceof Nd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    h.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    h.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    h.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Od = function(a, b) {
        x.call(this);
        this.R = a;
        this.S = b;
        this.o = [];
        this.H = [];
        this.T = []
    };
    v(Od, x);
    Od.prototype.U = wc;
    Od.prototype.b = null;
    Od.prototype.getId = function() {
        return this.S
    };
    var wca = function(a, b) {
            a.H.push(new $c(b, void 0))
        },
        xca = function(a, b) {
            var c = new a.U;
            c.hc(b());
            a.b = c;
            c = (c = !!Pd(a.T, b())) || !!Pd(a.o, b());
            c || (a.H.length = 0);
            return c
        },
        yca = function(a, b) {
            var c = Pd(a.H, b);
            c && window.setTimeout(maa("Module errback failures: " + c), 0);
            a.T.length = 0;
            a.o.length = 0
        },
        Pd = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) try {
                a[d].execute(b)
            } catch (e) {
                dd(e), c.push(e)
            }
            a.length = 0;
            return c.length ? c : null
        };
    Od.prototype.wa = function() {
        Od.qa.wa.call(this);
        y(this.b)
    };
    var Qd = function(a, b) {
        this.o = {};
        this.b = [];
        this.T = this.R = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("e");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && zca(this, a)
    };
    Qd.prototype.$b = function() {
        return this.R
    };
    Qd.prototype.dc = function() {
        Sd(this);
        for (var a = [], b = 0; b < this.b.length; b++) a.push(this.o[this.b[b]]);
        return a
    };
    Qd.prototype.mc = function() {
        Sd(this);
        return this.b.concat()
    };
    var Ud = function(a, b) {
        return Td(a.o, b)
    };
    Qd.prototype.Kh = function(a) {
        for (var b = 0; b < this.b.length; b++) {
            var c = this.b[b];
            if (Td(this.o, c) && this.o[c] == a) return !0
        }
        return !1
    };
    Qd.prototype.equals = function(a, b) {
        if (this === a) return !0;
        if (this.R != a.$b()) return !1;
        var c = b || Aca;
        Sd(this);
        for (var d, e = 0; d = this.b[e]; e++)
            if (!c(this.get(d), a.get(d))) return !1;
        return !0
    };
    var Aca = function(a, b) {
        return a === b
    };
    Qd.prototype.isEmpty = function() {
        return 0 == this.R
    };
    Qd.prototype.clear = function() {
        this.o = {};
        this.T = this.R = this.b.length = 0
    };
    Qd.prototype.remove = function(a) {
        return Td(this.o, a) ? (delete this.o[a], this.R--, this.T++, this.b.length > 2 * this.R && Sd(this), !0) : !1
    };
    var Sd = function(a) {
        if (a.R != a.b.length) {
            for (var b = 0, c = 0; b < a.b.length;) {
                var d = a.b[b];
                Td(a.o, d) && (a.b[c++] = d);
                b++
            }
            a.b.length = c
        }
        if (a.R != a.b.length) {
            for (var e = {}, c = b = 0; b < a.b.length;) d = a.b[b], Td(e, d) || (a.b[c++] = d, e[d] = 1), b++;
            a.b.length = c
        }
    };
    Qd.prototype.get = function(a, b) {
        return Td(this.o, a) ? this.o[a] : b
    };
    Qd.prototype.set = function(a, b) {
        Td(this.o, a) || (this.R++, this.b.push(a), this.T++);
        this.o[a] = b
    };
    var zca = function(a, b) {
        var c, d;
        b instanceof Qd ? (c = b.mc(), d = b.dc()) : (c = Za(b), d = Ya(b));
        for (var e = 0; e < c.length; e++) a.set(c[e], d[e])
    };
    Qd.prototype.forEach = function(a, b) {
        for (var c = this.mc(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    Qd.prototype.clone = function() {
        return new Qd(this)
    };
    Qd.prototype.te = function(a) {
        Sd(this);
        var b = 0,
            c = this.T,
            d = this,
            e = new nd;
        e.next = function() {
            if (c != d.T) throw Error("r");
            if (b >= d.b.length) throw md;
            var e = d.b[b++];
            return a ? e : d.o[e]
        };
        return e
    };
    var Td = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Vd = Ib("Firefox"),
        Wd = vc() || Ib("iPod"),
        Xd = Ib("iPad"),
        Bca = Ib("Android") && !(Xc() || Ib("Firefox") || Ib("Opera") || Ib("Silk")),
        Yd = Xc(),
        Zd = Ib("Safari") && !(Xc() || Ib("Coast") || Ib("Opera") || Ib("Edge") || Ib("Silk") || Ib("Android")) && !(vc() || Ib("iPad") || Ib("iPod"));
    var Cca = !E;
    var be = function(a) {
            return a ? new $d(ae(a)) : kaa || (kaa = new $d)
        },
        F = function(a) {
            return pa(a) ? document.getElementById(a) : a
        },
        ce = function(a) {
            var b = document;
            return pa(a) ? b.getElementById(a) : a
        },
        ee = function(a, b) {
            var c = b || document,
                d = null;
            c.getElementsByClassName ? d = c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = de(document, "*", a, b)[0];
            return d || null
        },
        de = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b +
                (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Zb(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        },
        Eca = function(a, b) {
            Ua(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Dca.hasOwnProperty(d) ? a.setAttribute(Dca[d], b) : kb(d,
                    "aria-") || kb(d, "data-") ? a.setAttribute(d, b) : a[d] = b
            })
        },
        Dca = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            nonce: "nonce",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        ge = function(a) {
            a = (a || window).document;
            a = fe(a) ? a.documentElement : a.body;
            return new Ta(a.clientWidth, a.clientHeight)
        },
        ie = function(a) {
            var b = he(a);
            a = a.parentWindow || a.defaultView;
            return E && Bd("10") && a.pageYOffset !=
                b.scrollTop ? new pd(b.scrollLeft, b.scrollTop) : new pd(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        he = function(a) {
            return a.scrollingElement ? a.scrollingElement : !td && fe(a) ? a.documentElement : a.body || a.documentElement
        },
        je = function(a) {
            return a ? a.parentWindow || a.defaultView : window
        },
        ke = function(a, b, c) {
            return Fca(document, arguments)
        },
        Fca = function(a, b) {
            var c = String(b[0]),
                d = b[1];
            if (!mca && d && (d.name || d.type)) {
                c = ["<", c];
                d.name && c.push(' name="', sb(d.name), '"');
                if (d.type) {
                    c.push(' type="', sb(d.type),
                        '"');
                    var e = {};
                    eb(e, d);
                    delete e.type;
                    d = e
                }
                c.push(">");
                c = c.join("")
            }
            c = a.createElement(c);
            d && (pa(d) ? c.className = d : na(d) ? c.className = d.join(" ") : Eca(c, d));
            2 < b.length && Gca(a, c, b, 2);
            return c
        },
        Gca = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(pa(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !oa(f) || ta(f) && 0 < f.nodeType ? e(f) : C(Hca(f) ? fc(f) : f, e)
            }
        },
        le = function(a, b) {
            return a.createElement(String(b))
        },
        fe = function(a) {
            return "CSS1Compat" == a.compatMode
        },
        Ica = function(a, b) {
            a.appendChild(b)
        },
        me = function(a,
            b) {
            Gca(ae(a), a, arguments, 1)
        },
        ne = function(a) {
            for (var b; b = a.firstChild;) a.removeChild(b)
        },
        oe = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b)
        },
        pe = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        },
        qe = function(a) {
            return a && a.parentNode ? a.parentNode.removeChild(a) : null
        },
        se = function(a, b) {
            var c = b.parentNode;
            c && c.replaceChild(a, b)
        },
        te = function(a) {
            return nca && void 0 != a.children ? a.children : Rb(a.childNodes, function(a) {
                return 1 == a.nodeType
            })
        },
        ue = function(a) {
            return n(a.firstElementChild) ?
                a.firstElementChild : Jca(a.firstChild)
        },
        Kca = function(a) {
            return n(a.nextElementSibling) ? a.nextElementSibling : Jca(a.nextSibling)
        },
        Jca = function(a) {
            for (; a && 1 != a.nodeType;) a = a.nextSibling;
            return a
        },
        ve = function(a) {
            return ta(a) && 1 == a.nodeType
        },
        Lca = function(a) {
            var b;
            if (pca && !(E && Bd("9") && !Bd("10") && ca.SVGElement && a instanceof ca.SVGElement) && (b = a.parentElement)) return b;
            b = a.parentNode;
            return ve(b) ? b : null
        },
        we = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" !=
                typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        ae = function(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        xe = function(a) {
            return a.contentDocument || a.contentWindow.document
        },
        ye = function(a, b) {
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else ne(a), a.appendChild(ae(a).createTextNode(String(b)))
        },
        Ae = function(a, b) {
            var c = [];
            return ze(a, b, c, !0) ? c[0] : void 0
        },
        ze = function(a, b, c, d) {
            if (null != a)
                for (a = a.firstChild; a;) {
                    if (b(a) && (c.push(a), d) || ze(a, b, c, d)) return !0;
                    a = a.nextSibling
                }
            return !1
        },
        Be = function(a) {
            var b = a.getAttributeNode("tabindex");
            if (b = null != b && b.specified) a = a.tabIndex, b = qa(a) && 0 <= a && 32768 > a;
            return b
        },
        Ce = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        },
        Hca = function(a) {
            if (a && "number" == typeof a.length) {
                if (ta(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (ra(a)) return "function" == typeof a.item
            }
            return !1
        },
        De = function(a, b, c, d) {
            c || (a = a.parentNode);
            for (c = 0; a && (null == d || c <= d);) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        $d = function(a) {
            this.o = a || ca.document || document
        };
    $d.prototype.Nb = function() {
        return this.o
    };
    $d.prototype.ha = function(a) {
        return pa(a) ? this.o.getElementById(a) : a
    };
    var Ee = function(a, b, c, d) {
        return de(a.o, b, c, d)
    };
    $d.prototype.b = function(a, b, c) {
        return Fca(this.o, arguments)
    };
    $d.prototype.createElement = function(a) {
        return le(this.o, a)
    };
    var Fe = function(a) {
        a = a.o;
        return a.parentWindow || a.defaultView
    };
    h = $d.prototype;
    h.appendChild = Ica;
    h.Mg = me;
    h.Ng = ne;
    h.rq = oe;
    h.dz = pe;
    h.Pe = qe;
    h.O6 = se;
    h.vY = te;
    h.tn = ue;
    h.dY = Kca;
    h.M2 = ve;
    h.contains = we;
    h.fe = ye;
    h.cV = Ae;
    h.fG = De;
    var Ge = function(a, b) {
        D.call(this, a ? a.type : "");
        this.o = this.currentTarget = this.target = null;
        this.H = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.ua = this.ta = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.ma = !1;
        this.b = null;
        a && this.init(a, b)
    };
    v(Ge, D);
    Ge.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var e = a.relatedTarget;
        e ? sd && (ib(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
        this.o = e;
        null === d ? (this.ta = td || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.ua = td || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX =
            a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.H = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.ma = ud ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault()
    };
    Ge.prototype.stopPropagation = function() {
        Ge.qa.stopPropagation.call(this);
        this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0
    };
    Ge.prototype.preventDefault = function() {
        Ge.qa.preventDefault.call(this);
        var a = this.b;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, tca) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Ie = function(a, b) {
            this.b = 0;
            this.U = void 0;
            this.R = this.o = this.H = null;
            this.T = this.S = !1;
            if (a != ia) try {
                var c = this;
                a.call(b, function(a) {
                    He(c, 2, a)
                }, function(a) {
                    He(c, 3, a)
                })
            } catch (d) {
                He(this, 3, d)
            }
        },
        Mca = function() {
            this.next = this.context = this.o = this.H = this.b = null;
            this.R = !1
        };
    Mca.prototype.reset = function() {
        this.context = this.o = this.H = this.b = null;
        this.R = !1
    };
    var Nca = new Ca(function() {
            return new Mca
        }, function(a) {
            a.reset()
        }, 100),
        Oca = function(a, b, c) {
            var d = Nca.get();
            d.H = a;
            d.o = b;
            d.context = c;
            return d
        },
        Qca = function() {
            var a, b, c = new Ie(function(c, e) {
                a = c;
                b = e
            });
            return new Pca(c, a, b)
        };
    Ie.prototype.then = function(a, b, c) {
        return Rca(this, ra(a) ? a : null, ra(b) ? b : null, c)
    };
    Faa(Ie);
    Ie.prototype.cancel = function(a) {
        0 == this.b && Kd(function() {
            var b = new Je(a);
            Sca(this, b)
        }, this)
    };
    var Sca = function(a, b) {
            if (0 == a.b)
                if (a.H) {
                    var c = a.H;
                    if (c.o) {
                        for (var d = 0, e = null, f = null, g = c.o; g && (g.R || (d++, g.b == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                        e && (0 == c.b && 1 == d ? Sca(c, b) : (f ? (d = f, d.next == c.R && (c.R = d), d.next = d.next.next) : Tca(c), Uca(c, e, 3, b)))
                    }
                    a.H = null
                } else He(a, 3, b)
        },
        Wca = function(a, b) {
            a.o || 2 != a.b && 3 != a.b || Vca(a);
            a.R ? a.R.next = b : a.o = b;
            a.R = b
        },
        Rca = function(a, b, c, d) {
            var e = Oca(null, null, null);
            e.b = new Ie(function(a, g) {
                e.H = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (m) {
                        g(m)
                    }
                } : a;
                e.o = c ? function(b) {
                    try {
                        var e =
                            c.call(d, b);
                        !n(e) && b instanceof Je ? g(b) : a(e)
                    } catch (m) {
                        g(m)
                    }
                } : g
            });
            e.b.H = a;
            Wca(a, e);
            return e.b
        };
    Ie.prototype.ma = function(a) {
        this.b = 0;
        He(this, 2, a)
    };
    Ie.prototype.Ca = function(a) {
        this.b = 0;
        He(this, 3, a)
    };
    var He = function(a, b, c) {
            if (0 == a.b) {
                a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
                a.b = 1;
                var d;
                a: {
                    var e = c,
                        f = a.ma,
                        g = a.Ca;
                    if (e instanceof Ie) Wca(e, Oca(f || ia, g || null, a)),
                    d = !0;
                    else if (Gaa(e)) e.then(f, g, a),
                    d = !0;
                    else {
                        if (ta(e)) try {
                            var k = e.then;
                            if (ra(k)) {
                                Xca(e, k, f, g, a);
                                d = !0;
                                break a
                            }
                        } catch (l) {
                            g.call(a, l);
                            d = !0;
                            break a
                        }
                        d = !1
                    }
                }
                d || (a.U = c, a.b = b, a.H = null, Vca(a), 3 != b || c instanceof Je || Yca(a, c))
            }
        },
        Xca = function(a, b, c, d, e) {
            var f = !1,
                g = function(a) {
                    f || (f = !0, c.call(e, a))
                },
                k = function(a) {
                    f || (f = !0, d.call(e,
                        a))
                };
            try {
                b.call(a, g, k)
            } catch (l) {
                k(l)
            }
        },
        Vca = function(a) {
            a.S || (a.S = !0, Kd(a.V, a))
        },
        Tca = function(a) {
            var b = null;
            a.o && (b = a.o, a.o = b.next, b.next = null);
            a.o || (a.R = null);
            return b
        };
    Ie.prototype.V = function() {
        for (var a; a = Tca(this);) Uca(this, a, this.b, this.U);
        this.S = !1
    };
    var Uca = function(a, b, c, d) {
            if (3 == c && b.o && !b.R)
                for (; a && a.T; a = a.H) a.T = !1;
            if (b.b) b.b.H = null, Zca(b, c, d);
            else try {
                b.R ? b.H.call(b.context) : Zca(b, c, d)
            } catch (e) {
                $ca.call(null, e)
            }
            jaa(Nca, b)
        },
        Zca = function(a, b, c) {
            2 == b ? a.H.call(a.context, c) : a.o && a.o.call(a.context, c)
        },
        Yca = function(a, b) {
            a.T = !0;
            Kd(function() {
                a.T && $ca.call(null, b)
            })
        },
        $ca = dd,
        Je = function(a) {
            Da.call(this, a)
        };
    v(Je, Da);
    Je.prototype.name = "cancel";
    var Pca = function(a, b, c) {
        this.H = a;
        this.o = b;
        this.b = c
    };
    var Ke = function(a) {
            this.b = new Qd;
            if (a) {
                a = ad(a);
                for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
            }
        },
        Le = function(a) {
            var b = typeof a;
            return "object" == b && a || "function" == b ? "o" + va(a) : b.substr(0, 1) + a
        };
    h = Ke.prototype;
    h.$b = function() {
        return this.b.$b()
    };
    h.add = function(a) {
        this.b.set(Le(a), a)
    };
    h.remove = function(a) {
        return this.b.remove(Le(a))
    };
    h.clear = function() {
        this.b.clear()
    };
    h.isEmpty = function() {
        return this.b.isEmpty()
    };
    h.contains = function(a) {
        return Ud(this.b, Le(a))
    };
    h.dc = function() {
        return this.b.dc()
    };
    h.clone = function() {
        return new Ke(this)
    };
    h.equals = function(a) {
        return this.$b() == Iba(a) && ada(this, a)
    };
    var ada = function(a, b) {
        var c = Iba(b);
        if (a.$b() > c) return !1;
        !(b instanceof Ke) && 5 < c && (b = new Ke(b));
        return Jba(a, function(a) {
            var c = b;
            return c.contains && "function" == typeof c.contains ? c.contains(a) : c.Kh && "function" == typeof c.Kh ? c.Kh(a) : oa(c) || pa(c) ? Zb(c, a) : ab(c, a)
        })
    };
    Ke.prototype.te = function() {
        return this.b.te(!1)
    };
    var Ne = function(a, b) {
            if (!b && a.hasAttribute("jsshadow")) return null;
            for (var c = a, d = 0; c = Me(c);) {
                if ("CONTENT" == c.tagName.toUpperCase()) d += 1;
                else if (c.hasAttribute("jsshadow") && 0 < d) {
                    --d;
                    continue
                }
                if (0 >= d) return c
            }
            return null
        },
        Me = function(a) {
            return a.__owner ? a.__owner : a.parentNode && 11 === a.parentNode.nodeType ? a.parentNode.host : Lca(a)
        },
        Oe = function(a, b, c, d) {
            for (c || (a = Ne(a, d)); a;) {
                if (b(a)) return a;
                a = Ne(a, d)
            }
            return null
        };
    var bda = {},
        Pe = function(a, b) {
            var c = a.__wiz;
            c || (c = a.__wiz = {});
            return c[b]
        },
        Qe = function(a, b, c, d, e) {
            var f = ae(a).__wizdispatcher;
            a = {
                type: b,
                target: a,
                bubbles: void 0 != d ? d : !0
            };
            void 0 != c && (a.data = c);
            e && eb(a, e);
            f.trigger(a)
        },
        Re = function(a, b) {
            var c = a.__jsaction;
            return c ? !!c[b] : cda(a.getAttribute("jsaction"), b)
        },
        cda = function(a, b) {
            if (!a) return !1;
            var c = Jb[a];
            if (c) return !!c[b];
            c = bda[b];
            c || (c = new RegExp("(^\\s*" + b + "\\s*:|[\\s;]" + b + "\\s*:)"), bda[b] = c);
            return c.test(a)
        };
    var dda = function(a, b, c) {
            c = c || ca;
            var d = c.onerror,
                e = !!b;
            td && !Bd("535.3") && (e = !e);
            c.onerror = function(b, c, k, l, m) {
                d && d(b, c, k, l, m);
                a({
                    message: b,
                    fileName: c,
                    line: k,
                    LD: l,
                    error: m
                });
                return e
            }
        },
        Se = function(a) {
            var b = eda(Se);
            if (b) return b;
            for (var b = [], c = arguments.callee.caller, d = 0; c && (!a || d < a);) {
                b.push(Te(c));
                b.push("()\n");
                try {
                    c = c.caller
                } catch (e) {
                    b.push("[exception trying to get caller]\n");
                    break
                }
                d++;
                if (50 <= d) {
                    b.push("[...long stack...]");
                    break
                }
            }
            a && d >= a ? b.push("[...reached max depth limit...]") : b.push("[end]");
            return b.join("")
        },
        eda = function(a) {
            var b = Error();
            if (Error.captureStackTrace) return Error.captureStackTrace(b, a), String(b.stack);
            try {
                throw b;
            } catch (c) {
                b = c
            }
            return (a = b.stack) ? String(a) : null
        },
        fda = function(a) {
            var b;
            (b = eda(a || fda)) || (b = gda(a || arguments.callee.caller, []));
            return b
        },
        gda = function(a, b) {
            var c = [];
            if (Zb(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(Te(a) + "(");
                for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                    0 < e && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                        case "object":
                            f =
                                f ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            f = String(f);
                            break;
                        case "boolean":
                            f = f ? "true" : "false";
                            break;
                        case "function":
                            f = (f = Te(f)) ? f : "[fn]";
                            break;
                        default:
                            f = typeof f
                    }
                    40 < f.length && (f = f.substr(0, 40) + "...");
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(gda(a.caller, b))
                } catch (g) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        },
        Te = function(a) {
            if (Ue[a]) return Ue[a];
            a = String(a);
            if (!Ue[a]) {
                var b = /function ([^\(]+)/.exec(a);
                Ue[a] = b ? b[1] : "[Anonymous]"
            }
            return Ue[a]
        },
        Ue = {};
    var Ve = "closure_lm_" + (1E6 * Math.random() | 0),
        We = {},
        hda = 0,
        G = function(a, b, c, d, e) {
            if (na(b)) {
                for (var f = 0; f < b.length; f++) G(a, b[f], c, d, e);
                return null
            }
            c = Xe(c);
            return Gb(a) ? a.nt(b, c, d, e) : ida(a, b, c, !1, d, e)
        },
        ida = function(a, b, c, d, e, f) {
            if (!b) throw Error("s");
            var g = !!e,
                k = Ye(a);
            k || (a[Ve] = k = new Jc(a));
            c = k.add(b, c, d, e, f);
            if (c.b) return c;
            d = jda();
            c.b = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, g);
            else if (a.attachEvent) a.attachEvent(kda(b.toString()), d);
            else throw Error("t");
            hda++;
            return c
        },
        jda = function() {
            var a = Ze,
                b = sca ? function(c) {
                    return a.call(b.src, b.listener, c)
                } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
                };
            return b
        },
        af = function(a, b, c, d, e) {
            if (na(b)) {
                for (var f = 0; f < b.length; f++) af(a, b[f], c, d, e);
                return null
            }
            c = Xe(c);
            return Gb(a) ? a.ty(b, c, d, e) : ida(a, b, c, !0, d, e)
        },
        bf = function(a, b, c, d, e) {
            if (na(b))
                for (var f = 0; f < b.length; f++) bf(a, b[f], c, d, e);
            else c = Xe(c), Gb(a) ? a.IG(b, c, d, e) : a && (a = Ye(a)) && (b = Lc(a, b, c, !!d, e)) && cf(b)
        },
        cf = function(a) {
            if (qa(a) || !a || a.ri) return !1;
            var b = a.src;
            if (Gb(b)) return b.uy(a);
            var c = a.type,
                d = a.b;
            b.removeEventListener ? b.removeEventListener(c, d, a.$o) : b.detachEvent && b.detachEvent(kda(c), d);
            hda--;
            (c = Ye(b)) ? (yba(c, a), 0 == c.o && (c.src = null, b[Ve] = null)) : uc(a);
            return !0
        },
        lda = function(a, b, c, d, e) {
            c = Xe(c);
            d = !!d;
            return Gb(a) ? a.HG(b, c, d, e) : a ? (a = Ye(a)) ? Lc(a, b, c, d, e) : null : null
        },
        kda = function(a) {
            return a in We ? We[a] : We[a] = "on" + a
        },
        df = function(a, b, c, d) {
            var e = !0;
            if (a = Ye(a))
                if (b = a.b[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.$o == c && !f.ri && (f = mda(f, d), e = e && !1 !== f)
                    }
                return e
        },
        mda = function(a, b) {
            var c = a.listener,
                d = a.Rd || a.src;
            a.ls && cf(a);
            return c.call(d, b)
        },
        Ze = function(a, b) {
            if (a.ri) return !0;
            if (!sca) {
                var c = b || ea("window.event"),
                    d = new Ge(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    a: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break a
                        } catch (l) {
                            f = !0
                        }
                        if (f || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.currentTarget; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, g = c.length - 1; !d.R && 0 <= g; g--) {
                        d.currentTarget = c[g];
                        var k = df(c[g], f, !0, d),
                            e = e && k
                    }
                    for (g = 0; !d.R && g < c.length; g++) d.currentTarget =
                        c[g],
                    k = df(c[g], f, !1, d),
                    e = e && k
                }
                return e
            }
            return mda(a, new Ge(b, this))
        },
        Ye = function(a) {
            a = a[Ve];
            return a instanceof Jc ? a : null
        },
        ef = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Xe = function(a) {
            if (ra(a)) return a;
            a[ef] || (a[ef] = function(b) {
                return a.handleEvent(b)
            });
            return a[ef]
        };
    tc(function(a) {
        Ze = a(Ze)
    });
    var gf = function(a, b, c) {
            if (pa(b))(b = ff(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = ff(c, d);
                    f && (c.style[f] = e)
                }
        },
        nda = {},
        ff = function(a, b) {
            var c = nda[b];
            if (!c) {
                var d = Db(b),
                    c = d;
                void 0 === a.style[d] && (d = (td ? "Webkit" : sd ? "Moz" : E ? "ms" : qd ? "O" : null) + Raa(d), void 0 !== a.style[d] && (c = d));
                nda[b] = c
            }
            return c
        },
        hf = function(a, b) {
            var c = a.style[Db(b)];
            return "undefined" !== typeof c ? c : a.style[ff(a, b)] || ""
        },
        jf = function(a, b) {
            var c = ae(a);
            return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a,
                null)) ? c[b] || c.getPropertyValue(b) || "" : ""
        },
        kf = function(a, b) {
            return jf(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        },
        lf = function(a) {
            return new pd(a.offsetLeft, a.offsetTop)
        },
        mf = function(a) {
            a = a ? ae(a) : document;
            return !E || Cd(9) || fe(be(a).o) ? a.documentElement : a.body
        },
        nf = function(a) {
            var b;
            try {
                b = a.getBoundingClientRect()
            } catch (c) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
            E && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop +
                a.body.clientTop);
            return b
        },
        of = function(a) {
            var b = ae(a),
                c = new pd(0, 0),
                d = mf(b);
            if (a == d) return c;
            a = nf(a);
            b = ie(be(b).o);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        },
        pf = function(a, b) {
            "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
            return a
        },
        qf = function(a, b) {
            a.style.height = pf(b, !0)
        },
        rf = function(a) {
            var b = oda;
            if ("none" != kf(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        },
        oda = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = td && !b && !c;
            return n(b) && !d || !a.getBoundingClientRect ? new Ta(b, c) : (a = nf(a), new Ta(a.right - a.left, a.bottom - a.top))
        },
        sf = function(a, b) {
            var c = a.style;
            "opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
        },
        H = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        tf = function(a) {
            return "none" != a.style.display
        },
        uf = sd ? "MozUserSelect" : td || rd ? "WebkitUserSelect" : null,
        vf = function(a, b, c,
            d) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var e = a.style[c],
                f = a.runtimeStyle[c];
            a.runtimeStyle[c] = a.currentStyle[c];
            a.style[c] = b;
            b = a.style[d];
            a.style[c] = e;
            a.runtimeStyle[c] = f;
            return b
        },
        wf = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            return c ? vf(a, c, "left", "pixelLeft") : 0
        },
        xf = function(a, b) {
            if (E) {
                var c = wf(a, b + "Left"),
                    d = wf(a, b + "Right"),
                    e = wf(a, b + "Top"),
                    f = wf(a, b + "Bottom");
                return new Nd(e, d, f, c)
            }
            c = jf(a, b + "Left");
            d = jf(a, b + "Right");
            e = jf(a, b + "Top");
            f = jf(a, b + "Bottom");
            return new Nd(parseFloat(e), parseFloat(d), parseFloat(f), parseFloat(c))
        },
        yf = function(a) {
            return xf(a, "padding")
        };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var zf = function(a, b) {
        this.U = [];
        this.Na = a;
        this.Ba = b || null;
        this.T = this.o = !1;
        this.R = void 0;
        this.ta = this.Qa = this.ma = !1;
        this.V = 0;
        this.H = null;
        this.S = 0
    };
    zf.prototype.cancel = function(a) {
        if (this.o) this.R instanceof zf && this.R.cancel();
        else {
            if (this.H) {
                var b = this.H;
                delete this.H;
                a ? b.cancel(a) : (b.S--, 0 >= b.S && b.cancel())
            }
            this.Na ? this.Na.call(this.Ba, this) : this.ta = !0;
            this.o || this.b(new Af(this))
        }
    };
    zf.prototype.ua = function(a, b) {
        this.ma = !1;
        Bf(this, a, b)
    };
    var Bf = function(a, b, c) {
            a.o = !0;
            a.R = c;
            a.T = !b;
            pda(a)
        },
        qda = function(a) {
            if (a.o) {
                if (!a.ta) throw new Cf(a);
                a.ta = !1
            }
        };
    zf.prototype.callback = function(a) {
        qda(this);
        Bf(this, !0, a)
    };
    zf.prototype.b = function(a) {
        qda(this);
        Bf(this, !1, a)
    };
    zf.prototype.addCallback = function(a, b) {
        return Df(this, a, null, b)
    };
    var Ef = function(a, b, c) {
            Df(a, null, b, c)
        },
        Ff = function(a, b, c) {
            Df(a, b, b, c)
        },
        Df = function(a, b, c, d) {
            a.U.push([b, c, d]);
            a.o && pda(a);
            return a
        };
    zf.prototype.then = function(a, b, c) {
        var d, e, f = new Ie(function(a, b) {
            d = a;
            e = b
        });
        Df(this, d, function(a) {
            a instanceof Af ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Faa(zf);
    var Gf = function(a, b) {
        b instanceof zf ? a.addCallback(p(b.Bd, b)) : a.addCallback(function() {
            return b
        })
    };
    zf.prototype.Bd = function(a) {
        var b = new zf;
        Df(this, b.callback, b.b, b);
        a && (b.H = this, this.S++);
        return b
    };
    var rda = function(a) {
            return Ub(a.U, function(a) {
                return ra(a[1])
            })
        },
        pda = function(a) {
            if (a.V && a.o && rda(a)) {
                var b = a.V,
                    c = Hf[b];
                c && (ca.clearTimeout(c.b), delete Hf[b]);
                a.V = 0
            }
            a.H && (a.H.S--, delete a.H);
            for (var b = a.R, d = c = !1; a.U.length && !a.ma;) {
                var e = a.U.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = a.T ? g : f) try {
                    var k = f.call(e || a.Ba, b);
                    n(k) && (a.T = a.T && (k == b || k instanceof Error), a.R = b = k);
                    if (Gaa(b) || "function" === typeof ca.Promise && b instanceof ca.Promise) d = !0, a.ma = !0
                } catch (l) {
                    b = l, a.T = !0, rda(a) || (c = !0)
                }
            }
            a.R = b;
            d && (k = p(a.ua, a, !0), d = p(a.ua, a, !1), b instanceof zf ? (Df(b, k, d), b.Qa = !0) : b.then(k, d));
            c && (b = new sda(b), Hf[b.b] = b, a.V = b.b)
        },
        If = function(a) {
            var b = new zf;
            b.callback(a);
            return b
        },
        Jf = function(a) {
            var b = new zf;
            b.b(a);
            return b
        },
        Cf = function(a) {
            Da.call(this);
            this.Li = a
        };
    v(Cf, Da);
    Cf.prototype.message = "Deferred has already fired";
    Cf.prototype.name = "AlreadyCalledError";
    var Af = function(a) {
        Da.call(this);
        this.Li = a
    };
    v(Af, Da);
    Af.prototype.message = "Deferred was canceled";
    Af.prototype.name = "CanceledError";
    var sda = function(a) {
        this.b = ca.setTimeout(p(this.H, this), 0);
        this.o = a
    };
    sda.prototype.H = function() {
        delete Hf[this.b];
        throw this.o;
    };
    var Hf = {};
    var Kf = function(a, b) {
        return Oe(a, function(a) {
            return ve(a) && a.hasAttribute("jscontroller")
        }, b, !0)
    };
    var Lf = function(a) {
        a instanceof Lf ? a = fc(a.Xb) : a[0] instanceof Lf && (a = Tb(a, function(a, c) {
            return ec(a, c.Xb)
        }, []), jc(a));
        this.Xb = a
    };
    h = Lf.prototype;
    h.od = function(a, b) {
        C(this.Xb, a, b);
        return this
    };
    h.size = function() {
        return this.Xb.length
    };
    h.get = function(a) {
        return this.Xb[a]
    };
    h.Bb = function() {
        return this.Xb[0]
    };
    h.Ie = function() {
        return this.Xb.slice()
    };
    h.equals = function(a) {
        return this === a || mc(this.Xb, a.Xb)
    };
    h.Nh = function(a) {
        return new Mf(this.Xb[0 > a ? this.Xb.length + a : a])
    };
    h.first = function() {
        return 0 == this.Xb.length ? null : new Mf(this.Xb[0])
    };
    h.Wc = function() {
        return 0 == this.Xb.length ? null : new Mf(this.Xb[this.Xb.length - 1])
    };
    h.find = function(a) {
        var b = [];
        this.od(function(c) {
            c = c.querySelectorAll(String(a));
            for (var d = 0; d < c.length; d++) b.push(c[d])
        });
        return new Lf(b)
    };
    h.parent = function() {
        var a = [];
        this.od(function(b) {
            (b = Lca(b)) && !Zb(a, b) && a.push(b)
        });
        return new Lf(a)
    };
    h.CB = function() {
        var a = [];
        this.od(function(b) {
            b = te(b);
            for (var c = 0; c < b.length; c++) a.push(b[c])
        });
        return new Lf(a)
    };
    h.filter = function(a) {
        a = Rb(this.Xb, Nf(a));
        return new Lf(a)
    };
    h.next = function(a) {
        return tda(this, a)
    };
    var tda = function(a, b) {
        var c = [],
            d;
        b ? d = Nf(b) : d = uda;
        a.od(function(a) {
            (a = Kca(a)) && d(a) && c.push(a)
        });
        return new Lf(c)
    };
    Lf.prototype.We = function(a) {
        return this.od(function(b) {
            Gc(b, a)
        })
    };
    Lf.prototype.getStyle = function(a) {
        if (0 < this.Xb.length) return hf(this.Xb[0], a)
    };
    Lf.prototype.focus = function() {
        try {
            this.Bb().focus()
        } catch (a) {}
        return this
    };
    var Of = function(a, b, c) {
        function d(a, b, c) {
            var d = b;
            b && b.parentNode && (d = b.cloneNode(!0));
            a(d, c)
        }
        if (1 == a.Xb.length) {
            var e = a.Xb[0];
            c instanceof Lf ? c.od(function(a) {
                b(a, e)
            }) : na(c) ? C(c, function(a) {
                b(a, e)
            }) : b(c, e);
            return a
        }
        return a.od(function(a) {
            c instanceof Lf ? c.od(function(c) {
                d(b, c, a)
            }) : na(c) ? C(c, function(c) {
                d(b, c, a)
            }) : d(b, c, a)
        })
    };
    h = Lf.prototype;
    h.remove = function() {
        return Of(this, function(a, b) {
            qe(b)
        }, null)
    };
    h.toggle = function(a) {
        return this.od(function(b) {
            H(b, a)
        })
    };
    h.show = function() {
        return this.toggle(!0)
    };
    h.Eb = function() {
        return this.toggle(!1)
    };
    h.trigger = function(a, b, c) {
        return this.od(function(d) {
            Qe(d, a, b, c)
        })
    };
    var vda = function(a) {
            return a instanceof Lf ? a.Bb() : a
        },
        Mf = function(a, b) {
            a instanceof Lf && (b = a.Xb, a = null);
            Lf.call(this, null != a ? [a] : b)
        };
    v(Mf, Lf);
    h = Mf.prototype;
    h.CB = function() {
        return new Lf(Array.prototype.slice.call(te(this.Xb[0])))
    };
    h.od = function(a, b) {
        a.call(b, this.Xb[0], 0);
        return this
    };
    h.size = function() {
        return 1
    };
    h.Bb = function() {
        return this.Xb[0]
    };
    h.Nh = function() {
        return this
    };
    h.first = function() {
        return this
    };
    var wda = /^\[([a-z0-9-]+)="([^\\"]*)"]$/,
        Nf = function(a) {
            return "string" == typeof a ? "." == a.substr(0, 1) ? xda(a.substr(1)) : "[" == a.substr(0, 1) ? (a = wda.exec(a), yda(a[1], a[2])) : zda(a) : a
        },
        xda = function(a) {
            return function(b) {
                return b.getAttribute && Dc(b, a)
            }
        },
        yda = function(a, b) {
            return function(c) {
                return c.getAttribute && c.getAttribute(a) == b
            }
        },
        zda = function(a) {
            a = a.toUpperCase();
            return function(b) {
                return (b = b.tagName) && b.toUpperCase() == a
            }
        },
        uda = function() {
            return !0
        };
    var I = function(a) {
        x.call(this);
        this.o = a;
        this.T = {}
    };
    v(I, x);
    var Ada = [];
    I.prototype.ka = function(a, b, c, d) {
        return Pf(this, a, b, c, d)
    };
    var Pf = function(a, b, c, d, e, f) {
        na(c) || (c && (Ada[0] = c.toString()), c = Ada);
        for (var g = 0; g < c.length; g++) {
            var k = G(b, c[g], d || a.handleEvent, e || !1, f || a.o || a);
            if (!k) break;
            a.T[k.key] = k
        }
        return a
    };
    I.prototype.b = function(a, b, c, d, e) {
        if (na(b))
            for (var f = 0; f < b.length; f++) this.b(a, b[f], c, d, e);
        else if (a = lda(a, b, c || this.handleEvent, d, e || this.o || this)) cf(a), delete this.T[a.key];
        return this
    };
    var Qf = function(a) {
        Ua(a.T, function(a, c) {
            this.T.hasOwnProperty(c) && cf(a)
        }, a);
        a.T = {}
    };
    I.prototype.wa = function() {
        I.qa.wa.call(this);
        Qf(this)
    };
    I.prototype.handleEvent = function() {
        throw Error("w");
    };
    var J = function() {
        x.call(this);
        this.Qc = new Jc(this);
        this.nM = this;
        this.iA = null
    };
    v(J, x);
    J.prototype[Fb] = !0;
    h = J.prototype;
    h.Op = function() {
        return this.iA
    };
    h.oe = function(a) {
        this.iA = a
    };
    h.removeEventListener = function(a, b, c, d) {
        bf(this, a, b, c, d)
    };
    h.ya = function(a) {
        var b, c = this.Op();
        if (c)
            for (b = []; c; c = c.Op()) b.push(c);
        var c = this.nM,
            d = a.type || a;
        if (pa(a)) a = new D(a, c);
        else if (a instanceof D) a.target = a.target || c;
        else {
            var e = a;
            a = new D(d, c);
            eb(a, e)
        }
        var e = !0,
            f;
        if (b)
            for (var g = b.length - 1; !a.R && 0 <= g; g--) f = a.currentTarget = b[g], e = f.gl(d, !0, a) && e;
        a.R || (f = a.currentTarget = c, e = f.gl(d, !0, a) && e, a.R || (e = f.gl(d, !1, a) && e));
        if (b)
            for (g = 0; !a.R && g < b.length; g++) f = a.currentTarget = b[g], e = f.gl(d, !1, a) && e;
        return e
    };
    h.wa = function() {
        J.qa.wa.call(this);
        this.mA();
        this.iA = null
    };
    h.nt = function(a, b, c, d) {
        return this.Qc.add(String(a), b, !1, c, d)
    };
    h.ty = function(a, b, c, d) {
        return this.Qc.add(String(a), b, !0, c, d)
    };
    h.IG = function(a, b, c, d) {
        return this.Qc.remove(String(a), b, c, d)
    };
    h.uy = function(a) {
        return yba(this.Qc, a)
    };
    h.mA = function(a) {
        var b;
        if (this.Qc) {
            b = this.Qc;
            a = a && a.toString();
            var c = 0,
                d;
            for (d in b.b)
                if (!a || d == a) {
                    for (var e = b.b[d], f = 0; f < e.length; f++) ++c, uc(e[f]);
                    delete b.b[d];
                    b.o--
                }
            b = c
        } else b = 0;
        return b
    };
    h.gl = function(a, b, c) {
        a = this.Qc.b[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var d = !0, e = 0; e < a.length; ++e) {
            var f = a[e];
            if (f && !f.ri && f.$o == b) {
                var g = f.listener,
                    k = f.Rd || f.src;
                f.ls && this.uy(f);
                d = !1 !== g.call(k, c) && d
            }
        }
        return d && 0 != c.KK
    };
    h.HG = function(a, b, c, d) {
        return Lc(this.Qc, String(a), b, c, d)
    };
    var Rf = function(a, b, c, d, e, f) {
        zf.call(this, e, f);
        this.Xb = a;
        this.Ca = [];
        this.Ra = !!b;
        this.Ta = !!c;
        this.vb = !!d;
        for (b = this.La = 0; b < a.length; b++) Df(a[b], p(this.Ja, this, b, !0), p(this.Ja, this, b, !1));
        0 != a.length || this.Ra || this.callback(this.Ca)
    };
    v(Rf, zf);
    Rf.prototype.Ja = function(a, b, c) {
        this.La++;
        this.Ca[a] = [b, c];
        this.o || (this.Ra && b ? this.callback([a, c]) : this.Ta && !b ? this.b(c) : this.La == this.Xb.length && this.callback(this.Ca));
        this.vb && !b && (c = null);
        return c
    };
    Rf.prototype.b = function(a) {
        Rf.qa.b.call(this, a);
        for (a = 0; a < this.Xb.length; a++) this.Xb[a].cancel()
    };
    var Sf = function(a) {
        return (new Rf(a, !1, !0)).addCallback(function(a) {
            for (var b = [], d = 0; d < a.length; d++) b[d] = a[d][1];
            return b
        })
    };
    var Uf = new J,
        Vf = function(a, b) {
            D.call(this, a);
            this.key = b
        };
    v(Vf, D);
    var Bda = new Ea("SoBuGe"),
        Cda = new Ea("E7LK7e"),
        Dda = new Ea("b766Eb"),
        Eda = new Ea("SSZZJc");
    var Yf = function(a, b, c, d, e) {
        J.call(this);
        this.Ba = a.replace(Fda, "_");
        this.ua = a;
        this.S = b || null;
        this.V = c ? Mb(c) : null;
        this.Ph = e || null;
        this.U = [];
        this.ta = {};
        this.Ca = this.ma = d || t();
        this.b = {};
        this.b["main-actionflow-branch"] = 1;
        this.R = new Ke;
        this.o = !1;
        this.H = {};
        this.T = {};
        Gda.push(this);
        this.Ra = ++Hda;
        a = new Wf("created", this);
        null != Xf && Xf.ya(a)
    };
    v(Yf, J);
    var Gda = [],
        Xf = new J,
        Fda = /[~.,?&-]/g,
        Hda = 0;
    Yf.prototype.id = function() {
        return this.Ra
    };
    var Ida = function(a, b, c) {
        a.o && Zf(a, "tick", void 0, b);
        c = c || {};
        b in a.ta && a.R.add(b);
        var d = c.time || t();
        !c.bU && !c.ooa && d > a.Ca && (a.Ca = d);
        for (var e = d - a.ma, f = a.U.length; 0 < f && a.U[f - 1][1] > e;) f--;
        ic(a.U, f, 0, [b, e, c.bU]);
        a.ta[b] = d
    };
    Yf.prototype.done = function(a, b, c) {
        if (this.o || !this.b[a]) Zf(this, "done", a, b);
        else {
            b && Ida(this, b, c);
            this.b[a]--;
            0 == this.b[a] && delete this.b[a];
            if (a = bb(this.b)) Xf ? (0 < this.R.$b() && (this.T.dup = this.R.dc().join("|")), a = new Wf("beforedone", this), this.ya(a) && Xf.ya(a) ? ((b = Jda(this.T)) && (this.H.cad = b), a.type = "done", a = Xf.ya(a)) : a = !1) : a = !0;
            a && (this.o = !0, cc(Gda, this), this.V = this.S = null, this.Oa())
        }
    };
    Yf.prototype.Bd = function(a, b, c) {
        this.o && Zf(this, "branch", a, b);
        b && Ida(this, b, c);
        this.b[a] ? this.b[a]++ : this.b[a] = 1
    };
    var Zf = function(a, b, c, d) {
            if (Xf) {
                var e = new Wf("error", a);
                e.error = b;
                e.Bd = c;
                e.H = d;
                e.o = a.o;
                Xf.ya(e)
            }
        },
        Jda = function(a) {
            var b = [];
            Ua(a, function(a, d) {
                var c = encodeURIComponent(d);
                encodeURIComponent(a).replace(/%7C/g, "|");
                b.push(c + ":" + a)
            });
            return b.join(",")
        };
    Yf.prototype.action = function(a) {
        this.o && Zf(this, "action");
        var b = [],
            c = null,
            d = null,
            e = null,
            f = null;
        Kda(a, function(a) {
            var g;
            !a.__oi && a.getAttribute && (a.__oi = a.getAttribute("oi"));
            if (g = a.__oi) b.unshift(g), c || (c = a.getAttribute("jsinstance"));
            e || d && "1" != d || (e = a.getAttribute("ved"));
            f || (f = a.getAttribute("vet"));
            d || (d = a.getAttribute("jstrack"))
        });
        f && (this.H.vet = f);
        d && (this.H.ct = this.Ba, 0 < b.length && Lda(this, b.join(".")), c && (c = "*" == c.charAt(0) ? parseInt(c.substr(1), 10) : parseInt(c, 10), this.H.cd = c), "1" != d && (this.H.ei =
            d), e && (this.H.ved = e))
    };
    var Lda = function(a, b) {
            a.o && Zf(a, "extradata");
            a.T.oi = b.toString().replace(/[:;,\s]/g, "_")
        },
        Kda = function(a, b) {
            for (var c = a; c && 1 == c.nodeType; c = c.parentNode) b(c)
        },
        Mda = function(a) {
            a = a.ua;
            return a.substr(0, a.indexOf("."))
        };
    h = Yf.prototype;
    h.callback = function(a, b, c, d) {
        this.Bd(b, c);
        var e = this;
        return function() {
            try {
                var c = a.apply(this, arguments)
            } finally {
                e.done(b, d)
            }
            return c
        }
    };
    h.node = function() {
        return this.S
    };
    h.event = function() {
        return this.V
    };
    h.ih = function() {
        return this.Ph
    };
    h.value = function(a) {
        var b = this.S;
        return b ? a in b ? b[a] : b.getAttribute ? b.getAttribute(a) : void 0 : void 0
    };
    var Wf = function(a, b) {
        D.call(this, a, b)
    };
    v(Wf, D);
    var Oda = function(a, b) {
        this.U = {};
        this.ma = {};
        this.V = {};
        this.b = [];
        this.T = a || Nda;
        this.H = b;
        this.S = {};
        this.o = null
    };
    Oda.prototype.R = function(a, b) {
        if (na(a)) this.b = fc(a), Pda(this);
        else if (b) {
            var c = a.event,
                d = this.S[a.eventType];
            if (d)
                for (var e = !1, f = 0, g; g = d[f++];) !1 === g(c) && (e = !0);
            e && Kb(c)
        } else e = a.action, c = e.split(".")[0], d = this.ma[c], this.H ? g = this.H(a) : d ? d.accept(a) && (g = d.handle) : g = this.U[e], g ? (c = this.T(a), g(c), c.done("main-actionflow-branch")) : (g = Mb(a.event), a.event = g, this.b.push(a), d || (g = this.V[c]) && !g.RR && (g.Aoa(this, c, a), g.RR = !0))
    };
    var Nda = function(a) {
            return new Yf(a.action, a.actionElement, a.event, a.timeStamp, a.eventType)
        },
        Qda = function(a) {
            a.o && !$b(a.b) && a.o(a.b, a)
        },
        Pda = function(a) {
            a.o && !$b(a.b) && Kd(function() {
                this.o(this.b, this)
            }, a)
        };
    var $f = function() {
        x.call(this);
        this.b = {};
        this.H = [];
        this.R = [];
        this.U = [];
        this.o = [];
        this.S = [];
        this.ma = {};
        this.T = this.V = new Od([], "");
        this.Ba = null;
        this.ta = new zf;
        this.ua = null;
        this.Ca = 0;
        this.Na = this.La = !1
    };
    v($f, x);
    la($f);
    $f.prototype.Za = function(a, b) {
        if (pa(a)) {
            for (var c = a.split("/"), d = [], e = 0; e < c.length; e++) {
                var f = c[e].split(":"),
                    g = f[0];
                if (f[1])
                    for (var f = f[1].split(","), k = 0; k < f.length; k++) f[k] = d[parseInt(f[k], 36)];
                else f = [];
                d.push(g);
                this.b[g] = new Od(f, g)
            }
            b && b.length ? (gc(this.H, b), this.Ba = Ob(b)) : this.ta.o || this.ta.callback();
            this.T == this.V && (this.T = null, xca(this.V, p(this.Ja, this)) && ag(this, 4), bg(this))
        }
    };
    $f.prototype.Ja = function() {
        return null
    };
    $f.prototype.Ed = function() {
        return 0 < this.H.length
    };
    var bg = function(a) {
        var b = a.La,
            c = a.Ed();
        c != b && (Rda(a, c ? "active" : "idle"), a.La = c);
        b = 0 < a.S.length;
        b != a.Na && (Rda(a, b ? "userActive" : "userIdle"), a.Na = b)
    };
    $f.prototype.Qa = function(a, b) {
        var c = this.b[a];
        c.b ? b.callback(null) : (Sda(this, a, c, !1, b), cg(this, a) || dg(this, [a]))
    };
    var Tda = function(a, b, c) {
            var d = [];
            jc(b, d);
            b = [];
            for (var e = {}, f = 0; f < d.length; f++) {
                var g = d[f],
                    k = a.b[g];
                if (!k) throw Error("x`" + g);
                var l = new zf;
                e[g] = l;
                k.b ? l.callback(null) : (Sda(a, g, k, !!c, l), cg(a, g) || b.push(g))
            }
            0 < b.length && dg(a, b);
            return e
        },
        Sda = function(a, b, c, d, e) {
            c.o.push(new $c(e.callback, e));
            wca(c, function(a) {
                e.b(Error(a))
            });
            cg(a, b) ? d && (Uda(a, b), bg(a)) : d && Uda(a, b)
        },
        dg = function(a, b) {
            $b(a.H) ? a.Ra(b) : (a.o.push(b), bg(a))
        };
    $f.prototype.Ra = function(a, b, c) {
        b || (this.Ca = 0);
        this.H = a = Vda(this, a);
        this.R = fc(a);
        bg(this);
        $b(a) || (this.U.push.apply(this.U, a), c = p(this.ua.ua, this.ua, fc(a), this.b, null, p(this.vb, this, this.R, a), p(this.Ta, this), !!c), (a = 5E3 * Math.pow(this.Ca, 2)) ? window.setTimeout(c, a) : c())
    };
    var Vda = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if (a.b[b[c]].b) throw Error("y`" + b[c]);
            for (var d = [], c = 0; c < b.length; c++) d = d.concat(Wda(a, b[c]));
            jc(d);
            return 1 < d.length ? (c = d.shift(), a.o = Sb(d, function(a) {
                return [a]
            }).concat(a.o), [c]) : d
        },
        Wda = function(a, b) {
            var c = [];
            Zb(a.U, b) || c.push(b);
            for (var d = fc(a.b[b].R); d.length;) {
                var e = d.pop();
                a.b[e].b || Zb(a.U, e) || (c.unshift(e), Array.prototype.unshift.apply(d, a.b[e].R))
            }
            jc(c);
            return c
        },
        fg = function(a) {
            var b = $f.va();
            b.isDisposed() || (xca(b.b[a], p(b.Ja, b)) && ag(b, 4), cc(b.S,
                a), cc(b.H, a), $b(b.H) && eg(b), b.Ba && a == b.Ba && (b.ta.o || b.ta.callback()), bg(b))
        },
        cg = function(a, b) {
            if (Zb(a.H, b)) return !0;
            for (var c = 0; c < a.o.length; c++)
                if (Zb(a.o[c], b)) return !0;
            return !1
        },
        Xda = function(a, b, c) {
            var d = a.b[b];
            d.b ? (a = new $c(c, void 0), window.setTimeout(p(a.execute, a), 0)) : cg(a, b) ? d.o.push(new $c(c, void 0)) : (d.o.push(new $c(c, void 0)), dg(a, [b]))
        };
    $f.prototype.load = function(a, b) {
        return Tda(this, [a], b)[a]
    };
    var Yda = function(a, b) {
            return Tda(a, b, void 0)
        },
        Uda = function(a, b) {
            Zb(a.S, b) || a.S.push(b)
        },
        gg = function(a) {
            var b = $f.va();
            b.T = b.b[a]
        },
        hg = function() {
            var a = $f.va();
            !a.T || a.T.getId();
            a.T = null
        };
    $f.prototype.vb = function(a, b, c) {
        this.Ca++;
        this.R = a;
        C(b, q(cc, this.U), this);
        401 == c ? (ag(this, 0), this.o.length = 0) : 410 == c ? (ig(this, 3), eg(this)) : 3 <= this.Ca ? (ig(this, 1), eg(this)) : this.Ra(this.R, !0, 8001 == c)
    };
    $f.prototype.Ta = function() {
        ig(this, 2);
        eg(this)
    };
    var ig = function(a, b) {
            1 < a.R.length ? a.o = Sb(a.R, function(a) {
                return [a]
            }).concat(a.o) : ag(a, b)
        },
        ag = function(a, b) {
            var c = a.R;
            a.H.length = 0;
            for (var d = [], e = 0; e < a.o.length; e++) {
                var f = Rb(a.o[e], function(a) {
                    var b = Wda(this, a);
                    return Ub(c, function(a) {
                        return Zb(b, a)
                    })
                }, a);
                gc(d, f)
            }
            for (e = 0; e < c.length; e++) pba(d, c[e]);
            for (e = 0; e < d.length; e++) {
                for (f = 0; f < a.o.length; f++) cc(a.o[f], d[e]);
                cc(a.S, d[e])
            }
            var g = a.ma.error;
            if (g)
                for (e = 0; e < g.length; e++)
                    for (var k = g[e], f = 0; f < d.length; f++) k("error", d[f], b);
            for (e = 0; e < c.length; e++) a.b[c[e]] &&
                yca(a.b[c[e]], b);
            a.R.length = 0;
            bg(a)
        },
        eg = function(a) {
            for (; a.o.length;) {
                var b = Rb(a.o.shift(), function(a) {
                    return !this.b[a].b
                }, a);
                if (0 < b.length) {
                    a.Ra(b);
                    return
                }
            }
            bg(a)
        },
        Zda = function(a, b, c) {
            na(b) || (b = [b]);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = c,
                    g = a.ma;
                g[e] || (g[e] = []);
                g[e].push(f)
            }
        },
        Rda = function(a, b) {
            for (var c = a.ma[b], d = 0; c && d < c.length; d++) c[d](b)
        };
    $f.prototype.wa = function() {
        $f.qa.wa.call(this);
        Taa(Ya(this.b), this.V);
        this.ma = this.o = this.S = this.R = this.H = this.b = null
    };
    var jg = function() {
        this.b = {}
    };
    la(jg);
    jg.prototype.T = function() {
        return $f.va()
    };
    jg.prototype.register = function(a, b) {
        this.b[a] = b
    };
    var kg = function(a) {
            if (a && a.Iv) {
                var b = a.Iv.b();
                if (!b) throw Error("z`" + a);
                return b
            }
            return a
        },
        mg = function(a, b) {
            var c = kg(b),
                d = a.b[c];
            return d ? (Uf.ya(new Vf(Bda, c)), If(d)) : c instanceof Nb ? (Uf.ya(new Vf(Cda, c)), d = lg(a, [c]), d.addCallback(function() {
                if (this.b[c]) return Uf.ya(new Vf(Dda, c)), this.b[c];
                throw $da(c);
            }, a), d) : Jf($da(c))
        },
        lg = function(a, b) {
            b = Sb(b, kg);
            b = Rb(b, function(a) {
                return !this.b[a]
            }, a);
            var c = Rb(xba(b).jr, function(a) {
                    return a instanceof Nb && !this.b[a]
                }, a),
                d = [],
                e = {};
            C(c, function(a) {
                a = a.Kz;
                null ==
                    a || e[a] || (e[a] = !0, d.push(a))
            });
            if (0 == d.length) return If();
            try {
                var f = Yda(a.T(), d);
                return Sf(Ya(f))
            } catch (g) {
                return Jf(g)
            }
        },
        $da = function(a) {
            Uf.ya(new Vf(Eda, a));
            return new TypeError("Downloaded module for Wiz service <" + a + "> but the service was not registered in that module.")
        };
    var aea = function(a) {
            var b = this.getAttribute(a);
            Element.prototype.removeAttribute.apply(this, arguments);
            Qe(this, Fd, {
                name: a,
                R3: null,
                l6: b
            }, !1)
        },
        bea = function(a) {
            var b = this.getAttribute(a);
            Element.prototype.setAttribute.apply(this, arguments);
            var c = this.getAttribute(a);
            Qe(this, Fd, {
                name: a,
                R3: c,
                l6: b
            }, !1)
        },
        ng = function(a, b) {
            this.ta = a;
            this.Ca = b || null;
            this.Fg = !1;
            this.b = {};
            this.U = {};
            this.H = null;
            this.T = this.o = !1;
            this.R = null;
            a.__wizmanager = this;
            this.V = p(function() {
                this.o = !1;
                this.T && this.ma()
            }, this);
            this.Ha = new I(this);
            this.Ha.ka(je(a), "unload", this.ua);
            this.Ha.ka(je(a), "scroll", this.Ba)
        };
    v(ng, x);
    ng.prototype.Eg = function() {
        this.Fg || (this.Fg = !0, Mba(p(this.ma, this, 0)))
    };
    ng.prototype.Nb = function() {
        return this.ta
    };
    ng.prototype.Ba = function() {
        this.V && (this.o || (this.o = !0), this.R && window.clearTimeout(this.R), this.R = window.setTimeout(this.V, 200))
    };
    ng.prototype.S = function(a) {
        if (this.Ca && !this.Ca.isDisposed()) {
            var b = [];
            Ua(a, function(a, d) {
                if (!this.U[d]) {
                    this.U[d] = !0;
                    var c = a.getAttribute("jscontroller");
                    c && !a.getAttribute("jslazy") && (c = Gd[c]) && b.push(c)
                }
            }, this);
            0 < b.length && lg(jg.va(), b)
        }
    };
    var cea = function(a, b) {
        var c = va(b);
        a.b[c] || (a.b[c] = b, Re(b, Fd) && (b.setAttribute = bea, b.removeAttribute = aea), Re(b, Ed) && Qe(b, Ed, void 0, !1))
    };
    ng.prototype.ma = function() {
        if (this.o) this.T = !0;
        else {
            this.Fg = this.T = !1;
            for (var a = this.ta.querySelectorAll("[jscontroller],[jsmodel],[jsowner]"), b = {}, c = {}, d = 0; d < a.length; d++) {
                var e = a[d],
                    f = va(e);
                this.b[f] ? (c[f] = e, this.b[f] = e) : b[f] = e
            }
            Ua(this.b, function(a, d) {
                b[d] || c[d] || (dea(a), eea(a), fea(a), delete this.b[d])
            }, this);
            var g = {};
            Ua(b, function(a, b) {
                this.b[b] = a;
                Re(a, Fd) && (a.setAttribute = bea, a.removeAttribute = aea);
                Re(a, Ed) && (g[b] = a)
            }, this);
            this.S(g);
            Ua(g, function(a) {
                try {
                    Qe(a, Ed, void 0, !1)
                } catch (l) {
                    window.setTimeout(naa(l),
                        0)
                }
            });
            this.H && window.clearTimeout(this.H);
            this.H = window.setTimeout(p(this.S, this, this.b), 0)
        }
    };
    ng.prototype.ua = function() {
        this.Ha.Oa();
        Ua(this.b, function(a, b) {
            dea(a);
            eea(a);
            fea(a);
            delete this.b[b]
        }, this)
    };
    var dea = function(a) {
            gea(a.__jscontroller);
            a.__jscontroller = void 0
        },
        eea = function(a) {
            var b = a.__jsmodel;
            if (b) {
                for (var c in b) gea(b[c]);
                a.__jsmodel = void 0
            }
        },
        fea = function(a) {
            var b = a.__owner;
            b && b.__owned && cc(b.__owned, a)
        },
        gea = function(a) {
            if (a)
                if (a.o) {
                    var b = null;
                    try {
                        a.addCallback(function(a) {
                            b = a
                        })
                    } catch (c) {}
                    b && b.Oa()
                } else a.cancel()
        };
    ng.prototype.wa = function() {
        this.ua();
        ng.qa.wa.call(this)
    };
    var hea = {},
        og = function(a, b) {
            var c = hea[a];
            c || (c = mg(jg.va(), a), hea[a] = c);
            var d = new zf,
                e = function(c) {
                    Df(c.oG(a, b || void 0), function(a) {
                        d.callback(a)
                    }, function(a) {
                        d.b(a)
                    })
                };
            c.addCallback(function(a) {
                var c = kg(a);
                if (c != a) a = og(c, b), Df(a, d.callback, d.b, d);
                else return e(a)
            });
            Ef(c, function(a) {
                d.b(a)
            });
            return d
        };
    var pg = function(a, b, c, d) {
            this.Ca = a;
            this.S = b;
            this.b = c || null;
            a = this.T = new Oda(d, iea(this));
            a.o = jea;
            Pda(a);
            this.R = [];
            b.Nb().__wizdispatcher = this;
            this.o = {};
            this.H = [];
            this.U = !1
        },
        jea = function(a, b) {
            for (; a.length;) {
                var c = a.shift();
                b.R(c)
            }
        };
    pg.prototype.trigger = function(a) {
        this.Ca(a)
    };
    var qg = function(a, b) {
            if (we(b.ownerDocument, b)) {
                for (var c = 0; c < a.R.length; c++)
                    if (we(a.R[c], b)) return !1;
                return !0
            }
            for (c = b; c = c.parentNode;) {
                c = c.host || c;
                if (Zb(a.R, c)) break;
                if (c == b.ownerDocument) return !0
            }
            return !1
        },
        rg = function(a, b) {
            var c = jg.va(),
                d = vda(b),
                e = d.getAttribute("jscontroller");
            if (d.__jscontroller) return d.__jscontroller.Bd();
            var e = Gd[e],
                f = new zf;
            d.__jscontroller = f;
            cea(a.S, d);
            qg(a, d) || (f.cancel(), d.__jscontroller = void 0);
            Ef(mg(c, e).addCallback(function(b) {
                if (qg(a, d)) {
                    b = b.create(e, d, a);
                    var c = !0;
                    b.addCallback(function(b) {
                        c ||
                            qg(a, d) ? f.callback(b) : (f.cancel(), d.__jscontroller = void 0)
                    });
                    Ef(b, f.b, f);
                    c = !1
                } else f.cancel(), d.__jscontroller = void 0
            }, a), function(a) {
                f.b(a)
            }, a);
            return f
        };
    pg.prototype.V = function(a) {
        if (!(this.b && this.b.isDisposed() || Mda(a))) {
            this.U || (this.U = !0, Qda(this.T));
            var b = a.node(),
                c = a.event(),
                d = c._retarget ? c._retarget : c.target || c.srcElement,
                e = Pe(b, a.ih() ? a.ih() : c.type),
                f = !1;
            if (e)
                for (var g = 0; g < e.length; g++) var k = kea(this, a, e[g], null, d),
                    f = f || !0 === k;
            var l = Kf(b, !0);
            if (l) {
                var b = nba(a.ua),
                    m = lea(a, b, l);
                if (0 == m.length) e && !f || mea(this, a, c);
                else {
                    c = rg(this, l);
                    a.Bd("wiz");
                    var r = !0,
                        u = !1;
                    window.setTimeout(function() {
                        r && (nea(!0, m, a, l), u = !0)
                    }, 50);
                    Ff(c, function() {
                        u && nea(!1, m,
                            a, l);
                        r = !1
                    }, this);
                    c.addCallback(p(this.ma, this, m));
                    c.addCallback(function(b) {
                        try {
                            for (var c = f, d = a.event(), e = 0; e < m.length; e++) var g = m[e].target,
                                k = oea(b, m[e].action),
                                r = kea(this, a, k, b, g),
                                c = c || !0 === r;
                            if (c && !1 !== d.bubbles) {
                                var u = pea(this, d, l);
                                null != u && this.trigger(u)
                            }
                        } finally {
                            a.done("wiz")
                        }
                    }, this);
                    Ef(c, function(b) {
                        a.done("wiz");
                        if (!(b instanceof Af)) throw b;
                    })
                }
            } else this.ta == d && console.log('No controller found for "%s" at element %O. %s %O', c.type.toString(), b, f ? "Bubbling event" : "", c), f && mea(this, a, c)
        }
    };
    pg.prototype.ma = function(a, b) {
        for (var c = Rb(this.H, function(a) {
                return !this.o[a]
            }, this), d = 0; d < a.length; d++) {
            var e = oea(b, a[d].action);
            if (e.Jm)
                for (var f = 0; f < e.Jm.length; f++) this.o[e.Jm[f]] || c.push(e.Jm[f])
        }
        if (c.length) {
            e = [];
            lg(jg.va(), c);
            for (d = 0; d < c.length; d++) f = c[d], f = og(f, this.b).addCallback(p(function(a, b) {
                this.o[a] = b
            }, this, f)), e.push(f);
            return (new Rf(e)).addCallback(function() {
                return b
            })
        }
    };
    var lea = function(a, b, c) {
            var d = [];
            a = a.event();
            b = b.get();
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                if ("CLIENT" !== f.action) {
                    var g = a._retarget ? a._retarget : a.target || a.srcElement,
                        k = null;
                    if (f.target) {
                        do {
                            var l = g.getAttribute("jsname");
                            if (f.target == l && Kf(g, !1) == c) {
                                k = g;
                                break
                            }
                            g = Me(g)
                        } while (g && g != c);
                        if (!k) continue
                    }
                    if (f.Mc) {
                        if ("true" == f.Mc.preventDefault)
                            if (l = a, l.preventDefault) l.preventDefault();
                            else if (l.srcElement) {
                            var m = l.srcElement.ownerDocument.parentWindow;
                            m.event && m.event.type == l.type && (m.event.returnValue = !1)
                        }
                        "true" == f.Mc.preventMouseEvents && a._preventMouseEvents.call(a)
                    }
                    d.push({
                        action: f,
                        target: k || g
                    })
                }
            }
            return d
        },
        oea = function(a, b) {
            for (var c = b.action, d = null, e = a, f = null; !f && e && (f = e.yb[c], e = e.constructor.qa, e && e.yb););
            f && (d = f.call(a));
            if (!d) throw Error("A`" + b.action + "`" + a);
            return d
        },
        kea = function(a, b, c, d, e) {
            var f = b.event();
            b = b.node();
            3 == e.nodeType && (e = e.parentNode);
            e = new iaa(f, new Mf(e), new Mf(b), f.__source);
            f = [];
            for (b = 0; b < a.H.length; b++) f.push(a.o[a.H[b]]);
            if (c.Jm)
                for (b = 0; b < c.Jm.length; b++) f.push(a.o[c.Jm[b]]);
            if (0 < f.length) {
                var g;
                a: {
                    for (a = 0; a < f.length; a++) try {
                        var k = f[a].Eoa(e, d);
                        if (null != k && k.abort) {
                            g = k;
                            break a
                        }
                    } catch (l) {
                        dd(l)
                    }
                    g = void 0
                }
                if (g) return;
                for (g = 0; g < f.length; g++) try {
                    f[g].loa(e, d)
                } catch (l) {
                    dd(l)
                }
            }
            return c.call(d, e)
        },
        nea = function(a, b, c, d) {
            C(b, function(b) {
                b.action.Mc && b.action.Mc.cssFeedback && (Ic(c.node(), "wizLoadingJsAction", a), Ic(b.target, "wizLoadingTarget", a), Ic(d, "wizLoadingJsController", a))
            })
        },
        mea = function(a, b, c) {
            b = pea(a, c, c.target || c.srcElement, Me(b.node()));
            null != b && a.trigger(b)
        },
        pea = function(a,
            b, c, d) {
            var e = {},
                f;
            for (f in b) "function" !== typeof b[f] && "srcElement" !== f && "target" !== f && (e[f] = b[f]);
            d = d || Me(c);
            if (!d || !qg(a, d)) return null;
            e.target = d;
            e._retarget = c;
            e._originalEvent = b;
            b.preventDefault && (e.defaultPrevented = b.defaultPrevented || !1, e.preventDefault = qea, e._propagationStopped = b._propagationStopped || !1, e.stopPropagation = rea);
            return e
        },
        qea = function() {
            this.defaultPrevented = !0;
            var a = this._originalEvent;
            a && a.preventDefault()
        },
        rea = function() {
            this._propagationStopped = !0;
            var a = this._originalEvent;
            a && a.stopPropagation()
        },
        iea = function(a) {
            var b = p(a.V, a),
                c = Ia;
            tc(function(a) {
                c = a
            });
            return function() {
                return c(b)
            }
        };
    var sea = function(a, b, c) {
        var d = a.trigger;
        a = a.bind;
        b = new ng(b, c);
        d = new pg(d, b, c, void 0);
        c && (jg.va(), c.Gb(b));
        c = d.T;
        a(p(c.R, c));
        b.Eg();
        return d
    };
    var sg = function(a) {
        this.b = a
    };
    sg.prototype.toString = function() {
        return this.b + ""
    };
    var tg = new sg(805),
        ug = new sg(806),
        vg = new sg(29),
        wg = new sg(21),
        xg = new sg(31),
        yg = new sg(33),
        Ag = new sg(17),
        Bg = new sg(819),
        Cg = new sg(820),
        tea = new sg(34),
        uea = new sg(13),
        Dg = new sg(19);
    var Eg = function() {
        x.call(this);
        this.b = {};
        this.o = {};
        this.S = [];
        this.T = {};
        this.H = []
    };
    v(Eg, x);
    var Fg = function(a, b) {
        var c = a.b[b];
        !c && b in a.o && (c = vea(a, b));
        return c || null
    };
    Eg.prototype.get = function(a) {
        var b = Fg(this, a.b);
        if (!b) throw Error("B`" + a);
        return b
    };
    var K = function(a, b) {
            return a.get(vg).get(b)
        },
        Gg = function(a, b) {
            if (a.S[b]) {
                var c = a.S[b],
                    d = a.get(vg);
                return wea(d, [c], void 0)[c]
            }
            c = new zf;
            a.b[b] ? c.callback(a.b[b]) : (d = a.T[b]) ? a.U ? Xda(a.U, d, p(a.R, a, b, c)) : xea(a.V, d, p(a.R, a, b, c)) : a.R(b, c);
            return c
        };
    Eg.prototype.R = function(a, b) {
        var c = this.b[a] || vea(this, a);
        b.callback(c)
    };
    var vea = function(a, b) {
            var c = (0, a.o[b])(a);
            a.b[b] = c;
            a.H.push(c);
            delete a.o[b];
            return c
        },
        Hg = function(a, b) {
            return !!(b in a.b || b in a.o)
        },
        Ig = function(a, b, c) {
            a.b[b] = c;
            a.H.push(c)
        };
    Eg.prototype.wa = function() {
        Eg.qa.wa.call(this);
        for (var a = 0; a < this.H.length; ++a) y(this.H[a]);
        this.H = [];
        this.b = {};
        this.o = {};
        this.T = {}
    };
    var yea = function(a, b) {
        for (var c in b) {
            var d = Number(c);
            a.T[d] = b[d]
        }
    };
    var Jg = null,
        Kg = null,
        Lg = null,
        zea = sd || td && !Zd || qd,
        Aea = zea || "function" == typeof ca.btoa,
        Bea = zea || !Zd && !E && "function" == typeof ca.atob,
        Mg = function(a, b) {
            Cea();
            for (var c = b ? Lg : Jg, d = [], e = 0; e < a.length; e += 3) {
                var f = a[e],
                    g = e + 1 < a.length,
                    k = g ? a[e + 1] : 0,
                    l = e + 2 < a.length,
                    m = l ? a[e + 2] : 0,
                    r = f >> 2,
                    f = (f & 3) << 4 | k >> 4,
                    k = (k & 15) << 2 | m >> 6,
                    m = m & 63;
                l || (m = 64, g || (k = 64));
                d.push(c[r], c[f], c[k], c[m])
            }
            return d.join("")
        },
        Ng = function(a, b) {
            if (Bea && !b) return ca.atob(a);
            var c = "";
            Dea(a, function(a) {
                c += String.fromCharCode(a)
            });
            return c
        },
        Dea = function(a,
            b) {
            function c(b) {
                for (; d < a.length;) {
                    var c = a.charAt(d++),
                        e = Kg[c];
                    if (null != e) return e;
                    if (!mb(c)) throw Error("C`" + c);
                }
                return b
            }
            Cea();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    k = c(64);
                if (64 === k && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != k && b(g << 6 & 192 | k))
            }
        },
        Cea = function() {
            if (!Jg) {
                Jg = {};
                Kg = {};
                Lg = {};
                for (var a = 0; 65 > a; a++) Jg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Kg[Jg[a]] = a, Lg[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (Kg["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
            }
        };
    var Og = function() {},
        Pg = "function" == typeof Uint8Array,
        Rg = function(a, b, c) {
            a.b = null;
            b || (b = []);
            a.V = void 0;
            a.R = -1;
            a.o = b;
            a: {
                if (a.o.length) {
                    b = a.o.length - 1;
                    var d = a.o[b];
                    if (d && "object" == typeof d && !na(d) && !(Pg && d instanceof Uint8Array)) {
                        a.T = b - a.R;
                        a.H = d;
                        break a
                    }
                }
                a.T = Number.MAX_VALUE
            }
            a.U = {};
            if (c)
                for (b = 0; b < c.length; b++) d = c[b], d < a.T ? (d += a.R, a.o[d] = a.o[d] || Qg) : a.H[d] = a.H[d] || Qg
        },
        Qg = [],
        Sg = function(a, b) {
            if (b < a.T) {
                var c = b + a.R,
                    d = a.o[c];
                return d === Qg ? a.o[c] = [] : d
            }
            d = a.H[b];
            return d === Qg ? a.H[b] = [] : d
        },
        Tg = function(a, b, c) {
            a =
                Sg(a, b);
            return null == a ? c : a
        },
        Ug = function(a, b, c) {
            b < a.T ? a.o[b + a.R] = c : a.H[b] = c
        },
        Vg = function(a, b, c) {
            a.b || (a.b = {});
            if (!a.b[c]) {
                var d = Sg(a, c);
                d && (a.b[c] = new b(d))
            }
            return a.b[c]
        },
        Wg = function(a, b, c) {
            a.b || (a.b = {});
            if (!a.b[c]) {
                for (var d = Sg(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.b[c] = e
            }
            b = a.b[c];
            b == Qg && (b = a.b[c] = []);
            return b
        },
        Eea = function(a) {
            if (a.b)
                for (var b in a.b) {
                    var c = a.b[b];
                    if (na(c))
                        for (var d = 0; d < c.length; d++) c[d] && c[d].Ie();
                    else c && c.Ie()
                }
        };
    Og.prototype.Ie = function() {
        Eea(this);
        return this.o
    };
    var Xg = ca.JSON && ca.JSON.stringify || "object" === typeof JSON && JSON.stringify;
    Og.prototype.S = Pg ? function() {
        var a = Uint8Array.prototype.toJSON;
        Uint8Array.prototype.toJSON = function() {
            return Mg(this)
        };
        try {
            var b = Xg.call(null, this.Ie(), Yg)
        } finally {
            Uint8Array.prototype.toJSON = a
        }
        return b
    } : Xg ? function() {
        return Xg.call(null, this.Ie(), Yg)
    } : function() {
        return Sa(this.Ie(), Yg)
    };
    var Yg = function(a, b) {
        if (qa(b)) {
            if (isNaN(b)) return "NaN";
            if (Infinity === b) return "Infinity";
            if (-Infinity === b) return "-Infinity"
        }
        return b
    };
    Og.prototype.toString = function() {
        Eea(this);
        return this.o.toString()
    };
    Og.prototype.clone = function() {
        return Zg(this)
    };
    var Zg = function(a) {
            return new a.constructor($g(a.Ie()))
        },
        $g = function(a) {
            var b;
            if (na(a)) {
                for (var c = Array(a.length), d = 0; d < a.length; d++) null != (b = a[d]) && (c[d] = "object" == typeof b ? $g(b) : b);
                return c
            }
            if (Pg && a instanceof Uint8Array) return new Uint8Array(a);
            c = {};
            for (d in a) null != (b = a[d]) && (c[d] = "object" == typeof b ? $g(b) : b);
            return c
        };
    var ah = function(a) {
        Rg(this, a, Fea)
    };
    v(ah, Og);
    var Fea = [1];
    var Hea = function(a) {
        Rg(this, a, Gea)
    };
    v(Hea, Og);
    var Gea = [4],
        bh = function(a) {
            Rg(this, a, Iea)
        };
    v(bh, Og);
    var Iea = [5];
    bh.prototype.qb = function() {
        return Sg(this, 1)
    };
    bh.prototype.getEmail = function() {
        return Sg(this, 3)
    };
    bh.prototype.Zi = function() {
        return null != Sg(this, 3)
    };
    var ch = function(a) {
        Rg(this, a, null)
    };
    v(ch, Og);
    var dh = function(a) {
        Rg(this, a, null)
    };
    v(dh, Og);
    var eh = function(a) {
        Rg(this, a, Jea)
    };
    v(eh, Og);
    var Jea = [1, 2, 3],
        Kea = function(a) {
            Rg(this, a, null)
        };
    v(Kea, Og);
    var fh = function(a, b, c, d, e, f, g) {
        J.call(this);
        this.b = a;
        this.o = b;
        this.Na = d || "";
        this.La = !!e;
        this.Qa = f || "1";
        this.U = !1;
        this.ta = c ? fc(c) : null;
        this.Ja = !!g
    };
    v(fh, J);
    h = fh.prototype;
    h.jE = 60;
    h.sL = !1;
    h.pI = !1;
    h.lI = !1;
    h.Bp = !1;
    h.bF = !1;
    var Lea = /(\.edu$)|(\.ac\...$)/;
    fh.prototype.getName = function() {
        return this.b
    };
    fh.prototype.getTitle = function() {
        return this.Na
    };
    fh.prototype.R = function() {
        return this.La
    };
    fh.prototype.ua = function() {
        return !!this.b && !(this.b && Lea.test(this.b))
    };
    var Mea = function(a, b, c, d, e, f, g) {
            this.o = a;
            this.b = b;
            this.R = c || new fh(null, null, null);
            this.T = d || null;
            this.U = e;
            this.ta = !!g
        },
        gh = function(a) {
            return Fg(a, 7)
        },
        Nea = function(a) {
            return hh(a.b, a.o.kc + "/color", 0)
        },
        ih = function(a) {
            return gh(a).b
        },
        jh = function(a) {
            return gh(a).o.kc
        };
    var mh, nh = new zf,
        Oea = function(a) {
            if (mh) throw Error("D");
            mh = a;
            nh.callback(a)
        },
        M = function() {
            if (!mh) throw Error("E");
            return mh
        };
    var Pea = "Sun Mon Tue Wed Thu Fri Sat".split(" ");
    var oh = function(a) {
            return 10 > a ? "0" + a : String(a)
        },
        Qea = function(a) {
            return a ? String(a) : "????"
        },
        ph = function(a) {
            return isNaN(a) ? "??" : oh(a)
        },
        qh = [, 31, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        rh = function(a, b) {
            return qh[b] || qh[a] || (qh[a] = 28 + ((a & 3 ? 0 : a % 100 || !(a % 400)) ? 1 : 0))
        },
        Rea = function(a) {
            return 0 == a || 6 == a
        },
        Sea = {},
        sh = function(a, b, c) {
            var d = a << 4 | b;
            return ((Sea[d] || (Sea[d] = (new Date(a, b - 1, 1, 12, 0, 0, 0)).getDay())) + c - 1) % 7
        },
        Tea = [, 0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        th = function(a, b, c) {
            a = 2 >= b || 29 - rh(a, 2);
            return Tea[b] + c - a
        };
    var uh = 1 / 131072,
        vh = function(a, b, c) {
            return ((a - 1970 << 4) + b << 5) + c
        },
        wh = vh(-65535, 1, 1),
        Uea = vh(65535, 12, 31),
        xh = function(a) {
            return String((a >> 9) + 1970) + oh(a >> 5 & 15) + oh(a & 31)
        },
        yh = function(a) {
            if (28 > (a & 31)) return a + 1;
            var b = a >> 5 & 15;
            if ((a & 31) < (qh[b] || rh((a >> 9) + 1970, 2))) return a + 1;
            var c = (a >> 9) + 1970;
            12 < ++b && (b = 1, ++c);
            return vh(c, b, 1) + a % 1
        },
        Vea = function(a, b) {
            var c = a;
            a % 1 || (a += uh);
            (b - uh) % 1 || (b -= uh);
            return function(d, e) {
                return d < b && (e > a || d >= c)
            }
        };
    var zh = function() {};
    h = zh.prototype;
    h.year = NaN;
    h.month = NaN;
    h.Ka = NaN;
    h.hour = NaN;
    h.minute = NaN;
    h.second = NaN;
    h.toString = function() {
        return this.R || (this.R = this.xo())
    };
    h.lc = function() {
        return this.Wa() | 0
    };
    h.min = function(a) {
        return this.Wa() < a.Wa() ? this : a
    };
    h.max = function(a) {
        return this.Wa() > a.Wa() ? this : a
    };
    var Dh = function(a, b) {
            var c = Ah(a);
            isNaN(a.year) || (c.year = NaN, c.month = NaN, c.Ka = Bh(a, b));
            isNaN(a.hour) || (c.hour -= b.hour, c.minute -= b.minute, c.second -= b.second);
            return new Ch(c.Ka, c.hour, c.minute, c.second)
        },
        Bh = function(a, b) {
            var c = a.year,
                d = a.month,
                e = a.Ka,
                f = b.year,
                g = b.month,
                k = b.Ka;
            return c == f ? th(c, d, e) - th(f, g, k) : Math.round((Date.UTC(c, d - 1, e) - Date.UTC(f, g - 1, k)) / 864E5)
        },
        Fh = function(a) {
            var b = a.year,
                c = a.month;
            a = a.Ka;
            28 < ++a && a > rh(b, c) && (a = 1, 13 === ++c && (c = 1, ++b));
            return Eh(b, c, a)
        },
        Gh = function(a) {
            return a.hour ||
                a.minute || a.second ? Fh(a) : a.$a()
        },
        Ih = function(a, b) {
            return Hh(a.year, a.month, a.Ka + b).$a()
        },
        Jh = function(a, b) {
            return Ih(a, -((a.rd() - b + 7) % 7))
        },
        Kh = function(a, b) {
            return Ih(a, (b - a.rd() + 7) % 7)
        };
    zh.prototype.rd = function() {
        return sh(this.year, this.month, this.Ka)
    };
    zh.prototype.$a = function() {
        return Eh(this.year || 0, this.month || 1, this.Ka || 1)
    };
    zh.prototype.rb = function() {
        return new Lh(this.year || 0, this.month || 1, this.Ka || 1, this.hour || 0, this.minute || 0, this.second || 0)
    };
    zh.prototype.kd = function() {
        return new Mh(this.hour || 0, this.minute || 0, this.second || 0)
    };
    var Nh = function(a) {
        return 60 * a.hour + a.minute
    };
    var Oh = function() {};
    v(Oh, zh);
    Oh.prototype.H = function() {
        return !1
    };
    var Mh = function(a, b, c) {
        this.hour = a;
        this.minute = b;
        this.second = c
    };
    v(Mh, zh);
    h = Mh.prototype;
    h.kd = function() {
        return this
    };
    h.xo = function() {
        return xb("T", oh(this.hour), oh(this.minute), oh(this.second))
    };
    h.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.Wa() == a.Wa()
    };
    h.Wa = function() {
        return this.o || (this.o = (((this.hour << 6) + this.minute << 6) + this.second + 1) * uh)
    };
    h.Fd = function() {
        return !0
    };
    var Lh = function(a, b, c, d, e, f) {
        this.year = a;
        this.month = b;
        this.Ka = c;
        this.hour = d;
        this.minute = e;
        this.second = f
    };
    v(Lh, Oh);
    h = Lh.prototype;
    h.rb = function() {
        return this
    };
    h.Wa = function() {
        return this.o || (this.o = ((this.year - 1970 << 4) + this.month << 5) + this.Ka + (((this.hour << 6) + this.minute << 6) + this.second + 1) * uh)
    };
    h.Fd = function() {
        return !0
    };
    h.xo = function() {
        return xb(String(this.year), oh(this.month), oh(this.Ka), "T", oh(this.hour), oh(this.minute), oh(this.second))
    };
    h.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.Wa() == a.Wa()
    };
    var Ph = function(a) {
        return new Lh(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds())
    };
    var Qh = function() {};
    v(Qh, Oh);
    Qh.prototype.H = function() {
        return !0
    };
    var Wea = function(a, b, c, d) {
        var e = new Qh;
        e.year = a;
        e.month = b;
        e.Ka = c;
        e.o = d;
        return Rh[d] = e
    };
    h = Qh.prototype;
    h.$a = function() {
        return this
    };
    h.Wa = function() {
        return this.o
    };
    h.Fd = function() {
        return !0
    };
    h.xo = function() {
        return xb(String(this.year), oh(this.month), oh(this.Ka))
    };
    h.equals = function(a) {
        return this === a
    };
    var Rh = {},
        Eh = function(a, b, c) {
            var d = vh(a, b, c);
            return Rh[d] || Wea(a, b, c, d)
        },
        Sh = function(a) {
            return Rh[a] || Wea((a >> 9) + 1970, a >> 5 & 15, a & 31, a)
        },
        Th = function(a) {
            return Eh(a.getUTCFullYear(), a.getUTCMonth() + 1, a.getUTCDate())
        };
    var Ch = function(a, b, c, d) {
        this.b = a = 60 * (60 * (24 * a + b) + c) + d;
        this.second = a % 60;
        a = a / 60 | 0;
        this.minute = a % 60;
        a = a / 60 | 0;
        this.hour = a % 24;
        this.Ka = a / 24 | 0
    };
    v(Ch, zh);
    var Uh = function(a) {
        return a.b / 60 | 0
    };
    Ch.prototype.Wa = function() {
        return this.o || (this.o = this.Ka + (((this.hour << 6) + this.minute << 6) + this.second + 1) * uh)
    };
    Ch.prototype.xo = function() {
        var a = this.hour || this.minute || this.second || 0,
            b = this.Ka || a,
            b = 0 > b ? -1 : 0 < b ? 1 : 0,
            c = 0 > b ? "-P" : "P";
        this.Ka && (c = this.Ka % 7 ? c + (b * this.Ka + "D") : c + (b * this.Ka / 7 + "W"));
        a ? (c += "T", this.hour && (c += b * this.hour + "H"), this.minute && (c += b * this.minute + "M"), this.second && (c += b * this.second + "S")) : b || (c += "0D");
        return c
    };
    Ch.prototype.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.Wa() == a.Wa()
    };
    var Xea = new Ch(1, 0, 0, 0);
    var Vh = function() {};
    v(Vh, zh);
    h = Vh.prototype;
    h.year = 0;
    h.month = 0;
    h.Ka = 0;
    h.hour = 0;
    h.minute = 0;
    h.second = 0;
    h.Wa = function() {
        var a = this.lc();
        isNaN(this.hour) || (a += (((this.hour << 6) + this.minute << 6) + this.second + 1) * uh);
        return a
    };
    h.lc = function() {
        Wh(this);
        return vh(this.year, this.month, this.Ka)
    };
    var Xh = function(a, b) {
            a.Ka += b.Ka;
            a.hour += b.hour;
            a.minute += b.minute;
            a.second += b.second
        },
        Wh = function(a) {
            if (a.hour || a.minute || a.second) {
                var b = 60 * (60 * a.hour + a.minute) + a.second,
                    c = Math.floor(b / 86400),
                    b = b - 86400 * c;
                a.Ka += c;
                a.second = b % 60;
                b /= 60;
                a.minute = (b | 0) % 60;
                a.hour = (b / 60 | 0) % 24
            }
            Yh(a);
            for (b = rh(a.year, a.month); 1 > a.Ka;) --a.month, Yh(a), b = rh(a.year, a.month), a.Ka += b;
            for (; a.Ka > b;) a.Ka -= b, a.month += 1, Yh(a), b = rh(a.year, a.month)
        },
        Yh = function(a) {
            var b;
            if (1 > a.month || 12 < a.month) b = Math.floor((a.month - 1) / 12), a.month -= 12 *
                b, a.year += b
        };
    h = Vh.prototype;
    h.$a = function() {
        Wh(this);
        return Eh(this.year, this.month, this.Ka)
    };
    h.rb = function() {
        Wh(this);
        return new Lh(this.year, this.month, this.Ka, this.hour, this.minute, this.second)
    };
    h.Zd = function() {
        Wh(this);
        return zh.prototype.Zd.call(this)
    };
    h.ah = function() {
        Wh(this);
        return zh.prototype.ah.call(this)
    };
    h.kd = function() {
        Wh(this);
        return new Mh(this.hour, this.minute, this.second)
    };
    h.rd = function() {
        Wh(this);
        return sh(this.year, this.month, this.Ka)
    };
    h.equals = function(a) {
        return !!a && this.constructor == a.constructor && this.Wa() == a.Wa()
    };
    var Ah = function(a) {
            return Zh(a.year || 0, a.month || 0, a.Ka || 0, a.hour || 0, a.minute || 0, a.second || 0)
        },
        Zh = function(a, b, c, d, e, f) {
            var g = new Vh;
            g.year = a;
            g.month = b;
            g.Ka = c;
            g.hour = d;
            g.minute = e;
            g.second = f;
            return g
        },
        Hh = function(a, b, c) {
            var d = new Vh;
            d.year = a;
            d.month = b;
            d.Ka = c;
            return d
        };
    var $h = function(a, b) {
            this.start = a;
            if (b.constructor === Ch) {
                var c = Ah(a);
                Xh(c, b);
                this.end = this.start instanceof Lh ? c.rb() : c.$a();
                this.duration = b
            } else this.end = b, this.duration = Dh(this.end, this.start)
        },
        ai = function(a, b) {
            return new $h(a, new Ch(b, 0, 0, 0))
        };
    $h.prototype.toString = function() {
        return this.start + "/" + this.end
    };
    $h.prototype.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.start.equals(a.start) && this.end.equals(a.end)
    };
    $h.prototype.Tp = function(a) {
        return new $h(this.start.min(a.start), this.end.max(a.end))
    };
    $h.prototype.contains = function(a) {
        a = a.Wa();
        return a >= this.start.Wa() && a < this.end.Wa()
    };
    var bi = function(a, b) {
            return 10 * a.charCodeAt(b) + a.charCodeAt(b + 1) - 528
        },
        di = function(a) {
            var b = parseInt(a, 10),
                c = b % 100,
                b = b / 100,
                d = (b | 0) % 100,
                b = b / 100 | 0;
            return 8 == a.length ? Eh(b, d, c) : new Lh(b, d, c, bi(a, 9), bi(a, 11), bi(a, 13))
        };
    var ei = function(a, b, c) {
        this.year = a;
        this.month = b;
        this.Ka = c
    };
    v(ei, Oh);
    zh.prototype.Zd = function() {
        return new ei(this.year, this.month, this.Ka)
    };
    h = ei.prototype;
    h.Zd = function() {
        return this
    };
    h.Fd = function() {
        return !!(this.year && this.month && this.Ka)
    };
    h.Wa = function() {
        void 0 === this.o && (this.o = this.Fd() ? vh(this.year, this.month, this.Ka) : NaN);
        return this.o
    };
    h.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.toString() == a.toString()
    };
    h.xo = function() {
        return xb(Qea(this.year), ph(this.month), ph(this.Ka))
    };
    var fi = function(a, b, c, d, e, f) {
        this.year = a;
        this.month = b;
        this.Ka = c;
        this.hour = d;
        this.minute = e;
        this.second = f
    };
    v(fi, Oh);
    fi.prototype.Zd = function() {
        return new ei(this.year, this.month, this.Ka)
    };
    zh.prototype.ah = function() {
        return new fi(this.year, this.month, this.Ka, this.hour, this.minute, this.second)
    };
    h = fi.prototype;
    h.ah = function() {
        return this
    };
    h.Fd = function() {
        return !!(this.year && this.month && this.Ka) && !(isNaN(this.hour) || isNaN(this.minute) || isNaN(this.second))
    };
    h.Wa = function() {
        void 0 === this.o && (this.o = this.Fd() ? ((this.year - 1970 << 4) + this.month << 5) + this.Ka + (((this.hour << 6) + this.minute << 6) + this.second + 1) * uh : NaN);
        return this.o
    };
    h.equals = function(a) {
        return !!a && this.constructor === a.constructor && this.toString() == a.toString()
    };
    h.xo = function() {
        return xb(Qea(this.year), ph(this.month), ph(this.Ka), "T", ph(this.hour), ph(this.minute), ph(this.second))
    };
    var gi = function() {
        J.call(this)
    };
    v(gi, J);
    var Yea = function() {
        J.call(this)
    };
    v(Yea, gi);
    var ii = function(a, b, c) {
        J.call(this);
        this.H = a;
        this.S = b || Infinity;
        this.R = c;
        this.T = this.Rf(t() + hi);
        this.b = this.vl();
        this.o = 0;
        this.Ow()
    };
    v(ii, gi);
    var hi = 0;
    h = ii.prototype;
    h.ly = function() {
        return this.T
    };
    h.Rf = function(a) {
        var b = this.H;
        void 0 === b ? b = -6E4 * (new Date(a)).getTimezoneOffset() : a >= this.S && (b = this.R);
        return b
    };
    h.su = function() {
        var a = t() + hi;
        return this.Rf(a) + a
    };
    h.vl = function() {
        return new Date(this.su())
    };
    h.Sp = function() {
        this.b.getUTCDate() != this.vl().getUTCDate() && (window.clearTimeout(this.o), this.Ow());
        return this.b
    };
    h.Ow = function() {
        var a = this.b,
            b = this.vl(),
            c = 18E5 - b.getTime() % 18E5;
        this.o = window.setTimeout(p(this.Ow, this), c);
        a.getUTCDate() !== b.getUTCDate() && (this.b = this.vl(), this.ya("newday"))
    };
    var ji = function(a, b, c) {
        J.call(this);
        this.b = new ii(a, b, c);
        this.b.oe(this)
    };
    v(ji, Yea);
    h = ji.prototype;
    h.ly = function() {
        return this.b.ly()
    };
    h.Rf = function(a) {
        return this.b.Rf(a)
    };
    h.su = function() {
        return this.b.su()
    };
    h.vl = function() {
        return this.b.vl()
    };
    h.Sp = function() {
        return this.b.Sp()
    };
    var ki = function(a) {
            return Th(a.Sp())
        },
        li = function(a) {
            return Ph(a.vl())
        };
    var Zea = function(a, b, c) {
        ji.call(this, a, b, c)
    };
    v(Zea, ji);
    var mi = function(a) {
        return Fg(a, 1)
    };
    var $ea = {
            kM: "BUTTER_BAR_EVENT_TITLE",
            lM: "BUTTER_BAR_UNDO_LINK",
            rca: "CREATE_BUBBLE_TAB_APPOINTMENT_SLOT",
            sca: "CREATE_BUBBLE_TAB_EVENT",
            tca: "CREATE_BUBBLE_TAB_REMINDER",
            uca: "CREATE_BUBBLE_TAB_TASK",
            LM: "CREATE_BUBBLE_APPOINTMENT_FIRST_TIME_LINK",
            QM: "CREATE_BUBBLE_APPOINTMENT_SLOT_EDIT_BUTTON",
            NM: "CREATE_BUBBLE_APPOINTMENT_SLOT_CREATE_BUTTON",
            RM: "CREATE_BUBBLE_APPOINTMENT_SLOT_TITLE_TEXT_BOX",
            UM: "CREATE_BUBBLE_EVENT_CALENDAR_SELECT",
            VM: "CREATE_BUBBLE_EVENT_CREATE_BUTTON",
            WM: "CREATE_BUBBLE_EVENT_EDIT_BUTTON",
            XM: "CREATE_BUBBLE_EVENT_TITLE_TEXT_BOX",
            oQ: "VIEW_BUBBLE_DELETE_BUTTON",
            pQ: "VIEW_BUBBLE_DISCARD_BUTTON",
            qQ: "VIEW_BUBBLE_SAVE_BUTTON",
            rO: "MENUBUTTON",
            sO: "MENUBUTTON_OPTION",
            tO: "MENUBUTTON_OPTION_CAPTION",
            uO: "MENUBUTTON_OPTION_LIST",
            vO: "MENUBUTTON_OPTION_MENU",
            zQ: "WIZ_PRINCIPAL",
            DN: "EVENT_PAGE_GUEST_CHIP",
            EN: "EVENT_PAGE_GUEST_CHIP_REMOVE_LINK"
        },
        _dbmode = !1,
        afa = {
            fastui: ["FASTUI"],
            vr: ["VR"]
        };
    var ni = function(a) {
        return Hg(a, 11) ? Fg(a, 11) : null
    };
    var oi = function(a, b) {
        J.call(this);
        this.b = a;
        this.jc = this.o = b
    };
    v(oi, J);
    var pi = function(a) {
            return Fg(a, 10)
        },
        qi = function(a) {
            return pi(a).Ob()
        },
        ri = function() {
            return ca._ol_enabled && Yd && Bd(10)
        };
    oi.prototype.register = function(a) {
        Ig(a, 10, this)
    };
    oi.prototype.Ob = function() {
        return "disconnected" != bfa(this)
    };
    var bfa = function(a) {
        var b = ni(a.b);
        return b && b.isEnabled() ? a.jc : a.o
    };
    var si = function() {
        x.call(this)
    };
    v(si, x);
    si.prototype.init = function() {
        this.b = []
    };
    var dfa = function(a) {
            var b = ti;
            b.o = a;
            cfa(b)
        },
        ui = function(a, b) {
            var c = ti;
            c.isDisposed() || b instanceof Af || (c.o ? efa(c.o, b, a) : c.b && 10 > c.b.length && c.b.push([a, b]))
        },
        cfa = function(a) {
            a.b && (C(a.b, function(a) {
                efa(this.o, a[1], a[0])
            }, a), a.b = null)
        },
        ti = new si,
        ffa = function(a) {
            ui(null, a)
        };
    var vi = function(a, b) {
        J.call(this);
        this.o = a || 1;
        this.b = b || ca;
        this.H = p(this.B8, this);
        this.R = t()
    };
    v(vi, J);
    h = vi.prototype;
    h.enabled = !1;
    h.Cb = null;
    h.setInterval = function(a) {
        this.o = a;
        this.Cb && this.enabled ? (this.stop(), this.start()) : this.Cb && this.stop()
    };
    h.B8 = function() {
        if (this.enabled) {
            var a = t() - this.R;
            0 < a && a < .8 * this.o ? this.Cb = this.b.setTimeout(this.H, this.o - a) : (this.Cb && (this.b.clearTimeout(this.Cb), this.Cb = null), this.ya("tick"), this.enabled && (this.Cb = this.b.setTimeout(this.H, this.o), this.R = t()))
        }
    };
    h.start = function() {
        this.enabled = !0;
        this.Cb || (this.Cb = this.b.setTimeout(this.H, this.o), this.R = t())
    };
    h.stop = function() {
        this.enabled = !1;
        this.Cb && (this.b.clearTimeout(this.Cb), this.Cb = null)
    };
    h.wa = function() {
        vi.qa.wa.call(this);
        this.stop();
        delete this.b
    };
    var wi = function(a, b, c) {
            if (ra(a)) c && (a = p(a, c));
            else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);
            else throw Error("F");
            return 2147483647 < Number(b) ? -1 : ca.setTimeout(a, b || 0)
        },
        xi = function(a) {
            ca.clearTimeout(a)
        };
    var yi = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,
        zi = function(a) {
            return a ? decodeURI(a) : a
        },
        gfa = function(a, b) {
            if (a)
                for (var c = a.split("&"), d = 0; d < c.length; d++) {
                    var e = c[d].indexOf("="),
                        f, g = null;
                    0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
                    b(f, g ? rb(g) : "")
                }
        },
        Ai = function(a) {
            if (a[1]) {
                var b = a[0],
                    c = b.indexOf("#");
                0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
                c = b.indexOf("?");
                0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0)
            }
            return a.join("")
        },
        Bi = function(a, b, c) {
            if (na(b))
                for (var d = 0; d < b.length; d++) Bi(a, String(b[d]), c);
            else null != b && c.push("&", a, "" === b ? "" : "=", qb(b))
        },
        Ci = function(a, b, c) {
            for (c = c || 0; c < b.length; c += 2) Bi(b[c], b[c + 1], a);
            return a
        },
        Di = function(a) {
            a = Ci([], a, void 0);
            a[0] = "";
            return a.join("")
        },
        hfa = function(a, b) {
            for (var c in b) Bi(c, b[c], a);
            return a
        },
        ifa = function(a, b) {
            return Ai(2 == arguments.length ? Ci([a], arguments[1], 0) : Ci([a], arguments, 1))
        };
    var Ei = function() {};
    Ei.prototype.o = null;
    var jfa = function(a) {
        return a.o || (a.o = a.R())
    };
    var Mi, Ni = function() {};
    v(Ni, Ei);
    Ni.prototype.b = function() {
        var a = kfa(this);
        return a ? new ActiveXObject(a) : new XMLHttpRequest
    };
    Ni.prototype.R = function() {
        var a = {};
        kfa(this) && (a[0] = !0, a[1] = !0);
        return a
    };
    var kfa = function(a) {
        if (!a.H && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d), a.H = d
                } catch (e) {}
            }
            throw Error("G");
        }
        return a.H
    };
    Mi = new Ni;
    var Oi = function(a) {
        J.call(this);
        this.headers = new Qd;
        this.ua = a || null;
        this.o = !1;
        this.ta = this.b = null;
        this.U = "";
        this.T = 0;
        this.R = this.Ra = this.Ca = this.Ba = !1;
        this.H = 0;
        this.ma = null;
        this.V = "";
        this.La = this.S = !1
    };
    v(Oi, J);
    var lfa = /^https?$/i,
        mfa = ["POST", "PUT"],
        nfa = [],
        Pi = function(a, b, c, d, e, f, g) {
            var k = new Oi;
            nfa.push(k);
            b && k.nt("complete", b);
            k.ty("ready", k.Qa);
            f && (k.H = Math.max(0, f));
            g && (k.S = g);
            k.send(a, c, d, e)
        };
    Oi.prototype.Qa = function() {
        this.Oa();
        cc(nfa, this)
    };
    Oi.prototype.nG = function() {
        return this.V
    };
    Oi.prototype.rG = function() {
        return this.S
    };
    Oi.prototype.send = function(a, b, c, d) {
        if (this.b) throw Error("H`" + this.U + "`" + a);
        b = b ? b.toUpperCase() : "GET";
        this.U = a;
        this.T = 0;
        this.Ba = !1;
        this.o = !0;
        this.b = this.ua ? this.ua.b() : Mi.b();
        this.ta = this.ua ? jfa(this.ua) : jfa(Mi);
        this.b.onreadystatechange = p(this.Na, this);
        try {
            this.Ra = !0, this.b.open(b, String(a), !0), this.Ra = !1
        } catch (f) {
            ofa(this);
            return
        }
        a = c || "";
        var e = this.headers.clone();
        d && cd(d, function(a, b) {
            e.set(b, a)
        });
        d = Yb(e.mc(), pfa);
        c = ca.FormData && a instanceof ca.FormData;
        !Zb(mfa, b) || d || c || e.set("Content-Type",
            "application/x-www-form-urlencoded;charset=utf-8");
        e.forEach(function(a, b) {
            this.b.setRequestHeader(b, a)
        }, this);
        this.V && (this.b.responseType = this.V);
        "withCredentials" in this.b && this.b.withCredentials !== this.S && (this.b.withCredentials = this.S);
        try {
            qfa(this), 0 < this.H && ((this.La = rfa(this.b)) ? (this.b.timeout = this.H, this.b.ontimeout = p(this.wm, this)) : this.ma = wi(this.wm, this.H, this)), this.Ca = !0, this.b.send(a), this.Ca = !1
        } catch (f) {
            ofa(this)
        }
    };
    var rfa = function(a) {
            return E && Bd(9) && qa(a.timeout) && n(a.ontimeout)
        },
        pfa = function(a) {
            return "content-type" == a.toLowerCase()
        };
    Oi.prototype.wm = function() {
        "undefined" != typeof ba && this.b && (this.T = 8, this.ya("timeout"), this.abort(8))
    };
    var ofa = function(a) {
            a.o = !1;
            a.b && (a.R = !0, a.b.abort(), a.R = !1);
            a.T = 5;
            sfa(a);
            Qi(a)
        },
        sfa = function(a) {
            a.Ba || (a.Ba = !0, a.ya("complete"), a.ya("error"))
        };
    Oi.prototype.abort = function(a) {
        this.b && this.o && (this.o = !1, this.R = !0, this.b.abort(), this.R = !1, this.T = a || 7, this.ya("complete"), this.ya("abort"), Qi(this))
    };
    Oi.prototype.wa = function() {
        this.b && (this.o && (this.o = !1, this.R = !0, this.b.abort(), this.R = !1), Qi(this, !0));
        Oi.qa.wa.call(this)
    };
    Oi.prototype.Na = function() {
        this.isDisposed() || (this.Ra || this.Ca || this.R ? tfa(this) : this.Ja())
    };
    Oi.prototype.Ja = function() {
        tfa(this)
    };
    var tfa = function(a) {
            if (a.o && "undefined" != typeof ba && (!a.ta[1] || 4 != (a.b ? a.b.readyState : 0) || 2 != a.getStatus()))
                if (a.Ca && 4 == (a.b ? a.b.readyState : 0)) wi(a.Na, 0, a);
                else if (a.ya("readystatechange"), a.Fd()) {
                a.o = !1;
                try {
                    a.Gd() ? (a.ya("complete"), a.ya("success")) : (a.T = 6, a.getStatus(), sfa(a))
                } finally {
                    Qi(a)
                }
            }
        },
        Qi = function(a, b) {
            if (a.b) {
                qfa(a);
                var c = a.b,
                    d = a.ta[0] ? ia : null;
                a.b = null;
                a.ta = null;
                b || a.ya("ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {}
            }
        },
        qfa = function(a) {
            a.b && a.La && (a.b.ontimeout = null);
            qa(a.ma) && (xi(a.ma), a.ma =
                null)
        };
    h = Oi.prototype;
    h.Ed = function() {
        return !!this.b
    };
    h.Fd = function() {
        return 4 == (this.b ? this.b.readyState : 0)
    };
    h.Gd = function() {
        var a = this.getStatus(),
            b;
        a: switch (a) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                b = !0;
                break a;
            default:
                b = !1
        }
        if (!b) {
            if (a = 0 === a) a = String(this.U).match(yi)[1] || null, !a && ca.self && ca.self.location && (a = ca.self.location.protocol, a = a.substr(0, a.length - 1)), a = !lfa.test(a ? a.toLowerCase() : "");
            b = a
        }
        return b
    };
    h.getStatus = function() {
        try {
            return 2 < (this.b ? this.b.readyState : 0) ? this.b.status : -1
        } catch (a) {
            return -1
        }
    };
    h.wl = function() {
        try {
            return this.b ? this.b.responseText : ""
        } catch (a) {
            return ""
        }
    };
    h.Pp = function(a) {
        if (this.b) {
            var b = this.b.responseText;
            a && 0 == b.indexOf(a) && (b = b.substring(a.length));
            return Pa(b)
        }
    };
    var Ri = function(a, b) {
        return a.b && a.Fd() ? a.b.getResponseHeader(b) : void 0
    };
    Oi.prototype.$s = function() {
        return this.T
    };
    tc(function(a) {
        Oi.prototype.Ja = a(Oi.prototype.Ja)
    });
    var ufa = function() {
            this.o = [];
            this.b = []
        },
        Si = function(a) {
            $b(a.o) && (a.o = a.b, a.o.reverse(), a.b = []);
            return a.o.pop()
        };
    h = ufa.prototype;
    h.$b = function() {
        return this.o.length + this.b.length
    };
    h.isEmpty = function() {
        return $b(this.o) && $b(this.b)
    };
    h.clear = function() {
        this.o = [];
        this.b = []
    };
    h.contains = function(a) {
        return Zb(this.o, a) || Zb(this.b, a)
    };
    h.remove = function(a) {
        var b;
        b = this.o;
        var c = oba(b, a);
        0 <= c ? (bc(b, c), b = !0) : b = !1;
        return b || cc(this.b, a)
    };
    h.dc = function() {
        for (var a = [], b = this.o.length - 1; 0 <= b; --b) a.push(this.o[b]);
        for (var c = this.b.length, b = 0; b < c; ++b) a.push(this.b[b]);
        return a
    };
    var Ti = function(a, b) {
        x.call(this);
        this.V = a || 0;
        this.H = b || 10;
        if (this.V > this.H) throw Error("I");
        this.b = new ufa;
        this.o = new Ke;
        this.jp = 0;
        this.S = null;
        this.Ur()
    };
    v(Ti, x);
    Ti.prototype.bt = function() {
        var a = t();
        if (!(null != this.S && a - this.S < this.jp)) {
            for (var b; 0 < this.b.$b() && (b = Si(this.b), !this.Pz(b));) this.Ur();
            !b && this.$b() < this.H && (b = this.T());
            b && (this.S = a, this.o.add(b));
            return b
        }
    };
    Ti.prototype.Qo = function(a) {
        this.o.remove(a);
        this.Pz(a) && this.$b() < this.H ? this.b.b.push(a) : Ui(a)
    };
    Ti.prototype.Ur = function() {
        for (var a = this.b; this.$b() < this.V;) {
            var b = this.T();
            a.b.push(b)
        }
        for (; this.$b() > this.H && 0 < this.b.$b();) Ui(Si(a))
    };
    Ti.prototype.T = function() {
        return {}
    };
    var Ui = function(a) {
        if ("function" == typeof a.Oa) a.Oa();
        else
            for (var b in a) a[b] = null
    };
    h = Ti.prototype;
    h.Pz = function(a) {
        return "function" == typeof a.UR ? a.UR() : !0
    };
    h.contains = function(a) {
        return this.b.contains(a) || this.o.contains(a)
    };
    h.$b = function() {
        return this.b.$b() + this.o.$b()
    };
    h.isEmpty = function() {
        return this.b.isEmpty() && this.o.isEmpty()
    };
    h.wa = function() {
        Ti.qa.wa.call(this);
        if (0 < this.o.$b()) throw Error("J");
        delete this.o;
        for (var a = this.b; !a.isEmpty();) Ui(Si(a));
        delete this.b
    };
    var Vi = function(a, b) {
        this.b = a;
        this.o = b
    };
    Vi.prototype.getKey = function() {
        return this.b
    };
    Vi.prototype.hb = function() {
        return this.o
    };
    Vi.prototype.clone = function() {
        return new Vi(this.b, this.o)
    };
    var Wi = function(a) {
        this.b = [];
        if (a) a: {
            var b;
            if (a instanceof Wi) {
                if (b = a.mc(), a = a.dc(), 0 >= this.$b()) {
                    for (var c = this.b, d = 0; d < b.length; d++) c.push(new Vi(b[d], a[d]));
                    break a
                }
            } else b = Za(a),
            a = Ya(a);
            for (d = 0; d < b.length; d++) this.insert(b[d], a[d])
        }
    };
    h = Wi.prototype;
    h.insert = function(a, b) {
        var c = this.b;
        c.push(new Vi(a, b));
        for (var c = c.length - 1, d = this.b, e = d[c]; 0 < c;) {
            var f = c - 1 >> 1;
            if (d[f].getKey() > e.getKey()) d[c] = d[f], c = f;
            else break
        }
        d[c] = e
    };
    h.remove = function() {
        var a = this.b,
            b = a.length,
            c = a[0];
        if (!(0 >= b)) {
            if (1 == b) ac(a);
            else {
                a[0] = a.pop();
                for (var a = 0, b = this.b, d = b.length, e = b[a]; a < d >> 1;) {
                    var f = 2 * a + 1,
                        g = 2 * a + 2,
                        f = g < d && b[g].getKey() < b[f].getKey() ? g : f;
                    if (b[f].getKey() > e.getKey()) break;
                    b[a] = b[f];
                    a = f
                }
                b[a] = e
            }
            return c.hb()
        }
    };
    h.dc = function() {
        for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].hb());
        return b
    };
    h.mc = function() {
        for (var a = this.b, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].getKey());
        return b
    };
    h.Kh = function(a) {
        return Ub(this.b, function(b) {
            return b.hb() == a
        })
    };
    h.clone = function() {
        return new Wi(this)
    };
    h.$b = function() {
        return this.b.length
    };
    h.isEmpty = function() {
        return $b(this.b)
    };
    h.clear = function() {
        ac(this.b)
    };
    var vfa = function() {
        Wi.call(this)
    };
    v(vfa, Wi);
    var Xi = function(a, b) {
        this.U = void 0;
        this.R = new vfa;
        Ti.call(this, a, b)
    };
    v(Xi, Ti);
    h = Xi.prototype;
    h.bt = function(a, b) {
        if (!a) {
            var c = Xi.qa.bt.call(this);
            c && this.jp && (this.U = ca.setTimeout(p(this.Jt, this), this.jp));
            return c
        }
        this.R.insert(n(b) ? b : 100, a);
        this.Jt()
    };
    h.Jt = function() {
        for (var a = this.R; 0 < a.$b();) {
            var b = this.bt();
            if (b) a.remove().apply(this, [b]);
            else break
        }
    };
    h.Qo = function(a) {
        Xi.qa.Qo.call(this, a);
        this.Jt()
    };
    h.Ur = function() {
        Xi.qa.Ur.call(this);
        this.Jt()
    };
    h.wa = function() {
        Xi.qa.wa.call(this);
        ca.clearTimeout(this.U);
        this.R.clear();
        this.R = null
    };
    var Yi = function(a, b, c, d) {
        this.ma = a;
        this.Ca = !!d;
        Xi.call(this, b, c)
    };
    v(Yi, Xi);
    Yi.prototype.T = function() {
        var a = new Oi,
            b = this.ma;
        b && b.forEach(function(b, d) {
            a.headers.set(d, b)
        });
        this.Ca && (a.S = !0);
        return a
    };
    Yi.prototype.Pz = function(a) {
        return !a.isDisposed() && !a.Ed()
    };
    var Zi = function(a, b, c, d, e, f) {
        J.call(this);
        this.R = n(a) ? a : 1;
        this.H = n(e) ? Math.max(0, e) : 0;
        this.T = !!f;
        this.o = new Yi(b, c, d, f);
        this.b = new Qd;
        this.Ha = new I(this)
    };
    v(Zi, J);
    var $i = "ready complete success error abort timeout".split(" ");
    Zi.prototype.send = function(a, b, c, d, e, f, g, k, l, m) {
        if (this.b.get(a)) throw Error("K");
        b = new wfa(b, p(this.S, this, a), c, d, e, g, n(k) ? k : this.R, l, n(m) ? m : this.T);
        this.b.set(a, b);
        a = p(this.U, this, a);
        this.o.bt(a, f);
        return b
    };
    Zi.prototype.abort = function(a, b) {
        var c = this.b.get(a);
        if (c) {
            var d = c.Go;
            c.IC = !0;
            b && (d && (this.Ha.b(d, $i, c.DB), af(d, "ready", function() {
                var a = this.o;
                a.o.remove(d) && a.Qo(d)
            }, !1, this)), this.b.remove(a));
            d && d.abort()
        }
    };
    Zi.prototype.U = function(a, b) {
        var c = this.b.get(a);
        c && !c.Go ? (this.Ha.ka(b, $i, c.DB), b.H = Math.max(0, this.H), b.V = c.nG(), b.S = c.rG(), c.Go = b, this.ya(new aj("ready", this, a, b)), xfa(this, a, b), c.IC && b.abort()) : (c = this.o, c.o.remove(b) && c.Qo(b))
    };
    Zi.prototype.S = function(a, b) {
        var c = b.target;
        switch (b.type) {
            case "ready":
                xfa(this, a, c);
                break;
            case "complete":
                a: {
                    var d = this.b.get(a);
                    if (7 == c.$s() || c.Gd() || d.ds > d.wy)
                        if (this.ya(new aj("complete", this, a, c)), d && (d.lo(!0), d.PD)) {
                            c = d.PD.call(c, b);
                            break a
                        }
                    c = null
                }
                return c;
            case "success":
                this.ya(new aj("success", this, a, c));
                break;
            case "timeout":
            case "error":
                d = this.b.get(a);
                d.ds > d.wy && this.ya(new aj("error", this, a, c));
                break;
            case "abort":
                this.ya(new aj("abort", this, a, c))
        }
        return null
    };
    var xfa = function(a, b, c) {
        var d = a.b.get(b);
        !d || d.QD || d.ds > d.wy ? (d && (a.Ha.b(c, $i, d.DB), a.b.remove(b)), a = a.o, a.o.remove(c) && a.Qo(c)) : (d.ds++, c.send(d.getUrl(), d.Uc(), d.getContent(), d.RG))
    };
    Zi.prototype.wa = function() {
        Zi.qa.wa.call(this);
        this.o.Oa();
        this.o = null;
        this.Ha.Oa();
        this.Ha = null;
        this.b.clear();
        this.b = null
    };
    var aj = function(a, b, c, d) {
        D.call(this, a, b);
        this.id = c;
        this.Go = d
    };
    v(aj, D);
    var wfa = function(a, b, c, d, e, f, g, k, l) {
        this.R = a;
        this.o = c || "GET";
        this.b = d;
        this.RG = e || null;
        this.wy = n(g) ? g : 1;
        this.ds = 0;
        this.IC = this.QD = !1;
        this.DB = b;
        this.PD = f;
        this.H = k || "";
        this.T = !!l;
        this.Go = null
    };
    h = wfa.prototype;
    h.getUrl = function() {
        return this.R
    };
    h.Uc = function() {
        return this.o
    };
    h.getContent = function() {
        return this.b
    };
    h.rG = function() {
        return this.T
    };
    h.lo = function(a) {
        this.QD = a
    };
    h.nG = function() {
        return this.H
    };
    var bj = function() {};
    la(bj);
    bj.prototype.b = 0;
    var cj = function(a) {
        return ":" + (a.b++).toString(36)
    };
    ia.get = function(a) {
        return Fg(a, 17)
    };
    var yfa = /\s*;\s*/,
        dj = function(a) {
            a: {
                for (var b = document.cookie.split(yfa), c = a.length, d = 0, e = b.length; d < e; ++d) {
                    var f = b[d];
                    if (!(f.length <= c || "=" != f.charAt(c)) && f.substring(0, c) === a) {
                        a = f.substring(c + 1);
                        break a
                    }
                }
                a = null
            }
            return a && unescape(a)
        },
        zfa = /([\u200e\u200f]*)<\/?\w[^>]*>\1/g;
    var ej = function(a) {
            Afa(a, "CALERR");
            Afa(a, "CALERR2")
        },
        Afa = function(a, b) {
            for (var c = dj(b) || "", c = 0 == c.length ? [] : c.split("&"), d = !1, e = 0; e < c.length; ++e) {
                var f = c[e],
                    g = f.indexOf("=");
                if (0 <= g && f.substring(0, g) == a) {
                    d = !0;
                    c[e] = a + "=" + (1 + parseInt(f.substring(g + 1), 10) || 1);
                    break
                }
            }
            d || c.push(a + "=1");
            c = c.join("&");
            d = new Date(t() + 864E5);
            e = ["/calendar/"];
            if (/\/$/.test(e[0]) && d instanceof Date && 2E3 > d.getFullYear())
                for (f = e[0]; f = f.replace(/([^\/]+|\/)$/, "");) e.push(f);
            for (g = 0; g < e.length; ++g) {
                var f = e[g],
                    k = [];
                k.push(b + "=" + c);
                k.push("path=" + f);
                d instanceof Date && k.push("expires=" + d.toUTCString());
                document.cookie = k.join("; ")
            }
        };
    da("_incClientErr", ej, void 0);
    var fj = /^\s*(while\s*\(\s*1\s*\)\s*;|\)\]\}\'\s*\n)/;
    var gj = function(a, b, c) {
        J.call(this);
        this.Ja = a;
        this.ua = c || new Zi;
        this.T = b;
        this.b = {};
        this.o = {};
        this.R = !0;
        this.U = ia
    };
    v(gj, J);
    var hj = function(a) {
            return Fg(a, 6)
        },
        Cfa = function(a, b, c, d, e, f, g, k, l, m) {
            var r = l || 0,
                u = b;
            if (bb(a.b)) try {
                a.ya("c")
            } catch (w) {}
            l = cj(bj.va());
            g = g || {};
            g["X-If-No-Redirect"] = 1;
            g["X-Is-Xhr-Request"] = 1;
            k = k || "POST";
            c = Bfa(a, b, c, k);
            b = c.url;
            c = c.content ? c.content : void 0;
            a.R ? (c = c && Di(c), a.b[l] = a.ua.send(l, b, k, c, g, void 0, p(a.La, a, l, d, e, f || a.U, r, m))) : a.o[u] && (a = p(a.Na, a, b, c, e, f || a.U), ca.setTimeout(a, 0));
            return l
        },
        Bfa = function(a, b, c, d) {
            if (a.T)
                if ("GET" == d)(a = dj(a.T.b)) ? (b = [b, "&", "secid"], null != a && b.push("=", qb(a)), a = Ai(b)) :
                    a = b, b = a;
                else {
                    c = c || [];
                    if (a = dj(a.T.b)) c = c || [], c.push("secid", a);
                    c = c || null
                }
            return {
                url: b,
                content: c || null
            }
        };
    gj.prototype.send = function(a, b, c, d, e, f, g, k) {
        return Cfa(this, a, b, c, d, e, f, g, k)
    };
    var ij = function(a, b, c, d, e, f, g) {
        Cfa(a, b, c, d, e, f, void 0, void 0, 2, g)
    };
    gj.prototype.La = function(a, b, c, d, e, f, g) {
        try {
            var k = g.target;
            this.ya(new Dfa(k));
            if (this.ta && this.ta.o(k)) d();
            else if (k.Gd()) {
                var l = k.wl().replace(fj, "");
                0 == e ? l = Qa(l) : 2 == e && (f && f(), ia.get(this.Ja).b(l));
                c(l)
            } else if (412 == k.getStatus()) {
                var m = Ri(k, "X-Redirect-Location");
                if (m) {
                    var r = this.b[a];
                    this.send(m, r.getContent(), b, c, d, r.RG, r.Uc())
                }
            } else {
                var u = k.getStatus();
                100 > u || 600 <= u || ej(b);
                d()
            }
        } catch (w) {
            ui(null, w)
        } finally {
            delete this.b[a], this.ya("d"), bb(this.b) && this.ya("e")
        }
    };
    gj.prototype.abort = function(a, b) {
        this.ua.abort(a, b);
        b && (delete this.b[a], this.ya("d"), bb(this.b) && this.ya("e"))
    };
    gj.prototype.Na = function(a, b, c, d) {
        this.o[a](b, c, d)
    };
    var Efa = function(a, b) {
            a.R = b
        },
        Dfa = function(a) {
            D.call(this, "f");
            this.o = a
        };
    v(Dfa, D);
    var Ffa = function(a, b) {
        this.b = a;
        this.sj = b
    };
    Ffa.prototype.getId = function() {
        return this.b
    };
    var jj = function(a, b) {
            for (var c = a.sj.length - 2; 0 < c; c -= 2)
                if (b >= a.sj[c]) return a.sj[c + 1];
            return a.sj[0]
        },
        Gfa = {},
        lj = function(a) {
            for (var b = {}, c = !0, d = [], e = 0; e < a.length; ++e) {
                var f = a[e],
                    g = Gfa[f];
                g ? b[f] = g : (c = !1, d.push("ctz", f))
            }
            c || hj(M()).send("dispTzOffset", d, 0, function(a) {
                a = new ah(a);
                C(Sg(a, 1), kj)
            });
            return b
        },
        kj = function(a) {
            a = a.split("{");
            for (var b = a[0], c = [], d = 1; d < a.length; d++) c.push(parseInt(a[d], 36));
            1 == c.length % 2 && (Gfa[b] = new Ffa(b, c))
        },
        mj = function(a, b, c) {
            if (b == c) return 0;
            var d = lj([b, c]);
            b = d[b];
            c = d[c];
            return b && c ? jj(b, a) - jj(c, a) : null
        };
    var Hfa = function() {};
    var Ifa = new Nb("pVbxBc"),
        Jfa = new Nb("n73qwf"),
        nj = new Nb("MpJwZc"),
        Kfa = new Nb("UUJqVe");
    var oj = new Nb("a"),
        pj = new Nb("b"),
        qj = new Nb("d"),
        rj = new Nb("e"),
        sj = new Nb("f"),
        tj = new Nb("g"),
        uj = new Nb("h"),
        vj = new Nb("i"),
        wj = new Nb("j"),
        xj = new Nb("k"),
        yj = new Nb("l"),
        Lfa = new Nb("m"),
        zj = new Nb("n"),
        Aj = new Nb("o"),
        Bj = new Nb("p"),
        Cj = new Nb("q");
    var Dj = function(a) {
            this.o = a;
            this.ua = new J;
            this.R = {};
            this.U = {};
            this.T = !1
        },
        Mfa = ["di"],
        Ej = function(a, b, c, d) {
            a.U[b] = c;
            d && (a.R[b] = d)
        },
        Fj = function(a, b) {
            if (b) {
                pa(b[0]) && (b = [b]);
                for (var c = 0; c < b.length; ++c) {
                    var d = b[c],
                        e = d[0],
                        f = d.slice(1);
                    a.ta(e, f) || (d = a, Hg(d.o, 811) || (d.T || Zb(Mfa, e), Gg(d.o, 811).addCallback(p(d.ta, d, e, f))))
                }
                a.ua.ya("g")
            }
        };
    Dj.prototype.b = function(a) {
        var b = !1;
        kb(a, "(") && (b = !0);
        var c = eval(a);
        c instanceof Array && c.length ? Fj(this, c) : !a || c instanceof Array || (b = !0);
        b && (a = "Dispatch eval used for: " + a.substr(0, 30), ui(a, Error(a)), K(this.o, uj).tb("dispatch_legacy_eval_non_array"))
    };
    var Nfa = function(a) {
        a.T = !0;
        Gg(a.o, 811)
    };
    Dj.prototype.ta = function(a, b) {
        var c = this.U[a];
        if (c) {
            var d = this.R[a];
            d && d(b);
            try {
                return c.apply(null, b), !0
            } catch (e) {
                ui("M`" + a, e)
            }
        } else c = Error("N`" + a), ui(c.message, c);
        return !1
    };
    var Ofa = function() {};
    Ofa.prototype.get = function(a, b) {
        var c = a.charAt(b);
        return "1" == c ? !0 : "0" == c ? !1 : void 0
    };
    var Gj = function() {
        J.call(this);
        this.T = new Ofa
    };
    v(Gj, J);
    var Hj = function(a) {
        return a.getString("customCalMode", "custom,4")
    };
    Gj.prototype.Ys = function(a) {
        return hh(this, a + "/color", 0)
    };
    Gj.prototype.getString = function(a, b) {
        var c = this.get(a);
        return n(c) ? c : b
    };
    var hh = function(a, b, c) {
            a = a.get(b);
            return n(a) ? parseFloat(a) : pa(c) ? parseFloat(c) : c
        },
        Mj = function(a, b, c) {
            a = a.get(b);
            return n(a) ? "true" == a : pa(c) ? "true" == c : c
        },
        Nj = function(a, b, c) {
            var d = a.getString("bool", "");
            a = a.T.get(d, b);
            return n(a) ? a : c
        };
    var Pfa = /#(.)(.)(.)/,
        Oj = function(a) {
            if (!Qfa.test(a)) throw Error("P`" + a);
            4 == a.length && (a = a.replace(Pfa, "#$1$1$2$2$3$3"));
            return a.toLowerCase()
        },
        Pj = function(a) {
            a = Oj(a);
            return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
        },
        Rj = function(a) {
            var b = a[0],
                c = a[1];
            a = a[2];
            b = Number(b);
            c = Number(c);
            a = Number(a);
            if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error("Q`" + b + "`" + c + "`" + a);
            b = Qj(b.toString(16));
            c = Qj(c.toString(16));
            a = Qj(a.toString(16));
            return "#" + b + c + a
        },
        Qfa = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Qj = function(a) {
            return 1 == a.length ? "0" + a : a
        },
        Sj = function(a) {
            return "#" == a.charAt(0) ? a : "#" + a
        },
        Tj = function(a, b, c) {
            var d = 0,
                e = 0,
                f = 0;
            if (0 == b) f = e = d = c;
            else {
                var g = Math.floor(a / 60),
                    k = a / 60 - g;
                a = c * (1 - b);
                var l = c * (1 - b * k);
                b = c * (1 - b * (1 - k));
                switch (g) {
                    case 1:
                        d = l;
                        e = c;
                        f = a;
                        break;
                    case 2:
                        d = a;
                        e = c;
                        f = b;
                        break;
                    case 3:
                        d = a;
                        e = l;
                        f = c;
                        break;
                    case 4:
                        d = b;
                        e = a;
                        f = c;
                        break;
                    case 5:
                        d = c;
                        e = a;
                        f = l;
                        break;
                    case 6:
                    case 0:
                        d = c, e = b, f = a
                }
            }
            return [Math.floor(d), Math.floor(e), Math.floor(f)]
        },
        Rfa = function(a, b, c) {
            var d = Math.max(Math.max(a, b), c),
                e = Math.min(Math.min(a, b), c);
            if (e == d) e = a = 0;
            else {
                var f = d - e,
                    e = f / d;
                a = 60 * (a == d ? (b - c) / f : b == d ? 2 + (c - a) / f : 4 + (a - b) / f);
                0 > a && (a += 360);
                360 < a && (a -= 360)
            }
            return [a, e, d]
        };
    var Uj = function(a, b, c, d, e) {
            this.H = a;
            this.o = b;
            this.b = c;
            this.R = d;
            this.T = e
        },
        Sfa = function(a, b) {
            var c = parseInt(a.substr(1, 2), 16),
                d = parseInt(a.substr(3, 2), 16),
                e = parseInt(a.substr(5, 2), 16),
                c = Math.floor(255 - (255 - c) * b),
                d = Math.floor(255 - (255 - d) * b),
                e = Math.floor(255 - (255 - e) * b);
            return "#" + Vj(c) + Vj(d) + Vj(e)
        },
        Ufa = function(a) {
            if (Wj) {
                var b;
                b = Pj(a);
                b = Rfa(b[0], b[1], b[2]);
                b[2] > Tfa && (b[1] *= 1.3, b[1] = Math.min(b[1], 1), b[2] *= .8, a = Rj(Tj(b[0], b[1], b[2])));
                return new Uj(a, a, a, a, a)
            }
            b = parseInt(a.substr(1, 2), 16);
            var c = parseInt(a.substr(3,
                    2), 16),
                d = parseInt(a.substr(5, 2), 16);
            b *= .7;
            var c = .7 * c,
                d = .7 * d,
                e = .3 * b + .59 * c + .11 * d,
                f, g = Math.exp(e / 255);
            f = (.595716 * b - .274453 * c - .321263 * d) * g;
            d = (.211456 * b - .522591 * c + .311135 * d) * g;
            b = Math.floor(Math.min(Math.max(e + .9563 * f + .621 * d, 0), 255));
            c = Math.floor(Math.min(Math.max(e - .2721 * f - .6474 * d, 0), 255));
            d = Math.floor(Math.min(Math.max(e - 1.107 * f + 1.7046 * d, 0), 255));
            b = "#" + Vj(b) + Vj(c) + Vj(d);
            c = Sfa(a, .33);
            e = Sfa(a, Math.min(1, .5 + (parseInt(a.substr(1, 2), 16) + parseInt(a.substr(3, 2), 16) + parseInt(a.substr(5, 2), 16)) / 3 / 255 / 1.5));
            return new Uj(a,
                b, a, e, c)
        },
        Tfa = .79 * 255;
    Uj.prototype.equals = function(a) {
        return this.color == a.color
    };
    var Xj = !1,
        Wj = !1,
        Vfa = "#795548 #E67C73 #D50000 #F4511E #EF6C00 #F09300 #009688 #0B8043 #7CB342 #C0CA33 #E4C441 #F6BF26 #33B679 #039BE5 #4285F4 #3F51B5 #7986CB #B39DDB #616161 #A79B8E #AD1457 #D81B60 #8E24AA #9E69AF".split(" "),
        ak = function(a) {
            var b = Yj(a.toUpperCase()),
                c;
            if (!(43 <= b)) {
                var b = 0,
                    d = parseInt(a.substr(1, 2), 16) / 255,
                    e = parseInt(a.substr(3, 2), 16) / 255;
                a = parseInt(a.substr(5, 2), 16) / 255;
                for (var f = 43; 66 > f; f++) {
                    var g = Zj(f, 0),
                        k = d - parseInt(g.substr(1, 2), 16) / 255,
                        l = e - parseInt(g.substr(3, 2), 16) / 255,
                        g = a - parseInt(g.substr(5,
                            2), 16) / 255,
                        k = k * k + l * l + g * g;
                    if (43 == f || k < c) b = f, c = k
                }
            }
            return c = b
        },
        Zj = function(a, b) {
            return 67 <= a && 90 >= a ? Vfa[a - 67] : "#" + "666666888888aaaaaabbbbbbdddddda32929cc3333d96666e69999f0c2c2b1365fdd4477e67399eea2bbf5c7d67a367a994499b373b3cca2cce1c7e15229a36633cc8c66d9b399e6d1c2f029527a336699668cb399b3ccc2d1e12952a33366cc668cd999b3e6c2d1f01b887a22aa9959bfb391d5ccbde6e128754e32926265ad8999c9b1c2dfd00d78131096184cb05288cb8cb8e0ba52880066aa008cbf40b3d580d1e6b388880eaaaa11bfbf4dd5d588e6e6b8ab8b00d6ae00e0c240ebd780f3e7b3be6d00ee8800f2a640f7c480fadcb3b1440edd5511e6804deeaa88f5ccb8865a5aa87070be9494d4b8b8e5d4d47057708c6d8ca992a9c6b6c6ddd3dd4e5d6c6274878997a5b1bac3d0d6db5a69867083a894a2beb8c1d4d4dae54a716c5c8d8785aaa5aec6c3cedddb6e6e41898951a7a77dc4c4a8dcdccb8d6f47b08b59c4a883d8c5ace7dcce8531049f3501c7561ee2723ad6a58c6914268a2d38b5515dcd6a75d0a4a95c1158962181c244abda5dc4d69fcc23164e402175603f997d5cb5a89ac2182c5730487e536ca66d86c0a4afc9060d5e1821863640ad525cc8969acb125a121f753c3c995b5ab67998c2a62f62133d82155ca63279c34fa6c7942f63095a9a087ec2259add42b6d48e5f6b0281910ba7b828c3d445c8d0908755099d7000cf9911ebb42ed9c2858c500baa5a00d47f1eee9939ddb78d7549168d4500b56414d38233cda9866b3304743500914d14b37037bb9d845b123b870b50ab2671c9448ec98eae42104a70237f9643a5b15fc0c09cc7113f4725617d4585a361a0be9dbac73333335151517373738f8f8fb2b2b20f4b38227f6341a5875dc0a29bc7ba856508a59114d1bc36e9d34fddd398711616871111ad2d2dc94a4acb9292ac725e75481eac725ec68c78e6d5cfd06b64924420d06b64db7972f0d0cef83a22a64232f83a22f97d6df6c9c2fa573cd02424fa573cfc8976fed0c8ff7537bb5517ff7537fa9162ffd8c7ffad46cb7403ffad46ffad46ffe8cb42d69250b68e42d69242d692caf4e016a765007d3916a7656bcfa2d1ede07bd1484db8107bd1487bd148daf2ccb3dc6c93c00bb3dc6cb3dc6ceaf5dcfbe983bdb634fbe983fbe983fef9dcfad165bf9608fad165fad165fef2d392e1c033b69492e1c092e1c0e0f7ed9fe1e70bbcb29fe1e79fe1e7e4f7f89fc6e71587bd9fc6e79fc6e7e4eff84986e72c70d14986e78fb5f2dbe7fa9a9cff373ad79a9cffa9abfee3e3ffb99aff6733ddb99affb99affebe3ffc2c2c2979797c2c2c2d0d0d0e6e6e6cabdbf717171cabdbfcabdbfeae6e6cca6ac8a404dcca6accca6acf1e6e8f691b2d21e5bf691b2f9a9c3fce0e9cd74e6ca2ae6cd74e6dd8ef3f1d8f8a47ae29c3ce4a47ae2b38cede6daf7".substr(30 *
                a + 6 * b, 6).toUpperCase()
        },
        bk = null,
        Wfa = function() {
            if (bk) return bk;
            for (var a = [], b = 0; 91 > b; b++) {
                var c = Zj,
                    c = new Uj(c(b, 0), c(b, 1), c(b, 2), c(b, 3), c(b, 4));
                c.color = b;
                a[b] = c
            }
            return bk = a
        },
        Xfa = [44, 64, 66, 60, 57, 59, 56, 55, 55, 52, 53, 53, 48, 46, 63, 63, 61, 57, 56, 44, 62, 62, 47, 65, 66, 57, 58, 50, 51, 51, 52, 54, 48, 48, 43, 65, 65, 57, 61, 49, 54, 45],
        Yfa = [35, 23, 42, 14, 22, 33, 40, 28, 30, 31, 12, 32, 8, 7, 6, 26, 5, 4, 39, 21, 15, 2, 37, 25],
        Zfa = [26, 23, 41, 28, 33, 37, 35, 30, 38, 40, 24, 31, 27, 22, 25, 42, 29, 32, 34, 36, 39, 6, 1, 12, 9, 14, 4, 21, 8, 19, 7, 2, 11, 10, 3, 20, 13, 5, 15, 16, 17, 18],
        $fa = [57, 51, 54, 46, 60, 64, 61, 43, 56, 58, 52, 53, 47, 65, 63, 62, 44, 55, 59, 49, 48, 45, 66, 50],
        dk = function(a) {
            a = ck(a);
            return Wfa()[a] || null
        },
        ek = null,
        Yj = function(a) {
            a = a.toUpperCase();
            if (!ek) {
                ek = {};
                for (var b = Wfa(), c = 0, d = b.length; c < d; ++c) ek[b[c].H] = c
            }
            return ek[a] || -1
        },
        bga = function(a, b) {
            a = aga(a);
            if (b) {
                for (var c = b, d = [], e = 0; e < c.length; e++) d.push(ck(c[e]));
                b = d
            }
            c = b;
            d = Xj ? $fa : Zfa;
            if (c && c.length) {
                d = fc(d);
                for (e = 0; e < c.length; e++) cc(d, c[e]);
                c = d
            } else c = d;
            for (var d = c[0], e = Infinity, f = 0, g = c.length; f < g; ++f) {
                var k = c[f];
                if (!a[k]) return k;
                var l = a[k];
                l < e && (d = k, e = l)
            }
            return d
        },
        fk = function(a, b, c) {
            var d = Zc(parseInt(a.substr(3, 2), 16), parseInt(b.substr(3, 2), 16), c),
                e = Zc(parseInt(a.substr(5, 2), 16), parseInt(b.substr(5, 2), 16), c);
            return "#" + Vj(Zc(parseInt(a.substr(1, 2), 16), parseInt(b.substr(1, 2), 16), c)) + Vj(d) + Vj(e)
        },
        Vj = function(a) {
            a = Number(a | 0).toString(16);
            return 2 > a.length ? "0" + a : a
        },
        ck = function(a) {
            if (0 == a || 1 <= a && 42 >= a && !Xj && !Wj) return a;
            var b = a;
            67 <= a && 90 >= a ? b += -24 : 1 <= a && 42 >= a && (b = Xfa[a - 1]);
            return Wj ? b - 43 + 67 : Xj ? b : Yfa[b - 43]
        },
        aga = function(a) {
            var b = {};
            Ua(a, function(a, d) {
                d = parseInt(d, 10);
                d = ck(d);
                var c = b[d];
                c && (a += c);
                b[d] = a
            });
            return b
        };
    var gk = function(a, b, c, d, e, f) {
            this.R = a;
            this.Zf = b;
            this.o = c || "";
            a = this.o ? this.o : (a = this.Zf.match(cga)) ? a[0] : this.Zf;
            this.S = a;
            this.H = d || 0;
            this.b = e ? p(e, null) : Fa(this.H);
            this.T = f ? p(f, null) : Fa(-this.H)
        },
        cga = /GMT[+-](([01]\d((?=:00)|(:\d{2})))|((\?)*))/;
    gk.prototype.getName = function() {
        return this.R
    };
    gk.prototype.jg = function() {
        return this.o
    };
    gk.prototype.equals = function(a) {
        return null !== a && this.R == a.getName() && this.Zf == a.Zf
    };
    var hk, dga = function(a) {
        this.b = a
    };
    dga.prototype.isEnabled = function(a) {
        return !!this.b[a]
    };
    var ik = function(a) {
        return Fg(a, 4)
    };
    var ega = gb("AE BD BH DJ DZ EG IL IQ IR JO KW LB LY MA MR OM PK PS QA SA SD SO SY YE".split(" ")),
        jk = function(a) {
            a = a.getString("country", "US");
            return !ega[a]
        };
    var kk = function(a) {
        Gj.call(this);
        this.U = a;
        this.o = {};
        this.H = {};
        this.R = [];
        K(a, yj);
        this.Ca = K(a, sj);
        a = this.U.get(Ag);
        Ej(a, "u", p(this.ma, this));
        Ej(a, "u_c", p(this.V, this))
    };
    v(kk, Gj);
    kk.prototype.get = function(a) {
        return this.o[a]
    };
    kk.prototype.set = function(a, b) {
        var c = this.o[a] != b;
        c && (this.o[a] = b, this.H[a] = 0);
        return c
    };
    kk.prototype.forEach = function(a) {
        for (var b in this.o) a(b, this.o[b])
    };
    var lk = function(a) {
        D.call(this, "h");
        this.o = a
    };
    v(lk, D);
    var mk = function(a, b, c) {
            void 0 === a.o[b] && a.set(b, c)
        },
        fga = function(a) {
            var b = ["hl", "en"],
                c;
            for (c in a.H) {
                var d = a.o[c],
                    e = 0 == c.indexOf("goocal|") ? "cup" : "eup";
                b.push(e, c + ":" + d)
            }
            return b
        };
    kk.prototype.b = function(a, b) {
        ik(this.U).isEnabled(43) && "timezone" in this.H && !("ignoredSuggestTz" in this.H) && this.set("ignoredSuggestTz", "");
        var c = fga(this);
        if (2 < c.length) {
            var d = p(function() {
                this.U.get(Dg).b("Failed to save preferences");
                b && b()
            }, this);
            ij(this.Ca, "user_prefs", c, 13, a || ia, d);
            this.ya(new lk(!0))
        } else a && a()
    };
    var nk = function(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = d[0];
            a.o[e] = d[1];
            delete a.H[e]
        }
        a.ya(new lk(!1))
    };
    h = kk.prototype;
    h.Dd = function() {
        return hh(this, "firstDay", "0")
    };
    h.wi = function() {
        return jk(this) ? !Mj(this, "weekView5", "false") : !0
    };
    h.zl = function() {
        return 1
    };
    h.Xh = function() {
        return jk(this) ? 5 : 7
    };
    h.et = function(a) {
        return (n(a) ? a : this.wi()) ? 7 : this.Xh()
    };
    h.xd = function() {
        return this.R[0].getName()
    };
    h.kg = function() {
        return this.R
    };
    h.On = function() {
        return Mj(this, "format24HourTime", "false")
    };
    h.lG = function() {
        return this.getString("dtFldOrdr", "MDY")
    };
    h.Ys = function(a) {
        return hh(this, a + "/color", "cmVtaW5kZXJzQHJlbWluZGVycy5nb29nbGUuY29t" == a ? 58 : 0)
    };
    var gga = function(a, b) {
        var c = a.getString("timezone", "Etc/GMT"),
            d = a.getString("translatedtz", "(GMT+00:00) GMT (no daylight saving)"),
            e = a.getString("tzlabel", "");
        a.R = [new gk(c, d, e)];
        if ((d = a.getString("SecondaryDisplayTimezone", "")) && Mj(a, "HasSecondaryTimezone", "false")) {
            var e = a.getString("secondarytranstz", d),
                f = a.getString("sectzlabel", ""),
                g = a.S(0, c, d, li(b));
            null != g && a.R.push(new gk(d, e, f, g, p(a.S, a, b, c, d), p(a.S, a, b, d, c)))
        }
    };
    kk.prototype.S = function(a, b, c, d) {
        a = Uh(Dh(d.rb(), Ph(new Date(0))));
        return mj(a, c, b)
    };
    kk.prototype.ma = function(a) {
        nk(this, a)
    };
    kk.prototype.V = function(a) {
        nk(this, a)
    };
    var ok = function() {
        J.call(this)
    };
    v(ok, J);
    h = ok.prototype;
    h.Qq = null;
    h.Sz = null;
    h.OJ = null;
    h.qE = !1;
    h.qv = function(a, b, c) {
        this.xg(c)
    };
    h.xg = function(a) {
        this.qv(a, a, a)
    };
    h.Qs = function(a) {
        this.xg(Ih(0 < a ? this.Wc : this.first, a))
    };
    h.contains = function(a) {
        a = a.$a();
        return a.Wa() >= this.first.Wa() && a.Wa() <= this.Wc.Wa()
    };
    var pk = function(a) {
        return Bh(a.Wc, a.first) + 1
    };
    ok.prototype.R = function() {
        this.Qq && this.focus.equals(this.OJ) && this.first.equals(this.Qq) && this.Wc.equals(this.Sz) || (this.qE = !!this.Qq && (this.first.Wa() > this.Qq.Wa() || this.Wc.Wa() > this.Sz.Wa()), this.OJ = this.focus, this.Qq = this.first, this.Sz = this.Wc, this.ya("change"))
    };
    ok.prototype.set = function(a, b, c) {
        this.first = a;
        this.Wc = b;
        this.focus = c;
        this.R()
    };
    var qk = function(a, b) {
        J.call(this);
        this.H = b;
        this.T = a;
        this.b = 1;
        this.o = new I(this);
        this.o.ka(this.H, "h", this.U)
    };
    v(qk, ok);
    qk.prototype.S = null;
    var hga = /\b[1-3](\+\d{5}){3}\b/,
        iga = function(a) {
            a = a.match(hga);
            if (!a) return null;
            a = a[0].split("+");
            return {
                mode: parseInt(a[0], 10),
                an: Sh(parseInt(a[1], 10)),
                c3: Sh(parseInt(a[2], 10)),
                fF: Sh(parseInt(a[3], 10))
            }
        };
    qk.prototype.wa = function() {
        y(this.o);
        qk.qa.wa.call(this)
    };
    var rk = function(a, b) {
            if (!a.focus) a.focus = b;
            else if (!a.contains(a.focus)) {
                var c = ki(a.T);
                a.contains(c) ? a.focus = c : b.Wa() < a.first.Wa() ? a.focus = a.first : b.Wa() > a.Wc.Wa() ? a.focus = a.Wc : a.focus = b
            }
        },
        sk = function(a, b, c, d) {
            var e = b;
            7 < c && 0 == c % 7 && (b = Jh(b, a.H.Dd()));
            a.first = b;
            a.Wc = Ih(b, c - 1);
            rk(a, e);
            a.b = 1;
            d || a.R()
        };
    qk.prototype.R = function() {
        qk.qa.R.call(this);
        this.S && this.b == this.S ? 1 == this.b && this.ya("i") : (this.S = this.b, this.ya("i"))
    };
    var tk = function(a, b, c, d, e) {
            var f = b.year,
                g = b.month;
            b = Eh(f, g, 1);
            f = Eh(f, g, rh(f, g));
            c || (f = Jh(f, a.H.zl()), b = Kh(b, a.H.zl() + a.H.Xh() - 1));
            d && (b = Jh(b, a.H.Dd()), f = Kh(f, a.H.Dd() + 6));
            e.first = b;
            e.Wc = f
        },
        uk = function(a, b, c) {
            tk(a, b, a.H.wi(), !1, a);
            rk(a, b);
            tk(a, b, a.H.wi(), !0, a);
            a.b = 3;
            c || a.R()
        },
        jga = function(a, b, c, d) {
            var e = n(c) ? c : a.H.wi();
            c = Jh(b, a.H.Dd());
            e || (c = Kh(c, a.H.zl()));
            a.first = c;
            e = a.H.et(e);
            a.Wc = Ih(c, e - 1);
            rk(a, b);
            a.b = 2;
            d || a.R()
        };
    qk.prototype.xg = function(a) {
        this.focus = a;
        this.contains(a) ? 3 == this.b || this.first.equals(this.Wc) ? jga(this, a) : sk(this, a, 1) : vk(this)
    };
    var vk = function(a, b, c) {
        var d = a.focus;
        if (3 == a.b) uk(a, d, c);
        else if (2 == a.b) {
            var e = 7 == pk(a);
            b = b ? a.H.wi() : e;
            jga(a, d, b, c)
        } else 7 < pk(a) ? d = Jh(d, a.H.Dd()) : d == a.Wc && (d = a.first), sk(a, d, pk(a), c)
    };
    qk.prototype.qv = function(a, b, c) {
        this.first = a;
        this.Wc = b;
        this.focus = c;
        7 < pk(this) && (this.first = Jh(this.first, this.H.Dd()), this.Wc = Kh(this.Wc, this.H.Dd() + 6));
        a = this.first;
        b = this.Wc;
        var d = pk(this);
        c = this.H.wi();
        this.b = 1;
        var e = c ? this.H.Dd() : this.H.zl();
        d == this.H.et() && a.rd() == e ? this.b = 2 : (d = Ih(a, 10), e = {}, tk(this, d, c, !0, e), a.equals(e.first) && b.equals(e.Wc) && (b = d.month, this.b = 3, this.focus.month != b && (c = d.year, d = Eh(c, b, 1), this.focus = this.focus.Wa() < a.Wa() ? d : Eh(c, b, rh(c, b)))));
        this.R()
    };
    qk.prototype.Qs = function(a) {
        if (3 == this.b) uk(this, Hh(this.focus.year, this.focus.month + a, 1).$a());
        else {
            var b = 2 == this.b ? 7 : pk(this);
            this.first = Ih(this.first, a * b);
            this.Wc = Ih(this.Wc, a * b);
            rk(this, Ih(this.focus, a * b));
            this.R()
        }
    };
    var wk = function(a) {
        var b = ki(a.T);
        a.focus = b;
        vk(a, !1)
    };
    qk.prototype.U = function() {
        vk(this, !0)
    };
    var kga = function(a, b, c) {
            1 == b && c ? sk(a, a.focus, c) : (a.b = b, vk(a, !0))
        },
        lga = function(a) {
            return (a = iga(a)) ? a.fF : null
        };
    var mga = function(a, b, c) {
        this.Aq = 7 >= a;
        this.aM = (this.Aq ? a : 7) - b;
        this.f8 = b;
        this.hF = c
    };
    var xk = function() {
        J.call(this);
        this.b = {};
        this.o = []
    };
    v(xk, J);
    la(xk);
    xk.prototype.reset = function() {
        this.b = {};
        this.o = []
    };
    var nga = /\W/g;
    xk.prototype.log = function(a, b) {
        if (qa(b) && 0 <= b) {
            var c = a.replace(nga, "_");
            c in this.b || (this.b[c] = []);
            this.b[c].push(b)
        }
    };
    var zk = function() {
            var a = xk.va();
            return new yk(a)
        },
        yk = function(a) {
            this.T = a;
            this.R = this.H = t()
        };
    yk.prototype.b = function(a) {
        a = a || this.o;
        var b = t();
        this.T.log(a, b - this.H);
        this.R = b
    };
    yk.prototype.wb = function() {
        return this.H
    };
    var Ak = function(a, b) {
            var c = b || a.o,
                d = t();
            a.T.log(c, d - a.R);
            a.R = d
        },
        Bk = function(a, b) {
            xk.va().log(a, b)
        },
        Ck = function(a) {
            xk.va().log(a, 0)
        };
    var Dk = function(a) {
        this.b = a
    };
    Dk.prototype.S = function() {
        return [this.b.first, this.b.Wc]
    };
    Dk.prototype.T = function() {
        var a = zk();
        wk(this.b);
        a.b(this.b.b + ".alterPeriod0")
    };
    Dk.prototype.R = function(a) {
        var b = zk();
        this.b.Qs(a);
        b.b(this.b.b + ".alterPeriod" + a)
    };
    Dk.prototype.o = function() {
        return !1
    };
    var Ek = function(a, b) {
        this.b = a;
        this.ua = b;
        oga(this)
    };
    v(Ek, Dk);
    Ek.prototype.U = !1;
    var oga = function(a) {
        var b = a.V() && a.U;
        a.H = new mga(a.ua, b ? 2 : 0, b ? 1 : null)
    };
    Ek.prototype.V = function() {
        return !1
    };
    Ek.prototype.ta = function() {
        return this.H
    };
    Ek.prototype.o = function() {
        return !0
    };
    var pga = function(a) {
        Ek.call(this, a, 1)
    };
    v(pga, Ek);
    var Fk = function(a) {
        this.b = a
    };
    v(Fk, Dk);
    Fk.prototype.T = function() {
        Fk.qa.T.call(this);
        Gk(M().get(xg))
    };
    Fk.prototype.R = function(a) {
        var b = zk();
        M().get(xg).scroll(a);
        b.b(this.b.b + ".alterPeriod" + a)
    };
    Fk.prototype.ma = function() {
        return !0
    };
    var Hk = function(a, b, c) {
        this.U = b;
        Ek.call(this, a, 35);
        this.Ca = c
    };
    v(Hk, Ek);
    Hk.prototype.V = function() {
        return !0
    };
    Hk.prototype.S = function() {
        var a = Ah(this.b.focus.$a());
        a.Ka = 1;
        var b = a.rb();
        a.Ka = rh(a.year, a.month);
        a = a.rb();
        return [b, a]
    };
    var Ik = function(a) {
        this.b = a
    };
    v(Ik, Fk);
    Ik.prototype.ma = function() {
        return !1
    };
    var Jk = function(a, b, c) {
        this.U = b;
        Ek.call(this, a, 7);
        this.Ca = c
    };
    v(Jk, Ek);
    Jk.prototype.V = function() {
        return !0
    };
    var Kk = function(a, b) {
            this.b = a;
            this.o = b || 1
        },
        qga = {
            eN: 0,
            DC: 1,
            EO: 2,
            Fga: 3,
            Wba: 4,
            Mv: 5,
            yP: 6
        },
        rga = /^custom/;
    Kk.prototype.clone = function() {
        return new Kk(this.b, this.o)
    };
    Kk.prototype.equals = function(a) {
        return this.b == a.b && this.o == a.o
    };
    var Lk = function(a) {
            switch (a.b) {
                case 0:
                    return "day";
                case 1:
                    return "week";
                case 2:
                    return "month";
                case 3:
                    return "list";
                case 4:
                    return "compact";
                case 5:
                    return "custom";
                case 6:
                    return "search";
                default:
                    return ""
            }
        },
        sga = function(a) {
            switch (a) {
                case "day":
                    return 0;
                case "week":
                    return 1;
                case "month":
                    return 2;
                case "list":
                    return 3;
                case "compact":
                    return 4;
                case "custom":
                    return 5;
                default:
                    return 6
            }
        };
    Kk.prototype.toString = function() {
        var a = Lk(this);
        4 == this.b && (a += "," + this.o);
        return a
    };
    var tga = function(a, b, c) {
            var d = ih(b);
            b = !d.wi();
            d = d.Dd();
            switch (a.b) {
                case 0:
                    return a.o = 1, new pga(c);
                case 1:
                    return c = new Jk(c, b, d), a.o = c.H.aM, c;
                case 2:
                    return a.o = 31, new Hk(c, b, d);
                case 3:
                    return a.o = 1, new Fk(c);
                case 6:
                    return a.o = 1, new Ik(c);
                default:
                    return new Ek(c, a.o)
            }
        },
        Mk = function(a, b, c) {
            if (pa(a) && 0 == a.indexOf("custom") || 5 == a) a = Hj(ih(b)).replace(rga, "compact"), c = void 0;
            if (qa(a) && ab(qga, a)) a = new Kk(a, c);
            else {
                var d = a;
                b = c || 1;
                pa(a) && !n(c) && (a = a.split(",", 2), 2 == a.length && (d = a[0], b = parseInt(a[1], 10)));
                a = sga(d);
                a = n(a) ? new Kk(a, b) : new Kk(1, 1)
            }
            return a
        };
    var Nk = function(a, b) {
        this.o = a;
        this.b = b
    };
    Nk.prototype.getUrl = function() {
        return this.o
    };
    Nk.prototype.getTitle = function() {
        return this.b
    };
    Nk.prototype.setTitle = function(a) {
        this.b = a
    };
    var uga = function(a) {
        return !a || 2 > a.length ? null : new Nk(a[0], a[1])
    };
    var Ok = function(a, b) {
        Gg(a, b).addCallback(function(a) {
            a.init()
        })
    };
    var Pk = function() {
        return "object" == typeof gbar
    };
    var Uk, Vk, vga = !1,
        Wk = !1,
        wga = function(a) {
            a.R("delayedcore");
            window.setTimeout(p(a.R, a, "eventform"), 6E3);
            window.setTimeout(p(a.R, a, "detailssettings"), 3E4)
        };
    var Xk = function(a) {
        return "main_7" == a
    };
    var Zk = function(a) {
            this.b = {};
            if (a)
                for (var b = 0; b < a.length; b++) this.b[Yk(a[b])] = null
        },
        xga = {},
        Yk = function(a) {
            return a in xga || 32 == String(a).charCodeAt(0) ? " " + a : a
        },
        $k = function(a) {
            return 32 == a.charCodeAt(0) ? a.substr(1) : a
        };
    h = Zk.prototype;
    h.add = function(a) {
        this.b[Yk(a)] = null
    };
    h.clear = function() {
        this.b = {}
    };
    h.clone = function() {
        var a = new Zk,
            b;
        for (b in this.b) a.b[b] = null;
        return a
    };
    h.contains = function(a) {
        return Yk(a) in this.b
    };
    h.equals = function(a) {
        return yga(this, a) && yga(a, this)
    };
    h.forEach = function(a, b) {
        for (var c in this.b) a.call(b, $k(c), void 0, this)
    };
    h.$b = Object.keys ? function() {
        return Object.keys(this.b).length
    } : function() {
        var a = 0,
            b;
        for (b in this.b) a++;
        return a
    };
    h.Tp = function(a) {
        var b = this.clone(),
            c;
        for (c in a.b) b.b[c] = null;
        return b
    };
    h.dc = Object.keys ? function() {
        return Object.keys(this.b).map($k, this)
    } : function() {
        var a = [],
            b;
        for (b in this.b) a.push($k(b));
        return a
    };
    h.isEmpty = function() {
        for (var a in this.b) return !1;
        return !0
    };
    var yga = function(a, b) {
        for (var c in a.b)
            if (!(c in b.b)) return !1;
        return !0
    };
    Zk.prototype.remove = function(a) {
        a = Yk(a);
        return a in this.b ? (delete this.b[a], !0) : !1
    };
    Zk.prototype.te = function() {
        return od(this.dc())
    };
    var zga = function(a, b) {
        this.o = a;
        this.R = b;
        this.b = new Zk
    };
    zga.prototype.isEnabled = function() {
        var a = this.R.td,
            b = Xk(a),
            a = "eventpage_6" == a;
        return this.b.isEmpty() && (b || a) && Mj(this.o, "useKeyboardShortcuts", "true")
    };
    var al = function() {
        return "//calendar.google.com/googlecalendar/images/blank.gif"
    };
    var Aga = function() {
        this.b = "secid"
    };
    var bl = function(a, b, c, d, e) {
        if (0 <= a.indexOf(":")) throw Error("R`" + a);
        this.Lb = a;
        this.mn = b;
        this.b = c;
        this.Sh = 1 == b ? d : -1;
        this.ln = e || -1
    };
    bl.prototype.qb = function() {
        return this.Lb
    };
    bl.prototype.Uc = function() {
        return this.b
    };
    var cl = function(a) {
            return a.qb() + ":" + a.mn + ":" + a.Uc() + ":" + a.Sh + ":" + a.ln
        },
        dl = function(a) {
            var b = a.split(":", 5);
            if (5 != b.length) throw Error("S`" + a);
            a = parseInt(b[1], 10);
            return new bl(b[0], a, parseInt(b[2], 10), 1 == a ? parseInt(b[3], 10) : void 0, 1 == a ? parseInt(b[4], 10) : void 0)
        },
        Bga = function(a, b) {
            var c = a.match(/^(\d+):(-?\d+):(-?\d+)$/);
            return c ? 0 <= parseInt(c[3], 10) ? new bl(b, 1, parseInt(c[1], 10), parseInt(c[2], 10)) : null : null
        },
        el = function(a, b) {
            if (null == a) return null;
            for (var c = [], d = 0; d < a.length; d++) {
                var e = Bga(a[d], b);
                e && c.push(e)
            }
            return c
        };
    bl.prototype.toString = function() {
        return cl(this)
    };
    bl.prototype.equals = function(a) {
        return this.qb() == a.qb() && this.mn == a.mn && this.Uc() == a.Uc() && this.Sh == a.Sh && this.ln == a.ln
    };
    var fl = function(a) {
        J.call(this);
        this.T = a;
        this.b = {};
        this.o = {};
        this.R = new Cga;
        Ej(this.T.get(Ag), "sb", p(this.U, this))
    };
    v(fl, J);
    var gl = function(a, b) {
            var c = b.qb();
            a.R.clear(c);
            var d = a.b[c];
            d || (d = a.b[c] = {});
            c = cl(b);
            d[c] = b
        },
        il = function(a, b, c) {
            var d = a.b[b];
            if (!d) return [];
            c = c ? 20 : 10;
            var e = [],
                f;
            for (f in d) {
                var g = d[f];
                g && g.qb() == b && 1 == g.mn && g.ln == c && (2 != g.Uc() || hl(a.T)) && e.push(g)
            }
            return e
        };
    fl.prototype.ub = function() {
        return 0 < Xa(this.o)
    };
    fl.prototype.reset = function() {
        this.R.reset();
        for (var a in this.o) {
            var b = this.o[a];
            delete this.o[a];
            var c = dl(a);
            1 == b ? gl(this, c) : -1 == b && (b = this.b[c.qb()]) && delete b[a]
        }
        this.ya("j")
    };
    var hl = function(a) {
            return Mj(ih(a), "smsVerifiedFlag", "false") && ik(a).isEnabled(64)
        },
        Dga = function(a, b) {
            var c = b.ta;
            if (c) return !!c.length;
            var c = b.qb(),
                d = b.b;
            a.R.has(c, d) || a.R.set(c, d, 0 < il(a, c, d).length);
            return !!a.R.get(c, d)
        };
    fl.prototype.U = function(a, b, c, d, e) {
        var f;
        null != d && (f = parseInt(d, 10));
        var g;
        e && (g = parseInt(e, 10));
        a = new bl(a, b, c, f, g);
        gl(this, a)
    };
    var Cga = function() {
        this.b = {}
    };
    h = Cga.prototype;
    h.clear = function(a) {
        delete this.b[a]
    };
    h.reset = function() {
        this.b = {}
    };
    h.get = function(a, b) {
        return this.b[a] ? this.b[a][b] : void 0
    };
    h.has = function(a, b) {
        return n(this.b[a]) && n(this.b[a][b])
    };
    h.set = function(a, b, c) {
        this.b[a] = this.b[a] || {};
        this.b[a][b] = c
    };
    var Ega = function(a) {
        J.call(this);
        this.H = this.Ba = a
    };
    v(Ega, J);
    var jl = function(a) {
        return Fg(a, 2).H
    };
    var Fga = {
            QB: {
                1E3: {
                    other: "0K"
                },
                1E4: {
                    other: "00K"
                },
                1E5: {
                    other: "000K"
                },
                1E6: {
                    other: "0M"
                },
                1E7: {
                    other: "00M"
                },
                1E8: {
                    other: "000M"
                },
                1E9: {
                    other: "0B"
                },
                1E10: {
                    other: "00B"
                },
                1E11: {
                    other: "000B"
                },
                1E12: {
                    other: "0T"
                },
                1E13: {
                    other: "00T"
                },
                1E14: {
                    other: "000T"
                }
            },
            wM: {
                1E3: {
                    other: "0 thousand"
                },
                1E4: {
                    other: "00 thousand"
                },
                1E5: {
                    other: "000 thousand"
                },
                1E6: {
                    other: "0 million"
                },
                1E7: {
                    other: "00 million"
                },
                1E8: {
                    other: "000 million"
                },
                1E9: {
                    other: "0 billion"
                },
                1E10: {
                    other: "00 billion"
                },
                1E11: {
                    other: "000 billion"
                },
                1E12: {
                    other: "0 trillion"
                },
                1E13: {
                    other: "00 trillion"
                },
                1E14: {
                    other: "000 trillion"
                }
            }
        },
        kl = Fga,
        kl = Fga;
    var ll = {
        AED: [2, "dh", "\u062f.\u0625.", "DH"],
        ALL: [0, "Lek", "Lek"],
        AUD: [2, "$", "AU$"],
        BDT: [2, "\u09f3", "Tk"],
        BGN: [2, "lev", "lev"],
        BRL: [2, "R$", "R$"],
        CAD: [2, "$", "C$"],
        CDF: [2, "FrCD", "CDF"],
        CHF: [2, "CHF", "CHF"],
        CLP: [0, "$", "CL$"],
        CNY: [2, "\u00a5", "RMB\u00a5"],
        COP: [32, "$", "COL$"],
        CRC: [0, "\u20a1", "CR\u20a1"],
        CZK: [50, "K\u010d", "K\u010d"],
        DKK: [50, "kr.", "kr."],
        DOP: [2, "RD$", "RD$"],
        EGP: [2, "\u00a3", "LE"],
        ETB: [2, "Birr", "Birr"],
        EUR: [2, "\u20ac", "\u20ac"],
        GBP: [2, "\u00a3", "GB\u00a3"],
        HKD: [2, "$", "HK$"],
        HRK: [2, "kn", "kn"],
        HUF: [34,
            "Ft", "Ft"
        ],
        IDR: [0, "Rp", "Rp"],
        ILS: [34, "\u20aa", "IL\u20aa"],
        INR: [2, "\u20b9", "Rs"],
        IRR: [0, "Rial", "IRR"],
        ISK: [0, "kr", "kr"],
        JMD: [2, "$", "JA$"],
        JPY: [0, "\u00a5", "JP\u00a5"],
        KRW: [0, "\u20a9", "KR\u20a9"],
        LKR: [2, "Rs", "SLRs"],
        LTL: [2, "Lt", "Lt"],
        MNT: [0, "\u20ae", "MN\u20ae"],
        MVR: [2, "Rf", "MVR"],
        MXN: [2, "$", "Mex$"],
        MYR: [2, "RM", "RM"],
        NOK: [50, "kr", "NOkr"],
        PAB: [2, "B/.", "B/."],
        PEN: [2, "S/.", "S/."],
        PHP: [2, "\u20b1", "PHP"],
        PKR: [0, "Rs", "PKRs."],
        PLN: [50, "z\u0142", "z\u0142"],
        RON: [2, "RON", "RON"],
        RSD: [0, "din", "RSD"],
        RUB: [50, "\u20bd",
            "RUB"
        ],
        SAR: [2, "Rial", "Rial"],
        SEK: [50, "kr", "kr"],
        SGD: [2, "$", "S$"],
        THB: [2, "\u0e3f", "THB"],
        TRY: [2, "TL", "YTL"],
        TWD: [2, "NT$", "NT$"],
        TZS: [0, "TSh", "TSh"],
        UAH: [2, "\u0433\u0440\u043d.", "UAH"],
        USD: [2, "$", "US$"],
        UYU: [2, "$", "$U"],
        VND: [48, "\u20ab", "VN\u20ab"],
        YER: [0, "Rial", "Rial"],
        ZAR: [2, "R", "ZAR"]
    };
    var Gga = {
            UB: ".",
            ew: ",",
            kC: "%",
            Ew: "0",
            oP: "+",
            xO: "-",
            ZB: "E",
            mC: "\u2030",
            jw: "\u221e",
            ZO: "NaN",
            TB: "#,##0.###",
            xP: "#E0",
            eP: "#,##0%",
            YM: "\u00a4#,##0.00",
            gN: "USD"
        },
        ml = Gga,
        ml = Gga;
    var ol = function(a, b, c) {
            this.ta = b || ml.gN;
            this.vb = c || 0;
            this.Ba = 40;
            this.o = 1;
            this.La = 0;
            this.S = 3;
            this.Ra = this.H = 0;
            this.Qa = !1;
            this.ua = this.V = "";
            this.R = "-";
            this.ma = "";
            this.b = 1;
            this.U = !1;
            this.T = [];
            this.Ja = this.Na = !1;
            this.Ca = 0;
            if ("number" == typeof a) switch (a) {
                case 1:
                    nl(this, ml.TB);
                    break;
                case 2:
                    nl(this, ml.xP);
                    break;
                case 3:
                    nl(this, ml.eP);
                    break;
                case 4:
                    a = ml.YM;
                    b = ["0"];
                    c = ll[this.ta][0] & 7;
                    if (0 < c) {
                        b.push(".");
                        for (var d = 0; d < c; d++) b.push("0")
                    }
                    a = a.replace(/0.00/g, b.join(""));
                    nl(this, a);
                    break;
                case 5:
                    Hga(this, 1);
                    break;
                case 6:
                    Hga(this, 2);
                    break;
                default:
                    throw Error("V");
            } else nl(this, a)
        },
        nl = function(a, b) {
            a.bA = b.replace(/ /g, "\u00a0");
            var c = [0];
            a.V = pl(a, b, c);
            for (var d = c[0], e = -1, f = 0, g = 0, k = 0, l = -1, m = b.length, r = !0; c[0] < m && r; c[0]++) switch (b.charAt(c[0])) {
                case "#":
                    0 < g ? k++ : f++;
                    0 <= l && 0 > e && l++;
                    break;
                case "0":
                    if (0 < k) throw Error("aa`" + b);
                    g++;
                    0 <= l && 0 > e && l++;
                    break;
                case ",":
                    0 < l && a.T.push(l);
                    l = 0;
                    break;
                case ".":
                    if (0 <= e) throw Error("ba`" + b);
                    e = f + g + k;
                    break;
                case "E":
                    if (a.Ja) throw Error("ca`" + b);
                    a.Ja = !0;
                    a.Ra = 0;
                    c[0] + 1 < m && "+" == b.charAt(c[0] +
                        1) && (c[0]++, a.Qa = !0);
                    for (; c[0] + 1 < m && "0" == b.charAt(c[0] + 1);) c[0]++, a.Ra++;
                    if (1 > f + g || 1 > a.Ra) throw Error("da`" + b);
                    r = !1;
                    break;
                default:
                    c[0]--, r = !1
            }
            0 == g && 0 < f && 0 <= e && (g = e, 0 == g && g++, k = f - g, f = g - 1, g = 1);
            if (0 > e && 0 < k || 0 <= e && (e < f || e > f + g) || 0 == l) throw Error("ea`" + b);
            k = f + g + k;
            a.S = 0 <= e ? k - e : 0;
            0 <= e && (a.H = f + g - e, 0 > a.H && (a.H = 0));
            a.o = (0 <= e ? e : k) - f;
            a.Ja && (a.Ba = f + a.o, 0 == a.S && 0 == a.o && (a.o = 1));
            a.T.push(Math.max(0, l));
            a.Na = 0 == e || e == k;
            d = c[0] - d;
            a.ua = pl(a, b, c);
            c[0] < b.length && ";" == b.charAt(c[0]) ? (c[0]++, 1 != a.b && (a.U = !0), a.R = pl(a, b,
                c), c[0] += d, a.ma = pl(a, b, c)) : (a.R = a.V + a.R, a.ma += a.ua)
        },
        Hga = function(a, b) {
            a.Ca = b;
            nl(a, ml.TB);
            a.H = 0;
            a.S = 2;
            if (0 < a.H) throw Error("U");
            a.La = 2
        };
    ol.prototype.parse = function(a, b) {
        var c = b || [0];
        if (0 != this.Ca) throw Error("W");
        var d;
        a = a.replace(/ /g, "\u00a0");
        var e = a.indexOf(this.V, c[0]) == c[0],
            f = a.indexOf(this.R, c[0]) == c[0];
        e && f && (this.V.length > this.R.length ? f = !1 : this.V.length < this.R.length && (e = !1));
        e ? c[0] += this.V.length : f && (c[0] += this.R.length);
        if (a.indexOf(ml.jw, c[0]) == c[0]) c[0] += ml.jw.length, d = Infinity;
        else {
            d = a;
            var g = !1,
                k = !1,
                l = !1,
                m = 1,
                r = ml.UB,
                u = ml.ew,
                w = ml.ZB;
            if (0 != this.Ca) throw Error("X");
            for (var z = ""; c[0] < d.length; c[0]++) {
                var B = d.charAt(c[0]),
                    A = Iga(B);
                if (0 <= A && 9 >= A) z += A, l = !0;
                else if (B == r.charAt(0)) {
                    if (g || k) break;
                    z += ".";
                    g = !0
                } else if (B == u.charAt(0) && ("\u00a0" != u.charAt(0) || c[0] + 1 < d.length && 0 <= Iga(d.charAt(c[0] + 1)))) {
                    if (g || k) break
                } else if (B == w.charAt(0)) {
                    if (k) break;
                    z += "E";
                    k = !0
                } else if ("+" == B || "-" == B) z += B;
                else if (1 == this.b && B == ml.kC.charAt(0)) {
                    if (1 != m) break;
                    m = 100;
                    if (l) {
                        c[0]++;
                        break
                    }
                } else if (1 == this.b && B == ml.mC.charAt(0)) {
                    if (1 != m) break;
                    m = 1E3;
                    if (l) {
                        c[0]++;
                        break
                    }
                } else break
            }
            1 != this.b && (m = this.b);
            d = parseFloat(z) / m
        }
        if (e) {
            if (a.indexOf(this.ua, c[0]) !=
                c[0]) return NaN;
            c[0] += this.ua.length
        } else if (f) {
            if (a.indexOf(this.ma, c[0]) != c[0]) return NaN;
            c[0] += this.ma.length
        }
        return f ? -d : d
    };
    var Mga = function(a, b) {
            if (isNaN(b)) return ml.ZO;
            var c = [],
                d;
            d = b;
            if (0 == a.Ca) d = ql;
            else {
                d = Math.abs(d);
                var e = Jga(a, 1 >= d ? 0 : rl(d)).yx;
                d = Jga(a, e + rl(Kga(a, d / Math.pow(10, e)).II))
            }
            b /= Math.pow(10, d.yx);
            c.push(d.prefix);
            e = 0 > b || 0 == b && 0 > 1 / b;
            c.push(e ? a.R : a.V);
            if (isFinite(b))
                if (b = b * (e ? -1 : 1) * a.b, a.Ja) {
                    var f = b;
                    if (0 == f) sl(a, f, a.o, c), Lga(a, 0, c);
                    else {
                        var g = Math.floor(Math.log(f) / Math.log(10) + 2E-15);
                        var k = Math.pow(10, g);
                        isFinite(k) && 0 !== k ? f /= k : (k = Math.pow(10, Math.floor(g / 2)), f = f / k / k, 1 == g % 2 && (f = 0 < g ? f / 10 : 10 * f));
                        k = a.o;
                        if (1 <
                            a.Ba && a.Ba > a.o) {
                            for (; 0 != g % a.Ba;) f *= 10, g--;
                            k = 1
                        } else 1 > a.o ? (g++, f /= 10) : (g -= a.o - 1, f *= Math.pow(10, a.o - 1));
                        sl(a, f, k, c);
                        Lga(a, g, c)
                    }
                } else sl(a, b, a.o, c);
            else c.push(ml.jw);
            c.push(e ? a.ma : a.ua);
            c.push(d.pv);
            return c.join("")
        },
        Kga = function(a, b) {
            var c = Math.pow(10, a.S),
                d;
            if (0 >= a.La) d = Math.round(b * c);
            else {
                d = b * c;
                var e = a.S;
                if (d) {
                    var f = a.La - rl(d) - 1;
                    f < -e ? (e = Math.pow(10, e), d = Math.round(d / e) * e) : (e = Math.pow(10, f), d = Math.round(d * e) / e)
                }
                d = Math.round(d)
            }
            e = d;
            isFinite(e) ? (d = Math.floor(e / c), c = Math.floor(e - d * c)) : (d = b, c = 0);
            return {
                II: d,
                nV: c
            }
        },
        sl = function(a, b, c, d) {
            if (a.H > a.S) throw Error("Y");
            d || (d = []);
            b = Kga(a, b);
            var e = Math.pow(10, a.S),
                f = b.II,
                g = b.nV,
                k = 0 < a.H || 0 < g || !1;
            b = a.H;
            k && (b = a.H);
            for (var l = "", m = f; 1E20 < m;) l = "0" + l, m = Math.round(m / 10);
            var l = m + l,
                r = ml.UB,
                m = ml.Ew.charCodeAt(0),
                u = l.length,
                w = 0;
            if (0 < f || 0 < c) {
                for (f = u; f < c; f++) d.push(String.fromCharCode(m));
                if (2 <= a.T.length)
                    for (c = 1; c < a.T.length; c++) w += a.T[c];
                c = u - w;
                if (0 < c)
                    for (var f = a.T, w = u = 0, z, B = ml.ew, A = l.length, L = 0; L < A; L++) {
                        if (d.push(String.fromCharCode(m + 1 * Number(l.charAt(L)))), 1 < A - L)
                            if (z =
                                f[w], L < c) {
                                var Z = c - L;
                                (1 === z || 0 < z && 1 === Z % z) && d.push(B)
                            } else w < f.length && (L === c ? w += 1 : z === L - c - u + 1 && (d.push(B), u += z, w += 1))
                    } else {
                        c = l;
                        l = a.T;
                        f = ml.ew;
                        z = c.length;
                        B = [];
                        for (u = l.length - 1; 0 <= u && 0 < z; u--) {
                            w = l[u];
                            for (A = 0; A < w && 0 <= z - A - 1; A++) B.push(String.fromCharCode(m + 1 * Number(c.charAt(z - A - 1))));
                            z -= w;
                            0 < z && B.push(f)
                        }
                        d.push.apply(d, B.reverse())
                    }
            } else k || d.push(String.fromCharCode(m));
            (a.Na || k) && d.push(r);
            a = "" + (g + e);
            for (e = a.length;
                "0" == a.charAt(e - 1) && e > b + 1;) e--;
            for (f = 1; f < e; f++) d.push(String.fromCharCode(m + 1 * Number(a.charAt(f))))
        },
        Lga = function(a, b, c) {
            c.push(ml.ZB);
            0 > b ? (b = -b, c.push(ml.xO)) : a.Qa && c.push(ml.oP);
            b = "" + b;
            for (var d = ml.Ew, e = b.length; e < a.Ra; e++) c.push(d);
            c.push(b)
        },
        Iga = function(a) {
            a = a.charCodeAt(0);
            if (48 <= a && 58 > a) return a - 48;
            var b = ml.Ew.charCodeAt(0);
            return b <= a && a < b + 10 ? a - b : -1
        },
        pl = function(a, b, c) {
            for (var d = "", e = !1, f = b.length; c[0] < f; c[0]++) {
                var g = b.charAt(c[0]);
                if ("'" == g) c[0] + 1 < f && "'" == b.charAt(c[0] + 1) ? (c[0]++, d += "'") : e = !e;
                else if (e) d += g;
                else switch (g) {
                    case "#":
                    case "0":
                    case ",":
                    case ".":
                    case ";":
                        return d;
                    case "\u00a4":
                        if (c[0] +
                            1 < f && "\u00a4" == b.charAt(c[0] + 1)) c[0]++, d += a.ta;
                        else switch (a.vb) {
                            case 0:
                                d += ll[a.ta][1];
                                break;
                            case 2:
                                var g = a.ta,
                                    k = ll[g],
                                    d = d + (g == k[1] ? g : g + " " + k[1]);
                                break;
                            case 1:
                                d += ll[a.ta][2]
                        }
                        break;
                    case "%":
                        if (!a.U && 1 != a.b) throw Error("Z");
                        if (a.U && 100 != a.b) throw Error("$");
                        a.b = 100;
                        a.U = !1;
                        d += ml.kC;
                        break;
                    case "\u2030":
                        if (!a.U && 1 != a.b) throw Error("Z");
                        if (a.U && 1E3 != a.b) throw Error("$");
                        a.b = 1E3;
                        a.U = !1;
                        d += ml.mC;
                        break;
                    default:
                        d += g
                }
            }
            return d
        },
        ql = {
            prefix: "",
            pv: "",
            yx: 0
        },
        Jga = function(a, b) {
            var c = 1 == a.Ca ? kl.QB : kl.wM;
            null == c && (c =
                kl.QB);
            if (3 > b) return ql;
            b = Math.min(14, b);
            for (var d = c[Math.pow(10, b)], e = b - 1; !d && 3 <= e;) d = c[Math.pow(10, e)], e--;
            if (!d) return ql;
            c = d.other;
            return c && "0" != c ? (c = /([^0]*)(0+)(.*)/.exec(c)) ? {
                prefix: c[1],
                pv: c[3],
                yx: e + 1 - (c[2].length - 1)
            } : ql : ql
        },
        rl = function(a) {
            for (var b = 0; 1 <= (a /= 10);) b++;
            return b
        };
    var Nga = function(a) {
            return 1 == a % 10 && 11 != a % 100 ? "one" : 2 == a % 10 && 12 != a % 100 ? "two" : 3 == a % 10 && 13 != a % 100 ? "few" : "other"
        },
        Oga = Nga,
        Oga = Nga;
    var Pga = function(a) {
            a += "";
            var b = a.indexOf(".");
            return -1 == b ? 0 : a.length - b - 1
        },
        Qga = function(a, b) {
            var c, d = a | 0;
            c = void 0 === b ? Math.min(Pga(a), 3) : b;
            return 1 == d && 0 == c ? "one" : "other"
        },
        Rga = Qga,
        Rga = Qga;
    var ul = function(a) {
            this.b = [];
            this.R = [];
            this.H = new ol(1);
            a && (a = Sga(this, a), this.R = tl(this, a))
        },
        Tga = RegExp("'([{}#].*?)'", "g"),
        Uga = RegExp("''", "g"),
        vl = function(a, b) {
            return Vga(a, b, !1)
        },
        Vga = function(a, b, c) {
            if (0 == a.R.length) return "";
            var d = [];
            wl(a, a.R, b, c, d);
            for (b = d.join(""); 0 < a.b.length;) b = b.replace(a.o(a.b), a.b.pop());
            return b
        },
        wl = function(a, b, c, d, e) {
            for (var f = 0; f < b.length; f++) switch (b[f].type) {
                case 4:
                    e.push(b[f].value);
                    break;
                case 3:
                    var g = b[f].value,
                        k = a,
                        l = e,
                        m = c[g];
                    n(m) ? (k.b.push(m), l.push(k.o(k.b))) :
                        l.push("Undefined parameter - " + g);
                    break;
                case 2:
                    g = b[f].value;
                    k = e;
                    l = g.$r;
                    n(c[l]) ? (l = g[c[l]], n(l) || (l = g.other), wl(a, l, c, d, k)) : k.push("Undefined parameter - " + l);
                    break;
                case 0:
                    g = b[f].value;
                    Wga(a, g, c, Rga, d, e);
                    break;
                case 1:
                    g = b[f].value, Wga(a, g, c, Oga, d, e)
            }
        },
        Wga = function(a, b, c, d, e, f) {
            var g = b.$r,
                k = b.hD,
                l = +c[g];
            isNaN(l) ? f.push("Undefined or invalid parameter - " + g) : (k = l - k, g = b[c[g]], n(g) || (d = a.H.Ta ? d(k, a.H.Ta()) : d(k), g = b[d], n(g) || (g = b.other)), b = [], wl(a, g, c, e, b), c = b.join(""), e ? f.push(c) : (a = Mga(a.H, k), f.push(c.replace(/#/g,
                a))))
        },
        Sga = function(a, b) {
            var c = a.b,
                d = p(a.o, a);
            b = b.replace(Uga, function() {
                c.push("'");
                return d(c)
            });
            return b = b.replace(Tga, function(a, b) {
                c.push(b);
                return d(c)
            })
        },
        xl = function(a) {
            var b = 0,
                c = [],
                d = [],
                e = /[{}]/g;
            e.lastIndex = 0;
            for (var f; f = e.exec(a);) {
                var g = f.index;
                "}" == f[0] ? (c.pop(), 0 == c.length && (f = {
                    type: 1
                }, f.value = a.substring(b, g), d.push(f), b = g + 1)) : (0 == c.length && (b = a.substring(b, g), "" != b && d.push({
                    type: 0,
                    value: b
                }), b = g + 1), c.push("{"))
            }
            b = a.substring(b);
            "" != b && d.push({
                type: 0,
                value: b
            });
            return d
        },
        Xga = /^\s*(\w+)\s*,\s*plural\s*,(?:\s*offset:(\d+))?/,
        Yga = /^\s*(\w+)\s*,\s*selectordinal\s*,/,
        Zga = /^\s*(\w+)\s*,\s*select\s*,/,
        tl = function(a, b) {
            for (var c = [], d = xl(b), e = 0; e < d.length; e++) {
                var f = {};
                if (0 == d[e].type) f.type = 4, f.value = d[e].value;
                else if (1 == d[e].type) {
                    var g = d[e].value;
                    switch (Xga.test(g) ? 0 : Yga.test(g) ? 1 : Zga.test(g) ? 2 : /^\s*\w+\s*/.test(g) ? 3 : 5) {
                        case 2:
                            f.type = 2;
                            f.value = $ga(a, d[e].value);
                            break;
                        case 0:
                            f.type = 0;
                            f.value = aha(a, d[e].value);
                            break;
                        case 1:
                            f.type = 1;
                            f.value = bha(a, d[e].value);
                            break;
                        case 3:
                            f.type = 3, f.value = d[e].value
                    }
                }
                c.push(f)
            }
            return c
        },
        $ga =
        function(a, b) {
            var c = "";
            b = b.replace(Zga, function(a, b) {
                c = b;
                return ""
            });
            var d = {};
            d.$r = c;
            for (var e = xl(b), f = 0; f < e.length;) {
                var g = e[f].value;
                f++;
                if (1 == e[f].type) var k = tl(a, e[f].value);
                d[g.replace(/\s/g, "")] = k;
                f++
            }
            return d
        },
        aha = function(a, b) {
            var c = "",
                d = 0;
            b = b.replace(Xga, function(a, b, e) {
                c = b;
                e && (d = parseInt(e, 10));
                return ""
            });
            var e = {};
            e.$r = c;
            e.hD = d;
            for (var f = xl(b), g = 0; g < f.length;) {
                var k = f[g].value;
                g++;
                if (1 == f[g].type) var l = tl(a, f[g].value);
                e[k.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = l;
                g++
            }
            return e
        },
        bha = function(a,
            b) {
            var c = "";
            b = b.replace(Yga, function(a, b) {
                c = b;
                return ""
            });
            var d = {};
            d.$r = c;
            d.hD = 0;
            for (var e = xl(b), f = 0; f < e.length;) {
                var g = e[f].value;
                f++;
                if (1 == e[f].type) var k = tl(a, e[f].value);
                d[g.replace(/\s*(?:=)?(\w+)\s*/, "$1")] = k;
                f++
            }
            return d
        };
    ul.prototype.o = function(a) {
        return "\ufddf_" + (a.length - 1).toString(10) + "_"
    };
    var cha = ["en", 0, ".", [
            [
                [, 0],
                [" \u2013 "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [", "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1],
                ["/"],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                ["/"],
                [, 1],
                ["/"],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                ["-"],
                [, 1],
                ["-"],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                [":00"]
            ]
        ],
        [
            [
                [, 0],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [":"],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [":"],
                [, 1],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1],
                [", "],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1],
                [", "],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1],
                [" \u2013 "],
                [, 2],
                [", "],
                [, 3]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1],
                [" \u2013 "],
                [, 2],
                [", "],
                [, 3]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1],
                [" \u2013 "],
                [, 2],
                [" "],
                [, 3],
                [", "],
                [, 4]
            ]
        ],
        [
            [
                [, 0],
                [" \u2013 "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [" ("],
                [, 1],
                [")"]
            ]
        ],
        [
            [
                [, 0],
                [" \u2013 "],
                [, 1],
                [" "],
                [, 2]
            ]
        ],
        [
            [
                [, 0],
                [" "],
                [, 1]
            ]
        ],
        [
            [
                [, 0],
                [", "],
                [, 1]
            ]
        ], "SMTWTFS".split(""), "Sun Mon Tue Wed Thu Fri Sat".split(" "), "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), "January February March April May June July August September October November December".split(" "), "January February March April May June July August September October November December".split(" "), ["a", "p"],
        ["am", "pm"],
        ["am", "pm"], "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), 0, 0, 0, [
            [
                [, 0],
                [", "],
                [, 1]
            ]
        ]
    ];
    var dha = function(a) {
        Rg(this, a, null)
    };
    v(dha, Og);
    var yl = function(a) {
        Rg(this, a, eha)
    };
    v(yl, Og);
    var eha = [1],
        fha = function(a) {
            Rg(this, a, null)
        };
    v(fha, Og);
    var zl = function(a) {
        Rg(this, a, null)
    };
    v(zl, Og);
    var Al = function(a) {
        Rg(this, a, null)
    };
    v(Al, Og);
    var Bl = function(a) {
        Rg(this, a, null)
    };
    v(Bl, Og);
    var gha = function() {
        this.b = new dha(cha);
        this.R = Cl(Vg(this.b, zl, 32));
        this.H = Cl(Vg(this.b, zl, 33));
        this.o = Cl(Vg(this.b, zl, 34));
        this.V = Dl(Vg(this.b, Al, 35));
        this.S = Dl(Vg(this.b, Al, 36));
        this.T = Dl(Vg(this.b, Al, 37));
        this.U = Dl(Vg(this.b, Al, 41))
    };
    la(gha);
    var Cl = function(a) {
            return [Sg(a, 1), Sg(a, 2), Sg(a, 3), Sg(a, 4), Sg(a, 5), Sg(a, 6), Sg(a, 7)]
        },
        Dl = function(a) {
            return [, Sg(a, 1), Sg(a, 2), Sg(a, 3), Sg(a, 4), Sg(a, 5), Sg(a, 6), Sg(a, 7), Sg(a, 8), Sg(a, 9), Sg(a, 10), Sg(a, 11), Sg(a, 12)]
        },
        El = function(a, b) {
            return a.H[b]
        },
        Fl = function(a, b) {
            return a.o[b]
        },
        Gl = function(a) {
            return isNaN(a) ? "??" : "" + (a % 12 || 12)
        },
        Hl = function(a) {
            return isNaN(a) ? "??" : (10 > a ? "0" : "") + a
        },
        hha = function(a, b) {
            return isNaN(b) ? "" : 12 > b % 24 ? Sg(Vg(a.b, Bl, 39), 1) : Sg(Vg(a.b, Bl, 39), 2)
        },
        Il = function(a, b) {
            var c = [];
            C(Wg(a, fha, 1),
                function(a) {
                    null != Sg(a, 1) ? c.push(Sg(a, 1)) : (a = b[Sg(a, 2) || 0], c.push(a))
                });
            return c.join("")
        },
        Jl = function(a, b, c) {
            return Il(Vg(a.b, yl, 21), [b, c])
        },
        Kl = function(a, b, c, d) {
            return Il(Vg(a.b, yl, 22), [b, c, d])
        },
        Ll = function(a, b, c) {
            return Il(Vg(a.b, yl, 4), [b, c])
        },
        Ml = function(a, b, c) {
            this.b = new ul(a);
            this.H = new ul(b);
            this.o = new ul(c)
        },
        iha = function() {
            Ml.call(this, "{MINUTES, plural, =1 {1 min}other {# mins}}", "{HOURS, plural, =1 {1 hr}other {# hrs}}", "{DAYS, plural, =1 {1 day}other {# days}}")
        };
    v(iha, Ml);
    var jha = function() {
        Ml.call(this, "{MINUTES, plural, =1 {~1 min}other {~# mins}}", "{HOURS, plural, =1 {~1 hr}other {~# hrs}}", "{DAYS, plural, =1 {~1 day}other {~# days}}")
    };
    v(jha, Ml);
    var kha = function() {};
    var Ol = function(a, b, c) {
        this.o = a || new Nl;
        this.b = b || gha.va();
        this.H = n(c) ? c : !0
    };
    v(Ol, kha);
    Ol.prototype.Uw = function(a) {
        return this.b.R[a]
    };
    Ol.prototype.Zr = function(a) {
        return this.b.o[a]
    };
    var Pl = function(a, b) {
            return b.year == a.o.o().year && 4 > Math.abs(b.month - a.o.o().month)
        },
        Ql = function(a) {
            return Sg(a.b.b, 1)
        },
        Rl = function(a, b, c) {
            return Sg(a.b.b, 2) ? String(b) : c ? a.b.V[b] : a.b.S[b]
        },
        Sl = function(a, b, c) {
            return a.H && !Sg(a.b.b, 2) ? c ? a.b.U[b] : a.b.T[b] : Rl(a, b, c || "ru" == Ql(a))
        };
    h = Ol.prototype;
    h.sc = function(a, b, c) {
        this.o.H() || isNaN(a.hour) ? (b = a.hour, a = a.minute, a = Il(Vg(this.b.b, yl, 16), [isNaN(b) ? "??" : (10 > b ? "0" : "") + b, Hl(a)])) : b && 0 == a.minute ? c ? (b = this.b, a = a.hour, a = Il(Vg(b.b, yl, 15), [Gl(a), isNaN(a) ? "" : 12 > a % 24 ? "" : Sg(Vg(b.b, Bl, 38), 2)])) : (b = this.b, a = a.hour, a = Il(Vg(b.b, yl, 15), [Gl(a), hha(b, a)])) : c ? (b = this.b, c = a.hour, a = a.minute, a = Il(Vg(b.b, yl, 17), [Gl(c), Hl(a), isNaN(c) ? "" : 12 > c % 24 ? "" : Sg(Vg(b.b, Bl, 38), 2)])) : (b = this.b, c = a.hour, a = a.minute, a = Il(Vg(b.b, yl, 17), [Gl(c), Hl(a), hha(b, c)]));
        return a
    };
    h.Lm = function(a) {
        return lha(this, a, this.o)
    };
    h.De = function(a) {
        return mha(this, a, this.o)
    };
    h.Km = function(a, b) {
        var c = b ? El(this.b, a.rd()) : Fl(this.b, a.rd()),
            d = this.Lm(a);
        return Il(Vg(this.b.b, yl, 30), [c, d])
    };
    h.$e = function(a, b, c) {
        c = Sl(this, a.month, c);
        if (Pl(this, a)) {
            var d = a.Ka;
            c = Il(Vg(this.b.b, yl, 18), [c, d])
        } else {
            var d = a.Ka,
                e = a.year;
            c = Il(Vg(this.b.b, yl, 19), [c, d, e])
        }
        a = b ? El(this.b, a.rd()) : Fl(this.b, a.rd());
        return Il(Vg(this.b.b, yl, 31), [a, c])
    };
    var Tl = function(a, b, c) {
        c ? (c = a.Jd(b, !0), b = a.sc(b, !0), a = Il(Vg(a.b.b, yl, 45), [c, b])) : (c = a.Jd(b, Pl(a, b)), b = a.sc(b), a = Il(Vg(a.b.b, yl, 5), [c, b]));
        return a
    };
    h = Ol.prototype;
    h.Rw = function(a) {
        return 1 == a.Ka ? Jl(this.b, Sl(this, a.month, !0), a.Ka) : String(a.Ka)
    };
    h.Jd = function(a, b) {
        var c = Sl(this, a.month, !0);
        return b ? Jl(this.b, c, a.Ka) : Kl(this.b, c, a.Ka, a.year)
    };
    h.Qw = function(a, b, c, d) {
        d = d || this.o.o();
        return this.Jd(a, d.year == b.year && d.year == c.year)
    };
    h.Oi = function(a, b) {
        var c = a.year,
            d = a.month,
            e = a.Ka,
            f = b.year,
            g = b.month,
            k = b.Ka,
            l = Sl(this, d, !0),
            m = Sl(this, g, !0);
        return c == f ? d == g ? e == k ? (c = Il(Vg(this.b.b, yl, 19), [l, e, c]), d = Fl(this.b, a.rd()), Il(Vg(this.b.b, yl, 31), [d, c])) : Il(Vg(this.b.b, yl, 25), [l, e, k, c]) : Il(Vg(this.b.b, yl, 26), [l, e, m, k, c]) : Ll(this.b, Kl(this.b, l, e, c), Kl(this.b, m, k, f))
    };
    h.Pw = function(a) {
        return this.Oi(a.start, Ih(a.end, -1))
    };
    h.Xr = function(a) {
        var b = Rl(this, a.month, !0);
        a = a.year;
        return Il(Vg(this.b.b, yl, 23), [b, a])
    };
    h.To = function(a) {
        var b = Rl(this, a.month);
        a = a.year;
        return Il(Vg(this.b.b, yl, 20), [b, a])
    };
    h.Cp = function(a, b) {
        var c, d;
        a instanceof $h ? (c = a.start, d = a.end) : (c = a, d = b);
        if (isNaN(d.hour)) c = 24 <= (Dh(d, c).b / 3600 | 0) ? this.Pw(new $h(c, d)) : this.$e(c, !0);
        else {
            var e = !(c.minute || d.minute);
            c = Ll(this.b, this.$e(c, !0) + ", " + this.sc(c, e), (c.$a() != d.$a() ? this.$e(d, !0) + ", " : "") + this.sc(d, e))
        }
        return c
    };
    h.Tw = function(a, b, c, d) {
        if (a.H() || b && b.H()) return c = Sl(this, a.month, !0), d = Sl(this, b.month, !0), 24 < (Dh(b, a).b / 3600 | 0) ? Ll(this.b, Jl(this.b, c, a.Ka), Jl(this.b, d, b.Ka)) : this.Jd(a, !0);
        a = a.rb();
        return (b = b ? b.rb() : null) ? c && !d ? Ll(this.b, this.sc(a, !0), Tl(this, b, !0)) : c && d ? Ll(this.b, this.sc(a, !0), this.sc(b, !0)) : a.Ka == b.Ka ? Ll(this.b, Tl(this, a, !0), this.sc(b, !0)) : Ll(this.b, Tl(this, a, !0), Tl(this, b, !0)) : c ? this.sc(a, !0) : Tl(this, a, !0)
    };
    h.fn = function(a, b, c) {
        var d = this.sc(a.start.kd(), b, c);
        a = this.sc(a.end.kd(), b, c);
        return Il(Vg(this.b.b, yl, 27), [d, a])
    };
    h.So = function(a) {
        return "ru" == Ql(this) ? a.substring(0, 1).toUpperCase() + a.substring(1) : a
    };
    h.Yr = function(a) {
        var b = this.So(El(this.b, a.rd()));
        a = this.Lm(a);
        return Il(Vg(this.b.b, yl, 30), [b, a])
    };
    h.Sw = function(a) {
        return this.So(this.b.H[a])
    };
    var nha = function(a, b, c, d) {
            var e = a.Ka,
                f = a.hour;
            a = a.minute;
            c = c || (d ? new jha : new iha);
            b && (!f || !a || a % 15 || (f += a / 60, a = 0), !e || !f || a || f % 6 || (e += f / 24, f = 0));
            b = [];
            0 !== e && b.push(vl(c.o, {
                DAYS: e
            }));
            (0 !== f || e && a) && b.push(vl(c.H, {
                HOURS: f
            }));
            0 !== a && b.push(vl(c.b, {
                MINUTES: a
            }));
            return b.length ? b.join(", ") : vl(c.b, {
                MINUTES: 0
            })
        },
        Nl = function(a, b, c) {
            this.S = a || !1;
            this.R = b || 0;
            this.T = c || Th(new Date)
        };
    Nl.prototype.H = function() {
        return this.S
    };
    Nl.prototype.b = function() {
        return this.R
    };
    Nl.prototype.o = function() {
        return this.T
    };
    var oha = function(a, b, c) {
            if (b) {
                var d;
                if (d = 10 > b) d = "bg" == Ql(a) || "hi" == Ql(a) || "lv" == Ql(a) || "uk" == Ql(a) || 2 == c.b() && "ko" != Ql(a);
                a = d ? "0" + b : String(b)
            } else a = "??";
            return a
        },
        mha = function(a, b, c) {
            var d = oha(a, b.Ka, c),
                e = oha(a, b.month, c);
            b = b.year || "????";
            switch (c.b()) {
                case 1:
                    return Il(Vg(a.b.b, yl, 8), [d, e, b]);
                case 2:
                    return Il(Vg(a.b.b, yl, 13), [b, e, d]);
                default:
                    return Il(Vg(a.b.b, yl, 12), [e, d, b])
            }
        },
        lha = function(a, b, c) {
            switch (c.b()) {
                case 1:
                    return c = b.Ka, b = b.month, Il(Vg(a.b.b, yl, 7), [c, b]);
                case 0:
                    return c = b.month, b = b.Ka, Il(Vg(a.b.b, yl, 10), [c, b]);
                case 2:
                    return c = b.month, b = b.Ka, Il(Vg(a.b.b, yl, 11), [c, b]);
                default:
                    return c = b.month, b = b.Ka, Il(Vg(a.b.b, yl, 10), [c, b])
            }
        };
    var Ul = function() {};
    v(Ul, Nl);
    var pha = {
        MDY: 0,
        YMD: 2,
        DMY: 1
    };
    Ul.prototype.H = function() {
        return ih(M()).On()
    };
    Ul.prototype.b = function() {
        var a = ih(M()).lG();
        return pha[a]
    };
    Ul.prototype.o = function() {
        return ki(Vl())
    };
    la(Ul);
    var Wl = new Ol(Ul.va()),
        Vl = function() {
            return mi(M())
        },
        Xl = function() {
            return ki(Vl())
        };
    var Yl = function(a, b) {
        for (var c = {}, d = 0; d < b.length; ++d) c[b[d]] = 1;
        for (var e = [], d = 0; d < a.length; ++d) c[a[d]] || e.push(a[d]);
        return e
    };
    var Zl = function(a) {
        J.call(this);
        this.R = a
    };
    v(Zl, J);
    Zl.prototype.getId = function() {
        return this.R
    };
    Zl.prototype.getKey = function() {
        return this.R
    };
    Zl.prototype.nc = function() {
        return !1
    };
    var $l = 0;
    var am = function(a) {
        J.call(this);
        this.Ko = ($l++).toString(36);
        this.Ac = new J;
        a = a || [];
        for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c],
                e = d.getKey();
            b[e] = d;
            d.oe && d.oe(this.Ac)
        }
        this.Ra = b;
        this.Ik = a.length;
        this.Ca = db(b);
        this.vd = a.length;
        G(this.Ac, "change", p(this.IZ, this))
    };
    v(am, J);
    h = am.prototype;
    h.Un = null;
    h.Kt = !1;
    h.Oj = 0;
    h.wa = function() {
        am.qa.wa.call(this);
        for (var a in this.Ca) y(this.Ca[a]);
        this.Ac.Oa()
    };
    h.size = function() {
        return this.vd
    };
    h.isEmpty = function() {
        return 0 == this.vd
    };
    h.getItem = function(a) {
        return this.Ca[a]
    };
    h.contains = function(a) {
        return $a(this.Ca, a)
    };
    h.add = function(a) {
        var b = a.getKey();
        if ($a(this.Ca, b)) return !1;
        this.Ca[b] = a;
        this.vd++;
        a.oe && a.oe(this.Ac);
        this.Oj && a.Hc && a.Hc();
        bm(this, "k", a);
        cm(this);
        return !0
    };
    h.remove = function(a) {
        if (!$a(this.Ca, a)) return !1;
        var b = this.Ca[a];
        cb(this.Ca, a);
        this.vd--;
        b.oe && b.oe(null);
        this.Oj && b.Dc && b.Dc();
        bm(this, "l", b);
        cm(this);
        return !0
    };
    h.removeItem = function(a) {
        this.remove(a.getKey())
    };
    h.mc = function() {
        return Za(this.Ca)
    };
    h.qd = function() {
        return Ya(this.Ca)
    };
    h.lz = function() {
        return 0 < this.Oj
    };
    h.Hc = function() {
        this.Oj++;
        if (1 == this.Oj)
            for (var a in this.Ca) {
                var b = this.Ca[a];
                b.Hc && b.Hc()
            }
    };
    h.Dc = function() {
        if (1 == this.Oj)
            for (var a in this.Ca) {
                var b = this.Ca[a];
                b.Dc && b.Dc()
            }
        this.Oj--;
        cm(this)
    };
    var bm = function(a, b, c) {
        var d = a.Un || {};
        b in d || (d[b] = []);
        d[b].push(c);
        a.Un = d
    };
    h = am.prototype;
    h.IZ = function(a) {
        bm(this, "change", a.target);
        this.Kt = !0;
        cm(this)
    };
    h.ub = function(a) {
        if (this.vd != this.Ik) return !0;
        for (var b in this.Ca) {
            var c = this.Ca[b];
            if (!a || a(c))
                if (c.ub && c.ub(a) || !$a(this.Ra, b)) return !0
        }
        return !1
    };
    h.equals = function(a) {
        return a === this
    };
    h.clone = function() {
        throw Error("fa");
    };
    h.hg = function(a) {
        if (!(a instanceof this.constructor)) throw Error("ga`" + this.constructor);
        this.Hc();
        this.Nq(a);
        this.Dc()
    };
    h.Nq = function() {
        throw Error("fa");
    };
    h.getKey = function() {
        return this.Ko
    };
    var cm = function(a) {
            if (!a.Oj && (a.Un || a.Kt)) {
                a.Hc();
                var b = a.Kt;
                a.Kt = !1;
                a.Un && (b = new qha(a.Un), a.Un = null, a.ya(b), b = !0);
                b && a.ya("change");
                a.Dc()
            }
        },
        qha = function(a) {
            D.call(this, "m");
            this.o = a
        };
    v(qha, D);
    var dm = function(a, b) {
        return a.o[b] || []
    };
    var em = function(a, b, c, d, e) {
            this.o = b;
            this.S = ck(a);
            this.H = c;
            this.T = d;
            this.R = e;
            this.b = (b ? Ufa(c) : dk(a)) || Ufa(c)
        },
        fm = function(a) {
            a = ck(a);
            return new em(a, !1, Zj(a, 0), "#000000", void 0)
        },
        gm = function(a, b) {
            var c = ak(a);
            return new em(c, !0, a, b || "#000000", a)
        };
    em.prototype.wd = function() {
        return this.S
    };
    var hm = function(a) {
            return a.o ? a.T : "#000000"
        },
        im = function(a) {
            return "#000000" != hm(a)
        };
    var jm = function(a, b, c) {
        x.call(this);
        this.H = a;
        this.b = {};
        this.o = {};
        this.R = c || [];
        rha(this, b || [])
    };
    v(jm, x);
    var km = function(a, b, c) {
            a.b[b] = c;
            b = c.wd();
            a.o[b] = (a.o[b] || 0) + 1
        },
        rha = function(a, b) {
            for (var c = 0, d = b.length; c < d; c++) {
                var e = b[c],
                    f = a.H[e];
                n(f) && km(a, e, f)
            }
            c = 0;
            for (d = b.length; c < d; ++c) e = b[c], n(a.b[e]) || (f = bga(a.o, a.R), km(a, e, fm(f)))
        };
    jm.prototype.wa = function() {
        jm.qa.wa.call(this);
        this.o = this.b = this.H = null
    };
    jm.prototype.clone = function() {
        var a = new jm(db(this.H));
        a.b = db(this.b);
        a.o = db(this.o);
        return a
    };
    var lm = function(a) {
        am.call(this);
        this.Ba = a || new jm({});
        this.S = {}
    };
    v(lm, am);
    lm.prototype.wa = function() {
        this.S = null;
        lm.qa.wa.call(this)
    };
    lm.prototype.add = function(a, b, c) {
        this.Hc();
        var d = lm.qa.add.call(this, a);
        b || (this.S[a.getId()] = a, bm(this, "n", a));
        c && km(this.Ba, a.getId(), c);
        this.Dc();
        return d
    };
    lm.prototype.remove = function(a) {
        this.Hc();
        var b = this.S[a];
        b && (delete this.S[a], bm(this, "n", b));
        a = lm.qa.remove.call(this, a);
        this.Dc();
        return a
    };
    lm.prototype.R = function(a) {
        pa(a) || (a = a.getId());
        return a in this.S
    };
    var vm = function() {
        J.call(this);
        this.o = M();
        this.b = {}
    };
    v(vm, J);
    la(vm);
    var wm = "!";
    vm.prototype.add = function(a, b) {
        this.b[a] = b;
        this.ya(new sha(a, b))
    };
    vm.prototype.get = function(a) {
        return this.b[a]
    };
    vm.prototype.remove = function(a) {
        delete this.b[a]
    };
    vm.prototype.forEach = function(a) {
        for (var b in this.b)
            if (!1 === a(b, this.b[b])) break
    };
    var xm = function(a, b) {
        var c = null;
        a.forEach(function(a, e) {
            if (e.S == b) return c = a, !1
        });
        return c
    };
    vm.prototype.T = function(a) {
        a[1] = parseInt(a[1], 10);
        a[2] = parseInt(a[2], 10)
    };
    vm.prototype.H = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R, ha, ka, ja, fa, za, ua, sa, dc, Bb, Rd, re) {
        if (70 > b) {
            var Xb = ih(this.o).get(a + "/name");
            Xb && (e = Xb)
        }
        for (var Xb = [], $e = 0; $e < re.length; $e++) Xb.push(parseInt(re[$e], 10));
        this.add(a, new ym(b, c, d, e, f, g, k, l, m, r, !1, u, a, w, z, B, A, L, Z, R, ha, ka, ja, fa, za, ua, sa, dc, Bb, Rd, Xb))
    };
    vm.prototype.R = function(a) {
        wm = a
    };
    var sha = function(a, b) {
        D.call(this, "detailsadd");
        this.id = a;
        this.Cd = b
    };
    v(sha, D);
    var ym = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R, ha, ka, ja, fa, za, ua, sa, dc, Bb, Rd, re, Xb) {
        this.id = w;
        this.Nd = a;
        this.U = b;
        this.type = c;
        this.Na = this.nd = d;
        this.tz = e;
        this.R = ha;
        this.location = f;
        this.Cd = g;
        this.Ca = k;
        this.Qc = re;
        this.Ba = l;
        this.o = m;
        this.b = r;
        this.Ta = L;
        this.origin = u;
        this.La = z;
        this.S = B;
        this.Sb = A;
        this.df = Z;
        this.Ja = R;
        this.H = ka;
        this.V = ja;
        this.ma = fa;
        this.ta = za;
        this.T = !!ua;
        this.ua = !!sa;
        this.Za = dc;
        this.Qa = !!Bb;
        this.Ra = Rd;
        this.vb = Xb
    };
    var zm = !1,
        Am = function(a) {
            return !!a && /^#[0-9a-fA-F]{6}$/.test(a)
        },
        Bm = function(a) {
            var b = vm.va(),
                c = a.qb(),
                d = b.get(c);
            d || (c = xm(b, c)) && (d = b.get(c));
            if (!d || 60 > d.Nd) return "";
            a = a.S.eventColor;
            return Am(a) ? zm ? tha(a) : uha(a) : ""
        },
        Cm = function(a) {
            switch (a) {
                case "#a4bdfc":
                    return "#e4ebfe";
                case "#5484ed":
                    return "#dde6fb";
                case "#7ae7bf":
                    return "#d7f8ec";
                case "#51b749":
                    return "#dcf1db";
                case "#dbadff":
                    return "#f4e6ff";
                case "#ff887c":
                    return "#ffdbd7";
                case "#dc2127":
                    return "#f8d3d4";
                case "#fbd75b":
                    return "#fef3cd";
                case "#ffb878":
                    return "#ffead6";
                case "#46d6db":
                    return "#c7f3f4";
                case "#e1e1e1":
                    return "#f6f6f6";
                default:
                    return fk("#ffffff", a, .33)
            }
        },
        uha = function(a) {
            switch (a) {
                case "#a4bdfc":
                case "#5484ed":
                case "#46d6db":
                    return "#1111cc";
                case "#7ae7bf":
                case "#51b749":
                    return "#228822";
                case "#dbadff":
                    return "#551a8b";
                case "#ff887c":
                case "#dc2127":
                    return "#ff0000";
                case "#fbd75b":
                    return "#fbb818";
                case "#ffb878":
                    return "#ff6600";
                case "#e1e1e1":
                    return "#bfbfbf";
                default:
                    return a
            }
        },
        tha = function(a) {
            switch (a) {
                case "#1111cc":
                    return "#a4bdfc";
                case "#228822":
                    return "#7ae7bf";
                case "#551a8b":
                    return "#dbadff";
                case "#ff0000":
                case "#cc0066":
                    return "#ff887c";
                case "#fbb818":
                    return "#fbd75b";
                case "#ff6600":
                    return "#ffb878";
                case "#bfbfbf":
                    return "#e1e1e1";
                default:
                    return a
            }
        },
        vha = function(a) {
            return "#a4bdfc" == a || "#7ae7bf" == a || "#dbadff" == a || "#fbd75b" == a || "#ffb878" == a || "#e1e1e1" == a
        };
    var Dm = function(a) {
        this.b = {};
        this.o = {};
        if (a)
            for (var b in a) {
                var c = b,
                    d = a[b];
                this.b[c] = d;
                this.o[d] = c
            }
    };
    Dm.prototype.get = function(a) {
        return this.b[a]
    };
    var wha = function() {};
    wha.prototype.b = function(a) {
        return a
    };
    var Em = function() {
        var a = new wha;
        return p(a.b, a)
    };
    var xha = Em();
    var yha = Em();
    var zha = Em();
    var Fm = function() {
        this.o = new Dm({
            AVAILABLE: 1,
            BLOCKING: 2,
            BUSY: 0
        });
        this.H = new Dm({
            SECRET: 4,
            PRIVATE: 3,
            PUBLIC: 2,
            DEFAULT: 1
        });
        this.b = new Dm({
            0: 100,
            2: 102,
            3: 103,
            4: 104,
            5: 105,
            6: 106,
            7: 107,
            8: 108,
            12: 112
        });
        this.R = new Dm({
            VIEW: 0,
            TEMPLATE: 1,
            RESPOND: 2,
            EDIT: 3,
            CREATE: 4,
            VIEW_ORIGINAL: 5,
            RESTORE_ORIGINAL: 6,
            INVITE_YOURSELF: 7
        })
    };
    la(Fm);
    E && Bd(8);
    var Gm = {},
        Aha = {},
        Hm = {},
        Im = {},
        Bha = {},
        Cha = {},
        Jm = {},
        Km = function() {
            throw Error("ha");
        };
    Km.prototype.Lh = null;
    Km.prototype.getContent = function() {
        return this.content
    };
    Km.prototype.toString = function() {
        return this.content
    };
    var Lm = function(a) {
            if (a.Cg === Jm) return id(a.toString());
            if (a.Cg !== Gm) throw Error("ia");
            return Md(zc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), a.toString(), a.Lh)
        },
        Dha = function() {
            Km.call(this)
        };
    v(Dha, Km);
    var Mm = function(a, b) {
        this.b = this.U = this.R = "";
        this.T = null;
        this.V = this.o = "";
        this.S = !1;
        var c;
        a instanceof Mm ? (this.S = n(b) ? b : a.S, Nm(this, a.R), this.U = a.U, this.b = a.b, Om(this, a.T), Pm(this, a.o), Qm(this, a.H.clone()), Rm(this, a.V)) : a && (c = String(a).match(yi)) ? (this.S = !!b, Nm(this, c[1] || "", !0), this.U = Sm(c[2] || ""), this.b = Sm(c[3] || "", !0), Om(this, c[4]), Pm(this, c[5] || "", !0), Qm(this, c[6] || "", !0), Rm(this, c[7] || "", !0)) : (this.S = !!b, this.H = new Tm(null, 0, this.S))
    };
    Mm.prototype.toString = function() {
        var a = [],
            b = this.R;
        b && a.push(Um(b, Eha, !0), ":");
        var c = this.b;
        if (c || "file" == b) a.push("//"), (b = this.U) && a.push(Um(b, Eha, !0), "@"), a.push(qb(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.T, null != c && a.push(":", String(c));
        if (c = this.o) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Um(c, "/" == c.charAt(0) ? Fha : Gha, !0));
        (c = this.H.toString()) && a.push("?", c);
        (c = this.V) && a.push("#", Um(c, Hha));
        return a.join("")
    };
    Mm.prototype.clone = function() {
        return new Mm(this)
    };
    var Nm = function(a, b, c) {
            a.R = c ? Sm(b, !0) : b;
            a.R && (a.R = a.R.replace(/:$/, ""))
        },
        Om = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("ja`" + b);
                a.T = b
            } else a.T = null
        },
        Pm = function(a, b, c) {
            a.o = c ? Sm(b, !0) : b;
            return a
        },
        Qm = function(a, b, c) {
            b instanceof Tm ? (a.H = b, Iha(a.H, a.S)) : (c || (b = Um(b, Jha)), a.H = new Tm(b, 0, a.S));
            return a
        },
        Rm = function(a, b, c) {
            a.V = c ? Sm(b) : b;
            return a
        };
    Mm.prototype.rg = function() {
        return !1
    };
    var Vm = function(a) {
            return a instanceof Mm ? a.clone() : new Mm(a, void 0)
        },
        Sm = function(a, b) {
            return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
        },
        Um = function(a, b, c) {
            return pa(a) ? (a = encodeURI(a).replace(b, Kha), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
        },
        Kha = function(a) {
            a = a.charCodeAt(0);
            return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
        },
        Eha = /[#\/\?@]/g,
        Gha = /[\#\?:]/g,
        Fha = /[\#\?]/g,
        Jha = /[\#\?@]/g,
        Hha = /#/g,
        Tm = function(a, b, c) {
            this.o = this.b = null;
            this.H = a || null;
            this.R = !!c
        },
        Wm = function(a) {
            a.b || (a.b = new Qd, a.o = 0, a.H && gfa(a.H, function(b, c) {
                a.add(rb(b), c)
            }))
        };
    h = Tm.prototype;
    h.$b = function() {
        Wm(this);
        return this.o
    };
    h.add = function(a, b) {
        Wm(this);
        this.H = null;
        a = Xm(this, a);
        var c = this.b.get(a);
        c || this.b.set(a, c = []);
        c.push(b);
        this.o += 1;
        return this
    };
    h.remove = function(a) {
        Wm(this);
        a = Xm(this, a);
        return Ud(this.b, a) ? (this.H = null, this.o -= this.b.get(a).length, this.b.remove(a)) : !1
    };
    h.clear = function() {
        this.b = this.H = null;
        this.o = 0
    };
    h.isEmpty = function() {
        Wm(this);
        return 0 == this.o
    };
    var Lha = function(a, b) {
        Wm(a);
        b = Xm(a, b);
        return Ud(a.b, b)
    };
    h = Tm.prototype;
    h.Kh = function(a) {
        var b = this.dc();
        return Zb(b, a)
    };
    h.mc = function() {
        Wm(this);
        for (var a = this.b.dc(), b = this.b.mc(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.dc = function(a) {
        Wm(this);
        var b = [];
        if (pa(a)) Lha(this, a) && (b = ec(b, this.b.get(Xm(this, a))));
        else {
            a = this.b.dc();
            for (var c = 0; c < a.length; c++) b = ec(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        Wm(this);
        this.H = null;
        a = Xm(this, a);
        Lha(this, a) && (this.o -= this.b.get(a).length);
        this.b.set(a, [b]);
        this.o += 1;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.dc(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    h.setValues = function(a, b) {
        this.remove(a);
        0 < b.length && (this.H = null, this.b.set(Xm(this, a), fc(b)), this.o += b.length)
    };
    h.toString = function() {
        if (this.H) return this.H;
        if (!this.b) return "";
        for (var a = [], b = this.b.mc(), c = 0; c < b.length; c++)
            for (var d = b[c], e = qb(d), d = this.dc(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + qb(d[f]));
                a.push(g)
            }
        return this.H = a.join("&")
    };
    h.clone = function() {
        var a = new Tm;
        a.H = this.H;
        this.b && (a.b = this.b.clone(), a.o = this.o);
        return a
    };
    var Xm = function(a, b) {
            var c = String(b);
            a.R && (c = c.toLowerCase());
            return c
        },
        Iha = function(a, b) {
            b && !a.R && (Wm(a), a.H = null, a.b.forEach(function(a, b) {
                var c = b.toLowerCase();
                b != c && (this.remove(b), this.setValues(c, a))
            }, a));
            a.R = b
        };
    Tm.prototype.T = function(a) {
        for (var b = 0; b < arguments.length; b++) cd(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var Mha = /^(https?:\/\/[^/]*)\/calendar(\/((hosted)|(a)|(b))\/[^/]*)?/,
        Ym = "undefined" != typeof window ? window.location.href : "";
    Ym.replace(/#.*/, "");
    var Zm = function(a) {
            return a && a.match(/^(?:https?:)?\/\/(?:[^:\/]+\.)?google\.com(?::\d+)?(?:\/.*$|$)/) ? a.replace(/^https?:\/\//i, "//") : a
        },
        $m = function() {
            var a = Ym.match(Mha);
            return a && a[0] || null
        },
        Nha = function(a) {
            a = Vm(a || "");
            return "http" != a.R && "https" != a.R && "" != a.R ? "" : a.toString()
        };
    var bn = function(a, b) {
            a.innerHTML = an(b)
        },
        dn = function(a, b, c, d) {
            a.innerHTML = an(b(c || cn, void 0, d))
        },
        an = function(a) {
            if (!ta(a)) return String(a);
            if (a instanceof Km) {
                if (a.Cg === Gm) return a.getContent();
                if (a.Cg === Jm) return sb(a.getContent())
            }
            return "zSoyz"
        },
        cn = {};
    var en = function(a) {
        Rg(this, a, Oha)
    };
    v(en, Og);
    var Oha = [1];
    var fn = function(a) {
        Rg(this, a, null)
    };
    v(fn, Og);
    var gn = function(a) {
        Rg(this, a, Pha)
    };
    v(gn, Og);
    var Pha = [14, 15, 16, 21];
    gn.prototype.wb = function() {
        return Sg(this, 3)
    };
    gn.prototype.Wb = function() {
        return Sg(this, 4)
    };
    var hn = function(a) {
        Rg(this, a, null)
    };
    v(hn, Og);
    hn.prototype.getKey = function() {
        return Sg(this, 1)
    };
    hn.prototype.hb = function() {
        return Sg(this, 2)
    };
    hn.prototype.Jb = function(a) {
        Ug(this, 2, a)
    };
    var jn = function(a) {
        Rg(this, a, null)
    };
    v(jn, Og);
    jn.prototype.getKey = function() {
        return Sg(this, 1)
    };
    jn.prototype.hb = function() {
        return Sg(this, 2)
    };
    jn.prototype.Jb = function(a) {
        Ug(this, 2, a)
    };
    var kn = function(a) {
        Rg(this, a, null)
    };
    v(kn, Og);
    kn.prototype.getUrl = function() {
        return Tg(this, 1, "")
    };
    kn.prototype.getTitle = function() {
        return Tg(this, 2, "")
    };
    kn.prototype.setTitle = function(a) {
        Ug(this, 2, a)
    };
    var Rha = function(a) {
        Rg(this, a, Qha)
    };
    v(Rha, Og);
    var Qha = [1];
    var ln = function(a, b) {
        this.H = a;
        this.o = Nha(b)
    };
    ln.prototype.getTitle = function() {
        return this.H || ""
    };
    var mn = function(a) {
        return !!a.o && "CHIP" != a.b.d
    };
    ln.prototype.Dq = function() {
        return this.o ? !0 : !1
    };
    var nn = function(a, b) {
            return null != a && a.Cg === b
        },
        Sha = function(a) {
            if (null != a) switch (a.Lh) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        on = function() {
            Km.call(this)
        };
    v(on, Km);
    on.prototype.Cg = Gm;
    var O = function(a) {
            return null != a && a.Cg === Gm ? a : a instanceof fd ? N(gd(a), a.ul()) : N(sb(String(String(a))), Sha(a))
        },
        pn = function() {
            Km.call(this)
        };
    v(pn, Km);
    pn.prototype.Cg = Aha;
    pn.prototype.Lh = 1;
    var qn = function() {
        Km.call(this)
    };
    v(qn, Km);
    qn.prototype.Cg = Hm;
    qn.prototype.Lh = 1;
    var rn = function() {
        Km.call(this)
    };
    v(rn, Km);
    rn.prototype.Cg = Im;
    rn.prototype.Lh = 1;
    var sn = function() {
        Km.call(this)
    };
    v(sn, Km);
    sn.prototype.Cg = Bha;
    sn.prototype.Lh = 1;
    var tn = function() {
        Km.call(this)
    };
    v(tn, Dha);
    tn.prototype.Cg = Cha;
    tn.prototype.Lh = 1;
    var un = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a) {
                return new b(String(a))
            }
        },
        N = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a, d) {
                var c = new b(String(a));
                void 0 !== d && (c.Lh = d);
                return c
            }
        }(on),
        Tha = un(pn),
        vn = un(qn);
    un(rn);
    var wn = un(sn),
        xn = un(tn),
        yn = function(a, b) {
            for (var c in b) c in a || (a[c] = b[c]);
            return a
        },
        zn = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a) {
                return (a = String(a)) ? new b(a) : ""
            }
        },
        An = function(a) {
            function b(a) {
                this.content = a
            }
            b.prototype = a.prototype;
            return function(a, d) {
                var c = String(a);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.Lh = d);
                return c
            }
        }(on),
        Uha = zn(pn);
    zn(rn);
    var Vha = zn(qn),
        Bn = zn(sn),
        Cn = zn(tn),
        En = function(a) {
            return nn(a, Gm) ? Dn(a.getContent()) : sb(String(a))
        },
        Wha = function(a) {
            return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
        },
        P = function(a) {
            return nn(a, Gm) ? Dn(String(a.getContent()).replace(Xha, "").replace(Yha, "&lt;")) : sb(String(a))
        },
        Gn = function(a) {
            return nn(a, Gm) ? String(String(a.getContent()).replace(Xha, "").replace(Yha, "&lt;")).replace(Zha, Fn) : String(a).replace($ha, Fn)
        },
        Hn = function(a) {
            nn(a, Bha) ? a = a.getContent().replace(/([^"'\s])$/, "$1 ") : (a = String(a),
                a = aia.test(a) ? a : "zSoyz");
            return a
        },
        Ln = function(a) {
            nn(a, Hm) || nn(a, Im) ? a = In(a) : a instanceof Qc ? a = In(Rc(a)) : a instanceof Uc ? a = In(Vc(a)) : (a = String(a), a = bia.test(a) ? a.replace(Jn, Kn) : "about:invalid#zSoyz");
            return a
        },
        Mn = function(a) {
            nn(a, Hm) || nn(a, Im) ? a = In(a) : a instanceof Qc ? a = In(Rc(a)) : a instanceof Uc ? a = In(Vc(a)) : (a = String(a), a = cia.test(a) ? a.replace(Jn, Kn) : "about:invalid#zSoyz");
            return a
        },
        Q = function(a) {
            nn(a, Cha) ? a = Wha(a.getContent()) : null == a ? a = "" : a instanceof Mc ? a = Wha(Nc(a)) : (a = String(a), a = dia.test(a) ? a :
                "zSoyz");
            return a
        },
        eia = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Fn = function(a) {
            return eia[a]
        },
        fia = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\x0B": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        Kn = function(a) {
            return fia[a]
        },
        gia = /[\x00\x22\x27\x3c\x3e]/g,
        $ha = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Zha = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Jn = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        dia = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,
        bia = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        cia = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        aia = /^(?!on|src|(?:style|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i,
        Dn = function(a) {
            return String(a).replace(gia, Fn)
        },
        In = function(a) {
            return String(a).replace(Jn, Kn)
        },
        Xha = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Yha = /</g;
    var Nn = function(a) {
        ln.call(this, a.t, Zm(a.i));
        this.b = a;
        this.b.u = Nha(this.b.u)
    };
    v(Nn, ln);
    var hia = fb([2, 1, 0, 3]);
    Nn.prototype.getHeight = function() {
        return this.b.h
    };
    Nn.prototype.getUrl = function() {
        return this.b.u
    };
    var On = function(a, b, c, d, e) {
        this.uc = a;
        this.Na(b, c);
        this.Ph = d ? d : 0;
        this.S = e || {}
    };
    h = On.prototype;
    h.ne = "";
    h.Ke = "";
    h.ve = O("");
    h.He = "";
    h.dg = 3;
    var iia = Em();
    h = On.prototype;
    h.Ee = -1;
    h.ui = function(a) {
        this.Ee = a
    };
    h.getId = function() {
        return this.uc
    };
    h.wb = function() {
        return this.uf
    };
    h.Wb = function() {
        return this.Hb
    };
    var Pn = function(a) {
            return new $h(a.wb(), a.Wb())
        },
        jia = function(a, b) {
            return b(a.wb().Wa(), a.Wb().Wa())
        },
        kia = function(a, b) {
            return a.Wb().Wa() < b.Wa()
        },
        Qn = function(a) {
            return Dh(a.Wb(), a.wb())
        };
    On.prototype.Na = function(a, b) {
        this.uf = a;
        this.Hb = b;
        var c = a.Wa();
        this.b = isNaN(a.hour);
        this.Ja = b.Wa() >= yh(c);
        this.Ta = !this.b && 0 == Nh(b);
        this.Fb = (c << 1) + !this.Ja + c % 1
    };
    On.prototype.le = function() {
        return 1 == this.Ph
    };
    On.prototype.getTitle = function() {
        return this.ve.getContent()
    };
    var Rn = function(a) {
        return mb(a.getTitle()) ? O("(No title)") : a.ve
    };
    h = On.prototype;
    h.setTitle = function(a) {
        this.ve = O(ub(a))
    };
    h.qb = function() {
        return this.Lb
    };
    h.Qf = function() {
        return null
    };
    h.hd = function() {
        return this.Ce
    };
    h.nc = function() {
        return !1
    };
    h.qg = function() {
        return !1
    };
    h.nz = function() {
        return !1
    };
    h.equals = function(a) {
        return this == a ? !0 : !!a && a.getId() == this.getId()
    };
    var Sn = function(a, b, c) {
        return b.Fb - c.Fb || c.Wb().Wa() - b.Wb().Wa() || a(b, c) || pb(b.getTitle(), c.getTitle())
    };
    var lia = function(a) {
        if (null == a) return !1;
        a = Ng(a, !0);
        return Oa(a) ? Sg(new fn(Qa(a)), 1) || !1 : !1
    };
    var Tn = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R, ha, ka, ja, fa) {
        On.call(this, a, c, d, l, B);
        this.Za = [];
        mia(this, b, e, f, g, k, m, r, u, w, z, A, L, Z, R, ha, ka, ja, fa)
    };
    v(Tn, On);
    var nia = RegExp("\u0001", "g"),
        oia = RegExp("\u0002", "g");
    Tn.prototype.Na = function(a, b) {
        Tn.qa.Na.call(this, a.rb(), b.rb());
        var c = isNaN(a.hour);
        this.b = c;
        this.Ta = !c && this.Ta;
        this.U = a.lc();
        c = b.lc();
        if (c == this.U || b.hour || b.minute || b.second) c = yh(c);
        this.ma = c
    };
    Tn.prototype.update = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R, ha, ka, ja, fa) {
        this.uc = a;
        this.Na(c, d);
        this.Ph = l ? l : 0;
        this.S = B || {};
        mia(this, b, e, f, g, k, m, r, u, w, z, A, L, Z, R, ha, ka, ja, fa)
    };
    var mia = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R) {
            a.setTitle(b || "");
            a.Lb = d;
            a.He = k || "";
            a.ne = c || "";
            a.Ke = e || "";
            Fm.va();
            a.ui(f & 7);
            a.T = f;
            a.Ra = g;
            pa(m) ? m != a.R && (a.R = m, a.V = void 0) : m != a.V && (a.V = m, a.R = void 0);
            a.H = l;
            a.o = r || {};
            a.ta = u;
            n(w) && (a.Ca = w);
            z ? a.Ba = z : a.Ba || (a.Ba = new pia);
            n(B) ? a.vb = B : a.vb = null;
            b = ik(M()).isEnabled(41);
            a.ua = null;
            a.La = null;
            if (1 != A || b) n(A) && (a.ua = A), n(L) && (a.La = L);
            Z && (a.Za = Z || []);
            a.Qa = null;
            a.Sb = null;
            a.Qc = R ? R : new en
        },
        Un = function(a) {
            if (!a.V) {
                var b;
                if (a.R)
                    if (b = a.R, 0 == b.length) b = {};
                    else {
                        b =
                            b.split("\u0001");
                        for (var c = b.length, d = {}, e = 0; e < c; ++e) {
                            var f = b[e].split("\u0002"),
                                g = {};
                            g.jc = Number(f[1]);
                            g.xq = !!f[2];
                            g.ue = f[3] || null;
                            g.mi = f[4] | 0;
                            g.Bj = f[5] || null;
                            d[f[0]] = g
                        }
                        b = d
                    }
                else b = {};
                a.V = b
            }
            return a.V
        },
        Vn = function(a) {
            return Za(Un(a))
        },
        Wn = function(a, b) {
            var c = Un(a)[b];
            return c ? db(c) : c
        },
        Xn = function(a, b) {
            return (a.T & b) == b
        },
        Yn = function(a, b, c) {
            a.T = c ? a.T | b : a.T & ~b
        };
    Tn.prototype.ui = function(a) {
        Tn.qa.ui.call(this, a);
        this.T &= -8;
        this.T |= a
    };
    Tn.prototype.qg = function() {
        return Xn(this, 32)
    };
    Tn.prototype.Ef = function() {
        return Xn(this, 512)
    };
    Tn.prototype.nc = function() {
        return Xn(this, 256)
    };
    var Zn = function(a) {
        return Xn(a, 2048) && !a.Ff()
    };
    h = Tn.prototype;
    h.Ff = function() {
        return Xn(this, 8192)
    };
    h.nz = function() {
        return Xn(this, 4096)
    };
    h.hd = function() {
        return Xn(this, 1048576)
    };
    h.mr = function(a) {
        Yn(this, 1048576, a)
    };
    h.Qf = function() {
        if (!this.Sb) {
            var a = this.o && this.o["goo.richContent"];
            a && (this.Sb = new Nn(a))
        }
        return this.Sb || null
    };
    var pia = function() {
        this.R = this.o = this.H = this.T = this.b = void 0
    };
    Tn.prototype.clone = function() {
        var a = new Tn(this.getId(), this.getTitle(), this.wb(), this.Wb(), this.ne, this.qb(), this.Ke, this.T, this.Ph, this.Ra, this.He, this.H, void 0, this.o, this.S, this.ta ? fc(this.ta) : null, this.Ca || "");
        a.dg = this.dg;
        a.Ba = db(this.Ba);
        a.vb = this.vb ? this.vb : null;
        a.Qa = this.Qa ? fc(this.Qa) : null;
        a.R = this.R;
        this.V && (a.V = db(this.V));
        return a
    };
    var $n = function(a, b) {
        this.b = a;
        this.ue = b || ""
    };
    $n.prototype.getEmail = function() {
        return this.b
    };
    $n.prototype.Od = function() {
        return this.ue
    };
    var ao = function(a) {
        return a.ue || a.b
    };
    $n.prototype.equals = function(a) {
        return this == a ? !0 : a instanceof $n ? this.b == a.b && this.ue == a.ue : !1
    };
    $n.prototype.clone = function() {
        return new $n(this.b, this.ue)
    };
    $n.prototype.hg = function() {
        throw Error("fa");
    };
    var bo = function(a, b, c, d, e, f, g) {
        $n.call(this, b, c);
        this.kc = a;
        this.jd = d || 100;
        this.tk = e || "";
        this.yj = f || [];
        this.Zo = g || b
    };
    v(bo, $n);
    bo.prototype.Ec = function() {
        return this.jd
    };
    bo.prototype.Rc = function() {
        return 103 == this.jd
    };
    bo.prototype.equals = function(a) {
        return bo.qa.equals.call(this, a) && this.kc == a.kc && this.jd == a.jd && this.tk == a.tk && mc(this.yj, a.yj) && this.Zo == a.Zo
    };
    bo.prototype.clone = function() {
        return new bo(this.kc, this.getEmail(), this.Od(), this.jd, this.tk, this.yj, this.Zo)
    };
    var co = function() {
        J.call(this);
        this.U = M();
        this.b = {};
        this.o = {};
        Ej(this.U.get(Ag), "ap", p(this.T, this))
    };
    v(co, J);
    la(co);
    co.prototype.wa = function() {
        this.o = this.b = null;
        co.qa.wa.call(this)
    };
    var eo = function(a, b) {
        var c = a.b[b];
        return c ? c : 0 <= b.indexOf("@") ? a.o[b] : null
    };
    co.prototype.forEach = function(a) {
        for (var b in this.b) a(this.b[b])
    };
    co.prototype.T = function(a) {
        for (var b = Fm.va(), c = 0; c < a.length; c += 5) {
            var d = a[c],
                e = b.b.get(parseInt(a[c + 1], 10));
            fo(this, new bo(d, a[c + 3], a[c + 2], e, a[c + 4]))
        }
    };
    var fo = function(a, b) {
            var c = a.b[b.kc],
                c = qia(c, b);
            a.b[b.kc] = c;
            c = a.o[b.getEmail()];
            c = qia(c, b);
            a.o[b.getEmail()] = c;
            a.ya(new ria(b))
        },
        ria = function(a) {
            D.call(this, "gcal$pae");
            this.o = a
        };
    v(ria, D);
    var qia = function(a, b) {
        if (!a) return b;
        var c = b.kc,
            d = b.getEmail(),
            e = b.Od();
        e && b.getEmail() != e || (e = a.Od());
        return new bo(c, d, e, b.Ec(), b.tk || a.tk)
    };
    var go = function(a) {
            a.sort();
            return a
        },
        ho = function(a, b, c, d) {
            this.Lb = a;
            this.o = b;
            this.b = c;
            this.ef = d
        };
    ho.prototype.qb = function() {
        return this.Lb
    };
    ho.prototype.toString = function() {
        return sia(this)
    };
    var sia = function(a, b) {
        var c = b || 0,
            d = a.Lb;
        return (/[\x00-\x20\"]/.test(d) ? '"' + encodeURIComponent(d).replace(tia, "%2B") + '"' : d) + " " + xh(a.o) + "/" + xh(a.b) + " " + (a.ef + c)
    };
    ho.prototype.clone = function() {
        return new ho(this.Lb, this.o, this.b, 0)
    };
    var wia = function(a, b) {
            var c = [];
            uia(a, b, function(a, b) {
                c.push(!b || a && a.ef >= b.ef ? a : b)
            });
            return via(c)
        },
        xia = function(a, b) {
            var c = [];
            uia(a, b, function(a, b) {
                b ? a && b && c.push(b) : c.push(a)
            });
            return via(c)
        },
        Aia = function(a) {
            var b = [];
            if (a) {
                a = a.split(/\n/g);
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c].match(/^(\S+) (\d+)\/(\d+) (\d+)$/);
                    d && b.push(new ho(yia(d[1]), di(d[2]).lc(), di(d[3]).lc(), Number(d[4])))
                }
                b.sort(zia)
            }
            return b
        },
        io = function(a, b) {
            return a ? Sb(a, function(a) {
                return sia(a, b)
            }).join("\n") : ""
        },
        jo = function(a) {
            for (var b = [], c = 0; c < a.length; ++c) {
                var d = a[c];
                b.push([d.o, d.b])
            }
            a = [];
            b.sort(Bia);
            for (var e = 0; e < b.length;) {
                c = b[e];
                d = c[1];
                for (e += 1; e < b.length && d >= b[e][0];) d = Math.max(d, b[e][1]), ++e;
                a.push(c[0], d)
            }
            return a
        },
        Cia = function(a, b) {
            for (var c = [], d = 0; d < a.length; ++d) {
                var e = a[d];
                b(e) && c.push(e)
            }
            return c
        },
        ko = function(a, b, c) {
            return new ho(a.Lb, Math.max(b, a.o), Math.min(c, a.b), a.ef)
        },
        zia = function(a, b) {
            return a.Lb < b.Lb ? -1 : a.Lb > b.Lb ? 1 : a.o - b.o
        },
        uia = function(a, b, c) {
            function d(d, g) {
                var k;
                d ? (k = b[f], (null === g || g >= k.b) && ++f) : (k = a[e],
                    (null === g || g >= k.b) && ++e);
                var r = ko(k, l, g || k.b);
                l = r.b;
                m = k.Lb;
                d ? c(null, r) : c(r, null)
            }
            for (var e = 0, f = 0, g = a.length, k = b.length, l = wh, m = null; e < g && f < k;) {
                var r = a[e],
                    u = b[f];
                if (r.Lb !== u.Lb) r.Lb < u.Lb ? (r.Lb !== m && (l = wh), d(0, null)) : (u.Lb !== m && (l = wh), d(1, null));
                else {
                    r.Lb != m && (l = wh);
                    var w = Math.max(l, r.o),
                        z = Math.max(l, u.o);
                    if (w !== z) w < z ? d(0, u.o) : d(1, r.o);
                    else {
                        var z = Math.min(r.b, u.b),
                            B = ko(r, w, z),
                            w = ko(u, w, z),
                            l = z,
                            m = r.Lb;
                        c(B, w);
                        r.b <= z && ++e;
                        u.b <= z && ++f
                    }
                }
            }
            if (e < g) {
                do a[e].Lb !== m && (l = wh), d(0, null); while (e < g)
            } else
                for (; f < k;) b[f].Lb !==
                    m && (l = wh), d(1, null)
        },
        via = function(a) {
            for (var b = [], c = null, d = 0; d < a.length; ++d) {
                var e = a[d];
                c && c.Lb === e.Lb && c.ef === e.ef && c.b === e.o ? c = b[b.length - 1] = new ho(c.Lb, c.o, e.b, c.ef) : (b.push(e), c = e)
            }
            return b
        },
        Bia = function(a, b) {
            return a[0] - b[0] || b[1] - a[1]
        },
        lo = function(a) {
            for (var b = [], c = void 0, d = 0; d < a.length; ++d) {
                var e = a[d];
                c !== e.Lb && b.push(e.Lb);
                c = e.Lb
            }
            return b
        },
        tia = /\+/g,
        yia = function(a) {
            if (!a.length || '"' !== a.charAt(0)) return a;
            a = a.substring(1, a.length - 1).replace(tia, " ");
            return decodeURIComponent(a)
        },
        mo = function(a, b, c) {
            var d = [];
            if (b > a)
                for (var e = 0; e < c.length; ++e) d.push(new ho(c[e], a, b, 0));
            return go(d)
        };
    var no = function(a) {
        x.call(this);
        this.R = a;
        this.H = !0;
        this.b = !1
    };
    v(no, x);
    no.prototype.o = function(a) {
        return Dia(this, a)
    };
    var oo = function(a, b) {
            return (b ? "__wrapper_" : "__protected_") + va(a) + "__"
        },
        Dia = function(a, b) {
            var c = oo(a, !0);
            b[c] || ((b[c] = Eia(a, b))[oo(a, !1)] = b);
            return b[c]
        },
        Eia = function(a, b) {
            var c = function() {
                if (a.isDisposed()) return b.apply(this, arguments);
                try {
                    return b.apply(this, arguments)
                } catch (d) {
                    if (!(d && "object" === typeof d && d.message && 0 == d.message.indexOf("Error in protected function: ") || "string" === typeof d && 0 == d.indexOf("Error in protected function: "))) {
                        a.R(d);
                        if (!a.H) throw a.b && ("object" === typeof d && d && "message" in
                            d ? d.message = "Error in protected function: " + d.message : d = "Error in protected function: " + d), d;
                        throw new Fia(d);
                    }
                } finally {}
            };
            c[oo(a, !1)] = b;
            return c
        },
        Gia = function(a) {
            for (var b = ea("window"), c = ["requestAnimationFrame", "mozRequestAnimationFrame", "webkitAnimationFrame", "msRequestAnimationFrame"], d = 0; d < c.length; d++) {
                var e = c[d];
                c[d] in b && po(a, e)
            }
        },
        po = function(a, b) {
            var c = ea("window"),
                d = c[b];
            c[b] = function(b, c) {
                pa(b) && (b = q(ya, b));
                b = Dia(a, b);
                if (d.apply) return d.apply(this, arguments);
                var e = b;
                if (2 < arguments.length) var f =
                    Array.prototype.slice.call(arguments, 2),
                    e = function() {
                        b.apply(this, f)
                    };
                return d(e, c)
            };
            c[b][oo(a, !1)] = d
        };
    no.prototype.wa = function() {
        var a = ea("window"),
            b;
        b = a.setTimeout;
        b = b[oo(this, !1)] || b;
        a.setTimeout = b;
        b = a.setInterval;
        b = b[oo(this, !1)] || b;
        a.setInterval = b;
        no.qa.wa.call(this)
    };
    var Fia = function(a) {
        Da.call(this, "Error in protected function: " + (a && a.message ? String(a.message) : String(a)));
        (a = a && a.stack) && pa(a) && (this.stack = a)
    };
    v(Fia, Da);
    var qo = function(a, b, c) {
        J.call(this);
        this.R = b || null;
        this.H = {};
        this.S = Hia;
        this.T = a;
        c || (this.b = null, E && !Bd("10") ? dda(p(this.o, this), !1, null) : (this.b = new no(p(this.o, this)), po(this.b, "setTimeout"), po(this.b, "setInterval"), Gia(this.b), uba(this.b)))
    };
    v(qo, J);
    var Iia = function(a, b) {
        D.call(this, "o");
        this.error = a;
        this.context = b
    };
    v(Iia, D);
    var Hia = function(a, b, c, d) {
        Pi(a, null, b, c, d)
    };
    qo.prototype.o = function(a, b) {
        var c;
        c = ea("window.location.href");
        if (pa(a)) c = {
            message: a,
            name: "Unknown error",
            lineNumber: "Not available",
            fileName: c,
            stack: "Not available"
        };
        else {
            var d, e, f = !1;
            try {
                d = a.lineNumber || a.line || "Not available"
            } catch (r) {
                d = "Not available", f = !0
            }
            try {
                e = a.fileName || a.filename || a.sourceURL || ca.$googDebugFname || c
            } catch (r) {
                e = "Not available", f = !0
            }
            c = !f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {
                message: a.message || "Not available",
                name: a.name || "UnknownError",
                lineNumber: d,
                fileName: e,
                stack: a.stack || "Not available"
            }
        }
        d = b ? db(b) : {};
        if (this.R) try {
            this.R(c, d)
        } catch (r) {}
        f = c.message.substring(0, 1900);
        e = c.stack;
        try {
            var g = ifa(this.T, "script", c.fileName, "error", f, "line", c.lineNumber);
            bb(this.H) || (g = Ai(hfa([g], this.H)));
            f = {};
            f.trace = e;
            if (d)
                for (var k in d) f["context." + k] = d[k];
            var l, m = hfa([], f);
            m[0] = "";
            l = m.join("");
            qa(null) && (l = l.substring(0, null));
            this.S(g, "POST", l, this.U)
        } catch (r) {}
        try {
            this.ya(new Iia(c, d))
        } catch (r) {}
    };
    qo.prototype.wa = function() {
        y(this.b);
        qo.qa.wa.call(this)
    };
    var Jia = function(a) {
        return wn(a.rI ? 'dir="' + P("rtl") + '"' : "")
    };
    var Kia = {},
        Lia = function(a) {
            var b = 2 * a + 1,
                c = Kia[b];
            c || (c = xn(a ? "direction:" + Q("rtl") + ";" + (E ? "zoom:1;" : "") : ""), Kia[b] = c);
            return c
        },
        ro = function(a) {
            return a ? qaa.test(Ka(a, void 0)) ? "\u202b" + Ma(a) + "\u202c" : a : a
        };
    var so = void 0,
        to = function() {
            if (void 0 !== so) return so;
            var a = document.createElement("div");
            a.style.cssText = "visibility:hidden;overflow-y:scroll;position:absolute;top:0;width:100px;height:100px";
            document.body.appendChild(a);
            var b = a.offsetWidth - a.clientWidth;
            if (isNaN(b) || null == b) b = 18;
            so = b;
            document.body.removeChild(a);
            return so
        };
    var uo = function() {
        this.Ya = []
    };
    h = uo.prototype;
    h.top = 0;
    h.np = 0;
    h.pp = "px";
    h.edge = "left";
    h.height = "";
    h.width = 100;
    h.AB = "%";
    h.text = null;
    h.xv = function() {
        return O("")
    };
    var Mia = function(a) {
        var b = a.uD;
        a = a.content;
        return N(b ? '<div style="' + P(Q(b)) + '">' + O(a) + "</div>" : O(a))
    };
    var Nia = !1,
        wo = function(a, b, c) {
            var d = "";
            b ? d += "cic-dm " : c && (d += "cic-l ");
            "cic-flx" == a ? (b = vo(a), a = N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 18 17" class="' + P("cic " + d + a) + '" preserveAspectRatio="none"><g transform="translate(-2.000000, -4.000000)"><title>' + En(b) + '</title><polygon points="21.9921206 13.0100415 22 11 7.81412473 11 21.9129527 6 22 6 22 4 2 4 2 6 16.0205699 6 2.06838628 11 2 11 2 13 16.0838106 13 2.00986234 18 2 20 22 20 22 18 7.79795234 18"/></g></svg>')) : (b = vo(a), a = N('<i class="' +
                P("cic " + d + a) + '" title="' + P(b) + '">&nbsp;</i>'));
            return a
        },
        xo = function(a, b) {
            var c = "";
            switch (a) {
                case "cic-flx":
                    c = "Flexible event";
                    break;
                case "cic-ques":
                    c = "Responded maybe";
                    break;
                case "cic-nr":
                    c = "Not yet responded";
                    break;
                case "cic-de":
                    c = "Responded no";
                    break;
                case "cic-tmr":
                    c = "This event has notifications.";
                    break;
                case "cic-prsn":
                    c = "This event has invited guests.";
                    break;
                case "cic-noprs":
                    c = "All invited guests have declined this event.";
                    break;
                case "cic-rcr":
                    c = "This recurring event is part of a series.";
                    break;
                case "cic-spcl":
                    c = "This recurring event has been changed and is no longer part of a series.";
                    break;
                case "cic-priv":
                    c = "This event is private.";
                    break;
                case "cic-av":
                    c = "Appointment slots"
            }
            var d = "cic " + (a + "-inv") + " " + (b || ""),
                e = vo(a);
            return N('<img role=presentation src="' + P(Mn(al())) + '" class="cic ' + P(d) + '" alt="' + P(c) + '" title="' + P(e) + '"> ')
        },
        vo = function(a) {
            if (!Nia) return "";
            var b = "";
            switch (a) {
                case "cic-flx":
                    b = "Flexible event";
                    break;
                case "cic-ques":
                    b = "Responded maybe";
                    break;
                case "cic-nr":
                    b = "Not yet responded";
                    break;
                case "cic-de":
                    b = "Responded no";
                    break;
                case "cic-tmr":
                    b = "Notifications";
                    break;
                case "cic-prsn":
                    b = "Guests";
                    break;
                case "cic-noprs":
                    b = "All guests declined";
                    break;
                case "cic-rcr":
                    b = "Recurring event";
                    break;
                case "cic-spcl":
                    b = "Edited recurring event";
                    break;
                case "cic-priv":
                    b = "Private";
                    break;
                case "cic-av":
                    b = "Appointment slots"
            }
            return b
        };
    var Pia = function(a) {
            var b = a.b,
                c, d, e, f = Oia;
            f ? (a = (d = im(a)) ? "#eeeeee" : "#1d1d1d", c = d ? "#dddddd" : "#333333", d = d ? "#eeeeee" : "#bbbbbb", e = fk("#ffffff", b.o, .6)) : (d = c = a = "", e = b.T);
            this.o = a;
            this.H = b.b;
            this.R = f ? b.o : b.H;
            this.Ta = f ? "" : b.H;
            this.ua = f ? b.b : b.o;
            this.Ba = f ? b.b : b.T;
            this.Za = f ? "" : b.o;
            this.vb = c;
            this.Qa = d;
            this.b = b.T;
            this.T = b.R;
            this.S = f ? "" : b.R;
            this.ma = b.T;
            this.U = f ? b.o : b.H;
            this.ta = e;
            this.Ra = f ? this.H : b.T;
            this.Ja = f ? this.R : b.R;
            this.La = f ? "" : b.R;
            this.Ca = f ? this.o : b.H;
            this.Na = f ? "#777777" : this.Ca;
            this.V = f ? "#777777" : ""
        },
        Oia = !1,
        yo = {},
        Mo = function(a) {
            var b = va(a);
            yo[b] || (yo[b] = new Pia(a));
            return yo[b]
        },
        Qia = function(a, b) {
            if (a.o) {
                var c = parseInt(b.substr(1, 2), 16) / 255,
                    d = parseInt(b.substr(3, 2), 16) / 255,
                    e = parseInt(b.substr(5, 2), 16) / 255,
                    f = c + e < d / 4 || d + e < c / 4 ? 5 : 0,
                    c = Math.max(0, 5 * (c - .8)),
                    d = Math.max(0, 5 * (d - .8)),
                    e = Math.max(0, 5 * (e - .8)),
                    c = 5 * Math.round((10 + 30 * (.33 * c + .84 * d + .15 * e) + f) / 5);
                return c = Math.max(Math.min(c, 40), 10)
            }
            c = a.wd();
            if (b == a.b.T) switch (c) {
                case 43:
                case 44:
                case 45:
                case 46:
                case 50:
                case 58:
                case 66:
                case 65:
                case 61:
                    return 20;
                case 54:
                case 52:
                case 55:
                case 56:
                case 57:
                    return 35;
                case 53:
                    return 40;
                default:
                    return 25
            } else switch (c) {
                case 43:
                case 44:
                case 58:
                case 66:
                case 50:
                    return 10;
                case 54:
                case 52:
                case 49:
                case 55:
                case 56:
                    return 20;
                case 53:
                    return 25;
                default:
                    return 15
            }
        };
    var No = function() {
        this.Ya = []
    };
    v(No, uo);
    var Oo = !1,
        Po = 0;
    h = No.prototype;
    h.Ig = 0;
    h.kF = O("");
    h.ED = "";
    h.Qx = null;
    h.Yw = "#fff";
    h.wD = "#000";
    h.DD = "#000";
    h.lF = "";
    var Qo = function(a, b, c) {
            a.Ig = c ? a.Ig | b : a.Ig & ~b
        },
        Ria = function(a, b, c, d, e) {
            a = Mo(a);
            c = c || 0;
            var f = !1;
            Oo && 2 == c && (c = 4, f = !0);
            var g, k, l, m = a.o;
            switch (c) {
                case 1:
                    g = a.ua;
                    k = a.Ba;
                    l = a.Za;
                    break;
                case 2:
                    g = a.b;
                    k = a.T;
                    l = a.S;
                    m = a.vb;
                    f = !0;
                    break;
                case 3:
                    g = a.Ra;
                    k = a.Ja;
                    l = a.La;
                    m = b ? a.Na : a.Ca;
                    break;
                default:
                    g = a.H, k = a.R, l = a.Ta
            }
            b && (g == k ? k = g = a.b : (g = a.b, k = a.T), l = a.S, m = 2 == c ? a.Qa : a.V, f = !0);
            e && (g = e, b && (g = Cm(g)));
            d = n(d) ? d : 1;
            1 > d && 2 != c && !b && (b = e ? Cm(e) : a.b, b = fk(b, g, d), g == k ? k = g = b : (g = b, k = fk(a.T, k, d)), 3 != c && a.S && (l = fk(a.S, l, d)));
            return {
                bgColor: g,
                borderColor: k,
                cx: l,
                textColor: m,
                XU: f
            }
        },
        Sia = function(a, b, c, d) {
            var e;
            c && (c = Lia(Na(c)), c.getContent() && (e = c));
            "caption" == d ? (a.caption = b, a.WR = e) : (a.text = b, a.z8 = e)
        };
    No.prototype.xv = function() {
        var a = ik(M()).isEnabled(48) && Oo;
        this.data = {
            l9: !!(this.Ig & 2),
            rg: !!(this.Ig & 1),
            L2: !!(this.Ig & 16),
            SQ: !!(this.Ig & 4),
            ej: Oo,
            ZI: a
        };
        this.data.Ya = this.Ya.join(" ");
        a = [];
        this.Ig & 1 && a.push("cro");
        this.Ig & 2 || a.push("cbrd");
        this.data.Ms = a.join(" ");
        this.data.top = this.top + "px";
        Oo && 0 == this.np && "%" == this.pp && (this.np = -1, this.pp = "px");
        this.data.offset = this.np + this.pp;
        this.data.edge = this.edge;
        this.data.width = this.width + this.AB;
        Oo && (this.data.w3 = this.height - (this.Ig & 2 ? 5 : 3) - 1 + "px", this.Ig &
            16 && (this.data.kR = this.height + "px"));
        a = this.height;
        this.data.height = a ? a - Po - (this.Ig & 2 ? 5 : 3) + "px" : "auto";
        this.data.borderColor = this.wD;
        this.data.bgColor = this.Yw;
        this.data.cx = this.DD;
        this.data.textColor = this.lF;
        Sia(this.data, this.kF, this.ED, "caption");
        var a = this.text ? this.text.toString() : "",
            b = this.text ? this.text : O("");
        Sia(this.data, b, a, "text");
        this.data.jR = "";
        this.data.icons = "";
        this.b && (this.data.userId = this.R, this.data.J5 = this.o ? "cpic-fade" : "", this.data.U5 = this.H & 1 ? "cpic-rot-left" : "cpic-rot-right",
            this.data.bK = this.b);
        var a = this.data,
            c;
        c = c || {};
        var d = !!a.ej,
            e = !!a.L2,
            f = a.borderColor,
            g = a.bgColor,
            k = a.Ya,
            l = a.bK,
            m = a.top,
            r = a.edge,
            u = a.offset,
            w = a.width,
            z = !!a.l9,
            B = !!a.rg,
            A = a.Ms,
            L = a.height,
            Z = a.textColor,
            R = !!a.SQ,
            b = "",
            g = "border-color:" + Q(f) + ";background-color:" + Q(g) + ";",
            g = Cn(g);
        if (d && e) var e = c || {},
            ha = a.edge,
            ka = a.offset,
            ja = a.kR,
            fa = a.width,
            e = N('<div class="rsvp-no-bg" style="' + (e.Aa ? "/*" + e.Aa + "*/" : "") + "top:" + P(Q(a.top)) + ";" + P(Q(ha)) + ":" + P(Q(ka)) + ";height:" + P(Q(ja)) + ";width:" + P(Q(fa)) + ';">&nbsp;</div>');
        else e = "";
        k = e + '<div class="' + P(k) + " chip" + (l ? " corg" : "") + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "top:" + P(Q(m)) + ";" + P(Q(r)) + ":" + P(Q(u)) + ";width:" + P(Q(w)) + ';">' + (z ? B ? '<div class="cb2" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "border-color:" + P(Q(f)) + ';">&nbsp;</div><div class="cb1" style="' + P(Q(g)) + '">&nbsp;</div>' : '<div class="ct" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "border-bottom-color:" + P(Q(f)) + '">&nbsp;</div>' : "") + '<dl class="' + P(A) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "height:" + P(Q(L)) + ";" + P(Q(g)) + (Z ? "color:" +
            P(Q(Z)) : "") + '">';
        m = a.cx;
        r = a.WR;
        u = a.jR;
        w = a.caption;
        B = a.icons;
        m = N('<dt style="' + (m ? "background-color:" + P(Q(m)) + ";" : "") + '">' + Mia({
            uD: r,
            content: An(O(u) + '<span class="chip-caption">' + O(w) + "</span>" + O(B))
        }) + "</dt>");
        k = k + m + "<dd>";
        m = a.text;
        m = N(Mia({
            uD: a.z8,
            content: An("" + (a.ZI ? '<div class="cpchip">' + O(m) + "</div>" : O(m)))
        }));
        k = k + m + "</dd>";
        d ? (u = yn({
            pS: g
        }, a), d = c || {}, m = u.pS, r = u.w3, u = !!u.ZI, d = N('<div><div class="mask mask-top" style="' + P(Q(m)) + '">&nbsp;</div>' + (u ? "" : '<div class="mask mask-bottom" style="' + P(Q(m)) +
            '">&nbsp;</div>') + '<div class="mask mask-left" style="' + (d.Aa ? "/*" + d.Aa + "*/" : "") + "height:" + P(Q(r)) + ";" + P(Q(m)) + '">&nbsp;</div><div class="mask mask-right" style="' + (d.Aa ? "/*" + d.Aa + "*/" : "") + "height:" + P(Q(r)) + ";" + P(Q(m)) + '">&nbsp;</div></div>')) : d = "";
        f = k + d + (R ? '<div class="resizer"><div class="rszr-icon">&nbsp;</div></div>' : "") + "</dl>" + (z ? '<div class="cb1" style="' + P(Q(g)) + '">&nbsp;</div><div class="cb2" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "border-color:" + P(Q(f)) + ';">&nbsp;</div>' : "");
        l ? (c = c || {}, l = a.U5,
            z = a.userId, R = a.borderColor, g = a.bK, a = N('<div class="g-hovercard cpic ' + P(a.J5) + " " + P(l) + '" data-userid="' + P(z) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "border-color:" + P(Q(R)) + ';"><img src="' + P(Mn(g)) + '?sz=24" height="24" width="24"></div>')) : a = "";
        return N(b + (f + a + "</div>"))
    };
    var Ro = function(a) {
            this.T = a;
            this.R = {};
            a = afa[a];
            for (var b = 0; b < a.length; b++) this.R[a[b]] = !0;
            this.b = []
        },
        Tia = function(a, b) {
            var c = new Ro(a);
            Ig(b, 12, c)
        };
    Ro.prototype.Ed = function(a) {
        return this.R[a]
    };
    Ro.prototype.getName = function() {
        return this.T
    };
    Ro.prototype.Sc = function(a, b) {
        this.o ? this.o.Sc(a, b) : this.b.push(new Uia(a, b))
    };
    var Uia = function(a, b) {
        this.element = a;
        this.b = b
    };
    var So = function(a) {
        return {
            Ug: Sg(a, 1),
            dv: Sg(a, 2),
            Loa: Sg(a, 7),
            nK: Sg(a, 5),
            linkColor: Sg(a, 3),
            fontFamily: Sg(a, 4),
            Moa: Tg(a, 6, 0)
        }
    };
    var To = function(a) {
        return "ca-evp" + va(a)
    };
    var Via = function(a) {
        var b = a.Ez;
        return N(O(a.title) + ' - <span class="cloc">' + O(b) + "</span>")
    };
    var Uo = function(a) {
        return xn(a.W6 ? "direction:" + Q("rtl") + ";text-align:" + Q("left") + ";" : "")
    };
    var Wia = function(a) {
            this.b = !!a
        },
        Yia = function(a, b, c, d, e, f, g, k, l) {
            b = {
                color: d,
                textColor: e,
                Sq: f || "",
                pj: k || "",
                Kx: g || "",
                content: b,
                W6: c
            };
            if (l) {
                b.pj += " rb-n";
                b.borderColor = l;
                b.cz = "rb-ni";
                var m;
                m = m || {};
                var r = b.pj,
                    u = b.borderColor;
                a = b.textColor;
                l = b.color;
                c = b.cz;
                d = b.Kx;
                e = b.content;
                return N('<div class="' + P(b.Sq) + " " + P(r) + '" style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "border:1px solid " + P(Q(u)) + "; color:" + P(Q(a)) + ";background-color:" + P(Q(l)) + ";" + P(Q(Uo(b))) + '"><div class="' + P(c) + '">' + O(d) + O(e) + "</div></div>")
            }
            if (a.b ||
                Xia) return b.pj += " rb-n", u = u || {}, m = b.pj, r = b.textColor, a = b.color, l = b.Kx, c = b.content, N('<div class="' + P(b.Sq) + " " + P(m) + '" style="' + (u.Aa ? "/*" + u.Aa + "*/" : "") + "color:" + P(Q(r)) + ";background-color:" + P(Q(a)) + ";" + P(Q(Uo(b))) + '">' + O(l) + O(c) + "</div>");
            b.Sq += " rb-o";
            b.pj += " rb-m";
            b.cz = "rb-i";
            r = r || {};
            m = b.color;
            u = b.pj;
            a = b.textColor;
            l = b.Kx;
            c = b.cz;
            d = b.content;
            return N('<div class="' + P(b.Sq) + '" style="' + (r.Aa ? "/*" + r.Aa + "*/" : "") + "border-color:" + P(Q(m)) + ";" + P(Q(Uo(b))) + '"><div class="' + P(u) + '" style="' + (r.Aa ? "/*" + r.Aa + "*/" : "") + "border-color:" + P(Q(m)) + ";background-color:" + P(Q(m)) + ";color:" + P(Q(a)) + '">' + O(l) + '<div class="' + P(c) + '">' + O(d) + "</div></div></div>")
        },
        Xia = td || Vd;
    var Vo = function(a, b, c, d, e, f) {
            this.o = b;
            this.H = c;
            this.U = d;
            if (f) a = f(a);
            else {
                b = [];
                c = [];
                var g;
                d = 0;
                f = this.H;
                var k = this.o,
                    l = Vea(k.Wa(), Ih(k, f).Wa());
                for (g = 0; g < f; g++) b[g] = [], c[g] = [];
                g = 0;
                for (var m = a.length; g < m; g++) {
                    var r = a[g];
                    if (jia(r, l)) {
                        var u = r.Ja,
                            w = 0,
                            z = Bh(r.wb().$a(), k);
                        if (0 > z) {
                            if (!u) continue;
                            z = 0;
                            w |= 1
                        }
                        var B = Bh(Gh(r.Wb()), k);
                        B > f && (B = f, w |= 2);
                        u = new Zia(r, u ? B - z : 1, w);
                        (r = r.Qf()) && mn(r) ? c[z].push(u) : (b[z].push(u), d++)
                    }
                }
                a = {
                    FD: b,
                    $L: c,
                    MJ: d
                }
            }
            this.b = a.FD;
            this.R = a.$L;
            this.S = a.MJ;
            this.T = e || 0
        },
        Zia = function(a, b, c) {
            this.event =
                a;
            this.b = b;
            this.Tc = c
        },
        Wo = function(a, b) {
            for (var c = a.H, d = a.S, e = a.U, f = oc(c), g = oc(c), k = oc(c), l = [], m = 0, r = 0; d;) {
                m == c && (m = 0, r++);
                var u = a.b[m][f[m]++];
                if (u) {
                    for (var w = u.b; w--;) k[m] = r, r + 1 == e ? l[m] = u : r >= e && (g[m]++, l[m] && (l[m].mI = !0)), m++;
                    --d
                } else m++
            }
            f = oc(c);
            d = [];
            w = r;
            r = 0;
            switch (a.T) {
                case 2:
                    for (m = 0; m < c; m++)
                        if (a.b[m].length && !(g[m] || l[m] && l[m].mI)) {
                            r = 1;
                            break
                        }
                    break;
                case 1:
                    r = 1
            }
            for (var e = Math.min(w, e - 1), z = e + 1 + r, r = 0; r < z; r++) {
                var B = z - r;
                b.o.push(N("<tr>"));
                for (m = 0; m < c; m++)
                    if (!d[m]) {
                        var u = a.b[m][f[m]++],
                            A = r >= k[m];
                        if (r ==
                            e && (g[m] || l[m] && l[m].mI)) {
                            var A = b,
                                u = Ih(a.o, m),
                                L = g[m] + (l[m] ? 1 : 0),
                                Z = void 0;
                            A.T && A.Tl ? Z = A.b.Np(L) : A.T ? Z = "\u25bc" : Z = Aa(L);
                            A.o.push($ia({
                                Qb: aja,
                                lk: "ca-mlp" + u.lc(),
                                m9: A.T,
                                Tl: A.Tl,
                                content: Z
                            }))
                        } else if (u && r <= e) {
                            L = 1;
                            1 < u.b ? m += u.b - 1 : A && r != w && (L = B, d[m] = !0);
                            var A = b,
                                Z = !!(u.Tc & 1),
                                R = !!(u.Tc & 2),
                                ha = To(u.event);
                            A.Ca(u, L, !1, Z, R, ha);
                            A.R(u, L, !1, Z, R, ha);
                            A.ma(u, L, !1, Z, R, ha)
                        } else d[m] = A, b.o.push(bja({
                            Ya: "st-c st-s",
                            cr: A ? B : 1
                        }))
                    }
            }
        };
    var cja = function(a) {
            var b = a.Ya,
                c = a.Tk;
            a = '<table id="' + P(a.id) + '" cellpadding=0 cellspacing=0 class="' + P(b) + '"><tr>';
            for (var b = c.length, d = 0; d < b; d++) {
                var e = c[d];
                a += "<td" + (e.Ya ? ' class="' + P(e.Ya) + '"' : "") + ">&nbsp;</td>"
            }
            return N(a + "</tr></table>")
        },
        dja = function(a) {
            var b = a.Tk;
            a = '<table cellpadding=0 cellspacing=0 class="' + P(a.Ya) + '"><tr>';
            for (var c = b.length, d = 0; d < c; d++) a += '<td class="' + P(b[d].Ya) + '">&nbsp;</td>';
            return N(a + "</tr></table>")
        },
        eja = function(a) {
            var b;
            b = b || {};
            for (var c = "<tr>", d = a.Tk, e = d.length,
                    f = 0; f < e; f++) var g = d[f],
                c = c + ('<td class="' + P(g.Ya) + '"' + ((null == a.Le ? 0 : a.Le.dv) && -1 != ("" + g.Ya).indexOf("st-dtitle") && -1 == ("" + g.Ya).indexOf("st-dtitle-nonmonth") && -1 == ("" + g.Ya).indexOf("st-dtitle-today") ? 'style="' + (b.Aa ? "/*" + b.Aa + "*//*" + b.Aa + "*/" : "") + "background-color:" + P(Q(a.Le.dv)) + '"' : "") + ">" + O(g.u9) + '<span class="' + P(g.i8) + '">' + O(g.oT) + "</span></td>");
            return N(c + "</tr>")
        },
        bja = function(a) {
            var b = a.cr;
            return N('<td class="' + P(a.Ya) + '"' + (1 < b ? ' rowspan="' + P(b) + '"' : "") + ">&nbsp;")
        },
        fja = function(a) {
            var b =
                a.XT,
                c = a.cr,
                d = a.qS,
                e = a.BU;
            return N('<td class="' + P(a.Ya) + '"' + (1 < c ? ' rowspan="' + P(c) + '"' : "") + (1 < d ? ' colspan="' + P(d) + '"' : "") + '><div class="' + P(b) + '">' + O(e) + "</div></td>")
        },
        $ia = function(a) {
            var b = a.lk,
                c = !!a.m9,
                d = !!a.Tl,
                e = a.content;
            return N('<td class="' + P(a.Qb.gO) + " " + P(a.Qb.HO) + '">' + (c ? d ? '<div class="' + P(b) + " " + P(a.Qb.nw) + " " + P(a.Qb.OO) + '">' + O(e) + "</div>" : '<div class="' + P(b) + " " + P(a.Qb.nw) + " " + P(a.Qb.KO) + '">' + O(e) + "</div>" : '<span class="' + P(b) + " " + P(a.Qb.nw) + " " + P(a.Qb.LO) + '">' + O(e) + "</span>") + "</td>")
        };
    var gja = function(a, b) {
        b = b || {};
        var c = a.Gs;
        return N(c ? '<span class="te-c goog-inline-block" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "background-color:" + P(Q(c)) + '">&nbsp;</span>' : "")
    };
    var Xo = function(a, b, c, d, e, f) {
            this.H = a;
            this.b = b;
            this.S = new Wia(!b.Im());
            this.ua = c || !1;
            this.T = !!d;
            this.V = !!e;
            this.Tl = b.ej();
            this.ta = ik(M()).isEnabled(48);
            this.U = f || null
        },
        aja = {
            N$: "st-bg-table",
            J$: "st-bg-all",
            K$: "st-bg",
            L$: "st-bg-fc",
            M$: "st-bg-lc",
            O$: "st-bg-today",
            R$: "st-bg-next",
            P$: "st-bg-td-first",
            Q$: "st-bg-td-last",
            Lca: "st-dtitle",
            Oca: "st-dtitle-fr",
            Nca: "st-dtitle-fc",
            Pca: "st-dtitle-lc",
            Sca: "st-dtitle-today",
            Qca: "st-dtitle-next",
            Mca: "st-dtitle-down",
            Rca: "st-dtitle-nonmonth",
            qfa: "st-grid",
            gO: "st-c",
            rfa: "st-c-pos",
            sfa: "st-s",
            KO: "st-moreicon",
            Aha: "st-ad-ml",
            Bha: "st-ad-ml2",
            Cha: "st-ad-mpad",
            Dha: "st-ad-mr",
            Eha: "st-ad-mr2",
            Fha: "st-ad-mpadr",
            HO: "st-more-c",
            nw: "st-more",
            LO: "st-moreul",
            OO: "st-morewk",
            BC: "st-wc",
            Xna: "st-wc-click"
        };
    Xo.prototype.o = null;
    var Yo = function(a) {
            a.o.push(N('<table cellpadding="0" cellspacing="0" class="' + P("st-grid") + '">'))
        },
        hja = function(a) {
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c],
                    e = d.event.Qf();
                e.Dq() && (d = To(d.event) + " st-wc", e.getUrl() && (d += " st-wc-click"), b.push({
                    title: e.getTitle(),
                    url: e.o,
                    Ya: d
                }))
            }
            a = "";
            c = b.length;
            for (e = 0; e < c; e++) d = b[e], a += '<img src="' + P(Mn(d.url)) + '" class="' + P(d.Ya) + '" title="' + P(d.title) + '" alt="' + P(d.title) + '">';
            return N(a)
        };
    Xo.prototype.Ca = ia;
    Xo.prototype.R = function(a, b, c, d, e, f) {
        this.o.push(fja({
            Ya: "st-c",
            cr: b,
            qS: a.b,
            XT: "st-c-pos",
            BU: ija(this, a.event, !1, d, e, f)
        }))
    };
    Xo.prototype.ma = ia;
    var ija = function(a, b, c, d, e, f) {
            if (b.Ja || b.b) {
                c = !!c;
                var g = !!d;
                e = !!e;
                var k = f || "",
                    l, m, r;
                l = a.b.Wj(b, !0);
                a.V && a.b.$i(b) && (m = "evt-lk ca-elp" + va(b));
                f = a.b.xl(b, !0);
                b.b || g ? c && (c = Qn(b), 1 < c.Ka && (r = Ma("(" + nha(c) + ")"))) : r = Ma("(" + a.H.sc(b.wb()) + ")");
                a: if (c = a.b.Si(b), a.ta) {
                    d = b.He;
                    var u = "";
                    b instanceof Tn && (u = b.Za, u = 0 < u.length ? u[0] : "");
                    if (u) d = u;
                    else if (!d) break a;
                    c = Via({
                        Ez: d,
                        title: c
                    })
                }
                m = N(O(l) + (r ? O(r) + " " : "") + (m ? '<span class="' + P(m) + '">' + O(c) + "</span>" : O(c)) + O(f));
                f = a.b.Ah(b);
                c = a.b.Rl(b);
                u = a.b.Th(b);
                d = Mo(u);
                l = f ?
                    d.V : d.o;
                r = a.b.hk(b) ? d.b : c ? d.ua : d.H;
                var w = a.b.rn(b),
                    z = Bm(b);
                f ? r = z ? Cm(z) : d.ma : z && (r = z);
                if (1 > w) {
                    var B = z ? Cm(z) : d.ma;
                    r = fk(B, z ? z : r, w)
                }
                c && a.b.Eq() && (u = u ? Qia(u, r) : 15, k += " rb-ro-" + u);
                var A;
                a.b.ej() && (A = f ? c ? d.b : d.T : c ? d.Ba : d.R);
                f = [];
                g && f.push("st-ad-mpad");
                e && f.push("st-ad-mpadr");
                f = f.join(" ");
                g = jja(g, e, r, A);
                a = a.S;
                b = Na(b.getTitle()) ? !(b.Mf && b.Mf()) : !1;
                b = Yia(a, m, b, r, l, k, g, f, A)
            } else A = f || "", e = a.b.Wj(b, !1), m = a.b.Si(b), r = a.b.xl(b, !1), a.V && a.b.$i(b) && (l = "evt-lk ca-elp" + va(b)), m = N((l ? '<span class="' + P(l) + '">' + O(m) +
                "</span>" : O(m)) + O(r)), r = a.b.Ah(b), l = a.b.hk(b), l = r || l, r = a.b.Th(b), f = Mo(r), r = l ? f.ta : f.U, c = a.b.rn(b), !l && 0 <= c && 1 > c && (r = fk(f.ta, r, c)), l = Bm(b), b = a.H.sc(b.wb(), !0, a.ua), b = {
                color: r,
                time: b,
                kJ: e,
                mv: m,
                Ms: A,
                Gs: l
            }, Na(m.toString()) ? (k = k || {}, a = b.color, A = b.kJ, g = b.time, e = b.mv, b = N('<div class="' + P(b.Ms) + ' te" style="' + (k.Aa ? "/*" + k.Aa + "*/" : "") + "color:" + P(Q(a)) + '"><table cellpadding=0 cellspacing=0 class="te-rev"><tr><td class="te-t">' + O(A) + O(g) + "&nbsp;</td><td>" + gja(b, k) + '&nbsp;</td><td class="te-rev-s"><div class="te-rev-spos">&nbsp;<div class="te-rev-scont" dir="' +
                P("rtl") + '">' + O(e) + "</div></div></td></tr></table></div>")) : (g = g || {}, a = b.color, A = b.kJ, k = b.time, e = b.mv, b = N('<div class="' + P(b.Ms) + ' te" style="' + (g.Aa ? "/*" + g.Aa + "*/" : "") + "color:" + P(Q(a)) + '"><span class="te-t">' + O(A) + O(k) + "&nbsp;</span>" + gja(b, g) + '<span class="te-s">' + O(e) + "</span></div>"));
            return b
        },
        jja = function(a, b, c, d) {
            var e = [];
            a && (e.push({
                Ya: "st-ad-ml",
                color: d || c
            }), e.push({
                Ya: "st-ad-ml2",
                color: c
            }));
            b && (e.push({
                Ya: "st-ad-mr",
                color: d || c
            }), e.push({
                Ya: "st-ad-mr2",
                color: c
            }));
            c = "";
            a = e.length;
            for (b = 0; b < a; b++) {
                d = e[b];
                var f = void 0,
                    f = f || {},
                    g = d.color;
                d = N('<div class="' + P(d.Ya) + '" style="' + (f.Aa ? "/*" + f.Aa + "*/" : "") + "border-color: transparent " + P(Q(g)) + '"></div>');
                c += d
            }
            return N(c)
        };
    var Zo = function(a, b, c) {
            this.o = fc(a);
            this.H = b;
            this.b = c ? Wa(c, Ha) : null
        },
        ap = function(a, b) {
            var c = $o(a),
                d = Mj(b, "showDeclined", "true");
            return new Zo(c, d)
        };
    Zo.prototype.accept = function(a) {
        kja(this);
        return a.qb() in this.T && (!this.b || a.getId() in this.b) ? this.H || 2 != a.Ee : !1
    };
    Zo.prototype.getKey = function() {
        kja(this);
        return this.R
    };
    var kja = function(a) {
        a.o && (a.o.sort(), a.R = a.o.join(" ") + "/" + a.H + "/" + !!a.b, a.T = gb(a.o), a.o = null)
    };
    var bp = function(a, b) {
        J.call(this);
        this.U = a;
        this.b = b;
        this.R = this.o = null
    };
    v(bp, J);
    bp.prototype.T = "";
    var cp = function(a) {
            return Fg(a, 15)
        },
        dp = function(a) {
            return cp(a).b
        },
        ep = function(a) {
            return cp(a).o
        },
        lja = function(a, b) {
            a.R = b
        },
        lp = function(a, b) {
            var c = zk(),
                d = fp.va().H,
                e = tga(b, a.U, d),
                f = !b.equals(a.b);
            if (!f && 6 != b.b) return !1;
            var g = a.b.clone();
            a.b = b.clone();
            f && a.ya("p");
            f && 6 == b.b && (gp = g.clone());
            a.o && a.o.o() && !e.o() && fp.va().Ib();
            a.o && e.o() && !a.o.o() && (fp.va(), ne(hp()), ip(!1));
            var k = a.U.get(xg);
            if (3 == g.b && f || 6 == g.b) k.o && (k.o.ts(), k.o.WT()), k.b = null, k.Ib();
            (6 == b.b || 3 == b.b && f) && !k.b && (k.b = new jp(k, k.R, k.U,
                k.T, 0, k.ta, "listview"));
            a.o = e;
            if (e = a.R) e = a.R, e = !!e.o && e.o.ua();
            if (e) d = !1;
            else {
                b: switch (a.b.b) {
                    case 2:
                        e = 3;
                        break b;
                    case 1:
                        e = 2;
                        break b;
                    default:
                        e = 1
                }
                e != d.b || (1 == e || 2 == e) && a.b.o != pk(d) ? (kga(d, e, a.b.o), d = !!a.R && !!a.R.o) : d = !1
            }
            d || kp(M().get(yg));
            c.b("SetMode." + Lk(b));
            return !0
        };
    var mja = function() {
        J.call(this)
    };
    v(mja, J);
    var mp = new Ea("q"),
        nja = new Ea("r"),
        np = new Ea("s"),
        oja = new Ea("t"),
        op = new Ea("u"),
        pp = new Ea("v"),
        pja = new Ea("w"),
        qja = function(a, b) {
            D.call(this, pja);
            this.vo = a;
            this.Ex = b
        };
    v(qja, D);
    var qp = function(a, b) {
        Fg(a, 21).ya(b)
    };
    var rp = function(a, b) {
        var c = a.get(Dg);
        return p(c.b, c, b)
    };
    var rja = function(a) {
            this.b = a
        },
        sja, uja = function(a, b, c, d) {
            if (b = tja(a, b)) {
                var e = a.b;
                c = Ja(function() {
                    qp(e, op)
                }, c);
                ij(hj(a.b), "caldetails", b, 4, c, d)
            }
        },
        tja = function(a, b) {
            if (0 == b.length) return null;
            for (var c = jh(a.b), d = [], e = !1, f = 0; f < b.length; ++f) c == b[f] && (e = !0), d.push("dtid", b[f]);
            sja || (sja = !0, d.push("init", "true"), e || d.push("dtid", c));
            return d
        };
    var sp = function(a, b, c) {
            this.R = a;
            this.b = b;
            this.o = ih(a);
            this.ua = c;
            this.T = [];
            Ej(this.R.get(Ag), "anp", p(this.Ja, this))
        },
        wja = function(a, b, c, d) {
            var e = Mj(a.o, c + "/hidden", !1),
                f = e || Mj(a.o, c + "/off", !1),
                g = a.b.getItem(c);
            g ? (d != g.type && (b = a.b.getItem(c), b.type != d && (b.type = d)), a.b.H(c, !f, !0)) : (a.T.push(new vja(b, c, d, e, f)), a.ta || (a.ta = window.setTimeout(p(a.Na, a), 0)))
        };
    sp.prototype.Na = function() {
        this.ta = null;
        xja(this, p(this.ua.b, this))
    };
    var xja = function(a, b, c) {
        for (var d = [], e = [], f = ri(), g = 0; g < a.T.length; ++g) {
            var k = a.T[g],
                l = k.id;
            a.b.getItem(l) || (k.hidden || (e.push(l), (!k.b || f && tp(a.b, l)) && d.push(l)), up(a.b, k.name, l, k.type, !!k.b, !!k.hidden))
        }
        c && (e = c(e));
        a.o.b();
        window.setTimeout(p(a.Ra, a, e, void 0), 0);
        b(d);
        a.T = []
    };
    sp.prototype.Ra = function(a, b) {
        var c = b || p(this.La, this),
            d = rp(this.R, "Oops, we couldn't load details for your calendar, please try again in a few minutes");
        this.U || (this.U = new rja(this.R));
        uja(this.U, a, c, d)
    };
    sp.prototype.La = function() {
        var a = this.R;
        window.setTimeout(function() {
            qp(a, pp)
        }, 0)
    };
    sp.prototype.Ja = function(a, b, c, d, e) {
        c = parseInt(c, 10);
        "true" != d && (this.o.set(b + "/hidden", "false"), this.o.set(b + "/off", "false"), this.o.b());
        wja(this, a, b, c);
        a = K(this.R, uj);
        "SEARCH_ADD_BOX" == e && a.tb("callist_searchbox_person_added")
    };
    var vja = function(a, b, c, d, e) {
        this.name = a;
        this.id = b;
        this.type = c;
        this.hidden = d;
        this.b = e
    };
    var vp = function() {
        lm.call(this);
        this.o = M();
        this.ta = !1;
        this.ma = {};
        this.ua = {};
        G(this.o.get(wg), op, q(this.T, {
            0: !0
        }), !1, this)
    };
    v(vp, lm);
    la(vp);
    var wp = function(a, b) {
        return a.getItem(b)
    };
    vp.prototype.forEach = function(a, b) {
        this.Hc();
        try {
            for (var c = this.qd(), d = 0, e = c.length; d < e; ++d) {
                var f = c[d];
                if ((b || !f.Ih) && !1 === a(f)) break
            }
        } finally {
            this.Dc()
        }
    };
    vp.prototype.Fk = function() {
        return this.qd().sort(p(this.V, this, !0))
    };
    var $o = function(a) {
            var b = [];
            a.forEach(function(a) {
                a.oj && !a.hidden && b.push(a.getId())
            }, !0);
            return b
        },
        yp = function(a, b, c) {
            var d = a.getItem(b);
            xp(a, b, !d.hidden, c)
        },
        xp = function(a, b, c, d) {
            var e = a.getItem(b);
            e.hidden = c;
            a.b.set(b + "/hidden", c ? "true" : "false");
            c || a.b.set(b + "/off", "false");
            if ("cCN3ZWF0aGVyQGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" == b)
                if (c) {
                    var f = a.b.getString("weather", "");
                    a.b.set("weather", "");
                    a.b.set("weatherOld", f)
                } else f = a.b.getString("weatherOld", ""), f = a.o.get(ug).ZX(f), a.b.set("weather", f),
                    a.b.set("weatherOld", "");
            zp(a, b, !c, !c);
            c && !e.Ih && (e = b + "/availOffline", Mj(a.b, e, "false") && a.b.set(e, "false"), Ap(b));
            a.b.b(d);
            a.T({
                3: !0
            });
            c || a.ya(new Bp)
        },
        yja = function(a, b, c) {
            b && a.contains(b) && a.getItem(b).hidden ? yp(a, b, c) : c && c()
        };
    vp.prototype.H = function(a, b, c, d) {
        if (a && this.contains(a) && b != this.getItem(a).oj)
            if (Cp(this, a)) {
                var e = [];
                if (b) {
                    var f = new zf,
                        g = p(f.callback, f);
                    e.push(f);
                    yja(this, a, g)
                }
                this.b.set(a + "/off", b ? "false" : "true");
                f = new zf;
                g = p(f.callback, f);
                e.push(f);
                this.b.b(g);
                d && (new Rf(e)).addCallback(d);
                zp(this, a, b, !!c)
            } else b ? yja(this, a, d) : d && d(), zp(this, a, !1, !!c);
        else d && d()
    };
    var Dp = function(a, b, c) {
            for (var d = !1, e = 0; e < b.length; ++e) {
                var f = a.getItem(b[e]);
                f && f.b != c && (f.b = c, d = !0)
            }
            d && a.T({
                4: !0
            })
        },
        Ep = function(a, b, c) {
            c.set(a + "/color", b.toString())
        },
        zp = function(a, b, c, d) {
            Fp(a, !d);
            var e = a.getItem(b);
            e.oj = !!c;
            e.Ih || (Gp(b) ? e.oj && zja(b) : (Hp([b], void 0, void 0), vm.va().get(b) || Fg(a.o, 14).Ra([b])));
            var f = {
                6: !0
            };
            d && (f[1] = !0);
            a.T(f);
            a.ya(new Aja(b, c));
            e.oj && d && a.ya(new Bp)
        },
        Fp = function(a, b) {
            if (b && !a.U)
                for (var c = a.qd(), d = 0, e = c.length; d < e; ++d) {
                    var f = c[d];
                    f.o = f.oj
                }
            a.U = b
        };
    vp.prototype.R = function(a) {
        pa(a) && (a = this.getItem(a));
        return !!a && a.oj && !a.hidden
    };
    vp.prototype.V = function(a, b, c) {
        if (b.getId() == c.getId()) return 0;
        if (b.getId() == jh(this.o)) return -1;
        if (c.getId() == jh(this.o)) return 1;
        var d = c.type - b.type;
        return 0 == d || 2 != b.type && 2 != c.type ? !a || 0 == d && 2 == b.type || (a = this.U ? b.o : b.Sg(), d = this.U ? c.o : c.Sg(), a == d) ? Ip(vp.va(), b).toLowerCase().localeCompare(Ip(vp.va(), c).toLowerCase()) : a ? -1 : 1 : d
    };
    var Ip = function(a, b) {
            return Jp(a, b.getId())
        },
        Jp = function(a, b) {
            return a.getItem(b).getTitle()
        };
    vp.prototype.T = function(a) {
        this.lz() ? (this.ta = !0, wa(this.ma, a)) : (this.ta = !1, this.ya(new Bja))
    };
    vp.prototype.Dc = function() {
        vp.qa.Dc.call(this);
        if (this.ta && !this.lz()) {
            var a = this.ma;
            this.ma = {};
            this.T(a)
        }
    };
    vp.prototype.Ja = function() {
        this.U && (Fp(this, !1), this.T({
            1: !0
        }), this.ya(new Bp))
    };
    var up = function(a, b, c, d, e, f, g) {
            var k = a.b.Ys(c);
            k && (k | 0) == k && 1 <= k && 90 >= k || (k = bga(Cja(a), [Nea(gh(a.o))]), Ep(c, k, a.b));
            var k = a.b,
                l = ik(a.o).isEnabled(12),
                m = k.Ys(c);
            var r = k.getString(c + "/customColor", "");
            l && (r ? (l = r.split(","), l = 3 != l.length || "0" != l[0] && "1" != l[0] || !l[1] || 7 != l[1].length || "#" != l[1].charAt(0) || "#000000" != l[2] && "#FFFFFF" != l[2].toUpperCase() ? !1 : !0) : l = !1);
            l ? (r = r.split(","), l = 1 == r[0] ? !0 : !1, m = new em(m, l, l ? r[1] : Zj(m, 0), r[2], r[1])) : m = fm(m);
            if ("cmVtaW5kZXJzQHJlbWluZGVycy5nb29nbGUuY29t" == c) a: {
                if (k =
                    k.getString("goocal|taskscolor"))
                    if (k = Oj(Sj(k)), r = Oj(Sj(m.H)), k != r) {
                        k = gm(k);
                        break a
                    }
                k = m
            }
            else k = m;
            b = new Kp(b, c, k, d, !e, f, g || !1);
            f || Fp(a, !1);
            a.add(b, f, b.color)
        },
        Cja = function(a) {
            var b = {};
            a.forEach(function(a) {
                if (!a.hidden) {
                    a = a.color.wd();
                    var c = String(a);
                    c in b || (b[c] = 0);
                    b[a]++
                }
            });
            return b
        },
        Kp = function(a, b, c, d, e, f, g) {
            Zl.call(this, b);
            this.T = a;
            this.color = c;
            this.type = d;
            this.oj = e;
            this.o = !1;
            this.hidden = f;
            this.b = !1;
            this.Ih = g;
            this.H = !1
        };
    v(Kp, Zl);
    h = Kp.prototype;
    h.nc = function() {
        var a = vm.va().get(this.getId());
        return !this.Ih && !!a && 60 <= a.Nd
    };
    h.getTitle = function() {
        var a = vm.va().get(this.getId());
        return a && a.nd ? a.nd : this.T
    };
    h.setTitle = function(a) {
        this.T = a
    };
    h.fv = function(a) {
        a = Yj(a.H); - 1 != a && (this.color = fm(a))
    };
    h.Sg = function() {
        return this.oj
    };
    var Bja = function() {
        D.call(this, "clm.updated")
    };
    v(Bja, D);
    var Bp = function() {
        D.call(this, "clm.reordered")
    };
    v(Bp, D);
    var Aja = function(a, b) {
        D.call(this, "clm.itemstate");
        this.id = a;
        this.o = b
    };
    v(Aja, D);
    var Dja = function(a, b) {
            var c = a.ua[b];
            return null != c ? c : 0
        },
        Eja = function(a, b, c) {
            a.ua[b] = c
        },
        tp = function(a, b) {
            return Mj(a.b, b + "/availOffline", !1)
        },
        Cp = function(a, b) {
            var c = qi(a.o);
            return c || !c && tp(a, b)
        };
    var Fja = function() {
        J.call(this)
    };
    v(Fja, J);
    var Lp = function() {
        J.call(this);
        this.jc = 0
    };
    v(Lp, J);
    la(Lp);
    h = Lp.prototype;
    h.td = null;
    h.eK = null;
    h.Ks = null;
    h.vp = null;
    h.Es = null;
    h.Vm = null;
    h.Jp = null;
    var Np = function(a, b, c, d) {
            Mp(a, b, null, c, d)
        },
        Mp = function(a, b, c, d, e) {
            Op(a, b, c, q(Pp, d || Ha), e)
        },
        Op = function(a, b, c, d, e) {
            e = e || ia;
            0 == a.jc || 1 == a.jc || 2 == a.jc ? (a.eK = b, a.vp = d, a.Es = c, a.Jp = e, a.jc = 3, a.ya("A"), a.Ks ? a.Ks(p(a.o, a), p(a.b, a)) : a.o()) : e()
        };
    Lp.prototype.o = function() {
        Gja(this);
        this.Ks = this.td = null;
        this.vp && (this.td = this.eK, this.jc = 4, this.ya("y"), this.vp(p(this.H, this), p(this.b, this)))
    };
    Lp.prototype.H = function() {
        this.vp = this.Jp = null;
        this.Vm = this.Es;
        this.Es = null;
        Hja(this, this.Vm)
    };
    var Hja = function(a, b) {
            var c = 3 == a.jc;
            a.jc = 2;
            c || (c = new D("z"), c.Xc = b, a.ya(c))
        },
        Gja = function(a) {
            var b = 4 == a.jc;
            a.jc = 1;
            b || a.ya("B")
        };
    Lp.prototype.b = function() {
        this.Jp && (this.Jp(), this.Jp = null);
        this.Es = this.vp = null;
        3 == this.jc ? Hja(this, this.Vm) : (Gja(this), this.td = null)
    };
    var Pp = function(a, b, c) {
        a() ? b() : c()
    };
    var Qp = function(a) {
        J.call(this);
        this.ua = a;
        this.b = this.o = 10;
        this.U = !1;
        this.Ha = new I(this)
    };
    v(Qp, J);
    var Ija = function(a) {
        var b = Lp.va(),
            c = new Qp(a);
        document.documentElement.style.overflow = "hidden";
        F("calmaster").style.overflow = "auto";
        c.Ha.ka(b, "y", c.HW);
        Ig(a, 18, c)
    };
    h = Qp.prototype;
    h.HW = function(a) {
        Xk(a.target.td) && this.U && (this.U = !1, this.Xu())
    };
    h.Xu = function() {
        this.R ? this.R.ZF() : this.FF()
    };
    h.fU = function() {
        window.setTimeout(this.R.A9(p(this.FF, this)), 0)
    };
    h.FF = function() {
        var a = F("gridcontainer");
        if (a && 0 != a.offsetHeight) {
            var b = a.scrollTop;
            this.im();
            kp(M().get(yg));
            a.scrollTop = b
        } else this.U = !0, F("newdirtarget") && (this.o = ge().height, this.b = 0, this.ya("C")), Jja()
    };
    h.im = function() {
        var a = F("gridcontainer");
        if (!a.offsetParent || a.offsetParent == document.body) return !1;
        var b = lf(F("mothertable")),
            c = ge().height,
            d, e = lf(a);
        d = ep(this.ua);
        d = Math.max(d instanceof Hk ? 316 : 250, c - b.y - e.y);
        if (e = 5 <= Math.abs(d - a.offsetHeight)) b = Math.max(d, c - b.y), this.o = c, this.b = b, this.ya("C");
        a.style.height != d + "px" && (a.style.height = d + "px");
        a = ep(this.ua).o();
        if (!e && !a) return !1;
        a = F("calendars_fav");
        c = a.offsetHeight;
        this.V();
        a.offsetHeight != c && this.Ja && this.Ja.Eb();
        Kja(fp.va());
        Jja();
        Lja();
        return !0
    };
    var Jja = function() {
        qf(F("calmaster"), ge().height)
    };
    Qp.prototype.V = function() {
        if (this.T) {
            var a = F("clst_my"),
                b = of(a).y,
                c = ge().height - b,
                d = F("lhscalinner_my"),
                b = tf(d),
                e = tf(F("lhscalinner_fav")),
                f = Number(b) + Number(e);
            if (f) {
                var a = a.offsetHeight,
                    a = a + 2,
                    g = F("searchAddCal"),
                    g = e && g ? g.offsetHeight : 0,
                    d = yf(d).bottom,
                    k = ce("navfooter").offsetHeight,
                    f = e ? Math.max(c / f - 2 * a - g - k, 40) : 0,
                    c = b ? Math.max(c - 2 * a - g - f - d - k, 40) : 0,
                    a = b ? Math.max(c - this.T.b.offsetHeight, 0) : 0,
                    g = e ? Math.max(f - this.ta.b.offsetHeight, 0) : 0;
                b && Mja(this.T.H, c + g);
                e && Mja(this.ta.H, f + a);
                Lja()
            }
        }
    };
    var Lja = function() {
        var a = ce("navfooter"),
            b = a.offsetHeight;
        a.style.top = Math.max(a.parentElement.offsetHeight, ce("nav").offsetHeight + b) - b + "px"
    };
    var Rp = function(a, b, c, d, e) {
            this.Wg = a;
            this.an = b;
            this.o = b.rd();
            this.Ue = c;
            this.Sd = d;
            this.b = e || 7;
            this.size = this.Ue * this.Sd
        },
        Sp = function(a) {
            var b;
            if (!(b = a.H)) {
                b = a.an.lc();
                for (var c = a.Sd, d = a.b, e = [], f = 0, g = 0; g < a.Ue; g++) {
                    for (var k = 0; k < c; k++) e[f++] = b, b = yh(b);
                    for (; k < d; k++) b = yh(b)
                }
                b = a.H = e
            }
            return b
        };
    Rp.prototype.equals = function(a) {
        return this.Wg.equals(a.Wg) && this.an.equals(a.an) && this.Ue == a.Ue && this.Sd == a.Sd && this.b == a.b
    };
    var Tp = function(a) {
        return (a.Ue - 1) * a.b + a.Sd
    };
    Rp.prototype.wd = function(a, b) {
        return a * this.Sd + b
    };
    var Nja = function() {},
        Up = function(a) {
            this.o = a
        };
    v(Up, Nja);
    Up.prototype.b = function(a) {
        var b = this.o,
            c = Ah(a);
        c.Ka = 1 - (n(void 0) ? NaN : 1);
        b = (c.$a().rd() - b + 7) % 7;
        c.Ka -= b;
        return new Rp(a, c.$a(), 6, 7)
    };
    var Vp = function(a) {
        a = a || null;
        this.U = !!a && Fg(a, 12).Ed("VR");
        a && ik(a).isEnabled(23) && ik(a).isEnabled(47);
        this.ta = this.U
    };
    h = Vp.prototype;
    h.vn = function() {
        var a;
        a = (Xj ? $fa : Zfa)[0];
        return dk(a)
    };
    h.Th = function(a) {
        a = this.vn(a);
        var b = Yj(a.H);
        return 0 <= b ? fm(b) : gm(a.H)
    };
    h.Si = function(a) {
        return Rn(a)
    };
    h.ii = function() {
        return !0
    };
    h.Rl = function() {
        return !1
    };
    h.Ah = function() {
        return !1
    };
    h.hk = function() {
        return !1
    };
    h.Sl = function() {
        return !1
    };
    h.Ql = function() {
        return !1
    };
    h.iz = function(a) {
        return a.hd()
    };
    h.dt = function() {
        return null
    };
    h.xl = function() {
        return O("")
    };
    h.Wj = function() {
        return O("")
    };
    h.Zs = function() {
        return q(Sn, Fa(0))
    };
    h.ny = function() {
        return 0
    };
    h.rn = function() {
        return 1
    };
    h.Im = function() {
        return !0
    };
    h.ej = function() {
        return this.U
    };
    h.Eq = function() {
        return this.ta
    };
    h.Np = function() {
        return "\u00a0"
    };
    h.$i = function() {
        return !0
    };
    var Wp = function(a) {
        return $a(a.S, "SS_asid")
    };
    var Oja = function(a) {
            var b = jh(M());
            if (5 <= a.H) return null;
            for (var c = co.va(), d = 100 == eo(c, a.qb()).Ec() ? a.qb() : b, e = !1, b = null, f = 0, g = Vn(a), k = 0; k < g.length; k++) {
                var l = g[k];
                if (4 != Wn(a, l).jc) {
                    var m = eo(c, l);
                    if (m) {
                        var r = m.Ec();
                        if (108 == r) return null;
                        if (100 == r) {
                            if (2 < ++f) return null;
                            d != l ? b = m : e = !0
                        }
                    }
                }
            }
            2 == f && e && b ? (a = b.Od(), a = 100 == b.jd || a && a != b.getEmail() ? b : null) : a = null;
            return a
        },
        Pja = function(a) {
            var b = "";
            if (Mj(ih(M()), "showguestname", _isGoogUser) && !a.le()) {
                var c = Oja(a);
                null != c && (a = Wn(a, c.kc), b = " (" + ((a ? a.ue : null) || ao(c)) + ")")
            }
            return b
        };
    var Xp = function(a, b, c) {
        Vp.call(this, a);
        this.V = b;
        this.b = a;
        this.R = c;
        this.H = Fg(a, 20);
        this.Ca = ik(this.b).isEnabled(31)
    };
    v(Xp, Vp);
    h = Xp.prototype;
    h.vn = function(a) {
        return wp(vp.va(), a.qb()).color.b
    };
    h.Th = function(a) {
        var b = wp(vp.va(), a.qb()).color;
        a = Bm(a);
        vha(a) && im(b) && (b = gm(b.H, "#000000"));
        return b
    };
    h.Si = function(a) {
        var b = ob(a.getTitle()),
            b = (b ? b.replace(zfa, "") : "") || "(No title)",
            b = ub(b),
            c = "";
        if (Wp(a)) {
            var d = a.S.SS_slotsize; - 1 != parseInt(d, 10) && (c = " " + ("(" + d + "min slots)"))
        } else c = Pja(a);
        d = this.hk(a);
        a = 3 == a.La;
        return N(d ? "<span class=rsvp-no>" + O(b) + O(c) + "</span>" : a ? "<span class=hin-cmp>" + O(b) + O(c) + "</span>" : O(b) + O(c))
    };
    h.ii = function(a) {
        return !!a && (!this.H.nc(a) || a.le() && !a.Ef() || Xn(a, 4194304))
    };
    h.Rl = function(a) {
        return this.ii(a)
    };
    h.Sl = function(a) {
        return !this.ii(a) && "$" != a.getId() && 1 != a.ua && !(a.le() && !Xn(a, 2097152))
    };
    h.Ql = function(a) {
        return !this.ii(a) && "$" != a.getId() && !(a.le() && !Xn(a, 2097152))
    };
    h.dt = function(a) {
        if (this.R) {
            var b = eo(this.R, a.ne);
            if (b && 100 == b.jd) return b.tk;
            if (a = eo(this.R, a.Ke)) return a.tk
        }
        return null
    };
    h.hk = function(a) {
        return 2 == a.Ee
    };
    h.Wj = function(a, b) {
        var c = {},
            d = a.Qf();
        d && d.o && (c.src = d.o);
        var d = this.Ah(a),
            e = b && im(this.Th(a)),
            f = a.Ee;
        0 == f ? c.zp = wo("cic-nr", d, e) : 3 == f ? c.zp = wo("cic-ques", d, e) : Wp(a) ? c.zp = wo("cic-av", d, e) : 1 == a.ua ? c.zp = wo("cic-hin", d, e) : lia(a.S.CLNDR_flexibleMeeting) && this.Ca && (c.zp = wo("cic-flx", d, e));
        d = c || {};
        c = d.src;
        d = d.zp;
        return N((c ? '<img class="cwci" src="' + P(Mn(c)) + '">' : "") + O(null == d ? "" : d))
    };
    h.xl = function(a, b) {
        if (!b) return O("");
        var c = [],
            d = this.Ah(a),
            e = b && im(this.Th(a));
        Dga(Fg(this.b, 16), a) && c.push(wo("cic-tmr", d, e));
        a.Ff() ? c.push(wo("cic-spcl", d, e)) : Zn(a) && c.push(wo("cic-rcr", d, e));
        a.nz() && c.push(wo("cic-priv", d, e));
        Yp(this.H, a) && (Zp(this.H, a) ? c.push(wo("cic-noprs", d, e)) : c.push(wo("cic-prsn", d, e)));
        for (var d = "", e = c.length, f = 0; f < e; f++) d += O(c[f]);
        return N(d)
    };
    h.rn = function(a) {
        if (!Mj(ih(this.b), "fadeunimportant", "true") || !a.Ra) return 1;
        a = a.wb();
        var b = li(this.V);
        a = Yc(Bh(a, b), 1, 365);
        return 8 > a ? Zc(1, .6, (a - 1) / 7) : Zc(.6, 0, (a - 8) / 357)
    };
    h.Ah = function(a) {
        if (!Mj(ih(this.b), "dimpastevents", "true")) return !1;
        var b = li(this.V);
        return kia(a, b)
    };
    h.Im = function() {
        return !1
    };
    h.Np = function(a) {
        this.T || Gg(this.b, 810).addCallback(this.G7, this);
        return this.T ? vl(this.T.o(), {
            N: a
        }) : Xp.qa.Np.call(this, a)
    };
    h.G7 = function(a) {
        this.T = a
    };
    h.$i = function(a) {
        return 1 != a.ua
    };
    var ip = function(a) {
        var b = document.getElementById("gridcontainer");
        a || (b.scrollTop = 0);
        b.style.overflowY = a ? "scroll" : "visible"
    };
    var $p = function(a) {
        this.o = a
    };
    $p.prototype.S = 0;
    $p.prototype.T = 0;
    var Qja = function(a, b, c) {
            a.S = b;
            a.T = c
        },
        Rja = function(a, b, c) {
            var d = (c.T - a.T) * c.b,
                e = Math.round((c.rm / 60 - c.H) * c.b),
                e = Math.max(a.S * c.b, e);
            b.top = e;
            b.np = 100 * c.left;
            b.pp = "%";
            b.edge = "left";
            a = Math.round((c.o / 60 - c.H) * c.b);
            a = Math.min(a, d);
            b.height = Math.max(a - e, c.b / 2);
            b.width = 100 * c.width;
            b.AB = "%"
        },
        aq = function() {
            this.o = null
        };
    v(aq, $p);
    aq.prototype.H = function() {
        return O("")
    };
    aq.prototype.R = ia;
    var Sja = new aq,
        bq = function() {},
        Tja = function(a) {
            var b = new bq;
            b.rm = a;
            return b
        };
    bq.prototype.S = !1;
    bq.prototype.R = !0;
    var Uja = function(a) {
            var b;
            b = b || {};
            var c = a.style,
                d = a.height,
                e = a.text;
            return N('<div style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "height:" + P(Q(d)) + 'px;"><div class="' + P(c) + '" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "height:" + P(Q(d - 1)) + "px;" + (-1 != ("" + c).indexOf("tg-time-pri") && (null == a.Le ? 0 : a.Le.dv) ? "background-color:" + P(Q(a.Le.dv)) + ";" : "") + '">' + O(e) + "</div></div>")
        },
        Vja = function(a) {
            var b;
            b = b || {};
            return N('<td style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "width:" + P(Q(a.width)) + 'px;"></td>')
        };
    var cq = function(a, b) {
        this.Td = a;
        this.S = b || ""
    };
    cq.prototype.setTitle = function(a) {
        this.S = a
    };
    cq.prototype.getTitle = function() {
        return this.S
    };
    var dq = function(a) {
        cq.call(this, 4 < a.title.length ? 60 : a.ma ? 45 : 40, a.title);
        this.Ca = a.U;
        this.V = a.T;
        this.T = a.isPrimary;
        this.H = a.S;
        this.U = a.Le || null
    };
    v(dq, cq);
    dq.prototype.ma = function() {
        return this.T
    };
    dq.prototype.R = function(a, b, c, d, e) {
        return Wja(this, a, b, c, d, e, !0)
    };
    var Wja = function(a, b, c, d, e, f, g) {
            for (var k = f - 1, l = []; e < f; ++e) {
                var m = {
                    style: g && e == k ? a.H.getItem() + " " + a.H.o : a.H.getItem(),
                    height: b,
                    text: eq(a, e),
                    Le: a.U ? So(a.U) : null
                };
                l.push(Uja(m))
            }
            a = '<td class="' + P(a.H.b + (c ? "" : " tg-timesnotlast")) + '">';
            b = l.length;
            for (c = 0; c < b; c++) a += O(l[c]);
            l = d.length;
            for (b = 0; b < l; b++) a += O(d[b]);
            return N(a + "</td>")
        },
        eq = function(a, b) {
            return fq(a.V, b, a.Ca)
        },
        fq = function(a, b, c) {
            b = Zh(2E3, 1, 1, b, c, 0);
            return a.sc(b.rb(), !0)
        },
        hq = function(a, b, c, d, e, f, g) {
            var k = a.length;
            g = g || new gq;
            var l = Ah(b.start);
            l.second += b.duration.b / 2;
            b = l.rb();
            for (var l = [], m = 0; m < k; m++) {
                var r = tb(a[m].Zf, "30"),
                    u = 0 == m;
                g.title = a[m].S;
                g.U = a[m].b(b);
                g.S = u ? e : f;
                g.T = d;
                g.ma = r && !c;
                g.isPrimary = u;
                l.push(g.H())
            }
            l.reverse();
            return l
        },
        gq = function() {};
    gq.prototype.isPrimary = !0;
    gq.prototype.H = function() {
        return new dq(this)
    };
    var iq = function(a, b, c) {
        this.b = a;
        this.H = b;
        this.o = c
    };
    iq.prototype.getItem = function() {
        return this.H
    };
    var jq = new iq("tg-times-pri", "tg-time-pri", "tg-time-pri-last"),
        Xja = new iq("tg-times-sec", "tg-time-sec", "tg-time-sec-last");
    var kq = function(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };
    kq.prototype.clone = function() {
        return new kq(this.start, this.end)
    };
    var lq = function(a, b, c) {
        this.o = a;
        this.U = b;
        this.b = c;
        this.V = ik(M()).isEnabled(48)
    };
    v(lq, $p);
    lq.prototype.H = function(a, b, c, d) {
        var e = a.event,
            f = new No,
            g = Yja && this.b.Im();
        Qo(f, 2, g);
        var g = Wp(e),
            k = this.b.iz(e),
            l = this.b.Th(e),
            m = 0;
        g ? m = 3 : this.b.hk(e) ? m = 2 : this.b.Rl(e) && (m = 1);
        var r = this.b.rn(e),
            u = Bm(e),
            w = this.b.Ah(e),
            m = Ria(l, w, m, r, u);
        f.Qx = l;
        f.Yw = m.bgColor;
        f.wD = m.borderColor;
        f.DD = m.cx;
        f.lF = m.textColor;
        f.o = m.XU;
        Rja(this, f, a);
        l = this.b.Rl(e);
        m = this.b.Eq();
        Qo(f, 1, l);
        l && m && (l = f.Qx ? Qia(f.Qx, f.Yw) : 15, f.Ya.push("ro-chip-" + l));
        l = this.b.hk(e);
        Qo(f, 16, l);
        l && f.Ya.push("rsvp-no-chip");
        l = this.b.Sl(e);
        Qo(f, 4, l);
        e.le() &&
            a.R && !e.qg() && (l = e.getId().charCodeAt(1), m = this.b.dt(e), r = e.le() ? e.ne : null, f.b = m, f.H = l, f.R = r);
        l = this.b.Si(e);
        m = this.V ? 40 : 30;
        if (k) m = mq(this, e.wb()), k = "", l = Zja(this, l, e), d = nq(this, l, e, 1), f.text = d;
        else if (a.o - a.rm > m) {
            m = mq(this, e.wb(), e.Wb());
            k = "";
            l = Zja(this, l, e);
            r = a.o - a.rm;
            if (60 <= r || d) l = nq(this, l, e, Math.floor((r - 40) / 20));
            f.text = l
        } else l = a.S ? O("") : l, d && (l = nq(this, l, e, 0)), m = mq(this, e.wb(), e.Wb(), l), k = l.getContent();
        d = this.b.Wj(e, !0);
        l = m;
        m = this.b.xl(e, !0);
        d = N(O(d) + O(l) + " " + O(m));
        f.kF = d;
        f.ED = k || "";
        e = To(e);
        f.Ya.push(e);
        g && f.Ya.push("av-chip");
        0 < a.left && (f.Ya.push("chip-border"), (a = c && c.$a()) && b == a ? f.Ya.push("chip-color-today") : f.Ya.push("chip-color"));
        return f.xv()
    };
    var Zja = function(a, b, c) {
            a.b.$i(c) && (a = "evt-lk ca-elp" + va(c), b = N('<span class="' + P(a) + '">' + O(b) + "</span>"));
            return b
        },
        nq = function(a, b, c, d) {
            if (!a.V) return b;
            a = c.He;
            var e = "";
            c instanceof Tn && (c = c.Za, e = 0 < c.length ? c[0] : "");
            if (e) c = e;
            else if (a) c = a;
            else return b;
            b = {
                Ez: c,
                title: b
            };
            if (0 < d) {
                b.I8 = 12 * d;
                var f;
                f = f || {};
                d = b.Ez;
                c = b.title;
                return N('<div class="ctdiv" style="' + (f.Aa ? "/*" + f.Aa + "*/" : "") + "max-height: " + P(Q(b.I8)) + 'px">' + O(c) + '</div><span class="cloc">' + O(d) + "</span>")
            }
            return Via(b)
        },
        mq = function(a, b, c, d) {
            b =
                a.U.sc(b.kd(), !0, !0);
            return c ? d ? N(Oo ? O(b) + " <span class=cbrdcc>- " + O(d) + "</span>" : O(b) + " - " + O(d)) : O(Ba(b, a.U.sc(c.kd(), !0, !0))) : O("At " + b)
        },
        oq = function(a, b) {
            return Dc(b, "chip") ? b : Ee(a.o, "*", "chip", b)[0]
        };
    lq.prototype.R = function(a, b) {
        var c = oq(this, a),
            d = "DL" != c.firstChild.tagName;
        c.style.height = b ? b - Po + "px" : "auto";
        c.getElementsByTagName("dl")[0].style.height = b ? b - Po - (d ? 5 : 3) + "px" : "auto";
        Oo && (d = b - (d ? 5 : 3) - 3, ee("mask-left", c).style.height = d + "px", ee("mask-right", c).style.height = d + "px")
    };
    var Yja = !(td || Vd);
    var pq = function(a, b, c) {
        this.o = a;
        this.H = b;
        this.R = c
    };
    h = pq.prototype;
    h.iE = function() {
        return null
    };
    h.hE = function() {
        return null
    };
    h.EK = ia;
    h.BK = ia;
    h.nb = function() {
        return this.o
    };
    h.setVisible = function(a) {
        this.o = a
    };
    var qq = function() {
        pq.call(this, !1, 0, 0)
    };
    v(qq, pq);
    qq.prototype.nb = function() {
        return !1
    };
    var rq = function(a, b, c, d, e, f, g, k, l, m) {
        x.call(this);
        this.ma = a;
        this.R = b;
        this.Ca = c;
        this.o = d;
        this.ta = d / 2;
        this.V = e;
        this.ua = f;
        this.H = g;
        this.S = k ? 0 : 1;
        this.T = l;
        this.U = m
    };
    v(rq, x);
    rq.prototype.Ia = null;
    rq.prototype.b = null;
    rq.prototype.ha = function() {
        return this.Ia
    };
    var $ja = function(a, b, c, d) {
        this.event = a;
        this.rm = b;
        this.b = c;
        this.LD = d;
        this.$u = []
    };
    var aka = function(a) {
        var b, c;
        b = b || {};
        var d = a.id,
            e = a.lS,
            f = a.kS,
            g = a.kZ,
            k = a.Z8,
            l = a.M5,
            m = a.sT,
            r = a.Fx;
        a = '<td class="' + P(a.jS) + '">';
        for (var u = k.length, w = 0; w < u; w++) a += O(null == (c = k[w]) ? "" : c);
        a += '<div id="' + P(d) + "Col" + P(e) + '" class="tg-col-eventwrapper" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "height:" + P(Q(f)) + "px;margin-bottom:-" + P(Q(f)) + 'px;"><div class="' + P(g) + '">';
        b = r.length;
        for (f = 0; f < b; f++) a += O(r[f]);
        r = m.length;
        for (b = 0; b < r; b++) a += O(null == (c = m[b]) ? "" : c);
        a += '</div></div><div id="' + P(d) + "Over" + P(e) + '" class="tg-col-overlaywrapper">';
        d = l.length;
        for (e = 0; e < d; e++) a += O(null == (c = l[e]) ? "" : c);
        return N(a + "</div></td>")
    };
    var sq = function(a, b, c, d, e, f) {
        this.V = new lq(be(), a, b);
        this.H = c || "tg";
        this.ma = d || !1;
        this.Ra = e || "tg-gutter";
        b = new gq;
        b.title = "";
        b.U = 0;
        b.T = a;
        b.S = jq;
        b.Le = f;
        this.T = [b.H()];
        this.Ca = [];
        this.ua = [];
        this.ta = [];
        this.R = new qq;
        this.b = 0;
        this.o = 24;
        this.Ca.push(bka);
        this.ta.push(cka)
    };
    sq.prototype.S = null;
    sq.prototype.Ba = 0;
    var tq = function(a, b, c) {
            a.b = b;
            a.o = c
        },
        uq = function(a) {
            return a.o - a.b
        },
        vq = function(a, b) {
            a.T = b;
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                if (e.ma && e.T) break;
                c += e.Td
            }
            a.Ba = c
        },
        dka = function(a) {
            for (var b = 0, c = 0, d = a.T.length; c < d; c++) b += a.T[c].Td;
            return b
        },
        wq = function(a, b) {
            return 42 * (b.hour + b.minute / 60 - a.b) | 0
        },
        eka = function(a, b, c, d, e) {
            var f = a.V;
            if (a.U)
                for (var g in a.U)
                    if (a.U[g].j6(b, c)) {
                        f = a.U[g].xk;
                        break
                    }
            g = Tja(b.rm);
            g.o = b.b;
            g.event = b.event;
            g.left = b.left;
            g.width = b.PU;
            g.b = 42;
            g.H = a.b;
            g.R = !b.NT;
            g.T = uq(a);
            return f.H(g,
                c, e, 1 == d)
        },
        fka = function(a, b, c, d) {
            var e = a.U || {};
            e[b] = {
                j6: c,
                xk: d
            };
            a.U = e
        },
        bka = function(a, b, c, d, e) {
            a = e && e.$a();
            var f;
            a && b == a ? (b = 42 * uq(d), f = f || {}, f = N('<div class="tg-today" style="' + (f.Aa ? "/*" + f.Aa + "*/" : "") + "height:" + P(Q(b)) + "px;margin-bottom:-" + P(Q(b)) + 'px;">&nbsp;</div>')) : f = null;
            return f
        },
        cka = function(a, b, c, d, e) {
            a = e && e.$a();
            var f;
            b == a ? (b = d.H, a = wq(d, e), d = xq(d, e), f = f || {}, d = !!d, f = N('<div class="tg-hourmarker tg-nowmarker" id="' + P(b) + 'nowmarker" style="' + (f.Aa ? "/*" + f.Aa + "*/" : "") + "top:" + P(Q(a)) + "px;" + (d ?
                "" : "display:none;") + '"> </div>')) : f = null;
            return f
        };
    sq.prototype.render = function(a, b, c) {
        var d = a.length,
            e = 42 * uq(this) + 2,
            f, g = c || null;
        f = this.T;
        for (var k = [], l = 0, m = f.length; l < m; l++) k.push(Vja({
            width: f[l].Td
        }));
        k.push(gka(this, d));
        g ? (l = this.Ba, m = wq(this, g) - 4, g = !!xq(this, g), g = [N('<div id="' + P(this.H) + 'nowptr" class="tg-nowptr" style="' + P(Q("left")) + ":" + P(Q(l)) + "px;top:" + P(Q(m)) + "px;" + (g ? "" : "display:none;") + '"></div>')]) : g = [];
        for (var r = g, g = [], l = 0, m = f.length; l < m; l++) {
            var u = l == m - 1;
            g.push(f[l].R(42, u, u ? r : [], this.b, this.o))
        }
        f = '<tr height="1">';
        l = k.length;
        for (m =
            0; m < l; m++) f += O(k[m]);
        f += "</tr><tr>";
        k = g.length;
        for (l = 0; l < k; l++) f += O(g[l]);
        f = N(f);
        l = b;
        k = [];
        for (g = 0; g < d; g++) {
            r = [];
            m = a[g];
            if (m.length) {
                for (var r = m, u = l, w = r.length, z = [], B = [], A = [], L = 0; L < w; ++L) {
                    var Z = r[L],
                        R = Z.wb(),
                        ha = Nh(R) || 0;
                    R.lc() < u.lc() && (ha = 0);
                    var ka = Z.Wb(),
                        R = Nh(ka) || 0;
                    30 > R - ha && (R = ha + 30);
                    if (ka.lc() > u.lc() || 1440 < R) R = 1440;
                    for (ka = 0; B[ka] > ha;) ka++;
                    var Z = new $ja(Z, ha, R, ka),
                        ja = A[ka];
                    ja || (ja = A[ka] = []);
                    ja.push(Z);
                    B[ka] = R;
                    z[ka] = Z;
                    0 != ka && (Z.eu = [z[ka - 1]], z[ka - 1].$u.push(Z));
                    for (R = ka + 1; B[R] <= ha;) R++;
                    if (ha = z[R]) Z.$u.push(ha),
                        ha.eu.push(Z)
                }
                r = Array.prototype.concat.apply([], A);
                for (z = u = r.length; z--;) {
                    A = 1;
                    L = 0;
                    w = r[z];
                    for (B = w.$u.length; B--;) ha = w.$u[B], L = Math.max(L, ha.tL), A = Math.min(A, ha.left), ha.rm < w.rm + 30 && (w.NT = !0);
                    w.tL = L + 1;
                    w.width = A / (w.LD + 1);
                    w.left = A - w.width
                }
                for (z = 0; z < u; z++) {
                    w = r[z];
                    w.left = 0;
                    if (w.eu)
                        for (B = w.eu.length; B--;) A = w.eu[B], w.left = Math.max(w.left, A.left + A.width);
                    B = (1 - w.left) / w.tL;
                    w.width = Math.max(w.width, B);
                    w.PU = Math.min(1 - w.left, w.width + .7 * B)
                }
                u = l;
                w = d;
                z = c;
                B = [];
                for (A = 0; A < r.length; A++) B.push(eka(this, r[A], u, w, z));
                r =
                    B
            }
            u = [];
            for (B = 0; B < this.Ca.length; ++B) u.push(this.Ca[B](g, l, m, this, c));
            u.push(this.R.iE(g, l, m, this, c));
            w = [];
            for (B = 0; B < this.ua.length; ++B) w.push(this.ua[B](g, l, m, this, c));
            w.push(this.R.hE(g, l, m, this, c));
            z = [];
            for (B = 0; B < this.ta.length; ++B) z.push(this.ta[B](g, l, m, this, c));
            z.push(null);
            m = this.ma && g == d - 1 ? "tg-gutter" : this.Ra;
            B = "tg-col";
            c && (l.equals(c.$a()) || 1 < d && l.equals(Fh(c)) && 0 < g) && (B = "tg-col-today");
            B = Rea(l.rd()) ? B + " tg-weekend" : B;
            k.push(aka({
                kS: 42 * uq(this),
                id: this.H,
                lS: g,
                Z8: u,
                jS: B,
                kZ: m,
                Fx: r,
                sT: w,
                M5: z
            }));
            this.ma || (l = Fh(l))
        }
        c = dka(this) + 3;
        m = l = NaN;
        a = Array.prototype.concat.apply([], a);
        r = a.length;
        for (g = 0; g < r; g++) w = a[g], u = Nh(w.wb()), w = Nh(w.Wb()), w < u || (isNaN(l) ? (l = u, m = w) : (l = Math.min(l, u), m = Math.max(m, w)));
        this.S = new rq(b, d, c, 42, !1, isNaN(l) ? null : new kq(l, m), this.H, this.ma, this.b, uq(this));
        b = this.R;
        b = b.nb() ? b.H : 0;
        var d = this.H,
            fa;
        fa = fa || {};
        e = '<div class="tg-mainwrapper" style="' + (fa.Aa ? "/*" + fa.Aa + "*/" : "") + "margin-top:" + P(Q(b)) + 'px;"><table id="' + P(d) + 'Table" class="tg-timedevents" cellpadding="0" cellspacing="0" style="' +
            (fa.Aa ? "/*" + fa.Aa + "*/" : "") + "height:" + P(Q(e)) + 'px">' + O(f);
        fa = k.length;
        for (b = 0; b < fa; b++) e += O(k[b]);
        return N(e + "</tr></table></div>")
    };
    var gka = function(a, b) {
            for (var c = a.R.EK(42), d = a.o - a.b, e = a.R.BK(42), f, g = a.H, c = '<td colspan="' + P(b) + '"><div class="tg-spanningwrapper"><div class="tg-hourmarkers">' + O(null == (f = c) ? "" : f), k = 0; k < d; k++) c += '<div class="tg-markercell' + P("") + '"><div class="tg-dualmarker' + P("") + '"></div></div>';
            c += O(null == (f = e) ? "" : f) + '</div></div><div class="tg-spanningwrapper tg-chipspanningwrapper" id="' + P(g) + 'spanningwrapper"></div></td>';
            return N(c)
        },
        xq = function(a, b) {
            return !isNaN(b.hour) && b.hour >= a.b && b.hour < a.o
        },
        hka = function(a, b, c) {
            for (var d = [], e = {}, f = b = b.lc(), g = 0; g < c; g++) d[g] = [], e[f] = g, f = yh(f);
            c = f;
            for (var g = 0, k = a.length; g < k; g++) {
                var l = a[g],
                    f = l.wb().lc(),
                    m = Gh(l.Wb()).lc();
                f == m && (m += 1);
                f = Math.max(f, b);
                for (m = Math.min(m, c); f < m;) d[e[f]].push(l), f = yh(f)
            }
            return d
        };
    var zq = function(a, b, c, d, e, f, g) {
        this.U = a;
        this.V = b;
        this.ta = c;
        this.ua = e;
        this.Ba = f;
        this.Ca = g;
        b = ika(this);
        yq(a) && b && b.collapsed && (this.H = !0, this.R = b.start, this.T = b.end)
    };
    zq.prototype.S = !1;
    zq.prototype.H = !1;
    var yq = function(a) {
            var b = ik(a).isEnabled(9);
            return Mj(gh(a).b, "collapsingRangesLab", b ? "true" : "false")
        },
        kka = function(a) {
            a.b = new sq(a.V, a.ta, a.ua, a.Ba, a.Ca);
            fka(a.b, "ud", p(function(a, c) {
                return !jka(this, a.event, c).ki
            }, a), Sja);
            null != a.R && tq(a.b, a.R, a.T);
            a.o ? a.b.R = a.o : null != a.R && a.H && (a.S = !0, tq(a.b, Math.max(a.R - 1, 0), Math.min(a.T + 1, 24)), Qja(a.b.V, 1, 1))
        },
        Aq = function(a) {
            a.b || kka(a);
            return a.b
        },
        jka = function(a, b, c) {
            var d = function(a) {
                    var b = Ah(c);
                    Xh(b, new Ch(0, a, 0, 0));
                    return b.rb()
                },
                e = b.wb().Wa();
            b = b.Wb().Wa();
            var f = d(a.b.b).Wa();
            a = d(a.b.o).Wa();
            var g = d(0).Wa(),
                d = d(24).Wa();
            return b < g || e >= d ? lka : e < f ? b <= f ? mka : b <= a ? nka : oka : e < a ? b <= a ? pka : qka : rka
        },
        ika = function(a) {
            a = ih(a.U).get("collapsedTime");
            if (null != a) {
                var b = RegExp("(.*)\\|(.*)\\|(.)", "g").exec(a);
                if (b) {
                    a = parseFloat(b[1]);
                    var c = parseFloat(b[2]),
                        b = "1" == b[3];
                    if (!isNaN(a) && !isNaN(c)) return new ska(a, c, b)
                }
            }
            return null
        },
        lka = {
            top: !1,
            ki: !1,
            bottom: !1
        },
        mka = {
            top: !0,
            ki: !1,
            bottom: !1
        },
        nka = {
            top: !0,
            ki: !0,
            bottom: !1
        },
        pka = {
            top: !1,
            ki: !0,
            bottom: !1
        },
        qka = {
            top: !1,
            ki: !0,
            bottom: !0
        },
        rka = {
            top: !1,
            ki: !1,
            bottom: !0
        },
        oka = {
            top: !0,
            ki: !0,
            bottom: !0
        },
        ska = function(a, b, c) {
            this.start = a;
            this.end = b;
            this.collapsed = c
        };
    var tka = function(a) {
        var b;
        b = b || {};
        var c = a.v9,
            d = a.row,
            e = a.Ue;
        a = a.Ll;
        b = '<div class=month-row style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "top:" + P(Q(c * d)) + "%;" + (d < e - 1 ? "height:" + P(Q(c + 1)) + "%" : "bottom:0") + '">';
        c = a.length;
        for (d = 0; d < c; d++) b += O(a[d]);
        return N(b + "</div>")
    };
    var uka = function(a, b) {
            this.o = a;
            this.b = b
        },
        Bq = function(a, b, c) {
            this.o = a;
            this.H = b;
            this.b = c || 0
        },
        vka = new Bq(21, 21, 3),
        wka = new Bq(19, 19, 5),
        xka = new Bq(17, 17, 4);
    var Cq = function(a) {
        Vp.call(this);
        this.b = a;
        this.o = {}
    };
    v(Cq, Vp);
    var Dq = function(a, b) {
        return a.o[b.qb()] || a.b
    };
    h = Cq.prototype;
    h.vn = function(a) {
        return Dq(this, a).vn(a)
    };
    h.Th = function(a) {
        return Dq(this, a).Th(a)
    };
    h.Si = function(a) {
        return Dq(this, a).Si(a)
    };
    h.ii = function(a) {
        return Dq(this, a).ii(a)
    };
    h.Rl = function(a) {
        return Dq(this, a).Rl(a)
    };
    h.hk = function(a) {
        return Dq(this, a).hk(a)
    };
    h.Sl = function(a) {
        return Dq(this, a).Sl(a)
    };
    h.Ql = function(a) {
        return Dq(this, a).Ql(a)
    };
    h.iz = function(a) {
        return Dq(this, a).iz(a)
    };
    h.dt = function(a) {
        return Dq(this, a).dt(a)
    };
    h.xl = function(a, b) {
        return Dq(this, a).xl(a, b)
    };
    h.Wj = function(a, b) {
        return Dq(this, a).Wj(a, b)
    };
    h.Zs = function() {
        return q(Sn, p(this.tS, this))
    };
    h.tS = function(a, b) {
        var c = vp.va();
        return Dq(this, a).ny() - Dq(this, b).ny() || Dja(c, a.qb()) - Dja(c, b.qb())
    };
    h.rn = function(a) {
        return this.b.rn(a)
    };
    h.Ah = function(a) {
        return Dq(this, a).Ah(a)
    };
    h.Im = function() {
        return this.b.Im()
    };
    h.ej = function() {
        return this.b.ej()
    };
    h.Eq = function() {
        return this.b.Eq()
    };
    h.Np = function(a) {
        return this.b.Np(a)
    };
    h.$i = function(a) {
        return Dq(this, a).$i(a)
    };
    var yka = new kq(5, 20),
        zka = function(a, b, c, d) {
            var e = n(d) ? d : 1E5;
            d = n(d) ? d + b : -1;
            a = a.o;
            for (var f = 24 * a, g = NaN, k = NaN, l = !1, m = 0; m < c.length; ++m) {
                var r = Yc(c[m] * a / 60, 0, f),
                    l = l || r < e || r > d;
                if (isNaN(g)) g = k = r;
                else if (r < g ? g = Math.max(r, k - b) : r > k && (k = Math.min(r, g + b)), k - g >= b) break
            }
            return l ? g : e
        };
    var Aka = function(a, b) {
        this.b = a;
        this.o = b
    };
    var Eq = function(a) {
        this.b = a
    };
    Eq.prototype.apply = function(a) {
        for (var b = [], c = [], d = 0, e = a.length; d < e; d++) {
            var f = a[d],
                g = f.Qf() && mn(f.Qf());
            this.b && g || (f.b || f.Ja || g ? b.push(f) : c.push(f))
        }
        return new Aka(b, c)
    };
    var Fq = function(a, b, c, d, e, f) {
            this.R = a;
            this.id = String(b);
            this.b = c;
            this.o = d;
            this.ma = e;
            this.Le = f || null
        },
        Gq = function(a, b, c, d, e, f) {
            f = !!f;
            b = a.ma.apply(b);
            f = a.U(b, c, d, e, f);
            a = a.S(b, c, d, e);
            return {
                oB: f,
                FL: a
            }
        },
        Hq = function(a) {
            return "weekViewAllDay" + a.id
        },
        Iq = function(a) {
            return "scrolltimedevents" + a.id
        };
    Fq.prototype.T = function() {
        return "topcontainer" + this.id
    };
    var Jq = function(a, b, c, d, e, f) {
        Fq.call(this, a, b, c, d, new Eq(!1), f);
        this.V = !!e
    };
    v(Jq, Fq);
    Jq.prototype.H = !1;
    Jq.prototype.U = function(a, b, c, d, e) {
        a = a.b;
        var f = Bka(this, a),
            g = this.Le,
            k, l = to(),
            g = g ? So(g) : null;
        k = k || {};
        k = N('<th class="wk-dummyth" rowspan=3 style="' + (k.Aa ? "/*" + k.Aa + "*/" : "") + "width: " + P(Q(l)) + "px;" + ((null == g ? 0 : g.Ug) ? "background-color:" + P(Q(g.Ug)) + ";" : "") + '">&nbsp;</th>');
        for (var g = this.o.T, m = 0, l = [], r = 0; r < g.length; r++) m += g[r].Td, l.push({
            width: g[r].Td,
            title: g[r].getTitle(),
            PQ: r == g.length - 1 && f ? Cka(this, !!e, m) : ""
        });
        var u;
        u = u || {};
        f = "";
        g = l.length;
        for (m = 0; m < g; m++) r = l[m], f += '<td class=wk-tzlabel style="' +
            (u.Aa ? "/*" + u.Aa + "*//*" + u.Aa + "*/" : "") + "width:" + P(Q(r.width)) + 'px" rowspan=3>' + O(r.title) + O(r.PQ) + "</td>";
        f = N(f);
        l = 1 < d ? " wk-full-mode" : "";
        u = [];
        for (var w, g = b.$a(), r = !1, z = 0; z < d; z++) {
            var m = Ih(c, z),
                B = 1 == d ? this.R.Km(m) : this.R.Yr(m),
                A = "wk-dayname";
            r && (r = !1, A += " wk-tomorrow");
            m.equals(g) && (A += " wk-today", z == d - 1 ? A += " wk-today-last" : r = !0);
            u.push({
                Oc: B,
                Ya: A,
                rx: "ca-cdp" + m.lc()
            })
        }
        g = [];
        this.b.o = g;
        m = this.b;
        b = b.$a();
        r = Kq(this);
        z = [];
        if (1 == d && c.equals(b)) z.push({
            Ya: "st-bg-td-last"
        });
        else
            for (var B = !1, A = d, L = c; A--; L =
                Fh(L)) {
                var Z;
                L.equals(b) ? (B = !0, Z = L.equals(c) ? "st-bg-td-first" : 0 == A ? "st-bg-td-last" : "st-bg-today") : L.equals(c) || B ? (Z = "st-bg-next", B = !1) : Z = "st-bg";
                0 == A && (Z += " st-bg-lc");
                z.push({
                    Ya: Z
                })
            }
        m.o.push(cja({
            id: r,
            Ya: "st-bg-all",
            Tk: z
        }));
        Yo(this.b);
        c = new Vo(a, c, d, e ? 1 : 200, this.V && e ? 2 : 1, void 0);
        Wo(c, this.b);
        this.b.o.push(N("</table>"));
        this.b.o = null;
        e = c.R;
        c = [];
        for (a = 0; a < d; a++) c.push(hja(e[a]));
        e = Hq(this);
        a = this.Le ? So(this.Le) : null;
        var R;
        R = R || {};
        d = '<tr><td class="wk-allday" colspan="' + P(d) + '"' + ((null == a ? 0 : a.Ug) ?
            ' style="' + (R.Aa ? "/*" + R.Aa + "*/" : "") + "border-color:" + P(Q(a.Ug)) + '"' : "") + '><div id="' + P(e) + '" class="wk-allday-pos">';
        R = g.length;
        for (e = 0; e < R; e++) d += O(g[e]);
        d += '</div></td></tr><tr class="wk-webcontent">';
        R = c.length;
        for (e = 0; e < R; e++) d += '<td class="wk-webcontent-td">' + O(c[e]) + "</td>";
        d = N(d + "</tr>");
        this.Le && (w = So(this.Le));
        var ha;
        ha = ha || {};
        R = '<table class="wk-weektop' + P(l) + '" cellpadding=0 cellspacing=0' + ((null == w ? 0 : w.Ug) ? ' style="' + (ha.Aa ? "/*" + ha.Aa + "*/" : "") + "background-color:" + P(Q(w.Ug)) + '"' : "") + "><tr class=wk-daynames>" +
            O(f);
        c = u.length;
        for (e = 0; e < c; e++) a = u[e], R += '<th title="' + P(a.Oc) + '" scope=col><div class="' + P(a.Ya) + '"><span class="' + P(a.rx) + ' wk-daylink"' + ((null == w ? 0 : w.nK) ? 'style="' + (ha.Aa ? "/*" + ha.Aa + "*//*" + ha.Aa + "*/" : "") + "color:" + P(Q(w.nK)) + '"' : "") + ">" + O(a.Oc) + "</span></div></th>";
        R += O(k) + "</tr>" + O(d) + "</table>";
        return N(R)
    };
    var Bka = function(a, b) {
        if (!a.H) return !1;
        var c = Rb(b, function(a) {
            return !(a.Qf() && mn(a.Qf()))
        });
        lc(c, function(a, b) {
            return a.wb().$a().lc() - b.wb().$a().lc()
        });
        for (var d = 1, e = c.length; d < e; ++d)
            if (c[d - 1].Wb().$a().lc() > c[d].wb().$a().lc()) return !0;
        return !1
    };
    Jq.prototype.S = function(a, b, c, d) {
        a = hka(a.o, c, d);
        return this.o.render(a, c, b)
    };
    var Cka = function(a, b, c) {
        a = "allday-disclose" + a.id;
        var d = b ? "Expand All Day events" : "Collapse All Day events";
        b = b ? "goog-zippy-collapsed" : "goog-zippy-expanded";
        var e;
        e = e || {};
        return N('<div class=wk-disclose-pos style="' + (e.Aa ? "/*" + e.Aa + "*/" : "") + "width:" + P(Q(c)) + 'px"><div id="' + P(a) + '" title="' + P(d) + '" role=button class="wk-disclose ' + P(b) + '"><div class=wk-zip></div></div></div>')
    };
    Jq.prototype.T = function() {
        return "topcontainer" + this.id
    };
    var Kq = function(a) {
        return "weekViewAllDayBg" + a.id
    };
    var fp = function() {
        J.call(this);
        this.o = M();
        this.T = new Cq(new Xp(this.o, Vl(), co.va()));
        var a = jl(this.o);
        this.Ca = new Xo(a, this.T, !0);
        this.La = new Xo(a, this.T, !0, !0, !0);
        this.ta = new zq(this.o, a, this.T);
        this.V = Aq(this.ta);
        this.b = new Jq(a, "wk", this.La, this.V, !0);
        this.b.H = !0;
        this.ua = new uka(a, this.Ca);
        this.R = {};
        this.Fc = [];
        this.ma = ih(this.o);
        this.U = Mj(this.ma, "CollapseAllday", !1)
    };
    v(fp, J);
    la(fp);
    h = fp.prototype;
    h.Xl = "";
    h.jJ = null;
    h.cu = null;
    h.xz = 0;
    h.Wu = !1;
    h.Qi = null;
    var Lq = function(a) {
            a = ep(a.o);
            return a.ta ? a.H.Aq : !1
        },
        hp = function() {
            return F("gridcontainer")
        },
        Dka = function(a, b) {
            var c = mi(a.o),
                d = new qk(c, a.ma),
                c = b || ki(c);
            d.set(c, c, c);
            a.H = d
        },
        Fka = function(a, b) {
            if (a.ya("F")) {
                var c = zk(),
                    d = a.H.focus.$a(),
                    e = a.H.first.$a(),
                    f = ep(a.o).H;
                Hg(a.o, 18) && Fg(a.o, 18).im();
                var g = hp().offsetHeight;
                Ak(c, "refresh_resize");
                var k = f.aM,
                    e = null == f.hF ? e : Kh(e, f.hF),
                    l = Math.ceil(pk(a.H) / 7),
                    m = new Rp(d, e, l, k, k + f.f8),
                    r = !a.Qi || !m.equals(a.Qi);
                a.Qi = m;
                var u = ai(e, Tp(a.Qi)),
                    w;
                if (b) w = [];
                else {
                    var z = vp.va(),
                        B = ap(z, a.ma);
                    w = Eka(K(a.o, vj), u, B);
                    w.sort(a.T.Zs())
                }
                var A, L = O(""),
                    Z = li(Vl()),
                    R = jl(M()),
                    ha = !1;
                if (f.Aq) {
                    var ka = ih(a.o),
                        ja = a.ta,
                        fa = ka.kg(),
                        za = ka.On();
                    vq(Aq(ja), hq(fa, u, za, R, jq, Xja, ja.ma));
                    a.b.R = R;
                    var ua = Gq(a.b, w, Z, e, k, a.U);
                    A = ua.oB;
                    L = ua.FL;
                    ha = !0
                } else {
                    a.ua.o = R;
                    var sa = a.ua,
                        dc = w,
                        Bb = a.Qi,
                        Rd = Xl(),
                        re = d.month,
                        Xb;
                    var $e = F("calcontent"),
                        zo = $e ? $e.className : "";
                    Xb = tb(zo, "eui-t") ? xka : tb(zo, "eui-s") ? wka : vka;
                    for (var Fi = Math.max(1, Math.floor(((g - 20) / Bb.Ue + Xb.b - Xb.o) / Xb.H)), Gi = [], Tf = 0; Tf < Bb.Sd; Tf++) {
                        var Ij = Bb,
                            zr = Tf,
                            jI =
                            Sh(Sp(Ij)[0 * Ij.Sd + zr]).rd(),
                            hB = sa.o.Sw(jI);
                        Gi.push(hB)
                    }
                    for (var Ar = 100 / Bb.Ue, qv = [], mm = 0; mm < Bb.Ue; mm++) {
                        var Br = [];
                        sa.b.o = Br;
                        var nm, rv = Bb,
                            iB = mm;
                        nm = Sh(Sp(rv)[iB * rv.Sd + 0]);
                        for (var Ao = sa.b, om = Bb.Sd, sv = Rd, Bo = [], pm = !0, Hi = om, Jj = nm; Hi--; Jj = Fh(Jj)) {
                            var Ii = ["st-bg"];
                            pm && (pm = !1, Ii.push("st-bg-fc"));
                            Jj.equals(sv) && (0 == Hi && Ao.b.ej() ? Ii.push("st-bg-td-last") : Ii.push("st-bg-today"));
                            Jj.equals(Fh(sv)) && Hi != om - 1 && Ii.push("st-bg-next");
                            Bo.push({
                                Ya: Ii.join(" ")
                            })
                        }
                        Ao.o.push(dja({
                            Ya: "st-bg-table",
                            Tk: Bo
                        }));
                        Yo(sa.b);
                        for (var jB =
                                new Vo(dc, nm, Bb.Sd, Fi), qm = sa.b, Qk = nm, rm = Bb.Sd, kh = Rd, kI = re, lI = jB.R, mI = p(sa.o.Rw, sa.o), kB = 0 == mm, lB = [], Co = !0, nI = Fh(kh), Cr = Ih(kh, 7), Ji = 0; Ji < rm; Ji++) {
                            var Rk = Ih(Qk, Ji),
                                Kj = ["st-dtitle"];
                            kB && Kj.push("st-dtitle-fr");
                            Co && (Co = !1, Kj.push("st-dtitle-fc"));
                            kh.equals(Rk) && (Kj.push("st-dtitle-today"), Ji == rm - 1 && Kj.push("st-dtitle-lc"));
                            nI.equals(Rk) && 0 != Ji && Kj.push("st-dtitle-next");
                            Cr.equals(Rk) && Kj.push("st-dtitle-down");
                            Rk.month != kI && Kj.push("st-dtitle-nonmonth");
                            lB.push({
                                Ya: Kj.join(" "),
                                i8: "ca-cdp" + Rk.lc(),
                                oT: mI(Rk),
                                u9: hja(lI[Ji])
                            })
                        }
                        qm.o.push(eja({
                            Tk: lB,
                            Le: qm.U ? So(qm.U) : null
                        }));
                        Wo(jB, sa.b);
                        sa.b.o.push(N("</table>"));
                        qv.push(tka({
                            v9: Ar,
                            row: mm,
                            Ue: Bb.Ue,
                            Ll: Br
                        }));
                        sa.b.o = null
                    }
                    for (var Lj = '<div class="mv-container"><table cellpadding=0 cellspacing=0 class="mv-daynames-table" id="mvDaynamesTable"><tr>', Dr = Gi.length, tv = 0; tv < Dr; tv++) var Er = Gi[tv],
                        Lj = Lj + ('<th class="mv-dayname" title="' + P(Er) + '">' + O(Er) + "</th>");
                    for (var Lj = Lj + ('</tr></table><div class="mv-event-container" id="mvEventContainer' + P("") + '">'), oI = qv.length,
                            Do = 0; Do < oI; Do++) Lj += O(qv[Do]);
                    A = N(Lj + "</div></div>")
                }
                var Eo = "_" + Tp(a.Qi);
                Ak(c, "refresh_computeContent_" + Eo);
                a.Fc = w;
                a.R = {};
                for (var Fo = 0; Fo < w.length; Fo++) a.R[va(w[Fo])] = w[Fo];
                if (A.getContent() != a.Xl || L.getContent() != a.jJ) {
                    a.Xl = A.getContent();
                    a.jJ = L.getContent();
                    var uv = A,
                        pI = L;
                    a.ya("D");
                    a.Wu = !0;
                    if (Lq(a)) {
                        if (!F(Iq(a.b))) {
                            var Go = hp(),
                                Sk, Tk = a.b,
                                mB = 0 == to(),
                                Fr = Tk.T(),
                                vv = "topcontainerBorder" + Tk.id,
                                Ho = Iq(Tk),
                                sm = "bottomcontainerBorder" + Tk.id,
                                Ki = Tk.Le ? So(Tk.Le) : null,
                                zg;
                            zg = zg || {};
                            var wv = !!td,
                                xv = !!mB;
                            Sk = N('<div id="' +
                                P(Fr) + '"></div>' + (wv ? '<div id="' + P(vv) + '" class="wk-border"></div><div id="' + P(Ho) + '" class="wbkt wk-border-right wk-scrolltimedevents"' + ((null == Ki ? 0 : Ki.Ug) ? ' style="' + (zg.Aa ? "/*" + zg.Aa + "*/" : "") + "border-top-color:" + P(Q(Ki.Ug)) + "; border-top-color:" + P(Q(Ki.Ug)) + ';"' : "") + '></div><div id="' + P(sm) + '" class="wk-border"></div>' : '<div id="' + P(Ho) + '" class="' + (xv ? "wk-border-right " : "") + 'wk-scrolltimedevents"' + ((null == Ki ? 0 : Ki.Ug) ? ' style="' + (zg.Aa ? "/*" + zg.Aa + "*/" : "") + "border-top-color:" + P(Q(Ki.Ug)) + "; border-top-color:" +
                                    P(Q(Ki.Ug)) + ';"' : "") + "></div>"));
                            bn(Go, Sk)
                        }
                        bn(F(a.b.T()), uv);
                        var tm = F(Iq(a.b));
                        bn(tm, pI);
                        a.S && a.S.insert(!0);
                        var Io = a.V.S,
                            yv = tm.firstChild;
                        Io.Ia = yv;
                        Io.b = be(yv);
                        Kja(a);
                        if (r || !a.cu || tm.scrollTop == a.xz) {
                            var Jo = tm.clientHeight,
                                Ko = 20 > Z.hour ? new Lh(Z.year, Z.month, Z.Ka, Z.hour + 4, Z.minute, Z.second) : new Lh(Z.year, Z.month, Z.Ka, 23, 59, 59),
                                lh = [];
                            if (Z) {
                                var Li = Nh(Z);
                                lh.push(Li);
                                lh.push(Li + 30, Li - 30)
                            }
                            Ko && (Li = Nh(Ko), lh.push(Li), lh.push(Li + 30, Li - 30));
                            var um = Io.ua;
                            um && lh.push(um.start, um.end);
                            lh.push(60 * yka.start, 60 *
                                yka.end, 1440, 0);
                            a.xz = zka(Io, Jo, lh);
                            tm.scrollTop = a.xz
                        }
                        a.cu = Io
                    } else bn(hp(), uv), a.S && a.S.insert(!1);
                    a.ya("E");
                    Ak(c, "refresh_insertDom_" + Eo)
                } else {
                    if (ha) {
                        var nB = a.V.S,
                            Lo = F(Iq(a.b)).firstChild;
                        nB.Ia = Lo;
                        nB.b = be(Lo)
                    }
                    a.ya("G")
                }
            }
        };
    fp.prototype.Ra = function(a) {
        a = a.target;
        ep(this.o).o() && (Xk(a.td) ? this.ya("E") : this.ya("D"))
    };
    fp.prototype.Ba = function() {
        this.U = !this.U;
        Fka(this, !1);
        ih(this.o).set("CollapseAllday", this.U.toString());
        ih(this.o).b()
    };
    fp.prototype.Ib = function() {
        this.Xl = "";
        this.S && this.S.remove();
        this.R = {};
        this.Fc = [];
        this.Qi = null;
        this.ya("D");
        this.Wu = !1
    };
    var Kja = function(a) {
        if (a.Wu && Lq(a)) {
            var b = F(Iq(a.b));
            if (b) {
                var c = Math.max(100, hp().offsetHeight - F(a.b.T()).offsetHeight - 2) + "px";
                a.S && a.S.T(c);
                b.style.height = c;
                if (b = F(Kq(a.b))) a = rf(F(Hq(a.b))).height, gf(b, "height", a + "px")
            }
        }
    };
    var Mq = function(a, b, c) {
        this.H = [];
        this.o = b || Gka;
        this.R = c || "gcal$func$";
        this.S = a
    };
    v(Mq, x);
    var Gka = ca.gcal$func$ = {},
        Hka = 0,
        Nq = new Mq;
    Mq.prototype.wa = function() {
        for (var a = 0, b = this.H.length; a < b; ++a) delete this.o[this.H[a]];
        Mq.qa.wa.call(this)
    };
    Mq.prototype.b = function(a, b) {
        var c = b || this.S;
        c && (a = p(a, c));
        c = Hka++;
        this.o[c] = a;
        this.H.push(c);
        return Tha(this.R + "[" + c + "]")
    };
    Mq.prototype.T = function(a) {
        delete this.o[a.substring(this.R.length + 1, a.length - 1)]
    };
    var Oq = p(Nq.b, Nq);
    p(Nq.T, Nq);
    var Pq = new function() {
        this.b = this.o = null
    };
    var Ika = function(a, b, c, d, e, f, g) {
        this.H = a;
        this.R = b;
        this.b = c;
        this.o = d;
        this.T = e;
        this.S = f;
        this.U = g
    };
    var Qq = null;
    var Rq = null;
    var Sq = new J;
    var gp, Tq = !1,
        Uq = {},
        Vq = {},
        Wq = function() {
            Tq = !1;
            var a = document.getElementById("sropt");
            a && (a.style.display = "none", ne(a));
            if (a = document.getElementById("srreg")) a.style.display = "";
            Fg(M(), 18).Xu();
            var a = cp(M()),
                b = M();
            6 == a.b.b && (b = Mk(gp.b, b, gp.o), lp(a, b))
        },
        Xq = function() {
            Wq();
            Gg(M(), 803).addCallback(function(a) {
                a.b();
                Np(Lp.va(), "main_7")
            })
        };
    G(Sq, "H", Xq, !1, void 0);
    var Jka = function(a) {
        a = ik(M()).isEnabled(61) ? Za(Vq) : $o(a);
        return new Zo(a, !0, Uq)
    };
    var Yq = function(a) {
        x.call(this);
        this.o = a || document.title || "";
        this.b = []
    };
    v(Yq, x);
    la(Yq);
    h = Yq.prototype;
    h.nk = 0;
    h.zq = !0;
    h.wa = function() {
        Yq.qa.wa.call(this);
        y(this.Ha)
    };
    h.setTitle = function(a) {
        this.o = a;
        this.zq = !0;
        this.nk = 0;
        this.$q()
    };
    h.$q = function() {
        !this.zq && this.b.length ? (document.title = this.b[this.nk], this.nk = (this.nk + 1) % this.b.length, this.zq = !this.nk) : (document.title = this.o, this.b.length && (this.zq = !1))
    };
    var Kka = function() {
        this.b = encodeURIComponent("calendar")
    };
    var Lka = function() {
            this.b = new Kka
        },
        Zq = function(a, b, c) {
            var d = [];
            d.push("s=" + a.b.b);
            d.push("a=" + encodeURIComponent(b));
            d.push("c=" + encodeURIComponent(c));
            a = "//clients2.google.com/availability/?" + d.join("&");
            a = a + "&tm=" + (new Date).getTime();
            a = a + "&zx=" + Math.random();
            (new Image).src = a
        };
    var $q = new Ke;
    var ar = void 0,
        br = void 0,
        cr = "";
    var dr = function(a) {
            this.b = -1;
            this.o = [];
            this.H = a
        },
        gr = function(a, b, c) {
            a.o = b;
            if (!c && 0 < a.o.length)
                for (a.b = er(a, a.b), b = 0; b < a.o.length; b++) fr(a, a.o[b], b == a.b)
        },
        ir = function(a, b, c) {
            if (0 != a.o.length) {
                var d = er(a, a.b);
                if (!b(a.o[d]))
                    for (var e = 0; e < a.o.length; e++)
                        if (b(a.o[e])) {
                            d = e;
                            break
                        }
                c ? (a.b = d, Mka(a, c)) : hr(a, d)
            }
        },
        hr = function(a, b) {
            if (0 != a.o.length) {
                b = er(a, b);
                a.b != b && 0 <= a.b && a.b < a.o.length && fr(a, a.o[a.b], !1);
                var c = a.o[b];
                a.b == b && Be(c) || fr(a, c, !0);
                a.b = b
            }
        },
        fr = function(a, b, c) {
            a.H && Ic(b, a.H, c);
            Ce(b, c)
        },
        Mka = function(a,
            b) {
            if (0 != a.o.length) {
                var c = er(a, a.b);
                if (!b(a.o[c])) {
                    var d = jr(a),
                        e = kr(a, c, -1, b);
                    0 > e && (e = kr(a, c, 1, b));
                    0 <= e && (c = e);
                    d ? lr(a, c) : hr(a, c)
                }
            }
        },
        lr = function(a, b, c) {
            0 != a.o.length && (hr(a, b), c || a.o[a.b].focus())
        };
    dr.prototype.focus = function() {
        lr(this, this.b)
    };
    dr.prototype.blur = function() {
        jr(this) && this.Oe().blur()
    };
    var jr = function(a) {
            a = a.Oe();
            return !!a && we(a, document.activeElement)
        },
        kr = function(a, b, c, d) {
            for (; 0 <= b && b < a.o.length;) {
                if (d(a.o[b])) return b;
                b += c
            }
            return -1
        },
        er = function(a, b) {
            b >= a.o.length && (b = a.o.length - 1);
            0 > b && (b = 0);
            return b
        };
    dr.prototype.Oe = function() {
        return 0 <= this.b && this.b < this.o.length ? this.o[this.b] : null
    };
    var mr = function(a) {
            a = a.className;
            return pa(a) && a.match(/\S+/g) || []
        },
        nr = function(a, b) {
            var c = mr(a),
                d = hc(arguments, 1);
            Nka(c, d);
            a.className = c.join(" ")
        },
        or = function(a, b) {
            var c = mr(a),
                d = hc(arguments, 1),
                c = Oka(c, d);
            a.className = c.join(" ")
        },
        Nka = function(a, b) {
            for (var c = 0; c < b.length; c++) Zb(a, b[c]) || a.push(b[c])
        },
        Oka = function(a, b) {
            return Rb(a, function(a) {
                return !Zb(b, a)
            })
        },
        pr = function(a, b, c) {
            var d = mr(a);
            pa(b) ? cc(d, b) : na(b) && (d = Oka(d, b));
            pa(c) && !Zb(d, c) ? d.push(c) : na(c) && Nka(d, c);
            a.className = d.join(" ")
        },
        qr = function(a, b, c) {
            c ? nr(a, b) : or(a, b)
        };
    var Pka = function() {
        return N('<div class="calendars"><div></div></div><div class="calendars-s-t"></div><div class="calendars-s-b"></div>')
    };
    var rr = function(a) {
        this.o = Infinity;
        dn(a, Pka);
        this.b = a.firstChild;
        this.T = this.b.firstChild;
        this.U = this.b.nextSibling;
        this.V = this.U.nextSibling;
        var b = new I(this);
        b.ka(a, ["mouseover", "mouseout"], this.ta);
        b.ka(this.b, "scroll", this.ma)
    };
    rr.prototype.H = 0;
    rr.prototype.ta = function(a) {
        n(this.R) && window.clearTimeout(this.R);
        this.R = window.setTimeout(p(this.Ca, this, a), 10)
    };
    rr.prototype.Ca = function(a) {
        this.R = void 0;
        this.ua = "mouseover" == a.type;
        Qka(this)
    };
    rr.prototype.ma = function() {
        Rka(this)
    };
    var sr = function(a) {
            a.H = a.T.offsetHeight;
            var b = Math.max(a.o, 40),
                c = a.b.style;
            a.S = a.H > b;
            c.height = a.S ? b + "px" : "";
            Rka(a);
            Qka(a)
        },
        Rka = function(a) {
            var b = a.b.scrollTop;
            sf(a.U, Yc(b / 20, 0, 1));
            sf(a.V, Yc((a.H - a.o - b) / 20, 0, 1))
        },
        Qka = function(a) {
            qr(a.b, "calendars-hvr", a.S && a.ua)
        },
        Mja = function(a, b) {
            a.o != b && (a.o = b, a.b.scrollTop = 0, sr(a))
        };
    var tr;
    gb("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));
    var ur = function(a, b) {
            b ? a.setAttribute("role", b) : a.removeAttribute("role")
        },
        vr = function(a, b, c) {
            na(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (tr || (tr = {
                atomic: !1,
                autocomplete: "none",
                dropeffect: "none",
                haspopup: !1,
                live: "off",
                multiline: !1,
                multiselectable: !1,
                orientation: "vertical",
                readonly: !1,
                relevant: "additions text",
                required: !1,
                sort: "none",
                busy: !1,
                disabled: !1,
                hidden: !1,
                invalid: "false"
            }), c = tr, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        };
    var wr = function(a, b, c, d, e) {
        x.call(this);
        this.o = a;
        this.S = c;
        this.H = new rr(F(this.S));
        this.b = ke("DIV", {
            "class": "calList"
        });
        this.H.T.appendChild(this.b);
        vr(this.b, "multiselectable", !0);
        ur(this.b, "listbox");
        vr(this.b, "labelledby", d);
        this.T = e;
        this.R = b;
        G(this.o, "clm.updated", this.U, !1, this);
        G(this.o, "clm.reordered", this.V, !1, this);
        G(pi(this.R), "b", this.U, !1, this);
        this.Zb = new dr
    };
    v(wr, x);
    wr.prototype.wa = function() {
        ne(this.b);
        wr.qa.wa.call(this)
    };
    wr.prototype.U = function() {
        var a = vp.va(),
            b = [];
        this.o.forEach(function(a) {
            a.hidden || b.push(a)
        }, !0);
        b.sort(p(a.V, a, !0));
        var c = jr(this.Zb),
            d;
        if (c) {
            var e = this.Zb.Oe();
            e && (d = e.firstChild.id)
        }
        e = -1;
        ne(this.b);
        for (var f = [], g = 0; g < b.length; ++g) {
            var k = b[g];
            Eja(a, k.getId(), g);
            if (xr(this, k.getId())) {
                e++;
                var l = Ip(this.o, k),
                    m = Cp(this.o, k.getId()) && this.o.R(k),
                    k = Ska(this, k, ro(l)),
                    l = ke("DIV", "calListRow");
                f.push(l);
                this.b.appendChild(l);
                bn(l, k);
                vr(l, "selected", m);
                ur(l, "option")
            }
        }
        sr(this.H);
        Hg(this.R, 18) && Fg(this.R,
            18).V();
        gr(this.Zb, f);
        c && (d && ir(this.Zb, function(a) {
            return a.firstChild.id == d
        }), this.Zb.focus())
    };
    wr.prototype.V = function() {
        F(this.S).firstChild.scrollTop = 0;
        sr(this.H)
    };
    var xr = function(a, b) {
            if (b == jh(a.R)) return a.T;
            var c = a.o.getItem(b);
            return a.T == (2 == c.type)
        },
        Ska = function(a, b, c) {
            var d = b.getId(),
                e = "label-" + d,
                f = b.b,
                g = Cp(a.o, d),
                k = g && a.o.R(b);
            b = k ? b.color.b.b : "";
            a = qi(a.R);
            var l = Lia(Na(c)),
                k = k ? "-sel" : "",
                m;
            m = m || {};
            g = N('<div style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "cursor:" + P(Q(g ? "pointer" : "default")) + ';" class="calListLabelOuter"><div class="calListLabel' + P(k) + '"><div class="calListSquare goog-inline-block" style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "background:" + P(Q(b)) + ";border-color:" +
                P(Q(b)) + '"></div><span style="' + P(Q(l)) + '">' + O(c) + "</span></div></div>");
            c = f ? "There was a problem refreshing this calendar." : c;
            f = a ? f ? "calListImg-stale" : "" : "ui-disabled";
            d = "popup-" + d;
            return N('<div class="calListChip" id="' + P(e) + '" title="' + P(c) + '">' + O(g) + '</div><div class="calListImg' + P("") + " calListImg " + P(f) + '" id="' + P(d) + '" tabindex="-1"></div>')
        };
    var Tka = function(a, b, c, d, e) {
            a = xia(a, b);
            e.push("emf", io(a), "ctz", ih(M()).xd(), "hl", "en");
            for (a = 0; a < c.length; ++a) e.push("lef", c[a]);
            d && e.push("nusr", "true")
        },
        Uka = function(a) {
            a[2] = di(a[2]);
            a[3] = di(a[3]);
            void 0 === a[5] && (a[5] = a[4]);
            void 0 === a[6] && (a[6] = a[4]);
            a[11] || (a[11] = 0);
            if (a[13]) {
                for (var b = a[13], c = {}, d = 0; d < b.length; d += 2) {
                    var e = b[d],
                        f = b[d + 1];
                    "goo.richContent" == e && (f = eval(f));
                    c[e] = f
                }
                a[13] = c
            }
            a[14] && (a[14] = fb(a[14]));
            a[15] = el(a[15], a[5]);
            a[18] = uga(a[18]);
            a[21] = a[21] ? [a[21]] : []
        },
        Vka = function(a) {
            return fb(rba(a, function(a) {
                return [a.getKey(), a.hb()]
            }))
        },
        Wka = function(a) {
            a = Vka(Wg(a, hn, 14));
            return Wa(a, function(a, c) {
                return "goo.richContent" == c ? eval(a) : a
            })
        };
    var yr = function(a, b) {
            for (var c = 0, d = 0, e = a.length, f = b.length, g = [], k = -Infinity; c < e && d < f;) {
                var l = a[c],
                    m = b[d],
                    r = a[c + 1],
                    u = b[d + 1];
                m <= l ? (k = u, d += 2) : k >= u ? d += 2 : k >= r ? c += 2 : (l = k > l ? k : l, r = m < r ? m : r, l < r && g.push(l, r), k = r == m ? u : r)
            }
            for (; c < e;) l = a[c++], l = l > k ? l : k, r = a[c++], l < r && g.push(l, r);
            return g
        },
        Yka = function(a, b) {
            var c = [];
            Xka(a, b, c);
            return c
        },
        Xka = function(a, b, c) {
            for (var d = 0, e = 0, f = a.length, g = b.length, k = -1; d < f && e < g;) {
                var l = a[d],
                    m = b[e],
                    r = a[d + 1],
                    u = b[e + 1];
                l < m ? r <= m ? d += 2 : u <= r ? (c[++k] = m, c[++k] = u, e += 2) : (c[++k] = m, c[++k] = r, d += 2) : u <= l ? e += 2 : r <= u ? (c[++k] = l, c[++k] = r, d += 2) : (c[++k] = l, c[++k] = u, e += 2)
            }++k < c.length && c.splice(k, c.length - k)
        },
        Gr = function(a, b, c) {
            var d = a.length - 1;
            0 <= d && a[d] >= b ? a[d] = c : a.push(b, c)
        };
    var Hr = function(a, b, c, d) {
        x.call(this);
        this.b = a;
        this.R = b;
        this.T = c || Number.MAX_VALUE;
        this.o = d
    };
    v(Hr, x);
    h = Hr.prototype;
    h.Cb = window;
    h.yr = null;
    h.ho = null;
    h.gu = null;
    h.Nj = function(a) {
        null == this.yr && (this.yr = this.Cb.setInterval(p(this.qV, this), this.R / 2));
        this.ho = t();
        this.H = Array.prototype.slice.call(arguments, 0);
        null == this.gu && (this.gu = this.ho)
    };
    h.cancel = function() {
        this.ho = this.H = null
    };
    h.wa = function() {
        null != this.yr && (this.Cb.clearInterval(this.yr), this.yr = null);
        this.H = this.o = this.b = null;
        Hr.qa.wa.call(this)
    };
    h.qV = function() {
        if (null != this.ho) {
            var a = t();
            if (a >= this.ho + this.R || a >= this.gu + this.T) this.b.apply(this.o, this.H), this.ho = null, this.gu = a
        }
    };
    var Ir = function(a) {
        var b;
        null != a && (a = Ng(a, !0), Oa(a) && (b = new en(Qa(a))));
        b || (b = new en);
        return b
    };
    var Jr = function(a) {
        J.call(this);
        this.Na = a;
        this.R = {};
        this.T = {};
        this.La = 0;
        this.V = {};
        this.b = [];
        this.ma = {};
        this.Ra = this.Ca = !1;
        this.H = [];
        this.o = [];
        this.Ja = 0;
        this.ua = {};
        this.ta = null;
        this.Qa = new Hr(this.vb, 1E3, 5E3, this);
        Zka(this)
    };
    v(Jr, J);
    Jr.prototype.Ba = function(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, Z, R, ha, ka, ja, fa) {
        "string" == typeof c && (c = di(c));
        "string" == typeof d && (d = di(d));
        var za = this.R[a];
        ja = ja ? Ir(ja) : new en;
        if (za) {
            var ua = za.Ee,
                sa = za.U,
                dc = za.ma;
            za.update(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, void 0, Z, R, ha, ka, ja, fa);
            if (ua !== za.Ee || sa !== za.U || dc !== za.ma) Kr(this, za, sa, dc), Lr(this, za)
        } else za = new Tn(a, b, c, d, e, f, g, k, l, m, r, u, w, z, B, A, L, void 0, Z, R, ha, ka, ja);
        $ka(this, za);
        return za
    };
    var $ka = function(a, b) {
        var c = b.Ra,
            d = b.getId(),
            e = a.R[d];
        if (e) {
            var f = e.U,
                g = e.ma;
            e.Ee !== b.Ee || f !== b.U || g !== b.ma ? (Kr(a, e, f, g), Lr(a, b)) : a.R[d] = b
        } else ++a.Ja, Lr(a, b), c && a.R[c] && a.S(c);
        if (c) a.ua[c] || (a.ua[c] = {}), a.ua[c][d] = !0;
        else if (c = a.ua[d]) {
            for (var k in c) a.S(k);
            delete a.ua[d]
        }
        a.R[d] = b;
        ala(a, d);
        a.ya(Mr)
    };
    Jr.prototype.S = function(a) {
        var b = this.R[a];
        b && (this.ya(new bla(a)), Kr(this, b, b.U, b.ma), delete this.R[a], b.Ra && delete this.ua[b.Ra][a], --this.Ja, this.ya(Mr));
        return b
    };
    Jr.prototype.forEach = function(a) {
        for (var b in this.R)
            if (!1 === a(this.R[b])) break
    };
    var ala = function(a, b) {
        a.ta || (a.ta = new cla);
        a.ta.As.push(b);
        a.Qa.Nj()
    };
    Jr.prototype.vb = function() {
        this.ta && (this.ya(this.ta), this.ta = null)
    };
    var cla = function() {
        D.call(this, "I");
        this.As = []
    };
    v(cla, D);
    var bla = function(a) {
        D.call(this, "J");
        this.fh = a
    };
    v(bla, D);
    var Mr = "K",
        dla = function(a) {
            D.call(this, "L");
            this.hj = a
        };
    v(dla, D);
    var Eka = function(a, b, c) {
            var d = void 0,
                e = null;
            c.b || (e = b.toString() + ":" + c.getKey(), d = a.T[e]);
            if (n(d)) return d;
            Nr(a);
            for (var f = Or(a, b.start.lc()), d = b.start, g = b.end, d = g.hour || g.minute || g.second || d.Ka === g.Ka && d.month === g.month && d.year === g.year ? Fh(g) : g.$a(), g = Or(a, d.lc()), d = [], k = {}; f < g; ++f)
                for (var l = Pr(a, f), m = 0; m < l.Fc.length; ++m) {
                    var r = l.Fc[m];
                    if (!k[r.getId()]) {
                        k[r.getId()] = !0;
                        var u = r,
                            w = b,
                            z = u.wb();
                        u.Wb().Wa() >= w.start.Wa() && z.Wa() <= w.end.Wa() && c.accept(r) && d.push(r)
                    }
                }
            Qr(a, e, d);
            return d
        },
        Rr = function(a, b,
            c, d, e) {
            var f = null,
                g = void 0;
            d.b || (f = b.toString() + " +" + c + ":" + d.getKey(), g = a.T[f]);
            if (n(g)) return g;
            Nr(a);
            for (var g = b.lc(), k = Or(a, g), l = k < a.b.length && a.b[k].vg === g, g = [], m = {}; k < a.b.length; ++k) {
                for (var r = Pr(a, k), u = !1, w = 0; w < r.Fc.length; ++w) {
                    var z = r.Fc[w];
                    if (!e) {
                        if (m[z.getId()]) continue;
                        m[z.getId()] = !0
                    }
                    var B;
                    (B = !l) || (B = b, B = z.Wb().Wa() > B.Wa());
                    if (B && d.accept(z) && (u || (e && g.push(Sh(r.vg)), u = !0), g.push(z), 0 >= --c)) {
                        k = a.b.length;
                        break
                    }
                }
                l = !1
            }
            Qr(a, f, g);
            return g
        },
        ela = function(a, b, c) {
            var d = null,
                e;
            c.b || (d = b.toString() +
                " -46:" + c.getKey(), e = a.T[d]);
            if (n(e)) return e;
            Nr(a);
            e = b.lc();
            var f = Or(a, e),
                g = 0 < f && e == yh(a.b[f - 1].vg);
            e = [];
            for (var k = 46; 0 <= --f;) {
                for (var l = Pr(a, f), m = !1, r = l.Fc.length; 0 <= --r;) {
                    var u = l.Fc[r];
                    if ((!g || u.wb().Wa() < b.Wa()) && c.accept(u) && (e.push(u), m = !0, 0 >= --k)) {
                        f = -1;
                        break
                    }
                }
                m && e.push(Sh(l.vg));
                g = !1
            }
            e.reverse();
            Qr(a, d, e);
            return e
        },
        Or = function(a, b) {
            var c = a.V[b];
            if (void 0 !== c) return 0 > c ? ~c : c;
            for (var d = c = 0, e = a.b.length - 1, f = !1; e >= d;) {
                var c = e + d >> 1,
                    g = a.b[c].vg - b;
                if (0 === g) {
                    f = !0;
                    break
                } else 0 > g ? d = c + 1 : e = c - 1
            }
            c < a.b.length &&
                b > a.b[c].vg && (c += 1);
            a.V[b] = f ? c : ~c;
            return c
        },
        Nr = function(a) {
            a.Ca && a.b.sort(fla);
            if (a.Ra || a.Ca) {
                a.V = {};
                for (var b = a.b.length; 0 <= --b;) a.V[a.b[b].vg] = b;
                a.Ra = !1
            }
            a.Ca && (a.Ca = !1)
        },
        Qr = function(a, b, c) {
            b && (10 < a.La && (a.T = {}, a.La = 0), a.T[b] = c, ++a.La)
        },
        Pr = function(a, b) {
            var c = a.b[b];
            if (!c) throw Error("ma`" + b);
            c.Fg && (c.Fc.sort(gla), c.Fg = !1);
            return c
        },
        hla = function(a) {
            return 0 < a.H.length ? a.H[0] : null
        },
        Sr = function(a) {
            return 0 < a.H.length ? a.H[a.H.length - 1] : null
        },
        Kr = function(a, b, c, d) {
            var e = b.getId();
            delete a.ma[e];
            var f =
                a.H;
            if (f.length) {
                b = Xn(b, 32768) ? [c, d] : Yka(f, [c, d]);
                c = !1;
                d = 0;
                for (f = b.length; d < f;)
                    for (var g = b[d++], k = b[d++]; g < k; g = yh(g)) {
                        var l = a.V[g];
                        if (void 0 !== l && 0 <= l)
                            for (var l = a.b[l].Fc, m = 0; m < l.length; ++m)
                                if (l[m].getId() === e) {
                                    l.splice(m, 1);
                                    c = !0;
                                    break
                                }
                    }
                c && (a.T = {})
            }
        },
        Lr = function(a, b) {
            var c = a.H;
            if (c.length) {
                var d = b.U,
                    e = b.ma,
                    f = [d, e],
                    c = Xn(b, 32768) ? f : Yka(c, f);
                if (2 !== c.length || d < c[0] || e > c[c.length - 1]) a.ma[b.getId()] = !0;
                for (d = 0; d < c.length;) e = c[d++], f = c[d++], Tr(a, b, e, f);
                a.T = {}
            } else a.ma[b.getId()] = !0
        },
        Tr = function(a, b, c,
            d) {
            for (; c < d; c = yh(c)) {
                var e = a.V[c];
                void 0 !== e && 0 <= e ? e = a.b[e] : (e = {
                    vg: c,
                    Fg: !0,
                    Fc: []
                }, a.Ca = a.Ca || !!a.b.length && e.vg < a.b[a.b.length - 1].vg, a.Ra = !0, a.V[c] = a.b.length, a.b.push(e));
                e.Fc.push(b);
                e.Fg = 1 < e.Fc.length
            }
        },
        ila = function(a, b) {
            for (var c = yr(jo(b), a.H), d = a.H, e = 0, f = 0, g = c.length, k = d.length, l = []; e < g && f < k;) {
                var m = c[e],
                    r = d[f];
                if (m <= r)
                    for (r = c[++e], ++e; f < k && d[f + 1] <= r;) f += 2;
                else
                    for (m = r, r = d[++f], ++f; e < g && c[e + 1] <= r;) e += 2;
                Gr(l, m, r)
            }
            if (e < g) {
                do Gr(l, c[e++], c[e++]); while (e < g)
            } else
                for (; f < k;) Gr(l, d[f++], d[f++]);
            var e = [],
                f = [],
                c = yr(c, d),
                u;
            for (u in a.ma) {
                d = a.R[u];
                f[0] = d.U;
                f[1] = d.ma;
                Xka(c, f, e);
                for (g = 0; g < e.length; g += 2) Tr(a, d, e[g], e[g + 1]);
                e = yr(f, l);
                e.length || delete a.ma[u]
            }
            a.H = l;
            a.o = wia(a.o, b);
            a.ya(new dla(a.o))
        },
        jla = function(a, b) {
            a.forEach(function(c) {
                c.qb() === b && a.S(c.getId())
            });
            a.o = Cia(a.o, function(a) {
                return a.Lb !== b
            });
            a.T = {}
        };
    Jr.prototype.U = function(a) {
        var b = a.wb(),
            c = a.Wb();
        a.b && a.Na(b.$a(), c.$a());
        $ka(this, a)
    };
    var fla = function(a, b) {
            return a.vg - b.vg
        },
        gla = function(a, b) {
            var c = a.wb().Wa() - b.wb().Wa();
            if (c) return c;
            if (a.hd() != b.hd()) return a.hd() ? -1 : 1;
            if (c = a.Wb().Wa() - b.Wb().Wa()) return c;
            var c = a.getId(),
                d = b.getId();
            return c == d ? 0 : c < d ? -1 : 1
        };
    Jr.prototype.Ta = function(a) {
        a = Pa(a);
        a = new gn(a);
        var b = Sg(a, 6),
            c = Vg(a, kn, 18),
            c = c ? new Nk(c.getUrl(), c.getTitle()) : null,
            d = Sg(a, 17),
            e = Sg(a, 22),
            f = Sg(a, 24) ? null : Sg(a, 16);
        this.Ba(Sg(a, 1), Tg(a, 2, ""), a.wb(), a.Wb(), Sg(a, 5), b, Sg(a, 7), Tg(a, 8, 0), Tg(a, 9, 0), Sg(a, 10), Sg(a, 11), Tg(a, 12, 0), Tg(a, 13, ""), Wka(a), Vka(Wg(a, jn, 15)), el(f, b), pa(d) ? d : void 0, c, Tg(a, 19, 0), Tg(a, 20, 0), Sg(a, 21), pa(e) ? e : void 0, Vg(a, Rha, 23))
    };
    Jr.prototype.Za = function(a) {
        a = Aia(a);
        ila(this, a);
        a = lo(a);
        var b = ih(this.Na),
            c = vp.va();
        c.Hc();
        Dp(c, a, !1);
        try {
            for (var d = 0; d < a.length; ++d) {
                var e = a[d];
                c.H(e, !Mj(b, e + "/off", !1))
            }
        } finally {
            c.Dc()
        }
    };
    var Zka = function(a) {
            var b = a.Na.get(Ag);
            Ej(b, "a", p(function() {
                1 < arguments.length ? this.Ba.apply(this, arguments) : this.Ta.apply(this, arguments)
            }, a), function(a) {
                1 < a.length && (Uka(a), bc(a, 16))
            });
            Ej(b, "us", p(a.Za, a))
        },
        Ur = function(a) {
            a = jo(a.o);
            return a.length ? [a[0], a[a.length - 1]] : void 0
        };
    var lla = function(a, b, c) {
            kla(a, b, [], c)
        },
        kla = function(a, b, c, d, e) {
            a = a.lc();
            b = (isNaN(b.hour) || b.hour || b.minute || b.second ? Fh(b) : b.$a()).lc();
            var f = K(M(), vj),
                g = lo(f.o);
            c = g.concat(Yl(c, g));
            var g = c.length > g.length,
                k = Ur(f);
            if (void 0 !== k && (f = g, a < k[0] ? f = !0 : a = k[0], b > k[1] ? f = !0 : b = k[1], !f)) {
                d && d();
                return
            }
            Vr(mo(a, b, c), g, d, void 0, void 0, e)
        },
        Gp = function(a) {
            var b = K(M(), vj);
            return Zb(lo(b.o), a)
        },
        Ap = function(a) {
            jla(K(M(), vj), a)
        },
        Hp = function(a, b, c) {
            var d = K(M(), vj),
                e = lo(d.o);
            a = Yl(a, e);
            0 == a.length ? (b && b(), c && c()) : (d = Ur(d),
                void 0 !== d ? Vr(mo(d[0], d[1], a), !0, b, c) : (b && b(), c && c()))
        },
        zja = function(a) {
            var b = Ur(K(M(), vj));
            b && (a = mo(b[0], b[1], [a]), Vr(a, !1))
        },
        Vr = function(a, b, c, d, e, f) {
            if (a.length) {
                var g = [];
                Wr(g);
                var k = M(),
                    l = K(k, vj);
                Tka(a, l.o.slice(0), lo(l.o), b, g);
                0 < e && g.push("rc", e);
                ij(hj(k), "load", g, 6, function() {
                    var c = xia(a, l.o.slice(0)),
                        e = vp.va(),
                        c = Rb(c, function(a) {
                            return 0 == a.ef ? !e.getItem(a.Lb).b : !1
                        });
                    0 < c.length ? Vr(c, b, void 0, d, 0) : d && d()
                }, function() {
                    k.get(Dg).b("Oops, we couldn't load your events, please try again in a few minutes");
                    f && f()
                }, c)
            } else c && c(), d && d()
        },
        Wr = function(a) {
            a.push("useproto", "true");
            var b = K(M(), wj).b;
            Tg(b, 10, !1) && a.push("userichevents", "true")
        };
    var mla = function() {};
    var Xr = function(a, b) {
        this.b = a;
        this.o = b
    };
    Xr.prototype.Af = function() {
        return this.b
    };
    Xr.prototype.toString = function() {
        return this.b + "-" + this.o.lc()
    };
    var ola = function(a) {
            var b = a.l3,
                c = a.b8,
                d = a.Kq,
                e = a.c8;
            a = a.rows;
            for (var b = '<table class="printFullHeight listv" cellspacing=0>' + (c ? nla({
                    content: An("<i>" + O(c) + '. <span tabindex=0 role=button class="lk ' + P(b) + '">' + O("Look for earlier events") + "</span></i>")
                }) : ""), c = a.length, f = 0; f < c; f++) b += O(a[f]);
            b += (e ? nla({
                content: An("<i>" + O(e) + '. <span tabindex=0 role=button class="lk ' + P(d) + '">' + O("Look for more") + "</span></i>")
            }) : "") + "</table>";
            return N(b)
        },
        nla = function(a) {
            return N("<tr><td colspan=5><blockquote>" +
                O(a.content) + "</blockquote></td></tr>")
        },
        pla = function(a) {
            var b = a.cr,
                c = a.rx,
                d = a.content;
            return N('<tr class="lv-row lv-newdate lv-firstevent ' + P(a.Ya) + '"><th class="lv-datecell" rowspan="' + P(b) + '"><span tabindex=0 role=link class="lk lv-datelink ' + P(c) + '">' + O(d) + "</span></th>")
        },
        qla = function(a) {
            var b;
            b = b || {};
            var c = a.bh,
                d = a.icon,
                e = a.rT,
                f = a.av,
                g = a.D8,
                k = a.Y7,
                l = a.Z7,
                m = a.B9,
                r = a.Gs,
                u = a.vU,
                w = a.textColor,
                z = a.h3,
                B = a.title,
                A = a.H8,
                L = a.location,
                Z = a.n3,
                R = a.icons;
            a = a.CU;
            b = (c ? '<tr class="' + P(c) + '">' : "") + '<td class="lv-eventcell lv-status">' +
                (d ? O(d) : "&nbsp;") + '</td><td class="lv-eventcell lv-time ' + P(e) + '"><span class="lv-event-time ' + P(f) + '">' + O(g) + '</span></td><td class="lv-eventcell lv-titlecell ' + P(e) + '">' + (l ? '<div><img class="webContent ' + P(k) + '" src="' + P(Mn(l)) + '"></div>' : "") + '<div class="lv-zippy ' + P(f) + '" id="' + P(m) + '"></div><div class="lv-event-title-line">' + (r ? '<span class="lv-event-color goog-inline-block" id="' + P(u) + '" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "background-color: " + P(Q(r)) + '">&nbsp;</span>' : "") + "<span tabindex=0 role=button aria-expanded=false " +
                Hn(A) + 'class="lk lv-event-title ' + P(f) + ' lv-navigable" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "color: " + P(Q(w)) + '" title="' + P(z) + '">' + O(B) + "</span>" + (L ? "<em class=lv-location " + Hn(Z) + "> - " + O(L) + "</em>" : "") + " ";
            c = R.length;
            for (d = 0; d < c; d++) b += O(R[d]);
            b += '</div><div id="li-' + P(a) + '" class="' + P(f) + ' lv-noact"></div></td></tr>';
            return N(b)
        };
    var jp = function(a, b, c, d, e, f, g) {
        this.ta = a;
        this.R = b;
        this.b = c;
        this.T = d;
        this.S = f;
        this.Sj = g;
        this.Fc = [];
        this.H = [];
        this.U = [];
        this.o = 0;
        this.nf = [];
        this.ma = [];
        this.V = ik(this.b).isEnabled(61)
    };
    jp.prototype.Ca = null;
    jp.prototype.Tc = 0;
    var Yr = function(a, b) {
        for (var c = [], d = [], e = 0; e < b.length; ++e) {
            var f = b[e];
            f instanceof On ? d.push(f) : c.push({
                Oc: f,
                xp: d.length
            })
        }
        a.Fc = d;
        a.H = c
    };
    jp.prototype.getContainer = function() {
        return F("lv_" + this.Sj)
    };
    jp.prototype.render = function(a) {
        if (this.getContainer() && 0 < this.R.H.length) {
            var b = this.getContainer();
            this.nf = [];
            this.ma = [];
            var c = F("gridcontainer").offsetHeight / 30,
                d = [],
                e = {
                    rows: d
                },
                f = this.Fc,
                g = this.H,
                k = ep(this.b).ma();
            if (this.Tc & 1 && k) {
                e.l3 = "lvl-e";
                var l = hla(this.R),
                    l = jl(this.b).De(Sh(l));
                e.b8 = "Showing events after " + l
            }
            for (var m = !1, r = 0, u = l = null, w = !1, z = 0; z < g.length; ++z) {
                var m = !m,
                    B = g[z],
                    A = B.Oc,
                    L = B.xp,
                    B = z + 1 < g.length ? g[z + 1].xp : f.length,
                    Z;
                Z = A;
                var R = w,
                    ha = z == g.length - 1;
                !this.V || 6 != dp(this.b).b || R || this.b.get(Bg).LW() ?
                    Z = !1 : (R = Ah(this.T.first.$a()).$a(), Z = ha || Z.Wa() >= R.Wa());
                if (!(this.o > B)) {
                    this.o > L && (L = this.o);
                    if (B > L && A) {
                        null === l && (l = A);
                        wp(this.S.b, f[L].qb());
                        var u = A,
                            ha = d,
                            R = m,
                            ka = B - L,
                            ja = g[0].Oc,
                            fa = g[g.length - 1].Oc,
                            za = Z;
                        if (u) {
                            var ua = 1 == ka,
                                sa = ki(mi(this.b)).equals(u),
                                dc = "lvd-" + u.toString();
                            this.nf.push(dc);
                            ha.push(pla({
                                Ya: rla(R, ua, sa, za),
                                cr: ka,
                                rx: dc + " lv-navigable",
                                content: Pea[u.rd()] + " " + jl(this.b).Qw(u, ja, fa)
                            }))
                        }
                        u = A
                    }
                    for (ka = !0; L < B; L++, r++) {
                        var R = f[L],
                            fa = A,
                            ha = d,
                            dc = ka,
                            Bb = 1 == B - L,
                            Rd = m,
                            re = Z,
                            za = wp(this.S.b, R.qb()).color,
                            ua = R.b,
                            sa = !1,
                            ka = new Xr(R.getId(), fa),
                            Xb = "lvr-" + ka.toString();
                        this.nf.push(Xb);
                        R.le() && this.ma.push(ka.toString());
                        ua || !R.Ja || fa.equals(R.wb().$a()) || (fa.equals(R.Wb().$a()) ? sa = !0 : ua = !0);
                        ja = {};
                        dc || (ja.bh = "lv-row", Rd && (ja.bh += " lv-alt"), Bb && (ja.bh += " lv-lastevent"), ki(mi(this.b)).equals(fa) && (ja.bh += " lv-today"), re && (ja.bh += " lv-hl-row"));
                        Bb = R.Ee;
                        za = za.b;
                        dc = (fa = 2 == Bb) ? za.R : za.o;
                        Rd = fa ? " lv-declined" : "";
                        za = 3 == Bb || 0 == Bb;
                        re = void 0;
                        0 == Bb ? re = "cic-nr" : 3 == Bb ? re = "cic-ques" : fa ? re = "cic-de" : Wp(R) && (re = "cic-av");
                        re && (ja.icon = xo(re, Xb));
                        ja.rT = Rd;
                        ja.av = Xb;
                        Xb = void 0;
                        ua ? ua = "All day" : sa ? (sa = jl(this.b).sc(R.Wb()), ua = "\u00bb" + sa, Xb = "Until " + sa) : R.le() ? (sa = jl(this.b).sc(R.wb()), ua = "At " + sa) : (ua = R, sa = jl(this.b), ua = ua.wb().equals(ua.Wb()) || ua.hd() ? sa.sc(ua.wb()) : sa.fn(Pn(ua)));
                        Xb = Xb || ua;
                        ja.D8 = ua;
                        sa = R.Qf();
                        Bb = qi(this.b) && sa;
                        ua = R.ve;
                        ua.getContent() || (ua = O((sa ? sa.getTitle() : "") || "(No title)"));
                        Bb && (ja.Z7 = Zm(sa.o), ja.Y7 = "lvw-" + ka.toString());
                        ja.B9 = this.Sj + "z" + ka.toString();
                        ja.Gs = Bm(R);
                        ja.Gs && (ja.vU = this.Sj + "ev" + ka.toString());
                        ja.textColor = dc;
                        sa = ua;
                        dc = Xb;
                        Bb = R;
                        Xb = jh(this.b);
                        Bb = Bb.qb();
                        Xb == Bb ? Xb = null : (Xb = eo(Fg(this.b, 5), Bb), Xb = null != Xb ? ao(Xb) : null);
                        za = !!za;
                        fa = !!fa;
                        fa = N(O(sa) + ", " + O(dc) + (Xb ? ", " + O("Calendar") + ": " + O(Xb) : "") + (za ? ", " + O("needs action") : fa ? ", " + O("declined") : ""));
                        ja.h3 = fa;
                        ja.title = ua;
                        ja.H8 = Jia({
                            rI: Na(String(ua))
                        });
                        ja.location = R.He;
                        ja.n3 = Jia({
                            rI: Na(ja.location)
                        });
                        "cmVtaW5kZXJzQHJlbWluZGVycy5nb29nbGUuY29t" == R.qb() && (ja.av = n(ja.av) ? ja.av + " reminder" : "reminder");
                        fa = [];
                        za = R;
                        Dga(Fg(this.b, 16), za) && fa.push(xo("cic-tmr"));
                        !R.qg() && Zn(R) && fa.push(xo("cic-rcr"));
                        !R.qg() && R.Ff() && fa.push(xo("cic-spcl"));
                        !R.qg() && R.nz() && fa.push(xo("cic-priv"));
                        za = R;
                        !za.qg() && Yp(this.S, za) && !Zp(this.S, za) && fa.push(xo("cic-prsn"));
                        !R.qg() && Yp(this.S, R) && Zp(this.S, R) && fa.push(xo("cic-noprs"));
                        ja.icons = fa;
                        ja.CU = ka.toString();
                        ha.push(qla(ja));
                        ka = !1
                    }
                    A = r;
                    B = c;
                    if (!(this.V && 6 == dp(this.b).b || A <= B)) break;
                    w = w || Z
                }
            }
            this.Ca = u;
            k && (this.Tc & 2 ? (c = Sh(Sr(this.R)), e.Kq = "lvl-l") : (c = u, e.Kq = "lvl-fs"), c = jl(this.b).De(c), e.c8 = "Showing events until " + c, e.Kq += " lv-navigable",
                this.nf.push(e.Kq));
            dn(b, ola, e);
            a && null != l && sk(this.T, l, 1)
        }
    };
    var rla = function(a, b, c, d) {
        var e = [];
        a && e.push("lv-alt");
        b && e.push("lv-lastevent");
        c && e.push("lv-today");
        d && e.push("lv-hl-row");
        return e.join(" ")
    };
    jp.prototype.scroll = function(a) {
        if (1 == a || -1 == a) {
            var b = this.T.focus,
                c;
            if (-1 == a) {
                for (c = this.U.pop(); c && c.Wa() >= b.Wa();) c = this.U.pop();
                c ? c = c.max(Ih(b, -28)) : c = Ih(b, -7)
            } else this.Ca ? c = Fh(b).max(this.Ca) : c = Ih(b, 28), this.U.push(b);
            this.T.xg(c.$a())
        } else 2 == a ? Zr(this, 1) : -2 == a && Zr(this, -1)
    };
    var Zr = function(a, b) {
            if (a.V && 6 == dp(a.b).b) {
                var c = vp.va(),
                    d = a.R,
                    c = Jka(c),
                    e = [];
                Nr(d);
                for (var f = 0; f < d.b.length; f++)
                    for (var g = Pr(d, f), k = !1, l = 0; l < g.Fc.length; l++) {
                        var m = g.Fc[l];
                        c.accept(m) && (k || (e.push(Sh(g.vg)), k = !0), e.push(m))
                    }
                Yr(a, e)
            } else {
                d = Ah(a.T.first.$a()).$a();
                0 === a.Fc.length ? sla(a, d) : 0 > b ? (c = ela(a.R, a.H[0].Oc, $r(a)), 0 == c.length ? (a.Tc |= 1, a.o = 0) : (d = Rr(a.R, d, 46, $r(a), !0), Yr(a, c.concat(d)), a.o += b + as(c), 0 > a.o ? (a.o = 0, a.Tc |= 1) : a.Tc &= -2)) : 1 < a.H.length ? (a.o = a.H[1].xp, a.Tc &= -3) : a.Tc |= 2;
                0 < a.o && (a.Tc &= -2);
                if (25 > a.Fc.length - a.o) {
                    e = -1;
                    for (d = 0; d < a.H.length && !(a.H[d].xp >= a.o + b); ++d) e = d;
                    c = -1 == e ? a.T.first.$a() : a.H[e].Oc;
                    d = Rr(a.R, c, 46, $r(a), !0);
                    0 < d.length && (e = -1 == e ? 0 : a.H[e].xp, f = as(d), e + f >= a.Fc.length && (25 > f ? sla(a, c) : (a.o -= e, f = as(d), a.Tc = 46 > f ? a.Tc | 2 : a.Tc & -3, Yr(a, d))))
                }
                a.H.length && qp(a.b, new qja(a.H[0].Oc, a.H[a.H.length - 1].Oc));
                ep(a.b).ma() && (1 < b && a.Tc & 2 ? tla(a.ta, !0) : -1 > b && a.Tc & 1 && ula(a.ta, !0))
            }
            a.render(!0)
        },
        sla = function(a, b) {
            a.o = 0;
            var c = Rr(a.R, b, 46, $r(a), !0),
                d = as(c);
            if (5 > d) {
                a.Tc |= 2;
                var e = ela(a.R, b, $r(a)),
                    f = as(e),
                    c = e.concat(c);
                5 > d + f ? a.Tc |= 1 : a.o = d + f - 5
            }
            Yr(a, c)
        },
        as = function(a) {
            for (var b = 0, c = a.length - 1; 0 <= c; --c) a[c] instanceof On && ++b;
            return b
        },
        $r = function(a) {
            var b = vp.va(),
                c = ih(a.b);
            return 6 == dp(a.b).b ? Jka(b) : ap(b, c)
        };
    jp.prototype.RI = function(a) {
        return kb(a, "lvd-") || kb(a, "lvl-")
    };
    var bs = function(a) {
            this.H = gh(a).b;
            this.b = "x";
            (this.o = Pk() && !!gbar.ela) && gbar.ela(!1)
        },
        vla = {
            "eui-t": "els",
            "eui-s": "elm",
            "eui-n": "ell"
        };
    bs.prototype.apply = function() {
        var a = ge(),
            b;
        b = this.H.get("dense");
        b = "s" == b ? "eui-s" : "t" == b ? "eui-t" : "eui-n";
        1060 >= a.width || 590 >= a.height ? b = "eui-t" : (1252 >= a.width || 640 >= a.height) && "eui-t" != b && (b = "eui-s");
        this.b != b && (this.b = b, wla(F("calcontent"), b), (a = F("offline-searchbar")) && wla(a, b), this.o && (a = gbar[vla["eui-s"]]) && a())
    };
    var wla = function(a, b) {
        switch (b) {
            case "eui-t":
                pr(a, "eui-s", "eui-t");
                break;
            case "eui-s":
                pr(a, "eui-t", "eui-s");
                break;
            default:
                Hc(a, ["eui-t", "eui-s"])
        }
    };
    da("_GenSettings", ia, void 0);
    da("_SR_backToCalendar", ia, void 0);
    var cs = function(a) {
        window.location.reload(1 == a)
    };
    var xla = function() {
        this.b = new Hea(window.INITIAL_DATA)
    };
    var yla = {
        800: "delayedcore",
        801: "focuswidget",
        802: "focuswidget",
        803: "delayedcore",
        804: "delayedcore",
        805: "eventform",
        806: "extras",
        807: "extras",
        808: "gadget",
        809: "extras",
        810: "extras",
        811: "extras",
        812: "delayedcore",
        813: "eventform",
        814: "offline",
        815: "tws",
        816: "push",
        817: "extras",
        818: "reminders",
        819: "search",
        820: "delayedcore",
        821: "tdl",
        822: "delayedcore"
    };
    var ds = function(a, b, c) {
        J.call(this);
        this.S = a;
        this.H = {};
        this.o = [];
        this.b = null;
        this.Ca = p(this.V, this);
        this.ta = p(this.ma, this);
        this.R = pa(b) ? kb(b, "//") ? window.location.protocol + b : b : "";
        this.T = pa(c) ? c : "__en.js"
    };
    v(ds, J);
    var es = function(a) {
        this.id = a;
        this.b = []
    };
    es.prototype.state = 0;
    es.prototype.code = null;
    var zla = function(a, b) {
            a.o && (a.o(b), a.o = ia)
        },
        Ala = {},
        hs = function(a) {
            if (!a.b) {
                for (var b, c = !1; 0 < a.o.length;) {
                    var c = a.o.shift(),
                        d = c.Vn,
                        c = c.OE,
                        e = fs(a, d);
                    if (1 == e.state) c && (a.b = gs(d, !0), Bla(a, d), a.b = null);
                    else if (0 == e.state) {
                        b = d;
                        break
                    }
                }
                b ? (d = a.R + b + a.T, a.b = gs(b, c), a.U.load(d, a.Ca, a.ta)) : a.ya("N")
            }
        };
    ds.prototype.V = function(a) {
        var b = this.b.Vn,
            c = this.b.OE,
            d = fs(this, b);
        d.code = a;
        c ? Bla(this, b) : d.state = 1;
        this.b = null;
        hs(this)
    };
    ds.prototype.ma = function() {
        this.ya(new is(this.b.Vn));
        this.b = null;
        hs(this)
    };
    var Bla = function(a, b) {
            var c = fs(a, b),
                d = !0;
            try {
                ya(c.code + ("\n//@ sourceURL=" + (a.R + b + a.T) + "\n"))
            } catch (e) {
                d = !1, a.ya(new is(b)), F("bdata") && setTimeout(function() {
                    throw e;
                }, 0), ej(38)
            }
            c.state = 2;
            if (d)
                for (Cla(a, c); 0 < c.b.length;) {
                    d = c.b.shift();
                    try {
                        d.call(null)
                    } catch (e) {
                        F("bdata") && setTimeout(function() {
                            throw e;
                        }, 0), ej(39)
                    }
                }
            c.b = [];
            c.code = null
        },
        gs = function(a, b) {
            return {
                Vn: a,
                OE: b
            }
        },
        fs = function(a, b) {
            return a.H[b] || (a.H[b] = new es(b))
        },
        xea = function(a, b, c) {
            switch (fs(a, b).state) {
                case 0:
                case 1:
                    0 == a.o.length && a.ya("M");
                    for (var d = Ala[b] || [], e = 0, f = d.length; e < f; ++e) 2 != fs(a, d[e]).state && a.o.push(gs(d[e], !0));
                    a.o.push(gs(b, !0));
                    c && fs(a, b).b.push(c);
                    hs(a);
                    break;
                case 2:
                    c && c.call(null)
            }
        },
        js = function(a, b) {
            var c = fs(a, b);
            c.state = 1;
            c.code = "void(0)"
        },
        Cla = function(a, b) {
            try {
                zla(b, a.S)
            } catch (c) {
                F("bdata") && setTimeout(function() {
                    throw c;
                }, 0), ej(47)
            }
        },
        is = function(a) {
            D.call(this, "O");
            this.Vn = a
        };
    v(is, D);
    var Dla = function() {};
    Dla.prototype.load = function(a, b, c, d) {
        d = d || new Oi;
        Ela(a, b, c, d)
    };
    var Ela = function(a, b, c, d) {
        d.send(a);
        G(d, "complete", function() {
            d.Gd() && lb(Ri(d, "Content-Type") || "", "javascript") ? b(d.wl()) : c()
        })
    };
    var Fla = {
        dasher: ["delayedcore", "extras", "gadget", "eventform"],
        detailssettings: ["delayedcore", "extras", "gadget", "eventform"],
        eventform: ["delayedcore", "extras", "gadget"],
        extras: ["delayedcore"],
        focuswidget: ["delayedcore", "extras"],
        gadget: ["delayedcore"],
        offline: ["delayedcore", "extras"],
        push: ["delayedcore", "extras"],
        reminders: ["delayedcore"],
        search: ["delayedcore", "extras", "gadget", "eventform"],
        tdl: ["delayedcore", "extras"],
        tws: ["delayedcore", "extras"]
    };
    var ks = function(a, b) {
        J.call(this);
        this.b = a;
        this.o = b;
        a ? (G(a, "M", this.U, !1, this), G(a, "N", this.T, !1, this)) : b && (Zda(b, ["active", "userActive"], p(this.U, this)), Zda(b, ["idle", "userIdle"], p(this.T, this)))
    };
    v(ks, J);
    var ls = function(a) {
            return Fg(a, 13)
        },
        ms = function(a, b, c) {
            a.b ? xea(a.b, b, c) : c ? a.o.b[b].b ? c.call(null) : Xda(a.o, b, c) : a.o.load(b)
        };
    ks.prototype.R = function(a) {
        if (this.b) {
            var b = this.b;
            0 == b.o.length && b.ya("M");
            b.o.push(gs(a, !1));
            hs(b)
        } else b = this.o, window.setTimeout(p(b.Qa, b, a, new zf), 0)
    };
    ks.prototype.U = function() {
        this.ya("P")
    };
    ks.prototype.T = function() {
        this.ya("Q")
    };
    for (var Gla in Fla) Ala[Gla] = Fla[Gla];
    var Hla = function(a, b) {
        this.o = a;
        this.b = b
    };
    Hla.prototype.register = function(a) {
        Ig(a, 28, this)
    };
    var Ila = function() {
        return !(Ib("iPad") || Ib("Android") && !Ib("Mobile") || Ib("Silk")) && (Ib("iPod") || Ib("iPhone") || Ib("Android") || Ib("IEMobile"))
    };
    var Jla = function(a, b) {
        for (var c = [a], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
        return c.join("\x0B")
    };
    var ns = function(a) {
        D.call(this, "navigate");
        this.Xc = a
    };
    v(ns, D);
    var ss = function(a, b, c, d) {
        J.call(this);
        if (a && !b) throw Error("na");
        var e;
        if (c) e = c;
        else {
            e = "history_state" + os;
            var f = jd("input", {
                type: "text",
                name: e,
                id: e,
                style: zc("display:none")
            });
            document.write(gd(f));
            e = F(e)
        }
        this.S = e;
        this.b = c ? je(ae(c)) : window;
        this.ma = b;
        E && !b && (this.ma = "https" == window.location.protocol ? Wc(yc(zc("https:///"))) : Wc(yc(zc('javascript:""'))));
        this.Cb = new vi(150);
        this.Gb(this.Cb);
        this.o = !a;
        this.Ha = new I(this);
        if (a || ps) d ? a = d : (a = "history_iframe" + os, b = Sba(this.ma, {
            id: a,
            style: zc("display:none"),
            sandbox: void 0
        }), document.write(gd(b)), a = F(a)), this.U = a, this.ua = !0;
        ps && (this.Ha.ka(this.b, "load", this.B4), this.ta = this.V = !1);
        this.o ? qs(this, this.getToken(), !0) : rs(this, this.S.value);
        os++
    };
    v(ss, J);
    ss.prototype.T = !1;
    ss.prototype.R = !1;
    ss.prototype.H = null;
    var Kla = function(a, b) {
            var c = b || Jla;
            return function() {
                var b = this || ca,
                    b = b.closure_memoize_cache_ || (b.closure_memoize_cache_ = {}),
                    e = c(va(a), arguments);
                return b.hasOwnProperty(e) ? b[e] : b[e] = a.apply(this, arguments)
            }
        }(function() {
            return E ? Cd(8) : "onhashchange" in ca
        }),
        ps = E && !Cd(8);
    h = ss.prototype;
    h.Tn = null;
    h.wa = function() {
        ss.qa.wa.call(this);
        this.Ha.Oa();
        this.Ab(!1)
    };
    h.Ab = function(a) {
        if (a != this.T)
            if (ps && !this.V) this.ta = a;
            else if (a)
            if (qd ? this.Ha.ka(this.b.document, Lla, this.Ba) : sd && this.Ha.ka(this.b, "pageshow", this.l5), Kla() && this.o) this.Ha.ka(this.b, "hashchange", this.N4), this.T = !0, this.ya(new ns(this.getToken()));
            else {
                if (!E || Ila() || this.V) this.Ha.ka(this.Cb, "tick", p(this.Ca, this, !0)), this.T = !0, ps || (this.H = this.getToken(), this.ya(new ns(this.getToken()))), this.Cb.start()
            }
        else this.T = !1, Qf(this.Ha), this.Cb.stop()
    };
    h.B4 = function() {
        this.V = !0;
        this.S.value && rs(this, this.S.value, !0);
        this.Ab(this.ta)
    };
    h.l5 = function(a) {
        a.b.persisted && (this.Ab(!1), this.Ab(!0))
    };
    h.N4 = function() {
        var a = ts(this.b);
        a != this.H && us(this, a)
    };
    h.getToken = function() {
        return null != this.Tn ? this.Tn : this.o ? ts(this.b) : vs(this) || ""
    };
    h.setToken = function(a, b) {
        this.getToken() != a && (this.o ? (qs(this, a, !1), Kla() || E && !Ila() && rs(this, a, !1, b), this.T && this.Ca()) : (rs(this, a, !1), this.Tn = this.H = this.S.value = a, this.ya(new ns(a))))
    };
    var ts = function(a) {
            a = a.location.href;
            var b = a.indexOf("#");
            return 0 > b ? "" : a.substring(b + 1)
        },
        qs = function(a, b, c) {
            a = a.b.location;
            var d = a.href.split("#")[0],
                e = tb(a.href, "#");
            if (ps || e || b) d += "#" + b;
            d != a.href && (c ? a.replace(d) : a.href = d)
        },
        rs = function(a, b, c, d) {
            if (a.ua || b != vs(a))
                if (a.ua = !1, b = qb(b), E) {
                    var e = xe(a.U);
                    e.open("text/html", c ? "replace" : void 0);
                    c = kd(jd("title", {}, d || a.b.document.title), jd("body", {}, b));
                    e.write(gd(c));
                    e.close()
                } else if (e = Vc(a.ma) + "#" + b, a = a.U.contentWindow) c ? a.location.replace(e) : a.location.href =
                e
        },
        vs = function(a) {
            if (E) return a = xe(a.U), a.body ? rb(a.body.innerHTML) : null;
            var b = a.U.contentWindow;
            if (b) {
                var c;
                try {
                    c = rb(ts(b))
                } catch (d) {
                    return a.R || (1 != a.R && a.Cb.setInterval(1E4), a.R = !0), null
                }
                a.R && (0 != a.R && a.Cb.setInterval(150), a.R = !1);
                return c || null
            }
            return null
        };
    ss.prototype.Ca = function() {
        if (this.o) {
            var a = ts(this.b);
            a != this.H && us(this, a)
        }
        if (!this.o || ps)
            if (a = vs(this) || "", null == this.Tn || a == this.Tn) this.Tn = null, a != this.H && us(this, a)
    };
    var us = function(a, b) {
        a.H = a.S.value = b;
        a.o ? (ps && rs(a, b), qs(a, b)) : rs(a, b);
        a.ya(new ns(a.getToken()))
    };
    ss.prototype.Ba = function() {
        this.Cb.stop();
        this.Cb.start()
    };
    var Lla = ["mousedown", "keydown", "mousemove"],
        os = 0;
    var ws = function(a, b) {
        J.call(this);
        this.H = b || new ss;
        this.U = !0;
        this.o = {};
        this.V = {};
        this.S = !1;
        G(this.H, "navigate", this.ma, !1, this);
        this.b = a || Lp.va();
        G(this.b, "z", this.Ca, !1, this);
        this.H.Ab(!0)
    };
    v(ws, J);
    la(ws);
    ws.prototype.T = !1;
    var xs = function(a, b, c) {
        a.o[b] = c
    };
    ws.prototype.ma = function(a) {
        !this.T && this.U && Mla(this, decodeURI(a.Xc))
    };
    var Mla = function(a, b, c) {
        a.ya(new D("R"));
        c || Pk() && gbar.close && gbar.close(window.event);
        c = b.split("|");
        b = c[0];
        c = 2 == c.length ? c[1] : "";
        var d = a.b.td,
            e = a.b.Vm;
        (b != d || c != e) && (b = a.o[b]) && b(p(a.R, a, d, e), c)
    };
    ws.prototype.R = function(a, b) {
        var c = a;
        b && (c += "|" + b);
        this.T = !0;
        this.H.setToken(encodeURI(c));
        this.T = !1;
        this.b.Vm = b || null;
        this.ya(new D("S"))
    };
    ws.prototype.Ca = function() {
        if (this.S) {
            var a = this.b.td;
            if (a) {
                var b = this.b.Vm,
                    c = this.V[a];
                c && (b = c(b || ""));
                this.R(a, b)
            }
        }
    };
    ws.prototype.Ab = function(a) {
        this.U = a
    };
    ws.prototype.getToken = function() {
        return this.H.getToken()
    };
    var ys, zs, Bs = function(a) {
            As(a || 0, !1)
        },
        As = function(a, b, c) {
            var d = M();
            ms(ls(d), "detailssettings", function() {
                Qq.dP(a, b, c)
            })
        },
        Nla = function(a, b) {
            var c = M();
            ms(ls(c), "detailssettings", function() {
                Qq.iN(a, b)
            })
        },
        Ola = function(a, b) {
            var c = M();
            ms(ls(c), "detailssettings", function() {
                Qq.zP(a, b)
            })
        },
        Pla = function() {
            var a = ws.va();
            ys = {
                1: "settings-calendars_9",
                0: "settings-general_11",
                4: "settings-labs_12",
                2: "settings-notif_13",
                3: "settings-offline_14"
            };
            zs = {
                0: "details_2",
                2: "details-notif_3",
                3: "details-trashcan_4",
                1: "details-sharing_5"
            };
            Ua(ys, function(b, c) {
                xs(a, b, function(a) {
                    As(parseInt(c, 10), !1, a)
                })
            });
            Ua(zs, function(b) {
                a.o[b] = Nla
            });
            a.o["settings-dir_10"] = Ola
        };
    var Cs = function(a, b, c) {
        x.call(this);
        this.b = a;
        this.H = b || 0;
        this.o = c;
        this.Vd = p(this.lY, this)
    };
    v(Cs, x);
    h = Cs.prototype;
    h.Vp = 0;
    h.wa = function() {
        Cs.qa.wa.call(this);
        this.stop();
        delete this.b;
        delete this.o
    };
    h.start = function(a) {
        this.stop();
        this.Vp = wi(this.Vd, n(a) ? a : this.H)
    };
    h.stop = function() {
        this.Ed() && xi(this.Vp);
        this.Vp = 0
    };
    h.Ed = function() {
        return 0 != this.Vp
    };
    h.lY = function() {
        this.Vp = 0;
        this.b && this.b.call(this.o)
    };
    var Qla = function() {
        return N('<div id="nt1"><table class="mbox" cellpadding="0" cellspacing="0" role="presentation"><tr><td><div id="nt2" class="mbox-cont" role="alert" aria-live="assertive" aria-atomic="true" aria-relevant="all"></div></td></tr></table></div>')
    };
    var Ds = function(a, b) {
        x.call(this);
        this.o = b;
        this.ta = new Cs(q(Rla, !1), 3E3);
        this.U = new Cs(p(this.Eb, this));
        if (Hg(a, 21)) {
            var c = G(a.get(wg), np, p(this.Eb, this, void 0));
            Eb(this, function() {
                cf(c)
            })
        }
    };
    v(Ds, x);
    var Rla = function(a) {
            var b = F("mothertable");
            b && (vr(b, "busy", a), vr(b, "hidden", a))
        },
        Sla = function(a) {
            var b = new Ds(a, F("ntowner"));
            Ig(a, 19, b)
        };
    Ds.prototype.Oa = function() {
        ne(this.o);
        delete this.o;
        delete this.R;
        delete this.T
    };
    Ds.prototype.b = function(a, b, c) {
        Tla(this);
        Rla(!0);
        this.ta.start();
        ne(this.o);
        dn(this.o, Qla);
        bn(F("nt2"), O(a));
        this.T = b;
        this.U.stop();
        this.U.start(c || 3E4)
    };
    Ds.prototype.Eb = function(a) {
        a && a != this.T || (Tla(this), ne(this.o))
    };
    var Tla = function(a) {
        a.R && (a.R(), a.R = void 0)
    };
    var Ula = function() {
            this.b = 100
        },
        kp = function(a) {
            var b = M();
            if (ep(M()).o()) Fka(fp.va(), 100 != a.b);
            else {
                var c = document.getElementById("gridcontainer");
                a = b.get(xg);
                6 == dp(b).b && a.o && a.o.Za(c.scrollTop);
                ne(c);
                c.style.height = "";
                c = cp(b);
                if (a.b && 0 < a.R.H.length) {
                    var d = a.b;
                    d.o = 0;
                    d.Fc = [];
                    d.H = [];
                    Zr(a.b, 0);
                    6 == c.b.b ? Vla(a) : (a.o && a.o.ts(), Wla(a), c = F("lvHeader"), dn(c, Xla, {
                        lR: al(),
                        hR: "lvl-bd",
                        iR: "View one day earlier.",
                        lV: "lvl-fd",
                        mV: "View one day later."
                    }), ip(!0), Fg(M(), 18).im(), a.b.render(), a.o && (a.o.h9(a.b.ma), a.o.IK(), a.o.mD(c), a.o.La()))
                }
            }
            Hg(b, 23) && Fg(b, 23).Za()
        };
    var Es = function(a, b) {
        this.S = b || be();
        this.R = a || null
    };
    Es.prototype.render = function(a, b) {
        var c = a(b || {}, void 0, Fs(this));
        this.b();
        return String(c)
    };
    Es.prototype.b = ia;
    var Fs = function(a) {
        if (a.R) {
            a = a.R;
            if (!n(a.o)) {
                var b = Gs(a.T, Kfa);
                b ? a.o = b.b : a.o = null
            }
            a = a.o
        } else a = {};
        return a
    };
    var Hs = function(a) {
        Es.call(this, this, a.get(Jfa).o);
        this.T = a;
        this.H = new J
    };
    v(Hs, Es);
    Hs.prototype.b = function(a) {
        Hs.qa.b.call(this);
        this.H.ya(new D("T", a))
    };
    var Yla = function(a, b) {
        haa({
            trigger: function(b) {
                var c = a.Rd(b.type);
                c || (Is(a, b.type), c = a.Rd(b.type));
                c.call((b.target || b.srcElement).ownerDocument.documentElement, b)
            },
            bind: function(b) {
                a.b = b;
                a.o && (0 < a.o.length && b(a.o), a.o = null)
            }
        }, b)
    };
    var Zla = function() {
            this.R = [];
            this.H = [];
            this.Fc = {};
            this.b = null;
            this.o = []
        },
        $la = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
        ama = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^\s+/, "").replace(/\s+$/, "")
        },
        bma = /\s*;\s*/,
        ema = function(a, b) {
            return function(c) {
                var d;
                var e = b,
                    f;
                if ("click" == e && (Zaa && c.metaKey || !Zaa && c.ctrlKey || 2 == c.which || null == c.which && 4 == c.button || c.shiftKey)) e = "clickmod";
                else {
                    var g;
                    g = c.which || c.keyCode || c.key;
                    $aa && 3 == g && (g =
                        13);
                    if (13 != g && 32 != g) g = !1;
                    else {
                        var k = Lb(c);
                        f = (k.getAttribute("role") || k.type || k.tagName).toUpperCase();
                        var l;
                        (l = "keydown" != c.type) || ("getAttribute" in k ? (l = (k.getAttribute("role") || k.tagName).toUpperCase(), l = !hba(k) && ("COMBOBOX" != l || "INPUT" != l) && !k.isContentEditable) : l = !1, l = !l);
                        (l = l || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey || fba(k) && 32 == g) || ((l = k.tagName in bba) || (l = k.getAttributeNode("tabindex"), l = null != l && l.specified), l = !(l && !k.disabled));
                        l ? g = !1 : (k = "INPUT" != k.tagName.toUpperCase() || k.type, l = !(f in
                            dba) && 13 == g, g = (0 == dba[f] % g || l) && !!k)
                    }
                    g && (e = "clickkey")
                }
                k = c.srcElement || c.target;
                g = Js(e, c, k, "", null);
                var m;
                for (f = k; f && f != this; f = f.__owner || f.parentNode) {
                    m = d = f;
                    l = e;
                    var r = m.__jsaction;
                    if (!r) {
                        var u = cma(m, "jsaction");
                        if (u) {
                            r = Jb[u];
                            if (!r) {
                                for (var r = {}, w = u.split(bma), z = 0, B = w ? w.length : 0; z < B; z++) {
                                    var A = w[z];
                                    if (A) {
                                        var L = A.indexOf(":"),
                                            Z = -1 != L,
                                            R = Z ? ama(A.substr(0, L)) : "click",
                                            A = Z ? ama(A.substr(L + 1)) : A;
                                        r[R] = A
                                    }
                                }
                                Jb[u] = r
                            }
                            u = r;
                            r = {};
                            for (R in u) {
                                w = r;
                                z = R;
                                b: if (B = u[R], A = m, !(0 <= B.indexOf(".")))
                                        for (; A; A = A.parentNode) {
                                            L = A;
                                            Z =
                                                L.__jsnamespace;
                                            n(Z) || (Z = cma(L, "jsnamespace"), L.__jsnamespace = Z);
                                            if (L = Z) {
                                                B = L + "." + B;
                                                break b
                                            }
                                            if (A == this) break
                                        }
                                    w[z] = B
                            }
                            m.__jsaction = r
                        } else r = dma, m.__jsaction = r
                    }
                    "clickkey" == l ? l = "click" : "click" != l || r.click || (l = "clickonly");
                    m = {
                        ih: l,
                        action: r[l] || "",
                        event: null,
                        Zy: !1
                    };
                    if (m.Zy || m.action) break
                }
                m && (g = Js(m.ih, m.event || c, k, m.action || "", d, g.timeStamp));
                g && "touchend" == g.eventType && (g.event._preventMouseEvents = cba);
                if (m && m.action) {
                    if (R = "clickkey" == e) R = Lb(c), R = (R.type || R.tagName).toUpperCase(), (R = 32 == (c.which || c.keyCode ||
                        c.key) && "CHECKBOX" != R) || (R = Lb(c), f = (R.getAttribute("role") || R.tagName).toUpperCase(), R = R.tagName.toUpperCase() in iba && "A" != f && !fba(R) && !hba(R) || "BUTTON" == f);
                    R && Kb(c);
                    if ("mouseenter" == e || "mouseleave" == e)
                        if (R = c.relatedTarget, !("mouseover" == c.type && "mouseenter" == e || "mouseout" == c.type && "mouseleave" == e) || R && (R === d || Saa(d, R))) g.action = "", g.actionElement = null;
                        else {
                            var e = {},
                                ha;
                            for (ha in c) "function" !== typeof c[ha] && "srcElement" !== ha && "target" !== ha && (e[ha] = c[ha]);
                            e.type = "mouseover" == c.type ? "mouseenter" : "mouseleave";
                            e.target = e.srcElement = d;
                            e.bubbles = !1;
                            g.event = e;
                            g.targetElement = d
                        }
                } else g.action = "", g.actionElement = null;
                d = g;
                a.b && (ha = Js(d.eventType, d.event, d.targetElement, d.action, d.actionElement, d.timeStamp), "clickonly" == ha.eventType && (ha.eventType = "click"), a.b(ha, !0));
                if (d.actionElement) {
                    if (!aba || "INPUT" != d.targetElement.tagName && "TEXTAREA" != d.targetElement.tagName || "focus" != d.eventType) c.stopPropagation ? c.stopPropagation() : c.cancelBubble = !0;
                    "A" != d.actionElement.tagName || "click" != d.eventType && "clickmod" != d.eventType ||
                        Kb(c);
                    a.b ? a.b(d) : (c = Mb(c), d.event = c, a.o.push(d));
                    if ("touchend" == d.event.type && d.event._mouseEventsPrevented) {
                        c = d.event;
                        for (var ka in c) d = c[ka], "type" == ka || "srcElement" == ka || ra(d);
                        t()
                    }
                }
            }
        },
        Js = function(a, b, c, d, e, f) {
            return {
                eventType: a,
                event: b,
                targetElement: c,
                action: d,
                actionElement: e,
                timeStamp: f || t()
            }
        },
        cma = function(a, b) {
            var c = null;
            "getAttribute" in a && (c = a.getAttribute(b));
            return c
        },
        dma = {},
        fma = function(a, b) {
            return function(c) {
                var d = a,
                    e = b,
                    f = !1;
                "mouseenter" == d ? d = "mouseover" : "mouseleave" == d && (d = "mouseout");
                if (c.addEventListener) {
                    if ("focus" == d || "blur" == d || "error" == d || "load" == d) f = !0;
                    c.addEventListener(d, e, f)
                } else c.attachEvent && ("focus" == d ? d = "focusin" : "blur" == d && (d = "focusout"), e = Yaa(c, e), c.attachEvent("on" + d, e));
                return {
                    ih: d,
                    Rd: e,
                    $o: f
                }
            }
        },
        Is = function(a, b) {
            if (!a.Fc.hasOwnProperty(b)) {
                var c = ema(a, b),
                    d = fma(b, c);
                a.Fc[b] = c;
                a.R.push(d);
                for (c = 0; c < a.H.length; ++c) {
                    var e = a.H[c];
                    e.b.push(d.call(null, e.Pb))
                }
                "click" == b && Is(a, "keydown")
            }
        };
    Zla.prototype.Rd = function(a) {
        return this.Fc[a]
    };
    var gma = function(a) {
        this.Pb = a;
        this.b = []
    };
    var hma = function() {
        var a = new Zla,
            b = window,
            c = new gma(b.document.documentElement),
            d = c.Pb;
        $la && (d.style.cursor = "pointer");
        for (d = 0; d < a.R.length; ++d) c.b.push(a.R[d].call(null, c.Pb));
        a.H.push(c);
        Is(a, "click");
        Is(a, "focus");
        Is(a, "focusin");
        Is(a, "blur");
        Is(a, "focusout");
        Is(a, "input");
        Is(a, "keydown");
        Is(a, "keypress");
        Is(a, "keyup");
        Is(a, "mousedown");
        Is(a, "mouseover");
        Is(a, "mouseout");
        Is(a, "mouseenter");
        Is(a, "mouseleave");
        Is(a, "mouseup");
        Is(a, "change");
        Is(a, "transitionend");
        Is(a, "webkitTransitionEnd");
        Yla(a, b)
    };
    var ima = function(a) {
        var b = Fe(be()),
            c = b._GCAL_wizbind;
        null == c && (hma(), c = b._GCAL_wizbind);
        var d = sea(c, b.document, a).S;
        a.get(nj).H.nt("T", function() {
            d.Eg()
        })
    };
    var jma = function() {
        var a = window;
        if (!a.location) try {
            Sa(a)
        } catch (c) {}
        var b = a.location && a.location.ancestorOrigins;
        if (n(b)) return b && b.length ? b[b.length - 1] == a.location.origin : !0;
        try {
            return n(a.top.location.href)
        } catch (c) {
            return !1
        }
    };
    var Ks = {},
        kma = function() {
            var a = {};
            a.location = document.location.toString();
            if (jma()) try {
                a["top.location"] = top.location.toString()
            } catch (c) {
                a["top.location"] = "[external]"
            } else a["top.location"] = "[external]";
            for (var b in Ks) try {
                a[b] = Ks[b].call()
            } catch (c) {
                a[b] = "[error] " + c.message
            }
            return a
        };
    var lma = function(a) {
            this.b = a;
            this.H = {};
            this.o = []
        },
        efa = function(a, b, c) {
            var d = kma();
            d["call-stack"] = fda();
            c && (d.message = c);
            var e;
            b instanceof Error ? e = b : e = b || "";
            var f;
            b = "";
            if (e) {
                b = e.message || "unknown";
                for (var g = c = 0; g < b.length; ++g) c = 31 * c + b.charCodeAt(g) >>> 0;
                b = c
            }
            c = "";
            for (f in d) c = c + f + ":" + d[f] + ":";
            f = b + "::" + c;
            b = a.H[f];
            b || (b = {
                time: 0,
                count: 0
            }, a.H[f] = b);
            if (1E4 > t() - b.time) b.count++, 1 == b.count && (d = kma(), d.message = "Throttling: " + f, a.b.o(e, d));
            else {
                b.count && (d["dropped-instances"] = b.count);
                b.time = t();
                for (f = b.count = 0; f < a.o.length; f++) a.o[f](e, d);
                a.b.o(e, d)
            }
        };
    var oma = function() {
            ti.init();
            var a = new qo("/calendar/jserror", void 0, !0),
                a = new lma(a);
            mma.o = a;
            dfa(a);
            var b = null,
                a = function(a) {
                    ca.$googDebugFname && a && a.message && !a.fileName && (a.message += " in " + ca.$googDebugFname);
                    b ? a && a.message && (a.message += " [Possibly caused by: " + b + "]") : b = String(a);
                    ui(null, a)
                };
            da("_DumpException", a, void 0);
            da("_B_err", a, void 0);
            C([ca].concat([]), q(dda, q(nma, !1), !0));
            if (!E || Bd(10)) a = new no(ffa), a.H = !0, a.b = !0, Gia(a), po(a, "setTimeout"), po(a, "setInterval"), uba(a), mma.b = a
        },
        nma = function(a, b) {
            tb(b.message, "Error in protected function: ") || (b.error && b.error.stack ? ui(null, b.error) : a || ui(null, b))
        },
        Ls = function() {};
    Ls.prototype.b = null;
    Ls.prototype.o = null;
    var mma = new Ls;
    var Ms = function() {};
    v(Ms, Ei);
    Ms.prototype.b = function() {
        var a = new XMLHttpRequest;
        if ("withCredentials" in a) return a;
        if ("undefined" != typeof XDomainRequest) return new pma;
        throw Error("oa");
    };
    Ms.prototype.R = function() {
        return {}
    };
    var pma = function() {
        this.b = new XDomainRequest;
        this.readyState = 0;
        this.onreadystatechange = null;
        this.responseText = "";
        this.status = -1;
        this.statusText = this.responseXML = null;
        this.b.onload = p(this.xY, this);
        this.b.onerror = p(this.QG, this);
        this.b.onprogress = p(this.yY, this);
        this.b.ontimeout = p(this.zY, this)
    };
    h = pma.prototype;
    h.open = function(a, b, c) {
        if (null != c && !c) throw Error("pa");
        this.b.open(a, b)
    };
    h.send = function(a) {
        if (a)
            if ("string" == typeof a) this.b.send(a);
            else throw Error("qa");
        else this.b.send()
    };
    h.abort = function() {
        this.b.abort()
    };
    h.setRequestHeader = function() {};
    h.getResponseHeader = function(a) {
        return "content-type" == a.toLowerCase() ? this.b.contentType : ""
    };
    h.xY = function() {
        this.status = 200;
        this.responseText = this.b.responseText;
        Ns(this, 4)
    };
    h.QG = function() {
        this.status = 500;
        this.responseText = "";
        Ns(this, 4)
    };
    h.zY = function() {
        this.QG()
    };
    h.yY = function() {
        this.status = 200;
        Ns(this, 1)
    };
    var Ns = function(a, b) {
        a.readyState = b;
        if (a.onreadystatechange) a.onreadystatechange()
    };
    var Os = function() {
            this.b = {};
            this.o = ""
        },
        qma = {
            kla: "k",
            yca: "ck",
            wha: "m",
            jea: "exm",
            hea: "excm",
            K9: "am",
            ala: "rt",
            Ufa: "d",
            iea: "ed",
            Yla: "sv",
            bda: "deob",
            Kaa: "cb",
            Ola: "rs",
            Zca: "dk",
            qla: "sdch"
        };
    Os.prototype.toString = function() {
        var a = [],
            b = p(function(b) {
                n(this.b[b]) && a.push(b + "=" + this.b[b])
            }, this);
        b("sdch");
        b("k");
        b("ck");
        b("m");
        b("exm");
        b("am");
        b("rt");
        b("d");
        b("rs");
        b("dk");
        b("excm");
        (this.b.excm || this.b.exm) && a.push("ed=1");
        b("cb");
        return this.o + a.join("/")
    };
    var Ps = function(a, b) {
            return a.b[b] ? a.b[b] : null
        },
        Qs = function(a, b, c) {
            c ? a.b[b] = c : delete a.b[b]
        },
        rma = function(a, b) {
            a.o = b
        };
    Os.prototype.clone = function() {
        return sma(this.toString())
    };
    var sma = function(a) {
        var b = new Os,
            c = a.match(yi)[5];
        Ua(qma, function(a) {
            var d = c.match("/" + a + "=([^/]+)");
            d && Qs(b, a, d[1])
        });
        var d = -1 != a.indexOf("_/ss/") ? "_/ss/" : "_/js/";
        rma(b, a.substr(0, a.indexOf(d) + d.length));
        return b
    };
    var Ss = function(a) {
        x.call(this);
        this.V = a;
        this.R = zi(a.match(yi)[5] || null) || "";
        var b = zi(a.match(yi)[5] || null);
        this.o = null !== b && b.match("(/_/js/)|(/_/ss/)") && b.match("/k=") ? sma(a) : null;
        this.ta = Rs(this.R, "ver");
        this.Ca = Rs(this.R, "am");
        this.Ha = new I(this);
        this.Ba = [];
        this.S = [];
        this.b = [];
        this.Ra = new tma;
        this.H = [];
        a = p(this.U, this);
        Ks.version = a
    };
    v(Ss, x);
    var uma = function(a, b) {
        a.b.length && Gf(b, a.b[a.b.length - 1]);
        a.b.push(b);
        b.addCallback(function() {
            cc(this.b, b)
        }, a)
    };
    Ss.prototype.ua = function(a, b, c, d, e, f) {
        b = nc(a, p(function(a) {
            return Zb(this.S, a)
        }, this));
        var g = b[!1] || [];
        if (0 < (b[!0] || []).length) {
            this.S.length = 0;
            if (this.b.length) {
                var k = this.b[this.b.length - 1];
                this.T.addCallback(function(a) {
                    var b = new zf;
                    k.addCallback(p(b.callback, b));
                    b.addCallback(function() {
                        return a
                    });
                    return b
                }, this)
            }
            var l = new zf;
            this.b.push(l);
            Df(this.T, function(a) {
                    window.setTimeout(p(function() {
                        vma(a.code, a.url, d) && 0 < g.length && wma(this, g, c, d, e, f);
                        cc(this.b, l);
                        l.callback();
                        this.T = null
                    }, this), 0)
                },
                function(a) {
                    window.setTimeout(p(function() {
                        d(a);
                        this.T = null
                    }, this), 0)
                }, this)
        } else wma(this, a, c, d, e, f)
    };
    var wma = function(a, b, c, d, e, f) {
            for (var g = [], k = new zf, l = xma(a, b, !!f), l = Math.ceil(l.length / 2E3), m = 0, r = 0; r < l; r++) {
                var u = (r + 1) * Math.floor(b.length / l) + 1;
                if (m = yma(a, b.slice(m, u), f)) g.push(m), Gf(k, m.Li);
                m = u
            }
            var w = new zf;
            uma(a, w);
            w.addCallback(p(a.ma, a, b, g, c, d, e));
            Ef(w, function() {
                var a = new Ts;
                a.o = !0;
                a.b = -1;
                this.ma(0, [a], 0, d, e)
            }, a);
            k.addCallback(function() {
                w.callback()
            });
            k.callback()
        },
        yma = function(a, b, c) {
            var d = xma(a, b, !!c);
            a.Ba.push(d);
            var e = new Ts,
                f = new Oi(0 < a.H.length ? new Ms : void 0);
            a.Ha.ka(f, "success", p(e.V,
                e, f));
            a.Ha.ka(f, "error", p(e.U, e, f));
            a.Ha.ka(f, "timeout", p(e.S, e));
            Pf(a.Ha, f, "ready", f.Oa, !1, f);
            f.H = Math.max(0, 3E4);
            a.Ra.request(function() {
                f.send(d);
                return e.Li
            });
            return e
        };
    Ss.prototype.ma = function(a, b, c, d, e) {
        a = !1;
        var f;
        c = !1;
        for (var g = 0; g < b.length; g++) {
            var k = b[g];
            if (!f && k.o) {
                a = !0;
                f = k.b;
                break
            } else k.H && (c = !0)
        }
        var l = fc(this.b);
        (a || c) && -1 != f && (this.b = []);
        if (a) d && d(f);
        else if (c) e && e();
        else
            for (g = 0; g < b.length; g++) k = b[g], vma(k.R, k.T) || d && d(8001);
        (a || c) && -1 != f && C(l, function(a) {
            a.cancel()
        })
    };
    Ss.prototype.wa = function() {
        this.Ha.Oa();
        delete Ks.version;
        Ss.qa.wa.call(this)
    };
    Ss.prototype.U = function() {
        return this.o ? Ps(this.o, "k") : this.ta
    };
    var xma = function(a, b, c) {
            var d = zi(a.V.match(yi)[3] || null);
            if (0 < a.H.length && !Zb(a.H, d) && window.location.hostname != d) throw Error("ra`" + d);
            a.o ? (a = a.o.clone(), delete a.b.m, delete a.b.exm, delete a.b.ed, delete a.b.dk, Qs(a, "m", b.join(",")), Qs(a, "rt", "j"), Qs(a, "d", null), a = a.toString()) : (d = (0 < a.H.length ? a.V : a.R).match("(.*/_/js/[^/]+/)")[1], b = [b.join(","), "rt=j", "ver=" + a.U(), "am=" + (a.o ? Ps(a.o, "am") : a.Ca)], (a = a.o ? Ps(a.o, "rs") : Rs(a.R, "rs")) && b.push("rs=" + a), a = d + b.join("/"));
            c && (a += "?zx=" + yb());
            return a
        },
        vma =
        function(a, b, c) {
            var d = "";
            if (1 < a.length && "\n" === a.charAt(a.length - 1)) {
                var e = a.lastIndexOf("\n", a.length - 2);
                0 <= e && (d = a.substring(e + 1, a.length - 1))
            }
            if (lb(d, "Google Inc.") || kb(d, "//# sourceMappingURL=")) try {
                ya(a + "\r\n//# sourceURL=" + b)
            } catch (f) {
                return c && c(8001), !1
            } else return c && c(8001), !1;
            return !0
        },
        Ts = function() {
            this.Li = new zf;
            this.T = this.R = "";
            this.o = !1;
            this.b = 0;
            this.H = !1
        };
    Ts.prototype.V = function(a) {
        this.R = a.wl();
        this.T = String(a.U);
        this.Li.callback()
    };
    Ts.prototype.U = function(a) {
        this.o = !0;
        this.b = a.getStatus();
        this.Li.callback()
    };
    Ts.prototype.S = function() {
        this.H = !0;
        this.Li.callback()
    };
    var tma = function() {
        this.b = 0;
        this.o = []
    };
    tma.prototype.request = function(a) {
        this.o.push(a);
        zma(this)
    };
    var zma = function(a) {
            for (; 5 > a.b && a.o.length;) Ama(a, a.o.shift())
        },
        Ama = function(a, b) {
            a.b++;
            b().addCallback(function() {
                this.b--;
                zma(this)
            }, a)
        },
        Rs = function(a, b) {
            var c = a.match("/" + b + "=([^/]+)");
            return c ? c[1] : null
        };
    var Us = function() {
        if (this.b = window && window.ga) a: {
            var a = M(),
                a = gh(a),
                b = "con";
            if (a.R.b)
                if (a = a.R, a.ua()) b = "das";
                else if (a.b && Lea.test(a.b)) b = "edu";
            else break a;this.b("set", "dimension1", b)
        }
    };
    Us.prototype.tb = function(a) {
        this.b && this.b("send", "event", "Events", a)
    };
    Us.prototype.o = function(a, b) {
        this.b && this.b("send", "timing", "Latencies", a, b)
    };
    Us.prototype.Gf = function(a, b) {
        this.o(a, b)
    };
    var Vs = function() {};
    Vs.prototype.tb = function(a) {
        Ck(a)
    };
    Vs.prototype.o = function(a, b) {
        var c = xk.va();
        qa(b) && 0 <= b && 6E5 > b && c.log(a, b)
    };
    Vs.prototype.Gf = function(a, b) {
        Bk(a, b)
    };
    var Ws = function() {
        this.b = [];
        this.b.push(new Vs);
        this.b.push(new Us)
    };
    Ws.prototype.tb = function(a) {
        for (var b = 0; b < this.b.length; b++) this.b[b].tb(a)
    };
    var Xs = function(a, b, c) {
        for (var d = 0; d < a.b.length; d++) a.b[d].o(b, c)
    };
    Ws.prototype.Gf = function(a, b) {
        for (var c = 0; c < this.b.length; c++) this.b[c].Gf(a, b)
    };
    var Ys = null;
    var Zs = function(a, b) {
        this.H = a;
        this.o = b;
        this.constructor.ZC || (this.constructor.ZC = {});
        this.constructor.ZC[this.toString()] = this
    };
    Zs.prototype.toString = function() {
        this.b || (this.b = this.H.b + ":" + this.o);
        return this.b
    };
    var Bma = function(a, b) {
        Zs.call(this, a, b)
    };
    v(Bma, Zs);
    var Cma = function(a) {
        this.b = a
    };
    new Cma("lib");
    var at = function(a) {
        x.call(this);
        this.o = {};
        this.U = {};
        this.V = {};
        this.b = {};
        this.R = {};
        this.Ra = {};
        this.S = a ? a.S : new J;
        this.Qa = !a;
        this.H = null;
        a ? (this.H = a, this.V = a.V, this.b = a.b, this.U = a.U, this.R = a.R) : t();
        a = $s(this);
        this != a && (a.ma ? a.ma.push(this) : a.ma = [this])
    };
    v(at, x);
    var Dma = .05 > Math.random(),
        $s = function(a) {
            for (; a.H;) a = a.H;
            return a
        },
        bt = function(a, b) {
            for (var c = a; c;) {
                if (c == b) return !0;
                c = c.H
            }
            return !1
        };
    at.prototype.get = function(a) {
        var b = Gs(this, a);
        if (null == b) throw new ct(a);
        return b
    };
    var Gs = function(a, b) {
            for (var c = a; c; c = c.H) {
                if (c.isDisposed()) throw Error("sa");
                if (c.o[b]) return c.o[b][0];
                if (c.Ra[b]) break
            }
            if (c = a.V[b]) {
                c = c(a);
                if (null == c) throw Error("ta`" + b);
                dt(a, b, c);
                return c
            }
            return null
        },
        wea = function(a, b, c) {
            a.T();
            var d = !c;
            c = {};
            for (var e = [], f = [], g = {}, k = {}, l = Gs(a, Ifa), m = 0; m < b.length; m++) {
                var r = b[m],
                    u = Gs(a, r);
                if (u) {
                    var w = new zf;
                    c[r] = w;
                    u.Ww && (Gf(w, u.Ww()), w.addCallback(q(function(a) {
                        return a
                    }, u)));
                    w.callback(u)
                } else {
                    var z;
                    r instanceof Nb ? z = xba([r]).D3 : (u = a.U[r]) && (z = [u]);
                    !d || z && z.length ?
                        (z && (l && r instanceof Nb && l.Joa() && (Dma && (w = l.Koa(Ema), k[r] = w), l.Boa(r)), e.push.apply(e, z), g[r] = Ob(z)), f.push(r)) : (w = new zf, c[r] = w, w.b(new ct(r)))
                }
            }
            if (d) {
                if (e.length) {
                    a.Ca && a.Ca.push("loaded(" + f + "," + e + ")\n" + Se());
                    for (m = 0; m < f.length; m++) a.S.ya(new et("U"));
                    b = Yda(a.T(), e);
                    for (m = 0; m < f.length; m++) r = f[m], u = g[r], w = b[u].Bd(), c[r] = w, k[r] && w.addCallback(function() {
                        l.qoa(k[r])
                    }), Fma(a, w, r, u)
                }
            } else
                for (m = 0; m < f.length; m++) r = f[m], u = e[m], w = new zf(p(a.Ja, a, r)), c[r] = w, (b = a.b[r]) || (a.b[r] = b = []), u && Gma(a, w, r, u), w.addCallback(p(a.ta,
                    a, r, u)), b.push({
                    Sa: a,
                    d: w
                });
            return c
        },
        Gma = function(a, b, c, d) {
            b.addCallback(function() {
                this.Ca && this.Ca.push("loaded(" + c + "," + d + ")\n" + Se());
                return this.T().load(d)
            }, a);
            Ef(b, p(a.ua, a, c, d))
        },
        Fma = function(a, b, c, d) {
            b.addCallback(function() {
                this.S.ya(new et("V"))
            }, a);
            Ef(b, p(a.ua, a, c, d));
            b.addCallback(p(a.ta, a, c, d))
        };
    at.prototype.ta = function(a, b) {
        var c = Gs(this, a);
        if (null == c) {
            if (this.R[a]) {
                var d = this.R[a].Bd();
                d.addCallback(p(this.ta, this, a, b));
                return d
            }
            throw new Hma(a, b, "Module loaded but service or factory not registered with app contexts.");
        }
        return c.Ww ? (d = new zf, Gf(d, c.Ww()), d.callback(c), d.addCallback(p(this.Ba, this, a)), d) : this.Ba(a)
    };
    at.prototype.Ba = function(a) {
        this.R[a] && delete this.R[a];
        return this.get(a)
    };
    at.prototype.ua = function(a, b, c) {
        return c instanceof Af ? c : new Ima(a, b, c)
    };
    var dt = function(a, b, c) {
            if (a.isDisposed()) y(c);
            else {
                a.o[b] = [c, !0];
                c = Jma(a, a, b);
                for (var d = 0; d < c.length; d++) c[d].callback(null);
                delete a.U[b]
            }
        },
        Kma = function(a, b) {
            if (a.Sa != b.Sa) {
                if (bt(a.Sa, b.Sa)) return 1;
                if (bt(b.Sa, a.Sa)) return -1
            }
            return a.index < b.index ? -1 : a.index == b.index ? 0 : 1
        },
        Jma = function(a, b, c) {
            var d = [],
                e = a.b[c];
            e && (Qb(e, function(a) {
                bt(a.Sa, b) && (d.push(a.d), cc(e, a))
            }), 0 == e.length && delete a.b[c]);
            return d
        },
        Lma = function(a, b) {
            a.b && cd(a.b, function(a, d, e) {
                Qb(a, function(c) {
                    c.Sa == b && cc(a, c)
                });
                0 == a.length &&
                    delete e[d]
            })
        };
    at.prototype.Ja = function(a, b) {
        var c = this.b && this.b[a];
        if (c) {
            for (var d = 0; d < c.length; ++d)
                if (c[d].Sa == this && c[d].d == b) {
                    bc(c, d);
                    break
                }
            0 == c.length && delete this.b[a]
        }
    };
    at.prototype.wa = function() {
        if ($s(this) == this) {
            var a = this.ma;
            if (a)
                for (; a.length;) a[0].Oa()
        } else
            for (var a = $s(this).ma, b = 0; b < a.length; b++)
                if (a[b] == this) {
                    a.splice(b, 1);
                    break
                } for (var c in this.o) a = this.o[c], a[1] && a[0].Oa && a[0].Oa();
        this.o = null;
        this.Qa && this.S.Oa();
        Lma(this, this);
        this.b = null;
        y(this.Na);
        this.Ra = this.Na = null;
        at.qa.wa.call(this)
    };
    at.prototype.T = function() {
        return this.La ? this.La : this.H ? this.H.T() : null
    };
    var ct = function(a) {
        Da.call(this);
        this.id = a;
        this.message = 'Service for "' + a + '" is not registered'
    };
    v(ct, Da);
    var Ima = function(a, b, c) {
        Da.call(this);
        this.Vn = b;
        this.message = 'Module "' + b + '" failed to load when requesting the service "' + a + '" [cause: ' + c + "]";
        this.stack = c.stack + "\nWRAPPED BY:\n" + this.stack
    };
    v(Ima, Da);
    var Hma = function(a, b, c) {
        Da.call(this);
        this.Vn = b;
        this.message = 'Configuration error when loading the module "' + b + '" for the service "' + a + '": ' + c
    };
    v(Hma, Da);
    var et = function(a) {
        D.call(this, a)
    };
    v(et, D);
    var Mma = new Cma("fva"),
        Ema = new Bma(Mma, 1);
    var ft = function(a) {
        J.call(this);
        this.o = a || window;
        this.H = G(this.o, "resize", this.R, !1, this);
        this.b = ge(this.o)
    };
    v(ft, J);
    ft.prototype.wa = function() {
        ft.qa.wa.call(this);
        this.H && (cf(this.H), this.H = null);
        this.b = this.o = null
    };
    ft.prototype.R = function() {
        var a = ge(this.o);
        Daa(a, this.b) || (this.b = a, this.ya("resize"))
    };
    var gt = function(a) {
        J.call(this);
        this.o = a ? Fe(a) : window;
        this.R = 1.5 <= this.o.devicePixelRatio ? 2 : 1;
        this.b = p(this.T, this);
        this.H = this.o.matchMedia ? this.o.matchMedia("(min-resolution: 1.5dppx), (-webkit-min-device-pixel-ratio: 1.5)") : null
    };
    v(gt, J);
    gt.prototype.start = function() {
        this.H && this.H.addListener(this.b)
    };
    gt.prototype.T = function() {
        var a = 1.5 <= this.o.devicePixelRatio ? 2 : 1;
        this.R != a && (this.R = a, this.ya("W"))
    };
    gt.prototype.wa = function() {
        this.H && this.H.removeListener(this.b);
        gt.qa.wa.call(this)
    };
    var ht = function(a, b) {
        x.call(this);
        this.T = a;
        if (b) {
            if (this.R) throw Error("ua");
            this.R = b;
            this.o = be(b);
            this.b = new ft(je(b));
            this.b.oe(this.T.S);
            this.H = new gt(this.o);
            this.H.start()
        }
    };
    v(ht, x);
    ht.prototype.wa = function() {
        this.o = this.R = null;
        this.b && (this.b.Oa(), this.b = null);
        y(this.H);
        this.H = null
    };
    var Nma = function(a) {
        this.b = a || null
    };
    var it = [],
        Oma = [],
        Pma = !1,
        Qma = function() {
            function a(b) {
                b.s9 || (b.s9 = !0, b.Wm && C(b.Wm.dc(), a), k.push(b))
            }
            var b = {},
                c, d;
            for (c = it.length - 1; 0 <= c; --c) {
                var e = it[c];
                if (e.hj.jr) {
                    var f = e.hj.jr;
                    for (d = f.length - 1; 0 <= d; --d) b[f[d].id] = e
                }
                if (e.hj.R)
                    for (f = e.hj.R, d = f.length - 1; 0 <= d; --d) b[f[d].id] = e
            }
            for (c = it.length - 1; 0 <= c; --c) {
                e = it[c];
                f = e.hj;
                if (f.b)
                    for (e.Wm = new Ke, d = f.b.length - 1; 0 <= d; --d) {
                        var g = b[f.b[d]];
                        g && e.Wm.add(g)
                    }
                if (f.o)
                    for (e.Wm || (e.Wm = new Ke), d = f.o.length - 1; 0 <= d; --d)(g = b[f.o[d]]) && e.Wm.add(g)
            }
            var k = [];
            C(it, a);
            it = k
        };
    var Rma = function() {
        for (var a = ["ms", "moz", "webkit", "o"], b = 0, c; c = a[b] && !ca.requestAnimationFrame; ++b) ca.requestAnimationFrame = ca[c + "RequestAnimationFrame"], ca.cancelAnimationFrame = ca[c + "CancelAnimationFrame"] || ca[c + "CancelRequestAnimationFrame"];
        if (!ca.requestAnimationFrame) {
            var d = 0;
            ca.requestAnimationFrame = function(a) {
                var b = (new Date).getTime(),
                    c = Math.max(0, 16 - (b - d));
                d = b + c;
                return ca.setTimeout(function() {
                    a(b + c)
                }, c)
            };
            ca.cancelAnimationFrame || (ca.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }
    };
    var jt = function(a) {
        this.b = a
    };
    var kt = function(a, b) {
        this.b = a;
        this.o = b
    };
    v(kt, jt);
    kt.prototype.then = function(a, b, c) {
        var d;
        a && (d = Sma(this, a));
        this.b.aa(d, b, c)
    };
    var Sma = function(a, b) {
        var c = a.o;
        return function(a) {
            b.call(this, new c(a))
        }
    };
    var lt = function(a, b) {
        this.b = a;
        this.H = b;
        this.o = null
    };
    v(lt, jt);
    lt.prototype.oy = function() {
        if (this.o) return this.o;
        for (var a = [], b = this.b.xb; b instanceof gbar.I && b != this.H.b;) a.push(b.ic()), b = b.zb();
        for (b = this.H; 0 < a.length;) b = b.ol(a.pop());
        return this.o = b
    };
    var mt = function(a) {
        this.b = a
    };
    v(mt, jt);
    mt.prototype[Fb] = !0;
    h = mt.prototype;
    h.nt = function(a, b, c, d) {
        var e = this;
        return this.b.za(a, function(a) {
            return b.call(d || ca, new lt(a, e))
        }, c)
    };
    h.ty = function() {
        throw Error("va");
    };
    h.IG = function() {
        throw Error("va");
    };
    h.uy = function() {
        throw Error("va");
    };
    h.ya = function() {
        throw Error("va");
    };
    h.mA = function() {
        throw Error("va");
    };
    h.Op = function() {
        throw Error("va");
    };
    h.gl = function() {
        throw Error("va");
    };
    h.HG = function() {
        throw Error("va");
    };
    var nt = function(a) {
        this.b = a
    };
    v(nt, mt);
    nt.prototype.getId = function() {
        return this.b.ia()
    };
    nt.prototype.ha = function() {
        return this.b.ib()
    };
    nt.prototype.Ne = function() {
        return null
    };
    var ot = function(a) {
        this.b = a;
        this.o = {}
    };
    v(ot, nt);
    ot.prototype.ol = function(a) {
        var b = this.o[a];
        if (b) return b;
        if (b = this.b.ja(a)) {
            var c = b.__wc;
            if (!c) throw Error("wa");
            b = new c(b);
            return this.o[a] = b
        }
        return null
    };
    var pt = function(a) {
        this.b = a
    };
    v(pt, nt);
    pt.prototype.Ak = function(a) {
        this.b.eb(a);
        return this
    };
    var qt = function(a) {
        this.b = a
    };
    v(qt, pt);
    qt.prototype.jg = function() {
        return this.b.fd()
    };
    var Tma = function(a) {
        this.b = a;
        this.o = this.R = null
    };
    v(Tma, mt);
    var Uma = function(a) {
        ot.call(this, a);
        gbar.E.prototype.__wc = pt;
        gbar.F.prototype.__wc = qt
    };
    v(Uma, ot);
    var rt = function(a) {
        ot.call(this, a);
        gbar.D.prototype.__wc = Uma
    };
    v(rt, ot);
    rt.prototype.getContent = function() {
        return this.b.ca()
    };
    var st = function(a) {
        this.b = a || gbar.a;
        this.H = this.o = null
    };
    v(st, jt);
    la(st);
    st.prototype.Zc = function() {
        this.o || (this.o = new kt(this.b.ba(), rt));
        return this.o
    };
    var Vma = function(a) {
        a.H || (a.H = new kt(a.b.bb(), Tma));
        return a.H
    };
    var Wma = function() {
        this.H = st.va()
    };
    Wma.prototype.init = function() {
        this.o = Xma(this);
        Yma(this)
    };
    var Yma = function(a) {
            a.o.then(function(a) {
                gapi.load("cloudsearch", function() {
                    var b = $m() + "/cloudsearch/";
                    ea("gapi.cloudsearch.installDefault")("calendar", b).setMaterialInput(a.b.ga(), a.b.gb())
                })
            })
        },
        Xma = function(a) {
            var b = Qca();
            Vma(a.H).then(function(a) {
                this.b = a;
                b.o(a)
            }, b.b, a);
            return b.H
        };
    var Zma = function() {};
    Zma.prototype.b = function(a) {
        Hp(a)
    };
    Rma();
    var $ma = function(a) {
            var b = new at;
            if (!Pma) {
                Qma();
                for (var c = 0; c < it.length; ++c) {
                    var d = it[c].hj;
                    if (d.jr)
                        for (var e = b, f = d.jr, g = 0; g < f.length; ++g) {
                            var k = f[g],
                                l = k.id;
                            if (!e.o[l] && !e.V[l] && !k.xoa)
                                if (k.C3) {
                                    var l = e,
                                        m = k.id,
                                        k = k.C3;
                                    m instanceof Nb && (m.Kz = k);
                                    l.U[m] = k
                                } else if (k.multiple) {
                                if (l = e, m = k.id, k = k.callback || q(oaa, k.cE), l.V[m] = k, k = l.b[m]) {
                                    var r = k;
                                    if (1 < r.length) {
                                        for (var u = 0; u < r.length; ++u) r[u].index = u;
                                        r.sort(Kma)
                                    }
                                    for (; k.length;) k.shift().d.callback(null);
                                    delete l.b[m]
                                }
                            } else dt(e, k.id, k.callback ? k.callback(e) : new k.cE(e))
                        }
                    d.H &&
                        d.H(b)
                }
                for (c = 0; c < it.length; ++c) d = it[c], d.hj.hc && d.hj.hc(b);
                for (c = 0; c < Oma.length; ++c) Oma[c](b);
                Pma = !0
            }
            dt(b, Jfa, new ht(b, be().Nb()));
            Ig(a, 29, b)
        },
        ana = function(a, b) {
            dt(a, Kfa, new Nma({
                pU: b,
                ke: $ea
            }));
            dt(a, nj, new Hs(a))
        },
        cna = function(a, b, c) {
            var d = new Dj(a);
            Ig(a, 17, d);
            var e = vm.va(),
                f = e.o.get(Ag);
            Ej(f, "pds", p(e.H, e), p(e.T, e));
            Ej(f, "pi", p(e.R, e));
            e = new mja;
            Ig(a, 21, e);
            dt(b, Aj, e);
            bna(d, e);
            d = new Jr(a);
            dt(b, vj, d);
            d = new gj(a, new Aga);
            Ig(a, 6, d);
            dt(b, sj, d);
            d = new Hfa;
            Ig(a, 8, d);
            dt(b, yj, d);
            d = new kk(a);
            dt(b, xj, d);
            e = Sg(c,
                4);
            hk = new dga(e);
            a && Ig(a, 4, hk);
            dt(b, Lfa, hk);
            e = co.va();
            Ig(a, 5, e);
            e = vp.va();
            f = new mla;
            e.o = a;
            e.La = f;
            e.b = d;
            dt(b, oj, e);
            d = new fl(a);
            Ig(a, 16, d);
            a = Vg(c, Kea, 9);
            c = new Ika(Tg(Vg(c, bh, 1), 6, -1), Sg(a, 1), Sg(a, 2) || "", Sg(a, 3), Sg(a, 4), Sg(a, 5), Sg(a, 6));
            dt(b, Bj, c);
            c = new Wma;
            dt(b, Cj, c)
        },
        dna = function(a, b, c) {
            var d = Vg(c, bh, 1),
                e = d.qb(),
                f = d.getEmail(),
                g = Sg(d, 4),
                e = new bo(e, f, void 0, 100, void 0, Sg(d, 5), g),
                f = Vg(c, ch, 6);
            c = Qa(Sg(f, 3) || "null");
            c = new fh(Sg(f, 1), Sg(f, 2), c, void 0, !!Sg(f, 15), Tg(f, 5, "") || void 0, Tg(f, 16, !1));
            (g = Qa(Tg(f,
                6, "{}"))) && !bb(g) && (c.T = g);
            g = !!Tg(f, 7, !1);
            c.U = g;
            g = !!Tg(f, 8, !1);
            c.Bp = g;
            g = !!Tg(f, 9, !1);
            c.sL = g;
            Tg(f, 10, 0) && (g = Tg(f, 10, 0), c.jE = g);
            g = !!Tg(f, 11, !1);
            c.pI = g;
            g = !!Tg(f, 12, !1);
            c.lI = g;
            g = !!Tg(f, 13, !1);
            c.bF = g;
            Sg(d, 2);
            f = Sg(f, 14);
            null != f && (Ys = f);
            var f = b.get(xj),
                g = vp.va(),
                k = Tg(d, 6, -1),
                d = new Mea(e, f, c, g, 0 <= k ? k : void 0, Tg(d, 7, !1), Tg(d, 8, !0));
            Ig(a, 7, d);
            dt(b, tj, d)
        },
        ena = function(a, b) {
            if (null != Vg(b, eh, 3)) {
                var c = ia.get(a);
                C(Sg(Vg(b, eh, 3), 3), c.b, c)
            }
        },
        fna = function(a, b) {
            var c = new oi(a, b ? "disconnected" : "connected");
            c.register(a);
            return c
        },
        gna = function(a) {
            var b = new sp(a, vp.va(), new Zma);
            Ig(a, 14, b)
        },
        hna = function(a, b, c) {
            var d = b.get(xj);
            if (qi(a)) {
                c = Sg(c, 7);
                var e = t() + hi;
                3E4 <= Math.abs(e - c) && (hi = c - t())
            }
            c = hh(d, "tzoffset", "0");
            e = d.get("tztransn");
            d = d.get("tznextoff");
            d = new Zea(c, n(e) ? parseFloat(e) : void 0, n(d) ? parseFloat(d) : void 0);
            Ig(a, 1, d);
            dt(b, pj, d)
        },
        ina = function(a, b) {
            b.get(Lfa).isEnabled(72) && (Wl = new Ol(Ul.va(), void 0, !0));
            var c = new Ega(Wl);
            Ig(a, 2, c);
            dt(b, zj, c)
        },
        bna = function(a, b) {
            Ej(a, "ref", function() {
                b.ya(pp)
            })
        };
    var jna = function(a, b, c, d) {
        this.b = a;
        this.R = b;
        this.o = c;
        this.kc = d
    };
    jna.prototype.nc = function(a) {
        if (Xn(a, 64) || !a.nc()) return !1;
        a = this.R.get(a.qb());
        return !!a && 60 <= a.Nd
    };
    var Yp = function(a, b) {
            return 1 == b.ua ? !1 : 1 < b.H || 1 == b.H && !Wn(b, a.kc)
        },
        Zp = function(a, b) {
            for (var c = !1, d = Vn(b), e = 0; e < d.length; e++) {
                var f = d[e],
                    g;
                if (g = f != a.kc) g = eo(a.o, f), g = !(!g || g.Rc());
                if (g) {
                    if (2 != Wn(b, f).jc) return !1;
                    c = !0
                }
            }
            return c
        };
    window._GenSettings = Bs;
    window._SR_backToCalendar = Xq;
    var _forceRefresh = cs,
        tt = function(a, b, c, d) {
            var e;
            n(d) && (e = d);
            var f = zk();
            f.o = "ef_view_from_other";
            Gg(M(), 805).addCallback(function(d) {
                f.b("ef_view_from_other.ll_ef");
                d.or(a, !!b, !!c, e)
            })
        };
    da("_EF_ShowEventDetails", tt, void 0);
    var ut = function() {};
    ut.prototype.query = function(a, b, c, d, e, f) {
        var g = M();
        Gg(g, 806).addCallback(function(k) {
            this.b = k.nu(g);
            this.b.query(a, b, c, d, e, f)
        }, this)
    };
    var vt = function(a, b, c, d, e) {
        var f = M();
        Gg(f, 806).addCallback(function(a) {
            this.b = a.nu(f);
            this.b.sX(b, c, d, e)
        }, a)
    };
    ut.prototype.message = function(a, b, c, d) {
        var e = M();
        Gg(e, 806).addCallback(function(f) {
            this.b = f.nu(e);
            this.b.message(a, b, c, d)
        }, this)
    };
    ut.prototype.Tb = function() {
        this.b.Tb()
    };
    ut.prototype.close = function() {
        this.b.close()
    };
    ut.prototype.getZIndex = function() {
        return this.b.getZIndex()
    };
    var wt = function() {
        x.call(this);
        this.b = window.performance || window.msPerformance
    };
    v(wt, x);
    wt.prototype.wa = function() {
        delete this.b
    };
    wt.prototype.Pc = function() {
        return !!this.b
    };
    var xt = function(a) {
            return a.Pc() ? a.b.timing.navigationStart : void 0
        },
        yt = function(a) {
            return a.Pc() ? 0 === a.b.navigation.type : void 0
        };
    var zt = function(a, b, c) {
            this.b = a;
            this.R = c || null;
            this.o = [];
            this.Ha = new I(this);
            this.mb = K(a, uj);
            this.T = !1
        },
        At, kna = function(a) {
            xja(Fg(a.b, 14), p(a.ta, a), p(a.U, a))
        };
    zt.prototype.ta = function(a) {
        this.o = this.o.concat(a);
        jc(this.o)
    };
    zt.prototype.U = function(a) {
        if (2E3 < a.length) {
            var b;
            b = "";
            var c = "Your Other Calendars list contains " + (O(a.length) + (" calendars. Google Calendar can become unresponsive when the list contains more than " + (O(2E3) + " calendars.<br><br>To fix this, go to Calendar Settings and unsubscribe or hide the calendars you don't use regularly.")));
            b += '<div class="il-dialog"><div class="il-message">' + c + '</div><span id="too_many_cal" class="lk" tabindex="0">' + O("Go to Calendar Settings") + "</span></div>";
            b = N(b);
            c = new ut;
            vt(c, "Calendar limit reached", Lm(b), p(this.ma, this, c));
            a = a.splice(0, 2E3)
        }
        return a
    };
    zt.prototype.ma = function(a) {
        var b = F("too_many_cal");
        b && (a = p(this.V, this, a), this.Ha.ka(b, "click", a), this.Ha.ka(b, "keypress", a))
    };
    zt.prototype.V = function(a) {
        a.close();
        Bs(1)
    };
    var lna = function(a, b) {
        var c, d;
        c = b || ki(mi(a.b));
        var e = Eh(c.year, c.month, 1);
        d = Ah(e);
        var f = _hosted;
        if (!f && ep(a.b)) {
            var g;
            g = (g = K(a.b, vj)) ? g.Ja : -1;
            if (0 < g) {
                var k;
                k = (k = Ur(K(M(), vj))) && k.length ? Bh(Sh(k[1]), Sh(k[0])) : -1;
                0 < k && (f = 5 <= g / k)
            }
        }
        if (f || _hosted) {
            f = ih(a.b).Dd();
            e = e.rd() - f;
            0 > e && (e += 7);
            if (30 > rh(c.year, c.month) || 5 > e) e += 7;
            d.Ka -= e;
            c = d.rb();
            d.Ka += 60
        } else d.Ka -= 42, c = d.rb(), d.Ka += 168;
        d = d.rb();
        e = p(a.Ca, a, zk());
        f = a.S.bind(a, !1);
        kla(c, d, a.o, e, f)
    };
    zt.prototype.Ca = function(a) {
        a.b("secondaryCalLoadTime");
        Bk("timeToSecondaryCalsLoaded", t() - _loadStartTime);
        a = new wt;
        a.Pc() && yt(a) && Xs(this.mb, "navigation_start_to_secondary_calendars", t() - xt(a));
        a.Oa();
        this.o = [];
        this.Ha.ka(hj(this.b), "d", this.H)
    };
    zt.prototype.S = function(a) {
        if (!this.T) {
            this.T = !0;
            var b = this.b.get(tea);
            a ? Zq(b, "viewcalendar", "scs") : Zq(b, "viewcalendar", "err")
        }
    };
    zt.prototype.H = function() {
        if (!At) {
            var a = this.o.length,
                b = jh(this.b);
            1 < a || 1 == a && this.o[0] != b || (this.Ha.b(hj(this.b), "d", this.H), At = !0, this.R && this.R.b("allCalsVisible"), this.S(!0), (a = ni(this.b)) && a.Qa())
        }
    };
    var Bt, Ct, Dt;
    var mna = function(a, b, c) {
        lla(a, b, function() {
            setTimeout(function() {
                if (c) {
                    var a = M();
                    cp(a).o.R(c)
                }
            }, 0)
        })
    };
    var Xla = function(a) {
        var b = a.lR,
            c = a.hR,
            d = a.iR,
            e = a.lV;
        a = a.mV;
        return N('<div class=lv-nav><img tabindex=0 role=button src="' + P(Mn(b)) + '" class="lv-up lk ' + P(c) + '" title="' + P(d) + '" alt="' + P(d) + '"> <img src="' + P(Mn(b)) + '" tabindex=0 role=button class="lv-down lk ' + P(e) + '" title="' + P(a) + '" alt="' + P(a) + '"></div><div class="chead cheadNotToday noprint"><span id=expand_all_link tabindex=0 role=button class="lk lv-x">' + O("Expand All") + '</span>&nbsp;&nbsp;&nbsp;<span id=collapse_all_link tabindex=0 role=button class="lk lv-c">' + O("Collapse All") + "</span></div>")
    };
    var Et = function(a, b, c, d, e) {
        this.R = a;
        this.ta = c;
        this.T = d;
        this.U = e
    };
    Et.prototype.b = null;
    Et.prototype.Ib = function() {
        H(F("lvHeader"), !1);
        F("gridcontainer").className = ""
    };
    var Wla = function(a) {
            var b = F("gridcontainer");
            bn(b, N('<div id="' + P("lv_" + a.b.Sj) + '"></div>'));
            b.className = "lv-gridcontainer";
            H(F("lvHeader"), !0)
        },
        Vla = function(a) {
            ms(ls(a.U), "search", p(function() {
                this.o && (this.o.ts(), this.o.uc());
                bn(F("lvHeader"), M().get(Bg).JW());
                Wla(this);
                ip(!0);
                Fg(M(), 18).im();
                this.b.render();
                this.o && (this.o.IK(), this.o.mD(), this.o.La());
                var a = M().get(Bg);
                a.QI() ? a.Q7() : 0 == a.Pq() && a.S7()
            }, a))
        },
        tla = function(a, b) {
            if (0 < a.R.H.length) {
                var c = Sr(a.R),
                    d = Sh(hla(a.R)).rb(),
                    c = Ah(Sh(c));
                c.Ka += 61;
                c = c.rb();
                mna(d, c, b ? void 0 : 1)
            }
        },
        ula = function(a, b) {
            if (0 < a.R.H.length) {
                var c = Sr(a.R),
                    d = Sh(c).rb(),
                    c = Ah(Sh(c));
                c.Ka -= 61;
                c = c.rb();
                mna(c, d, b ? void 0 : -1)
            }
        };
    Et.prototype.scroll = function(a) {
        this.b.scroll(a);
        Gk(this)
    };
    var Gk = function(a) {
        a.b && a.o && a.o.DF()
    };
    var nna = function(a, b, c) {
            c = c || {};
            b = a.XR;
            var d = a.className,
                e = !!a.d8,
                f = a.id,
                g = a.Sd,
                k = a.E3,
                l = !!a.b2,
                m = a.Wg,
                r = a.summary,
                u = a.Dg;
            a = a.rows;
            c = '<div class="' + P(d) + 'monthtablediv monthtableSpace"><table class="' + P(d) + 'monthtable" role="presentation" cellspacing=0 cellpadding=0 style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + '-moz-user-select:none;-webkit-user-select:none;">' + (e ? '<tr id="' + P(f) + 'header" class="monthtableHeader"><td colspan=' + Gn(g - 2) + ' id="' + P(k) + '" class="' + P(b) + 'sb-cur">' + (l ? '<span class="h zippy-arrow" unselectable=on>&nbsp;</span>' :
                    "") + '<span class="calHeaderSpace">' + O(m) + '</span></td><td colspan=2 class="' + P(b) + 'sb-nav"><span id="' + P(f) + 'prev" class="' + P(b) + 'sb-prev goog-inline-block"></span><span id="' + P(f) + 'next" class="' + P(b) + 'sb-next goog-inline-block"></span></td></tr>' : '<tr class="' + P(b) + 'heading" id="' + P(f) + 'header"><td id="' + P(f) + 'prev" class="' + P(b) + 'prev">&laquo;</td><td colspan=' + Gn(g - 2) + ' id="' + P(k) + '" class="' + P(b) + 'cur">' + O(m) + '</td><td id="' + P(f) + 'next" class="' + P(b) + 'next">&raquo;</td></tr>') + '</table><table class="' +
                P(d) + 'monthtable monthtableBody" summary="' + P(r) + '" cellspacing=0 cellpadding=0 id="' + P(f) + 'tbl" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + '-moz-user-select:none;-webkit-user-select:none;"><colgroup span=7><tr class="' + P(d) + 'days">';
            d = u.length;
            for (e = 0; e < d; e++) f = u[e], c += '<th scope="col" class="' + P(b) + "dayh" + (f.w9 ? " " + P(b) + "weekendh" : "") + '" title="' + P(f.title) + '">' + O(f.Oc) + "</th>";
            c += "</tr>";
            b = a.length;
            for (u = 0; u < b; u++) c += O(a[u]);
            return N(c + "</table></div>")
        },
        ona = function(a) {
            var b;
            b = b || {};
            var c = a.cols;
            a = '<tr style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "cursor:" + (a.c2 ? "pointer" : "default") + '" id="' + P(a.id) + '">';
            b = c.length;
            for (var d = 0; d < b; d++) {
                var e = c[d];
                a += '<td id="' + P(e.id) + '" class="' + P(e.className) + '">' + O(e.Ka) + "</td>"
            }
            return N(a + "</tr>")
        };
    var Gt = function(a, b, c, d, e, f, g, k, l, m) {
        J.call(this);
        this.S = d;
        this.Pb = a;
        this.id = e || this.Pb.id + "_";
        this.className = f || "dp-";
        this.H = c;
        this.o = b;
        this.T = {};
        a = n(g) ? g : 1;
        k = (1 << a + 7) - (1 << a + (k || 5));
        this.Ba = k + (k >> 7);
        this.Ja = !!l;
        this.Ra = !!m;
        this.Ha = new I(this);
        this.Gb(this.Ha);
        Ft[this.id] = this
    };
    v(Gt, J);
    var Ft = {};
    h = Gt.prototype;
    h.gn = !1;
    h.AA = null;
    h.XK = null;
    h.render = function() {
        if (this.gn) {
            var a = this.ye;
            if (!this.b) {
                this.ma = [];
                for (var b = 7; b--;) this.ma[b] = this.o.So(this.o.Uw(b));
                for (var b = this.className, c = [], d = 48; d--;) {
                    var e = ["cell"];
                    d & 2 ? (e.push(d & 1 ? "weekend-selected" : "weekday-selected"), d & 8 && e.push("today-selected"), e.push(d & 4 ? "onmonth-selected" : "offmonth-selected")) : (e.push(d & 1 ? "weekend" : "weekday"), d & 8 && e.push("today"), e.push(d & 4 ? "onmonth" : "offmonth"));
                    d & 16 && e.push("day-left");
                    d & 32 && e.push("day-right");
                    c[d] = b + e.join(" " + b) + " "
                }
                this.V = c;
                this.R = [];
                this.b =
                    this.id + "day_";
                this.U = this.id + "cur"
            }
            var f = this.o.To(this.ye.Wg);
            this.ua && (f = this.ua + " - " + f);
            b = [];
            c = this.ye.o;
            d = this.Ba;
            for (e = 0; e < a.Sd; e++) b.push({
                title: this.o.Zr(c),
                w9: d >> c & 1,
                Oc: this.ma[c]
            }), c = (c + 1) % 7;
            var a = this.Pb,
                c = this.className + "cell " + this.className,
                d = this.className,
                e = this.Ja,
                g = this.id,
                k = this.ye.Sd,
                l = this.U,
                m = this.Ra,
                r = this.o.To(this.ye.Wg),
                u = this.ye,
                w = u.Sd,
                z = this.Ba,
                B = this.V,
                A = Sp(u),
                L = !!this.AA,
                Z = L ? this.AA.lc() : 1,
                R = L ? this.XK.lc() : 0,
                ha = this.ta.lc(),
                ka = this.ye.Wg.month,
                ja = 0;
            this.Ca && (this.T =
                this.Ca(u));
            for (var fa = [], za = 0; za < this.ye.Ue; za++) {
                for (var ua = [], sa = u.o, dc = w; dc--; ja++) {
                    var Bb = A[ja],
                        Rd = (Bb == ha && 8) | ((Bb >> 5 & 15) == ka && 4) | (Bb >= Z && Bb <= R && 2) | (dc == w - 1 && 16) | (0 == dc && 32) | z >> sa & 1,
                        sa = (sa + 1) % 7;
                    this.R[ja] = Rd;
                    ua.push({
                        id: this.b + Bb,
                        Ka: Bb & 31,
                        className: B[Rd] + (this.T[Bb] || "")
                    })
                }
                fa.push(ona({
                    id: this.id + "row_" + za,
                    c2: L,
                    cols: ua
                }))
            }
            dn(a, nna, {
                XR: c,
                className: d,
                d8: e,
                id: g,
                Sd: k,
                E3: l,
                b2: m,
                Wg: r,
                summary: f,
                Dg: b,
                rows: fa
            });
            this.Ha.ka(this.S(this.id + "prev"), "mousedown", this.Z4).ka(this.S(this.id + "next"), "mousedown",
                this.W4)
        }
    };
    h.Z4 = function() {
        Ht(Ft[this.id], -1);
        this.ya("X")
    };
    h.W4 = function() {
        Ht(Ft[this.id], 1);
        this.ya("Y")
    };
    h.ha = function() {
        return this.Pb
    };
    var Ht = function(a, b) {
            pna(a, Hh(a.ye.Wg.year, a.ye.Wg.month + b, 1).$a())
        },
        pna = function(a, b) {
            var c = a.ye.Wg;
            if (b.year != c.year || b.month != c.month) a.ye = a.H.b(b), a.update()
        };
    h = Gt.prototype;
    h.update = function() {
        this.gn && this.render()
    };
    h.getId = function() {
        return this.id
    };
    h.show = function() {
        this.gn = !0;
        this.render()
    };
    h.Eb = function() {
        ne(this.Pb);
        this.gn = !1
    };
    h.nb = function() {
        return this.gn
    };
    h.setup = function(a) {
        this.ta = a;
        this.ye ? this.update() : this.ye = this.H.b(a)
    };
    h.wa = function() {
        delete this.Pb;
        delete Ft[this.id];
        Gt.qa.wa.call(this)
    };
    var qna = function(a) {
        J.call(this);
        this.H = a;
        this.o = this.b = null
    };
    v(qna, Fja);
    var rna = function(a, b) {
        var c = b.Dd(),
            d = new Ol,
            c = new Up(c),
            e = b.zl(),
            f = b.Xh();
        Nj(ih(a.H), 0, !1) && (F("dp_0").display = "none");
        a.b = new Gt(F("dp_0"), d, c, F, void 0, void 0, e, f, !0, !0);
        a.b.ua = "Mini calendar";
        d = mi(a.H);
        a.b.setup(ki(d));
        a.b.show()
    };
    var sna = function(a, b) {
        this.b = a;
        this.o = b
    };
    var tna = function(a, b, c, d, e, f) {
            this.H = a;
            this.T = b;
            this.U = c;
            this.S = d;
            this.b = f;
            this.R = e;
            this.o = null
        },
        una = function(a, b, c, d, e, f, g) {
            b = new tna(b, c, d, e, f, g);
            G(a, "S", b.V, void 0, b)
        };
    tna.prototype.V = function() {
        this.T.setTitle(vna(this))
    };
    var vna = function(a) {
            var b = "";
            switch (a.U.td) {
                case "availeditor_0":
                    b = "Appointment Slots";
                    break;
                case "details_2":
                    b = "Details";
                    break;
                case "details-notif_3":
                    b = "Notifications";
                    break;
                case "details-trashcan_4":
                    b = "Trash";
                    break;
                case "details-sharing_5":
                    b = "Sharing";
                    break;
                case "eventpage_6":
                    b = "Event Details";
                    break;
                case "main_7":
                    b = wna(a);
                    break;
                case "settings-calendars_9":
                    b = "Settings";
                    break;
                case "settings-dir_10":
                    b = "Interesting Calendars";
                    break;
                case "settings-general_11":
                    b = "General Settings";
                    break;
                case "settings-labs_12":
                    b =
                        "Labs Settings";
                    break;
                case "settings-notif_13":
                    b = "Mobile Settings";
                    break;
                case "settings-offline_14":
                    b = "Offline Settings"
            }
            return b ? a.H + " - " + b : a.H
        },
        wna = function(a) {
            var b = a.S.b;
            if (!b) return "";
            var c = b.b,
                b = "";
            switch (c) {
                case 0:
                case 4:
                case 5:
                    return xna(a, c);
                case 6:
                    return "Search";
                case 1:
                    b = "Week of {FORMATTED_DATE}";
                    break;
                case 2:
                    b = "Month of {FORMATTED_DATE}";
                    break;
                case 3:
                    b = "Agenda for {FORMATTED_DATE}"
            }
            a = {
                FORMATTED_DATE: xna(a, c)
            };
            return vl(new ul(b), a)
        },
        xna = function(a, b) {
            var c = a.R.H;
            switch (b) {
                case 0:
                case 3:
                    return c.$e(a.b.first, !0, !0);
                case 5:
                case 4:
                    return c.Oi(a.b.first, a.b.Wc);
                case 1:
                    var c = a.b.first,
                        d = a.o || a.R.H;
                    d.Jd || (a.o = new Ol(Ul.va()), d = a.o);
                    return d.Jd(c);
                case 2:
                    return c.Xr(a.b.focus)
            }
            return ""
        };
    var It = function(a, b, c) {
        this.H = a;
        this.b = b;
        this.T = c;
        this.o = (a = F(c)) ? a.scrollTop : null;
        this.Ha = new I(this)
    };
    v(It, x);
    It.prototype.wa = function() {
        y(this.Ha);
        delete this.H;
        delete this.b
    };
    var yna = function(a, b, c, d) {
        b = new It(b, c, d);
        b.Ha.ka(a, "y", b.R)
    };
    It.prototype.R = function(a) {
        a = Xk(a.target.td);
        var b = F(this.T);
        b && !a && (this.o = b.scrollTop);
        H(this.H, a);
        b && a && null !== this.o && (b.scrollTop = this.o);
        ne(this.b);
        H(this.b, !a)
    };
    var Jt, Ana = function(a) {
            if (!(0 > window.location.href.indexOf("/www.google.com/"))) {
                var b = ea("chrome");
                if (!(!b || b.app && b.app.isInstalled) && ra(ca.openDatabase)) {
                    a.get("usesOffline") && zna();
                    var c;
                    try {
                        c = ca.openDatabase("calendar", "", "Calendar stuff", 1E4)
                    } catch (f) {}
                    if (c && c.version) {
                        var d = function(b, c) {
                                c.rows && c.rows.length && (a.set("usesOffline", "true"), a.b(), zna())
                            },
                            e = function() {};
                        c.transaction(function(a) {
                            a.executeSql("SELECT * FROM BASICS;", [], d, e)
                        })
                    }
                }
            }
        },
        zna = function() {
            var a = new Mm(window.location.href);
            a.b = "calendar.google.com";
            Ld(a.toString())
        },
        Bna = function() {
            var a = Lp.va();
            0 != a.jc || Np(a, "main_7")
        },
        Cna = function(a, b) {
            var c = new bp(a, new Kk(1));
            c.T = b;
            Ig(a, 15, c)
        };
    da("_renderInit", function(a, b, c, d, e, f) {
        var g = new xla,
            k = g.b,
            l = !Tg(k, 8, !1);
        Sg(k, 4)[45] && oma();
        hma();
        var m = new Eg;
        Oea(m);
        var r = Sg(Vg(k, dh, 2), 1) || "";
        m.ma = !!r;
        $ma(m);
        var u = m.get(vg);
        dt(u, wj, g);
        Sg(Vg(k, ch, 6), 1);
        var w = $f.va(),
            g = Va(yla, function(a) {
                a = w.b[a];
                return !a || !a.b
            });
        yea(m, g);
        ana(u, f);
        cna(m, u, k);
        f = u.get(xj);
        ik(m);
        Ig(m, 33, new Ula);
        Ig(m, 9, new zga(f, Lp.va()));
        Tia(b, m);
        Oo = Oia = !0;
        Po = 4;
        Nia = !0;
        Wj = !1;
        zm = Xj = !0;
        dna(m, u, k);
        b = fna(m, !l);
        dt(u, uj, new Ws);
        ina(m, u);
        u = Vg(k, bh, 1).qb();
        Dna(m, vm.va(), u);
        Cna(m, e);
        gna(m);
        (new bs(m)).apply();
        Ija(m);
        e = Sg(Vg(k, dh, 2), 2) || "";
        u = Sg(Vg(k, dh, 2), 3) || "";
        cr = e;
        a = Ena(m, r, e, u, a, l);
        G(b, "b", function(a) {
            hj(m).R = a.Ob
        });
        Efa(hj(m), l);
        wga(a);
        l = K(m, vj);
        G(l, "J", function(a) {
            a = a.fh;
            Uq && a in Uq && a in Uq && (Vq[Uq[a]]--, delete Uq[a])
        });
        Sla(m);
        ws.va();
        Pla();
        Ig(m, 25, new sna(m, function(a, b) {
            Vr(a, !1, void 0, void 0, b)
        }));
        (new Hla(c, d)).register(m);
        c = new Lka;
        Ig(m, 34, c);
        Zq(c, "render", "scs");
        c = ia.get(m);
        Ej(c, "oe", tt);
        null != Vg(k, eh, 3) && C(Sg(Vg(k, eh, 3), 1), c.b, c)
    }, void 0);
    da("_renderBody", function() {
        var a = M();
        ik(a).isEnabled(53) && (a = ih(a), Ana(a))
    }, void 0);
    da("_renderMain", function(a, b, c, d, e) {
        var f = M(),
            g = !!Tg(K(f, wj).b, 8, !1);
        if (window.location != window.parent.location) Ok(f, 814);
        else {
            var k = vp.va();
            ar = new wr(k, f, "calendars_my", "clst_my", !0);
            br = new wr(k, f, "calendars_fav", "clst_fav", !1);
            var k = Fg(f, 18),
                l = br;
            k.T = ar;
            k.ta = l;
            a = q(Fna, a, b, c, !g, d, e);
            Wk ? a() : Vk = a;
            a = ih(f);
            b = new Date(1970, 11, 29, 13, 0, 0, 0);
            c = "false";
            "toLocaleTimeString" in b && (c = 0 <= b.toLocaleTimeString().indexOf("13") ? "true" : "false");
            mk(a, "format24HourTime", c);
            d = b.toLocaleDateString();
            b = d.indexOf("12");
            c = d.indexOf("29");
            if (0 > b && 0 <= c)
                for (e = (new Date(1970, 8, 29, 13, 0, 0, 0)).toLocaleDateString(), k = Math.min(d.length, e.length), l = 0; l < k; l++)
                    if (d.charCodeAt(l) != e.charCodeAt(l)) {
                        b = l;
                        break
                    }
            0 <= (b | c) && (d = d.indexOf("70"), mk(a, "dtFldOrdr", b < c ? 0 <= d && d < b ? "YMD" : "MDY" : "DMY"));
            mk(a, "weekView5", "false");
            mk(a, "defaultCalMode", "week");
            mk(a, "showDeclined", "true");
            mk(a, "locale", "en");
            _ol_enabled && g && ri() ? Ok(f, 814) : Vk ? Vk() : Wk = !0
        }
    }, void 0);
    var Fna = function(a, b, c, d, e) {
            var f = M(),
                g = f.get(vg),
                k = ia.get(f),
                l = g.get(wj).b;
            hna(f, g, l);
            null != Vg(l, eh, 3) && C(Sg(Vg(l, eh, 3), 2), k.b, k);
            null != Vg(l, ah, 5) && C(Sg(Vg(l, ah, 5), 1), kj);
            ena(f, l);
            Dka(fp.va(), b ? di(b).$a() : Xl());
            l = c;
            c = ih(f);
            l || (l = c.getString("defaultCalMode", "week"));
            gga(c, mi(f));
            b = fp.va().H;
            var m = K(f, vj),
                m = new Et(m, 0, Fg(f, 20), b, f);
            Ig(f, 31, m);
            Gna();
            Jt = new zt(f, 0, Bt);
            d && kna(Jt);
            d = cp(f);
            lp(d, Mk(l, f));
            var r;
            b instanceof qk && (r = ws.va().getToken(), r = lga(r));
            lna(Jt, r);
            a && Fj(k, a);
            c.b();
            e && (Dt = function() {
                Rq.uN(e);
                Dt = void 0;
                Hna()
            });
            a = F("mainbody");
            r = F("coverinner");
            c = Iq(fp.va().b);
            yna(Lp.va(), a, r, c);
            una(ws.va(), document.title || "", Yq.va(), Lp.va(), d, Fg(f, 2), b);
            ik(f).isEnabled(49) && g.get(Cj).init();
            ima(f.get(vg));
            Uk ? Uk() : vga = !0;
            Nfa(k)
        },
        Gna = function() {
            var a = zk();
            Bt = a;
            a.H = _loadStartTime - _tsf || t();
            a.R = a.H
        },
        Ina = function(a) {
            Ct = t();
            Bt.b(a ? "totalDlLoadTime" : "totalLoadTime");
            Jt && (Jt.H(), Jt = void 0)
        };
    da("_renderPost", function() {
        if (window.location == window.parent.location) {
            var a = Jna;
            vga ? a() : Uk = a
        }
    }, void 0);
    var Jna = function() {
            var a = M(),
                b = new qna(a);
            rna(b, ih(a));
            lja(cp(a), b);
            var c = vp.va();
            K(a, Aj).ya(op);
            var d = K(a, vj);
            G(c, "m", function(a) {
                if (dm(a, "l")) {
                    a = lo(d.o);
                    for (var b = 0, e = a.length; b < e; ++b) c.contains(a[b]) || Ap(a[b])
                }
            });
            Bna();
            b = !!Dt;
            if (!b) {
                Hna();
                var e = K(a, uj),
                    f = new wt;
                f.Pc() && yt(f) && Xs(e, "navigation_start_to_ui_revealed_latency", t() - xt(f))
            }
            Ina(b);
            Ok(a, 804)
        },
        Hna = function() {
            ne(F("loadingItem"));
            Gc(F("calcontent"), "hdn")
        },
        Ena = function(a, b, c, d, e, f) {
            var g = null,
                k = null;
            a.ma ? (e = new Ss(b), f = $f.va(), f.ua = e, g = f) :
                (k = new ds(a, c + "calendarjs_", "compiled__en.js" + d), k.U = new Dla, e && (js(k, "eventform"), js(k, "extras"), js(k, "gadget"), js(k, "delayedcore")), f || (js(k, "offline"), js(k, "extras"), js(k, "gadget"), js(k, "delayedcore")), G(k, "O", q(Kna, a)));
            a.V = k;
            a.U = g;
            k = new ks(k, g);
            Ig(a, 13, k);
            return k
        },
        Kna = function(a) {
            var b;
            qi(a) ? (b = "We're sorry. Google Calendar is temporarily unavailable. Please try again in a few minutes.<br>If the problem persists, see our " + ('<a href="' + P(Ln("//www.google.com/appsstatus#v=status&hl=en")) + '">' +
                ("Apps Status Dashboard</a> or visit our " + ('<a href="' + P(Ln("//support.google.com/calendar/?hl=en")) + '">Help Center</a>.'))), b = N("" + b)) : b = "Sorry, Calendar is currently running in offline mode. Please try again in a few minutes.";
            a.get(Dg).b(b)
        },
        Dna = function(a, b, c) {
            var d = vp.va(),
                e = co.va();
            Ig(a, 20, new jna(d, b, e, c))
        };
    var Lna = E || rd || td && Bd("525"),
        Mna = ud && sd;
    var Nna = Hd("e44pnd", "reminderbubble", []),
        Ona = Hd("dorsvd", "oobe", []),
        Pna = Hd("AXMUGd", "oobe", []);
    var Kt = new Nb("s"),
        Lt = new Nb("t"),
        Mt = new Nb("u"),
        Nt = new Nb("v");
    var Ot = Hd("R7UIPd", "bubble", []),
        Pt = Hd("bc2lAb", "bubble", [rj, Ot]);
    var Qna = Hd("AkKnYc", "reminderbubble", []),
        Rna = Hd("XorSpd", "reminderbubble", [nj]),
        Qt = Hd("PHODd", "remindermodel", [Kt, Lt]),
        Rt = Hd("NrZEs", "remindermodel", []),
        Sna = Hd("HwbTTd", "reminderbubble", [Mt, Kt]),
        Tna = Hd("p6OOE", "reminderbubble", [pj, nj, tj, Qt, Rt]),
        St = Hd("gYdQf", "remindermodel", [Lt, Rt]),
        Una = Hd("iMfd9d", "eventbubble", [St, Rt, Pt]),
        Vna = Hd("iQUaYc", "reminderbubble", [Rt, nj, tj]),
        Tt = new Nb("f1y0tf", "reminderbubble", [nj, Nt]),
        Wna = Hd("kav95d", "reminderbubble", [Tt]),
        Xna = Hd("iyB7hd", "reminderbubble", [Tt]),
        Yna = Hd("kBxGlb", "reminderbubble", [Qt, Rt, Tt]);
    var Zna = Hd("VIUZZc", "eventbubble", [uj, sj, Pt]),
        $na = Hd("lZbWu", "eventbubble", [Pt]),
        aoa = Hd("D27r2b", "eventbubble", [rj, tj]);
    var boa = Hd("jWoeD", "taskbubble", [Pt]);
    var Ut = Hd("bth04c", "common", []),
        Vt = new Nb("ebVfKe", "common", []);
    var coa = Hd("Ta0E3", "button", [Ut]);
    var doa = Hd("Dj0Pe", "checkbox", [Ut]);
    var eoa = Hd("DlleHf", "statecontainer", []),
        foa = Hd("hhvbwf", "tabcontainer", []),
        goa = Hd("DKaF4", "statecontainer", [Vt]);
    var hoa = Hd("aLsVMc", "menubutton", [Ut]);
    var ioa = Hd("Qvnsvb", "primarydisplay", [nj]);
    var joa = Hd("OILFfe", "radiobutton", [Vt]);
    var koa = Hd("qwazRc", "textinput", []),
        loa = Hd("FWABY", "textinput", []);
    var _ModuleManager_initialize = p($f.prototype.Za, $f.va());
    _ModuleManager_initialize('doozer/delayedcore/sy0:1/sy2:1/sy1:3/extras:2,4/sy3:3/gadget:4,6/sy4:6/sy5:1/sy6/eventform:5,7,8,9,a/dasher:b/sy7/detailssettings:b,d/sy8/focuswidget:5,9,f/offline:5,d/sy9:1/push:5,a,i/reminders:2,8,i/search:b/tdl:5,9,f/tws:5/_fdm_', []);
} catch (e) {
    _DumpException(e)
}
// Google Inc.
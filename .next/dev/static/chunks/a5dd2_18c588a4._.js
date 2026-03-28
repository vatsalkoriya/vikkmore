(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/vikkmore/node_modules/mux-embed/dist/mux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>jl
]);
var ea = Object.create;
var _t = Object.defineProperty;
var ta = Object.getOwnPropertyDescriptor;
var ra = Object.getOwnPropertyNames;
var aa = Object.getPrototypeOf, ia = Object.prototype.hasOwnProperty;
var ft = function(r, e) {
    return function() {
        return r && (e = r(r = 0)), e;
    };
};
var B = function(r, e) {
    return function() {
        return e || r((e = {
            exports: {}
        }).exports, e), e.exports;
    };
};
var na = function(r, e, t, i) {
    if (e && typeof e == "object" || typeof e == "function") for(var a = ra(e), n = 0, o = a.length, s; n < o; n++)s = a[n], !ia.call(r, s) && s !== t && _t(r, s, {
        get: (function(u) {
            return e[u];
        }).bind(null, s),
        enumerable: !(i = ta(e, s)) || i.enumerable
    });
    return r;
};
var G = function(r, e, t) {
    return t = r != null ? ea(aa(r)) : {}, na(e || !r || !r.__esModule ? _t(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r);
};
var Q = B(function(Zi, ht) {
    var xe;
    typeof window != "undefined" ? xe = window : ("TURBOPACK compile-time truthy", 1) ? xe = /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
    ht.exports = xe;
});
function U(r, e) {
    return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](r) : U(r, e);
}
var te = ft(function() {
    te();
});
function Ne(r) {
    "@swc/helpers - typeof";
    return r && typeof Symbol != "undefined" && r.constructor === Symbol ? "symbol" : typeof r;
}
var Qe = ft(function() {});
var Ye = B(function(qs, cr) {
    var dr = Array.prototype.slice;
    cr.exports = Na;
    function Na(r, e) {
        for(("length" in r) || (r = [
            r
        ]), r = dr.call(r); r.length;){
            var t = r.shift(), i = e(t);
            if (i) return i;
            t.childNodes && t.childNodes.length && (r = dr.call(t.childNodes).concat(r));
        }
    }
});
var fr = B(function(Ps, _r) {
    te();
    _r.exports = ve;
    function ve(r, e) {
        if (!U(this, ve)) return new ve(r, e);
        this.data = r, this.nodeValue = r, this.length = r.length, this.ownerDocument = e || null;
    }
    ve.prototype.nodeType = 8;
    ve.prototype.nodeName = "#comment";
    ve.prototype.toString = function() {
        return "[object Comment]";
    };
});
var mr = B(function(Ls, pr) {
    te();
    pr.exports = ae;
    function ae(r, e) {
        if (!U(this, ae)) return new ae(r);
        this.data = r || "", this.length = this.data.length, this.ownerDocument = e || null;
    }
    ae.prototype.type = "DOMTextNode";
    ae.prototype.nodeType = 3;
    ae.prototype.nodeName = "#text";
    ae.prototype.toString = function() {
        return this.data;
    };
    ae.prototype.replaceData = function(e, t, i) {
        var a = this.data, n = a.substring(0, e), o = a.substring(e + t, a.length);
        this.data = n + i + o, this.length = this.data.length;
    };
});
var Xe = B(function(Is, vr) {
    vr.exports = Ca;
    function Ca(r) {
        var e = this, t = r.type;
        r.target || (r.target = e), e.listeners || (e.listeners = {});
        var i = e.listeners[t];
        if (i) return i.forEach(function(a) {
            r.currentTarget = e, typeof a == "function" ? a(r) : a.handleEvent(r);
        });
        e.parentNode && e.parentNode.dispatchEvent(r);
    }
});
var $e = B(function(Ns, hr) {
    hr.exports = Ma;
    function Ma(r, e) {
        var t = this;
        t.listeners || (t.listeners = {}), t.listeners[r] || (t.listeners[r] = []), t.listeners[r].indexOf(e) === -1 && t.listeners[r].push(e);
    }
});
var Ze = B(function(Cs, yr) {
    yr.exports = Ha;
    function Ha(r, e) {
        var t = this;
        if (t.listeners && t.listeners[r]) {
            var i = t.listeners[r], a = i.indexOf(e);
            a !== -1 && i.splice(a, 1);
        }
    }
});
var wr = B(function(Hs, Tr) {
    Qe();
    Tr.exports = gr;
    var Ba = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "keygen",
        "link",
        "menuitem",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ];
    function gr(r) {
        switch(r.nodeType){
            case 3:
                return et(r.data);
            case 8:
                return "<!--" + r.data + "-->";
            default:
                return Ua(r);
        }
    }
    function Ua(r) {
        var e = [], t = r.tagName;
        return r.namespaceURI === "http://www.w3.org/1999/xhtml" && (t = t.toLowerCase()), e.push("<" + t + Wa(r) + ja(r)), Ba.indexOf(t) > -1 ? e.push(" />") : (e.push(">"), r.childNodes.length ? e.push.apply(e, r.childNodes.map(gr)) : r.textContent || r.innerText ? e.push(et(r.textContent || r.innerText)) : r.innerHTML && e.push(r.innerHTML), e.push("</" + t + ">")), e.join("");
    }
    function Fa(r, e) {
        var t = Ne(r[e]);
        return e === "style" && Object.keys(r.style).length > 0 ? !0 : r.hasOwnProperty(e) && (t === "string" || t === "boolean" || t === "number") && e !== "nodeName" && e !== "className" && e !== "tagName" && e !== "textContent" && e !== "innerText" && e !== "namespaceURI" && e !== "innerHTML";
    }
    function Va(r) {
        if (typeof r == "string") return r;
        var e = "";
        return Object.keys(r).forEach(function(t) {
            var i = r[t];
            t = t.replace(/[A-Z]/g, function(a) {
                return "-" + a.toLowerCase();
            }), e += t + ":" + i + ";";
        }), e;
    }
    function ja(r) {
        var e = r.dataset, t = [];
        for(var i in e)t.push({
            name: "data-" + i,
            value: e[i]
        });
        return t.length ? br(t) : "";
    }
    function br(r) {
        var e = [];
        return r.forEach(function(t) {
            var i = t.name, a = t.value;
            i === "style" && (a = Va(a)), e.push(i + '="' + Ga(a) + '"');
        }), e.length ? " " + e.join(" ") : "";
    }
    function Wa(r) {
        var e = [];
        for(var t in r)Fa(r, t) && e.push({
            name: t,
            value: r[t]
        });
        for(var i in r._attributes)for(var a in r._attributes[i]){
            var n = r._attributes[i][a], o = (n.prefix ? n.prefix + ":" : "") + a;
            e.push({
                name: o,
                value: n.value
            });
        }
        return r.className && e.push({
            name: "class",
            value: r.className
        }), e.length ? br(e) : "";
    }
    function et(r) {
        var e = "";
        return typeof r == "string" ? e = r : r && (e = r.toString()), e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function Ga(r) {
        return et(r).replace(/"/g, "&quot;");
    }
});
var rt = B(function(Us, Er) {
    te();
    var tt = Ye(), Ja = Xe(), Qa = $e(), za = Ze(), Ka = wr(), kr = "http://www.w3.org/1999/xhtml";
    Er.exports = L;
    function L(r, e, t) {
        if (!U(this, L)) return new L(r);
        var i = t === void 0 ? kr : t || null;
        this.tagName = i === kr ? String(r).toUpperCase() : r, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = e || null, this.namespaceURI = i, this._attributes = {}, this.tagName === "INPUT" && (this.type = "text");
    }
    L.prototype.type = "DOMElement";
    L.prototype.nodeType = 1;
    L.prototype.appendChild = function(e) {
        return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), e.parentNode = this, e;
    };
    L.prototype.replaceChild = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = this.childNodes.indexOf(t);
        return t.parentNode = null, this.childNodes[i] = e, e.parentNode = this, t;
    };
    L.prototype.removeChild = function(e) {
        var t = this.childNodes.indexOf(e);
        return this.childNodes.splice(t, 1), e.parentNode = null, e;
    };
    L.prototype.insertBefore = function(e, t) {
        e.parentNode && e.parentNode.removeChild(e);
        var i = t == null ? -1 : this.childNodes.indexOf(t);
        return i > -1 ? this.childNodes.splice(i, 0, e) : this.childNodes.push(e), e.parentNode = this, e;
    };
    L.prototype.setAttributeNS = function(e, t, i) {
        var a = null, n = t, o = t.indexOf(":");
        if (o > -1 && (a = t.substr(0, o), n = t.substr(o + 1)), this.tagName === "INPUT" && t === "type") this.type = i;
        else {
            var s = this._attributes[e] || (this._attributes[e] = {});
            s[n] = {
                value: i,
                prefix: a
            };
        }
    };
    L.prototype.getAttributeNS = function(e, t) {
        var i = this._attributes[e], a = i && i[t] && i[t].value;
        return this.tagName === "INPUT" && t === "type" ? this.type : typeof a != "string" ? null : a;
    };
    L.prototype.removeAttributeNS = function(e, t) {
        var i = this._attributes[e];
        i && delete i[t];
    };
    L.prototype.hasAttributeNS = function(e, t) {
        var i = this._attributes[e];
        return !!i && t in i;
    };
    L.prototype.setAttribute = function(e, t) {
        return this.setAttributeNS(null, e, t);
    };
    L.prototype.getAttribute = function(e) {
        return this.getAttributeNS(null, e);
    };
    L.prototype.removeAttribute = function(e) {
        return this.removeAttributeNS(null, e);
    };
    L.prototype.hasAttribute = function(e) {
        return this.hasAttributeNS(null, e);
    };
    L.prototype.removeEventListener = za;
    L.prototype.addEventListener = Qa;
    L.prototype.dispatchEvent = Ja;
    L.prototype.focus = function() {};
    L.prototype.toString = function() {
        return Ka(this);
    };
    L.prototype.getElementsByClassName = function(e) {
        var t = e.split(" "), i = [];
        return tt(this, function(a) {
            if (a.nodeType === 1) {
                var n = a.className || "", o = n.split(" ");
                t.every(function(s) {
                    return o.indexOf(s) !== -1;
                }) && i.push(a);
            }
        }), i;
    };
    L.prototype.getElementsByTagName = function(e) {
        e = e.toLowerCase();
        var t = [];
        return tt(this.childNodes, function(i) {
            i.nodeType === 1 && (e === "*" || i.tagName.toLowerCase() === e) && t.push(i);
        }), t;
    };
    L.prototype.contains = function(e) {
        return tt(this, function(t) {
            return e === t;
        }) || !1;
    };
});
var Sr = B(function(Vs, xr) {
    te();
    var at = rt();
    xr.exports = K;
    function K(r) {
        if (!U(this, K)) return new K;
        this.childNodes = [], this.parentNode = null, this.ownerDocument = r || null;
    }
    K.prototype.type = "DocumentFragment";
    K.prototype.nodeType = 11;
    K.prototype.nodeName = "#document-fragment";
    K.prototype.appendChild = at.prototype.appendChild;
    K.prototype.replaceChild = at.prototype.replaceChild;
    K.prototype.removeChild = at.prototype.removeChild;
    K.prototype.toString = function() {
        return this.childNodes.map(function(e) {
            return String(e);
        }).join("");
    };
});
var Rr = B(function(js, Dr) {
    Dr.exports = it;
    function it(r) {}
    it.prototype.initEvent = function(e, t, i) {
        this.type = e, this.bubbles = t, this.cancelable = i;
    };
    it.prototype.preventDefault = function() {};
});
var Ar = B(function(Gs, qr) {
    te();
    var Ya = Ye(), Xa = fr(), $a = mr(), Re = rt(), Za = Sr(), ei = Rr(), ti = Xe(), ri = $e(), ai = Ze();
    qr.exports = Ue;
    function Ue() {
        if (!U(this, Ue)) return new Ue;
        this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [
            this.documentElement
        ], this.nodeType = 9;
    }
    var j = Ue.prototype;
    j.createTextNode = function(e) {
        return new $a(e, this);
    };
    j.createElementNS = function(e, t) {
        var i = e === null ? null : String(e);
        return new Re(t, this, i);
    };
    j.createElement = function(e) {
        return new Re(e, this);
    };
    j.createDocumentFragment = function() {
        return new Za(this);
    };
    j.createEvent = function(e) {
        return new ei(e);
    };
    j.createComment = function(e) {
        return new Xa(e, this);
    };
    j.getElementById = function(e) {
        e = String(e);
        var t = Ya(this.childNodes, function(i) {
            if (String(i.id) === e) return i;
        });
        return t || null;
    };
    j.getElementsByClassName = Re.prototype.getElementsByClassName;
    j.getElementsByTagName = Re.prototype.getElementsByTagName;
    j.contains = Re.prototype.contains;
    j.removeEventListener = ai;
    j.addEventListener = ri;
    j.dispatchEvent = ti;
});
var Or = B(function(Js, Pr) {
    var ii = Ar();
    Pr.exports = new ii;
});
var nt = B(function(Qs, Ir) {
    var Lr = ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable", ni = Or(), qe;
    typeof document != "undefined" ? qe = document : (qe = Lr["__GLOBAL_DOCUMENT_CACHE@4"], qe || (qe = Lr["__GLOBAL_DOCUMENT_CACHE@4"] = ni));
    Ir.exports = qe;
});
function pt(r) {
    if (Array.isArray(r)) return r;
}
function mt(r, e) {
    var t = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
        var i = [], a = !0, n = !1, o, s;
        try {
            for(t = t.call(r); !(a = (o = t.next()).done) && (i.push(o.value), !(e && i.length === e)); a = !0);
        } catch (u) {
            n = !0, s = u;
        } finally{
            try {
                !a && t.return != null && t.return();
            } finally{
                if (n) throw s;
            }
        }
        return i;
    }
}
function vt() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Ee(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for(var t = 0, i = new Array(e); t < e; t++)i[t] = r[t];
    return i;
}
function Pe(r, e) {
    if (r) {
        if (typeof r == "string") return Ee(r, e);
        var t = Object.prototype.toString.call(r).slice(8, -1);
        if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(t);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ee(r, e);
    }
}
function H(r, e) {
    return pt(r) || mt(r, e) || Pe(r, e) || vt();
}
var be = G(Q());
var Je = G(Q());
var yt = G(Q()), oa = {
    now: function() {
        var r = yt.default.performance, e = r && r.timing, t = e && e.navigationStart, i = typeof t == "number" && typeof r.now == "function" ? t + r.now() : Date.now();
        return Math.round(i);
    }
}, A = oa;
var ee = function() {
    var e, t, i;
    if (typeof ((e = Je.default.crypto) === null || e === void 0 ? void 0 : e.getRandomValues) == "function") {
        i = new Uint8Array(32), Je.default.crypto.getRandomValues(i);
        for(var a = 0; a < 32; a++)i[a] = i[a] % 16;
    } else {
        i = [];
        for(var n = 0; n < 32; n++)i[n] = Math.random() * 16 | 0;
    }
    var o = 0;
    t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(f) {
        var h = f === "x" ? i[o] : i[o] & 3 | 8;
        return o++, h.toString(16);
    });
    var s = A.now(), u = s == null ? void 0 : s.toString(16).substring(3);
    return u ? t.substring(0, 28) + u : t;
}, Oe = function() {
    return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
};
var J = function(e) {
    if (e && typeof e.nodeName != "undefined") return e.muxId || (e.muxId = Oe()), e.muxId;
    var t;
    try {
        t = document.querySelector(e);
    } catch (i) {}
    return t && !t.muxId && (t.muxId = e), (t == null ? void 0 : t.muxId) || e;
}, se = function(e) {
    var t;
    e && typeof e.nodeName != "undefined" ? (t = e, e = J(t)) : t = document.querySelector(e);
    var i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
    return [
        t,
        e,
        i
    ];
};
function gt(r) {
    if (Array.isArray(r)) return Ee(r);
}
function bt(r) {
    if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Tt() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function V(r) {
    return gt(r) || bt(r) || Pe(r) || Tt();
}
var Y = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    SILENT: 5
}, wt = function(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, t, i, a, n, o, s = r ? [
        console,
        r
    ] : [
        console
    ], u = (t = console.trace).bind.apply(t, V(s)), f = (i = console.info).bind.apply(i, V(s)), h = (a = console.debug).bind.apply(a, V(s)), E = (n = console.warn).bind.apply(n, V(s)), y = (o = console.error).bind.apply(o, V(s)), c = e;
    return {
        trace: function() {
            for(var T = arguments.length, x = new Array(T), v = 0; v < T; v++)x[v] = arguments[v];
            if (!(c > Y.TRACE)) return u.apply(void 0, V(x));
        },
        debug: function() {
            for(var T = arguments.length, x = new Array(T), v = 0; v < T; v++)x[v] = arguments[v];
            if (!(c > Y.DEBUG)) return h.apply(void 0, V(x));
        },
        info: function() {
            for(var T = arguments.length, x = new Array(T), v = 0; v < T; v++)x[v] = arguments[v];
            if (!(c > Y.INFO)) return f.apply(void 0, V(x));
        },
        warn: function() {
            for(var T = arguments.length, x = new Array(T), v = 0; v < T; v++)x[v] = arguments[v];
            if (!(c > Y.WARN)) return E.apply(void 0, V(x));
        },
        error: function() {
            for(var T = arguments.length, x = new Array(T), v = 0; v < T; v++)x[v] = arguments[v];
            if (!(c > Y.ERROR)) return y.apply(void 0, V(x));
        },
        get level () {
            return c;
        },
        set level (p){
            p !== this.level && (c = p != null ? p : e);
        }
    };
};
var q = wt("[mux]");
var Le = G(Q());
function ce() {
    var r = Le.default.doNotTrack || Le.default.navigator && Le.default.navigator.doNotTrack;
    return r === "1";
}
function b(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
}
te();
function S(r, e) {
    if (!U(r, e)) throw new TypeError("Cannot call a class as a function");
}
function kt(r, e) {
    for(var t = 0; t < e.length; t++){
        var i = e[t];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
    }
}
function N(r, e, t) {
    return e && kt(r.prototype, e), t && kt(r, t), r;
}
function l(r, e, t) {
    return e in r ? Object.defineProperty(r, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[e] = t, r;
}
function X(r) {
    return X = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, X(r);
}
function Et(r, e) {
    for(; !Object.prototype.hasOwnProperty.call(r, e) && (r = X(r), r !== null););
    return r;
}
function Se(r, e, t) {
    return typeof Reflect != "undefined" && Reflect.get ? Se = Reflect.get : Se = function(a, n, o) {
        var s = Et(a, n);
        if (s) {
            var u = Object.getOwnPropertyDescriptor(s, n);
            return u.get ? u.get.call(o || a) : u.value;
        }
    }, Se(r, e, t || r);
}
function Ie(r, e) {
    return Ie = Object.setPrototypeOf || function(i, a) {
        return i.__proto__ = a, i;
    }, Ie(r, e);
}
function xt(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    r.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: r,
            writable: !0,
            configurable: !0
        }
    }), e && Ie(r, e);
}
function St(r, e) {
    if (r == null) return {};
    var t = {}, i = Object.keys(r), a, n;
    for(n = 0; n < i.length; n++)a = i[n], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
    return t;
}
function Dt(r, e) {
    if (r == null) return {};
    var t = St(r, e), i, a;
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(r);
        for(a = 0; a < n.length; a++)i = n[a], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
    }
    return t;
}
function Rt() {
    if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
    } catch (r) {
        return !1;
    }
}
Qe();
function qt(r, e) {
    return e && (Ne(e) === "object" || typeof e == "function") ? e : b(r);
}
function At(r) {
    var e = Rt();
    return function() {
        var i = X(r), a;
        if (e) {
            var n = X(this).constructor;
            a = Reflect.construct(i, arguments, n);
        } else a = i.apply(this, arguments);
        return qt(this, a);
    };
}
var F = function(r) {
    return re(r)[0];
};
var re = function(r) {
    if (typeof r != "string" || r === "") return [
        "localhost"
    ];
    var e = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, t = r.match(e) || [], i = t[4], a;
    return i && (a = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [
        i,
        a
    ];
};
var Ce = G(Q()), sa = {
    exists: function() {
        var r = Ce.default.performance, e = r && r.timing;
        return e !== void 0;
    },
    domContentLoadedEventEnd: function() {
        var r = Ce.default.performance, e = r && r.timing;
        return e && e.domContentLoadedEventEnd;
    },
    navigationStart: function() {
        var r = Ce.default.performance, e = r && r.timing;
        return e && e.navigationStart;
    }
}, _e = sa;
function P(r, e, t) {
    t = t === void 0 ? 1 : t, r[e] = r[e] || 0, r[e] += t;
}
function ue(r) {
    for(var e = 1; e < arguments.length; e++){
        var t = arguments[e] != null ? arguments[e] : {}, i = Object.keys(t);
        typeof Object.getOwnPropertySymbols == "function" && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable;
        }))), i.forEach(function(a) {
            l(r, a, t[a]);
        });
    }
    return r;
}
function ua(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(r);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(r, a).enumerable;
        })), t.push.apply(t, i);
    }
    return t;
}
function fe(r, e) {
    return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : ua(Object(e)).forEach(function(t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
    }), r;
}
var la = [
    "x-cdn",
    "content-type"
], Pt = [
    "x-request-id",
    "cf-ray",
    "x-amz-cf-id",
    "x-akamai-request-id"
], da = la.concat(Pt);
function pe(r) {
    r = r || "";
    var e = {}, t = r.trim().split(/[\r\n]+/);
    return t.forEach(function(i) {
        if (i) {
            var a = i.split(": "), n = a.shift();
            n && (da.indexOf(n.toLowerCase()) >= 0 || n.toLowerCase().indexOf("x-litix-") === 0) && (e[n] = a.join(": "));
        }
    }), e;
}
function le(r) {
    if (r) {
        var e = Pt.find(function(t) {
            return r[t] !== void 0;
        });
        return e ? r[e] : void 0;
    }
}
var ca = function(r) {
    var e = {};
    for(var t in r){
        var i = r[t], a = i["DATA-ID"].search("io.litix.data.");
        if (a !== -1) {
            var n = i["DATA-ID"].replace("io.litix.data.", "");
            e[n] = i.VALUE;
        }
    }
    return e;
}, Me = ca;
var He = function(r) {
    if (!r) return {};
    var e = _e.navigationStart(), t = r.loading, i = t ? t.start : r.trequest, a = t ? t.first : r.tfirst, n = t ? t.end : r.tload;
    return {
        bytesLoaded: r.total,
        requestStart: Math.round(e + i),
        responseStart: Math.round(e + a),
        responseEnd: Math.round(e + n)
    };
}, De = function(r) {
    if (!(!r || typeof r.getAllResponseHeaders != "function")) return pe(r.getAllResponseHeaders());
}, Ot = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : void 0, n = r.log, o = r.utils.secondsToMs, s = function(v) {
        var m = parseInt(a.version), _;
        return m === 1 && v.programDateTime !== null && (_ = v.programDateTime), m === 0 && v.pdt !== null && (_ = v.pdt), _;
    };
    if (!_e.exists()) {
        n.warn("performance timing not supported. Not tracking HLS.js.");
        return;
    }
    var u = function(v, m) {
        return r.emit(e, v, m);
    }, f = function(v, m) {
        var _ = m.levels, d = m.audioTracks, g = m.url, w = m.stats, k = m.networkDetails, D = m.sessionData, I = {}, M = {};
        _.forEach(function(W, oe) {
            I[oe] = {
                width: W.width,
                height: W.height,
                bitrate: W.bitrate,
                attrs: W.attrs
            };
        }), d.forEach(function(W, oe) {
            M[oe] = {
                name: W.name,
                language: W.lang,
                bitrate: W.bitrate
            };
        });
        var O = He(w), R = O.bytesLoaded, Z = O.requestStart, Te = O.responseStart, we = O.responseEnd;
        u("requestcompleted", fe(ue({}, Me(D)), {
            request_event_type: v,
            request_bytes_loaded: R,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_type: "manifest",
            request_hostname: F(g),
            request_response_headers: De(k),
            request_rendition_lists: {
                media: I,
                audio: M,
                video: {}
            }
        }));
    };
    t.on(a.Events.MANIFEST_LOADED, f);
    var h = function(v, m) {
        var _ = m.details, d = m.level, g = m.networkDetails, w = m.stats, k = He(w), D = k.bytesLoaded, I = k.requestStart, M = k.responseStart, O = k.responseEnd, R = _.fragments[_.fragments.length - 1], Z = s(R) + o(R.duration);
        u("requestcompleted", {
            request_event_type: v,
            request_bytes_loaded: D,
            request_start: I,
            request_response_start: M,
            request_response_end: O,
            request_current_level: d,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: De(g),
            video_holdback: _.holdBack && o(_.holdBack),
            video_part_holdback: _.partHoldBack && o(_.partHoldBack),
            video_part_target_duration: _.partTarget && o(_.partTarget),
            video_target_duration: _.targetduration && o(_.targetduration),
            video_source_is_live: _.live,
            player_manifest_newest_program_time: isNaN(Z) ? void 0 : Z
        });
    };
    t.on(a.Events.LEVEL_LOADED, h);
    var E = function(v, m) {
        var _ = m.details, d = m.networkDetails, g = m.stats, w = He(g), k = w.bytesLoaded, D = w.requestStart, I = w.responseStart, M = w.responseEnd;
        u("requestcompleted", {
            request_event_type: v,
            request_bytes_loaded: k,
            request_start: D,
            request_response_start: I,
            request_response_end: M,
            request_type: "manifest",
            request_hostname: F(_.url),
            request_response_headers: De(d)
        });
    };
    t.on(a.Events.AUDIO_TRACK_LOADED, E);
    var y = function(v, m) {
        var _ = m.stats, d = m.networkDetails, g = m.frag;
        _ = _ || g.stats;
        var w = He(_), k = w.bytesLoaded, D = w.requestStart, I = w.responseStart, M = w.responseEnd, O = d ? De(d) : void 0, R = {
            request_event_type: v,
            request_bytes_loaded: k,
            request_start: D,
            request_response_start: I,
            request_response_end: M,
            request_hostname: d ? F(d.responseURL) : void 0,
            request_id: O ? le(O) : void 0,
            request_response_headers: O,
            request_media_duration: g.duration,
            request_url: d == null ? void 0 : d.responseURL
        };
        g.type === "main" ? (R.request_type = "media", R.request_current_level = g.level, R.request_video_width = (t.levels[g.level] || {}).width, R.request_video_height = (t.levels[g.level] || {}).height, R.request_labeled_bitrate = (t.levels[g.level] || {}).bitrate) : R.request_type = g.type, u("requestcompleted", R);
    };
    t.on(a.Events.FRAG_LOADED, y);
    var c = function(v, m) {
        var _ = m.frag, d = _.start, g = s(_), w = {
            currentFragmentPDT: g,
            currentFragmentStart: o(d)
        };
        u("fragmentchange", w);
    };
    t.on(a.Events.FRAG_CHANGED, c);
    var p1 = function(v, m) {
        var _ = m.type, d = m.details, g = m.response, w = m.fatal, k = m.frag, D = m.networkDetails, I = (k == null ? void 0 : k.url) || m.url || "", M = D ? De(D) : void 0;
        if ((d === a.ErrorDetails.MANIFEST_LOAD_ERROR || d === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT || d === a.ErrorDetails.LEVEL_LOAD_ERROR || d === a.ErrorDetails.LEVEL_LOAD_TIMEOUT || d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT) && u("requestfailed", {
            request_error: d,
            request_url: I,
            request_hostname: F(I),
            request_id: M ? le(M) : void 0,
            request_type: d === a.ErrorDetails.FRAG_LOAD_ERROR || d === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : d === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : d === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : d === a.ErrorDetails.KEY_LOAD_ERROR || d === a.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest",
            request_error_code: g == null ? void 0 : g.code,
            request_error_text: g == null ? void 0 : g.text
        }), w) {
            var O, R = "".concat(I ? "url: ".concat(I, "\n") : "") + "".concat(g && (g.code || g.text) ? "response: ".concat(g.code, ", ").concat(g.text, "\n") : "") + "".concat(m.reason ? "failure reason: ".concat(m.reason, "\n") : "") + "".concat(m.level ? "level: ".concat(m.level, "\n") : "") + "".concat(m.parent ? "parent stream controller: ".concat(m.parent, "\n") : "") + "".concat(m.buffer ? "buffer length: ".concat(m.buffer, "\n") : "") + "".concat(m.error ? "error: ".concat(m.error, "\n") : "") + "".concat(m.event ? "event: ".concat(m.event, "\n") : "") + "".concat(m.err ? "error message: ".concat((O = m.err) === null || O === void 0 ? void 0 : O.message, "\n") : "");
            u("error", {
                player_error_code: _,
                player_error_message: d,
                player_error_context: R
            });
        }
    };
    t.on(a.Events.ERROR, p1);
    var T = function(v, m) {
        var _ = m.frag, d = _ && _._url || "";
        u("requestcanceled", {
            request_event_type: v,
            request_url: d,
            request_type: "media",
            request_hostname: F(d)
        });
    };
    t.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T);
    var x = function(v, m) {
        var _ = m.level, d = t.levels[_];
        if (d && d.attrs && d.attrs.BANDWIDTH) {
            var g = d.attrs.BANDWIDTH, w, k = parseFloat(d.attrs["FRAME-RATE"]);
            isNaN(k) || (w = k), g ? u("renditionchange", {
                video_source_fps: w,
                video_source_bitrate: g,
                video_source_width: d.width,
                video_source_height: d.height,
                video_source_rendition_name: d.name,
                video_source_codec: d == null ? void 0 : d.videoCodec
            }) : n.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
        }
    };
    t.on(a.Events.LEVEL_SWITCHED, x), t._stopMuxMonitor = function() {
        t.off(a.Events.MANIFEST_LOADED, f), t.off(a.Events.LEVEL_LOADED, h), t.off(a.Events.AUDIO_TRACK_LOADED, E), t.off(a.Events.FRAG_LOADED, y), t.off(a.Events.FRAG_CHANGED, c), t.off(a.Events.ERROR, p1), t.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, T), t.off(a.Events.LEVEL_SWITCHED, x), t.off(a.Events.DESTROYING, t._stopMuxMonitor), delete t._stopMuxMonitor;
    }, t.on(a.Events.DESTROYING, t._stopMuxMonitor);
}, Lt = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var It = function(r, e) {
    if (!r || !r.requestEndDate) return {};
    var t = F(r.url), i = r.url, a = r.bytesLoaded, n = new Date(r.requestStartDate).getTime(), o = new Date(r.firstByteDate).getTime(), s = new Date(r.requestEndDate).getTime(), u = isNaN(r.duration) ? 0 : r.duration, f = typeof e.getMetricsFor == "function" ? e.getMetricsFor(r.mediaType).HttpList : e.getDashMetrics().getHttpRequests(r.mediaType), h;
    f.length > 0 && (h = pe(f[f.length - 1]._responseHeaders || ""));
    var E = h ? le(h) : void 0;
    return {
        requestStart: n,
        requestResponseStart: o,
        requestResponseEnd: s,
        requestBytesLoaded: a,
        requestResponseHeaders: h,
        requestMediaDuration: u,
        requestHostname: t,
        requestUrl: i,
        requestId: E
    };
}, _a = function(r, e) {
    var t = e.getQualityFor(r), i = e.getCurrentTrackFor(r).bitrateList;
    return i ? {
        currentLevel: t,
        renditionWidth: i[t].width || null,
        renditionHeight: i[t].height || null,
        renditionBitrate: i[t].bandwidth
    } : {};
}, fa = function(r) {
    var e;
    return (e = r.match(/.*codecs\*?="(.*)"/)) === null || e === void 0 ? void 0 : e[1];
}, pa = function(e) {
    try {
        var t, i, a = (i = e.getVersion) === null || i === void 0 || (t = i.call(e)) === null || t === void 0 ? void 0 : t.split(".").map(function(n) {
            return parseInt(n);
        })[0];
        return a;
    } catch (n) {
        return !1;
    }
}, Nt = function(r, e, t) {
    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r.log;
    if (!t || !t.on) {
        a.warn("Invalid dash.js player reference. Monitoring blocked.");
        return;
    }
    var n = pa(t), o = function(_, d) {
        return r.emit(e, _, d);
    }, s = function(_) {
        var d = _.type, g = _.data, w = (g || {}).url;
        o("requestcompleted", {
            request_event_type: d,
            request_start: 0,
            request_response_start: 0,
            request_response_end: 0,
            request_bytes_loaded: -1,
            request_type: "manifest",
            request_hostname: F(w),
            request_url: w
        });
    };
    t.on("manifestLoaded", s);
    var u = {}, f = function(_) {
        if (typeof _.getRequests != "function") return null;
        var d = _.getRequests({
            state: "executed"
        });
        return d.length === 0 ? null : d[d.length - 1];
    }, h = function(_) {
        var d = _.type, g = _.fragmentModel, w = _.chunk, k = f(g);
        E({
            type: d,
            request: k,
            chunk: w
        });
    }, E = function(_) {
        var d = _.type, g = _.chunk, w = _.request, k = (g || {}).mediaInfo, D = k || {}, I = D.type, M = D.bitrateList;
        M = M || [];
        var O = {};
        M.forEach(function(ke, z) {
            O[z] = {}, O[z].width = ke.width, O[z].height = ke.height, O[z].bitrate = ke.bandwidth, O[z].attrs = {};
        }), I === "video" ? u.video = O : I === "audio" ? u.audio = O : u.media = O;
        var R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, W = R.requestResponseHeaders, oe = R.requestMediaDuration, je = R.requestHostname, We = R.requestUrl, Ge = R.requestId;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: -1,
            request_type: I + "_init",
            request_response_headers: W,
            request_hostname: je,
            request_id: Ge,
            request_url: We,
            request_media_duration: oe,
            request_rendition_lists: u
        });
    };
    n >= 4 ? t.on("initFragmentLoaded", E) : t.on("initFragmentLoaded", h);
    var y = function(_) {
        var d = _.type, g = _.fragmentModel, w = _.chunk, k = f(g);
        c({
            type: d,
            request: k,
            chunk: w
        });
    }, c = function(_) {
        var d = _.type, g = _.chunk, w = _.request, k = g || {}, D = k.mediaInfo, I = k.start, M = D || {}, O = M.type, R = It(w, t), Z = R.requestStart, Te = R.requestResponseStart, we = R.requestResponseEnd, W = R.requestBytesLoaded, oe = R.requestResponseHeaders, je = R.requestMediaDuration, We = R.requestHostname, Ge = R.requestUrl, ke = R.requestId, z = _a(O, t), Yr = z.currentLevel, Xr = z.renditionWidth, $r = z.renditionHeight, Zr = z.renditionBitrate;
        o("requestcompleted", {
            request_event_type: d,
            request_start: Z,
            request_response_start: Te,
            request_response_end: we,
            request_bytes_loaded: W,
            request_type: O,
            request_response_headers: oe,
            request_hostname: We,
            request_id: ke,
            request_url: Ge,
            request_media_start_time: I,
            request_media_duration: je,
            request_current_level: Yr,
            request_labeled_bitrate: Zr,
            request_video_width: Xr,
            request_video_height: $r
        });
    };
    n >= 4 ? t.on("mediaFragmentLoaded", c) : t.on("mediaFragmentLoaded", y);
    var p1 = {
        video: void 0,
        audio: void 0,
        totalBitrate: void 0
    }, T = function() {
        if (p1.video && typeof p1.video.bitrate == "number") {
            if (!(p1.video.width && p1.video.height)) {
                a.warn("have bitrate info for video but missing width/height");
                return;
            }
            var _ = p1.video.bitrate;
            if (p1.audio && typeof p1.audio.bitrate == "number" && (_ += p1.audio.bitrate), _ !== p1.totalBitrate) return p1.totalBitrate = _, {
                video_source_bitrate: _,
                video_source_height: p1.video.height,
                video_source_width: p1.video.width,
                video_source_codec: fa(p1.video.codec)
            };
        }
    }, x = function(_, d, g) {
        if (typeof _.newQuality != "number") {
            a.warn("missing evt.newQuality in qualityChangeRendered event", _);
            return;
        }
        var w = _.mediaType;
        if (w === "audio" || w === "video") {
            var k = t.getBitrateInfoListFor(w).find(function(I) {
                var M = I.qualityIndex;
                return M === _.newQuality;
            });
            if (!(k && typeof k.bitrate == "number")) {
                a.warn("missing bitrate info for ".concat(w));
                return;
            }
            p1[w] = fe(ue({}, k), {
                codec: t.getCurrentTrackFor(w).codec
            });
            var D = T();
            D && o("renditionchange", D);
        }
    };
    t.on("qualityChangeRendered", x);
    var v = function(_) {
        var d = _.request, g = _.mediaType;
        d = d || {}, o("requestcanceled", {
            request_event_type: d.type + "_" + d.action,
            request_url: d.url,
            request_type: g,
            request_hostname: F(d.url)
        });
    };
    t.on("fragmentLoadingAbandoned", v);
    var m = function(_) {
        var d = _.error, g, w, k = (d == null || (g = d.data) === null || g === void 0 ? void 0 : g.request) || {}, D = (d == null || (w = d.data) === null || w === void 0 ? void 0 : w.response) || {};
        (d == null ? void 0 : d.code) === 27 && o("requestfailed", {
            request_error: k.type + "_" + k.action,
            request_url: k.url,
            request_hostname: F(k.url),
            request_type: k.mediaType,
            request_error_code: D.status,
            request_error_text: D.statusText
        });
        var I = "".concat(k != null && k.url ? "url: ".concat(k.url, "\n") : "") + "".concat(D != null && D.status || D != null && D.statusText ? "response: ".concat(D == null ? void 0 : D.status, ", ").concat(D == null ? void 0 : D.statusText, "\n") : "");
        o("error", {
            player_error_code: d == null ? void 0 : d.code,
            player_error_message: d == null ? void 0 : d.message,
            player_error_context: I
        });
    };
    t.on("error", m), t._stopMuxMonitor = function() {
        t.off("manifestLoaded", s), t.off("initFragmentLoaded", E), t.off("mediaFragmentLoaded", c), t.off("qualityChangeRendered", x), t.off("error", m), t.off("fragmentLoadingAbandoned", v), delete t._stopMuxMonitor;
    };
}, Ct = function(r) {
    r && typeof r._stopMuxMonitor == "function" && r._stopMuxMonitor();
};
var Mt = 0, ma = function() {
    "use strict";
    function r() {
        S(this, r), l(this, "_listeners", void 0);
    }
    return N(r, [
        {
            key: "on",
            value: function(t, i, a) {
                return i._eventEmitterGuid = i._eventEmitterGuid || ++Mt, this._listeners = this._listeners || {}, this._listeners[t] = this._listeners[t] || [], a && (i = i.bind(a)), this._listeners[t].push(i), i;
            }
        },
        {
            key: "off",
            value: function(t, i) {
                var a = this._listeners && this._listeners[t];
                a && a.forEach(function(n, o) {
                    n._eventEmitterGuid === i._eventEmitterGuid && a.splice(o, 1);
                });
            }
        },
        {
            key: "one",
            value: function(t, i, a) {
                var n = this;
                i._eventEmitterGuid = i._eventEmitterGuid || ++Mt;
                var o = function() {
                    n.off(t, o), i.apply(a || this, arguments);
                };
                o._eventEmitterGuid = i._eventEmitterGuid, this.on(t, o);
            }
        },
        {
            key: "emit",
            value: function(t, i) {
                var a = this;
                if (this._listeners) {
                    i = i || {};
                    var n = this._listeners["before" + t] || [], o = this._listeners["before*"] || [], s = this._listeners[t] || [], u = this._listeners["after" + t] || [], f = function(h, E) {
                        h = h.slice(), h.forEach(function(y) {
                            y.call(a, {
                                type: t
                            }, E);
                        });
                    };
                    f(n, i), f(o, i), f(s, i), f(u, i);
                }
            }
        }
    ]), r;
}(), Ht = ma;
var Be = G(Q()), va = function() {
    "use strict";
    function r(e) {
        var t = this;
        S(this, r), l(this, "_playbackHeartbeatInterval", void 0), l(this, "_playheadShouldBeProgressing", void 0), l(this, "pm", void 0), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, e.on("playing", function() {
            t._playheadShouldBeProgressing = !0;
        }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
            e.data.player_is_paused ? t._stopPlaybackHeartbeatInterval() : t._startPlaybackHeartbeatInterval();
        }), e.on("timeupdate", function() {
            t._playbackHeartbeatInterval !== null && e.emit("playbackheartbeat");
        }), e.on("devicesleep", function(i, a) {
            t._playbackHeartbeatInterval !== null && (Be.default.clearInterval(t._playbackHeartbeatInterval), e.emit("playbackheartbeatend", {
                viewer_time: a.viewer_time
            }), t._playbackHeartbeatInterval = null);
        });
    }
    return N(r, [
        {
            key: "_startPlaybackHeartbeatInterval",
            value: function() {
                var t = this;
                this._playbackHeartbeatInterval === null && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = Be.default.setInterval(function() {
                    t.pm.emit("playbackheartbeat");
                }, this.pm.playbackHeartbeatTime));
            }
        },
        {
            key: "_stopPlaybackHeartbeatInterval",
            value: function() {
                this._playheadShouldBeProgressing = !1, this._playbackHeartbeatInterval !== null && (Be.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
            }
        }
    ]), r;
}(), Bt = va;
var ha = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "viewErrored", void 0), e.on("viewinit", function() {
        t.viewErrored = !1;
    }), e.on("error", function(i, a) {
        try {
            var n = e.errorTranslator({
                player_error_code: a.player_error_code,
                player_error_message: a.player_error_message,
                player_error_context: a.player_error_context,
                player_error_severity: a.player_error_severity,
                player_error_business_exception: a.player_error_business_exception
            });
            n && (e.data.player_error_code = n.player_error_code || a.player_error_code, e.data.player_error_message = n.player_error_message || a.player_error_message, e.data.player_error_context = n.player_error_context || a.player_error_context, e.data.player_error_severity = n.player_error_severity || a.player_error_severity, e.data.player_error_business_exception = n.player_error_business_exception || a.player_error_business_exception, t.viewErrored = !0);
        } catch (o) {
            e.mux.log.warn("Exception in error translator callback.", o), t.viewErrored = !0;
        }
    }), e.on("aftererror", function() {
        var i, a, n, o, s;
        (i = e.data) === null || i === void 0 || delete i.player_error_code, (a = e.data) === null || a === void 0 || delete a.player_error_message, (n = e.data) === null || n === void 0 || delete n.player_error_context, (o = e.data) === null || o === void 0 || delete o.player_error_severity, (s = e.data) === null || s === void 0 || delete s.player_error_business_exception;
    });
}, Ut = ha;
var ya = function() {
    "use strict";
    function r(e) {
        S(this, r), l(this, "_watchTimeTrackerLastCheckedTime", void 0), l(this, "pm", void 0), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
    }
    return N(r, [
        {
            key: "_updateWatchTime",
            value: function(t, i) {
                var a = i.viewer_time;
                this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = a), P(this.pm.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a;
            }
        },
        {
            key: "_clearWatchTimeState",
            value: function(t, i) {
                this._updateWatchTime(t, i), this._watchTimeTrackerLastCheckedTime = null;
            }
        }
    ]), r;
}(), Ft = ya;
var ga = function() {
    "use strict";
    function r(e) {
        var t = this;
        S(this, r), l(this, "_playbackTimeTrackerLastPlayheadPosition", void 0), l(this, "_lastTime", void 0), l(this, "_isAdPlaying", void 0), l(this, "_callbackUpdatePlaybackTime", void 0), l(this, "pm", void 0), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = A.now(), this._isAdPlaying = !1, this._callbackUpdatePlaybackTime = null, e.on("viewinit", function() {
            t.pm.data.view_playing_time_ms_cumulative = 0;
        });
        var i = this._startPlaybackTimeTracking.bind(this);
        e.on("playing", i), e.on("adplaying", i), e.on("seeked", i), e.on("rebufferend", i);
        var a = this._stopPlaybackTimeTracking.bind(this);
        e.on("playbackheartbeatend", a), e.on("seeking", a), e.on("rebufferstart", a), e.on("adplaying", function() {
            t._isAdPlaying = !0;
        }), e.on("adended", function() {
            t._isAdPlaying = !1;
        }), e.on("adpause", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakstart", function() {
            t._isAdPlaying = !1;
        }), e.on("adbreakend", function() {
            t._isAdPlaying = !1;
        }), e.on("adplay", function() {
            t._isAdPlaying = !1;
        }), e.on("viewinit", function() {
            t._playbackTimeTrackerLastPlayheadPosition = -1, t._lastTime = A.now(), t._isAdPlaying = !1, t._callbackUpdatePlaybackTime = null;
        });
    }
    return N(r, [
        {
            key: "_startPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime === null && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this._lastTime = A.now(), this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
            }
        },
        {
            key: "_stopPlaybackTimeTracking",
            value: function() {
                this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1);
            }
        },
        {
            key: "_updatePlaybackTime",
            value: function() {
                var t = this.pm.data.player_playhead_time || 0, i = A.now(), a = i - this._lastTime, n = -1;
                this._playbackTimeTrackerLastPlayheadPosition >= 0 && t > this._playbackTimeTrackerLastPlayheadPosition ? n = t - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (n = a), n > 0 && n <= 1e3 && P(this.pm.data, "view_content_playback_time", n), this._callbackUpdatePlaybackTime !== null && a > 0 && a <= 1e3 && (this._isAdPlaying && P(this.pm.data, "ad_playing_time_ms_cumulative", a), P(this.pm.data, "view_playing_time_ms_cumulative", a)), this._playbackTimeTrackerLastPlayheadPosition = t, this._lastTime = i;
            }
        }
    ]), r;
}(), Vt = ga;
var ba = function() {
    "use strict";
    function r(e) {
        S(this, r), l(this, "pm", void 0), this.pm = e;
        var t = this._updatePlayheadTime.bind(this);
        e.on("playbackheartbeat", t), e.on("playbackheartbeatend", t), e.on("timeupdate", t), e.on("destroy", function() {
            e.off("timeupdate", t);
        });
    }
    return N(r, [
        {
            key: "_updateMaxPlayheadPosition",
            value: function() {
                this.pm.data.view_max_playhead_position = typeof this.pm.data.view_max_playhead_position == "undefined" ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
            }
        },
        {
            key: "_updatePlayheadTime",
            value: function(t, i) {
                var a = this, n = function() {
                    a.pm.currentFragmentPDT && a.pm.currentFragmentStart && (a.pm.data.player_program_time = a.pm.currentFragmentPDT + a.pm.data.player_playhead_time - a.pm.currentFragmentStart);
                };
                if (i && i.player_playhead_time) this.pm.data.player_playhead_time = i.player_playhead_time, n(), this._updateMaxPlayheadPosition();
                else if (this.pm.getPlayheadTime) {
                    var o = this.pm.getPlayheadTime();
                    typeof o != "undefined" && (this.pm.data.player_playhead_time = o, n(), this._updateMaxPlayheadPosition());
                }
            }
        }
    ]), r;
}(), jt = ba;
var Wt = 5 * 60 * 1e3, Ta = function r(e) {
    "use strict";
    if (S(this, r), !e.disableRebufferTracking) {
        var t, i = function(n, o) {
            a(o), t = void 0;
        }, a = function(n) {
            if (t) {
                var o = n.viewer_time - t;
                P(e.data, "view_rebuffer_duration", o), t = n.viewer_time, e.data.view_rebuffer_duration > Wt && (e.emit("viewend"), e.send("viewend"), e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Wt, "ms, future events will be ignored unless a programchange or videochange occurs.")));
            }
            e.data.view_watch_time >= 0 && e.data.view_rebuffer_count > 0 && (e.data.view_rebuffer_frequency = e.data.view_rebuffer_count / e.data.view_watch_time, e.data.view_rebuffer_percentage = e.data.view_rebuffer_duration / e.data.view_watch_time);
        };
        e.on("playbackheartbeat", function(n, o) {
            return a(o);
        }), e.on("rebufferstart", function(n, o) {
            t || (P(e.data, "view_rebuffer_count", 1), t = o.viewer_time, e.one("rebufferend", i));
        }), e.on("viewinit", function() {
            t = void 0, e.off("rebufferend", i);
        });
    }
}, Gt = Ta;
var wa = function() {
    "use strict";
    function r(e) {
        var t = this;
        S(this, r), l(this, "_lastCheckedTime", void 0), l(this, "_lastPlayheadTime", void 0), l(this, "_lastPlayheadTimeUpdatedTime", void 0), l(this, "_rebuffering", void 0), l(this, "pm", void 0), this.pm = e, !(e.disableRebufferTracking || e.disablePlayheadRebufferTracking) && (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
            t._cleanupRebufferTracker(null, {
                viewer_time: A.now()
            });
        }));
    }
    return N(r, [
        {
            key: "_checkIfRebuffering",
            value: function(t, i) {
                if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) {
                    this._cleanupRebufferTracker(t, i);
                    return;
                }
                if (this._lastCheckedTime === null) {
                    this._prepareRebufferTrackerState(i.viewer_time);
                    return;
                }
                if (this._lastPlayheadTime !== this.pm.data.player_playhead_time) {
                    this._cleanupRebufferTracker(t, i, !0);
                    return;
                }
                var a = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                typeof this.pm.sustainedRebufferThreshold == "number" && a >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = !0, this.pm.emit("rebufferstart", {
                    viewer_time: this._lastPlayheadTimeUpdatedTime
                }))), this._lastCheckedTime = i.viewer_time;
            }
        },
        {
            key: "_clearRebufferTrackerState",
            value: function() {
                this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
            }
        },
        {
            key: "_prepareRebufferTrackerState",
            value: function(t) {
                this._lastCheckedTime = t, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = t;
            }
        },
        {
            key: "_cleanupRebufferTracker",
            value: function(t, i) {
                var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                if (this._rebuffering) this._rebuffering = !1, this.pm.emit("rebufferend", {
                    viewer_time: i.viewer_time
                });
                else {
                    if (this._lastCheckedTime === null) return;
                    var n = this.pm.data.player_playhead_time - this._lastPlayheadTime, o = i.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    typeof this.pm.minimumRebufferDuration == "number" && n > 0 && o - n > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime
                    }), this.pm.emit("rebufferend", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime + o - n
                    }));
                }
                a ? this._prepareRebufferTrackerState(i.viewer_time) : this._clearRebufferTrackerState();
            }
        }
    ]), r;
}(), Jt = wa;
var ka = function() {
    "use strict";
    function r(e) {
        var t = this;
        S(this, r), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            var i = e.data, a = i.view_id;
            if (!i.view_program_changed) {
                var n = function(o, s) {
                    var u = s.viewer_time;
                    o.type === "playing" && typeof e.data.view_time_to_first_frame == "undefined" ? t.calculateTimeToFirstFrame(u || A.now(), a) : o.type === "adplaying" && (typeof e.data.view_time_to_first_frame == "undefined" || t._inPrerollPosition()) && t.calculateTimeToFirstFrame(u || A.now(), a);
                };
                e.one("playing", n), e.one("adplaying", n), e.one("viewend", function() {
                    e.off("playing", n), e.off("adplaying", n);
                });
            }
        });
    }
    return N(r, [
        {
            key: "_inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "calculateTimeToFirstFrame",
            value: function(t, i) {
                i === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, {
                    viewer_time: t
                }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.pm.pageLoadInitTime && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.pm.pageLoadInitTime));
            }
        }
    ]), r;
}(), Qt = ka;
var Ea = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "_lastPlayerHeight", void 0), l(this, "_lastPlayerWidth", void 0), l(this, "_lastPlayheadPosition", void 0), l(this, "_lastSourceHeight", void 0), l(this, "_lastSourceWidth", void 0), e.on("viewinit", function() {
        t._lastPlayheadPosition = -1;
    });
    var i = [
        "pause",
        "rebufferstart",
        "seeking",
        "error",
        "adbreakstart",
        "hb",
        "renditionchange",
        "orientationchange",
        "viewend",
        "playbackmodechange"
    ], a = [
        "playing",
        "hb",
        "renditionchange",
        "orientationchange",
        "playbackmodechange"
    ];
    i.forEach(function(n) {
        e.on(n, function() {
            if (t._lastPlayheadPosition >= 0 && e.data.player_playhead_time >= 0 && t._lastPlayerWidth >= 0 && t._lastSourceWidth > 0 && t._lastPlayerHeight >= 0 && t._lastSourceHeight > 0) {
                var o = e.data.player_playhead_time - t._lastPlayheadPosition;
                if (o < 0) {
                    t._lastPlayheadPosition = -1;
                    return;
                }
                var s = Math.min(t._lastPlayerWidth / t._lastSourceWidth, t._lastPlayerHeight / t._lastSourceHeight), u = Math.max(0, s - 1), f = Math.max(0, 1 - s);
                e.data.view_max_upscale_percentage = Math.max(e.data.view_max_upscale_percentage || 0, u), e.data.view_max_downscale_percentage = Math.max(e.data.view_max_downscale_percentage || 0, f), P(e.data, "view_total_content_playback_time", o), P(e.data, "view_total_upscaling", u * o), P(e.data, "view_total_downscaling", f * o);
            }
            t._lastPlayheadPosition = -1;
        });
    }), a.forEach(function(n) {
        e.on(n, function() {
            t._lastPlayheadPosition = e.data.player_playhead_time, t._lastPlayerWidth = e.data.player_width, t._lastPlayerHeight = e.data.player_height, t._lastSourceWidth = e.data.video_source_width, t._lastSourceHeight = e.data.video_source_height;
        });
    });
}, zt = Ea;
var xa = 2e3, Sa = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "isSeeking", void 0), this.isSeeking = !1;
    var i = -1, a = function() {
        var n = A.now(), o = (e.data.viewer_time || n) - (i || n);
        P(e.data, "view_seek_duration", o), e.data.view_max_seek_time = Math.max(e.data.view_max_seek_time || 0, o), t.isSeeking = !1, i = -1;
    };
    e.on("seeking", function(n, o) {
        if (Object.assign(e.data, o), t.isSeeking && o.viewer_time - i <= xa) {
            i = o.viewer_time;
            return;
        }
        t.isSeeking && a(), t.isSeeking = !0, i = o.viewer_time, P(e.data, "view_seek_count", 1), e.send("seeking");
    }), e.on("seeked", function() {
        a();
    }), e.on("viewend", function() {
        t.isSeeking && (a(), e.send("seeked")), t.isSeeking = !1, i = -1;
    });
}, Kt = Sa;
var Yt = function(e, t) {
    e.push(t), e.sort(function(i, a) {
        return i.viewer_time - a.viewer_time;
    });
}, Da = [
    "adbreakstart",
    "adrequest",
    "adresponse",
    "adplay",
    "adplaying",
    "adpause",
    "adended",
    "adbreakend",
    "aderror",
    "adclicked",
    "adskipped"
], Ra = function() {
    "use strict";
    function r(e) {
        var t = this;
        S(this, r), l(this, "_adHasPlayed", void 0), l(this, "_adRequests", void 0), l(this, "_adResponses", void 0), l(this, "_currentAdRequestNumber", void 0), l(this, "_currentAdResponseNumber", void 0), l(this, "_prerollPlayTime", void 0), l(this, "_wouldBeNewAdPlay", void 0), l(this, "isAdBreak", void 0), l(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
            t.isAdBreak = !1, t._currentAdRequestNumber = 0, t._currentAdResponseNumber = 0, t._adRequests = [], t._adResponses = [], t._adHasPlayed = !1, t._wouldBeNewAdPlay = !0, t._prerollPlayTime = void 0;
        }), Da.forEach(function(a) {
            return e.on(a, t._updateAdData.bind(t));
        });
        var i = function() {
            t.isAdBreak = !1;
        };
        e.on("adbreakstart", function() {
            t.isAdBreak = !0;
        }), e.on("play", i), e.on("playing", i), e.on("viewend", i), e.on("adrequest", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdRequestNumber++
            }, n), Yt(t._adRequests, n), P(e.data, "view_ad_request_count"), t.inPrerollPosition() && (e.data.view_preroll_requested = !0, t._adHasPlayed || P(e.data, "view_preroll_request_count"));
        }), e.on("adresponse", function(a, n) {
            n = Object.assign({
                ad_request_id: "generatedAdRequestId" + t._currentAdResponseNumber++
            }, n), Yt(t._adResponses, n);
            var o = t.findAdRequest(n.ad_request_id);
            o && P(e.data, "view_ad_request_time", Math.max(0, n.viewer_time - o.viewer_time));
        }), e.on("adplay", function(a, n) {
            t._adHasPlayed = !0, t._wouldBeNewAdPlay && (t._wouldBeNewAdPlay = !1, P(e.data, "view_ad_played_count")), t.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = !0, t._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, n.viewer_time - t._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, n.viewer_time - e.data.view_start)), t._prerollPlayTime = n.viewer_time);
        }), e.on("adplaying", function(a, n) {
            t.inPrerollPosition() && typeof e.data.view_preroll_load_time == "undefined" && typeof t._prerollPlayTime != "undefined" && (e.data.view_preroll_load_time = n.viewer_time - t._prerollPlayTime, e.data.view_startup_preroll_load_time = n.viewer_time - t._prerollPlayTime);
        }), e.on("adclicked", function(a, n) {
            t._wouldBeNewAdPlay || P(e.data, "view_ad_clicked_count");
        }), e.on("adskipped", function(a, n) {
            t._wouldBeNewAdPlay || P(e.data, "view_ad_skipped_count");
        }), e.on("adended", function() {
            t._wouldBeNewAdPlay = !0;
        }), e.on("aderror", function() {
            t._wouldBeNewAdPlay = !0;
        });
    }
    return N(r, [
        {
            key: "inPrerollPosition",
            value: function() {
                return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
            }
        },
        {
            key: "findAdRequest",
            value: function(t) {
                for(var i = 0; i < this._adRequests.length; i++)if (this._adRequests[i].ad_request_id === t) return this._adRequests[i];
            }
        },
        {
            key: "_updateAdData",
            value: function(t, i) {
                if (this.inPrerollPosition()) {
                    if (!this.pm.data.view_preroll_ad_tag_hostname && i.ad_tag_url) {
                        var a = H(re(i.ad_tag_url), 2), n = a[0], o = a[1];
                        this.pm.data.view_preroll_ad_tag_domain = o, this.pm.data.view_preroll_ad_tag_hostname = n;
                    }
                    if (!this.pm.data.view_preroll_ad_asset_hostname && i.ad_asset_url) {
                        var s = H(re(i.ad_asset_url), 2), u = s[0], f = s[1];
                        this.pm.data.view_preroll_ad_asset_domain = f, this.pm.data.view_preroll_ad_asset_hostname = u;
                    }
                    this.pm.data.ad_type = "preroll";
                }
                this.pm.data.ad_asset_url = i == null ? void 0 : i.ad_asset_url, this.pm.data.ad_tag_url = i == null ? void 0 : i.ad_tag_url, this.pm.data.ad_creative_id = i == null ? void 0 : i.ad_creative_id, this.pm.data.ad_id = i == null ? void 0 : i.ad_id, this.pm.data.ad_universal_id = i == null ? void 0 : i.ad_universal_id, i != null && i.ad_type && (this.pm.data.ad_type = i == null ? void 0 : i.ad_type);
            }
        }
    ]), r;
}(), Xt = Ra;
var qa = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "lastWallClockTime", void 0);
    var i = function() {
        t.lastWallClockTime = A.now(), e.on("before*", a);
    }, a = function(n) {
        var o = A.now(), s = t.lastWallClockTime;
        t.lastWallClockTime = o, o - s > 3e4 && (e.emit("devicesleep", {
            viewer_time: s
        }), Object.assign(e.data, {
            viewer_time: s
        }), e.send("devicesleep"), e.emit("devicewake", {
            viewer_time: o
        }), Object.assign(e.data, {
            viewer_time: o
        }), e.send("devicewake"));
    };
    e.one("playbackheartbeat", i), e.on("playbackheartbeatend", function() {
        e.off("before*", a), e.one("playbackheartbeat", i);
    });
}, $t = qa;
var Fe = G(Q());
var ze = function(r) {
    return r();
}(function() {
    var r = function() {
        for(var i = 0, a = {}; i < arguments.length; i++){
            var n = arguments[i];
            for(var o in n)a[o] = n[o];
        }
        return a;
    };
    function e(t) {
        function i(a, n, o) {
            var s;
            if (typeof document != "undefined") {
                if (arguments.length > 1) {
                    if (o = r({
                        path: "/"
                    }, i.defaults, o), typeof o.expires == "number") {
                        var u = new Date;
                        u.setMilliseconds(u.getMilliseconds() + o.expires * 864e5), o.expires = u;
                    }
                    try {
                        s = JSON.stringify(n), /^[\{\[]/.test(s) && (n = s);
                    } catch (T) {}
                    return t.write ? n = t.write(n, a) : n = encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), a = encodeURIComponent(String(a)), a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), a = a.replace(/[\(\)]/g, escape), document.cookie = [
                        a,
                        "=",
                        n,
                        o.expires ? "; expires=" + o.expires.toUTCString() : "",
                        o.path ? "; path=" + o.path : "",
                        o.domain ? "; domain=" + o.domain : "",
                        o.secure ? "; secure" : ""
                    ].join("");
                }
                a || (s = {});
                for(var f = document.cookie ? document.cookie.split("; ") : [], h = /(%[0-9A-Z]{2})+/g, E = 0; E < f.length; E++){
                    var y = f[E].split("="), c = y.slice(1).join("=");
                    c.charAt(0) === '"' && (c = c.slice(1, -1));
                    try {
                        var p1 = y[0].replace(h, decodeURIComponent);
                        if (c = t.read ? t.read(c, p1) : t(c, p1) || c.replace(h, decodeURIComponent), this.json) try {
                            c = JSON.parse(c);
                        } catch (T) {}
                        if (a === p1) {
                            s = c;
                            break;
                        }
                        a || (s[p1] = c);
                    } catch (T) {}
                }
                return s;
            }
        }
        return i.set = i, i.get = function(a) {
            return i.call(i, a);
        }, i.getJSON = function() {
            return i.apply({
                json: !0
            }, [].slice.call(arguments));
        }, i.defaults = {}, i.remove = function(a, n) {
            i(a, "", r(n, {
                expires: -1
            }));
        }, i.withConverter = e, i;
    }
    return e(function() {});
});
var Zt = "muxData", Aa = function(r) {
    return Object.entries(r).map(function(e) {
        var t = H(e, 2), i = t[0], a = t[1];
        return "".concat(i, "=").concat(a);
    }).join("&");
}, Pa = function(r) {
    return r.split("&").reduce(function(e, t) {
        var i = H(t.split("="), 2), a = i[0], n = i[1], o = +n, s = n && o == n ? o : n;
        return e[a] = s, e;
    }, {});
}, er = function() {
    var e;
    try {
        e = Pa(ze.get(Zt) || "");
    } catch (t) {
        e = {};
    }
    return e;
}, tr = function(e) {
    try {
        ze.set(Zt, Aa(e), {
            expires: 365
        });
    } catch (t) {}
}, rr = function() {
    var e = er();
    return e.mux_viewer_id = e.mux_viewer_id || ee(), e.msn = e.msn || Math.random(), tr(e), {
        mux_viewer_id: e.mux_viewer_id,
        mux_sample_number: e.msn
    };
}, ar = function() {
    var e = er(), t = A.now();
    return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = ee(), e.sst = t), e.sex = t + 25 * 60 * 1e3, tr(e), {
        session_id: e.sid,
        session_start: e.sst,
        session_expires: e.sex
    };
};
function Ke(r, e) {
    var t = e.beaconCollectionDomain, i = e.beaconDomain;
    if (t) return "https://" + t;
    r = r || "inferred";
    var a = i || "litix.io";
    return r.match(/^[a-z0-9]+$/) ? "https://" + r + "." + a : "https://img.litix.io/a.gif";
}
var ir = G(Q()), nr = function() {
    var e;
    switch(or()){
        case "cellular":
            e = "cellular";
            break;
        case "ethernet":
            e = "wired";
            break;
        case "wifi":
            e = "wifi";
            break;
        case void 0:
            break;
        default:
            e = "other";
    }
    return e;
}, or = function() {
    var e = ir.default.navigator, t = e && (e.connection || e.mozConnection || e.webkitConnection);
    return t && t.type;
};
nr.getConnectionFromAPI = or;
var sr = nr;
var Oa = {
    a: "env",
    b: "beacon",
    c: "custom",
    d: "ad",
    e: "event",
    f: "experiment",
    i: "internal",
    m: "mux",
    n: "response",
    p: "player",
    q: "request",
    r: "retry",
    s: "session",
    t: "timestamp",
    u: "viewer",
    v: "video",
    w: "page",
    x: "view",
    y: "sub"
}, La = lr(Oa), Ia = {
    ad: "ad",
    af: "affiliate",
    ag: "aggregate",
    ap: "api",
    al: "application",
    ao: "audio",
    ar: "architecture",
    as: "asset",
    au: "autoplay",
    av: "average",
    bi: "bitrate",
    bn: "brand",
    br: "break",
    bw: "browser",
    by: "bytes",
    bz: "business",
    ca: "cached",
    cb: "cancel",
    cc: "codec",
    cd: "code",
    cg: "category",
    ch: "changed",
    ci: "client",
    ck: "clicked",
    cl: "canceled",
    cm: "cmcd",
    cn: "config",
    co: "count",
    ce: "counter",
    cp: "complete",
    cq: "creator",
    cr: "creative",
    cs: "captions",
    ct: "content",
    cu: "current",
    cv: "cumulative",
    cx: "connection",
    cz: "context",
    da: "data",
    dg: "downscaling",
    dm: "domain",
    dn: "cdn",
    do: "downscale",
    dr: "drm",
    dp: "dropped",
    du: "duration",
    dv: "device",
    dy: "dynamic",
    eb: "enabled",
    ec: "encoding",
    ed: "edge",
    en: "end",
    eg: "engine",
    em: "embed",
    er: "error",
    ep: "experiments",
    es: "errorcode",
    et: "errortext",
    ee: "event",
    ev: "events",
    ex: "expires",
    ez: "exception",
    fa: "failed",
    fi: "first",
    fm: "family",
    ft: "format",
    fp: "fps",
    fq: "frequency",
    fr: "frame",
    fs: "fullscreen",
    ha: "has",
    hb: "holdback",
    he: "headers",
    ho: "host",
    hn: "hostname",
    ht: "height",
    id: "id",
    ii: "init",
    in: "instance",
    ip: "ip",
    is: "is",
    ke: "key",
    la: "language",
    lb: "labeled",
    le: "level",
    li: "live",
    ld: "loaded",
    lo: "load",
    ls: "lists",
    lt: "latency",
    ma: "max",
    md: "media",
    me: "message",
    mf: "manifest",
    mi: "mime",
    ml: "midroll",
    mm: "min",
    mn: "manufacturer",
    mo: "model",
    mp: "mode",
    ms: "ms",
    mx: "mux",
    ne: "newest",
    nm: "name",
    no: "number",
    on: "on",
    or: "origin",
    os: "os",
    pa: "paused",
    pb: "playback",
    pd: "producer",
    pe: "percentage",
    pf: "played",
    pg: "program",
    ph: "playhead",
    pi: "plugin",
    pl: "preroll",
    pn: "playing",
    po: "poster",
    pp: "pip",
    pr: "preload",
    ps: "position",
    pt: "part",
    pv: "previous",
    py: "property",
    px: "pop",
    pz: "plan",
    ra: "rate",
    rd: "requested",
    re: "rebuffer",
    rf: "rendition",
    rg: "range",
    rm: "remote",
    ro: "ratio",
    rp: "response",
    rq: "request",
    rs: "requests",
    sa: "sample",
    sd: "skipped",
    se: "session",
    sh: "shift",
    sk: "seek",
    sm: "stream",
    so: "source",
    sq: "sequence",
    sr: "series",
    ss: "status",
    st: "start",
    su: "startup",
    sv: "server",
    sw: "software",
    sy: "severity",
    ta: "tag",
    tc: "tech",
    te: "text",
    tg: "target",
    th: "throughput",
    ti: "time",
    tl: "total",
    to: "to",
    tt: "title",
    ty: "type",
    ug: "upscaling",
    un: "universal",
    up: "upscale",
    ur: "url",
    us: "user",
    va: "variant",
    vd: "viewed",
    vi: "video",
    ve: "version",
    vw: "view",
    vr: "viewer",
    wd: "width",
    wa: "watch",
    wt: "waiting"
}, ur = lr(Ia);
function lr(r) {
    var e = {};
    for(var t in r)r.hasOwnProperty(t) && (e[r[t]] = t);
    return e;
}
function me(r) {
    var e = {}, t = {};
    return Object.keys(r).forEach(function(i) {
        var a = !1;
        if (r.hasOwnProperty(i) && r[i] !== void 0) {
            var n = i.split("_"), o = n[0], s = La[o];
            s || (q.info("Data key word `" + n[0] + "` not expected in " + i), s = o + "_"), n.splice(1).forEach(function(u) {
                u === "url" && (a = !0), ur[u] ? s += ur[u] : Number.isInteger(Number(u)) ? s += u : (q.info("Data key word `" + u + "` not expected in " + i), s += "_" + u + "_");
            }), a ? t[s] = r[i] : e[s] = r[i];
        }
    }), Object.assign(e, t);
}
var ie = G(Q()), Nr = G(nt());
var oi = {
    maxBeaconSize: 300,
    maxQueueLength: 3600,
    baseTimeBetweenBeacons: 1e4,
    maxPayloadKBSize: 500
}, si = 56 * 1024, ui = [
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
], li = "https://img.litix.io", $ = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this._beaconUrl = e || li, this._eventQueue = [], this._postInFlight = !1, this._resendAfterPost = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = Object.assign({}, oi, t);
};
$.prototype.queueEvent = function(r, e) {
    var t = Object.assign({}, e);
    return this._eventQueue.length <= this._options.maxQueueLength || r === "eventrateexceeded" ? (this._eventQueue.push(t), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : !1;
};
$.prototype.flushEvents = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (r && this._eventQueue.length === 1) {
        this._eventQueue.pop();
        return;
    }
    this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending();
};
$.prototype.destroy = function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    this.destroyed = !0, r ? this._clearBeaconQueue() : this.flushEvents(), ie.default.clearTimeout(this._sendTimeout);
};
$.prototype._clearBeaconQueue = function() {
    var r = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, e = this._eventQueue.slice(r);
    r > 0 && Object.assign(e[e.length - 1], me({
        mux_view_message: "event queue truncated"
    }));
    var t = this._createPayload(e);
    Cr(this._beaconUrl, t, !0, function() {});
};
$.prototype._sendBeaconQueue = function() {
    var r = this;
    if (this._postInFlight) {
        this._resendAfterPost = !0;
        return;
    }
    var e = this._eventQueue.slice(0, this._options.maxBeaconSize);
    this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0;
    var t = this._createPayload(e), i = A.now();
    Cr(this._beaconUrl, t, !1, function(a, n) {
        n ? (r._eventQueue = e.concat(r._eventQueue), r._failureCount += 1, q.info("Error sending beacon: " + n)) : r._failureCount = 0, r._roundTripTime = A.now() - i, r._postInFlight = !1, r._resendAfterPost && (r._resendAfterPost = !1, r._eventQueue.length > 0 && r._sendBeaconQueue());
    });
};
$.prototype._getNextBeaconTime = function() {
    if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
    var r = Math.pow(2, this._failureCount - 1);
    return r = r * Math.random(), (1 + r) * this._options.baseTimeBetweenBeacons;
};
$.prototype._startBeaconSending = function() {
    var r = this;
    ie.default.clearTimeout(this._sendTimeout), !this.destroyed && (this._sendTimeout = ie.default.setTimeout(function() {
        r._eventQueue.length && r._sendBeaconQueue(), r._startBeaconSending();
    }, this._getNextBeaconTime()));
};
$.prototype._createPayload = function(r) {
    var e = this, t = {
        transmission_timestamp: Math.round(A.now())
    };
    this._roundTripTime && (t.rtt_ms = Math.round(this._roundTripTime));
    var i, a, n, o = function() {
        i = JSON.stringify({
            metadata: t,
            events: a || r
        }), n = i.length / 1024;
    }, s = function() {
        return n <= e._options.maxPayloadKBSize;
    };
    return o(), s() || (q.info("Payload size is too big (" + n + " kb). Removing unnecessary events."), a = r.filter(function(u) {
        return ui.indexOf(u.e) === -1;
    }), o()), s() || (q.info("Payload size still too big (" + n + " kb). Cropping fields.."), a.forEach(function(u) {
        for(var f in u){
            var h = u[f], E = 50 * 1024;
            typeof h == "string" && h.length > E && (u[f] = h.substring(0, E));
        }
    }), o()), i;
};
var di = typeof Nr.default.exitPictureInPicture == "function" ? function(r) {
    return r.length <= si;
} : function(r) {
    return !1;
}, Cr = function(r, e, t, i) {
    if (t && navigator && navigator.sendBeacon && navigator.sendBeacon(r, e)) {
        i();
        return;
    }
    if (ie.default.fetch) {
        ie.default.fetch(r, {
            method: "POST",
            body: e,
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: di(e)
        }).then(function(n) {
            return i(null, n.ok ? null : "Error");
        }).catch(function(n) {
            return i(null, n);
        });
        return;
    }
    if (ie.default.XMLHttpRequest) {
        var a = new ie.default.XMLHttpRequest;
        a.onreadystatechange = function() {
            if (a.readyState === 4) return i(null, a.status !== 200 ? "error" : void 0);
        }, a.open("POST", r), a.setRequestHeader("Content-Type", "text/plain"), a.send(e);
        return;
    }
    i();
}, Mr = $;
var ci = [
    "env_key",
    "view_id",
    "view_sequence_number",
    "player_sequence_number",
    "beacon_domain",
    "player_playhead_time",
    "viewer_time",
    "mux_api_version",
    "event",
    "video_id",
    "player_instance_id",
    "player_error_code",
    "player_error_message",
    "player_error_context",
    "player_error_severity",
    "player_error_business_exception",
    "view_playing_time_ms_cumulative",
    "ad_playing_time_ms_cumulative"
], _i = [
    "adplay",
    "adplaying",
    "adpause",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "adended",
    "adresponse",
    "adrequest"
], fi = [
    "ad_id",
    "ad_creative_id",
    "ad_universal_id"
], pi = [
    "viewstart",
    "error",
    "ended",
    "viewend"
], mi = 10 * 60 * 1e3, Hr = function() {
    "use strict";
    function r(e, t) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        S(this, r);
        var a, n, o, s, u, f, h, E, y, c, p1, T;
        l(this, "mux", void 0), l(this, "envKey", void 0), l(this, "options", void 0), l(this, "eventQueue", void 0), l(this, "sampleRate", void 0), l(this, "disableCookies", void 0), l(this, "respectDoNotTrack", void 0), l(this, "previousBeaconData", void 0), l(this, "lastEventTime", void 0), l(this, "rateLimited", void 0), l(this, "pageLevelData", void 0), l(this, "viewerData", void 0), this.mux = e, this.envKey = t, this.options = i, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.eventQueue = new Mr(Ke(this.envKey, this.options));
        var x;
        this.sampleRate = (x = this.options.sampleRate) !== null && x !== void 0 ? x : 1;
        var v;
        this.disableCookies = (v = this.options.disableCookies) !== null && v !== void 0 ? v : !1;
        var m;
        this.respectDoNotTrack = (m = this.options.respectDoNotTrack) !== null && m !== void 0 ? m : !1, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = !1, this.pageLevelData = {
            mux_api_version: this.mux.API_VERSION,
            mux_embed: this.mux.NAME,
            mux_embed_version: this.mux.VERSION,
            viewer_application_name: (a = this.options.platform) === null || a === void 0 ? void 0 : a.name,
            viewer_application_version: (n = this.options.platform) === null || n === void 0 ? void 0 : n.version,
            viewer_application_engine: (o = this.options.platform) === null || o === void 0 ? void 0 : o.layout,
            viewer_device_name: (s = this.options.platform) === null || s === void 0 ? void 0 : s.product,
            viewer_device_category: "",
            viewer_device_manufacturer: (u = this.options.platform) === null || u === void 0 ? void 0 : u.manufacturer,
            viewer_os_family: (h = this.options.platform) === null || h === void 0 || (f = h.os) === null || f === void 0 ? void 0 : f.family,
            viewer_os_architecture: (y = this.options.platform) === null || y === void 0 || (E = y.os) === null || E === void 0 ? void 0 : E.architecture,
            viewer_os_version: (p1 = this.options.platform) === null || p1 === void 0 || (c = p1.os) === null || c === void 0 ? void 0 : c.version,
            viewer_connection_type: sr(),
            page_url: Fe.default === null || Fe.default === void 0 || (T = Fe.default.location) === null || T === void 0 ? void 0 : T.href
        }, this.viewerData = this.disableCookies ? {} : rr();
    }
    return N(r, [
        {
            key: "send",
            value: function(t, i) {
                if (!(!t || !(i != null && i.view_id))) {
                    if (this.respectDoNotTrack && ce()) return q.info("Not sending `" + t + "` because Do Not Track is enabled");
                    if (!i || typeof i != "object") return q.error("A data object was expected in send() but was not provided");
                    var a = this.disableCookies ? {} : ar(), n = fe(ue({}, this.pageLevelData, i, a, this.viewerData), {
                        event: t,
                        env_key: this.envKey
                    });
                    n.user_id && (n.viewer_user_id = n.user_id, delete n.user_id);
                    var o, s = ((o = n.mux_sample_number) !== null && o !== void 0 ? o : 0) >= this.sampleRate, u = this._deduplicateBeaconData(t, n), f = me(u);
                    if (this.lastEventTime = this.mux.utils.now(), s) return q.info("Not sending event due to sample rate restriction", t, n, f);
                    if (this.envKey || q.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", t, n, f), !this.rateLimited) if (q.info("Sending event", t, n, f), this.rateLimited = !this.eventQueue.queueEvent(t, f), this.mux.WINDOW_UNLOADING && t === "viewend") this.eventQueue.destroy(!0);
                    else {
                        if (this.mux.WINDOW_HIDDEN && t === "hb") this.eventQueue.flushEvents(!0);
                        else if (pi.indexOf(t) >= 0) {
                            if (t === "error" && i.player_error_severity === "warning") return;
                            this.eventQueue.flushEvents();
                        }
                        if (this.rateLimited) return n.event = "eventrateexceeded", f = me(n), this.eventQueue.queueEvent(n.event, f), q.error("Beaconing disabled due to rate limit.");
                    }
                }
            }
        },
        {
            key: "destroy",
            value: function() {
                this.eventQueue.destroy(!1);
            }
        },
        {
            key: "_deduplicateBeaconData",
            value: function(t, i) {
                var a = this, n = {}, o = i.view_id;
                if (o === "-1" || t === "viewstart" || t === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= mi) n = ue({}, i), o && (this.previousBeaconData = n), o && t === "viewend" && (this.previousBeaconData = null);
                else {
                    var s = t.indexOf("request") === 0;
                    Object.entries(i).forEach(function(u) {
                        var f = H(u, 2), h = f[0], E = f[1];
                        a.previousBeaconData && (E !== a.previousBeaconData[h] || ci.indexOf(h) > -1 || a.objectHasChanged(s, h, E, a.previousBeaconData[h]) || a.eventRequiresKey(t, h)) && (n[h] = E, a.previousBeaconData[h] = E);
                    });
                }
                return n;
            }
        },
        {
            key: "objectHasChanged",
            value: function(t, i, a, n) {
                return !t || i.indexOf("request_") !== 0 ? !1 : i === "request_response_headers" || typeof a != "object" || typeof n != "object" ? !0 : Object.keys(a || {}).length !== Object.keys(n || {}).length;
            }
        },
        {
            key: "eventRequiresKey",
            value: function(t, i) {
                return !!(t === "renditionchange" && i.indexOf("video_source_") === 0 || fi.includes(i) && _i.includes(t));
            }
        }
    ]), r;
}();
var vi = function r(e) {
    "use strict";
    S(this, r);
    var t = 0, i = 0, a = 0, n = 0, o = 0, s = 0, u = 0, f = function(y, c) {
        var p1 = c.request_start, T = c.request_response_start, x = c.request_response_end, v = c.request_bytes_loaded;
        n++;
        var m, _;
        if (T ? (m = T - (p1 != null ? p1 : 0), _ = (x != null ? x : 0) - T) : _ = (x != null ? x : 0) - (p1 != null ? p1 : 0), _ > 0 && v && v > 0) {
            var d = v / _ * 8e3;
            o++, i += v, a += _, e.data.view_min_request_throughput = Math.min(e.data.view_min_request_throughput || 1 / 0, d), e.data.view_average_request_throughput = i / a * 8e3, e.data.view_request_count = n, m > 0 && (t += m, e.data.view_max_request_latency = Math.max(e.data.view_max_request_latency || 0, m), e.data.view_average_request_latency = t / o);
        }
    }, h = function(y, c) {
        n++, s++, e.data.view_request_count = n, e.data.view_request_failed_count = s;
    }, E = function(y, c) {
        n++, u++, e.data.view_request_count = n, e.data.view_request_canceled_count = u;
    };
    e.on("requestcompleted", f), e.on("requestfailed", h), e.on("requestcanceled", E);
}, Br = vi;
var hi = 60 * 60 * 1e3, yi = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "_lastEventTime", void 0), e.on("before*", function(i, a) {
        var n = a.viewer_time, o = A.now(), s = t._lastEventTime;
        if (t._lastEventTime = o, s && o - s > hi) {
            var u = Object.keys(e.data).reduce(function(h, E) {
                return E.indexOf("video_") === 0 ? Object.assign(h, l({}, E, e.data[E])) : h;
            }, {});
            e.mux.log.info("Received event after at least an hour inactivity, creating a new view");
            var f = e.playbackHeartbeat._playheadShouldBeProgressing;
            e._resetView(Object.assign({
                viewer_time: n
            }, u)), e.playbackHeartbeat._playheadShouldBeProgressing = f, e.playbackHeartbeat._playheadShouldBeProgressing && i.type !== "play" && i.type !== "adbreakstart" && (e.emit("play", {
                viewer_time: n
            }), i.type !== "playing" && e.emit("playing", {
                viewer_time: n
            }));
        }
    });
}, Ur = yi;
var gi = function r(e) {
    "use strict";
    S(this, r);
    var t = function(u) {
        var f = bi(u), h = Ti(u);
        if (f != null && !Fr(f, n) && o <= h) {
            n = f, o = h;
            var E = {
                video_cdn: f
            };
            e.emit("cdnchange", E);
        }
    }, i = null, a = null, n = null, o = 0;
    e.on("viewinit", function() {
        i = null, a = null, n = null, o = 0;
    }), e.on("beforecdnchange", function(s, u) {
        var f = u == null ? void 0 : u.video_cdn;
        f && (typeof u.video_previous_cdn == "undefined" || u.video_previous_cdn === null) && (Fr(f, a) ? u.video_previous_cdn = i != null ? i : void 0 : (u.video_previous_cdn = a != null ? a : void 0, i = a, a = f));
    }), e.on("requestcompleted", function(s, u) {
        t(u);
    });
};
function Fr(r, e) {
    return (r == null ? void 0 : r.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
}
function bi(r) {
    var e;
    return r != null && r.request_type && (r.request_type === "media" || r.request_type === "video") && !((e = r.request_response_headers) === null || e === void 0) && e["x-cdn"] ? r.request_response_headers["x-cdn"] : r != null && r.video_cdn ? r.video_cdn : null;
}
function Ti(r) {
    return r != null && r.request_start ? r.request_start : r != null && r.viewer_time ? r.viewer_time : Date.now();
}
var Vr = gi;
var wi = function(r) {
    try {
        return JSON.parse(r), !0;
    } catch (e) {
        return !1;
    }
}, ki = function r(e) {
    "use strict";
    var t = this;
    S(this, r), l(this, "_emittingAutomaticEvent", !1), l(this, "_hasInitialized", !1), l(this, "_currentMode", "standard"), e.on("viewstart", function() {
        t._hasInitialized || (t._hasInitialized = !0, t._currentMode = e.data.player_playback_mode || "standard", t._emittingAutomaticEvent = !0, e.emit("playbackmodechange", {
            player_playback_mode: t._currentMode,
            player_playback_mode_data: "{}"
        }), t._emittingAutomaticEvent = !1);
    }), e.on("viewend", function() {
        t._hasInitialized = !1;
    }), e.on("playbackmodechange", function(i, a) {
        t._emittingAutomaticEvent || (a.player_playback_mode_data ? wi(a.player_playback_mode_data) || (e.mux.log.warn("Invalid JSON string for player_playback_mode_data"), a.player_playback_mode_data = "{}") : a.player_playback_mode_data = "{}", e.data.player_playback_mode_data = a.player_playback_mode_data, e.data.player_playback_mode = a.player_playback_mode, t._currentMode = a.player_playback_mode);
    });
}, jr = ki;
var Ei = function() {
    "use strict";
    function r(e) {
        S(this, r), l(this, "pm", void 0), l(this, "_currentRangeStart", void 0), l(this, "_lastPlayheadTime", void 0), this.pm = e, this._currentRangeStart = null, this._lastPlayheadTime = null, e.on("playbackheartbeat", this._updatePlaybackRange.bind(this)), e.on("playbackheartbeatend", this._endPlaybackRange.bind(this));
    }
    return N(r, [
        {
            key: "_updateLastRangeEnd",
            value: function() {
                var t = this.pm.data.video_playback_ranges;
                if (t && t.length > 0) {
                    var i = this.pm.data.player_playhead_time || 0;
                    t[t.length - 1][1] = i;
                }
            }
        },
        {
            key: "_updatePlaybackRange",
            value: function() {
                var t, i = this.pm.data.player_playhead_time || 0;
                if (!(!this.pm.disableAdPlaybackRangeFiltering && !((t = this.pm.adTracker) === null || t === void 0) && t.isAdBreak && this._lastPlayheadTime !== null && i < this._lastPlayheadTime)) {
                    if (this._lastPlayheadTime !== null && this._currentRangeStart !== null) {
                        var a = Math.abs(i - this._lastPlayheadTime);
                        if (a > 1e3) {
                            var n = this.pm.data.video_playback_ranges;
                            n && n.length > 0 && (n[n.length - 1][1] = this._lastPlayheadTime), this._currentRangeStart = null;
                        }
                    }
                    if (this._currentRangeStart === null) {
                        var o = this.pm.data.video_playback_ranges || [];
                        o.length > 0 && o[o.length - 1][1] === i ? this._currentRangeStart = o[o.length - 1][0] : (this._currentRangeStart = i, o.push([
                            i,
                            i
                        ])), this.pm.data.video_playback_ranges = o;
                    } else this._updateLastRangeEnd();
                    this._lastPlayheadTime = i;
                }
            }
        },
        {
            key: "_endPlaybackRange",
            value: function() {
                this._currentRangeStart !== null && (this._updateLastRangeEnd(), this._currentRangeStart = null, this._lastPlayheadTime = null);
            }
        }
    ]), r;
}(), Wr = Ei;
var xi = [
    "viewstart",
    "ended",
    "loadstart",
    "pause",
    "play",
    "playing",
    "ratechange",
    "waiting",
    "adplay",
    "adpause",
    "adended",
    "aderror",
    "adplaying",
    "adrequest",
    "adresponse",
    "adbreakstart",
    "adbreakend",
    "adfirstquartile",
    "admidpoint",
    "adthirdquartile",
    "rebufferstart",
    "rebufferend",
    "seeked",
    "error",
    "hb",
    "requestcompleted",
    "requestfailed",
    "requestcanceled",
    "renditionchange",
    "cdnchange",
    "playbackmodechange"
], Si = new Set([
    "requestcompleted",
    "requestfailed",
    "requestcanceled"
]), Di = function(r) {
    "use strict";
    xt(t, r);
    var e = At(t);
    function t(i, a, n) {
        S(this, t);
        var o;
        o = e.call(this), l(b(o), "pageLoadEndTime", void 0), l(b(o), "pageLoadInitTime", void 0), l(b(o), "_destroyed", void 0), l(b(o), "_heartBeatTimeout", void 0), l(b(o), "adTracker", void 0), l(b(o), "dashjs", void 0), l(b(o), "data", void 0), l(b(o), "disablePlayheadRebufferTracking", void 0), l(b(o), "disableRebufferTracking", void 0), l(b(o), "disableAdPlaybackRangeFiltering", void 0), l(b(o), "errorTracker", void 0), l(b(o), "errorTranslator", void 0), l(b(o), "emitTranslator", void 0), l(b(o), "getAdData", void 0), l(b(o), "getPlayheadTime", void 0), l(b(o), "getStateData", void 0), l(b(o), "stateDataTranslator", void 0), l(b(o), "hlsjs", void 0), l(b(o), "id", void 0), l(b(o), "longResumeTracker", void 0), l(b(o), "minimumRebufferDuration", void 0), l(b(o), "mux", void 0), l(b(o), "playbackEventDispatcher", void 0), l(b(o), "playbackHeartbeat", void 0), l(b(o), "playbackHeartbeatTime", void 0), l(b(o), "playheadTime", void 0), l(b(o), "seekingTracker", void 0), l(b(o), "sustainedRebufferThreshold", void 0), l(b(o), "watchTimeTracker", void 0), l(b(o), "currentFragmentPDT", void 0), l(b(o), "currentFragmentStart", void 0), o.pageLoadInitTime = _e.navigationStart(), o.pageLoadEndTime = _e.domContentLoadedEventEnd();
        var s = {
            debug: !1,
            minimumRebufferDuration: 250,
            sustainedRebufferThreshold: 1e3,
            playbackHeartbeatTime: 25,
            beaconDomain: "litix.io",
            sampleRate: 1,
            disableCookies: !1,
            respectDoNotTrack: !1,
            disableRebufferTracking: !1,
            disablePlayheadRebufferTracking: !1,
            disableAdPlaybackRangeFiltering: !1,
            errorTranslator: function(y) {
                return y;
            },
            emitTranslator: function() {
                for(var y = arguments.length, c = new Array(y), p1 = 0; p1 < y; p1++)c[p1] = arguments[p1];
                return c;
            },
            stateDataTranslator: function(y) {
                return y;
            }
        };
        o.mux = i, o.id = a, n != null && n.beaconDomain && o.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), n = Object.assign(s, n), n.data = n.data || {}, n.data.property_key && (n.data.env_key = n.data.property_key, delete n.data.property_key), q.level = n.debug ? Y.DEBUG : Y.WARN, o.getPlayheadTime = n.getPlayheadTime, o.getStateData = n.getStateData || function() {
            return {};
        }, o.getAdData = n.getAdData || function() {}, o.minimumRebufferDuration = n.minimumRebufferDuration, o.sustainedRebufferThreshold = n.sustainedRebufferThreshold, o.playbackHeartbeatTime = n.playbackHeartbeatTime, o.disableRebufferTracking = n.disableRebufferTracking, o.disableRebufferTracking && o.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o.disablePlayheadRebufferTracking = n.disablePlayheadRebufferTracking, o.disableAdPlaybackRangeFiltering = n.disableAdPlaybackRangeFiltering, o.errorTranslator = n.errorTranslator, o.emitTranslator = n.emitTranslator, o.stateDataTranslator = n.stateDataTranslator, o.playbackEventDispatcher = new Hr(i, n.data.env_key, n), o.data = {
            player_instance_id: ee(),
            mux_sample_rate: n.sampleRate,
            beacon_domain: n.beaconCollectionDomain || n.beaconDomain
        }, o.data.view_sequence_number = 1, o.data.player_sequence_number = 1;
        var u = (function() {
            typeof this.data.view_start == "undefined" && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"), this.emit("renditionchange"));
        }).bind(b(o));
        if (o.on("viewinit", function(y, c) {
            this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, c), this._initializeViewData(), this.one("play", u), this.one("adbreakstart", u);
        }), o.on("videochange", function(y, c) {
            this._resetView(c);
        }), o.on("programchange", function(y, c) {
            this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), this._resetView(Object.assign(c, {
                view_program_changed: !0
            })), u(), this.emit("play"), this.emit("playing");
        }), o.on("fragmentchange", function(y, c) {
            this.currentFragmentPDT = c.currentFragmentPDT, this.currentFragmentStart = c.currentFragmentStart;
        }), o.on("destroy", o.destroy), typeof window != "undefined" && typeof window.addEventListener == "function" && typeof window.removeEventListener == "function") {
            var f = function() {
                var y = typeof o.data.view_start != "undefined";
                o.mux.WINDOW_HIDDEN = document.visibilityState === "hidden", y && o.mux.WINDOW_HIDDEN && (o.data.player_is_paused || o.emit("hb"));
            };
            window.addEventListener("visibilitychange", f, !1);
            var h = function(y) {
                y.persisted || o.destroy();
            };
            window.addEventListener("pagehide", h, !1), o.on("destroy", function() {
                window.removeEventListener("visibilitychange", f), window.removeEventListener("pagehide", h);
            });
        }
        o.on("playerready", function(y, c) {
            Object.assign(this.data, c);
        }), xi.forEach(function(y) {
            o.on(y, function(c, p1) {
                y.indexOf("ad") !== 0 && this._updateStateData(), Object.assign(this.data, p1), this._sanitizeData();
            }), o.on("after" + y, function() {
                (y !== "error" || this.errorTracker.viewErrored) && this.send(y);
            });
        }), o.on("viewend", function(y, c) {
            Object.assign(o.data, c);
        });
        var E = function(c) {
            var p1 = this.mux.utils.now();
            this.data.player_init_time && (this.data.player_startup_time = p1 - this.data.player_init_time), this.pageLoadInitTime = this.data.page_load_init_time || this.pageLoadInitTime, this.pageLoadEndTime = this.data.page_load_end_time || this.pageLoadEndTime, !this.mux.PLAYER_TRACKED && this.pageLoadInitTime && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.pageLoadEndTime) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.pageLoadEndTime || 1 / 0) - this.pageLoadInitTime)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
        };
        return o.one("playerready", E), o.longResumeTracker = new Ur(b(o)), o.errorTracker = new Ut(b(o)), new $t(b(o)), o.seekingTracker = new Kt(b(o)), o.playheadTime = new jt(b(o)), o.playbackHeartbeat = new Bt(b(o)), new zt(b(o)), o.watchTimeTracker = new Ft(b(o)), new Vt(b(o)), new Wr(b(o)), o.adTracker = new Xt(b(o)), new Jt(b(o)), new Gt(b(o)), new Qt(b(o)), new Br(b(o)), new Vr(b(o)), new jr(b(o)), n.hlsjs && o.addHLSJS(n), n.dashjs && o.addDashJS(n), o.emit("viewinit", n.data), o;
    }
    return N(t, [
        {
            key: "emit",
            value: function(a, n) {
                var o, s = Object.assign({
                    viewer_time: this.mux.utils.now()
                }, n), u = [
                    a,
                    s
                ];
                if (this.emitTranslator) try {
                    u = this.emitTranslator(a, s);
                } catch (f) {
                    this.mux.log.warn("Exception in emit translator callback.", f);
                }
                u != null && u.length && (o = Se(X(t.prototype), "emit", this)).call.apply(o, [
                    this
                ].concat(V(u)));
            }
        },
        {
            key: "destroy",
            value: function() {
                this._destroyed || (this._destroyed = !0, typeof this.data.view_start != "undefined" && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
            }
        },
        {
            key: "send",
            value: function(a) {
                if (this.data.view_id) {
                    var n = Object.assign({}, this.data), o = [
                        "player_program_time",
                        "player_manifest_newest_program_time",
                        "player_live_edge_program_time",
                        "player_program_time",
                        "video_holdback",
                        "video_part_holdback",
                        "video_target_duration",
                        "video_part_target_duration"
                    ];
                    if (n.video_source_is_live === void 0 && (n.player_source_duration === 1 / 0 || n.video_source_duration === 1 / 0 ? n.video_source_is_live = !0 : (n.player_source_duration > 0 || n.video_source_duration > 0) && (n.video_source_is_live = !1)), n.video_source_is_live || o.forEach(function(h) {
                        n[h] = void 0;
                    }), n.video_source_url = n.video_source_url || n.player_source_url, n.video_source_url) {
                        var s = H(re(n.video_source_url), 2), u = s[0], f = s[1];
                        n.video_source_domain = f, n.video_source_hostname = u;
                    }
                    delete n.ad_request_id, n.video_playback_ranges && (n.video_playback_range = JSON.stringify(n.video_playback_ranges.filter(function(h) {
                        return h[0] !== h[1];
                    }).map(function(h) {
                        return "".concat(h[0], ":").concat(h[1]);
                    })), delete n.video_playback_ranges), this.playbackEventDispatcher.send(a, n), this.data.view_sequence_number++, this.data.player_sequence_number++, Si.has(a) || this._restartHeartBeat(), a === "viewend" && delete this.data.view_id;
                }
            }
        },
        {
            key: "_resetView",
            value: function(a) {
                this.emit("viewend"), this.send("viewend"), this.emit("viewinit", a);
            }
        },
        {
            key: "_updateStateData",
            value: function() {
                var a, n = this.getStateData();
                if (typeof this.stateDataTranslator == "function") try {
                    n = this.stateDataTranslator(n);
                } catch (u) {
                    this.mux.log.warn("Exception in stateDataTranslator translator callback.", u);
                }
                if (!((a = this.data) === null || a === void 0) && a.video_cdn && n != null && n.video_cdn) {
                    var o = n.video_cdn, s = Dt(n, [
                        "video_cdn"
                    ]);
                    n = s;
                }
                Object.assign(this.data, n), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
            }
        },
        {
            key: "_sanitizeData",
            value: function() {
                var a = this, n = [
                    "player_width",
                    "player_height",
                    "video_source_width",
                    "video_source_height",
                    "player_playhead_time",
                    "video_source_bitrate"
                ];
                n.forEach(function(s) {
                    var u = parseInt(a.data[s], 10);
                    a.data[s] = isNaN(u) ? void 0 : u;
                });
                var o = [
                    "player_source_url",
                    "video_source_url"
                ];
                o.forEach(function(s) {
                    if (a.data[s]) {
                        var u = a.data[s].toLowerCase();
                        (u.indexOf("data:") === 0 || u.indexOf("blob:") === 0) && (a.data[s] = "MSE style URL");
                    }
                });
            }
        },
        {
            key: "_resetVideoData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("video_") === 0 && delete a.data[n];
                });
            }
        },
        {
            key: "_resetViewData",
            value: function() {
                var a = this;
                Object.keys(this.data).forEach(function(n) {
                    n.indexOf("view_") === 0 && delete a.data[n];
                }), this.data.view_sequence_number = 1;
            }
        },
        {
            key: "_resetErrorData",
            value: function() {
                delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
            }
        },
        {
            key: "_initializeViewData",
            value: function() {
                var a = this, n = this.data.view_id = ee(), o = function() {
                    n === a.data.view_id && P(a.data, "player_view_count", 1);
                };
                this.data.player_is_paused ? this.one("play", o) : o();
            }
        },
        {
            key: "_restartHeartBeat",
            value: function() {
                var a = this;
                window.clearTimeout(this._heartBeatTimeout), this._heartBeatTimeout = window.setTimeout(function() {
                    a.data.player_is_paused || a.emit("hb");
                }, 1e4);
            }
        },
        {
            key: "addHLSJS",
            value: function(a) {
                if (!a.hlsjs) {
                    this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
                    return;
                }
                if (this.hlsjs) {
                    this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");
                    return;
                }
                this.hlsjs = a.hlsjs, Ot(this.mux, this.id, a.hlsjs, {}, a.Hls || window.Hls);
            }
        },
        {
            key: "removeHLSJS",
            value: function() {
                this.hlsjs && (Lt(this.hlsjs), this.hlsjs = void 0);
            }
        },
        {
            key: "addDashJS",
            value: function(a) {
                if (!a.dashjs) {
                    this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
                    return;
                }
                if (this.dashjs) {
                    this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");
                    return;
                }
                this.dashjs = a.dashjs, Nt(this.mux, this.id, a.dashjs);
            }
        },
        {
            key: "removeDashJS",
            value: function() {
                this.dashjs && (Ct(this.dashjs), this.dashjs = void 0);
            }
        }
    ]), t;
}(Ht), Gr = Di;
var he = G(nt());
function Ae() {
    return he.default && !!(he.default.fullscreenElement || he.default.webkitFullscreenElement || he.default.mozFullScreenElement || he.default.msFullscreenElement);
}
var Ri = [
    "loadstart",
    "pause",
    "play",
    "playing",
    "seeking",
    "seeked",
    "timeupdate",
    "ratechange",
    "stalled",
    "waiting",
    "error",
    "ended"
], qi = {
    1: "MEDIA_ERR_ABORTED",
    2: "MEDIA_ERR_NETWORK",
    3: "MEDIA_ERR_DECODE",
    4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
};
function ot(r, e, t) {
    var i = H(se(e), 3), a = i[0], n = i[1], o = i[2], s = r.log, u = r.utils.getComputedStyle, f = r.utils.secondsToMs, h = {
        automaticErrorTracking: !0
    };
    if (a) {
        if (o !== "video" && o !== "audio") return s.error("The element of `" + n + "` was not a media element.");
    } else return s.error("No element was found with the `" + n + "` query selector.");
    a.mux && (a.mux.destroy(), delete a.mux, s.warn("Already monitoring this video element, replacing existing event listeners"));
    var E = {
        getPlayheadTime: function() {
            return f(a.currentTime);
        },
        getStateData: function() {
            var p1, T, x, v = ((p1 = (T = this).getPlayheadTime) === null || p1 === void 0 ? void 0 : p1.call(T)) || f(a.currentTime), m = this.hlsjs && this.hlsjs.url, _ = this.dashjs && typeof this.dashjs.getSource == "function" && this.dashjs.getSource(), d = {
                player_is_paused: a.paused,
                player_width: parseInt(u(a, "width")),
                player_height: parseInt(u(a, "height")),
                player_autoplay_on: a.autoplay,
                player_preload_on: a.preload,
                player_language_code: a.lang,
                player_is_fullscreen: Ae(),
                video_poster_url: a.poster,
                video_source_url: m || _ || a.currentSrc,
                video_source_duration: f(a.duration),
                video_source_height: a.videoHeight,
                video_source_width: a.videoWidth,
                view_dropped_frame_count: a == null || (x = a.getVideoPlaybackQuality) === null || x === void 0 ? void 0 : x.call(a).droppedVideoFrames
            };
            if (a.getStartDate && v > 0) {
                var g = a.getStartDate();
                if (g && typeof g.getTime == "function" && g.getTime()) {
                    var w = g.getTime();
                    if (d.player_program_time = w + v, a.seekable.length > 0) {
                        var k = w + a.seekable.end(a.seekable.length - 1);
                        d.player_live_edge_program_time = k;
                    }
                }
            }
            return d;
        }
    };
    t = Object.assign(h, t, E), t.data = Object.assign({
        player_software: "HTML5 Video Element",
        player_mux_plugin_name: "VideoElementMonitor",
        player_mux_plugin_version: r.VERSION
    }, t.data), a.mux = a.mux || {}, a.mux.deleted = !1, a.mux.emit = function(c, p1) {
        r.emit(n, c, p1);
    }, a.mux.updateData = function(c) {
        a.mux.emit("hb", c);
    };
    var y = function() {
        s.error("The monitor for this video element has already been destroyed.");
    };
    a.mux.destroy = function() {
        Object.keys(a.mux.listeners).forEach(function(c) {
            a.removeEventListener(c, a.mux.listeners[c], !1);
        }), delete a.mux.listeners, a.mux.fullscreenChangeListener && (document.removeEventListener("fullscreenchange", a.mux.fullscreenChangeListener, !1), delete a.mux.fullscreenChangeListener), a.mux.destroy = y, a.mux.swapElement = y, a.mux.emit = y, a.mux.addHLSJS = y, a.mux.addDashJS = y, a.mux.removeHLSJS = y, a.mux.removeDashJS = y, a.mux.updateData = y, a.mux.setEmitTranslator = y, a.mux.setStateDataTranslator = y, a.mux.setGetPlayheadTime = y, a.mux.deleted = !0, r.emit(n, "destroy");
    }, a.mux.swapElement = function(c) {
        var p1 = H(se(c), 3), T = p1[0], x = p1[1], v = p1[2];
        if (T) {
            if (v !== "video" && v !== "audio") return r.log.error("The element of `" + x + "` was not a media element.");
        } else return r.log.error("No element was found with the `" + x + "` query selector.");
        T.muxId = a.muxId, delete a.muxId, T.mux = T.mux || {}, T.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(T.mux.listeners).forEach(function(m) {
            a.removeEventListener(m, T.mux.listeners[m], !1), T.addEventListener(m, T.mux.listeners[m], !1);
        }), T.mux.fullscreenChangeListener = a.mux.fullscreenChangeListener, delete a.mux.fullscreenChangeListener, T.mux.swapElement = a.mux.swapElement, T.mux.destroy = a.mux.destroy, delete a.mux, a = T;
    }, a.mux.addHLSJS = function(c) {
        r.addHLSJS(n, c);
    }, a.mux.addDashJS = function(c) {
        r.addDashJS(n, c);
    }, a.mux.removeHLSJS = function() {
        r.removeHLSJS(n);
    }, a.mux.removeDashJS = function() {
        r.removeDashJS(n);
    }, a.mux.setEmitTranslator = function(c) {
        r.setEmitTranslator(n, c);
    }, a.mux.setStateDataTranslator = function(c) {
        r.setStateDataTranslator(n, c);
    }, a.mux.setGetPlayheadTime = function(c) {
        c || (c = t.getPlayheadTime), r.setGetPlayheadTime(n, c);
    }, r.init(n, t), r.emit(n, "playerready"), a.paused || (r.emit(n, "play"), a.readyState > 2 && r.emit(n, "playing")), a.mux.listeners = {}, Ri.forEach(function(c) {
        c === "error" && !t.automaticErrorTracking || (a.mux.listeners[c] = function() {
            var p1 = {};
            if (c === "error") {
                if (!a.error || a.error.code === 1) return;
                p1.player_error_code = a.error.code, p1.player_error_message = qi[a.error.code] || a.error.message;
            }
            r.emit(n, c, p1);
        }, a.addEventListener(c, a.mux.listeners[c], !1));
    }), a.mux.listeners.enterpictureinpicture = function() {
        r.emit(n, "playbackmodechange", {
            player_playback_mode: "pip",
            player_playback_mode_data: "{}"
        });
    }, a.mux.listeners.leavepictureinpicture = function() {
        var c = Ae() ? "fullscreen" : "standard";
        r.emit(n, "playbackmodechange", {
            player_playback_mode: c,
            player_playback_mode_data: "{}"
        });
    }, a.addEventListener("enterpictureinpicture", a.mux.listeners.enterpictureinpicture, !1), a.addEventListener("leavepictureinpicture", a.mux.listeners.leavepictureinpicture, !1), a.mux.fullscreenChangeListener = function() {
        var c = Ae(), p1 = document.fullscreenElement;
        if (c && (p1 === a || p1 != null && p1.contains(a))) r.emit(n, "playbackmodechange", {
            player_playback_mode: "fullscreen",
            player_playback_mode_data: "{}"
        });
        else if (!c) {
            var T = document.pictureInPictureElement === a, x = T ? "pip" : "standard";
            r.emit(n, "playbackmodechange", {
                player_playback_mode: x,
                player_playback_mode_data: "{}"
            });
        }
    }, document.addEventListener("fullscreenchange", a.mux.fullscreenChangeListener, !1);
}
function st(r, e, t, i) {
    var a = i;
    if (r && typeof r[e] == "function") try {
        a = r[e].apply(r, t);
    } catch (n) {
        q.info("safeCall error", n);
    }
    return a;
}
var ge = G(Q()), ye;
ge.default && ge.default.WeakMap && (ye = new WeakMap);
function ut(r, e) {
    if (!r || !e || !ge.default || typeof ge.default.getComputedStyle != "function") return "";
    var t;
    return ye && ye.has(r) && (t = ye.get(r)), t || (t = ge.default.getComputedStyle(r, null), ye && ye.set(r, t)), t.getPropertyValue(e);
}
function lt(r) {
    return Math.floor(r * 1e3);
}
var de = {
    TARGET_DURATION: "#EXT-X-TARGETDURATION",
    PART_INF: "#EXT-X-PART-INF",
    SERVER_CONTROL: "#EXT-X-SERVER-CONTROL",
    INF: "#EXTINF",
    PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME",
    VERSION: "#EXT-X-VERSION",
    SESSION_DATA: "#EXT-X-SESSION-DATA"
}, Ve = function(e) {
    return this.buffer = "", this.manifest = {
        segments: [],
        serverControl: {},
        sessionData: {}
    }, this.currentUri = {}, this.process(e), this.manifest;
};
Ve.prototype.process = function(r) {
    var e;
    for(this.buffer += r, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1);
};
Ve.prototype.processLine = function(r) {
    var e = r.indexOf(":"), t = Li(r, e), i = t[0], a = t.length === 2 ? ct(t[1]) : void 0;
    if (i[0] !== "#") this.currentUri.uri = i, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
    else switch(i){
        case de.TARGET_DURATION:
            {
                if (!isFinite(a) || a < 0) return;
                this.manifest.targetDuration = a, this.setHoldBack();
                break;
            }
        case de.PART_INF:
            {
                dt(this.manifest, t), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
                break;
            }
        case de.SERVER_CONTROL:
            {
                dt(this.manifest, t), this.setHoldBack();
                break;
            }
        case de.INF:
            {
                a === 0 ? this.currentUri.duration = .01 : a > 0 && (this.currentUri.duration = a);
                break;
            }
        case de.PROGRAM_DATE_TIME:
            {
                var n = a, o = new Date(n);
                this.manifest.dateTimeString || (this.manifest.dateTimeString = n, this.manifest.dateTimeObject = o), this.currentUri.dateTimeString = n, this.currentUri.dateTimeObject = o;
                break;
            }
        case de.VERSION:
            {
                dt(this.manifest, t);
                break;
            }
        case de.SESSION_DATA:
            {
                var s = Ii(t[1]), u = Me(s);
                Object.assign(this.manifest.sessionData, u);
            }
    }
};
Ve.prototype.setHoldBack = function() {
    var r = this.manifest, e = r.serverControl, t = r.targetDuration, i = r.partTargetDuration;
    if (e) {
        var a = "holdBack", n = "partHoldBack", o = t && t * 3, s = i && i * 2;
        t && !e.hasOwnProperty(a) && (e[a] = o), o && e[a] < o && (e[a] = o), i && !e.hasOwnProperty(n) && (e[n] = i * 3), i && e[n] < s && (e[n] = s);
    }
};
var dt = function(r, e) {
    var t = Jr(e[0].replace("#EXT-X-", "")), i;
    Oi(e[1]) ? (i = {}, i = Object.assign(Pi(e[1]), i)) : i = ct(e[1]), r[t] = i;
}, Jr = function(r) {
    return r.toLowerCase().replace(/-(\w)/g, function(e) {
        return e[1].toUpperCase();
    });
}, ct = function(r) {
    if (r.toLowerCase() === "yes" || r.toLowerCase() === "no") return r.toLowerCase() === "yes";
    var e = r.indexOf(":") !== -1 ? r : parseFloat(r);
    return isNaN(e) ? r : e;
}, Ai = function(r) {
    var e = {}, t = r.split("=");
    if (t.length > 1) {
        var i = Jr(t[0]);
        e[i] = ct(t[1]);
    }
    return e;
}, Pi = function(r) {
    for(var e = r.split(","), t = {}, i = 0; e.length > i; i++){
        var a = e[i], n = Ai(a);
        t = Object.assign(n, t);
    }
    return t;
}, Oi = function(r) {
    return r.indexOf("=") > -1;
}, Li = function(r, e) {
    return e === -1 ? [
        r
    ] : [
        r.substring(0, e),
        r.substring(e + 1)
    ];
}, Ii = function(r) {
    var e = {};
    if (r) {
        var t = r.search(","), i = r.slice(0, t), a = r.slice(t + 1), n = [
            i,
            a
        ];
        return n.forEach(function(o, s) {
            for(var u = o.replace(/['"]+/g, "").split("="), f = 0; f < u.length; f++)u[f] === "DATA-ID" && (e["DATA-ID"] = u[1 - f]), u[f] === "VALUE" && (e.VALUE = u[1 - f]);
        }), {
            data: e
        };
    }
}, Qr = Ve;
var Ni = {
    safeCall: st,
    safeIncrement: P,
    getComputedStyle: ut,
    secondsToMs: lt,
    assign: Object.assign,
    headersStringToObject: pe,
    cdnHeadersToRequestId: le,
    extractHostnameAndDomain: re,
    extractHostname: F,
    manifestParser: Qr,
    generateShortID: Oe,
    generateUUID: ee,
    now: A.now,
    findMediaElement: se
}, zr = Ni;
var Ci = {
    PLAYER_READY: "playerready",
    VIEW_INIT: "viewinit",
    VIDEO_CHANGE: "videochange",
    PLAY: "play",
    PAUSE: "pause",
    PLAYING: "playing",
    TIME_UPDATE: "timeupdate",
    SEEKING: "seeking",
    SEEKED: "seeked",
    REBUFFER_START: "rebufferstart",
    REBUFFER_END: "rebufferend",
    ERROR: "error",
    ENDED: "ended",
    RENDITION_CHANGE: "renditionchange",
    ORIENTATION_CHANGE: "orientationchange",
    PLAYBACK_MODE_CHANGE: "playbackmodechange",
    AD_REQUEST: "adrequest",
    AD_RESPONSE: "adresponse",
    AD_BREAK_START: "adbreakstart",
    AD_PLAY: "adplay",
    AD_PLAYING: "adplaying",
    AD_PAUSE: "adpause",
    AD_FIRST_QUARTILE: "adfirstquartile",
    AD_MID_POINT: "admidpoint",
    AD_THIRD_QUARTILE: "adthirdquartile",
    AD_ENDED: "adended",
    AD_BREAK_END: "adbreakend",
    AD_ERROR: "aderror",
    REQUEST_COMPLETED: "requestcompleted",
    REQUEST_FAILED: "requestfailed",
    REQUEST_CANCELLED: "requestcanceled",
    HEARTBEAT: "hb",
    DESTROY: "destroy"
}, Kr = Ci;
var Mi = "mux-embed", Hi = "5.16.1", Bi = "2.1", C = {}, ne = function(e) {
    var t = arguments;
    typeof e == "string" ? ne.hasOwnProperty(e) ? be.default.setTimeout(function() {
        t = Array.prototype.splice.call(t, 1), ne[e].apply(null, t);
    }, 0) : q.warn("`" + e + "` is an unknown task") : typeof e == "function" ? be.default.setTimeout(function() {
        e(ne);
    }, 0) : q.warn("`" + e + "` is invalid.");
}, Ui = {
    loaded: A.now(),
    NAME: Mi,
    VERSION: Hi,
    API_VERSION: Bi,
    PLAYER_TRACKED: !1,
    monitor: function(e, t) {
        return ot(ne, e, t);
    },
    destroyMonitor: function(e) {
        var t = H(se(e), 1), i = t[0];
        i && i.mux && typeof i.mux.destroy == "function" ? i.mux.destroy() : q.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
    },
    addHLSJS: function(e, t) {
        var i = J(e);
        C[i] ? C[i].addHLSJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    addDashJS: function(e, t) {
        var i = J(e);
        C[i] ? C[i].addDashJS(t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    removeHLSJS: function(e) {
        var t = J(e);
        C[t] ? C[t].removeHLSJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    removeDashJS: function(e) {
        var t = J(e);
        C[t] ? C[t].removeDashJS() : q.error("A monitor for `" + t + "` has not been initialized.");
    },
    init: function(e, t) {
        ce() && t && t.respectDoNotTrack && q.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
        var i = J(e);
        C[i] = new Gr(ne, i, t);
    },
    emit: function(e, t, i) {
        var a = J(e);
        C[a] ? (C[a].emit(t, i), t === "destroy" && delete C[a]) : q.error("A monitor for `" + a + "` has not been initialized.");
    },
    updateData: function(e, t) {
        var i = J(e);
        C[i] ? C[i].emit("hb", t) : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setEmitTranslator: function(e, t) {
        var i = J(e);
        C[i] ? C[i].emitTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setStateDataTranslator: function(e, t) {
        var i = J(e);
        C[i] ? C[i].stateDataTranslator = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    setGetPlayheadTime: function(e, t) {
        var i = J(e);
        C[i] ? C[i].getPlayheadTime = t : q.error("A monitor for `" + i + "` has not been initialized.");
    },
    checkDoNotTrack: ce,
    log: q,
    utils: zr,
    events: Kr,
    WINDOW_HIDDEN: !1,
    WINDOW_UNLOADING: !1
};
Object.assign(ne, Ui);
typeof be.default != "undefined" && typeof be.default.addEventListener == "function" && be.default.addEventListener("pagehide", function(r) {
    r.persisted || (ne.WINDOW_UNLOADING = !0);
}, !1);
var jl = ne;
;
 /*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/ }),
"[project]/Desktop/vikkmore/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AutoplayTypes",
    ()=>Y,
    "CmcdTypeValues",
    ()=>Zt,
    "CmcdTypes",
    ()=>w,
    "ExtensionMimeTypeMap",
    ()=>S,
    "Hls",
    ()=>E,
    "MaxAutoResolution",
    ()=>ar,
    "MaxResolution",
    ()=>rr,
    "MediaError",
    ()=>T,
    "MimeTypeShorthandMap",
    ()=>F,
    "MinCapLevelController",
    ()=>z,
    "MinResolution",
    ()=>nr,
    "MuxErrorCategory",
    ()=>D,
    "MuxErrorCode",
    ()=>b,
    "MuxJWTAud",
    ()=>ce,
    "PlaybackTypes",
    ()=>Q,
    "RenditionOrder",
    ()=>or,
    "StreamTypes",
    ()=>h,
    "addChapters",
    ()=>Ie,
    "addCuePoints",
    ()=>ke,
    "addTextTrack",
    ()=>ae,
    "allMediaTypes",
    ()=>tr,
    "errorCategoryToTokenNameOrPrefix",
    ()=>W,
    "fetchAndDispatchMuxMetadata",
    ()=>pe,
    "generatePlayerInitTime",
    ()=>Qr,
    "generateUUID",
    ()=>It,
    "getActiveChapter",
    ()=>Ne,
    "getActiveCuePoint",
    ()=>Le,
    "getAppCertificate",
    ()=>Ft,
    "getCapLevelControllerConfig",
    ()=>Jt,
    "getChapters",
    ()=>lt,
    "getCuePoints",
    ()=>dt,
    "getCurrentPdt",
    ()=>ft,
    "getDRMConfig",
    ()=>Yt,
    "getEnded",
    ()=>Ut,
    "getError",
    ()=>wt,
    "getLicenseKey",
    ()=>$t,
    "getLiveEdgeStart",
    ()=>rn,
    "getMediaPlaylistFromMultivariantPlaylist",
    ()=>xt,
    "getMetadata",
    ()=>en,
    "getMultivariantPlaylistSessionData",
    ()=>Rt,
    "getSeekable",
    ()=>ze,
    "getStartDate",
    ()=>pt,
    "getStreamInfoFromHlsjsLevelDetails",
    ()=>ht,
    "getStreamInfoFromPlaylist",
    ()=>Dt,
    "getStreamInfoFromSrcAndType",
    ()=>vt,
    "getStreamType",
    ()=>He,
    "getStreamTypeConfig",
    ()=>Wt,
    "getTargetLiveWindow",
    ()=>tn,
    "getTextTrack",
    ()=>O,
    "i18n",
    ()=>x,
    "initialize",
    ()=>nn,
    "isKeyOf",
    ()=>U,
    "isMuxVideoSrc",
    ()=>Ze,
    "isPseudoEnded",
    ()=>Ht,
    "isStuckOnLastFragment",
    ()=>Ge,
    "loadMedia",
    ()=>zt,
    "muxMediaState",
    ()=>P,
    "parseJwt",
    ()=>re,
    "parseTagAttributes",
    ()=>Ct,
    "removeTextTrack",
    ()=>ut,
    "setupChapters",
    ()=>we,
    "setupCuePoints",
    ()=>Ae,
    "setupHls",
    ()=>Kt,
    "setupMux",
    ()=>jt,
    "setupNativeFairplayDRM",
    ()=>Bt,
    "shorthandKeys",
    ()=>er,
    "teardown",
    ()=>Vt,
    "toAppCertURL",
    ()=>Qe,
    "toDRMTypeFromKeySystem",
    ()=>Mt,
    "toLicenseKeyURL",
    ()=>G,
    "toMuxVideoURL",
    ()=>Zr,
    "toPlaybackIdFromSrc",
    ()=>je,
    "toPlaybackIdParts",
    ()=>B,
    "updateStreamInfoFromHlsjsLevelDetails",
    ()=>_t,
    "updateStreamInfoFromSrc",
    ()=>Pt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/mux-embed/dist/mux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/hls.js/dist/hls.mjs [app-client] (ecmascript)");
;
;
var E = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
;
var D = {
    VIDEO: "video",
    THUMBNAIL: "thumbnail",
    STORYBOARD: "storyboard",
    DRM: "drm"
}, b = {
    NOT_AN_ERROR: 0,
    NETWORK_OFFLINE: 2000002,
    NETWORK_UNKNOWN_ERROR: 2e6,
    NETWORK_NO_STATUS: 2000001,
    NETWORK_INVALID_URL: 24e5,
    NETWORK_NOT_FOUND: 2404e3,
    NETWORK_NOT_READY: 2412e3,
    NETWORK_GENERIC_SERVER_FAIL: 25e5,
    NETWORK_TOKEN_MISSING: 2403201,
    NETWORK_TOKEN_MALFORMED: 2412202,
    NETWORK_TOKEN_EXPIRED: 2403210,
    NETWORK_TOKEN_AUD_MISSING: 2403221,
    NETWORK_TOKEN_AUD_MISMATCH: 2403222,
    NETWORK_TOKEN_SUB_MISMATCH: 2403232,
    ENCRYPTED_ERROR: 5e6,
    ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001,
    ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002,
    ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003,
    ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004,
    ENCRYPTED_CDM_ERROR: 5000005,
    ENCRYPTED_OUTPUT_RESTRICTED: 5000006,
    ENCRYPTED_MISSING_TOKEN: 5000002
}, W = (e)=>e === D.VIDEO ? "playback" : e, L = class L extends Error {
    constructor(t, r = L.MEDIA_ERR_CUSTOM, n, o){
        var s;
        super(t), this.name = "MediaError", this.code = r, this.context = o, this.fatal = n != null ? n : r >= L.MEDIA_ERR_NETWORK && r <= L.MEDIA_ERR_ENCRYPTED, this.message || (this.message = (s = L.defaultMessages[this.code]) != null ? s : "");
    }
};
L.MEDIA_ERR_ABORTED = 1, L.MEDIA_ERR_NETWORK = 2, L.MEDIA_ERR_DECODE = 3, L.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, L.MEDIA_ERR_ENCRYPTED = 5, L.MEDIA_ERR_CUSTOM = 100, L.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail.",
    3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
    4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
    5: "The media is encrypted and there are no keys to decrypt it."
};
var T = L;
var nt = (e)=>e == null, U = (e, t)=>nt(t) ? !1 : e in t, Y = {
    ANY: "any",
    MUTED: "muted"
}, h = {
    ON_DEMAND: "on-demand",
    LIVE: "live",
    UNKNOWN: "unknown"
}, Q = {
    MSE: "mse",
    NATIVE: "native"
}, w = {
    HEADER: "header",
    QUERY: "query",
    NONE: "none"
}, Zt = Object.values(w), S = {
    M3U8: "application/vnd.apple.mpegurl",
    MP4: "video/mp4"
}, F = {
    HLS: S.M3U8
}, er = Object.keys(F), tr = [
    ...Object.values(S),
    "hls",
    "HLS"
], rr = {
    upTo720p: "720p",
    upTo1080p: "1080p",
    upTo1440p: "1440p",
    upTo2160p: "2160p"
}, nr = {
    noLessThan480p: "480p",
    noLessThan540p: "540p",
    noLessThan720p: "720p",
    noLessThan1080p: "1080p",
    noLessThan1440p: "1440p",
    noLessThan2160p: "2160p"
}, or = {
    DESCENDING: "desc"
}, ar = {
    upTo720p: "720p",
    upTo1080p: "1080p",
    upTo1440p: "1440p",
    upTo2160p: "2160p"
};
var ot = "en", $ = {
    code: ot
};
var v = (e, t, r, n, o = e)=>{
    o.addEventListener(t, r, n), e.addEventListener("teardown", ()=>{
        o.removeEventListener(t, r);
    }, {
        once: !0
    });
};
function me(e, t, r) {
    t && r > t && (r = t);
    for(let n = 0; n < e.length; n++)if (e.start(n) <= r && e.end(n) >= r) return !0;
    return !1;
}
var B = (e)=>{
    let t = e.indexOf("?");
    if (t < 0) return [
        e
    ];
    let r = e.slice(0, t), n = e.slice(t);
    return [
        r,
        n
    ];
}, V = (e)=>{
    let { type: t } = e;
    if (t) {
        let r = t.toUpperCase();
        return U(r, F) ? F[r] : t;
    }
    return at(e);
}, ee = (e)=>e === "VOD" ? h.ON_DEMAND : h.LIVE, te = (e)=>e === "EVENT" ? Number.POSITIVE_INFINITY : e === "VOD" ? Number.NaN : 0, at = (e)=>{
    let { src: t } = e;
    if (!t) return "";
    let r = "";
    try {
        r = new URL(t).pathname;
    } catch  {
        console.error("invalid url");
    }
    let n = r.lastIndexOf(".");
    if (n < 0) return it(e) ? S.M3U8 : "";
    let s = r.slice(n + 1).toUpperCase();
    return U(s, S) ? S[s] : "";
}, st = "mux.com", it = ({ src: e, customDomain: t = st })=>{
    let r;
    try {
        r = new URL(`${e}`);
    } catch  {
        return !1;
    }
    let n = r.protocol === "https:", o = r.hostname === `stream.${t}`.toLowerCase(), s = r.pathname.split("/"), a = s.length === 2, i = !(s != null && s[1].includes("."));
    return n && o && a && i;
}, re = (e)=>{
    let t = (e != null ? e : "").split(".")[1];
    if (t) try {
        let r = t.replace(/-/g, "+").replace(/_/g, "/"), n = decodeURIComponent(atob(r).split("").map(function(o) {
            return "%" + ("00" + o.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        return JSON.parse(n);
    } catch  {
        return;
    }
}, Ee = ({ exp: e }, t = Date.now())=>!e || e * 1e3 < t, ge = ({ sub: e }, t)=>e !== t, Me = ({ aud: e }, t)=>!e, xe = ({ aud: e }, t)=>e !== t, Re = "en";
function x(e, t = !0) {
    var o, s;
    let r = t && (s = (o = $) == null ? void 0 : o[e]) != null ? s : e, n = t ? $.code : Re;
    return new Z(r, n);
}
var Z = class {
    constructor(t, r = ((n)=>(n = $) != null ? n : Re)()){
        this.message = t, this.locale = r;
    }
    format(t) {
        return this.message.replace(/\{(\w+)\}/g, (r, n)=>{
            var o;
            return (o = t[n]) != null ? o : "";
        });
    }
    toString() {
        return this.message;
    }
};
var ct = Object.values(Y), be = (e)=>typeof e == "boolean" || typeof e == "string" && ct.includes(e), Ce = (e, t, r)=>{
    let { autoplay: n } = e, o = !1, s = !1, a = be(n) ? n : !!n, i = ()=>{
        o || v(t, "playing", ()=>{
            o = !0;
        }, {
            once: !0
        });
    };
    if (i(), v(t, "loadstart", ()=>{
        o = !1, i(), ne(t, a);
    }, {
        once: !0
    }), v(t, "loadstart", ()=>{
        r || (e.streamType && e.streamType !== h.UNKNOWN ? s = e.streamType === h.LIVE : s = !Number.isFinite(t.duration)), ne(t, a);
    }, {
        once: !0
    }), r && r.once(E.Events.LEVEL_LOADED, (d, l)=>{
        var u;
        e.streamType && e.streamType !== h.UNKNOWN ? s = e.streamType === h.LIVE : s = (u = l.details.live) != null ? u : !1;
    }), !a) {
        let d = ()=>{
            !s || Number.isFinite(e.startTime) || (r != null && r.liveSyncPosition ? t.currentTime = r.liveSyncPosition : Number.isFinite(t.seekable.end(0)) && (t.currentTime = t.seekable.end(0)));
        };
        r && v(t, "play", ()=>{
            t.preload === "metadata" ? r.once(E.Events.LEVEL_UPDATED, d) : d();
        }, {
            once: !0
        });
    }
    return (d)=>{
        o || (a = be(d) ? d : !!d, ne(t, a));
    };
}, ne = (e, t)=>{
    if (!t) return;
    let r = e.muted, n = ()=>e.muted = r;
    switch(t){
        case Y.ANY:
            e.play().catch(()=>{
                e.muted = !0, e.play().catch(n);
            });
            break;
        case Y.MUTED:
            e.muted = !0, e.play().catch(n);
            break;
        default:
            e.play().catch(()=>{});
            break;
    }
};
var De = ({ preload: e, src: t }, r, n)=>{
    let o = (u)=>{
        u != null && [
            "",
            "none",
            "metadata",
            "auto"
        ].includes(u) ? r.setAttribute("preload", u) : r.removeAttribute("preload");
    };
    if (!n) return o(e), o;
    let s = !1, a = !1, i = n.config.maxBufferLength, c = n.config.maxBufferSize, d = (u)=>{
        o(u);
        let y = u != null ? u : r.preload;
        a || y === "none" || (y === "metadata" ? (n.config.maxBufferLength = 1, n.config.maxBufferSize = 1) : (n.config.maxBufferLength = i, n.config.maxBufferSize = c), l());
    }, l = ()=>{
        !s && t && (s = !0, n.loadSource(t));
    };
    return v(r, "play", ()=>{
        a = !0, n.config.maxBufferLength = i, n.config.maxBufferSize = c, l();
    }, {
        once: !0
    }), d(e), d;
};
function ve(e, t) {
    var i;
    if (!("videoTracks" in e)) return;
    let r = new WeakMap;
    t.on(E.Events.MANIFEST_PARSED, function(c, d) {
        a();
        let l = e.addVideoTrack("main");
        l.selected = !0;
        for (let [u, y] of d.levels.entries()){
            let m = l.addRendition(y.url[0], y.width, y.height, y.videoCodec, y.bitrate);
            r.set(y, `${u}`), m.id = `${u}`;
        }
    }), t.on(E.Events.AUDIO_TRACKS_UPDATED, function(c, d) {
        s();
        for (let l of d.audioTracks){
            let u = l.default ? "main" : "alternative", y = e.addAudioTrack(u, l.name, l.lang);
            y.id = `${l.id}`, l.default && (y.enabled = !0);
        }
    }), e.audioTracks.addEventListener("change", ()=>{
        var l;
        let c = +((l = [
            ...e.audioTracks
        ].find((u)=>u.enabled)) == null ? void 0 : l.id), d = t.audioTracks.map((u)=>u.id);
        c != t.audioTrack && d.includes(c) && (t.audioTrack = c);
    }), t.on(E.Events.LEVELS_UPDATED, function(c, d) {
        var y;
        let l = e.videoTracks[(y = e.videoTracks.selectedIndex) != null ? y : 0];
        if (!l) return;
        let u = d.levels.map((m)=>r.get(m));
        for (let m of e.videoRenditions)m.id && !u.includes(m.id) && l.removeRendition(m);
    });
    let n = (c)=>{
        let d = c.target.selectedIndex;
        d != t.nextLevel && (t.nextLevel = d);
    };
    (i = e.videoRenditions) == null || i.addEventListener("change", n);
    let o = ()=>{
        for (let c of e.videoTracks)e.removeVideoTrack(c);
    }, s = ()=>{
        for (let c of e.audioTracks)e.removeAudioTrack(c);
    }, a = ()=>{
        o(), s();
    };
    t.once(E.Events.DESTROYING, a);
}
var oe = (e)=>"time" in e ? e.time : e.startTime;
function Pe(e, t) {
    t.on(E.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (o, { tracks: s })=>{
        s.forEach((a)=>{
            var l, u;
            let i = (l = a.subtitleTrack) != null ? l : a.closedCaptions, c = t.subtitleTracks.findIndex(({ lang: y, name: m, type: f })=>y == (i == null ? void 0 : i.lang) && m === a.label && f.toLowerCase() === a.kind), d = ((u = a._id) != null ? u : a.default) ? "default" : `${a.kind}${c}`;
            ae(e, a.kind, a.label, i == null ? void 0 : i.lang, d, a.default);
        });
    });
    let r = ()=>{
        if (!t.subtitleTracks.length) return;
        let o = Array.from(e.textTracks).find((i)=>i.id && i.mode === "showing" && [
                "subtitles",
                "captions"
            ].includes(i.kind));
        if (!o) return;
        let s = t.subtitleTracks[t.subtitleTrack], a = s ? s.default ? "default" : `${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}` : void 0;
        if (t.subtitleTrack < 0 || (o == null ? void 0 : o.id) !== a) {
            let i = t.subtitleTracks.findIndex(({ lang: c, name: d, type: l, default: u })=>o.id === "default" && u || c == o.language && d === o.label && l.toLowerCase() === o.kind);
            t.subtitleTrack = i;
        }
        (o == null ? void 0 : o.id) === a && o.cues && Array.from(o.cues).forEach((i)=>{
            o.addCue(i);
        });
    };
    e.textTracks.addEventListener("change", r), t.on(E.Events.CUES_PARSED, (o, { track: s, cues: a })=>{
        let i = e.textTracks.getTrackById(s);
        if (!i) return;
        let c = i.mode === "disabled";
        c && (i.mode = "hidden"), a.forEach((d)=>{
            var l;
            (l = i.cues) != null && l.getCueById(d.id) || i.addCue(d);
        }), c && (i.mode = "disabled");
    }), t.once(E.Events.DESTROYING, ()=>{
        e.textTracks.removeEventListener("change", r), e.querySelectorAll("track[data-removeondestroy]").forEach((s)=>{
            s.remove();
        });
    });
    let n = ()=>{
        Array.from(e.textTracks).forEach((o)=>{
            var s, a;
            if (![
                "subtitles",
                "caption"
            ].includes(o.kind) && (o.label === "thumbnails" || o.kind === "chapters")) {
                if (!((s = o.cues) != null && s.length)) {
                    let i = "track";
                    o.kind && (i += `[kind="${o.kind}"]`), o.label && (i += `[label="${o.label}"]`);
                    let c = e.querySelector(i), d = (a = c == null ? void 0 : c.getAttribute("src")) != null ? a : "";
                    c == null || c.removeAttribute("src"), setTimeout(()=>{
                        c == null || c.setAttribute("src", d);
                    }, 0);
                }
                o.mode !== "hidden" && (o.mode = "hidden");
            }
        });
    };
    t.once(E.Events.MANIFEST_LOADED, n), t.once(E.Events.MEDIA_ATTACHED, n);
}
function ae(e, t, r, n, o, s) {
    let a = document.createElement("track");
    return a.kind = t, a.label = r, n && (a.srclang = n), o && (a.id = o), s && (a.default = !0), a.track.mode = [
        "subtitles",
        "captions"
    ].includes(t) ? "disabled" : "hidden", a.setAttribute("data-removeondestroy", ""), e.append(a), a.track;
}
function ut(e, t) {
    let r = Array.prototype.find.call(e.querySelectorAll("track"), (n)=>n.track === t);
    r == null || r.remove();
}
function O(e, t, r) {
    var n;
    return (n = Array.from(e.querySelectorAll("track")).find((o)=>o.track.label === t && o.track.kind === r)) == null ? void 0 : n.track;
}
async function he(e, t, r, n) {
    let o = O(e, r, n);
    return o || (o = ae(e, n, r), o.mode = "hidden", await new Promise((s)=>setTimeout(()=>s(void 0), 0))), o.mode !== "hidden" && (o.mode = "hidden"), [
        ...t
    ].sort((s, a)=>oe(a) - oe(s)).forEach((s)=>{
        var c, d;
        let a = s.value, i = oe(s);
        if ("endTime" in s && s.endTime != null) o == null || o.addCue(new VTTCue(i, s.endTime, n === "chapters" ? a : JSON.stringify(a != null ? a : null)));
        else {
            let l = Array.prototype.findIndex.call(o == null ? void 0 : o.cues, (f)=>f.startTime >= i), u = (c = o == null ? void 0 : o.cues) == null ? void 0 : c[l], y = u ? u.startTime : Number.isFinite(e.duration) ? e.duration : Number.MAX_SAFE_INTEGER, m = (d = o == null ? void 0 : o.cues) == null ? void 0 : d[l - 1];
            m && (m.endTime = i), o == null || o.addCue(new VTTCue(i, y, n === "chapters" ? a : JSON.stringify(a != null ? a : null)));
        }
    }), e.textTracks.dispatchEvent(new Event("change", {
        bubbles: !0,
        composed: !0
    })), o;
}
var se = "cuepoints", _e = Object.freeze({
    label: se
});
async function ke(e, t, r = _e) {
    return he(e, t, r.label, "metadata");
}
var J = (e)=>({
        time: e.startTime,
        value: JSON.parse(e.text)
    });
function dt(e, t = {
    label: se
}) {
    let r = O(e, t.label, "metadata");
    return r != null && r.cues ? Array.from(r.cues, (n)=>J(n)) : [];
}
function Le(e, t = {
    label: se
}) {
    var s, a;
    let r = O(e, t.label, "metadata");
    if (!((s = r == null ? void 0 : r.activeCues) != null && s.length)) return;
    if (r.activeCues.length === 1) return J(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((a = r.activeCues) != null ? a : [], ({ startTime: i, endTime: c })=>i <= n && c > n);
    return J(o || r.activeCues[0]);
}
async function Ae(e, t = _e) {
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await ke(e, [], t);
            v(e, "cuechange", ()=>{
                let o = Le(e);
                if (o) {
                    let s = new CustomEvent("cuepointchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(s);
                }
            }, {}, n), r(n);
        });
    });
}
var ie = "chapters", Se = Object.freeze({
    label: ie
}), j = (e)=>({
        startTime: e.startTime,
        endTime: e.endTime,
        value: e.text
    });
async function Ie(e, t, r = Se) {
    return he(e, t, r.label, "chapters");
}
function lt(e, t = {
    label: ie
}) {
    var n;
    let r = O(e, t.label, "chapters");
    return (n = r == null ? void 0 : r.cues) != null && n.length ? Array.from(r.cues, (o)=>j(o)) : [];
}
function Ne(e, t = {
    label: ie
}) {
    var s, a;
    let r = O(e, t.label, "chapters");
    if (!((s = r == null ? void 0 : r.activeCues) != null && s.length)) return;
    if (r.activeCues.length === 1) return j(r.activeCues[0]);
    let { currentTime: n } = e, o = Array.prototype.find.call((a = r.activeCues) != null ? a : [], ({ startTime: i, endTime: c })=>i <= n && c > n);
    return j(o || r.activeCues[0]);
}
async function we(e, t = Se) {
    return new Promise((r)=>{
        v(e, "loadstart", async ()=>{
            let n = await Ie(e, [], t);
            v(e, "cuechange", ()=>{
                let o = Ne(e);
                if (o) {
                    let s = new CustomEvent("chapterchange", {
                        composed: !0,
                        bubbles: !0,
                        detail: o
                    });
                    e.dispatchEvent(s);
                }
            }, {}, n), r(n);
        });
    });
}
function pt(e, t) {
    if (t) {
        let r = t.playingDate;
        if (r != null) return new Date(r.getTime() - e.currentTime * 1e3);
    }
    return typeof e.getStartDate == "function" ? e.getStartDate() : new Date(NaN);
}
function ft(e, t) {
    if (t && t.playingDate) return t.playingDate;
    if (typeof e.getStartDate == "function") {
        let r = e.getStartDate();
        return new Date(r.getTime() + e.currentTime * 1e3);
    }
    return new Date(NaN);
}
var ce = {
    VIDEO: "v",
    THUMBNAIL: "t",
    STORYBOARD: "s",
    DRM: "d"
}, Tt = (e)=>{
    if (e === D.VIDEO) return ce.VIDEO;
    if (e === D.DRM) return ce.DRM;
}, yt = (e, t)=>{
    var o, s;
    let r = W(e), n = `${r}Token`;
    return (o = t.tokens) != null && o[r] ? (s = t.tokens) == null ? void 0 : s[r] : U(n, t) ? t[n] : void 0;
}, K = (e, t, r, n, o = !1, s = !((a)=>(a = globalThis.navigator) == null ? void 0 : a.onLine)())=>{
    var M, k;
    if (s) {
        let R = x("Your device appears to be offline", o), C = void 0, p = T.MEDIA_ERR_NETWORK, _ = new T(R, p, !1, C);
        return _.errorCategory = t, _.muxCode = b.NETWORK_OFFLINE, _.data = e, _;
    }
    let i = "status" in e ? e.status : e.code, c = Date.now(), d = T.MEDIA_ERR_NETWORK;
    if (i === 200) return;
    let l = W(t), u = yt(t, r), y = Tt(t), [m] = B((M = r.playbackId) != null ? M : "");
    if (!i || !m) return;
    let f = re(u);
    if (u && !f) {
        let R = x("The {tokenNamePrefix}-token provided is invalid or malformed.", o).format({
            tokenNamePrefix: l
        }), C = x("Compact JWT string: {token}", o).format({
            token: u
        }), p = new T(R, d, !0, C);
        return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_MALFORMED, p.data = e, p;
    }
    if (i >= 500) {
        let R = new T("", d, n != null ? n : !0);
        return R.errorCategory = t, R.muxCode = b.NETWORK_UNKNOWN_ERROR, R;
    }
    if (i === 403) if (f) {
        if (Ee(f, c)) {
            let R = {
                timeStyle: "medium",
                dateStyle: "medium"
            }, C = x("The video\u2019s secured {tokenNamePrefix}-token has expired.", o).format({
                tokenNamePrefix: l
            }), p = x("Expired at: {expiredDate}. Current time: {currentDate}.", o).format({
                expiredDate: new Intl.DateTimeFormat("en", R).format((k = f.exp) != null ? k : 0 * 1e3),
                currentDate: new Intl.DateTimeFormat("en", R).format(c)
            }), _ = new T(C, d, !0, p);
            return _.errorCategory = t, _.muxCode = b.NETWORK_TOKEN_EXPIRED, _.data = e, _;
        }
        if (ge(f, m)) {
            let R = x("The video\u2019s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", o).format({
                tokenNamePrefix: l
            }), C = x("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}", o).format({
                tokenNamePrefix: l,
                playbackId: m,
                tokenPlaybackId: f.sub
            }), p = new T(R, d, !0, C);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_SUB_MISMATCH, p.data = e, p;
        }
        if (Me(f, y)) {
            let R = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: l
            }), C = x("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: l,
                expectedAud: y
            }), p = new T(R, d, !0, C);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_AUD_MISSING, p.data = e, p;
        }
        if (xe(f, y)) {
            let R = x("The {tokenNamePrefix}-token is formatted with incorrect information.", o).format({
                tokenNamePrefix: l
            }), C = x("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.", o).format({
                tokenNamePrefix: l,
                expectedAud: y,
                aud: f.aud
            }), p = new T(R, d, !0, C);
            return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_AUD_MISMATCH, p.data = e, p;
        }
    } else {
        let R = x("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.", o).format({
            tokenNamePrefix: l,
            category: t
        }), C = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, C);
        return p.errorCategory = t, p.muxCode = b.NETWORK_TOKEN_MISSING, p.data = e, p;
    }
    if (i === 412) {
        let R = x("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.", o), C = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, C);
        return p.errorCategory = t, p.muxCode = b.NETWORK_NOT_READY, p.streamType = r.streamType === h.LIVE ? "live" : r.streamType === h.ON_DEMAND ? "on-demand" : "unknown", p.data = e, p;
    }
    if (i === 404) {
        let R = x("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.", o), C = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, C);
        return p.errorCategory = t, p.muxCode = b.NETWORK_NOT_FOUND, p.data = e, p;
    }
    if (i === 400) {
        let R = x("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."), C = x("Specified playback ID: {playbackId}", o).format({
            playbackId: m
        }), p = new T(R, d, n != null ? n : !0, C);
        return p.errorCategory = t, p.muxCode = b.NETWORK_INVALID_URL, p.data = e, p;
    }
    let g = new T("", d, n != null ? n : !0);
    return g.errorCategory = t, g.muxCode = b.NETWORK_UNKNOWN_ERROR, g.data = e, g;
};
var Oe = E.DefaultConfig.capLevelController, mt = {
    "720p": 921600,
    "1080p": 2073600,
    "1440p": 4194304,
    "2160p": 8294400
};
function Et(e) {
    let t = e.toLowerCase().trim();
    return mt[t];
}
var N = class N extends Oe {
    constructor(t){
        super(t);
    }
    static setMaxAutoResolution(t, r) {
        r ? N.maxAutoResolution.set(t, r) : N.maxAutoResolution.delete(t);
    }
    getMaxAutoResolution() {
        var r;
        let t = this.hls;
        return (r = N.maxAutoResolution.get(t)) != null ? r : void 0;
    }
    get levels() {
        var t;
        return (t = this.hls.levels) != null ? t : [];
    }
    getValidLevels(t) {
        return this.levels.filter((r, n)=>this.isLevelAllowed(r) && n <= t);
    }
    getMaxLevelCapped(t) {
        let r = this.getValidLevels(t), n = this.getMaxAutoResolution();
        if (!n) return super.getMaxLevel(t);
        let o = Et(n);
        if (!o) return super.getMaxLevel(t);
        let s = r.filter((c)=>c.width * c.height <= o), a = s.findIndex((c)=>c.width * c.height === o);
        if (a !== -1) {
            let c = s[a];
            return r.findIndex((d)=>d === c);
        }
        if (s.length === 0) return 0;
        let i = s[s.length - 1];
        return r.findIndex((c)=>c === i);
    }
    getMaxLevel(t) {
        if (this.getMaxAutoResolution() !== void 0) return this.getMaxLevelCapped(t);
        let r = super.getMaxLevel(t), n = this.getValidLevels(t);
        if (!n[r]) return r;
        let o = Math.min(n[r].width, n[r].height), s = N.minMaxResolution;
        return o >= s ? r : Oe.getMaxLevelByMediaSize(n, s * (16 / 9), s);
    }
};
N.minMaxResolution = 720, N.maxAutoResolution = new WeakMap;
var ue = N, z = ue;
var q = {
    FAIRPLAY: "fairplay",
    PLAYREADY: "playready",
    WIDEVINE: "widevine"
}, Mt = (e)=>{
    if (e.includes("fps")) return q.FAIRPLAY;
    if (e.includes("playready")) return q.PLAYREADY;
    if (e.includes("widevine")) return q.WIDEVINE;
}, xt = (e)=>{
    let t = e.split(`
`).find((r, n, o)=>n && o[n - 1].startsWith("#EXT-X-STREAM-INF"));
    return fetch(t).then((r)=>r.status !== 200 ? Promise.reject(r) : r.text());
}, Rt = (e)=>{
    let t = e.split(`
`).filter((n)=>n.startsWith("#EXT-X-SESSION-DATA"));
    if (!t.length) return {};
    let r = {};
    for (let n of t){
        let o = Ct(n), s = o["DATA-ID"];
        s && (r[s] = {
            ...o
        });
    }
    return {
        sessionData: r
    };
}, bt = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;
function Ct(e) {
    let t = [
        ...e.matchAll(bt)
    ];
    return Object.fromEntries(t.map(([, r, n])=>[
            r,
            n
        ]));
}
var Dt = (e)=>{
    var i, c, d;
    let t = e.split(`
`), n = (c = ((i = t.find((l)=>l.startsWith("#EXT-X-PLAYLIST-TYPE"))) != null ? i : "").split(":")[1]) == null ? void 0 : c.trim(), o = ee(n), s = te(n), a;
    if (o === h.LIVE) {
        let l = t.find((y)=>y.startsWith("#EXT-X-PART-INF"));
        if (!!l) a = +l.split(":")[1].split("=")[1] * 2;
        else {
            let y = t.find((g)=>g.startsWith("#EXT-X-TARGETDURATION")), m = (d = y == null ? void 0 : y.split(":")) == null ? void 0 : d[1];
            a = +(m != null ? m : 6) * 3;
        }
    }
    return {
        streamType: o,
        targetLiveWindow: s,
        liveEdgeStartOffset: a
    };
}, vt = async (e, t)=>{
    if (t === S.MP4) return {
        streamType: h.ON_DEMAND,
        targetLiveWindow: Number.NaN,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
    if (t === S.M3U8) {
        let r = await fetch(e);
        if (!r.ok) return Promise.reject(r);
        let n = await r.text(), o = await xt(n);
        return {
            ...Rt(n),
            ...Dt(o)
        };
    }
    return console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`), {
        streamType: void 0,
        targetLiveWindow: void 0,
        liveEdgeStartOffset: void 0,
        sessionData: void 0
    };
}, Pt = async (e, t, r = V({
    src: e
}))=>{
    var c, d, l, u;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: s, sessionData: a } = await vt(e, r), i = a == null ? void 0 : a["com.apple.hls.chapters"];
    (i != null && i.URI || i != null && i.VALUE.toLocaleLowerCase().startsWith("http")) && pe((c = i.URI) != null ? c : i.VALUE, t), ((d = P.get(t)) != null ? d : {}).liveEdgeStartOffset = s, ((l = P.get(t)) != null ? l : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((u = P.get(t)) != null ? u : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, pe = async (e, t)=>{
    var r, n;
    try {
        let o = await fetch(e);
        if (!o.ok) throw new Error(`Failed to fetch Mux metadata: ${o.status} ${o.statusText}`);
        let s = await o.json(), a = {};
        if (!((r = s == null ? void 0 : s[0]) != null && r.metadata)) return;
        for (let c of s[0].metadata)c.key && c.value && (a[c.key] = c.value);
        ((n = P.get(t)) != null ? n : {}).metadata = a;
        let i = new CustomEvent("muxmetadata");
        t.dispatchEvent(i);
    } catch (o) {
        console.error(o);
    }
}, ht = (e)=>{
    var a;
    let t = e.type, r = ee(t), n = te(t), o, s = !!((a = e.partList) != null && a.length);
    return r === h.LIVE && (o = s ? e.partTarget * 2 : e.targetduration * 3), {
        streamType: r,
        targetLiveWindow: n,
        liveEdgeStartOffset: o,
        lowLatency: s
    };
}, _t = (e, t, r)=>{
    var i, c, d, l, u, y, m, f;
    let { streamType: n, targetLiveWindow: o, liveEdgeStartOffset: s, lowLatency: a } = ht(e);
    if (n === h.LIVE) {
        a ? (r.config.backBufferLength = (i = r.userConfig.backBufferLength) != null ? i : 4, r.config.maxFragLookUpTolerance = (c = r.userConfig.maxFragLookUpTolerance) != null ? c : .001, r.config.abrBandWidthUpFactor = (d = r.userConfig.abrBandWidthUpFactor) != null ? d : r.config.abrBandWidthFactor) : r.config.backBufferLength = (l = r.userConfig.backBufferLength) != null ? l : 8;
        let g = Object.freeze({
            get length () {
                return t.seekable.length;
            },
            start (M) {
                return t.seekable.start(M);
            },
            end (M) {
                var k;
                return M > this.length || M < 0 || Number.isFinite(t.duration) ? t.seekable.end(M) : (k = r.liveSyncPosition) != null ? k : t.seekable.end(M);
            }
        });
        ((u = P.get(t)) != null ? u : {}).seekable = g;
    }
    ((y = P.get(t)) != null ? y : {}).liveEdgeStartOffset = s, ((m = P.get(t)) != null ? m : {}).targetLiveWindow = o, t.dispatchEvent(new CustomEvent("targetlivewindowchange", {
        composed: !0,
        bubbles: !0
    })), ((f = P.get(t)) != null ? f : {}).streamType = n, t.dispatchEvent(new CustomEvent("streamtypechange", {
        composed: !0,
        bubbles: !0
    }));
}, Ue, Ve, Be = (Ve = (Ue = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Ue.userAgent) != null ? Ve : "", Ke, We, Ye, kt = (Ye = (We = (Ke = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Ke.userAgentData) == null ? void 0 : We.platform) != null ? Ye : "", Lt = Be.toLowerCase().includes("android") || [
    "x11",
    "android"
].some((e)=>kt.toLowerCase().includes(e)), At = (e)=>/^((?!chrome|android).)*safari/i.test(Be) && !!e.canPlayType("application/vnd.apple.mpegurl"), P = new WeakMap, I = "mux.com", Fe, $e, Je = ($e = (Fe = E).isSupported) == null ? void 0 : $e.call(Fe), St = (e)=>Lt || !At(e), Qr = ()=>{
    if (typeof window != "undefined") return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].utils.now();
}, It = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].utils.generateUUID, Zr = ({ playbackId: e, customDomain: t = I, maxResolution: r, minResolution: n, renditionOrder: o, programStartTime: s, programEndTime: a, assetStartTime: i, assetEndTime: c, playbackToken: d, tokens: { playback: l = d } = {}, extraSourceParams: u = {} } = {})=>{
    if (!e) return;
    let [y, m = ""] = B(e), f = new URL(`https://stream.${t}/${y}.m3u8${m}`);
    return l || f.searchParams.has("token") ? (f.searchParams.forEach((g, M)=>{
        M != "token" && f.searchParams.delete(M);
    }), l && f.searchParams.set("token", l)) : (r && f.searchParams.set("max_resolution", r), n && (f.searchParams.set("min_resolution", n), r && +r.slice(0, -1) < +n.slice(0, -1) && console.error("minResolution must be <= maxResolution", "minResolution", n, "maxResolution", r)), o && f.searchParams.set("rendition_order", o), s && f.searchParams.set("program_start_time", `${s}`), a && f.searchParams.set("program_end_time", `${a}`), i && f.searchParams.set("asset_start_time", `${i}`), c && f.searchParams.set("asset_end_time", `${c}`), Object.entries(u).forEach(([g, M])=>{
        M != null && f.searchParams.set(g, M);
    })), f.toString();
}, X = (e)=>{
    if (!e) return;
    let [t] = e.split("?");
    return t || void 0;
}, je = (e)=>{
    if (!e || !e.startsWith("https://stream.")) return;
    let [t] = new URL(e).pathname.slice(1).split(/\.m3u8|\//);
    return t || void 0;
}, Nt = (e)=>{
    var t, r, n;
    return (t = e == null ? void 0 : e.metadata) != null && t.video_id ? e.metadata.video_id : Ze(e) && (n = (r = X(e.playbackId)) != null ? r : je(e.src)) != null ? n : e.src;
}, wt = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.error;
}, en = (e)=>{
    var t;
    return (t = P.get(e)) == null ? void 0 : t.metadata;
}, He = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.streamType) != null ? r : h.UNKNOWN;
}, tn = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.targetLiveWindow) != null ? r : Number.NaN;
}, ze = (e)=>{
    var t, r;
    return (r = (t = P.get(e)) == null ? void 0 : t.seekable) != null ? r : e.seekable;
}, rn = (e)=>{
    var n;
    let t = (n = P.get(e)) == null ? void 0 : n.liveEdgeStartOffset;
    if (typeof t != "number") return Number.NaN;
    let r = ze(e);
    return r.length ? r.end(r.length - 1) - t : Number.NaN;
}, fe = .034, Ot = (e, t, r = fe)=>Math.abs(e - t) <= r, qe = (e, t, r = fe)=>e > t || Ot(e, t, r), Ht = (e, t = fe)=>e.paused && qe(e.currentTime, e.duration, t), Ge = (e, t)=>{
    var d, l, u;
    if (!t || !e.buffered.length) return;
    if (e.readyState > 2) return !1;
    let r = t.currentLevel >= 0 ? (l = (d = t.levels) == null ? void 0 : d[t.currentLevel]) == null ? void 0 : l.details : (u = t.levels.find((y)=>!!y.details)) == null ? void 0 : u.details;
    if (!r || r.live) return;
    let { fragments: n } = r;
    if (!(n != null && n.length)) return;
    if (e.currentTime < e.duration - (r.targetduration + .5)) return !1;
    let o = n[n.length - 1];
    if (e.currentTime <= o.start) return !1;
    let s = o.start + o.duration / 2, a = e.buffered.start(e.buffered.length - 1), i = e.buffered.end(e.buffered.length - 1);
    return s > a && s < i;
}, Ut = (e, t)=>e.ended || e.loop ? e.ended : t && Ge(e, t) ? !0 : Ht(e), nn = (e, t, r)=>{
    Vt(t, r, e);
    let { metadata: n = {} } = e, { view_session_id: o = It() } = n, s = Nt(e);
    n.view_session_id = o, n.video_id = s, e.metadata = n;
    let a = (l)=>{
        var u;
        (u = t.mux) == null || u.emit("hb", {
            view_drm_type: l
        });
    };
    e.drmTypeCb = a, P.set(t, {
        retryCount: 0
    });
    let i = Kt(e, t), c = De(e, t, i);
    e != null && e.muxDataKeepSession && t != null && t.mux && !t.mux.deleted ? i && t.mux.addHLSJS({
        hlsjs: i,
        Hls: i ? E : void 0
    }) : jt(e, t, i), zt(e, t, i), Ae(t), we(t);
    let d = Ce(e, t, i);
    return {
        engine: i,
        setAutoplay: d,
        setPreload: c
    };
}, Vt = (e, t, r)=>{
    let n = t == null ? void 0 : t.engine;
    e != null && e.mux && !e.mux.deleted && (r != null && r.muxDataKeepSession ? n && e.mux.removeHLSJS() : (e.mux.destroy(), delete e.mux)), n && (n.detachMedia(), n.destroy()), e && (e.hasAttribute("src") && (e.removeAttribute("src"), e.load()), e.removeEventListener("error", tt), e.removeEventListener("error", de), e.removeEventListener("durationchange", et), P.delete(e), e.dispatchEvent(new Event("teardown")));
};
function Xe(e, t) {
    var d;
    let r = V(e);
    if (!(r === S.M3U8)) return !0;
    let o = !r || ((d = t.canPlayType(r)) != null ? d : !0), { preferPlayback: s } = e, a = s === Q.MSE, i = s === Q.NATIVE, c = Je && (a || St(t));
    return o && (i || !c);
}
var Kt = (e, t)=>{
    let { debug: r, streamType: n, startTime: o = -1, metadata: s, preferCmcd: a, _hlsConfig: i = {}, maxAutoResolution: c } = e, l = V(e) === S.M3U8, u = Xe(e, t);
    if (l && !u && Je) {
        let y = {
            backBufferLength: 30,
            renderTextTracksNatively: !1,
            liveDurationInfinity: !0,
            capLevelOnFPSDrop: !0
        }, m = Wt(n), f = Yt(e), g = [
            w.QUERY,
            w.HEADER
        ].includes(a) ? {
            useHeaders: a === w.HEADER,
            sessionId: s == null ? void 0 : s.view_session_id,
            contentId: s == null ? void 0 : s.video_id
        } : void 0, M = Jt(e, i), k = new E({
            debug: r,
            startPosition: o,
            cmcd: g,
            xhrSetup: (R, C)=>{
                var H, Te;
                if (a && a !== w.QUERY) return;
                let p = new URL(C);
                if (!p.searchParams.has("CMCD")) return;
                let _ = ((Te = (H = p.searchParams.get("CMCD")) == null ? void 0 : H.split(",")) != null ? Te : []).filter((ye)=>ye.startsWith("sid") || ye.startsWith("cid")).join(",");
                p.searchParams.set("CMCD", _), R.open("GET", p);
            },
            ...y,
            ...M,
            ...m,
            ...f,
            ...i
        });
        return M.capLevelController === z && c !== void 0 && z.setMaxAutoResolution(k, c), k.on(E.Events.MANIFEST_PARSED, async function(R, C) {
            var _, H;
            let p = (_ = C.sessionData) == null ? void 0 : _["com.apple.hls.chapters"];
            (p != null && p.URI || p != null && p.VALUE.toLocaleLowerCase().startsWith("http")) && pe((H = p == null ? void 0 : p.URI) != null ? H : p == null ? void 0 : p.VALUE, t);
        }), k;
    }
}, Wt = (e)=>e === h.LIVE ? {
        backBufferLength: 8
    } : {}, Yt = (e)=>{
    let { tokens: { drm: t } = {}, playbackId: r, drmTypeCb: n } = e, o = X(r);
    return !t || !o ? {} : {
        emeEnabled: !0,
        drmSystems: {
            "com.apple.fps": {
                licenseUrl: G(e, "fairplay"),
                serverCertificateUrl: Qe(e, "fairplay")
            },
            "com.widevine.alpha": {
                licenseUrl: G(e, "widevine")
            },
            "com.microsoft.playready": {
                licenseUrl: G(e, "playready")
            }
        },
        requestMediaKeySystemAccessFunc: (s, a)=>(s === "com.widevine.alpha" && (a = [
                ...a.map((i)=>{
                    var d;
                    let c = (d = i.videoCapabilities) == null ? void 0 : d.map((l)=>({
                            ...l,
                            robustness: "HW_SECURE_ALL"
                        }));
                    return {
                        ...i,
                        videoCapabilities: c
                    };
                }),
                ...a
            ]), navigator.requestMediaKeySystemAccess(s, a).then((i)=>{
                let c = Mt(s);
                return n == null || n(c), i;
            }))
    };
}, Ft = async (e)=>{
    let t = await fetch(e);
    return t.status !== 200 ? Promise.reject(t) : await t.arrayBuffer();
}, $t = async (e, t)=>{
    let r = await fetch(t, {
        method: "POST",
        headers: {
            "Content-type": "application/octet-stream"
        },
        body: e
    });
    if (r.status !== 200) return Promise.reject(r);
    let n = await r.arrayBuffer();
    return new Uint8Array(n);
}, Bt = (e, t)=>{
    let r = async (a)=>{
        let i = await navigator.requestMediaKeySystemAccess("com.apple.fps", [
            {
                initDataTypes: [
                    a
                ],
                videoCapabilities: [
                    {
                        contentType: "application/vnd.apple.mpegurl",
                        robustness: ""
                    }
                ],
                distinctiveIdentifier: "not-allowed",
                persistentState: "not-allowed",
                sessionTypes: [
                    "temporary"
                ]
            }
        ]).then((d)=>{
            var l;
            return (l = e.drmTypeCb) == null || l.call(e, q.FAIRPLAY), d;
        }).catch(()=>{
            let d = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), l = new T(d, T.MEDIA_ERR_ENCRYPTED, !0);
            l.errorCategory = D.DRM, l.muxCode = b.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM, A(t, l);
        });
        if (!i) return;
        let c = await i.createMediaKeys();
        try {
            let d = await Ft(Qe(e, "fairplay")).catch((l)=>{
                if (l instanceof Response) {
                    let u = K(l, D.DRM, e);
                    return console.error("mediaError", u == null ? void 0 : u.message, u == null ? void 0 : u.context), u ? Promise.reject(u) : Promise.reject(new Error("Unexpected error in app cert request"));
                }
                return Promise.reject(l);
            });
            await c.setServerCertificate(d).catch(()=>{
                let l = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), u = new T(l, T.MEDIA_ERR_ENCRYPTED, !0);
                return u.errorCategory = D.DRM, u.muxCode = b.ENCRYPTED_UPDATE_SERVER_CERT_FAILED, Promise.reject(u);
            });
        } catch (d) {
            A(t, d);
            return;
        }
        await t.setMediaKeys(c);
    }, n = (a)=>{
        let i;
        if (a === "internal-error") {
            let c = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
            i = new T(c, T.MEDIA_ERR_ENCRYPTED, !0), i.errorCategory = D.DRM, i.muxCode = b.ENCRYPTED_CDM_ERROR;
        } else if (a === "output-restricted" || a === "output-downscaled") {
            let c = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
            i = new T(c, T.MEDIA_ERR_ENCRYPTED, !1), i.errorCategory = D.DRM, i.muxCode = b.ENCRYPTED_OUTPUT_RESTRICTED;
        }
        i && A(t, i);
    }, o = async (a, i)=>{
        let c = t.mediaKeys.createSession(), d = ()=>{
            c.keyStatuses.forEach((u)=>n(u));
        }, l = async (u)=>{
            let y = u.message;
            try {
                let m = await $t(y, G(e, "fairplay"));
                try {
                    await c.update(m);
                } catch  {
                    let f = x("Failed to update DRM license. This may be an issue with the player or your protected content."), g = new T(f, T.MEDIA_ERR_ENCRYPTED, !0);
                    g.errorCategory = D.DRM, g.muxCode = b.ENCRYPTED_UPDATE_LICENSE_FAILED, A(t, g);
                }
            } catch (m) {
                if (m instanceof Response) {
                    let f = K(m, D.DRM, e);
                    if (console.error("mediaError", f == null ? void 0 : f.message, f == null ? void 0 : f.context), f) {
                        A(t, f);
                        return;
                    }
                    console.error("Unexpected error in license key request", m);
                    return;
                }
                console.error(m);
            }
        };
        c.addEventListener("keystatuseschange", d), c.addEventListener("message", l), t.addEventListener("teardown", ()=>{
            c.removeEventListener("keystatuseschange", d), c.removeEventListener("message", l), c.close();
        }, {
            once: !0
        }), await c.generateRequest(a, i).catch((u)=>{
            console.error("Failed to generate license request", u);
            let y = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), m = new T(y, T.MEDIA_ERR_ENCRYPTED, !0);
            return m.errorCategory = D.DRM, m.muxCode = b.ENCRYPTED_GENERATE_REQUEST_FAILED, Promise.reject(m);
        });
    };
    v(t, "encrypted", async (a)=>{
        try {
            let i = a.initDataType;
            if (i !== "skd") {
                console.error(`Received unexpected initialization data type "${i}"`);
                return;
            }
            t.mediaKeys || await r(i);
            let c = a.initData;
            if (c == null) {
                console.error(`Could not start encrypted playback due to missing initData in ${a.type} event`);
                return;
            }
            await o(i, c);
        } catch (i) {
            A(t, i);
            return;
        }
    });
}, G = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: r = I }, n)=>{
    let o = X(e);
    return `https://license.${r.toLocaleLowerCase().endsWith(I) ? r : I}/license/${n}/${o}?token=${t}`;
}, Qe = ({ playbackId: e, tokens: { drm: t } = {}, customDomain: r = I }, n)=>{
    let o = X(e);
    return `https://license.${r.toLocaleLowerCase().endsWith(I) ? r : I}/appcert/${n}/${o}?token=${t}`;
}, Ze = ({ playbackId: e, src: t, customDomain: r })=>{
    if (e) return !0;
    if (typeof t != "string") return !1;
    let n = window == null ? void 0 : window.location.href, o = new URL(t, n).hostname.toLocaleLowerCase();
    return o.includes(I) || !!r && o.includes(r.toLocaleLowerCase());
}, Jt = (e, t)=>{
    let r = {};
    return r.capLevelToPlayerSize = e.capRenditionToPlayerSize, r.capLevelToPlayerSize == null ? (r.capLevelController = z, r.capLevelToPlayerSize = !0) : r.capLevelController = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$hls$2e$js$2f$dist$2f$hls$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CapLevelController"], r;
}, jt = (e, t, r)=>{
    var c;
    let { envKey: n, disableTracking: o, muxDataSDK: s = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$mux$2d$embed$2f$dist$2f$mux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], muxDataSDKOptions: a = {} } = e, i = Ze(e);
    if (!o && (n || i)) {
        let { playerInitTime: d, playerSoftwareName: l, playerSoftwareVersion: u, beaconCollectionDomain: y, debug: m, disableCookies: f } = e, g = {
            ...e.metadata,
            video_title: ((c = e == null ? void 0 : e.metadata) == null ? void 0 : c.video_title) || void 0
        }, M = (k)=>typeof k.player_error_code == "string" ? !1 : typeof e.errorTranslator == "function" ? e.errorTranslator(k) : k;
        s.monitor(t, {
            debug: m,
            beaconCollectionDomain: y,
            hlsjs: r,
            Hls: r ? E : void 0,
            automaticErrorTracking: !1,
            errorTranslator: M,
            disableCookies: f,
            ...a,
            data: {
                ...n ? {
                    env_key: n
                } : {},
                player_software_name: l,
                player_software: l,
                player_software_version: u,
                player_init_time: d,
                ...g
            }
        });
    }
}, zt = (e, t, r)=>{
    var l, u;
    let n = Xe(e, t), { src: o, customDomain: s = I } = e, a = ()=>{
        t.ended || e.disablePseudoEnded || !Ut(t, r) || (Ge(t, r) ? t.currentTime = t.buffered.end(t.buffered.length - 1) : t.dispatchEvent(new Event("ended")));
    }, i, c, d = ()=>{
        let y = ze(t), m, f;
        y.length > 0 && (m = y.start(0), f = y.end(0)), (c !== f || i !== m) && t.dispatchEvent(new CustomEvent("seekablechange", {
            composed: !0
        })), i = m, c = f;
    };
    if (v(t, "durationchange", d), t && n) {
        let y = V(e);
        if (typeof o == "string") {
            if (o.endsWith(".mp4") && o.includes(s)) {
                let g = je(o), M = new URL(`https://stream.${s}/${g}/metadata.json`);
                pe(M.toString(), t);
            }
            let m = ()=>{
                if (He(t) !== h.LIVE || Number.isFinite(t.duration)) return;
                let g = setInterval(d, 1e3);
                t.addEventListener("teardown", ()=>{
                    clearInterval(g);
                }, {
                    once: !0
                }), v(t, "durationchange", ()=>{
                    Number.isFinite(t.duration) && clearInterval(g);
                });
            }, f = async ()=>Pt(o, t, y).then(m).catch((g)=>{
                    if (g instanceof Response) {
                        let M = K(g, D.VIDEO, e);
                        if (M) {
                            A(t, M);
                            return;
                        }
                    } else g instanceof Error;
                });
            if (t.preload === "none") {
                let g = ()=>{
                    f(), t.removeEventListener("loadedmetadata", M);
                }, M = ()=>{
                    f(), t.removeEventListener("play", g);
                };
                v(t, "play", g, {
                    once: !0
                }), v(t, "loadedmetadata", M, {
                    once: !0
                });
            } else f();
            (l = e.tokens) != null && l.drm ? Bt(e, t) : v(t, "encrypted", ()=>{
                let g = x("Attempting to play DRM-protected content without providing a DRM token."), M = new T(g, T.MEDIA_ERR_ENCRYPTED, !0);
                M.errorCategory = D.DRM, M.muxCode = b.ENCRYPTED_MISSING_TOKEN, A(t, M);
            }, {
                once: !0
            }), t.setAttribute("src", o), e.startTime && (((u = P.get(t)) != null ? u : {}).startTime = e.startTime, t.addEventListener("durationchange", et, {
                once: !0
            }));
        } else t.removeAttribute("src");
        t.addEventListener("error", tt), t.addEventListener("error", de), t.addEventListener("emptied", ()=>{
            t.querySelectorAll("track[data-removeondestroy]").forEach((f)=>{
                f.remove();
            });
        }, {
            once: !0
        }), v(t, "pause", a), v(t, "seeked", a), v(t, "play", ()=>{
            t.ended || qe(t.currentTime, t.duration) && (t.currentTime = t.seekable.length ? t.seekable.start(0) : 0);
        });
    } else r && o ? (r.once(E.Events.LEVEL_LOADED, (y, m)=>{
        _t(m.details, t, r), d(), He(t) === h.LIVE && !Number.isFinite(t.duration) && (r.on(E.Events.LEVEL_UPDATED, d), v(t, "durationchange", ()=>{
            Number.isFinite(t.duration) && r.off(E.Events.LEVELS_UPDATED, d);
        }));
    }), r.on(E.Events.ERROR, (y, m)=>{
        var g, M;
        let f = qt(m, e);
        if (f.muxCode === b.NETWORK_NOT_READY) {
            let R = (g = P.get(t)) != null ? g : {}, C = (M = R.retryCount) != null ? M : 0;
            if (C < 6) {
                let p = C === 0 ? 5e3 : 6e4, _ = new T(`Retrying in ${p / 1e3} seconds...`, f.code, f.fatal);
                Object.assign(_, f), A(t, _), setTimeout(()=>{
                    R.retryCount = C + 1, m.details === "manifestLoadError" && m.url && r.loadSource(m.url);
                }, p);
                return;
            } else {
                R.retryCount = 0;
                let p = new T('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', f.code, f.fatal);
                Object.assign(p, f), A(t, p);
                return;
            }
        }
        A(t, f);
    }), r.on(E.Events.MANIFEST_LOADED, ()=>{
        let y = P.get(t);
        y && y.error && (y.error = null, y.retryCount = 0, t.dispatchEvent(new Event("emptied")), t.dispatchEvent(new Event("loadstart")));
    }), t.addEventListener("error", de), v(t, "waiting", a), ve(e, r), Pe(t, r), r.attachMedia(t)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
};
function et(e) {
    var n;
    let t = e.target, r = (n = P.get(t)) == null ? void 0 : n.startTime;
    if (r && me(t.seekable, t.duration, r)) {
        let o = t.preload === "auto";
        o && (t.preload = "none"), t.currentTime = r, o && (t.preload = "auto");
    }
}
async function tt(e) {
    if (!e.isTrusted) return;
    e.stopImmediatePropagation();
    let t = e.target;
    if (!(t != null && t.error)) return;
    let { message: r, code: n } = t.error, o = new T(r, n);
    if (t.src && n === T.MEDIA_ERR_SRC_NOT_SUPPORTED && t.readyState === HTMLMediaElement.HAVE_NOTHING) {
        setTimeout(()=>{
            var a;
            let s = (a = wt(t)) != null ? a : t.error;
            (s == null ? void 0 : s.code) === T.MEDIA_ERR_SRC_NOT_SUPPORTED && A(t, o);
        }, 500);
        return;
    }
    if (t.src && (n !== T.MEDIA_ERR_DECODE || n !== void 0)) try {
        let { status: s } = await fetch(t.src);
        o.data = {
            response: {
                code: s
            }
        };
    } catch  {}
    A(t, o);
}
function A(e, t) {
    var r;
    t.fatal && (((r = P.get(e)) != null ? r : {}).error = t, e.dispatchEvent(new CustomEvent("error", {
        detail: t
    })));
}
function de(e) {
    var n, o;
    if (!(e instanceof CustomEvent) || !(e.detail instanceof T)) return;
    let t = e.target, r = e.detail;
    !r || !r.fatal || (((n = P.get(t)) != null ? n : {}).error = r, (o = t.mux) == null || o.emit("error", {
        player_error_code: r.code,
        player_error_message: r.message,
        player_error_context: r.context
    }));
}
var qt = (e, t)=>{
    var c, d, l;
    !e.fatal ? t.debug && console.warn("getErrorFromHlsErrorData() (non-fatal)", e) : console.error("getErrorFromHlsErrorData()", e);
    let n = {
        [E.ErrorTypes.NETWORK_ERROR]: T.MEDIA_ERR_NETWORK,
        [E.ErrorTypes.MEDIA_ERROR]: T.MEDIA_ERR_DECODE,
        [E.ErrorTypes.KEY_SYSTEM_ERROR]: T.MEDIA_ERR_ENCRYPTED
    }, o = (u)=>[
            E.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
            E.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED
        ].includes(u.details) ? T.MEDIA_ERR_NETWORK : n[u.type], s = (u)=>{
        if (u.type === E.ErrorTypes.KEY_SYSTEM_ERROR) return D.DRM;
        if (u.type === E.ErrorTypes.NETWORK_ERROR) return D.VIDEO;
    }, a, i = o(e);
    if (i === T.MEDIA_ERR_NETWORK && e.response) {
        let u = (c = s(e)) != null ? c : D.VIDEO;
        a = (d = K(e.response, u, t, e.fatal)) != null ? d : new T("", i, e.fatal);
    } else if (i === T.MEDIA_ERR_ENCRYPTED) if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE) {
        let u = x("Attempting to play DRM-protected content without providing a DRM token.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_MISSING_TOKEN;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_ACCESS) {
        let u = x("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_NO_SESSION) {
        let u = x("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, !0), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_GENERATE_REQUEST_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED) {
        let u = x("Failed to update DRM license. This may be an issue with the player or your protected content.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_UPDATE_LICENSE_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED) {
        let u = x("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_UPDATE_SERVER_CERT_FAILED;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR) {
        let u = x("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_CDM_ERROR;
    } else if (e.details === E.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED) {
        let u = x("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
        a = new T(u, T.MEDIA_ERR_ENCRYPTED, !1), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_OUTPUT_RESTRICTED;
    } else a = new T(e.error.message, T.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = D.DRM, a.muxCode = b.ENCRYPTED_ERROR;
    else a = new T("", i, e.fatal);
    return a.context || (a.context = `${e.url ? `url: ${e.url}
` : ""}${e.response && (e.response.code || e.response.text) ? `response: ${e.response.code}, ${e.response.text}
` : ""}${e.reason ? `failure reason: ${e.reason}
` : ""}${e.level ? `level: ${e.level}
` : ""}${e.parent ? `parent stream controller: ${e.parent}
` : ""}${e.buffer ? `buffer length: ${e.buffer}
` : ""}${e.error ? `error: ${e.error}
` : ""}${e.event ? `event: ${e.event}
` : ""}${e.err ? `error message: ${(l = e.err) == null ? void 0 : l.message}
` : ""}`), a.data = e, a;
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/vikkmore/node_modules/custom-media-element/dist/custom-media-element.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>Attributes,
    "CustomAudioElement",
    ()=>CustomAudioElement,
    "CustomMediaMixin",
    ()=>CustomMediaMixin,
    "CustomVideoElement",
    ()=>CustomVideoElement,
    "Events",
    ()=>Events
]);
const Events = [
    "abort",
    "canplay",
    "canplaythrough",
    "durationchange",
    "emptied",
    "encrypted",
    "ended",
    "error",
    "loadeddata",
    "loadedmetadata",
    "loadstart",
    "pause",
    "play",
    "playing",
    "progress",
    "ratechange",
    "seeked",
    "seeking",
    "stalled",
    "suspend",
    "timeupdate",
    "volumechange",
    "waiting",
    "waitingforkey",
    "resize",
    "enterpictureinpicture",
    "leavepictureinpicture",
    "webkitbeginfullscreen",
    "webkitendfullscreen",
    "webkitpresentationmodechanged"
];
const Attributes = [
    "autopictureinpicture",
    "disablepictureinpicture",
    "disableremoteplayback",
    "autoplay",
    "controls",
    "controlslist",
    "crossorigin",
    "loop",
    "muted",
    "playsinline",
    "poster",
    "preload",
    "src"
];
function getAudioTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${serializeAttributes(attrs)}></audio>
    </slot>
    <slot></slot>
  `;
}
function getVideoTemplateHTML(attrs) {
    return /*html*/ `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${serializeAttributes(attrs)}></video>
    </slot>
    <slot></slot>
  `;
}
function CustomMediaMixin(superclass, { tag, is }) {
    const nativeElTest = globalThis.document?.createElement?.(tag, {
        is
    });
    const nativeElProps = nativeElTest ? getNativeElProps(nativeElTest) : [];
    return class CustomMedia extends superclass {
        static getTemplateHTML = tag.endsWith("audio") ? getAudioTemplateHTML : getVideoTemplateHTML;
        static shadowRootOptions = {
            mode: "open"
        };
        static Events = Events;
        static #isDefined = false;
        static get observedAttributes() {
            CustomMedia.#define();
            const natAttrs = nativeElTest?.constructor?.observedAttributes ?? [];
            return [
                ...natAttrs,
                ...Attributes
            ];
        }
        static #define() {
            if (this.#isDefined) return;
            this.#isDefined = true;
            const propsToAttrs = new Set(this.observedAttributes);
            propsToAttrs.delete("muted");
            for (const prop of nativeElProps){
                if (prop in this.prototype) continue;
                if (typeof nativeElTest[prop] === "function") {
                    this.prototype[prop] = function(...args) {
                        this.#init();
                        const fn = ()=>{
                            if (this.call) return this.call(prop, ...args);
                            const nativeFn = this.nativeEl?.[prop];
                            return nativeFn?.apply(this.nativeEl, args);
                        };
                        return fn();
                    };
                } else {
                    const config = {
                        get () {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                const val = this.getAttribute(attr);
                                return val === null ? false : val === "" ? true : val;
                            }
                            return this.get?.(prop) ?? this.nativeEl?.[prop];
                        }
                    };
                    if (prop !== prop.toUpperCase()) {
                        config.set = function(val) {
                            this.#init();
                            const attr = prop.toLowerCase();
                            if (propsToAttrs.has(attr)) {
                                if (val === true || val === false || val == null) {
                                    this.toggleAttribute(attr, Boolean(val));
                                } else {
                                    this.setAttribute(attr, val);
                                }
                                return;
                            }
                            if (this.set) {
                                this.set(prop, val);
                                return;
                            }
                            if (this.nativeEl) {
                                this.nativeEl[prop] = val;
                            }
                        };
                    }
                    Object.defineProperty(this.prototype, prop, config);
                }
            }
        }
        // Private fields
        #isInit = false;
        #nativeEl = null;
        #childMap = /* @__PURE__ */ new Map();
        #childObserver;
        get;
        set;
        call;
        // If the custom element is defined before the custom element's HTML is parsed
        // no attributes will be available in the constructor (construction process).
        // Wait until initializing in the attributeChangedCallback or
        // connectedCallback or accessing any properties.
        get nativeEl() {
            this.#init();
            return this.#nativeEl ?? this.querySelector(":scope > [slot=media]") ?? this.querySelector(tag) ?? this.shadowRoot?.querySelector(tag) ?? null;
        }
        set nativeEl(val) {
            this.#nativeEl = val;
        }
        get defaultMuted() {
            return this.hasAttribute("muted");
        }
        set defaultMuted(val) {
            this.toggleAttribute("muted", val);
        }
        get src() {
            return this.getAttribute("src");
        }
        set src(val) {
            this.setAttribute("src", `${val}`);
        }
        get preload() {
            return this.getAttribute("preload") ?? this.nativeEl?.preload;
        }
        set preload(val) {
            this.setAttribute("preload", `${val}`);
        }
        #init() {
            if (this.#isInit) return;
            this.#isInit = true;
            this.init();
        }
        init() {
            if (!this.shadowRoot) {
                this.attachShadow({
                    mode: "open"
                });
                const attrs = namedNodeMapToObject(this.attributes);
                if (is) attrs.is = is;
                if (tag) attrs.part = tag;
                this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
            }
            this.nativeEl.muted = this.hasAttribute("muted");
            for (const prop of nativeElProps){
                this.#upgradeProperty(prop);
            }
            this.#childObserver = new MutationObserver(this.#syncMediaChildAttribute.bind(this));
            this.shadowRoot.addEventListener("slotchange", ()=>this.#syncMediaChildren());
            this.#syncMediaChildren();
            for (const type of this.constructor.Events){
                this.shadowRoot.addEventListener(type, this, true);
            }
        }
        handleEvent(event) {
            if (event.target === this.nativeEl) {
                this.dispatchEvent(new CustomEvent(event.type, {
                    detail: event.detail
                }));
            }
        }
        #syncMediaChildren() {
            const removeNativeChildren = new Map(this.#childMap);
            const defaultSlot = this.shadowRoot?.querySelector("slot:not([name])");
            const mediaChildren = defaultSlot?.assignedElements({
                flatten: true
            }).filter((el)=>[
                    "track",
                    "source"
                ].includes(el.localName));
            mediaChildren.forEach((el)=>{
                removeNativeChildren.delete(el);
                let clone = this.#childMap.get(el);
                if (!clone) {
                    clone = el.cloneNode();
                    this.#childMap.set(el, clone);
                    this.#childObserver?.observe(el, {
                        attributes: true
                    });
                }
                this.nativeEl?.append(clone);
                this.#enableDefaultTrack(clone);
            });
            removeNativeChildren.forEach((clone, el)=>{
                clone.remove();
                this.#childMap.delete(el);
            });
        }
        #syncMediaChildAttribute(mutations) {
            for (const mutation of mutations){
                if (mutation.type === "attributes") {
                    const { target, attributeName } = mutation;
                    const clone = this.#childMap.get(target);
                    if (clone && attributeName) {
                        clone.setAttribute(attributeName, target.getAttribute(attributeName) ?? "");
                        this.#enableDefaultTrack(clone);
                    }
                }
            }
        }
        #enableDefaultTrack(trackEl) {
            if (trackEl && trackEl.localName === "track" && trackEl.default && (trackEl.kind === "chapters" || trackEl.kind === "metadata") && trackEl.track.mode === "disabled") {
                trackEl.track.mode = "hidden";
            }
        }
        #upgradeProperty(prop) {
            if (Object.prototype.hasOwnProperty.call(this, prop)) {
                const value = this[prop];
                delete this[prop];
                this[prop] = value;
            }
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            this.#init();
            this.#forwardAttribute(attrName, oldValue, newValue);
        }
        #forwardAttribute(attrName, _oldValue, newValue) {
            if ([
                "id",
                "class"
            ].includes(attrName)) return;
            if (!CustomMedia.observedAttributes.includes(attrName) && this.constructor.observedAttributes.includes(attrName)) {
                return;
            }
            if (newValue === null) {
                this.nativeEl?.removeAttribute(attrName);
            } else if (this.nativeEl?.getAttribute(attrName) !== newValue) {
                this.nativeEl?.setAttribute(attrName, newValue);
            }
        }
        connectedCallback() {
            this.#init();
        }
    };
}
function getNativeElProps(nativeElTest) {
    const nativeElProps = [];
    for(let proto = Object.getPrototypeOf(nativeElTest); proto && proto !== HTMLElement.prototype; proto = Object.getPrototypeOf(proto)){
        const props = Object.getOwnPropertyNames(proto);
        nativeElProps.push(...props);
    }
    return nativeElProps;
}
function serializeAttributes(attrs) {
    let html = "";
    for(const key in attrs){
        if (!Attributes.includes(key)) continue;
        const value = attrs[key];
        if (value === "") html += ` ${key}`;
        else html += ` ${key}="${value}"`;
    }
    return html;
}
function namedNodeMapToObject(namedNodeMap) {
    const obj = {};
    for (const attr of namedNodeMap){
        obj[attr.name] = attr.value;
    }
    return obj;
}
const CustomVideoElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "video"
});
const CustomAudioElement = CustomMediaMixin(globalThis.HTMLElement ?? class {
}, {
    tag: "audio"
});
;
}),
"[project]/Desktop/vikkmore/node_modules/@mux/mux-video/dist/base.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Attributes",
    ()=>t,
    "MuxVideoBaseElement",
    ()=>B,
    "playerSoftwareName",
    ()=>K,
    "playerSoftwareVersion",
    ()=>x
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/custom-media-element/dist/custom-media-element.js [app-client] (ecmascript)");
var C = (n)=>{
    throw TypeError(n);
};
var L = (n, a, e)=>a.has(n) || C("Cannot " + e);
var s = (n, a, e)=>(L(n, a, "read from private field"), e ? e.call(n) : a.get(n)), u = (n, a, e)=>a.has(n) ? C("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n) : a.set(n, e), o = (n, a, e, i)=>(L(n, a, "write to private field"), i ? i.call(n, e) : a.set(n, e), e), T = (n, a, e)=>(L(n, a, "access private method"), e);
;
var Y = ()=>{
    try {
        return "0.30.2";
    } catch  {}
    return "UNKNOWN";
}, U = Y(), D = ()=>U;
;
var k = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;
var t = {
    BEACON_COLLECTION_DOMAIN: "beacon-collection-domain",
    CUSTOM_DOMAIN: "custom-domain",
    DEBUG: "debug",
    DISABLE_TRACKING: "disable-tracking",
    DISABLE_COOKIES: "disable-cookies",
    DISABLE_PSEUDO_ENDED: "disable-pseudo-ended",
    DRM_TOKEN: "drm-token",
    PLAYBACK_TOKEN: "playback-token",
    ENV_KEY: "env-key",
    MAX_RESOLUTION: "max-resolution",
    MIN_RESOLUTION: "min-resolution",
    MAX_AUTO_RESOLUTION: "max-auto-resolution",
    RENDITION_ORDER: "rendition-order",
    PROGRAM_START_TIME: "program-start-time",
    PROGRAM_END_TIME: "program-end-time",
    ASSET_START_TIME: "asset-start-time",
    ASSET_END_TIME: "asset-end-time",
    METADATA_URL: "metadata-url",
    PLAYBACK_ID: "playback-id",
    PLAYER_SOFTWARE_NAME: "player-software-name",
    PLAYER_SOFTWARE_VERSION: "player-software-version",
    PLAYER_INIT_TIME: "player-init-time",
    PREFER_CMCD: "prefer-cmcd",
    PREFER_PLAYBACK: "prefer-playback",
    START_TIME: "start-time",
    STREAM_TYPE: "stream-type",
    TARGET_LIVE_WINDOW: "target-live-window",
    LIVE_EDGE_OFFSET: "live-edge-offset",
    TYPE: "type",
    LOGO: "logo",
    CAP_RENDITION_TO_PLAYER_SIZE: "cap-rendition-to-player-size"
}, oe = Object.values(t), x = D(), K = "mux-video", E, c, _, g, p, O, R, I, M, m, y, f, b, B = class extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"] {
    constructor(){
        super();
        u(this, f);
        u(this, E);
        u(this, c);
        u(this, _);
        u(this, g, {});
        u(this, p, {});
        u(this, O);
        u(this, R);
        u(this, I);
        u(this, M);
        u(this, m, "");
        u(this, y);
        o(this, _, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"])()), this.nativeEl.addEventListener("muxmetadata", (e)=>{
            var l;
            let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getMetadata"])(this.nativeEl), r = (l = this.metadata) != null ? l : {};
            this.metadata = {
                ...i,
                ...r
            }, (i == null ? void 0 : i["com.mux.video.branding"]) === "mux-free-plan" && (o(this, m, "default"), this.updateLogo());
        });
    }
    static get NAME() {
        return K;
    }
    static get VERSION() {
        return x;
    }
    static get observedAttributes() {
        var e;
        return [
            ...oe,
            ...(e = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes) != null ? e : []
        ];
    }
    static getLogoHTML(e) {
        return !e || e === "false" ? "" : e === "default" ? k : `<img part="logo" src="${e}" />`;
    }
    static getTemplateHTML(e = {}) {
        var i;
        return `
      ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i = e[t.LOGO]) != null ? i : "")}
      </slot>
    `;
    }
    get preferCmcd() {
        var e;
        return (e = this.getAttribute(t.PREFER_CMCD)) != null ? e : void 0;
    }
    set preferCmcd(e) {
        e !== this.preferCmcd && (e ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].includes(e) ? this.setAttribute(t.PREFER_CMCD, e) : console.warn(`Invalid value for preferCmcd. Must be one of ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CmcdTypeValues"].join()}`) : this.removeAttribute(t.PREFER_CMCD));
    }
    get playerInitTime() {
        return this.hasAttribute(t.PLAYER_INIT_TIME) ? +this.getAttribute(t.PLAYER_INIT_TIME) : s(this, _);
    }
    set playerInitTime(e) {
        e != this.playerInitTime && (e == null ? this.removeAttribute(t.PLAYER_INIT_TIME) : this.setAttribute(t.PLAYER_INIT_TIME, `${+e}`));
    }
    get playerSoftwareName() {
        var e;
        return (e = s(this, I)) != null ? e : K;
    }
    set playerSoftwareName(e) {
        o(this, I, e);
    }
    get playerSoftwareVersion() {
        var e;
        return (e = s(this, R)) != null ? e : x;
    }
    set playerSoftwareVersion(e) {
        o(this, R, e);
    }
    get _hls() {
        var e;
        return (e = s(this, E)) == null ? void 0 : e.engine;
    }
    get mux() {
        var e;
        return (e = this.nativeEl) == null ? void 0 : e.mux;
    }
    get error() {
        var e;
        return (e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getError"])(this.nativeEl)) != null ? e : null;
    }
    get errorTranslator() {
        return s(this, M);
    }
    set errorTranslator(e) {
        o(this, M, e);
    }
    get src() {
        return this.getAttribute("src");
    }
    set src(e) {
        e !== this.src && (e == null ? this.removeAttribute("src") : this.setAttribute("src", e));
    }
    get type() {
        var e;
        return (e = this.getAttribute(t.TYPE)) != null ? e : void 0;
    }
    set type(e) {
        e !== this.type && (e ? this.setAttribute(t.TYPE, e) : this.removeAttribute(t.TYPE));
    }
    get preload() {
        let e = this.getAttribute("preload");
        return e === "" ? "auto" : [
            "none",
            "metadata",
            "auto"
        ].includes(e) ? e : super.preload;
    }
    set preload(e) {
        e != this.getAttribute("preload") && ([
            "",
            "none",
            "metadata",
            "auto"
        ].includes(e) ? this.setAttribute("preload", e) : this.removeAttribute("preload"));
    }
    get debug() {
        return this.getAttribute(t.DEBUG) != null;
    }
    set debug(e) {
        e !== this.debug && (e ? this.setAttribute(t.DEBUG, "") : this.removeAttribute(t.DEBUG));
    }
    get disableTracking() {
        return this.hasAttribute(t.DISABLE_TRACKING);
    }
    set disableTracking(e) {
        e !== this.disableTracking && this.toggleAttribute(t.DISABLE_TRACKING, !!e);
    }
    get disableCookies() {
        return this.hasAttribute(t.DISABLE_COOKIES);
    }
    set disableCookies(e) {
        e !== this.disableCookies && (e ? this.setAttribute(t.DISABLE_COOKIES, "") : this.removeAttribute(t.DISABLE_COOKIES));
    }
    get disablePseudoEnded() {
        return this.hasAttribute(t.DISABLE_PSEUDO_ENDED);
    }
    set disablePseudoEnded(e) {
        e !== this.disablePseudoEnded && (e ? this.setAttribute(t.DISABLE_PSEUDO_ENDED, "") : this.removeAttribute(t.DISABLE_PSEUDO_ENDED));
    }
    get startTime() {
        let e = this.getAttribute(t.START_TIME);
        if (e == null) return;
        let i = +e;
        return Number.isNaN(i) ? void 0 : i;
    }
    set startTime(e) {
        e !== this.startTime && (e == null ? this.removeAttribute(t.START_TIME) : this.setAttribute(t.START_TIME, `${e}`));
    }
    get playbackId() {
        var e;
        return this.hasAttribute(t.PLAYBACK_ID) ? this.getAttribute(t.PLAYBACK_ID) : (e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdFromSrc"])(this.src)) != null ? e : void 0;
    }
    set playbackId(e) {
        e !== this.playbackId && (e ? this.setAttribute(t.PLAYBACK_ID, e) : this.removeAttribute(t.PLAYBACK_ID));
    }
    get maxResolution() {
        var e;
        return (e = this.getAttribute(t.MAX_RESOLUTION)) != null ? e : void 0;
    }
    set maxResolution(e) {
        e !== this.maxResolution && (e ? this.setAttribute(t.MAX_RESOLUTION, e) : this.removeAttribute(t.MAX_RESOLUTION));
    }
    get minResolution() {
        var e;
        return (e = this.getAttribute(t.MIN_RESOLUTION)) != null ? e : void 0;
    }
    set minResolution(e) {
        e !== this.minResolution && (e ? this.setAttribute(t.MIN_RESOLUTION, e) : this.removeAttribute(t.MIN_RESOLUTION));
    }
    get maxAutoResolution() {
        var e;
        return (e = this.getAttribute(t.MAX_AUTO_RESOLUTION)) != null ? e : void 0;
    }
    set maxAutoResolution(e) {
        e == null ? this.removeAttribute(t.MAX_AUTO_RESOLUTION) : this.setAttribute(t.MAX_AUTO_RESOLUTION, e);
    }
    get renditionOrder() {
        var e;
        return (e = this.getAttribute(t.RENDITION_ORDER)) != null ? e : void 0;
    }
    set renditionOrder(e) {
        e !== this.renditionOrder && (e ? this.setAttribute(t.RENDITION_ORDER, e) : this.removeAttribute(t.RENDITION_ORDER));
    }
    get programStartTime() {
        let e = this.getAttribute(t.PROGRAM_START_TIME);
        if (e == null) return;
        let i = +e;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programStartTime(e) {
        e == null ? this.removeAttribute(t.PROGRAM_START_TIME) : this.setAttribute(t.PROGRAM_START_TIME, `${e}`);
    }
    get programEndTime() {
        let e = this.getAttribute(t.PROGRAM_END_TIME);
        if (e == null) return;
        let i = +e;
        return Number.isNaN(i) ? void 0 : i;
    }
    set programEndTime(e) {
        e == null ? this.removeAttribute(t.PROGRAM_END_TIME) : this.setAttribute(t.PROGRAM_END_TIME, `${e}`);
    }
    get assetStartTime() {
        let e = this.getAttribute(t.ASSET_START_TIME);
        if (e == null) return;
        let i = +e;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetStartTime(e) {
        e == null ? this.removeAttribute(t.ASSET_START_TIME) : this.setAttribute(t.ASSET_START_TIME, `${e}`);
    }
    get assetEndTime() {
        let e = this.getAttribute(t.ASSET_END_TIME);
        if (e == null) return;
        let i = +e;
        return Number.isNaN(i) ? void 0 : i;
    }
    set assetEndTime(e) {
        e == null ? this.removeAttribute(t.ASSET_END_TIME) : this.setAttribute(t.ASSET_END_TIME, `${e}`);
    }
    get customDomain() {
        var e;
        return (e = this.getAttribute(t.CUSTOM_DOMAIN)) != null ? e : void 0;
    }
    set customDomain(e) {
        e !== this.customDomain && (e ? this.setAttribute(t.CUSTOM_DOMAIN, e) : this.removeAttribute(t.CUSTOM_DOMAIN));
    }
    get capRenditionToPlayerSize() {
        var e;
        return ((e = this._hlsConfig) == null ? void 0 : e.capLevelToPlayerSize) != null ? this._hlsConfig.capLevelToPlayerSize : s(this, y);
    }
    set capRenditionToPlayerSize(e) {
        o(this, y, e);
    }
    get drmToken() {
        var e;
        return (e = this.getAttribute(t.DRM_TOKEN)) != null ? e : void 0;
    }
    set drmToken(e) {
        e !== this.drmToken && (e ? this.setAttribute(t.DRM_TOKEN, e) : this.removeAttribute(t.DRM_TOKEN));
    }
    get playbackToken() {
        var e, i, r, l;
        if (this.hasAttribute(t.PLAYBACK_TOKEN)) return (e = this.getAttribute(t.PLAYBACK_TOKEN)) != null ? e : void 0;
        if (this.hasAttribute(t.PLAYBACK_ID)) {
            let [, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toPlaybackIdParts"])((i = this.playbackId) != null ? i : "");
            return (r = new URLSearchParams(A).get("token")) != null ? r : void 0;
        }
        if (this.src) return (l = new URLSearchParams(this.src).get("token")) != null ? l : void 0;
    }
    set playbackToken(e) {
        e !== this.playbackToken && (e ? this.setAttribute(t.PLAYBACK_TOKEN, e) : this.removeAttribute(t.PLAYBACK_TOKEN));
    }
    get tokens() {
        let e = this.getAttribute(t.PLAYBACK_TOKEN), i = this.getAttribute(t.DRM_TOKEN);
        return {
            ...s(this, p),
            ...e != null ? {
                playback: e
            } : {},
            ...i != null ? {
                drm: i
            } : {}
        };
    }
    set tokens(e) {
        o(this, p, e != null ? e : {});
    }
    get ended() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEnded"])(this.nativeEl, this._hls);
    }
    get envKey() {
        var e;
        return (e = this.getAttribute(t.ENV_KEY)) != null ? e : void 0;
    }
    set envKey(e) {
        e !== this.envKey && (e ? this.setAttribute(t.ENV_KEY, e) : this.removeAttribute(t.ENV_KEY));
    }
    get beaconCollectionDomain() {
        var e;
        return (e = this.getAttribute(t.BEACON_COLLECTION_DOMAIN)) != null ? e : void 0;
    }
    set beaconCollectionDomain(e) {
        e !== this.beaconCollectionDomain && (e ? this.setAttribute(t.BEACON_COLLECTION_DOMAIN, e) : this.removeAttribute(t.BEACON_COLLECTION_DOMAIN));
    }
    get streamType() {
        var e;
        return (e = this.getAttribute(t.STREAM_TYPE)) != null ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStreamType"])(this.nativeEl);
    }
    set streamType(e) {
        e !== this.streamType && (e ? this.setAttribute(t.STREAM_TYPE, e) : this.removeAttribute(t.STREAM_TYPE));
    }
    get targetLiveWindow() {
        return this.hasAttribute(t.TARGET_LIVE_WINDOW) ? +this.getAttribute(t.TARGET_LIVE_WINDOW) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getTargetLiveWindow"])(this.nativeEl);
    }
    set targetLiveWindow(e) {
        e != this.targetLiveWindow && (e == null ? this.removeAttribute(t.TARGET_LIVE_WINDOW) : this.setAttribute(t.TARGET_LIVE_WINDOW, `${+e}`));
    }
    get liveEdgeStart() {
        var e, i;
        if (this.hasAttribute(t.LIVE_EDGE_OFFSET)) {
            let { liveEdgeOffset: r } = this, l = (e = this.nativeEl.seekable.end(0)) != null ? e : 0, A = (i = this.nativeEl.seekable.start(0)) != null ? i : 0;
            return Math.max(A, l - r);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getLiveEdgeStart"])(this.nativeEl);
    }
    get liveEdgeOffset() {
        if (this.hasAttribute(t.LIVE_EDGE_OFFSET)) return +this.getAttribute(t.LIVE_EDGE_OFFSET);
    }
    set liveEdgeOffset(e) {
        e != this.liveEdgeOffset && (e == null ? this.removeAttribute(t.LIVE_EDGE_OFFSET) : this.setAttribute(t.LIVE_EDGE_OFFSET, `${+e}`));
    }
    get seekable() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSeekable"])(this.nativeEl);
    }
    async addCuePoints(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addCuePoints"])(this.nativeEl, e);
    }
    get activeCuePoint() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveCuePoint"])(this.nativeEl);
    }
    get cuePoints() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCuePoints"])(this.nativeEl);
    }
    async addChapters(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addChapters"])(this.nativeEl, e);
    }
    get activeChapter() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getActiveChapter"])(this.nativeEl);
    }
    get chapters() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getChapters"])(this.nativeEl);
    }
    getStartDate() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getStartDate"])(this.nativeEl, this._hls);
    }
    get currentPdt() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getCurrentPdt"])(this.nativeEl, this._hls);
    }
    get preferPlayback() {
        let e = this.getAttribute(t.PREFER_PLAYBACK);
        if (e === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || e === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE) return e;
    }
    set preferPlayback(e) {
        e !== this.preferPlayback && (e === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].MSE || e === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PlaybackTypes"].NATIVE ? this.setAttribute(t.PREFER_PLAYBACK, e) : this.removeAttribute(t.PREFER_PLAYBACK));
    }
    get metadata() {
        return {
            ...this.getAttributeNames().filter((i)=>i.startsWith("metadata-") && ![
                    t.METADATA_URL
                ].includes(i)).reduce((i, r)=>{
                let l = this.getAttribute(r);
                return l != null && (i[r.replace(/^metadata-/, "").replace(/-/g, "_")] = l), i;
            }, {}),
            ...s(this, g)
        };
    }
    set metadata(e) {
        o(this, g, e != null ? e : {}), this.mux && this.mux.emit("hb", s(this, g));
    }
    get _hlsConfig() {
        return s(this, O);
    }
    set _hlsConfig(e) {
        o(this, O, e);
    }
    get logo() {
        var e;
        return (e = this.getAttribute(t.LOGO)) != null ? e : s(this, m);
    }
    set logo(e) {
        e ? this.setAttribute(t.LOGO, e) : this.removeAttribute(t.LOGO);
    }
    load() {
        o(this, E, (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initialize"])(this, this.nativeEl, s(this, E)));
    }
    unload() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["teardown"])(this.nativeEl, s(this, E), this), o(this, E, void 0);
    }
    attributeChangedCallback(e, i, r) {
        var A, P;
        switch(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$custom$2d$media$2d$element$2f$dist$2f$custom$2d$media$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomVideoElement"].observedAttributes.includes(e) && ![
            "src",
            "autoplay",
            "preload"
        ].includes(e) && super.attributeChangedCallback(e, i, r), e){
            case t.PLAYER_SOFTWARE_NAME:
                this.playerSoftwareName = r != null ? r : void 0;
                break;
            case t.PLAYER_SOFTWARE_VERSION:
                this.playerSoftwareVersion = r != null ? r : void 0;
                break;
            case "src":
                {
                    let d = !!i, h = !!r;
                    !d && h ? T(this, f, b).call(this) : d && !h ? this.unload() : d && h && (this.unload(), T(this, f, b).call(this));
                    break;
                }
            case "autoplay":
                if (r === i) break;
                (A = s(this, E)) == null || A.setAutoplay(this.autoplay);
                break;
            case "preload":
                if (r === i) break;
                (P = s(this, E)) == null || P.setPreload(r);
                break;
            case t.PLAYBACK_ID:
                this.src = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["toMuxVideoURL"])(this);
                break;
            case t.DEBUG:
                {
                    let d = this.debug;
                    this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this._hls && (this._hls.config.debug = d);
                    break;
                }
            case t.METADATA_URL:
                r && fetch(r).then((d)=>d.json()).then((d)=>this.metadata = d).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${r}!`));
                break;
            case t.STREAM_TYPE:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("streamtypechange", {
                    composed: !0,
                    bubbles: !0
                }));
                break;
            case t.TARGET_LIVE_WINDOW:
                (r == null || r !== i) && this.dispatchEvent(new CustomEvent("targetlivewindowchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: this.targetLiveWindow
                }));
                break;
            case t.LOGO:
                (r == null || r !== i) && this.updateLogo();
                break;
            case t.DISABLE_TRACKING:
                {
                    if (r == null || r !== i) {
                        let d = this.currentTime, h = this.paused;
                        this.unload(), T(this, f, b).call(this).then(()=>{
                            this.currentTime = d, h || this.play();
                        });
                    }
                    break;
                }
            case t.DISABLE_COOKIES:
                {
                    (r == null || r !== i) && this.disableCookies && document.cookie.split(";").forEach((h)=>{
                        h.trim().startsWith("muxData") && (document.cookie = h.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"));
                    });
                    break;
                }
            case t.CAP_RENDITION_TO_PLAYER_SIZE:
                (r == null || r !== i) && (this.capRenditionToPlayerSize = r != null ? !0 : void 0);
        }
    }
    updateLogo() {
        if (!this.shadowRoot) return;
        let e = this.shadowRoot.querySelector('slot[name="logo"]');
        if (!e) return;
        let i = this.constructor.getLogoHTML(s(this, m) || this.logo);
        e.innerHTML = i;
    }
    connectedCallback() {
        var e;
        (e = super.connectedCallback) == null || e.call(this), this.nativeEl && this.src && !s(this, E) && T(this, f, b).call(this);
    }
    disconnectedCallback() {
        this.unload();
    }
    handleEvent(e) {
        e.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e.type, {
            composed: !0,
            detail: e.detail
        }));
    }
};
E = new WeakMap, c = new WeakMap, _ = new WeakMap, g = new WeakMap, p = new WeakMap, O = new WeakMap, R = new WeakMap, I = new WeakMap, M = new WeakMap, m = new WeakMap, y = new WeakMap, f = new WeakSet, b = async function() {
    s(this, c) || (await o(this, c, Promise.resolve()), o(this, c, null), this.load());
};
;
 //# sourceMappingURL=base.mjs.map
}),
"[project]/Desktop/vikkmore/node_modules/@mux/mux-video/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>F
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/mux-video/dist/base.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/castable-video/castable-mixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)");
var f = (e)=>{
    throw TypeError(e);
};
var g = (e, o, t)=>o.has(e) || f("Cannot " + t);
var u = (e, o, t)=>(g(e, o, "read from private field"), t ? t.call(e) : o.get(e)), m = (e, o, t)=>o.has(e) ? f("Cannot add the same private member more than once") : o instanceof WeakSet ? o.add(e) : o.set(e, t), d = (e, o, t, l)=>(g(e, o, "write to private field"), l ? l.call(e, t) : o.set(e, t), t);
var s = class {
    addEventListener() {}
    removeEventListener() {}
    dispatchEvent(o) {
        return !0;
    }
};
if (typeof DocumentFragment == "undefined") {
    class e extends s {
    }
    globalThis.DocumentFragment = e;
}
var n = class extends s {
}, p = class extends s {
}, x = {
    get (e) {},
    define (e, o, t) {},
    getName (e) {
        return null;
    },
    upgrade (e) {},
    whenDefined (e) {
        return Promise.resolve(n);
    }
}, a, h = class {
    constructor(o, t = {}){
        m(this, a);
        d(this, a, t == null ? void 0 : t.detail);
    }
    get detail() {
        return u(this, a);
    }
    initCustomEvent() {}
};
a = new WeakMap;
function C(e, o) {
    return new n;
}
var y = {
    document: {
        createElement: C
    },
    DocumentFragment,
    customElements: x,
    CustomEvent: h,
    EventTarget: s,
    HTMLElement: n,
    HTMLVideoElement: p
}, b = typeof window == "undefined" || typeof globalThis.customElements == "undefined", c = b ? y : globalThis, k = b ? y.document : globalThis.document;
;
;
;
;
var r, i = class extends (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CastableMediaMixin"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaTracksMixin"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$video$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MuxVideoBaseElement"])) {
    constructor(){
        super(...arguments);
        m(this, r);
    }
    get autoplay() {
        let t = this.getAttribute("autoplay");
        return t === null ? !1 : t === "" ? !0 : t;
    }
    set autoplay(t) {
        let l = this.autoplay;
        t !== l && (t ? this.setAttribute("autoplay", typeof t == "string" ? t : "") : this.removeAttribute("autoplay"));
    }
    get muxCastCustomData() {
        return {
            mux: {
                playbackId: this.playbackId,
                minResolution: this.minResolution,
                maxResolution: this.maxResolution,
                renditionOrder: this.renditionOrder,
                customDomain: this.customDomain,
                tokens: {
                    drm: this.drmToken
                },
                envKey: this.envKey,
                metadata: this.metadata,
                disableCookies: this.disableCookies,
                disableTracking: this.disableTracking,
                beaconCollectionDomain: this.beaconCollectionDomain,
                startTime: this.startTime,
                preferCmcd: this.preferCmcd
            }
        };
    }
    get castCustomData() {
        var t;
        return (t = u(this, r)) != null ? t : this.muxCastCustomData;
    }
    set castCustomData(t) {
        d(this, r, t);
    }
};
r = new WeakMap;
c.customElements.get("mux-video") || (c.customElements.define("mux-video", i), c.MuxVideoElement = i);
var F = i;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/vikkmore/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* global WeakRef */ __turbopack_context__.s([
    "InvalidStateError",
    ()=>InvalidStateError,
    "IterableWeakSet",
    ()=>IterableWeakSet,
    "NotFoundError",
    ()=>NotFoundError,
    "NotSupportedError",
    ()=>NotSupportedError,
    "castContext",
    ()=>castContext,
    "currentMedia",
    ()=>currentMedia,
    "currentSession",
    ()=>currentSession,
    "editTracksInfo",
    ()=>editTracksInfo,
    "getDefaultCastOptions",
    ()=>getDefaultCastOptions,
    "getMediaStatus",
    ()=>getMediaStatus,
    "getPlaylistSegmentFormat",
    ()=>getPlaylistSegmentFormat,
    "isHls",
    ()=>isHls,
    "loadCastFramework",
    ()=>loadCastFramework,
    "onCastApiAvailable",
    ()=>onCastApiAvailable,
    "privateProps",
    ()=>privateProps,
    "requiresCastFramework",
    ()=>requiresCastFramework,
    "setCastOptions",
    ()=>setCastOptions
]);
const privateProps = new WeakMap();
class InvalidStateError extends Error {
}
class NotSupportedError extends Error {
}
class NotFoundError extends Error {
}
const HLS_RESPONSE_HEADERS = [
    'application/x-mpegURL',
    'application/vnd.apple.mpegurl',
    'audio/mpegurl'
];
const IterableWeakSet = globalThis.WeakRef ? class extends Set {
    add(el) {
        super.add(new WeakRef(el));
    }
    forEach(fn) {
        super.forEach((ref)=>{
            const value = ref.deref();
            if (value) fn(value);
        });
    }
} : Set;
function onCastApiAvailable(callback) {
    if (!globalThis.chrome?.cast?.isAvailable) {
        globalThis.__onGCastApiAvailable = ()=>{
            // The globalThis.__onGCastApiAvailable callback alone is not reliable for
            // the added cast.framework. It's loaded in a separate JS file.
            // https://www.gstatic.com/eureka/clank/101/cast_sender.js
            // https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js
            customElements.whenDefined('google-cast-button').then(callback);
        };
    } else if (!globalThis.cast?.framework) {
        customElements.whenDefined('google-cast-button').then(callback);
    } else {
        callback();
    }
}
function requiresCastFramework() {
    // todo: exclude for Android>=56 which supports the Remote Playback API natively.
    return globalThis.chrome;
}
function loadCastFramework() {
    const sdkUrl = 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1';
    if (globalThis.chrome?.cast || document.querySelector(`script[src="${sdkUrl}"]`)) return;
    const script = document.createElement('script');
    script.src = sdkUrl;
    document.head.append(script);
}
function castContext() {
    return globalThis.cast?.framework?.CastContext.getInstance();
}
function currentSession() {
    return castContext()?.getCurrentSession();
}
function currentMedia() {
    return currentSession()?.getSessionObj().media[0];
}
function editTracksInfo(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().editTracksInfo(request, resolve, reject);
    });
}
function getMediaStatus(request) {
    return new Promise((resolve, reject)=>{
        currentMedia().getStatus(request, resolve, reject);
    });
}
function setCastOptions(options) {
    return castContext().setOptions({
        ...getDefaultCastOptions(),
        ...options
    });
}
function getDefaultCastOptions() {
    return {
        // Set the receiver application ID to your own (created in the
        // Google Cast Developer Console), or optionally
        // use the chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
        receiverApplicationId: 'CC1AD845',
        // Auto join policy can be one of the following three:
        // ORIGIN_SCOPED - Auto connect from same appId and page origin
        // TAB_AND_ORIGIN_SCOPED - Auto connect from same appId, page origin, and tab
        // PAGE_SCOPED - No auto connect
        autoJoinPolicy: 'origin_scoped',
        // The following flag enables Cast Connect(requires Chrome 87 or higher)
        // https://developers.googleblog.com/2020/08/introducing-cast-connect-android-tv.html
        androidReceiverCompatible: false,
        language: 'en-US',
        resumeSavedSession: true
    };
}
//Get the segment format given the end of the URL (.m4s, .ts, etc)
function getFormat(segment) {
    if (!segment) return undefined;
    const regex = /\.([a-zA-Z0-9]+)(?:\?.*)?$/;
    const match = segment.match(regex);
    return match ? match[1] : null;
}
function parsePlaylistUrls(playlistContent) {
    const lines = playlistContent.split('\n');
    const urls = [];
    for(let i = 0; i < lines.length; i++){
        const line = lines[i].trim();
        // Locate available video playlists and get the next line which is the URI (https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-17#section-4.4.6.2)
        if (line.startsWith('#EXT-X-STREAM-INF')) {
            const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';
            if (nextLine && !nextLine.startsWith('#')) {
                urls.push(nextLine);
            }
        }
    }
    return urls;
}
function parseSegment(playlistContent) {
    const lines = playlistContent.split('\n');
    const url = lines.find((line)=>!line.trim().startsWith('#') && line.trim() !== '');
    return url;
}
async function isHls(url) {
    try {
        const response = await fetch(url, {
            method: 'HEAD'
        });
        const contentType = response.headers.get('Content-Type');
        return HLS_RESPONSE_HEADERS.some((header)=>contentType === header);
    } catch (err) {
        console.error('Error while trying to get the Content-Type of the manifest', err);
        return false;
    }
}
async function getPlaylistSegmentFormat(url) {
    try {
        const mainManifestContent = await (await fetch(url)).text();
        let availableChunksContent = mainManifestContent;
        const playlists = parsePlaylistUrls(mainManifestContent);
        if (playlists.length > 0) {
            const chosenPlaylistUrl = new URL(playlists[0], url).toString();
            availableChunksContent = await (await fetch(chosenPlaylistUrl)).text();
        }
        const segment = parseSegment(availableChunksContent);
        const format = getFormat(segment);
        return format;
    } catch (err) {
        console.error('Error while trying to parse the manifest playlist', err);
        return undefined;
    }
}
}),
"[project]/Desktop/vikkmore/node_modules/castable-video/castable-remote-playback.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemotePlayback",
    ()=>RemotePlayback
]);
/* global chrome, cast */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)");
;
const remoteInstances = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IterableWeakSet"]();
const castElementRef = new WeakSet();
let cf;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onCastApiAvailable"])(()=>{
    if (!globalThis.chrome?.cast?.isAvailable) {
        // Useful to see in verbose logs if this shows undefined or false.
        console.debug('chrome.cast.isAvailable', globalThis.chrome?.cast?.isAvailable);
        return;
    }
    if (!cf) {
        cf = cast.framework;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.CAST_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r).onCastStateChanged?.(e));
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().addEventListener(cf.CastContextEventType.SESSION_STATE_CHANGED, (e)=>{
            remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r).onSessionStateChanged?.(e));
        });
        remoteInstances.forEach((r)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(r).init?.());
    }
});
let remotePlaybackCallbackIdCount = 0;
class RemotePlayback extends EventTarget {
    #media;
    #isInit;
    #remotePlayer;
    #remoteListeners;
    #state = 'disconnected';
    #available = false;
    #callbacks = new Set();
    #callbackIds = new WeakMap();
    constructor(media){
        super();
        this.#media = media;
        remoteInstances.add(this);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
            init: ()=>this.#init(),
            onCastStateChanged: ()=>this.#onCastStateChanged(),
            onSessionStateChanged: ()=>this.#onSessionStateChanged(),
            getCastPlayer: ()=>this.#castPlayer
        });
        this.#init();
    }
    get #castPlayer() {
        if (castElementRef.has(this.#media)) return this.#remotePlayer;
        return undefined;
    }
    /**
   * https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   * @return {'disconnected'|'connecting'|'connected'}
   */ get state() {
        return this.#state;
    }
    async watchAvailability(callback) {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        this.#callbackIds.set(callback, ++remotePlaybackCallbackIdCount);
        this.#callbacks.add(callback);
        // https://w3c.github.io/remote-playback/#getting-the-remote-playback-devices-availability-information
        queueMicrotask(()=>callback(this.#hasDevicesAvailable()));
        return remotePlaybackCallbackIdCount;
    }
    async cancelWatchAvailability(callback) {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (callback) {
            this.#callbacks.delete(callback);
        } else {
            this.#callbacks.clear();
        }
    }
    async prompt() {
        if (this.#media.disableRemotePlayback) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStateError"]('disableRemotePlayback attribute is present.');
        }
        if (!globalThis.chrome?.cast?.isAvailable) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotSupportedError"]('The RemotePlayback API is disabled on this platform.');
        }
        const willDisconnect = castElementRef.has(this.#media);
        castElementRef.add(this.#media);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCastOptions"])(this.#media.castOptions);
        Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
            this.#remotePlayer.controller.addEventListener(event, listener);
        });
        try {
            // Open browser cast menu.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().requestSession();
        } catch (err) {
            // If there will be no disconnect, reset some state here.
            if (!willDisconnect) {
                castElementRef.delete(this.#media);
            }
            // Don't throw an error if disconnecting or cancelling.
            if (err === 'cancel') {
                return;
            }
            throw new Error(err);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(this.#media)?.loadOnPrompt?.();
    }
    #disconnect() {
        if (!castElementRef.has(this.#media)) return;
        Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
            this.#remotePlayer.controller.removeEventListener(event, listener);
        });
        castElementRef.delete(this.#media);
        // isMuted is not in savedPlayerState. should we sync this back to local?
        this.#media.muted = this.#remotePlayer.isMuted;
        this.#media.currentTime = this.#remotePlayer.savedPlayerState.currentTime;
        if (this.#remotePlayer.savedPlayerState.isPaused === false) {
            this.#media.play();
        }
    }
    #hasDevicesAvailable() {
        // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
        const castState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])()?.getCastState();
        return castState && castState !== 'NO_DEVICES_AVAILABLE';
    }
    #onCastStateChanged() {
        // Cast state: NO_DEVICES_AVAILABLE, NOT_CONNECTED, CONNECTING, CONNECTED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.CastState
        const castState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().getCastState();
        if (castElementRef.has(this.#media)) {
            if (castState === 'CONNECTING') {
                this.#state = 'connecting';
                this.dispatchEvent(new Event('connecting'));
            }
        }
        if (!this.#available && castState?.includes('CONNECT')) {
            this.#available = true;
            for (let callback of this.#callbacks)callback(true);
        } else if (this.#available && (!castState || castState === 'NO_DEVICES_AVAILABLE')) {
            this.#available = false;
            for (let callback of this.#callbacks)callback(false);
        }
    }
    async #onSessionStateChanged() {
        // Session states: NO_SESSION, SESSION_STARTING, SESSION_STARTED, SESSION_START_FAILED,
        //                 SESSION_ENDING, SESSION_ENDED, SESSION_RESUMED
        // https://developers.google.com/cast/docs/reference/web_sender/cast.framework#.SessionState
        const { SESSION_RESUMED } = cf.SessionState;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["castContext"])().getSessionState() === SESSION_RESUMED) {
            /**
       * Figure out if this was the video that started the resumed session.
       * @TODO make this more specific than just checking against the video src!! (WL)
       *
       * If this video element can get the same unique id on each browser refresh
       * it would be possible to pass this unique id w/ `LoadRequest.customData`
       * and verify against currentMedia().customData below.
       */ if (this.#media.castSrc === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentMedia"])()?.media.contentId) {
                castElementRef.add(this.#media);
                Object.entries(this.#remoteListeners).forEach(([event, listener])=>{
                    this.#remotePlayer.controller.addEventListener(event, listener);
                });
                /**
         * There is cast framework resume session bug when you refresh the page a few
         * times the this.#remotePlayer.currentTime will not be in sync with the receiver :(
         * The below status request syncs it back up.
         */ try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaStatus"])(new chrome.cast.media.GetStatusRequest());
                } catch (error) {
                    console.error(error);
                }
                // Dispatch the play, playing events manually to sync remote playing state.
                this.#remoteListeners[cf.RemotePlayerEventType.IS_PAUSED_CHANGED]();
                this.#remoteListeners[cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
            }
        }
    }
    #init() {
        if (!cf || this.#isInit) return;
        this.#isInit = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCastOptions"])(this.#media.castOptions);
        /**
     * @TODO add listeners for addtrack, removetrack (WL)
     * This only has an impact on <track> with a `src` because these have to be
     * loaded manually in the load() method. This will require a new load() call
     * for each added/removed track w/ src.
     */ this.#media.textTracks.addEventListener('change', ()=>this.#updateRemoteTextTrack());
        this.#onCastStateChanged();
        this.#remotePlayer = new cf.RemotePlayer();
        new cf.RemotePlayerController(this.#remotePlayer);
        this.#remoteListeners = {
            [cf.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({ value })=>{
                if (value === true) {
                    this.#state = 'connected';
                    this.dispatchEvent(new Event('connect'));
                } else {
                    this.#disconnect();
                    this.#state = 'disconnected';
                    this.dispatchEvent(new Event('disconnect'));
                }
            },
            [cf.RemotePlayerEventType.DURATION_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('durationchange'));
            },
            [cf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('volumechange'));
            },
            [cf.RemotePlayerEventType.IS_MUTED_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('volumechange'));
            },
            [cf.RemotePlayerEventType.CURRENT_TIME_CHANGED]: ()=>{
                if (!this.#castPlayer?.isMediaLoaded) return;
                this.#media.dispatchEvent(new Event('timeupdate'));
            },
            [cf.RemotePlayerEventType.VIDEO_INFO_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event('resize'));
            },
            [cf.RemotePlayerEventType.IS_PAUSED_CHANGED]: ()=>{
                this.#media.dispatchEvent(new Event(this.paused ? 'pause' : 'play'));
            },
            [cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]: ()=>{
                // Player states: IDLE, PLAYING, PAUSED, BUFFERING
                // https://developers.google.com/cast/docs/reference/web_sender/chrome.cast.media#.PlayerState
                // pause event is handled above.
                if (this.#castPlayer?.playerState === chrome.cast.media.PlayerState.PAUSED) {
                    return;
                }
                this.#media.dispatchEvent(new Event({
                    [chrome.cast.media.PlayerState.PLAYING]: 'playing',
                    [chrome.cast.media.PlayerState.BUFFERING]: 'waiting',
                    [chrome.cast.media.PlayerState.IDLE]: 'emptied'
                }[this.#castPlayer?.playerState]));
            },
            [cf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async ()=>{
                if (!this.#castPlayer?.isMediaLoaded) return;
                // mediaInfo is not immediately available due to a bug? wait one tick
                await Promise.resolve();
                this.#onRemoteMediaLoaded();
            }
        };
    }
    #onRemoteMediaLoaded() {
        this.#updateRemoteTextTrack();
    }
    async #updateRemoteTextTrack() {
        if (!this.#castPlayer) return;
        // Get the tracks w/ trackId's that have been loaded; manually or via a playlist like a M3U8 or MPD.
        const remoteTracks = this.#remotePlayer.mediaInfo?.tracks ?? [];
        const remoteSubtitles = remoteTracks.filter(({ type })=>type === chrome.cast.media.TrackType.TEXT);
        const localSubtitles = [
            ...this.#media.textTracks
        ].filter(({ kind })=>kind === 'subtitles' || kind === 'captions');
        // Create a new array from the local subs w/ the trackId's from the remote subs.
        const subtitles = remoteSubtitles.map(({ language, name, trackId })=>{
            // Find the corresponding local text track and assign the trackId.
            const { mode } = localSubtitles.find((local)=>local.language === language && local.label === name) ?? {};
            if (mode) return {
                mode,
                trackId
            };
            return false;
        }).filter(Boolean);
        const hiddenSubtitles = subtitles.filter(({ mode })=>mode !== 'showing');
        const hiddenTrackIds = hiddenSubtitles.map(({ trackId })=>trackId);
        const showingSubtitle = subtitles.find(({ mode })=>mode === 'showing');
        // Note this could also include audio or video tracks, diff against local state.
        const activeTrackIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentSession"])()?.getSessionObj().media[0]?.activeTrackIds ?? [];
        let requestTrackIds = activeTrackIds;
        if (activeTrackIds.length) {
            // Filter out all local hidden subtitle trackId's.
            requestTrackIds = requestTrackIds.filter((id)=>!hiddenTrackIds.includes(id));
        }
        if (showingSubtitle?.trackId) {
            requestTrackIds = [
                ...requestTrackIds,
                showingSubtitle.trackId
            ];
        }
        // Remove duplicate ids.
        requestTrackIds = [
            ...new Set(requestTrackIds)
        ];
        const arrayEquals = (a, b)=>a.length === b.length && a.every((a)=>b.includes(a));
        if (!arrayEquals(activeTrackIds, requestTrackIds)) {
            try {
                const request = new chrome.cast.media.EditTracksInfoRequest(requestTrackIds);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["editTracksInfo"])(request);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
}),
"[project]/Desktop/vikkmore/node_modules/castable-video/castable-mixin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CastableMediaMixin",
    ()=>CastableMediaMixin,
    "CastableVideoMixin",
    ()=>CastableVideoMixin
]);
/* global chrome */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/castable-video/castable-remote-playback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/castable-video/castable-utils.js [app-client] (ecmascript)");
;
;
const CastableMediaMixin = (superclass)=>class CastableMedia extends superclass {
        static observedAttributes = [
            ...superclass.observedAttributes ?? [],
            'cast-src',
            'cast-content-type',
            'cast-stream-type',
            'cast-receiver'
        ];
        #localState = {
            paused: false
        };
        #castOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultCastOptions"])();
        #castCustomData;
        #remote;
        get remote() {
            if (this.#remote) return this.#remote;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requiresCastFramework"])()) {
                // No need to load the Cast framework if it's disabled.
                if (!this.disableRemotePlayback) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadCastFramework"])();
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].set(this, {
                    loadOnPrompt: ()=>this.#loadOnPrompt()
                });
                return this.#remote = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$remote$2d$playback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemotePlayback"](this);
            }
            return super.remote;
        }
        get #castPlayer() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateProps"].get(this.remote)?.getCastPlayer?.();
        }
        attributeChangedCallback(attrName, oldValue, newValue) {
            super.attributeChangedCallback(attrName, oldValue, newValue);
            if (attrName === 'cast-receiver' && newValue) {
                this.#castOptions.receiverApplicationId = newValue;
                return;
            }
            if (!this.#castPlayer) return;
            switch(attrName){
                case 'cast-stream-type':
                case 'cast-src':
                    this.load();
                    break;
            }
        }
        async #loadOnPrompt() {
            // Pause locally when the session is created.
            this.#localState.paused = super.paused;
            super.pause();
            // Sync over the muted state but not volume, 100% is different on TV's :P
            this.muted = super.muted;
            try {
                await this.load();
            } catch (err) {
                console.error(err);
            }
        }
        async load() {
            if (!this.#castPlayer) return super.load();
            const mediaInfo = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
            mediaInfo.customData = this.castCustomData;
            // Manually add text tracks with a `src` attribute.
            // M3U8's load text tracks in the receiver, handle these in the media loaded event.
            const subtitles = [
                ...this.querySelectorAll('track')
            ].filter(({ kind, src })=>src && (kind === 'subtitles' || kind === 'captions'));
            const activeTrackIds = [];
            let textTrackIdCount = 0;
            if (subtitles.length) {
                mediaInfo.tracks = subtitles.map((trackEl)=>{
                    const trackId = ++textTrackIdCount;
                    // only activate 1 subtitle text track.
                    if (activeTrackIds.length === 0 && trackEl.track.mode === 'showing') {
                        activeTrackIds.push(trackId);
                    }
                    const track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
                    track.trackContentId = trackEl.src;
                    track.trackContentType = 'text/vtt';
                    track.subtype = trackEl.kind === 'captions' ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES;
                    track.name = trackEl.label;
                    track.language = trackEl.srclang;
                    return track;
                });
            }
            if (this.castStreamType === 'live') {
                mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
            } else {
                mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
            }
            mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
            mediaInfo.metadata.title = this.title;
            mediaInfo.metadata.images = [
                {
                    url: this.poster
                }
            ];
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHls"])(this.castSrc)) {
                const segmentFormat = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlaylistSegmentFormat"])(this.castSrc);
                const isFragmentedMP4 = segmentFormat?.includes('m4s') || segmentFormat?.includes('mp4');
                if (isFragmentedMP4) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4;
                } else if (segmentFormat?.includes('ts')) {
                    mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS;
                    mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.TS;
                }
            }
            const request = new chrome.cast.media.LoadRequest(mediaInfo);
            request.currentTime = super.currentTime ?? 0;
            request.autoplay = !this.#localState.paused;
            request.activeTrackIds = activeTrackIds;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$castable$2d$video$2f$castable$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentSession"])()?.loadMedia(request);
            this.dispatchEvent(new Event('volumechange'));
        }
        play() {
            if (this.#castPlayer) {
                if (this.#castPlayer.isPaused) {
                    this.#castPlayer.controller?.playOrPause();
                }
                return;
            }
            return super.play();
        }
        pause() {
            if (this.#castPlayer) {
                if (!this.#castPlayer.isPaused) {
                    this.#castPlayer.controller?.playOrPause();
                }
                return;
            }
            super.pause();
        }
        /**
     * @see https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastOptions
     * @readonly
     *
     * @typedef {Object} CastOptions
     * @property {string} [receiverApplicationId='CC1AD845'] - The app id of the cast receiver.
     * @property {string} [autoJoinPolicy='origin_scoped'] - The auto join policy.
     * @property {string} [language='en-US'] - The language to use for the cast receiver.
     * @property {boolean} [androidReceiverCompatible=false] - Whether to use the Cast Connect.
     * @property {boolean} [resumeSavedSession=true] - Whether to resume the last session.
     *
     * @return {CastOptions}
     */ get castOptions() {
            return this.#castOptions;
        }
        get castReceiver() {
            return this.getAttribute('cast-receiver') ?? undefined;
        }
        set castReceiver(val) {
            if (this.castReceiver == val) return;
            this.setAttribute('cast-receiver', `${val}`);
        }
        // Allow the cast source url to be different than <video src>, could be a blob.
        get castSrc() {
            // Try the first <source src> for usage with even more native markup.
            return this.getAttribute('cast-src') ?? this.querySelector('source')?.src ?? this.currentSrc;
        }
        set castSrc(val) {
            if (this.castSrc == val) return;
            this.setAttribute('cast-src', `${val}`);
        }
        get castContentType() {
            return this.getAttribute('cast-content-type') ?? undefined;
        }
        set castContentType(val) {
            this.setAttribute('cast-content-type', `${val}`);
        }
        get castStreamType() {
            // NOTE: Per https://github.com/video-dev/media-ui-extensions/issues/3 `streamType` may yield `"unknown"`
            return this.getAttribute('cast-stream-type') ?? this.streamType ?? undefined;
        }
        set castStreamType(val) {
            this.setAttribute('cast-stream-type', `${val}`);
        }
        get castCustomData() {
            return this.#castCustomData;
        }
        set castCustomData(val) {
            const valType = typeof val;
            if (![
                'object',
                'undefined'
            ].includes(valType)) {
                console.error(`castCustomData must be nullish or an object but value was of type ${valType}`);
                return;
            }
            this.#castCustomData = val;
        }
        get readyState() {
            if (this.#castPlayer) {
                switch(this.#castPlayer.playerState){
                    case chrome.cast.media.PlayerState.IDLE:
                        return 0;
                    case chrome.cast.media.PlayerState.BUFFERING:
                        return 2;
                    default:
                        return 3;
                }
            }
            return super.readyState;
        }
        get paused() {
            if (this.#castPlayer) return this.#castPlayer.isPaused;
            return super.paused;
        }
        get muted() {
            if (this.#castPlayer) return this.#castPlayer?.isMuted;
            return super.muted;
        }
        set muted(val) {
            if (this.#castPlayer) {
                if (val && !this.#castPlayer.isMuted || !val && this.#castPlayer.isMuted) {
                    this.#castPlayer.controller?.muteOrUnmute();
                }
                return;
            }
            super.muted = val;
        }
        get volume() {
            if (this.#castPlayer) return this.#castPlayer?.volumeLevel ?? 1;
            return super.volume;
        }
        set volume(val) {
            if (this.#castPlayer) {
                this.#castPlayer.volumeLevel = +val;
                this.#castPlayer.controller?.setVolumeLevel();
                return;
            }
            super.volume = val;
        }
        get duration() {
            // castPlayer duration returns `0` when no media is loaded.
            if (this.#castPlayer && this.#castPlayer?.isMediaLoaded) {
                return this.#castPlayer?.duration ?? NaN;
            }
            return super.duration;
        }
        get currentTime() {
            if (this.#castPlayer && this.#castPlayer?.isMediaLoaded) {
                return this.#castPlayer?.currentTime ?? 0;
            }
            return super.currentTime;
        }
        set currentTime(val) {
            if (this.#castPlayer) {
                this.#castPlayer.currentTime = val;
                this.#castPlayer.controller?.seek();
                return;
            }
            super.currentTime = val;
        }
    };
const CastableVideoMixin = CastableMediaMixin;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/change-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrackEvent",
    ()=>TrackEvent
]);
class TrackEvent extends Event {
    track;
    constructor(type, init){
        super(type);
        this.track = init.track;
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPrivate",
    ()=>getPrivate,
    "setPrivate",
    ()=>setPrivate
]);
const privateProps = /* @__PURE__ */ new WeakMap();
function getPrivate(instance) {
    return privateProps.get(instance) ?? setPrivate(instance, {});
}
function setPrivate(instance, props) {
    let saved = privateProps.get(instance);
    if (!saved) privateProps.set(instance, saved = {});
    return Object.assign(saved, props);
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrackList",
    ()=>VideoTrackList,
    "addVideoTrack",
    ()=>addVideoTrack,
    "removeVideoTrack",
    ()=>removeVideoTrack,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/change-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
function addVideoTrack(media, track) {
    const trackList = media.videoTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in VideoTrackList.prototype)) {
        Object.defineProperty(VideoTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeVideoTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.videoTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function selectedChanged(selected) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(selected).media.videoTracks ?? [];
    let hasUnselected = false;
    for (const track of trackList){
        if (track === selected) continue;
        track.selected = false;
        hasUnselected = true;
    }
    if (hasUnselected) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
        queueMicrotask(()=>{
            delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
            trackList.dispatchEvent(new Event("change"));
        });
    }
}
class VideoTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get selectedIndex() {
        return [
            ...this.#tracks
        ].findIndex((track)=>track.selected);
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RenditionEvent",
    ()=>RenditionEvent
]);
class RenditionEvent extends Event {
    rendition;
    constructor(type, init){
        super(type);
        this.rendition = init.rendition;
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRenditionList",
    ()=>VideoRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.videoRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in VideoRenditionList.prototype)) {
        Object.defineProperty(VideoRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.selected) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.videoRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.selected) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.videoTracks
    ].filter((track)=>track.selected).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class VideoRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoRendition",
    ()=>VideoRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
;
class VideoRendition {
    src;
    id;
    width;
    height;
    bitrate;
    frameRate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTrack",
    ()=>VideoTrack,
    "VideoTrackKind",
    ()=>VideoTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
;
;
;
const VideoTrackKind = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
};
class VideoTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #selected = false;
    addRendition(src, width, height, codec, bitrate, frameRate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoRendition"]();
        rendition.src = src;
        rendition.width = width;
        rendition.height = height;
        rendition.frameRate = frameRate;
        rendition.bitrate = bitrate;
        rendition.codec = codec;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        if (val !== true) return;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRenditionList",
    ()=>AudioRenditionList,
    "addRendition",
    ()=>addRendition,
    "removeRendition",
    ()=>removeRendition,
    "selectedChanged",
    ()=>selectedChanged
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
function addRendition(track, rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioRenditions;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track = track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.add(rendition);
    const index = renditionSet.size - 1;
    if (!(index in AudioRenditionList.prototype)) {
        Object.defineProperty(AudioRenditionList.prototype, index, {
            get () {
                return getCurrentRenditions(this)[index];
            }
        });
    }
    queueMicrotask(()=>{
        if (!track.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("addrendition", {
            rendition
        }));
    });
}
function removeRendition(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
    const renditionSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet;
    renditionSet.delete(rendition);
    queueMicrotask(()=>{
        const track2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track2.enabled) return;
        renditionList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RenditionEvent"]("removerendition", {
            rendition
        }));
    });
}
function selectedChanged(rendition) {
    const renditionList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).media.audioRenditions;
    if (!renditionList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).changeRequested;
        const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(rendition).track;
        if (!track.enabled) return;
        renditionList.dispatchEvent(new Event("change"));
    });
}
function getCurrentRenditions(renditionList) {
    const media = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditionList).media;
    return [
        ...media.audioTracks
    ].filter((track)=>track.enabled).flatMap((track)=>[
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet
        ]);
}
class AudioRenditionList extends EventTarget {
    #addRenditionCallback;
    #removeRenditionCallback;
    #changeCallback;
    [Symbol.iterator]() {
        return getCurrentRenditions(this).values();
    }
    get length() {
        return getCurrentRenditions(this).length;
    }
    getRenditionById(id) {
        return getCurrentRenditions(this).find((rendition)=>`${rendition.id}` === `${id}`) ?? null;
    }
    get selectedIndex() {
        return getCurrentRenditions(this).findIndex((rendition)=>rendition.selected);
    }
    set selectedIndex(index) {
        for (const [i, rendition] of getCurrentRenditions(this).entries()){
            rendition.selected = i === index;
        }
    }
    get onaddrendition() {
        return this.#addRenditionCallback;
    }
    set onaddrendition(callback) {
        if (this.#addRenditionCallback) {
            this.removeEventListener("addrendition", this.#addRenditionCallback);
            this.#addRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addRenditionCallback = callback;
            this.addEventListener("addrendition", callback);
        }
    }
    get onremoverendition() {
        return this.#removeRenditionCallback;
    }
    set onremoverendition(callback) {
        if (this.#removeRenditionCallback) {
            this.removeEventListener("removerendition", this.#removeRenditionCallback);
            this.#removeRenditionCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeRenditionCallback = callback;
            this.addEventListener("removerendition", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioRendition",
    ()=>AudioRendition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
;
class AudioRendition {
    src;
    id;
    bitrate;
    codec;
    #selected = false;
    get selected() {
        return this.#selected;
    }
    set selected(val) {
        if (this.#selected === val) return;
        this.#selected = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedChanged"])(this);
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrackList",
    ()=>AudioTrackList,
    "addAudioTrack",
    ()=>addAudioTrack,
    "enabledChanged",
    ()=>enabledChanged,
    "removeAudioTrack",
    ()=>removeAudioTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/change-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
function addAudioTrack(media, track) {
    const trackList = media.audioTracks;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media = media;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).renditionSet = /* @__PURE__ */ new Set();
    }
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.add(track);
    const index = trackSet.size - 1;
    if (!(index in AudioTrackList.prototype)) {
        Object.defineProperty(AudioTrackList.prototype, index, {
            get () {
                return [
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet
                ][index];
            }
        });
    }
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("addtrack", {
            track
        }));
    });
}
function removeAudioTrack(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media?.audioTracks;
    if (!trackList) return;
    const trackSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).trackSet;
    trackSet.delete(track);
    queueMicrotask(()=>{
        trackList.dispatchEvent(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackEvent"]("removetrack", {
            track
        }));
    });
}
function enabledChanged(track) {
    const trackList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(track).media.audioTracks;
    if (!trackList || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested) return;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested = true;
    queueMicrotask(()=>{
        delete (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(trackList).changeRequested;
        trackList.dispatchEvent(new Event("change"));
    });
}
class AudioTrackList extends EventTarget {
    #addTrackCallback;
    #removeTrackCallback;
    #changeCallback;
    constructor(){
        super();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet = /* @__PURE__ */ new Set();
    }
    get #tracks() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(this).trackSet;
    }
    [Symbol.iterator]() {
        return this.#tracks.values();
    }
    get length() {
        return this.#tracks.size;
    }
    getTrackById(id) {
        return [
            ...this.#tracks
        ].find((track)=>track.id === id) ?? null;
    }
    get onaddtrack() {
        return this.#addTrackCallback;
    }
    set onaddtrack(callback) {
        if (this.#addTrackCallback) {
            this.removeEventListener("addtrack", this.#addTrackCallback);
            this.#addTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#addTrackCallback = callback;
            this.addEventListener("addtrack", callback);
        }
    }
    get onremovetrack() {
        return this.#removeTrackCallback;
    }
    set onremovetrack(callback) {
        if (this.#removeTrackCallback) {
            this.removeEventListener("removetrack", this.#removeTrackCallback);
            this.#removeTrackCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#removeTrackCallback = callback;
            this.addEventListener("removetrack", callback);
        }
    }
    get onchange() {
        return this.#changeCallback;
    }
    set onchange(callback) {
        if (this.#changeCallback) {
            this.removeEventListener("change", this.#changeCallback);
            this.#changeCallback = void 0;
        }
        if (typeof callback == "function") {
            this.#changeCallback = callback;
            this.addEventListener("change", callback);
        }
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioTrack",
    ()=>AudioTrack,
    "AudioTrackKind",
    ()=>AudioTrackKind
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
;
;
;
const AudioTrackKind = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
};
class AudioTrack {
    id;
    kind;
    label = "";
    language = "";
    sourceBuffer;
    #enabled = false;
    addRendition(src, codec, bitrate) {
        const rendition = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioRendition"]();
        rendition.src = src;
        rendition.codec = codec;
        rendition.bitrate = bitrate;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addRendition"])(this, rendition);
        return rendition;
    }
    removeRendition(rendition) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeRendition"])(rendition);
    }
    get enabled() {
        return this.#enabled;
    }
    set enabled(val) {
        if (this.#enabled === val) return;
        this.#enabled = val;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enabledChanged"])(this);
    }
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaTracksMixin",
    ()=>MediaTracksMixin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
const nativeVideoTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "video");
const nativeAudioTracksFn = getBaseMediaTracksFn(globalThis.HTMLMediaElement, "audio");
function MediaTracksMixin(MediaElementClass) {
    if (!MediaElementClass?.prototype) return MediaElementClass;
    const videoTracksFn = getBaseMediaTracksFn(MediaElementClass, "video");
    if (!videoTracksFn || `${videoTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "videoTracks", {
            get () {
                return getVideoTracks(this);
            }
        });
    }
    const audioTracksFn = getBaseMediaTracksFn(MediaElementClass, "audio");
    if (!audioTracksFn || `${audioTracksFn}`.includes("[native code]")) {
        Object.defineProperty(MediaElementClass.prototype, "audioTracks", {
            get () {
                return getAudioTracks(this);
            }
        });
    }
    if (!("addVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addVideoTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(this, track);
            return track;
        };
    }
    if (!("removeVideoTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeVideoTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"];
    }
    if (!("addAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.addAudioTrack = function(kind, label = "", language = "") {
            const track = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrack"]();
            track.kind = kind;
            track.label = label;
            track.language = language;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(this, track);
            return track;
        };
    }
    if (!("removeAudioTrack" in MediaElementClass.prototype)) {
        MediaElementClass.prototype.removeAudioTrack = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"];
    }
    if (!("videoRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "videoRenditions", {
            get () {
                return initVideoRenditions(this);
            }
        });
    }
    const initVideoRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoRenditions = renditions;
        }
        return renditions;
    };
    if (!("audioRenditions" in MediaElementClass.prototype)) {
        Object.defineProperty(MediaElementClass.prototype, "audioRenditions", {
            get () {
                return initAudioRenditions(this);
            }
        });
    }
    const initAudioRenditions = (media)=>{
        let renditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions;
        if (!renditions) {
            renditions = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioRenditionList"]();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(renditions).media = media;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioRenditions = renditions;
        }
        return renditions;
    };
    return MediaElementClass;
}
function getBaseMediaTracksFn(MediaElementClass, type) {
    if (MediaElementClass?.prototype) {
        return Object.getOwnPropertyDescriptor(MediaElementClass.prototype, `${type}Tracks`)?.get;
    }
}
function getVideoTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).videoTracks = tracks;
        if (nativeVideoTracksFn) {
            const nativeTracks = nativeVideoTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addVideoTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeVideoTrack"])(event.track);
            });
        }
    }
    return tracks;
}
function getAudioTracks(media) {
    let tracks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks;
    if (!tracks) {
        tracks = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrackList"]();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrivate"])(media).audioTracks = tracks;
        if (nativeAudioTracksFn) {
            const nativeTracks = nativeAudioTracksFn.call(media.nativeEl ?? media);
            for (const nativeTrack of nativeTracks){
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, nativeTrack);
            }
            nativeTracks.addEventListener("change", ()=>{
                tracks.dispatchEvent(new Event("change"));
            });
            nativeTracks.addEventListener("addtrack", (event)=>{
                if ([
                    ...tracks
                ].some((t)=>t instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioTrack"])) {
                    for (const nativeTrack of nativeTracks){
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"])(nativeTrack);
                    }
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addAudioTrack"])(media, event.track);
            });
            nativeTracks.addEventListener("removetrack", (event)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeAudioTrack"])(event.track);
            });
        }
    }
    return tracks;
}
;
}),
"[project]/Desktop/vikkmore/node_modules/media-tracks/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$mixin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/mixin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$video$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/video-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$track$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-track-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$audio$2d$rendition$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/audio-rendition-list.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$change$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/change-event.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$media$2d$tracks$2f$dist$2f$rendition$2d$event$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/media-tracks/dist/rendition-event.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Desktop/vikkmore/node_modules/@mux/mux-player-react/dist/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ze,
    "playerSoftwareName",
    ()=>fe,
    "playerSoftwareVersion",
    ()=>de
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/mux-player/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/mux-player/dist/base.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
var M = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version) >= 19, E = {
    className: "class",
    classname: "class",
    htmlFor: "for",
    crossOrigin: "crossorigin",
    viewBox: "viewBox",
    playsInline: "playsinline",
    autoPlay: "autoplay",
    playbackRate: "playbackrate"
}, B = (e)=>e == null, ee = (e, t)=>B(t) ? !1 : e in t, te = (e)=>e.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`), ne = (e, t)=>{
    if (!(!M && typeof t == "boolean" && !t)) {
        if (ee(e, E)) return E[e];
        if (typeof t != "undefined") return /[A-Z]/.test(e) ? te(e) : e;
    }
};
var ae = (e, t)=>!M && typeof e == "boolean" ? "" : e, P = (e = {})=>{
    let { ref: t, ...n } = e;
    return Object.entries(n).reduce((o, [a, l])=>{
        let i = ne(a, l);
        if (!i) return o;
        let c = ae(l, a);
        return o[i] = c, o;
    }, {});
};
;
function x(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function re(...e) {
    return (t)=>{
        let n = !1, o = e.map((a)=>{
            let l = x(a, t);
            return !n && typeof l == "function" && (n = !0), l;
        });
        if (n) return ()=>{
            for(let a = 0; a < o.length; a++){
                let l = o[a];
                typeof l == "function" ? l() : x(e[a], null);
            }
        };
    };
}
function f(...e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](re(...e), e);
}
;
var oe = Object.prototype.hasOwnProperty, ue = (e, t)=>{
    if (Object.is(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    if (Array.isArray(e)) return !Array.isArray(t) || e.length !== t.length ? !1 : e.some((a, l)=>t[l] === a);
    let n = Object.keys(e), o = Object.keys(t);
    if (n.length !== o.length) return !1;
    for(let a = 0; a < n.length; a++)if (!oe.call(t, n[a]) || !Object.is(e[n[a]], t[n[a]])) return !1;
    return !0;
}, p = (e, t, n)=>!ue(t, e[n]), se = (e, t, n)=>{
    e[n] = t;
}, ie = (e, t, n, o = se, a = p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let l = n == null ? void 0 : n.current;
        l && a(l, t, e) && o(l, t, e);
    }, [
        n == null ? void 0 : n.current,
        t
    ]), u = ie;
var ye = ()=>{
    try {
        return "3.11.4";
    } catch  {}
    return "UNKNOWN";
}, me = ye(), g = ()=>me;
;
var r = (e, t, n)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let o = t == null ? void 0 : t.current;
        if (!o || !n) return;
        let a = e, l = n;
        return o.addEventListener(a, l), ()=>{
            o.removeEventListener(a, l);
        };
    }, [
        t == null ? void 0 : t.current,
        n,
        e
    ]);
var Pe = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(({ children: e, ...t }, n)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("mux-player", {
        suppressHydrationWarning: !0,
        ...P(t),
        ref: n
    }, e)), xe = (e, t)=>{
    let { onAbort: n, onCanPlay: o, onCanPlayThrough: a, onEmptied: l, onLoadStart: i, onLoadedData: c, onLoadedMetadata: v, onProgress: R, onDurationChange: T, onVolumeChange: h, onRateChange: b, onResize: C, onWaiting: k, onPlay: O, onPlaying: S, onTimeUpdate: w, onPause: N, onSeeking: L, onSeeked: A, onStalled: I, onSuspend: _, onEnded: K, onError: H, onCuePointChange: D, onChapterChange: V, metadata: W, tokens: U, paused: z, playbackId: F, playbackRates: G, currentTime: Z, themeProps: j, extraSourceParams: q, castCustomData: J, _hlsConfig: Y, ...$ } = t;
    return u("tokens", U, e), u("playbackId", F, e), u("playbackRates", G, e), u("metadata", W, e), u("extraSourceParams", q, e), u("_hlsConfig", Y, e), u("themeProps", j, e), u("castCustomData", J, e), u("paused", z, e, (s, y)=>{
        y != null && (y ? s.pause() : s.play());
    }, (s, y, Q)=>s.hasAttribute("autoplay") && !s.hasPlayed ? !1 : p(s, y, Q)), u("currentTime", Z, e, (s, y)=>{
        y != null && (s.currentTime = y);
    }), r("abort", e, n), r("canplay", e, o), r("canplaythrough", e, a), r("emptied", e, l), r("loadstart", e, i), r("loadeddata", e, c), r("loadedmetadata", e, v), r("progress", e, R), r("durationchange", e, T), r("volumechange", e, h), r("ratechange", e, b), r("resize", e, C), r("waiting", e, k), r("play", e, O), r("playing", e, S), r("timeupdate", e, w), r("pause", e, N), r("seeking", e, L), r("seeked", e, A), r("stalled", e, I), r("suspend", e, _), r("ended", e, K), r("error", e, H), r("cuepointchange", e, D), r("chapterchange", e, V), [
        $
    ];
}, de = g(), fe = "mux-player-react", ge = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((e, t)=>{
    var i;
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), o = f(n, t), [a] = xe(n, e), [l] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((i = e.playerInitTime) != null ? i : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"])());
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(Pe, {
        ref: o,
        defaultHiddenCaptions: e.defaultHiddenCaptions,
        playerSoftwareName: fe,
        playerSoftwareVersion: de,
        playerInitTime: l,
        ...a
    });
}), ze = ge;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/vikkmore/node_modules/@mux/mux-player-react/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaxResolution",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MaxResolution"],
    "MediaError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaError"],
    "MinResolution",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MinResolution"],
    "RenditionOrder",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["RenditionOrder"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "generatePlayerInitTime",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlayerInitTime"],
    "playerSoftwareName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["playerSoftwareName"],
    "playerSoftwareVersion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["playerSoftwareVersion"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/mux-player-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$playback$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/playback-core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vikkmore$2f$node_modules$2f40$mux$2f$mux$2d$player$2f$dist$2f$base$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vikkmore/node_modules/@mux/mux-player/dist/base.mjs [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=a5dd2_18c588a4._.js.map
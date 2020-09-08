try {
    var _ME_AddExternalData = function(a) {
            a = eval(("(" + a + ")").replace($i, ""));
            MO && ZGa(a)
        },
        $Ga = [1],
        NO = function(a) {
            return Math.max(Math.floor(t() / 1E3), a.b)
        },
        aHa = [3],
        bHa = [1],
        cHa = [1, 2],
        OO = function(a) {
            Sg(this, a, null)
        };
    v(OO, Pg);
    OO.prototype.getEmail = function() {
        return Ug(this, 1, "")
    };
    OO.prototype.getName = function() {
        return Ug(this, 2, "")
    };
    OO.prototype.In = function() {
        return Ug(this, 4, "")
    };
    var PO = function(a) {
        Sg(this, a, null)
    };
    v(PO, Pg);
    var QO = function(a) {
            var b = new uA;
            X(b, 1, a);
            return b
        },
        dHa = function(a, b) {
            var c = new JA;
            X(c, 1, a);
            X(c, 2, !!b);
            return c
        },
        eHa = [1],
        RO = function(a, b) {
            EF(a, 1, b)
        },
        SO = function(a) {
            Sg(this, a, $Ga)
        };
    v(SO, Pg);
    var TO = function(a) {
        Sg(this, a, null)
    };
    v(TO, Pg);
    TO.prototype.getEmail = function() {
        return Ug(this, 1, "")
    };
    TO.prototype.getName = function() {
        return Ug(this, 2, "")
    };
    var UO = {
            UNKNOWN: 0,
            Mea: 1,
            Uea: 2,
            nw: 26,
            qw: 3,
            wfa: 16,
            ow: 4,
            tw: 5,
            uw: 6,
            sw: 7,
            xfa: 8,
            Rr: 9,
            Qr: 10,
            wC: 27,
            rw: 11,
            ww: 12,
            Tr: 13,
            Sr: 14,
            yfa: 15,
            Xr: 17,
            Wr: 18,
            Iw: 19,
            Jw: 20,
            Lw: 21,
            Bw: 22,
            Nw: 23,
            Kw: 24
        },
        VO = {
            KQ: 0,
            hw: 1,
            Ow: 2
        },
        WO = {
            LQ: 0,
            Rw: 1,
            Sw: 2
        },
        XO = function(a) {
            Sg(this, a, null)
        };
    v(XO, Pg);
    var YO = {
            UNKNOWN: 0,
            xC: 1,
            DC: 2
        },
        ZO = {
            UNKNOWN: 0,
            Pw: 1,
            GC: 2
        },
        $O = function(a) {
            Sg(this, a, null)
        };
    v($O, Pg);
    var aP = function(a) {
        Sg(this, a, null)
    };
    v(aP, Pg);
    var bP = function(a) {
        Sg(this, a, null)
    };
    v(bP, Pg);
    var cP = function(a) {
        Sg(this, a, null)
    };
    v(cP, Pg);
    var fHa = function(a, b) {
            b.R(dHa(a.Va, !0));
            C(a.o.o(), function(c) {
                c.email != a.Va && 102 != c.zc() && b.R(dHa(c.email))
            })
        },
        gHa = function(a) {
            var b = new EA,
                c = a.eZ(),
                c = QO(Math.floor(c / 1E3).toString());
            X(b, 1, c);
            c = a.YY();
            c = QO(Math.floor(c / 1E3).toString());
            X(b, 2, c);
            X(b, 3, a.Fa.b);
            return b
        },
        hHa = function(a, b) {
            if (!a.Fb()) {
                var c = new KA,
                    d = a.Fa.rb();
                X(c, 1, d);
                X(c, 2, a.vb);
                b.S(c)
            }
        },
        iHa = function(a) {
            return NO(a) - a.b
        },
        dP = function(a, b) {
            iO(1E3 * b, a.H);
            return b
        },
        eP = {
            gD: 0,
            fC: 1,
            xP: 2,
            cD: 3
        },
        jHa = function(a, b) {
            var c = new cP;
            Vg(c, 1, a.H);
            b &&
                Vg(c, 2, a.V ? ZO.Pw : ZO.GC);
            return c
        },
        kHa = function(a) {
            var b = new XO;
            Vg(b, 2, a.b.o);
            return b
        },
        fP = function(a) {
            var b = new XO;
            a = a.b.H;
            null != a && Vg(b, 1, a);
            return b
        },
        lHa = function(a) {
            function b(a, b) {
                null != b && (f += " " + a + "=" + b + ";")
            }

            function c(a) {
                switch (a) {
                    case YO.UNKNOWN:
                        return "UNKNOWN";
                    case YO.xC:
                        return "FLAT";
                    case YO.DC:
                        return "HIERARCHICAL"
                }
                return null
            }

            function d(a) {
                switch (a) {
                    case ZO.UNKNOWN:
                        return "UNKNOWN";
                    case ZO.Pw:
                        return "SUGGESTIONS";
                    case ZO.GC:
                        return "LISTING"
                }
                return null
            }

            function e(a) {
                switch (a) {
                    case VO.KQ:
                        return "UNKNOWN_INTERACTION";
                    case VO.hw:
                        return "DURATION_CHANGE";
                    case VO.Ow:
                        return "START_TIME_CHANGE"
                }
                return null
            }
            var f = "Impression recorded:";
            b("Type", function(a) {
                switch (a) {
                    case UO.UNKNOWN:
                        return "UNKNOWN";
                    case UO.nw:
                        return "EVENT_TIME_CHANGED";
                    case UO.qw:
                        return "FIND_TIME_BUTTON_SHOWN";
                    case UO.ow:
                        return "FIND_TIME_BUTTON_CLICKED";
                    case UO.tw:
                        return "FIND_TIME_SUGGESTION_VIEW_SHOWN";
                    case UO.uw:
                        return "FIND_TIME_SUGGESTION_VIEW_SUGGESTION_ACCEPTED";
                    case UO.sw:
                        return "FIND_TIME_SHOW_MORE_CLICKED";
                    case UO.Rr:
                        return "FIND_TIME_GRID_VIEW_SUGGESTION_ACCEPTED";
                    case UO.Qr:
                        return "FIND_TIME_GRID_VIEW_CUSTOM_TIME_ACCEPTED";
                    case UO.wC:
                        return "FIND_TIME_ORIGINAL_TIME_SELECTED";
                    case UO.rw:
                        return "FIND_TIME_FILTERS_CHANGED";
                    case UO.ww:
                        return "FIND_TIME_WEB_SUBMIT_CLICKED";
                    case UO.Tr:
                        return "FIND_TIME_WEB_CANCEL_CLICKED";
                    case UO.Sr:
                        return "FIND_TIME_GUEST_LIST_CHANGED";
                    case UO.Xr:
                        return "ROOM_BOOKING_ENTRY_POINT_SHOWN";
                    case UO.Wr:
                        return "ROOM_BOOKING_ENTRY_POINT_CLICKED";
                    case UO.Iw:
                        return "ROOMS_SHOWN";
                    case UO.Jw:
                        return "ROOM_ADDED";
                    case UO.Lw:
                        return "ROOM_REMOVED";
                    case UO.Bw:
                        return "HIERARCHY_NODE_EXPANDED";
                    case UO.Nw:
                        return "SEARCH_QUERY_ENTERED";
                    case UO.Kw:
                        return "ROOM_BOOKING_FILTERS_CHANGED"
                }
                return null
            }(Tg(a, 1)));
            Wg(a, $O, 5) && (b("NumBestSuggestions", Tg(Wg(a, $O, 5), 1)), b("SuggestionsForRecurringEvent", Tg(Wg(a, $O, 5), 2)));
            Wg(a, aP, 4) && b("Rank", Tg(Wg(a, aP, 4), 2));
            b("UiEntryPoint", function(a) {
                switch (a) {
                    case WO.LQ:
                        return "UNKNOWN_UI";
                    case WO.Rw:
                        return "WEB_EVENT_DETAILS";
                    case WO.Sw:
                        return "WEB_FIND_A_TIME_WINDOW"
                }
                return null
            }(Tg(a, 10)));
            Wg(a, bP, 7) && (b("RoomViewContainsSuggestions", Tg(Wg(a, bP, 7), 1)), b("RoomViewContainsListing",
                Tg(Wg(a, bP, 7), 2)), b("RoomViewListingType", c(Tg(Wg(a, bP, 7), 3))));
            a.aj() && b("RoomUiEntryPointType", d(Tg(a.aj(), 2)));
            Tg(a, 11) && b("TimeGridInteractionType", e(Tg(a, 11)));
            b("OriginalTimeMatchesSuggestion", Tg(a, 12));
            return f
        },
        mHa = [1, 2],
        nHa = [2],
        oHa = function(a, b) {
            var c = a.b.o.b(b);
            return c && c.displayName ? c.displayName : b
        },
        pHa = function(a, b) {
            var c = a.b.o.b(b.getEmail());
            return !!c && c.Rc()
        },
        gP = function(a, b, c, d, e) {
            var f = r(a.bY, e);
            e = new SO;
            a = Tb(b, f, a);
            d && (a = d.concat(a));
            RO(e, a);
            c && Vg(e, 2, c);
            return e
        },
        hP = function(a) {
            Sg(this,
                a, null)
        };
    v(hP, Pg);
    hP.prototype.rb = function() {
        return Ug(this, 1, "")
    };
    hP.prototype.mf = function() {
        return Ug(this, 2, "")
    };
    hP.prototype.getTime = function() {
        return Wg(this, PO, 3)
    };
    var qHa = function(a) {
        Sg(this, a, aHa)
    };
    v(qHa, Pg);
    var rHa = [2, 3, 99],
        iP = function(a) {
            Sg(this, a, null)
        };
    v(iP, Pg);
    var sHa = [1, 2, 5, 7],
        tHa = function(a) {
            Sg(this, a, bHa)
        };
    v(tHa, Pg);
    var jP = function(a) {
        Sg(this, a, cHa)
    };
    v(jP, Pg);
    var kP = function(a) {
            return Ug(a, 3, "")
        },
        uHa = function(a) {
            Sg(this, a, null)
        };
    v(uHa, Pg);
    var lP = function(a) {
        Sg(this, a, null)
    };
    v(lP, Pg);
    lP.prototype.getEmail = function() {
        return Ug(this, 1, "")
    };
    var mP = function(a) {
        Sg(this, a, null)
    };
    v(mP, Pg);
    mP.prototype.aj = function() {
        return Wg(this, OO, 1)
    };
    var nP = function(a) {
        Sg(this, a, eHa)
    };
    v(nP, Pg);
    var oP = function(a) {
        Sg(this, a, null)
    };
    v(oP, Pg);
    oP.prototype.getName = function() {
        return Ug(this, 2, "")
    };
    var pP = function(a) {
            return Xg(a, TO, 1)
        },
        vHa = function(a, b) {
            X(a, 3, b)
        },
        wHa = function(a, b) {
            X(a, 2, b)
        },
        xHa = function() {
            return new Je(function(a, b) {
                b(void 0)
            })
        },
        qP = function(a) {
            Sg(this, a, null)
        };
    v(qP, Pg);
    qP.prototype.aj = function() {
        return Wg(this, cP, 8)
    };
    qP.prototype.In = function() {
        return Tg(this, 9)
    };
    var yHa = function(a) {
        Sg(this, a, null)
    };
    v(yHa, Pg);
    var rP = function(a, b, c) {
            a.b || (a.b = {});
            var d = c ? c.Le() : c;
            a.b[b] = c;
            Vg(a, b, d)
        },
        sP = function(a, b, c, d) {
            var e = new MA,
                f = gHa(b);
            c.o ? (c = new FA, X(c, 1, f), (f = b.Ba.Se()) ? wHa(c, f.getName()) : wHa(c, jh(a.S).yd()), vHa(c, b.S.Mh()), X(e, 3, c)) : X(e, 2, f);
            fHa(b, e);
            hHa(b, e);
            d && X(e, 7, d);
            d = b.o.S();
            C(d, function(a) {
                var b = new NA;
                X(b, 1, a.email);
                pA(e, 6, b)
            });
            X(e, 11, b.vb);
            X(e, 8, a.T);
            return e
        },
        zHa = function(a, b, c) {
            var d = new UA;
            fHa(b, d);
            hHa(b, d);
            var e = b.ma.get();
            X(d, 8, e);
            X(d, 10, b.vb);
            b = new VA;
            e = new tA;
            X(e, 1, c.o.toString());
            X(b, 1, e);
            e = QO(NO(c).toString());
            X(b, 2, e);
            if (c.R == eP.fC) X(b, 4, 1);
            else {
                e = c.R;
                switch (e) {
                    case eP.gD:
                        e = 7;
                        break;
                    case eP.fC:
                        throw Error("bb");
                    case eP.xP:
                        e = 1;
                        break;
                    case eP.cD:
                        e = 1;
                        break;
                    default:
                        throw Error("cb`" + e);
                }
                e += Math.floor(iHa(c) / 86400);
                c = dP(c, c.b + 86400 * e);
                c = QO(c.toString());
                X(b, 3, c);
                X(b, 4, 0)
            }
            X(d, 2, b);
            X(d, 4, !1);
            X(d, 5, 10);
            X(d, 9, !1);
            X(d, 3, a.T);
            return d
        },
        tP = function(a, b, c, d, e) {
            var f = Sa(a.R.b(d)),
                g = b.$d;
            g && g.U(f);
            var k = t();
            return fB(a.H).then(function(a) {
                return a.request({
                    root: this.o,
                    path: "/v2/rooms:suggest",
                    method: "POST",
                    params: {
                        alt: "protojson"
                    },
                    body: f
                })
            }, null, a).then(function(a) {
                if (a && 200 == a.status) {
                    this.ab.wf("room_suggest_success", t() - k);
                    var b = QA.ra();
                    a = eB(this.$H, a.result, b);
                    a = new uHa(a);
                    g && g.T(kP(a));
                    c(a, e)
                } else return this.ab.wf("room_suggest_error", t() - k), xHa()
            }, function(a) {
                this.ab.nb(a instanceof Ke ? "room_suggest_cancelled" : "room_suggest_failure")
            }, a)
        },
        AHa = function(a, b) {
            var c = a.o;
            if (!c) return !0;
            var d = Vb(Xg(b, iP, 7), function(a) {
                a = (a = (a = Wg(a, lP, 1)) ? a.getEmail() : null) ? c.b(a) : null;
                return !!a && !a.Rc()
            });
            return !(1 == Xg(b, lP, 5).length && d)
        },
        BHa = function(a, b) {
            var c = uv(a, b);
            return Math.floor(c / 1E3)
        },
        CHa = function(a) {
            a = iO(1E3 * NO(a), a.H);
            return Eh(a.year, a.month, a.Ga)
        },
        DHa = function(a, b, c, d) {
            J.call(this);
            this.H = a;
            this.o = b;
            this.R = c;
            this.b = dP(this, d)
        };
    v(DHa, J);
    var uP = function(a, b, c, d, e) {
            var f = new qP;
            Vg(f, 1, b);
            var g = t();
            Vg(f, 6, g);
            g = new yHa;
            a.R ? Vg(g, 2, a.o) : Vg(g, 1, a.o);
            rP(f, 2, g);
            switch (b) {
                case UO.qw:
                case UO.ow:
                case UO.Nw:
                case UO.Kw:
                case UO.nw:
                    break;
                case UO.rw:
                case UO.sw:
                case UO.ww:
                case UO.Tr:
                case UO.Qr:
                    c = fP(c);
                    rP(f, 3, c);
                    break;
                case UO.tw:
                    a = fP(c);
                    rP(f, 3, a);
                    c = c.b.R;
                    a = new $O;
                    Vg(a, 1, c);
                    Vg(a, 2, e.Yf);
                    rP(f, 5, a);
                    break;
                case UO.uw:
                case UO.Rr:
                    c = fP(c);
                    rP(f, 3, c);
                    c = new aP;
                    Vg(c, 1, e.Mv);
                    Vg(c, 2, e.Ca);
                    rP(f, 4, c);
                    break;
                case UO.wC:
                    c = fP(c);
                    rP(f, 3, c);
                    Vg(f, 12, null);
                    break;
                case UO.Sr:
                    Vg(f,
                        10, e.b ? WO.Sw : WO.Rw);
                    e.b && (c = fP(c), rP(f, 3, c));
                    break;
                case UO.Iw:
                    c = kHa(d);
                    rP(f, 3, c);
                    c = new bP;
                    Vg(c, 1, e.T);
                    Vg(c, 2, e.o);
                    Vg(c, 3, e.o ? e.U ? YO.xC : YO.DC : YO.UNKNOWN);
                    rP(f, 7, c);
                    break;
                case UO.Bw:
                    c = kHa(d);
                    rP(f, 3, c);
                    Vg(f, 9, e.S);
                    break;
                case UO.Xr:
                case UO.Wr:
                    Vg(f, 10, e.b ? WO.Sw : WO.Rw);
                    break;
                case UO.Lw:
                    c = jHa(e, !1);
                    rP(f, 8, c);
                    break;
                case UO.Jw:
                    c = jHa(e, !0);
                    rP(f, 8, c);
                    c = new XO;
                    Vg(c, 2, e.ma);
                    rP(f, 3, c);
                    break;
                default:
                    throw Error("ab");
            }
            b != UO.Qr && b != UO.Rr || Vg(f, 11, e.R);
            return f
        },
        vP = function(a, b) {
            a.b.push(b);
            a.H && ca.console.log("[gcal.suggest.ImpressionRecorderImpl] " +
                lHa(b))
        },
        wP = function(a) {
            Sg(this, a, mHa)
        };
    v(wP, Pg);
    var xP = function(a) {
        Sg(this, a, nHa)
    };
    v(xP, Pg);
    var EHa = function(a, b) {
            var c = Xg(b, qHa, 2);
            if (c && 0 != c.length) {
                var d;
                a: {
                    for (d = 0; d < c.length; d++)
                        if (1 != Ug(c[d], 2, 0)) {
                            d = !1;
                            break a
                        }
                    d = !0
                }
                if (d)
                    if (1 != c.length) {
                        for (var e = d = 0; e < c.length; e++) {
                            var f = Wg(c[e], lP, 1);
                            f && pHa(a, f) && d++
                        }
                        c = d == c.length ? "Several rooms are unavailable" : "Several participants are unavailable"
                    } else d = Wg(c[0], lP, 1), c = pHa(a, d) || d.getEmail() != a.o ? jl(new il('{USER} has "{EVENT_TITLE}"'), {
                        USER: oHa(a, d.getEmail()),
                        EVENT_TITLE: Ug(Xg(c[0], hP, 3)[0], 4, "")
                    }) : jl(new il('You have "{EVENT_TITLE}"'), {
                        EVENT_TITLE: Ug(Xg(c[0],
                            hP, 3)[0], 4, "")
                    });
                else {
                    a: {
                        for (d = 0; d < c.length; d++)
                            if (0 != Ug(c[d], 2, 0)) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                    if (d) 1 < c.length ? c = "Several guests usually don\u2019t take meetings at this time" : (c = Wg(c[0], lP, 1), c = c.getEmail() == a.o ? "You usually don't take meetings at this time" : jl(new il("{USER} usually doesn\u2019t take meetings at this time"), {
                        USER: oHa(a, c.getEmail())
                    }));
                    else {
                        d = new Le;
                        for (e = 0; e < c.length; e++) d.add(Wg(c[e], lP, 1).getEmail());
                        c = 1 == d.ac() ? "One or more guests have an event conflict" : "Several participants are unavailable"
                    }
                }
            } else c =
                "Everyone can attend";
            return c
        },
        yP = function(a) {
            Sg(this, a, null)
        };
    v(yP, Pg);
    var FHa = function(a, b, c) {
            a.H = gP(a, Xg(Wg(b, jP, 1), mP, 1), Ug(Wg(b, jP, 1), 3, ""), c ? pP(a.H) : null, kP(b))
        },
        zP = function(a, b) {
            a.T = gP(a, Xg(Wg(b, tHa, 2), mP, 1), null, null, kP(b))
        },
        GHa = function(a, b) {
            var c = new nP,
                d = Tb(b, a.aS);
            EF(c, 1, d);
            return c
        },
        AP = function(a) {
            Sg(this, a, rHa)
        };
    v(AP, Pg);
    var BP = function(a) {
        Sg(this, a, sHa)
    };
    v(BP, Pg);
    var HHa = {
            HC: 0,
            NQ: 1
        },
        CP = function(a) {
            Sg(this, a, null)
        };
    v(CP, Pg);
    CP.prototype.getName = function() {
        return Ug(this, 3, "")
    };
    var DP = function(a) {
        D.call(this, jB);
        this.kr = a
    };
    v(DP, D);
    var IHa = function(a) {
        D.call(this, kta);
        this.ag = a
    };
    v(IHa, D);
    var EP = function(a) {
            return Xg(a, oP, 1)
        },
        FP = function(a) {
            Sg(this, a, null)
        };
    v(FP, Pg);
    FP.prototype.Ya = function() {
        var a = Tg(this, 1) || 0,
            b = Tg(this, 2) || 0;
        return new Date(1E3 * a + b / 1E6)
    };
    var GP = function(a) {
            var b = new OA;
            X(b, 1, 5);
            X(b, 2, !0);
            X(a, 9, b)
        },
        HP = function(a) {
            a = a.get();
            if (!a) throw Error("Ka");
            if (!(a instanceof $h)) throw Error("La");
            return a
        },
        JHa = function(a, b) {
            var c = {};
            C(a, function(d, e) {
                c[b.call(void 0, d, e, a)] = d
            });
            return c
        },
        IP = function(a) {
            return new $h(a.first, Fh(a.Xc))
        },
        JP = function(a, b) {
            var c = a.b(b);
            if (!c) return null;
            var d = c.match(a.S);
            if (!d) return null;
            var e = d[3].toLowerCase();
            "resource.calendar.google.com" == e && (d = c.match(/^(.*)_/)) && (e = d[1]);
            return e
        },
        KP = function(a, b) {
            x.call(this);
            this.S = M();
            this.o = b;
            this.H = a;
            this.R = jh(this.S);
            this.T = this.R.Ed();
            if (this.b) throw Error("db");
            var c = this.R.Vf()[0].getName(),
                d = HP(this.H.b).duration.b,
                e = BHa(IP(this.o).start.Ya(), c);
            this.b = new DHa(c, d, eP.gD, e);
            this.Hb(this.b);
            this.Da = new I(this);
            this.Hb(this.Da);
            this.Da.ka(this.o, "change", this.U).ka(a.b, "change", this.V)
        };
    v(KP, x);
    KP.prototype.V = function() {
        var a = this.b,
            b = HP(this.H.b).duration.b;
        a.o != b && (a.o = b, a.ya(new DP(0)))
    };
    KP.prototype.U = function() {
        var a = Jh(IP(this.o).start.Ya(), this.T),
            b = Jh(CHa(this.b), this.T);
        a.equals(b) || (a = BHa(a, this.b.H), b = this.b, a != b.b && (b.b = dP(b, a), b.ya(new DP(1))))
    };
    var LP = function(a, b) {
            var c = new PA;
            X(c, 1, !0);
            X(c, 2, 50);
            X(c, 3, !a.b);
            b && X(c, 4, b);
            return c
        },
        KHa = function(a, b, c, d, e) {
            a.ab.nb("room_request_suggestions_only");
            d = sP(a, b, d);
            GP(d);
            e && X(d, 1, e);
            return tP(a, b, p(c.G7, c), d)
        },
        LHa = function(a, b, c, d) {
            var e = new zf,
                f = Sa(a.R.b(zHa(a, b, c))),
                g = b.$d;
            g && g.V(f);
            var k = t();
            fB(a.H).addCallback(function(a) {
                a.request({
                    root: this.o,
                    path: "/v2/times:suggest",
                    method: "POST",
                    params: {
                        alt: "protojson"
                    },
                    body: f
                }).then(function(a) {
                    if (a && 200 == a.status) {
                        var c = XA.ra();
                        a = eB(this.$H, a.result, c);
                        a = new BP(a);
                        g && g.S(Ug(a, 8, ""));
                        this.ab.wf("time_suggest_success", t() - k);
                        if (AHa(b, a)) {
                            d.H = Ug(a, 8, "");
                            for (var f = Xg(a, AP, 1), c = Ug(a, 6, 0), c = 0 > c ? f.length : c, c = Math.min(3, c), c = ic(f, 0, c), l = [], m = 0; m < c.length; m++) {
                                var A = new yP;
                                rP(A, 1, c[m]);
                                var B = EHa(d.o, c[m]);
                                Vg(A, 2, B);
                                l.push(A)
                            }
                            A = {};
                            for (m = 0; m < f.length; m++) {
                                var L = Wg(Wg(f[m], PO, 1), FP, 1),
                                    L = yGa(1E3 * L);
                                L.hH(0);
                                L.jH(0);
                                L.kH(0);
                                L.iH(0);
                                L = Math.floor(L.getTime() / 1E3);
                                A[L] || (A[L] = []);
                                B = new yP;
                                rP(B, 1, f[m]);
                                var Z = EHa(d.o, f[m]);
                                Vg(B, 2, Z);
                                A[L].push(B)
                            }
                            f = [];
                            for (L in A) m =
                                new xP, B = new FP, Vg(B, 1, Number(L)), rP(m, 1, B), EF(m, 2, A[L]), f.push(m);
                            L = new wP;
                            rP(L, 3, a);
                            EF(L, 2, f);
                            EF(L, 1, l);
                            d.R = c.length;
                            d.b = L;
                            d.ya(iB);
                            e.callback()
                        } else e.b(a)
                    } else this.ab.wf("time_suggest_error", t() - k), e.b()
                }, function() {
                    this.ab.nb("time_suggest_failure");
                    e.b()
                }, this)
            }, a);
            return e
        },
        MP = function(a, b, c, d) {
            vP(a, uP(a, b, c || null, null, d || null))
        },
        MHa = function(a) {
            J.call(this);
            this.o = a;
            this.R = this.H = null;
            this.b = new wP
        };
    v(MHa, J);
    var NHa = function(a, b) {
            this.o = a;
            this.b = b
        },
        NP = function(a, b, c) {
            x.call(this);
            this.b = p(a, c);
            this.H = b;
            this.Gb = null
        };
    v(NP, x);
    NP.prototype.o = function(a) {
        this.Gb || (this.Gb = wi(p(function(a) {
            this.R.apply(this, a)
        }, this, arguments), this.H))
    };
    NP.prototype.wa = function() {
        NP.qa.wa.call(this);
        xi(this.Gb)
    };
    NP.prototype.R = function(a) {
        this.Gb = null;
        this.b.apply(null, arguments)
    };
    var OP = function(a) {
        J.call(this);
        this.U = a;
        this.R = new nP;
        this.b = {};
        this.S = new nP;
        this.H = new SO;
        this.T = new SO;
        this.o = null
    };
    v(OP, J);
    h = OP.prototype;
    h.bY = function(a, b) {
        var c = new TO,
            d = b.aj().getEmail();
        Vg(c, 1, d);
        var e = b.aj().getName();
        Vg(c, 2, e);
        e = b.aj().In();
        Vg(c, 3, e);
        e = 1 == Ug(b, 2, 0);
        Vg(c, 4, e);
        d = this.U.o.contains(d);
        Vg(c, 5, d);
        Vg(c, 6, a);
        return c
    };
    h.aS = function(a) {
        var b = new oP,
            c = Ug(a, 1, "");
        Vg(b, 1, c);
        Ug(a, 2, 0) == HHa.HC && (a = a.getName(), Vg(b, 2, a));
        return b
    };
    h.H7 = function(a, b) {
        this.o = kP(b);
        zP(this, b);
        FHa(this, b, a);
        this.R = GHa(this, Xg(Wg(b, jP, 1), CP, 2));
        this.b = JHa(EP(this.R), function(a) {
            return Ug(a, 1, "")
        });
        this.ya(gB)
    };
    h.G7 = function(a) {
        this.o = kP(a);
        zP(this, a);
        this.ya(iB)
    };
    h.V9 = function(a, b, c) {
        this.o = kP(b);
        a = gP(this, Xg(Wg(b, jP, 1), mP, 1), Ug(Wg(b, jP, 1), 3, ""), a ? pP(Wg(this.b[c], SO, 3)) : null, kP(b));
        rP(this.b[c], 3, a);
        this.ya(new IHa(c))
    };
    h.Y9 = function(a) {
        this.o = kP(a);
        zP(this, a);
        if (Wb(Xg(Wg(a, jP, 1), mP, 1), p(function(a) {
                return (a = a.aj().In()) && a in this.b
            }, this))) {
            RO(this.H, []);
            var b = nc(Xg(Wg(a, jP, 1), mP, 1), function(a) {
                    return a.aj().In()
                }),
                c = [];
            Ua(b, function(b, e) {
                var d = new oP;
                Vg(d, 1, e);
                var g = this.b[e].getName();
                Vg(d, 2, g);
                g = gP(this, b, null, null, kP(a));
                rP(d, 3, g);
                c.push(d)
            }, this);
            EF(this.S, 1, c)
        } else FHa(this, a, !1);
        this.ya(nta)
    };
    var OHa = function(a) {
        D.call(this, sta);
        this.response = a || null
    };
    v(OHa, D);
    var PP = function(a, b) {
            Tca(a, null, b, void 0)
        },
        QP = function(a) {
            return a.b.get()
        },
        RP = function(a) {
            return null !== a.b.get()
        },
        PHa = function(a) {
            return Sb(Ya(a.b.ta), function(a) {
                return a.Rc()
            })
        },
        SP = function(a) {
            var b = sN(a).o;
            C(a.b.o(), function(a) {
                this.Gz(a) && (b[a.getKey()] = a)
            }, a);
            return Ya(b)
        },
        TP = function(a, b, c) {
            a.Hc();
            c.call(a, b);
            Rl(a, "Ja", b);
            a.Ec();
            Sl(a)
        },
        UP = function(a) {
            return XM(a) && lb(a.email, "@allusers.d.calendar.google.com") ? "All users in " + a.email.split("@")[0] : a.displayName
        },
        VP = function(a, b) {
            return dFa(a,
                b, !1)
        },
        QHa = function(a, b, c) {
            return Sb(b, function(a) {
                var b = JP(this, a);
                if (lb(a, "calendar.google.com")) return !1;
                for (a = 0; a < c.length; a++)
                    if (c[a] == b) return !1;
                return !0
            }, a)
        },
        WP = function(a, b, c, d, e) {
            J.call(this);
            this.T = a;
            this.Ca = b;
            this.o = d;
            this.ma = e;
            this.U = new KP(d, c);
            this.Hb(this.U);
            this.R = this.U.b;
            this.R.oe(this);
            this.V = new NHa(hh(this.T).o.getEmail(), this.o);
            this.b = new MHa(this.V);
            this.b.oe(this);
            this.Da = new I(this);
            this.Hb(this.Da);
            this.Da.ka(this.o.o, "m", this.dY);
            this.S = new NP(this.Wp, 0, this);
            this.H = !1;
            a = Zj(this.T);
            !a.isEnabled(29) && a.isEnabled(30) && this.Da.ka(this, jB, this.cY)
        };
    v(WP, J);
    h = WP.prototype;
    h.Wp = function() {
        this.H = !0;
        this.ya(qta);
        var a = LHa(this.Ca, this.o, this.R, this.b);
        Ff(a, function() {
            this.H = !1
        }, this);
        Df(a, function() {
            this.ya(rta)
        }, function(a) {
            this.ya(new OHa(a))
        }, this)
    };
    h.dY = function(a) {
        FF(a.o, function(a, c) {
            return "k" == c || "l" == c
        }) && this.S.o()
    };
    h.cY = function() {
        this.S.o()
    };
    h.Vd = function() {
        return this.o
    };
    h.nb = function(a, b) {
        MP(this.ma, a, this, b)
    };
    var RHa = function(a, b, c, d, e) {
            a.ab.nb("room_request_query");
            var f = a.b["search-rooms-by-name"];
            f && (f.cancel(), delete a.b["search-rooms-by-name"]);
            f = sP(a, b, d);
            d = LP(d);
            X(f, 10, d);
            GP(f);
            X(f, 1, e);
            a.b["search-rooms-by-name"] = tP(a, b, p(c.Y9, c), f);
            return a.b["search-rooms-by-name"]
        },
        SHa = function(a, b) {
            x.call(this);
            this.o = a;
            this.R = b;
            this.b = [];
            this.H = Zj(M()).isEnabled(33)
        };
    v(SHa, x);
    var XP = function(a, b, c, d, e) {
        J.call(this);
        this.R = b;
        this.H = c;
        this.o = e;
        this.b = new OP(c);
        this.b.oe(this);
        this.T = d;
        this.S = new NP(this.U, 0, this);
        this.Da = new I(this);
        this.Hb(this.Da)
    };
    v(XP, J);
    XP.prototype.U = function(a) {
        this.ya(jta);
        PP(KHa(this.R, this.H, this.b, this.o, a), p(function(a) {
            a instanceof Ke || this.ya(pta)
        }, this))
    };
    XP.prototype.nb = function(a, b) {
        var c = this.T;
        vP(c, uP(c, a, null, this || null, b || null))
    };
    var THa = function(a) {
        D.call(this, mta);
        this.ag = a
    };
    v(THa, D);
    var UHa = function(a) {
        D.call(this, lta);
        this.ag = a
    };
    v(UHa, D);
    var VHa = function() {
            this.o = !1;
            this.b = !0
        },
        YP = function(a) {
            if (!a.H) {
                var b = new jm;
                b.b = a.o;
                b.o = a.b;
                b.H = a;
                a.H = b
            }
            return a.H
        },
        ZP = function(a) {
            if (1 != a.Bn) throw Error("T");
            var b = n(void 0) ? void 0 : 1;
            return a.Uc() + ":" + a.Zh + ":" + b
        },
        $P = function(a, b, c, d, e) {
            qa(b) && (b = [b]);
            qa(c) && (c = [c]);
            HO.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length) throw Error("yb");
            this.S = -1
        };
    v($P, HO);
    h = $P.prototype;
    h.Jo = function() {
        var a = this.H[0];
        Math.abs(a - this.S) >= YGa && (sf(this.element, a), this.S = a)
    };
    h.Bk = function() {
        this.S = -1;
        $P.qa.Bk.call(this)
    };
    h.vm = function() {
        this.S = -1;
        $P.qa.vm.call(this)
    };
    h.show = function() {
        this.element.style.display = ""
    };
    h.Eb = function() {
        this.element.style.display = "none"
    };
    var WHa = function(a, b, c) {
            if (null != b.duration && !isNaN(b.start.hour) && a.am()) {
                var d = a.Se();
                a = RP(a) ? QP(a) : d;
                b = c ? new $h(JM(d, b.start.tb()), JM(a, b.end.tb())) : new $h(VP(d, b.start.tb()), VP(a, b.end.tb()))
            }
            return b
        },
        XHa = function(a) {
            return {
                Vi: a.b.get(),
                sq: a.H.get(),
                message: a.o.get()
            }
        },
        aQ = function(a) {
            if (!a.Sk) return !1;
            var b = bm.va().get(a.T.b.get());
            return !!b && 60 <= b.Pd && a.Od
        },
        YHa = function(a) {
            var b = hh(a.yc).o.getEmail();
            return b == CN(a) || b == a.Va || b == a.Tb
        },
        ZHa = function(a) {
            return 3 == a.V || 2 == a.V ? a.R.ub() : !1
        },
        bQ = function(a) {
            return !a.T.xg() &&
                0 < a.R.H
        },
        cQ = function(a) {
            return a.rm && !a.R.V
        },
        $Ha = function(a) {
            if (!a.qc() || !a.b.ub() || 3 == a.b.xc() || a.b.getUrl(null, null)) return null;
            switch (a.b.xc()) {
                case 0:
                    return null;
                case 1:
                    return "Please enter a valid video call name.";
                case 2:
                    return "Please enter a valid bridge number.";
                default:
                    return a.b.xc(), null
            }
        },
        aIa = function(a) {
            return Sb(vN(a), function(a) {
                return !a.H && !a.Rc() && !this.Gz(a)
            }, a)
        },
        bIa = function(a) {
            return !!Yb(a.b.o(), function(a) {
                return 108 == a.zc()
            }, a)
        },
        cIa = function(a) {
            a = PHa(a);
            lc(a, jN);
            return Tb(a,
                function(a) {
                    return new qN(a, null)
                })
        },
        dIa = function(a) {
            var b = Sb(Ya(a.R.b), function(a) {
                return a.Rc()
            });
            return uN(a, b, !1)
        },
        dQ = function(a) {
            var b = Sb(Ya(a.R.b), function(a) {
                return !a.Rc()
            });
            return uN(a, b, !1)
        },
        eQ = function(a) {
            return Sb(SP(a), function(a) {
                return !MFa(this.Na, a)
            }, a)
        },
        fQ = function(a) {
            return Sb(Ya(tN(a)), function(a) {
                return !XM(a)
            }, a)
        },
        eIa = function(a) {
            return {
                lastTimeRequest: a.o,
                timeResponseIds: JSON.stringify(a.R),
                lastRoomRequest: a.b,
                roomResponseIds: JSON.stringify(a.H)
            }
        },
        fIa = function(a, b) {
            function c(a,
                b) {
                b in f || (f[b] = !0, g.push(b), C(d[b] || [], function(b) {
                    var d = a.b(b);
                    108 == d.zc() ? c(a, b) : XM(d) && (e[b] = !0)
                }))
            }
            a.Hc();
            var d = {};
            C(a.o(), function(a) {
                C(a.b.get(), function(b) {
                    b in d ? d[b].push(a.email) : d[b] = [a.email]
                })
            });
            var e = {},
                f = {},
                g = [];
            c(a, b);
            Ua(e, function(a, b) {
                var c = this.b(b);
                c.rf.set(!1);
                Rl(this, "Ja", c)
            }, a);
            C(g, function(a) {
                this.remove(a)
            }, a);
            a.Ec()
        },
        gIa = function(a, b, c) {
            Zb(b.b.get(), c) || TP(a, b, function(a) {
                a.b.push(c)
            })
        },
        hIa = function(a, b) {
            var c = a.b(b);
            TP(a, c, function(a) {
                a.R = !0
            })
        },
        gQ = function(a, b, c) {
            var d =
                a.b(b);
            TP(a, d, function(a) {
                a.md = 108;
                a.H = c;
                this.setVisible(b, !1)
            })
        },
        iIa = function(a, b, c) {
            UP(b) != c && TP(a, b, function(a) {
                a.displayName = c
            })
        },
        jIa = function(a, b) {
            b.Mm || (b.Mm = !0, a.Hc(), Rl(a, "Ja", b), a.setVisible(b.email, !1), a.Ec(), Sl(a))
        },
        hQ = function(a, b, c) {
            var d = c ? gb(c) : {};
            a.Hc();
            C(a.nc(), function(a) {
                d[a] || this.setVisible(a, b)
            }, a);
            a.Ec()
        },
        iQ = function(a, b) {
            var c = a.H[a.T[b] || b];
            return c ? $M(a, c) : null
        },
        kIa = function(a) {
            return !XM(a) && a.rf.jd()
        },
        lIa = {
            SECONDLY: 1,
            MINUTELY: 1,
            HOURLY: 1,
            DAILY: 1,
            WEEKLY: 7,
            MONTHLY: 31,
            YEARLY: 365
        },
        mIa = function(a) {
            var b = [];
            hy(a, function(a) {
                b.push(a)
            });
            return b
        },
        jQ = function(a) {
            vF(a);
            return a.ha()
        },
        nIa = function(a) {
            vF(a);
            return a.Nf
        },
        oIa = function(a, b) {
            a.U = b;
            a.R && rE(a)
        },
        pIa = function(a) {
            a = a.o;
            a.qg = "parallel";
            UD(a);
            "parallel" in a.H && a.ya("change")
        },
        qIa = function(a, b, c) {
            var d = c.o;
            c = c.ta;
            return d && c ? QHa(a, b, dc([d], c)) : []
        },
        kQ = function(a, b, c) {
            return new XP(0, a.b, b, c, new VHa)
        },
        lQ = function(a, b) {
            return new SHa(a, b)
        },
        rIa = function(a, b, c, d) {
            return new WP(a.R, a.b, b, c, d)
        },
        sIa = function(a, b) {
            a.ya(ota);
            PP(RHa(a.R,
                a.H, a.b, a.o, b), p(function(a) {
                a instanceof Ke || this.ya(hB)
            }, a))
        },
        mQ = function(a, b, c) {
            a.ya(new THa(b));
            var d = a.R,
                e = a.H,
                f = a.b,
                g = a.o;
            d.ab.nb("room_request_hierarchy_node");
            var k = sP(d, e, g, b),
                g = LP(g, c);
            X(k, 10, g);
            c = tP(d, e, p(f.V9, f, !!c), k, b);
            PP(c, p(a.ya, a, new UHa(b)))
        },
        nQ = function(a, b) {
            a.ya(jta);
            var c;
            c = a.R;
            var d = a.H,
                e = a.b,
                f = a.o;
            c.ab.nb("room_request_suggestions_and_listing");
            var g = sP(c, d, f),
                f = LP(f, b);
            X(g, 10, f);
            GP(g);
            c = tP(c, d, p(e.H7, e, !!b), g);
            PP(c, p(a.ya, a, hB))
        },
        tIa = function(a) {
            var b = [];
            hy(a, function(a) {
                b.push(a.getId())
            });
            return b
        },
        uIa = function(a, b) {
            gy(a, b.parentNode, b)
        },
        vIa = function(a, b) {
            return XE(a, b)
        },
        wIa = function(a, b) {
            return Ru(a, b)
        },
        oQ = function() {};
    oQ.prototype.b = function(a) {
        tk("ef_delete");
        var b = M();
        Lr(Kr(b), "eventform", function() {
            wq.mw(a)
        })
    };
    var pQ = function(a) {
            ws(a.ab, a.b, t() - a.o)
        },
        qQ = function(a, b) {
            var c = sr(a);
            c && b.push("droi", Fxa(c))
        },
        rQ = function(a, b) {
            var c = Sn(a.o);
            if (c)
                for (var d = 0; d < c.length; ++d) b.push("lef", c[d])
        },
        xIa = function(a, b, c, d) {
            "string" == typeof c && (c = ci(c));
            "string" == typeof d && (d = ci(d));
            if (b = Wu(a, b)) {
                var e = b.U,
                    f = b.ma;
                b.Na(c, d);
                if (e !== b.U || f !== b.ma) ir(a, b, e, f), jr(a, b), a.ya(kr)
            }
        },
        yIa = function(a) {
            if (!Pq(a)) {
                var b = Vb(a.o, function(a, b) {
                        return xe(a, document.activeElement) ? (Rq(this, b, !0), !0) : !1
                    }, a),
                    c = a.Re();
                !b && c && (a.b = -1, a.H && Ic(c,
                    a.H, !1))
            }
        },
        zIa = function(a) {
            return !Gn(a) && !a.Jf()
        },
        sQ = function(a) {
            a = a.lg;
            return 0 == a || 2 == a
        },
        AIa = function(a, b) {
            return YP(a.b).get(b)
        },
        tQ = function(a, b) {
            n(a.b[b]) || vha(a, [b]);
            return a.b[b]
        },
        uQ = function(a, b) {
            $E(a.ta);
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.getKey();
                a.ta[e] = d;
                d.oe && d.oe(a.wc)
            }
            a.Ki = b.length
        },
        BIa = function(a, b) {
            a.Hc();
            for (var c = 0; c < b.length; ++c) a.remove(b[c]);
            a.Ec()
        },
        CIa = function(a, b) {
            var c = a.ef(b.Ya(), El(a, b)),
                d = a.uc(b);
            return xl(Wg(a.b.b, nl, 5), [c, d])
        },
        DIa = function(a, b) {
            for (var c = [], d =
                    Hxa(a, b), e = 0; e < d.length; e++) c.push(ZP(d[e]));
            return c
        },
        vQ = function(a, b) {
            return a.start.Wa() <= b.start.Wa() && a.end.Wa() >= b.end.Wa()
        },
        wQ = function(a, b) {
            return b.end.Wa() > a.start.Wa() && b.start.Wa() < a.end.Wa()
        },
        EIa = function(a) {
            a = a.S();
            return tF(a, !0)
        },
        FIa = function(a, b) {
            if (Zj(M()).isEnabled(63)) {
                var c = b.WG();
                a.push("scfdata", EIa(c))
            } else a.push("sprop", "goo.rtc:" + b.xc()), a.push("sprop", "goo.rtcParam:" + b.ee()), a.push("sprop", "goo.rtcDomain:" + b.Zj())
        },
        GIa = function(a, b, c) {
            null != c && a.push(b, String(c))
        },
        xQ = function(a) {
            return a.sf() ?
                a.email + "_O" : a.email
        },
        HIa = function(a, b) {
            if (a && a.ub()) {
                for (var c = [], d = {}, e = Ya(a.ta), f = 0; f < e.length; ++f) {
                    var g = e[f];
                    d[g.Uc().jd() + ":" + g.Pe.jd()] = !0
                }
                for (var e = {}, k = a.sd(), f = 0; f < k.length; ++f) g = k[f], e[g.Uc().get() + ":" + g.Pe.get()] = !0;
                var f = !1,
                    l;
                for (l in e) c.push("erem"), l in d ? c.push(l + ":0") : (c.push(l + ":1"), f = !0);
                for (l in d) l in e || (c.push("erem", l + ":-1"), f = !0);
                f && fc(b, c)
            }
        },
        IIa = function(a) {
            var b = new Mm;
            Vg(b, 1, a);
            return tF(b.S(), !0)
        },
        JIa = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        KIa = /[^\d]+$/,
        LIa = function(a, b) {
            var c = b.Ba;
            if (c && (c.ub() || b.Fb())) {
                var d = function(a) {
                    return a ? a.getName() : ""
                };
                a.push("stz", d(c.Se()));
                a.push("etz", d(QP(c)))
            }
        },
        MIa = function(a, b) {
            var c = b.R,
                d = fQ(c),
                e = [],
                f = [];
            d.length && !cQ(b) && C(d, function(a) {
                e.push(xQ(a))
            });
            d = Ya(c.R.H);
            d.length && C(d, function(b) {
                XM(b) == b.rf.jd() ? b.ub(function(a) {
                    return a.getKey() != b.b.getKey()
                }) && f.push(xQ(b)) : XM(b) ? a.push("del", b.email) : e.push(xQ(b))
            });
            0 < e.length && a.push("add", e.join(","));
            0 < f.length && a.push("amod", f.join(","));
            C(c.R.bH(),
                function(b) {
                    a.push("del", b)
                })
        },
        yQ = function() {
            J.call(this)
        };
    v(yQ, J);
    yQ.prototype.start = function() {};
    yQ.prototype.Sf = function() {
        this.ya("Z")
    };
    yQ.prototype.Oj = function() {
        this.ya("$")
    };
    yQ.prototype.Hs = function() {
        this.ya("aa")
    };
    var NIa = function(a) {
            this.enable = a.hb("en");
            this.Cd = a.hb("de");
            a.hb("bu");
            this.domain = a.hb("do");
            a.hb("pv");
            this.gr = a.hb("pe");
            this.Cp = a.hb("ew");
            this.jl = a.hb("ed");
            this.Qq = a.hb("jl");
            this.Sq = a.hb("jw");
            this.Rq = a.hb("jp");
            this.disable = a.hb("di")
        },
        OIa = function(a, b, c) {
            a = ZG(kh(a), b, c);
            var d;
            c.Fb() ? d = c.U.ub() ? "Video call added" : "This event has a video call" : a ? d = "Too many attendees for a video call" : 3 == c.U.xc() && c.U.ub() && (d = "Video call added");
            return d ? N('<span class="rtc-hangout-icon-disabled goog-inline-block"></span>' +
                O(d)) : null
        },
        PIa = function(a) {
            return N('<a class="lk" href="' + P(nn(a.link)) + '" rel="noreferrer" target="_blank">' + lL(a) + "</a>")
        },
        QIa = function(a, b, c) {
            c = c || {};
            b = a.gB;
            var d = a.maxLength;
            a = "" + ('<div class="rtcs"><span class="lk-button" role="button" tabindex="0" id="' + P(a.Ic.enable) + '">Add video call</span><span id="' + P(a.Ic.Cd) + '"><input class="textinput" id="' + P(a.Ic.gr) + '" maxlength="' + P(d) + '" value="' + P(b) + '"><span id="' + P(a.Ic.Sq) + '"><a class="rtc-link lk" rel="noreferrer" target="_blank" id="' + P(a.Ic.Qq) +
                '">' + lL(a) + '</a><span class="rtc-us"> | </span></span><span class="rtc-ed"><span id="' + P(a.Ic.Cp) + '"><span id="' + P(a.Ic.jl) + '" class="lk" role="button" tabindex="0">Change name</span> | </span><span style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display:none" id="' + P(a.Ic.Rq) + '"></span><span class="lk" role="button" tabindex="0" id="' + P(a.Ic.disable) + '">Remove</span></span></span></div>');
            return N(a)
        },
        RIa = function(a) {
            for (var b = "", c = "", d = 0; d < a.length;) {
                var e;
                e = a;
                var f = d,
                    g = e.charAt(f),
                    k = '"<(['.indexOf(g); - 1 == k ?
                    e = g : (g = e.indexOf('">)]'.charAt(k), f + 1), e = 0 <= g ? e.substring(f, g + 1) : e.substr(f));
                "<" == e.charAt(0) ? (c = e.indexOf(">"), c = e.substring(1, -1 != c ? c : e.length)) : "" == c && (b += e);
                d += e.length
            }
            "" == c && -1 != b.indexOf("@") && (c = b, b = "");
            b = qx(b);
            b = kxa(b, "'\"");
            c = qx(c);
            return [b, c]
        },
        zQ = function(a) {
            var b = a.indexOf("/"),
                c = a.length;
            if (0 <= b) {
                var d = Vx(a.substring(0, b));
                a = Vx(a.substring(b + 1, c));
                return new ax(d, a)
            }
            return Vx(a)
        },
        SIa = function(a) {
            return Xm("https://support.google.com/calendar?p=" + LG(a.YL) + "&" + LG("hl") + "=" + LG("en"))
        },
        TIa = function(a) {
            return Xm("https://support.google.com/a/answer/" + kn(a.ms) + "?" + LG("hl") + "=" + LG("en"))
        },
        AQ = function() {
            this.R = this.Yf = this.ma = this.V = this.H = this.b = this.S = this.U = this.o = this.T = this.Ca = this.Mv = null
        },
        BQ = null,
        UIa = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        },
        VIa = {
            em: 1,
            ex: 1
        },
        WIa = {
            cm: 1,
            "in": 1,
            mm: 1,
            pc: 1,
            pt: 1
        },
        CQ = function(a, b, c, d, e) {
            if (3 != b.length || 3 != c.length) throw Error("zb");
            HO.apply(this, arguments)
        };
    v(CQ, HO);
    CQ.prototype.zm = function() {
        for (var a = [], b = 0; b < this.H.length; b++) a[b] = Math.round(this.H[b]);
        this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
    };
    CQ.prototype.Jo = function() {
        this.zm()
    };
    var XIa = function(a, b, c) {
        $P.call(this, a, 0, 1, b, c)
    };
    v(XIa, $P);
    var YIa = function(a, b, c) {
        $P.call(this, a, 1, 0, b, c)
    };
    v(YIa, $P);
    var ZIa = function(a) {
            if ("undefined" != typeof DOMParser) return (new DOMParser).parseFromString(a, "application/xml");
            if (WFa) {
                var b = new ActiveXObject("MSXML2.DOMDocument");
                b.resolveExternals = !1;
                b.validateOnParse = !1;
                try {
                    b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
                } catch (c) {}
                b.loadXML(a);
                return b
            }
            throw Error("tb");
        },
        $Ia = function(a, b) {
            return pb(a.getTitle(), b.getTitle())
        },
        DQ = function(a) {
            x.call(this);
            this.b = 0;
            this.Da = new I(this);
            this.Hb(this.Da);
            this.Da.ka(a.o,
                "m", this.o)
        };
    v(DQ, x);
    var aJa = function(a, b) {
        a.b++;
        try {
            b()
        } finally {
            a.b--
        }
    };
    DQ.prototype.o = function(a) {
        for (var b = [], c = Tl(a, "k"), d = 0; d < c.length; d++) {
            var e = c[d],
                f;
            switch (e.zc()) {
                case 100:
                    f = jl(new il("{NAME_OR_EMAIL} added to event"), {
                        NAME_OR_EMAIL: e.displayName
                    });
                    break;
                case 108:
                    f = "Group added to event";
                    break;
                case 103:
                    f = "Resource added to event"
            }
            b.push(f)
        }
        a = Tl(a, "l");
        for (d = 0; d < a.length; d++) {
            e = a[d];
            switch (e.zc()) {
                case 100:
                    f = jl(new il("{NAME_OR_EMAIL} removed from event"), {
                        NAME_OR_EMAIL: e.displayName
                    });
                    break;
                case 108:
                    f = "Group removed from event";
                    break;
                case 103:
                    f = "Resource removed from event"
            }
            b.push(f)
        }
        0 ==
            this.b && kB(b)
    };
    var EQ = function() {
        J.call(this)
    };
    v(EQ, yQ);
    var bJa = function() {
        J.call(this)
    };
    v(bJa, yQ);
    var cJa = ["TH", "TU"],
        dJa = ["FR", "MO", "WE"],
        eJa = ["FR", "MO", "TH", "TU", "WE"],
        FQ = function(a, b, c) {
            var d = c.U,
                e = c.Cg;
            S.call(this);
            this.Ra = a;
            this.H = d;
            this.R = e;
            this.La = b;
            this.Fa = c;
            a = new I(this);
            this.Hb(a);
            a.ka(c, "change", this.ma)
        };
    v(FQ, S);
    h = FQ.prototype;
    h.Xa = function() {
        var a = 2 == this.H.xc() ? this.H.ee() || "" : "",
            b = new NIa(this);
        this.Ea = $u(QIa, {
            Ic: b,
            gB: a,
            yk: mL(this.H),
            tk: this.R.b.T,
            maxLength: 15
        })
    };
    h.Bc = function() {
        return !1
    };
    h.Ma = function() {
        FQ.qa.Ma.call(this);
        var a = new NIa(this),
            b = this.b;
        this.ua = b.ha(a.enable);
        this.U = b.ha(a.Cd);
        this.o = b.ha(a.gr);
        this.V = b.ha(a.Cp);
        this.Sa = b.ha(a.jl);
        this.Ba = b.ha(a.Qq);
        this.ta = b.ha(a.Sq);
        this.S = b.ha(a.Rq);
        this.Na = b.ha(a.disable);
        a = T(this);
        a.ka(new Mz(this.ua), "action", this.xY);
        a.ka(new Mz(this.Na), "action", this.vY);
        a.ka(new Mz(this.Sa), "action", this.wY);
        a.ka(this.o, "keypress", this.AY);
        a.ka(this.o, "focus", this.zY);
        a.ka(this.o, "blur", this.yY);
        this.ma()
    };
    h.xY = function() {
        var a;
        if (this.R.b.T) a = 3;
        else if (this.R.b.H) a = 1;
        else if (this.R.b.R) a = 2;
        else throw Error("rb");
        zN(this.R, a);
        this.ma(!0)
    };
    h.vY = function() {
        zN(this.R, 0);
        this.ma()
    };
    h.zY = function() {
        Gc(this.o, "rtc-wa")
    };
    h.yY = function() {
        Wq(this.ha(), "rtc-editing", !1);
        var a = this.H.ee(),
            b = this.o.value;
        a != b && (a = this.R, 1 == a.b.xc() && (a.H = !0), a.b.o.set(b));
        this.ma()
    };
    h.AY = function(a) {
        (13 == a.keyCode || ud && 3 == a.keyCode) && this.o.blur()
    };
    h.wY = function() {
        H(this.ta, !1);
        H(this.o, !0);
        Wq(this.ha(), "rtc-editing", !0);
        Wq(this.o, "rtc-wa", !1);
        fJa(this)
    };
    var fJa = function(a) {
        setTimeout(p(function() {
            tf(this.o) && tf(this.U) && this.o.focus()
        }, a), 0)
    };
    FQ.prototype.ma = function(a) {
        if (this.ua) {
            var b = this.H.xc(),
                c = this.H.ee(),
                d = 0 != b;
            H(this.ua, !d);
            H(this.U, d);
            d && (this.o.value = c, b = 3 == b, Wq(this.U, "rtc-um", b), (d = this.H.getUrl(this.La, this.Fa)) && this.Ba && (Km(this.Ba, lL, {
                    tk: b,
                    yk: mL(this.H)
                }), XG(this.Ba, d)), b ? ((b = OIa(this.Ra, this.La, this.Fa)) ? (Im(this.S, b), this.b.Tg(this.S, " | "), H(this.S, !0), H(this.ta, !1)) : (H(this.S, !1), H(this.ta, !0)), H(this.V, !1), H(this.o, !1)) : (H(this.V, !!c && this.R.qc()), H(this.o, !c), H(this.ta, !!d), H(this.S, !1)), Gc(this.o, "rtc-wa"), c ||
                (a ? fJa(this) : Fc(this.o, "rtc-wa")))
        }
    };
    var gJa = function(a, b, c) {
            var d = a.label;
            b = a.Qz;
            var e = a.$T,
                f = a.UB;
            a = a.i8;
            for (var d = '<div jscontroller="XUv4Sc" jsaction="WLC1de:FKh1ne; keydown:uYT2Vb;" class="ecp" role="radiogroup">' + (d ? '<div class="ecp-label"><label id="' + P(b) + '">' + O(d) + "</label></div>" : "") + BK({
                    color: e,
                    Bs: b,
                    selected: a == e.jn,
                    $a: R("ecp-rb-default"),
                    AJ: !0
                }, c) + '<div class="ecp-dt-hr goog-inline-block"></div>', e = f.length, g = 0; g < e; g++) var k = f[g],
                d = d + BK({
                    color: k,
                    Bs: b,
                    selected: a == k.jn,
                    $a: R("ecp-rb-color"),
                    AJ: !0
                }, c);
            return N(d + "</div>")
        },
        hJa =
        function(a, b, c, d, e, f, g) {
            var k = c.get(),
                l = new FE(a, b, k ? k.start : null, k ? k.end : null, d, e, f, g);
            G(l, "change", function() {
                c.set(l.lb())
            });
            G(c, "change", function() {
                l.Kb(c.get())
            });
            return l
        },
        iJa = {
            Mk: Ha,
            Ko: Ha,
            Zo: Ga,
            Kr: Ga
        },
        GQ = function(a) {
            return Tu(K(M(), hj), SIa, {
                YL: a
            }).toString()
        },
        jJa = function(a, b) {
            K(a, sj);
            var c = b.Se(),
                d = QP(b);
            this.b = c ? c.getName() : jh(a).yd();
            this.o = d ? d.getName() : this.b
        },
        kJa = function(a, b) {
            var c = 1E3 * Tg(Wg(Wg(b, PO, 1), FP, 1), 1),
                d = 1E3 * Tg(Wg(Wg(b, PO, 1), FP, 2), 1),
                c = iO(c, a.b),
                d = iO(d, a.o);
            return new $h(c,
                d)
        },
        HQ = function(a, b) {
            this.b = a;
            this.H = b;
            this.R = a.Vd().b;
            this.o = {};
            this.Da = new I(this);
            this.Hb(this.Da);
            this.Da.ka(this.b, iB, this.S)
        };
    v(HQ, x);
    HQ.prototype.S = function() {
        var a = Xg(Wg($g(this.b.b.b), BP, 3), AP, 1);
        this.o = {};
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = kJa(this.H, c);
            this.o[d.toString()] = {
                Mv: Ug(c, 4, ""),
                k7: b
            }
        }
    };
    HQ.prototype.T = function(a) {
        var b = lJa(this);
        b.R = a.o;
        a = mJa(this) ? UO.Rr : UO.Qr;
        this.b.nb(a, b)
    };
    var mJa = function(a) {
            var b = HP(a.R);
            return a.o[b.toString()]
        },
        lJa = function(a) {
            var b = new AQ;
            if (a = mJa(a)) b.Mv = a.Mv, b.Ca = a.k7;
            return b
        },
        IQ = function(a) {
            D.call(this, ita);
            this.o = a
        };
    v(IQ, D);
    var JQ = function(a, b, c) {
        D.call(this, "da");
        this.o = a;
        this.H = b;
        this.ta = c
    };
    v(JQ, D);
    var nJa = function(a) {
            this.o = a;
            this.b = null
        },
        oJa = function(a) {
            a.b && (KQ(a, a.b), a.b = null)
        },
        KQ = function(a, b) {
            var c = new AQ;
            c.T = b.o;
            c.o = b.H;
            c.U = b.ta;
            a.o.nb(UO.Iw, c)
        },
        LQ = function() {
            return N('<div class="spinner-container active" aria-role="progressbar"><div class="spinner-layer blue"><div class="circle-clipper left"><div class="circle fit"></div></div><div class="gap-patch"><div class="circle fit"></div></div><div class="circle-clipper right"><div class="circle fit"></div></div></div><div class="spinner-layer red"><div class="circle-clipper left"><div class="circle fit"></div></div><div class="gap-patch"><div class="circle fit"></div></div><div class="circle-clipper right"><div class="circle fit"></div></div></div><div class="spinner-layer yellow"><div class="circle-clipper left"><div class="circle fit"></div></div><div class="gap-patch"><div class="circle fit"></div></div><div class="circle-clipper right"><div class="circle fit"></div></div></div><div class="spinner-layer green"><div class="circle-clipper left"><div class="circle fit"></div></div><div class="gap-patch"><div class="circle fit"></div></div><div class="circle-clipper right"><div class="circle fit"></div></div></div></div>')
        },
        pJa =
        function(a) {
            window.setTimeout(function() {
                Hg(M(), 808).addCallback(function(b) {
                    bGa(b.o, a)
                })
            }, 0)
        },
        qJa = function() {
            var a = null,
                b = bm.va();
            gw(function(c) {
                var d = b.get(c.getId());
                if (d && 60 <= d.Pd) {
                    if (a) return a = null, !1;
                    a = c.getId()
                }
            });
            return a
        },
        rJa = function(a, b) {
            for (var c = [], d = {}, e = b.length; e--;) c[e] = [], d[b[e]] = e;
            for (var e = 0, f = a.length; e < f; e++) {
                var g = a[e],
                    k = d[g.rb()];
                void 0 != k && c[k].push(g)
            }
            return c
        },
        sJa = function(a, b, c) {
            return Vpa(a, function(a) {
                return Ec(a, b)
            }, c)
        },
        tJa = {
            0: !0,
            1: !0,
            2: !0,
            3: !0,
            6: !0
        },
        uJa = function(a,
            b, c, d) {
            d = d || ce();
            a = a(b || Jm, void 0, c);
            b = Hm(a);
            a = a instanceof qm ? rm(a) : id(b, null);
            return AG(d.o, a)
        },
        vJa = function(a) {
            switch (a) {
                case "none":
                    return "none";
                case "#1111cc":
                case "#a4bdfc":
                    return "blue";
                case "#5484ed":
                    return "bold blue";
                case "#228822":
                case "#7ae7bf":
                    return "green";
                case "#51b749":
                    return "bold green";
                case "#551a8b":
                case "#dbadff":
                    return "purple";
                case "#ff0000":
                case "#ff887c":
                    return "red";
                case "#dc2127":
                    return "bold red";
                case "#fbb818":
                case "#fbd75b":
                    return "yellow";
                case "#ff6600":
                case "#ffb878":
                    return "orange";
                case "#cc0066":
                    return "pink";
                case "#46d6db":
                    return "turquoise";
                case "#bfbfbf":
                case "#e1e1e1":
                    return "gray";
                default:
                    return null
            }
        },
        wJa = function() {
            BQ || (BQ = fm ? "#5484ed #a4bdfc #46d6db #7ae7bf #51b749 #fbd75b #ffb878 #ff887c #dc2127 #dbadff #e1e1e1".split(" ") : "#1111cc #228822 #551a8b #ff0000 #fbb818 #ff6600 #cc0066 #bfbfbf".split(" "));
            return BQ
        },
        MQ = function(a) {
            var b = {};
            a = String(a);
            var c = Ij(a);
            if (Tfa.test(c)) return b.Vl = Ej(c), b.type = "hex", b;
            a: {
                var d = a.match(JIa);
                if (d) {
                    var c = Number(d[1]),
                        e = Number(d[2]),
                        d =
                        Number(d[3]);
                    if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                        c = [c, e, d];
                        break a
                    }
                }
                c = []
            }
            if (c.length) return b.Vl = Hj(c), b.type = "rgb", b;
            if (UIa && (c = UIa[a.toLowerCase()])) return b.Vl = c, b.type = "named", b;
            throw Error("O`" + a);
        },
        xJa = function(a) {
            var b = kf(a, "fontSize"),
                c;
            c = (c = b.match(KIa)) && c[0] || null;
            if (b && "px" == c) return parseInt(b, 10);
            if (E) {
                if (String(c) in WIa) return vf(a, b, "left", "pixelLeft");
                if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in VIa) return a = a.parentNode, c = kf(a, "fontSize"), vf(a, b == c ? "1em" : b, "left",
                    "pixelLeft")
            }
            c = me("SPAN", {
                style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
            });
            a.appendChild(c);
            b = c.offsetHeight;
            se(c);
            return b
        },
        yJa = function() {
            var a = ge("rp-recurring-event-options", void 0).elements.recurrence;
            if (a) {
                if (a.type) return St(a);
                for (var b = 0; b < a.length; b++) {
                    var c = St(a[b]);
                    if (c) return c
                }
            }
            return null
        },
        zJa = function(a, b) {
            if ("FORM" == a.tagName)
                for (var c = a.elements, d = 0; a = c[d]; d++) zJa(a, b);
            else 1 == b && a.blur(), a.disabled = b
        },
        NQ = "AF;Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e);AX;\u00c5land Islands (\u00c5land);AL;Albania (Shqip\u00ebri);DZ;Algeria;AS;American Samoa;AD;Andorra;AO;Angola;AI;Anguilla;AQ;Antarctica;AG;Antigua & Barbuda;AR;Argentina;AM;Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576);AW;Aruba;AC;Ascension Island;AU;Australia;AT;Austria (\u00d6sterreich);AZ;Azerbaijan (Az\u0259rbaycan);BS;Bahamas;BH;Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e);BD;Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6);BB;Barbados;BY;Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c);BE;Belgium;BZ;Belize;BJ;Benin (B\u00e9nin);BM;Bermuda;BT;Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42);BO;Bolivia;BA;Bosnia & Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430);BW;Botswana;BV;Bouvet Island;BR;Brazil (Brasil);IO;British Indian Ocean Territory;VG;British Virgin Islands;BN;Brunei;BG;Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f);BF;Burkina Faso;BI;Burundi (Uburundi);KH;Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6);CM;Cameroon (Cameroun);CA;Canada;IC;Canary Islands (Canarias);CV;Cape Verde (Kabu Verdi);BQ;Caribbean Netherlands;KY;Cayman Islands;CF;Central African Republic (R\u00e9publique centrafricaine);EA;Ceuta & Melilla (Ceuta y Melilla);TD;Chad (Tchad);CL;Chile;CN;China (\u4e2d\u56fd);CX;Christmas Island;CP;Clipperton Island;CC;Cocos (Keeling) Islands (Kepulauan Cocos (Keeling));CO;Colombia;KM;Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e);CD;Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo);CG;Congo (Republic) (Congo-Brazzaville);CK;Cook Islands;CR;Costa Rica;CI;C\u00f4te d\u2019Ivoire;HR;Croatia (Hrvatska);CU;Cuba;CW;Cura\u00e7ao;CY;Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2);CZ;Czech Republic (\u010cesk\u00e1 republika);DK;Denmark (Danmark);DG;Diego Garcia;DJ;Djibouti;DM;Dominica;DO;Dominican Republic (Rep\u00fablica Dominicana);EC;Ecuador;EG;Egypt (\u202b\u0645\u0635\u0631\u202c\u200e);SV;El Salvador;GQ;Equatorial Guinea (Guinea Ecuatorial);ER;Eritrea;EE;Estonia (Eesti);ET;Ethiopia;FK;Falkland Islands (Islas Malvinas);FO;Faroe Islands (F\u00f8royar);FJ;Fiji;FI;Finland (Suomi);FR;France;GF;French Guiana (Guyane fran\u00e7aise);PF;French Polynesia (Polyn\u00e9sie fran\u00e7aise);TF;French Southern Territories (Terres australes fran\u00e7aises);GA;Gabon;GM;Gambia;GE;Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd);DE;Germany (Deutschland);GH;Ghana (Gaana);GI;Gibraltar;GR;Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1);GL;Greenland (Kalaallit Nunaat);GD;Grenada;GP;Guadeloupe;GU;Guam;GT;Guatemala;GG;Guernsey;GN;Guinea (Guin\u00e9e);GW;Guinea-Bissau (Guin\u00e9-Bissau);GY;Guyana;HT;Haiti;HM;Heard & McDonald Islands;HN;Honduras;HK;Hong Kong (\u9999\u6e2f);HU;Hungary (Magyarorsz\u00e1g);IS;Iceland (\u00cdsland);IN;India (\u092d\u093e\u0930\u0924);ID;Indonesia;IR;Iran (\u202b\u0627\u06cc\u0631\u0627\u0646\u202c\u200e);IQ;Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e);IE;Ireland;IM;Isle of Man;IL;Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e);IT;Italy (Italia);JM;Jamaica;JP;Japan (\u65e5\u672c);JE;Jersey;JO;Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e);KZ;Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d);KE;Kenya;KI;Kiribati;XK;Kosovo (Kosov\u00eb);KW;Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e);KG;Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d);LA;Laos (\u0ea5\u0eb2\u0ea7);LV;Latvia (Latvija);LB;Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e);LS;Lesotho;LR;Liberia;LY;Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e);LI;Liechtenstein;LT;Lithuania (Lietuva);LU;Luxembourg;MO;Macau (\u6fb3\u9580);MK;Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430);MG;Madagascar (Madagasikara);MW;Malawi;MY;Malaysia;MV;Maldives;ML;Mali;MT;Malta;MH;Marshall Islands;MQ;Martinique;MR;Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e);MU;Mauritius (Moris);YT;Mayotte;MX;Mexico (M\u00e9xico);FM;Micronesia;MD;Moldova (Republica Moldova);MC;Monaco;MN;Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b);ME;Montenegro (Crna Gora);MS;Montserrat;MA;Morocco;MZ;Mozambique (Mo\u00e7ambique);MM;Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c);NA;Namibia (Namibi\u00eb);NR;Nauru;NP;Nepal (\u0928\u0947\u092a\u093e\u0932);NL;Netherlands (Nederland);NC;New Caledonia (Nouvelle-Cal\u00e9donie);NZ;New Zealand;NI;Nicaragua;NE;Niger (Nijar);NG;Nigeria;NU;Niue;NF;Norfolk Island;MP;Northern Mariana Islands;KP;North Korea (\uc870\uc120\ubbfc\uc8fc\uc8fc\uc758\uc778\ubbfc\uacf5\ud654\uad6d);NO;Norway (Norge);OM;Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e);PK;Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e);PW;Palau;PS;Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e);PA;Panama (Panam\u00e1);PG;Papua New Guinea;PY;Paraguay;PE;Peru (Per\u00fa);PH;Philippines;PN;Pitcairn Islands;PL;Poland (Polska);PT;Portugal;PR;Puerto Rico;QA;Qatar (\u202b\u0642\u0637\u0631\u202c\u200e);RE;R\u00e9union (La R\u00e9union);RO;Romania (Rom\u00e2nia);RU;Russia (\u0420\u043e\u0441\u0441\u0438\u044f);RW;Rwanda;WS;Samoa;SM;San Marino;ST;S\u00e3o Tom\u00e9 & Pr\u00edncipe (S\u00e3o Tom\u00e9 e Pr\u00edncipe);SA;Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e);SN;Senegal;RS;Serbia (\u0421\u0440\u0431\u0438\u0458\u0430);SC;Seychelles;SL;Sierra Leone;SG;Singapore;SX;Sint Maarten;SK;Slovakia (Slovensko);SI;Slovenia (Slovenija);SB;Solomon Islands;SO;Somalia (Soomaaliya);ZA;South Africa;GS;South Georgia & South Sandwich Islands;KR;South Korea (\ub300\ud55c\ubbfc\uad6d);SS;South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e);ES;Spain (Espa\u00f1a);LK;Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0);BL;St. Barth\u00e9lemy (Saint-Barth\u00e9lemy);SH;St. Helena;KN;St. Kitts & Nevis;LC;St. Lucia;MF;St. Martin (Saint-Martin);PM;St. Pierre & Miquelon (Saint-Pierre-et-Miquelon);VC;St. Vincent & Grenadines;SD;Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e);SR;Suriname;SJ;Svalbard & Jan Mayen (Svalbard og Jan Mayen);SZ;Swaziland;SE;Sweden (Sverige);CH;Switzerland (Schweiz);SY;Syria (\u202b\u0633\u0648\u0631\u064a\u0627\u202c\u200e);TW;Taiwan (\u53f0\u7063);TJ;Tajikistan;TZ;Tanzania;TH;Thailand (\u0e44\u0e17\u0e22);TL;Timor-Leste;TG;Togo;TK;Tokelau;TO;Tonga;TT;Trinidad & Tobago;TA;Tristan da Cunha;TN;Tunisia;TR;Turkey (T\u00fcrkiye);TM;Turkmenistan;TC;Turks & Caicos Islands;TV;Tuvalu;UM;U.S. Outlying Islands;VI;U.S. Virgin Islands;UG;Uganda;UA;Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430);AE;United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e);GB;United Kingdom;US;United States;UY;Uruguay;UZ;Uzbekistan (O\u02bbzbekiston);VU;Vanuatu;VA;Vatican City (Citt\u00e0 del Vaticano);VE;Venezuela;VN;Vietnam (Vi\u1ec7t Nam);WF;Wallis & Futuna;EH;Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e);YE;Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e);ZM;Zambia;ZW;Zimbabwe".split(";"),
        AJa = function(a) {
            return "Repeat every " + a + " years"
        },
        BJa = function(a) {
            return "Repeat every " + a + " months"
        },
        CJa = function(a) {
            return "Repeat every " + a + " weeks"
        },
        DJa = function(a) {
            return "Repeat every " + a + " days"
        };
    ig("eventform");
    var GJa = function(a) {
            var b = {},
                c = b.document || document,
                d = Wc(a),
                e = ne(document, "SCRIPT");
            a = {
                qL: e,
                Im: void 0
            };
            var f = new zf(EJa, a),
                g = null,
                k = null != b.timeout ? b.timeout : 5E3;
            0 < k && (g = window.setTimeout(function() {
                OQ(e, !0);
                f.b(new PQ(1, "Timeout reached for loading script " + d))
            }, k), a.Im = g);
            e.onload = e.onreadystatechange = function() {
                e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (OQ(e, b.epa || !1, g), f.callback(null))
            };
            e.onerror = function() {
                OQ(e, !0, g);
                f.b(new PQ(0, "Error while loading script " + d))
            };
            a = b.attributes || {};
            eb(a, {
                type: "text/javascript",
                charset: "UTF-8",
                src: d
            });
            Gca(e, a);
            FJa(c).appendChild(e)
        },
        FJa = function(a) {
            var b = TE("HEAD", a);
            return !b || $b(b) ? a.documentElement : b[0]
        },
        EJa = function() {
            if (this && this.qL) {
                var a = this.qL;
                a && "SCRIPT" == a.tagName && OQ(a, !0, this.Im)
            }
        },
        OQ = function(a, b, c) {
            null != c && ca.clearTimeout(c);
            a.onload = ia;
            a.onerror = ia;
            a.onreadystatechange = ia;
            b && window.setTimeout(function() {
                se(a)
            }, 0)
        },
        PQ = function(a, b) {
            var c = "Jsloader error (code #" + a + ")";
            b && (c += ": " + b);
            Da.call(this, c);
            this.code = a
        };
    v(PQ, Da);
    var HJa = function() {
        this.b = null
    };
    HJa.prototype.addCallback = function(a) {
        if (!this.b) {
            this.b = new zf;
            var b = p(this.b.callback, this.b);
            ea("MapsApiLoaded", b, void 0);
            b = Xc("https://maps.googleapis.com/maps/api/js?&v=3&client=google-calendar&libraries=places&language=en&callback=MapsApiLoaded");
            GJa(b)
        }
        this.b.addCallback(a)
    };
    mh.addCallback(function(a) {
        vv(a, 813, function() {
            return new HJa
        })
    });
    var IJa = function(a, b, c) {
            b = Gg(b, 16);
            c.eremte = Tb(Wk(b, a, !1), function(a) {
                return ZP(a)
            });
            c.eremaded = Tb(Wk(b, a, !0), function(a) {
                return ZP(a)
            });
            c.erem = !isNaN(c.dates.start.Ga) && isNaN(c.dates.start.hour) ? c.eremaded : c.eremte
        },
        MJa = function(a, b, c, d, e) {
            var f = "undefined" != typeof ActiveXObject ? new ActiveXObject("Microsoft.XMLDOM") : document.implementation.createDocument("", "", null),
                g = f.createElement("eventpage");
            f.appendChild(g);
            var k = d.add || {};
            g.setAttribute("action", a);
            g.setAttribute("url", "event");
            g.setAttribute("access-level",
                "" + b);
            g.setAttribute("specialized", "" + (0 != (e & 8192)));
            g.setAttribute("has-overrides", "" + (0 != (e & 131072)));
            g.setAttribute("static-file-prefix", Iq || "");
            g.setAttribute("lang", "en");
            g.setAttribute("can-respond", "" + (0 != (e & 512)));
            b = Yj.b;
            e = g.ownerDocument.createElement("features");
            for (var l = 0; l < b.length; l++) {
                var m = g.ownerDocument.createElement("feature");
                m.setAttribute("enabled", b[l] ? "true" : "false");
                e.appendChild(m)
            }
            g.appendChild(e);
            b = Ml();
            e = g.ownerDocument.createElement("ref-date");
            QQ(e, "" + b);
            g.appendChild(e);
            if (e = d.eid) l = g.ownerDocument.createElement("eid"), QQ(l, e), g.appendChild(l);
            e = M();
            var l = kh(e),
                m = d.owner == l,
                q = g.ownerDocument.createElement("self");
            q.setAttribute("is-signed-in", "true");
            var u = ak(jh(M()));
            q.setAttribute("has-weekends", u ? "true" : "false");
            RQ(q, k, l, !1, m);
            g.appendChild(q);
            if (l = Yi("secid")) m = g.ownerDocument.createElement("secid"), QQ(m, l), g.appendChild(m);
            l = d.text || "";
            m = g.ownerDocument.createElement("summary");
            SQ(m, c, a, 32768);
            QQ(m, l);
            g.appendChild(m);
            (l = d.dates) || "CREATE" != a || (l = new $h(b, Fh(b)));
            l && (q = l, u = q.start instanceof Lh || q.start instanceof ei, m = g.ownerDocument.createElement("dates"), SQ(m, c, a, 16), QQ(m, q.start + "/" + q.end), TQ(m, "start-date", Ll.Fe(q.start)), u && TQ(m, "start-time", Ll.uc(q.start)), u ? (TQ(m, "end-date", Ll.Fe(q.end)), TQ(m, "end-time", Ll.uc(q.end))) : (u = q.end, u instanceof di && !u.Gd() || (q = Ah(q.end), --q.Ga, u = q.Zd()), TQ(m, "end-date", Ll.Fe(u))), g.appendChild(m));
            m = String(!!d.unbounded);
            q = g.ownerDocument.createElement("unbounded");
            QQ(q, m);
            g.appendChild(q);
            if (m = d.rstart) m = m.Ya(), q = g.ownerDocument.createElement("first-start"),
                SQ(q, c, a, 64), QQ(q, "" + m), UQ(q, Ll.Fe(m)), g.appendChild(q);
            m = d.recur;
            "CREATE" != a || m || (m = "");
            if (null != m) {
                q = m;
                m = l;
                l = g.ownerDocument.createElement("rrule");
                SQ(l, c, a, 4096);
                if (u = q.replace(/(?:\r\n?|\n)[ \t]/g, "")) {
                    for (var u = u.split(/[\r\n]+/), w = [], z = /^(?:RRULE)[;:]/i, A = 0; A < u.length; ++A) 1 != !u[A].match(z) && w.push(u[A]);
                    u = w
                } else u = [];
                if (u = 1 == u.length ? new sO(u[0]) : null) {
                    if ("BYDAY" in u.b) {
                        w = u.b.BYDAY;
                        for (z = 0; z < w.length; z++) w[z] = w[z].Mh();
                        l.setAttribute("byday", w.join(","))
                    }
                    "BYHOUR" in u.b && l.setAttribute("byhour",
                        u.b.BYHOUR);
                    "BYMINUTE" in u.b && l.setAttribute("byminute", u.b.BYMINUTE);
                    "BYMONTH" in u.b && l.setAttribute("bymonth", u.b.BYMONTH);
                    "BYSECOND" in u.b && l.setAttribute("bysecond", u.b.BYSECOND);
                    "BYSETPOS" in u.b && l.setAttribute("bysetpos", u.b.BYSETPOS);
                    "BYWEEKNO" in u.b && l.setAttribute("byweekno", u.b.BYWEEKNO);
                    "BYYEARDAY" in u.b && l.setAttribute("byyearday", u.b.BYYEARDAY);
                    "COUNT" in u.b && l.setAttribute("count", u.b.COUNT);
                    "FREQ" in u.b && l.setAttribute("freq", kO[u.b.FREQ] || null);
                    "UNTIL" in u.b && l.setAttribute("until",
                        "" + u.b.UNTIL)
                }
                l.setAttribute("interval", u && u.b.INTERVAL || 1);
                w = null != u ? u.b.WKST : void 0;
                void 0 == w && "CREATE" == a && (w = ih(jh(M()), "firstDay", "0"));
                void 0 != w && l.setAttribute("wkst", PM[w] || null);
                QQ(l, q || "");
                q = "Does not repeat";
                u && (m && m.start.Gd() && (m = m.start, m instanceof ei ? b = m.tb() : m instanceof di && (b = m.Ya())), q = PGa(u, b, Yk(M())));
                UQ(l, q);
                g.appendChild(l)
            }
            b = jh(e).yd();
            e = g.ownerDocument.createElement("timezone");
            QQ(e, b);
            UQ(e, b);
            g.appendChild(e);
            JJa(g, c, a, k);
            e = d.location || "";
            b = g.ownerDocument.createElement("location");
            SQ(b, c, a, 256);
            QQ(b, e);
            e && (e = Fya(e), TQ(b, "link", e));
            g.appendChild(b);
            e = d.crm;
            l = d.src;
            b = g.ownerDocument.createElement("conflictResolutionMode");
            SQ(b, c, a, 65536);
            QQ(b, e);
            l = (l = Ln(Kn.va(), l)) ? l.zc() : 106;
            l = Cj(jh(M()), "UseAutoResponder", "false") && 100 == l;
            UQ(b, l && "BLOCKING" == e ? "Busy (decline invitations)" : "AVAILABLE" == e ? "Available" : "Busy");
            e = g.ownerDocument.createElement("blocking");
            e.setAttribute("enabled", l);
            b.appendChild(e);
            g.appendChild(b);
            b = d.icc || "DEFAULT";
            e = g.ownerDocument.createElement("class");
            SQ(e,
                c, a, 128);
            QQ(e, b);
            l = "Calendar default";
            switch (b) {
                case "PRIVATE":
                    l = "Private";
                    break;
                case "PUBLIC":
                    l = "Public"
            }
            UQ(e, l);
            g.appendChild(e);
            b = d.details;
            e = g.ownerDocument.createElement("description");
            SQ(e, c, a, 32);
            KJa(e, b, "value");
            KJa(e, b, "html");
            g.appendChild(e);
            c & 1024 && (l = d.erem, e = d.eremte, b = d.eremaded, m = g.ownerDocument.createElement("reminders"), SQ(m, c, a, 1024), q = Vk(M()), m.setAttribute("sms-verified", "" + q), VQ(l, m), g.appendChild(m), l = g.ownerDocument.createElement("reminder-te-defaults"), VQ(e, l), g.appendChild(l),
                e = g.ownerDocument.createElement("reminder-ade-defaults"), VQ(b, e), g.appendChild(e));
            if (b = d.creator) e = g.ownerDocument.createElement("creator"), RQ(e, k, b), g.appendChild(e);
            if (b = d.owner) e = g.ownerDocument.createElement("organizer"), RQ(e, k, b, !1, !0), g.appendChild(e);
            b = d.src;
            e = g.ownerDocument.createElement("source-calendar");
            SQ(e, c, a, 16384);
            RQ(e, k, b, !0, !0);
            g.appendChild(e);
            e = d.sprop || {};
            e["goo.allowModify"] = e["goo.allowModify"] || "false";
            e["goo.allowInvitesOther"] = e["goo.allowInvitesOther"] || "true";
            e["goo.showInvitees"] =
                e["goo.showInvitees"] || "true";
            e["goo.allowInviteYourself"] = e["goo.allowInviteYourself"] || "goo.allowInviteYourself";
            for (var B in e) l = g.ownerDocument.createElement("shared-property"), SQ(l, c, a, 8192), l.setAttribute("name", B), QQ(l, e[B]), g.appendChild(l);
            if (d = d.pprop)
                for (var L in d) B = g.ownerDocument.createElement("private-property"), SQ(B, c, a, 512), B.setAttribute("name", L), QQ(B, d[L]), g.appendChild(B);
            L = g.ownerDocument.createElement("calendars");
            LJa(L, k);
            g.appendChild(L);
            L = [4, 6];
            c & 8 && L.push(8);
            0 === (k[b] &&
                k[b].kc) && L.push(5);
            "CREATE" === a && L.push(3);
            a = g.ownerDocument.createElement("modules");
            for (c = 0; c < L.length; ++c) k = a, d = L[c], B = k.ownerDocument.createElement("module"), B.setAttribute("module-id", "" + d), k.appendChild(B);
            g.appendChild(a);
            a = g.ownerDocument.createElement("messages-to-user");
            g.appendChild(a);
            return f
        },
        JJa = function(a, b, c, d) {
            var e = a.ownerDocument.createElement("attendees");
            SQ(e, b, c, 2, 1);
            b & 4 || e.setAttribute("partial", "true");
            e.setAttribute("remainingAttendees", "" + _delayedLoadContext.maxAttendees);
            b = Za(d);
            b.sort(function(a, b) {
                var c = Ln(Kn.va(), a),
                    d = Ln(Kn.va(), b),
                    c = c ? c.Qd() : a,
                    d = d ? d.Qd() : b;
                return c.toLowerCase().localeCompare(d.toLowerCase())
            });
            for (c = 0; c < b.length; ++c) NJa(e, d, b[c]);
            a.appendChild(e)
        },
        NJa = function(a, b, c) {
            var d = lm.va(),
                e = a.ownerDocument.createElement("attendee"),
                f = Ln(Kn.va(), c),
                g, k;
            f ? (g = b[f.lc].yi, k = b[f.lc].Lj, RQ(e, b, f.lc)) : 0 <= c.indexOf("@") && (b = e.ownerDocument.createElement("principal"), b.setAttribute("id", c), b.setAttribute("status", "4"), b.setAttribute("type", String(AIa(d, 102))),
                g = 0, k = null, QQ(b, c), UQ(b, c), e.appendChild(b));
            e.setAttribute("extra-guests", g);
            k && (c = k, d = e.ownerDocument.createElement("response-comment"), QQ(d, c), e.appendChild(d));
            a.appendChild(e)
        },
        VQ = function(a, b) {
            if (a)
                for (var c = 0; c < a.length; ++c) {
                    var d = Fga(a[c], "");
                    if (d) {
                        var e = b,
                            f = d.Uc(),
                            d = d.Zh,
                            g = e.ownerDocument.createElement("reminder");
                        g.setAttribute("method", f);
                        g.setAttribute("secs-lead", d);
                        e.appendChild(g)
                    }
                }
        },
        LJa = function(a, b) {
            var c = [],
                d = bm.va();
            fH(function(a) {
                var b = d.get(a.getId());
                b && 60 <= b.Pd && c.push(a)
            });
            c.sort(Yu(Ro.va()));
            for (var e = 0; e < c.length; ++e) RQ(a, b, c[e].getId(), !0)
        },
        SQ = function(a, b, c, d, e) {
            var f = "readonly";
            b & d ? f = "editable" : e && b & e && (f = "extensible");
            b = "CREATE" == c && "editable" === f;
            a.setAttribute("access", f);
            a.setAttribute("editing", "" + b)
        },
        TQ = function(a, b, c) {
            var d = a.ownerDocument;
            b = d.createElement(b);
            c && b.appendChild(d.createTextNode(c));
            a.appendChild(b)
        },
        QQ = function(a, b) {
            TQ(a, "value", b)
        },
        UQ = function(a, b) {
            TQ(a, "display", b)
        },
        KJa = function(a, b, c) {
            c = a.ownerDocument.createElement(c || "html");
            if (b) {
                var d =
                    document.createElement("span");
                d.innerHTML = b;
                for (b = d.firstChild; b; b = b.nextSibling) OJa(b, c)
            }
            a.appendChild(c)
        },
        OJa = function(a, b) {
            var c;
            switch (a.nodeType) {
                case 1:
                    c = b.ownerDocument.createElement(a.nodeName);
                    for (var d = 0, e = a.attributes.length; d < e; ++d) {
                        var f = a.attributes[d];
                        f.specified && c.setAttribute(f.nodeName, f.nodeValue)
                    }
                    a.style.cssText && c.setAttribute("style", a.style.cssText);
                    for (d = a.firstChild; d; d = d.nextSibling) OJa(d, c);
                    break;
                case 3:
                case 4:
                    c = b.ownerDocument.createTextNode(a.nodeValue);
                    break;
                default:
                    return
            }
            b.appendChild(c)
        },
        RQ = function(a, b, c, d, e) {
            var f = lm.va();
            b = b[c] && b[c].kc;
            void 0 == b && (b = e ? 5 : 4);
            var g;
            e = Ln(Kn.va(), c);
            var k = bm.va().get(c);
            if (d) {
                if (!k && !e) return;
                g = k && k.qd ? k.qd : In(e);
                d = e ? e.zc() : f.b.get(k.type)
            } else {
                if (!e) return;
                g = In(e);
                d = e.zc()
            }
            var l;
            k && (l = k.Fa);
            k = a.ownerDocument.createElement("principal");
            k.setAttribute("id", c);
            k.setAttribute("status", String(b));
            k.setAttribute("type", String(AIa(f, d)));
            l && k.setAttribute("calendar-settings", l);
            QQ(k, e.getEmail());
            UQ(k, Yn(g));
            a.appendChild(k)
        };
    var PJa = function(a) {
            a = !!a.hy;
            return N(O("Would you like to send invitations to guests?") + (a ? '<div class="ep-forcenotifwarn">' + O("Please note: Even if you select 'Don't Send', all non-Google Calendar attendees on this invitation will be sent an email invitation.") + "</div>" : ""))
        },
        QJa = function(a) {
            a = "You have reported " + (O(a.title) + " as spam.");
            return N("" + a)
        },
        RJa = function(a) {
            var b = a.oh,
                c = a.title,
                d = a.oB;
            a = 'You have replied "' + (O(a.RA) + ('" to ' + ('<span class="lk" onmousedown="' + P(Rv(d)) + "(" + P(Rv(b)) + ')">' +
                (O(c) + "</span> on all events in the series."))));
            return N("" + a)
        },
        SJa = function(a) {
            var b = a.oh,
                c = a.title,
                d = a.Ga,
                e = a.oB;
            a = 'You have replied "' + (O(a.RA) + ('" to ' + ('<span class="lk" onmousedown="' + P(Rv(e)) + "(" + P(Rv(b)) + ')">' + (O(c) + ("</span> on " + (O(d) + "."))))));
            return N("" + a)
        };
    var TJa, UJa = {
            CREATE: "Oops, we couldn't create this event, please try again in a few minutes",
            RESPOND: "Failed to respond to event",
            EDIT: "Oops, we couldn't edit this event, please try again in a few minutes"
        },
        VJa = function(a, b) {
            qk();
            this.content = a;
            this.b = b
        },
        WQ = null,
        YJa = function(a, b, c, d, e) {
            var f = M(),
                g = K(f, pj);
            if (!WQ) {
                var k = Wu(g, a);
                if (!k || !k.wg()) {
                    var k = d ? d : k ? k.rb() : null,
                        l = ["eid", a, "sf", "true", "hl", "en", "output", "xml"];
                    k && l.push("src", k);
                    b && l.push("emid", 4, "emid", 6, "emid", 8);
                    c && l.push("action", "VIEW_ORIGINAL");
                    XQ(l);
                    rQ(g, l);
                    qQ(g, l);
                    var m = WJa(a, b, c, d);
                    WQ = window.setTimeout(YQ, 2500);
                    bj(f).send("event", l, 18, function(a) {
                        ZQ(!!b, m, a);
                        YQ();
                        e && pQ(e);
                        XJa(!0)
                    }, r(XJa, !1), void 0, void 0, 1)
                }
            }
        },
        XQ = function(a) {
            if (M()) {
                var b = Kr(M());
                b = b.b ? (b = b.b.H.extras) ? 2 == b.state : !1 : !!b.o.b.extras.b;
                b && sG(new sm(window.location), "eventdeb") && a.push("eventdeb", "1")
            }
        },
        YQ = function() {
            WQ && (window.clearTimeout(WQ), WQ = null)
        },
        $Q = function(a, b) {
            for (var c = Array(a.length), d, e = 0; e < a.length; ++e) 0 == e % 2 && "src" == a[e] && (d = a[e + 1]), c[e] = a[e];
            d || ((d = qJa()) ||
                (d = kh(M())), c.push("src", d));
            XQ(c);
            ZJa(c) ? b && b.b() : (c.push("action", "TEMPLATE", "sf", "true", "hl", "en", "output", "xml"), bj(M()).send("event", c, 0, function(a) {
                ZQ(!1, null, a);
                YQ();
                b && b.b()
            }, void 0, void 0, void 0, 1))
        },
        ZJa = function(a) {
            try {
                var b = {};
                b.src = kh(M());
                for (var c = "????????/????????", d = [], e = {}, f = 0; f < a.length; f += 2) {
                    var g = a[f],
                        k = a[f + 1];
                    if (k) switch (g) {
                        case "recur":
                        case "details":
                        case "text":
                        case "location":
                        case "src":
                        case "unbounded":
                            b[g] = k;
                            break;
                        case "dates":
                            c = k;
                            break;
                        case "add":
                            d.push(k);
                            break;
                        case "pprop":
                            var l =
                                k.match(/^([^:]+):(.*)/);
                            if (!l) break;
                            var m = l[1],
                                q = l[2];
                            if ("HowCreated" === m) e[m] = q;
                            else return !1;
                            break;
                        case "ctz":
                            break;
                        default:
                            return !1
                    }
                }
                if (c) {
                    var u = zQ(c);
                    b.dates = u;
                    b.crm = u.start.Gd() && isNaN(u.start.hour) ? "AVAILABLE" : "BUSY"
                } else b.crm = "AVAILABLE";
                if (d.length) {
                    a = {};
                    for (f = 0; f < d.length; ++f) {
                        var w = Kn.va(),
                            z = d[f],
                            A = qG(w, d[f]);
                        if (A) {
                            var z = A,
                                B = HF(w, A);
                            B && (z = B.lc)
                        }
                        a[z] = 0
                    }
                    a[kh(M())] = 1;
                    b.add = a
                }
                e && (b.pprop = e);
                var L, Z, d = {};
                for (Z in b) d[Z] = b[Z];
                var V = M(),
                    ha = kh(V),
                    ka = d.src || ha;
                IJa(ka, V, d);
                d.creator = ha;
                d.src = ka;
                d.owner = d.src;
                L = MJa("CREATE", 70, 130999, d, 0);
                ZQ(!1, null, L);
                return !0
            } catch (ja) {
                return !1
            }
        },
        bKa = function(a, b) {
            a.push("sf", "true");
            a.push("pprop", "eventColor:none");
            if ($Ja(a)) {
                var c = M(),
                    c = qw(c);
                hv(new Us, function(b) {
                        switch (b.key) {
                            case "yes":
                                aKa(a);
                                aR(a, "CREATE");
                                break;
                            case "no":
                                aR(a, "CREATE");
                                break;
                            case "cancel":
                                b = [];
                                for (var c = 0; c < a.length; c += 2) {
                                    var d = a[c],
                                        g = a[c + 1];
                                    switch (d) {
                                        case "recur":
                                        case "details":
                                        case "text":
                                        case "location":
                                        case "src":
                                        case "dates":
                                        case "add":
                                        case "pprop":
                                        case "ctz":
                                            b.push(d), b.push(g)
                                    }
                                }
                                $Q(b)
                        }
                    },
                    "Send invitations?", rm(PJa({
                        hy: c.Kp
                    })), (new Kw).set("yes", "Send", !0).set("no", "Don't send").set("cancel", "Continue editing", !1, !0))
            } else aR(a, "CREATE", b)
        },
        $Ja = function(a) {
            for (var b = 0; b < a.length; b += 2)
                if ("add" == a[b]) return !0;
            return !1
        },
        aR = function(a, b, c) {
            for (var d = Array(a.length), e = null, f = 0; f < a.length; ++f) d[f] = a[f], "eid" == a[f] && (e = a[f + 1]);
            a = M();
            f = K(a, pj);
            if ("CREATE" == b) {
                for (var g = !1, k, l, m = [], q = 0; !g && q < d.length - 1; q += 2) "sprop" == d[q] && kb(d[q + 1], "goo.rtc:") ? g = !0 : "add" == d[q] ? m.push(d[q + 1]) : "src" == d[q] ? k =
                    d[q + 1] : "text" == d[q] && (l = d[q + 1]);
                if (!g) {
                    l = l || "";
                    g = null;
                    if (Zj(a).isEnabled(63)) iN(k, m.length) ? g = hN(k, l, m) : g = gN();
                    else if (q = AFa(Zj(a), hh(a)), 3 == q || 1 == q) k = wFa(a, l, k, m), g = new PF(a, 0, "", ""), zN(new yN(g, k, !0), q);
                    g && 0 != g.xc() && FIa(d, g)
                }
            }
            d.push("action", b, "output", "js");
            ur(d);
            rQ(f, d);
            qQ(f, d);
            k = cKa(d);
            k = r(dKa, UJa[b], k);
            cj(bj(a), "event", d, 17, r(eKa, b, e, c), k);
            Go(M().get(Ag))
        },
        dKa = function(a, b) {
            b && b();
            var c = M();
            c.get(Eg).b(a);
            Go(c.get(Ag))
        },
        eKa = function(a, b, c) {
            "CREATE" == a && (dF(b), Go(M().get(Ag)));
            c && pQ(c)
        },
        fKa =
        function(a, b, c, d, e, f) {
            a = ["eid", a, "src", b, "rst", c, "action", "RESPOND", "sf", "true", "output", "js", "hl", "en"];
            ur(a);
            "ALL" === d && a.push("scp", "ALL");
            e && a.push("rgu", e);
            f && a.push("rcomment", f);
            d = K(M(), pj);
            rQ(d, a);
            qQ(d, a);
            XQ(a);
            return a
        },
        gKa = function(a, b, c) {
            var d = a.we,
                e = M().get(Eg);
            if (6 == b) e.b(QJa({
                title: d
            }));
            else {
                switch (b) {
                    case 1:
                        b = "Yes";
                        break;
                    case 2:
                        b = "No";
                        break;
                    case 3:
                        b = "Maybe";
                        break;
                    default:
                        return
                }
                var f = a.getId();
                "ALL" === c ? e.b(RJa({
                    RA: b,
                    oh: f,
                    title: d,
                    oB: tq(Ts)
                })) : (a = a.b ? Ll.Ym(a.wb()) : CIa(Ll, a.wb()), e.b(SJa({
                    RA: b,
                    oh: f,
                    title: d,
                    Ga: a,
                    oB: tq(Ts)
                })))
            }
        },
        hKa = function(a, b, c) {
            var d = M(),
                e = K(d, pj);
            6 == c && e.U(a);
            iH(a.getId(), a.rb(), b);
            Go(d.get(Ag));
            d.get(Eg).b("Failed to respond to event")
        },
        nKa = function(a, b) {
            var c;
            pa(a.content) && (a.content = ZIa(a.content));
            c = a.content;
            if (a.b)
                for (var d = {
                        summary: null,
                        dates: null,
                        rrule: null,
                        "first-start": null,
                        location: null,
                        description: null
                    }, e = c.documentElement.firstChild; e; e = e.nextSibling) e.nodeName in d && "editable" === e.getAttribute("access") && e.setAttribute("editing", "true");
            if ((d = c.getElementsByTagName("calendars")[0]) &&
                !d.firstChild) {
                for (var e = {}, f = c.getElementsByTagName("principal"), g = f.length; 0 <= --g;) {
                    var k = f[g],
                        l = parseInt(k.getAttribute("status"), 10);
                    e[k.getAttribute("id")] = l
                }
                LJa(d, e)
            }
            b();
            iKa();
            d = M();
            bR || (bR = new jKa(d), e = bj(d), f = K(d, pj), kKa = new cR(e, f), e = qw(d), !e || bb(e.T || {}) && !e.U ? dR = new eR(d) : (dR = new fR(d), !bb(e.T || {}) && (MO = dR.o)));
            d = new gR(Wua());
            e = M();
            e = new hR(e, de("coverinner"), bR, kKa, dR, wq.Uk(), d);
            af(e, "$b", lKa);
            iR = e;
            mKa = d;
            e.dc(c, Cj(jh(M()), "UseAutoResponder", "false"))
        },
        ZQ = function(a, b, c) {
            oE();
            a = new VJa(c,
                a);
            jp(gp.va(), "eventpage_6", b, r(nKa, a))
        },
        WJa = function(a, b, c, d) {
            var e = [];
            e.push("eid");
            e.push(a);
            e.push(b ? "1" : "0");
            e.push(c ? "1" : "0");
            e.push(d ? d : "");
            return e.join("-")
        },
        pKa = function(a, b) {
            var c = a.clone(),
                d = [],
                e = [],
                f = [],
                g = !1,
                k = !a.H,
                l = M(),
                m = kh(l),
                q = K(l, pj),
                u;
            for (u in b) {
                var w = b[u];
                switch (u) {
                    case "add":
                        for (var z = w.length; 0 <= --z;) {
                            var A = w[z],
                                B = oKa(A);
                            B ? B == m && Fn(a, 512, !0) : (B = "FAKEUID" + (qI++).toString(), A = RIa(A), Mn(Kn.va(), new Jn(B, A[1], A[0], 100)));
                            Dn(a, B) || (cG(a, B, 0, 0, null), a.H += 1)
                        }
                        break;
                    case "del":
                        for (z =
                            w.length; 0 <= --z;)
                            if (A = w[z], (B = oKa(A)) && Dn(a, B)) {
                                B == a.rb() && a.Ci(B == a.Ne ? 5 : 4);
                                var A = a,
                                    L = B;
                                delete Bn(A)[L];
                                A.R = void 0;
                                --a.H;
                                B == m && Fn(a, 512, !1)
                            }
                        break;
                    case "dates":
                        g = !0;
                        z = w[0];
                        B = z.indexOf("/");
                        w = Ux(z.substring(0, B));
                        z = Ux(z.substring(B + 1));
                        xIa(q, a.getId(), w, z);
                        break;
                    case "unbounded":
                        z = a.getId();
                        (z = Wu(q, z)) && z.Ar("true" == w[0]);
                        break;
                    case "location":
                        g = !0;
                        z = q;
                        B = a.getId();
                        if (B = Wu(z, B)) B.Ke = w[0], z.ya(kr);
                        break;
                    case "text":
                        g = !0;
                        z = q;
                        B = a.getId();
                        if (B = Wu(z, B)) B.setTitle(w[0]), z.ya(kr);
                        break;
                    case "rst":
                        w = parseInt(w[0],
                            10);
                        w in tJa && iH(a.getId(), a.rb(), w);
                        break;
                    case "rgu":
                        w = parseInt(w[0], 10);
                        (z = Dn(a, a.rb())) ? z.yi = w: z = {
                            kc: 0,
                            Iq: !1,
                            ve: null,
                            yi: w,
                            Lj: null
                        };
                        w = a;
                        B = a.rb();
                        Bn(w)[B] = z;
                        w.R = void 0;
                        break;
                    case "rcomment":
                        (z = Dn(a, a.rb())) ? z.Lj = w[0]: z = {
                            kc: 0,
                            Iq: !1,
                            ve: null,
                            yi: 0,
                            Lj: w[0]
                        };
                        w = a;
                        B = a.rb();
                        Bn(w)[B] = z;
                        w.R = void 0;
                        break;
                    case "sprop":
                        for (z = w.length; 0 <= --z;) B = w[z].split(":"), a.o[B[0]] = B[1];
                        break;
                    case "scfdata":
                        w = gr(w[0]);
                        a.Sc = w;
                        break;
                    case "pprop":
                        for (z = w.length; 0 <= --z;) B = w[z].split(":"), a.S[B[0]] = B[1];
                        break;
                    case "erem":
                        for (z =
                            w.length; 0 <= --z;) A = w[z], L = A.lastIndexOf(":") + 1, B = A.substring(L), A = A.substring(0, L) + 1, 0 == B ? d.push(A) : 1 == B ? e.push(A) : f.push(A);
                        break;
                    case "targ":
                        a.Nb = w[0];
                        a.xK = m;
                        Ro.va().H(a.rb(), !0, !0);
                        break;
                    case "details":
                        g = !0;
                        break;
                    case "icc":
                        "PRIVATE" == w[0] || "CONFIDENTIAL" == w[0] ? Fn(a, 4096, !0) : Fn(a, 4096, !1)
                }
            }
            k && 0 < a.H && !Dn(a, m) && (cG(a, m, 1, 0, null), a.H += 1);
            d = Nl(d, f);
            d = d.concat(Nl(e, d));
            l = Gg(l, 16);
            e = DIa(l, a);
            if (d.length != e.length || 0 < Nl(e, d).length) {
                e = [];
                l = Wk(l, a.rb(), a.b);
                for (f = 0; f < l.length; f++) e.push(ZP(l[f]));
                d.length ==
                    e.length && 0 == Nl(d, e).length ? a.ta = null : (d = Sk(d, a.rb()), a.ta = d)
            }
            En(a, 2097152) || rv(a) || !g || Fn(a, 131072, !0);
            return c
        },
        cKa = function(a) {
            for (var b = {}, c = 0; c < a.length;) {
                var d = a[c++],
                    e = a[c++];
                d in b || (b[d] = []);
                "text" == d && (e = sb(e));
                b[d].push(e)
            }
            if (b.recur) return null;
            a = K(M(), pj);
            c = b.eid[0];
            if ("CREATE" == b.action[0]) {
                d = b.src[0];
                Ro.va().H(d, !0, !0);
                var f;
                if (f = b.dates && b.dates[0]) {
                    var g = f.indexOf("/"),
                        e = Ux(f.substring(0, g));
                    f = Ux(f.substring(g + 1))
                } else throw Error("Cb");
                d = a.Ba(c, "", e, f, d, d, d, 2097221, 0, null, null, 0, {}, {}, {}, null);
                pKa(d, b);
                return r(a.S, a, c)
            }
            c = Wu(a, c);
            if (!c) return null;
            b = pKa(c, b);
            return p(a.U, a, b)
        },
        oKa = function(a) {
            var b = Kn.va();
            a = qG(b, a);
            return (b = HF(b, a)) && Wxa(b) ? b.lc : null
        },
        qKa = function() {
            iKa();
            tx(null);
            return !0
        },
        jR = function() {
            var a = gp.va();
            Kk(a.vd) || (RM(a, r(kp, qKa || Ha)), ip(a, "main_7"))
        },
        rKa = function(a, b, c, d, e) {
            a = ["action", "TEMPLATE", "tmeid", c, "tmsrc", b, "catt", a ? "true" : "false", "pprop", "HowCreated:DUPLICATE", "sf", "true", "hl", "en", "scp", d ? "ALL" : "ONE", "output", "xml"];
            e && a.push("src", e);
            XQ(a);
            bj(M()).send("event",
                a, 0,
                function(a) {
                    jR();
                    ZQ(!1, null, a);
                    YQ()
                }, void 0, void 0, void 0, 1)
        },
        sKa = function(a, b, c, d, e, f, g, k, l) {
            var m = [];
            c && m.push("location", c);
            d && !/[^\?T]/.test(d.toString()) && (d = null);
            e && !/[^\?T]/.test(e.toString()) && (e = null);
            !e && $v(M()) && m.push("unbounded", "true");
            d && ("string" == typeof d && (d = Vx(d)), e || (e = vE(d), d instanceof di || d instanceof Qh ? (e.Ga += 1, e = e.Zd()) : (e.minute += $w(M()), e = e.kh())), m.push("dates", d.toString() + "/" + e.toString()));
            a && m.push("text", a.PB);
            if (f && 0 < f.length)
                for (a = 0; a < f.length; ++a)
                    if (c = qG(Kn.va(),
                            f[a])) f[a] = c, m.push("add", c);
            b && m.push("details", b);
            g && m.push("pprop", "quickAddQuery:" + g);
            m.push("pprop", "HowCreated:" + k);
            l && m.push("recur", l);
            return m
        },
        aKa = function(a) {
            a.push("nopts", 2, "nopts", 3, "nopts", 4)
        },
        XJa = function(a) {
            var b = M().get(vea);
            a ? Eq(b, "event", "scs") : Eq(b, "event", "fr")
        };
    var tKa = function() {};
    h = tKa.prototype;
    h.r6 = function(a) {
        cEa(a)
    };
    h.eR = function(a) {
        aKa(a)
    };
    h.Ms = function(a, b) {
        var c = Array.apply(window, b);
        c.push("eid", a.getId(), "src", a.rb(), "sf", "true");
        Fn(a, 64, !0);
        aR(c, "EDIT")
    };
    h.Dr = function(a, b, c, d, e) {
        YJa(a, b, c, d, e)
    };
    h.qV = function(a, b) {
        HIa(a, b)
    };
    mh.addCallback(function(a) {
        vv(a, 805, function() {
            return new tKa
        })
    });
    var uKa = function(a) {
        var b = a.text,
            c = a.Kv;
        return N(O(a.prefix) + "<b>" + O(b) + "</b>" + O(c))
    };
    var kR = function(a, b) {
            this.S = a;
            this.R = b;
            this.o = !1;
            this.T = "";
            this.b = [];
            this.H = null
        },
        vKa = /^\w/,
        wKa = function(a, b) {
            return a.b() < b.b() ? -1 : a.b() === b.b() ? 0 : 1
        };
    kR.prototype.size = function() {
        return this.b.length
    };
    kR.prototype.add = function(a) {
        this.b.push(a);
        this.o = !1
    };
    kR.prototype.filter = function(a) {
        if (!this.o) {
            for (var b = this.b, c = b.length, d = [], e = [], f = 0; f < c; ++f) {
                var g = b[f];
                (vKa.test(g.getName()) ? d : e).push(g)
            }
            d.sort(this.H || wKa);
            e.sort(this.H || wKa);
            this.b = b = d.concat(e);
            d = [];
            for (f = 0; f < c; ++f) g = b[f], d.push(g.getName(), "\u0001", f, "\u0001");
            this.T = d.join("");
            this.o = !0
        }
        b = [];
        if (!this.S(a)) {
            for (a = 0; a < this.b.length; ++a) b.push({
                Eg: this.b[a],
                Pj: O(this.b[a].getName())
            });
            return b
        }
        c = "";
        for (f = 0; f < a.length; f++) switch (a.charAt(f)) {
            case " ":
            case "*":
                c += "[^\u0001]*";
                break;
            case "\\":
                c +=
                    "\\\\";
                break;
            case "/":
            case ".":
            case "?":
            case "^":
            case "$":
            case "+":
            case "{":
            case "[":
            case "|":
            case "(":
            case ")":
            case "]":
                c += "\\" + a.charAt(f);
                break;
            default:
                c += a.charAt(f)
        }
        f = c;
        c = this.T.match(new RegExp("[^\u0001]*" + f + "[^\u0001]*\u0001\\d+\u0001", "gi"));
        if (!c || 0 == c.length) return [{
            Pj: O('No matches for "' + a + '"')
        }];
        f = new RegExp("(.*?)(" + f + ")(.*)", "i");
        for (a = 0; a < c.length; ++a) {
            if (a >= this.R) {
                b.push({
                    Pj: O("Fetched first " + this.R + " results")
                });
                break
            }
            d = c[a].split("\u0001");
            g = d[1];
            d = d[0].match(f);
            b.push({
                Eg: this.b[parseInt(g, 10)],
                Pj: uKa({
                    prefix: d[1],
                    text: d[2],
                    Kv: d[3]
                })
            })
        }
        return b
    };
    var lR = function(a, b, c) {
            this.name = a;
            this.email = b;
            this.uri = c;
            b = a.indexOf("-");
            this.Oc = -1 == b ? "" : a.substring(0, b)
        },
        mR = function(a, b) {
            return a == b ? 0 : a < b ? -1 : 1
        };
    lR.prototype.getName = function() {
        return this.name
    };
    lR.prototype.b = function() {
        void 0 === this.H && (this.H = this.name.toLowerCase());
        return this.H
    };
    var oR = function() {
        J.call(this);
        this.b = new kR(nR, 100);
        this.H = {}
    };
    v(oR, J);
    var xKa = function(a, b) {
        var c = mR(a.Oc, b.Oc);
        return 0 == c ? mR(a.b(), b.b()) : "" === a.Oc || "" != b.Oc && 0 < c ? 1 : -1
    };
    oR.prototype.o = !1;
    oR.prototype.T = !1;
    oR.prototype.R = function() {
        return 0 < this.b.size()
    };
    oR.prototype.S = function(a) {
        for (var b = this.b.size(), c = {}, d = a.length, e = 0; e < d; e += 3) {
            var f = a[e],
                g = f.indexOf("-"),
                g = -1 == g ? "" : f.substring(0, g);
            c[g] ? c[g]++ : c[g] = 1
        }
        for (e = 0; e < d; e += 3)
            if (g = a[e + 1], !(g in this.H)) {
                f = a[e];
                f = new lR(f, g, a[e + 2]);
                if (100 < c[f.Oc]) {
                    var k = f.name.indexOf("-", f.Oc.length + 1); - 1 != k && (f.Oc = f.name.substring(0, k))
                }
                this.H[g] = f;
                this.b.add(f)
            }
        a = this.b.size();
        c[""] && (a -= c[""]);
        this.T = 10 < a;
        this.o = !0;
        c = this.b;
        c.H = this.T ? xKa : null;
        c.o = !1;
        this.b.size() > b && this.ya("Sa")
    };
    var nR = function(a) {
        return !!(a && 1 < a.length)
    };
    oR.prototype.filter = function(a) {
        return this.b.filter(a)
    };
    var pR = new oR;
    var zKa = function(a, b) {
            return r(yKa, a, b)
        },
        yKa = function(a, b, c, d, e) {
            var f = AKa(a),
                g;
            if (g = EN(a) && !a.Jf() && a.ub(p(a.E3, a))) g = a.H.b, g = !(g.ub() && (4 == g.get() || 4 == g.jd()));
            var k = BKa(a);
            CKa(a, c, f, g, k, b, d, e)
        },
        AKa = function(a) {
            var b, c = a.S,
                c = c && c.R,
                d = a.Jf() || c && c.get();
            a.Fb() ? b = d ? "ALL" : "ONE" : c && c.ub() ? b = "ALL" : d ? CN(a).ub() ? b = "ALL" : (EN(a) && !a.Jf() ? a = !1 : (c = a.H, a = !!(a.ma.ub() || a.b.ub() || a.La.ub() || a.Na.ub() || a.Sa.ub() || c.o.ub() || c.b.ub())), a && (b = "ONE")) : b = "ONE";
            return b
        },
        DKa = function(a) {
            return aQ(a) && a.H.T.ub()
        },
        BKa =
        function(a) {
            var b;
            if (!(b = IM(a.b))) {
                var c = a.b;
                b = c.jd();
                c = c.get();
                b = b && c ? !b.start.nd().equals(c.start.nd()) : b !== c
            }
            return b ? "Any changes to other events will be lost." : null != a.H && (a.H.o.ub() || a.H.b.ub() || a.H.H.ub()) && !a.ub(p(a.D3, a)) ? "Any other changed events will not be affected." : "Any changes made to other events will be kept."
        },
        CKa = function(a, b, c, d, e, f, g, k) {
            if (c) EKa(a, b, c), f && f(c), g();
            else {
                var l = (c = !FKa(a)) && DKa(a);
                GKa(d, c, l, e, function(c) {
                    EKa(a, b, c);
                    f && f(c);
                    g()
                }, k)
            }
        },
        FKa = function(a) {
            if (!a) return !1;
            M();
            var b = a.S,
                b = (b = b && b.b) && b.ub();
            return IM(a.b) || !!b
        },
        GKa = function(a, b, c, d, e, f, g, k, l, m) {
            var q = [];
            k = new BO("ONE", k || "Only this event", "All other events in the series will remain the same.", void 0, !0);
            m = new BO("TAIL", m || "Following events", "This and all the following events will be changed.", "Any changes to future events will be lost.");
            d = new BO("ALL", l || "All events", "All events in the series will be changed.", d);
            l = M();
            qi(l) ? b && c ? (q.push(d), a = "When updating the flexible meeting state, changes to recurring events need to be applied to the entire series.") :
                a ? (q.push(k), q.push(m), b ? (q.push(d), a = "Would you like to change only this event, all events in the series, or this and all following events in the series?") : a = "Would you like to change only this event or this and all future events in the series?") : (a = "Would you like to change only this instance of the event, or all events in this series?", q.push(k), q.push(d)) : (a = "When working offline, changes to recurring events do not apply to the entire series. You can only modify individual instances of recurring events.", q.push(k));
            HKa(function(a) {
                a ? e(a) : f()
            }, g || a, q)
        },
        HKa = function(a, b, c) {
            var d = new CO(b, c);
            G(d, "action", function() {
                a(d.R.H)
            });
            d.setVisible(!0)
        },
        EKa = function(a, b, c) {
            b.push("scp", c);
            a && a.S && ("ONE" == c && (y(a.S), a.S = null), "ALL" != c && aQ(a) && (a = a.H.T, a.Ff(a.b)))
        };
    var KKa = function(a, b, c, d, e, f, g) {
            if (cQ(b) || !b.wq() && !ZHa(b)) qR(e), f();
            else {
                var k = b.R,
                    l = aIa(k),
                    m = dc(eQ(k), fQ(k)),
                    k = Sb(vN(k), k.Gz, k),
                    q = hh(a).o,
                    q = r(IKa, q.getEmail()),
                    m = Sb(m, q),
                    l = Sb(l, q),
                    k = Sb(k, q),
                    m = !!m.length,
                    l = !!l.length,
                    k = !!k.length;
                a = qw(a).Kp;
                JKa(e, m, l, k, b.wq(), c, d, f, g, a)
            }
        },
        IKa = function(a, b) {
            var c = b.zc();
            return b.email != a && (100 == c || 108 == c)
        },
        JKa = function(a, b, c, d, e, f, g, k, l, m) {
            b || c || d ? wi(p(f, null, b, c, d, e, function(b) {
                b && qR(a);
                g && g(b);
                k()
            }, l, m), 0) : (qR(a), k())
        },
        rR = function(a, b, c, d, e, f, g) {
            var k = a ? "Send invitations?" :
                "Send updates?";
            (a = LKa(a, b, c, d, g)) ? (b = (new Kw).set("yes", "Send", !0).set("no", "Don't send"), hv(new Us, function(a) {
                "yes" == a.key ? e(!0) : "no" == a.key ? e(!1) : f()
            }, k, rm(a), b)) : e(!0)
        },
        LKa = function(a, b, c, d, e) {
            var f;
            c && (d || e) ? a && b ? f = "Would you like to send invitations to new guests, updates to existing guests, and cancellations to removed guests?" : a ? f = "Would you like to send invitations to new guests and updates to existing guests?" : b ? f = "Would you like to send updates to existing guests and cancellations to removed guests?" :
                d && (f = "Would you like to send updates to existing guests?") : a && b ? f = "Would you like to send invitations to new guests and cancellations to removed guests?" : a && c ? f = "Would you like to send invitations to new guests?" : a ? f = "Would you like to send invitations to guests?" : b && (f = "Would you like to send cancellations to removed guests?");
            if (f) return a = !!e, c = !!c, N(O(f) + (a ? '<div class="ep-forcenotifwarn">' + (c ? O("Please note: If there are any non-Google Calendar attendees on this invite, ALL attendees will be sent an email update regardless") : O("Please note: Even if you select 'Don't Send', all non-Google Calendar attendees on this invitation will be sent an email invitation.")) + "</div>" : ""))
        },
        qR = function(a) {
            a.push("nopts", 2, "nopts", 3, "nopts", 4)
        };
    var MKa = function(a, b, c, d, e) {
            if (EN(a) || a.Ra) d();
            else if (a.Fb() || !a.ub()) d();
            else {
                c = a.H;
                var f = a.S;
                a.ma.ub() || a.b.ub() || a.La.ub() || a.Na.ub() || a.Sa.ub() || f && f.ub() || c.o.ub() || c.b.ub() ? b(In(a.T.H), d, e) : d()
            }
        },
        NKa = function(a, b, c) {
            var d = (new Kw).set("yes", "Continue", !0).set("no", "Don't change the event", !1, !0);
            hv(new Us, function(a) {
                "yes" == a.key ? b() : c()
            }, "Are you sure?", jd("You are about to make changes that will only be reflected on calendar " + Yn(a) + "."), d)
        };
    var sR = new Ea("Ta"),
        OKa = new Ea("Ua"),
        tR = function(a) {
            D.call(this, OKa);
            this.email = a
        };
    v(tR, D);
    var PKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/><path d="M12,21.56L6.44,16,4.55,17.88,12,25.33l16-16L26.12,7.45Z"/></svg>')
        },
        QKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/><rect x="14.33" y="22.67" width="3.33" height="3.33"/><path d="M16,6a6.66,6.66,0,0,0-6.67,6.67h3.33a3.33,3.33,0,1,1,6.67,0c0,3.33-5,2.92-5,8.33h3.33c0-3.75,5-4.17,5-8.33A6.66,6.66,0,0,0,16,6Z"/></svg>')
        },
        RKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M22.12,11.45L16,17.56,9.88,11.45,8,13.33l8,8,8-8Z"/><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/></svg>')
        },
        SKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.33,8.55L23.45,6.67,16,14.12,8.55,6.67,6.67,8.55,14.12,16,6.67,23.45l1.88,1.88L16,17.88l7.45,7.45,1.88-1.88L17.88,16Z"/><path d="M0,0H32V32H0V0Z" style="' +
                (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/></svg>')
        },
        uR = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/><path d="M16,10V5.2H4V26.8H28V10H16ZM8.8,24.4H6.4V22H8.8v2.4Zm0-4.8H6.4V17.2H8.8v2.4Zm0-4.8H6.4V12.4H8.8v2.4Zm0-4.8H6.4V7.6H8.8V10Zm4.8,14.4H11.2V22h2.4v2.4Zm0-4.8H11.2V17.2h2.4v2.4Zm0-4.8H11.2V12.4h2.4v2.4Zm0-4.8H11.2V7.6h2.4V10Zm12,14.4H16V22h2.4V19.6H16V17.2h2.4V14.8H16V12.4h9.6v12Zm-2.4-9.6H20.8v2.4h2.4V14.8Zm0,4.8H20.8V22h2.4V19.6Z"/></svg>')
        },
        TKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/><path d="M21.33,14.67a4,4,0,1,0-4-4A4,4,0,0,0,21.33,14.67Zm-10.67,0a4,4,0,1,0-4-4A4,4,0,0,0,10.67,14.67Zm0,2.67c-3.11,0-9.33,1.56-9.33,4.67v3.33H20V22C20,18.89,13.77,17.33,10.67,17.33Zm10.67,0c-0.39,0-.83,0-1.29.07A5.63,5.63,0,0,1,22.67,22v3.33h8V22C30.67,18.89,24.44,17.33,21.33,17.33Z"/></svg>')
        },
        UKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,16a5.33,5.33,0,1,0-5.33-5.33A5.33,5.33,0,0,0,16,16Zm0,2.67c-3.56,0-10.67,1.79-10.67,5.33v2.67H26.67V24C26.67,20.45,19.56,18.67,16,18.67Z"/><path d="M0,0H32V32H0V0Z" style="' +
                (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/></svg>')
        },
        VKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16,7.87a2.8,2.8,0,1,1-2.8,2.8A2.8,2.8,0,0,1,16,7.87m0,12c4,0,8.13,1.94,8.13,2.8v1.47H7.87V22.67c0-.86,4.17-2.8,8.13-2.8M16,5.33a5.33,5.33,0,1,0,5.33,5.33A5.33,5.33,0,0,0,16,5.33Zm0,12c-3.55,0-10.67,1.78-10.67,5.33v4H26.67v-4C26.67,19.11,19.55,17.33,16,17.33Z"/><path d="M0,0H32V32H0V0Z" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;"/></svg>')
        },
        WKa = function() {
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="none" d="M0,0h32v32H0V0z"/><path fill="#1155CC" d="M12,21.6L6.4,16l-1.9,1.9l7.5,7.5l16-16l-1.9-1.9L12,21.6z"/></svg>')
        },
        XKa = function() {
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#1155CC" d="M16,2.7C8.6,2.7,2.7,8.6,2.7,16s6,13.3,13.3,13.3c7.4,0,13.3-6,13.3-13.3S23.4,2.7,16,2.7z M16,26.7 c-5.9,0-10.7-4.8-10.7-10.7S10.1,5.3,16,5.3S26.7,10.1,26.7,16S21.9,26.7,16,26.7z"/><path fill="none" d="M0,0h32v32H0V0z"/><path fill="#1155CC" d="M16.7,9.3h-2v8l7,4.2l1-1.6l-6-3.6V9.3z"/></svg>')
        },
        YKa = function(a, b, c) {
            c = c || {};
            return N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'fill:none;" d="M0,0H32V32H0V0Z"/><path d="M16,6A15.77,15.77,0,0,0,1.33,16a15.76,15.76,0,0,0,29.33,0A15.76,15.76,0,0,0,16,6Zm0,16.67A6.67,6.67,0,1,1,22.67,16,6.67,6.67,0,0,1,16,22.67ZM16,12a4,4,0,1,0,4,4A4,4,0,0,0,16,12Z"/></svg>')
        };
    var vR = function() {
        S.call(this);
        this.o = new yL("Find a time", this.b, 0);
        this.Hb(this.o)
    };
    v(vR, S);
    vR.prototype.Xa = function() {
        this.Ea = this.b.b("DIV", "fat-btn");
        this.Ua(this.o, !0);
        gf(this.o.ha(), {
            boxSizing: "border-box",
            width: "100%"
        })
    };
    vR.prototype.Ma = function() {
        vR.qa.Ma.call(this);
        T(this).ka(this.o, "action", this.H)
    };
    vR.prototype.H = function() {
        this.ya(sR)
    };
    var ZKa = function(a, b, c) {
            b = a.E9;
            a = a.Rm;
            return N('<span class="lk ' + P("ep-gc-remove-link") + '" title="' + P(b) + '" tabindex="-1"' + jn(wx({
                wd: c.je.dO,
                Rm: a
            }, c)) + "></span>")
        },
        $Ka = function(a, b, c) {
            c = c || {};
            b = a.Jk;
            var d = a.$a,
                e = a.fill;
            a = a.title;
            return N('<span class="ep-gc-icon ep-gc-icon-clickable' + (d ? " " + P(d) : "") + '"' + (a ? ' title="' + P(a) + '" aria-label="' + P(a) + '"' : "") + 'aria-role="button" tabindex="0"' + (e ? ' style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "fill:" + P(Q(e)) + '"' : "") + ">" + O(b) + "</span>")
        },
        wR = function(a, b, c) {
            a = a || {};
            c = c || {};
            b = a.Jk;
            var d = a.$a,
                e = a.fill;
            a = a.title;
            return N('<span class="ep-gc-icon' + (d ? " " + P(d) : "") + '"' + (a ? ' title="' + P(a) + '" aria-label="' + P(a) + '"' : "") + (e ? ' style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "fill:" + P(Q(e)) + '"' : "") + ">" + O(null == b ? "" : b) + "</span>")
        };
    var aLa = function(a, b, c) {
            this.b = a;
            this.T = b;
            this.R = c;
            this.S = this.b.Fa;
            a = M();
            this.o = K(a, hj);
            this.H = Zj(a).isEnabled(29)
        },
        AR = function(a, b, c) {
            var d = b.Vc,
                e = a.H && !a.R && !xR(a, d) && !a.b.b.qb(b.Vc.email),
                d = b.b,
                f;
            if (a.H)
                if (f = b.Vc, f.Rc()) f = Tu(a.o, wR, {
                    Jk: Tu(a.o, uR),
                    $a: "ep-gc-icon-guest"
                });
                else if (f.H && 0 < a.b.H) f = Tu(a.o, wR, {
                Jk: Tu(a.o, TKa),
                $a: "ep-gc-icon-guest"
            });
            else if (100 == f.md) {
                var g = b.Vc;
                f = !b.getParent() && (yR(a, b) || a.b.ua && !zR(a, g));
                var k = g.sf(),
                    l = f ? k ? "Click to mark this attendee as required" : "Click to mark this attendee as optional" :
                    zR(a, g) ? k ? "Optional attendee. This attendee has been removed." : "Required attendee. This attendee has been removed." : k ? "Optional attendee. This attendee's status can only be modified by the event's organizer." : "Required attendee. This attendee's status can only be modified by the event's organizer.",
                    k = Tu(a.o, k ? VKa : UKa),
                    g = a.R ? null : tQ(a.T, g.email).b.b;
                f = f ? Tu(a.o, $Ka, {
                    Jk: k,
                    $a: "ep-gc-icon-guest",
                    fill: g,
                    title: l
                }) : Tu(a.o, wR, {
                    Jk: k,
                    $a: "ep-gc-icon-guest",
                    fill: g,
                    title: l
                })
            } else f = Tu(a.o, wR, {
                $a: "ep-gc-icon-guest"
            });
            else f = b.Vc, f.H && 0 < a.b.H ? l = "ep-gc-grp-icon" : 100 != f.md || b.getParent() ? l = null : (l = a.b.ua, g = f.sf(), l = yR(a, b) || !zR(a, f) && l ? g ? "ep-gc-oa-optional-attendance-icon" : "ep-gc-oa-required-attendance-icon" : zR(a, f) ? g ? "ep-gc-oa-removed-optional-attendance-icon" : "ep-gc-oa-removed-required-attendance-icon" : g ? "ep-gc-oa-disabled-optional-attendance-icon" : "ep-gc-oa-disabled-required-attendance-icon"), l ? (f = bLa(l), l = ["ep-gc-oa-attendance-icon", l], a.b.ua && l.push("lk"), f = N('<span class="' + P(l.join(" ")) + '" alt="' + P(f) + '" title="' +
                P(f) + '"></span>')) : f = O(md);
            var m;
            if (a.H)
                if (l = b.Vc, xR(a, l)) m = l.Mm ? Tu(a.o, wR, {
                    $a: "ep-gc-icon-response"
                }) : Tu(a.o, wR, {
                    Jk: Tu(a.o, RKa),
                    $a: "ep-gc-icon-response"
                });
                else {
                    var q;
                    a.R || a.b.b.qb(l.email) ? 1 == l.response ? (q = PKa, m = "Yes") : 3 == l.response && (q = QKa, m = "Maybe") : q = YKa;
                    q = q ? Tu(a.o, q) : null;
                    m = Tu(a.o, wR, {
                        Jk: q,
                        $a: "ep-gc-icon-response",
                        title: m
                    })
                }
            else b: {
                m = b.Vc;
                if (m.H && 0 < a.b.H)
                    if (zR(a, m)) m = "ep-gc-response-unknown", q = "";
                    else {
                        m = !!$a(a.b.S, b.getId());
                        q = "";
                        l = "" + (m ? "" + N("Click to collapse") : "" + N("Click to expand"));
                        l = R(l);
                        q += '<div class="' + P(R("" + (m ? "ep-gc-grp-ex" : "ep-gc-grp-cl"))) + '" title="' + P(l) + '"></div>';
                        m = N(q);
                        break b
                    }
                else if (xR(a, m)) m = "ep-gc-response-unknown",
                q = "";
                else switch (m.response) {
                    case 1:
                        m = "ep-gc-response-yes";
                        q = "Yes";
                        break;
                    case 3:
                        m = "ep-gc-response-maybe";
                        q = "Maybe";
                        break;
                    case 2:
                        m = "ep-gc-response-no";
                        q = "No";
                        break;
                    default:
                        m = "ep-gc-response-unknown", q = "Unknown"
                }
                m = N('<div class="' + P(m) + '" title="' + P(q) + '"></div>')
            }
            var u = b.Vc,
                l = UP(u),
                w = u.email,
                z = a.b.b.qb(u.email),
                A = tQ(a.T, u.email).b,
                k = ["ep-gc-chip"];
            zR(a,
                u) && !b.getParent() ? k.push("ep-gc-removed") : a.H && 2 == u.response && k.push("ep-gc-declined");
            q = !1;
            var B = "transparent",
                g = w;
            u.Mm ? (l += "\u00a0*", zR(a, u) || k.push("ep-gc-unresolved")) : a.R || !YM(u) ? zR(a, u) || k.push("ep-gc-plain") : (zR(a, u) || (k.push(c ? "ep-gc-hovered" : z ? "ep-gc-selected" : ""), q = !0), g = z ? "Hide events: " + w : "Show events: " + w, a.H || (B = c ? A.T : z ? A.b : B));
            yR(a, b) && k.push("ep-gc-new-guest");
            c = null;
            a.H && !zR(a, u) && u.H && 0 < a.b.H && (c = Xa(wN(a.b.U, u.email).o), k.push("ep-gc-has-group-member-count"));
            var L, u = B,
                k = k.join(" ");
            L = L || {};
            q = !!q;
            L = N('<div class="' + P(k) + '" title="' + P(g) + '" style="' + (L.Aa ? "/*" + L.Aa + "*/" : "") + "background:" + P(Q(u)) + '">' + (q ? '<span class="lk ep-gc-chip-text">' + O(l) + "</span>" : '<span class="ep-gc-chip-text">' + O(l) + "</span>") + (null != c ? '<span class="ep-gc-grp-cnt">(' + O(c) + ")</span>" : "") + "</div>");
            c = b.Vc;
            l = (q = 100 == c.md) ? "Remove this guest from the event" : "Remove this resource from the event";
            b.getParent() || !a.S && !yR(a, b) ? c = null : zR(a, c) ? (c = q ? "This guest has been removed. Click to restore the guest." : "This resource has been removed. Click to restore the resource.",
                q = !!a.H, c = "" + ('<span class="lk ' + P("ep-gc-restore-link") + '" title="' + P(c) + '" aria-label="' + P(c) + '" aria-role="button" tabindex="' + P(q ? "0" : "-1") + '">Restore</span>'), c = N(c)) : c = a.H ? Tu(a.o, $Ka, {
                Jk: Tu(a.o, SKa),
                $a: "ep-gc-icon-remove",
                title: l
            }) : Tu(a.o, ZKa, {
                E9: l,
                Rm: c.email
            });
            q = b.Vc;
            $a(a.b.S, b.getId()) && !b.getParent() && !zR(a, q) && q.H && 0 < a.b.H ? (g = Xa(wN(a.b.U, q.email).o), q = !!(a.S && 0 < g), l = "", g = UE(new il("{MEMBER_COUNT_1,plural,=0{ This group is empty.}=1{ 1 member.}other{ {MEMBER_COUNT_2} members.}}"), {
                MEMBER_COUNT_1: g,
                MEMBER_COUNT_2: O(g)
            }), l += '<div class="ep-gc-comments"><span class="ep-gc-comments-cnt">' + g + "</span>", g = R("Expanding this group will invite all members separately. Changes to the group will no longer be reflected in the guest list."), q && (l += ' <span class="lk ' + P("ep-gc-expl") + '" title="' + P(g) + '">Expand group</span>'), q = N(l + "</div>")) : !q.Wj || 1 != q.response && 3 != q.response ? q = null : (q = q.Wj, q = UE(new il("{EXTRA_GUESTS_1,plural,=0{ unused plural form}=1{ +1 guest}other{ +{EXTRA_GUESTS_2} guests}}"), {
                EXTRA_GUESTS_1: q,
                EXTRA_GUESTS_2: O(q)
            }), q = N("" + ('<div class="ep-gc-extra-guests">' + q + "</div>")));
            var l = b.Vc,
                l = l.dl ? N('<div class="ep-gc-comments">' + O(l.dl) + "</div>") : null,
                Z;
            a = !!a.H;
            b = cLa(b);
            g = !!e;
            e = '<div class="ep-gc-row">';
            for (k = 0; k < d; k++) e += '<div class="ep-gc-cont">';
            e += O(null == (Z = f) ? "" : Z) + '<div class="ep-gc-cont' + (g ? " ep-gc-hidden" : "") + '">' + (a ? O(null == (Z = c) ? "" : Z) + O(m) + O(L) + '<div class="arf-attendee-status ' + P(b) + '"></div>' : O(m) + O(L) + O(null == (Z = c) ? "" : Z)) + O(null == (Z = q) ? "" : Z) + O(null == (Z = l) ? "" : Z) + "</div>";
            for (Z = 0; Z <
                d; Z++) e += "</div>";
            return N(e + "</div>")
        },
        cLa = function(a) {
            switch (a.Vc.response) {
                case 1:
                    return "ep-gc-response-yes";
                case 3:
                    return "ep-gc-response-maybe";
                case 2:
                    return "ep-gc-response-no"
            }
            return "ep-gc-response-unknown"
        },
        yR = function(a, b) {
            var c = b.Vc;
            return a.b.R.Fb(c.email) || kIa(c) && !b.getParent()
        },
        zR = function(a, b) {
            return $a(a.b.R.o, b.email)
        },
        xR = function(a, b) {
            return 108 != b.zc() ? !1 : !b.H || 0 < a.b.H
        },
        bLa = function(a) {
            switch (a) {
                case "ep-gc-oa-disabled-optional-attendance-icon":
                    return "Optional attendee. This attendee's status can only be modified by the event's organizer.";
                case "ep-gc-oa-disabled-required-attendance-icon":
                    return "Required attendee. This attendee's status can only be modified by the event's organizer.";
                case "ep-gc-oa-optional-attendance-icon":
                    return "Click to mark this attendee as required";
                case "ep-gc-oa-required-attendance-icon":
                    return "Click to mark this attendee as optional";
                case "ep-gc-oa-removed-optional-attendance-icon":
                    return "Optional attendee. This attendee has been removed.";
                case "ep-gc-oa-removed-required-attendance-icon":
                    return "Required attendee. This attendee has been removed.";
                case "ep-gc-grp-icon":
                    return "";
                default:
                    return ""
            }
        };
    var dLa = function(a) {
            var b = "";
            a = a.Wl;
            for (var c = a.length, d = 0; d < c; d++) b += O(a[d]);
            return N(b)
        },
        eLa = function(a) {
            var b = a.prefix;
            a = a.id;
            b = "" + ('<div id="' + P(a) + 'newlyAddedHeader" class="' + P(b) + '-head">Newly added</div><div id="' + P(a) + 'newGuests"><div id="' + P(a) + 'newGuestsBody"></div></div><div id="' + P(a) + 'newResources"><div id="' + P(a) + 'newResourcesBody"></div></div><div id="' + P(a) + 'sectionHeader" class="' + P(b) + '-head">Participants<span id="' + P(a) + 'emailGuests" class="lk ' + P(b) + '-email-guests" tabindex=0 role="button" aria-label="' +
                P("Send an email to guests") + '">Email</span><div id="' + P(a) + 'guestsResponseCount" class="' + P(b) + '-count"></div></div><div id="' + P(a) + 'guests"><div id="' + P(a) + 'guestsBody"></div></div><div id="' + P(a) + 'resources"><div id="' + P(a) + 'resourcesBody"></div></div><div id="' + P(a) + 'guestError" class="' + P(b) + '-errs">' + O("* Calendar cannot be shown.") + ' <a id="' + P(a) + 'guestErrorDetailsLink" href="javascript:void(0)">' + O("Why?") + "</a></div>");
            return N(b)
        },
        fLa = function(a) {
            var b = a.prefix;
            a = a.id;
            var c = '<div id="' +
                P(a) + 'sectionBorder" class="' + P(b) + '-oa-border"></div><div id="' + P(a) + 'optionalAttendeesLegend" class="' + P(b) + '-oa-legend">',
                d = "Click the " + ('<div class="' + P(R("" + b + "-oa-chip-icon " + ("" + b) + "-oa-required-attendance-icon goog-inline-block")) + '"></div> icons below to mark as optional.'),
                c = c + (d + '</div><div id="' + P(a) + 'guests-all"><div id="' + P(a) + 'sectionHeader" class="' + P(b) + '-head"><span class="' + P(b) + '-guests-header">' + O("Guests") + '</span><span id="' + P(a) + 'emailGuests" class="lk ' + P(b) + '-email-guests" tabindex=0></span><div id="' +
                    P(a) + 'emailGuestsIcon" class="' + P(b) + '-email-guests-icon goog-inline-block"></div></div><div class="' + P(b) + '-head-separator"></div><div id="' + P(a) + 'guestsResponseCount" class="' + P(b) + '-count"></div><div id="' + P(a) + 'new" class="' + P(b) + '-oa-new-sec"><div id="' + P(a) + 'newBody"></div></div><div id="' + P(a) + 'sectionSeparator" class="' + P(b) + '-oa-new-sec-sep"></div><div id="' + P(a) + 'guests" class="' + P(b) + '-oa-old-sec"><div id="' + P(a) + 'guestsBody"></div></div></div><div id="' + P(a) + 'resources" class="' + P(b) +
                    '-oa-old-sec"><div id="' + P(a) + 'resourcesHeader" class="' + P(b) + '-head">' + O("Rooms, etc.") + '</div><div id="' + P(a) + 'resourcesBody"></div></div><div id="' + P(a) + 'guestError" class="' + P(b) + '-errs">' + O("* Calendar cannot be shown.") + ' <a id="' + P(a) + 'guestErrorDetailsLink" href="javascript:void(0)">' + O("Why?") + "</a></div>");
            return N(c)
        },
        gLa = function(a, b, c) {
            b = a.id;
            var d = a.title,
                e = !!a.selected,
                f = !!a.readOnly,
                g = a.g_,
                k = a.Rm;
            return N('<div class="' + P(a.className) + '" id="' + P(b) + '" role="option" title="' + P(d) + '" aria-selected="' + (e ? "true" : "false") + '"' + (f ? ' aria-readonly="true"' : "") + jn(wx({
                wd: c.je.cO,
                Rm: k
            }, c)) + ">" + O(g) + "</div>")
        };
    var BR = function(a, b, c, d, e, f) {
        S.call(this);
        this.La = a;
        this.yb = hh(a).o;
        this.S = b;
        this.ma = b.R;
        this.H = b.o;
        this.ua = e;
        this.Na = f;
        this.ta = new aLa(this.S.R, c, this.ua);
        this.ab = K(a, oj);
        this.o = Zj(this.La).isEnabled(29);
        this.$b = new Jq("ep-gl-kb-selected");
        this.V = this.U = this.R = this.Fa = null;
        this.Ba = !1
    };
    v(BR, S);
    h = BR.prototype;
    h.tW = function() {
        yIa(this.$b)
    };
    h.uW = function(a) {
        if (Pq(this.$b)) {
            var b = this.$b.Re();
            switch (a.keyCode) {
                case 38:
                    nv(this.$b);
                    break;
                case 40:
                    mv(this.$b);
                    break;
                case 46:
                    b && !this.H.contains(CR(this, b).Vc.email) ? hLa(this, b) : iLa(this, b);
                    break;
                case 32:
                    var c = this.H.b(CR(this, b).Vc.email);
                    c && (100 == c.zc() ? jLa(this, b) : c.H && this.iI(b));
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    };
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        var a = this.b.b("DIV", "ep-gl"),
            b = this.o ? eLa : fLa;
        bF(K(this.La, hj), a, b, {
            id: this.getId(),
            prefix: "ep-gl",
            lpa: this.o
        });
        $q(a, "listbox");
        ar(a, "multiselectable", !0);
        this.Ea = a
    };
    h.Ma = function() {
        BR.qa.Ma.call(this);
        DR(this);
        var a = this.getId();
        xv(T(this), this.b.ha(a + "emailGuests"), HB, this.Ra);
        T(this).ka(this.b.ha(a + "guestErrorDetailsLink"), "click", p(this.Va, this));
        this.R = new IB(this.ha());
        KB(this.R, p(this.zV, this), p(this.G1, this));
        KB(this.R, p(this.AV, this), p(this.M1, this));
        this.ua || (MB(this.R, p(this.wF, this), p(this.jI, this, !0), p(this.jI, this, !1)), LB(this.R, p(this.wF, this), p(this.y0, this)));
        T(this).ka(this.H, "m", this.Sa);
        T(this).ka(this.ha(), "mousedown", nx);
        T(this).ka(new ew(this.ha()),
            "key", this.uW);
        T(this).ka(new Iw(this.b.Qb()), "focusin", this.tW);
        KB(this.R, p(this.yV, this), p(this.d1, this));
        KB(this.R, p(this.uV, this), p(this.iI, this));
        LB(this.R, p(this.tV, this), p(this.w0, this))
    };
    h.Jb = function() {
        this.R && this.R.Pa();
        Tf(T(this));
        BR.qa.Jb.call(this)
    };
    h.Pa = function() {
        this.U && this.U.Pa();
        BR.qa.Pa.call(this)
    };
    var ER = function(a, b) {
            var c = [];
            C(b, function(a) {
                var b = AR(this.ta, a),
                    d = a.Vc,
                    g = !d.sf(),
                    k = d.Rc(),
                    l = !this.H.b(d.email),
                    m = d.displayName + (k ? ", Rooms, etc." : "") + (l ? ", removed" : ""),
                    q = "ep-gl-guest";
                l && this.o && (q += " ep-gl-guest-removed");
                c.push(Tu(K(this.La, hj), gLa, {
                    className: q,
                    id: this.getId() + a.getId(),
                    title: m,
                    selected: g || k,
                    readOnly: k || l,
                    g_: b,
                    Rm: d.email
                }))
            }, a);
            return c
        },
        kLa = function(a, b) {
            var c = a.b.ha(a.getId() + "guestError");
            H(c, b)
        },
        lLa = function(a, b) {
            var c = a.ma.Oa ? a.ma.ma ? "The full guest list has been hidden because the number of guests is too large." :
                "The full guest list has been hidden at the organizer's request." : "Yes: " + b.V[1] + ", Maybe: " + b.V[3] + ", No: " + b.V[2] + ", Awaiting: " + b.V[0];
            ze(a.b.ha(a.getId() + "guestsResponseCount"), c)
        },
        oLa = function(a, b) {
            var c = a.getId() + "sectionBorder";
            (c = a.b.ha(c)) && H(c, 0 < a.H.o().length);
            var c = Pq(a.$b),
                d = a.$b.Re() ? a.$b.Re().id : void 0,
                e = [];
            a.o && a.S.Fb() ? (FR(a, [], "newGuests", []), FR(a, [], "newResources", []), FR(a, e, "guests", ER(a, b.ta)), FR(a, e, "resources", ER(a, b.ua))) : (a.o ? (FR(a, e, "newGuests", ER(a, b.H)), FR(a, e, "newResources",
                ER(a, b.U))) : FR(a, e, "new", ER(a, b.S)), FR(a, e, "guests", ER(a, b.b)), FR(a, e, "resources", ER(a, b.o)));
            Mq(a.$b, e, a.o);
            kLa(a, b.Ba);
            lLa(a, b);
            mLa(a);
            a.ua && !a.o && nLa(a, b);
            d && Oq(a.$b, function(a) {
                return a.id == d
            });
            c && a.$b.focus()
        },
        nLa = function(a, b) {
            for (var c = [], d = 0; a.V && d < a.V.length; d++) {
                var e = a.V[d].email;
                C(b.R, function(a) {
                    a.Vc.email == e && (a = this.b.ha(this.getId() + a.getId()), (a = Qu("ep-gc-chip", a || this.b.o)) && a.length && c.push(a[0]))
                }, a)
            }
            c.length && pLa(c, a.Ba ? "#fe8" : "#fff7d7", a.Ba ? 1 : 0);
            a.V = null
        },
        pLa = function(a, b, c) {
            function d(a) {
                a *=
                    c + 2;
                return a < c ? (a = 2 * a % 2, 1 > a ? 1 - a : a - 1) : a < c + 1 ? 1 : 1 - a % 1
            }

            function e(a) {
                a = a.target.element;
                a.style.backgroundColor = "";
                a.animation = null
            }
            b = Fj(b);
            for (var f = 0; f < a.length; ++f) {
                var g = a[f];
                g.animation && g.animation.stop();
                g.style.backgroundColor = "";
                var k = kf(g, "backgroundColor"),
                    l = [255, 255, 255];
                "transparent" != k && "rgba(0, 0, 0, 0)" != k && (l = Fj(MQ(k).Vl));
                k = new CQ(g, l, b, 1E3 * (c + 2), d);
                G(k, "end", e);
                k.play();
                g.animation = k
            }
        },
        DR = function(a) {
            a.Fa = null;
            var b = new qLa(a.ma, a.o, a.Na);
            oLa(a, b);
            var c = rLa(b),
                d = b.vq(),
                e = sLa(b),
                f = a.getId() +
                "sectionBorder";
            (f = a.b.ha(f)) && H(f, c);
            a.o ? (c = d && !a.S.Fb(), f = a.getId() + "newlyAddedHeader", f = a.b.ha(f), H(f, c), tLa(a, e || d && a.S.Fb()), uLa(a, e && !a.S.Fb())) : (tLa(a, c), uLa(a, c), (c = vLa(b)) || (c = b.T.ua && rLa(b) || b.T.V && b.vq()), f = a.getId() + "optionalAttendeesLegend", f = a.b.ha(f), H(f, c), d = d && e, e = a.getId() + "sectionSeparator", (e = a.b.ha(e)) && H(e, d));
            a.Fa = b
        },
        FR = function(a, b, c, d) {
            var e = a.getId(),
                f = a.b.ha(e + c),
                e = a.b.ha(e + c + "Body");
            a.Na || "resources" != c && "newResources" != c ? (d.length && (Km(e, dLa, {
                Wl: d
            }), a = ue(e), fc(b, a)), H(f, !!d.length)) : H(f, !1)
        },
        GR = function(a, b) {
            return lw("ep-gl-guest", a.ha(), b)
        };
    h = BR.prototype;
    h.wF = function(a) {
        return lw("ep-gc-chip", this.ha(), a) ? GR(this, a) : null
    };
    h.zV = function(a) {
        return (this.ta.H ? jx(a, "ep-gc-icon-remove") : Ec(a, "ep-gc-remove-link")) ? GR(this, a) : null
    };
    h.AV = function(a) {
        return Ec(a, "ep-gc-restore-link") ? GR(this, a) : null
    };
    h.jI = function(a, b) {
        var c = CR(this, b);
        c && YM(c.Vc) && Im(b, AR(this.ta, c, a))
    };
    h.y0 = function(a, b) {
        b.preventDefault();
        var c = CR(this, a).Vc.email,
            d = this.H,
            e = d.b(c);
        if (e && YM(e)) {
            var f = d.qb(c);
            d.setVisible(c, !f);
            e.Rc() ? this.ab.nb(f ? "find_a_time_resource_hidden" : "find_a_time_resource_shown") : this.ab.nb(f ? "find_a_time_guest_hidden" : "find_a_time_guest_shown")
        }
    };
    h.G1 = function(a, b) {
        b.preventDefault();
        iLa(this, a)
    };
    h.M1 = function(a, b) {
        b.preventDefault();
        hLa(this, a);
        this.ab.nb("find_a_time_guest_restored")
    };
    var iLa = function(a, b) {
            var c = CR(a, b);
            a.ma.b.remove(c.Vc.email);
            c = c.Vc;
            c.Rc() && a.ya(new tR(c.email))
        },
        hLa = function(a, b) {
            var c = a.H,
                d = CR(a, b).Vc.email;
            c.add(c.ta[d])
        },
        CR = function(a, b) {
            return a.Fa.Oa[b.id.substr(a.getId().length)]
        };
    BR.prototype.Sa = function(a) {
        var b = a.o,
            c = b.Ka;
        if (c) {
            var d = [];
            for (a = 0; a < c.length; ++a) d[a] = iQ(this.H, c[a].email);
            this.V = d;
            this.Ba = !0
        } else b.Ja ? this.V = Sb(b.Ja, function(a) {
            return kIa(a)
        }) : this.V = b.k, this.Ba = !1;
        if (Yb([this.V, b.l, b.Ja, b.change], function(a) {
                return a && a.length
            })) DR(this);
        else
            for (c = b.Ia || [], fc(c, b.Ha || []), a = 0, b = c.length; a < b; a++) {
                var e = c[a].getKey();
                C(this.Fa.R, function(a) {
                    if (a.Vc.email == e) {
                        var b = this.b.ha(this.getId() + a.getId());
                        b && Im(b, AR(this.ta, a))
                    }
                }, this)
            }
        mLa(this)
    };
    var mLa = function(a) {
            var b = a.b,
                c = b.ha(a.getId() + "emailGuests");
            if (c) {
                var d = a.S.Tb,
                    e = a.yb.getEmail(),
                    f = Yb(a.H.o(), function(a) {
                        a = a.email;
                        return a != d && a != e
                    });
                if (!a.ua && a.o) HR(a, !1);
                else if (a.S.Fb()) HR(a, !1);
                else if (f) a.o || b.Wd(c, "Email guests"), HR(a, !0);
                else if (e == d) {
                    var f = a.S.Va,
                        g = HF(Kn.va(), f);
                    d != f && null != g && 100 == g.md ? (a.o || b.Wd(c, "Email organizer"), HR(a, !0)) : HR(a, !1)
                } else a.o || b.Wd(c, "Email organizer"), HR(a, !0)
            }
        },
        HR = function(a, b) {
            var c = a.b.ha(a.getId() + "emailGuests"),
                d = a.b.ha(a.getId() + "emailGuestsIcon");
            c && d ? (H(c, b), H(d, b)) : a.o && c && H(c, b)
        };
    BR.prototype.Ra = function() {
        this.ya("Va")
    };
    BR.prototype.Va = function() {
        this.U || (this.U = new uF("addgadget-dialog"), this.U.setTitle("Some guest calendars cannot be shown"), this.U.xf(rm(N("Google Calendar could not resolve the indicated guests for one of the following reasons:<ul><li>The guests may not use Google Calendar.</li><li>You may not have permission to access the indicated calendars.</li></ul>"))), zF(this.U, WC()));
        this.U.setVisible(!0)
    };
    var tLa = function(a, b) {
            var c = a.getId() + "sectionHeader",
                c = a.b.ha(c);
            H(c, b)
        },
        uLa = function(a, b) {
            var c = a.getId() + "guestsResponseCount",
                c = a.b.ha(c);
            H(c, b)
        };
    h = BR.prototype;
    h.yV = function(a) {
        return (this.ta.H ? jx(a, "ep-gc-icon-guest") && jx(a, "ep-gc-icon-clickable") : Ec(a, "ep-gc-oa-optional-attendance-icon") || Ec(a, "ep-gc-oa-required-attendance-icon")) ? GR(this, a) : null
    };
    h.uV = function(a) {
        return (this.ta.H ? jx(a, "ep-gc-has-group-member-count") : Ec(a, "ep-gc-grp-ex") || Ec(a, "ep-gc-grp-cl")) ? GR(this, a) : null
    };
    h.tV = function(a) {
        return Ec(a, "ep-gc-expl") ? GR(this, a) : null
    };
    h.d1 = function(a, b) {
        b.preventDefault();
        jLa(this, a)
    };
    h.iI = function(a) {
        a = CR(this, a);
        var b = this.ma;
        $a(b.S, a.getId()) ? cb(b.S, a.getId()) : sx(b.S, a.getId(), !0);
        DR(this)
    };
    h.w0 = function(a) {
        a = CR(this, a);
        fIa(this.ma.b, a.Vc.email)
    };
    var jLa = function(a, b) {
            var c = a.H.b(CR(a, b).Vc.email),
                d = c.sf(),
                e = a.H,
                f = !d;
            c.sf() !== f && (e.Hc(), c.dg.set(f), e.Ec());
            a.ua ? a.ab.nb(d ? "event_details_guest_marked_required" : "event_details_guest_marked_optional") : a.ab.nb(d ? "find_a_time_guest_marked_required" : "find_a_time_guest_marked_optional")
        },
        qLa = function(a, b, c) {
            this.T = a;
            this.ma = b;
            this.Ca = c;
            this.H = b ? dQ(a) : [];
            this.U = b ? dIa(a) : [];
            this.S = b ? [] : a.Ra();
            this.b = a.La();
            this.o = cIa(a);
            this.ta = this.H.concat(this.b);
            this.ua = this.U.concat(this.o);
            this.R = b ? dc(this.H, this.U,
                this.b, this.o) : dc(this.S, this.b, this.o);
            this.V = wN(a.Na, "<top>").b;
            this.Ba = Vb(this.R, function(a) {
                return a.Vc.Mm
            });
            this.Oa = JHa(this.R, function(a) {
                return a.getId()
            })
        };
    qLa.prototype.vq = function() {
        return this.ma ? this.Ca ? !!this.H.length || !!this.U.length : !!this.H.length : !!this.S.length
    };
    var sLa = function(a) {
            return a.ma ? a.Ca ? !!a.b.length || !!a.o.length : !!a.b.length : !!a.b.length
        },
        rLa = function(a) {
            return a.vq() || sLa(a)
        },
        vLa = function(a) {
            var b = function(a) {
                return a.Vc.sf()
            };
            return a.T.ua && Vb(a.b, b) || a.T.V && Vb(a.S, b)
        };
    var wLa = function(a) {
            var b = a.$a,
                c = !!a.oj,
                d = a.name;
            return N('<span id="' + P(a.id) + '" class="' + P(b) + '"' + (c ? "" : " tabindex=0") + 'aria-selected="' + P(c ? "true" : "false") + '" role="tab">' + O(d) + "</span>")
        },
        xLa = function(a) {
            var b = a.$a,
                c = !!a.index,
                d = a.name;
            return N('<div id="' + P(a.id) + '" class="' + P(b) + ' goog-inline-block"' + (c ? " tabindex=0" : "") + ' role="link">' + O(d) + "</div>")
        };
    var IR = function(a, b, c, d) {
        S.call(this);
        this.S = ec(a);
        this.o = b;
        this.H = c;
        this.U = d || "ui-ts"
    };
    v(IR, S);
    IR.prototype.R = null;
    var yLa = function(a, b, c) {
            c = n(c) ? c : a.o;
            a.S = ec(b);
            c == a.o ? a.ha() && JR(a) : KR(a, c)
        },
        KR = function(a, b) {
            if (b != a.o) {
                var c = new zLa(b);
                a.o = b;
                a.ya(c);
                a.ha() && JR(a)
            }
        };
    IR.prototype.Xa = function() {
        this.Ea = this.b.b("DIV", this.U);
        JR(this)
    };
    var JR = function(a) {
            Im(a.ha(), a.H.T(a.S, a.o))
        },
        zLa = function(a) {
            D.call(this, "Wa");
            this.Ba = a
        };
    v(zLa, D);
    IR.prototype.Ma = function() {
        IR.qa.Ma.call(this);
        this.R = new IB(this.ha());
        LB(this.R, p(this.H.H, this.H, this.b), p(this.V, this));
        T(this).ka(this.ha(), "keypress", this.ma)
    };
    IR.prototype.ma = function(a) {
        13 != a.keyCode && 3 != a.keyCode || KR(this, this.H.o(a.target))
    };
    IR.prototype.V = function(a) {
        KR(this, this.H.o(a))
    };
    IR.prototype.Jb = function() {
        this.R.Pa();
        this.R = null;
        IR.qa.Jb.call(this)
    };
    var ALa = function() {},
        LR = function(a) {
            this.b = a || "ui-ltsr";
            this.R = this.b + "-tab-"
        };
    v(LR, ALa);
    LR.prototype.S = function(a) {
        return kb(a.className || "", this.b)
    };
    LR.prototype.H = function(a, b) {
        return a.RG(b, p(this.S, this), !0)
    };
    LR.prototype.o = function(a) {
        return parseInt(a.id.substr(this.R.length), 10)
    };
    LR.prototype.T = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(wLa({
            $a: d == b ? this.b + "-selected" : this.b + "-unselected",
            name: a[d],
            id: this.R + d,
            oj: d == b
        }));
        for (var d = !!Zj(M()).isEnabled(29), e = '<div role="tablist">', f = c.length, g = 0; g < f; g++) e += O(c[g]) + (d || g == f - 1 ? "" : "&nbsp;| ");
        return N(e + "</div>")
    };
    var MR = function(a) {
        this.b = a || "ui-dtsr";
        this.R = this.b + "-tab-";
        this.S = !0
    };
    v(MR, ALa);
    MR.prototype.H = function(a, b) {
        return kb(b.className, this.b) ? b : null
    };
    MR.prototype.o = function(a) {
        return parseInt(a.id.substr(this.R.length), 10)
    };
    MR.prototype.T = function(a, b) {
        for (var c = [], d = 0; d < a.length; d++) {
            var e = this.b + " ",
                e = e + (d == b ? this.b + "-selected" : this.b + "-unselected");
            0 == d && (e += " " + (this.b + "-first-tab"));
            d == a.length - 1 && (e += " " + (this.b + "-last-tab"));
            c.push(xLa({
                $a: e,
                name: a[d],
                id: this.R + d,
                index: this.S && d != b
            }))
        }
        for (var d = "", e = c.length, f = 0; f < e; f++) d += O(c[f]);
        return N(d)
    };
    var NR = function(a, b, c) {
        return function(d) {
            var e = jx(d.target, a);
            e && xe(d.currentTarget, e) && (d.currentTarget = e, b.call(c, d))
        }
    };
    var DLa = function(a, b, c) {
            a = c || {};
            b = R("Search rooms");
            a = "" + ('<div class="rp-filter valign-container"><div class="valign-item"><div class="rp-filter-inputs"><div class="rp-input-container"><input type="text" class="rp-query-input textinput" title="' + P(b) + '" placeholder="' + P(b) + '"></div><select class="rp-availability-select"><option value="available" selected>Available</option><option value="all">All rooms</option></select></div><div class="rp-fat-btn"></div><form onsubmit="' + (a.Aa ? "/*" + a.Aa + "*/" : "") +
                'return false;" class="rp-recurring-event-options"><label class="rp-recurring-event-option"><input name="recurrence" value="0" type="radio" class="rp-recurring-event-radio rp-recurring-event-radio-false"><span>For this event</span></label><label class="rp-recurring-event-option"><input name="recurrence" value="1" type="radio" class="rp-recurring-event-radio rp-recurring-event-radio-true"><span>For next 10</span></label></form></div></div>');
            c = "" + ('<div class="rp-picker">' + N(a) + '<div class="rp-added"><label class="rp-added-label"></label><ul class="rp-added-rooms"></ul><label class="rp-added-toggle"><span class="rp-added-more">Show more</span><span class="rp-added-less">Show less</span></label></div><div class="rp-results"><div class="rp-suggestions"><ul class="rp-suggested-rooms"></ul></div><div class="rp-show-all-rooms">Show all rooms</div><ul class="rp-directory">' +
                BLa({
                    ag: "",
                    name: R("All rooms"),
                    Xs: "rp-node-all-rooms",
                    Z2: !0
                }, c) + '</ul><div class="rp-spinner">' + LQ() + '</div><div class="rp-no-results-message">No rooms found.</div></div>' + CLa(null) + "</div>");
            return N(c)
        },
        CLa = function(a) {
            a = a || {};
            a = a.e3;
            var b;
            b = "" + ('<div class="rp-error valign-container"><div class="valign-item"><div class="rp-error-icon">' + N('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>') +
                "</div>");
            a || (b += '<div class="rp-error-title">No suggestions</div>');
            return N(b + '<div class="rp-error-message">Rooms could not be loaded.</div><div class="rp-error-action" tabindex="0" aria-role="button">Try again</div></div></div>')
        },
        ELa = function(a, b, c) {
            b = "";
            a = a.K4;
            for (var d = a.length, e = 0; e < d; e++) {
                var f = a[e];
                b += BLa({
                    ag: Ug(f, 1, ""),
                    name: f.getName()
                }, c)
            }
            return N(b)
        },
        BLa = function(a, b) {
            var c, d = a.ag,
                e = a.name,
                f = a.Xs,
                g = a.Z2,
                k;
            k = R("Toggle resource hierarchy " + ("" + e + " expanded."));
            d = "" + ('<li class="rp-node ' +
                P(null == (c = f) ? "" : c) + '" data-node-id="' + P(null == (c = d) ? "" : c) + '">');
            g || (d += '<div class="rp-node-header" tabindex="0" aria-role="button" aria-label="' + P(k) + '"><span class="rp-node-name">', d = e ? d + O(e) : d + "Other", d += '</span><span class="rp-expand-icon">' + RKa(0, 0, b) + "</span></div>");
            d += '<div class="rp-node-spinner">' + LQ() + '</div><div class="rp-node-results"><ul class="rp-node-rooms"></ul><ul class="rp-node-subnodes"></ul><div class="rp-node-no-results-message">No rooms available</div></div></li>';
            return N(d)
        },
        FLa = function(a, b, c) {
            b = a.S7;
            var d = a.Wu;
            a = a.R7;
            for (var e = "", f = b.length, g = 0; g < f; g++) {
                var k, l = b[g];
                k = c;
                var l = l && l.cC || l,
                    m = a;
                k = N('<li id="' + P(l.getEmail()) + '" class="rp-room' + (Ug(l, 4, !1) ? "" : " unavailable") + (Ug(l, 5, !1) ? " selected" : "") + (Ug(l, 8, !1) ? " hidden" : "") + '" tabindex="0" data-email="' + P(l.getEmail()) + '" data-srid="' + P(Ug(l, 6, "")) + '" >' + ("room-list-added" == m ? '<span class="rp-room-icon">' + WKa() + "</span>" : "room-list-suggested" == m ? '<span class="rp-room-icon rp-room-icon-blue">' + uR(0, 0, k) + "</span>" : '<span class="rp-room-icon">' +
                    uR(0, 0, k) + "</span>") + '<span class="rp-room-name" title="' + P(l.getName()) + '">' + O(l.getName()) + "</span>" + (Ug(l, 7, !1) ? '<span class="rp-remove-icon" tabindex="0" aria-role="button">' + SKa(0, 0, k) + "</span>" : "") + (Ug(l, 8, !1) ? '<span class="rp-visibility-icon">' + YKa(0, 0, k) + "</span>" : "") + "</li>");
                e += k
            }
            d && (e += '<li class="rp-load-more-rooms" data-page-token="' + P(d) + '">Load more</li>');
            return N(e)
        };
    var OR = function(a, b, c) {
        x.call(this);
        this.b = null != c ? p(a, c) : a;
        this.H = b;
        this.ke = p(this.T, this);
        this.Gb = null;
        this.o = []
    };
    v(OR, x);
    OR.prototype.R = function(a) {
        this.stop();
        this.o = arguments;
        this.Gb = wi(this.ke, this.H)
    };
    OR.prototype.stop = function() {
        this.Gb && (xi(this.Gb), this.Gb = null);
        this.o = []
    };
    OR.prototype.wa = function() {
        this.stop();
        OR.qa.wa.call(this)
    };
    OR.prototype.T = function() {
        this.Gb = null;
        this.b.apply(null, this.o)
    };
    var PR = function(a, b) {
        S.call(this);
        this.R = new OR(this.S, 200, this);
        this.o = !1;
        this.U = b
    };
    v(PR, S);
    var GLa = new Ea("Xa"),
        HLa = new Ea("Ya"),
        ILa = function(a, b, c) {
            this.query = a;
            this.Pc = b;
            this.Yf = c
        };
    PR.prototype.Ma = function() {
        PR.qa.Ma.call(this);
        XE(this, this.U ? "rp-recurring-event-radio-true" : "rp-recurring-event-radio-false").checked = !0;
        var a = XE(this, "rp-query-input");
        T(this).ka(new DM(a), "input", p(this.R.R, this.R)).ka(XE(this, "rp-availability-select"), "change", this.V).ka(this.ha(), "change", NR("rp-recurring-event-radio", this.H, this))
    };
    var QR = function(a) {
        var b = XE(a, "rp-query-input"),
            b = St(b),
            c = XE(a, "rp-availability-select"),
            c = "available" == St(c);
        a.o ? (a = yJa(), a = !!parseInt(a, 10)) : a = !1;
        return new ILa(b, c, a)
    };
    PR.prototype.S = function() {
        this.ya(GLa)
    };
    PR.prototype.H = function() {
        this.ya(HLa)
    };
    PR.prototype.V = function() {
        RR(this);
        this.H()
    };
    var RR = function(a) {
        var b = XE(a, "rp-availability-select"),
            b = "available" == St(b),
            b = a.o && b;
        H(XE(a, "rp-recurring-event-options"), b)
    };
    PR.prototype.focus = function() {
        XE(this, "rp-query-input").focus()
    };
    var SR = function(a, b) {
        S.call(this);
        this.Bj = a;
        this.H = b
    };
    v(SR, S);
    var TR = new Ea("Za"),
        JLa = new Ea("$a"),
        KLa = function(a, b, c) {
            D.call(this, TR);
            this.email = a;
            this.name = b;
            this.o = c
        };
    v(KLa, D);
    var LLa = function(a) {
        D.call(this, JLa);
        this.email = a
    };
    v(LLa, D);
    SR.prototype.Ma = function() {
        SR.qa.Ma.call(this);
        xv(xv(T(this), this.ha(), HB, NR("rp-remove-icon", this.V, this)), this.ha(), HB, NR("rp-room", this.ma, this)).ka(this.H, "m", this.ta)
    };
    var UR = function(a, b, c, d) {
        bF(a.Bj, b, FLa, {
            S7: pP(c),
            Wu: Ug(c, 2, ""),
            R7: d
        })
    };
    SR.prototype.ma = function(a) {
        var b = a.currentTarget;
        a = yt(b, "email");
        var c = yt(b, "srid"),
            b = Vv(b);
        this.ya(new KLa(a, b, c))
    };
    SR.prototype.V = function(a) {
        a = jx(a.currentTarget, "rp-room");
        a = yt(a, "email");
        this.ya(new LLa(a))
    };
    SR.prototype.ta = function(a) {
        C(Tl(a, "k"), function(a) {
            a.Rc() && MLa(this, a, !0)
        }, this);
        C(Tl(a, "l"), function(a) {
            a.Rc() && MLa(this, a, !1)
        }, this)
    };
    var MLa = function(a, b, c) {
        b = '.rp-room[data-email="' + b.email + '"]';
        (a = a.ha().querySelector(b)) && Ic(a, "selected", c)
    };
    var VR = function(a, b) {
        SR.call(this, a, b.b);
        this.o = b
    };
    v(VR, SR);
    VR.prototype.Ma = function() {
        VR.qa.Ma.call(this);
        xv(T(this).ka(this.H, "m", this.R), XE(this, "rp-added-toggle"), HB, this.U);
        H(XE(this, "rp-added-toggle"), !1);
        this.R()
    };
    VR.prototype.R = function() {
        var a = this.H.S();
        if (a.length) {
            var b = XE(this, "rp-added-toggle"),
                c = 3 < a.length;
            tf(b) && c || Ic(this.ha(), "rp-added-truncated", c);
            H(b, c);
            b = XE(this, "rp-added-rooms");
            c = new SO;
            RO(c, Tb(a, this.S, this));
            UR(this, b, c, "room-list-added")
        }
        H(this.ha(), !!a.length)
    };
    VR.prototype.U = function() {
        var a = this.ha(),
            b = !Ec(a, "rp-added-truncated");
        Ic(a, "rp-added-truncated", b)
    };
    VR.prototype.S = function(a) {
        var b = new TO;
        Vg(b, 1, a.email);
        Vg(b, 2, a.displayName);
        var c = this.o.Fa || this.o.R.Fb(a.email);
        Vg(b, 7, c);
        a = !this.o.b.qb(a.email);
        Vg(b, 8, a);
        Vg(b, 4, !0);
        return b
    };
    var WR = function(a, b) {
        SR.call(this, a, b)
    };
    v(WR, SR);
    var NLa = new Ea("ab"),
        OLa = new Ea("bb"),
        XR = function(a) {
            D.call(this, NLa);
            this.ag = a
        };
    v(XR, D);
    var PLa = function(a, b) {
        D.call(this, OLa);
        this.ag = a;
        this.Wu = b
    };
    v(PLa, D);
    WR.prototype.Ma = function() {
        WR.qa.Ma.call(this);
        xv(xv(xv(T(this), this.ha(), HB, NR("rp-node-header", this.R, this)), this.ha(), HB, NR("rp-load-more-rooms", this.S, this)), this.ha(), HB, NR("rp-error-action", this.o, this));
        H(XE(this, "rp-node-results"), !1);
        H(XE(this, "rp-node-spinner"), !1)
    };
    var QLa = function(a, b) {
            var c = XE(a, "rp-node-subnodes");
            bF(a.Bj, c, ELa, {
                K4: EP(b)
            });
            c = a.Ea ? Qu("rp-node", a.Ea || a.b.o) : [];
            C(c, function(a) {
                YR(a, !1, !1, !1)
            }, a)
        },
        ZR = function(a, b, c) {
            var d;
            b && (d = RLa(a, b));
            d || (d = XE(a, "rp-node-all-rooms"));
            b = ge("rp-node-rooms", d);
            UR(a, b, c, "room-list-directory");
            H(ge("rp-node-no-results-message", d), !pP(c).length);
            for (c = d; c && xe(a.ha(), c);) YR(c, !0, !1, !1), c = jx(c.parentNode, "rp-node")
        },
        SLa = function(a, b, c) {
            b && pP(b) && pP(b).length ? ZR(a, null, b) : (QLa(a, c), C(EP(c), function(a) {
                var b = Wg(a, SO,
                    3);
                b && ZR(this, Ug(a, 1, ""), b)
            }, a))
        };
    WR.prototype.o = function(a) {
        a = jx(a.currentTarget, "rp-node");
        YR(a, !1, !0, !1);
        a = yt(a, "nodeId");
        this.ya(new XR(a))
    };
    WR.prototype.R = function(a) {
        a = jx(a.currentTarget, "rp-node");
        var b = yt(a, "nodeId");
        if (b) {
            var c = !Ec(a, "expanded"),
                d;
            d = ge("rp-room", a);
            var e = ge("rp-node", a);
            d = !!d || !!e;
            e = c && !d;
            YR(a, c && d, e, !1);
            e && this.ya(new XR(b));
            kB([c ? "Resource hierarchy expanded" : "Resource hierarchy collapsed"], void 0)
        }
    };
    WR.prototype.S = function(a) {
        var b = a.currentTarget;
        a = yt(b, "pageToken");
        b = jx(b, "rp-node");
        b = yt(b, "nodeId") || null;
        this.ya(new PLa(b, a))
    };
    var YR = function(a, b, c, d) {
            var e = ge("rp-error", a);
            e && H(e, d);
            H(ge("rp-node-results", a), b);
            H(ge("rp-node-spinner", a), c);
            Ic(a, "expanded", d || b || c)
        },
        RLa = function(a, b) {
            var c = '.rp-node[data-node-id="' + b + '"]';
            return a.ha().querySelector(c)
        };
    var TLa = function(a, b) {
        SR.call(this, a, b)
    };
    v(TLa, SR);
    var $R = function(a, b) {
        var c = XE(a, "rp-suggested-rooms");
        UR(a, c, b, "room-list-suggested")
    };
    var aS = function(a, b, c, d) {
        S.call(this);
        this.Sb = a;
        this.S = b;
        this.o = c;
        this.Fa = K(this.Sb, hj);
        this.R = new PR(0, b.Fb());
        this.Ua(this.R);
        this.ua = new VR(this.Fa, b.R);
        this.Ua(this.ua);
        this.V = new TLa(this.Fa, b.o);
        this.Ua(this.V);
        this.H = new WR(this.Fa, b.o);
        this.Ua(this.H);
        this.La = this.yb = this.ma = this.ta = this.Ra = this.Mb = this.Na = null;
        this.Db = !1;
        this.Sa = !d;
        (this.Ba = d ? new vR : null) && this.Ua(this.Ba)
    };
    v(aS, S);
    var ULa = {
        B$: "rp-added",
        iC: "rp-fat-btn",
        Yda: "rp-directory",
        lfa: "rp-filter",
        Pia: "rp-no-results-message",
        eka: "rp-picker",
        Ama: "rp-show-all-rooms",
        Qma: "rp-spinner",
        Pw: "rp-suggestions",
        ERROR: "rp-error",
        Jea: "rp-error-action",
        Wla: "rp-results"
    };
    aS.prototype.Xa = function() {
        this.Ea = cF(this.Fa, DLa, {
            Ub: ULa
        });
        this.Na = XE(this, "rp-results");
        this.Mb = XE(this, "rp-spinner");
        this.Ra = XE(this, "rp-suggestions");
        this.ta = XE(this, "rp-show-all-rooms");
        this.ma = XE(this, "rp-directory");
        this.yb = XE(this, "rp-no-results-message");
        this.La = XE(this, "rp-error");
        $x(this.R, XE(this, "rp-filter"));
        $x(this.ua, XE(this, "rp-added"));
        $x(this.V, this.Ra);
        $x(this.H, this.ma);
        if (this.Ba) {
            var a = XE(this, "rp-fat-btn");
            this.Ba.render(a)
        }
    };
    aS.prototype.Ma = function() {
        aS.qa.Ma.call(this);
        xv(xv(T(this).ka(this.o, gB, this.U5).ka(this.o, hB, this.Ib).ka(this.o, iB, this.e6).ka(this.o, pta, this.Ib).ka(this.o, kta, this.E5).ka(this.o, lta, this.z5).ka(this.o, nta, this.T5).ka(this.S.o, "m", this.A5).ka(this.S.b, "change", this.N5).ka(this.R, GLa, this.V5).ka(this.R, HLa, this.x5).ka(this.V, TR, r(this.uK, !0)).ka(this.H, NLa, this.l5).ka(this.H, OLa, this.m5).ka(this.H, TR, r(this.uK, !1)).ka(this.ua, TR, this.X4).ka(this.ua, JLa, this.Q5), this.ta, HB, this.Va), XE(this, "rp-error-action"),
            HB, this.U);
        var a = this.S.S;
        a && !this.Sa && T(this).ka(a, "change", this.P5);
        var a = this.R,
            b = this.S.Yf();
        a.o = b;
        a.kb && RR(a);
        H(this.ma, !1);
        H(this.ta, !1);
        this.U()
    };
    aS.prototype.Va = function() {
        this.Db = !0;
        H(this.ta, !1);
        H(this.ma, !0)
    };
    aS.prototype.U = function() {
        H(this.Na, !0);
        H(this.La, !1);
        bS(this, 0, !1, !0);
        var a = QR(this.R);
        a.query ? sIa(this.o, a.query) : nQ(this.o)
    };
    var VLa = function(a) {
        var b = QR(a.R);
        a.o.S.o(b.query)
    };
    h = aS.prototype;
    h.V5 = function() {
        this.U();
        this.o.nb(UO.Nw)
    };
    h.x5 = function() {
        var a = QR(this.R),
            b = this.o.o;
        b.o = a.Yf;
        b.b = a.Pc;
        this.U();
        this.o.nb(UO.Kw)
    };
    h.uK = function(a, b) {
        var c = new WM(b.email, 0, b.name, void 0, void 0, 103);
        this.S.o.add(c);
        var c = b.o,
            d = new AQ;
        d.H = b.email;
        d.V = a;
        d.ma = c;
        this.o.nb(UO.Jw, d)
    };
    h.X4 = function(a) {
        var b = this.S.o;
        a = a.email;
        b.setVisible(a, !b.qb(a))
    };
    h.Q5 = function(a) {
        this.S.o.remove(a.email);
        this.ya(new tR(a.email))
    };
    h.l5 = function(a) {
        mQ(this.o, a.ag)
    };
    h.m5 = function(a) {
        a.ag ? mQ(this.o, a.ag, a.Wu) : nQ(this.o, a.Wu)
    };
    h.U5 = function() {
        var a = this.o.b.T;
        $R(this.V, a);
        var b = this.o.b.R,
            c = this.o.b.H,
            d = EP(b);
        1 == d.length ? mQ(this.o, Ug(d[0], 1, "")) : QLa(this.H, b);
        ZR(this.H, null, c);
        a = pP(a).length;
        c = !!d.length || !!pP(c).length;
        bS(this, a, c, !1);
        b = !EP(b).length;
        this.ya(new JQ(0 < a, c, b))
    };
    h.e6 = function() {
        var a = this.o.b.T;
        $R(this.V, a);
        a = pP(a).length;
        this.ya(new JQ(0 < a, !1, !1))
    };
    h.E5 = function(a) {
        ZR(this.H, a.ag, Wg(this.o.b.b[a.ag], SO, 3));
        var b = new AQ;
        b.S = a.ag;
        this.o.nb(UO.Bw, b)
    };
    h.z5 = function(a) {
        var b = this.H;
        if (a = RLa(b, a.ag)) {
            var c = ge("rp-error", a);
            c || (c = cF(b.Bj, CLa, {
                e3: !0
            }), a.appendChild(c));
            YR(a, !1, !1, !0)
        }
    };
    h.T5 = function() {
        var a = this.o.b.T;
        $R(this.V, a);
        var b = this.o.b.H,
            c = this.o.b.S;
        SLa(this.H, b, c);
        a = pP(a).length;
        b = !!pP(b).length || !!EP(c).length;
        bS(this, a, b, !1);
        this.Va();
        c = !EP(c).length;
        this.ya(new JQ(0 < a, b, c))
    };
    h.N5 = function() {
        this.U()
    };
    h.A5 = function(a) {
        FF(a.o, function(a, c) {
            return "k" == c || "l" == c
        }) && VLa(this)
    };
    h.P5 = function() {
        var a = this.R,
            b = this.S.Yf();
        a.o = b;
        a.kb && RR(a);
        this.U()
    };
    var bS = function(a, b, c, d) {
        H(a.Ra, 0 < b);
        H(a.Mb, d);
        a.Sa && !a.Db && (3 <= b || d) ? H(a.ta, c) : H(a.ma, c);
        d = !b && !c && !d;
        H(a.yb, d);
        b || c ? kB(["Room results updated"], 0) : d && kB(["No room results found"], 0)
    };
    aS.prototype.Ib = function() {
        H(this.Na, !1);
        H(this.La, !0)
    };
    var cS = function(a, b, c) {
        this.R = a;
        this.H = b;
        this.T = c
    };
    cS.prototype.o = null;
    cS.prototype.getName = function() {
        return this.o.getName()
    };
    cS.prototype.b = function() {
        return this.o.b()
    };
    var WLa = function(a, b) {
        this.b = a;
        this.o = b
    };
    WLa.prototype.H = function(a, b, c) {
        var d = c.rb();
        if (d = Ln(this.b, d))
            if (d = d.getEmail(), a = a[d], b = b[d])
                for (var d = Cn(c), e = 0; e < d.length; e++) {
                    var f = Ln(this.b, d[e]);
                    if (f && 103 == f.zc()) {
                        var f = f.getEmail(),
                            g = a,
                            k = b,
                            l = En(c, 2097152) ? 1 : .5;
                        f in g ? (f = g[f], f.H += l) : (l = new cS(f, l, []), g[f] = l, k.push(l))
                    }
                }
    };
    var YLa = function(a, b, c) {
            b = 0 < b.length && !b[0].Eg ? [] : XLa(b, a);
            !c || 0 < c.length && !c[0].Eg || (a = XLa(c, a), fc(b, a));
            a = {};
            for (var d = c = 0; d < b.length;) {
                var e = b[d++],
                    f = e.Eg.o.email;
                a[f] || (a[f] = 1, b[c++] = e)
            }
            b.length = c;
            return b
        },
        XLa = function(a, b) {
            var c = ec(a);
            c.sort(r(ZLa, b.toLowerCase()));
            return c
        },
        ZLa = function(a, b, c) {
            b = b.Eg;
            c = c.Eg;
            var d = $La(a, b);
            a = $La(a, c);
            if (d < a) return 1;
            if (a < d) return -1;
            a = b.H;
            d = c.H;
            if (a < d) return 1;
            if (d < a) return -1;
            b = b.b();
            c = c.b();
            return b.localeCompare(c)
        },
        $La = function(a, b) {
            for (var c = b.T, d = 0; d < c.length; d++)
                if (c[d].toLowerCase() == a) return d;
            return -1
        };
    var eS = function(a, b, c, d, e, f, g) {
        J.call(this);
        this.ua = a;
        this.ta = b;
        this.ma = c;
        this.Ra = d;
        this.Mf = e;
        this.Ca = g;
        b = a.b;
        b || (this.S = !0);
        this.Ba = b;
        b = CN(a);
        b || (this.S = !0);
        this.V = b;
        this.qp = b.get();
        this.Ds = aMa(this);
        this.H = "";
        this.S || (this.o = new I(this), this.o.ka(this.Ba, "change", this.La), this.o.ka(this.V, "change", this.Oa), this.o.ka(a.o, "change", this.Fa), a.Fb() || a.o.isEmpty() || dS(this))
    };
    v(eS, J);
    var cMa = function(a, b, c) {
            var d = Zj(a),
                e = qw(a),
                f;
            if (d.isEnabled(26) && e.R()) {
                f = bm.va();
                var e = cN(),
                    d = Gg(a, 5),
                    g = hh(a).o.getEmail();
                a = K(a, pj);
                f = new eS(b, g, f, e, new WLa(d, a), 0, c);
                bMa(f, b, d)
            }
            return f || null
        },
        bMa = function(a, b, c) {
            var d = hh(M()).T.sd();
            b = Sb(d, r(dMa, b));
            b = Tb(b, function(a) {
                return Ln(c, a.getId()).getEmail()
            });
            eMa(a, b)
        },
        dMa = function(a, b) {
            var c = a.T.b.get(),
                d = a.V,
                d = 3 == d || 2 == d;
            return c == b.getId() || d && b.qc()
        };
    eS.prototype.wa = function() {
        eS.qa.wa.call(this);
        y(this.o)
    };
    var fS = function(a, b) {
            return !mc(b, a.b, function(a, b) {
                return a.Pj.toString() == b.Pj.toString()
            })
        },
        aMa = function(a) {
            var b = a.ua.Ba,
                c, d;
            b && (c = b.Se(), d = QP(b));
            if (c) return c.getName();
            if (d) return d.getName();
            if (b = dm(a.ma, a.qp))
                if (b = a.ma.get(b)) return b.tz;
            return a.Ra
        };
    eS.prototype.La = function() {
        var a = aMa(this);
        a != this.Ds && fMa(this, function() {
            this.Ds = a
        })
    };
    eS.prototype.Oa = function() {
        var a = this.V.get();
        a != this.qp && fMa(this, function() {
            this.qp = a
        })
    };
    var fMa = function(a, b) {
        var c = a.b;
        b.call(a);
        gS(a, a.H);
        fS(a, c) && (a.U && dS(a), a.ya("change"))
    };
    eS.prototype.Fa = function() {
        dS(this)
    };
    eS.prototype.Na = function(a) {
        if (this.T)
            for (var b in a) this.T[b] = a[b];
        else this.T = a;
        this.R = !0;
        a = this.b;
        this.U && dS(this);
        gS(this, this.H);
        fS(this, a) && this.ya("change")
    };
    var eMa = function(a, b) {
            a.R = !1;
            for (var c = p(a.Na, a), d = a.Mf, e = {}, f = {}, g = 0; g < b.length; g++) e[b[g]] = {}, f[b[g]] = [];
            d.o.forEach(p(d.H, d, e, f));
            c(f)
        },
        dS = function(a) {
            var b;
            a.U ? (b = a.b, gS(a, a.H), b = fS(a, b)) : b = a.U = !0;
            b && a.R && a.ya("cb")
        },
        gS = function(a, b) {
            if (a.S || !a.R) return [];
            a.H = b;
            var c = a.ta != a.qp,
                d = gMa(a, a.T[a.qp] || []).filter(b);
            c ? (c = gMa(a, a.T[a.ta] || []).filter(b), d = YLa(a.Ds, d, c)) : d = YLa(a.Ds, d);
            return a.b = d
        },
        gMa = function(a, b) {
            var c = new kR(nR, 100);
            if (a.Ca.o)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d],
                        f;
                    if (f = (f = e.R) ? a.Ca.H[f] : null) e.o = f, c.add(e)
                }
            return c
        };
    var iMa = function(a) {
        Sg(this, a, hMa)
    };
    v(iMa, Pg);
    var hMa = [1],
        hS = function(a) {
            Sg(this, a, null)
        };
    v(hS, Pg);
    hS.prototype.getEmail = function() {
        return Tg(this, 1)
    };
    hS.prototype.hj = function() {
        return null != Tg(this, 1)
    };
    var iS = function(a, b, c) {
        x.call(this);
        this.ke = a;
        this.T = b;
        this.H = c || 0;
        this.b = [];
        this.o = {}
    };
    v(iS, x);
    var jMa = function(a, b, c) {
        this.o = a;
        this.Bg = b;
        this.b = c
    };
    iS.prototype.S = function(a, b, c, d) {
        rk(b, c + "_request");
        var e = null,
            f = d.getStatus(),
            g = d.Gl() || "";
        if (200 == f) try {
            if (g) {
                var g = g.replace($i, ""),
                    k = Pa(g);
                na(k) && (e = new iMa(k));
                rk(b, c + "_parse")
            }
        } catch (l) {
            throw l;
        }
        this.ke(a, d, e);
        rk(b, c + "_process");
        this.R(d);
        b.b(c)
    };
    iS.prototype.R = function(a) {
        a.Pa();
        cc(this.b, a);
        this.b.length || (this.o = {})
    };
    var kMa = function(a, b) {
        if (!a.b.length) return b;
        var c = a.o;
        return Sb(b, function(a) {
            return !c[a]
        })
    };
    iS.prototype.abort = function() {
        for (var a = 0; a < this.b.length; ++a) this.b[a].Pa();
        this.b = [];
        this.o = {}
    };
    iS.prototype.wa = function() {
        this.abort()
    };
    var lMa = function(a) {
        var b = qk();
        bj(M()).send("resources", [], 0, function(c) {
            rk(b, "fetch_resource_request");
            rk(b, "fetch_resource_parse");
            a(c);
            rk(b, "fetch_resource_process");
            b.b("fetch_resource")
        })
    };
    var mMa = function(a, b, c) {
            c = c || {};
            b = a.uA;
            var d = !!a.W2;
            a = !!a.Yf;
            return N('<table cellpadding=0 cellspacing=0 width="100%"><tr><td width="100%"><div class="textbox-fill-wrapper"><div class="textbox-fill-mid"><input class="textbox-fill-input" type=text id="' + P(b) + '-conf-input"></div></div></td></tr></table><div><label class=ep-gp-smalltext><input class=ep-gp-conf-checkbox type=checkbox id=' + hn(b) + "-conf-hide-conflicts" + (d ? ' checked="checked"' : "") + ">" + O("Show only available") + '</label></div><div class="ep-gp-conf-inst ep-gp-smalltext" id=' +
                hn(b) + "-conf-inst" + (a ? "" : ' style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display:none"') + ">" + O("Check availability for:") + "<br><label class=ep-gp-conf-label-1><input class=ep-gp-conf-radio type=radio id=" + hn(b) + "-conf-inst-1 name=ep-gp-conf value=1>" + O("This instance only") + "</label><label class=ep-gp-conf-label-15><input class=ep-gp-conf-radio type=radio id=" + hn(b) + "-conf-inst-15 name=ep-gp-conf value=15 checked>" + O("Next 15 instances") + '</label></div><div class=conf-list-wrapper><div class=conf-list><table width="100%" cellpadding=0 cellspacing=0><tr><td id="' +
                P(b) + '-conflist"></td></tr></table></div></div><div class="conf-close"><span id="' + P(b) + '-close" class="ui-ltsr-unselected" role="button" tabindex="0">' + O("Close") + "</span></div>")
        },
        nMa = function(a) {
            var b = a.Q2,
                c = a.yq,
                d = a.id,
                e = a.Oc;
            return N('<div class="' + P(a.P2) + '"><div class="' + P(b) + '"></div><div class=' + hn(c) + " id=" + hn(d) + ">" + O(e) + "</div></div>")
        },
        oMa = function(a) {
            var b;
            b = b || {};
            var c = a.uA,
                d = a.index,
                e = a.className,
                f = a.j3,
                g = !!a.qb,
                k = a.type,
                l = a.email,
                m = a.action;
            a = a.name;
            return N('<div id="' + P(c) + "-i" +
                P(d) + '" class="' + P(e) + '" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "background-image:url(/calendar/" + P(f) + ");" + (g ? "" : "display:none") + '"><span id="' + P(c) + "-" + P(k) + "-" + P(l) + '" class="conf-action conf-action-link">' + O(m) + "</span>" + O(a) + "</div>")
        },
        pMa = function() {
            return N('<div class="conf-info-popup"><iframe height=200 width=400 frameborder=0></iframe></div>')
        },
        qMa = function(a) {
            var b = a.items;
            a = a.sV;
            a = '<div class=fur><div class="ch ch-fur">' + O("Frequently Used") + O(null == a ? "" : a) + "</div>";
            for (var c = b.length, d = 0; d < c; d++) a += O(b[d]);
            a += (b.length ? "" : '<div class="ci ci-fur">' + O("None available") + "</div>") + "</div>";
            return N(a)
        };
    var jS = function(a, b, c, d, e, f, g, k, l) {
        S.call(this);
        this.Ra = M();
        this.vc = rMa;
        this.R = a;
        this.$f = !!c;
        this.Ki = e || "";
        this.Sb = "";
        this.Qj = [];
        this.o = {};
        this.La = {};
        this.ma = new sC("Filter room");
        this.Zb = b;
        this.Ba = f;
        (this.ua = g) && T(this).ka(g, "m", this.TP);
        a = 10;
        window && window.location && (b = new sm(window.location), b = Number(sG(b, "availability_batch_count")), 0 < b && (a = b));
        (this.V = k || null) && T(this).ka(this.V, "cb", this.Hi);
        this.kd = {};
        this.Mb = l || new iS(p(this.I1, this), jh(this.Ra).yd(), a);
        this.Dc = !1;
        this.Ib = [];
        this.Ib.push(G(this.Zb,
            "change", p(this.hd, this)));
        this.Ba && this.Ib.push(G(this.Ba, "change", p(this.hd, this)));
        this.$b = new Jq(this.vc.rN);
        this.Sa = this.S = null
    };
    v(jS, S);
    jS.prototype.H = "";
    jS.prototype.gu = !0;
    jS.prototype.wc = !1;
    var rMa = {
        GO: "ch-row",
        rN: "ch-cr",
        Aw: "ch",
        BC: "ch-zippy",
        HO: "ch-zippy-exp",
        Ur: "ci",
        Dw: "ci-selected",
        oO: "ci-fur",
        Vk: "conf-picker"
    };
    jS.prototype.wa = function() {
        for (var a = 0; a < this.Ib.length; ++a) cf(this.Ib[a]);
        window.clearTimeout(this.ta);
        y(this.yb);
        y(this.Fa);
        y(this.U);
        y(this.ma);
        y(this.Mb);
        jS.qa.wa.call(this)
    };
    var sMa = function() {
        LB(this.Va, p(this.xF, this), p(this.SP, this));
        MB(this.Va, p(this.xF, this), p(this.f0, this), p(this.g0, this))
    };
    jS.prototype.Ma = function() {
        jS.qa.Ma.call(this);
        var a = this.b,
            b = T(this),
            c = kS(this);
        $x(this.ma, c);
        this.sc = new DM(c);
        b.ka(this.sc, "input", this.m0);
        b.ka(c, "keydown", this.n0);
        this.Va = new IB(this.ha());
        LB(this.Va, p(this.vV, this), p(this.lI, this));
        this.Fi();
        c = a.ha(this.getId() + "-conflist");
        tMa(this, c, this.R.filter(""), !1);
        lS(this);
        b.ka(this.R, "Sa", this.WC);
        this.V && b.ka(this.V, "change", this.WC);
        c = a.ha(this.getId() + "-conf-hide-conflicts");
        b.ka(c, "click", this.Cg);
        this.Je = a.ha(this.getId() + "-conf-inst");
        b.ka(a.ha(this.getId() +
            "-conf-inst-1"), "change", this.tf);
        b.ka(a.ha(this.getId() + "-conf-inst-15"), "change", this.tf);
        if (a = a.ha(this.getId() + "-close")) H(a, this.$f), xv(b, a, HB, this.I_);
        this.Dc && this.hd();
        T(this).ka(new ew(this.ha()), "key", this.H0)
    };
    var uMa = function(a) {
            var b = ve(a);
            return b ? b.id : a.id
        },
        tMa = function(a, b, c, d) {
            var e = !1,
                f = void 0;
            (e = Pq(a.$b)) && (f = uMa(a.$b.Re()));
            Im(b, vMa(a, c, d));
            var g = a.vc;
            b = lx(b, function(a) {
                return we(a) && (Ec(a, g.Aw) || Ec(a, g.Ur))
            });
            Mq(a.$b, b);
            b.length && (b = p(function(a) {
                return uMa(a) == f
            }, a), Oq(a.$b, b, a.ou), e && a.$b.focus())
        };
    jS.prototype.Jb = function() {
        jS.qa.Jb.call(this);
        this.ma && this.ma.kb && this.ma.Jb();
        y(this.Va);
        this.Va = null;
        y(this.sc);
        this.sc = null
    };
    jS.prototype.hd = function() {
        if (this.kb) {
            this.Dc = !1;
            var a = mS(this);
            this.Je && H(this.Je, a);
            wMa(this);
            lS(this)
        } else this.Dc = !0
    };
    var mS = function(a) {
        return (a = a.Ba) ? a.R.get() : !1
    };
    jS.prototype.Cg = function() {
        this.kb && (this.gu = !!this.b.ha(this.getId() + "-conf-hide-conflicts").checked, nS(this))
    };
    jS.prototype.tf = function(a) {
        if (this.kb && (a = 1 == a.target.value, this.wc != a)) {
            if (this.wc = a)
                for (var b in this.o)(a = this.o[b]) && 1 > a.status && delete this.o[b];
            else this.o = {};
            nS(this)
        }
    };
    var wMa = function(a) {
            xMa(a, function(a, c) {
                a.status = 0;
                c && (c.style.backgroundImage = "url(/calendar/images/res_n.gif)")
            })
        },
        oS = function(a, b, c) {
            if (b)
                for (var d = 0; d < b.b.length; d++) {
                    var e = b.b[d],
                        f = a.b.ha(a.getId() + "-i" + e);
                    c.call(a, e, f)
                }
        },
        xMa = function(a, b) {
            for (var c in a.o) {
                var d = a.o[c];
                oS(a, d, function(a, c) {
                    b(d, c || null)
                })
            }
        },
        zMa = function(a, b, c) {
            var d = a.o[b];
            d || (d = a.o[b] = new yMa);
            d.status = c ? 1 : -1;
            oS(a, d, function(a, d) {
                if (this.Qj[a] == b && d) {
                    var e = c ? "images/res_a.gif" : "images/res_u.gif",
                        e = "url(/calendar/" + e + ")";
                    d.style.backgroundImage !=
                        e && (d.style.backgroundImage = e);
                    e = c || !this.gu;
                    H(d, e);
                    e || d != this.$b.Re() || Jka(this.$b, this.ou)
                }
            })
        },
        lS = function(a, b, c) {
            if (a.S && c) sIa(a.S, c);
            else if (a.S && (G(a.S, gB, p(a.ih, a)), nQ(a.S), a.Sa))
                for (var d in a.La) a.La[d] && a.Sa[d] && mQ(a.S, a.Sa[d]);
            c = kMa(a.Mb, AMa(a));
            c.length && (b || (a.Na = qk()), a.ta && window.clearTimeout(a.ta), b = c.length, d = 100, 10 < b && (d = Math.min(1E3, 100 + 900 * (b - 10) / 40)), 20 < b && n(a.H) && 5 > a.H.length && (d += 100 * (5 - a.H.length)), mS(a) && (d *= 1.5), b = d, c = p(a.$d, a, c), a.ta = window.setTimeout(c, b))
        };
    jS.prototype.ih = function() {
        var a = this.S.b.R;
        if (a) {
            this.Sa = {};
            for (var a = EP(a), b = 0; b < a.length; b++) {
                var c = a[b];
                this.Sa[c.getName()] = Ug(c, 1, "")
            }
        }
    };
    jS.prototype.Hi = function() {
        var a = gS(this.V, this.H),
            a = Tb(hc(a, 0, 10), function(a) {
                return a.Eg.R
            });
        this.$d(a)
    };
    jS.prototype.$d = function(a) {
        delete this.ta;
        a = a || AMa(this);
        if (a.length) {
            var b = this.Mb,
                c = oy(this.Zb),
                d = BMa(this);
            b.abort();
            b.o = gb(a);
            for (var e = 0; e < a.length;) {
                for (var f = b.H ? Math.min(a.length, e + b.H) : a.length, g = b, e = new jMa(a.slice(e, f), c, d), k = e.o, l = qk(), m = 10 * Math.floor(k.length / 10), m = "fetch_resource_availability_" + (m + "_" + (m + 9)), q = new zm, u = 0, w = k.length; u < w; ++u) q.add("lefP", k[u]);
                (k = e.b) && q.add("recur", k);
                k = e.Bg;
                q.add("stim", k.start.tb());
                q.add("etim", k.end.tb());
                q.add("ctz", g.T);
                k = new Hi;
                g.b.push(k);
                G(k,
                    "success", p(g.S, g, e, l, m, k));
                G(k, ["error", "timeout", "abort"], p(g.R, g, k));
                k.send("resavail", "POST", q.toString());
                e = f
            }
        }
    };
    var AMa = function(a) {
            if (0 == a.Qj.length) return [];
            for (var b = [], c = {}, d = 0; d < a.Qj.length; ++d) {
                var e = a.Qj[d],
                    f = a.o[e];
                f && f.status || e in c || (c[e] = !0, b.push(e))
            }
            return b
        },
        BMa = function(a) {
            return a.wc ? "" : a.Ba ? a.Ba.R.get() ? a.Ba.Mh() : "" : a.Ki
        };
    h = jS.prototype;
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        var a = this.b.b("DIV", {
            "class": this.vc.Vk
        });
        this.Ea = a;
        Km(a, mMa, {
            uA: this.getId(),
            W2: this.gu,
            Yf: mS(this)
        })
    };
    h.m0 = function() {
        var a = this.ma.lb(),
            b = nR(this.H),
            c = nR(a),
            b = c && this.H != a || !c && b;
        this.H = a;
        b && (a = this.b.ha(this.getId() + "-conflist"), 0 != a.scrollTop && (a.scrollTop = 0), nS(this, !1, this.H))
    };
    h.n0 = function(a) {
        a = a.keyCode;
        13 != a && 3 != a || !this.ta || (window.clearTimeout(this.ta), delete this.ta, this.$d())
    };
    h.WC = function() {
        nS(this)
    };
    var nS = function(a, b, c) {
            var d = a.H,
                e = a.b.ha(a.getId() + "-conflist");
            a.kb && (tMa(a, e, a.R.filter(d), nR(d)), lS(a, b, c))
        },
        vMa = function(a, b, c) {
            var d = [],
                e = "";
            a.Qj = [];
            a.Od = !1;
            for (var f in a.o) {
                var g = a.o[f];
                g && (g.b = [])
            }
            f = b.length;
            if (0 < f && a.V && (a.kd = {}, g = gS(a.V, a.H), 0 < g.length)) {
                for (var k = [], l = 0, m = 0, q = 0; q < g.length; q++) {
                    var u = g[q],
                        w = u.Eg.R;
                    a.kd[w] = !0;
                    l++;
                    if (CMa(a, w, u.Pj, "fr", k, a.vc.oO) && (m++, 5 == m)) break
                }
                d.push(qMa({
                    items: k,
                    sV: Zj(a.Ra).isEnabled(43) ? N('<div class=rtc-fb>Confidential - <a class=lk target=_blank href="http://goto.google.com/calendardogfoodform">Send Feedback</a></div>') : null
                }))
            }
            for (k = g = 0; k < f; ++k)(m = b[k].Eg) ? (l = m.Oc || "Other Resources", m = m.email, q = c && 0 != a.La[l] || !c && 1 == a.La[l], a.R.T && mR(l, e) && (e = l, d.push(nMa({
                P2: a.vc.GO,
                Q2: a.vc.BC + (q ? " " + a.vc.HO : ""),
                yq: a.vc.Aw,
                id: a.getId() + g,
                Oc: l
            })), g++), a.R.T && !q || CMa(a, m, b[k].Pj, "or", d)) : d.push(N("<div class=cmessage>" + O(b[k].Pj) + "</div>"));
            a = "";
            b = d.length;
            for (c = 0; c < b; c++) a += O(d[c]);
            return N(a)
        },
        CMa = function(a, b, c, d, e, f) {
            var g, k;
            (k = a.o[b]) || (k = a.o[b] = new yMa);
            switch (k.status) {
                case 1:
                    g = "images/res_a.gif";
                    break;
                case -1:
                    g = "images/res_u.gif";
                    break;
                default:
                    g = "images/res_n.gif"
            }
            var l = a.Qj.length;
            k.b.push(l);
            var m = [a.vc.Ur];
            f && m.push(f);
            b == a.Sb && (m.push(a.vc.Dw), a.Od = !0);
            f = a.ua && a.ua.contains(b) ? "Remove" : "Add";
            k = -1 != k.status || !a.gu;
            e.push(oMa({
                className: m.join(" "),
                uA: a.getId(),
                type: d,
                email: b,
                j3: g,
                index: l,
                name: c,
                action: f,
                qb: k
            }));
            a.Qj.push(b);
            return k
        },
        pS = function(a, b, c) {
            a.Sb && a.Od && oS(a, a.o[a.Sb], function(a, b) {
                b && Gc(b, this.vc.Dw)
            });
            b && c ? (a.Sb = c, a.Od = !0, Fc(b, a.vc.Dw), Oq(a.$b, function(a) {
                return a == b
            })) : a.U && a.U.setVisible(!1)
        },
        DMa = function(a,
            b) {
            var c = b.id.substr(a.getId().length + 2);
            return a.Qj[parseInt(c, 10)] || null
        };
    h = jS.prototype;
    h.f0 = function(a) {
        this.yb || (this.yb = new fr(this.g8, 200, void 0, this));
        this.Fa || (this.Fa = new fr(this.b3, 800, void 0, this));
        var b = DMa(this, a);
        this.yb.Xi(a, b);
        this.Fa.cancel()
    };
    h.b3 = function() {
        this.U && this.U.setVisible(!1)
    };
    h.R6 = function() {
        this.Fa.cancel();
        this.yb.cancel()
    };
    h.S6 = function() {
        this.Fa.Xi()
    };
    h.g8 = function(a, b) {
        var c = b ? this.R.H[b] : null;
        c.uri && pS(this, a, b);
        if (c.uri) {
            var d;
            this.U || (d = $u(pMa), this.ha().appendChild(d), this.U = new Vy(d), this.U.Ps = !1, T(this).ka(d, "mouseover", this.R6), T(this).ka(d, "mouseout", this.S6));
            d = this.U;
            var e = d.ha().firstChild;
            e.id = "confInfo" + t();
            e.src = c.uri;
            d.setVisible(!0);
            dy(a, 8, d.ha(), 12, void 0, void 0, 4)
        }
    };
    h.g0 = function() {
        this.yb.cancel();
        this.Fa.Xi()
    };
    h.vV = function(a) {
        return Ec(a, this.vc.Aw) ? a : Ec(a, this.vc.BC) ? a.nextSibling : null
    };
    h.lI = function(a) {
        a = a.lastChild.nodeValue;
        this.La[a] = !this.La[a];
        nS(this)
    };
    h.xF = function(a) {
        var b = this.vc.Ur;
        return Ec(a, b) ? a : Ec(a.parentNode, b) ? a.parentNode : null
    };
    h.SP = function(a, b) {
        EMa(this, a, b.target)
    };
    var EMa = function(a, b, c) {
            if (Ec(c, "conf-action-link")) {
                var d = DMa(a, b) || "";
                a.ua ? a.ua.contains(d) ? a.ua.remove(d) : (c = new WM(d, 0, (d ? a.R.H[d] : null).name), a.ua.add(c), tk("rflh_" + a.H.length), c = 0 < a.H.length, a.kd[d] ? (b = Ec(b, "ci-fur"), b = c ? b ? "favorite_room_added_with_filter_top" : "favorite_room_added_with_filter_bottom" : b ? "favorite_room_added_no_filter_top" : "favorite_room_added_no_filter_bottom") : b = c ? "non_favorite_room_added_with_filter" : "non_favorite_room_added_no_filter", a.De.b(b), a.Na && (a.Na.b("fetch_resource_avail_wait_e"),
                    delete a.Na)) : (ze(c, "Added"), Gc(c, "conf-action-link"), a.ya(new FMa("gcal-rp-add", d ? a.R.H[d] : null)));
                pS(a, null)
            }
        },
        qS = function(a, b, c, d) {
            (a = a.b.ha(a.getId() + "-" + d + "-" + b)) && ze(a, c ? "Remove" : "Add")
        };
    h = jS.prototype;
    h.TP = function(a) {
        C(Tl(a, "k"), function(a) {
            a = a.getKey();
            qS(this, a, !0, "or");
            qS(this, a, !0, "fr")
        }, this);
        C(Tl(a, "l"), function(a) {
            a = a.getKey();
            qS(this, a, !1, "or");
            qS(this, a, !1, "fr")
        }, this)
    };
    h.I_ = function() {
        this.ya("gcal-rp-close")
    };
    h.I1 = function(a, b, c) {
        !this.isDisposed() && a.Bg.equals(this.Zb.get()) && a.b == BMa(this) && (window.setTimeout(p(function() {
            !this.Mb.b.length && this.Na && (this.Na.b("fetch_resource_avail_wait"), delete this.Na)
        }, this), 0), null != c && GMa(this, c))
    };
    h.H0 = function(a, b) {
        if (b || Pq(this.$b)) {
            switch (a.keyCode) {
                case 38:
                    pS(this, null);
                    nv(this.$b, this.ou, b);
                    0 == this.$b.b && (this.b.ha(this.getId() + "-conflist").scrollTop = 0);
                    break;
                case 40:
                    pS(this, null);
                    mv(this.$b, this.ou, b);
                    break;
                case 13:
                case 32:
                    var c = this.$b.Re();
                    if (Ec(c, this.vc.Ur)) {
                        var d = Gv(void 0, "conf-action-link", c)[0];
                        EMa(this, c, d)
                    } else this.lI(c);
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    };
    h.ou = function(a) {
        return tf(a)
    };
    var kS = function(a) {
            return a.b.ha(a.getId() + "-conf-input")
        },
        GMa = function(a, b) {
            C(Xg(b, hS, 1), function(a) {
                zMa(this, a.getEmail(), !!Tg(a, 2))
            }, a);
            nS(a, !0)
        },
        FMa = function(a, b) {
            D.call(this, a);
            this.Eg = b || null
        };
    v(FMa, D);
    var yMa = function() {
        this.b = []
    };
    var HMa = function(a) {
        var b = a.prefix,
            c = a.id;
        a = a.Wz;
        b = "" + ('<div class="' + P(b) + '"><hr><div class="' + P(b) + '-guests-can"><h3 class="' + P(b) + '-label">' + O("Guests can") + '</h3><div class="' + P(b) + '-for"><label><input type="checkbox" id="' + P(c) + 'guests-modify">' + O("modify event") + '</label><label><input type="checkbox" id="' + P(c) + 'guests-invite">' + O("invite others") + '</label><label><input type="checkbox" id="' + P(c) + 'guests-see-guests">' + O("see guest list") + '</label><div id="' + P(c) + 'see-guests-warning" class="' + P(b) + '-see-guests-warning">Guests may be able to view the guest list if changes to this event are made via a 3rd-party client. <a href="' + P(nn(a)) + '" target="_blank">' + O("Learn more") + "</a></div></div></div></div>");
        return N(b)
    };
    var rS = function(a, b) {
        S.call(this);
        this.o = a;
        this.V = b || "ep-go"
    };
    v(rS, S);
    h = rS.prototype;
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        this.o.U ? this.Ea = $u(HMa, {
            id: this.getId(),
            prefix: this.V,
            Wz: bH(3046349)
        }) : rS.qa.Xa.call(this)
    };
    h.Ma = function() {
        rS.qa.Ma.call(this);
        if (this.o.U) {
            var a = this.getId();
            this.S = this.b.ha(a + "guests-modify");
            this.R = this.b.ha(a + "guests-invite");
            this.H = this.b.ha(a + "guests-see-guests");
            this.U = this.b.ha(a + "see-guests-warning");
            this.HA();
            T(this).ka(this.S, "click", this.ly);
            T(this).ka(this.R, "click", this.ly);
            T(this).ka(this.H, "click", this.z0);
            T(this).ka(this.o.H, "change", this.HA);
            T(this).ka(this.o.b, "change", this.HA)
        }
    };
    h.HA = function() {
        var a = this.o,
            b = 1 == a.H.get();
        this.S.disabled = 4 == a.b.get();
        this.R.disabled = b;
        this.H.disabled = b;
        this.S.checked = b;
        this.R.checked = nN(a.H.get());
        this.H.checked = mN(a.H.get());
        H(this.U, !this.H.checked)
    };
    h.ly = function() {
        this.o.H.set(SM(this.S.checked, this.R.checked, this.H.checked))
    };
    h.z0 = function() {
        this.ly();
        H(this.U, !this.H.checked)
    };
    var IMa = function(a) {
        a = a.id;
        return N('<div class="ep-gp-msg">' + O("Guests you invite will receive an invitation, but won't appear in the guest list after you save this event.") + ' <a id="' + P(a) + 'guestWontAppearLink" href="javascript:void(0)">' + O("Why?") + "</a></div>")
    };
    var sS = function(a, b) {
        x.call(this);
        this.H = a;
        this.b = b;
        this.o = {};
        var c = new I(this);
        c.ka(this.b, "m", this.R);
        this.Hb(c);
        this.R()
    };
    v(sS, x);
    sS.prototype.R = function() {
        Hg(this.H, 802).addCallback(p(this.T, this))
    };
    sS.prototype.T = function(a) {
        var b = this.b.o(),
            c = zB.va();
        C(b || [], function(b) {
            var d = b.getKey(),
                f = UP(b);
            if (!b.Rc())
                if (JMa(this, f, d))
                    if (f = KMa(this, d), f.ln) iIa(this.b, b, f.ln);
                    else {
                        if (f.$t.push(b), 1 == f.$t.length) {
                            var g = this;
                            a.U(d, function(a) {
                                LMa(g, d, GF(c, a) || "")
                            })
                        }
                    }
            else LMa(this, d, f)
        }, this)
    };
    var JMa = function(a, b, c) {
            return Zj(a.H).isEnabled(12) || GB(b, c)
        },
        LMa = function(a, b, c) {
            b = ob(b || "");
            c = ob(c || "");
            b && c && (b = KMa(a, b), b.ln = c, C(b.$t, function(a) {
                iIa(this.b, a, c)
            }, a), b.$t = [])
        },
        KMa = function(a, b) {
            b = ob(b || "").toLowerCase();
            var c = a.o[b];
            c || (c = {
                ln: "",
                $t: []
            }, a.o[b] = c);
            return c
        };
    var tS = function(a, b, c) {
        x.call(this);
        this.b = a;
        this.Ea = c || a.ha();
        this.Da = new I(this);
        b && C(b, this.handle, this)
    };
    v(tS, x);
    h = tS.prototype;
    h.handle = function(a) {
        var b = this.Ea || this.b.ha();
        switch (a) {
            case "change":
                this.Da.ka(b, "change", r(this.yp, a));
                break;
            case "focus":
                this.Da.ka(b, "focus", r(this.yp, a));
                break;
            case "blur":
                this.Da.ka(b, "blur", r(this.yp, a));
                break;
            case "enter":
                this.Da.ka(b, ["mouseover", "mousemove"], this.kY);
                break;
            case "leave":
                this.Da.ka(b, "mouseout", this.jY)
        }
    };
    h.yp = function(a) {
        this.b.ya(a)
    };
    h.jY = function(a) {
        this.o && (a = a.o, a && this.b.b.contains(this.Ea, a) || (this.o = !1, this.yp("leave")))
    };
    h.kY = function() {
        this.o || (this.o = !0, this.yp("enter"))
    };
    h.wa = function() {
        y(this.Da);
        tS.qa.wa.call(this)
    };
    var vS = function(a, b, c, d, e, f) {
        S.call(this);
        this.S = a instanceof py ? a.get() : a || "";
        this.o = b || "";
        this.V = !!c;
        this.H = d || new uS(!1, 1, 1);
        !this.V && a instanceof py && this.Nt(a);
        this.Sa = e || "textinput";
        this.ma = f || void 0
    };
    v(vS, S);
    vS.prototype.R = !1;
    vS.prototype.ta = !1;
    var uS = function(a, b, c, d) {
            this.b = a;
            this.R = d || !1;
            this.H = b || 1;
            this.o = c || Number.MAX_VALUE
        },
        wS = function(a) {
            return a.b || 1 < a.H
        };
    vS.prototype.Nt = function(a) {
        this.yc = a;
        this.Kb(a.get());
        this.Fa = new I(this);
        this.Fa.ka(a, "change", this.HY)
    };
    vS.prototype.Xa = function() {
        var a = this.getId(),
            b = this.b,
            c = this.S || this.o,
            a = {
                id: a,
                name: a
            };
        this.ma && sx(a, "title", this.ma);
        wS(this.H) ? (b = b.b("TEXTAREA", a), b.value = c, b.defaultValue = c) : (sx(a, "type", "text"), sx(a, "value", c), b = b.b("INPUT", a));
        MMa(this, b)
    };
    var MMa = function(a, b) {
        b.readOnly = a.V;
        var c = a.Sa;
        Fc(b, c);
        a.V && Fc(b, c + "-readonly");
        !a.S && a.o && (Fc(b, "ui-placeholder"), a.R = !0);
        wS(a.H) && gf(b, "overflow", a.H.o < Number.MAX_VALUE ? "auto" : "hidden");
        a.H.R && gf(b, "resize", "vertical");
        a.Ea = b
    };
    h = vS.prototype;
    h.Ma = function() {
        vS.qa.Ma.call(this);
        var a = this.ha(),
            b = T(this);
        b.ka(a, "focus", this.FY);
        b.ka(a, "blur", this.EY);
        b.ka(a, "change", this.vt);
        this.Ba = new tS(this, ["enter", "leave"], a);
        var c = this.H;
        wS(c) && (this.wt(), c.b && b.ka(a, "keyup", this.wt))
    };
    h.Jb = function() {
        y(this.Ba);
        this.Ba = null;
        vS.qa.Jb.call(this)
    };
    h.FY = function() {
        this.ta = !0;
        this.ya("focus") && this.OG()
    };
    h.OG = function() {
        !this.xg() && this.R && xS(this, "")
    };
    h.EY = function() {
        this.ta && (this.ta = !1, this.ya("blur") && this.LG())
    };
    h.LG = function() {
        this.xg() || !this.o || this.lb() || yS(this)
    };
    h.vt = function() {
        if (this.ya("change")) {
            xS(this);
            var a = this.yc;
            if (a) {
                var b = this.lb();
                a.ol(b) || a.set(b)
            }
            this.H.b && this.wt()
        }
    };
    h.HY = function() {
        var a = this.yc.get();
        a != this.lb() && this.Kb(a)
    };
    h.wt = function() {
        var a = this.H,
            b = this.ha(),
            c = a.H,
            a = a.o,
            d;
        d = (d = b.id) ? NMa[d] || (NMa[d] = xJa(b)) : xJa(b);
        if (d = b.clientWidth / Math.max(.67 * d | 0, 1) | 0) {
            for (var e = b.value, f = 1, g = 0, k; g < e.length; g = k + 1) {
                var l = 1;
                k = e.indexOf("\n", g);
                0 > k && (k = e.length, l = 0);
                f += Math.floor((k - g) / d) + l
            }
            d = f + 1
        } else d = 1;
        c = Zc(d, c, a || Number.MAX_VALUE);
        c != b.rows && (b.rows = c)
    };
    h.xg = function() {
        return this.V
    };
    h.lb = function() {
        var a = this.ha();
        return a ? this.R ? "" : nb(a.value) : this.S
    };
    h.Kb = function(a) {
        this.ha() ? (!this.o || a || this.ta ? xS(this, a) : yS(this), this.H.b && this.wt()) : this.S = a
    };
    var xS = function(a, b) {
            var c = a.ha();
            Gc(c, "ui-placeholder");
            n(b) && (c.value = b);
            a.R = !1
        },
        yS = function(a) {
            var b = a.ha();
            Fc(b, "ui-placeholder");
            b.value = a.o;
            a.R = !0
        },
        NMa = {};
    vS.prototype.Bc = function(a) {
        if (wS(this.H)) return "TEXTAREA" == a.tagName;
        var b = a.getAttribute("type");
        return "INPUT" == a.tagName && (!b || "text" == b)
    };
    vS.prototype.hc = function(a) {
        var b = this.S || this.o;
        if ("TEXTAREA" == a.tagName) {
            var c = this.b;
            c.Ug(a);
            a.appendChild(zG(c, b))
        } else a.value = b;
        this.ma && (a.title = this.ma);
        MMa(this, a)
    };
    vS.prototype.focus = function() {
        this.ha().focus()
    };
    vS.prototype.wa = function() {
        y(this.Fa);
        vS.qa.wa.call(this)
    };
    var zS = function(a, b) {
        S.call(this);
        this.ma = a;
        this.U = b;
        this.H = this.S = this.o = this.R = null;
        var c = (this.ta = Zj(this.ma).isEnabled(29)) ? "Add guests" : "Enter guest email addresses";
        this.Md = new vS(this.U.T, c, !1, void 0, void 0, c);
        this.V = new KD("Add", ND.va());
        Hg(this.ma, 801).addCallback(this.Fa, this)
    };
    v(zS, S);
    h = zS.prototype;
    h.Xa = function() {
        var a = this.b,
            b = a.b("DIV", "ep-gs");
        this.Ea = b;
        var c = a.b("DIV", "ep-gs-ta-cont");
        b.appendChild(c);
        this.R = a.b("INPUT", {
            "class": "ep-gs-ta",
            id: this.hb("ta")
        });
        c.appendChild(this.R);
        if (!this.ta) {
            var d = a.b("DIV", "ep-gs-actions goog-inline-block");
            b.appendChild(d);
            this.Ua(this.V);
            this.V.render(d)
        }
        this.o = a.b("DIV", {
            "class": "ep-gs-message",
            "aria-live": "polite",
            "aria-relevant": "additions",
            "aria-atomic": "true"
        });
        c.appendChild(this.o);
        this.Ua(this.Md)
    };
    h.Ma = function() {
        zS.qa.Ma.call(this);
        this.Md.kb || $x(this.Md, this.R);
        this.V.kb && T(this).ka(this.V, "action", this.j_);
        T(this).ka(this.R, "keydown", this.vW).ka(this.U.b, "m", this.Ba).ka(this.U.T, "change", this.La);
        OMa(this)
    };
    h.Jb = function() {
        this.H && this.H.R(this.R.id);
        this.S && (ca.clearTimeout(this.S), this.S = null);
        this.o = null;
        zS.qa.Jb.call(this)
    };
    h.Bc = function() {
        return !1
    };
    h.wa = function() {
        zS.qa.wa.call(this);
        this.H = this.o = this.R = null
    };
    h.vW = function(a) {
        if (!this.H || !this.H.U())
            if (3 == a.keyCode || 13 == a.keyCode) this.U.T.set(this.Md.lb()), AS(this), a.preventDefault()
    };
    h.p_ = function() {
        this.U.T.set(this.Md.lb());
        AS(this)
    };
    h.j_ = function() {
        AS(this) && this.Md.focus()
    };
    var AS = function(a) {
        a = sN(a.U, !0);
        return a.b.length ? (pH("The following guest email addresses are invalid:\n\n" + a.b.join("\n")), !1) : !0
    };
    zS.prototype.Ba = function(a) {
        var b = PMa(this, Tl(a, "k")),
            c = PMa(this, Tl(a, "Ka")),
            d;
        a = "#008800";
        b.length && c.length ? (d = "Some guests already invited", a = "#000") : c.length ? (d = 1 == c.length ? "Guest already invited" : "Guests already invited", a = "#c11") : b.length && (d = 1 == b.length ? "Guest added" : "Guests added (" + b.length + ")", a = "#008800");
        d && (b = Yn(d), d = a, this.o && (ze(this.o, b), gf(this.o, {
            color: d,
            opacity: 1
        }), this.S && ca.clearTimeout(this.S), this.S = ca.setTimeout(p(this.ua, this), 4E3)))
    };
    var PMa = function(a, b) {
        return Sb(b, function(a) {
            return !XM(a)
        }, a)
    };
    zS.prototype.La = function() {
        this.o && ze(this.o, "")
    };
    zS.prototype.ua = function() {
        this.o && (this.S = null, jF(this.o, .3).play())
    };
    zS.prototype.Fa = function(a) {
        this.H = a;
        OMa(this)
    };
    var OMa = function(a) {
        a.kb && a.H && a.H.T(a.R.id, !0, p(a.p_, a))
    };
    var CS = function(a, b, c, d, e, f, g, k, l, m, q, u, w) {
        S.call(this);
        this.U = b;
        this.Zb = cQ(b) && !b.Ra;
        this.ma = b.R.V || this.Zb;
        this.Db = w || "ep-gp";
        this.V = d;
        this.R = Zj(a).isEnabled(29);
        this.H = null;
        w = this.R ? "Guests" : "Add guests";
        var z = this.R || b.Fb() || 1 >= b.o.size() ? 0 : -1;
        this.ma && (this.H = u || new IR([w], z, new LR, this.Db + "-ts"), BS(this) && QMa(this));
        u = new sS(a, this.U.R.b);
        this.Hb(u);
        this.ta = this.ma ? m || new zS(a, this.U.R) : null;
        this.Na = this.R && BS(this) ? k : null;
        this.S = this.R && BS(this) ? new aS(a, b, k, e) : null;
        this.Ra = this.R && BS(this) ?
            new nJa(k) : null;
        this.La = q || new BR(a, this.U, c, b.Fb(), d, g);
        this.yb = this.ma && !this.R ? l || null : null;
        this.Sa = f ? new rS(this.U.H) : null;
        this.ma && (this.Ua(this.H), this.Ua(this.ta), this.S && this.Ua(this.S));
        this.Ua(this.La);
        this.yb && this.Ua(this.yb);
        this.Sa && this.Ua(this.Sa);
        this.ab = K(a, oj);
        this.o = null;
        this.Ba = e && this.R ? new vR : null
    };
    v(CS, S);
    CS.prototype.Bc = function() {
        return !1
    };
    CS.prototype.Xa = function() {
        var a = this.b,
            b = a.b("DIV", this.Db);
        this.R && Fc(b, "fat");
        this.ma && (this.Fa = a.b("DIV", this.Db + "-sp"), b.appendChild(this.Fa), this.R || (this.Va = a.b("DIV", "goog-inline-block"), this.Fa.appendChild(this.Va)), this.Ib = this.R ? a.b("DIV") : a.b("DIV", "goog-inline-block"), this.Fa.appendChild(this.Ib), this.H.render(this.Fa), this.ta.render(this.Fa), this.Zb && (a = ne(document, "div"), Km(a, IMa, {
            id: this.getId()
        }), this.ta.ha().insertBefore(a, this.ta.ha().firstChild)));
        this.Ea = b;
        this.Ba && this.Ua(this.Ba, !0);
        this.La.render(b);
        this.yb && this.yb.render(b);
        this.Sa && this.Sa.render(b);
        BS(this) && RMa(this)
    };
    CS.prototype.kd = function() {
        this.ua || (this.ua = new uF("addgadget-dialog"), this.ua.setTitle("Guest won't appear in the guest list"), this.ua.xf(rm(N("This event was created outside Google Calendar, so we can't change it directly.<p>If the event has an organizer specified, once a guest that you invited responds, the organizer of the event will be prompted to invite the new guest. New guests will only receive event updates once the organizer has added them to the original event.<p>If the event doesn't have an organizer specified (for example, like many travel confirmation events), the guest will receive an invitation but will not appear in the guest list on your view of the event."))), zF(this.ua,
            WC()));
        this.ua.setVisible(!0)
    };
    var RMa = function(a) {
        a.Va && ze(a.Va, BS(a) ? "Add:\u00a0" : "")
    };
    CS.prototype.wa = function() {
        this.Ib = this.Va = null;
        y(this.o);
        this.o = null;
        y(this.ua);
        this.ua = null;
        CS.qa.wa.call(this)
    };
    CS.prototype.Ma = function() {
        CS.qa.Ma.call(this);
        if (this.ma) {
            this.Ib.appendChild(this.H.ha());
            H(this.H.ha(), this.ma && !(this.R && !this.V));
            var a = T(this);
            a.ka(this.H, "Wa", this.Dc);
            this.o && (a.ka(this.o, "gcal-rp-add", this.Mb), a.ka(this.o, "gcal-rp-close", this.Sb));
            var b = this.b.ha(this.getId() + "guestWontAppearLink");
            b && a.ka(b, "click", p(this.kd, this));
            a.ka(this.U.H.b, "change", this.hd);
            a.ka(this.U.R.b, "m", this.sc);
            this.S && this.Ra && a.ka(this.S, "da", this.wc);
            SMa(this);
            DS(this);
            BS(this) && this.Na && this.V && (a = new AQ,
                a.b = !1, this.Na.nb(UO.Xr, a))
        }
    };
    CS.prototype.hd = function() {
        RMa(this);
        QMa(this)
    };
    CS.prototype.sc = function(a) {
        for (var b = !1, c = Tl(a, "k"), d = 0; d < c.length; d++) {
            var e = c[d];
            XM(e) || 5 == e.response || (this.V ? this.ab.nb(e.Rc() ? "event_details_resource_added" : "event_details_guest_added") : this.ab.nb(e.Rc() ? "find_a_time_resource_added" : "find_a_time_guest_added"), b = !0)
        }
        a = Tl(a, "l");
        for (d = 0; d < a.length; d++) e = a[d], XM(e) || (this.V ? this.ab.nb(e.Rc() ? "event_details_resource_removed" : "event_details_guest_removed") : this.ab.nb(e.Rc() ? "find_a_time_resource_removed" : "find_a_time_guest_removed"), b = !0);
        b && this.ya("fb");
        SMa(this)
    };
    var QMa = function(a) {
            if (a.H)
                if (BS(a)) {
                    var b = a.R ? N("Rooms").toString() : "Rooms, etc.";
                    yLa(a.H, ["Guests", b])
                } else yLa(a.H, ["Guests"], 0)
        },
        TMa = function(a, b) {
            if (!a.o && (a.o = b, a.Ua(b), b.render(a.Fa), a.kb)) {
                var c = T(a);
                c.ka(a.o, "gcal-rp-add", a.Mb);
                c.ka(a.o, "gcal-rp-close", a.Sb);
                DS(a)
            }
        };
    CS.prototype.Dc = function() {
        DS(this);
        switch (this.H.o) {
            case 0:
                this.ta.R.focus();
                this.ab.nb(this.V ? "event_details_add_guests_tab_clicked" : "find_a_time_add_guests_tab_clicked");
                break;
            case 1:
                this.o && kS(this.o) ? kS(this.o).focus() : this.S && this.S.R.focus();
                this.ab.nb(this.V ? "event_details_add_resources_tab_clicked" : "find_a_time_add_resources_tab_clicked");
                if (this.Na && this.V) {
                    var a = new AQ;
                    a.b = !1;
                    this.Na.nb(UO.Wr, a)
                }
                this.Ra && oJa(this.Ra)
        }
    };
    CS.prototype.wc = function(a) {
        var b = this.Ra;
        1 == this.H.o ? KQ(b, a) : b.b = a
    };
    var DS = function(a) {
            if (a.kb) {
                var b = a.H.o;
                0 == b ? H(a.ta.ha(), !0) : H(a.ta.ha(), !1);
                b = 1 == b;
                a.Ba && H(a.Ba.ha(), !b);
                !b || a.o || a.R || a.ya("eb");
                a.o && (H(a.o.ha(), b), a.o.ma.Kb(""), b ? a.o.De = qk() : delete a.o.De);
                a.S && (a.S.kb ? H(a.S.ha(), b) : b && uIa(a.S, a.La.ha()));
                a.R && !a.V && H(a.La.ha(), !b);
                a.ya("db")
            }
        },
        SMa = function(a) {
            a.S && !a.S.kb && Zj(M()).isEnabled(32) && 0 < Sb(a.U.o.o(), function(a) {
                return !a.Rc()
            }).length && (uIa(a.S, a.La.ha()), H(a.S.ha(), !1), a.ab.nb("roompicker_prerendered"))
        };
    CS.prototype.Sb = function() {
        KR(this.H, -1)
    };
    CS.prototype.Mb = function(a) {
        a = a.Eg;
        a = new WM(a.email, 0, a.name);
        this.U.o.add(a)
    };
    var BS = function(a) {
        return a.U.ip() && !(a.R && !a.V)
    };
    var cR = function(a, b) {
        this.R = a;
        this.H = b
    };
    cR.prototype.b = function(a, b) {
        return new ES(this, a, b, "CREATE")
    };
    cR.prototype.o = function(a, b) {
        return new ES(this, a, b, 1 == a.V ? "RESPOND" : "EDIT", this.H)
    };
    var ES = function(a, b, c, d, e) {
        J.call(this);
        this.b = a;
        this.o = b;
        a = [];
        a.push("sf", !0, "output", "js", "action", d);
        ur(a);
        MIa(a, b);
        d = b.Fb();
        var f = b.H;
        if (d || f.o.ub()) {
            var g = f.o.get();
            a.push("crm", 1 == g ? "AVAILABLE" : 2 == g ? "BLOCKING" : "BUSY")
        }
        if (d || f.b.ub()) g = f.b.get(), a.push("icc", 4 == g ? "SECRET" : 3 == g ? "PRIVATE" : 2 == g ? "PUBLIC" : "DEFAULT");
        if (d || f.H.ub()) a.push("sprop", "goo.allowModify:" + (1 == f.H.get())), a.push("sprop", "goo.allowInvitesOther:" + nN(f.H.get())), a.push("sprop", "goo.showInvitees:" + mN(f.H.get()));
        if (d || f.S.ub()) g =
            "eventColor:" + f.S.get(), a.push("pprop", g);
        g = CN(b).ub();
        aQ(b) && (d || g || f.T.ub()) && a.push("pprop", "CLNDR_flexibleMeeting:" + IIa(f.T.get()));
        HIa(f.R, a);
        d = b.Fb();
        d || (a.push("eid", b.getId()), n(b.Rf) && a.push("erev", String(b.Rf)));
        a.push("eref", b.vb);
        f = b.ma;
        (d || f.ub()) && a.push("text", f.get());
        f = b.La;
        if (d || f.ub()) a.push("location", f.get()), f = b.Mb.get(), null != f && (g = r(GIa, a), g("location_maps_cluster_id", f.ta), g("location_name", f.getName()), g("location_address_formatted_address", f.S), g("location_address_country",
            f.b), g("location_address_locality", f.o), g("location_address_region", f.R), g("location_address_post_office_box_number", f.H), g("location_address_street_address", f.T), g("location_geo_latitude", f.ma), g("location_geo_longitude", f.Ca), g("location_url", f.getUrl()));
        f = b.Na;
        (d || f.ub()) && a.push("details", f.get());
        f = CN(b);
        d ? a.push("src", f.get()) : f.ub() && (a.push("src", f.jd()), a.push("targ", f.get()));
        d = b.Fb();
        f = b.b;
        g = b.Sa;
        (d || f.ub()) && a.push("dates", f.get().toString());
        (d || g.ub()) && a.push("unbounded", g.get().toString());
        d = b.Oa;
        f = d.b;
        f.ub() && a.push("rst", String(f.get()));
        f = d.o;
        f.ub() && a.push("rcomment", String(f.get()));
        d = d.H;
        d.ub() && a.push("rgu", String(d.get()));
        if (d = b.S) d.R.get() && (d.ub() || b.Fb()) ? (a.push("recur", d.Mh()), !b.Fb() && d.b.ub() && a.push("rstart", d.b.get().toString())) : d.R.get() || !d.R.ub() || b.Fb() || (a.push("recur", ""), f = b.b.get().start, a.push("rfdt", f.toString())), e && d.R.get() && !b.Fb() && !b.wq() && b.H.R && b.H.R.ub() && (d = b.T.b.get(), (e = oG(e, fb(d, 1))) && e.length && (e = e[0], a.push("droi", xh(e.o) + "T000000/" + xh(e.b) +
            "T000000")));
        if ((e = b.ua) && (e.ub() || b.Fb()))
            if (e = e.sd(), 0 == e.length) a.push("gdoc-attachment", "");
            else
                for (d = 0; d < e.length; d++) g = e[d], f = [encodeURIComponent(g.getUrl()), encodeURIComponent(g.getTitle()), encodeURIComponent(g.H)], (g = g.getId()) && f.push(g), a.push("gdoc-attachment", f.join(" "));
            (e = b.U) && (e.ub() || b.Fb()) && FIa(a, e);
        LIa(a, b);
        fc(a, c);
        this.H = a
    };
    v(ES, bJa);
    h = ES.prototype;
    h.jL = null;
    h.start = function() {
        ES.qa.start.call(this);
        this.b.R.send("event", this.H, 22, p(this.vX, this), p(this.Oj, this))
    };
    h.vX = function(a) {
        this.jL = a;
        this.Sf()
    };
    h.Vd = function() {
        return this.o
    };
    h.cq = function() {
        return this.jL
    };
    var FS = function(a) {
        cR.call(this, a)
    };
    v(FS, cR);
    FS.prototype.b = function(a, b) {
        return new GS(this, a, b, "CREATE")
    };
    FS.prototype.o = function(a, b) {
        return new GS(this, a, b, "EDIT")
    };
    var GS = function(a, b, c, d) {
        var e = [],
            f = b.$f;
        (f.ub() || b.Fb()) && e.push("pprop", "SS_slotsize:" + f.get());
        e.push("pprop", "SS_asid:default", "pprop", "SS_isavail:true");
        fc(e, c);
        ES.call(this, a, b, e, d)
    };
    v(GS, ES);
    var HS = function(a) {
        this.$f = a.Mb;
        DN.call(this, a, [this.$f])
    };
    v(HS, DN);
    HS.prototype.wq = function() {
        return HS.qa.wq.call(this) || this.$f.ub()
    };
    var UMa = function() {};
    v(UMa, FN);
    var VMa = function() {
        var a = new UMa;
        a.Oa = new AN(0, 1, 4, !0, !0, !0, !0);
        a.Ba = [];
        return a
    };
    var WMa = function(a, b) {
        NN.call(this, a, b)
    };
    v(WMa, NN);
    var XMa = function(a, b) {
        for (var c = WN(a, b), d = 30, e = b.getElementsByTagName("private-property"), f = 0; f < e.length; ++f) {
            var g = e[f];
            if ("SS_slotsize" == g.getAttribute("name")) {
                d = PN(g);
                break
            }
        }
        e = VMa();
        e.Ta = a.Ta;
        e.U = c.getId();
        e.b = c.T;
        e.R = c.Tb;
        e.H = c.ma;
        e.T = c.b;
        e.Ca = c.Ba;
        e.V = c.La;
        e.S = c.Na;
        e.ua = c.Oa;
        e.o = c.R;
        e.ta = c.S;
        d = parseInt(d, 10);
        d = new Iy(isNaN(d) ? void 0 : d);
        e.Mb = d;
        e.ma = c.V;
        return new HS(e)
    };
    var YMa = function(a) {
            this.b = a;
            this.o = bj(a)
        },
        IS = function(a, b, c) {
            J.call(this);
            this.o = b;
            this.T = a.o;
            this.b = a.b;
            this.H = new WMa(this.b, c)
        };
    v(IS, EQ);
    IS.prototype.start = function() {
        IS.qa.start.call(this);
        if (qi(this.b)) this.T.send("event", ["eid", this.o, "sf", "true", "hl", "en", "output", "xml"], 24, p(this.S, this), void 0, null, "POST", 1);
        else {
            var a = Wu(K(this.b, pj), this.o);
            this.R = (a = a ? wq.lF(a) : null) ? XMa(this.H, a) : null;
            this.Sf()
        }
    };
    IS.prototype.S = function(a) {
        this.R = XMa(this.H, ZIa(a));
        this.Sf()
    };
    IS.prototype.Vd = function() {
        return this.R
    };
    var JS = function(a, b, c, d, e, f) {
        if (a.ub()) {
            var g = K(M(), oj);
            d && g.nb(d);
            var k = c || ia;
            a = (new Kw).set("yes", a.Fb() ? "Discard" : "Discard changes", !0).set("cancel", "Continue editing", !1, !0);
            hv(new Us, function(a) {
                "yes" == a.key ? (b(), e && g.nb(e)) : (k(), f && g.nb(f))
            }, "Your Event", jd("Your event has not been saved."), a)
        } else b()
    };
    var KS = function(a) {
        this.H = a || null;
        this.b = []
    };
    h = KS.prototype;
    h.mS = function(a, b, c, d) {
        a.call(this.H, b, c, d)
    };
    h.fK = 0;
    h.nt = null;
    h.ny = null;
    h.my = null;
    var LS = function(a, b) {
        var c = p(a.mS, a, b);
        a.b.push(c)
    };
    KS.prototype.execute = function(a, b, c) {
        this.nt = a;
        this.ny = b;
        this.my = c;
        this.o()
    };
    KS.prototype.o = function() {
        var a = this.fK;
        if (a >= this.b.length) this.R(!0);
        else {
            var a = this.b[a],
                b = p(this.R, this, !1),
                c = p(this.o, this);
            this.fK++;
            a(this.nt, c, b)
        }
    };
    KS.prototype.R = function(a) {
        a = a ? r(this.ny, this.nt) : this.my;
        this.my = this.ny = this.nt = null;
        a()
    };
    var MS = function(a) {
            var b = a.id,
                c = a.name,
                d = a.type,
                e = !!a.checked,
                f = a.$c,
                g = a.title,
                k = a.label;
            return N('<span class="' + P(a.className) + '"><input id="' + P(b) + '" name="' + P(c) + '" type="' + P(d) + '"' + (e ? ' checked="checked"' : "") + 'aria-label="' + P(f) + '" title="' + P(g) + '"/><label for="' + P(b) + '" title="' + P(g) + '">' + O(k) + "</label></span>")
        },
        ZMa = function(a) {
            var b = "<table><tbody>";
            a = a.rows;
            for (var c = a.length, d = 0; d < c; d++) b += O(a[d]);
            return N(b + "</tbody></table>")
        };
    var US = function(a, b, c, d, e, f, g) {
        S.call(this);
        this.R = a;
        this.ta = b;
        this.ma = f || null;
        this.U = g || "ep-rec";
        this.H = [new NS(a, e, b, c), new OS(a, e, b, c), new PS(a, e, b, c), new QS(a, e, b, c), new RS(a, e, b, c, d), new SS(a, e, b, c), new TS(a, e, b, c)]
    };
    v(US, S);
    US.prototype.S = null;
    US.prototype.Xa = function() {
        var a = this.b,
            b = a.b("TABLE", this.U);
        $q(b, "presentation");
        this.Ea = b;
        if (!this.S && !vO(this.R, Xk(this.ta).H)) {
            var b = a.b("LI", void 0, "Click Cancel to keep current rule."),
                c = a.b("LI", void 0, "Edit rule and click Done to override current rule.");
            this.S = a.b("DIV", this.U + "-warning", ["This recurrence rule cannot be edited in Google Calendar.", a.b("UL", void 0, [b, c])])
        }
        this.ma && (this.V = a.b("TBODY", null, a.b("TR", null, a.b("TH"), a.b("TD", this.U + "-buttons-padding", this.ma))))
    };
    var $Ma = function(a) {
        for (var b = a.b, c = a.H, d = [], e = 0; e < c.length; e++) {
            var f = c[e].getTitle();
            d[e] = b.b("OPTION", {
                value: e,
                selected: a.o == c[e] ? "selected" : "",
                title: f
            }, f)
        }
        a = {
            id: a.hb("frequency"),
            title: "Repeats " + a.o.getTitle() + "\n    "
        };
        d = b.b("SELECT", a, d);
        return b.b("TBODY", void 0, b.b("TR", void 0, b.b("TH", void 0, "Repeats:"), b.b("TD", void 0, d)))
    };
    US.prototype.Ba = function(a) {
        VS(this, this.H[parseInt(a.target.value, 10)]);
        this.o.pm(this.R);
        (a = this.Za("frequency")) && a.focus && fE(a)
    };
    var aNa = function(a) {
            var b = null;
            if (a.o && a.o.$j(a.R)) b = a.o;
            else
                for (var c = 0; c < a.H.length; c++)
                    if (a.H[c].$j(a.R)) {
                        b = a.H[c];
                        break
                    } return b
        },
        VS = function(a, b) {
            if (!a.o || !a.o.kb || b != a.o) {
                a.o && a.removeChild(a.o, !0);
                a.o = b;
                Tf(T(a));
                var c = a.ha(),
                    d = a.b;
                d.Ug(c);
                a.S && (d = d.b("TR", void 0, d.b("TD", {
                    colspan: 2
                }, a.S)), c.appendChild(d));
                c.appendChild($Ma(a));
                a.Ua(a.o, !0);
                a.V && c.appendChild(a.V);
                c = T(a);
                c.ka(a.R, "change", a.ua);
                d = a.Za("frequency");
                c.ka(d, "change", a.Ba)
            }
        };
    US.prototype.ua = function() {
        VS(this, aNa(this))
    };
    US.prototype.Ma = function() {
        US.qa.Ma.call(this);
        VS(this, aNa(this))
    };
    US.prototype.Jb = function() {
        US.qa.Jb.call(this);
        for (var a = 0; a < this.H.length; a++) this.H[a].Pa()
    };
    var WS = function(a, b, c, d, e, f) {
        S.call(this);
        this.o = a;
        this.R = b;
        this.Ta = d;
        this.ma = c;
        this.V = e;
        this.H = f || "ep-rec";
        this.S = jh(d)
    };
    v(WS, S);
    WS.prototype.getTitle = function() {
        return this.ma
    };
    WS.prototype.Xa = function() {
        this.Ea = this.b.createElement("tbody")
    };
    WS.prototype.eq = function() {
        return []
    };
    WS.prototype.Nh = function() {
        var a = T(this);
        a.ka(this.o, "change", this.wW);
        var b = this.Za("rstart"),
            c = new uE(this.S.Ed()),
            d = new xE(this.Ta, c, this.S.ci());
        this.Ua(d, !1);
        $x(d, b);
        a.ka(d, "change", this.c2);
        b = this.Za("endson_never");
        a.ka(b, "click", this.bu);
        b = this.Za("endson_count");
        a.ka(b, "click", this.bu);
        d = this.Za("endson_count_input");
        a.ka(d, "click", p(this.mI, this, b));
        a.ka(d, "change", this.P_);
        b = this.Za("endson_until");
        a.ka(b, "click", this.bu);
        d = this.Za("endson_until_input");
        c = new xE(this.Ta, c, this.S.ci());
        this.Ua(c, !1);
        $x(c, d);
        a.ka(c, "change", this.n2);
        a.ka(d, "click", p(this.mI, this, b))
    };
    var eNa = function(a) {
            var b = a.b,
                c = a.eq(),
                d = Yk(a.Ta),
                e = a.o.b.get(),
                f = a.R && a.R.Se();
            f && (e = JM(f, e.tb()));
            c.push(bNa(a, a.V, e));
            c.push(cNa(a));
            c.push(dNa(a, vO(a.o, d)));
            d = b.Qb().activeElement;
            c = $u(ZMa, {
                rows: c
            }, void 0, b);
            for (b.Ug(a.ha()); c.firstChild.firstChild;) a.ha().appendChild(c.firstChild.firstChild);
            d && d.id && b.ha(d.id).focus()
        },
        XS = function(a, b, c, d) {
            a = a.hb("interval");
            d = d(b);
            d = "<tr><th>" + O("Repeat every:") + '</th><td><select id="' + P(a) + '" title="' + P(d) + '">';
            for (a = 1; 31 > a; a++) d += '<option value="' + P(a) + '"' +
                (a == b ? ' selected="selected"' : "") + ">" + O(a) + "</option>";
            d += "</select><label>" + O(c) + "</label></td></tr>";
            return N(d)
        },
        bNa = function(a, b, c) {
            var d = sE(a.Ta),
                e = a.hb("rstart-label"),
                f = a.hb("rstart"),
                d = d.Fe(c);
            c = fNa(a, c);
            b = !!b;
            a = a.H + "-altdate";
            return N("<tr" + (b ? "" : ' tabindex="0"') + '><th id="' + P(e) + '">' + O("Starts on:") + '</th><td><input id="' + P(f) + '" size="10" value="' + P(d) + '"' + (b ? "" : ' disabled="disabled"') + 'aria-labelledby="' + P(e) + '">' + (c ? '<span class="' + P(a) + '">' + O(c) + "</span>" : "") + "</td></tr>")
        },
        fNa = function(a,
            b) {
            if (!b) return null;
            var c = Yk(a.Ta);
            return c.FF ? c.FF(b.Ya()) : null
        },
        cNa = function(a) {
            var b = a.o.ac().get() || "",
                c = sE(a.Ta),
                d = a.o.S.get(),
                c = d ? c.Fe(d) : "",
                e = fNa(a, d),
                d = MS({
                    type: "radio",
                    className: a.H + "-ends-opt",
                    id: a.hb("endson_never"),
                    name: "endson",
                    label: "Never",
                    checked: !(b || c),
                    title: "Ends never",
                    $c: "Ends never"
                }),
                f;
            f = a.hb("endson_count_input");
            var g = String(b);
            f = "After " + ('<input id="' + P(f) + '" size=3 value="' + P(g) + '"' + (g ? "" : ' disabled="disabled"') + 'title="' + P("Occurrences") + '"> occurrences');
            f = N("" + f);
            b =
                MS({
                    type: "radio",
                    className: a.H + "-ends-opt",
                    id: a.hb("endson_count"),
                    name: "endson",
                    label: f,
                    checked: !!b,
                    title: "Ends after a number of occurrences",
                    $c: "Ends after a number of occurrences"
                });
            f = a.hb("endson_until_input");
            var g = N('<input id="' + P(f) + '" size=10 value="' + P(c) + '" title="' + P("Specified date") + '"' + (c ? "" : ' disabled="disabled"') + ">"),
                k = a.H + "-altdate";
            f = "";
            e = e ? "On " + (O(g) + (" " + ('<span class="' + P(k) + '">' + (O(e) + "</span>")))) : "On " + O(g);
            f += e;
            e = N(f);
            c = MS({
                type: "radio",
                className: a.H + "-ends-opt",
                id: a.hb("endson_until"),
                name: "endson",
                label: e,
                checked: !!c,
                title: "Ends on a specified date",
                $c: "Ends on a specified date"
            });
            c = [d, b, c];
            a = '<tr><th class="' + P(a.H + "-ends-th") + '">' + O("Ends:") + "</th><td>";
            d = c.length;
            for (e = 0; e < d; e++) a += O(c[e]);
            return N(a + "</td></tr>")
        },
        dNa = function(a, b) {
            var c = a.hb("recsummary"),
                d = a.H + "-summary";
            return N('<tr tabIndex="0" id="' + P(c) + '"><th>' + O("Summary:") + '</th><td class="' + P(d) + '">' + O(null == b ? "" : b) + "</td></tr>")
        };
    h = WS.prototype;
    h.cu = function(a) {
        this.o.H.set(parseInt(a.target.value, 10))
    };
    h.c2 = function() {
        var a = this.Za("rstart"),
            b = Gg(this.Ta, 3).S.o(a.value);
        if (b) {
            var a = this.o,
                c = this.R && this.R.Se(),
                d = b,
                e = a.b.get();
            e instanceof Lh && (c && (e = JM(c, e)), b = Ah(b), b.hour = e.hour, b.minute = e.minute, b.second = e.second, d = b.tb());
            c && (d = VP(c, d.tb()));
            a.b.set(d);
            this.ya("gb")
        }
    };
    h.P_ = function(a) {
        a = parseInt(a.target.value, 10);
        0 < a && this.o.ac().set(a)
    };
    h.n2 = function() {
        var a = this.Za("endson_until_input");
        if (a = Gg(this.Ta, 3).S.o(a.value)) this.o.S.set(a), this.Za("endson_until").checked = !0
    };
    h.mI = function(a, b) {
        b.preventDefault();
        a.checked || (a.checked = !0, this.bu())
    };
    h.bu = function() {
        this.o.Hc();
        var a = this.o.ac(),
            b = this.o.S;
        this.Za("endson_never").checked ? (b.set(null), a.set(0)) : this.Za("endson_count").checked ? (b.set(null), a.get() || a.set(this.Dl())) : this.Za("endson_until").checked && (b.get() || b.set(this.Il()), a.set(0));
        this.o.Ec()
    };
    h.wW = function() {
        wi(function() {
            Tf(T(this));
            this.kb && (eNa(this), this.Nh())
        }, 0, this)
    };
    h.Ma = function() {
        WS.qa.Ma.call(this);
        eNa(this);
        this.Nh()
    };
    var NS = function(a, b, c, d) {
        WS.call(this, a, b, "Daily", c, d)
    };
    v(NS, WS);
    h = NS.prototype;
    h.$j = function(a) {
        return "DAILY" == a.T.get()
    };
    h.pm = function(a) {
        a.clear("DAILY")
    };
    h.eq = function() {
        return [XS(this, this.o.H.get(), "days", DJa)]
    };
    h.Nh = function() {
        NS.qa.Nh.call(this);
        var a = T(this),
            b = this.Za("interval");
        Sf(a, b, "change", this.cu, !1, this)
    };
    h.Dl = function() {
        return 5
    };
    h.Il = function() {
        var a = Ah(this.o.b.get());
        a.Ga += 5 * this.o.H.get();
        return a.Ya()
    };
    var OS = function(a, b, c, d) {
        WS.call(this, a, b, "Every weekday (Monday to Friday)", c, d)
    };
    v(OS, WS);
    OS.prototype.$j = function(a) {
        return "WEEKLY" == a.T.get() && 1 == a.H.get() && mc(a.o.get(), eJa)
    };
    OS.prototype.pm = function(a) {
        a.Hc();
        a.clear("WEEKLY");
        a.o.set(eJa);
        a.Ec()
    };
    OS.prototype.Dl = function() {
        return 35
    };
    OS.prototype.Il = function() {
        var a = Ah(this.o.b.get());
        a.Ga += 35 * this.o.H.get();
        return a.Ya()
    };
    var PS = function(a, b, c, d) {
        WS.call(this, a, b, "Every Monday, Wednesday, and Friday", c, d)
    };
    v(PS, WS);
    PS.prototype.$j = function(a) {
        return "WEEKLY" == a.T.get() && 1 == a.H.get() && mc(a.o.get(), dJa)
    };
    PS.prototype.pm = function(a) {
        a.Hc();
        a.clear("WEEKLY");
        a.o.set(dJa);
        a.Ec()
    };
    PS.prototype.Dl = function() {
        return 35
    };
    PS.prototype.Il = function() {
        var a = Ah(this.o.b.get());
        a.Ga += 35 * this.o.H.get();
        return a.Ya()
    };
    var QS = function(a, b, c, d) {
        WS.call(this, a, b, "Every Tuesday and Thursday", c, d)
    };
    v(QS, WS);
    QS.prototype.$j = function(a) {
        return "WEEKLY" == a.T.get() && 1 == a.H.get() && mc(a.o.get(), cJa)
    };
    QS.prototype.pm = function(a) {
        a.Hc();
        a.clear("WEEKLY");
        a.o.set(cJa);
        this.o.Ec()
    };
    QS.prototype.Dl = function() {
        return 35
    };
    QS.prototype.Il = function() {
        var a = Ah(this.o.b.get());
        a.Ga += 35 * this.o.H.get();
        return a.Ya()
    };
    var RS = function(a, b, c, d, e) {
        WS.call(this, a, b, "Weekly", c, d);
        this.U = e
    };
    v(RS, WS);
    h = RS.prototype;
    h.$j = function(a) {
        return "WEEKLY" == a.T.get()
    };
    h.pm = function(a) {
        a.clear("WEEKLY");
        var b = this.U.wb() ? this.U.wb().td() : a.b.get().td();
        a.o.set([QM(b)])
    };
    h.eq = function() {
        var a = XS(this, this.o.H.get(), "weeks", CJa),
            b, c = this.o.o.get(),
            d = [{
                name: "SU",
                label: mO[0],
                title: lO[0]
            }, {
                name: "MO",
                label: mO[1],
                title: lO[1]
            }, {
                name: "TU",
                label: mO[2],
                title: lO[2]
            }, {
                name: "WE",
                label: mO[3],
                title: lO[3]
            }, {
                name: "TH",
                label: mO[4],
                title: lO[4]
            }, {
                name: "FR",
                label: mO[5],
                title: lO[5]
            }, {
                name: "SA",
                label: mO[6],
                title: lO[6]
            }],
            e = this.S.Ed();
        b = [];
        for (var f = 0; f < d.length; f++) {
            var g = f - e,
                k = Zb(c, d[f].name);
            b[(g + d.length) % d.length] = MS({
                type: "checkbox",
                className: this.H + "-dow",
                id: this.hb("dow" + f),
                label: d[f].label,
                name: d[f].name,
                checked: k,
                title: d[f].title,
                $c: "Repeat on " + d[f].title
            })
        }
        c = this.hb("checkboxes");
        c = "<tr><th>" + O("Repeat on:") + '</th><td id="' + P(c) + '"><div>';
        d = b.length;
        for (e = 0; e < d; e++) c += O(b[e]);
        b = N(c + "</div></td></tr>");
        return [a, b]
    };
    h.Nh = function() {
        RS.qa.Nh.call(this);
        var a = T(this),
            b = this.Za("interval");
        Sf(a, b, "change", this.cu, !1, this);
        b = this.Za("checkboxes");
        Sf(a, b, "click", this.v2, !1, this)
    };
    h.v2 = function() {
        for (var a = [], b = Fe(this.b, "input", void 0, this.Za("checkboxes")), c = 0; c < b.length; c++) b[c].checked && a.push(b[c].name);
        this.o.o.set(a)
    };
    h.Dl = function() {
        return 35
    };
    h.Il = function() {
        var a = Ah(this.o.b.get());
        a.Ga += 35 * this.o.H.get();
        return a.Ya()
    };
    var SS = function(a, b, c, d) {
        WS.call(this, a, b, "Monthly", c, d)
    };
    v(SS, WS);
    h = SS.prototype;
    h.eq = function() {
        var a = this.o.o.get()[0] instanceof OM,
            b = XS(this, this.o.H.get(), "months", BJa),
            c;
        c = MS({
            type: "radio",
            className: "",
            id: this.hb("dowrepeat"),
            label: "day of the week",
            name: "repeatby",
            checked: a,
            title: "Repeat by day of the week",
            $c: "Repeat by day of the week"
        });
        a = !a;
        c = [MS({
            type: "radio",
            className: "",
            id: this.hb("domrepeat"),
            label: "day of the month",
            name: "repeatby",
            checked: a,
            title: "Repeat by day of the month",
            $c: "Repeat by day of the month"
        }), c];
        for (var a = "<tr><th>" + O("Repeat by:") + "</th><td>",
                d = c.length, e = 0; e < d; e++) a += O(c[e]);
        c = N(a + "</td></tr>");
        return [b, c]
    };
    h.$j = function(a) {
        return "MONTHLY" == a.T.get()
    };
    h.pm = function(a) {
        a.clear("MONTHLY")
    };
    h.Nh = function() {
        SS.qa.Nh.call(this);
        var a = T(this),
            b = this.Za("interval");
        a.ka(b, "change", this.cu);
        b = this.Za("domrepeat");
        a.ka(b, "click", p(this.DI, this, !1));
        b = this.Za("dowrepeat");
        a.ka(b, "click", p(this.DI, this, !0))
    };
    h.DI = function(a) {
        a ? (a = this.o.b.get(), this.o.o.set([kFa(a)])) : this.o.o.set([])
    };
    h.Dl = function() {
        return 35
    };
    h.Il = function() {
        var a = Ah(this.o.b.get());
        a.month += 35 * this.o.H.get();
        return a.Ya()
    };
    var TS = function(a, b, c, d) {
        WS.call(this, a, b, "Yearly", c, d)
    };
    v(TS, WS);
    h = TS.prototype;
    h.$j = function(a) {
        return "YEARLY" == a.T.get()
    };
    h.pm = function(a) {
        a.clear("YEARLY")
    };
    h.eq = function() {
        return [XS(this, this.o.H.get(), "years", AJa)]
    };
    h.Nh = function() {
        TS.qa.Nh.call(this);
        var a = T(this),
            b = this.Za("interval");
        a.ka(b, "change", this.cu)
    };
    h.Dl = function() {
        return 5
    };
    h.Il = function() {
        var a = Ah(this.o.b.get());
        a.year += 5 * this.o.H.get();
        return a.Ya()
    };
    var gNa = function(a, b, c) {
        c = c || {};
        b = a.id;
        a = a.prefix;
        return N('<input id="' + P(b) + 'repeatcheckbox" type="checkbox" class="checkbox"><label class="' + P(a) + '-label" for="' + P(b) + 'repeatcheckbox" id="' + P(b) + 'repeatlabel"></label><span class="' + P(a) + "-disabled " + P(a) + '-disabled-message" id="' + P(b) + 'repeatdisabled">' + O("A repeated event cannot start and end in different time zones") + '</span><span class="' + P(a) + '-summary" id="' + P(b) + 'repeatsummary"></span><a href="javascript:void(0)" id="' + P(b) + 'editlink" class="lk">' + O("Edit") + '</a><span id="' + P(b) + 'unsupportedwarning" class="' + P(a) + '-warning" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display:none">' + O("This event has a recurrence rule that cannot be edited in Google Calendar") + "</span>")
    };
    var YS = function(a, b, c, d, e, f) {
        S.call(this);
        this.H = b;
        this.V = a;
        this.Na = c;
        this.S = f || "ep-recl";
        this.ma = d;
        this.o = e
    };
    v(YS, S);
    h = YS.prototype;
    h.lf = null;
    h.Op = null;
    h.gy = !0;
    h.Jp = null;
    h.Xa = function() {
        var a = this.b.b("DIV", this.S);
        this.Ea = a;
        Km(a, gNa, {
            id: this.hb(""),
            prefix: this.S
        })
    };
    var ZS = function(a) {
        a.ha();
        var b = a.H,
            c = b.R.get(),
            d = b.qc() && qi(a.V);
        H(a.R, d);
        H(a.ta, d);
        var e = IE(a.ma.get()),
            e = !(!a.o || !RP(a.o)) && !e;
        H(a.yb, e && d);
        a.R.disabled = e;
        Wq(a.ta, a.S + "-disabled", e);
        a.R.checked = c;
        ze(a.ta, c ? "Repeat:\u00a0" : "Repeat...");
        H(a.Fa, c);
        b = vO(b, Xk(a.V).H, !0);
        ze(a.Fa, b ? Yn(b) : "Unknown");
        H(a.Db, c && !b);
        H(a.ua, c && d)
    };
    YS.prototype.Sa = function() {
        ZS(this)
    };
    YS.prototype.Ra = function() {
        hNa(this)
    };
    YS.prototype.Ba = function() {
        ZS(this)
    };
    YS.prototype.Va = function() {
        this.R.checked ? (this.o && this.o.Bv(null), this.gy ? hNa(this) : this.H.R.set(!0)) : (this.H.R.set(!1), this.gy = !1)
    };
    var hNa = function(a) {
        a.U = a.H.clone();
        a.U.R.set(!0);
        a.lf = new uF(a.S + "-dialog");
        a.lf.Vg = !0;
        a.lf.setTitle("Repeat");
        a.lf.xf(rm(N('<div id="' + P(a.hb("editordialog")) + '"></div>')));
        yv(T(a), a.lf, "afterhide", a.xW);
        a.Jp = Fv(document);
        a.lf.setVisible(!0);
        var b = a.b.b("DIV"),
            c = ND.va(),
            d = new KD("Done", c),
            c = new KD("Cancel", c);
        a.lf.Ua(d);
        a.lf.Ua(c);
        d.render(b);
        c.render(b);
        a.Op = new US(a.U, a.V, a.Na, a.ma, a.o, b);
        a.Op.render(a.Za("editordialog"));
        a.lf.Vb();
        a.lf.ha().focus();
        b = T(a.lf);
        bv(b, d, "action", a.eI, !1, a);
        bv(b, c,
            "action", a.dI, !1, a);
        bv(b, a.lf, "dialogselect", a.eI, !1, a);
        Sf(b, a.Op, "gb", a.d2, !1, a);
        b.ka(Vr.va(), "R", p(a.lf.setVisible, a.lf, !1))
    };
    h = YS.prototype;
    h.d2 = function() {
        this.La = !0
    };
    h.xW = function() {
        y(this.Op);
        this.Op = null
    };
    h.eI = function(a) {
        if ("cancel" == a.key) this.dI();
        else {
            this.lf.setVisible(!1);
            a = this.H;
            var b = this.U;
            a.Hc();
            a.T.set(b.T.get());
            a.b.set(b.b.get());
            a.R.set(b.R.get());
            a.La = b.qc();
            a.S.set(b.S.get());
            a.Ba.set(b.ac().get());
            a.H.set(b.H.get());
            a.o.set(b.o.get());
            a.ua.set(b.ua.get());
            a.ma.set(b.ma.get());
            a.U.set(b.U.get());
            a.V.set(b.V.get());
            a.Fa.set(b.Fa.get());
            a.Ec();
            this.gy = !1;
            this.La && (this.ya("gb"), this.La = !1);
            iNa(this)
        }
    };
    h.dI = function() {
        this.lf.setVisible(!1);
        ZS(this);
        iNa(this)
    };
    h.Ma = function() {
        YS.qa.Ma.call(this);
        this.R = this.Za("repeatcheckbox");
        this.ta = this.Za("repeatlabel");
        this.yb = this.Za("repeatdisabled");
        this.Fa = this.Za("repeatsummary");
        this.ua = this.Za("editlink");
        this.Db = this.Za("unsupportedwarning");
        ZS(this);
        var a = T(this);
        a.ka(this.H, "change", this.Sa);
        this.H.qc() && (a.ka(this.ua, "click", this.Ra), a.ka(this.R, "click", this.Va));
        this.o && (a.ka(this.o, "change", this.Ba), a.ka(this.ma, "change", this.Ba))
    };
    var iNa = function(a) {
        a.Jp && a.Jp.focus && (fE(a.Jp), a.Jp = null)
    };
    var jNa = function(a, b, c) {
            c = c || {};
            b = a.gB;
            var d = a.maxLength;
            a = "" + ('<div id="' + P(a.Ic.oL) + '" class="rtcs ' + P(a.Ic.Ro) + '"><div id="' + P(a.Ic.JI) + '"><span class="lk-button ' + P(a.Ic.Ro) + " " + P(a.Ic.eC) + '" role="button" tabindex="0" id="' + P(a.Ic.enable) + '">Add video call</span><span id="' + P(a.Ic.Cd) + '"><input class="textinput" id="' + P(a.Ic.gr) + '" maxlength="' + P(d) + '" value="' + P(b) + '"><span id="' + P(a.Ic.Sq) + '"><a class="rtc-link lk" rel="noreferrer" target="_blank" id="' + P(a.Ic.Qq) + '">' + $S(a) + '</a><span class="rtc-us"> | </span></span><span class="rtc-ed"><span id="' +
                P(a.Ic.Cp) + '"><span id="' + P(a.Ic.jl) + '" class="lk" role="button" tabindex="0">Change name</span> | </span><span style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display:none" id="' + P(a.Ic.Rq) + '"></span><span class="lk ' + P(a.Ic.Ro) + " " + P(a.Ic.RC) + '" role="button" tabindex="0">Remove</span></span></span></div><div id="' + P(a.Ic.gM) + '"></div></div>');
            return N(a)
        },
        kNa = function(a) {
            a = "" + ('<span class="lk-button ' + P(a.Ic.Ro) + " " + P(a.Ic.eC) + '" role="button" tabindex="0">Add video meeting details</span>');
            return N(a)
        },
        mNa =
        function(a) {
            if (null != a.Gk.uri && "" != a.Gk.uri) {
                var b = !!a.qB,
                    b = "" + ('<div><span class="rtc-hangout-icon goog-inline-block"></span>Join: <a class="lk-button rtc-web-lk" href="' + P(nn(a.Gk.uri)) + '" tabindex="0" target="_blank">' + O(a.Gk.name) + "</a>" + (b ? " | " + lNa(a) : "") + "</div>");
                null != a.Gk.zj && a.Gk.zj.length && (b += '<div class="rtc-phone">', a = a.Gk.zj[0], a.GK && (b += '<span class="rtc-phonenum">Or dial: ' + O(a.GK) + "</span>", a.ir && (b += '  <span class="rtc-passcode">PIN: ' + O(a.ir) + "#</span>")), b += "</div>");
                a = N(b)
            } else a =
                "" + ("<div><span>Guests will receive the meeting link and dial in details</span>" + (a.qB ? " | " + lNa(a) : "") + "</div>"), a = N(a);
            return N("" + a)
        },
        lNa = function(a) {
            a = "" + ('<span class="lk-button action-container ' + P(a.Ic.Ro) + " " + P(a.Ic.RC) + '" role="button" tabindex="0">Remove</span>');
            return N(a)
        },
        $S = function(a) {
            var b = a.yk,
                c = '<span class="rtc-hangout-icon goog-inline-block"></span>';
            a.tk ? c += "Join video call" : (a = "Join meeting: " + O(b), c += a);
            return N(c)
        },
        nNa = function(a) {
            return N('<a class="lk" href="' + P(nn(a.link)) + '" rel="noreferrer" target="_blank">' + $S(a) + "</a>")
        };
    var cT = function(a, b, c, d) {
        S.call(this);
        var e = c.U;
        this.Db = a;
        this.o = e;
        this.kd = d;
        this.Sa = b;
        this.S = c;
        a = new I(this);
        this.Hb(a);
        a.ka(c, "change", this.hd);
        this.R = new oNa(this);
        this.La = {};
        this.Ra = aT(this);
        this.Ba = !1;
        this.Na = 1 == TF(this.o).Lc && TF(this.o).name == bT(this)
    };
    v(cT, S);
    cT.prototype.Xa = function() {
        var a = this.o.xc(),
            b = 2 == a ? this.o.ee() || "" : "";
        this.Ea = $u(jNa, {
            Ic: this.R,
            gB: b,
            yk: dT(this.o),
            tk: 3 == a,
            maxLength: 15
        })
    };
    cT.prototype.Bc = function() {
        return !1
    };
    cT.prototype.Ma = function() {
        cT.qa.Ma.call(this);
        var a = this.b;
        this.yb = a.ha(this.R.enable);
        this.U = a.ha(this.R.Cd);
        this.H = a.ha(this.R.gr);
        this.V = a.ha(this.R.Cp);
        this.Ib = a.ha(this.R.jl);
        this.ua = a.ha(this.R.Qq);
        this.ta = a.ha(this.R.Sq);
        this.ma = a.ha(this.R.Rq);
        this.Va = a.ha(this.R.oL);
        this.Dc = a.ha(this.R.JI);
        this.Fa = a.ha(this.R.gM);
        a = T(this);
        a.ka(new Mz(this.Va), "action", this.wc);
        a.ka(new Mz(this.Ib), "action", this.Mb);
        a.ka(this.H, "keypress", this.sc);
        a.ka(this.H, "focus", this.Zb);
        a.ka(this.H, "blur", this.Sb);
        eT(this)
    };
    cT.prototype.hd = function() {
        var a = aT(this),
            b = a != this.Ra,
            c = ZHa(this.S);
        b ? (dN(a) != this.o.xc() && (pNa(this), b = TF(gN()), this.o.b = RF(b)), this.Ra = a) : c && !this.Ba && 0 == this.o.xc() && 4 == dN(a) && (a = aT(this), b = aN(this.S.o), iN(a, b.length) ? (c = this.S.ma.get(), a = hN(a, c, b)) : a = gN(), this.o.b = RF(TF(a)));
        a = TF(this.o);
        b = a.name;
        1 == TF(this.o).Lc && this.Na && TF(this.o).name != bT(this) && (this.S.Fb() || mb(JF(b))) && (a.name = bT(this), this.o.b = RF(a));
        eT(this)
    };
    var aT = function(a) {
        return a.S.T.b.get()
    };
    cT.prototype.wc = function(a) {
        if (a = jx(a.target, "rtc-action-container"))
            if (Ec(a, "add-rtc")) {
                this.Ba = !1;
                a = aT(this);
                a = dN(a);
                a = this.La[a];
                if (!a) {
                    a = aT(this);
                    var b = aN(this.S.o);
                    a = TF(hN(a, this.S.ma.get(), b))
                }
                this.o.b = RF(a);
                eT(this, !0)
            } else Ec(a, "rem-rtc") && (this.Ba = !0, pNa(this), this.o.clear(), eT(this))
    };
    var bT = function(a) {
            var b = aT(a),
                c = a.S.ma.get();
            a = aN(a.S.o);
            return xFa(b, c, a)
        },
        pNa = function(a) {
            var b = TF(a.o);
            0 !== b.Lc && (a.La[b.Lc] = b)
        };
    cT.prototype.Zb = function() {
        Gc(this.H, "rtc-wa")
    };
    cT.prototype.Sb = function() {
        Wq(this.ha(), "rtc-editing", !1);
        var a = this.o.ee(),
            b = this.H.value;
        a != b && (a = TF(this.o), a.name = b, this.o.b = RF(a), this.Na = !1);
        eT(this)
    };
    cT.prototype.sc = function(a) {
        (13 == a.keyCode || ud && 3 == a.keyCode) && this.H.blur()
    };
    cT.prototype.Mb = function() {
        H(this.ta, !1);
        H(this.H, !0);
        Wq(this.ha(), "rtc-editing", !0);
        Wq(this.H, "rtc-wa", !1);
        qNa(this)
    };
    var qNa = function(a) {
            setTimeout(p(function() {
                tf(this.H) && tf(this.U) && this.H.focus()
            }, a), 0)
        },
        eT = function(a, b) {
            if (a.Va) {
                var c = aT(a),
                    c = dN(c),
                    d = 4 == c,
                    e = d && 1 == TF(a.o).Lc,
                    c = 3 == c || 1 == c || e,
                    d = d && !e;
                H(a.Dc, c);
                H(a.Fa, d);
                (e = F(a.kd)) && ze(e, "Video call");
                if (d) c = TF(a.o), d = {
                    Ic: fT
                }, 4 == c.Lc ? (d.Gk = c, d.qB = !0, Km(a.Fa, mNa, d)) : Km(a.Fa, kNa, d);
                else if (c && (e = a.o.xc(), c = a.o.ee(), d = 0 != e, H(a.yb, !d), H(a.U, d), d)) {
                    a.H.value = c;
                    d = 3 == e;
                    e = 1 == e;
                    Wq(a.U, "rtc-um", d);
                    var f = a.o.getUrl(a.Sa, a.S);
                    f && a.ua && (Km(a.ua, $S, {
                        tk: d,
                        yk: dT(a.o)
                    }), XG(a.ua,
                        f));
                    d ? ((d = rNa(a.Db, a.Sa, a.S)) ? (Im(a.ma, d), a.b.Tg(a.ma, " | "), H(a.ma, !0), H(a.ta, !1)) : (H(a.ma, !1), H(a.ta, !0)), H(a.V, !1), H(a.H, !1)) : (H(a.V, e), H(a.H, !c), H(a.ta, !!f), H(a.ma, !1));
                    Gc(a.H, "rtc-wa");
                    c || (b ? qNa(a) : Fc(a.H, "rtc-wa"))
                }
            }
        },
        dT = function(a) {
            return a.Lz() ? a.ee() : a.ee() + " (" + a.Zj() + ")"
        },
        rNa = function(a, b, c) {
            a = ZG(kh(a), b, c);
            var d;
            c.Fb() ? d = c.U.ub() ? "Video call added" : "This event has a video call" : a ? d = "Too many attendees for a video call" : 3 == c.U.xc() && c.U.ub() && (d = "Video call added");
            return d ? N('<span class="rtc-hangout-icon-disabled goog-inline-block"></span>' +
                O(d)) : null
        },
        sNa = function(a, b) {
            var c = b.U,
                d = c.xc(),
                e = new cs;
            if (4 == d) return Tu(e, mNa, {
                Ic: fT,
                Gk: TF(c),
                qB: !1
            });
            var f = c.getUrl(a, b);
            if (null == f) return null;
            var d = 3 == d,
                g = M();
            return d && (g = rNa(g, a, b)) ? g : Tu(e, nNa, {
                link: f,
                tk: d,
                yk: dT(c)
            })
        },
        fT = {
            Ro: "rtc-action-container",
            eC: "add-rtc",
            RC: "rem-rtc"
        },
        oNa = function(a) {
            this.oL = a.hb("rc");
            this.JI = a.hb("hs");
            this.gM = a.hb("ts");
            this.enable = a.hb("en");
            this.Cd = a.hb("de");
            a.hb("bu");
            this.domain = a.hb("do");
            a.hb("pv");
            this.gr = a.hb("pe");
            this.Cp = a.hb("ew");
            this.jl = a.hb("ed");
            this.Qq = a.hb("jl");
            this.Sq = a.hb("jw");
            this.Rq = a.hb("jp");
            this.disable = a.hb("di");
            eb(this, fT)
        };
    var tNa = function(a) {
        var b = a.id;
        return N('<div class="drs"><span class="ep-edr-first-line"><span id="' + P(b) + '-edr-both"><span id="' + P(b) + '-edr-start" class="group">' + O(Iwa(a)) + '<span id="' + P(b) + '-edr-st-txt" class=edr-txt></span></span>' + O(AE(a)) + O(BE(a)) + '<span id="' + P(b) + '-edr-end" class="group">' + O(CE(a)) + '<span id="' + P(b) + '-edr-ed-txt" class=edr-txt></span></span><span id="' + P(b) + '-edr-both-txt" class=edr-txt></span></span><span id="' + P(b) + '-edr-tz" class=lk-button role=link tabindex=0>' + O("Time zone") + '</span></span><span class="ep-edr-second-line">' + O(DE(a)) + "</span></div>")
    };
    var gT = function(a, b) {
        S.call(this);
        this.S = a;
        this.R = b && b.getName();
        this.ma = {};
        b && this.ta(b);
        this.V = p(this.Ba, this);
        this.U = !1
    };
    v(gT, S);
    gT.prototype.ta = function(a) {
        this.ma[a.getName()] = a
    };
    gT.prototype.Xa = function() {
        for (var a = this.b, b = jh(this.S).get("country"), c = [], d = 0; d < NQ.length; d += 2) {
            var e = {
                value: NQ[d]
            };
            NQ[d] == b && (e.selected = "true");
            e = a.b("OPTION", e, zG(a, NQ[d + 1]));
            c.push(e)
        }
        this.o = a.b("SELECT", "tz-pck-country", c);
        this.H = a.b("SELECT", "tz-pck-timezone");
        this.R ? this.QB([this.ma[this.R]], !0) : this.QB([], !0);
        b = Gg(this.S, 822);
        c = p(this.ua, this);
        d = this.V;
        YE(b, p(b.TY, b), c, d);
        this.Ea = b = a.b("DIV", "tz-pck-pnl");
        this.Fa ? (c = this.hb("c"), d = this.hb("t"), this.o.id = c, this.H.id = d, a.Tg(b, me("DIV", {
                className: "tz-pck-cc goog-inline-block"
            },
            me("LABEL", {
                "for": c,
                className: "tz-pck-lbl"
            }, "Country:"), this.o), me("DIV", {
            className: "tz-pck-tc goog-inline-block"
        }, me("LABEL", {
            "for": d,
            className: "tz-pck-lbl"
        }, "Time zone:"), this.H))) : a.Tg(b, this.o, this.H)
    };
    gT.prototype.ua = function(a) {
        for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
        a = [];
        for (var d = this.o.options, c = 0; c < d.length; ++c) {
            var e = d[c];
            if (b[e.value]) {
                var f = new Option(e.text, e.value);
                f.selected = e.selected;
                a.push(f)
            }
        }
        for (c = b = d.length = 0; c < a.length; ++c) d[b] = a[c], ++b
    };
    var hT = function(a, b) {
        var c = Gg(a.S, 822),
            d = p(a.QB, a),
            e = a.V;
        YE(c, p(c.CT, c, b), d, e)
    };
    h = gT.prototype;
    h.QB = function(a, b) {
        var c = jh(this.S).Vf()[0],
            d = jh(this.S).Vf()[1];
        this.H.options.length = 0;
        var e = this.R;
        this.U && 0 < a.length && (e = a[0].getName());
        var f = !1,
            g = 0,
            k = p(this.ta, this),
            l = p(function(a) {
                var b;
                a.rg() ? (b = a.rg(), b = "" + a.Of + ' "' + b + '"') : b = a.Of;
                b = new Option(b, a.getName());
                a.getName() == e && (f = b.selected = !0);
                k(a);
                this.H.options[g] = b;
                ++g
            }, this);
        l(c);
        d && l(d);
        for (var m = 0; m < a.length; ++m) {
            var q = a[m];
            q.getName() == c.getName() || d && q.getName() == d.getName() || l(q)
        }
        f || (this.H.options[0].selected = !0);
        b || this.pz()
    };
    h.y8 = function(a) {
        if (!this.U && a) {
            var b;
            b = this.o.options;
            if (0 == b.length) b = !1;
            else {
                for (var c = !1, d = 0; d < b.length; ++d) {
                    var e = b[d];
                    e.value == a && (c = e.selected = !0)
                }
                b = c
            }
            b && hT(this, a)
        }
    };
    h.Ma = function() {
        gT.qa.Ma.call(this);
        var a = Gg(this.S, 822);
        if (this.R) {
            var b = p(this.y8, this),
                c = this.V;
            YE(a, p(a.R.H, a.R, this.R), b, c)
        } else hT(this, this.o.value), this.pz();
        a = T(this);
        a.ka(this.H, "change", this.pz);
        a.ka(this.o, "change", this.Q_)
    };
    h.pz = function() {
        var a = this.H.selectedIndex;
        0 <= a && (this.R = this.H[a].value)
    };
    h.Q_ = function() {
        this.U = !0;
        hT(this, this.o.value)
    };
    var uNa = function(a) {
        return a.R ? a.ma[a.R] : jh(a.S).Vf()[0]
    };
    gT.prototype.Ba = function() {};
    gT.prototype.focus = function() {
        this.o && this.o.focus()
    };
    var iT = function(a, b, c, d, e, f) {
        uF.call(this, "ep-etz-dialog", !0, void 0);
        this.La = d && c ? 1 : 0;
        this.Ra = new gT(a, b);
        this.Va = new gT(a, c);
        this.Sb = f;
        this.sc = !!b;
        this.ua = !!d;
        this.Ba = !!e;
        this.ab = K(a, oj);
        this.setTitle("Event Time Zone");
        this.Vg = !0
    };
    v(iT, cK);
    h = iT.prototype;
    h.Xa = function() {
        iT.qa.Xa.call(this);
        var a = this.b;
        this.R = a.b("INPUT", {
            id: "ep-etz-stz-cb",
            type: "checkbox"
        });
        this.Zb = a.b("LABEL", {
            "for": "ep-etz-stz-cb"
        }, zG(a, "Use separate start and end time zones"));
        this.Ib = a.b("DIV", "ep-etz-text", "A repeated event cannot start and end in different time zones");
        H(this.R, this.ua);
        H(this.Zb, this.ua);
        H(this.Ib, this.ua && !this.Ba);
        this.R.disabled = !this.Ba;
        this.Sa = a.b("FIELDSET", "ep-etz-box-start", a.b("LEGEND", "ep-etz-box-title", zG(a, "Event start")));
        this.Fa = a.b("FIELDSET",
            "ep-etz-box-end", a.b("LEGEND", "ep-etz-box-title", zG(a, "Event end")));
        this.Nc().appendChild(this.R);
        this.Nc().appendChild(this.Zb);
        this.Nc().appendChild(this.Ib);
        this.Nc().appendChild(this.Sa);
        this.Nc().appendChild(this.Fa);
        this.Ua(this.Ra);
        this.Ua(this.Va);
        zF(this, (new SC).set("yes", "Done", !0).set("no", "Cancel", !1, !0));
        this.sc && (this.Na = a.b("SPAN", "lk ep-etz-lk ep-etz-remove", "Remove event time zone..."), De(this.Na, !0), $q(this.Na, "link"), vF(this), this.He.appendChild(this.Na))
    };
    h.Ma = function() {
        iT.qa.Ma.call(this);
        this.Ra.render(this.Sa);
        this.ua && this.Ba && this.Va.render(this.Fa);
        vNa(this);
        var a = T(this);
        bv(a, this, "dialogselect", this.W_, void 0);
        this.ua && this.Ba && xv(a, this.R, HB, this.T1);
        this.sc && xv(a, this.Na, HB, this.H1);
        a.ka(this, "aftershow", this.BV)
    };
    h.BV = function() {
        !tf(this.R) || this.R.disabled ? this.Ra.focus() : this.R.focus()
    };
    h.W_ = function(a) {
        if (a = "yes" == a.key) {
            var b = uNa(this.Ra),
                c = 1 == this.La ? uNa(this.Va) : null;
            this.Sb(b, c)
        }
        this.ab.nb(a ? "tz_picker_done_clicked" : "tz_picker_cancel_clicked")
    };
    h.T1 = function() {
        this.La = this.R.checked ? 1 : 0;
        vNa(this);
        this.ab.nb(1 == this.La ? "tz_picker_toggle_separate" : "tz_picker_toggle_single")
    };
    h.H1 = function() {
        this.setVisible(!1);
        this.Sb(null, null)
    };
    var vNa = function(a) {
        1 == a.La ? (Gc(a.Sa, "ep-etz-box-single"), Gc(a.Fa, "ep-etz-box-single"), a.R.checked = !0) : (Fc(a.Sa, "ep-etz-box-single"), Fc(a.Fa, "ep-etz-box-single"), a.R.checked = !1)
    };
    var jT = function(a, b, c, d, e, f, g) {
        uF.call(this, f, g);
        this.setTitle(a);
        this.La = b;
        this.ua = c;
        this.Fa = [];
        this.Ba = e || this.ua[0];
        this.R = f || "";
        this.ke = d;
        eG(this, !0)
    };
    v(jT, uF);
    h = jT.prototype;
    h.Xa = function() {
        jT.qa.Xa.call(this);
        for (var a = this.b, b = this.hb("options"), c = [], d = 0; d < this.ua.length; ++d) {
            var e = this.ua[d],
                f = this.hb("option" + d),
                g = {
                    type: "radio",
                    id: f,
                    name: b,
                    className: this.R + "-od-radio",
                    tabIndex: 0,
                    value: e.getKey()
                },
                f = {
                    "for": f,
                    className: this.R + "-od-label"
                },
                g = a.b("INPUT", g);
            this.Fa.push(g);
            c.push(a.b("DIV", this.R + "-od-radio-div", g, a.b("LABEL", f, e.o)))
        }
        b = a.b("DIV", this.R + "-od-main");
        this.La && b.appendChild(a.b("DIV", this.R + "-od-message", this.La));
        b.appendChild(a.b("DIV", this.R + "-od-options",
            c));
        this.Nc().appendChild(b)
    };
    h.Ma = function() {
        jT.qa.Ma.call(this);
        var a = T(this);
        a.ka(this, "dialogselect", p(this.W5, this));
        for (var b = 0; b < this.Fa.length; ++b) {
            var c = this.ua[b],
                d = this.Fa[b];
            c.getKey() == this.Ba.getKey() && (d.checked = "checked");
            xv(a, d, HB, p(this.v6, this, c))
        }
    };
    h.Jb = function() {
        Tf(T(this));
        jT.qa.Jb.call(this)
    };
    h.v6 = function(a) {
        this.Ba = a
    };
    h.W5 = function(a) {
        "ok" == a.key ? this.ke(this.Ba) : this.ke(null)
    };
    var kT = function(a, b) {
        this.b = a;
        this.o = b
    };
    kT.prototype.getKey = function() {
        return this.b
    };
    var lT = function(a, b, c, d, e, f, g, k) {
        this.o = d;
        this.kd = !0;
        this.ab = K(a, oj);
        FE.call(this, a, b, null, null, e, f, g, k);
        var l = p(this.Db, this);
        a = T(this);
        a.ka(this, "change", function() {
            var a = this.ld();
            c.b.set(this.lb());
            c.o.set(a)
        });
        a.ka(c, "change", function() {
            var a = c.ld() && Rz(c).duration.equals(this.lb().duration);
            this.Na(Rz(c), c);
            OE(this, a, c);
            l(!1, p(function() {
                c.b.set(this.lb())
            }, this))
        });
        Rz(c) && this.Db(!1, p(function() {
            var a = c.ld();
            this.Na(Rz(c));
            OE(this, a)
        }, this))
    };
    v(lT, FE);
    var wNa = function(a, b, c, d, e, f, g, k) {
        return new lT(a, b, c, d, e, f, g, k)
    };
    lT.prototype.Ma = function() {
        lT.qa.Ma.call(this);
        var a = this.getId();
        this.Ib = this.b.ha(a + "-edr-both");
        this.Sa = this.b.ha(a + "-edr-both-txt");
        this.sc = this.b.ha(a + "-edr-start");
        this.wc = this.b.ha(a + "-edr-st-txt");
        this.Va = this.b.ha(a + "-edr-end");
        this.yb = this.b.ha(a + "-edr-ed-txt");
        this.Od = this.b.ha(a + "-edr-tz");
        xv(T(this), this.Od, HB, this.Je);
        this.Db(!0)
    };
    lT.prototype.Mb = function() {
        return $u(tNa, HE(this))
    };
    lT.prototype.Je = function() {
        var a = this.o.Se(),
            b = RP(this.o) ? QP(this.o) : null,
            a = new iT(this.Ta, a, b, !this.ld(), this.kd, p(this.Cg, this));
        a.Vg = !0;
        a.setVisible(!0);
        this.ab.nb("tz_picker_link_clicked")
    };
    lT.prototype.Cg = function(a, b) {
        if (a) {
            this.o.Hc();
            this.o.jB(a);
            this.o.Bv(b);
            var c = p(this.ya, this, "change"),
                d = p(this.o.Ec, this.o);
            this.Db(!0, function() {
                d();
                c()
            }, d)
        } else xNa(this)
    };
    var xNa = function(a) {
        if (a.o.am()) {
            var b = a.R,
                c = a.lb(),
                d = sE(a.Ta),
                e = jh(a.Ta).Vf()[0],
                f = d.uc(b.start),
                b = new mT("" + f + " " + e.Of + " (do not convert to equivalent local time)", b),
                d = d.uc(c.start),
                c = new mT("" + d + " " + e.Of + " (convert to equivalent time in your local time zone)", c),
                c = [b, c];
            a = p(a.tf, a);
            a = new jT("Remove Event Time Zone", "After this change, what time should the event occur?", c, a, void 0, "ep-etz-remove-dialog", void 0);
            a.Vg = !0;
            a.setVisible(!0)
        }
    };
    lT.prototype.tf = function(a) {
        a && (this.o.Hc(), this.o.jB(null), this.o.Bv(null), this.o.Ec(), this.Na(a.Bg), this.ya("change"), this.La())
    };
    lT.prototype.Zb = function() {
        if (null == this.o.Se() || null == QP(this.o)) return new Ch(0, 0, 0, 0);
        var a = this.R,
            b;
        b = this.o.Se();
        var c = a.start.tb();
        b = b.b(c);
        c = QP(this.o);
        a = a.end.tb();
        a = c.b(a) - b;
        return new Ch(0, 0, a, 0)
    };
    lT.prototype.Db = function(a, b, c) {
        var d = a ? p(this.La, this) : ia;
        a = function() {
            d();
            b && b()
        };
        var e = function() {
            d();
            c && c()
        };
        if (this.o.am()) {
            var f = RP(this.o),
                g = Gg(this.Ta, 822),
                k = function(a, b, c, d) {
                    a && b && jG(g, b, a, 1, function(a) {
                        c(a);
                        d && d()
                    }, e)
                };
            k(this.lb().start, this.o.Se(), p(this.o.jB, this.o), f ? null : a);
            f && k(this.lb().end, QP(this.o), p(this.o.Bv, this.o), a)
        } else a()
    };
    lT.prototype.La = function() {
        if (this.Sa) {
            if (!this.o.am() || (this.H ? this.H.checked : IE(this.R))) nT(this, this.Ib, this.Sa), nT(this, this.sc, this.wc), nT(this, this.Va, this.yb);
            else if (RP(this.o)) {
                nT(this, this.Ib, this.Sa);
                var a = this.o.Se(),
                    b = this.sc;
                this.b.Wd(this.wc, a.Of);
                Fc(b, "ep-edr-start-block");
                this.ld() ? nT(this, this.Va, this.yb) : (a = QP(this.o), b = this.Va, this.b.Wd(this.yb, a.Of), Fc(b, "ep-edr-end-block"))
            } else nT(this, this.sc, this.wc), nT(this, this.Va, this.yb), a = this.o.Se(), b = this.Ib, this.b.Wd(this.Sa, a.Of),
                Fc(b, "ep-edr-start-block");
            H(this.Od, !(this.H ? this.H.checked : IE(this.R)));
            lT.qa.La.call(this)
        }
    };
    var nT = function(a, b, c) {
        a.b.Wd(c, "");
        Gc(b, "ep-edr-start-block");
        Gc(b, "ep-edr-end-block")
    };
    lT.prototype.Na = function(a, b) {
        var c = WHa(this.o, a, !0);
        lT.qa.Na.call(this, c, b)
    };
    lT.prototype.lb = function() {
        return WHa(this.o, this.R, !1)
    };
    lT.prototype.Sb = function(a) {
        a = lT.qa.Sb.call(this, a);
        if (!a.duration && a.start && a.end) {
            var b = this.lb().start,
                c = this.lb().end;
            b.Wa() <= c.Wa() && (a.duration = Dh(a.end, a.start))
        }
        return a
    };
    var mT = function(a, b) {
        kT.call(this, (Pl++).toString(36), a);
        this.Bg = b
    };
    v(mT, kT);
    var oT = function(a, b, c, d, e, f) {
        vS.call(this, a, b, c, d, e, f)
    };
    v(oT, vS);
    oT.prototype.Ma = function() {
        oT.qa.Ma.call(this);
        T(this).ka(this.ha(), "click", this.U)
    };
    oT.prototype.U = function(a) {
        this.ha() != a.target || this.lb() != this.o && "" != this.lb() || xS(this, "")
    };
    oT.prototype.OG = function() {
        !this.xg() && this.R && (xS(this, this.o), this.ha().select())
    };
    oT.prototype.LG = function() {
        this.xg() || !this.o || this.lb() && this.lb() != this.o || yS(this)
    };
    var pT = function(a, b) {
        S.call(this);
        this.o = a || "";
        this.H = b || ""
    };
    v(pT, S);
    pT.prototype.Bc = function() {
        return !0
    };
    pT.prototype.Xa = function() {
        this.hc(this.b.b("DIV"))
    };
    pT.prototype.Ma = function(a) {
        var b = this.o;
        b instanceof py && T(this).ka(b, "change", this.S);
        this.R = new tS(this, ["enter", "leave"], a)
    };
    pT.prototype.Jb = function() {
        y(this.R);
        this.R = null;
        pT.qa.Jb.call(this)
    };
    var yNa = function(a, b) {
        var c = a.ha();
        b.getContent() || (b = O(a.H));
        if (E) {
            a.b.Ug(c);
            var d = a.b.createElement("pre");
            for (Im(d, b); d.firstChild;) c.appendChild(d.firstChild)
        } else Im(c, b);
        !b && a.H && Fc(c, "ui-placeholder")
    };
    pT.prototype.S = function() {
        yNa(this, zNa(this.o))
    };
    pT.prototype.hc = function(a) {
        pT.qa.hc.call(this, a);
        yNa(this, zNa(this.o))
    };
    var zNa = function(a) {
        return O(a instanceof KN ? a.R : a instanceof py ? a.get() : a || "")
    };
    var qT = function(a, b, c, d, e, f, g, k, l, m, q) {
        this.ta = a;
        this.U = b || null;
        this.S = c || null;
        this.b = d || null;
        this.o = e || null;
        this.R = f || null;
        this.H = g || null;
        this.T = k || null;
        this.ma = l || null;
        this.Ca = m || null;
        this.V = q || null
    };
    qT.prototype.getName = function() {
        return this.U
    };
    qT.prototype.getUrl = function() {
        return this.V
    };
    var rT = function(a, b, c, d) {
        vS.call(this, b, d);
        this.Na = a;
        this.Ra = c;
        this.U = this.ua = null
    };
    v(rT, vS);
    rT.prototype.Ma = function() {
        rT.qa.Ma.call(this);
        Gg(this.Na, 813).addCallback(p(this.La, this))
    };
    rT.prototype.La = function() {
        if (this.kb) {
            var a = this.ha();
            this.ua = new(fa("google.maps.places.Autocomplete"))(a);
            fa("google.maps.event.addListener")(this.ua, "place_changed", p(this.Va, this))
        }
    };
    rT.prototype.Va = function() {
        this.U = this.ua.getPlace();
        this.vt();
        this.U = null
    };
    rT.prototype.vt = function() {
        rT.qa.vt.call(this);
        this.Ra.set(ANa(this))
    };
    var ANa = function(a) {
            if (mb(a.lb()) || !a.U) return null;
            a = a.U;
            var b = a.reference;
            if (!b) return null;
            var c = a.name,
                d = a.formatted_address,
                e = a.address_components,
                f = sT(e, "country", !1),
                g = sT(e, "locality", !0),
                k = sT(e, "administrative_area_level_1", !0),
                l = sT(e, "post_box", !0),
                e = sT(e, "street_address", !0),
                m = null,
                q = null;
            a.geometry && a.geometry.location && (m = a.geometry.location.lat(), q = a.geometry.location.lng());
            return new qT(b, c, d, f, g, k, l, e, m, q, a.url)
        },
        sT = function(a, b, c) {
            if (!a) return null;
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (Zb(e.types, b)) return c ? e.long_name : e.short_name
            }
            return null
        };
    var tT = function(a, b) {
        S.call(this);
        this.o = a || "";
        this.H = b || ""
    };
    v(tT, S);
    tT.prototype.zw = function() {
        this.U = !0;
        uT(this, vT(this.o))
    };
    tT.prototype.Xa = function() {
        this.hc(this.b.b("DIV"))
    };
    tT.prototype.Ma = function(a) {
        var b = this.o;
        b instanceof py && T(this).ka(b, "change", this.S);
        this.R = new tS(this, ["enter", "leave"], a)
    };
    tT.prototype.Jb = function() {
        y(this.R);
        this.R = null;
        tT.qa.Jb.call(this)
    };
    var uT = function(a, b) {
        var c = a.ha();
        ze(c, b || a.H);
        a.U || b || !a.H ? Gc(c, "ui-placeholder") : Fc(c, "ui-placeholder")
    };
    tT.prototype.S = function() {
        uT(this, vT(this.o))
    };
    tT.prototype.hc = function(a) {
        tT.qa.hc.call(this, a);
        uT(this, vT(this.o))
    };
    var vT = function(a) {
        a = a instanceof py ? a.get() : a || "";
        return ob(a)
    };
    var wT = function(a, b, c, d) {
        S.call(this);
        this.H = a;
        this.S = b || 2;
        this.o = c || null;
        this.R = d || "ui-sch";
        this.V = this.R + "-edit";
        this.Ba = this.R + "-hover";
        this.ma = this.R + "-schmedit";
        this.ta = this.R + "-view"
    };
    v(wT, S);
    var CNa = function(a, b, c, d) {
            var e = new pT(a, c);
            return BNa(e, a, b, c, d)
        },
        BNa = function(a, b, c, d, e) {
            var f = 1 == c;
            b = f ? null : new vS(b, d, f, e);
            return new wT(a, c, b)
        },
        DNa = function(a, b) {
            var c = sE(a),
                d = b.b,
                e = d.wb();
            return b.ld() ? isNaN(e.hour) ? c.ef(e) : CIa(c, e) : (d = oy(d)) ? IE(d) ? c.Lp(d.start.Ya(), d.end.Ya()) : c.Lp(d.start.tb(), d.end.tb()) : ""
        },
        ENa = function(a, b, c, d) {
            d = d || 2;
            if (1 == d) return c = DNa(a, b), c = new pT(c, c || "No time specified"), new wT(c, 1);
            3 == d ? a = new pT : (a = DNa(a, b), a = new pT(a, a || "Add a time"));
            c = c();
            return new wT(a, d, c)
        };
    wT.prototype.U = null;
    wT.prototype.Bc = function() {
        return !0
    };
    wT.prototype.hc = function(a) {
        Fc(a, this.R);
        FNa(this, a)
    };
    wT.prototype.Xa = function() {
        FNa(this, this.b.b("DIV", this.R))
    };
    var FNa = function(a, b) {
        a.Ea = b;
        3 == a.S && a.o ? a.Ua(a.o, !0) : (a.Ua(a.H, !0), GNa(a))
    };
    wT.prototype.Ma = function() {
        wT.qa.Ma.call(this);
        if (2 == this.S) {
            var a = this.H,
                b = T(this);
            b.ka(a, "focus", this.ua);
            b.ka(a, "enter", this.La);
            b.ka(a, "leave", this.Fa);
            b.ka(a.ha(), "click", this.Na)
        }
    };
    var GNa = function(a) {
        1 == a.S ? Vq(a.H.ha(), [a.V, a.ma], a.ta) : 2 == a.S ? Vq(a.H.ha(), [a.V, a.ta], a.ma) : a.o || Vq(a.H.ha(), [a.ma, a.ta], a.V)
    };
    wT.prototype.La = function() {
        Fc(this.H.ha(), this.Ba)
    };
    wT.prototype.Fa = function() {
        Gc(this.H.ha(), this.Ba)
    };
    wT.prototype.Na = function(a) {
        "A" == a.target.tagName && a.target.href || (a = kG()) && !a.Ll() || this.ua()
    };
    wT.prototype.ua = function() {
        3 != this.S && (this.S = 3, Tf(T(this)), this.Fa(), this.o ? (this.removeChild(this.H, !0), this.H.Pa(), this.Ua(this.o, !0), this.U && ar(this.o.ha(), "labelledby", this.U), this.o.ha().focus()) : GNa(this))
    };
    var HNa = function(a, b) {
            a.U = b;
            a.o && a.o.kb && ar(a.o.ha(), "labelledby", a.U)
        },
        xT = function(a) {
            return a.Ra ? 1 : a.V
        };
    var INa = function(a) {
            var b = a.id,
                c = a.L4;
            a = a.Cd;
            return N('<div id="' + P(b) + 'chrome"><div>' + O(c) + '</div><div class=ep-dp><div class=ep-dp-cont><div class=ep-dp-panel><div><div class=ep-dp-guests id="' + P(b) + 'guestPanel"></div><div class=ep-dp-details>' + O(a) + "</div></div></div></div></div></div>")
        },
        yT = function(a) {
            var b = a.prefix,
                c = a.label;
            a = a.content;
            return N('<tr><th class="' + P(b) + '-dt-th"><label>' + O(c) + '</label></th><td class="' + P(b) + '-dt-td">' + O(a) + "</td></tr>")
        };
    var zT = function(a, b, c, d, e, f) {
        S.call(this);
        this.yb = cMa(a, b, c);
        this.S = a;
        this.Va = jh(a);
        this.H = b;
        this.Sa = d || "ep-dp";
        this.U = this.H.V;
        this.R = this.H.qc();
        this.ma = e || null;
        this.Db = f;
        T(this).ka(this.H.b, "change", this.VX)
    };
    v(zT, S);
    h = zT.prototype;
    h.wa = function() {
        zT.qa.wa.call(this);
        T(this).b(pi(this.S), "b", this.rG);
        this.Ba && (cf(this.Ba), this.Ba = null);
        y(this.Na);
        this.V = this.ua = this.Ra = this.ma = this.La = this.Fa = this.o = this.Na = null
    };
    h.Xa = function() {
        this.R && (this.ta = new yD("You must be online to edit appointment slots."), this.Ua(this.ta));
        this.Ra = wq.MB(this.H.ma, this.U, 2 == this.U ? "Click to add a title" : "(No title)");
        this.Ua(this.Ra);
        var a = this.H.La;
        if (this.R || a.get()) this.ua = wq.MB(a, this.U, 2 == this.U ? "Click to add a location" : void 0), this.Ua(this.ua);
        a = this.H.Na;
        if (this.R || a.get()) this.V = CNa(a, this.U, 2 == this.U ? "Click to add a description" : void 0, new uS(this.R, 3)), this.Ua(this.V);
        if (!this.ma) {
            var a = this.S.get(Dg),
                b = lQ(this.H.vb,
                    this.H.Fb()),
                a = kQ(a, this.H, b),
                b = (b = hh(this.S).T) ? b.Oa.clone() : new Zl({});
            this.ma = new CS(this.S, this.H, b, !0, !1, !0, !0, a)
        }
        this.Ua(this.ma);
        this.H.S && (this.Fa = new YS(this.S, this.H.S, !1, this.H.b, null), this.Ua(this.Fa));
        var a = this.S,
            c = p(this.WX, this),
            b = new $B(this.H.b, new ZB(!1)),
            d = this.U,
            c = p(hJa, null, a, c, b.b, 30, iJa, !0, !0);
        this.o = ENa(a, b, c, d);
        this.Ua(this.o);
        a = qi(this.S);
        this.La = new kz(this.H.$f, this.H.b, this.R, this.Db, a);
        this.Ua(this.La);
        a = this.hb("");
        b = {
            id: a,
            prefix: this.Sa
        };
        this.ua ? (d = b.id, d = N(yT($m({
            label: "Where",
            content: bn('<div class="' + P(b.prefix) + '-input" id="' + P(d) + 'where"></div>')
        }, b)))) : d = "";
        this.V ? (c = b.id, c = N(yT($m({
            label: "Description",
            content: bn('<div class="' + P(b.prefix) + '-descript" id="' + P(c) + 'description"></div>')
        }, b)))) : c = "";
        var e;
        this.R ? (e = b.id, e = N(yT($m({
            label: "Title",
            content: bn('<div class="' + P(b.prefix) + '-input-field" id="' + P(e) + 'title"></div><div class="sseb-explanation">' + O("This title will be used for any appointment slot booked from this block.") + "</div>")
        }, b)))) : e = "";
        var f = e;
        e = this.R ?
            "" : N('<div class="ep-title" id="' + P(a) + 'title"></div>');
        var g;
        this.R ? (g = b.id, g = N(yT($m({
            label: "Time block",
            content: bn('<div class="' + P(b.prefix) + '-input" id="' + P(g) + 'whenCell"></div>')
        }, b)))) : g = "";
        var k = g;
        g = this.R ? "" : N('<div class="ep-drs" id="' + P(a) + 'whenCell"></div>');
        var l = this.R ? N(yT({
                label: "Type:",
                prefix: b.prefix,
                content: bn('<div id="' + P(b.id) + 'slotOpts"></div>')
            })) : "",
            b = this.R ? "" : N('<div class="ep-drs" id="' + P(a) + 'slotOpts"></div>'),
            d = N('<table class="' + P(this.Sa) + '-dt">' + O(f) + O(k) + O(l) + O(d) +
                O(c) + "</table>"),
            b = N(O(e) + O(g) + O(b)),
            c = this.b.b("DIV", "sseb-root");
        Km(c, INa, {
            id: a,
            L4: b,
            Cd: d
        });
        this.Ea = c
    };
    h.WX = function() {
        var a = new uE(this.Va.Ed());
        return new xE(this.S, a, this.Va.ci())
    };
    h.Ma = function() {
        zT.qa.Ma.call(this);
        if (!this.Ra.kb && (this.Ra.render(this.Za("title")), this.ua && !this.ua.kb && this.ua.render(this.Za("where")), this.V && !this.V.kb && this.V.render(this.Za("description")), this.o.render(this.Za("whenCell")), Fc(this.o.ha(), "ep-drs"), Fc(this.o.ha(), "goog-inline-block"), this.Fa && (this.Fa.render(this.Za("whenCell")), Fc(this.Fa.ha(), "goog-inline-block")), this.La.render(this.Za("slotOpts")), this.ma.render(this.Za("guestPanel")), this.R)) {
            this.ta.render(this.ha());
            var a = T(this),
                b = pi(this.S);
            Sf(a, b, "b", this.rG, !1, this)
        }
        T(this).ka(window, "resize", this.A2)
    };
    h.VX = function() {
        var a = this.La;
        a.S = this.H.b;
        a.R();
        a.U()
    };
    h.rG = function(a) {
        a.Ob ? this.Ba && (cf(this.Ba), this.Ba = null) : (this.Na || (this.Na = new Fs), this.Ba = G(this.Na, "resize", p(this.sG, this, !1)));
        this.sG(a.Ob)
    };
    h.sG = function(a) {
        if (this.ta)
            if (zD(this.ta, this, a), a) this.ta.Eb();
            else {
                var b = this.Za("chrome");
                a = lf(b);
                b = rf(b);
                this.ta.show(a.x, a.y, b.width, b.height)
            }
    };
    h.A2 = function() {
        this.kb && E && (document.body.className = document.body.className)
    };
    var AT = function(a, b, c, d, e, f) {
        J.call(this);
        this.o = a;
        this.nh = b;
        this.R = c;
        this.Da = new I(this);
        this.b = new zT(this.o, this.nh, e, void 0, void 0, f);
        this.b.render(d);
        this.ab = K(this.o, oj)
    };
    v(AT, J);
    h = AT.prototype;
    h.nh = null;
    h.J8 = function(a, b, c) {
        var d = this.nh,
            e = AKa(d);
        e ? (a.push("scp", e), b()) : (d = BKa(d), a = r(function(a, b, c) {
            a.push("scp", c);
            b()
        }, a, b), wq.Us(!1, !0, d, a, c, "Would you like to change only these appointment slots, all appointment slots in the series, or this and all future appointment slots in the series?", "Only these appointment slots", "All appointment slots in the series", "All following"))
    };
    h.l8 = function(a) {
        var b = this.nh,
            c = this.R;
        a = b.Fb() ? c.b(b, a) : c.o(b, a);
        c = qk();
        b = b.Fb() ? "ss_new_appt_from_edit_page" : "ss_edit_appt";
        c.o = b;
        this.Da.ka(a, "Z", p(this.ZX, this, c));
        this.Da.ka(a, "$", p(this.YX, this));
        this.H = a;
        this.ya("lb");
        a.start()
    };
    h.ZX = function(a) {
        this.ya("kb");
        a.b();
        this.H = null;
        this.Pa()
    };
    h.YX = function() {
        this.ya("jb");
        this.H = null;
        this.Pa()
    };
    h.I6 = function() {
        this.ya("hb");
        this.Pa()
    };
    h.$X = function(a, b, c) {
        a = this.nh.b;
        a.wb().Wa() < a.Xb().Wa() ? b() : (b = 0 == Uh(oy(this.nh.b).duration) ? "Sorry, you can't create appointment slots that have the same start and end time." : "Sorry, you can't create a block of appointment slots that ends before it starts.", Vs(new Us, "Your Appointment Block", jd(b), c))
    };
    h.wa = function() {
        this.ya("ib");
        AT.qa.wa.call(this);
        y(this.Da);
        y(this.b);
        y(this.nh);
        this.nh = this.b = this.Da = null
    };
    h.XX = function(a, b) {
        var c = this.o.get(Eg);
        if (this.isDisposed() || this.H) c.Eb(), a();
        else {
            var d = p(function() {
                this.Pa();
                c.Eb();
                a()
            }, this);
            JS(this.nh, d, b)
        }
    };
    var BT = function(a, b, c, d) {
        S.call(this);
        this.S = a;
        this.U = b || "gc-ib";
        this.R = c;
        this.V = d;
        this.o = {}
    };
    v(BT, S);
    h = BT.prototype;
    h.Xa = function() {
        var a = this.b.b("DIV", this.U);
        this.Ea = a;
        Im(a, this.S);
        this.H = new IB(a);
        for (var b in this.o) a = this.o[b], LB(this.H, p(this.yG, this, b), a)
    };
    h.Ma = function() {
        BT.qa.Ma.call(this);
        this.R && (this.Id = new Gw(this.R, this.V))
    };
    h.Jb = function() {
        y(this.Id);
        BT.qa.Jb.call(this)
    };
    h.wa = function() {
        y(this.H);
        BT.qa.wa.call(this)
    };
    h.yG = function(a, b) {
        return sJa(b, a, this.ha())
    };
    var JNa = function(a, b, c) {
        a.o || (a.o = {});
        a.o[b] = c;
        a.H && LB(a.H, p(a.yG, a, b), c)
    };
    var KNa = function(a) {
            qi(a) && yH("http://support.google.com/calendar/bin/answer.py?answer=190998")
        },
        LNa = function(a, b) {
            if (qi(a)) {
                var c = jh(a);
                c.set("dismissedSelfschedulerTips", "true");
                c.b();
                b.Pa()
            }
        };
    var CT = function(a, b, c, d) {
        S.call(this);
        this.o = a;
        this.S = b;
        this.U = new py(b.get());
        this.ma = c || Ha;
        this.V = new I(this);
        this.vc = d || "gcal-ui-cs"
    };
    v(CT, S);
    CT.prototype.H = !0;
    CT.prototype.R = null;
    CT.prototype.Ab = function(a) {
        this.H != a && (this.H = a, MNa(this))
    };
    CT.prototype.isEnabled = function() {
        return this.H
    };
    var MNa = function(a) {
        var b = a.ha();
        b && (b.disabled = !a.H || !Fe(a.b, "OPTION", null, b).length)
    };
    h = CT.prototype;
    h.Bc = function(a) {
        return "SELECT" == a.tagName
    };
    h.hc = function(a) {
        this.Ea = a;
        if ((a = a.options) && a.length) {
            var b = this.R = {};
            C(a, function(a) {
                b[a.value] = !0
            }, this)
        }
        a = this.V;
        a.ka(this.o, "m", this.xG);
        a.ka(this.S, "change", this.RB);
        this.xG()
    };
    h.Xa = function() {
        this.hc(this.b.b("SELECT", {
            id: this.getId(),
            className: this.vc
        }))
    };
    h.wa = function() {
        CT.qa.wa.call(this);
        y(this.V)
    };
    h.Ma = function() {
        CT.qa.Ma.call(this);
        T(this).ka(this.ha(), "change", this.e5)
    };
    h.xG = function() {
        for (var a = this.ha(), b = this.b, c = this.R, d = a.options, e = d.length - 1; 0 <= e; --e) c && d[e].value in c || a.remove(e);
        c = this.o.Hi ? this.o.Hi() : this.o.sd();
        c = Sb(c, this.ma);
        Rb(c, function(c) {
            var e = c.getKey();
            c = b.b("OPTION", {
                id: this.hb(e),
                value: e,
                text: c.getTitle()
            });
            a.add(c, d.length ? d[0] : null)
        }, this);
        a.selectedIndex = 0;
        this.RB();
        MNa(this)
    };
    h.RB = function() {
        var a = this.ha(),
            b = this.o,
            c = this.S.get();
        if (b.contains(c))
            for (var b = a.options, d = b.length - 1; 0 <= d; --d)
                if (b[d].value == c) {
                    a.selectedIndex = d;
                    break
                }
    };
    h.e5 = function() {
        var a = this.ha(),
            b = a.options[a.selectedIndex],
            c = this.R;
        this.U.set(b && b.value);
        c && b.value in c ? (a.selectedIndex = 0, this.RB()) : this.S.set(this.U.get() || "");
        this.ya("change")
    };
    h.ha = function() {
        return S.prototype.ha.call(this)
    };
    var DT = function(a, b, c, d, e, f) {
        S.call(this);
        this.ta = a;
        this.Fa = b;
        this.V = c;
        this.R = f || null;
        this.Ba = d;
        this.ma = e
    };
    v(DT, S);
    var NNa = function(a) {
        var b = ND.va();
        a.o = new KD("", b);
        a.o.Qc("Back to calendar");
        a.Ua(a.o);
        a.ma && (a.S = new KD("Save", b), a.Ua(a.S), a.H = new KD(a.Ba ? "Discard changes" : "Discard", b), a.Ua(a.H), a.R && (a.U = new KD("Delete", b), a.Ua(a.U)))
    };
    DT.prototype.Xa = function() {
        NNa(this);
        var a = this.b,
            b = a.b("DIV", "gc-scdc-root");
        this.Ea = b;
        hy(this, function(c) {
            var d = a.b("DIV", "ep-ea-btn-wrapper ss-btn");
            b.appendChild(d);
            c.render(d)
        });
        this.S && (this.S.ha().parentNode.className += " action-btn-wrapper");
        this.o && (this.o.ha().parentNode.className += " back-btn")
    };
    DT.prototype.Ma = function() {
        DT.qa.Ma.call(this);
        var a = T(this);
        this.o ? (this.o.ha().id = "ss_back_btn", a.ka(this.o, "action", this.V)) : a.ka(this.Za("backLink"), "click", this.V);
        if (this.ma) {
            this.S.ha().id = "ss_save_btn";
            this.H.ha().id = "ss_cncl_btn";
            a.ka(this.S, "action", this.Fa);
            a.ka(this.H, "action", this.V);
            this.R && a.ka(this.U, "action", this.R);
            var a = T(this),
                b = pi(this.ta);
            Sf(a, b, "b", this.ua, !1, this)
        }
    };
    DT.prototype.ua = function(a) {
        a = a.Ob;
        this.S && this.S.Ab(a);
        this.U && this.U.Ab(a)
    };
    var ONa = function(a) {
            a = a.id;
            return N('<div id="' + P(a) + 'topControls" class="eac-nav"></div><div id="' + P(a) + 'tips" class="eac-tips"></div><div id="' + P(a) + 'container" class="eac-body"></div><div id="' + P(a) + 'bottomControls" class="eac-nav-bot"></div>')
        },
        PNa = function(a, b, c) {
            c = c || {};
            b = a.iT;
            var d = a.Uq;
            a = a.url;
            return N('<div class="eac-cal-container"><div><span style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'font-weight:bold">' + O("Create appointment slots on calendar") + ': </span><span id="' + P(b) + '"></span></div><div class="eac-ss-publish"><span>' + O("This calendar's appointment page") + ': <a target="_blank" id="' + P(d) + '" href="' + P(nn(a)) + '" class="eac-ss-url to-disable" to-disable-tabindex="true">' + O(a) + "</a></span></div></div>")
        };
    var ET = function(a, b, c) {
        S.call(this);
        this.R = a;
        this.S = b;
        this.H = c || "ep-at"
    };
    v(ET, S);
    ET.prototype.Xa = function() {
        var a = this.b,
            b = a.b("TR", this.H);
        this.Ea = b;
        var c = a.b("TD", this.H + "-doc-col"),
            d = a.b("TD", this.H + "-remove-col");
        b.appendChild(c);
        b.appendChild(d);
        var b = a.b("IMG", {
                "class": this.H + "-icon",
                src: this.R.H
            }),
            e = this.R.getTitle(),
            f = a.b("DIV", this.H + "-title", e),
            e = a.b("A", {
                "class": this.H + "-link",
                href: this.R.getUrl(),
                target: "_blank",
                "aria-label": "Attachment: " + e
            });
        e.appendChild(b);
        e.appendChild(f);
        c.appendChild(e);
        this.S && (this.o = a.b("DIV", this.H + "-remove"), this.o.tabIndex = 0, this.o.title = "Remove attachment", $q(this.o, "button"), d.appendChild(this.o))
    };
    ET.prototype.Ma = function() {
        ET.qa.Ma.call(this);
        this.o && xv(T(this), this.o, HB, this.U)
    };
    ET.prototype.U = function() {
        this.ya("mb")
    };
    var FT = function(a) {
        this.H = a;
        this.b = {}
    };
    h = FT.prototype;
    h.he = function(a) {
        this.o = a || void 0;
        return this
    };
    h.Le = function() {
        var a = Va(this.b, function(a) {
                return null !== a
            }),
            a = bb(a) ? null : a,
            a = [this.H, this.o, a],
            b = Epa(a, Ia);
        return a = a.slice(0, b + 1)
    };
    h.toString = function() {
        var a = this.Le();
        return "(" + Tb(a, function(a) {
            return Sa(a)
        }).join(",") + ")"
    };
    h.getId = function() {
        return this.H
    };
    h.rg = function() {
        return this.o
    };
    var GT = function(a) {
        FT.call(this, "upload");
        this.b.query = a
    };
    v(GT, FT);
    GT.prototype.he = function(a) {
        GT.qa.he.call(this, a);
        return this
    };
    var HT = function() {
        GT.call(this, "docs")
    };
    v(HT, GT);
    var QNa = function() {
        var a = new HT;
        a.b.includeFolders = !0;
        return a
    };
    HT.prototype.he = function(a) {
        HT.qa.he.call(this, a);
        return this
    };
    var IT = function(a) {
        FT.call(this, a || "all")
    };
    v(IT, FT);
    var RNa = function(a) {
            var b = new IT;
            n(a) ? b.b.ownedByMe = a : delete b.b.ownedByMe;
            return b
        },
        SNa = function(a) {
            a.b.includeFolders = !0;
            return a
        };
    IT.prototype.he = function(a) {
        IT.qa.he.call(this, a);
        return this
    };
    var JT = function() {
        FT.call(this, "image-search")
    };
    v(JT, FT);
    JT.prototype.Cm = function(a) {
        this.b.imgsz = a;
        return this
    };
    JT.prototype.zm = function(a) {
        this.b.imgcolor = a;
        return this
    };
    JT.prototype.he = function(a) {
        JT.qa.he.call(this, a);
        return this
    };
    var KT = function() {
        FT.call(this, "maps")
    };
    v(KT, FT);
    KT.prototype.he = function(a) {
        KT.qa.he.call(this, a);
        return this
    };
    var LT = function() {
        FT.call(this, "photos")
    };
    v(LT, FT);
    LT.prototype.he = function(a) {
        LT.qa.he.call(this, a);
        return this
    };
    var MT = function() {
        FT.call(this, "url")
    };
    v(MT, FT);
    MT.prototype.he = function(a) {
        MT.qa.he.call(this, a);
        return this
    };
    var NT = function() {
        FT.call(this, "video-search")
    };
    v(NT, FT);
    NT.prototype.he = function(a) {
        NT.qa.he.call(this, a);
        return this
    };
    var OT = function() {
        FT.call(this, "web")
    };
    v(OT, FT);
    OT.prototype.he = function(a) {
        OT.qa.he.call(this, a);
        return this
    };
    var PT = function(a) {
            this.o = pa(a) ? new FT(a) : a;
            this.b = [];
            this.H = {}
        },
        TNa = function(a) {
            switch (a) {
                case "image-search":
                    return new JT;
                case "maps":
                    return new KT;
                case "photos":
                    return new LT;
                case "url":
                    return new MT;
                case "video-search":
                    return new NT;
                case "web":
                    return new OT
            }
            return new FT(a)
        },
        QT = function(a, b) {
            a.b.push(pa(b) ? TNa(b) : b);
            return a
        },
        RT = function(a) {
            return "(" + Tb(a.b, function(a) {
                return a.toString()
            }).join(",") + ")"
        },
        UNa = function(a) {
            a = Va(a.H, function(a) {
                return null !== a
            });
            return (a = bb(a) ? null : a) ? Sa(Wa(a, function(a) {
                return a.toString()
            })) : ""
        };
    PT.prototype.toString = function() {
        if (this.o) {
            var a = ["{root:", this.o.toString(), ",items:", RT(this)],
                b = UNa(this);
            b && (a.push(",options:"), a.push(b));
            a.push("}");
            return a.join("")
        }
        return RT(this)
    };
    var ST = function(a) {
        this.action = a;
        this.wfv = !1
    };
    var VNa = function(a, b) {
        ST.call(this, "set-drive-options");
        this.appId = a;
        this.appOrigin = b
    };
    v(VNa, ST);
    var TT = function(a) {
        ST.call(this, "visibility");
        this.visible = a
    };
    v(TT, ST);
    var WNa = function(a, b, c) {
        uF.call(this, a, b, c)
    };
    v(WNa, uF);
    var XNa = Xc(yc(Ac("//www-onepick-opensocial.googleusercontent.com/gadgets/js/rpc.js?c=1&container=onepick"))),
        YNa = Xc(yc(Ac("//apis.google.com/js/rpc.js"))),
        UT = function(a) {
            a = a && Ge(a) || window;
            return a.gadgets && a.gadgets.rpc
        },
        VT = null,
        ZNa = function(a, b) {
            var c = b && Ge(b) || window;
            if (UT(b)) a();
            else if (VT) VT.push(a);
            else var d = VT = [a],
                e = c.setInterval(function() {
                    if (UT(b)) {
                        c.clearInterval(e);
                        for (var a = 0; a < d.length; a++) d[a]();
                        VT = null
                    }
                }, 100)
        };
    var $Na = function(a, b) {
        var c;
        a: {
            for (c = b.target; c;) {
                if (1 == c.nodeType) {
                    var d = kf(c, "overflowY");
                    if ("auto" == d || "scroll" == d) break a
                }
                c = c.parentNode
            }
            c = null
        }
        if (!c || !xe(a, c) || c.scrollHeight == c.clientHeight || 0 < b.deltaY && 1 >= Math.abs(c.scrollTop - (c.scrollHeight - c.clientHeight)) || 0 > b.deltaY && 0 == c.scrollTop) b.preventDefault(), b.stopPropagation()
    };
    var WT;
    var XT = function(a, b, c, d, e, f) {
        uF.call(this, f ? f + " " + this.vc : this.vc, !0, c);
        Zya(a, "protocol");
        this.R = yb();
        this.Fa = yb();
        c = tG(tG(new sm(a), "rpctoken", this.Fa), "rpcService", this.R);
        tm(c, "https");
        this.Ek = c.toString();
        this.Aj && (this.Aj.src = this.Ek);
        this.Ib = d;
        this.Va = e;
        n(void 0) ? d = void 0 : n(d) || n(e) ? d = !0 : (d = sG(Bm(a), "hostId"), WT || (WT = new Le("DocVerse fusiontables geo geowiki gm gmail-gadget gws hotpot jointly presentations pwa sites templates trix trix-copy-sheet webstore".split(" "))), d = !WT.contains(d));
        this.La =
            d;
        b && (sG(Bm(a), "hostId"), b = "true" == sG(Bm(this.Ek), "grugl") ? YNa : XNa, d = this.b, UT(d) || (d = d || ce(document), e = d.createElement("script"), EFa(e, b), e.type = "text/javascript", d.Qb().body.appendChild(e)));
        b = null;
        d = a.indexOf("/picker?"); - 1 < d ? b = a.substring(0, d + 8 - 1) : lb(a, "/picker") && (b = a);
        b && this.setRelayUrl(b + "/resources/rpc_relay.html");
        this.Fp = !1;
        zF(this, null)
    };
    v(XT, WNa);
    h = XT.prototype;
    h.vc = "picker modal-dialog";
    h.Ek = "";
    h.Aj = null;
    h.Zu = !1;
    h.ke = ia;
    h.Ma = function() {
        XT.qa.Ma.call(this);
        var a = this.fk(),
            b = T(this),
            c = new Hw(a);
        b.Hb(c);
        b.ka(c, "mousewheel", p($Na, void 0, a)).ka(a, "scroll", p($Na, void 0, a))
    };
    h.render = function(a) {
        XT.qa.render.call(this, a);
        this.Aj = this.b.b("IFRAME", {
            id: this.R,
            name: this.R,
            "class": "picker-frame",
            src: aOa(this),
            onload: p(this.Ra, this),
            frameBorder: "0"
        });
        this.Nc().appendChild(this.Aj);
        Fc(this.ha(), "picker-dialog");
        this.Aj.src = this.Ek;
        YT(this, p(function(a) {
            a.setAuthToken(this.R, this.Fa)
        }, this));
        (a = sG(Bm(this.Ek), "title")) && this.setTitle(a)
    };
    var aOa = function(a) {
        return E && Cd("7") && kb(a.Ek, "https") ? "https://about:blank" : Bua
    };
    XT.prototype.Ra = function() {
        this.Aj.src != aOa(this) && (this.Zu = !0, T(this).b(Ge(this.b), "keydown", this.ua), De(this.Aj, !0), this.qb() && this.focus())
    };
    XT.prototype.ua = function(a) {
        27 == a.keyCode && (this.setVisible(!1), this.ke({
            action: "cancel"
        }), a.stopPropagation(), a.preventDefault())
    };
    var YT = function(a, b) {
            var c = a.b;
            ZNa(function() {
                b(Ge(c).gadgets.rpc)
            }, c)
        },
        bOa = function(a, b) {
            a.ke = b;
            YT(a, p(function(a) {
                a.register(this.R, p(this.Sa, this))
            }, a))
        };
    XT.prototype.Sa = function(a) {
        var b = a.action;
        "loaded" == b && (ZT(this, new TT(this.qb())), this.Na && ZT(this, new VNa(this.Na, window.location.protocol + "//" + window.location.host)), dG(this, !1));
        "picked" != b && "cancel" != b || this.setVisible(!1);
        this.ke(a)
    };
    XT.prototype.setRelayUrl = function(a) {
        YT(this, p(function(b) {
            b.setRelayUrl(this.R, a)
        }, this))
    };
    var ZT = function(a, b) {
        YT(a, p(function(a) {
            a.call(this.R, "picker", null, b)
        }, a))
    };
    XT.prototype.Ba = function() {
        var a = this.b.Qb(),
            a = le(a) || window;
        if ("true" == sG(Bm(this.Ek), "shadeDialog")) {
            var b = xf(jQ(this), "margin"),
                c = ie(a),
                a = c.width - 80,
                c = c.height - 40;
            b && (a -= b.left ? b.left : 0, a -= b.right ? b.right : 0, c -= b.top ? b.top : 0, c -= b.bottom ? b.bottom : 0);
            a = new Ta(0 < a ? a : 0, 0 < c ? c : 0)
        } else {
            var b = this.Ib,
                d;
            b ? (b = Math.max(320, Math.min(1051, b)), c = this.Va, c || (c = ie(a), c = .85 * c.height), d = Math.max(320, Math.min(650, c))) : (c = ie(a), b = .618 * c.width, d = b < c.height ? Math.round(Math.max(320, Math.min(650, .85 * b))) : Math.round(Math.max(320,
                Math.min(650, .85 * c.height))), b = Math.round(d / .618));
            c = ie(a);
            b = Math.min(b, Math.max(c.width, 320));
            d = Math.min(d, Math.max(c.height, 320));
            a = new Ta(b, d)
        }
        ex(this.Nc(), a);
        this.Vb()
    };
    XT.prototype.Vb = function() {
        if ("true" == sG(Bm(this.Ek), "shadeDialog")) {
            var a = rf(this.ha()),
                a = Math.floor(ie(Ge(this.b)).width / 2 - a.width / 2),
                b = xf(jQ(this), "margin");
            if (b) {
                var c;
                c = 0 + (b.left ? b.left : 0);
                c += b.right ? b.right : 0;
                a = Math.floor(a - c / 2)
            }
            a = 0 < a ? a : 0;
            b = ke(this.b.o).y;
            tw(this.ha(), a, b)
        } else XT.qa.Vb.call(this)
    };
    XT.prototype.setVisible = function(a) {
        if (a != this.qb() && this.La) {
            var b = Ge(this.b);
            a ? (this.Ba(), T(this).ka(b, "resize", this.Ba), this.Zu || T(this).ka(b, "keydown", this.ua)) : (T(this).b(b, "resize", this.Ba), this.Zu || T(this).b(b, "keydown", this.ua))
        }
        XT.qa.setVisible.call(this, a);
        ZT(this, new TT(a))
    };
    XT.prototype.focus = function() {
        XT.qa.focus.call(this);
        if (this.Aj && this.Zu) try {
            this.Aj.focus()
        } catch (a) {}
    };
    var $T = function(a) {
        this.R = a || "https://docs.google.com/picker";
        this.o = new PT
    };
    $T.prototype.o = null;
    var cOa = function(a) {
            a.o.b.push((new FT(null)).he("-"));
            return a
        },
        aU = function(a, b) {
            QT(a.o, b);
            return a
        };
    var dOa = function(a) {
        $T.call(this, a)
    };
    v(dOa, $T);
    var bU = function(a) {
        $T.call(this, a);
        this.b = new sm(this.R);
        eOa(this);
        (a = window.location.origin) || (a = window.location.protocol + "//" + window.location.host);
        a && tG(this.b, "origin", a);
        this.H = []
    };
    v(bU, dOa);
    var fOa = function(a) {
        tG(a.b, "multiselectEnabled", "true");
        return a
    };
    bU.prototype.getHeight = function() {
        return this.T
    };
    bU.prototype.getTitle = function() {
        return sG(this.b, "title")
    };
    var gOa = function(a) {
            tG(a.b, "hostId", "calendar");
            return a
        },
        hOa = function(a) {
            tG(a.b, "hl", "en");
            return a
        },
        eOa = function(a) {
            tG(a.b, "protocol", "gadgets");
            return a
        };
    bU.prototype.setRelayUrl = function(a) {
        tG(this.b, "relayUrl", a);
        return this
    };
    bU.prototype.Cm = function(a, b) {
        this.T = b;
        return this
    };
    bU.prototype.setTitle = function(a) {
        tG(this.b, "title", a);
        return this
    };
    var cU = function(a, b, c) {
        J.call(this);
        hh(a);
        a = /corp\.google\.com$/.test(window.location.hostname) ? "//sandbox.google.com/picker-dev/picker" : "//docs.google.com/picker";
        var d = Gm() + "/rpc_relay.html";
        a = eOa(hOa(gOa(new bU(a)))).setRelayUrl(d);
        b && a.setTitle(b);
        b = Sv();
        null != b && tG(a.b, "authuser", b);
        this.o(a);
        a.H.length && tG(a.b, "pp", Sa(a.H));
        b = tG(a.b, "nav", RT(a.o)).clone();
        this.b = new XT(b.toString());
        bOa(this.b, p(this.H, this));
        this.b.H = c || "onepick-dialog"
    };
    v(cU, J);
    cU.prototype.show = function() {
        pJa(p(function() {
            this.b.setVisible(!0)
        }, this))
    };
    cU.prototype.Eb = function() {
        this.b.qb() && this.b.setVisible(!1)
    };
    var dU = function(a, b, c) {
        cU.call(this, a, b, c);
        this.T = Zj(a).isEnabled(8)
    };
    v(dU, cU);
    dU.prototype.R = null;
    dU.prototype.o = function(a) {
        if (this.T) fOa(aU(aU(cOa(aU(aU(a, SNa(RNa(!0)).he("My Drive")), SNa(RNa(!1)).he("Shared with me"))), QNa()), "recently-picked")).setTitle("Add attachment from Google Drive");
        else {
            var b = QT(QT(QT(QT(QT(new PT("all"), "documents"), "spreadsheets"), "presentations"), "folders"), "forms");
            a.o.b.push(b);
            fOa(aU(aU(a, new GT("docs")), "recently-picked"))
        }
    };
    dU.prototype.H = function(a) {
        if ("picked" == a.action) {
            a = a.docs;
            for (var b = [], c = 0; c < a.length; c++) {
                var d = a[c];
                b.push(new GN(d.url, d.id, d.name, d.iconUrl))
            }
            this.R = b;
            this.ya("change")
        }
    };
    var eU = function(a, b, c, d, e) {
        S.call(this);
        this.U = a;
        this.R = b;
        this.ua = c;
        this.V = d || "ep-ats";
        this.o = e;
        this.Fa = new I(this)
    };
    v(eU, S);
    h = eU.prototype;
    h.Xa = function() {
        var a = this.b,
            b = a.b("DIV", this.V);
        this.Ea = b;
        this.ma = a.b("TABLE", this.V + "-list");
        this.ta = a.b("TBODY");
        this.ma.appendChild(this.ta);
        b.appendChild(this.ma);
        this.H = a.b("SPAN", this.V + "-add lk-button", "Add attachment");
        this.H.tabIndex = 0;
        $q(this.H, "button");
        b.appendChild(this.H);
        var c = this.V + "-dsabld",
            a = this.b,
            d = this.hb("disabled"),
            e = this.hb("disabledlm"),
            c = a.b("DIV", c),
            f = a.b("SPAN", {
                id: d
            }, "Adding attachments has been disabled by your domain administrator. ");
        c.appendChild(f);
        d = a.b("A", {
            href: "http://support.google.com/docs/?p=drive_disabled_web",
            target: "_blank",
            "aria-labelledby": d + " " + e
        });
        $q(d, "link");
        a = a.b("SPAN", {
            id: e
        }, "Learn more");
        d.appendChild(a);
        c.appendChild(d);
        this.Ba = c;
        b.appendChild(this.Ba);
        this.Fa.ka(this.R, "m", this.rM);
        this.rM()
    };
    h.Ma = function() {
        eU.qa.Ma.call(this);
        xv(T(this), this.H, HB, this.Na);
        this.o && iOa(this)
    };
    h.wa = function() {
        eU.qa.wa.call(this);
        this.Fa.Pa()
    };
    h.rM = function() {
        var a = T(this);
        if (this.S)
            for (var b = 0; b < this.S.length; b++) this.removeChild(this.S[b]);
        this.S = [];
        pe(this.ta);
        var c = this.ua,
            d = this.R.sd();
        d.sort($Ia);
        for (b = 0; b < d.length; b++) {
            var e = d[b],
                f = new ET(e, c);
            this.Ua(f);
            this.S.push(f);
            f.render(this.ta);
            a.ka(f, "mb", p(this.B7, this, e))
        }
        a = !this.R.isEmpty();
        b = fU(this) && this.ua;
        c = !fU(this) && !!qw(this.U).b;
        H(this.ma, a);
        H(this.H, b);
        H(this.Ba, c);
        ze(this.H, a ? "Add another attachment" : "Add attachment")
    };
    h.B7 = function(a) {
        this.R.remove(a.getKey())
    };
    var fU = function(a) {
        var b = Zj(a.U);
        a = b.isEnabled(9);
        b = b.isEnabled(10);
        return a || b
    };
    eU.prototype.Na = function() {
        this.o || (this.o = new dU(this.U), T(this).ka(this.o, "change", this.La), iOa(this));
        this.o.show()
    };
    var iOa = function(a) {
        T(a).ka(Vr.va(), "R", p(a.o.Eb, a.o))
    };
    eU.prototype.La = function() {
        TM(this.R, this.o.R) || this.ya("nb")
    };
    var gU = function(a, b) {
            this.R = a;
            mM.call(this, b, jOa || (jOa = new XL([86400, 604800], -86400)))
        },
        jOa;
    v(gU, mM);
    gU.prototype.Kb = function(a) {
        var b = new Date(this.R.get().year, this.R.get().month - 1, this.R.get().Ga),
            c = this.value.get(),
            c = new Date(b.getTime() - 1E3 * c);
        a = new Date(b.getTime() - 1E3 * a);
        a.setHours(c.getHours());
        a.setMinutes(c.getMinutes());
        a.setSeconds(c.getSeconds());
        b = Dh(tH(b), tH(a));
        this.value.set(b.b)
    };
    gU.prototype.lb = function() {
        var a = new Date(this.R.get().year, this.R.get().month - 1, this.R.get().Ga),
            b = this.value.get(),
            b = new Date(a.getTime() - 1E3 * b),
            b = sH(b),
            a = Bh(sH(a), b);
        return Math.abs(86400 * a)
    };
    var hU = function(a, b, c, d, e, f, g, k) {
        oM.call(this, a, b, c, d, k);
        this.ma = e;
        this.S = new hz(Uva(a, !0));
        this.R = f;
        this.Fa = g || function(a, b) {
            return N(O(a) + O(b))
        }
    };
    v(hU, oM);
    hU.prototype.Xa = function() {
        hU.qa.Xa.call(this);
        var a = N('<span class="gcal-reminder-duration"></span>'),
            b = N('<input class="gcal-reminder-time-of-day">'),
            a = wIa(N("<span>" + O(this.Fa(a, b)) + "</span>"), this.b),
            a = this.b.b("DIV", "gcal-reminder", this.o, a, this.H),
            b = Be(a, function(a) {
                return 1 == a.nodeType && Ec(a, "gcal-reminder-duration")
            }),
            c = Be(a, function(a) {
                return 1 == a.nodeType && Ec(a, "gcal-reminder-time-of-day")
            });
        this.Ua(this.ma);
        this.Ua(this.S);
        this.ma.render(b);
        $x(this.S, c);
        this.Ea = a
    };
    hU.prototype.Ma = function() {
        hU.qa.Ma.call(this);
        kOa(this);
        T(this).ka(this.S, "change", this.ta);
        T(this).ka(this.S.ha(), "change", this.ta);
        T(this).ka(this.R, "change", this.ta);
        this.km()
    };
    hU.prototype.km = function() {
        hU.qa.km.call(this);
        this.ma.ha().title = "Reminder time";
        this.S.ha().title = "Reminder time"
    };
    var kOa = function(a) {
        var b = new Date(a.R.get().year, a.R.get().month, a.R.get().Ga),
            c = a.Rb.Pe.get(),
            b = tH(new Date(b.getTime() - 1E3 * c));
        a.S.ha().value = sE(a.Ta).uc(b.nd())
    };
    hU.prototype.ta = function() {
        var a = new Date(this.R.get().year, this.R.get().month, this.R.get().Ga),
            b = this.Rb.Pe.get(),
            b = tH(new Date(a.getTime() - 1E3 * b)),
            c = Gg(this.Ta, 3).S.b(this.S.ha().value);
        c && (b.hour = c.hour, b.minute = c.minute, b.second = c.second, a = Dh(tH(a), b).b, this.Rb.Pe.set(a));
        kOa(this)
    };
    var iU = function(a, b, c) {
        rM.call(this, a, b, new UF(3, 54E3), 5);
        this.ta = c || new MM(new Lh(2010, 1, 15, 0, 0, 0));
        this.Hb(this.ta);
        this.ma = null
    };
    v(iU, rM);
    iU.prototype.S = function(a) {
        return new hU(this.Ta, WL(Vk(this.Ta)), VL(), a, new gU(this.ta, a.Pe), this.ta, lOa)
    };
    iU.prototype.zl = function() {
        this.ma = this.b.b("SPAN", "no-reminders", zG(this.b, "No notifications set"));
        return this.b.b("DIV", {}, this.ma, iU.qa.zl.call(this))
    };
    iU.prototype.H = function() {
        iU.qa.H.call(this);
        H(this.ma, !this.o.size())
    };
    var lOa = function(a, b) {
        var c = O(a) + (" before at " + O(b));
        return N("" + c)
    };
    var lU = function(a, b, c, d, e) {
        UL.call(this, a);
        this.Fa = c;
        this.ta = d;
        this.Na = this.ta.get();
        this.U = jU(this);
        this.La = e;
        this.R = b;
        this.S = XF(b);
        b = this.U ? kU(this.R.o) : XF(this.R);
        lc(b, VF);
        this.H = new WF(b, this.R.qc());
        this.Hb(this.H);
        this.ua = new sM(a, this.H);
        b = this.U ? this.R.sd() : kU(this.R.b);
        lc(b, VF);
        this.o = new WF(b, this.R.qc());
        this.Hb(this.o);
        this.ma = new iU(a, this.o);
        mOa(this)
    };
    v(lU, UL);
    lU.prototype.Xa = function() {
        lU.qa.Xa.call(this);
        H(this.ha(), !1);
        this.Ua(this.ua, !0);
        this.Ua(this.ma, !0);
        H(this.ha(), !0)
    };
    lU.prototype.Ma = function() {
        lU.qa.Ma.call(this);
        T(this).ka(this.H, "change", p(this.V, this, this.H));
        T(this).ka(this.Fa, "change", this.Ra);
        T(this).ka(this.o, "change", p(this.V, this, this.o));
        T(this).ka(this.ta, "change", this.Sa);
        this.Ra()
    };
    var mOa = function(a) {
        if (a.La) {
            var b = a.U ? a.o : a.H;
            a = a.U ? kU(a.R.b) : kU(a.R.o);
            lc(a, VF);
            mc(a, b.sd(), function(a, b) {
                return a.equals(b)
            }) || uQ(b, a)
        } else a.U ? uQ(a.H, a.S) : uQ(a.o, a.S)
    };
    lU.prototype.Ra = function() {
        var a = jU(this);
        H(this.ua.ha(), !a);
        H(this.ma.ha(), a);
        this.V()
    };
    lU.prototype.V = function() {
        var a = jU(this) ? this.o : this.H;
        this.R.Hc();
        uQ(this.R, Ya(a.ta));
        mU(this.R, a.sd());
        this.R.Ec()
    };
    lU.prototype.Sa = function(a) {
        var b = this.ta.get(),
            c = Gg(this.Ta, 16),
            d = nU(Wk(c, b, !1)),
            e = nU(Wk(c, a.Ca, !1));
        lc(d, VF);
        lc(e, VF);
        var f = nU(Wk(c, b, !0));
        a = nU(Wk(c, a.Ca, !0));
        lc(f, VF);
        lc(a, VF);
        var c = d,
            g = f;
        this.La || (b == this.Na ? g = c = this.S : this.U ? c = this.S : g = this.S, jU(this) ? this.o.isEmpty() || (f = this.o.sd()) : this.H.isEmpty() || (d = this.H.sd()), b == this.Na && (jU(this) ? mc(f, a, function(a, b) {
            return a.equals(b)
        }) && (f = g) : mc(d, e, function(a, b) {
            return a.equals(b)
        }) && (d = c)));
        nOa(this, d, f, c, g);
        this.V()
    };
    var nOa = function(a, b, c, d, e) {
            a.H.Hc();
            uQ(a.H, d);
            mU(a.H, b);
            a.H.Ec();
            a.o.Hc();
            uQ(a.o, e);
            mU(a.o, c);
            a.o.Ec()
        },
        mU = function(a, b) {
            var c = a.nc(),
                d = [];
            C(b, function(a) {
                Zb(c, a.getKey()) ? cc(c, a.getKey()) : d.push(a)
            });
            $b(c) || BIa(a, c);
            $b(d) || TM(a, d)
        };
    lU.prototype.Ba = function() {
        return jU(this) ? this.ma.o : this.ua.o
    };
    var kU = function(a) {
            return Tb(a, function(a) {
                return new UF(a.Uc().get(), a.Pe.get())
            })
        },
        nU = function(a) {
            return Tb(a, function(a) {
                return new UF(a.Uc(), a.Zh)
            })
        },
        jU = function(a) {
            return isNaN(a.Fa.wb().hour)
        };
    var oU = function(a, b, c) {
        x.call(this);
        this.o = a;
        this.ke = b;
        this.H = c || 20;
        this.R = p(this.oX, this)
    };
    v(oU, x);
    h = oU.prototype;
    h.Rp = null;
    h.wa = function() {
        this.stop();
        oU.qa.wa.call(this)
    };
    h.start = function() {
        null != this.Rp && this.stop();
        this.b = t();
        this.Rp = window.setInterval(this.R, this.H)
    };
    h.stop = function() {
        null != this.Rp && (window.clearInterval(this.Rp), this.Rp = null)
    };
    h.oX = function() {
        var a = t() - this.b,
            a = this.o(a);
        this.ke(a) && this.stop()
    };
    var pU = function(a, b, c, d, e) {
        x.call(this);
        this.b = a;
        this.H = b;
        this.R = c;
        this.S = d || 5;
        this.o = new oU(p(this.r3, this), p(this.pX, this), e)
    };
    v(pU, x);
    h = pU.prototype;
    h.wa = function() {
        this.o.Pa();
        this.o = null;
        pU.qa.wa.call(this)
    };
    h.start = function() {
        this.T = this.b.scrollTop;
        this.o.start()
    };
    h.stop = function() {
        this.o.stop()
    };
    h.r3 = function(a) {
        return this.R(this.T, this.H, a)
    };
    h.pX = function(a) {
        if (Math.abs(this.H - a) < this.S) return this.b.scrollTop = this.H, !0;
        var b = this.b.scrollTop;
        this.b.scrollTop = a;
        return this.b.scrollTop == b
    };
    var qU = function() {
        this.Fc = [];
        this.b = {}
    };
    qU.prototype.add = function(a) {
        for (var b = 0, c = a.length; b < c; ++b) {
            var d = a[b].getId();
            this.b[d] || (this.Fc.push(a[b]), this.b[d] = !0)
        }
    };
    var rU = function(a, b, c) {
            b = Xea(b.start.Wa(), b.end.Wa());
            c = gb(c);
            c = r(oOa, b, c);
            return Sb(a.Fc, c)
        },
        oOa = function(a, b, c) {
            return b[c.rb()] ? mia(c, a) : !1
        };
    qU.prototype.clear = function() {
        this.Fc = [];
        this.b = {}
    };
    var sU = function(a) {
        Sg(this, a, null)
    };
    v(sU, Pg);
    sU.prototype.getTitle = function() {
        return Ug(this, 1, "")
    };
    sU.prototype.setTitle = function(a) {
        Vg(this, 1, a)
    };
    var pOa = new Ea("rb"),
        qOa = function(a) {
            D.call(this, pOa);
            this.o = a
        };
    v(qOa, D);
    var rOa = function(a) {
        a = a.hn;
        return N('<div class="' + P(a) + 'drag-halo"><div class="' + P(a) + "ants " + P(a) + 'ants-top"></div><div class="' + P(a) + "ants " + P(a) + 'ants-left"></div><div class="' + P(a) + "ants " + P(a) + 'ants-right"></div><div class="' + P(a) + 'drag-halo-inner"></div><div class="' + P(a) + "ants " + P(a) + 'ants-bottom"></div></div>')
    };
    var sOa = function(a, b, c) {
            c = c || {};
            return N('<div class="flyover-legacy"><table cellpadding=0 cellspacing=0 class="flyover-table"><tr><td class="flyover-content"><div style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'overflow:hidden" id="' + P(a.id) + '"></div></td></tr></table></div>')
        },
        tOa = function(a) {
            return N('<div class="flyover"><div class="flyover-content" id="' + P(a.id) + '"></div></div>')
        },
        uOa = function(a, b, c) {
            c = c || {};
            var d = a.title,
                e = a.summary;
            b = a.oF;
            a = '<div class="flyover-content-title" style="' + (c.Aa ? "/*" + c.Aa + "*/" :
                "") + "background-color:" + P(Q(a.color)) + '">';
            c = '<span class="flyover-content-name">' + O(d) + "</span>";
            c = bn(c);
            e ? (e = O(c) + (": " + O(e)), a += e) : a += O(c);
            a += "</div>";
            e = b.length;
            for (c = 0; c < e; c++) a += O(b[c]);
            return N(a)
        },
        vOa = function(a) {
            var b = a.summary,
                c = a.oF;
            a = '<div class="flyover-name">' + O(a.title) + "</div>" + (b ? '<div class="flyover-summary">' + O(b) + "</div>" : "");
            for (var b = c.length, d = 0; d < b; d++) a += (0 != d ? '<div class="flyover-separator"></div>' : "") + O(c[d]);
            return N(a)
        },
        wOa = function(a) {
            var b = a.title,
                c = a.location,
                d = a.vE,
                e = a.mF;
            return N('<div class="flyover-event"><div><div class="flyover-event-title">' + O(a.time) + " " + O(b) + "</div><div>" + O(c) + "</div>" + O(null == d ? "" : d) + "<div>" + O("Going?") + " " + O(e) + "</div></div></div>")
        },
        xOa = function(a) {
            var b = a.time,
                c = a.location,
                d = a.vE,
                e = a.mF;
            return N('<div class="flyover-event"><div class="flyover-title">' + O(a.title) + "</div>" + (b ? '<div class="flyover-time">' + O(b) + "</div>" : "") + '<div class="flyover-going">' + O("Going?") + ' <span class="flyover-status">' + O(e) + "</span></div>" + (c ? '<div class="flyover-location">' + O(c) + "</div>" : "") + O(null == d ? "" : d) + "</div>")
        };
    var tU = function(a, b) {
        J.call(this);
        this.o = a;
        this.b = b
    };
    v(tU, J);
    h = tU.prototype;
    h.oy = function(a, b) {
        this.b(new $h(b, Dh(a.Xb(), a.wb())));
        this.ya("sb")
    };
    h.TF = function(a, b) {
        this.b(new $h(a.wb(), b));
        this.ya("tb")
    };
    h.create = function(a) {
        this.b(Rz(a));
        this.ya("ub");
        return If()
    };
    h.mM = ia;
    h.tE = function() {
        return this.o
    };
    h.YG = function() {
        return this.o.Fa ? 60 : Uh(xn(this.o))
    };
    var yOa = function(a) {
            var b = a.name;
            return N('<th title="' + P(a.title) + '" class="fat-scg-guestcell">' + O(b) + "</th>")
        },
        zOa = function(a) {
            var b;
            b = b || {};
            var c = a.label;
            return N('<td class="wk-tzlabel" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "width:" + P(Q(a.width)) + 'px">' + O(c) + "</td>")
        },
        AOa = function(a) {
            var b;
            b = b || {};
            var c = a.top;
            return N('<div style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "height:" + P(Q(a.height)) + "px;top:" + P(Q(c)) + 'px;" class="fat-scg-nonworkinghours">&nbsp;</div>')
        },
        BOa = function(a) {
            var b;
            b = b || {};
            var c = a.JB,
                d = a.Vz,
                e = a.headers,
                f = a.KB,
                g = a.Yw;
            a = a.Zw;
            for (var c = '<div class="fat-scg-guestheader" style="' + P(Q("padding-right")) + ":" + P(Q(c)) + 'px"><div style="' + P(Q("padding-left")) + ":" + P(Q(d)) + 'px;"><table cellpadding=0 cellspacing=0 class="fat-scg-guesttable"><tr>', k = e.length, l = 0; l < k; l++) c += O(e[l]);
            c += '</tr></table></div><table collpadding=0 cellspacing=0 class="fat-scg-allday-cont"><tr><td class="fat-scg-tz-header" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "width:" + P(Q(d)) + 'px"><table cellpadding=0 cellspacing=0 class="wk-tzheader wk-weektop"><tr>';
            b = f.length;
            for (d = 0; d < b; d++) c += O(f[d]);
            c += '</tr></table></td><td><table cellpadding=0 cellspacing=0 class="' + P(g) + ' wk-allday"><tr>';
            f = a.length;
            for (g = 0; g < f; g++) c += O(a[g]);
            return N(c + "</tr></table></td></tr></table></div>")
        };
    var DOa = function(a, b, c) {
            c = c || {};
            b = !!a.OU;
            var d;
            d = R("Find a time, rooms, and guests for your event.");
            c = '<div class="' + P(a.Ub.Vk) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display: none;" role="dialog" aria-label="' + P(d) + '"><div class="' + P(a.Ub.WP) + '"><div class="left-container"><div class="' + P(a.Ub.kQ) + '"></div>';
            b = b ? N('<div class="' + P(a.Ub.pO) + '"><div class="' + P(a.Ub.rO) + '">Got feedback about time or room suggestions?  ' + COa(a) + "</div></div>") : "";
            a = "" + (c + b + '<div class="' + P(a.Ub.UM) + '"></div></div><div class="' + P(a.Ub.zO) + '"></div></div></div>');
            return N(a)
        },
        COa = function(a) {
            return N('<span class="' + P(a.Ub.qO) + '">Submit</span>')
        };
    var EOa = function(a, b, c) {
            c = c || {};
            return N('<img src="' + P(on(a.wz)) + '" alt="" height=22 width=22 style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'vertical-align:middle">')
        },
        FOa = function(a) {
            var b = a.Km;
            return N('<div class="' + P(a.m$) + '">' + O(null == b ? "" : b) + "</div>")
        };
    var GOa = function(a) {
            var b = N,
                c = '<div class="' + P(a.Ub.Vk) + '"><div class="' + P(a.Ub.oQ) + '"><div class="' + P(a.Ub.rQ) + '" role="tablist">',
                d;
            d = !!a.ip;
            var e;
            e = "" + uU($m({
                yq: a.Ub.CQ,
                Pz: a.Ub.bD,
                rz: R("Find a time")
            }, a));
            d && (e += uU($m({
                yq: a.Ub.RP,
                Pz: a.Ub.UC,
                rz: R("Rooms")
            }, a)));
            e += uU($m({
                yq: a.Ub.EO,
                Pz: a.Ub.zC,
                rz: R("Guests")
            }, a));
            d = N(e);
            c = c + d + '<div class="' + P(a.Ub.sQ) + '"></div></div><div class="' + P(a.Ub.pQ) + '">';
            d = !!a.ip;
            a = N('<div class="' + P(a.Ub.Qw) + " " + P(a.Ub.bD) + ' thin-scrollbar" role="tabpanel"></div>' + (d ? '<div class="' +
                P(a.Ub.Qw) + " " + P(a.Ub.UC) + ' thin-scrollbar" role="tabpanel"></div>' : "") + '<div class="' + P(a.Ub.Qw) + " " + P(a.Ub.zC) + ' thin-scrollbar" role="tabpanel"></div>');
            return b(c + a + "</div></div></div>")
        },
        uU = function(a) {
            var b = a.yq,
                c = a.rz,
                d = a.Pz;
            return N('<div class="' + P(a.Ub.qQ) + " " + P(b) + ' valign-container" label-for="' + P(d) + '" tabindex="0" role="tab">' + O(c) + "</div>")
        };
    var HOa = function(a) {
            return N(vU({
                $a: "tsl-title",
                content: bn("<span>" + O(a.title) + "</span>")
            }))
        },
        wU = function(a) {
            var b, c = a.message,
                d = a.action;
            return N(vU({
                $a: R("tsl-info " + (null == (b = a.$a) ? "" : b)),
                content: bn('<div class="message ' + P(d ? "with-action" : "") + '">' + O(c) + "</div>" + (d ? '<div class="action">' + O(null == (b = d) ? "" : b) + "</div>" : ""))
            }))
        },
        vU = function(a) {
            var b, c = a.content,
                d = a.attributes;
            null == a.icons || na(a.icons);
            var e = a.icons;
            a = '<div class="tsl-tile ' + P(null == (b = a.$a) ? "" : b) + '"' + (d ? jn(d) : "") + '><div class="tsl-tile-content">';
            if (e)
                for (b = e.length, d = 0; d < b; d++) a += N('<div class="tsl-icon">' + O(e[d]) + "</div>");
            a += '<div class="tsl-tile-inner-content">' + O(c) + "</div></div></div>";
            return N(a)
        };
    var IOa = function(a) {
        a = "" + ('<div class="tsl-tfs-root"><div class="' + P(a.Ub.wQ) + '"><div class="' + P(a.Ub.xQ) + '">Suggestions</div><div class="' + P(a.Ub.yQ) + '"></div></div><div class="' + P(a.Ub.qC) + '"></div></div>');
        return N(a)
    };
    var JOa = function(a) {
        var b = '<div class="jfk-bubble" role="alertdialog"' + (a.uid ? ' aria-describedby="' + P(a.uid) + '"' : "") + '><div class="jfk-bubble-content-id"' + (a.uid ? ' id="' + P(a.uid) + '"' : "") + "></div>";
        a.OL && (b += '<div class="jfk-bubble-closebtn-id jfk-bubble-closebtn" aria-label="' + en("Close") + '" role="button" tabindex=0></div>');
        return N(b + '<div class="jfk-bubble-arrow-id jfk-bubble-arrow"><div class="jfk-bubble-arrowimplbefore"></div><div class="jfk-bubble-arrowimplafter"></div></div></div>')
    };
    var xU = function(a, b) {
        x.call(this);
        var c = $u(rOa, {
            hn: b || ""
        });
        qe(c, a);
        this.S = a;
        this.b = a.previousSibling;
        a.parentNode.removeChild(a);
        this.b.firstChild.nextSibling.nextSibling.nextSibling.appendChild(a)
    };
    v(xU, x);
    xU.prototype.wa = function() {
        y(this.o);
        te(this.S, this.b);
        delete this.b;
        xU.qa.wa.call(this)
    };
    var KOa = function(a) {
        a.o || (a.o = new oU(p(a.R, a), p(a.H, a), 20), a.o.start())
    };
    xU.prototype.R = function(a) {
        return Math.floor(a / 200) % 300
    };
    xU.prototype.H = function(a) {
        if (this.T != a) {
            var b = a - 300 + "px",
                c = -a + "px",
                d = this.b,
                e = d.childNodes[1],
                f = d.childNodes[2],
                g = d.childNodes[4];
            d.childNodes[0].style.left = b;
            g.style.left = c;
            e.style.top = c;
            f.style.top = b;
            this.T = a
        }
    };
    var yU = function(a, b) {
            for (var c = [], d = {}, e = 0; e < b.length; e++) {
                var f = b[e];
                f.b && sQ(f) && (f = f.rb(), d[f] || (d[f] = !0, c.push(LOa(e, a, f))))
            }
            return c
        },
        LOa = function(a, b, c) {
            a = tF("anonym_" + a);
            b = new vn(a, new Lh(b.year, b.month, b.Ga, 0, 0, 0), new Lh(b.year, b.month, b.Ga, 24, 0, 0));
            b.ne = c;
            b.Ne = c;
            b.Nb = c;
            b.lg = 0;
            b.we = O("busy");
            return b
        };
    var zU = function() {
        this.$a = []
    };
    v(zU, ao);
    zU.prototype.Sv = function() {
        var a = this.top,
            b = this.Ap,
            c = this.Bp,
            d = this.edge,
            e = this.width,
            f = this.ZB,
            g = this.height - 1,
            k = this.$a.join(" "),
            l = N('<div class="resizer"><div class="rszr_icon sc-rszr_icon">&nbsp;</div></div>'),
            m;
        m = m || {};
        return N('<div class="' + P(k) + ' sc" style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "top:" + P(Q(a)) + "px;" + P(Q(d)) + ":" + P(Q(b + c)) + ";width:" + P(Q(e + f)) + ';"><dl style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "height:" + P(Q(g)) + 'px;">' + O(l) + "</dl></div>")
    };
    var AU = function(a, b) {
        this.o = a;
        this.b = b
    };
    v(AU, zp);
    AU.prototype.H = function(a) {
        var b = new zU,
            c = a.event,
            d = this.b(c);
        b.$a[1] = d ? "sc-conflict" : "sc-normal";
        Tja(this, b, a);
        a = no(c);
        b.$a[0] = a;
        return b.Sv()
    };
    AU.prototype.R = function(a, b) {
        (Ec(a, "sc") ? a : Fe(this.o, "*", "sc", a)[0]).getElementsByTagName("dl")[0].style.height = b - 1 + "px"
    };
    var BU = function(a, b) {
        Cp.call(this, a);
        this.b = b;
        this.o = [];
        this.H = 0;
        this.yi = 1
    };
    v(BU, Cp);
    var MOa = function(a, b) {
            var c = b.Ya(),
                d = b.nd();
            return c.Wa() < a.Wa() ? 0 : c.Wa() >= Ih(a, 1).Wa() ? 24 : d.hour + d.minute / 60
        },
        OOa = function(a, b, c, d) {
            a.o = [];
            a.H = 0;
            a.yi = d;
            if (c && c.length) {
                b = NOa(b, c);
                lc(b, function(a, b) {
                    return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0
                });
                for (var e, f = d = 0; f < b.length; f++) d && (c = b[f][0] - e, 0 < c && a.o.push([e, c, d])), e = b[f][0], d += b[f][1], a.H = Math.max(a.H, d)
            }
        },
        NOa = function(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d];
                sQ(e) && (c.push([MOa(a, e.wb()), 1]), c.push([MOa(a, e.Xb()), -1]))
            }
            return c
        };
    BU.prototype.R = function(a, b, c, d) {
        b = [];
        for (c = 0; c < this.o.length; c++) {
            var e = this.o[c];
            .5 > e[1] && (e[1] = .5);
            var f = e[2];
            b.push({
                $a: this.b + "-busy " + (this.b + "-busy-default") + " " + (0 == f ? this.b + "-busy-no" : .5 > f / this.yi ? this.b + "-busy-some" : this.b + "-busy-very"),
                top: (e[0] - d) * a,
                height: e[1] * a,
                width: this.Nd
            })
        }
        var g;
        g = g || {};
        a = "<td>";
        d = b.length;
        for (c = 0; c < d; c++) e = b[c], a += '<div class="' + P(e.$a) + '" style="' + (g.Aa ? "/*" + g.Aa + "*//*" + g.Aa + "*/" : "") + "top:" + P(Q(e.top)) + "px;height:" + P(Q(e.height)) + "px;width:" + P(Q(e.width)) + 'px;"></div>';
        return N(a + "</td>")
    };
    var CU = function(a, b, c) {
        x.call(this);
        this.Ca = a;
        this.R = ce();
        this.ua = b;
        this.ta = this.R.Qb().body;
        this.ma = "flyoverContent" + Xi(Wi.va());
        this.V = c;
        this.Da = new I(this);
        this.o = new fr(p(this.Oa, this), 250);
        this.H = new fr(p(this.U, this), 500);
        this.T = Zj(a).isEnabled(29);
        a = uJa(this.T ? tOa : sOa, {
            id: this.ma
        }, {}, this.R);
        this.Ea = this.ta.appendChild(a);
        this.S = new QJ(0, 0);
        this.Da.ka(this.ua, "mousemove", this.Ba)
    };
    v(CU, x);
    CU.prototype.b = !1;
    CU.prototype.wa = function() {
        this.Da.Pa();
        this.H.Pa();
        this.o.Pa();
        this.R.Qb().body.removeChild(this.Ea);
        CU.qa.wa.call(this)
    };
    CU.prototype.ha = function() {
        return this.Ea
    };
    CU.prototype.Ba = function(a) {
        this.S.b.x = a.clientX;
        this.S.b.y = a.clientY;
        this.b && POa(this)
    };
    var POa = function(a) {
            a.S.Vb(a.Ea, 1, QOa, rf(a.Ea))
        },
        QOa = new Od(21, 5, 5, 21);
    CU.prototype.U = function(a, b, c, d) {
        for (var e = [], f = Math.min(a.length, 3), g = Gg(this.Ca, 5), k = 0; k < f; k++) {
            var l = a[k],
                m = "";
            l.b || (m = this.V.uc(l.wb().nd(), !0, !0), m = l.ld() ? "At " + m : this.V.wn(wn(l), !0, !0));
            var q = l.we;
            q.getContent() && m && !this.T && (m = "" + m + ":");
            var u;
            a: switch (l.Ge) {
                case 1:
                case 5:
                    u = "Yes";
                    break a;
                case 2:
                case 4:
                    u = "No";
                    break a;
                default:
                    u = "Maybe"
            }
            var w = l.Ne,
                z = HF(g, w);
            e.push((this.T ? xOa : wOa)({
                time: m,
                title: q,
                location: l.Ke,
                vE: ROa(z ? In(z) : w),
                mF: u
            }))
        }
        3 < a.length && e.push(N('<div class="flyover-event">' + O(za(a.length -
            3)) + "</div>"));
        a = this.R.ha(this.ma);
        Km(a, this.T ? vOa : uOa, {
            title: Yn(c),
            summary: d,
            color: b.b,
            oF: e
        });
        POa(this);
        this.b = !0;
        this.Ea.style.visibility = "visible"
    };
    CU.prototype.Oa = function() {
        this.Ea.style.visibility = "hidden";
        this.b = !1;
        tw(this.Ea, 0, 0)
    };
    CU.prototype.Eb = function() {
        this.H.cancel();
        this.o.Xi()
    };
    CU.prototype.qb = function() {
        return this.b
    };
    var ROa = function(a) {
        return mb(a) ? null : N('<div class="flyover-createdby">' + O("Created by:") + " " + O(a) + "</div>")
    };
    var DU = function(a, b, c, d) {
        var e = M();
        K(e, sj);
        var f = jh(e),
            f = c || f.yd();
        c = iO(1E3 * a, f);
        a = iO(1E3 * (d || a), f);
        e = K(e, tj).H;
        switch (b) {
            case 1:
                return e.ef(c, !1, !0);
            case 2:
                return e.Dd(c, !0);
            case 0:
                return e.wn(new $h(c, a));
            default:
                throw Error("Db`" + b);
        }
    };
    var EU = function(a) {
        S.call(this, a);
        this.o = new PI(this.vc, !0);
        this.mb = new Vy;
        this.R = []
    };
    v(EU, S);
    EU.prototype.vc = "jfk-bubble";
    EU.prototype.H = !0;
    EU.prototype.S = !1;
    EU.prototype.Hk = function(a) {
        this.o.Hk(a);
        this.Vb()
    };
    var FU = function(a, b) {
        var c = a.Nc();
        b && c && (pa(b) ? ze(c, b) : b instanceof Qm ? bu(c, rm(b)) : b instanceof gd ? bu(c, b) : (bu(c, md), c.appendChild(b)))
    };
    h = EU.prototype;
    h.Nc = function() {
        return XE(this, this.vc + "-content-id")
    };
    h.Xa = function() {
        this.Ea = $u(JOa, {
            OL: this.H,
            uid: "bubble-" + va(this)
        }, void 0, this.b);
        FU(this, this.HJ);
        H(this.ha(), !1);
        this.mb.Rl(this.ha());
        if (!Xba) {
            var a = this.mb,
                b = aH(this.ha(), .218),
                c = jF(this.ha(), .218);
            a.ma = b;
            a.V = c
        }
        vw(this.ha(), this.R)
    };
    h.Ma = function() {
        EU.qa.Ma.call(this);
        T(this).ka(this.mb, ["beforeshow", "show", "beforehide", "hide"], this.n1);
        this.H && xv(T(this), XE(this, this.vc + "-closebtn-id"), HB, r(this.setVisible, !1));
        var a = this.ha(),
            b = XE(this, this.vc + "-arrow-id"),
            c = this.o;
        c.b = a;
        c.H = b;
        hG(this.mb, this.o)
    };
    h.setVisible = function(a) {
        this.mb.setVisible(a)
    };
    h.qb = function() {
        return this.mb.qb()
    };
    h.Vb = function() {
        this.qb() && this.mb.Vb()
    };
    h.wa = function() {
        this.mb.Pa();
        delete this.mb;
        EU.qa.wa.call(this)
    };
    h.IJ = function() {
        sw(this.ha());
        return !1
    };
    h.n1 = function(a) {
        if ("show" == a.type || "hide" == a.type) {
            var b = T(this),
                c = this.b,
                c = E ? Ge(c) : c.Qb();
            "show" == a.type ? b.ka(c, "scroll", this.IJ) : b.b(c, "scroll", this.IJ)
        }
        b = this.ya(a.type);
        this.S && "hide" == a.type && this.Pa();
        return b
    };
    var SOa = function(a, b, c) {
            c = c || {};
            b = '<div class="' + P(a.Ub.Vk) + '"><div class="' + P(a.Ub.zQ) + '"></div><div class="' + P(a.Ub.gN) + ' thin-scrollbar"><div class="' + P(a.Ub.UO) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display: none;"></div><div class="' + P(a.Ub.AQ) + '"><div class="' + P(a.Ub.QP) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display: none;">';
            var d;
            d = "" + wU({
                message: R("Showing suggestions for the first event only")
            });
            d = N(d);
            b = "" + (b + d + '</div><div class="' + P(a.Ub.wP) + '"></div><div class="' + P(a.Ub.jQ) + '"><div class="' +
                P(a.Ub.LM) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display: none;"></div>');
            d = {
                $a: a.Ub.fQ,
                action: bn('<div tabindex="0" role="button" aria-label="' + P(R("Show more time suggestions")) + '">Show more</div>')
            };
            var e, f = d.action;
            d = N(vU($m({
                $a: R("tsl-action " + (null == (e = d.$a) ? "" : e)),
                content: bn('<div class="action">' + O(f) + "</div>")
            }, d)));
            b += d + '<div class="' + P(a.Ub.NM) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display:none"></div></div><div class="' + P(a.Ub.vP) + '" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'display: none;"></div></div></div></div>';
            return N(b)
        },
        TOa = function(a) {
            a = a.Uh && a.Uh.cC || a.Uh;
            return N(HOa({
                title: R("" + a.getTitle())
            }) + wU({
                message: R("" + Ug(a, 2, ""))
            }))
        },
        UOa = function(a) {
            var b = "",
                c = "";
            a = a.U4;
            for (var d = a.length, e = 0; e < d; e++) {
                var f;
                f = String(Wg(a[e], lP, 1).getEmail());
                var g = M();
                f = Ig(g, 802) ? Gg(g, 802).Ca(f) || f : f;
                c += "" + f + (e != d - 1 ? ", " : "")
            }
            c = R(c);
            b += wU({
                message: R("Not considered: " + c)
            });
            return N(b)
        },
        WOa = function(a) {
            for (var b = "", c = a.ZR, d = c.length, e = 0; e < d; e++) var f = c[e],
                g = "" + DU(Number(Tg(Wg(f, FP, 1), 1)), 1),
                g = R(g),
                k = "Suggestions for " + g,
                b =
                b + (HOa({
                    title: g
                }) + VOa($m({
                    cM: Xg(f, yP, 2),
                    oJ: !1,
                    $c: R("" + k)
                }, a)));
            return N(b)
        },
        XOa = function(a) {
            a = "" + VOa($m({
                oJ: !0,
                $c: R("Top time suggestions")
            }, a));
            return N(a)
        },
        VOa = function(a) {
            for (var b = a.cM, c = '<div role="group" aria-label="' + P(a.$c) + '">', d = b.length, e = 0; e < d; e++) var f = b[e],
                g = $m({
                    vB: Wg(f, AP, 1),
                    fT: Ug(f, 2, ""),
                    tR: e + 1
                }, a),
                f = !!g.oJ,
                k = g.tR,
                l = g.vB && g.vB.cC || g.vB,
                m = g.fT,
                q = "",
                u = '<div class="clock">' + XKa() + "</div>",
                u = bn(u),
                w = '<div class="check">' + WKa() + "</div>",
                w = bn(w),
                g = "tsl-suggestion" + (f ? " best-suggestion" :
                    "") + " " + ("" + g.Ub.iQ),
                g = R(g),
                q = q + vU({
                    $a: g,
                    attributes: cn('tabindex="0" data-id="' + P(Ug(l, 4, "")) + '" role="listitem" aria-posinset="' + P(k) + '"'),
                    icons: [u, w],
                    content: bn((f ? '<div class="primary-text ' + P("selection-handle") + '">' + O(DU(Number(Tg(Wg(Wg(l, PO, 1), FP, 1), 1)), 1)) + "</div>" : "") + '<div class="primary-text ' + (f ? "" : P("selection-handle")) + '">' + O(DU(Number(Tg(Wg(Wg(l, PO, 1), FP, 1), 1)), 0, void 0, Tg(Wg(Wg(l, PO, 1), FP, 2), 1))) + '</div><div class="secondary-text-attendee-explanations">' + O(m) + "</div>")
                }),
                f = N(q),
                c = c + f;
            return N(c + "</div>")
        };
    var GU = function(a, b) {
        up.call(this, a);
        this.b = b;
        this.o = b.H
    };
    v(GU, up);
    h = GU.prototype;
    h.Jn = function(a) {
        a = a.rb();
        return tQ(this.o, a).b
    };
    h.$h = function(a) {
        var b = tQ(this.o, a.rb());
        a = hm(a);
        zha(a) && Yl(b) && (b = Wl(b.H, "#000000"));
        return b
    };
    h.Zp = function() {
        return r(zn, p(this.Cx, this))
    };
    h.Cx = function(a, b) {
        var c = a.rb(),
            d = b.rb();
        if (c == d) return 0;
        c = YOa(this.b, c);
        d = YOa(this.b, d);
        return jN(c, d)
    };
    h.pi = function(a) {
        return a.getId() != this.b.Vd().getId()
    };
    h.dm = function(a) {
        return this.pi(a)
    };
    h.fm = function(a) {
        return !this.pi(a)
    };
    h.bm = function(a) {
        return !this.pi(a)
    };
    h.Pq = function() {
        return !1
    };
    h.Wm = function() {
        return !this.pj()
    };
    var ZOa = function(a) {
            this.b = a
        },
        $Oa = function(a, b) {
            var c = new sU;
            if (b) {
                var d = Wb(Xg(b, iP, 7), function(a) {
                    return 2 == Ug(a, 2, 0)
                });
                c.setTitle("No suggestions");
                Vg(c, 2, d ? "You don\u2019t have access to any guest\u2019s calendar." : "Calendars couldn\u2019t be loaded. Please try again later.");
                return c
            }
            d = !pi(a.b).Ob();
            c.setTitle(d ? "You appear to be offline" : "No suggestions");
            Vg(c, 2, d ? "Please check your connection and try again." : "Error occurred");
            return c
        };
    var HU = function(a) {
        S.call(this);
        this.o = null;
        this.V = K(a, hj);
        this.S = ["Getting schedules\u2026", "Analyzing conflicts\u2026", "Getting suggestions\u2026"];
        this.H = this.R = this.U = null
    };
    v(HU, S);
    HU.prototype.Xa = function() {
        HU.qa.Xa.call(this);
        var a = this.b,
            b = this.ha();
        Fc(b, "valign-container");
        var c = a.b("DIV", "valign-item");
        bF(this.V, c, LQ);
        b.appendChild(c);
        this.o = a.b("DIV", "valign-item");
        b.appendChild(this.o)
    };
    HU.prototype.Ma = function() {
        HU.qa.Ma.call(this);
        this.R = new YIa(this.o, 150);
        this.Hb(this.R);
        this.H = new XIa(this.o, 150);
        this.Hb(this.H);
        this.reset()
    };
    HU.prototype.stop = function() {
        xi(this.U);
        Tf(T(this));
        this.R.stop();
        this.H.stop()
    };
    HU.prototype.reset = function() {
        this.stop();
        this.b.Wd(this.o, this.S[0]);
        sf(this.o, 1);
        aPa(this, 1, !0)
    };
    var aPa = function(a, b, c) {
        yv(yv(T(a), a.R, "end", function() {
            this.b.Wd(this.o, this.S[b]);
            this.H.play()
        }), a.H, "end", function() {
            aPa(this, ++b % this.S.length)
        });
        a.U = wi(function() {
            this.R.play(c)
        }, 1600, a)
    };
    HU.prototype.wa = function() {
        this.stop();
        HU.qa.wa.call(this)
    };
    var IU = function(a, b, c) {
        S.call(this);
        this.U = a;
        this.S = b;
        this.H = jh(this.U);
        this.o = new EU;
        this.Hb(this.o);
        this.ab = K(a, oj);
        T(this).ka(c, sR, this.V);
        this.R = new yL("Got it", this.b, 0);
        this.Hb(this.R)
    };
    v(IU, S);
    IU.prototype.Xa = function() {
        this.Ea = this.b.b("DIV", "fat-promo");
        this.o.R.push("fat-promo-bubble");
        this.o.S = !0;
        this.o.o.nu = !0;
        this.o.Hk(this.S);
        QI(this.o.o, 3, void 0, void 0, void 0);
        this.o.H = !1;
        Ay(this.o.mb, !1);
        var a = this.o,
            b;
        b = "" + ('<div class="fat-promo-clock">' + XKa() + '</div><div class="fat-promo-content"><div class="fat-promo-title">Need to meet?</div><div class="fat-promo-text">Use this buttom to find time recommendations and rooms for your meeting.</div></div>');
        b = N(b);
        a.HJ = b;
        FU(a, b);
        this.Ua(this.o, !0);
        this.o.setVisible(!0);
        Ny(this.R, "fat-promo-button");
        this.o.Ua(this.R, !0)
    };
    IU.prototype.Ma = function() {
        IU.qa.Ma.call(this);
        T(this).ka(this.R, "action", this.ma)
    };
    IU.prototype.ma = function() {
        this.o.setVisible(!1);
        JU(this, !0);
        this.ab.nb("find_a_time_promo_dismissed");
        Tf(T(this))
    };
    IU.prototype.V = function() {
        this.o.setVisible(!1);
        JU(this, !0);
        Tf(T(this))
    };
    var JU = function(a, b) {
        Dj(a.H, 14, !1) || (tv(a.H, 14, b), a.H.b())
    };
    var KU = function(a, b, c, d, e, f) {
        kq.call(this, Xk(a).b, b, c, d, new jq(!0));
        this.H = [];
        this.ma = f;
        this.o.ma = !0;
        Zj(a).isEnabled(81) && (a = p(this.ta, this), this.o.Ca.push(a));
        this.Ca = e
    };
    v(KU, kq);
    KU.prototype.U = function(a, b, c) {
        var d = a.b,
            e = [];
        a = [];
        1 > this.H.length ? (e.push(yOa({
            title: "",
            name: this.R.ep(c)
        })), this.b.b = a, to(this.b), this.b.b.push(N("<tr>"))) : (C(this.H, function(a) {
            a = Yn(a.displayName);
            e.push(yOa({
                title: a,
                name: a
            }))
        }), d = new qo(d, c, this.H.length, 200, 1, r(bPa, this.H)), this.b.b = a, ro(d, this.b));
        this.b.b = null;
        for (var f = this.o.R, d = [], g = 0; g < f.length; g++) {
            var k = {
                width: f[g].Nd,
                label: f[g].getTitle()
            };
            d.push(zOa(k))
        }
        b = Eh(b.year, b.month, b.Ga);
        return BOa({
            headers: e,
            Zw: a,
            Vz: Yp(this.o) + 0,
            JB: $n(),
            KB: d,
            Yw: c.equals(b) ? "fat-scg-allday fat-scg-allday-today" : "fat-scg-allday"
        })
    };
    var bPa = function(a, b) {
        for (var c = {}, d = a.length; d--;) c[a[d].o] = d;
        for (var e = {}, f = [], d = 0, g = b.length; d < g; d++) {
            var k = b[d],
                l = c[k.rb()];
            void 0 != l && (e[k.getId()] = l, f.push(k))
        }
        c = [];
        g = [];
        d = 0;
        for (l = a.length; d < l; ++d) c[d] = [], g[d] = [];
        d = 0;
        for (l = f.length; d < l; ++d) k = f[d], c[e[k.getId()]].push(new po(k, 1, 0));
        return {
            yx: c,
            XB: g,
            kA: f.length
        }
    };
    KU.prototype.T = function(a, b, c) {
        var d = a.b;
        a = a.o;
        var e = d.concat(a),
            f = Tb(this.H, function(a) {
                return a.o
            });
        OOa(this.ma, c, e, this.H.length);
        a = yU(c, d).concat(a);
        d = rJa(a, f);
        return this.o.render(d, c, b)
    };
    KU.prototype.ta = function(a, b, c, d) {
        c = this.Ca.o(this.H[a].email, new $h(b, Zea));
        if (!c) return null;
        a = [];
        var e = 0,
            f;
        f = Zp(d, new Mh(0, 0, 0));
        for (var g = !0, k = 0; k < c.length; k++) {
            var l = c[k];
            l.start.Ya().Wa() == b.Wa() && (e = Zp(d, l.start) - e, a.push(AOa({
                top: f,
                height: e - f
            })));
            if (l.end.Ya().Wa() > b.Wa()) {
                g = !1;
                break
            }
            f = Zp(d, l.end) - e
        }
        g && a.push(AOa({
            top: f,
            height: 1008 - e - f
        }));
        b = 42 * Wp(d);
        var m;
        m = m || {};
        m = '<div style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "height:" + P(Q(b)) + "px;margin-bottom:-" + P(Q(b)) + 'px;">';
        b = a.length;
        for (d = 0; d < b; d++) m += O(a[d]);
        return N(m + "</div>")
    };
    var LU = function(a, b, c, d, e) {
        oq.call(this, b, c, d, e)
    };
    v(LU, oq);
    LU.prototype.T = function(a, b, c, d) {
        var e = a.o;
        a = a.b;
        for (var f = [], g = 0; g < a.length; g++) {
            var k = a[g].rb();
            Zb(f, k) || f.push(k)
        }
        g = new qU;
        g.add(a);
        for (var k = [], l = 0; l < d; l++) var m = Ih(c, l),
            q = new $h(m, Fh(m)),
            q = rU(g, q, f),
            k = k.concat(yU(m, q));
        e = k.concat(e);
        a = new xka(a, e);
        return LU.qa.T.call(this, a, b, c, d)
    };
    var MU = function(a, b) {
        S.call(this);
        this.yb = a;
        this.kd = K(a, hj);
        this.hd = jh(a);
        this.Dc = this.hd.gm();
        this.ta = Xk(a).b;
        this.$d = mi(a);
        this.tf = Gg(a, 5);
        this.H = b;
        this.o = b.Vd();
        this.sc = this.o.b;
        this.Ib = this.o.Ba;
        this.R = b.R;
        this.De = b.H;
        this.Ra = new VD(["parallel", "week"]);
        this.Ua(this.Ra);
        this.Sb = new PD(this.Ra, this.R);
        pIa(this.Ra);
        this.Db = new OD(this.yb, this.R, "fat-scg");
        this.Ua(this.Db);
        this.Ba = new GU(this.yb, this.H);
        var c = cPa(this),
            d = new Up(this.ta, this.Ba, "scTg");
        Xp(d, c);
        var e = new so(this.ta, this.Ba, !0);
        this.V =
            new LU(0, this.ta, "scWk", e, d);
        d = new BU(8, "fat-scg");
        e = new Up(this.ta, this.Ba, "scTg", !0, "scTg-nogutter");
        Xp(e, dc(c, d));
        c = new so(this.ta, this.Ba, !0);
        this.Na = new KU(this.yb, "scTg", c, e, b.Ba, d);
        this.Je = new AU(this.b, Ga);
        this.wc = new AU(this.b, p(this.To, this));
        $p(this.V.o, "sc-grid", p(function(a) {
            return a.event.getId() == this.o.getId()
        }, this), this.wc);
        this.U = new I(this);
        this.U.ka(this.sc, "change", this.Ki);
        this.U.ka(this.Ib, "change", this.Hi);
        this.Zb = {};
        this.ab = K(a, oj)
    };
    v(MU, S);
    h = MU.prototype;
    h.tt = null;
    h.hG = null;
    h.gG = null;
    h.xy = null;
    h.uy = null;
    h.xl = null;
    h.rt = !1;
    h.vy = !1;
    h.wy = !1;
    h.ut = null;
    h.wa = function() {
        y(this.Sb);
        y(this.ua);
        y(this.U);
        y(this.tt);
        MU.qa.wa.call(this)
    };
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        var a = this.b,
            b = a.b("DIV", "fat-scg");
        this.Ea = b;
        var c = a.b("DIV", "fat-scg-nr2");
        b.appendChild(c);
        this.Ra.render(c);
        dPa(this, c);
        ePa(this, c);
        this.Db.render(c);
        this.Va = a.b("DIV", "fat-scg-header");
        b.appendChild(this.Va);
        c = "";
        ud && (c = "wbkt");
        this.S = a.b("DIV", c + " fat-scg-grid");
        this.Fa();
        b.appendChild(this.S);
        this.U.ka(this.R, "change", this.kX);
        this.U.ka(this.Sb, "change", this.Sk);
        this.U.ka(this.H, "pb", this.Fa);
        this.U.ka(this.H, "ob", this.Fa);
        this.U.ka(this.H, "qb", this.Fa);
        a = T(this);
        a.ka(this.Db,
            "Ba", this.lX);
        a.ka(this.Db, "Ca", this.jX);
        a.ka(this.Db, "Da", this.fX);
        a.ka(this.Ra, "action", this.mX);
        this.U.ka(this.ut, "change", this.Rk);
        this.U.ka(this.ut, ["hide"], function(a) {
            a.stopPropagation()
        })
    };
    var dPa = function(a, b) {
            var c = new lM;
            c.Ie(new NJ("Everyone", "everyone"));
            c.Ie(new NJ("Required", "required"));
            c.fh(0);
            a.Ua(c);
            c.render(b);
            Fc(c.ha(), "fat-scg-show-guests-select");
            Fc(c.ad().ha(), "fat-scg-show-guests-menu");
            a.ut = c
        },
        ePa = function(a, b) {
            if (a.H.ta) {
                var c = a.b;
                a.La = c.b("SPAN", {
                    className: "fat-scg-rg-sw button-strip goog-inline-block"
                });
                H(a.La, !1);
                bF(a.kd, a.La, EOa, {
                    wz: LF("spinner.gif")
                });
                b.appendChild(a.La);
                c = c.b("SPAN", "fat-scg-rg button-strip goog-inline-block");
                b.appendChild(c);
                var d = ND.va();
                a.ma = new KD("Refresh all", d);
                a.ma.Qc("Check availability of guests not using Google Calendar");
                a.Ua(a.ma);
                a.ma.render(c)
            }
        };
    MU.prototype.Fi = function(a) {
        a = a.target;
        a.hm && a.hm() && this.La && H(this.La, !1)
    };
    MU.prototype.Qk = function() {
        fPa(this)
    };
    var fPa = function(a) {
        if (!a.H.ta) throw Error("Eb");
        gPa(a.H) && (a.ma && a.ma.Ab(!1), a.La && H(a.La, !0), hPa(a.H))
    };
    h = MU.prototype;
    h.lX = function() {
        this.ab.nb("find_a_time_today_clicked")
    };
    h.jX = function() {
        this.ab.nb("find_a_time_previous_clicked")
    };
    h.fX = function() {
        this.ab.nb("find_a_time_next_clicked")
    };
    h.mX = function() {
        var a = QD(this.Ra);
        this.ab.nb("parallel" == a ? "find_a_time_day_view_clicked" : "find_a_time_week_view_clicked")
    };
    h.kX = function() {
        iPa(this);
        this.Fa()
    };
    var iPa = function(a) {
            var b = cPa(a);
            a.V && Xp(a.V.o, b);
            a.Na && Xp(a.Na.o, b)
        },
        jPa = function(a) {
            a.ab.nb("find_a_time_show_required_guests_clicked");
            var b = a.o.o;
            C(b.o(), function(a) {
                b.setVisible(a.email, !a.sf())
            })
        };
    MU.prototype.Rk = function() {
        switch (this.ut.lb()) {
            case "everyone":
                this.ab.nb("find_a_time_show_all_guests_clicked");
                hQ(this.o.o, !0);
                break;
            case "required":
                jPa(this);
                break;
            case "none":
                this.ab.nb("find_a_time_show_none_guests_clicked");
                var a = CN(this.o).get();
                hQ(this.o.o, !1, [a])
        }
    };
    MU.prototype.Sk = function() {
        this.Fa()
    };
    var kPa = function(a, b, c) {
        return (a = lw("ca-evp", a, c)) && b == Ec(a, "drag-chip-wrapper") ? a : null
    };
    h = MU.prototype;
    h.dX = function(a) {
        a = kw(a);
        (a = this.Zb[a]) && a.getId() != this.o.getId() && (lPa(this, [a], a.rb()), this.rt = !0)
    };
    h.eX = function() {
        this.xl.Eb();
        this.rt = !1
    };
    h.gX = function() {
        NU(this) || mPa(this)
    };
    h.iX = function(a, b) {
        if (NU(this)) {
            var c;
            c = b.clientX;
            var d = OU(this),
                d = sw(d.ha());
            c = pv(OU(this), c - d.x);
            c = PU(this.H, !0)[c] || null;
            this.Mb != c && (this.Mb = c, mPa(this))
        }
    };
    h.hX = function() {
        this.Mb = null;
        this.rt || this.xl.Eb()
    };
    var mPa = function(a) {
            var b = a.Mb && a.Mb.o,
                c = QU(a.H, HP(a.o.b), b);
            c && c.length ? (c.sort(p(a.$f, a)), lPa(a, c, b, 1 == c.length ? "1 conflict" : "" + c.length + " conflicts")) : a.xl.Eb()
        },
        lPa = function(a, b, c, d) {
            var e;
            if (c) {
                e = tQ(a.De, c).b;
                var f = HF(a.tf, c);
                c = f ? In(f) : (f = a.o.o.b(c)) ? UP(f) : c
            } else e = Uj(39), c = d || "Conflicts", d = void 0;
            a = a.xl;
            a.o.cancel();
            a.b ? a.U(b, e, c, d) : a.H.Xi(b, e, c, d)
        };
    MU.prototype.Fa = function() {
        this.kb && nPa(this);
        var a = NU(this),
            b;
        b = this.R;
        b = ai(b.first, gk(b));
        b = RU(this.H, b);
        a || b.push(this.o.Fa);
        b.sort(this.Ba.Zp());
        var c = b;
        this.Zb = {};
        for (var d = 0; d < c.length; d++) this.Zb[va(c[d])] = c[d];
        var d = this.R,
            c = d.first,
            e = gk(d),
            d = li(this.$d);
        a ? (a = PU(this.H, !0), this.Na.H = a, b = bq(b, c, 1)[0], a = lq(this.Na, b, d, c, 1, !1), bu(this.Va, rm(a.Km)), this.Na.H = []) : (a = lq(this.V, b, d, c, e, !1), bF(this.kd, this.Va, FOa, {
            m$: "fat-scg-weektop",
            Km: a.Km
        }));
        bu(this.S, rm(a.FB));
        this.kb && (oPa(this), a = this.b.ha(pq(this.V))) &&
            (b = rf(this.b.ha(mq(this.V))).height, gf(a, "height", b + "px"));
        this.kb && this.ma && this.ma.Ab(!0);
        this.ya("resize")
    };
    MU.prototype.Ki = function() {
        this.vy = !0;
        SU(this)
    };
    MU.prototype.Hi = function() {
        iPa(this);
        this.wy = !0;
        SU(this)
    };
    var cPa = function(a) {
            if (a.Ib.am()) {
                var b = [];
                RP(a.Ib) && b.push(QP(a.Ib));
                b.push(a.Ib.Se());
                a = Hp(b, IP(a.R), a.Dc, a.ta, pPa, qPa)
            } else a = Hp(a.hd.Vf(), IP(a.R), a.Dc, a.ta, Jp, Kp);
            return a
        },
        SU = function(a) {
            var b = oy(a.o.b),
                c = b.start.Ya();
            a.R.focus = c;
            a.kb && (wQ(IP(a.R), b) ? a.Fa() : a.R.hg(c), b = 1 <= oy(a.o.b).duration.Ga, c = oy(a.o.b), !b && a.R.contains(c.start.Ya()) && rPa(a))
        },
        nPa = function(a) {
            y(a.Sa);
            a.Sa = null;
            y(a.xl);
            a.Mb = null;
            a.rt = !1;
            a.xl = null;
            y(a.xy);
            a.xy = null;
            y(a.uy);
            a.uy = null;
            y(a.tt);
            y(a.hG);
            y(a.gG);
            ix(a.S)
        },
        NU = function(a) {
            return "parallel" ==
                QD(a.Sb.b)
        },
        OU = function(a) {
            return (NU(a) ? a.Na : a.V).o.S
        },
        oPa = function(a) {
            var b = OU(a);
            Tp(b, a.S.firstChild);
            var c = NU(a),
                d = 1 <= oy(a.o.b).duration.Ga;
            if (c) {
                var e = PU(a.H, !0).length;
                sPa(e, a.S, a.Va)
            } else a.S.style.overflowX = "", a.Va.style.overflowX = "";
            var e = {},
                f = a.o.Fa;
            e[va(f)] = f;
            f = new tU(f, p(a.sc.set, a.sc));
            G(f, ["sb", "tb", "ub"], p(a.Cg, a));
            a.xy = new hC(a.yb, b, e, p(a.Od, a, a.Je), a.Ba, f);
            if (!NU(a)) {
                var g = a.R;
                a.uy = new cC(a.Va, new OB(a.b.ha(mq(a.V)), new mp(g.focus, g.first, 1, gk(g))), e, a.V.b, a.Ba, !0, f)
            }
            e = a.ha();
            a.xl =
                new CU(a.yb, e, a.ta);
            a.Sa = new IB(e);
            MB(a.Sa, r(kPa, e, !1), p(a.dX, a), p(a.eX, a));
            MB(a.Sa, r(kPa, e, !0), p(a.gX, a), p(a.hX, a), p(a.iX, a));
            1 < gk(a.R) && (LB(a.Sa, Vw, p(a.ih, a)), MB(a.Sa, Vw, Sw, Rw));
            c && !d && (a.tt = a.Od(a.wc, a.o.Fa), a.tt.Br(b));
            b = no(a.o.Fa);
            b = Fe(a.b, "*", b, a.ha());
            a.hG = tPa(a, b[0] || null);
            a.gG = tPa(a, b[1] || null)
        },
        tPa = function(a, b) {
            if (!b) return null;
            1 <= oy(a.o.b).duration.Ga ? Fc(b, "drag-chip") : (b = b.firstChild, b.style.position = "relative");
            var c = new xU(b, "sc-");
            KOa(c);
            return c
        };
    MU.prototype.ih = function(a) {
        a = Uw(a);
        this.R.focus = a;
        this.Sb.o("parallel")
    };
    MU.prototype.Cg = function(a) {
        var b;
        a: {
            b = NU(this);
            switch (a.type) {
                case "sb":
                    b = b ? "find_a_time_day_view_chip_dragged" : "find_a_time_week_view_chip_dragged";
                    break a;
                case "tb":
                    b = b ? "find_a_time_day_view_chip_resized" : "find_a_time_week_view_chip_resized";
                    break a;
                case "ub":
                    b = b ? "find_a_time_day_view_chip_replaced" : "find_a_time_week_view_chip_replaced";
                    break a
            }
            b = void 0
        }
        var c = PU(this.H, !0).length;
        this.ab.wf(b, c);
        var d;
        switch (a.type) {
            case "sb":
            case "ub":
                d = VO.Ow;
                break;
            case "tb":
                d = VO.hw
        }
        d && this.ya(new IQ(d))
    };
    MU.prototype.Od = function(a, b) {
        NU(this);
        return new RB(b, a, 42, !0)
    };
    var rPa = function(a, b) {
        var c = a.o.b.get(),
            d = c.start.tb(),
            e = c.end.tb();
        d.Ya().equals(e.Ya()) || (e = bx(d.Ya(), new Mh(23, 59, 0)));
        c = [];
        a.R.contains(d) && c.push(Nh(d) - 60);
        a.R.contains(e) && c.push(Nh(e) + 60);
        c.length && (d = OU(a), d = iq(d, a.S.clientHeight, c, a.S.scrollTop), b ? a.S.scrollTop = d : a.S.scrollTop != d && (y(a.ua), a.ua = new pU(a.S, d, function(a, b, c) {
            c = Math.pow(.5, c / 150);
            return Math.round(a * c + b * (1 - c))
        }), a.ua.start()))
    };
    MU.prototype.Ma = function() {
        MU.qa.Ma.call(this);
        oPa(this);
        if (this.ma) {
            var a = T(this);
            a.ka(this.ma, "action", this.Qk);
            a.ka(this.H, ["Z", "$", "aa"], this.Fi);
            fPa(this)
        }
        this.vy || this.wy ? SU(this) : rPa(this, !0)
    };
    MU.prototype.Jb = function() {
        nPa(this);
        this.wy = this.vy = !1;
        MU.qa.Jb.call(this)
    };
    var sPa = function(a, b, c) {
        60 * a > b.offsetWidth ? (b.style.overflowX = "scroll", c.style.overflowX = "hidden", a *= 60, b.firstChild.style.width = a + "px", c.firstChild.style.width = a + "px", G(b, "scroll", function() {
            c.scrollLeft = b.scrollLeft
        })) : (b.style.overflowX = "", c.style.overflowX = "")
    };
    MU.prototype.To = function(a) {
        return !!QU(this.H, wn(a)).length
    };
    MU.prototype.$f = function(a, b) {
        return this.Ba.Cx(a, b) || zn(Fa(0), a, b)
    };
    var qPa = new Ip("tg-times-start", "tg-time-start", "tg-time-start-last"),
        pPa = new Ip("tg-times-end", "tg-time-end", "tg-time-end-last");
    var UU = function(a, b, c) {
        S.call(this);
        this.U = K(a, tj).H;
        mi(a);
        this.H = b;
        this.S = c;
        this.R = !1;
        this.V = K(a, hj);
        this.o = new lM;
        C(TU, function(a) {
            this.o.Ie(new NJ(uPa(a), a))
        }, this)
    };
    v(UU, S);
    var vPa = {
            qC: "tsl-tfs-duration",
            yea: "tsl-tfs-duration-menu",
            wQ: "tsl-tfs-timeframe",
            xQ: "tsl-tfs-timeframe-label",
            yQ: "tsl-tfs-timeframe-message"
        },
        TU = [900, 1800, 3600, 5400, 7200];
    h = UU.prototype;
    h.hc = function(a) {
        UU.qa.hc.call(this, a);
        bF(this.V, this.ha(), IOa, {
            Ub: vPa
        });
        this.Ua(this.o);
        a = XE(this, "tsl-tfs-duration");
        this.o.render(a);
        Fc(this.o.ad().ha(), "tsl-tfs-duration-menu")
    };
    h.Ma = function() {
        UU.qa.Ma.call(this);
        T(this).ka(this.H, jB, this.nX).ka(this.o, "change", this.d0).ka(this.o, "hide", this.R1).ka(this.o, "action", this.c0);
        wPa(this);
        xPa(this)
    };
    h.d0 = function() {
        var a = parseInt(this.o.lb(), 10),
            b = this.S.b,
            c = HP(b),
            d = HP(this.S.b).start;
        d.H() && (d = new Lh(d.year, d.month, d.Ga, 12, 0, 0));
        a = new $h(d, new Ch(0, 0, 0, a));
        c.equals(a) || b.set(a)
    };
    h.R1 = function(a) {
        a.stopPropagation()
    };
    h.c0 = function() {
        this.R && (this.R = !1, this.ya("vb"))
    };
    h.nX = function(a) {
        0 == a.kr ? wPa(this) : 1 == a.kr && xPa(this);
        this.R = !0
    };
    var wPa = function(a) {
            var b = a.H.o;
            Zb(TU, b) || yPa(a, b);
            a.o.Kb(b)
        },
        yPa = function(a, b) {
            var c = -1,
                d = -1;
            C(mIa(a.o.ad()), function(a, e) {
                var f = parseInt(a.lb(), 10); - 1 == c && f > b && (c = e);
                Zb(TU, f) || (d = e)
            });
            var e = uPa(b),
                e = new NJ(e, b); - 1 == c && (c = iy(a.o.ad()));
            a.o.Qn(e, c);
            c <= d && d++; - 1 < d && a.o.Vt(d)
        },
        uPa = function(a) {
            var b = Math.floor(a / 3600);
            a = Math.floor((a - 3600 * b) / 60);
            var c = {
                HOURS: b,
                MINUTES: a
            };
            return 0 < b && 0 < a ? jl(new il("{HOURS, plural, =1 {1 h}other {# h}} {MINUTES, plural, =1 {1 min}other {# min}}"), c) : 0 < b ? jl(new il("{HOURS, plural, =1 {1 h}other {# h}}"), c) : jl(new il("{MINUTES, plural, =1 {1 min}other {# min}}"), c)
        },
        xPa = function(a) {
            var b = a.U.Dd(CHa(a.H), !0),
                c = new il("Week of {DATE}");
            ze(XE(a, "tsl-tfs-timeframe-message"), jl(c, {
                DATE: b
            }))
        };
    var VU = function(a, b) {
        S.call(this);
        this.Va = a;
        this.R = K(a, hj);
        this.o = b;
        this.H = b.Vd();
        this.ma = this.H.b;
        this.Fa = new jJa(a, this.H.Ba);
        this.U = new HU(a);
        this.Na = this.S = null;
        this.yb = this.o.R;
        this.ua = new UU(a, this.yb, this.H);
        this.V = this.Ba = null;
        this.Sa = new ZOa(this.Va);
        this.La = new HQ(this.o, this.Fa);
        this.Hb(this.La);
        this.ta = {}
    };
    v(VU, S);
    var WU = {
        LM: "tsl-best-suggestions",
        NM: "tsl-bucketed-suggestions",
        gN: "tsl-content-panel",
        UO: "tsl-loading",
        vP: "tsl-no-suggestions",
        wP: "tsl-omitted",
        QP: "tsl-recurring-event-message",
        fQ: "tsl-show-more",
        mma: "selected",
        iQ: "tsl-suggestion",
        jQ: "tsl-scroll-panel",
        zQ: "tsl-time-filters",
        AQ: "tsl-suggestions-panel",
        Vk: "tsl-list-root"
    };
    VU.prototype.Xa = function() {
        this.Ea = cF(this.R, SOa, {
            Ub: WU
        });
        this.Ua(this.ua);
        $x(this.ua, XE(this, "tsl-time-filters"));
        this.Ba = XE(this, "tsl-content-panel");
        this.Na = XE(this, "tsl-scroll-panel");
        this.S = XE(this, "tsl-loading");
        this.U.render(this.S);
        this.V = XE(this, "tsl-no-suggestions");
        this.Ra()
    };
    VU.prototype.Ma = function() {
        VU.qa.Ma.call(this);
        H(this.Ba, !0);
        var a;
        a = this.b;
        var b = XE(this, "tsl-show-more"),
            b = ge("tsl-tile-inner-content", b || a.o);
        a = ge("action", b || a.o);
        H(XE(this, "tsl-recurring-event-message"), this.H.Yf());
        xv(T(this), a, HB, this.Mb).ka(this.ua, "vb", this.wc).ka(this.ma, "change", this.Ib).ka(this.o, jB, this.Db).ka(this.o, iB, this.Zb).ka(this.o, [qta, rta], this.Ra).ka(this.o, sta, this.sc)
    };
    VU.prototype.Ib = function() {
        zPa(this)
    };
    var zPa = function(a) {
        var b = HP(a.ma),
            b = a.ta[b.toString()],
            c = a.ha();
        a = Qu("selected", c || a.b.o);
        for (c = 0; c < a.length; c++) Gc(a[c], "selected");
        b && Ic(b, "selected", !0)
    };
    VU.prototype.Db = function() {
        this.o.Wp()
    };
    VU.prototype.Zb = function() {
        if (!this.kb) throw Error("Fb");
        var a = $g(this.o.b.b);
        APa(this, a);
        var b = Xg(a, yP, 1),
            c = XE(this, "tsl-best-suggestions");
        b.length ? (bF(this.R, c, XOa, {
            cM: b,
            Ub: WU
        }), H(c, !0)) : (H(c, !1), this.b.Ug(c));
        c = Xg(a, xP, 2);
        b = XE(this, "tsl-bucketed-suggestions");
        H(b, !1);
        c.length ? (bF(this.R, b, WOa, {
            ZR: c,
            Ub: WU
        }), c = !!Xg(a, yP, 1).length, H(b, !c)) : this.b.Ug(b);
        var b = !!Xg(a, yP, 1).length,
            c = !!Xg(a, xP, 2).length,
            d = XE(this, "tsl-show-more");
        H(d, c && b);
        c = Xg(Wg(a, BP, 3), AP, 1);
        a = {};
        for (b = 0; b < c.length; b++) a[Ug(c[b],
            4, "")] = c[b];
        b = this.ha();
        c = Qu("tsl-suggestion", b || this.b.o);
        d = T(this);
        this.ta = {};
        for (b = 0; b < c.length; b++) {
            var e = c[b],
                f = yt(e, "id"),
                f = kJa(this.Fa, a[f]);
            this.ta[f.toString()] = e;
            xv(d, e, HB, r(this.Sb, f))
        }
        zPa(this)
    };
    VU.prototype.sc = function(a) {
        this.o.H || (this.U.stop(), H(this.S, !1), bF(this.R, this.V, TOa, {
            Uh: $Oa(this.Sa, a.response)
        }), H(this.V, !0))
    };
    var APa = function(a, b) {
        var c = XE(a, "tsl-omitted"),
            d = Xg(Wg(b, BP, 3), iP, 7),
            e = a.H.o,
            d = Sb(d, function(a) {
                a = (a = (a = Wg(a, lP, 1)) ? a.getEmail() : null) ? e.b(a) : null;
                return !!a && !a.Rc()
            });
        d.length ? (bF(a.R, c, UOa, {
            U4: d
        }), H(c, !0)) : H(c, !1)
    };
    VU.prototype.Sb = function(a) {
        this.ma.set(a);
        a = this.La;
        var b = lJa(a);
        a.b.nb(UO.uw, b)
    };
    VU.prototype.Mb = function() {
        var a = XE(this, "tsl-bucketed-suggestions"),
            b = XE(this, "tsl-show-more");
        H(a, !0);
        H(b, !1);
        this.o.nb(UO.sw)
    };
    VU.prototype.Ra = function() {
        H(this.V, !1);
        var a = this.o.H;
        a ? this.U.reset() : this.U.stop();
        H(this.S, a);
        H(this.Na, !a)
    };
    VU.prototype.wc = function() {
        this.o.Wp();
        this.o.nb(UO.rw)
    };
    var XU = function(a, b) {
        S.call(this);
        this.o = new CS(a, b.Vd(), b.H, !1, !1, !1, !0)
    };
    v(XU, S);
    XU.prototype.Xa = function() {
        var a = this.b.b("DIV", "scheduling-simple-container");
        this.Ea = a;
        var b = this.b.b("DIV", "scheduling-simple-container-header");
        this.b.Wd(b, "Guests");
        a.appendChild(b);
        this.Ua(this.o, !0)
    };
    var ZU = function(a, b, c, d, e) {
        S.call(this);
        K(a, tj);
        this.Ra = K(a, hj);
        this.Ba = c;
        this.ta = d;
        this.La = new VU(a, c);
        this.o = (this.V = b.Vd().ip()) ? new aS(a, b.Vd(), d, !1) : null;
        this.ma = e || new CS(a, b.Vd(), b.H, !1, !1, !1, !1, d);
        this.Fa = this.U = this.R = null;
        this.S = !1;
        this.ua = new nJa(d);
        this.Na = b.Vd().Yf();
        this.Va = BPa(b.Vd().o);
        this.H = new YU
    };
    v(ZU, S);
    var CPa = {
        EO: "suggest-guest-header",
        zC: "suggest-guest-content",
        Vk: "suggest-root",
        bD: "suggest-timesuggest-content",
        CQ: "suggest-timesuggest-header",
        UC: "suggest-roomsuggest-content",
        RP: "suggest-roomsuggest-header",
        Qw: "suggest-tab-content",
        pQ: "suggest-tab-contents",
        qQ: "suggest-tab-label",
        sQ: "suggest-tab-label-underline",
        rQ: "suggest-tab-labels",
        oQ: "suggest-tabs"
    };
    h = ZU.prototype;
    h.Xa = function() {
        ZU.qa.Xa.call(this);
        this.Ea = cF(this.Ra, GOa, {
            Ub: CPa,
            ip: this.V
        });
        this.Ua(this.La);
        this.La.render(XE(this, "suggest-timesuggest-content"));
        this.R = XE(this, "suggest-timesuggest-header");
        this.o && (this.Ua(this.o), this.o.render(XE(this, "suggest-roomsuggest-content")), this.U = XE(this, "suggest-roomsuggest-header"));
        this.Ua(this.ma);
        this.ma.render(XE(this, "suggest-guest-content"));
        this.Fa = XE(this, "suggest-guest-header");
        this.Ua(this.H);
        $x(this.H, XE(this, "suggest-tabs"));
        DPa(this.H, this.Va ? this.R :
            this.Fa)
    };
    h.Ma = function() {
        ZU.qa.Ma.call(this);
        xv(T(this).ka(this.Ba, iB, this.k2), this.R, HB, this.j2);
        if (this.o) {
            xv(T(this).ka(this.o, "da", this.Sa), this.U, HB, this.O1);
            var a = new AQ;
            a.b = !0;
            this.ta.nb(UO.Xr, a)
        }
    };
    h.j2 = function() {
        EPa(this)
    };
    h.O1 = function() {
        var a = new AQ;
        a.b = !0;
        this.ta.nb(UO.Wr, a);
        oJa(this.ua)
    };
    h.k2 = function() {
        this.S = !0;
        FPa(this.H, this.R) && EPa(this)
    };
    var EPa = function(a) {
        if (a.S) {
            var b = new AQ;
            b.Yf = a.Na;
            a.Ba.nb(UO.tw, b);
            a.S = !1
        }
    };
    ZU.prototype.Sa = function(a) {
        var b = this.ua;
        FPa(this.H, this.U) ? KQ(b, a) : b.b = a
    };
    var BPa = function(a) {
            return Vb(a.o(), function(a) {
                return !a.Rc() && 5 != a.response
            })
        },
        YU = function() {
            S.call(this);
            this.o = [];
            this.H = this.R = null
        };
    v(YU, S);
    YU.prototype.hc = function(a) {
        YU.qa.hc.call(this, a);
        a = this.Ea ? Qu("suggest-tab-label", this.Ea || this.b.o) : [];
        for (var b = 0; b < a.length; b++) vIa(this, a[b].getAttribute("label-for")), this.o.push(a[b]);
        this.R = XE(this, "suggest-tab-label-underline");
        gf(this.R, {
            width: 100 / a.length + "%",
            left: 0
        })
    };
    YU.prototype.Ma = function() {
        YU.qa.Ma.call(this);
        C(this.o, function(a) {
            xv(T(this), a, HB, this.S)
        }, this)
    };
    YU.prototype.S = function(a) {
        DPa(this, a.currentTarget)
    };
    var FPa = function(a, b) {
            return null != a.H && a.o[a.H] == b
        },
        DPa = function(a, b) {
            for (var c = -1, d = 0; d < a.o.length; d++) {
                var e = b == a.o[d];
                Ic(a.o[d], "selected", e);
                var f = vIa(a, a.o[d].getAttribute("label-for"));
                H(f, e);
                ar(a.o[d], "selected", e);
                ar(f, "hidden", !e);
                e && (c = d)
            }
            var g = 100 * c / a.o.length + "%",
                k = a.R;
            ca.requestAnimationFrame(function() {
                gf(k, {
                    left: g
                })
            });
            a.H = c
        };
    var qV = function(a, b, c, d) {
        S.call(this);
        this.U = a;
        this.Sa = qg(ut, a.get(xg));
        this.ua = null;
        this.Ba = b;
        this.V = b.Vd();
        this.yb = new DQ(this.V);
        this.Hb(this.yb);
        this.Db = K(a, hj);
        this.R = c;
        b = new jJa(this.U, this.V.Ba);
        this.Fa = new HQ(this.R, b);
        this.Hb(this.Fa);
        this.mb = new Vy;
        this.Hb(this.mb);
        this.mb.setVisible(!1);
        Ay(this.mb, !1);
        By(this.mb);
        this.ma = this.V.$d;
        this.Ra = hh(a).R.ua ? new ZU(a, this.Ba, this.R, d) : new XU(a, this.Ba);
        this.o = new MU(a, this.Ba);
        this.S = new yL("Done", this.b, 2);
        this.Hb(this.S);
        this.H = new yL("Cancel",
            this.b, 0);
        this.Hb(this.H);
        this.ta = new yD("");
        this.La = null;
        this.Va = new Fs;
        this.Hb(this.Va)
    };
    v(qV, S);
    var GPa = {
        UM: "scheduling-button-bar",
        zO: "scheduling-grid-container",
        pO: "scheduling-feedback-container",
        qO: "scheduling-feedback-link",
        rO: "scheduling-feedback-message",
        Vk: "scheduling-root",
        WP: "scheduling-container",
        kQ: "scheduling-suggest-container"
    };
    h = qV.prototype;
    h.Xa = function() {
        var a = this.b,
            b = Zj(this.U).isEnabled(27);
        this.Ea = cF(this.Db, DOa, {
            Ub: GPa,
            OU: b
        });
        b = this.ha();
        this.mb.Rl(b);
        this.Ua(this.o);
        this.La = ge("scheduling-grid-container", b || a.o);
        this.o.render(this.La);
        this.Ua(this.Ra);
        this.Ra.render(ge("scheduling-suggest-container", b || a.o));
        this.Ua(this.S);
        this.Ua(this.H);
        b = ge("scheduling-button-bar", b || a.o);
        this.S.render(b);
        this.H.render(b);
        this.Ua(this.ta);
        this.ta.render(a.Qb().body);
        a = this.ta;
        a.o.style.top = "0px";
        a.o.style.right = "0px";
        a.o.style.bottom = "0px";
        a.o.style.left = "0px";
        H(a.o, !0)
    };
    h.Ma = function() {
        T(this).ka(this.S, "action", this.cX).ka(this.H, "action", this.bX).ka(this.Ra, "fb", this.Ib).ka(this.Va, "resize", this.Na).ka(this.o, "resize", this.Na).ka(this.o, ita, p(this.Fa.T, this.Fa)).ka(this.mb, "show", this.p1).ka(this.mb, "hide", this.o1);
        if (this.ma) {
            var a = XE(this, "scheduling-feedback-link");
            xH(a, HB, p(function() {
                LK("findtime-feedback", void 0, eIa(this.ma))
            }, this))
        }
        this.mb.setVisible(!0);
        qV.qa.Ma.call(this);
        this.Na()
    };
    h.Jb = function() {
        this.mb.setVisible(!1);
        qV.qa.Jb.call(this)
    };
    h.cX = function() {
        this.mb.setVisible(!1);
        this.R.nb(UO.ww);
        this.ya(new qOa(this.V))
    };
    h.bX = function() {
        this.mb.setVisible(!1);
        this.R.nb(UO.Tr)
    };
    h.o1 = function(a) {
        this.ta.Eb();
        HPa(this);
        this.ya("hide");
        a.target && this.R.nb(UO.Tr);
        this.Sa.addCallback(function(a) {
            Qra(a, new Pf(this.ha()));
            this.ua && Rra(this.ua)
        }, this)
    };
    h.p1 = function() {
        this.Sa.addCallback(function(a) {
            this.ua = new Cz(Fv(a.b.o));
            Pra(a, new Pf(this.ha()))
        }, this)
    };
    var HPa = function(a) {
        if (Zj(a.U).isEnabled(27) && (a.U.get(Eg).b(N("<div>Got feedback about time or room suggestions?  " + COa({
                Ub: GPa
            }) + "</div>")), a.ma)) {
            var b = ge("scheduling-feedback-link", a.b.o);
            xH(b, HB, p(function() {
                LK("findtime-feedback", void 0, eIa(this.ma))
            }, a))
        }
    };
    qV.prototype.Ib = function() {
        var a = new AQ;
        a.b = !0;
        this.R.nb(UO.Sr, a)
    };
    qV.prototype.Na = function() {
        if (this.o.kb) {
            var a;
            a = this.La;
            var b = be(a),
                c = E && a.currentStyle;
            c && he(ce(b).o) && "auto" != c.width && "auto" != c.height && !c.boxSizing ? (b = vf(a, c.width, "width", "pixelWidth"), a = vf(a, c.height, "height", "pixelHeight"), a = new Ta(b, a)) : (c = new Ta(a.offsetWidth, a.offsetHeight), b = yf(a), a = aw(a), a = new Ta(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom));
            b = a.height;
            a = this.o.S;
            var d = a.parentNode,
                c = a.firstChild,
                e = of(a).y,
                d = of(d).y,
                e = e - d,
                d = aw(a),
                b = b - e - d.top - d.bottom,
                c = rf(c).height;
            0 < c && c--;
            b = Math.min(b, c);
            0 >= b || (c = b + "px", hf(a, "height") != c && gf(a, "height", c))
        }
    };
    var rV = function(a, b, c, d) {
        rV.qa.constructor.call(this, a, b, c, d.Cc);
        this.b = Pt(this).find(".bcp-selected").parent().Cb();
        this.R = {};
        this.R.none = AK(this, "none");
        a = wJa();
        for (b = 0; b < a.length; b++) c = a[b], this.R[c] = AK(this, c);
        a = Ya(this.R);
        this.$b = new Jq;
        Mq(this.$b, a);
        a = Qb(a, this.b);
        Rq(this.$b, a, !0);
        a = yt(this.b, xK);
        this.o = hf(AK(this, "none"), "border-color");
        this.ma = new py(a)
    };
    v(rV, wK);
    Rt(EBa, {}, rV);
    var IPa = Cc("xtcXDd"),
        JPa = Cc("AjJexe");
    rV.prototype.S = function(a) {
        switch (a.event.keyCode) {
            case 38:
            case 37:
                nv(this.$b);
                a.event.stopPropagation();
                break;
            case 40:
            case 39:
                mv(this.$b);
                a.event.stopPropagation();
                break;
            case 13:
                this.T(), a.event.stopPropagation()
        }
        GBa(this, this.$b.Re())
    };
    rV.prototype.Bb.uYT2Vb = function() {
        return this.S
    };
    rV.prototype.ua = function(a) {
        var b = zt(a, xK).b();
        "none" == b ? yG(a, this.o) : yG(a, b)
    };
    rV.prototype.ta = function(a) {
        a = yt(a, xK);
        this.trigger(IPa, a)
    };
    rV.prototype.T = function() {
        this.trigger(JPa)
    };
    var sV = function(a, b, c, d, e) {
        DK.call(this);
        this.S = a;
        this.R = b;
        this.o = c || "";
        this.U = e;
        this.H = d
    };
    v(sV, DK);
    h = sV.prototype;
    h.Xa = function() {
        for (var a = K(M(), hj), b = this.o, c = this.U || this.hb("") + "-label", d = this.S.b, e = vJa("none") || "", d = {
                jn: "none",
                id: this.hb("none"),
                fillColor: d.b,
                borderColor: d.H,
                name: e
            }, e = [], f = wJa(), g = 0; g < f.length; g++) {
            var k = f[g],
                l = vJa(k) || "";
            e.push({
                jn: k,
                id: this.hb(k),
                fillColor: k,
                borderColor: k,
                name: l
            })
        }
        this.Ea = cF(a, gJa, {
            label: b,
            Qz: c,
            $T: d,
            UB: e,
            i8: this.R.get()
        })
    };
    h.Ma = function() {
        sV.qa.Ma.call(this);
        var a = this.X5;
        Nv(this.ha(), IPa, a, this);
        a = this.Y4;
        Nv(this.ha(), JPa, a, this)
    };
    h.OY = function() {
        if (this.controller) {
            var a = this.controller;
            a.b && (zK(a.b), a.b = null);
            var b = a.ma.get();
            gm(b) && (a.b = a.R[b]);
            a.b || (a.b = a.R.none);
            yK(a.b)
        }
    };
    h.X5 = function(a) {
        this.R.set(a.data)
    };
    h.Y4 = function() {
        this.H && this.H.call()
    };
    var tV = function(a) {
        D.call(this, a)
    };
    v(tV, D);
    var uV = function(a) {
        D.call(this, "Cb");
        this.o = a
    };
    v(uV, tV);
    uV.prototype.getId = function() {
        return this.o
    };
    var KPa = function(a) {
            var b, c = a.id,
                d = a.prefix,
                e = a.Z3,
                f = a.T7,
                g = a.jS,
                k = a.JT,
                l = a.hU,
                m = a.xR,
                q = a.yR,
                u = a.u7,
                w = a.cV,
                z = a.w7,
                A = a.gT,
                B = a.d7,
                L = a.c7,
                Z = a.g7;
            a = a.D6;
            return N("<div class=" + hn(d) + "-cont><div class=" + hn(d) + "-panel><div class=" + hn(d) + '-guests id="' + P(c) + 'guests"></div><div class=' + hn(d) + "-details><table class=" + hn(d) + "-dt>" + O(e) + O(f) + O(null == (b = g) ? "" : b) + O(null == (b = k) ? "" : b) + O(l) + O(m) + O(u) + O(w) + O(z) + O(A) + O(B) + '<tr><th></th><td class="' + P(d) + "-privpub " + P(d) + '-dt-td">' + O(L) + '</td></tr><tr><th></th><td class="' +
                P(d) + "-publish " + P(d) + '-dt-td">' + O(Z) + "</td></tr><tr><td colspan=2>" + O(null == (b = a) ? "" : b) + "</td></tr></table>" + O(q) + "</div></div></div>")
        },
        vV = function(a) {
            var b;
            b = {};
            var c = a.id,
                d = a.kg,
                e = a.prefix,
                f = a.wx,
                g = a.label;
            a = a.content;
            return N('<tr id="' + P(c) + P(d) + '-row"><th class="' + P(e) + '-dt-th"' + (f ? ' style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + 'vertical-align:middle"' : "") + '><label id="' + P(c) + P(d) + '-label">' + O(g) + "</label></th><td class=" + hn(e) + "-dt-td>" + O(a) + "</td></tr>")
        },
        LPa = function(a) {
            return N("<tr><td colspan=2><div class=" + hn(a.prefix) + "-dt-hr></div></td></tr>")
        };
    var MPa = function(a) {
        var b = a.Uq;
        return N('<div class="' + P(a.className) + '"><span role="link" class="lk" tabindex="0" id="' + P(b) + '">' + O("Suggested times") + "</span></div>")
    };
    var NPa = function(a) {
            var b = "";
            a = a.Wl;
            for (var c = a.length, d = 0; d < c; d++) b += O(a[d]);
            return N(b)
        },
        OPa = function(a) {
            var b = a.className,
                c = a.EB,
                d = a.zR;
            return N('<div id="' + P(a.id) + '" class="' + P(b) + '" role="menuitem"><span>' + O(c) + "</span><br />" + O(d) + "</div>")
        };
    var wV = function(a, b, c) {
        S.call(this);
        this.U = (b || "ep-st") + "-list";
        this.R = c || Xk(a).H;
        this.$b = new Jq;
        this.o = this.U + "-item";
        this.H = []
    };
    v(wV, S);
    h = wV.prototype;
    h.aX = function(a) {
        if (Pq(this.$b)) {
            switch (a.keyCode) {
                case 38:
                    nv(this.$b);
                    break;
                case 40:
                    mv(this.$b);
                    break;
                case 13:
                case 32:
                    var b = this.$b.Re();
                    if (b && b.id) this.ya(new xV(this.H[this.$b.b]));
                    else return;
                    break;
                default:
                    return
            }
            a.preventDefault();
            a.stopPropagation()
        }
    };
    h.Xa = function() {
        wV.qa.Xa.call(this);
        this.reset();
        $q(this.ha(), "menu")
    };
    h.Ma = function() {
        wV.qa.Ma.call(this);
        T(this).ka(new ew(this.ha()), "key", this.aX);
        this.S = new IB(this.ha());
        LB(this.S, p(this.YW, this), p(this.$W, this))
    };
    h.Jb = function() {
        wV.qa.Jb.call(this);
        this.S.Pa()
    };
    h.YW = function(a) {
        return Ec(a, this.o) && !mb(a.id) ? a : (a = a.parentNode) && Ec(a, this.o) && !mb(a.id) ? a : null
    };
    h.$W = function(a) {
        a = iG(this, a.id);
        var b = Number(a);
        this.ya(new xV(this.H[0 == b && mb(a) ? NaN : b]))
    };
    var PPa = function(a, b) {
        var c = me("DIV", a.o, b);
        $q(c, "note");
        var d = a.ha();
        ze(d, "");
        oe(d, c);
        Mq(a.$b, [d])
    };
    wV.prototype.update = function(a) {
        if (a) {
            var b = a.o;
            if (0 == b.length) b = a.b.end.Ya(), b = "No free times for all participants were found through " + this.R.Ym(b) + ". Choose a different start time to search again.", PPa(this, b);
            else {
                this.H = [];
                a = N('<span class="' + P(this.o + "-attend") + '">' + O("All participants can attend") + "</span>");
                for (var c = [], d = 0; d < b.length; d++) {
                    this.H[d] = b[d];
                    var e = this.R.Ym(b[d].start.tb()) + " " + this.R.uc(b[d].start.tb());
                    c.push(OPa({
                        id: this.hb("" + d),
                        className: this.o,
                        EB: e,
                        zR: a
                    }))
                }
                Km(this.ha(),
                    NPa, {
                        Wl: c
                    });
                b = [];
                fc(b, ue(this.ha()));
                Mq(this.$b, b)
            }
        } else this.reset()
    };
    wV.prototype.reset = function() {
        PPa(this, "Loading...")
    };
    wV.prototype.focus = function() {
        this.$b.focus()
    };
    wV.prototype.blur = function() {
        Pq(this.$b) && this.$b.Re().blur()
    };
    var xV = function(a) {
        D.call(this, "Gb");
        this.Bg = a
    };
    v(xV, D);
    var QPa = new Ch(0, 0, 30, 0);
    var RPa = function(a, b) {
            this.b = a;
            this.o = b || []
        },
        SPa = function(a, b) {
            var c = a.wb().tb().Wa(),
                d = b.wb().tb().Wa();
            return c - d
        };
    var TPa = function() {},
        UPa = function(a, b, c) {
            a = a.o(c, b);
            if (null == a) return !0;
            if (!a.length || !a[0].contains(b.start)) return !1;
            c = a[0].end;
            for (var d = 0; d < a.length; d++) {
                if (c.Wa() >= a[d].start.Wa()) c = a[d].end.max(c);
                else break;
                if (b.end.Wa() <= a[d].end.Wa()) return !0
            }
            return !1
        };
    var yV = function(a, b) {
        this.U = a;
        this.b = b;
        this.S = this.T = this.R = null;
        if (this.b.start.Ga == this.b.end.Ga) {
            var c = this.b.start.hour,
                d = this.b.end.hour;
            this.R = 7 > c ? new Ch(0, c, this.b.start.minute, this.b.start.second) : new Ch(0, 7, 0, 0);
            this.T = 19 <= d ? new Ch(0, 24, 0, 0) : new Ch(0, 19, 0, 0)
        }
    };
    v(yV, TPa);
    yV.prototype.H = function(a, b, c, d) {
        this.S = c;
        this.U.H(a, b, c, d)
    };
    yV.prototype.o = function(a, b) {
        var c = this.U.o(a, b);
        if (c) return c;
        if (!this.R) return null;
        c = b || this.S;
        if (!c) return null;
        for (var d = c.start.Ya(), e = Bh(c.end.Ya(), d) + 1, f = [], g = 0; g < e; g++) {
            var k = Ih(d, g),
                l = Ah(k);
            Xh(l, this.R);
            k = Ah(k);
            Xh(k, this.T);
            l = new $h(l.tb(), k.tb());
            wQ(c, l) && f.push(l)
        }
        return f
    };
    var zV = function(a, b, c) {
        J.call(this);
        this.b = a;
        this.o = b;
        this.S = c;
        this.Da = new I(this);
        this.T = this.R = null;
        this.Da.ka(this.b, "ob", this.H);
        this.Da.ka(this.b, "pb", this.H);
        this.Da.ka(this.b, "qb", this.H);
        this.Da.ka(this.o, "change", this.U);
        VPa(this, WPa(b))
    };
    v(zV, J);
    zV.prototype.wa = function() {
        y(this.Da)
    };
    zV.prototype.H = function() {
        XPa(this)
    };
    zV.prototype.U = function() {
        VPa(this, WPa(this.o))
    };
    var WPa = function(a) {
            a = oy(a).start.tb();
            var b = Zh(a.year, a.month, a.Ga + 7, a.hour, a.minute, a.second).tb();
            return new $h(a, b)
        },
        VPa = function(a, b) {
            a.T = new $h(b.start.tb(), b.end.tb());
            var c = new $h(b.start.Ya(), Ih(b.end, 1)),
                d = a.b;
            d.U && vQ(d.U, c) || AV(a.b, c);
            d = a.b;
            d.S && vQ(d.S, c) || BV(a.b, c);
            XPa(a)
        },
        XPa = function(a) {
            var b = HP(a.o),
                c = YPa(a.b),
                d = a.T,
                e = RU(a.b, d),
                f = new yV(a.S, b),
                g = e.sort(SPa),
                e = d,
                b = new $h(b.start.tb(), b.end.tb()),
                e = new $h(e.start.tb(), e.end.tb());
            if (null == g || 0 == g.length) g = [];
            else {
                for (var k = [], l = 0; l < g.length; l++) {
                    var m =
                        g[l];
                    if (m) {
                        var q;
                        q = m;
                        q = new $h(q.wb().tb(), q.Xb().tb());
                        sQ(m) && wQ(e, q) && (0 == k.length ? k.push(q) : (m = k[k.length - 1], wQ(m, q) ? (k.pop(), k.push(m.hq(q))) : k.push(q)))
                    }
                }
                g = k
            }
            if (0 == g.length) e = [e];
            else {
                k = [];
                l = e.start.Wa();
                m = e.end.Wa();
                for (q = 0; q < g.length; q++) {
                    var u = g[q],
                        w = u.start.Wa();
                    0 == q && l < w && (e.start.equals(u.start) || k.push(new $h(e.start, u.start)));
                    q < g.length - 1 && (w = g[q + 1], u.end.equals(w.start) || k.push(new $h(u.end, w.start)));
                    w = u.end.Wa();
                    q == g.length - 1 && m > w && (u.end.equals(e.end) || k.push(new $h(u.end, e.end)))
                }
                e =
                    k
            }
            if (0 == e.length) b = [];
            else {
                g = [];
                k = Dh(b.end, b.start);
                0 > k.b && (k = new Ch(0, 1, 0, 0));
                l = e[0];
                m = b.start;
                m && m instanceof Lh && (0 == m.minute || 30 == m.minute) && 0 == m.second || b.start.Wa() != l.start.Wa() || (b = new $h(b.start, k), vQ(l, b) && g.push(b));
                for (b = 0; b < e.length; b++) {
                    l = e[b];
                    m = l.start;
                    0 != m.minute && 30 != m.minute || 0 != m.second ? (m = Ah(m), m.second = 0, 30 >= m.minute ? m.minute = 30 : Xh(m, new Ch(0, 0, 60 - m.minute, 0)), m = m.tb()) : m = m.tb();
                    u = m;
                    m = k;
                    q = [];
                    for (w = new $h(u, m); vQ(l, w);) q.push(w), u = Ah(u), Xh(u, QPa), u = u.tb(), w = new $h(u, m);
                    g = g.concat(q)
                }
                b = g
            }
            e = [];
            for (g = 0; g < b.length; g++) {
                k = b[g];
                l = !0;
                for (m = 0; m < c.length; m++)
                    if (!UPa(f, k, c[m])) {
                        l = !1;
                        break
                    }
                l && e.push(k)
            }
            a.R = new RPa(d, e);
            a.ya("Hb")
        };
    var CV = function(a, b, c, d, e, f) {
        S.call(this);
        this.ua = a;
        this.U = b;
        this.ta = b.b;
        this.S = c;
        this.ma = d || "ep-st";
        this.Yb = e || new wV(this.ua, d);
        this.mb = f || new EU;
        this.H = this.V = !1;
        this.R = null;
        this.ab = K(a, oj)
    };
    v(CV, S);
    h = CV.prototype;
    h.Xa = function() {
        this.S && (CV.qa.Xa.call(this), this.Yb.Xa(), this.Ea = uJa(MPa, {
            Uq: this.hb("link"),
            className: this.ma
        }))
    };
    h.Ma = function() {
        CV.qa.Ma.call(this);
        ZPa(this);
        this.Yb.Ma();
        this.Yb.update(this.S.R);
        this.R = this.Za("link");
        xv(T(this), this.R, HB, this.C9);
        T(this).ka(this.U, "change", this.Ba);
        T(this).ka(this.S, "Hb", this.Fa);
        T(this).ka(this.Yb, "Gb", this.La)
    };
    h.Jb = function() {
        this.H && DV(this);
        CV.qa.Jb.call(this);
        this.Yb.Jb()
    };
    h.xI = function(a) {
        switch (a.keyCode) {
            case 27:
                DV(this);
                this.R.focus();
                break;
            default:
                return
        }
        a.preventDefault();
        a.stopPropagation()
    };
    h.fG = function(a) {
        a = a.target;
        xe(this.mb.ha(), a) || xe(this.R, a) || DV(this)
    };
    h.wa = function() {
        this.o && this.b.Te(this.o);
        y(this.mb);
        this.Yb.Pa();
        CV.qa.wa.call(this)
    };
    h.C9 = function(a) {
        if (this.H) DV(this);
        else {
            this.H = !0;
            if (!this.o) {
                this.o = me("DIV", this.ma + "-popup");
                this.b.appendChild(this.o, this.Yb.ha());
                var b = this.mb,
                    c = this.o;
                b.HJ = c;
                FU(b, c);
                this.mb.Hk(this.ha());
                this.mb.H = !1;
                QI(this.mb.o, 0, 2, void 0, -10);
                Ay(this.mb.mb, !1);
                this.mb.setVisible(!1);
                this.mb.render()
            }
            this.mb.setVisible(!0);
            this.Yb.focus();
            T(this).ka(document, "mousedown", this.fG);
            T(this).ka(new ew(this.o), "key", this.xI);
            a.preventDefault();
            this.ab.nb("event_details_time_suggest_expanded")
        }
    };
    var DV = function(a) {
        a.H = !1;
        a.Yb.blur();
        a.mb.setVisible(!1);
        T(a).b(document, "mousedown", a.fG);
        T(a).b(new ew(a.o), "key", a.xI)
    };
    CV.prototype.Fa = function() {
        ZPa(this);
        this.Yb.update(this.S.R);
        this.H && this.Yb.focus()
    };
    CV.prototype.Ba = function() {
        ZPa(this)
    };
    var ZPa = function(a) {
        var b = oy(a.ta),
            b = Dh(b.end, b.start),
            c = a.U.o.size(),
            d = a.U.Yf();
        a.V = 86400 > b.b && 1 < c && !d;
        H(a.ha(), a.V);
        !a.V && a.H && DV(a)
    };
    CV.prototype.La = function(a) {
        this.ta.set(a.Bg);
        DV(this);
        this.R.focus();
        this.ab.nb("event_details_time_suggest_selected")
    };
    var FV = function(a, b, c, d, e, f, g, k) {
        S.call(this);
        this.H = a;
        this.Ba = K(a, hj);
        this.o = b;
        this.Na = f;
        var l = b.H;
        f = 3 == b.V;
        this.Sa = EV(this) && !b.Fb() && 3 != l.b.get() && 4 != l.b.get();
        this.S = null;
        if (EV(this)) {
            var m = b.T.b.get(),
                m = (m = So(Ro.va(), m)) && m.color ? m.color : Wl("#ffffff"),
                q = this.hb("eventColors-label");
            this.S = new sV(m, l.S, void 0, void 0, q);
            this.Ua(this.S)
        }
        this.Fa = this.hb("");
        this.ma = k || null;
        k || (k = l.R) && k.qc() && (this.ma = new lU(a, k, b.b, b.T.b, b.Fb()));
        this.ma && this.Ua(this.ma);
        this.ta = g || new eU(a, b.ua, f);
        this.Ua(this.ta);
        d = d ? new CV(a, b, d) : void 0;
        this.R = new CS(a, b, c, !0, EV(this), !0, !0, e, d);
        this.Ua(this.R);
        this.U = null;
        a = xT(this.o);
        c = this.o.La;
        e = this.o.Mb;
        if (EV(this) || c.get()) d = this.H, g = 2 == a ? "Click to add a location" : void 0, b = new tT(c, g), c = 1 == a ? null : new rT(d, c, e, g), this.Wq = new wT(b, a, c), this.Ua(this.Wq);
        a = xT(this.o);
        b = EV(this);
        c = this.o.Na;
        if (b || c.get()) this.xp = CNa(this.o.Na, a, 2 == a ? "Click to add a description" : void 0, new uS(b, 3, Number.MAX_VALUE, !0)), this.Ua(this.xp);
        $Pa(this)
    };
    v(FV, S);
    var aQa = /^(https?:\/\/mail.google.com\/mail)(\/u\/\d+)?(\/.*\/[0-9a-f]+)$/;
    h = FV.prototype;
    h.Wq = null;
    h.xp = null;
    h.bl = null;
    h.qr = null;
    h.us = null;
    h.ys = null;
    h.xs = null;
    h.Mx = null;
    h.AA = null;
    h.zA = null;
    h.ur = null;
    h.OE = null;
    h.YK = null;
    h.WK = null;
    h.sL = null;
    h.rL = null;
    h.dK = null;
    h.Xa = function() {
        var a = this.b,
            b = this.hb(""),
            c = a.b("DIV", "ep-dp"),
            d = qi(this.H),
            e = {
                prefix: "ep-dp"
            },
            f = "";
        d && (f = N('<a class="lk" target="_blank" href="' + P(nn(this.o.kd)) + '">' + O("map") + "</a>"));
        var g = this.o.H,
            k = g.R,
            l = null != this.S,
            m = d && k && k.qc(),
            q, u = {
                prefix: "ep-dp",
                i7: bQa(this, "Show me as", "conflictResolutionMode", ["Available", "Busy", "Blocking"], ["Available", "Busy", "Busy (decline invitations)"], [1, 0, 2], 0)
            },
            w = u.i7;
        q = N(LPa(u) + O(w));
        var z = bQa(this, "Visibility", "privacy", ["Default", "Public", "Private", "Secret"], ["Calendar default", "Public", "Private", "Only me"], [1, 2, 3, 4], 2),
            A, B = this.ta,
            L;
        (L = !B.R.isEmpty()) || (L = fU(B) && B.ua);
        var Z;
        (Z = L) || (Z = !fU(B) && !!qw(B.U).b);
        A = Z;
        var V = GQ("event_visibility"),
            ha = this.Ba,
            ka;
        if (this.Wq) {
            var ja = {
                    id: b,
                    prefix: "ep-dp",
                    kg: "location",
                    g4: f
                },
                da = ja.prefix,
                ra = ja.id,
                ta = ja.kg,
                Aa = ja.g4;
            ka = N(vV($m({
                label: "Where",
                content: bn('<div class="' + P(da) + '-input" id="' + P(ra) + P(ta) + '"></div><div class="' + P(da) + '-maplink" id="' + P(ra) + 'maplink">' + O(Aa) + "</div>"),
                wx: !0
            }, ja)))
        } else ka = "";
        var Pb = ka,
            Ib = {
                id: this.Fa,
                prefix: "ep-dp",
                label: (this.o.U.xc(), "Video call")
            },
            Ud = Ib.id,
            ee = N(vV($m({
                label: Ib.label,
                content: bn('<div class="' + P(Ib.prefix) + '-rtc" id="' + P(Ud) + 'rtc"></div>'),
                kg: "rtc"
            }, Ib))),
            gc;
        if (lb(this.o.Je().b, "@calendar.google.com")) gc = null;
        else {
            var Kf = this.hb(""),
                Ni = this.o.Je(),
                Lf;
            if (this.o.Fb() || bQ(this.o)) {
                var Mf;
                Mf = EV(this) && !this.o.Fb() ? N('<option id="' + P(Kf) + 'changeowner" value="' + P(Kf) + 'changeowner">' + O("Change Owner...") + "</option>") : "";
                var Sc = {
                        id: Kf,
                        xx: Mf,
                        prefix: "ep-dp",
                        kg: "calendar"
                    },
                    qp = Sc.prefix,
                    cD = Sc.id,
                    z8 = Sc.xx,
                    $U = Sc.kg;
                Lf = N(vV($m({
                    label: "Calendar",
                    content: bn('<div class="' + P(qp) + '-calendar" id="' + P(cD) + 'calendarcontainer"><select class="' + P(qp) + '-calendar-sel" id="' + P(cD) + P($U) + '">' + O(z8) + "</select></div>"),
                    wx: !0
                }, Sc)))
            } else {
                var dD = {
                        id: Kf,
                        G6: cQa(this, Ni),
                        prefix: "ep-dp"
                    },
                    A8 = dD.id,
                    aV = dD.G6;
                Lf = N(vV($m({
                    label: "Calendar",
                    content: bn('<div class="' + P(dD.prefix) + '-calendar" id="' + P(A8) + 'calendarcontainer">' + O(aV) + "</div>"),
                    kg: "calendarcontainer",
                    wx: !0
                }, dD)))
            }
            gc = Lf
        }
        var oL;
        var pL = this.o.H,
            bV = pL.ua,
            cV = pL.Ba,
            eD = this.o.Db,
            yw = eD && eD.getUrl(),
            dV = eD && eD.getTitle();
        if (bV || yw) {
            var fD, zw, rp;
            if (yw) {
                var Aw;
                var Bw = aQa.exec(yw);
                if (Bw) {
                    var B8 = hh(this.H).U || 0;
                    Aw = Bw[1] + "/u/" + B8 + Bw[3]
                } else Aw = null;
                zw = Aw || yw;
                fD = dV;
                rp = !!Aw
            } else {
                var gD = bV || "";
                zw = "//mail.google.com/mail/u/" + (hh(this.H).U || 0) + "/?#all/" + encodeURIComponent(gD);
                fD = cV;
                rp = !0
            }
            var sp = {
                    prefix: "ep-dp",
                    id: b,
                    icon: rp ? "email-icon" : "link-icon",
                    title: rp ? "This event was created from an email." : "This event was created from a web page.",
                    hV: zw,
                    gV: fD || (rp ? "Open invitation email" :
                        "Open URL")
                },
                Cw = sp.prefix,
                ml = sp.id,
                C8 = sp.icon,
                D8 = sp.title,
                E8 = sp.hV,
                eV = sp.gV;
            oL = N(vV($m({
                label: "Source",
                content: bn('<div class="' + P(Cw) + "-" + P(C8) + ' goog-inline-block" title="' + P(D8) + '"></div><a class="' + P(Cw) + '-opt-event-source" id="' + P(ml) + 'eventsource" href="' + P(nn(E8)) + '" target="_blank">' + O(eV) + "</a>"),
                kg: "eventsource"
            }, sp)))
        } else {
            var F8 = this.hb(""),
                hD = this.o.Fi(),
                G8 = this.o.Je(),
                iD;
            if (hD.getEmail() != G8.getEmail()) {
                var jD = {
                        id: F8,
                        content: cQa(this, hD),
                        prefix: "ep-dp"
                    },
                    fV = jD.id,
                    H8 = jD.content;
                iD = N(vV($m({
                    label: "Created by",
                    content: bn('<div class="' + P(jD.prefix) + '-createdby" id="' + P(fV) + 'createdby">' + O(H8) + "</div>"),
                    kg: "createdby"
                }, jD)))
            } else iD = null;
            oL = iD
        }
        var qL;
        if (this.xp) {
            var kD = {
                    id: b,
                    prefix: "ep-dp",
                    kg: "descript"
                },
                I8 = kD.id,
                rL = kD.kg;
            qL = N(vV($m({
                label: "Description",
                content: bn('<div class="' + P(kD.prefix) + '-descript" id="' + P(I8) + P(rL) + '"></div>')
            }, kD)))
        } else qL = "";
        var J8 = qL,
            sL;
        if (A) {
            var lD = {
                    id: b,
                    prefix: "ep-dp"
                },
                gV = lD.id;
            sL = N(vV($m({
                label: "Attachment",
                content: bn('<div class="' + P(lD.prefix) + '-opt-attachments" id="' + P(gV) +
                    'attachments"></div>'),
                kg: "attachments"
            }, lD)))
        } else sL = "";
        var hV = sL,
            K8 = A ? "" : N('<div id="' + P(b) + 'attachments"></div>'),
            Dw = l || m ? LPa(e) : "",
            ns;
        if (l) {
            var iV = {
                id: b,
                prefix: "ep-dp"
            };
            ns = N(vV($m({
                label: "Event color",
                content: bn('<div id="' + P(iV.id) + 'eventColors"></div>'),
                kg: "eventColors"
            }, iV)))
        } else ns = "";
        var jV = ns,
            mD;
        if (m) {
            var tL = {
                    id: b,
                    prefix: "ep-dp"
                },
                nD = tL.id;
            mD = N(vV($m({
                label: "Notifications",
                content: bn('<div class="' + P(tL.prefix) + '-opt-reminders" id="' + P(nD) + 'reminders"></div>'),
                kg: "reminders"
            }, tL)))
        } else mD =
            "";
        var os = mD,
            kV = g.Oa ? q : "",
            tp = g.V ? z : "",
            uL;
        if (g.V) {
            var vL = "",
                lV = "By default this event will follow the " + ('<span id="' + P(b) + 'privacySharingLink" class=lk>sharing settings</span> of this calendar: event details will be visible to anyone who can see details of other events in this calendar.'),
                vL = vL + ('<div><span id="' + P(b) + 'privacyHelpPublic">' + O("Making this event public will expose all event details to anyone who has access to this calendar, even if they can't see details of other events.") + '</span><span id="' +
                    P(b) + 'privacyHelpDefault">' + lV + '</span><span id="' + P(b) + 'privacyHelpPrivate">' + O('Making this event private will hide all event details from anyone who has access to this calendar, unless they have "Make changes to events" level of access or higher.') + '</span><span id="' + P(b) + 'privacyHelpSecret">This event will only be visible to you, irrespective of your calendar sharing settings.</span>&nbsp;&nbsp;<a href="' + P(nn(V)) + '" class="lk" target="_blank">' + O("Learn more") + '</a><span id="' + P(b) + 'privacyHelpSecretDisabledResources"><br /><br />' +
                    O("You cannot make this event visible to only you because you booked a room or another resource.") + "</span></div>");
            uL = N(vL)
        } else uL = "";
        var L8 = uL,
            mV = this.Sa ? N('<div><span id="' + P(b) + 'publish" class=lk-button>' + O("Publish event") + "</span></div>") : "",
            Ew;
        if (this.o.Ra) Ew = "";
        else {
            var oD = this.hb(""),
                Fw = this.o,
                wL;
            if (Fw.jm) {
                var pD = "",
                    M8 = "You made changes in the past that are not visible to other guests. " + ('<span id="' + P(oD) + 'overriden" class=lk-button>Restore original event details.</span>'),
                    pD = pD + ('<div class="' +
                        P("ep-dp") + '-overriden">' + M8 + "</div>");
                wL = N(pD)
            } else {
                var qD;
                if (Fw.Jf() && EN(Fw) && 3 == Fw.V && !Ya(Fw.o.ta).length) {
                    var xL = "",
                        N8 = "This event has been changed from the series. " + ('<span id="' + P(oD) + 'specialized" class=lk-button>Undo changes.</span>'),
                        xL = xL + ('<div class="' + P("ep-dp") + '-overriden">' + N8 + "</div>");
                    qD = N(xL)
                } else qD = null;
                wL = qD
            }
            Ew = wL
        }
        bF(ha, c, KPa, {
            id: b,
            prefix: "ep-dp",
            Z3: Pb,
            T7: ee,
            jS: gc,
            JT: oL,
            hU: J8,
            xR: hV,
            yR: K8,
            u7: Dw,
            cV: jV,
            w7: os,
            gT: kV,
            d7: tp,
            c7: L8,
            g7: mV,
            D6: Ew
        });
        this.Ea = c
    };
    var GV = function(a, b, c) {
        if (b = a.Za(b)) xv(T(a), b, HB, c), b.tabIndex = 0;
        return b
    };
    h = FV.prototype;
    h.Bc = function() {
        return !1
    };
    h.Ma = function() {
        FV.qa.Ma.call(this);
        var a = EV(this),
            b = T(this);
        if (!this.R.kb && !this.o.Ra) {
            this.R.render(this.Za("guests"));
            var c = this.R.Ba,
                d = hh(this.H).R.ua;
            if (c && d && (MP(this.Na, UO.qw), Zj(this.H).isEnabled(28) && !this.U && this.R && this.R.H && !this.R.H.o)) a: {
                this.U = new IU(this.H, this.R.Ba.ha(), this),
                this.Ua(this.U),
                c = this.U;
                if (zGa(c.H, 14)) JU(c, !1);
                else {
                    if (Dj(c.H, 14, !1)) break a;
                    JU(c, !0);
                    c.ab.nb("find_a_time_promo_view_limit")
                }
                c.ab.nb("find_a_time_promo_shown");c.render()
            }
        }
        bQ(this.o) && (this.bl.kb || (c = this.Za("calendar"),
            $x(this.bl, c)), a && b.ka(this.bl, "change", this.Ra));
        this.Za("reminders") && HV(this, this.ma, "reminders");
        HV(this, this.Wq, "location");
        HV(this, this.xp, "descript");
        HV(this, this.S, "eventColors");
        HV(this, this.ta, "attachments");
        if (!this.qr && (c = F(this.hb("rtc-row")), H(c, !1), (c = this.o.U) && !c.mt())) {
            var e = null;
            this.o.Fb() || (e = Wu(K(this.H, pj), this.o.getId()));
            var c = this.Fa + "rtc-label",
                f = this.o.V;
            Zj(this.H).isEnabled(63) && (f = this.o.Od ? f : 1);
            a: {
                var d = this.H,
                    g = this.o,
                    k = g.U;
                if (k.Pc()) {
                    var l = Zj(d).isEnabled(63),
                        f = f ||
                        2;
                    2 == f && 3 == k.xc() && (f = 1);
                    if (3 == f) k = new S;
                    else {
                        if (l) k = sNa(e, g);
                        else b: {
                            var k = g.U,
                                m = k.getUrl(e, g);
                            if (null == m) k = null;
                            else {
                                var q = 3 == k.xc(),
                                    u = M();
                                if (q && (u = OIa(u, e, g))) {
                                    k = u;
                                    break b
                                }
                                k = Tu(new cs, PIa, {
                                    link: m,
                                    tk: q,
                                    yk: mL(k)
                                })
                            }
                        }
                        if (!k) {
                            c = null;
                            break a
                        }
                        k = new pT(k)
                    }
                    1 == f ? c = new wT(k, f) : (c = l ? new cT(d, e, g, c) : new FQ(d, e, g), c = new wT(k, f, c))
                } else c = 3 == k.xc(),
                c = N(c ? '<span class="rtc-hangout-icon-disabled goog-inline-block"></span><em>' + O("Google+ video calls aren't enabled for your organization") + "</em>" : "<em>" + O("This event uses a restricted video call service.") +
                    "</em>"),
                c = new wT(new pT(c), 1)
            }
            if (this.qr = c) this.Ua(this.qr), this.kb && (HV(this, this.qr, "rtc"), (c = F(this.hb("rtc-row"))) && H(c, !0))
        }
        a && (HNa(this.Wq, this.hb("location-label")), HNa(this.xp, this.hb("descript-label")), bQ(this.o) && ar(this.bl.ha(), "labelledby", this.hb("calendar-label")));
        this.us = GV(this, "conflictResolutionModeAvailable", this.ua);
        this.ys = GV(this, "conflictResolutionModeBusy", this.ua);
        this.xs = GV(this, "conflictResolutionModeBlocking", this.ua);
        this.Mx = GV(this, "privacyDefault", this.V);
        this.AA =
            GV(this, "privacyPublic", this.V);
        this.zA = GV(this, "privacyPrivate", this.V);
        this.ur = GV(this, "privacySecret", this.V);
        a = this.Za("privacySecret");
        c = dQa(this);
        a && H(a, c);
        a = this.Za("privacySecret-wrapper");
        c = dQa(this);
        a && H(a, c);
        this.OE = this.Za("privacyHelpDefault");
        this.YK = this.Za("privacyHelpPublic");
        this.WK = this.Za("privacyHelpPrivate");
        this.sL = this.Za("privacyHelpSecret");
        this.rL = this.Za("privacyHelpSecretDisabledResources");
        GV(this, "publish", this.x1);
        GV(this, "overriden", this.e1);
        GV(this, "specialized",
            this.b2);
        a = this.o.T.b.get();
        (a = bm.va().get(a)) && 70 <= a.Pd && GV(this, "privacySharingLink", this.U1);
        b.ka(this.o.H, "change", this.qM);
        b.ka(this.o.R, "change", this.A0);
        (a = this.Za("maplink")) && H(a, !!this.o.kd);
        b.ka(CN(this.o), "change", this.SF);
        this.SF();
        this.qM()
    };
    h.Jb = function() {
        y(this.dK);
        this.dK = null;
        FV.qa.Jb.call(this)
    };
    h.qM = function() {
        var a = this.o.H,
            b = a.o.get(),
            a = a.b.get(),
            c = 4 == a;
        if (this.us) {
            this.us.checked = 1 == b;
            this.ys.checked = 0 == b;
            this.xs.checked = 2 == b;
            this.us.disabled = c;
            this.ys.disabled = c;
            this.xs.disabled = c;
            var d = this;
            C(["conflictResolutionModeAvailable-wrapper", "conflictResolutionModeBusy-wrapper", "conflictResolutionModeBlocking-wrapper"], function(a) {
                (a = d.Za(a)) && (c ? Fc(a, "ep-dp-grey") : Gc(a, "ep-dp-grey"))
            })
        }
        this.Mx && (this.Mx.checked = 1 == a, this.AA.checked = 2 == a, this.zA.checked = 3 == a, this.ur.checked = 4 == a, eQa(this),
            fQa(this, a))
    };
    h.A0 = function() {
        eQa(this)
    };
    var eQa = function(a) {
            if (a.ur) {
                a.ur.disabled = !YHa(a.o) || !$b(a.o.R.b.S());
                var b = !$b(a.o.R.b.S()) && dQa(a);
                H(a.rL, b)
            }
        },
        dQa = function(a) {
            var b = 4 == a.o.H.b.get(),
                c = a.o.Ra;
            return (b || c) && YHa(a.o)
        };
    FV.prototype.La = function() {
        this.ya(new tV("Bb"))
    };
    FV.prototype.Ra = function() {
        var a = this.bl.U;
        a && "changeowner" == iG(this, a.get()) && JS(this.o, p(this.La, this))
    };
    FV.prototype.ua = function() {
        var a = 1;
        this.ys.checked ? a = 0 : this.xs.checked && (a = 2);
        this.o.H.o.set(a)
    };
    FV.prototype.V = function() {
        var a = 1;
        this.AA.checked ? a = 2 : this.zA.checked ? a = 3 : this.ur.checked && (a = 4);
        fQa(this, a);
        this.o.H.b.set(a)
    };
    var fQa = function(a, b) {
        H(a.OE, 1 == b);
        H(a.sL, 4 == b);
        H(a.WK, 3 == b);
        H(a.YK, 2 == b)
    };
    h = FV.prototype;
    h.U1 = function() {
        gH(this.o.T.b.get(), 1)
    };
    h.x1 = function() {
        this.ya("Lb")
    };
    h.e1 = function() {
        this.ya("Jb")
    };
    h.b2 = function() {
        this.ya("Ib")
    };
    h.SF = function() {
        var a = this.Za("conflictResolutionModeBlocking");
        if (a) {
            var b = this.Za("conflictResolutionModeBlocking-wrapper"),
                c = this.o.T.H,
                c = this.o.H.ma && 100 == c.zc();
            H(a, c);
            H(b, c)
        }
    };
    var EV = function(a) {
            a = a.o.V;
            return 3 == a || 2 == a
        },
        $Pa = function(a) {
            var b = EV(a),
                c = a.o.T;
            if (!c.xg()) {
                var d = hh(a.H).T,
                    e = a.o.T.b.get();
                a.bl = new CT(d, c.b, function(a) {
                    return e == a.getId() || b && a.qc() && !a.hidden
                });
                a.Ua(a.bl)
            }
        },
        cQa = function(a, b) {
            return b ? Zj(a.H).isEnabled(80) ? Tu(a.Ba, LDa, {
                email: b.getEmail() || null,
                ln: In(b),
                name: In(b),
                rv: In(b) == b.getEmail(),
                pD: !1,
                qD: !1,
                J4: !0
            }) : In(b) : ""
        },
        HV = function(a, b, c) {
            b && !b.kb && b.render(a.Za(c))
        },
        bQa = function(a, b, c, d, e, f, g) {
            a = a.hb("");
            b = "<tr><th class=" + hn("ep-dp") + '-dt-th><label id="' +
                P(a) + P(c) + '-label">' + O(b) + "</label></th><td class=" + hn("ep-dp") + '-dt-td><form autocomplete="off" id="' + P(a) + P(c) + '">';
            for (var k = e.length, l = 0; l < k; l++) {
                var m = e[l],
                    q = a + c + d[l],
                    u = f[l];
                b += '<input id="' + P(q) + '" class="' + P("ep-dp") + '-radio" name="' + P(c) + '" type="radio" value="' + P(u) + '" aria-labelledby="' + P(a) + P(c) + "-label " + P(q) + '-wrapper"' + (null != g && u == g ? ' checked="checked"' : "") + '><label class="' + P("ep-dp") + '-radio" id="' + P(q) + '-wrapper" for="' + P(q) + '">' + O(m) + "</label>"
            }
            return N(b + "</form></td></tr>")
        };
    var gR = function(a) {
        J.call(this);
        this.Da = new I(this);
        this.Da.ka(a, "shortcut", this.b)
    };
    v(gR, J);
    gR.prototype.wa = function() {
        gR.qa.wa.call(this);
        y(this.Da)
    };
    gR.prototype.b = function(a) {
        a = parseInt(a.o, 10);
        switch (a) {
            case 39:
                this.ya("ep-ksh-back");
                break;
            case 40:
                this.ya("ep-ksh-delete");
                break;
            case 41:
                this.ya("ep-ksh-discard");
                break;
            case 42:
                this.ya("ep-ksh-save");
                break;
            default:
                return
        }
        tk("ef_shortcut " + a)
    };
    var gQa = function(a) {
        Vb(a.o(), function(a) {
            return a.sf()
        }) && tk("ef_new_event_oa")
    };
    var IV = function(a, b, c, d, e, f, g, k, l, m, q) {
        this.b = b || [];
        this.kf = c || 0;
        this.H = d || {};
        this.Ca = e || [];
        this.o = a || [];
        this.ma = f || [];
        this.V = g || [];
        this.S = k || {};
        this.T = l || {};
        this.R = m || null;
        this.U = q || []
    };
    var JV = function() {
        J.call(this)
    };
    v(JV, yQ);
    var eR = function(a) {
        this.H = jh(a).yd();
        this.o = bj(a)
    };
    eR.prototype.b = function(a, b) {
        return new KV(this, a, b)
    };
    var KV = function(a, b, c) {
        J.call(this);
        this.H = a;
        this.S = b;
        this.o = c
    };
    v(KV, JV);
    KV.prototype.b = null;
    KV.prototype.start = function() {
        KV.qa.start.call(this);
        var a = this.S;
        if (a.length) {
            for (var b = [], c = [], d = 0; d < a.length; ++d) {
                0 < d && c.push("\n");
                var e = a[d];
                c.push(e.getEmail(), " ", e.b, " ", e.kf)
            }
            b.push("emf", c.join(""), "ctz", this.H.H, "hl", "en");
            this.o && b.push("eid", this.o);
            this.H.o.send("scheduler", b, 23, p(this.T, this), p(this.R, this))
        } else this.b = new IV, this.Sf()
    };
    KV.prototype.T = function(a) {
        if (a) {
            var b = r(hQa, lm.va()),
                c = [],
                d = {},
                e = [],
                f = [],
                g = [],
                k = [],
                l = {},
                m = {},
                q = {},
                u = [],
                w = a.schedule;
            a = Number(a.freshness);
            for (var z = 0; z < w.length; z++)
                for (var A = w[z], B = A.id, L = A.type, A = A.resolved, Z = [], V = 0; V < A.length; V++) {
                    var ha = A[V],
                        ka = ha.id,
                        ja = ka,
                        da = ha.status,
                        ra = ha.type,
                        ta = ha.self;
                    if ("GAIA_GROUP" != L || "PRIVATE_GROUP" == da || ta) B != ka && (l[B] = ka), ha.cid && (ja = ha.cid.toLowerCase(), m[ka] = ja);
                    "THROTTLED" == da ? k.push(ka) : "OK" != da && "SKIPPED" != da && g.push(ka);
                    "GAIA_GROUP" == ra && ("PRIVATE_GROUP" == da ||
                        "NO_ACCESS" == da ? e.push(ka) : "NO_QUOTA" == da ? u.push(ka) : B == ka || l[B] ? 1 != A.length || A[0].id != B && !A[0].self ? d[ka] = Z : f.push(ka) : d[ka] || (d[ka] = []));
                    da = ha.events;
                    Z.push(ka);
                    if (da)
                        for (da = da.added, ra = 0; ra < da.length; ra++) ta = b(da[ra]), ta.Nb = ja, c.push(ta);
                    (ha = ha.parentGroups) && (q[ka] = ha)
                }
            this.b = new IV(g, c, a, d, f, k, e, l, m, q, u)
        } else this.b = new IV;
        this.Sf()
    };
    KV.prototype.R = function() {
        this.Oj()
    };
    var hQa = function(a, b) {
        var c = b.eid,
            d = b.summary,
            e = ci(b.start),
            f = ci(b.end),
            g = b.location,
            k = b.creator,
            l = b.flags,
            m = l & 7,
            c = new vn(c, e, f, b.eventType, b.privProps);
        c.setTitle(d || "");
        c.Ke = g;
        c.Ne = k;
        c.Ci(m);
        c.Ce = !!(l & 1048576);
        void 0 != b.crm && (c.lg = b.crm);
        return c
    };
    KV.prototype.Dn = function() {
        return this.b
    };
    var jQa = function(a) {
            var b = 0,
                c = a.length,
                d = {
                    a: -1640531527,
                    Hg: -1640531527,
                    c: 314159265
                },
                e;
            for (e = c; 12 <= e; e -= 12, b += 12) d.a += LV(a, b), d.Hg += LV(a, b + 4), d.c += LV(a, b + 8), iQa(d);
            d.c += c;
            switch (e) {
                case 11:
                    d.c += a[b + 10] << 24;
                case 10:
                    d.c += (a[b + 9] & 255) << 16;
                case 9:
                    d.c += (a[b + 8] & 255) << 8;
                case 8:
                    d.Hg += LV(a, b + 4);
                    d.a += LV(a, b);
                    break;
                case 7:
                    d.Hg += (a[b + 6] & 255) << 16;
                case 6:
                    d.Hg += (a[b + 5] & 255) << 8;
                case 5:
                    d.Hg += a[b + 4] & 255;
                case 4:
                    d.a += LV(a, b);
                    break;
                case 3:
                    d.a += (a[b + 2] & 255) << 16;
                case 2:
                    d.a += (a[b + 1] & 255) << 8;
                case 1:
                    d.a += a[b + 0] & 255
            }
            return iQa(d)
        },
        iQa = function(a) {
            var b = a.a,
                c = a.Hg,
                d = a.c,
                b = b - c - d ^ d >>> 13,
                c = c - d - b ^ b << 8,
                d = d - b,
                d = d - c ^ c >>> 13,
                b = b - c,
                b = b - d,
                b = b ^ d >>> 12,
                c = c - d - b ^ b << 16,
                d = d - b,
                d = d - c ^ c >>> 5,
                b = b - c,
                b = b - d,
                b = b ^ d >>> 3,
                c = c - d - b ^ b << 10,
                d = d - b,
                d = d - c ^ c >>> 15;
            a.a = b;
            a.Hg = c;
            return a.c = d
        },
        LV = function(a, b) {
            return MV(a[b + 0]) + (MV(a[b + 1]) << 8) + (MV(a[b + 2]) << 16) + (MV(a[b + 3]) << 24)
        },
        MV = function(a) {
            return 127 < a ? a - 256 : a
        };
    var NV = function(a, b, c, d) {
        J.call(this);
        this.T = a;
        this.R = b;
        this.S = c;
        this.H = d
    };
    v(NV, J);
    NV.prototype.b = void 0;
    NV.prototype.getId = function() {
        return this.T
    };
    NV.prototype.getUrl = function() {
        return this.S
    };
    var kQa = function(a) {
        a.o && (window.clearTimeout(a.o), a.o = 0)
    };
    NV.prototype.U = function() {
        this.o = 0;
        this.b = new IV(this.H);
        this.ya("Pb")
    };
    var lQa = function(a, b) {
        if (6 != b.length) throw Error("Hb");
        var c = ci(b[1]).tb(),
            d = ci(b[2]).tb(),
            e = b[0],
            f = b[3],
            g = b[4],
            k = parseInt(b[5], 10),
            k = k || -1,
            l = jQa(nF(a)) + c + d + jQa(nF(e + f + g)),
            c = new vn(String(l), c, d);
        c.setTitle(e);
        c.Ke = f;
        c.Ne = g;
        c.Ci(k);
        c.Nb = a;
        c.lg = 1 == k || 3 == k ? 0 : 1;
        return c
    };
    NV.prototype.wa = function() {
        kQa(this);
        se(this.R);
        delete this.R;
        NV.qa.wa.call(this)
    };
    var OV = function(a) {
        x.call(this);
        this.H = a
    };
    v(OV, x);
    OV.prototype.b = function(a) {
        for (var b = [], c = null, d = null, e = 0, f = 0; f < a.length; f++) {
            var g = a[f];
            b.push(g.getEmail());
            var k = g.b,
                c = c ? c.min(k.start) : k.start,
                d = d ? d.max(k.end) : k.end,
                e = e ? Math.min(e, g.kf) : g.kf
        }
        return new PV(this.H, b, c, d, e)
    };
    OV.prototype.wa = function() {
        OV.qa.wa.call(this);
        y(this.H)
    };
    var ZGa = function(a) {
            var b = MO;
            if (na(a) && 3 == a.length) {
                var c = a[0],
                    d = a[2];
                if (!(1 > c || 3 < c) && (a = b.H.b[parseInt(a[1], 10)]) && na(d) && "_ME_AddData" == d[0])
                    if (Ux(d[1]), d = d[3], kQa(a), !d || d.length % 4) a.b = new IV(a.H), a.ya("Nb");
                    else {
                        for (var b = [], c = gb(a.H), e = 0; e < d.length; e += 4) {
                            for (var f = d[e + 1].toLowerCase(), g = d[e + 3], k = 0; k < g.length; k++) {
                                var l = g[k];
                                try {
                                    b.push(lQa(f, l))
                                } catch (m) {}
                            }
                            delete c[f]
                        }
                        a.b = new IV(Za(c), b);
                        a.ya("Ob")
                    }
            }
        },
        PV = function(a, b, c, d, e) {
            J.call(this);
            this.H = a;
            this.T = b;
            this.V = c;
            this.U = d;
            this.S = e;
            this.o = []
        };
    v(PV, JV);
    PV.prototype.start = function() {
        PV.qa.start.call(this);
        if (this.T.length) {
            var a = this.H.U,
                b;
            for (b in a) {
                var c = mQa(this.T, b);
                if (c.length) {
                    var d = ++this.H.R,
                        e = a[b],
                        f;
                    f = e;
                    var g = "[1," + d + ",[" + c.join(",") + "]," + this.V.toString() + "/" + this.U.toString() + "," + av(this.S).toString() + "," + this.H.S + "]",
                        k;
                    "2" == this.H.T && (k = this.H.H);
                    var l = this.H.V,
                        m = k,
                        q = this.H.ma;
                    f = N('<form autocomplete=off id="' + P("gccform") + '" method=POST action="' + P(nn(f)) + '"><input name="text" value="' + P(g) + '">' + (m ? '<input name="' + P("dn") + '" value="' +
                        P(m) + '">' : "") + (q ? '<input name="' + P("urlpart") + '" value="' + P(q) + '">' : "") + '<input name="' + P("postbackUrl") + '" value="' + P(l) + '"></form>');
                    f = Aya(this.H.o, rm(f));
                    f.id = f.name = "gccif" + d;
                    c = new NV(d, f, e, c);
                    e = p(this.ma, this);
                    xG(c, "Nb", e);
                    xG(c, "Ob", e);
                    xG(c, "Pb", e);
                    this.H.b[d] = c;
                    this.o.push(d);
                    d = ye(c.R).getElementById("gccform");
                    c.o = window.setTimeout(p(c.U, c), 3E4);
                    d.submit()
                }
            }
        } else this.b = {}, this.R = {}, this.Sf()
    };
    PV.prototype.Dn = function() {
        return this.b ? new IV(Za(this.R), Ya(this.b)) : null
    };
    var mQa = function(a, b) {
        return Sb(a, function(a) {
            return tb(a, b)
        })
    };
    PV.prototype.ma = function(a) {
        var b = a.target;
        if ("Pb" == a.type) this.Hs();
        else {
            var c = b.b;
            this.b = this.b || {};
            a = c.b;
            for (var c = gb(c.o), d = 0; d < a.length; d++) {
                var e = a[d];
                this.b[e.getId()] = e
            }
            if (this.R)
                for (var f in this.R) f in c || delete this.R[f];
            else this.R = c;
            b = b.getId();
            f = this.H;
            y(f.b[b]);
            delete f.b[b];
            cc(this.o, b);
            this.o.length || (b = !bb(this.b), bb(this.Ca) || b ? this.Sf() : this.Oj())
        }
    };
    PV.prototype.wa = function() {
        PV.qa.wa.call(this);
        for (var a = 0; a < this.o.length; a++) {
            var b = this.H,
                c = this.o[a];
            y(b.b[c]);
            delete b.b[c]
        }
        this.b = {};
        this.Ca = {}
    };
    var QV = function(a, b, c, d, e, f) {
        x.call(this);
        this.U = a;
        this.T = b || "1";
        this.V = c;
        this.H = e;
        this.ma = d;
        this.o = f;
        this.R = 0;
        this.b = {}
    };
    v(QV, x);
    QV.prototype.wa = function() {
        QV.qa.wa.call(this);
        for (var a in this.b) y(this.b[a]);
        delete this.b;
        delete this.o
    };
    var nQa = function(a) {
        this.H = jh(a).yd();
        this.o = bj(a)
    };
    nQa.prototype.b = function(a) {
        for (var b = [], c = null, d = null, e = 0; e < a.length; e++) {
            var f = a[e];
            b.push(f.getEmail());
            f = f.b;
            c = c ? c.min(f.start) : f.start;
            d = d ? d.max(f.end) : f.end
        }
        return new RV(this.o, this.H, b, c, d)
    };
    var RV = function(a, b, c, d, e) {
        J.call(this);
        this.T = b;
        this.H = a;
        this.b = c;
        this.R = d;
        this.o = e
    };
    v(RV, JV);
    h = RV.prototype;
    h.ty = null;
    h.start = function() {
        RV.qa.start.call(this);
        this.b.length ? this.H.send("gccuseravail", ["stim", bx(this.R, new Mh(0, 0, 0)).toString(), "etim", bx(this.o, new Mh(0, 0, 0)).toString(), "email", this.b.join(","), "ctz", this.T, "hl", "en"], 33, p(this.UW, this), p(this.SW, this)) : (this.ty = new IV, this.Sf())
    };
    h.Dn = function() {
        return this.ty
    };
    h.UW = function(a) {
        if (a) {
            for (var b = new Le(this.b), c = 0; c < a.length; c++) b.remove(a[c].user);
            for (var b = b.jc(), c = [], d = 0; d < a.length; d++)
                for (var e = a[d], f = e.user, f = f.toLowerCase(), e = e.det, g = 0; g < e.length; g++) {
                    var k = e[g];
                    c.push(oQa(f, k.start, k.end, k.stat, k.loc || "", k.subj || ""))
                }
            a = new IV(b, c)
        } else a = new IV;
        this.ty = a;
        this.Sf()
    };
    h.SW = function() {
        this.Oj()
    };
    var oQa = function(a, b, c, d, e, f) {
        var g = jQa(nF(xb(a, b, c, e, f)));
        b = ci(b);
        c = ci(c);
        g = new vn(String(g), b, c);
        g.Ci(d);
        g.Ke = e;
        g.setTitle(f);
        g.Nb = a;
        g.lg = 1 == d || 3 == d ? 0 : 1;
        return g
    };
    var fR = function(a) {
        x.call(this);
        this.ab = K(a, oj);
        this.H = new eR(a);
        var b = qw(a);
        if (b.U) this.o = new nQa(a);
        else {
            var c = F("gccFrame"),
                b = new QV(b.T || {}, "1" == qw(a).La ? "1" : "2", Gm() + "/mailslot", null != Sv() ? "b/" + Sv() : null, b.getName(), c);
            a = jh(a).yd();
            b.S = a;
            this.o = new OV(b)
        }
    };
    v(fR, x);
    fR.prototype.b = function(a, b) {
        return new SV(this, a, b)
    };
    fR.prototype.wa = function() {
        y(this.H);
        y(this.o)
    };
    var SV = function(a, b, c) {
        J.call(this);
        this.T = a;
        this.R = this.T.H.b(b, c);
        this.H = this.T.o.b(b, c);
        this.Da = new I(this);
        this.o = 1;
        this.b = this.S = 0
    };
    v(SV, JV);
    h = SV.prototype;
    h.Pk = null;
    h.ek = null;
    h.ak = null;
    h.hm = function() {
        return 2 == this.o
    };
    h.start = function() {
        SV.qa.start.call(this);
        bv(this.Da, this.R, "Z", this.aG, void 0);
        bv(this.Da, this.R, "$", this.$F, void 0);
        this.R.start();
        this.hm() && (bv(this.Da, this.H, "Z", this.s0, void 0), bv(this.Da, this.H, "$", this.r0, void 0), bv(this.Da, this.H, "aa", this.t0, void 0), this.H.start())
    };
    h.aG = function(a) {
        a.target == this.R ? this.Pk = this.R.Dn() : a.target == this.H && (this.ek = this.H.Dn());
        this.S++;
        this.S + this.b == this.o && this.Sf()
    };
    h.s0 = function(a) {
        this.aG(a);
        if (!this.ek) throw Error("Ib");
        a = this.ek;
        for (var b = {}, c = 0; c < a.b.length; c++) b[a.b[c].rb()] = !0;
        this.T.ab.wf("find_a_time_interop_data_received", Xa(b))
    };
    h.$F = function() {
        this.b++;
        this.b == this.o ? this.Oj() : this.S + this.b == this.o && this.Sf()
    };
    h.r0 = function() {
        this.$F();
        this.T.ab.nb("find_a_time_interop_request_failed")
    };
    h.t0 = function() {
        this.b++;
        this.b == this.o ? this.Oj() : this.S + this.b == this.o && this.Hs();
        this.T.ab.nb("find_a_time_interop_request_timeout")
    };
    h.Dn = function() {
        if (this.S + this.b != this.o || null == this.Pk && null == this.ek) return null;
        if (this.ak) return this.ak;
        if (this.hm() && this.Pk && this.ek) {
            var a = this.Pk.b,
                b = gb(this.Pk.o);
            C(this.ek.b, function(c) {
                c.rb() in b && a.push(c)
            });
            var c = [];
            C(this.ek.o, function(a) {
                a.toLowerCase() in b && c.push(a)
            });
            this.ak = this.Pk;
            this.ak.o = c;
            this.ak.b = a
        } else {
            var d = this.Pk ? this.Pk : this.ek;
            this.hm() ? c = d.o : c = [];
            this.ak = d;
            this.ak.o = c
        }
        return this.ak
    };
    h.wa = function() {
        y(this.Da);
        y(this.R);
        y(this.H);
        SV.qa.wa.call(this)
    };
    h.Sf = function() {
        Tf(this.Da);
        SV.qa.Sf.call(this)
    };
    h.Oj = function() {
        Tf(this.Da);
        SV.qa.Oj.call(this)
    };
    h.Hs = function() {
        Tf(this.Da);
        SV.qa.Hs.call(this)
    };
    var pQa = function(a) {
        this.kr = a
    };
    var qQa = function(a, b, c, d, e, f) {
        this.H = a;
        this.b = b;
        this.o = c;
        this.Im = d;
        this.R = e || null;
        this.T = f || null
    };
    qQa.prototype.yh = function() {
        return this.b
    };
    var TV = function(a) {
        this.b = a
    };
    TV.prototype.toString = function() {
        return this.b
    };
    var rQa = new TV("visibility"),
        sQa = new TV("selection"),
        tQa = new TV("value"),
        uQa = new TV("enabled"),
        vQa = new TV("change");
    var wQa = function(a) {
        return null != a && (!pa(a) || !mb(JF(a))) && (!na(a) || !$b(a)) && (!ua(a) || !bb(a))
    };
    var xQa = function(a) {
        this.b = a
    };
    var UV = function(a, b) {
        x.call(this);
        this.o = a;
        this.T = b;
        this.b = [];
        this.R = p(this.S, this);
        window.addEventListener("message", this.R, !1);
        this.H = new Rd
    };
    v(UV, x);
    UV.prototype.S = function(a) {
        if (a.origin == this.T) {
            try {
                var b = Pa(a.data)
            } catch (d) {
                return
            }
            var c = b.args;
            if (b = this.H.get(b.type)) this.o = a.source, this.b && (C(this.b, function(a) {
                this.sendMessage(a.messageType, a.t6)
            }, this), this.b = []), b.call(null, c)
        }
    };
    var VV = function(a, b, c, d) {
        a.H.set(b, p(c, d))
    };
    UV.prototype.sendMessage = function(a, b) {
        if (this.o) {
            var c = {};
            c.type = a;
            b && (c.args = b);
            this.o.postMessage(Sa(c), this.T)
        } else this.b.push({
            messageType: a,
            t6: b
        })
    };
    UV.prototype.wa = function() {
        window.removeEventListener("message", this.R, !1)
    };
    var WV = function(a, b, c, d, e, f) {
            this.H = a;
            this.o = String(b);
            this.ma = c || "user";
            this.U = !!d;
            this.T = mb(JF(e)) ? null : yQa(e);
            this.V = !!f
        },
        zQa = new Rd,
        yQa = Ia;
    WV.prototype.getName = function() {
        return this.H
    };
    WV.prototype.getId = function() {
        return this.o
    };
    WV.prototype.clone = function(a) {
        var b = this.b();
        a && eb(b, a);
        a = b.scopeType;
        return Vd(zQa, a) ? zQa.get(a).call(void 0, b) : new WV(b.name, b.id, b.scopeType, b.me, b.iconUrl, b.requiresKey)
    };
    WV.prototype.b = function() {
        var a = {};
        a.iconUrl = this.T;
        a.scopeType = this.ma;
        a.name = this.H;
        a.id = this.o;
        a.me = this.U;
        a.requiresKey = this.V;
        return Va(a, wQa)
    };
    var XV = function(a) {
        x.call(this);
        this.H = [];
        this.R = 0;
        this.b = [];
        this.o = {};
        this.S = !!a
    };
    v(XV, x);
    XV.prototype.Nm = function(a) {
        var b = this.b[a];
        if (b) {
            var c = this.o[b];
            0 != this.R ? (this.H.push(a), this.b[a + 1] = ia) : (c && cc(c, a), delete this.b[a], delete this.b[a + 1], delete this.b[a + 2])
        }
        return !!b
    };
    XV.prototype.T = function(a, b) {
        var c = this.o[a];
        if (c) {
            for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
            if (this.S)
                for (e = 0; e < c.length; e++) {
                    var g = c[e];
                    AQa(this.b[g + 1], this.b[g + 2], d)
                } else {
                    this.R++;
                    try {
                        for (e = 0, f = c.length; e < f; e++) g = c[e], this.b[g + 1].apply(this.b[g + 2], d)
                    } finally {
                        if (this.R--, 0 < this.H.length && 0 == this.R)
                            for (; c = this.H.pop();) this.Nm(c)
                    }
                }
        }
    };
    var AQa = function(a, b, c) {
        Ld(function() {
            a.apply(b, c)
        })
    };
    XV.prototype.clear = function(a) {
        if (a) {
            var b = this.o[a];
            b && (C(b, this.Nm, this), delete this.o[a])
        } else this.b.length = 0, this.o = {}
    };
    XV.prototype.ac = function(a) {
        if (a) {
            var b = this.o[a];
            return b ? b.length : 0
        }
        a = 0;
        for (b in this.o) a += this.ac(b);
        return a
    };
    XV.prototype.wa = function() {
        XV.qa.wa.call(this);
        this.clear();
        this.H.length = 0
    };
    var YV = function(a, b, c, d, e, f, g) {
        WV.call(this, a, b, "user", d, e, g);
        this.R = c || null;
        this.S = f || null
    };
    v(YV, WV);
    YV.prototype.getEmail = function() {
        return this.R
    };
    YV.prototype.b = function() {
        var a = YV.qa.b.call(this);
        a.email = this.R;
        a.invitedEmail = this.S;
        return Va(a, wQa)
    };
    var BQa = function(a) {
        return new YV(a.name, a.id, a.email, a.me, a.iconUrl, a.invitedEmail, a.requiresKey)
    };
    zQa.set("user", BQa);
    var ZV = function(a) {
        x.call(this);
        this.b = new XV(a);
        this.Hb(this.b)
    };
    v(ZV, x);
    ZV.prototype.Nm = function(a) {
        return this.b.Nm(a)
    };
    ZV.prototype.clear = function(a) {
        this.b.clear(n(a) ? a.toString() : void 0)
    };
    ZV.prototype.ac = function(a) {
        return this.b.ac(n(a) ? a.toString() : void 0)
    };
    var $V = function(a, b) {
        x.call(this);
        this.T = a;
        this.H = {};
        this.b = b ? db(b) : {};
        this.S = db(this.b);
        CQa(this);
        this.R = new XV;
        this.o = new ZV
    };
    v($V, x);
    var CQa = function(a) {
        n(a.b["keys-enabled"]) || (a.b["keys-enabled"] = !0);
        a.isEnabled() || (a.H["default"] = !0)
    };
    h = $V.prototype;
    h.wa = function() {
        $V.qa.wa.call(this);
        this.R.Pa();
        this.o.Pa();
        delete this.R;
        delete this.o;
        delete this.b
    };
    h.getId = function() {
        return this.T
    };
    h.isEnabled = function() {
        return !!this.b.enabled
    };
    h.Ab = function(a, b) {
        var c = b || "default",
            d = !0;
        if (a) {
            delete this.H[c];
            for (var e in this.H) {
                d = !1;
                break
            }
        } else this.H[c] = !0, d = !1;
        this.setProperty("enabled", d)
    };
    h.qb = function() {
        return !!this.b.visible
    };
    h.setVisible = function(a) {
        this.setProperty("visible", a)
    };
    h.oj = function() {
        return !!this.b.selected
    };
    h.Ik = function(a) {
        this.setProperty("selected", a)
    };
    h.rg = function() {
        return this.b.label || ""
    };
    h.nc = function() {
        return this.b.keys
    };
    h.lb = function() {
        return this.b.value
    };
    h.Kb = function(a) {
        this.setProperty("value", a)
    };
    h.setProperty = function(a, b) {
        if (b !== this.b[a]) {
            this.b[a] = b;
            this.o.b.T(vQa.toString(), new pQa(a));
            var c = DQa(a);
            c && this.o.b.T(c.toString(), new pQa(a))
        }
    };
    h.Nm = function(a) {
        return 1E6 < a ? this.o.Nm(a - 1E6) : this.R.Nm(a)
    };
    h.reset = function() {
        this.R.clear();
        this.o.clear();
        this.b = db(this.S);
        this.H = {};
        CQa(this)
    };
    var DQa = function(a) {
        switch (a) {
            case "visible":
                return rQa;
            case "selected":
                return sQa;
            case "value":
                return tQa;
            case "enabled":
                return uQa;
            default:
                return null
        }
    };
    var EQa = function(a) {
        x.call(this);
        this.H = a.userRole || 0;
        this.U = !!a.editorsCanInvite;
        this.o = !!a.sharingDisabled;
        this.ma = a.userScope || null;
        this.T = !!a.exportable;
        this.R = a.visibilitySetting || null;
        this.b = a.shareableUrl || null;
        this.S = !!a.requestShareEnabled;
        this.V = a.shareAppPath || null
    };
    v(EQa, x);
    var FQa = function() {
            this.H = aW("share-email-attachment", "Email as attachment...");
            this.R = aW("share-email-collaborators", "Email collaborators...");
            this.o = aW("share-share", "Share...");
            this.b = aW("share-current-user-request-access", "Request edit access...")
        },
        bW = null,
        aW = function(a, b) {
            var c = {};
            c.label = b;
            c.visible = !0;
            c.hint = b;
            return new $V(a, c)
        };
    var cW = function(a, b) {
        S.call(this, b);
        this.o = a
    };
    v(cW, S);
    cW.prototype.H = "info";
    cW.prototype.R = !1;
    var GQa = {
        info: "jfk-butterBar-info",
        error: "jfk-butterBar-error",
        warning: "jfk-butterBar-warning",
        promo: "jfk-butterBar-promo"
    };
    cW.prototype.qb = function() {
        var a = this.ha();
        return null != a && Ec(a, "jfk-butterBar-shown")
    };
    cW.prototype.setVisible = function(a) {
        Ic(this.ha(), "jfk-butterBar-shown", a)
    };
    cW.prototype.Xa = function() {
        this.Ea = this.b.b("DIV", "jfk-butterBar");
        var a = this.ha();
        a && (ar(a, "live", "assertive"), ar(a, "atomic", "true"));
        this.o = this.o;
        if (a = this.ha()) {
            var b = this.b;
            b.Ug(a);
            b.Tg(a, this.o)
        }
        this.R = this.R;
        (a = this.ha()) && Ic(a, "jfk-butterBar-mini", this.R);
        a = this.H;
        if (this.Nc()) {
            var b = this.ha(),
                c = GQa[a];
            Gc(b, GQa[this.H]);
            Fc(b, c)
        }
        this.H = a
    };
    var HQa = function(a, b) {
        this.S = a;
        this.T = b || ce();
        this.b = null;
        this.o = !1;
        this.R = 0
    };
    v(HQa, x);
    var JQa = function(a, b, c) {
        var d, e = b.H;
        switch (e) {
            case "copy":
                d = "share-butter-copy-icon";
                break;
            case "specificPeople":
                d = "share-butter-specific-people-icon";
                break;
            case "personLink":
                d = "share-butter-person-link-icon"
        }
        a.b && a.H();
        var f = a.T,
            g = f.b("SPAN");
        d && "none" != e && (d = f.b("SPAN", ["apps-share-sprite", "share-butter-icon", d]), f.Tg(g, d));
        d = f.b("SPAN", "share-butter-message", b.yh());
        f.Tg(g, d);
        if (d = b.R) d = f.b("A", {
                target: "_blank",
                href: d,
                "class": "share-butter-link",
                tabIndex: "0"
            }, "Learn more"), f.Tg(g, "\u00a0", "\u00a0"),
            f.Tg(g, d);
        var k = b.T;
        if (k) {
            var l = f.b("SPAN", {
                "class": "share-butter-link",
                tabIndex: "0"
            }, "Undo");
            l.onclick = function() {
                k();
                l.onclick = ia
            };
            f.Tg(g, "\u00a0", "\u00a0");
            f.Tg(g, l)
        }
        a.b = f.b("DIV", ["share-butterbar-container", "share-butterbar-top", "share-butterbar-zindex"]);
        g = new cW(g, f);
        g.render(a.b);
        ar(g.ha(), "live", "off");
        g.setVisible(!0);
        a.o = b.o;
        f.appendChild(a.o && c ? c : document.body, a.b);
        IQa(a, a.b, c);
        a.R = window.setTimeout(p(a.H, a), b.Im)
    };
    HQa.prototype.H = function() {
        this.b && (se(this.b), this.b = null, delete this.b, window.clearTimeout(this.R))
    };
    var IQa = function(a, b, c) {
        var d = parseInt(jf(b, "width"), 10);
        if (a.o && c) {
            var e = parseInt(jf(c, "left"), 10),
                f = parseInt(jf(c, "top"), 10);
            c = parseInt(jf(c, "width"), 10);
            var g = parseInt(jf(b, "height"), 10);
            tw(b, e + (c - d) / 2, a.S ? 0 : f + g / 2)
        } else b.style.left = "50%", b.style.marginLeft = -(d / 2) + "px"
    };
    var MQa = function(a, b) {
            var c = r(KQa, a, b);
            a.kb ? c() : E ? af(a, "show", c) : af(a, "beforeshow", c);
            var d = null;
            G(a, "show", function() {
                a.zp && (d = new LQa(a))
            });
            G(a, "hide", function() {
                y(d)
            })
        },
        KQa = function(a, b) {
            wF(a, .75);
            var c = a.o;
            c && b && (c = VE(c, b)) && Fc(c, "goog-buttonset-action");
            var c = aH(a.ha(), .13),
                d = jF(a.ha(), .13),
                e = gF(a.fk(), .13, "ease-out", 0, .75),
                f = gF(a.fk(), .13, "ease-in", .75, 0);
            a.U = c;
            a.S = d;
            a.ma = e;
            a.V = f
        },
        LQa = function(a) {
            rF.call(this, a.ha());
            this.o = a;
            G(this, "start", this.ua, !1, this)
        };
    v(LQa, rF);
    LQa.prototype.ua = function(a) {
        a = a.o;
        if (this.o.zp && Ec(a.target, this.o.Rn())) {
            var b = rf(this.o.ha()),
                b = new Od(0, b.width, b.height, 0),
                c = yf(this.o.ha()),
                d = -1 * c.top,
                e = -1 * c.right,
                f = -1 * c.bottom,
                c = -1 * c.left;
            ua(d) ? (b.top -= d.top, b.right += d.right, b.bottom += d.bottom, b.left -= d.left) : (b.top -= d, b.right += Number(e), b.bottom += Number(f), b.left -= Number(c));
            if (!b.contains(new qd(a.ta, a.ua))) return d = this.o.b.Qb(), a = ie(le(d)), b = rf(this.o.ha()), "fixed" == hx(this.o.ha()) ? (d = a.width - b.width, a = a.height - b.height) : (e = Math.max(d.body.scrollHeight, a.height), d = Math.max(d.body.scrollWidth, a.width) - b.width, a = e - b.height), sF(this, new cv(0, 0, Math.max(0, d), Math.max(0, a))), !0
        }
        return !1
    };
    var dW = function(a) {
        uF.call(this, void 0, !1, a);
        dG(this, !1);
        this.Fp = !0;
        zF(this, null);
        MQa(this, "")
    };
    v(dW, uF);
    dW.prototype.setVisible = function(a) {
        var b = this.ha(),
            c = this.b;
        Ic(b, "share-client-offscreen", !a);
        eG(this, a);
        a ? (this.Vb(), dW.qa.setVisible.call(this, !0)) : (b.style.right = "", b.style.left = "", b.style.top = "");
        for (var c = Fe(c, "iframe", null, this.Nc()), d = 0; d < c.length; d++) c[d].tabIndex = a ? "0" : "-1";
        b.tabIndex = a ? "0" : "-1";
        this.ug.tabIndex = a ? "0" : "-1";
        b.setAttribute("aria-hidden", !a);
        a || this.ya("Rb")
    };
    dW.prototype.Ma = function() {
        dW.qa.Ma.call(this);
        var a;
        vF(this);
        (a = this.af) && ar(a, "hidden", !0)
    };
    var NQa = function() {
        x.call(this)
    };
    v(NQa, x);
    NQa.prototype.ad = function(a, b, c) {
        c = new XJ(b, c);
        OQa(c, a, b);
        return c
    };
    var eW = function(a, b, c, d) {
            hy(a, function(a) {
                switch (a.Qe()) {
                    case "settings":
                        n(b) && a.Ab(b);
                        break;
                    case "email":
                        n(d) && a.Ab(d);
                        break;
                    case "emailAttach":
                        n(c) && a.Ab(c)
                }
            })
        },
        OQa = function(a, b, c, d) {
            c = PQa(c);
            b && c.push(new WJ);
            qa(d) ? Rb(c, function(b) {
                a.Yk(b, d, !0)
            }) : C(c, function(b) {
                a.Ua(b, !0)
            });
            b = a.ha();
            Ec(b, "goog-menu-noicon") && Gc(b, "goog-menu-noicon")
        },
        PQa = function(a) {
            var b = [],
                c = new NJ("Share...", "settings", a);
            b.push(c);
            c = new NJ("Advanced...", "advanced", a);
            b.push(c);
            c = new WJ(a);
            c.Nt("separator");
            b.push(c);
            c = new NJ("Email collaborators...", "email", a);
            b.push(c);
            a = new NJ("Email as attachment...", "emailAttach", a);
            b.push(a);
            return b
        };
    var fW = function(a) {
        J.call(this);
        this.o = a || ce()
    };
    v(fW, J);
    fW.prototype.H = null;
    fW.prototype.Da = null;
    fW.prototype.T = !1;
    var gW = function(a) {
        return a.Da || (a.Da = new I(a))
    };
    fW.prototype.init = function() {
        this.T || (this.DD(), this.T = !0)
    };
    fW.prototype.U = function() {
        this.ya("errorHidden")
    };
    fW.prototype.V = function() {
        this.ya("errorShown")
    };
    var QQa = function(a, b, c) {
        var d = a.H;
        b && (d || (a.H || (d = new uF(void 0, !0, a.o), d.render(), zF(d, WC()), d.setTitle(""), gW(a).ka(d, "hide", a.U).ka(d, "show", a.V), MQa(d, UC.key), Fc(d.ha(), "share-client-error-dialog"), a.H = d), d = a.H), d.xf(jd(c || "")));
        d && d.setVisible(b)
    };
    fW.prototype.wa = function() {
        y(this.H);
        y(this.Da);
        fW.qa.wa.call(this)
    };
    fW.prototype.DD = ia;
    fW.prototype.DL = ia;
    fW.prototype.FL = ia;
    var hW = function(a) {
        fW.call(this, a);
        this.b = new dW(a);
        gW(this).ka(this.b, "dialogselect", this.qR).ka(this.b, "Rb", this.pR);
        this.S = !1;
        this.R = new HQa(!1, a);
        this.Hb(this.R)
    };
    v(hW, fW);
    h = hW.prototype;
    h.Zz = null;
    h.qR = function() {
        this.setVisible(!1);
        this.ya("uiContainerClose");
        return !1
    };
    h.pR = function() {
        this.ya("uiContainerClose")
    };
    h.X_ = function(a) {
        a = a.target;
        xe(this.b.ha(), a) && (this.b.ha().blur(), this.b.ha().focus())
    };
    h.DD = function() {
        var a = this.b;
        a.kb || a.render();
        var b = this.o,
            c = jQ(this.b),
            d = b.b("DIV", {
                "class": "share-client-debug"
            });
        b.appendChild(c, d);
        Fc(a.ha(), "share-client-dialog");
        gW(this).ka(a.ha(), "click", this.X_);
        H(a.ha(), !0);
        this.setVisible(!1)
    };
    h.qb = function() {
        return this.S
    };
    h.setVisible = function(a) {
        var b = this.b;
        b.kb || this.init();
        b.setVisible(a);
        this.S = a
    };
    h.DL = function(a) {
        var b = this.Zz;
        a && !b && (b = new uF(void 0, !0, this.o), b.xf(rm(N('<div class="share-client-loading-contents"><div class="share-client-spinner"> </div></div>'))), zF(b, null), b.setTitle("Loading..."), gW(this).ka(b, "hide", this.J0), this.Zz = b, b.render(), Fc(b.ha(), "share-client-loading-dialog"));
        b && b.setVisible(a)
    };
    h.J0 = function() {
        this.ya("uiContainerCancelLoad")
    };
    h.setTitle = function(a, b) {
        var c = Fe(this.o, "IFRAME", void 0, this.b.Nc());
        0 < c.length && (c[0].title = a);
        Ic(nIa(this.b), "share-client-dialog-hidden-title", b);
        this.b.setTitle(b ? "" : a)
    };
    h.ED = function(a, b) {
        var c = this.b.Nc();
        c.style.width = a + "px";
        c.style.height = b + "px";
        var c = ie().height,
            d = this.b.ha(),
            e;
        if (e = this.qb() && 0 < c && d) e = d.getBoundingClientRect(), e = !(0 <= e.top && e.bottom <= c);
        e && (e = "fixed" == hx(d) ? 0 : ke(this.o.o).y, gf(d, "top", c - rf(d).height + e + "px"));
        E && (c = he(document), Cd(8) && c || (c = c ? 0 : 18, this.b.ha().style.width = a + c + "px"))
    };
    h.wa = function() {
        y(this.b);
        y(this.Zz);
        hW.qa.wa.call(this)
    };
    h.FL = function(a) {
        Ic(this.b.ha(), "team-drive-share-client-dialog", a)
    };
    var iW = function(a, b, c, d, e, f, g, k, l, m, q, u) {
        J.call(this);
        this.yc = a;
        this.b = k || new hW(d);
        this.La = l || window;
        a = VJ.va();
        d = new XJ(d, a);
        this.ua = 25E3;
        this.yb = 1E4;
        a = d.ha();
        a || (d.Xa(), a = d.ha());
        Fc(a, "goog-menu-noaccel");
        d.setVisible(!1);
        this.R = d;
        a = JJ.va();
        (this.Fa = new NJ("Loading...", void 0, void 0, a)).Ab(!1);
        (this.Ca = new NJ("Sharing is unavailable at this time. Please try again later.", void 0, void 0, a)).Ab(!1);
        this.Mb = b;
        this.wc = c;
        this.De = g || b;
        this.o = new EQa({});
        this.S = d.b;
        this.Sa = e || null;
        this.$d = n(f) ? f : !0;
        this.Ib =
            new NQa;
        this.vb = q || null;
        this.V = !!m;
        this.Tb = m || null;
        this.Je = u || null;
        this.Va = null;
        this.Va = this.S.ha("docs-aria-speakable");
        this.V || RQa(this, this.La);
        b = SQa(this);
        b.ka(d, "show", this.Q0);
        b.ka(d, "action", this.hd);
        b.ka(this.b, "uiContainerCancelLoad", this.Rf);
        b.ka(this.b, "uiContainerClose", this.kd);
        b.ka(this.b, "errorHidden", this.Od);
        b.ka(this.b, "errorShown", this.Oa)
    };
    v(iW, J);
    h = iW.prototype;
    h.Wv = null;
    h.jp = null;
    h.Oi = null;
    h.Ix = "share";
    h.Ni = !1;
    h.Dj = !1;
    h.ql = null;
    h.bo = null;
    h.Bo = null;
    h.Da = null;
    h.Xd = null;
    h.Gh = null;
    h.aB = null;
    h.mu = !1;
    h.lu = null;
    h.VB = !1;
    h.Qm = !1;
    h.Ji = !1;
    h.yD = !1;
    h.mn = null;
    h.Pu = 0;
    h.uB = null;
    h.zu = 0;
    h.Cr = null;
    h.mB = !1;
    h.Cq = !1;
    h.nJ = !1;
    h.Ig = null;
    var RQa = function(a, b) {
            a.V || (b.SC_setTitle = p(a.zD, a), b.SC_resize = p(a.b.ED, a.b), b.SC_setVisible = p(a.Db, a), b.SC_prepareForVisible = p(a.Na, a), b.SC_setClientModel = p(a.yL, a), b.SC_dispatchEvent = p(a.T, a), b.SC_handleError = p(a.rR, a), b.SC_handleCommandComplete = p(a.aI, a), b.SC_setExecuteCommandFn = p(a.u8, a), b.SC_switchShareApp = p(a.j9, a), b.SC_setSetShareSystemVisibleFn = p(a.A8, a), b.SC_setGetInterfaceVersionNumberFn = p(a.v8, a), b.SC_getVersionNumber = p(a.hZ, a), b.SC_rewriteUrl = p(a.O7, a), b.SC_showNotification = p(a.L8, a),
                b.SC_removeNotification = p(a.z7, a), b.SC_getAriaLiveRegion = p(a.Dc, a))
        },
        TQa = function(a) {
            if (a.V && !a.Ig) {
                var b = xm(wm(vm(a.Oi.clone(), ""), "", void 0), "").toString();
                a.Ig = new UV(null, b);
                VV(a.Ig, "setClientModel", function(a) {
                    this.yL(a.clientModelJson)
                }, a);
                VV(a.Ig, "handleCommandComplete", function(a) {
                    this.aI(a.commandType, a.commandStatus)
                }, a);
                VV(a.Ig, "resize", function(a) {
                    this.b.ED(a.width, a.height);
                    this.Ig.sendMessage("resizeComplete")
                }, a);
                VV(a.Ig, "prepareForVisible", function() {
                    this.Na();
                    this.Ig.sendMessage("makeBodyVisible");
                    this.Ig.sendMessage("prepareComplete")
                }, a);
                VV(a.Ig, "setVisible", function(a) {
                    this.Db(a.visible)
                }, a);
                VV(a.Ig, "setTitle", function(a) {
                    this.zD(a.title, a.hidden)
                }, a);
                a.bo = null;
                a.ql = p(function(a) {
                    this.Ig.sendMessage("executeCommand", {
                        commandType: a
                    })
                }, a)
            }
        },
        jW = function(a) {
            var b = {};
            b.impressionType = a;
            return b
        },
        VQa = function(a, b) {
            var c = na(b) ? b : [b];
            jc(c);
            lc(c);
            var d = a.Xd;
            a.Ni && mc(c, d) || (a.Xd = c, a.Ni = !1, a.Cq = !1, a.zu = 0, a.H("refresh"), a.b.qb() && UQa(a, !1))
        };
    h = iW.prototype;
    h.hZ = function() {
        return 2
    };
    h.yL = function(a) {
        var b = this.o;
        a = db(a);
        var c = a.userScope;
        c && (a.userScope = BQa(c));
        (c = a.visibilitySetting) && (a.visibilitySetting = new xQa(c.visibilityState));
        this.o = new EQa(a);
        this.Ni && b.b != this.o.b && (this.mB = !0);
        this.Ni = !0;
        this.Qm = !1;
        b = this.o.V;
        "driveshare" != b && (b = "share");
        b != this.Ix && (a = this.Oi.clone(), a = vm(a, a.o.replace(/[a-z]+$/, b)), this.Dj = !1, this.Oi = a, this.Ix = b);
        kW(this);
        var d = this.o;
        this.Pu = PQa(this.S).length;
        b = this.R;
        a = d.H;
        for (var c = d.o, e = WQa(this), f = d.T && !1, g = this.Xd.length, k = this.S, d = d.S, l =
                tIa(b), m = 0; m < l.length; m++) {
            var q = b.Bl(l[m]);
            switch (q.Qe()) {
                case "email":
                case "emailAttach":
                case "separator":
                case "settings":
                    b.removeChild(q, !0)
            }
        }
        OQa(b, null, k, 0);
        g = !qa(g) || 1 == g;
        c ? eW(b, !1, !1, !1) : e ? eW(b, !0, g && !!f, g) : 30 <= a ? eW(b, !0, g && !!f, g) : eW(b, g && !!d, g && !!f, !1);
        this.T("menuUpdated");
        this.Ra();
        this.Cr && this.Cr.o(this.o.R);
        this.T("aclInfoUpdated")
    };
    h.Q0 = function() {
        if (this.Xd && this.Xd.length) this.Ni ? XQa(this) : (this.R.qb() || this.R.setVisible(!0, !0), this.ta(!0));
        else {
            kW(this);
            for (var a = PQa(this.S), b = a.length - 1; 0 <= b; b--) lW(this, a[b])
        }
    };
    h.rR = function(a, b) {
        switch (a) {
            case "init":
                kW(this);
                if (b) {
                    var c = JJ.va(),
                        c = new NJ(AG(document, id(b, null)), void 0, void 0, c);
                    c.Ab(!1);
                    lW(this, c)
                } else lW(this, this.Ca);
                this.Ni = this.Cq = !0
        }
    };
    h.aI = function(a, b, c) {
        b = "success" == b;
        switch (a) {
            case "init":
                YQa(this);
                break;
            case "init_share":
            case "data":
                b && (this.zu = t());
                a: {
                    this.Ji = !1;a = this.mn;c = this.U;
                    if (this.mu)
                        if (this.mu = !1, this.Xd = this.aB, delete this.aB, this.mn = null, delete this.U, delete this.ma, b) {
                            if (a) {
                                c.itemIds = this.Xd;
                                this.Gh && (c.hybrid_access_token = this.Gh);
                                ZQa(this, a, c);
                                break a
                            }
                        } else "maybe_show_acl_fixer" == a && $Qa(this);mW(this, !1);a && (b ? (b = p(this.Ba, this, a, this.U, this.ma), wi(b, 10, this)) : "maybe_show_acl_fixer" == a && $Qa(this), this.mn = null,
                        delete this.U, delete this.ma)
                }
                break;
            case "settings":
            case "advanced":
                b || QQa(this.b, !0, c || "")
        }
    };
    h.v8 = function() {};
    h.u8 = function(a) {
        this.Dj = !0;
        this.bo = this.ql;
        this.ql = a
    };
    h.j9 = function(a, b) {
        var c = this.ql;
        this.bo ? this.ql = this.bo : this.Dj = !1;
        this.bo = c;
        aRa(this);
        this.H(a, b)
    };
    h.A8 = function(a) {
        this.Bo = a
    };
    h.O7 = function(a) {
        return a
    };
    h.L8 = function(a) {
        var b = this.b;
        JQa(b.R, new qQa(a.iconId, a.message, a.showInDialog, a.timeout, a.learnMoreUrl, a.undoFn), b.b.ha())
    };
    h.z7 = function() {
        this.b.R.H()
    };
    h.zD = function(a, b) {
        this.b.setTitle(a, b)
    };
    var WQa = function(a) {
        var b = a.o.H;
        return a.o.o ? !1 : 40 == b || 45 == b || 30 == b && a.o.U
    };
    iW.prototype.Dc = function() {
        return this.Va
    };
    iW.prototype.ta = function(a, b, c) {
        this.Xd && !$b(this.Xd) && (this.b.qb() ? this.Wv = p(this.ta, this, a, b) : (a && (kW(this), lW(this, this.Fa), wi(this.sc, this.yb, this)), this.Qm || (this.Dj ? (this.Qm = !0, bRa(this, c, !0)) : (this.VB = this.Qm = !0, b = this.lu, b || (b = me("IFRAME"), E && !Cd("7") && (c = Xc(yc(Ac('javascript:""'))), b.src = Wc(c)), c = b.style, c.visibility = "hidden", c.width = c.height = "10px", $d && !Cd("419.3") ? c.marginTop = c.marginLeft = "-99px" : (c.position = "absolute", c.top = c.left = "-10px"), document.body.appendChild(b), this.lu = b), b.src =
            cRa(this, "init"), wi(this.Sb, this.ua, this), a && XQa(this)))))
    };
    var XQa = function(a) {
            if (!a.Cq)
                if (a.Ji || a.Dj) {
                    var b;
                    if (b = a.Dj) b = 2E4 < t() - a.zu;
                    b && (a.Ji = !0, bRa(a, void 0, !0))
                } else a.Ji = !0, dRa(a, !0)
        },
        dRa = function(a, b) {
            var c = {};
            c.preload = !!b;
            c = a.Oi && cRa(a, "init_share", c);
            c = N('<iframe frameborder="0" src="' + (c ? P(nn(c)) : "javascript:&quot;&quot;") + '" class="share-client-content-iframe"></iframe>');
            c = rm(c);
            a.b.b.xf(c);
            b || mW(a, !0);
            a.Na()
        },
        bRa = function(a, b, c) {
            b = b || {};
            b.itemIds || (b.itemIds = a.Xd);
            !b.hybrid_access_token && a.Gh && (b.hybrid_access_token = a.Gh);
            a.Ba("data", b, void 0,
                c)
        },
        kW = function(a) {
            for (var b = a.R, c = a.Pu, d = 0; d < c; d++) b.removeChild(jy(b, 0), !0);
            a.Pu = 0;
            a.T("menuUpdated")
        },
        lW = function(a, b) {
            b.getParent() || (a.R.Yk(b, 0, !0), a.Pu++, a.T("menuUpdated"))
        },
        SQa = function(a) {
            return a.Da || (a.Da = new I(a))
        },
        cRa = function(a, b, c) {
            if (!a.Oi) return 'javascript:""';
            var d = a.Oi.clone();
            "init" == b && (d = vm(d, d.o.replace(/[a-z]+$/, "init")));
            tG(d, "id", a.Xd);
            tG(d, "foreignService", a.Mb);
            tG(d, "gaiaService", a.wc);
            tG(d, "shareService", a.De);
            "init" != b && tG(d, "command", b);
            tG(d, "subapp", 10);
            tG(d, "popupWindowsEnabled",
                a.$d);
            tG(d, "shareUiType", "default");
            a.Sa && tG(d, "hl", a.Sa);
            a.Gh ? tG(d, "hybrid_access_token", a.Gh) : tG(d, "authuser", a.yc ? a.yc : "0");
            tG(d, "rand", t());
            c && d.H.T(c);
            a.V && tG(d, "client", "postMessage");
            a.vb && tG(d, "appId", a.vb);
            a.Tb && tG(d, "embedOrigin", a.Tb);
            return d.toString()
        };
    iW.prototype.H = function(a, b) {
        b = b || {};
        b.itemIds = this.Xd;
        this.Gh && (b.hybrid_access_token = this.Gh);
        RQa(this, this.La);
        var c = !0;
        switch (a) {
            case "init":
            case "load_acl_fixer_data":
            case "maybe_email_collaborators":
            case "maybe_show_acl_fixer":
            case "preload_share":
            case "refresh":
                c = !1
        }
        switch (a) {
            case "load_acl_fixer_data":
            case "maybe_show_acl_fixer":
                eRa(this, !0)
        }
        if (!this.Dj && this.Xd && 15 < this.Xd.length) this.aB = this.Xd, this.Xd = [this.Xd[0]], this.mu = !0, ZQa(this, a, b, !c);
        else if ("init" == a || "refresh" == a) this.ta(!1, !0,
            b);
        else if (!this.Xd || !this.Xd.length) this.ya(new fRa(p(this.H, this, a, b)));
        else if (this.ya(new gRa)) {
            if ("invite" == a && b.inviteFromUrl) {
                if (this.Ni && !WQa(this)) return;
                if (!this.Ni) {
                    this.Qm || this.ta(!1, !0);
                    yv(SQa(this), this, "aclInfoUpdated", p(this.H, this, a, b));
                    return
                }
            }
            var d;
            if (!(d = !this.Dj) && (d = 2E4 < t() - this.zu)) {
                a: switch (d = b && !!b.forceFullLoad, a) {
                    case "load_acl_fixer_data":
                    case "maybe_show_acl_fixer":
                        d = !d;
                        break a;
                    case "preload_share":
                        d = !0;
                        break a;
                    default:
                        d = !1
                }
                d = !d
            }
            d ? (this.mu && c && mW(this, !0), ZQa(this, a,
                b, !c)) : this.Ba(a, b)
        }
    };
    var ZQa = function(a, b, c, d) {
        a.mn = b;
        a.U = c;
        a.ma = (new Date).getTime();
        qa(a.jp) && xi(a.jp);
        a.jp = wi(a.Zb, a.ua, a);
        a.Ji || (a.Ji = !0, a.Dj ? bRa(a, c, "load_acl_fixer_data" == b || "maybe_show_acl_fixer" == b) : dRa(a, d))
    };
    iW.prototype.Ba = function(a, b, c, d) {
        if ("preload_share" != a) {
            b = b || {};
            b.itemIds || (b.itemIds = this.Xd);
            !b.hybrid_access_token && this.Gh && (b.hybrid_access_token = this.Gh);
            if ("maybe_show_acl_fixer" == a || "load_acl_fixer_data" == a) b.aclFixerMode = b.aclFixerMode || "mail";
            RQa(this, this.La);
            this.ql(a, b, c, d)
        }
    };
    var YQa = function(a) {
        var b = a.lu;
        b && (se(b), a.lu = null)
    };
    iW.prototype.Sb = function() {
        this.VB && (YQa(this), this.VB = !1)
    };
    iW.prototype.sc = function() {
        this.Qm && !this.Cq && (kW(this), lW(this, this.Ca), this.Qm = !1, this.Cq = !0)
    };
    iW.prototype.Zb = function() {
        if (this.Ji) {
            switch (this.mn) {
                case "maybe_show_acl_fixer":
                    $Qa(this);
                    break;
                case "load_acl_fixer_data":
                case "preload_share":
                    break;
                default:
                    QQa(this.b, !0, "Sorry, sharing is unavailable at this time. Please try again later.")
            }
            this.T("loadError");
            aRa(this)
        }
    };
    iW.prototype.Rf = function() {
        this.yD && aRa(this)
    };
    var aRa = function(a) {
            a.Ji && (UQa(a, !1), a.b.b.xf(md), a.Ji = !1, mW(a, !1), a.mn = null, delete a.U, delete a.ma)
        },
        mW = function(a, b) {
            a.yD = b;
            var c = a.b;
            b && c.ya("beforeLoad");
            c.DL(b);
            b || c.ya("afterLoad");
            b && a.Oa()
        };
    iW.prototype.hd = function(a) {
        switch (a.target.lb()) {
            case "email":
                this.H("email", jW(5));
                break;
            case "emailAttach":
                this.H("email_attach", jW(6));
                break;
            case "settings":
                this.H("settings", jW(2));
                break;
            case "advanced":
                this.H("advanced", jW(2))
        }
    };
    iW.prototype.Ra = function() {
        var a = this.o,
            b = bW || (bW = new FQa),
            c = this.nJ || a.o,
            d = WQa(this),
            e = a.S,
            f = this.Je || void 0,
            g = 1 == this.Xd.length,
            k = 30 <= a.H,
            l = !c && (k || d) && g,
            d = !c && (d || k || g && e),
            m = !c && g && a.T && !1,
            a = !c && e && !k && g && !!a.ma;
        f ? f.b(m, l, d, a) : (b.H.Ab(m), b.R.Ab(l), b.o.Ab(d), b.b.Ab(a), b.b.setVisible(a))
    };
    iW.prototype.Db = function(a) {
        a && (this.Ji = !1, mW(this, !1), QQa(this.b, !1));
        UQa(this, a)
    };
    iW.prototype.Na = function() {
        this.b.init()
    };
    var UQa = function(a, b) {
            b && (a.b.init(), a.b.FL("driveshare" == a.Ix));
            a.b.setVisible(b);
            b ? a.Oa() : hRa(a)
        },
        eRa = function(a, b) {
            a.nJ = b;
            a.Ni ? a.Ra() : ((bW || (bW = new FQa)).o.Ab(!b), yv(SQa(a), a, "aclInfoUpdated", p(a.Ra, a)))
        };
    iW.prototype.Oa = function() {
        this.ya("uiOpened")
    };
    var hRa = function(a) {
        a.Wv && (a.Wv(), a.Wv = null);
        if (a.mB) {
            a.mB = !1;
            var b = a.o.R;
            a.o.b && b && "unlisted" == b.b && a.ya(new iRa)
        }
        a.Bo && a.Bo(!1);
        a.ya("uiClosed")
    };
    iW.prototype.kd = function() {
        this.Bo && this.Bo(!1)
    };
    iW.prototype.Od = function() {
        this.b.qb() || hRa(this)
    };
    var $Qa = function(a) {
        eRa(a, !1);
        a.ya(new nW("continue"))
    };
    iW.prototype.T = function(a, b) {
        switch (a) {
            case "aclFixerDone":
                var c = "continue";
                b && b.aclFixerDoneStatus && (c = b.aclFixerDoneStatus);
                eRa(this, !1);
                this.ya(new nW(c));
                break;
            default:
                this.ya(new D(a))
        }
    };
    iW.prototype.wa = function() {
        iW.qa.wa.call(this);
        qa(this.jp) && xi(this.jp);
        this.R.Pa();
        delete this.R;
        this.Cr && (this.Cr.Pa(), this.Cr = null);
        this.Fa.Pa();
        delete this.Fa;
        this.Ca.Pa();
        delete this.Ca;
        delete this.S;
        this.Ib.Pa();
        delete this.Ib;
        this.b.Pa();
        delete this.b;
        this.Da && (this.Da.Pa(), this.Da = null);
        this.uB && (this.uB.Pa(), this.uB = null);
        this.Oi = this.Gh = this.Xd = null;
        this.o.Pa();
        delete this.o;
        this.Bo = this.ql = this.bo = null
    };
    var gRa = function() {
        D.call(this, "beforeExecute")
    };
    v(gRa, D);
    var fRa = function(a) {
        D.call(this, "createItems");
        this.ke = a
    };
    v(fRa, D);
    var iRa = function() {
        D.call(this, "reloadSuggested")
    };
    v(iRa, D);
    var nW = function(a) {
        D.call(this, "aclFixerDone");
        this.kc = a
    };
    v(nW, D);
    nW.prototype.getStatus = function() {
        return this.kc
    };
    var jRa = function(a, b, c) {
        this.H = a;
        this.o = b;
        this.b = c || null
    };
    jRa.prototype.getUrl = function() {
        return this.H
    };
    jRa.prototype.getId = function() {
        return this.o
    };
    var kRa = function(a) {
            this.b = a
        },
        lRa = function(a) {
            for (var b = [], c = 0; c < a.b.length; c++) a.b[c].getId() && b.push(a.b[c].getId());
            return b
        },
        nRa = function(a) {
            return Tb(mRa(a), function(a) {
                var b = {};
                b.itemId = a.o;
                b.authKey = a.b;
                return Va(b, wQa)
            })
        },
        mRa = function(a) {
            for (var b = [], c = 0; c < a.b.length; c++) a.b[c].b && b.push(a.b[c].b);
            return b
        };
    var oRa = function(a, b) {
        this.o = a;
        this.b = b
    };
    oRa.prototype.equals = function(a) {
        return this.o == a.o && this.b == a.b
    };
    var pRa = function(a) {
        this.R = a || "spreadsheets|docs|drive|script|sites"
    };
    la(pRa);
    var qRa = function(a) {
            var b = 4,
                c = [],
                d = {
                    cy: "/d/([0-9a-zA-Z\\-\\_]+)",
                    vA: b += 1
                };
            c.push(d);
            d = {
                cy: "(\\?|&|&amp;)(id|docid|key|docID|DocId)=([0-9a-zA-Z\\-\\_]+)",
                vA: b += 3
            };
            c.push(d);
            c.push({
                cy: "/?s/([0-9a-zA-Z\\-\\_]+)(?:/p/[0-9a-zA-Z\\-\\_]+)?/edit",
                vA: b + 1
            });
            d = [];
            for (b = 0; b < c.length; b++) d.push(c[b].vA);
            a.o = d;
            for (var d = "(https?://)?(" + a.R + ")[0-9]?.google.com", e = "(", b = 0; b < c.length; b++) e += c[b].cy, b != c.length - 1 && (e += "|");
            a.H = new RegExp("\\b" + d + "(:[0-9]+)?\\/\\S*" + (e + ")") + "[0-9a-zA-Z$\\-\\_\\.\\+\\!\\*'\\,;:@&=/\\?]*(#[0-9a-zA-Z$\\-\\_\\.\\+\\!\\*'\\,;:@&=/\\?]+)?\\b",
                "g");
            a.b = /(\bspreadsheet\/gform\b)|(\bforms\/\b)|(\bpub\b)/
        },
        rRa = function(a) {
            a.H || qRa(a);
            return a.H
        },
        sRa = function(a) {
            a.b || qRa(a);
            return a.b
        },
        tRa = function(a, b) {
            if (!b) return b;
            var c = sRa(a),
                d = Sb(b, function(a) {
                    return !a.match(c)
                });
            return 0 == d.length ? null : d
        },
        uRa = function(a, b) {
            var c;
            c = (c = tRa(a, b.match(rRa(a)))) ? Tb(c, ub) : c;
            if (!c) return null;
            for (var d = [], e = 0; e < c.length; e++) {
                var f = c[e],
                    g;
                a: {
                    var k = a;g = f;
                    var l = rRa(k);l.lastIndex = 0;
                    if (g = l.exec(g))
                        for (k.o || qRa(k), k = k.o, l = 0; l < k.length; l++) {
                            var m = g[k[l]];
                            if (m) {
                                g = m;
                                break a
                            }
                        }
                    g = null
                }
                var q;
                try {
                    q = sG(Bm(f), "authkey") || null
                } catch (w) {
                    q = null
                }
                var u;
                g && q && (u = new oRa(g, q));
                d.push(new jRa(f, g, u))
            }
            return new kRa(d)
        };
    var oW = function(a, b) {
        x.call(this);
        this.U = hh(a).o.kp;
        this.o = b;
        this.Da = new I(this);
        this.Hb(this.Da);
        this.R = null;
        this.V = pRa.va();
        this.b = new YD(this.Ca, 1E3, this);
        this.Hb(this.b);
        this.H = null;
        Sf(this.Da, this.o.o, "change", this.b.di, void 0, this.b);
        Sf(this.Da, this.o.ua, "change", this.b.di, void 0, this.b);
        0 < this.o.ua.size() && this.b.di()
    };
    v(oW, x);
    var xRa = function(a) {
        return p(a.S, a, vRa(a), wRa(a))
    };
    oW.prototype.S = function(a, b, c, d, e) {
        b && a && 0 < a.length ? (this.H = new Us, this.H.message("Saving...", jd("Checking attachment sharing settings")), c = yRa(this), this.Da.b(c, "aclFixerDone"), yv(this.Da, c, "aclFixerDone", p(this.ma, this, d, e)), VQa(c, lRa(b)), c.yb = 3E3, c.ua = 5E3, c.H("maybe_show_acl_fixer", zRa(a, b))) : d()
    };
    oW.prototype.ma = function(a, b, c) {
        this.T();
        "continue" == c.getStatus() ? a() : (b(), this.b.di())
    };
    oW.prototype.Ca = function() {
        var a = vRa(this),
            b = wRa(this);
        if (b && a && 0 < a.length) {
            var c = yRa(this);
            VQa(c, lRa(b));
            c.H("load_acl_fixer_data", zRa(a, b))
        }
    };
    var vRa = function(a) {
            a = Sb(a.o.o.o(), function(a) {
                if (a.o == this.U) return !1;
                a = a.zc();
                return 100 == a || 108 == a
            }, a);
            return Tb(a, function(a) {
                return a.email
            })
        },
        wRa = function(a) {
            var b = Tb(a.o.ua.sd(), function(a) {
                return a.getUrl()
            });
            return uRa(a.V, b.join(" "))
        },
        zRa = function(a, b) {
            var c = {
                aclFixerMode: "calendar"
            };
            c.recipientEmails = a;
            c.idAuthKeys = nRa(b);
            return c
        },
        yRa = function(a) {
            if (!a.R) {
                var b = Sv() ? Sv() : 0,
                    b = new iW(b.toString(), "calendar", "calendar", void 0, "en");
                a.Hb(b);
                var c = "/calendar/sharing/share";
                if (b.Oi) throw Error("Jb");
                pa(c) && (c = new sm(c));
                b.Oi = c;
                b.V && TQa(b);
                a.R = b;
                a.Da.ka(a.R, "uiOpened", p(a.T, a))
            }
            return a.R
        };
    oW.prototype.T = function() {
        this.H && (this.H.close(), this.H = null)
    };
    var BRa = function(a, b, c, d) {
            a.Jf() && CN(a).ub() ? (a = r(ARa, c, d), b = jd("It's not possible to change the calendar for a single event in a series. Do you want to change the calendar for all events in this series?"), c = (new Kw).set("yes", "Change for all events", !0).set("cancel", "Cancel"), hv(new Us, a, "Change calendar for all events in series?", b, c)) : c()
        },
        ARa = function(a, b, c) {
            "yes" == c.key ? a() : b()
        };
    var CRa = function() {
            return Ww("This event has reached the guest limit for groups that automatically update")
        },
        DRa = function(a) {
            a = a || {};
            a = "New members of groups invited to this event will not be automatically added. Please add them directly to the event. " + ('<a href="' + P(nn(a.R2)) + '" target="_blank">Learn more</a>');
            return N("" + a)
        };
    var FRa = function(a, b, c, d) {
            a = a.R;
            if (b = bIa(a)) b = KFa(a) > a.H || LFa(a);
            b ? ERa(c, d) : c()
        },
        ERa = function(a, b) {
            var c = new cs,
                d, e;
            a ? (d = (new Kw).set("ok", "Save", !0).set("cancel", "Cancel", !1, !0), e = r(GRa, a, b)) : (d = WC(), e = ia);
            var f = new Us,
                g = jO(c, CRa),
                k;
            k = Tu(K(M(), hj), TIa, {
                ms: 172013
            }).toString();
            hv(f, e, g, rm(Tu(c, DRa, {
                R2: k
            })), d)
        },
        GRa = function(a, b, c) {
            switch (c.key) {
                case "ok":
                    a();
                    break;
                default:
                    b()
            }
        };
    var pW = function(a, b, c, d) {
        S.call(this);
        this.o = a;
        this.H = b;
        this.V = !!c;
        this.R = d || "tp"
    };
    v(pW, S);
    pW.prototype.Xa = function() {
        this.Ea = this.b.b("DIV", this.R);
        this.Ua(this.o, !0)
    };
    pW.prototype.Ma = function() {
        pW.qa.Ma.call(this);
        T(this).ka(this.o, "Wa", this.U);
        var a = this.o.o; - 1 == a ? KR(this.o, 0) : HRa(this, a)
    };
    pW.prototype.U = function(a) {
        HRa(this, a.Ba)
    };
    var HRa = function(a, b) {
        var c = a.H[b],
            d = a.S;
        c != d && (a.S = c, d && (a.V ? H(d.ha(), !1) : a.removeChild(d, !0)), c && (c.kb ? H(c.ha(), !0) : a.Ua(c, !0)))
    };
    pW.prototype.wa = function() {
        for (var a = 0; a < this.H.length; a++) {
            var b = this.H[a];
            b.getParent() || b.Pa()
        }
        pW.qa.wa.call(this)
    };
    var IRa = function(a) {
            return '<input name="rst" value="' + O(a.Vi) + '" type="radio" id="' + O(a.id) + '"' + (a.oj ? " checked" : "") + '/><label for="' + O(a.id) + '" style="font-size:13px;color:#222;font-family:Arial,Sans-serif">' + O(a.label) + "</label>"
        },
        JRa = function(a) {
            var b = "",
                c = " + " + ('<input id="' + O(a.zd) + 'rgu" name="rgu" class="ep-rc-guestcount"' + (a.Lf.sq ? ' value="' + O(a.Lf.sq) + '"' : "") + ' align="right" maxlength="2"/> guests'),
                b = b + ('<table cellpadding="0" cellspacing="5" border="0"><tr>' + (a.gC ? '<form id="' + O(a.zd) +
                    'response_form" method="POST" action="' + O(a.gC) + '">' : "") + '<td valign="top" class="ep-rc-title">Going?</td><td valign="top" class="ep-rc-font" style="white-space:nowrap">' + IRa({
                    id: a.zd + "yes_radio",
                    Vi: 1,
                    oj: 1 == a.Lf.Vi,
                    label: "Yes"
                }) + '<span class="ep-rc-guest">' + c + "</span><br>" + IRa({
                    id: a.zd + "maybe_radio",
                    Vi: 3,
                    oj: 3 == a.Lf.Vi,
                    label: "Maybe"
                }) + "<br>" + IRa({
                    id: a.zd + "no_radio",
                    Vi: 2,
                    oj: 2 == a.Lf.Vi,
                    label: "No"
                }) + '</td><td valign="top"><textarea id="' + O(a.zd) + 'rcomment" name="rcomment" class="ep-rc-notesinput">' + (a.Lf.message ?
                    O(a.Lf.message) : "") + "</textarea></td>");
            a.O8 && (b += '<td valign="top" align="right"><a id="' + O(a.zd) + 'spam" class="ep-rc-font" href="javascript:void(0)">Report spam</a></td>');
            a.gC && (b += '<td valign="top"><input type="submit" value="Submit Response"/><br><span class="ep-rc-font ep-rc-dimmed">From: ' + O(a.Lf.email) + "</span></td></form>");
            return b + "</tr></table>"
        },
        KRa = function(a) {
            var b, c = '<table cellpadding="0" cellspacing="5"><tr><td valign="top"><img src="';
            switch (ua(b = a.Lf.Vi) ? b.toString() : b) {
                case 1:
                    c +=
                        O(a.vz) + "images/icon_color_yes.gif";
                    break;
                case 3:
                    c += O(a.vz) + "images/icon_color_maybe.gif";
                    break;
                case 2:
                    c += O(a.vz) + "images/icon_color_no.gif"
            }
            c += '" alt=""></td><td valign="top" class="ep-rc-font ep-rc-action">';
            switch (ua(b = a.Lf.Vi) ? b.toString() : b) {
                case 1:
                    c += '<span class="ep-rc-yes">';
                    a.Ho ? (b = O(a.Ho) + " is going", c += b) : c += "Yes, I'm going";
                    c += "</span>";
                    break;
                case 3:
                    c += '<span class="ep-rc-maybe">';
                    a.Ho ? (b = O(a.Ho) + " might go", c += b) : c += "I might go";
                    c += "</span>";
                    break;
                case 2:
                    c += '<span class="ep-rc-no">',
                        a.Ho ? (b = O(a.Ho) + " is not going", c += b) : c += "No, I'm not going", c += "</span>"
            }
            if (a.Lf.sq || a.Lf.message) {
                b = a.Lf;
                var d = "";
                if (b.sq) var e = "+" + (O(b.sq) + " guests"),
                    d = d + ("(" + e + ") ");
                b = d += b.message ? '"' + O(b.message) + '"' : ""
            } else b = "";
            c += '</td><td valign="top" class="ep-rc-notessummary">' + b + "&nbsp; ";
            a.pF && (c += '<a id="' + O(a.zd) + 'response_form_link" href="' + O(a.pF) + '" class="ep-rc-updatelink lk">', c = a.Lf.message ? c + "Change your response" : c + "Add a note or change your response", c += "</a>");
            return c + "</td></tr></table>"
        };
    var qW = function(a, b, c) {
        S.call(this);
        this.H = a;
        this.o = b;
        this.R = !c
    };
    v(qW, S);
    h = qW.prototype;
    h.bw = null;
    h.Hu = null;
    h.Lu = null;
    h.oo = null;
    h.Bc = function(a) {
        return "DIV" == a.tagName
    };
    h.hc = function(a) {
        this.Ea = a
    };
    h.Xa = function() {
        this.Ea = this.b.b("DIV", {
            id: this.getId()
        })
    };
    h.Ma = function() {
        qW.qa.Ma.call(this);
        var a = this.o,
            b = qi(this.H),
            b = !this.R && b;
        Km(this.ha(), JRa, {
            Lf: XHa(a),
            O8: b,
            zd: this.hb("")
        });
        this.bw = this.Za("yes_radio");
        this.Hu = this.Za("maybe_radio");
        this.Lu = this.Za("no_radio");
        this.oo = this.Za("rgu");
        rW(this, 1 == a.b.get());
        var c = this.Za("rcomment"),
            a = new vS(a.o, "Add a note", !1, new uS(!1, 3, 3));
        this.Ua(a);
        $x(a, c);
        a = T(this);
        a.ka(this.bw, "click", this.B2);
        a.ka(this.Hu, "click", this.O0);
        a.ka(this.Lu, "click", this.V0);
        a.ka(this.oo, "change", this.X0);
        b && a.ka(this.Za("spam"),
            "click", this.a2);
        a.ka(this.o, "change", this.uY);
        b = pi(this.H);
        Sf(a, b, "b", this.tY, !1, this)
    };
    h.Jb = function() {
        qW.qa.Jb.call(this);
        LRa(this)
    };
    var rW = function(a, b) {
            var c = a.oo;
            b ? c.removeAttribute("disabled") : c.setAttribute("disabled", !0);
            gf(c, "background-color", b ? "#fff" : "#ddd")
        },
        MRa = function(a) {
            a = a.o.o;
            "Automatically declined due to event conflict." == a.get() && a.set("")
        },
        LRa = function(a) {
            a.bw = null;
            a.Hu = null;
            a.Lu = null;
            a.oo = null
        };
    h = qW.prototype;
    h.uY = function() {
        var a = this.o,
            b = a.b.get();
        this.bw.checked = 1 == b;
        this.Hu.checked = 3 == b;
        this.Lu.checked = 2 == b;
        this.oo.value = a.H.get() || ""
    };
    h.a2 = function() {
        qi(this.H) && this.ya(new tV("Db"))
    };
    h.B2 = function() {
        2 == this.o.b.get() && MRa(this);
        this.o.b.set(1);
        rW(this, !0)
    };
    h.O0 = function() {
        2 == this.o.b.get() && MRa(this);
        this.o.b.set(3);
        rW(this, !1)
    };
    h.V0 = function() {
        this.o.b.set(2);
        rW(this, !1)
    };
    h.X0 = function() {
        var a = this.oo,
            b = a.value.replace(/\D+/g, "") || "0",
            b = parseInt(b, 10);
        a.value = b;
        this.o.H.set(b)
    };
    h.tY = function(a) {
        var b = this.Za("spam");
        b && (a.Ob ? (Gc(b, "ui-disabled"), b.tabIndex = 0) : (Fc(b, "ui-disabled"), b.tabIndex = -1))
    };
    h.wa = function() {
        LRa(this);
        qW.qa.wa.call(this)
    };
    var sW = function(a, b, c) {
        S.call(this);
        this.o = a;
        this.H = b;
        this.R = !!c
    };
    v(sW, S);
    h = sW.prototype;
    h.Bc = function(a) {
        return "DIV" == a.tagName
    };
    h.hc = function(a) {
        this.Ea = a
    };
    h.Xa = function() {
        this.Ea = this.b.b("DIV", {
            id: this.getId()
        })
    };
    h.Ma = function() {
        sW.qa.Ma.call(this);
        this.HG()
    };
    h.HG = function() {
        if (this.kb) {
            var a = this.H,
                b = this.R ? qv(a.R) : null,
                c = qi(this.o) ? LF() : "";
            Km(this.ha(), KRa, {
                Lf: XHa(a),
                pF: "#",
                Ho: b,
                zd: this.hb(""),
                vz: c
            });
            b = T(this);
            Tf(b);
            b.ka(this.Za("response_form_link"), "click", this.l0);
            b.ka(a, "change", this.HG)
        }
    };
    h.l0 = function() {
        this.ya("Sb")
    };
    var tW = function(a, b, c, d) {
        S.call(this);
        this.S = b;
        d = new sW(a, b, d);
        this.Ua(d);
        a = new qW(a, b, c);
        this.Ua(a);
        this.R = d;
        this.o = a
    };
    v(tW, S);
    h = tW.prototype;
    h.uJ = !1;
    h.Bc = function(a) {
        return "DIV" == a.tagName
    };
    h.hc = function(a) {
        this.Ea = a
    };
    h.Xa = function() {
        this.Ea = this.b.b("DIV", {
            id: this.getId(),
            className: "ep-rc-div"
        })
    };
    h.Ma = function() {
        tW.qa.Ma.call(this);
        NRa(this)
    };
    h.Za = function(a) {
        var b = this.R;
        return b.kb ? b.Za(a) : (b = this.o) && b.kb ? b.Za(a) : null
    };
    var NRa = function(a, b) {
        if (a.kb) {
            var c = T(a),
                d = a.R,
                e = a.S.b;
            b || a.uJ || 0 == e.get() ? (d.kb && (Tf(c), y(d), a.b.Ug(a.ha())), c = a.o, c.kb || $x(c, a.ha()), a.H && (c = of(a.ha()), d = rf(a.ha()), tw(a.H.o, 0, c.y + d.height)), a.uJ = !0) : d.kb || ($x(d, a.ha()), c.ka(d, "Sb", a.U), c.ka(e, "change", a.V))
        }
    };
    tW.prototype.U = function() {
        NRa(this, !0)
    };
    tW.prototype.V = function() {
        NRa(this)
    };
    var ORa = function(a) {
            var b = a.prefix,
                c = a.id;
            a = a.t4;
            return N('<div id="' + P(c) + 'print-btn" class="ep-ea-btn-wrapper ' + P(b) + '-print-btn"></div><div id="' + P(c) + 'btcb_top" class="ep-ea-btn-wrapper ' + P(b) + '-back-btn"></div><div id="' + P(c) + 'save_top" class="action-btn-wrapper ep-ea-btn-wrapper"></div>&nbsp;<div id="' + P(c) + 'cancel_top" class="ep-ea-btn-wrapper"></div>&nbsp;<div id="' + P(c) + 'delete_top" class="ep-ea-btn-wrapper"></div>&nbsp;' + O(a))
        },
        PRa = function(a) {
            var b = a.prefix,
                c = a.id,
                d = a.xx,
                e = a.oT;
            a = a.WT;
            b = '<select id="' + P(c) + 'moreactions" size="1" class="prefselect ' + P(b) + '-ma" class="' + P(b) + '-more"><option value="' + P(c) + 'none" selected="selected">' + O("More Actions") + "</option>" + O(d) + '<option value="' + P(c) + P("Ab") + '" class="ep-dpl-it">' + O("Duplicate Event") + "</option>";
            c = e.length;
            for (d = 0; d < c; d++) b += O(e[d]);
            b += O(a) + "</select>";
            return N(b)
        };
    var uW = function(a, b, c) {
        S.call(this);
        this.V = a;
        this.R = b;
        this.ta = Gg(a, 12);
        this.hn = c || "ep-ea";
        c = ND.va();
        b.qc() && (this.S = new KD("Save", c), this.Ua(this.S), this.H = new KD(b.Fb() ? "Discard" : "Discard changes", c), this.Ua(this.H));
        var d = this.R.V,
            d = 3 == d || 2 == d;
        this.U = null;
        !this.R.Fb() && d && (d = b.Sb ? "Cancel appointment" : "Remove from this calendar", this.U = new KD(b.Od ? "Delete" : d, c), Ny(this.U, this.hn + "-delbut"), this.Ua(this.U));
        a = hh(a).T.sd();
        var e = b.T.b.get();
        this.ua = Sb(a, function(a) {
            return a.qc() && a.getId() != e
        });
        this.o =
            new KD("", c);
        this.o.Qc("Back to calendar");
        this.Ua(this.o);
        qi(this.V) && !this.R.Fb() && (this.ma = new KD("", c), this.Ua(this.ma), this.ma.Qc("Print this event"))
    };
    v(uW, S);
    h = uW.prototype;
    h.Xa = function() {
        var a = this.b.b("DIV", this.hn + " noprint"),
            b = this.hb(""),
            c = [];
        C(this.ua, function(a) {
            var b;
            b = this.hb(a.getId());
            a = "Copy to " + a.getTitle();
            b = N('<option value="' + P(b) + '">' + O(a) + "</option>");
            c.push(b)
        }, this);
        var d = 3 == this.R.V && bQ(this.R) && !this.R.Fb() ? N('<option value="' + P(b) + P("Bb") + '">' + O("Change Owner...") + "</option>") : "",
            e = this.R.Dc ? N('<option value="' + P(b) + P("Fb") + '" class="event-debug-link">' + O("Troubleshooting Info") + "</option>") : "",
            d = !this.R.Fb() && qi(this.V) ? PRa({
                id: b,
                prefix: this.hn,
                xx: d,
                oT: c,
                WT: e
            }) : "";
        Km(a, ORa, {
            id: b,
            prefix: this.hn,
            t4: d
        });
        this.Ea = a
    };
    h.Ma = function() {
        uW.qa.Ma.call(this);
        var a = T(this);
        this.o.kb || (this.o.render(this.Za("btcb_top")), this.ta.Qc(this.o.ha(), void 0));
        xv(a, this.o.ha(), HB, this.q_);
        var b = this.S;
        b && (b.kb || b.render(this.Za("save_top")), xv(a, b.ha(), HB, this.oW));
        if (b = this.H) b.kb || b.render(this.Za("cancel_top")), xv(a, b.ha(), HB, this.x_);
        if (b = this.U) b.kb || b.render(this.Za("delete_top")), xv(a, b.ha(), HB, this.nW);
        (b = this.Za("moreactions")) && a.ka(b, "change", this.R0);
        (b = this.ma) && !b.kb && (b.render(this.Za("print-btn")), this.ta.Qc(this.ma.ha(),
            void 0));
        (b = b ? b.ha() : this.Za("print-link")) && xv(a, b, HB, this.t1);
        b = pi(this.V);
        Sf(a, b, "b", this.mW, !1, this);
        a.ka(this.R.Oa, "change", this.K1);
        qi(this.V) || QRa(this, !1)
    };
    h.focus = function() {
        this.o.kb && this.o.ha().focus()
    };
    h.oW = function() {
        this.ya(new tV("xb"))
    };
    h.x_ = function() {
        this.ya(new tV("yb"))
    };
    h.nW = function() {
        qi(this.V) && this.ya(new tV("zb"))
    };
    h.t1 = function() {
        qi(this.V) && this.ya(new tV("Eb"))
    };
    h.q_ = function() {
        this.ya(new tV("wb"))
    };
    h.R0 = function() {
        if (qi(this.V)) {
            var a = this.Za("moreactions"),
                b = a.options[a.selectedIndex],
                b = b && b.value && iG(this, b.value);
            a.selectedIndex = 0;
            if (b && "none" != b)
                if ("Fb" == b) {
                    var a = new Us,
                        b = this.R.Dc,
                        c = this.R.getId(),
                        b = N(O(b) + '<p><a target="_blank" href="event?eid=' + LG(c) + '">Click to view the standalone page</a></p>');
                    Vs(a, "Troubleshooting Info", rm(b), void 0, "modal-dialog")
                } else JS(this.R, p(this.oU, this, b))
        }
    };
    h.oU = function(a) {
        "Bb" == a || "Ab" == a ? this.ya(new tV(a)) : this.ya(new uV(a))
    };
    h.K1 = function() {
        qi(this.V) || this.S && this.S.Ab(this.R.Oa.ub())
    };
    h.mW = function(a) {
        QRa(this, a.Ob)
    };
    var QRa = function(a, b) {
        var c = a.Za("moreactions");
        c && (b ? c.removeAttribute("disabled") : c.setAttribute("disabled", "disabled"));
        a.U && a.U.Ab(b);
        a.S && (a.R.Oa.ub() || a.S.Ab(b));
        if (a.ma) a.ma.Ab(b);
        else if ((c = a.Za("printLinkContent")) && (b ? Gc(c, "ui-disabled") : Fc(c, "ui-disabled")), c = a.Za("print-link")) c.tabIndex = b ? 0 : -1
    };
    var RRa = function(a, b, c) {
        c = c || (a ? ce(F(a)) : ce());
        var d = new vW(c);
        SI.call(this, d, a, b, c);
        this.La(1, void 0, void 0, -5);
        this.Oa = 300
    };
    v(RRa, SI);
    var vW = function(a) {
        TI.call(this, a);
        this.o = $u(JOa, {
            OL: !1
        }, void 0, this.b);
        this.T = ge(this.xh() + "-content-id", this.o);
        this.R = ge(this.xh() + "-arrow-id", this.o);
        this.H()
    };
    v(vW, TI);
    h = vW.prototype;
    h.xh = function() {
        return "jfk-bubble"
    };
    h.ha = function() {
        return this.o
    };
    h.vk = function() {
        return this.T
    };
    h.Cy = function() {
        return this.R
    };
    h.wa = function() {
        se(this.o);
        vW.qa.wa.call(this)
    };
    var SRa = function(a) {
            a = a.id;
            return N('<input id="' + P(a) + 'flexcheckbox" type="checkbox" class="checkbox"><div id="' + P(a) + 'flexregion" class="ep-flx-reg"><label for="' + P(a) + 'flexcheckbox" class="ep-flx-lb">' + O("Flexible") + "</label>" + N('<div class="ep-flx-ic"></div>') + "</div>")
        },
        TRa = function(a) {
            var b = !!a.enabled;
            return N('<div class="ep-flx-tt">' + (a.Jf ? O("The flexibility of this meeting can only be changed from a non-specialized instance of this recurring series.") : O("In case a conflict occurs, Google Calendar will automatically reschedule this meeting for you.") + (b ? "" : " <strong>" + O("During this Fishfood, only recurring meetings can be flexible.") + "</strong>")) + "</div>")
        };
    var wW = function(a, b, c, d, e) {
        S.call(this);
        this.ma = K(a, hj);
        this.R = b;
        this.V = c;
        this.U = d || !1;
        this.ta = e || "ep-flx"
    };
    v(wW, S);
    wW.prototype.Bc = function() {
        return !1
    };
    wW.prototype.Xa = function() {
        wW.qa.Xa.call(this);
        var a = this.b.b("div", this.ta);
        this.Ea = a;
        bF(this.ma, a, SRa, {
            id: this.hb("")
        })
    };
    wW.prototype.Ma = function() {
        wW.qa.Ma.call(this);
        this.o = this.Za("flexcheckbox");
        if (this.S = this.Za("flexregion")) this.H = new RRa(this.S), this.H.La(1, 2, void 0, -6), URa(this, !0, this.U), this.Hb(this.H);
        VRa(this);
        var a = T(this);
        a.ka(this.o, "click", this.ua);
        a.ka(this.V, "change", this.Ba)
    };
    var URa = function(a, b, c) {
        a.H && a.H.Rf(Pxa(a.ma, TRa, {
            enabled: b,
            Jf: c
        }))
    };
    wW.prototype.Ba = function() {
        VRa(this)
    };
    wW.prototype.ua = function() {
        this.R.set(this.o.checked)
    };
    var VRa = function(a) {
        var b = a.V.get(),
            c = b && !a.U;
        zJa(a.o, !c);
        sf(a.S, c ? 1 : .5);
        URa(a, b, a.U);
        !b && a.R.get() && a.R.set(!1);
        a.o.checked = a.R.get()
    };
    var WRa = function(a) {
            var b = a.name;
            return N('<th title="' + P(a.title) + '" class="ep-scg-guestcell">' + O(b) + "</th>")
        },
        XRa = function(a) {
            var b;
            b = b || {};
            var c = a.label;
            return N('<td class="wk-tzlabel" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "width:" + P(Q(a.width)) + 'px">' + O(c) + "</td>")
        },
        YRa = function(a) {
            var b;
            b = b || {};
            var c = a.top;
            return N('<div style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "height:" + P(Q(a.height)) + "px;top:" + P(Q(c)) + 'px;" class="ep-scg-nonworkinghours">&nbsp;</div>')
        },
        ZRa = function(a) {
            var b;
            b = b || {};
            var c = a.JB,
                d = a.Vz,
                e = a.headers,
                f = a.KB,
                g = a.Yw;
            a = a.Zw;
            for (var c = '<div class="ep-scg-guestheader" style="' + P(Q("padding-right")) + ":" + P(Q(c)) + 'px"><div style="' + P(Q("padding-left")) + ":" + P(Q(d)) + 'px;"><table cellpadding=0 cellspacing=0 class="ep-scg-guesttable"><tr>', k = e.length, l = 0; l < k; l++) c += O(e[l]);
            c += '</tr></table></div><table collpadding=0 cellspacing=0 class=ep-scg-allday-cont><tr><td class="ep-scg-tz-header" style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + "width:" + P(Q(d)) + 'px"><table cellpadding=0 cellspacing=0 class="wk-tzheader wk-weektop"><tr>';
            b = f.length;
            for (d = 0; d < b; d++) c += O(f[d]);
            c += '</tr></table></td><td><table cellpadding=0 cellspacing=0 class="' + P(g) + ' wk-allday"><tr>';
            f = a.length;
            for (g = 0; g < f; g++) c += O(a[g]);
            return N(c + "</tr></table></td></tr></table></div>")
        };
    var xW = function(a, b, c, d, e, f) {
        kq.call(this, Xk(a).b, b, c, d, new jq(!0));
        this.H = [];
        this.ma = f;
        this.o.ma = !0;
        Zj(a).isEnabled(81) && (a = p(this.ta, this), this.o.Ca.push(a));
        this.Ca = e
    };
    v(xW, kq);
    xW.prototype.U = function(a, b, c) {
        var d = a.b,
            e = [];
        a = [];
        1 > this.H.length ? (e.push(WRa({
            title: "",
            name: this.R.ep(c)
        })), this.b.b = a, to(this.b), this.b.b.push(N("<tr>"))) : (C(this.H, function(a) {
            a = Yn(a.displayName);
            e.push(WRa({
                title: a,
                name: a
            }))
        }), d = new qo(d, c, this.H.length, 200, 1, r($Ra, this.H)), this.b.b = a, ro(d, this.b));
        this.b.b = null;
        for (var f = this.o.R, d = [], g = 0; g < f.length; g++) {
            var k = {
                width: f[g].Nd,
                label: f[g].getTitle()
            };
            d.push(XRa(k))
        }
        b = Eh(b.year, b.month, b.Ga);
        return ZRa({
            headers: e,
            Zw: a,
            Vz: Yp(this.o) + 0,
            JB: $n(),
            KB: d,
            Yw: c.equals(b) ? "ep-scg-allday ep-scg-allday-today" : "ep-scg-allday"
        })
    };
    var $Ra = function(a, b) {
        for (var c = {}, d = a.length; d--;) c[a[d].o] = d;
        for (var e = {}, f = [], d = 0, g = b.length; d < g; d++) {
            var k = b[d],
                l = c[k.rb()];
            void 0 != l && (e[k.getId()] = l, f.push(k))
        }
        c = [];
        g = [];
        d = 0;
        for (l = a.length; d < l; ++d) c[d] = [], g[d] = [];
        d = 0;
        for (l = f.length; d < l; ++d) k = f[d], c[e[k.getId()]].push(new po(k, 1, 0));
        return {
            yx: c,
            XB: g,
            kA: f.length
        }
    };
    xW.prototype.T = function(a, b, c) {
        var d = a.b;
        a = a.o;
        var e = d.concat(a),
            f = Tb(this.H, function(a) {
                return a.o
            });
        OOa(this.ma, c, e, this.H.length);
        a = yU(c, d).concat(a);
        d = rJa(a, f);
        return this.o.render(d, c, b)
    };
    xW.prototype.ta = function(a, b, c, d) {
        c = this.Ca.o(this.H[a].email, new $h(b, Zea));
        if (!c) return null;
        a = [];
        var e = 0,
            f;
        f = Zp(d, new Mh(0, 0, 0));
        for (var g = !0, k = 0; k < c.length; k++) {
            var l = c[k];
            l.start.Ya().Wa() == b.Wa() && (e = Zp(d, l.start) - e, a.push(YRa({
                top: f,
                height: e - f
            })));
            if (l.end.Ya().Wa() > b.Wa()) {
                g = !1;
                break
            }
            f = Zp(d, l.end) - e
        }
        g && a.push(YRa({
            top: f,
            height: 1008 - e - f
        }));
        b = 42 * Wp(d);
        var m;
        m = m || {};
        m = '<div style="' + (m.Aa ? "/*" + m.Aa + "*/" : "") + "height:" + P(Q(b)) + "px;margin-bottom:-" + P(Q(b)) + 'px;">';
        b = a.length;
        for (d = 0; d < b; d++) m += O(a[d]);
        return N(m + "</div>")
    };
    var yW = function(a, b, c) {
        S.call(this);
        this.o = a;
        this.Ba = b;
        this.V = c || "ep-sac";
        this.ta = this.V + "-sel";
        this.H = new I(this)
    };
    v(yW, S);
    h = yW.prototype;
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        var a = this.b,
            b = a.b("DIV", this.V);
        this.Ea = b;
        this.ma = a.b("SPAN", "lk", "Go to event");
        b.appendChild(this.ma);
        var c = [];
        c.push(" | ");
        c.push("Show guests");
        this.R = a.b("SPAN", void 0, "all");
        c.push(": ");
        c.push(this.R);
        this.U = a.b("SPAN", void 0, "required");
        c.push(" - ");
        c.push(this.U);
        this.S = a.b("SPAN", void 0, "none");
        c.push(" - ");
        c.push(this.S);
        this.ua = a.b("SPAN", void 0, c);
        b.appendChild(this.ua);
        aSa(this);
        this.H = new I(this);
        this.H.ka(this.o, "m", this.x0)
    };
    h.Ma = function() {
        yW.qa.Ma.call(this);
        var a = T(this);
        a.ka(this.ma, "click", this.La);
        a.ka(this.R, "click", this.Fa);
        a.ka(this.S, "click", this.Na);
        a.ka(this.U, "click", this.Ra)
    };
    h.wa = function() {
        y(this.H);
        yW.qa.wa.call(this)
    };
    h.x0 = function() {
        aSa(this)
    };
    var aSa = function(a) {
            var b;
            b = a.o.size() == Za(a.o.R).length;
            var c = bSa(a),
                d;
            d = Za(a.o.R);
            d = 0 == d.length || 1 == d.length && d[0] == a.Ba;
            H(a.ua, 1 < a.o.size());
            cSa(a, a.R, b);
            cSa(a, a.S, d);
            cSa(a, a.U, c)
        },
        cSa = function(a, b, c) {
            c ? Vq(b, "lk", a.ta) : Vq(b, a.ta, "lk")
        },
        bSa = function(a) {
            var b = a.o.o(),
                c = Vb(b, function(a) {
                    return !a.sf()
                }, a);
            a = !Vb(b, function(a) {
                return a.sf() == this.o.qb(a.email)
            }, a);
            return !c || a
        };
    yW.prototype.La = function() {
        this.ya("Tb")
    };
    yW.prototype.Fa = function() {
        this.ya("Ub")
    };
    yW.prototype.Ra = function() {
        this.ya("Vb")
    };
    yW.prototype.Na = function() {
        this.ya("Wb")
    };
    var dSa = function(a, b, c) {
        c = c || {};
        return N('<img src="' + P(on(a.wz)) + '" alt="" height=22 width=22 style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'vertical-align:middle">')
    };
    var zW = function(a, b, c, d, e, f, g, k, l, m, q) {
        S.call(this);
        this.Zb = a;
        this.U = q || "ep-scg";
        this.Od = jh(a);
        this.kd = this.Od.gm();
        this.sc = q = Xk(a).b;
        this.De = mi(a);
        this.$f = Gg(a, 5);
        this.H = b;
        var u = b.R;
        this.o = b.Vd();
        this.Dc = this.o.b;
        this.Ba = this.o.Ba;
        this.S = u;
        this.Je = b.H;
        this.Ra = c || new VD(["parallel", "week"]);
        this.Ua(this.Ra);
        this.Sb = d || new PD(this.Ra, u);
        pIa(this.Ra);
        this.Db = e || new OD(a, this.S, this.U);
        this.Ua(this.Db);
        this.yb = f || new yW(this.o.o, CN(this.o).get(), void 0);
        this.Ua(this.yb);
        this.Mb = c = g || new GU(a, this.H);
        m || (m = eSa(this));
        k || (k = new Up(q, c, "scTg"), Xp(k, m), d = new so(q, c, !0), k = new LU(0, q, "scWk", d, k));
        this.ma = k;
        l || (l = new BU(8, this.U), k = new Up(q, c, "scTg", !0, "scTg-nogutter"), Xp(k, dc(m, l)), q = new so(q, c, !0), l = new xW(a, "scTg", q, k, b.Ba, l));
        this.Na = l;
        this.tf = new AU(this.b, Ga);
        this.hd = new AU(this.b, p(this.Sk, this));
        $p(this.ma.o, "sc-grid", p(function(a) {
            return a.event.getId() == this.o.getId()
        }, this), this.hd);
        this.R = new I(this);
        this.R.ka(this.Dc, "change", this.Qk);
        this.Ba && this.R.ka(this.Ba, "change", this.Ki);
        this.wc = {};
        this.ab = K(a, oj)
    };
    v(zW, S);
    h = zW.prototype;
    h.qt = null;
    h.VF = null;
    h.UF = null;
    h.sy = null;
    h.py = null;
    h.wl = null;
    h.ot = !1;
    h.qy = !1;
    h.ry = !1;
    h.Pp = null;
    h.wa = function() {
        y(this.Sb);
        y(this.ua);
        y(this.R);
        y(this.qt);
        zW.qa.wa.call(this)
    };
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        var a = this.b,
            b = Zj(this.Zb).isEnabled(29),
            c = a.b("DIV", this.U);
        this.Ea = c;
        var d = a.b("DIV", this.U + "-nr1");
        if (!b) {
            c.appendChild(d);
            var e = a.b("a", {
                "class": this.U + "-help",
                href: bH(178219) + "&ctx=tltp",
                target: "_blank"
            }, "How to use this tool");
            d.appendChild(e);
            this.yb.render(d)
        }
        d = a.b("DIV", this.U + "-nr2");
        c.appendChild(d);
        this.Ra.render(d);
        b && fSa(this, d);
        gSa(this, d);
        this.Db.render(d);
        this.Va = a.b("DIV", this.U + "-header");
        c.appendChild(this.Va);
        b = !b;
        d = "";
        ud && (d = "wbkt", b && (d += " wbkt-legacy"));
        this.V =
            a.b("DIV", d + " " + (this.U + "-grid"));
        this.Fa();
        c.appendChild(this.V);
        ud && b && (a = a.b("DIV", {
            id: "btmBorderSch",
            "class": "wk-border"
        }), c.appendChild(a));
        this.R.ka(this.S, "change", this.JW);
        this.R.ka(this.yb, "Tb", this.u0);
        this.R.ka(this.yb, "Ub", this.XF);
        this.R.ka(this.yb, "Vb", this.ZF);
        this.R.ka(this.yb, "Wb", this.YF);
        this.R.ka(this.Sb, "change", this.OW);
        this.R.ka(this.H, "pb", this.Fa);
        this.R.ka(this.H, "ob", this.Fa);
        this.R.ka(this.H, "qb", this.Fa);
        this.R.ka(window, "resize", this.v0);
        c = T(this);
        c.ka(this.Db, "Ba", this.NW);
        c.ka(this.Db, "Ca", this.IW);
        c.ka(this.Db, "Da", this.DW);
        c.ka(this.Ra, "action", this.QW);
        this.Pp && (this.R.ka(this.Pp, "change", this.LW), this.R.ka(this.Pp, ["hide"], function(a) {
            a.stopPropagation()
        }))
    };
    var fSa = function(a, b) {
            var c = new lM;
            c.Ie(new NJ("Everyone", "everyone"));
            c.Ie(new NJ("Required", "required"));
            c.fh(0);
            a.Ua(c);
            c.render(b);
            Fc(c.ha(), a.U + "-show-guests-select");
            Fc(c.ad().ha(), a.U + "-show-guests-menu");
            a.Pp = c
        },
        gSa = function(a, b) {
            if (a.H.ta) {
                var c = a.b;
                a.La = c.b("SPAN", {
                    className: a.U + "-rg-sw button-strip goog-inline-block"
                });
                H(a.La, !1);
                Km(a.La, dSa, {
                    wz: LF("spinner.gif")
                });
                b.appendChild(a.La);
                c = c.b("SPAN", a.U + "-rg button-strip goog-inline-block");
                b.appendChild(c);
                var d = ND.va();
                a.ta = new KD("Refresh all",
                    d);
                a.ta.Qc("Check availability of guests not using Google Calendar");
                a.Ua(a.ta);
                a.ta.render(c)
            }
        };
    zW.prototype.Hi = function(a) {
        a = a.target;
        a.hm && a.hm() && this.La && H(this.La, !1)
    };
    zW.prototype.Rk = function() {
        hSa(this)
    };
    var hSa = function(a) {
        if (!a.H.ta) throw Error("Eb");
        gPa(a.H) && (a.ta && a.ta.Ab(!1), a.La && H(a.La, !0), hPa(a.H))
    };
    h = zW.prototype;
    h.v0 = function() {
        this.kb && E && (document.body.className = document.body.className)
    };
    h.NW = function() {
        this.ab.nb("find_a_time_today_clicked")
    };
    h.IW = function() {
        this.ab.nb("find_a_time_previous_clicked")
    };
    h.DW = function() {
        this.ab.nb("find_a_time_next_clicked")
    };
    h.QW = function() {
        var a = QD(this.Ra);
        this.ab.nb("parallel" == a ? "find_a_time_day_view_clicked" : "find_a_time_week_view_clicked")
    };
    h.JW = function() {
        iSa(this);
        this.Fa()
    };
    var iSa = function(a) {
        var b = eSa(a);
        a.ma && Xp(a.ma.o, b);
        a.Na && Xp(a.Na.o, b)
    };
    h = zW.prototype;
    h.u0 = function() {
        this.ab.nb("find_a_time_go_to_event_clicked");
        AW(this)
    };
    h.XF = function() {
        this.ab.nb("find_a_time_show_all_guests_clicked");
        hQ(this.o.o, !0)
    };
    h.ZF = function() {
        this.ab.nb("find_a_time_show_required_guests_clicked");
        var a = this.o.o;
        C(a.o(), function(b) {
            a.setVisible(b.email, !b.sf())
        })
    };
    h.YF = function() {
        this.ab.nb("find_a_time_show_none_guests_clicked");
        var a = CN(this.o).get();
        hQ(this.o.o, !1, [a])
    };
    h.LW = function() {
        switch (this.Pp.lb()) {
            case "everyone":
                this.XF();
                break;
            case "required":
                this.ZF();
                break;
            case "none":
                this.YF()
        }
    };
    h.OW = function() {
        this.Fa()
    };
    var jSa = function(a, b, c) {
        return (a = lw("ca-evp", a, c)) && b == Ec(a, "drag-chip-wrapper") ? a : null
    };
    h = zW.prototype;
    h.yW = function(a) {
        a = kw(a);
        (a = this.wc[a]) && a.getId() != this.o.getId() && (kSa(this, [a], a.rb()), this.ot = !0)
    };
    h.zW = function() {
        this.wl.Eb();
        this.ot = !1
    };
    h.EW = function() {
        BW(this) || lSa(this)
    };
    h.HW = function(a, b) {
        if (BW(this)) {
            var c;
            c = b.clientX;
            var d = CW(this),
                d = sw(d.ha());
            c = pv(CW(this), c - d.x);
            c = PU(this.H, !0)[c] || null;
            this.Ib != c && (this.Ib = c, lSa(this))
        }
    };
    h.FW = function() {
        this.Ib = null;
        this.ot || this.wl.Eb()
    };
    var lSa = function(a) {
            var b = a.Ib && a.Ib.o,
                c = QU(a.H, HP(a.o.b), b);
            c && c.length ? (c.sort(p(a.Cg, a)), kSa(a, c, b, 1 == c.length ? "1 conflict" : "" + c.length + " conflicts")) : a.wl.Eb()
        },
        kSa = function(a, b, c, d) {
            var e;
            if (c) {
                e = tQ(a.Je, c).b;
                var f = HF(a.$f, c);
                c = f ? In(f) : (f = a.o.o.b(c)) ? UP(f) : c
            } else e = Uj(39), c = d || "Conflicts", d = void 0;
            a = a.wl;
            a.o.cancel();
            a.b ? a.U(b, e, c, d) : a.H.Xi(b, e, c, d)
        };
    zW.prototype.Fa = function() {
        this.kb && mSa(this);
        var a = BW(this),
            b;
        b = this.S;
        b = ai(b.first, gk(b));
        b = RU(this.H, b);
        a || b.push(this.o.Fa);
        b.sort(this.Mb.Zp());
        var c = b;
        this.wc = {};
        for (var d = 0; d < c.length; d++) this.wc[va(c[d])] = c[d];
        var d = this.S,
            c = d.first,
            e = gk(d),
            d = li(this.De);
        a ? (a = PU(this.H, !0), this.Na.H = a, b = bq(b, c, 1)[0], a = lq(this.Na, b, d, c, 1, !1), Im(this.Va, a.Km), this.Na.H = []) : (a = lq(this.ma, b, d, c, e, !1), b = this.Va, c = a.Km, c = N('<div class="' + P(this.U + "-weektop") + '">' + O(null == c ? "" : c) + "</div>"), Im(b, c));
        Im(this.V, a.FB);
        this.kb && (nSa(this), a = this.b.ha(pq(this.ma))) && (b = rf(this.b.ha(mq(this.ma))).height, gf(a, "height", b + "px"));
        this.kb && this.ta && this.ta.Ab(!0);
        this.ya("resize")
    };
    zW.prototype.Qk = function() {
        this.qy = !0;
        AW(this, !0)
    };
    zW.prototype.Ki = function() {
        iSa(this);
        this.ry = !0;
        AW(this, !0)
    };
    var eSa = function(a) {
            if (a.Ba && a.Ba.am()) {
                var b = [];
                RP(a.Ba) && b.push(QP(a.Ba));
                b.push(a.Ba.Se());
                a = Hp(b, IP(a.S), a.kd, a.sc, oSa, pSa)
            } else a = Hp(a.Od.Vf(), IP(a.S), a.kd, a.sc, Jp, Kp);
            return a
        },
        AW = function(a, b) {
            var c = oy(a.o.b),
                d = c.start.Ya();
            a.S.focus = d;
            a.kb && (wQ(IP(a.S), c) ? b && a.Fa() : a.S.hg(d), c = 1 <= oy(a.o.b).duration.Ga, d = oy(a.o.b), !c && a.S.contains(d.start.Ya()) && qSa(a))
        },
        mSa = function(a) {
            y(a.Sa);
            a.Sa = null;
            y(a.wl);
            a.Ib = null;
            a.ot = !1;
            a.wl = null;
            y(a.sy);
            a.sy = null;
            y(a.py);
            a.py = null;
            y(a.qt);
            y(a.VF);
            y(a.UF);
            ix(a.V)
        },
        BW = function(a) {
            return "parallel" == QD(a.Sb.b)
        },
        CW = function(a) {
            return (BW(a) ? a.Na : a.ma).o.S
        },
        nSa = function(a) {
            var b = CW(a);
            Tp(b, a.V.firstChild);
            var c = BW(a),
                d = 1 <= oy(a.o.b).duration.Ga;
            if (c) {
                var e = PU(a.H, !0).length;
                rSa(e, a.V, a.Va)
            } else a.V.style.overflowX = "", a.Va.style.overflowX = "";
            var e = {},
                f = a.o.Fa;
            e[va(f)] = f;
            f = new tU(f, p(a.Dc.set, a.Dc));
            G(f, ["sb", "tb", "ub"], p(a.ih, a));
            a.sy = new hC(a.Zb, b, e, p(a.$d, a, a.tf), a.Mb, f);
            if (!BW(a)) {
                var g = a.S;
                a.py = new cC(a.Va, new OB(a.b.ha(mq(a.ma)), new mp(g.focus, g.first, 1, gk(g))),
                    e, a.ma.b, a.Mb, !0, f)
            }
            e = a.ha();
            a.wl = new CU(a.Zb, e, a.sc);
            a.Sa = new IB(e);
            MB(a.Sa, r(jSa, e, !1), p(a.yW, a), p(a.zW, a));
            MB(a.Sa, r(jSa, e, !0), p(a.EW, a), p(a.FW, a), p(a.HW, a));
            1 < gk(a.S) && (LB(a.Sa, Vw, p(a.Fi, a)), MB(a.Sa, Vw, Sw, Rw));
            c && !d && (a.qt = a.$d(a.hd, a.o.Fa), a.qt.Br(b));
            b = no(a.o.Fa);
            b = Fe(a.b, "*", b, a.ha());
            a.VF = sSa(a, b[0] || null);
            a.UF = sSa(a, b[1] || null)
        },
        sSa = function(a, b) {
            if (!b) return null;
            1 <= oy(a.o.b).duration.Ga ? Fc(b, "drag-chip") : (b = b.firstChild, b.style.position = "relative");
            var c = new xU(b, "sc-");
            KOa(c);
            return c
        };
    zW.prototype.Fi = function(a) {
        a = Uw(a);
        this.S.focus = a;
        this.Sb.o("parallel")
    };
    zW.prototype.ih = function(a) {
        var b;
        a: {
            b = BW(this);
            switch (a.type) {
                case "sb":
                    b = b ? "find_a_time_day_view_chip_dragged" : "find_a_time_week_view_chip_dragged";
                    break a;
                case "tb":
                    b = b ? "find_a_time_day_view_chip_resized" : "find_a_time_week_view_chip_resized";
                    break a;
                case "ub":
                    b = b ? "find_a_time_day_view_chip_replaced" : "find_a_time_week_view_chip_replaced";
                    break a
            }
            b = void 0
        }
        var c = PU(this.H, !0).length;
        this.ab.wf(b, c);
        var d;
        switch (a.type) {
            case "sb":
            case "ub":
                d = VO.Ow;
                break;
            case "tb":
                d = VO.hw
        }
        d && this.ya(new IQ(d))
    };
    zW.prototype.$d = function(a, b) {
        BW(this);
        return new RB(b, a, 42, !0)
    };
    var qSa = function(a, b) {
        var c = a.o.b.get(),
            d = c.start.tb(),
            e = c.end.tb();
        d.Ya().equals(e.Ya()) || (e = bx(d.Ya(), new Mh(23, 59, 0)));
        c = [];
        a.S.contains(d) && c.push(Nh(d) - 60);
        a.S.contains(e) && c.push(Nh(e) + 60);
        c.length && (d = CW(a), d = iq(d, a.V.clientHeight, c, a.V.scrollTop), b ? a.V.scrollTop = d : a.V.scrollTop != d && (y(a.ua), a.ua = new pU(a.V, d, function(a, b, c) {
            c = Math.pow(.5, c / 150);
            return Math.round(a * c + b * (1 - c))
        }), a.ua.start()))
    };
    zW.prototype.Ma = function() {
        zW.qa.Ma.call(this);
        nSa(this);
        if (this.ta) {
            var a = T(this);
            a.ka(this.ta, "action", this.Rk);
            a.ka(this.H, ["Z", "$", "aa"], this.Hi);
            hSa(this)
        }
        this.qy || this.ry ? AW(this, !0) : qSa(this, !0)
    };
    zW.prototype.Jb = function() {
        mSa(this);
        this.ry = this.qy = !1;
        zW.qa.Jb.call(this)
    };
    var rSa = function(a, b, c) {
        60 * a > b.offsetWidth ? (b.style.overflowX = "scroll", c.style.overflowX = "hidden", a *= 60, b.firstChild.style.width = a + "px", c.firstChild.style.width = a + "px", G(b, "scroll", function() {
            c.scrollLeft = b.scrollLeft
        })) : (b.style.overflowX = "", c.style.overflowX = "")
    };
    zW.prototype.Sk = function(a) {
        return !!QU(this.H, wn(a)).length
    };
    zW.prototype.Cg = function(a, b) {
        return this.Mb.Cx(a, b) || zn(Fa(0), a, b)
    };
    var pSa = new Ip("tg-times-start", "tg-time-start", "tg-time-start-last"),
        oSa = new Ip("tg-times-end", "tg-time-end", "tg-time-end-last");
    var tSa = function(a) {
        x.call(this);
        this.b = a;
        this.Da = new I(this);
        this.Hb(this.Da);
        this.o = new Fs;
        this.Hb(this.o);
        this.Da.ka(this.o, "resize", this.H)
    };
    v(tSa, x);
    tSa.prototype.H = function() {
        if (this.b.kb) {
            var a = this.b.R,
                b = this.b.o.ha(),
                c = this.o,
                c = (c.b ? c.b.clone() : null).height,
                d = of(b).y,
                a = yf(a),
                a = c - d - a.bottom,
                a = Math.max(a, 500),
                d = a = Math.min(a, 1130),
                a = this.b.o.V,
                e = a.parentNode,
                c = a.firstChild,
                f = of(a).y,
                e = of(e).y,
                f = f - e,
                e = aw(a),
                d = d - f - e.top - e.bottom,
                c = rf(c).height;
            0 < c && c--;
            d = Math.min(d, c);
            0 >= d || (c = d + "px", hf(a, "height") != c && gf(a, "height", c));
            if (a = F("btmBorderSch")) a.style.width = b.offsetWidth - 16 + "px"
        }
    };
    var DW = function(a, b, c, d) {
        S.call(this);
        this.H = c || new CS(a, b.Vd(), b.H, !1, !1, !0, !0);
        this.Ua(this.H);
        this.o = d || new zW(a, b);
        this.Ua(this.o);
        this.S = new tSa(this);
        this.Hb(this.S)
    };
    v(DW, S);
    DW.prototype.Bc = function() {
        return !0
    };
    DW.prototype.Xa = function() {
        var a = this.b,
            b = a.b("DIV", "ep-sp");
        this.Ea = b;
        this.R = a.b("DIV", "ep-sp-sched");
        this.U = a.b("DIV", "ep-sp-guests");
        a = a.b("DIV", "ep-sp-panel", this.U, this.R);
        b.appendChild(a)
    };
    DW.prototype.Ma = function() {
        DW.qa.Ma.call(this);
        this.o.kb || this.o.render(this.R);
        this.H.kb || this.H.render(this.U);
        this.S.H();
        this.ya("show")
    };
    DW.prototype.wa = function() {
        y(this.H);
        y(this.o);
        DW.qa.wa.call(this)
    };
    var EW = function(a, b, c, d) {
        S.call(this);
        this.R = a;
        this.H = b;
        this.Va = new DQ(b);
        this.Hb(this.Va);
        this.Na = cMa(a, this.H, d);
        this.Zb = c;
        this.Fa = Zj(M()).isEnabled(29);
        c = c.create(b);
        uSa(c);
        this.La = this.H.V;
        this.Ba = 3 == this.La || 2 == this.La;
        this.ma = null;
        this.Fa || !this.Ba || b.Ra || (this.ma = new DW(a, c));
        this.Db = this.R.get(Dg);
        this.S = lQ(b.vb, b.Fb());
        this.Hb(this.S);
        this.ab = K(a, oj);
        this.Ra = c;
        this.Ra.oe(this);
        this.Sb = kQ(this.Db, b, this.S);
        this.ua = new FV(a, this.H, c.H, new zV(c, c.ua, c.Ba), this.Sb, this.S);
        this.Ib = new uW(a, b);
        this.Ua(this.Ib, !0);
        b.Sb && (c = new BT(O("This event was created from an appointment slot.")), this.Ua(c, !0));
        d = (c = b.Oa) ? c.b : void 0;
        d = n(d) && 0 == d.get();
        var e = b.Sb;
        !b.Ra && (c && !c.xg() && !e || e && d) && (d = hh(a).o, e = b.Fa.Ne != d.getEmail(), this.Sa = new tW(this.R, c, e, b.T.H.lc != d.lc), this.Ua(this.Sa, !0));
        c = xT(this.H);
        var e = this.H.ma,
            f = this.Ba || e.get() ? "Untitled event" : "(No title)";
        d = new tT(e, f);
        var g = 1 == c,
            e = g ? null : new oT(e, f, g, void 0, void 0, "Event title");
        this.Jm = new wT(d, c, e);
        this.Ua(this.Jm, !0);
        Fc(this.Jm.ha(), "ep-title");
        this.V = new S;
        this.Ua(this.V, !0);
        e = p(this.sW, this);
        c = new $B(b.b, b.Sa);
        d = xT(b);
        e = p(wNa, null, a, e, c, b.Ba, null, void 0, void 0, void 0);
        this.o = ENa(a, c, e, d);
        this.V.Ua(this.o, !0);
        Fc(this.o.ha(), "ep-drs");
        Fc(this.V.ha(), "ep-dpc");
        if (d = b.S) this.yb = new YS(a, d, !b.Fb(), b.b, b.Ba), this.V.Ua(this.yb, !0);
        c = b.Jf() || 6 == b.yb;
        d = d ? d.R : c ? new ZB(!0) : null;
        aQ(b) && d && (this.Mb = new wW(a, b.H.T, d, c), this.V.Ua(this.Mb, !0));
        this.V.ha().appendChild(this.b.b("DIV", "clearFloats", " "));
        !this.Ba || this.H.Ra || this.Fa ? this.Ua(this.ua, !0) :
            (a = [this.ua, this.ma], b = new MR, b.S = !1, b = new IR(["Event details", "Find a time"], 0, b, "ep-ts"), T(this).ka(b, "Wa", p(this.rW, this, b)), this.wB = new pW(b, a, void 0, "ep-tp"), this.Ua(this.wB, !0));
        this.U = null;
        this.Ba && (this.U = new yD("You must be online to edit this event."), this.Ua(this.U, !0), this.Sa && (this.Sa.H = this.U));
        this.ta = null
    };
    v(EW, S);
    h = EW.prototype;
    h.XL = !1;
    h.Jm = null;
    h.wB = null;
    h.Q1 = function() {
        this.Na && dS(this.Na)
    };
    h.Bc = function() {
        return !1
    };
    h.Xa = function() {
        this.Ea = this.b.b("DIV", this.Ba ? "ep" : "ep-ro ep")
    };
    h.Ma = function() {
        EW.qa.Ma.call(this);
        this.ha().setAttribute("data-eid", this.H.getId());
        var a = T(this);
        this.Fa || a.ka(this.ua, "db", p(this.kI, this, 0));
        this.Fa && (a.ka(this.ua, "fb", this.qW), a.ka(this, OKa, this.J1));
        a.ka(this, sR, this.o0);
        this.ma && !this.Fa && (a.ka(this.ma, "db", p(this.kI, this, 1)), a.ka(this.ma, "show", p(this.Q1, this)));
        var b = this.H.S;
        b && (a.ka(b, "change", this.zI), this.zI());
        (b = this.yb) && a.ka(b, "gb", this.e2);
        b = pi(this.R);
        Sf(a, b, "b", this.pW, !1, this);
        a.ka(this.H.R, "Ra", this.e0);
        a.ka(this.o, "change",
            this.T_);
        qi(this.R) || vSa(this, !1)
    };
    h.Jb = function() {
        var a = this.S;
        if (0 != a.b.length) {
            var b = ok.va();
            Array.prototype.push.apply(b.o, a.b);
            a.H && ca.console.log("[gcal.suggest.ImpressionRecorderImpl] " + a.b.length + " impressions are planned for uploading with the next ping request");
            a.b = []
        }
        EW.qa.Jb.call(this)
    };
    h.focus = function() {
        3 == this.La ? this.Jm.o.ha().focus() : this.Ib.focus()
    };
    h.o0 = function() {
        MP(this.S, UO.ow);
        wSa(this)
    };
    h.T_ = function(a) {
        a.target == this.o.o && (a = this.S, vP(a, uP(a, UO.nw, null, null, null)))
    };
    var wSa = function(a) {
        var b = a.H.clone(),
            c = a.Zb.create(b);
        uSa(c);
        var d = rIa(a.Db, c.R, b, a.S);
        d.Wp();
        var b = kQ(a.Db, b, a.S),
            e = new qV(a.R, c, d, b);
        a.Ua(e);
        e.render(a.b.ha("calmaster"));
        T(a).ka(e, pOa, a.P1).ka(e, "hide", p(function() {
            this.removeChild(e, !0);
            this.ya("Yb")
        }, a));
        a.ya("Xb")
    };
    h = EW.prototype;
    h.P1 = function(a) {
        aJa(this.Va, p(function() {
            this.H.og(a.o)
        }, this))
    };
    h.e2 = function() {
        var a = this.o.o;
        if (a) {
            var b = this.H.S.b.get(),
                c = this.H.Ba.Se();
            c && (b = JM(c, b.tb()));
            RE(a, b)
        }
    };
    h.zI = function() {
        var a = this.o.o;
        if (a instanceof lT) {
            var b = !this.H.S.R.get();
            a.kd = b
        }
    };
    h.pW = function(a) {
        vSa(this, a.Ob)
    };
    h.e0 = function() {
        bIa(this.H.R) && !this.XL && (this.XL = !0, ERa())
    };
    var vSa = function(a, b) {
        if (a.U)
            if (zD(a.U, a.Jm, b), zD(a.U, a.V, b), zD(a.U, a.wB, b), b) a.U.Eb();
            else {
                var c = lf(a.Jm.ha()),
                    d = xf(a.Jm.ha(), "margin"),
                    e = rf(a.ha());
                a.U.show(0, c.y - d.top, e.width, e.height)
            }
    };
    h = EW.prototype;
    h.rW = function(a) {
        a = 0 == a.o;
        this.ab.wf(a ? "event_page_event_details_tab_clicked" : "event_page_find_a_time_tab_clicked", PU(this.Ra).length);
        this.ya(a ? "Yb" : "Xb");
        !Zj(this.R).isEnabled(29) && Zj(this.R).isEnabled(30) && (this.ta && this.ta.Pa(), a ? this.ta = null : Hg(this.R, 820).addCallback(function(a) {
            this.ta = rIa(a, this.Ra.R, this.H, lQ(this.H.vb, this.H.Fb()));
            this.ta.Wp()
        }, this))
    };
    h.kI = function(a) {
        var b = xSa(this),
            c = b[a];
        C(b, function(a) {
            a != c && KR(a.H, c.H.o)
        })
    };
    h.qW = function() {
        var a = new AQ;
        a.b = !1;
        MP(this.S, UO.Sr, void 0, a)
    };
    h.J1 = function(a) {
        var b = new AQ;
        b.H = a.email;
        a = this.S;
        vP(a, uP(a, UO.Lw, null, null, b || null))
    };
    h.sW = function() {
        var a = jh(this.R),
            b = new uE(a.Ed());
        return new xE(this.R, b, a.ci())
    };
    var xSa = function(a) {
        var b = [a.ua.R];
        a.ma && b.push(a.ma.H);
        return b
    };
    var zSa = function(a, b) {
            var c = [],
                d = qw(a),
                e = d.getName(),
                f = b.T.H,
                g = zB.va(),
                f = JP(g, f.getEmail()),
                k = d.vF;
            e && f == e && k && (c = Tb(eQ(b.R), function(a) {
                return a.email
            }), c = qIa(g, c, d));
            return r(ySa, c)
        },
        ySa = function(a, b, c, d) {
            if (a.length) {
                b = r(ASa, c, d);
                10 < a.length && (c = a.length - 10, a = hc(a, 0, 10), a.push(CH(c)));
                c = "The following attendees are from outside your organization.<br>Are you sure you would like to invite them?<ul>";
                d = a.length;
                for (var e = 0; e < d; e++) c += "<li>" + O(a[e]) + "</li>";
                a = N(c + "</ul>");
                a = rm(a);
                c = (new Kw).set("yes", "Invite external guests", !0).set("cancel", "Continue editing");
                hv(new Us, b, "Attendees from outside your organization", a, c)
            } else c()
        },
        ASa = function(a, b, c) {
            "yes" == c.key ? a() : b()
        };
    var FW = function(a) {
        this.R = bj(a);
        this.b = {}
    };
    v(FW, TPa);
    FW.prototype.H = function(a, b, c, d) {
        this.b = {};
        for (var e = [], f = 0; f < a.length; f++) e.push(a[f].email);
        a = p(this.T, this, c, d);
        for (var f = [], g = 0; g < e.length; g++) f.push("dtid", e[g]);
        f.push("droi", c.toString());
        f.push("ctz", b);
        this.R.send("workinghours", f, 48, a, d, void 0, void 0, 1)
    };
    FW.prototype.o = function(a, b) {
        var c = this.b[a];
        if (!c) return null;
        if (b) {
            for (var d = [], e = 0; e < c.length; e++) wQ(b, c[e]) && d.push(c[e]);
            return d
        }
        return ec(c)
    };
    FW.prototype.T = function(a, b, c) {
        a = Qa(c);
        for (var d in a) {
            c = [];
            for (var e = 0; e < a[d].length; e++) c.push(Ux(a[d][e]));
            this.b[d] = c
        }
        b()
    };
    var BSa = function(a, b, c, d, e) {
            c = a.H.H;
            if (a.Fb() || !c.ub()) d();
            else if (1 == c.get()) {
                c = !1;
                var f = a.o,
                    g = f.size();
                1 == g ? c = f.nc()[0] == CN(a).get() : 1 < g && (c = !0);
                c ? b(d, e) : d()
            } else d()
        },
        CSa = function(a, b) {
            var c = (new Kw).set("yes", "OK", !0).set("no", "Cancel", !1, !0);
            hv(new Us, function(c) {
                "yes" == c.key ? a() : b()
            }, "Are you sure?", jd("You are about to allow event modification by guests. This will result in guests losing any overrides that they may have created. Continue?"), c)
        };
    var HW = function(a, b, c) {
        x.call(this);
        this.H = null;
        this.R = !1;
        this.b = null;
        this.ab = a;
        this.o = b;
        this.Da = new I(this);
        this.Hb(this.Da);
        this.Da.ka(c, "Xb", this.T).ka(c, "Yb", this.S);
        this.U = [GW("ef_edited_with_fat_with_guests_only", !1, !0, !1, !0), GW("ef_edited_with_fat_with_rooms_only", !1, !1, !0, !0), GW("ef_edited_with_fat_with_guests_and_rooms", !1, !0, !0, !0), GW("ef_edited_with_fat_with_no_guests_or_rooms", !1, !1, !1, !0), GW("ef_edited_no_fat_with_guests_only", !1, !0, !1, !1), GW("ef_edited_no_fat_with_rooms_only", !1, !1, !0, !1), GW("ef_edited_no_fat_with_guests_and_rooms", !1, !0, !0, !1), GW("ef_edited_no_fat_with_no_guests_or_rooms", !1, !1, !1, !1), GW("ef_created_with_fat_with_guests_only", !0, !0, !1, !0), GW("ef_created_with_fat_with_rooms_only", !0, !1, !0, !0), GW("ef_created_with_fat_with_guests_and_rooms", !0, !0, !0, !0), GW("ef_created_with_fat_with_no_guests_or_rooms", !0, !1, !1, !0), GW("ef_created_no_fat_with_guests_only", !0, !0, !1, !1), GW("ef_created_no_fat_with_rooms_only", !0, !1, !0, !1), GW("ef_created_no_fat_with_guests_and_rooms", !0, !0, !0, !1), GW("ef_created_no_fat_with_no_guests_or_rooms", !0, !1, !1, !1)]
    };
    v(HW, x);
    HW.prototype.start = function() {
        this.H = t()
    };
    HW.prototype.T = function() {
        this.R = !0;
        this.b = t()
    };
    HW.prototype.S = function() {
        DSa(this, t())
    };
    var DSa = function(a, b) {
            a.b && (ws(a.ab, "ef_find_a_time_session", b - a.b), a.b = null)
        },
        FSa = function(a) {
            if (a.o.ub()) {
                var b = t();
                ws(a.ab, ESa(a), b - a.H);
                a.H = null;
                DSa(a, b)
            }
        },
        ESa = function(a) {
            var b = a.o.R,
                c = {
                    Fb: a.o.Fb(),
                    vq: 0 < dQ(b).length,
                    H2: 0 < dIa(b).length,
                    d$: a.R
                };
            return Sb(a.U, function(a) {
                return DF(a.o, c)
            })[0].b
        },
        GSa = function(a, b) {
            this.b = a;
            this.o = b
        },
        GW = function(a, b, c, d, e) {
            return new GSa(a, {
                Fb: b,
                vq: c,
                H2: d,
                d$: e
            })
        };
    var HSa = function(a) {
        a = !!a.I2;
        return N((a ? O("Some changes made to this event cannot be saved while you are offline.") : O("Changes made to this event cannot be saved while you are offline.")) + "<br><br>" + (a ? O("You can stay on the page and wait until you are back online, or save your response now and discard other changes.") : O("You can stay on the page and wait until you are back online, or discard your changes.")))
    };
    var ISa = function(a, b, c, d, e) {
            a.Fb() || !a.ub() ? d() : a.ub(function(b) {
                return b != a.Oa
            }) ? (c = a.Oa.ub(), b(c, d, e)) : d()
        },
        JSa = function(a, b, c) {
            var d = (new Kw).set("yes", a ? "Only save response" : "Discard changes", !0).set("no", "Stay on page", !1, !0);
            a = HSa({
                I2: a
            });
            hv(new Us, function(a) {
                "yes" == a.key ? b() : c()
            }, "Unable to save changes", rm(a), d)
        };
    var KSa = function(a) {
        a = a.e7;
        for (var b = "", c = UE(new il("{NUM,plural,=1{You do not have permission to see the members of this group. You can invite this group to the event, but you cannot view the members' schedules and you will not receive individual replies from the members. Also, the event will not keep up with changes in group membership.}other{You do not have permission to see the members of these groups. You can invite these groups to the event, but you cannot view the members' schedules and you will not receive individual replies from the members. Also, the event will not keep up with changes in group membership.}}"), {
                NUM: a.length
            }), b = b + "<b>", d = a.length, e = 0; e < d; e++) b += O(a[e]) + (e != d - 1 ? ", " : "");
        return N(b + ("</b><br><br>" + c))
    };
    var IW = function(a, b, c) {
        this.o = a;
        this.b = b;
        this.kf = c
    };
    IW.prototype.getEmail = function() {
        return this.o
    };
    var JW = function(a, b, c, d, e, f, g, k, l) {
        J.call(this);
        this.Fa = a;
        this.V = b;
        this.ua = b.b;
        this.b = b.o;
        this.Ra = c;
        this.Ba = d;
        this.Oa = e;
        this.Db = f;
        this.H = g;
        this.R = k;
        this.ta = l;
        this.U = this.T = this.S = this.o = null;
        this.Na = {};
        this.ma = !1;
        this.Da = new I(this);
        this.Hb(this.Da);
        this.Da.ka(this.b, "m", this.Va).ka(CN(this.V), "change", this.vb).ka(this.R, "change", this.Tb).ka(this.ua, "change", this.yb)
    };
    v(JW, J);
    var LSa = function(a, b, c, d) {
        c.Wa() >= d.Wa() || (c = new $h(c, d), a.push(new IW(b, c, 0)))
    };
    JW.prototype.Va = function(a) {
        var b = a.o;
        (b.Ia || []).length + (b.k || []).length + (b.l || []).length + (b.Ha || []).length && this.o && (!this.Ca && this.S && vQ(this.S, this.o) ? (a = Tl(a, "Ia"), MSa(this, NSa(this, this.o), a, void 0)) : BV(this, this.o), this.ya("pb"));
        (b.k || []).length && this.T && AV(this, this.T)
    };
    JW.prototype.vb = function() {
        this.o && BV(this, this.o)
    };
    var NSa = function(a, b) {
        b = new $h(b.start.Ya(), b.end.Ya());
        return a.o ? vQ(a.o, b) ? a.o : a.o.hq(b) : b
    };
    JW.prototype.Tb = function() {
        uSa(this)
    };
    var uSa = function(a) {
        var b = IP(a.R);
        a.S && vQ(a.S, b) || BV(a, b);
        b = OSa(a).hq(b);
        a.U && vQ(a.U, b) || AV(a, b)
    };
    JW.prototype.yb = function() {
        var a = OSa(this);
        this.U && vQ(this.U, a) || AV(this, a)
    };
    var OSa = function(a) {
            return new $h(a.ua.wb().Ya(), a.ua.Xb().Ya())
        },
        BV = function(a, b, c) {
            MSa(a, NSa(a, b), PU(a), c)
        },
        AV = function(a, b) {
            var c = PSa,
                d;
            d = b;
            d = new $h(d.start.Ya(), d.end.Ya());
            d = a.T ? vQ(a.T, d) ? a.T : a.T.hq(d) : d;
            c(a, d)
        },
        MSa = function(a, b, c, d) {
            if (!a.ma) {
                for (var e = [], f = 0, g = c.length; f < g; ++f)
                    if (108 != c[f].zc()) {
                        var k = c[f].email,
                            l = a.Na[c[f].o];
                        l ? (e.push(new IW(k, l.b, l.kf)), LSa(e, k, b.start.Ya(), l.b.start.Ya()), LSa(e, k, l.b.end.Ya(), b.end.Ya())) : LSa(e, k, b.start.Ya(), b.end.Ya())
                    }
                e.length && (e = a.Ra.b(e, a.Db), e instanceof SV && d && (e.o = 2), a.o = b, yv(a.Da, e, "Z", p(a.La, a, b, c)), bv(a.Da, e, "$", a.Sa, void 0), yv(a.Da, e, "aa", p(a.yc, a, b, c)), a.Ca = e, e.start())
            }
        };
    JW.prototype.La = function(a, b, c) {
        this.ya(c);
        c = c.target;
        if (this.Ca == c) {
            this.Ca = null;
            c = c.Dn();
            if (!c) throw Error("Gb");
            var d = c.b;
            this.b.Hc();
            try {
                QSa(this, a, b, c)
            } finally {
                this.ma = !0;
                bb(c.H) || (this.ma = !1);
                try {
                    this.b.Ec()
                } finally {
                    this.ma = !1
                }
            }
            this.Oa.add(d);
            this.S = a;
            this.ya("ob")
        }
    };
    var QSa = function(a, b, c, d) {
            var e = d.H,
                f = d.V,
                g = d.o,
                k = d.ma;
            RSa(a, b, c, d);
            Ua(e, function(a, b) {
                d.R ? C(a, function(a) {
                    var b = d.R[a],
                        c = this.b.b(a);
                    c ? C(b, function(a) {
                        gIa(this.b, c, a)
                    }, this) : this.b.add(new WM(a, void 0, void 0, void 0, void 0, void 0, void 0, !0, b))
                }, this) : (this.b.remove(b), TM(this.b, Tb(a, function(a) {
                    return new WM(a)
                })))
            }, a);
            Ua(e, function(a, b) {
                gQ(this.b, b, !0)
            }, a);
            C(f, function(a) {
                gQ(this.b, a, !1)
            }, a);
            C(d.Ca, function(a) {
                gQ(this.b, a, !1)
            }, a);
            C(d.U, function(a) {
                gQ(this.b, a, !1);
                hIa(this.b, a)
            }, a);
            b = 0;
            for (c = k.length; b <
                c; ++b) a.b.setVisible(k[b], !1);
            e = a.b;
            b = 0;
            for (c = g.length; b < c; ++b) {
                var l = $M(e, g[b]);
                l && jIa(a.b, l)
            }
            f = Sb(f, function(a) {
                a = this.b.b(a);
                return !!a && !XM(a)
            }, a);
            0 < f.length && (g = new uF("comment-dialog"), g.Vg = !0, zF(g, WC()), g.setTitle("Group members are hidden"), g.xf(rm(KSa({
                e7: f
            }))), g.setVisible(!0));
            0 < k.length && Yb(k, function(a) {
                a = this.b.b(a);
                return !!a && !XM(a)
            }, a) && (g = new uF("comment-dialog"), g.Vg = !0, zF(g, WC()), g.xf(jd("We did not fetch the schedules for all your guests. Click on a name to try again for that guest.")),
                g.setVisible(!0))
        },
        RSa = function(a, b, c, d) {
            var e = d.S,
                f = d.T;
            d = d.kf;
            for (var g = 0, k = c.length; g < k; ++g) {
                var l = c[g].email;
                if (l in e) {
                    var m = e[l],
                        q = $M(a.b, m);
                    if (q) a.b.remove(l), c[g] = q;
                    else {
                        var u = a.b.b(l),
                            q = a.b.qb(l),
                            w = u,
                            u = new WM(m, w.response, w.email == w.displayName ? m : w.displayName, w.dl, w.Wj, w.md, w.dg.jd()),
                            w = w.sf();
                        u.dg.set(w);
                        a.b.remove(l);
                        a.b.add(u);
                        a.b.setVisible(m, q);
                        c[g] = u
                    }
                    l = m
                }
                if (m = f[l]) {
                    u = a.b;
                    w = l;
                    q = m;
                    u.T[w] = q;
                    delete u.H[w];
                    var z = u.H[q];
                    if (z != w)
                        if (z && $M(u, z)) Rl(u, "Ka", u.b(w)), u.remove(w), u.b(z) || u.add($M(u,
                            z));
                        else if (u.H[q] = w, u = u.b(w)) u.o = q;
                    q = a.H;
                    u = q.b[m];
                    n(u) ? (w = q.b[l], n(w) && --q.o[w.xd()], q.b[l] = u) : (w = tQ(q, l), q.b[m] = w)
                }
                l = c[g].o;
                a.Na[l] = new IW(l, b, d || 0)
            }
        };
    JW.prototype.Sa = function(a) {
        this.Ca == a.target && (this.Ca = null, this.ya(a))
    };
    JW.prototype.yc = function(a, b, c) {
        this.ya(c);
        this.La(a, b, c)
    };
    var PSa = function(a, b) {
            if (!a.ma && Zj(a.Fa).isEnabled(81)) {
                a.T = b;
                var c = jh(a.Fa).yd(),
                    d = p(function() {
                        this.ya("qb");
                        this.U = b
                    }, a),
                    e = new $h(b.start, Ih(b.end, 1));
                a.Ba.H(PU(a), c, e, d)
            }
        },
        RU = function(a, b) {
            return rU(a.Oa, b, YPa(a))
        },
        QU = function(a, b, c) {
            c = c ? [c] : YPa(a);
            a = rU(a.Oa, b, c);
            return Sb(a, function(a) {
                return sQ(a)
            })
        },
        gPa = function(a) {
            var b = a.V.T.H.getEmail();
            a = a.b;
            return a.contains(b) && a.qb(b) ? 1 < bN(a).length : 1 <= bN(a).length
        },
        PU = function(a, b) {
            var c = a.V,
                d = a.b,
                e = SP(c.R);
            b && (e = Sb(e, function(a) {
                    return d.qb(a.email)
                },
                a));
            lc(e, jN);
            c = c.T.H;
            if (d.contains(c.getEmail()) || iQ(d, c.getEmail())) return e;
            c = new WM(c.getEmail(), 5, In(c));
            return dc(c, e)
        },
        YPa = function(a) {
            var b = CN(a.V).get();
            a = a.b;
            var c = Tb(bN(a), function(a) {
                return a.o
            }, []);
            return a.contains(b) ? c : dc(b, c)
        },
        YOa = function(a, b) {
            var c = $M(a.b, b);
            if (c) return c;
            c = a.V.T.H;
            return c.getEmail() == b ? new WM(b, 0, c.Qd() || b, void 0, void 0, c.zc()) : new WM(b)
        };
    JW.prototype.Vd = function() {
        return this.V
    };
    var hPa = function(a) {
        if (!a.ta) throw Error("Kb");
        BV(a, IP(a.R), !0)
    };
    var SSa = function(a, b, c) {
        this.b = a;
        this.o = b;
        this.H = c
    };
    SSa.prototype.create = function(a) {
        for (var b = new qU, c = a.Fb() ? null : a.getId(), d = hh(this.b).T, e = Gg(this.b, 5), f = Ya(d.S), d = {}, g = 0; g < f.length; ++g) {
            var k = f[g],
                l = Ln(e, k.getId());
            l && (d[l.getEmail()] = k.color)
        }
        e = [Pea(hh(this.b))];
        e = new Zl(d, Ya(a.o.ta), e);
        d = new hk(mi(this.b), jh(this.b));
        g = a.b.get();
        f = g.start.Ya();
        g = g.end.Ya();
        d.Lv(f, g, f);
        f = qw(this.b);
        return new JW(this.b, a, this.o, this.H, b, c, e, d, f && (!bb(f.T || {}) || f.U))
    };
    var TSa = function(a) {
        a = a.t3;
        for (var b = O("The following guest email addresses are invalid:") + "<br><br>", c = a.length, d = 0; d < c; d++) b += O(a[d]) + "<br>";
        return N(b + "<br>")
    };
    var VSa = function() {
            this.b = [];
            USa(this)
        },
        WSa = Ux("T000000").nd(),
        XSa = Ux("19700101T000000").tb(),
        YSa = Ux("19700102T000000").tb();
    new $h(XSa, YSa);
    var ZSa = new $h(Ux("19700101T090000").tb(), Ux("19700101T170000").tb()),
        $Sa = function(a) {
            for (var b = 0; 7 > b; b++) {
                var c = [].concat(a.b[b]);
                if (0 < c.length) return c[0]
            }
            return null
        },
        aTa = function(a) {
            var b = a.end.Wa() < a.start.Wa() || WSa.equals(a.end.nd());
            return new $h(bx(XSa, a.start.nd()), bx(b ? YSa : XSa, a.end.nd()))
        },
        bTa = function(a, b) {
            var c = new VSa,
                d = a && a.split("|");
            if (!a || 7 != d.length && !b) {
                for (d = 0; 7 > d; d++) c.b[d] = [ZSa];
                return c
            }
            USa(c);
            for (var e = 0; 7 > e; e++)
                if (d[e] && d[e].length)
                    for (var f = d[e].split(","), g = 0; g < f.length; g++) {
                        var k = Ux(f[g]);
                        c.b[e].push(aTa(k))
                    }
                return c
        },
        USa = function(a) {
            for (var b = 0; 7 > b; b++) a.b[b] = []
        };
    var cTa = function(a) {
        a = a.lS;
        for (var b = O("Are you sure you want to save this event? This event is scheduled outside of these guests' working hours.") + "<br>" + O("Working hours are shown in your local time:") + "<br><ul>", c = a.length, d = 0; d < c; d++) b += "<li>" + O(a[d]) + "</li>";
        return N(b + "</ul>")
    };
    var dTa = function(a, b, c, d, e, f, g) {
            if (b.Fa.b) f();
            else if (e = hh(a).o, a = Xk(a).H, b.Fb() || e.getEmail() == b.Tb || EN(b)) {
                var k = b.b,
                    l = b.R;
                if (k.ub() || l.ub())
                    if (b = k.get(), b.start.Gd() && b.end.Gd()) {
                        b instanceof ax && (b = new $h(b.start.tb(), b.end.tb()));
                        for (var k = k.ub() ? SP(l) : eQ(l), k = 20 < k.length ? [] : k, k = Sb(k, function(a) {
                                return !a.sf()
                            }), l = [], m = 0; m < k.length; m++) {
                            var q = k[m],
                                u = q.getKey();
                            if (u != e.getEmail() && !UPa(c, b, u)) {
                                var w = $Sa(bTa(c.o(u).join("|"), !0)),
                                    q = q ? q.displayName : u,
                                    q = q + (" (Working hours: " + a.uc(w.start) + " - " +
                                        a.uc(w.end) + ")");
                                l.push(q)
                            }
                        }
                        l.length ? d(l, f, g) : f()
                    } else f();
                else f()
            } else f()
        },
        eTa = function(a, b, c) {
            var d = (new Kw).set("yes", "Save event", !0).set("no", "Do not save", !1, !0),
                e;
            11 < a.length ? (e = hc(a, 0, 10), e.push(CH(a.length - 10))) : e = a;
            hv(new Us, function(a) {
                "yes" == a.key ? b() : c()
            }, "Are you sure?", rm(cTa({
                lS: e
            })), d)
        };
    var hR = function(a, b, c, d, e, f, g) {
        J.call(this);
        this.o = a;
        this.Ea = b;
        this.ma = c;
        this.R = d;
        this.ta = e;
        this.T = new FW(a);
        this.Ca = f;
        this.U = g;
        this.Da = new I(this);
        this.V = !1;
        this.Fa = Yw() && document.activeElement == Xw();
        this.H = null
    };
    v(hR, J);
    h = hR.prototype;
    h.eG = null;
    h.ss = null;
    h.bG = null;
    h.Uj = null;
    h.En = null;
    h.dc = function(a, b) {
        var c = new KW(this.ma, a, b);
        bv(this.Da, c, "Z", this.WW, void 0);
        this.Da.ka(this.U, "ep-ksh-save", this.V1);
        c.start()
    };
    h.WW = function(a) {
        a = this.b = a.target.Vd();
        var b = new SSa(this.o, this.ta, this.T);
        this.ss = (3 == a.V || a.R.V) && this.o ? new oW(this.o, a) : null;
        b = this.Uj = new EW(this.o, a, b, this.Ca);
        b.render(this.Ea);
        b.oe(this);
        b.focus();
        this.ya("$b");
        var c = this.Da;
        c.ka(b, "yb", this.ua);
        c.ka(b, "xb", this.S);
        c.ka(b, ["Ib", "Jb"], this.Ba);
        this.H = new HW(K(M(), oj), a, this);
        this.Hb(this.H);
        this.H.start()
    };
    h.V1 = function() {
        var a = Fv(document);
        a && a.blur();
        this.S()
    };
    h.VW = function(a, b) {
        if (this.isDisposed() || this.En) this.Uj && this.Uj.kb && this.Uj.Jb(), this.o.get(Eg).Eb(), a();
        else {
            var c = p(function() {
                this.Pa();
                this.o.get(Eg).Eb();
                a()
            }, this);
            JS(this.b, c, b, "ef_backnav_prompt_shown", "ef_backnav_prompt_discard", "ef_backnav_prompt_continue")
        }
    };
    var fTa = function(a) {
        if (qi(a.o)) {
            var b = new ES(a.R, a.b, [], "RESTORE_ORIGINAL");
            bv(a.Da, b, "Z", a.dG, void 0);
            bv(a.Da, b, "$", a.cG, void 0);
            a.En = b;
            a.ya("ac");
            b.start()
        }
    };
    hR.prototype.Ba = function() {
        this.ya("dc")
    };
    hR.prototype.ua = function() {
        K(M(), oj).nb("ef_discard_clicked");
        this.Pa()
    };
    hR.prototype.S = function() {
        var a = this.b;
        if (a.Fb() || a.ub() || 6 == a.yb)
            if (6 == a.yb) fTa(this);
            else {
                this.H && FSa(this.H);
                var b = {
                        rn: null
                    },
                    c = new KS(this);
                qi(this.o) ? (LS(c, this.h$), LS(c, this.f$), LS(c, this.XW), LS(c, this.g$), LS(c, r(FRa, a)), LS(c, zSa(this.o, a)), LS(c, r(dTa, this.o, a, this.T, eTa)), LS(c, zKa(a, function(a) {
                    b.rn = a
                })), LS(c, r(BRa, a)), LS(c, r(MKa, a, NKa)), LS(c, r(BSa, a, CSa)), this.ss && (0 < dQ(this.b.R).length || this.b.ua.ub()) && LS(c, xRa(this.ss)), LS(c, r(KKa, this.o, a, rR, void 0))) : LS(c, r(ISa, a, JSa));
                c.execute([], p(this.Oa,
                    this, b), ia)
            }
        else this.Pa()
    };
    hR.prototype.Oa = function(a, b) {
        if (qi(this.o)) {
            gTa(this, a.rn);
            var c;
            if (!(c = !cQ(this.b))) a: {
                c = this.b.nc();
                for (var d = 0; d < c.length; d++) {
                    var e = this.b.getItem(c[d]);
                    if (e.ub() && e != this.b.R) {
                        c = !0;
                        break a
                    }
                }
                c = !1
            }
            c ? (c = this.b.Fb() ? this.R.b(this.b, b) : this.R.o(this.b, b), bv(this.Da, c, "Z", this.dG, void 0), bv(this.Da, c, "$", this.cG, void 0), this.En = c, this.ya("ac"), c.start()) : this.Pa()
        } else {
            e = this.b;
            if (e.Oa.ub()) {
                c = e.getId();
                var d = e.T.b.get(),
                    f = e.Oa,
                    e = f.b.get(),
                    g = f.H.get(),
                    f = f.o.get(),
                    k = [];
                k.push("eid", c);
                k.push("src",
                    d);
                k.push("rst", e);
                k.push("rgu", g);
                k.push("rcomment", f);
                var l = ni(this.o);
                l && l.isEnabled() && l.qG(k);
                iH(c, d, e, g, f);
                this.o.get(Eg).b("Your event was updated.")
            }
            this.ya("cc");
            this.Pa()
        }
    };
    var gTa = function(a, b) {
        if (cQ(a.b)) {
            var c = fQ(a.b.R);
            if (c.length) {
                var d = [];
                d.push("eid", a.b.getId());
                for (var e = 0; e < c.length; e++) {
                    var f = c[e].email,
                        g = c[e].sf() ? "invEmailOpt" : "invEmail";
                    d.push(g, f)
                }
                d.push("hl", "en");
                "ALL" == b && d.push("scp", "ALL");
                d.push("useproto", "true");
                var k = a.o;
                bj(a.o).send("invite", d, 52, lK, function() {
                    k.get(Eg).b("Failed to invite guests to the event.")
                })
            }
        }
    };
    h = hR.prototype;
    h.dG = function() {
        this.ya("cc");
        this.En = null;
        this.Pa()
    };
    h.cG = function() {
        this.ya("bc");
        this.En = null;
        this.Pa()
    };
    h.f$ = function(a, b, c) {
        a = sN(this.b.R, !0);
        a.b.length ? (b = Tb(a.b, function(a) {
            return Yn(a)
        }), Vs(new Us, "Your Event", rm(TSa({
            t3: b
        })), c)) : b()
    };
    h.XW = function(a, b, c) {
        a = this.b.b;
        a.wb().Wa() > a.Xb().Wa() ? Vs(new Us, "Your Event", jd("Sorry, you can't create an event that ends before it starts."), c) : b()
    };
    h.h$ = function(a, b, c) {
        a = Zj(this.o).isEnabled(63) ? this.b.U.RF() : (a = this.b.Cg) && $Ha(a);
        a ? Vs(new Us, "Your Event", jd(a), c) : b()
    };
    h.g$ = function(a, b, c) {
        var d = this.b.S;
        if (d && d.R.get()) {
            a = this.b.b;
            a = Bh(a.Xb(), a.wb());
            var e = d.H.get() || 1,
                d = lIa[d.T.get()];
            a > e * d ? (d = (new Kw).set("yes", "Yes, create overlapping events", !0).set("no", "No, just one", !1, !0).set("cancel", "Continue editing", !1, !0), hv(new Us, p(this.B1, this, b, c), "Your Event", jd("Are you sure you want multiple " + a + " day long events?"), d)) : b()
        } else b()
    };
    h.B1 = function(a, b, c) {
        var d = this.b.S;
        switch (c.key) {
            case "no":
                d.R.set(!1);
                a();
                break;
            case "yes":
                a();
                break;
            case "cancel":
                b()
        }
    };
    h.Vd = function() {
        return this.b
    };
    var hTa = function(a) {
        a.Fa && wi(function() {
            var a = Kk(gp.va().vd),
                c = Xw();
            a && c && c.focus()
        }, 300)
    };
    hR.prototype.wa = function() {
        this.V || this.ya("Zb");
        hTa(this);
        hR.qa.wa.call(this);
        y(this.b);
        y(this.bG);
        y(this.Uj);
        y(this.eG);
        y(this.ss);
        y(this.Da);
        y(this.U);
        this.Da = this.eG = this.Uj = this.bG = this.b = null
    };
    var jKa = function(a) {
            this.b = a
        },
        KW = function(a, b, c) {
            J.call(this);
            this.o = new NN(a.b, c);
            this.H = b
        };
    v(KW, EQ);
    KW.prototype.b = null;
    KW.prototype.start = function() {
        KW.qa.start.call(this);
        this.b = WN(this.o, this.H);
        this.Sf()
    };
    KW.prototype.Vd = function() {
        return this.b
    };
    var jTa = function(a, b, c, d) {
            a = qk();
            iTa(a, b, c, d)
        },
        iTa = function(a, b, c, d) {
            var e = wq.Uk();
            b.Fi = p(sMa, b);
            c && TMa(c, b);
            a.b("resource_picker");
            var f = d && !d.R;
            if (!e.o || f) c = M(), oIa(Gg(c, 812), b.ha()), b = function() {
                e.o && !f && a.b("fetch_resource_request_block")
            }, e.o || af(e, "Sa", b), f && af(d, "change", b)
        };
    var kTa = function() {
        TJa || (TJa = !0, pR.o || lMa(function(a) {
            pR.S(a)
        }))
    };
    var lTa = function(a, b, c, d) {
            Hg(a, 801).addCallback(function(a) {
                a.T(b, c, d)
            })
        },
        mTa = function(a, b) {
            Hg(a, 801).addCallback(function(a) {
                a.R(b)
            })
        };
    var nTa = function(a) {
            a = "Sorry, this is not a valid email address: <b>" + (O(a.email) + "</b>");
            return N("" + a)
        },
        oTa = function(a, b, c) {
            c = c || {};
            b = a.message;
            return N(O(a.AK) + '<div><span id="emailersend_error" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'color:red">&nbsp;</span></div><table class=emailtable cellpadding=6><tr><td valign=top class=nobr>' + O("To:") + '</td><td valign=top><textarea id="emailer_inputaddress" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'overflow:auto" autocomplete=off rows=4 cols=60></textarea><div style="' +
                (c.Aa ? "/*" + c.Aa + "*/" : "") + 'padding-top:.5ex">' + O("Enter email addresses separated by commas.") + "</div></td></tr><tr><td valign=top class=nobr>" + O("Message:") + '</td><td valign=top><textarea id="emailersend_msg" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'overflow:auto" rows=4 cols=60>' + fn(b) + '</textarea></td></tr><tr><td></td><td><div style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "float:" + P(Q("left")) + ';"><input type=checkbox id="emailersend_emailme" checked>&nbsp;<label for="emailersend_emailme">' + O("Send copy to me") +
                '</label></div><div id="msg-length" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "float:" + P(Q("right")) + ';color:red">&nbsp;</div></td></tr></table>')
        },
        pTa = function(a, b, c) {
            var d;
            c = c || {};
            b = a.h_;
            var e = a.IU,
                f = a.A9,
                g = a.Hv,
                k = a.message;
            return N(O(a.AK) + '<div><span id="emailersend_error" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'color:red">&nbsp;</span></div><table class=emailtable cellpadding=6>' + O(null == (d = b) ? "" : d) + "<tr><td valign=top>" + O(null == (d = e) ? "" : d) + '</td><td valign=top><textarea id="emailer_inputaddress" autocomplete=off style="' +
                (c.Aa ? "/*" + c.Aa + "*/" : "") + 'overflow:auto" rows=4 cols=60>' + fn(f) + "</textarea></td></tr><tr><td valign=top>" + O("Subject:") + '</td><td valign=top><input id=emailersubject autocomplete=off size=62 value="' + P(g) + '" maxlength="' + P(100) + '"></td></tr><tr><td valign=top class=nobr>' + O("Message:") + '</td><td valign=top><textarea id="emailersend_msg" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'overflow:auto" rows=4 cols=60>' + fn(k) + '</textarea></td></tr><tr><td></td><td><div style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "float:" + P(Q("left")) +
                '">' + O("Note: event information will be included in the message.") + '</div><div id="msg-length" style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + "float:" + P(Q("right")) + ';color:red">&nbsp;</div><div style="' + (c.Aa ? "/*" + c.Aa + "*/" : "") + 'clear:both"><input type="checkbox" id="emailersend_emailme" checked="true"><label for="emailersend_emailme">' + O("Send copy to me") + "</label></div></td></tr></table>")
        },
        qTa = function(a) {
            a = a.WA;
            for (var b = "<tr><td valign=top>" + O("To:") + "</td><td>", c = a.length, d = 0; d < c; d++) b += O(a[d]);
            return N(b +
                "</td></tr>")
        },
        rTa = function(a) {
            var b;
            b = b || {};
            var c = a.type,
                d = a.jo,
                e = a.count;
            a = a.icon;
            return N('<div style="' + (b.Aa ? "/*" + b.Aa + "*/" : "") + 'font-weight:bold"><input type="checkbox" id="emailercheck' + P(c) + '" checked="true"><label for="emailercheck' + P(c) + '">' + O(d) + " <strong class=count>(" + O(e) + ")</strong>&nbsp;</label>" + (a ? '<img valign="center" src="' + P(on(a)) + '">' : "") + "</div>")
        };
    var HK = function() {
        this.R = M();
        this.Da = new I(this);
        this.b = []
    };
    la(HK);
    h = HK.prototype;
    h.Vu = !1;
    h.uq = !1;
    h.qu = !0;
    h.Dv = !0;
    h.fu = !1;
    h.show = function(a, b, c, d, e, f, g, k, l) {
        this.uq = this.Vu = !1;
        this.U = c;
        this.b = [];
        this.qu = !!f || !!k;
        var m = pa(e);
        c = (this.fu = m) ? pTa : oTa;
        var q = {};
        q.AK = b;
        m && (q.Hv = e);
        q.message = d || "";
        if (this.qu) {
            if (f)
                for (b = 0; b < f.length; b++) d = f[b], k = (e = HF(Kn.va(), d)) ? e.lc : d, this.b.push({
                    email: d,
                    displayName: e ? In(e) : d,
                    status: g && g[k] ? g[k].kc : 0,
                    selected: !0
                });
            else C(k, function(a) {
                var b = a.email;
                this.b.push({
                    email: b,
                    displayName: a.displayName || b,
                    status: a.response,
                    selected: !0
                })
            }, this);
            this.b.sort(function(a, b) {
                return a.displayName < b.displayName ?
                    -1 : 1
            });
            for (b = e = d = g = f = 0; b < this.b.length; b++) switch (this.b[b].status) {
                case 1:
                    f++;
                    break;
                case 2:
                    g++;
                    break;
                case 3:
                    d++;
                    break;
                default:
                    e++
            }
            this.o = [{
                count: f,
                type: "yes",
                listener: this.CS,
                jo: "Yes"
            }, {
                count: d,
                type: "maybe",
                listener: this.xS,
                jo: "Maybe"
            }, {
                count: g,
                type: "no",
                listener: this.yS,
                jo: "No"
            }, {
                count: e,
                type: "awaiting",
                listener: this.uS,
                jo: "Awaiting response"
            }];
            if (this.Dv = !!(f || d || g || e)) {
                f = [];
                for (b = 0; b < this.o.length; b++) 0 < this.o[b].count && f.push(rTa({
                    type: this.o[b].type,
                    jo: this.o[b].jo,
                    count: this.o[b].count,
                    icon: "awaiting" ==
                        this.o[b].type ? null : "images/icon_r_" + this.o[b].type + ".gif"
                }));
                q.h_ = qTa({
                    WA: f
                })
            } else q.IU = "To:";
            q.A9 = sTa(this)
        }
        this.T = (new SC).set("yes", "Send", !0).set("no", "Don't send", !1, !0);
        this.H = new Us;
        hv(this.H, p(this.VV, this), a, rm(c(q)), this.T, p(this.aU, this));
        this.S = l;
        LW(this)
    };
    h.k8 = function(a) {
        a = a || [];
        tTa(this, a);
        a.push("invAction", "RECOMMEND");
        bj(this.R).send("invitecaluser", a, 0, lK)
    };
    var tTa = function(a, b) {
            var c = uTa(),
                d = vTa(),
                e = document.getElementById("emailersend_emailme").checked;
            b.push("hl", "en");
            b.push("useproto", "true");
            d && b.push("invMsg", d);
            e && b.push("invCopySender", 1);
            a.fu && b.push("subj", document.getElementById("emailersubject").value);
            d = 0;
            for (e = c.length; d < e; ++d) b.push("invEmail", c[d])
        },
        wTa = function(a) {
            return a.email == a.displayName ? a.email : '"' + a.displayName.replace(/["\\]/g, "\\$&") + '" <' + a.email + ">"
        },
        sTa = function(a) {
            for (var b = [], c = 0; c < a.b.length; c++) a.b[c].selected && b.push(wTa(a.b[c]));
            return b.join(",\n")
        },
        uTa = function() {
            return zB.va().o(document.getElementById("emailer_inputaddress").value)
        },
        MW = function(a) {
            document.getElementById("emailer_inputaddress").value = sTa(a);
            LW(a)
        },
        vTa = function() {
            return document.getElementById("emailersend_msg").value
        };
    h = HK.prototype;
    h.aU = function() {
        lTa(this.R, "emailer_inputaddress", !0, p(this.Zv, this));
        var a = document.getElementById("emailer_inputaddress");
        a.style.zIndex = this.H.getZIndex();
        this.Da.ka(a, "keyup", this.e$);
        this.Zv();
        var b = document.getElementById("emailersend_msg");
        this.Da.ka(b, "keyup", this.J5);
        mb(a.value) ? Lw(a) : Lw(b);
        this.fu && this.Da.ka(document.getElementById("emailersubject"), "keyup", this.c6);
        if (this.qu && this.Dv)
            for (a = 0; a < this.o.length; a++) 0 < this.o[a].count && this.Da.ka(document.getElementById("emailercheck" + this.o[a].type),
                "click", this.o[a].listener);
        this.Da.ka(document.getElementById("emailer_inputaddress"), "change", this.Zv)
    };
    h.CS = function(a) {
        for (var b = 0; b < this.b.length; b++) 1 == this.b[b].status && (this.b[b].selected = a.target.checked);
        MW(this)
    };
    h.yS = function(a) {
        for (var b = 0; b < this.b.length; b++) 2 == this.b[b].status && (this.b[b].selected = a.target.checked);
        MW(this)
    };
    h.xS = function(a) {
        for (var b = 0; b < this.b.length; b++) 3 == this.b[b].status && (this.b[b].selected = a.target.checked);
        MW(this)
    };
    h.uS = function(a) {
        for (var b = 0; b < this.b.length; b++) 0 == this.b[b].status && (this.b[b].selected = a.target.checked);
        MW(this)
    };
    h.Zv = function() {
        var a = uTa(),
            b = document.getElementById("emailersend_error"),
            c = zB.va();
        this.uq = !1;
        for (var d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            if (!c.b(f, !0)) {
                Km(b, nTa, {
                    email: f
                });
                this.uq = !0;
                break
            }
        }
        this.uq || ze(b, "\u00a0");
        LW(this)
    };
    var LW = function(a) {
        var b = !1;
        n(a.S) && !a.S ? b = !0 : a.uq || a.Vu || !uTa().length ? b = !0 : a.fu && ob(document.getElementById("emailersubject").value).length || ob(vTa()).length ? a.qu && a.Dv || (b = !ob(document.getElementById("emailer_inputaddress").value).length) : b = !0;
        a: {
            if (a = a.T && TE("BUTTON", a.T.Ea))
                for (var c = 0; c < a.length; c++)
                    if ("yes" == a[c].name) {
                        a = a[c];
                        break a
                    }
            a = null
        }
        a && (a.disabled = b)
    };
    h = HK.prototype;
    h.e$ = function() {
        this.Ox && clearTimeout(this.Ox);
        this.Ox = setTimeout(p(this.Zv, this), 750)
    };
    h.Ox = void 0;
    h.J5 = function(a) {
        var b = document.getElementById("msg-length");
        a = a.target;
        this.Vu = 2400 <= a.value.length;
        ze(b, this.Vu ? a.value.length + " / 2400" : "\u00a0");
        LW(this)
    };
    h.c6 = function() {
        LW(this)
    };
    h.VV = function(a) {
        var b = !1;
        "yes" == a.key && this.U && (vTa() ? b = this.U() : (Vs(new Us, "Error", jd("Please enter text in the body of the message.")), b = !0));
        b ? (a.stopPropagation(), a.preventDefault()) : (mTa(this.R, "emailer_inputaddress"), Tf(this.Da))
    };
    var xTa = function(a, b) {
        var c = Gm(),
            d = Sv(),
            e = MF(),
            f = c;
        e ? null != d && null != c && (f = Lv(c)[0] + "/hosted/" + e) : null != d && null != c && (f = Lv(c)[0]);
        var c = f + "/event?action=TEMPLATE&tmeid=" + encodeURIComponent("" + a) + "&tmsrc=" + encodeURIComponent(b),
            g, d = N('<a target="_blank" href="' + P(nn(c)) + '"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_' + P("en") + '.gif"></a>');
        g = g || {};
        g = "" + ('<table style="' + (g.Aa ? "/*" + g.Aa + "*/" : "") + 'width:600px"><tr><td align=center>' + O(d) + '<div id="ep-publish-msg">' + O("Put this code on your site so that visitors can easily add this event to their Google Calendar.") +
            '</div><textarea id="publishCode" rows="5" style="' + (g.Aa ? "/*" + g.Aa + "*/" : "") + 'width:600px">' + fn(d + "") + '</textarea><div style="' + (g.Aa ? "/*" + g.Aa + "*/" : "") + 'margin-top: 1em">Or copy the link:</div><textarea id="publishLink" rows="3" style="' + (g.Aa ? "/*" + g.Aa + "*/" : "") + 'width:600px">' + fn(c) + "</textarea></td></tr></table>");
        g = N(g);
        c = new uF("comment-dialog");
        c.Vg = !0;
        zF(c, WC());
        c.setTitle("Publish event");
        c.xf(rm(g));
        c.setVisible(!0)
    };
    var yTa = function(a, b) {
        var c = a.R,
            d = c.b,
            e = hh(M()).o.getEmail(),
            f = a.Va,
            g = HF(Kn.va(), f),
            k = Sb(d.sd(), function(a) {
                return 100 == a.zc() && a.email != e
            }),
            l;
        k.length ? null != g && 100 == g.md && !d.getItem(f) && k.push(new WM(f, 5, In(g))) : (k = void 0, l = null != g && 100 == g.md ? [f] : [a.Tb]);
        d = "[Update] " + a.ma.get();
        f = c.Oa;
        c = O(f ? "Enter the message you would like to send to the organizer of this event." : "Enter the message you would like to send to the guests of this event.");
        f = f ? "Send an email to the organizer" : "Send an email to guests";
        g = M();
        g = qi(g);
        HK.va().show(f, c, b, "", d, l, null, k, g)
    };
    var NW = function() {};
    la(NW);
    NW.prototype.H = function(a) {
        if ("yes" == a.key) {
            var b;
            var c = document.getElementById("tr-owner").value;
            c ? (b = zB.va(), c = b.o(c), b = !c || 1 > c.length || 1 < c.length || !b.b(c[0], !0) ? !1 : !0) : b = !1;
            if (!b) {
                (new Us).query(zTa, "Invalid new owner", jd("Please specify a single, valid email address as the new owner."), WC());
                a.preventDefault();
                a.stopPropagation();
                return
            }
            this.ke && this.ke(this.o, document.getElementById("tr-owner").value, document.getElementById("tr-message").value)
        }
        mTa(M(), "tr-owner")
    };
    NW.prototype.R = function() {
        setTimeout(p(this.b, this), 0)
    };
    NW.prototype.b = function() {
        lTa(M(), "tr-owner", !1);
        zTa()
    };
    var zTa = function() {
        var a = document.getElementById("tr-owner");
        a && a.focus()
    };
    NW.prototype.show = function(a, b) {
        var c = a.ma.jd(),
            d = a.b.jd();
        this.o = a;
        this.ke = b || null;
        d = Yk(M()).Lp(d);
        c = Yn(c);
        c = N("<div><p>" + O("You are transferring ownership of this event:") + "<blockquote><b>" + O(c) + "</b><br>" + O(d) + "</blockquote><p><label for=tr-owner><b>" + O("New owner:") + "</b></label><br><input id=tr-owner><p><label for=tr-message><b>" + O("Message to the new owner:") + "</b></label><br><textarea id=tr-message rows=3>" + fn("I would like to transfer ownership of this event using Google Calendar.") + "</textarea></div>");
        d = (new Kw).set("yes", "Change owner").set("no", "Don't change", !1, !0);
        hv(new Us, p(this.H, this), "Choose new owner", rm(c), d, p(this.R, this))
    };
    var iR = null,
        bR = null,
        kKa = null,
        dR = null,
        MO = null,
        mKa = null,
        ATa = "",
        iKa = function() {
            if (iR) {
                var a = iR;
                a.V = !0;
                a.Pa()
            }
        },
        lKa = function() {
            var a = iR,
                b = a.Vd(),
                c = a.Uj.Na,
                d = b.tf,
                e = M().get(Eg);
            0 < d.length ? ZE(e, d) : e.Eb();
            RM(gp.va(), p(a.VW, a));
            var d = new oQ,
                f = b.getId(),
                g = CN(b).get();
            G(a, "wb", BTa);
            G(a, "Db", r(wq.I7, f));
            G(a, "zb", r(d.b, f));
            G(a, "Eb", r(CTa, b));
            G(a, "ac", DTa);
            G(a, ["Ab", "Bb", "Cb"], r(ETa, b));
            G(a, "Lb", r(xTa, f, g));
            G(a, "dc", r(FTa, f));
            af(a, "Zb", GTa);
            G(a, "nb", No(M(), "One or more documents you picked were already attached to the event"));
            var k = OG(183665),
                d = G,
                f = p,
                g = e.b,
                k = "The Calendar Connector has timed out. " + O(k),
                k = N("" + k);
            d(a, "aa", f(g, e, k));
            G(a, "Z", HTa);
            G(a, "$", ITa);
            e = M();
            qw(e).R() && kTa();
            a = xSa(a.Uj);
            e = 0;
            for (d = a.length; e < d; ++e) {
                var f = a[e],
                    k = g = new jS(wq.Uk(), b.b, !0, 0, void 0, b.S, b.o, c, void 0),
                    l = b;
                Zj(k.Ra).isEnabled(31) && !Zj(k.Ra).isEnabled(29) && (k.Db = k.Ra.get(Dg), k.S = kQ(k.Db, l, lQ(l.vb, l.Fb())));
                G(f, "eb", r(jTa, b, g, f, c));
                G(f, "Va", r(yTa, b, r(JTa, b)))
            }
            G(mKa, "ep-ksh-back", KTa);
            tx(b);
            3 == b.V && K(M(), oj).wf("edit_event_page_guests_count_on_load",
                LTa(b))
        },
        ITa = function(a) {
            ATa = a.type;
            M().get(Eg).b("One or more guests or rooms could not be loaded. Please try again in a few moments.", ATa)
        },
        HTa = function() {
            M().get(Eg).Eb(ATa)
        },
        JTa = function(a) {
            var b = ["eid", a.getId(), "src", CN(a).get()];
            a = HK.va();
            b = b || [];
            tTa(a, b);
            bj(a.R).send("email", b, 0, lK);
            return !1
        },
        DTa = function() {
            ip(gp.va(), "main_7");
            M().get(Eg).b("(Still saving changes...)");
            var a = iR,
                b = a.Vd();
            b.Fb() && gQa(b.o);
            var c, d;
            b.Fb() ? c = d = MTa(b) : d = NTa(b);
            c && af(a, "cc", c);
            c = K(M(), oj);
            3 == b.V && c.wf("edit_event_page_guests_count_on_save",
                LTa(b));
            c = iv(c, "save_event_latency_details_page");
            af(a, "cc", r(OTa, b, c));
            d && af(a, "bc", d);
            af(a, "bc", r(PTa))
        },
        LTa = function(a) {
            var b = a.o,
                c = bN(b).length;
            a = a.T.H;
            b.contains(a.getEmail()) || iQ(b, a.getEmail()) || c++;
            return c
        },
        QTa = function(a) {
            var b = a.S;
            return b && b.R.get() && "WEEKLY" == b.T.get() ? (b = b.o.get(), a = a.b.get().start.td(), Zb(b, PM[a])) : !0
        },
        RTa = function(a) {
            a = a.S;
            return !!a && a.ub()
        },
        MTa = function(a) {
            if (!QTa(a)) return null;
            var b = a.b.get(),
                c = a.T.b.get();
            if (!(b.start instanceof Oh && b.end instanceof Oh)) return null;
            var d = a.getId(),
                e = sb(a.ma.get()),
                f = 2097221;
            a.Sa.get() && (f |= 1048576);
            var g = M(),
                k = K(g, pj);
            k.Ba(d, e, b.start, b.end, c, c, c, f, 0, null, null, 0, {}, {}, {}, null);
            Go(g.get(Ag));
            return function() {
                k.S(d);
                Go(g.get(Ag))
            }
        },
        CTa = function(a) {
            a = a.getId();
            var b = Wu(K(M(), pj), a);
            a = ["eid", a, "src", b.rb(), "sf", "true", "pjs", "true"];
            a = Di(a);
            a = vya(void 0, void 0, void 0, void 0, "printevent", a);
            LO.set("PDF_INLINE", "ok", 120, "/calendar/");
            yH(a, {
                target: "_blank"
            })
        },
        NTa = function(a) {
            var b = a.getId(),
                c = M(),
                d = K(c, pj),
                e = Wu(d, b);
            if (!e) return null;
            var f = a.ma.get(),
                g = a.T.b.get();
            if (RTa(a)) {
                var k = e.we,
                    l = e.rb();
                e.we = O(f);
                e.Nb = g;
                Fn(e, 64, !0);
                Go(c.get(Ag));
                return function() {
                    e.Nb = l;
                    e.we = k;
                    Fn(e, 64, !1);
                    Go(c.get(Ag))
                }
            }
            var m = e.clone(),
                q = a.b.get();
            e.we = O(f);
            xIa(d, b, q.start, q.end);
            e.Ar(a.Sa.get());
            e.Nb = g;
            Fn(e, 64, !0);
            Go(c.get(Ag));
            return function() {
                d.U(m);
                Go(c.get(Ag))
            }
        },
        KTa = function() {
            var a = ia,
                b = Fv(document);
            b && (b.blur(), a = function() {
                b.focus()
            });
            STa(a)
        },
        BTa = function() {
            STa()
        },
        STa = function(a) {
            ip(gp.va(), "main_7", void 0, a);
            K(M(), oj).nb("ef_backnav_clicked")
        },
        OTa = function(a, b, c) {
            c = c.target.En.cq();
            zj(ia.get(M()), c);
            pQ(b);
            K(M(), oj).nb(a.Fb() ? "ef_event_created" : "ef_event_edited")
        },
        PTa = function() {
            M().get(Eg).b("Failed to save event");
            K(M(), oj).nb("save_event_failure")
        },
        GTa = function() {
            var a = gp.va();
            "eventpage_6" == a.vd && ip(a, "main_7");
            tx(null);
            iR = null
        },
        FTa = function(a) {
            M().get(vg).Dr(a, !1, !0)
        },
        ETa = function(a, b) {
            var c = K(M(), oj);
            switch (b.type) {
                case "Cb":
                    wq.jw(!1, a.T.b.get(), a.getId(), a.Yf(), b.getId());
                    c.nb("ef_dup_from_menu");
                    break;
                case "Ab":
                    var d = a.T.b.get();
                    wq.jw(!0, d, a.getId(), a.Yf(), d);
                    c.nb("ef_copy_from_menu");
                    break;
                case "Bb":
                    if (a.Jf()) {
                        var c = r(TTa, a),
                            d = jd("It's not possible to change the owner for a single event in a series. Do you want to change the owner for all events in this series?"),
                            e = (new Kw).set("yes", "Change for all events", !0).set("cancel", "Cancel");
                        hv(new Us, c, "Change owner for all events in series?", d, e)
                    } else NW.va().show(a, UTa)
            }
        },
        UTa = function(a, b, c) {
            var d = a.S;
            d && d.R.jd() || a.Jf() ? VTa(a, b, c, "ALL") : VTa(a, b, c, "ONE")
        },
        TTa = function(a, b) {
            "yes" == b.key && NW.va().show(a, UTa)
        },
        VTa = function(a, b, c, d) {
            a = a.getId();
            b = zB.va().o(b)[0];
            c = ["eid", a, "hl", "en", "invMsg", c, "invEmail", b, "scp", d, "useproto", "true"];
            y(iR);
            bj(M()).send("reqevxfer", c, 0, lK)
        };
    var OW = null,
        PW = null,
        XTa = function(a, b) {
            var c = r(WTa, b),
                d = M();
            Lr(Kr(d), "eventform", function() {
                jp(gp.va(), "availeditor_0", a, c)
            })
        },
        ZTa = function(a, b, c) {
            var d = PW,
                d = p(d.I6, d),
                e = new oQ,
                e = c.Fb() ? void 0 : r(e.b, c.getId());
            a = new DT(a, YTa, d, !c.Fb(), c.qc(), e);
            a.render(b);
            OW.push(a)
        },
        bUa = function(a, b) {
            var c = Xi(Wi.va()),
                d = Xi(Wi.va()),
                e = b.T.b,
                f = CN(b),
                g = M(),
                k = hh(g).T,
                e = new CT(k, e, function(a) {
                    return a.qc()
                }),
                k = $Ta(f.get()),
                k = kL(k);
            Km(a, PNa, {
                iT: c,
                Uq: d,
                url: k
            });
            e.render(F(c));
            G(f, "change", function(a) {
                a = a.target.get();
                a =
                    $Ta(a);
                a = kL(a);
                var b = F(d);
                XG(b, a);
                ze(b, a)
            });
            G(pi(g), "b", r(aUa, e))
        },
        aUa = function(a, b) {
            a.Ab(b.Ob)
        },
        WTa = function(a, b) {
            var c = Xi(Wi.va());
            Km(F("coverinner"), ONa, {
                id: c
            });
            var d = M(),
                e;
            !a.qc() || Cj(jh(d), "dismissedSelfschedulerTips", "false") ? e = null : (e = new BT(N('<div class="ss-tip-root"><div class="ss-tip-header"><div class="ss-tip-title goog-inline-block">' + O("How does this work?") + '</div><div class="ss-tip-dismiss goog-inline-block lk to-disable">' + O("Hide instructions") + '</div><div class="ss-tip-learn-more goog-inline-block lk to-disable">' +
                O("Learn more about appointment slots") + '</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">' + O("1. Create appointment slots") + '</div><div class="ss-tip-sec-body">' + O("Pick a block of time you want to offer to others, and choose how many slots to split it up into; don't worry, you can always change it later.") + '</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">' + O("2. Share your appointment page") + '</div><div class="ss-tip-sec-body">' +
                O("This is the link to your public appointment page. Anyone who has this link can book an appointment slot.") + '</div></div><div class="ss-tip-section goog-inline-block"><div class="ss-tip-sec-title">' + O("3. Guests book appointment slots") + '</div><div class="ss-tip-sec-body">' + O("Booked appointment slots appear right on your calendar as regular events.") + "</div></div></div>"), "ss-tip"), JNa(e, "ss-tip-learn-more", r(KNa, d)), JNa(e, "ss-tip-dismiss", r(LNa, d, e)));
            e && e.render(F(c + "tips"));
            e = F(c + "container");
            a.qc() && bUa(e, a);
            var f = new FS(new aj(d, new Ega)),
                g = $Ta(CN(a).get()),
                k = a.qc() ? void 0 : a.b.get().start.Ya().toString(),
                g = kL(g, k);
            PW = e = new AT(d, a, f, e, wq.Uk(), g);
            f = e.b.ma;
            g = e.b.yb;
            k = new jS(wq.Uk(), a.b, !0, 0, void 0, a.S, a.o, g, void 0);
            qw(d).R() && kTa();
            G(f, "eb", r(jTa, a, k, f, g));
            G(f, "Va", r(yTa, a, r(JTa, a)));
            OW = [];
            ZTa(d, F(c + "topControls"), a);
            ZTa(d, F(c + "bottomControls"), a);
            af(e, "lb", cUa);
            af(e, "hb", dUa);
            af(e, "ib", eUa);
            RM(gp.va(), p(e.XX, e));
            d.get(Eg).Eb();
            b()
        },
        fUa = function() {
            var a = gp.va();
            RM(a, null);
            ip(a, "main_7")
        },
        YTa = function() {
            var a = PW,
                b = a.nh;
            if (b.Fb() || b.ub() || 6 == b.yb) {
                b.Fb() && a.ab.nb("appointments_new_save");
                var c = new KS(a);
                LS(c, a.$X);
                LS(c, a.J8);
                LS(c, r(KKa, a.o, b, rR, void 0));
                c.execute([], p(a.l8, a), ia)
            } else a.ya("hb"), a.Pa()
        },
        cUa = function() {
            var a = PW;
            G(a, "kb", gUa);
            G(a, "jb", hUa);
            fUa();
            M().get(Eg).b("(Still saving changes...)")
        },
        gUa = function(a) {
            var b = a.target;
            a = b.nh;
            b = b.H.cq();
            iUa(a, b)
        },
        iUa = function(a, b) {
            var c = a.T.b;
            Ro.va().H(c.get(), !0);
            c = M();
            if (a.Fb()) {
                var d = Xk(c).H,
                    e = a.b.get().start,
                    f = d.Dd(e),
                    d = d.uc(e),
                    e =
                    a.ma.get();
                if (b && b.length && b[0] && 1 < b[0].length) var g = b[0][1];
                jUa(e, f, d, g)
            } else c.get(Eg).b("Your appointment slots were updated.");
            Hg(c, 803).addCallback(function(a) {
                a.b()
            })
        },
        jUa = function(a, b, c, d) {
            var e = M().get(Eg);
            if (d) {
                var f = Xi(Wi.va()),
                    g = r(kUa, f);
                a = "Created appointment slots " + ('<a href="javascript:void(0);" id="' + P(f) + '">' + (O(a) + ("</a> on " + (O(b) + (" at " + (O(c) + "."))))));
                a = N("" + a);
                ZE(e, a.getContent(), void 0, g);
                G(F(f), "click", r(lUa, d))
            } else e.b("Created appointment slots " + a + " on " + b + " at " + c + ".")
        },
        kUa = function(a) {
            ix(F(a))
        },
        lUa = function(a) {
            var b = M();
            Lr(Kr(b), "eventform", function() {
                var c;
                c = new YMa(b);
                c = new IS(c, a, void 0);
                af(c, "Z", r(mUa, a));
                c.start()
            })
        },
        mUa = function(a, b) {
            XTa(a, b.target.Vd())
        },
        hUa = function() {
            M().get(Eg).b("Failed to save appointment slots")
        },
        dUa = function() {
            fUa()
        },
        eUa = function() {
            C(OW, y);
            bf(PW, "lb", cUa);
            bf(PW, "hb", dUa);
            bf(PW, "ib", eUa);
            bf(pi(M()), "b", aUa);
            PW = OW = null
        },
        $Ta = function(a) {
            a = HF(Kn.va(), a).lc;
            return bm.va().get(a).Oa
        };
    var nUa = function(a) {
            var b = a.kS;
            a = 'Are you sure you want to mark "' + (O(a.title) + ('" as spam? This will delete the event from calendar ' + (O(b) + ".")));
            return N("" + a)
        },
        oUa = function(a) {
            a = "Do you want to update your guests that you're canceling \"" + (O(a.title) + '"?');
            return N("" + a)
        };
    var pUa = function(a) {
            var b = a.start,
                c = a.Uv ? null : a.end,
                d = M(),
                e = a.gn || kh(d);
            a = sKa(a.summary, a.Cd, a.location, b, c, a.$m, a.iv, "DRAG", a.kv);
            a.push("src", e, "ctz", jh(d).yd());
            return a
        },
        rUa = function(a, b) {
            tk("bubble_respond " + b);
            var c = M(),
                d = Wu(K(c, pj), a);
            d.le() || QW();
            d.le() && tk("pb_respond " + b);
            var e = d.Ge;
            if (e !== b) {
                var f = null;
                6 == b ? (f = zIa(d) ? "ONE" : "ALL", qUa(d, f, [])) : zIa(d) && (f = "ONE");
                null != f ? (iH(d.getId(), d.rb(), b), wq.kw(d, b, f, e)) : Lr(Kr(c), "eventform", function() {
                    wq.Us(!1, !1, "Any changes made to other events will be kept.",
                        function(a) {
                            iH(d.getId(), d.rb(), b);
                            wq.kw(d, b, a, e)
                        }, ia)
                })
            }
        },
        sUa = function(a) {
            var b = Wu(K(M(), pj), a),
                b = rm(nUa({
                    title: b.we,
                    kS: ep(Ro.va(), b.rb())
                })),
                c = (new Kw).set("yes", "Report spam", !1).set("no", "Don't report spam", !0, !0);
            hv(new Us, function(b) {
                "yes" == b.key && (QW(), jR(), rUa(a, 6))
            }, "Report spam", b, c)
        },
        uUa = function(a, b) {
            var c = [],
                d, e = new BO("ONE", "Only this instance", "All other events in the series will remain.", void 0, !0),
                f = new BO("TAIL", "All following", "This and all the following events will be deleted."),
                g = new BO("ALL", "All events in the series", "All events in the series will be deleted.");
            d = M();
            qi(d) ? (b ? (d = "Would you like to delete only this event, all events in the series, or this and all future events in the series?", c.push(e), c.push(f)) : (d = "Would you like to delete only this instance of the event, or all events in this series?", c.push(e)), c.push(g)) : (d = "When working offline, changes to recurring events do not apply to the entire series. You can only modify individual instances of recurring events.",
                c.push(e));
            var k = new CO(d, c, "Delete recurring event");
            G(k, "action", function() {
                var b = k.R.H;
                b && tUa(a, b)
            });
            k.setVisible(!0)
        },
        tUa = function(a, b) {
            var c = Wu(K(M(), pj), a);
            if (kpa(wv(20), c) && (rG(c) || En(c, 2097152))) {
                var d = rm(oUa({
                        title: c.we
                    })),
                    e = (new Kw).set("yes", "Delete & update guests", !0).set("no", "Delete without updating guests").set("cancel", "Don't delete", !1, !0);
                hv(new Us, function(a) {
                    "yes" != a.key && "no" != a.key || vUa(c, b, "yes" == a.key)
                }, "Delete event?", d, e)
            } else vUa(c, b, !1)
        },
        qUa = function(a, b, c) {
            jR();
            var d =
                M(),
                e = K(d, pj),
                f = e.S(a.getId());
            Go(d.get(Ag));
            c.push("src", a.rb(), "eid", a.getId());
            b && "ONE" !== b && c.push("scp", b);
            rQ(e, c);
            qQ(e, c);
            return f
        },
        vUa = function(a, b, c) {
            QW();
            var d = [],
                e = qUa(a, b, d);
            c && d.push("nopts", 4);
            cj(bj(M()), "deleteevent", d, 1, ia, function() {
                var a = M();
                K(a, pj).U(e);
                Go(a.get(Ag));
                M().get(Eg).b("Oops, we couldn't delete this event, please try again in a few minutes")
            })
        },
        QW = function() {
            Gg(M(), 800).Eb()
        };
    var wUa = function() {};
    h = wUa.prototype;
    h.QN = function(a, b, c, d, e, f) {
        return fKa(a, b, c, d, e, f)
    };
    h.jw = function(a, b, c, d, e) {
        rKa(a, b, c, d, e)
    };
    h.RN = function(a, b) {
        a: {
            if (b) {
                var c = b.split("-");
                if (!(5 != c.length || "eid" != c[0] || "1" != c[2] && "0" != c[2] || "1" != c[3] && "0" != c[3])) {
                    var d = K(M(), pj),
                        e = c[1];
                    if (Wu(d, e)) {
                        YJa(e, "1" == c[2], "1" == c[3], c[4]);
                        break a
                    }
                }
            }
            a()
        }
    };
    h.kw = function(a, b, c, d, e, f) {
        e = fKa(a.getId(), a.rb(), b, c, e, f);
        cj(bj(M()), "event", e, 3, r(gKa, a, b, c), r(hKa, a, d, b));
        Go(M().get(Ag))
    };
    h.WN = function(a) {
        ZQ(!1, null, a)
    };
    h.UN = function(a, b, c, d) {
        var e, f, g;
        c ? (e = Rz(c).start.toString(), f = Rz(c).end.toString(), g = c.ld()) : (e = Ao(M()).S(), e = Ml().max(e[0]).min(e[1]), e = Ah(e), f = li(Kl()), e.hour = f.hour, e.minute = 30 > f.minute ? 30 : 60, e.second = 0, e = e.tb(), f = Ah(e), f.minute += $w(M()), $v(M()) && (g = !0), f = f.tb().toString(), e = e.toString());
        c = [];
        b && c.push("src", b);
        d && c.push("text", d);
        g && c.push("unbounded", "true");
        c.push("dates", e + "/" + f);
        c.push("pprop", "HowCreated:BUTTON");
        $Q(c, a)
    };
    h.lw = function(a, b) {
        $Q(a, b)
    };
    h.lF = function(a, b) {
        var c = lm.va(),
            d, e;
        e = a.Ba;
        var f = {};
        f.text = Gy(a.getTitle());
        f.owner = a.ne;
        f.creator = a.Ne;
        f.location = a.Ke;
        f.details = "";
        n(a.Ca || "") && (f.details = a.Ca || "");
        f.recur = null;
        n(e.T) && (f.recur = e.T);
        f.crm = "BUSY";
        n(a.lg) && (d = a.lg, d = null != d && 3 != d ? YP(c.o).get(d) : "UNKNOWN", f.crm = d);
        f.icc = "DEFAULT";
        n(e.b) && (d = e.b, c = null != d ? YP(c.H).get(d) : "DEFAULT", f.icc = c);
        f.rstart = null;
        n(e.H) && (f.rstart = e.H);
        c = a.b ? new $h(a.wb().Ya(), a.Xb().Ya()) : new $h(a.wb(), a.Xb());
        f.dates = c;
        d = n(e.o) ? e.o || 0 : a.qc() ? 60 : a.If() ? 30 :
            20;
        c = 30 <= d ? "EDIT" : "VIEW";
        n(e.R) ? e = e.R || 0 : b ? e = 130999 : (e = 4, a.If() && (e |= 3080));
        var g = M(),
            g = Gg(g, 16);
        f.eid = a.getId();
        f.src = a.rb();
        for (var k = {}, l = Cn(a), m = 0; m < l.length; m++) k[l[m]] = Dn(a, l[m]);
        f.add = k;
        f.erem = DIa(g, a);
        f.sprop = a.o;
        f.pprop = a.S;
        return MJa(c, d, e, f, a.T & 139776)
    };
    h.tC = function(a) {
        var b = a.hT,
            c = a.jv,
            d = a.qE,
            e = pUa(a);
        b && (a = a.summary, e.push("ctext", a ? a.PB : "", "qa-src", c));
        c = (qI++).toString();
        e.push("eid", c);
        bKa(e, d)
    };
    h.ZN = function(a) {
        return pUa(a)
    };
    h.mw = function(a) {
        var b = M(),
            c = Wu(K(b, pj), a);
        c.le() && En(c, 2097152) || (QW(), Gn(c) ? (c = En(c, 2097152), Lr(Kr(b), "eventform", r(uUa, a, c))) : tUa(a, "ONE"))
    };
    h.$N = function(a, b) {
        rUa(a, b)
    };
    h.aO = function(a) {
        a = pUa(a);
        wq.lw(a, void 0)
    };
    h.Us = function(a, b, c, d, e, f, g, k, l) {
        GKa(a, b, !1, c, d, e, f, g, k, l)
    };
    h.iV = function(a) {
        qR(a)
    };
    h.jV = function(a, b, c, d, e) {
        rR(!1, !1, a, b, c, d, e)
    };
    h.rF = function(a, b, c) {
        NKa(a, b, c)
    };
    h.B3 = function(a) {
        return a instanceof tT
    };
    h.d4 = function(a, b) {
        b && lUa(b);
        a()
    };
    h.e4 = function(a, b) {
        iUa(a, b)
    };
    h.f4 = function(a) {
        lUa(a)
    };
    h.RJ = function(a) {
        XTa("", a)
    };
    h.bP = function(a) {
        lMa(a)
    };
    h.E4 = function(a) {
        return new FS(a)
    };
    h.H4 = function(a, b, c, d, e) {
        return new sV(a, b, c, d, e)
    };
    h.Uk = function() {
        return pR
    };
    h.I7 = function(a) {
        return sUa(a)
    };
    h.uL = function(a, b, c, d) {
        var e = VMa();
        e.Ta = a;
        e.H = new py(c);
        e.T = new ny(b);
        e.V = new py("");
        e.S = new py("");
        c = hh(a).o;
        e.ua = new IN(c, 5, void 0, void 0, !0);
        e.U = null;
        e.b = new VM(a, c);
        e.ta = zFa(b.start);
        e.Mb = d || new Iy(void 0, Uh(oy(e.T).duration));
        a = new ZM;
        e.o = new rN(a, 1, new py);
        e.R = c.getEmail();
        e.ma = 3;
        e.Ca = new MN(null, null);
        return new HS(e)
    };
    h.aD = function(a, b, c, d, e, f, g, k, l) {
        var m = e;
        e = qk();
        e.o = "ef_new_from_quickadd";
        var q;
        a: {
            var u = a.get(),
                w = d,
                z = m;
            if (u && ob(u) && w && z) {
                var u = w,
                    A = z,
                    z = !1,
                    w = zQ(u.toString()),
                    B = zQ(A.toString());
                if (w.Gd()) B.Gd() || ((q = B.Zd()).Gd() && q.Ya().Wa() > w.Wa() ? w instanceof ei ? A = q.tb() : A = q.Ya() : (q = Ah(w), w instanceof ei ? (q.minute += $w(M()), A = q.tb()) : (++q.Ga, A = q.Ya()), $v(M()) && (z = !0)));
                else if ((q = w.Zd()).Gd()) u = q.Ya(), q = B.Zd(), q.Gd() ? (A = q.Ya(), q = Ah(A)) : q = Ah(u), ++q.Ga, A = q.Ya();
                else {
                    q = null;
                    break a
                }
                q = {
                    start: u.toString(),
                    end: A.toString(),
                    ld: z
                }
            } else q = null
        }
        var L;
        q && (d = q.start, m = q.end, L = q.ld);
        a = sKa(a, b, c, d, L ? null : m, f, g, "QUICKADD", k);
        b = K(M(), oj);
        q && !l ? (a.push("src", kh(M())), l = (qI++).toString(), a.push("eid", l), bKa(a), b.nb("quickadd_event_created")) : (wq.lw(a, e), b.nb("quickadd_event_failed"))
    };
    h.MB = function(a, b, c) {
        var d = new tT(a, c);
        return BNa(d, a, b, c, void 0)
    };
    wq = new wUa;
    hg("eventform");
    jg();
} catch (e) {
    _DumpException(e)
}
// Google Inc.

//# sourceURL=/calendar/_/scs/calendar-static/_/js/k=calendar.cal.en.XuQvo_D1M7U.O/m=eventform/rt=j/rs=ANwU0p50FTBvwxJ7LSItQ0-qGhsJPBgGnQ
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/vercel/vikkmore/lib/youtube.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "searchYouTube",
    ()=>searchYouTube
]);
const API_KEY = 'AIzaSyDEZBaiIYBhdGihLMjdn6afIw1mrNtQfK0';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
async function searchYouTube(query) {
    const res = await fetch(`${BASE_URL}/search?part=snippet&maxResults=10&q=${query}&type=video&key=${API_KEY}`);
    const data = await res.json();
    return data.items?.map((item)=>({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.high.url,
            channelTitle: item.snippet.channelTitle
        })) || [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/vercel/vikkmore/components/SongCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SongCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/store/usePlayerStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SongCard({ id, title, thumbnail }) {
    _s();
    const setTrack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"])({
        "SongCard.usePlayerStore[setTrack]": (state)=>state.setTrack
    }["SongCard.usePlayerStore[setTrack]"]);
    const cleanThumbnail = thumbnail.includes('hqdefault') ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : thumbnail;
    const handlePlay = (e)=>{
        e.stopPropagation(); // CRITICAL: Stops double-firing
        setTrack(id, {
            title,
            thumbnail: cleanThumbnail
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: ()=>setTrack(id, {
                title,
                thumbnail: cleanThumbnail
            }),
        className: "bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition group relative cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: cleanThumbnail,
                        alt: title,
                        className: "w-full h-full object-cover rounded shadow-lg"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handlePlay,
                            className: "p-3 bg-[#1ed760] rounded-full shadow-xl hover:scale-105 transition",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "text-black fill-black",
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-bold truncate text-white",
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-400",
                children: "YouTube Video"
            }, void 0, false, {
                fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/vercel/vikkmore/components/SongCard.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(SongCard, "Mj/W2C6zlX6xPf+fynZyYWKOKUY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$store$2f$usePlayerStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerStore"]
    ];
});
_c = SongCard;
var _c;
__turbopack_context__.k.register(_c, "SongCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/vercel/vikkmore/app/search/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/lib/youtube.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$components$2f$SongCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/components/SongCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/vercel/vikkmore/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SearchPage() {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleSearch = async (e)=>{
        e.preventDefault();
        const songs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchYouTube"])(query);
        setResults(songs);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSearch,
                className: "relative mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        className: "absolute left-3 top-2.5 text-zinc-400",
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: query,
                        onChange: (e)=>setQuery(e.target.value),
                        placeholder: "What do you want to listen to?",
                        className: "w-full max-w-md bg-[#242424] rounded-full py-2 px-10 focus:outline-none border-2 border-transparent focus:border-white"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
                children: results.map((song)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$vercel$2f$vikkmore$2f$components$2f$SongCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        ...song
                    }, song.id, false, {
                        fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/vercel/vikkmore/app/search/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(SearchPage, "Grp0ouI1isRc8g0LMx1FfgxNSWM=");
_c = SearchPage;
var _c;
__turbopack_context__.k.register(_c, "SearchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_vercel_vikkmore_08e557a7._.js.map
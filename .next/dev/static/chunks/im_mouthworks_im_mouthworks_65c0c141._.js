(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/im_mouthworks/im_mouthworks/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount) {
    const value = Number(amount || 0);
    try {
        return new Intl.NumberFormat("en-PH", {
            style: "currency",
            currency: "PHP"
        }).format(value);
    } catch (e) {
        return `₱${value.toFixed(2)}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/bluetooth.js [app-client] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MainLayout({ children, navItems, title }) {
    _s();
    const [sidebarOpen, setSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { logout, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 left-0 z-40 w-64 bg-sidebar text-sidebar-foreground transition-all duration-300 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative flex flex-col`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-sidebar-border flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-sidebar-primary rounded-lg p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                    className: "w-5 h-5 text-sidebar-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "font-bold text-lg text-sidebar-foreground",
                                        children: "Mouthworks"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-sidebar-accent-foreground",
                                        children: "Dental Clinic"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex-1 p-4 space-y-2 overflow-y-auto",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sidebar-accent/20 transition-colors cursor-pointer group text-sidebar-accent-foreground hover:text-sidebar-foreground",
                                    children: [
                                        item.icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            className: "w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, item.href, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-sidebar-border space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 rounded-lg bg-sidebar-accent/10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-sidebar-accent-foreground font-medium",
                                        children: "Logged in as"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-sidebar-foreground truncate",
                                        children: user?.name
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-sidebar-accent-foreground capitalize",
                                        children: user?.role
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleLogout,
                                variant: "outline",
                                className: "w-full justify-start gap-2 bg-sidebar hover:bg-sidebar-accent/20 border-sidebar-border text-sidebar-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    "Logout"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-16 border-b border-border bg-card flex items-center justify-between px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSidebarOpen(!sidebarOpen),
                                    className: "lg:hidden p-2 hover:bg-muted rounded-lg",
                                    children: sidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 90,
                                        columnNumber: 30
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                        lineNumber: 90,
                                        columnNumber: 58
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-foreground",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            sidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 z-30 lg:hidden",
                onClick: ()=>setSidebarOpen(false)
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(MainLayout, "nNzw5Phsrc45dHP0k6aHnqGpoq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MainLayout;
var _c;
__turbopack_context__.k.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appointmentService",
    ()=>appointmentService,
    "dentistService",
    ()=>dentistService,
    "inventoryService",
    ()=>inventoryService,
    "patientService",
    ()=>patientService,
    "paymentService",
    ()=>paymentService,
    "supplyRequestService",
    ()=>supplyRequestService,
    "treatmentRecordService",
    ()=>treatmentRecordService,
    "treatmentService",
    ()=>treatmentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$supabase$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/supabase-client.ts [app-client] (ecmascript)");
;
const getSupabase = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$supabase$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
};
// Helpers
const toSnakeCaseObject = (obj)=>{
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) return obj;
    const result = {};
    Object.entries(obj).forEach(([key, value])=>{
        const snakeKey = key.replace(/[A-Z]/g, (m)=>`_${m.toLowerCase()}`);
        result[snakeKey] = value;
    });
    return result;
};
const dentistService = {
    async getAll () {
        const { data, error } = await getSupabase().from("dentists").select("*").order("name", {
            ascending: true
        });
        if (error) {
            console.error("Supabase error fetching dentists:", error);
            throw new Error(`Failed to fetch dentists: ${error.message}`);
        }
        return data;
    },
    async getById (id) {
        const { data, error } = await getSupabase().from("dentists").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },
    async create (dentist) {
        const { data, error } = await getSupabase().from("dentists").insert([
            dentist
        ]).select().single();
        if (error) {
            console.error("Supabase error creating dentist:", error);
            throw new Error(`Failed to create dentist: ${error.message}`);
        }
        return data;
    },
    async update (id, updates) {
        const { data, error } = await getSupabase().from("dentists").update({
            ...updates,
            updated_at: new Date()
        }).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },
    async delete (id) {
        const { error } = await getSupabase().from("dentists").delete().eq("id", id);
        if (error) throw error;
    }
};
const patientService = {
    async getAll () {
        const { data, error } = await getSupabase().from("patients").select("*").order("created_at", {
            ascending: false
        });
        if (error) {
            console.error("Supabase error fetching patients:", error);
            throw new Error(`Failed to fetch patients: ${error.message}`);
        }
        return data;
    },
    async getById (id) {
        const { data, error } = await getSupabase().from("patients").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },
    async getByName (name) {
        try {
            const { data, error } = await getSupabase().from("patients").select("*").ilike("name", name).limit(1);
            if (error) {
                console.error("[v0] Supabase error fetching patient by name:", error);
                throw new Error(`Failed to fetch patient by name: ${error.message}`);
            }
            return data && data.length > 0 ? data[0] : null;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in patientService.getByName():", errorMsg);
            throw err;
        }
    },
    async getByEmail (email) {
        try {
            const { data, error } = await getSupabase().from("patients").select("*").eq("email", email).limit(1);
            if (error) {
                console.error("[v0] Supabase error fetching patient by email:", error);
                throw new Error(`Failed to fetch patient by email: ${error.message}`);
            }
            // Return the first result or null
            return data && data.length > 0 ? data[0] : null;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in patientService.getByEmail():", errorMsg);
            throw err;
        }
    },
    async create (patient) {
        const { data, error } = await getSupabase().from("patients").insert([
            patient
        ]).select().single();
        if (error) {
            console.error("Supabase error creating patient:", error);
            throw new Error(`Failed to create patient: ${error.message}`);
        }
        return data;
    },
    async update (id, updates) {
        const { data, error } = await getSupabase().from("patients").update({
            ...updates,
            updated_at: new Date()
        }).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },
    async delete (id) {
        const { error } = await getSupabase().from("patients").delete().eq("id", id);
        if (error) throw error;
    }
};
const appointmentService = {
    async getAll () {
        try {
            const { data, error } = await getSupabase().from("appointments").select("*, patients(name, email), dentists(name)").order("date", {
                ascending: false
            });
            if (error) {
                console.error("[v0] Supabase error fetching all appointments:", error);
                throw new Error(`Failed to fetch appointments: ${error.message}`);
            }
            return data;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.getAll():", errorMsg);
            throw err;
        }
    },
    async getByPatientId (patientId) {
        try {
            const { data, error } = await getSupabase().from("appointments").select("*, patients(name), dentists(name)").eq("patient_id", patientId).order("date", {
                ascending: false
            });
            if (error) {
                console.error("[v0] Supabase error fetching patient appointments:", error);
                throw new Error(`Failed to fetch patient appointments: ${error.message}`);
            }
            return data;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.getByPatientId():", errorMsg);
            throw err;
        }
    },
    async getByDentistId (dentistId) {
        try {
            const { data, error } = await getSupabase().from("appointments").select("*, patients(name, email), dentists(name)").eq("dentist_id", dentistId).order("date", {
                ascending: false
            });
            if (error) {
                console.error("[v0] Supabase error fetching dentist appointments:", error);
                throw new Error(`Failed to fetch dentist appointments: ${error.message}`);
            }
            return data;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.getByDentistId():", errorMsg);
            throw err;
        }
    },
    async create (appointment) {
        try {
            const { data, error } = await getSupabase().from("appointments").insert([
                appointment
            ]).select("*, patients(name), dentists(name)").single();
            if (error) {
                console.error("[v0] Supabase error creating appointment:", error);
                throw new Error(`Failed to create appointment: ${error.message}`);
            }
            return data;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.create():", errorMsg);
            throw err;
        }
    },
    async update (id, updates) {
        try {
            const { data, error } = await getSupabase().from("appointments").update({
                ...updates,
                updated_at: new Date()
            }).eq("id", id).select("*, patients(name), dentists(name)").single();
            if (error) {
                console.error("[v0] Supabase error updating appointment:", error);
                throw new Error(`Failed to update appointment: ${error.message}`);
            }
            return data;
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.update():", errorMsg);
            throw err;
        }
    },
    async delete (id) {
        try {
            const { error } = await getSupabase().from("appointments").delete().eq("id", id);
            if (error) {
                console.error("[v0] Supabase error deleting appointment:", error);
                throw new Error(`Failed to delete appointment: ${error.message}`);
            }
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Error in appointmentService.delete():", errorMsg);
            throw err;
        }
    },
    async changeStatus (id, status) {
        return this.update(id, {
            status
        });
    }
};
const treatmentService = {
    async getAll () {
        const { data, error } = await getSupabase().from("treatments").select("*").order("category", {
            ascending: true
        });
        if (error) throw error;
        return data;
    },
    async getById (id) {
        const { data, error } = await getSupabase().from("treatments").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },
    async create (treatment) {
        const { data, error } = await getSupabase().from("treatments").insert([
            treatment
        ]).select().single();
        if (error) throw error;
        return data;
    },
    async update (id, updates) {
        const { data, error } = await getSupabase().from("treatments").update({
            ...updates,
            updated_at: new Date()
        }).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },
    async delete (id) {
        const { error } = await getSupabase().from("treatments").delete().eq("id", id);
        if (error) throw error;
    }
};
const paymentService = {
    async getAll () {
        const { data, error } = await getSupabase().from("payments").select("*, patients(name, email), dentists(name)").order("date", {
            ascending: false
        });
        if (error) throw error;
        return data;
    },
    async getByPatientId (patientId) {
        try {
            const { data, error } = await getSupabase().from("payments").select("*, dentists(name)").eq("patient_id", patientId).order("date", {
                ascending: false
            });
            if (error) {
                console.warn("Error fetching patient payments:", error.message);
                return [];
            }
            return data || [];
        } catch (err) {
            console.warn("Exception fetching patient payments:", err instanceof Error ? err.message : err);
            return [];
        }
    },
    async getByDentistId (dentistId) {
        try {
            const { data, error } = await getSupabase().from("payments").select("*, patients(name, email)").eq("dentist_id", dentistId).order("date", {
                ascending: false
            });
            if (error) {
                console.warn("Error fetching dentist payments:", error.message);
                return [];
            }
            return data || [];
        } catch (err) {
            console.warn("Exception fetching dentist payments:", err instanceof Error ? err.message : err);
            return [];
        }
    },
    async create (payment) {
        const { data, error } = await getSupabase().from("payments").insert([
            payment
        ]).select("*, patients(name), dentists(name)").single();
        if (error) throw error;
        return data;
    },
    async update (id, updates) {
        const { data, error } = await getSupabase().from("payments").update({
            ...updates,
            updated_at: new Date()
        }).eq("id", id).select("*, patients(name), dentists(name)").single();
        if (error) throw error;
        return data;
    },
    async delete (id) {
        const { error } = await getSupabase().from("payments").delete().eq("id", id);
        if (error) throw error;
    },
    async getPatientBalance (patientId) {
        try {
            const { data, error } = await getSupabase().from("payments").select("amount, status").eq("patient_id", patientId);
            if (error) {
                console.warn("Error fetching patient balance:", error.message);
                return {
                    totalBalance: 0,
                    totalPaid: 0,
                    total: 0
                };
            }
            let totalBalance = 0;
            let totalPaid = 0;
            data?.forEach((payment)=>{
                if (payment.status === "paid") {
                    totalPaid += payment.amount;
                } else if (payment.status === "unpaid") {
                    totalBalance += payment.amount;
                } else if (payment.status === "partial") {
                    totalBalance += payment.amount;
                }
            });
            return {
                totalBalance,
                totalPaid,
                total: totalBalance + totalPaid
            };
        } catch (err) {
            console.warn("Exception fetching patient balance:", err instanceof Error ? err.message : err);
            return {
                totalBalance: 0,
                totalPaid: 0,
                total: 0
            };
        }
    },
    async getDentistEarnings (dentistId) {
        try {
            const { data, error } = await getSupabase().from("payments").select("amount, status, appointment_id, appointments(status)").eq("dentist_id", dentistId);
            if (error) {
                console.warn("Error fetching dentist earnings:", error.message);
                return {
                    totalEarned: 0,
                    totalPending: 0,
                    totalCompleted: 0,
                    count: 0
                };
            }
            let totalEarned = 0;
            let totalPending = 0;
            let totalCompleted = 0;
            data?.forEach((payment)=>{
                // Determine if payment should be counted based on appointment status
                const appointmentStatus = payment.appointments?.status;
                // Only count as earned if appointment is completed
                if (appointmentStatus === "completed") {
                    totalEarned += payment.amount;
                    totalCompleted += 1;
                } else if (appointmentStatus === "confirmed") {
                    totalPending += payment.amount;
                } else if (payment.status === "paid") {
                    totalEarned += payment.amount;
                    totalCompleted += 1;
                } else if (payment.status === "unpaid") {
                    totalPending += payment.amount;
                } else if (payment.status === "partial") {
                    totalEarned += payment.amount;
                }
            });
            return {
                totalEarned,
                totalPending,
                totalCompleted,
                count: data?.length || 0
            };
        } catch (err) {
            console.warn("Exception fetching dentist earnings:", err instanceof Error ? err.message : err);
            return {
                totalEarned: 0,
                totalPending: 0,
                totalCompleted: 0,
                count: 0
            };
        }
    }
};
const inventoryService = {
    async getAll () {
        const { data, error } = await getSupabase().from("inventory").select("*").order("status", {
            ascending: false
        });
        if (error) throw error;
        return data;
    },
    async getById (id) {
        const { data, error } = await getSupabase().from("inventory").select("*").eq("id", id).single();
        if (error) throw error;
        return data;
    },
    async create (item) {
        // Use a server-side API route to create inventory. This avoids RLS/cors/network issues
        // when the client cannot directly insert into the DB.
        try {
            const supabaseClient = getSupabase();
            // Try to include the user's access token so the server route can verify staff role
            let token;
            try {
                const sessionResp = await supabaseClient.auth.getSession();
                token = sessionResp?.data?.session?.access_token || sessionResp?.data?.access_token;
            } catch (e) {
            // ignore
            }
            const headers = {
                "Content-Type": "application/json"
            };
            if (token) headers["Authorization"] = `Bearer ${token}`;
            const res = await fetch("/api/inventory/create", {
                method: "POST",
                headers,
                body: JSON.stringify(item)
            });
            const json = await res.json();
            if (!res.ok) {
                const errMsg = json?.error || `Status ${res.status}`;
                console.error("[v0] Inventory create API error:", errMsg);
                throw new Error(errMsg);
            }
            return json;
        } catch (err) {
            const errMsg = err instanceof Error ? err.message : JSON.stringify(err);
            console.error("[v0] Failed to call inventory create API:", errMsg);
            throw new Error(errMsg);
        }
    },
    async update (id, updates) {
        const payload = toSnakeCaseObject(updates);
        const { data, error } = await getSupabase().from("inventory").update({
            ...payload,
            updated_at: new Date()
        }).eq("id", id).select().single();
        if (error) throw error;
        return data;
    },
    async delete (id) {
        const { error } = await getSupabase().from("inventory").delete().eq("id", id);
        if (error) throw error;
    },
    async getLowStock () {
        const { data, error } = await getSupabase().from("inventory").select("*").or("status.eq.low,status.eq.critical");
        if (error) throw error;
        return data;
    }
};
const treatmentRecordService = {
    async getByPatientId (patientId) {
        const { data, error } = await getSupabase().from("treatment_records").select("*, treatments(name, category), dentists(name)").eq("patient_id", patientId).order("date", {
            ascending: false
        });
        if (error) throw error;
        return data;
    },
    async create (record) {
        const { data, error } = await getSupabase().from("treatment_records").insert([
            record
        ]).select("*, treatments(name), dentists(name)").single();
        if (error) throw error;
        return data;
    }
};
const supplyRequestService = {
    async getAll () {
        const { data, error } = await getSupabase().from("supply_requests").select("*, inventory(name, category), staff(name)").order("requested_date", {
            ascending: false
        });
        if (error) throw error;
        // Try to fetch dentist info separately if dentist_id exists
        if (data && data.length > 0 && data[0].dentist_id) {
            try {
                const dentistIds = [
                    ...new Set(data.map((d)=>d.dentist_id).filter(Boolean))
                ];
                const { data: dentists } = await getSupabase().from("dentists").select("id, name").in("id", dentistIds);
                const dentistMap = Object.fromEntries(dentists?.map((d)=>[
                        d.id,
                        d
                    ]) || []);
                return data.map((req)=>({
                        ...req,
                        dentists: req.dentist_id ? dentistMap[req.dentist_id] : null
                    }));
            } catch (err) {
                console.warn("[v0] Could not fetch dentist info:", err);
            }
        }
        return data;
    },
    async getPending () {
        const { data, error } = await getSupabase().from("supply_requests").select("*, inventory(name, category), staff(name)").eq("status", "pending");
        if (error) throw error;
        // Try to fetch dentist info separately if dentist_id exists
        if (data && data.length > 0 && data[0].dentist_id) {
            try {
                const dentistIds = [
                    ...new Set(data.map((d)=>d.dentist_id).filter(Boolean))
                ];
                const { data: dentists } = await getSupabase().from("dentists").select("id, name").in("id", dentistIds);
                const dentistMap = Object.fromEntries(dentists?.map((d)=>[
                        d.id,
                        d
                    ]) || []);
                return data.map((req)=>({
                        ...req,
                        dentists: req.dentist_id ? dentistMap[req.dentist_id] : null
                    }));
            } catch (err) {
                console.warn("[v0] Could not fetch dentist info:", err);
            }
        }
        return data;
    },
    async create (request) {
        try {
            const { data, error } = await getSupabase().from("supply_requests").insert([
                request
            ]).select("*, inventory(name, category), staff(name)").single();
            if (error) {
                console.error("[v0] Supabase error creating supply request:", error);
                throw new Error(`Failed to create supply request: ${error.message}`);
            }
            // Fetch dentist info separately if dentist_id exists
            if (data && data.dentist_id) {
                try {
                    const { data: dentist } = await getSupabase().from("dentists").select("id, name").eq("id", data.dentist_id).single();
                    if (dentist) {
                        data.dentists = dentist;
                    }
                } catch (err) {
                    console.warn("[v0] Could not fetch dentist info:", err);
                }
            }
            return data;
        } catch (err) {
            console.error("[v0] Exception in supplyRequestService.create:", err);
            throw err;
        }
    },
    async update (id, updates) {
        const { data, error } = await getSupabase().from("supply_requests").update({
            ...updates,
            updated_at: new Date()
        }).eq("id", id).select().single();
        if (error) throw error;
        return data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScheduleAppointmentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ScheduleAppointmentModal({ onClose, onSubmit }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        patient_id: "",
        patient_name: "",
        dentist_id: null,
        dentist_name: "",
        date: "",
        time: "",
        service: "Cleaning",
        notes: ""
    });
    const [patients, setPatients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [dentists, setDentists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScheduleAppointmentModal.useEffect": ()=>{
            loadData();
        }
    }["ScheduleAppointmentModal.useEffect"], []);
    const loadData = async ()=>{
        try {
            setLoading(true);
            const [patientsData, dentistsData] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patientService"].getAll(),
                __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dentistService"].getAll()
            ]);
            setPatients(patientsData || []);
            setDentists(dentistsData || []);
        } catch (err) {
            setError("Failed to load patients and dentists");
            console.error("Error loading data:", err);
        } finally{
            setLoading(false);
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handlePatientChange = (e)=>{
        const patientId = e.target.value;
        const patient = patients.find((p)=>p.id === patientId);
        setFormData((prev)=>({
                ...prev,
                patient_id: patientId,
                patient_name: patient?.name || ""
            }));
    };
    const handleDoctorChange = (e)=>{
        const dentistId = e.target.value;
        const dentist = dentists.find((d)=>d.id === dentistId);
        setFormData((prev)=>({
                ...prev,
                dentist_id: dentistId === "" ? null : dentistId,
                dentist_name: dentist?.name || ""
            }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (formData.patient_id && formData.dentist_id && formData.date && formData.time) {
            const submitData = {
                patient_id: formData.patient_id,
                dentist_id: formData.dentist_id,
                date: formData.date,
                time: formData.time,
                service: formData.service,
                notes: formData.notes,
                status: "pending"
            };
            console.log("[v0] Submitting appointment to dentist:", formData.dentist_name, "with data:", submitData);
            onSubmit(submitData);
        } else {
            setError("Please fill in all required fields including selecting a dentist");
        }
    };
    // Generate available time slots
    const timeSlots = [
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-lg shadow-2xl max-w-md w-full max-h-96 overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-border sticky top-0 bg-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-foreground",
                            children: "Schedule Appointment"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-muted rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 bg-destructive/10 text-destructive text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Patient *"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: "Loading patients..."
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "patient_id",
                                    value: formData.patient_id,
                                    onChange: handlePatientChange,
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select patient..."
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this),
                                        patients.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: p.id,
                                                children: p.name
                                            }, p.id, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: [
                                        "Dentist ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 151,
                                            columnNumber: 76
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "dentist_id",
                                    value: formData.dentist_id || "",
                                    onChange: handleDoctorChange,
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select dentist..."
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        dentists.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: d.id,
                                                children: d.name
                                            }, d.id, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: "The selected dentist will be notified to approve this appointment"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Service"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "service",
                                    value: formData.service,
                                    onChange: handleInputChange,
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Cleaning"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Check-up"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Extraction"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Filling"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Root Canal"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: "Whitening"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Date *"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    name: "date",
                                    value: formData.date,
                                    onChange: handleInputChange,
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Time *"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    name: "time",
                                    value: formData.time,
                                    onChange: handleInputChange,
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select time..."
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this),
                                        timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: time,
                                                children: time
                                            }, time, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-sm font-medium text-foreground",
                                    children: "Notes (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    name: "notes",
                                    value: formData.notes,
                                    onChange: handleInputChange,
                                    placeholder: "Any special notes...",
                                    className: "w-full p-2 border border-border rounded-lg text-sm resize-none bg-background text-foreground",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    onClick: onClose,
                                    variant: "outline",
                                    className: "flex-1 bg-transparent",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground",
                                    disabled: loading,
                                    children: "Schedule"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(ScheduleAppointmentModal, "WORbM7RpxcFJCbmwMZYDq9EHaXA=");
_c = ScheduleAppointmentModal;
var _c;
__turbopack_context__.k.register(_c, "ScheduleAppointmentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AssignDentistModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AssignDentistModal({ appointment, onClose, onAssign }) {
    _s();
    const [dentists, setDentists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDentist, setSelectedDentist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AssignDentistModal.useEffect": ()=>{
            const loadDentists = {
                "AssignDentistModal.useEffect.loadDentists": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dentistService"].getAll().catch({
                            "AssignDentistModal.useEffect.loadDentists": ()=>[]
                        }["AssignDentistModal.useEffect.loadDentists"]);
                        setDentists(data || []);
                    } catch (error) {
                        console.error("[v0] Error loading dentists:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["AssignDentistModal.useEffect.loadDentists"];
            loadDentists();
        }
    }["AssignDentistModal.useEffect"], []);
    const handleAssign = ()=>{
        if (selectedDentist) {
            onAssign(selectedDentist);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-lg shadow-2xl max-w-md w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-foreground",
                            children: "Assign Dentist"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-muted rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground mb-3",
                                    children: [
                                        "Patient: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-foreground",
                                            children: appointment.patients?.name || appointment.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                            lineNumber: 54,
                                            columnNumber: 72
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Service: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-foreground",
                                            children: appointment.service
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                            lineNumber: 55,
                                            columnNumber: 67
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        "Date & Time: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-foreground",
                                            children: [
                                                appointment.date,
                                                " at ",
                                                appointment.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                            lineNumber: 56,
                                            columnNumber: 71
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground",
                                    children: "Select Dentist"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4 text-muted-foreground text-sm",
                                    children: "Loading dentists..."
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this) : dentists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4 text-muted-foreground text-sm",
                                    children: "No dentists available"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 max-h-80 overflow-y-auto",
                                    children: dentists.map((dentist)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedDentist(dentist.id),
                                            className: `w-full p-3 border rounded-lg transition-colors text-left ${selectedDentist === dentist.id ? "border-primary bg-primary/10" : "border-border hover:border-primary"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-foreground",
                                                    children: [
                                                        "Dr. ",
                                                        dentist.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 21
                                                }, this),
                                                dentist.specialization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-muted-foreground",
                                                    children: dentist.specialization
                                                }, void 0, false, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, dentist.id, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-border flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            variant: "outline",
                            className: "flex-1",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAssign,
                            disabled: !selectedDentist,
                            className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground",
                            children: "Assign"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(AssignDentistModal, "6nc1RTKEByKkJtDRgPqoTm1f0rQ=");
_c = AssignDentistModal;
var _c;
__turbopack_context__.k.register(_c, "AssignDentistModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HRAppointments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$layout$2f$main$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/bluetooth.js [app-client] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$schedule$2d$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/modals/schedule-appointment-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$assign$2d$dentist$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/modals/assign-dentist-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function HRAppointments() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showScheduleModal, setShowScheduleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAssignModal, setShowAssignModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedAppointment, setSelectedAppointment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HRAppointments.useEffect": ()=>{
            loadAppointments();
        }
    }["HRAppointments.useEffect"], []);
    const loadAppointments = async ()=>{
        try {
            setLoading(true);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].getAll();
            setAppointments(data || []);
        } catch (error) {
            console.error("[v0] Error loading appointments:", error);
        } finally{
            setLoading(false);
        }
    };
    const navItems = [
        {
            label: "Dashboard",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 67,
                columnNumber: 33
            }, this),
            href: "/hr/dashboard"
        },
        {
            label: "Patients",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 68,
                columnNumber: 32
            }, this),
            href: "/hr/patients"
        },
        {
            label: "Appointments",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 69,
                columnNumber: 36
            }, this),
            href: "/hr/appointments"
        },
        {
            label: "Treatments",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 70,
                columnNumber: 34
            }, this),
            href: "/hr/treatments"
        },
        {
            label: "Payments",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 71,
                columnNumber: 32
            }, this),
            href: "/hr/payments"
        },
        {
            label: "Inventory",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 72,
                columnNumber: 33
            }, this),
            href: "/hr/inventory"
        },
        {
            label: "Reports",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 73,
                columnNumber: 31
            }, this),
            href: "/hr/reports"
        },
        {
            label: "Settings",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 74,
                columnNumber: 32
            }, this),
            href: "/hr/settings"
        }
    ];
    const handleScheduleAppointment = async (data)=>{
        try {
            const newAppointment = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].create(data);
            setAppointments([
                newAppointment,
                ...appointments
            ]);
            setShowScheduleModal(false);
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
            console.error("[v0] Error scheduling appointment:", errorMsg);
            alert(`Error: ${errorMsg}`);
        }
    };
    const handleAssignDentist = async (dentistId)=>{
        if (!selectedAppointment) return;
        try {
            // Assign dentist and mark as pending so the dentist sees it for approval
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].update(selectedAppointment.id, {
                dentist_id: dentistId,
                status: "pending"
            });
            setAppointments(appointments.map((a)=>a.id === selectedAppointment.id ? updated : a));
            // Record the assignment in treatment_records so the dentist has a persisted assignment entry
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treatmentRecordService"].create({
                    appointment_id: selectedAppointment.id,
                    patient_id: selectedAppointment.patient_id,
                    dentist_id: dentistId,
                    description: "Assigned appointment by HR",
                    notes: `Assigned on ${new Date().toISOString()}`,
                    date: new Date().toISOString()
                });
            } catch (recErr) {
                console.warn("[v0] Warning creating treatment record for assignment:", recErr);
            }
            setShowAssignModal(false);
            setSelectedAppointment(null);
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
            console.error("[v0] Error assigning dentist:", errorMsg);
            alert(`Error: ${errorMsg}`);
        }
    };
    const handleDeleteAppointment = async (id)=>{
        if (confirm("Are you sure you want to cancel this appointment?")) {
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].delete(id);
                setAppointments(appointments.filter((a)=>a.id !== id));
            } catch (error) {
                console.error("[v0] Error deleting appointment:", error);
            }
        }
    };
    const handleStatusChange = async (id, newStatus)=>{
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].changeStatus(id, newStatus);
            setAppointments(appointments.map((a)=>a.id === id ? updated : a));
        } catch (error) {
            console.error("[v0] Error updating appointment status:", error);
        }
    };
    const openAssignModal = (apt)=>{
        setSelectedAppointment(apt);
        setShowAssignModal(true);
    };
    const filteredAppointments = filter === "all" ? appointments : appointments.filter((a)=>a.status === filter);
    const statusGroups = {
        pending: filteredAppointments.filter((a)=>a.status === "pending"),
        confirmed: filteredAppointments.filter((a)=>a.status === "confirmed"),
        completed: filteredAppointments.filter((a)=>a.status === "completed")
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$layout$2f$main$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        navItems: navItems,
        title: "Appointment Management",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-foreground",
                                        children: "Schedule Appointments"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Manage patient bookings and dentist assignments"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowScheduleModal(true),
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    "New Appointment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    statusGroups.pending.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-blue-300 bg-blue-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2 text-blue-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-5 h-5 text-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        "Patient Booking Requests (",
                                        statusGroups.pending.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: statusGroups.pending.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-2 border-blue-300 bg-white rounded-lg hover:bg-blue-50/30 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-semibold text-lg text-foreground",
                                                                    children: apt.patients?.name || "Unknown Patient"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        apt.service || "General Visit",
                                                                        apt.dentist_id ? ` with Dr. ${apt.dentists?.name}` : " - Dentist needed"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-right",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-primary",
                                                                    children: apt.date
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: apt.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                    lineNumber: 199,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                apt.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-3 p-2 bg-muted/50 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: "Patient Notes:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        apt.notes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: !apt.dentist_id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>openAssignModal(apt),
                                                                className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                                                        className: "w-4 h-4 mr-2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "Assign Dentist"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                onClick: ()=>handleDeleteAppointment(apt.id),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3 h-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "flex-1 text-sm text-muted-foreground pt-2",
                                                                children: "Dentist assigned, awaiting approval"
                                                            }, void 0, false, {
                                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                size: "sm",
                                                                variant: "outline",
                                                                onClick: ()=>openAssignModal(apt),
                                                                className: "text-xs",
                                                                children: "Change"
                                                            }, void 0, false, {
                                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, apt.id, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 183,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            "all",
                            "pending",
                            "confirmed",
                            "completed"
                        ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(status),
                                className: `px-4 py-2 rounded-lg font-medium transition-colors ${filter === status ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"}`,
                                children: [
                                    status.charAt(0).toUpperCase() + status.slice(1),
                                    status !== "all" && ` (${statusGroups[status]?.length || 0})`
                                ]
                            }, status, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center text-muted-foreground",
                                children: "Loading appointments..."
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: filter === "all" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                statusGroups.pending.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-5 h-5 text-yellow-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Pending Approval (",
                                                    statusGroups.pending.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 277,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: statusGroups.pending.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppointmentCard, {
                                                        appointment: apt,
                                                        onStatusChange: handleStatusChange,
                                                        onDelete: handleDeleteAppointment
                                                    }, apt.id, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 284,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 283,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 19
                                }, this),
                                statusGroups.confirmed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Confirmed (",
                                                    statusGroups.confirmed.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 300,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: statusGroups.confirmed.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppointmentCard, {
                                                        appointment: apt,
                                                        onStatusChange: handleStatusChange,
                                                        onDelete: handleDeleteAppointment
                                                    }, apt.id, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 19
                                }, this),
                                statusGroups.completed.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5 text-green-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Completed (",
                                                    statusGroups.completed.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 324,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 323,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: statusGroups.completed.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppointmentCard, {
                                                        appointment: apt,
                                                        onStatusChange: handleStatusChange,
                                                        onDelete: handleDeleteAppointment
                                                    }, apt.id, false, {
                                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 27
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 330,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 329,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 322,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                className: "pt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: filteredAppointments.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppointmentCard, {
                                            appointment: apt,
                                            onStatusChange: handleStatusChange,
                                            onDelete: handleDeleteAppointment
                                        }, apt.id, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 346,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                            lineNumber: 345,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            showScheduleModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$schedule$2d$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowScheduleModal(false),
                onSubmit: handleScheduleAppointment
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            showAssignModal && selectedAppointment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$assign$2d$dentist$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                appointment: selectedAppointment,
                onClose: ()=>setShowAssignModal(false),
                onAssign: handleAssignDentist
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_s(HRAppointments, "ImAvazxDPt8PlsUxa1+jYnMv5YQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = HRAppointments;
function AppointmentCard({ appointment, onStatusChange, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-foreground",
                                children: appointment.patients?.name || "Unknown Patient"
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 384,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                    appointment.service || "General Visit",
                                    " with ",
                                    appointment.dentists?.name || "Unassigned"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 383,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `px-3 py-1 rounded-full text-xs font-semibold ${appointment.status === "confirmed" ? "bg-green-100 text-green-700" : appointment.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`,
                        children: appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)
                    }, void 0, false, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 382,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            appointment.date,
                            " at ",
                            appointment.time
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            appointment.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>onStatusChange(appointment.id, "confirmed"),
                                        className: "bg-green-600 hover:bg-green-700 text-white text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this),
                                            "Confirm"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>onStatusChange(appointment.id, "cancelled"),
                                        variant: "outline",
                                        className: "text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-3 h-3 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            "Reject"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                        lineNumber: 416,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                variant: "outline",
                                className: "text-xs text-destructive hover:bg-destructive/10 bg-transparent",
                                onClick: ()=>onDelete(appointment.id),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/im_mouthworks/im_mouthworks/app/hr/appointments/page.tsx",
        lineNumber: 381,
        columnNumber: 5
    }, this);
}
_c1 = AppointmentCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "HRAppointments");
__turbopack_context__.k.register(_c1, "AppointmentCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=im_mouthworks_im_mouthworks_65c0c141._.js.map
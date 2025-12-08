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
        const payload = toSnakeCaseObject(item);
        const { data, error } = await getSupabase().from("inventory").insert([
            payload
        ]).select().single();
        if (error) throw error;
        return data;
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
"[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientBookAppointmentModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PatientBookAppointmentModal({ onClose, onSubmit }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        service: "",
        date: "",
        time: "",
        notes: ""
    });
    const [treatments, setTreatments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientBookAppointmentModal.useEffect": ()=>{
            const loadTreatments = {
                "PatientBookAppointmentModal.useEffect.loadTreatments": async ()=>{
                    try {
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["treatmentService"].getAll().catch({
                            "PatientBookAppointmentModal.useEffect.loadTreatments": ()=>[]
                        }["PatientBookAppointmentModal.useEffect.loadTreatments"]);
                        setTreatments(data || []);
                    } catch (err) {
                        console.error("[v0] Error loading treatments:", err);
                        setError("Failed to load available services");
                    } finally{
                        setLoading(false);
                    }
                }
            }["PatientBookAppointmentModal.useEffect.loadTreatments"];
            loadTreatments();
        }
    }["PatientBookAppointmentModal.useEffect"], []);
    const handleSubmit = ()=>{
        if (!formData.service || !formData.date || !formData.time) {
            setError("Please fill in all required fields");
            return;
        }
        onSubmit({
            service: formData.service,
            date: formData.date,
            time: formData.time,
            notes: formData.notes,
            status: "pending"
        });
    };
    // Mock available dates and slots - can be enhanced later
    const generateAvailableDates = ()=>{
        const dates = [];
        const today = new Date();
        for(let i = 1; i <= 14; i++){
            const date = new Date(today);
            date.setDate(date.getDate() + i);
            dates.push(date.toISOString().split("T")[0]);
        }
        return dates;
    };
    const availableDates = generateAvailableDates();
    const timeSlots = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-card rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-foreground",
                            children: "Book an Appointment"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1 hover:bg-muted rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 space-y-4",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 bg-destructive/10 border border-destructive/30 rounded-lg flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-5 h-5 text-destructive flex-shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-destructive",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground",
                                    children: [
                                        "Service ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 94,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this),
                                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4 text-muted-foreground text-sm",
                                    children: "Loading services..."
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this) : treatments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-4 text-muted-foreground text-sm",
                                    children: "No services available"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.service,
                                    onChange: (e)=>{
                                        setFormData((prev)=>({
                                                ...prev,
                                                service: e.target.value
                                            }));
                                        setError("");
                                    },
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select a service..."
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this),
                                        treatments.map((treatment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: treatment.name,
                                                children: [
                                                    treatment.name,
                                                    " ",
                                                    treatment.price ? `- ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(treatment.price)}` : ""
                                                ]
                                            }, treatment.id, true, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground",
                                    children: [
                                        "Preferred Date ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.date,
                                    onChange: (e)=>{
                                        setFormData((prev)=>({
                                                ...prev,
                                                date: e.target.value
                                            }));
                                        setError("");
                                    },
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select a date..."
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        availableDates.map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: date,
                                                children: new Date(date).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })
                                            }, date, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground",
                                    children: [
                                        "Preferred Time ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-destructive",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 149,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-3 gap-2",
                                    children: timeSlots.map((time)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setFormData((prev)=>({
                                                        ...prev,
                                                        time
                                                    }));
                                                setError("");
                                            },
                                            className: `p-2 border rounded-lg transition-colors text-sm font-medium ${formData.time === time ? "border-primary bg-primary/10 text-primary" : "border-border hover:border-primary text-foreground hover:bg-muted"}`,
                                            children: time
                                        }, time, false, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-foreground",
                                    children: "Additional Notes (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.notes,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                notes: e.target.value
                                            })),
                                    placeholder: "Any special requests or concerns...",
                                    className: "w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary",
                                    rows: 3
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        formData.service && formData.date && formData.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-muted/50 p-3 rounded-lg space-y-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted-foreground",
                                    children: "Booking Summary:"
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Service:"
                                                }, void 0, false, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                formData.service
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Date:"
                                                }, void 0, false, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                new Date(formData.date).toLocaleDateString("en-US", {
                                                    weekday: "short",
                                                    month: "short",
                                                    day: "numeric"
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium",
                                                    children: "Time:"
                                                }, void 0, false, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                formData.time
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                            lineNumber: 199,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 185,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                    lineNumber: 83,
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
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleSubmit,
                            disabled: !formData.service || !formData.date || !formData.time,
                            className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground",
                            children: "Book Appointment"
                        }, void 0, false, {
                            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(PatientBookAppointmentModal, "sgC9ifj6TuwRDfIjXROyaW3f2VM=");
_c = PatientBookAppointmentModal;
var _c;
__turbopack_context__.k.register(_c, "PatientBookAppointmentModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PatientAppointments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$layout$2f$main$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/layout/main-layout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/lib/db-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$patient$2d$book$2d$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/components/modals/patient-book-appointment-modal.tsx [app-client] (ecmascript)");
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
function PatientAppointments() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [patientId, setPatientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showBookModal, setShowBookModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bookingSuccess, setBookingSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PatientAppointments.useEffect": ()=>{
            const loadData = {
                "PatientAppointments.useEffect.loadData": async ()=>{
                    try {
                        if (!user?.id) {
                            setLoading(false);
                            return;
                        }
                        // First, fetch the patient record to get the patient ID
                        const patientData = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patientService"].getByEmail(user.email);
                        if (patientData?.id) {
                            setPatientId(patientData.id);
                            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].getByPatientId(patientData.id);
                            setAppointments(data || []);
                        } else {
                            console.warn("[v0] Patient record not found for user:", user.email);
                            setAppointments([]);
                        }
                    } catch (error) {
                        console.error("[v0] Error loading appointments:", error instanceof Error ? error.message : error);
                        setAppointments([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["PatientAppointments.useEffect.loadData"];
            loadData();
        }
    }["PatientAppointments.useEffect"], [
        user?.id,
        user?.email
    ]);
    const navItems = [
        {
            label: "Dashboard",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 50,
                columnNumber: 33
            }, this),
            href: "/patient/dashboard"
        },
        {
            label: "My Appointments",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 51,
                columnNumber: 39
            }, this),
            href: "/patient/appointments"
        },
        {
            label: "My Profile",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 52,
                columnNumber: 34
            }, this),
            href: "/patient/profile"
        },
        {
            label: "Payment History",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 53,
                columnNumber: 39
            }, this),
            href: "/patient/payments"
        }
    ];
    const handleBookAppointment = async (data)=>{
        try {
            if (!patientId) {
                alert("Error: Patient record not found. Please contact HR.");
                return;
            }
            const newAppointment = await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].create({
                patient_id: patientId,
                service: data.service,
                date: data.date,
                time: data.time,
                notes: data.notes,
                status: "pending"
            });
            setAppointments([
                newAppointment,
                ...appointments
            ]);
            setShowBookModal(false);
            setBookingSuccess(true);
            setTimeout(()=>setBookingSuccess(false), 5000);
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : JSON.stringify(error);
            console.error("[v0] Error booking appointment:", errorMsg);
            alert(`Error: ${errorMsg}`);
        }
    };
    const handleCancelAppointment = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$db$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appointmentService"].delete(id);
            setAppointments(appointments.filter((a)=>a.id !== id));
        } catch (error) {
            console.error("[v0] Error cancelling appointment:", error);
        }
    };
    const pendingBookings = appointments.filter((a)=>a.status === "pending");
    const upcomingAppointments = appointments.filter((a)=>a.status === "confirmed" && a.status !== "completed");
    const completedAppointments = appointments.filter((a)=>a.status === "completed");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$layout$2f$main$2d$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        navItems: navItems,
        title: "My Appointments",
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
                                        children: "My Appointments"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "Book new appointments and view your scheduled visits"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>setShowBookModal(true),
                                className: "bg-primary hover:bg-primary/90 text-primary-foreground gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    "Book Appointment"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    bookingSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-green-50 border border-green-200 rounded-lg flex gap-2 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-green-900",
                                        children: "Booking Accepted!"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-green-800",
                                        children: "Your appointment request has been submitted. HR will review and assign a dentist, then send it for approval."
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    pendingBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-yellow-200 bg-yellow-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-5 h-5 text-yellow-600"
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            "Pending Review (",
                                            pendingBookings.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        className: "text-yellow-800",
                                        children: "Your booking requests are being reviewed by HR and a dentist will be assigned"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: pendingBookings.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border border-yellow-300 rounded-lg bg-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: apt.service
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Awaiting HR assignment and dentist approval"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 142,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700",
                                                            children: "Pending"
                                                        }, void 0, false, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-sm text-muted-foreground mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 150,
                                                                    columnNumber: 25
                                                                }, this),
                                                                new Date(apt.date).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 25
                                                                }, this),
                                                                apt.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 21
                                                }, this),
                                                apt.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-3",
                                                    children: [
                                                        "Note: ",
                                                        apt.notes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "outline",
                                                    size: "sm",
                                                    className: "text-xs text-destructive hover:bg-destructive/10 bg-transparent",
                                                    onClick: ()=>handleCancelAppointment(apt.id),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-3 h-3 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Cancel Request"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, apt.id, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            "Upcoming Appointments"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Your scheduled appointments"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 182,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-muted-foreground",
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this) : upcomingAppointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-muted-foreground",
                                        children: "No approved appointments yet. HR will schedule appointments that will appear here once your dentist approves them."
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: upcomingAppointments.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: apt.service
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "with ",
                                                                        apt.dentists?.name || "Pending"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `px-3 py-1 rounded-full text-xs font-semibold ${apt.status === "confirmed" ? "bg-green-100 text-green-700" : apt.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`,
                                                            children: apt.status.charAt(0).toUpperCase() + apt.status.slice(1)
                                                        }, void 0, false, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-sm text-muted-foreground mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 25
                                                                }, this),
                                                                new Date(apt.date).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 25
                                                                }, this),
                                                                apt.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 217,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 21
                                                }, this),
                                                apt.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-muted-foreground mb-3",
                                                    children: [
                                                        "Note: ",
                                                        apt.notes
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 35
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            className: "text-xs bg-transparent",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 225,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Reschedule"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "sm",
                                                            className: "text-xs text-destructive hover:bg-destructive/10 bg-transparent",
                                                            onClick: ()=>handleCancelAppointment(apt.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "w-3 h-3 mr-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 25
                                                                }, this),
                                                                "Cancel"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, apt.id, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    completedAppointments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        children: "Completed Appointments"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                        children: "Your past dental visits"
                                    }, void 0, false, {
                                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: completedAppointments.map((apt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border border-border rounded-lg opacity-75 hover:opacity-100 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-foreground",
                                                                    children: apt.service
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: [
                                                                        "with ",
                                                                        apt.dentists?.name
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700",
                                                            children: "Completed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this),
                                                                new Date(apt.date).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, this),
                                                                apt.time
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, apt.id, true, {
                                            fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                                lineNumber: 252,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            showBookModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$components$2f$modals$2f$patient$2d$book$2d$appointment$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowBookModal(false),
                onSubmit: handleBookAppointment
            }, void 0, false, {
                fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/im_mouthworks/im_mouthworks/app/patient/appointments/page.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(PatientAppointments, "pinrqAz4HXUh6AlTPi5XwUe5UL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = PatientAppointments;
var _c;
__turbopack_context__.k.register(_c, "PatientAppointments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=im_mouthworks_im_mouthworks_bae0c566._.js.map
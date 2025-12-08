module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/im_mouthworks/im_mouthworks/app/api/inventory/create/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/@supabase/ssr/dist/module/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/im_mouthworks/im_mouthworks/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        // Prefer explicit server config. Fall back to NEXT_PUBLIC_SUPABASE_URL default if present.
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "https://xpybqjfofdmkeiijvwnx.supabase.co";
        // Expect the client to forward the user's access token in Authorization header
        const authHeader = req.headers.get("authorization") || "";
        const token = authHeader.replace(/^Bearer\s+/i, "");
        if (!token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing Authorization token"
            }, {
                status: 401
            });
        }
        const body = await req.json();
        // Service role must be provided in production. Allow a DEV-only fallback to anon key.
        // WARNING: This is insecure and only intended to unblock local development/testing.
        let serverKey = process.env.SUPABASE_SERVICE_ROLE || process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE;
        if (!serverKey) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                serverKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
                console.warn("[v0] SUPABASE_SERVICE_ROLE not set — falling back to NEXT_PUBLIC_SUPABASE_ANON_KEY for local development (insecure).");
            }
        }
        if (!serverKey) {
            const hint = "Set SUPABASE_SERVICE_ROLE env var (use your Supabase project's service_role key).\nIn PowerShell: $env:SUPABASE_SERVICE_ROLE='your-key'";
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Missing SUPABASE_SERVICE_ROLE. ${hint}`
            }, {
                status: 500
            });
        }
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, serverKey, {
            global: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        });
        // Verify token and fetch the user
        const { data: userRes, error: userErr } = await supabase.auth.getUser();
        if (userErr || !userRes?.user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid or expired token"
            }, {
                status: 401
            });
        }
        const userId = userRes.user.id;
        // Check staff table to ensure the caller is allowed to add inventory
        const { data: staffRow, error: staffErr } = await supabase.from("staff").select("id, role, user_id").eq("user_id", userId).limit(1).maybeSingle();
        if (staffErr) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: staffErr.message || String(staffErr)
            }, {
                status: 500
            });
        }
        if (!staffRow || staffRow.role && staffRow.role !== "hr" && staffRow.role !== "staff") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Forbidden: not a staff member"
            }, {
                status: 403
            });
        }
        // simple snake_case conversion for known fields
        const payload = {};
        Object.entries(body || {}).forEach(([k, v])=>{
            const snake = k.replace(/[A-Z]/g, (m)=>`_${m.toLowerCase()}`);
            payload[snake] = v;
        });
        // Ensure required defaults
        if (typeof payload.quantity === "undefined") payload.quantity = 0;
        if (typeof payload.min_quantity === "undefined") payload.min_quantity = 0;
        if (!payload.status) payload.status = "ok";
        const { data, error } = await supabase.from("inventory").insert([
            payload
        ]).select().single();
        if (error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: error.message || String(error)
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(data);
    } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$im_mouthworks$2f$im_mouthworks$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: msg
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9ecee830._.js.map
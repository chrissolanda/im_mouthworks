module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/supabase-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseClient",
    ()=>getSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xpybqjfofdmkeiijvwnx.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweWJxamZvZmRta2VpaWp2d254Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1MDEyODAsImV4cCI6MjA4MDA3NzI4MH0.Dww9fKSwqzINDt18uhgcQJbeq4rnH3AEedEiteHZ-FQ";
let supabaseClient = null;
function getSupabaseClient() {
    if (!supabaseClient) {
        supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
    }
    return supabaseClient;
}
}),
"[project]/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase-client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showPatientRegistration, setShowPatientRegistration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initializeAuth = async ()=>{
            try {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
                const { data: { user: authUser }, error } = await supabase.auth.getUser();
                if (authUser && !error) {
                    setUser({
                        id: authUser.id,
                        email: authUser.email || "",
                        name: authUser.user_metadata?.name || authUser.email || "",
                        role: authUser.user_metadata?.role || "patient",
                        phone: authUser.user_metadata?.phone,
                        specialization: authUser.user_metadata?.specialization
                    });
                }
            } catch (error) {
                console.error("[v0] Auth initialization error:", error);
            }
            setLoading(false);
        };
        initializeAuth();
    }, []);
    const login = async (email, password)=>{
        const mockUsers = {
            "patient@example.com": {
                id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
                email: "patient@example.com",
                name: "John Patient",
                role: "patient",
                phone: "+1 234-567-8900"
            },
            "dentist@example.com": {
                id: "7a8c5e19-d3f2-4b7a-8c6f-5e2d9a1b3c47",
                email: "dentist@example.com",
                name: "Dr. Sarah Dentist",
                role: "dentist",
                specialization: "General Dentistry"
            },
            "hr@example.com": {
                id: "9b2d1f8a-6c3e-4d9a-8b5f-7e2c1a3d6b9e",
                email: "hr@example.com",
                name: "Admin HR",
                role: "hr"
            },
            "sarah.smith@dental.com": {
                id: "a2b6f9aa-c1db-4126-91ea-e68ce0764cf7",
                email: "sarah.smith@dental.com",
                name: "Dr. Sarah Smith",
                role: "dentist",
                specialization: "General Dentistry"
            },
            "john.doe@dental.com": {
                id: "36bbff44-0df3-4926-a241-83e753324ffa",
                email: "john.doe@dental.com",
                name: "Dr. John Doe",
                role: "dentist",
                specialization: "Orthodontics"
            },
            "emily.johnson@dental.com": {
                id: "63d250c7-d355-4eaa-b99e-d502b7db5dfb",
                email: "emily.johnson@dental.com",
                name: "Dr. Emily Johnson",
                role: "dentist",
                specialization: "Periodontics"
            },
            "michael.chen@dental.com": {
                id: "eab4dac1-1534-4b6d-80d1-243273ee4773",
                email: "michael.chen@dental.com",
                name: "Dr. Michael Chen",
                role: "dentist",
                specialization: "Prosthodontics"
            },
            "lisa.anderson@dental.com": {
                id: "8e87c140-0749-4fe1-9713-39b05df2f566",
                email: "lisa.anderson@dental.com",
                name: "Dr. Lisa Anderson",
                role: "dentist",
                specialization: "Endodontics"
            }
        };
        const mockUser = mockUsers[email];
        if (mockUser) {
            setUser(mockUser);
            localStorage.setItem("user", JSON.stringify(mockUser));
            // Show registration modal for new patients
            if (mockUser.role === "patient") {
                setShowPatientRegistration(true);
            }
        } else {
            throw new Error("Invalid credentials");
        }
    };
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("user");
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
        supabase.auth.signOut();
    };
    const savePatientProfile = async (name, phone)=>{
        try {
            if (!user || user.role !== "patient") {
                throw new Error("Only patients can register");
            }
            // Import patientService dynamically to avoid circular imports
            const { patientService } = await __turbopack_context__.A("[project]/lib/db-service.ts [app-ssr] (ecmascript, async loader)");
            // Check for duplicate patient name
            const existingPatient = await patientService.getByName(name);
            if (existingPatient) {
                throw new Error(`Patient with name '${name}' already exists. Please use a different name.`);
            }
            // Create patient record in database
            const newPatient = await patientService.create({
                name: name,
                email: user.email,
                phone: phone || null,
                dob: null,
                gender: null,
                address: null
            });
            if (newPatient) {
                // Update user state with the new patient ID if needed
                const updatedUser = {
                    ...user,
                    name: name,
                    phone: phone
                };
                setUser(updatedUser);
                localStorage.setItem("user", JSON.stringify(updatedUser));
                setShowPatientRegistration(false);
            }
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : String(error);
            console.error("[v0] Error saving patient profile:", errorMsg);
            throw error;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            loading,
            login,
            logout,
            isAuthenticated: !!user,
            showPatientRegistration,
            savePatientProfile
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/auth-context.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bcc6d608._.js.map
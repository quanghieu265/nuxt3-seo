// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" }
  },
  // ssr: process.env.NODE_ENV !== "development",
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",
    // Public keys that are exposed to the client
    public: {
      baseURL: process.env.NUXT_BASE_URL || "http://localhost:3000/",
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL || "/api"
    }
  },
  build: {
    transpile: ["vuetify"]
  },
  imports: {
    dirs: [
      // Scan top-level modules
      "composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "composables/**"
    ]
  }
});

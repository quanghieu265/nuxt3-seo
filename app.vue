<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<script setup>
useHead({
    meta: [
        { name: 'description', content: `Nuxt3 SEO` },
    ],
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    charset: "utf-8",
    titleTemplate: (titleChunk) => {
        return titleChunk ? `Nuxt3 SEO - ${titleChunk}` : 'Nuxt3 SEO';
    }
})
</script>
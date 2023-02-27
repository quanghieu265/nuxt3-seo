export default (title, content) => {
  const route = useRoute();
  const config = useRuntimeConfig();
  return useHead({
    title: title,
    htmlAttrs: { lang: "en" },
    link: [{ rel: "canonical", href: config.public.baseURL + route.path }],
    meta: [
      {
        name: "description",
        content: content
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: content
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: config.public.baseURL + route.path },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://nuxt.com/social.jpg" }
    ]
  });
};

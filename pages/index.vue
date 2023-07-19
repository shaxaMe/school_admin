<template>
  <div class="container">
    <Loading />
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  middleware: "login",
  components: {
    Loading,
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Guider-design.uz",
      meta: [
        {
          hid: "og-title",
          property: "og:title",
          content: "Guider-design.uz",
        },
        {
          hid: "og-url",
          property: "og:url",
          content: "https://guider-design.uz",
        },
        {
          hid: "og-description",
          property: "og:description",
          content: " guider-design.uz",
        },
      ],
      link: [
        {
          rel: "alternate",
          hreflang: "la",
          href: "https://guider-design.uz/",
        },
        {
          rel: "alternate",
          hreflang: "uz",
          href: "https://guider-design.uz/uz",
        },
        {
          rel: "alternate",
          hreflang: "ru",
          href: "https://guider-design.uz/ru",
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: "https://guider-design.uz/en",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.container{
  width: 100%;
  height: 100%;
}
</style>

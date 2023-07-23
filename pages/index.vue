<template>
  <client-only>
  <div>
    <h1>Hi Im home page</h1>
  </div>
</client-only>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  middleware: "homepage",
  components: {
    Loading,
  },
  data() {
    return {};
  },
  methods:{
    getData(){
      this.$axios.get('api/Organizations/Login?login='+ this.form.login+'&password'+this.form.password).then(res=>{
         console.log('res');
      })
    }
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
.container {
  width: 100%;
  height: 100%;
}
</style>

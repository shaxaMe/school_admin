<template>
    <div class="w-full container justify-center flex flex-col gap-20">
      <section class="main px-[100px] py-10" id="main">
        <home-main-page />
      </section>
      <section class="px-[100px] py-10" id="customer">
       <customer-main />
      </section>
      <section class="px-[100px] py-10" id="solution">
              <customer-solution />
      </section>
      <section class="px-[100px] py-10" id="work">
              <work-main />
      </section>
    </div>
</template>

<script>
export default {
  middleware: "homepage",
  layout:'main',
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
  .main{
    width: 100%;
    height: fit-content;
    // background: linear-gradient(132deg, #2272FF 0%, #0D03C3 100%);
    background-image: url('../assets/img/main/home.svg');
    background-repeat: no-repeat;
    background-size: cover;

    // background-image: linear-gradient(to right bottom, #1362d9, #0083e5, #009bd5, #00adb5, #0dbb94);
  }
  #customer{
    background: #fff;
  }
  #solution{
    background: #F6F5FF;
  }
  #work{
    background: linear-gradient(135deg, #2272FF 0%, #0D03C3 100%);
  }
}
</style>

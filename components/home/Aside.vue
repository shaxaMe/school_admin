<template>
  <div class="w-full aside">
    <div class="w-full flex py-10 px-15 flex-col gap-10 aside-container">
      <div class="flex items-center justify-center w-full gap-1 bg-transparent">
        <img class="logo-image bg-transparent" :src="require('~/assets/img/logo.png')" alt="">
        <p class="logo-name bg-transparent font-serif text-lg">DENT.uz</p>
      </div>
      <div class="flex flex-col items-center justify-start w-full gap-5 bg-transparent">
        <nuxt-link to="#">
          <Icon name="tables" height="16px" width="16px"/>
          <img :src="require('~/assets/img/icons/home.svg')" alt="">
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

</style>

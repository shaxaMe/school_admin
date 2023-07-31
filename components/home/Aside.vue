<template>
  <div class="aside">
    <div class="w-full flex py-10 px-15 flex-col gap-10 aside-container">
      <div class="flex items-center justify-center w-full gap-1 bg-transparent">
        <img
          class="logo-image bg-transparent"
          :src="require('~/assets/img/logo.png')"
          alt=""
        />
        <p class="logo-name bg-transparent font-serif text-lg">DENT.uz</p>
      </div>
      <div class="flex flex-col justify-start w-full px-10 gap-5 bg-transparent">
        <nuxt-link to="/" class="flex justify-start w-full gap-2 text-decoration-none">
          <div class="active-primary-exact link">
            <Icon name="home" height="16px" width="16px" />
            Home
          </div>
        </nuxt-link>
        <nuxt-link
          to="/dashboard"
          class="flex justify-start w-full gap-2 text-decoration-none"
        >
          <div class="active-primary link">
            <Icon name="tables" height="16px" width="16px" />
            Dashboard
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="flex justify-start w-full gap-2 text-decoration-none">
          <div class="link active-primary">
            <Icon name="basket" height="16px" width="16px" />
          Tables
          </div>
        </nuxt-link>
        <nuxt-link to="#" class="flex justify-start w-full gap-2 text-decoration-none">
          <div class="link active-primary">
            <Icon name="home" height="16px" width="16px" />
          DENT
          </div>
        </nuxt-link>
        <nuxt-link
          to="#"
          class="flex justify-start align-center w-full gap-2 text-decoration-none"
        >
          <div class="link active-primary">
            <Icon name="home" height="16px" width="16px" />
          Some
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>

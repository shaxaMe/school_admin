<template>
  <div class="flex justify-between	items-center">
    <h1 class="logo">
     DENT.uz
    </h1>
    <div class="flex gap-20 items-center">
        <a href="#main" class="nav-link">Product</a>
        <a href="#customer" class="nav-link">Solution</a>
        <a href="#solution" class="nav-link">Customer</a>
        <a href="#" class="nav-link">About us</a>
    </div>
    <div>
      <button class="sign-up">
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
 .logo{
  color: #FFF;
  font-family: Inter,sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; /* 116.667% */
  cursor: pointer;
 }
.nav-link{
  color: #FFF;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  cursor: pointer;
}
 .sign-up{
  display: inline-flex;
  padding: 12px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #FFF;
  cursor: pointer;
  color: #000;
  font-family: Inter,sans-serif;
  font-size: 18px;
  font-weight: 600;
 }
</style>

<template>
  <div class="w-full flex items-center justify-center">
    <div data-aos="fade-right" data-aos-duration="1000" class="titles flex flex-col gap-10">
      <h1 class="title">Powerful and easy to use SaaS platform</h1>
      <p class="subtitle">
        Use marketing automation to identify hot leads and email your sales team telling
        them to follow up. Nurture and contact leads at the opportune time to maximize.
      </p>
      <router-link to="/signup" class="btn btn-primary"> Get Started </router-link>
    </div>
    <div data-aos="fade-left" data-aos-duration="1000">
      <icon name="Image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.titles {
  width: 50%;

  .title {
    color: #000;
    font-family: Inter;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px;
  }
  .subtitle {
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
  .btn-primary {
    display: flex;
    width: 215px;
    height: 68px;
    padding: 15px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 40px;
    background: linear-gradient(135deg, #2272ff 0%, #0d03c3 100%);
    cursor: pointer;
    &:hover {
      background: linear-gradient(135deg, #0d03c3 0%, #2272ff 100%);
    }
    color: #fff;
    font-family: Inter;
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
  }
}
</style>

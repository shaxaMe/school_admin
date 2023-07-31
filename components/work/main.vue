<template>
  <div class="w-full mt-[10rem]">
    <div class="flex justify-between items-center">
      <h1 data-aos="fade-right" data-aos-duration="200" class="title">Work smarter with easy access for user..</h1>
      <button data-aos="fade-left" data-aos-duration="200">Get Started Now</button>
    </div>
    <div class="flex justify-between mt-[80px] items-center">
      <div class="flex flex-col justify-start items-start gap-10">
        <div
        data-aos="fade-right"
        :data-aos-duration="`${1400+(i*400)}`"
          class="card flex justify-center items-center gap-5"
          v-for="(item, i) in 3"
          :key="i"
        >
          <div class="num flex justify-center items-center">
            <span>{{ i + 1 }}</span>
          </div>
          <div class="card-body">
            <p class="card-title">Create Account</p>
            <p class="card-subtitle">
              After learning about your customer service needs, we will get you up
            </p>
          </div>
        </div>
      </div>
      <div  data-aos="fade-left"
        data-aos-duration="2600">
           <icon name="office"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  color: #fff;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px; /* 48px */
  max-width: 600px;
  word-break: keep-all;
}
button {
  border-radius: 500px;
  background: #fff;
  color: #0f0bc7;
  text-align: center;
  padding: 15px 20px;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}
.num {
  width: 90px;
  height: 90px;
  border-radius: 50px;
  text-align: center;
  color: #0f0bc7;
  font-family: Inter;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  background: #fff;
  line-height: 32.408px;
}
.card {
  .card-title {
    color: #fff;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 32.408px; /* 124.645% */
    letter-spacing: -0.52px;
  }
  .card-subtitle {
    color: #fff;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    margin-top: 5px;
    font-weight: 500;
    line-height: 32px;
    opacity: .6;
    width: 400px;
    word-break: keep-all;
  }
}
</style>

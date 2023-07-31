<template>
  <div>
     <home-navbar/>
     <div class="w-full flex items-center flex-col gap-10">
      <h1 class="title">The fastest way for startups to do any analysis</h1>
      <h3 class="subtitle">Equals is the only spreadsheet with built-in connections to any database, versioning, and collaboration.</h3>
      <div class="relative flex items-center">
        <icon class="email-icon" name="email" width="20px" heigth="20px" />
        <input class="input-sign" placeholder="Enter your email" type="text" />
        <button class="send-email">Start for free</button>
      </div>
      <div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="350" data-aos-easing="ease-in-sine" class="dashboard mt-20">
        <img :src="require(`assets/img/main/dashboard.svg`)" alt="">
      </div>
     </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
.title{
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 72px;
  font-weight: 800;
  line-height: 80px;
  text-transform: capitalize;
  text-align: center;
  margin-top: 200px;

}
.subtitle{
  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  opacity: 0.7;
  max-width:600px;
  word-break: keep-all;
  text-align: center;
}
.input-sign{
  width: 600px;
  border-radius: 50px;
  background: #FFF;
  height: 60px;
  outline: none;
  border: none;
  padding-left: 50px;
  padding-right: 190px;
}
.email-icon{
  position: absolute;
  left: 3%;
}
.send-email{
  display: inline-flex;
  padding: 14px 30px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 42px;
  background: linear-gradient(135deg, #2272FF 0%, #0D03C3 100%);
  color: #FFF;
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  right: 2%;
  position: absolute;
  cursor: pointer;
  transition: all 1s ease-in-out;
  &:hover{
    background:linear-gradient(135deg, #0D03C3  0%, #2272FF 100%);
  }
}
.dashboard{
  width: fit-content;
  height: fit-content;
  img{
    padding: 10px 15px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }
}
</style>

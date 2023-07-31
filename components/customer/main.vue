<template>
  <div class="w-full flex flex-col items-center gap-10">
      <h1 class="title">Our services made for you?</h1>
      <div class="card-items flex items-center gap-10">
        <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="500" class="card flex flex-col justify-start 	items-center rounded-md">
          <div class="card-image">
           <icon name="icon" />
           </div>
           <h1 class="card-title">Task Management</h1>
           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quasi, quibusdam, quidem</p>
           <div class="read-more">
            Read More <i class="el-icon-right"></i>
           </div>
        </div>
        <div data-aos="fade-up" data-aos-offset="400" data-aos-duration="500" class="card flex flex-col justify-start	items-center	 rounded-md">
          <div class="card-image">
            <icon name="icon" />
           </div>
           <h1 class="card-title">Task Management</h1>
           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quasi, quibusdam, quidem</p>
           <div class="read-more">
            Read More <i class="el-icon-right"></i>
           </div>
        </div>
        <div data-aos="fade-left" data-aos-offset="400" data-aos-duration="500" class="card flex flex-col justify-start	 items-center rounded-md">
          <div class="card-image">
            <icon name="icon" />
           </div>
           <h1 class="card-title">Task Management</h1>
           <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quasi, quibusdam, quidem</p>
           <div class="read-more">
            Read More <i class="el-icon-right"></i>
           </div>
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
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 125%; /* 62.5px */
  letter-spacing: 0.25px;
  text-transform: capitalize;
  max-width: 500px;
  word-break: keep-all;
  text-align: center;
 }
.card-items{
  display: grid;
  // resize: horizontal;
  overflow: hidden;
  height: auto;
  padding:10px;
  grid-template-columns:auto auto auto;
  .card{
    width: 380px;
    height: 380px;
    border-radius: 20px;
    position: relative;
    background: #FFF;
    box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
     .card-title{
      color: #000;
      font-family: Inter;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      position: absolute;
      top: 150px;
      line-height: 100%;
     }
     .card-text{
      color: #000;
      text-align: center;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 30px;
      position: absolute;
      top: 200px;
      max-width: 350px;
     }
     .card-image{
       top: 40px;
       position: absolute;
     }
     .read-more{
      color: #0F0BC7;
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
      line-height: 100%; /* 16px */
      position: absolute;
      top: 300px;
      cursor: pointer;
       i{
        background: #fff;
       }

     }
  }
}
</style>

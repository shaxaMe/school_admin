<template>
  <div class="w-full flex items-center justify-between px-4">
    <slot>

    </slot>
    <div class="search-bar">
      <div class="search-bar-box">
        <el-input placeholder="Please input" v-model="input" clearable> </el-input>
        <i class="el-icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

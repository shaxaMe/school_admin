<template>
  <component v-if="name" :is="require(`../assets/img/icons/${name}.svg?inline`)" :style="{width:width, height:height}" />
</template>

<script>
  export default {
    props: {
      name: { type: String, default: "" },
      width: { type: String, default: "auto" },
      height: { type: String, default: "auto" },
    },
  };
</script>

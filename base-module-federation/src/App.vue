<template>
  <div class="container">
    <div class="left">基座</div>
    <div class="right">
      <micro-app name="my-app" url="http://localhost:4173/" iframe></micro-app>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.container {
  height: 100vh;
  display: flex;
  .left {
    width: calc(50vw - 10px);
    height: 100vh;
    margin-right: 10px;
    background: #ccc;
  }
  .right {
    width: 50vw;
    height: 100vh;
    background: #666;
  }
}
</style>

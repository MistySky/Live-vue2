<template lang="html">
  <div class="loading-wrap">
    <div class="loading"></div>
    <div class="loading-txt">正在加载中</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.loading {
  position: absolute;
  top: 0;
  left: 50%;
  background: #fff;
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 70%;
  margin-left: -1.25rem;
  background: url('../../static/rage_loading.png') no-repeat;
  background-size: cover;
  -webkit-animation: rotating 5s  linear infinite;
  animation: rotating 5s linear infinite;
}
.loading-txt {
  position: absolute;
  top:0;
  color: #4a4a4a;
  margin-top: 100%;
  width: 100%;
  text-align:center;
}
@keyframes rotating {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>

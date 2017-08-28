<template lang="html">
  <div class="navbar">
    <ul class="clear">
      <li ><a href="#" class="active">斗鱼</a></li>
      <li ><a href="#">虎牙</a></li>
      <li ><a href="#">熊猫</a></li>
      <li ><a href="#">战旗</a></li>
      <li ><a href="#">火猫</a></li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.navbar {
  width: 100%;
  height: 1.173333rem;
  padding: .253333rem .466667rem;
  border-bottom: 1px solid gray;
}
.navbar ul {
  width: 100%;
  height: .666667rem;
  font-size: 0;
}
.navbar ul > li {
  display: inline-block;
  font-size: 26px;
  text-align: center;
  width: 20%;
}
/*.navbar ul > li:last-child {
  margin-right: 0;
}*/
.active {
  display: inline-block;
  background: #34393B;
  border-radius: 1.333333rem;
  color: #ffffff;
  height: .666667rem;
  padding: 0 .32rem !important;
  line-height: .666667rem;
}
</style>

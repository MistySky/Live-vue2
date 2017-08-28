<template lang="html">
  <div class="search">
    <span class="music_icon">直播</span>
    <input type="text" name="" value="" placeholder="搜索主播、房间号" class="search_input">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.search {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1.173333rem;
  background: #34393B;
  padding: 0 .4rem;
}
.music_icon {
  color: white;
  font-size: 28px;
  line-height: 1.173333rem;
}
.search_input {
  width: 7.653333rem;
  height: .853333rem;
  line-height: .853333rem;
  border-radius: .16rem;
  font-size: 28px;
  text-align: center;
  margin-top: .16rem;
  outline: 0;
  border:0;
}
.search_input::-webkit-input-placeholder {
  color: #BDBDBD;
}
</style>

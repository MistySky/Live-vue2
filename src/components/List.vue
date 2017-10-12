<template lang="html">
  <div class="list">
    <loading v-if="show"></loading>
    <ul v-else>
      <li v-for="data in listDatas">
        <a  :href="`http://staticlive.douyutv.com/common/share/play.swf?room_id=${data.room_id}`" >
          <div class="room-show">
            <img class="room-pic" :src="data.room_src" alt="" style="">
            <div class="up-shadow"></div>
            <span class="room-online">{{data.online}}</span>
            <div class="bottom-shadow">
            </div><span class="room-nickname">{{data.nickname}}</span>
          </div>
          <p>{{data.room_name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import loading from './loading'
export default {
  data () {
    return {
      listDatas: '',
      show: true
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData (id = 3) {
      let _self = this
      id = this.$route.params.id
      axios.get(`/v1/live/${id}?&limit=&offset=0`)
      .then(function (response) {
        _self.listDatas = response.data.data
        _self.show = false
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  },
  components: {
    loading
  }
}
</script>

<style lang="css">
.list {
  width: 100%;
  padding: .133333rem 0;
}
.list ul {
  padding: 0 .066665rem;
}
.list ul > li {
  float: left;
  width: calc(50% - .13333rem);
  margin-left: .066665rem;
  margin-right: .066665rem;
  margin-bottom: .13333rem;
}
.room-show {
  position: relative;
  width: 100%;
  border-radius: .10667rem;
  overflow: hidden;
}
.room-pic {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: .10667rem;
}
.up-shadow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .48rem;
  background: url("https://shark.douyucdn.cn/app/douyu-mobile/m-douyu-v2/build/images/bg-shadowe60f21.png");
  background-size: cover;
  border-top-right-radius: .10667rem;
}
.room-online {
  position: absolute;
  z-index: 2;
  top: .13333rem;
  right: .13333rem;
  color: #fff;
  font-size: .26667rem;
}
.room-online:before {
  content: " ";
  display: inline-block;
  vertical-align: middle;
  margin-top: -.02667rem;
  margin-right: .08rem;
  width: .26667rem;
  height: .24rem;
  background-image: url('../assets/下载.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bottom-shadow {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .48rem;
  border-radius: .10667rem;
}
.room-nickname {
  position: absolute;
  z-index: 2;
  bottom: .13333rem;
  left: .13333rem;
  color: #fff;
  font-size: .26667rem;
}
.room-nickname:before {
  content: " ";
  float: left;
  margin-right: .08rem;
  width: .29333rem;
  height: .32rem;
  background-image: url("https://shark.douyucdn.cn/app/douyu-mobile/m-douyu-v2/build/images/iconfont-wofdcada.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.list p{
  width: 4.8rem;
  height: .72rem;
  line-height: .72rem;
  font-size: .32rem;
  color: #333;
  overflow: hidden;
  word-break: break-all;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.aaa {
  width: 200px;
  height: 200px;
}
</style>

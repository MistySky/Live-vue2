<template lang="html">
  <div class="douyu">
    <div class="games">
      <ul>
        <router-link  tag="li"v-for= 'data in gameDatas.slice(0,8)' :to="'/douyu/' + data.tag_id" :key="data.id">
          <a href="#">
            <img :src="data.icon_url" alt="">
          </a>
          <p>{{data.tag_name}}</p>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import list from '@/components/List'
export default {
  data () {
    return {
      gameDatas: ''
    }
  },
  components: {
    list
  },
  mounted () {
    const _self = this
    axios.get('/v1/getColumnDetail?shortName=game')
    .then(function (response) {
      _self.gameDatas = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

<style lang="css">
.douyu{
  width: 100%;
}
.games {
  padding: .133333rem;
  text-align: center;
  border-bottom: 1px solid gray;
}
.games ul > li {
  float: left;
  width: 25%;
  padding: .066667rem;
}
.games ul > li > a{
  display: inline-block;
  width: 50%;
  height: 100%;
  border-radius: 100%;
}
.games ul > li > a > img{
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.games ul > li > p{
  font-size: 28px;
}
.games ul:after{
  content: '';
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
</style>

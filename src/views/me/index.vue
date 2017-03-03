<template>
<div class="content more">
   <div class="content list"
    v-infinite-scroll="loadMore">
      <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner" v-link="{ path:'/me/Personalinformation', replace: true}" style="padding-left:0.75rem;height:3.8rem">
                  <img src="/static/img/mini.png" width="60" height="60">
                  <div style="display:block;width:100%;flex:1;padding-left:10px" >
                  <p style="margin-top:0.5rem">
                      <span style="font-size:15px;">
                      Pre-dawn
                      </span>
                      <span style="color:#a9a9a9;font-size:20px;float:right" class="icon">
                          &#xe62e;
                      </span>
                  </p>
                  <p style="color:#a9a9a9;font-size:10px;margin-top:-0.8rem">
                     <span >
                          微信号: lyhk1214
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

      <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner lis" v-link="{ path:'/me/album', replace: true}">
                  <img src="/static/img/me1.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      相册
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path:'/me/collection', replace: true}">
                 <img src="/static/img/me2.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      收藏
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

       <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner lis" v-link="{ path:'/me/purse', replace: true}">
                  <img src="/static/img/me3.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      钱包
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path:'/me/card', replace: true}">
                  <img src="/static/img/me4.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      卡包
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

       <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner lis" v-link="{ path:'/me/', replace: true}">
                   <img src="/static/img/me5.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      表情
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

      <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner lis" v-link="{ path:'/me/config', replace: true}">
                  <img src="/static/img/me6.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      设置
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

</div>
</template>
<script>

export default {
  route: {
    data ({to, next}) {
      next()
    }
  },
  ready () {

  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.list-block {
  margin: .5rem 0;
}
.list {
  bottom: 2.5rem;
  padding-bottom: 1rem;
}
.lis{
  padding-left:0.75rem;
  height:2.5rem
}
.lidiv{
  display:block;
  width:100%;
  flex:1;
  padding-left:10px
}
</style>
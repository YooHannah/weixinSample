<template>
<div class="content more">
   <div class="content list"
    v-infinite-scroll="loadMore">
     <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;margin-top:0.8rem">
            <div class="item-inner lis" v-link="{ path: '/discovery/friendscircle'}">
                  <img src="/static/img/find1.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      朋友圈
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
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/find2.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      扫一扫
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                 <img src="/static/img/find3.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      摇一摇
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
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                 <img src="/static/img/find4.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      附近的人
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
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/find5.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      购物
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/find6.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      游戏
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
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <span style="color:#9370db;font-size:20px;margin-left:0.4rem;margin-right:0.1rem" class="icon"> &#xe605;</span>
                  <div class="lidiv">
                  <p style="margin-top:0.5rem">
                      <span style="font-size:15px;">
                      小程序
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
import {loader} from '../../util/util'
import $ from 'zepto'

export default {
  route: {
    data ({to, next}) {
      next()
    }
  },
  ready () {
    this.$http.get('/static/data/content.json')
      .then(({data: {code, message, data}}) => {
        this.$set('items', data)
      })
  },
  data () {
    return {
      items: [],
      loading: false
    }
  },
  computed: {
    length () {
      return this.items.length
    }
  },
  methods: {
    loadMore () {
      if (this.loading) {
        return
      }
      this.loading = true
      let scroller = $('.list')
      loader.show()
      setTimeout(() => {
        let i = this.length
        this.items.push({
          id: i,
          name: `demo${i + 1}`
        })
        let scrollTop = scroller[0].scrollHeight - scroller.height() - 20
        scroller.scrollTop(scrollTop)
        this.loading = false
        loader.hide()
      }, 1500)
    }
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
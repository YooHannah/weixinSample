<template>
   <div class="content list"
    v-infinite-scroll="loadMore">
     <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/contacts1.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      新的朋友
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/contacts2.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      群聊
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                 <img src="/static/img/contacts3.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      标签
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
          <li class="item-content" style="padding-left:0rem;">
            <div class="item-inner lis" v-link="{ path: '/more/feedback'}">
                  <img src="/static/img/contacts4.png" width="35" height="35">
                  <div class="lidiv">
                  <p>
                      <span style="font-size:15px;">
                      公众号
                      </span>
                  </p>
                  </div>
                  </div>
          </li>
        </ul>
      </div>

    <div v-for="item in items">
    <span style="font-size:0.6rem;margin-left:0.75rem">{{item.letter}}</span>
      <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" style="padding-left:0rem;" v-for="term in item.contacts" track-by="$index">
            <div class="item-inner lis" v-link="{ path: '/'}" >
            <img :src="term.avatar" width="35" height="35">
              <div class="lidiv">
                <p>
                  <span style="font-size:15px;">
                    {{term.name}}
                  </span>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

</div>
</template>
<script>
import {loader} from '../../util/util'
import $ from 'zepto'

export default {
  route: {
    data () {
      return this.$http.get('/static/data/contacts.json')
      .then(({data: {code, message, data}}) => {
        this.$set('items', data)
      })
    }
  },
  ready () {
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
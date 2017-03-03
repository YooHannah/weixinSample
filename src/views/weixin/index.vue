<template>
   <div class="content list"
    v-infinite-scroll="loadMore">
      <div class="list-block infinite-list" style="margin:0 0">
        <ul>
          <li class="item-content" v-for="item in items" track-by="$index" style="padding-left:0rem;">
            <div class="item-inner" v-link="{ path: '/more/feedback'}" style="padding-left:0.75rem;height:3.2rem">
                  <img :src="item.img" width="45" height="45">
                  <div style="display:block;width:100%;flex:1;padding-left:10px" >
                  <p style="margin-top:0.5rem">
                      <span style="font-size:15px;">
                          {{item.title}}
                      </span>
                      <span style="color:#dcdcdc;font-size:10px;float:right">
                          {{item.time}}
                      </span>
                  </p>
                  <p style="color:#dcdcdc;font-size:10px;margin-top:-0.8rem">
                     <span >
                          {{item.message}}
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

</style>
<template>
<div class="container">
<header class="bar bar-nav" style="background:#393a3e">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:0.75rem;color:#ffffff;margin-left:1.5rem">卡包</span>
    <span style="font-size:0.75rem;color:#ffffff;margin-left:9rem">消息通知</span>
    </header>
  <div class="content">
  <div class="card-container">
    <p class="p">会员卡<a style="margin-left:12rem">查看全部(6)</a></p>
      <v-card-container>
        <card type="content" >
          <list type="media">
              <li class="item-content" style="padding-left:0rem">
                  <img src="/static/img/card1.png" width="355" height="95">
              </li>
          </list>
        </card>
      </v-card-container>
      <v-card-container>
        <card type="content" >
          <list type="media">
              <li class="item-content" style="padding-left:0rem">
                  <img src="/static/img/card1.png" width="355" height="95">
              </li>
          </list>
        </card>
      </v-card-container>
      <v-card-container>
        <card type="content" >
          <list type="media">
              <li class="item-content" style="padding-left:0rem">
                  <img src="/static/img/card1.png" width="355" height="95">
              </li>
          </list>
        </card>
      </v-card-container>
    </div>

    <div class="card-container">
    <p class="p">优惠券</p>
      <v-card-container>
        <card type="content" >
          <list type="media">
              <li class="item-content">
                <item type="media">
                  <img src="/static/img/card2.png" width="80" height="50">
                </item>
                <item type="inner">
                  <item type="title-row" style="padding-top:1rem">
                    <item type="text"><b>朋友的优惠券</b></item>
                  </item>
                </item>
              </li>
          </list>
        </card>
      </v-card-container>
       <v-card-container>
        <card type="content" >
          <list type="media">
              <li class="item-content">
                <item type="media">
                  <img src="/static/img/card3.png" width="80" height="50">
                </item>
                <item type="inner">
                  <item type="title-row" style="padding-top:1rem">
                    <item type="text"><b>我的票券(0)</b></item>
                  </item>
                </item>
              </li>
          </list>
        </card>
      </v-card-container>
    </div>
  </div>
</div>
</div>
</template>

<script>
import VCardContainer from '../../components/Card'
import Card from '../../components/CardItem'
import List from '../../components/List'
import Item from '../../components/ListItem'
import $ from 'zepto'

export default {
  route: {
    data () {
      return this.$http.get('/static/data/collection.json')
      .then(({data: {code, message, data}}) => {
        this.$set('items', data)
      })
    }
  },
  ready () {
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    length () {
      return this.tasks.length
    }
  },
  methods: {
    refresh () {
      setTimeout(function () {
        let num = this.length + 1
        let title = `标题${num}`
        // let adv = `abc${num}`
        // let time = (new Date()).getTime() / 1000
        // let point = 100 + num - 1
        this.tasks.push({
          id: num,
          title: title
          // advertiser: adv,
          // status: '1',
          // created: time,
          // read_profit: point
        })
        $.pullToRefreshDone('.pull-to-refresh-content')
      }.bind(this), 1500)
    }
  },
  components: {
    VCardContainer,
    Card,
    List,
    Item
  }
}
</script>

<style>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.home {
  top: -2.2rem !important;
}
.home-bar {
  background: #efeff4;
  height: 2.8rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.home-bar .tab-item {
  height: 2.8rem;
  background-color: white;
}
.list-block .item-inner:after {
    display: none;
}
.p{
  margin-left:0.75rem;
  margin-top:0.5rem;
  margin-bottom:0rem;
  font-size:0.5rem
}
</style>

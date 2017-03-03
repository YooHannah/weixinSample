<template>
<div class="container">
<header class="bar bar-nav" style="background:#3C3C3C">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem">我的收藏</span>
    </header>
  <div class="content">
    <div class="card-container">
      <v-card-container v-for="item in items" track-by="$index">
        <card type="content" >
          <list type="media">
              <li class="item-content" style="padding-top:0.5rem;margin-bottom:-2rem">
               <div class="item-media">
               <img :src="item.publish_icon" class="circle">
              </div>
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-text" style="color:#6C6C6C">
                     {{item.publish_name}}
                  </div>
                  <div class="item-text" style="color:#9D9D9D ">
                    {{item.collect_time}}
                  </div>
                </div>
              </div>
              </li>
               <div class="weui-panel__bd" v-show="item.isimg == 'false'">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                  <div class="weui-media-box__hd" style="">
                    <img class="weui-media-box__thumb" :src="item.img" width="60" height="60">
                  </div>
                  <div class="weui-media-box__bd" style="">
                    <p class="weui-media-box__title" style="font-size:0.75rem;margin-top:auto;margin-bottom:auto">{{item.title}}</p>
                    <p class="weui-media-box__desc" style="margin-top:auto">{{item.publish_name}}</p>
                  </div>
                </a>
              </div>
              <li class="item-content" v-show="item.isimg == 'true'" style="margin-top:1.5rem;padding-bottom:1rem">
                  <img :src="item.img" width="250" height="130">
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
@import '../../assets/css/weui.css';
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
.circle{
    /*color:#ffffff;*/
    font-size: 14px;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border:1px solid #ffffff;
    border-radius:15px;
    margin-top: -1rem;
}
/*.title{
    font-weight: 400;
    font-size: 17px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
    white-space:normal;
}*/
.weui-media-box__title{
  white-space:normal;
}
</style>

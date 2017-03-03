<template>
<div class="container">
<header class="bar bar-nav" style="background:#393a3e">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem">我的钱包</span>
    </header>
  <div class="content">
    <list type="media" style="margin:0 0;">
        <div class="item-content" style="padding:2rem 2rem 1rem 2rem;background-color:#666f76">
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-text" style="height:3rem">
                <div class="weui-grid__icon">
                  <img  src="/static/img/purse20.png">
                </div>
                <p class="weui-grid__label" style="color:#ffffff">收付款</p>
              </div>
              <div class="item-text" style="height:4rem">
                   <div class="weui-grid__icon">
                    <img  src="/static/img/purse21.png">
                  </div>
                  <p class="weui-grid__label" style="color:#ffffff">零钱</p>
                  <p class="weui-grid__label" style="color:#ffffff;margin-top:-0.9rem;font-size:0.5rem">4.56</p>
              </div>
              <div class="item-text" style="height:3rem">
                 <div class="weui-grid__icon">
                  <img  src="/static/img/purse22.png">
                </div>
                <p class="weui-grid__label" style="color:#ffffff">银行卡</p>
              </div>
            </div>
          </div>
          </div>
        </list>
    <p class="ps">腾讯服务</p>
    <div class="weui-grids" style="background:#ffffff">
    <a href="" class="weui-grid" v-for="item in items[0]" track-by="$index">
        <div class="weui-grid__icon">
            <img  :src="item.icon">
        </div>
        <p class="weui-grid__label">{{item.title}}</p>
    </a>
  </div>
  <p class="ps">第三方服务</p>
   <div class="weui-grids" style="background:#ffffff">
    <a href="" class="weui-grid" v-for="item in items[1]" track-by="$index">
        <div class="weui-grid__icon">
            <img  :src="item.icon">
        </div>
        <p class="weui-grid__label">{{item.title}}</p>
    </a>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import List from '../../components/List'
import Item from '../../components/ListItem'

export default {
  route: {
    data () {
      return this.$http.get('/static/data/purse.json')
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
  methods: {
  },
  components: {
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
.list-block .item-inner:after {
    display: none;
}
.ps{
  margin:0 0.75rem;
  font-size:0.75rem
}
.list-block ul:before {
  display: none;
  }
</style>

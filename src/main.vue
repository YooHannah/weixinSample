<template>
  <div class="page page-current">
   <header class="bar bar-nav" style="background:#393a3e">
    <h1 class="titlee" style="color:#ffffff">信息</h1>
    <a  class="icon" style="margin-left:13rem;padding-top:0rem;color:#ffffff">&#xe6ac; <span class="icon" style="margin-left:2rem">&#xe620;</span></a>
  </header>
      <bar v-if="isIndex">
        <bar-item path="/weixin" label="微信" icon="weixin"></bar-item>
         <bar-item path="/contacts" label="通信录" icon="contacts"></bar-item>
         <bar-item path="/discovery" label="发现" icon="discovery"></bar-item>
        <bar-item path="/me" label="我" icon="me"></bar-item>
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'
// import {wxShareConfig} from './util/util'
import $ from 'zepto'
import wx from 'wx'

export default {
  ready () {
    // 微信配置
    wx.config({
      debug: false,
      appId: $.sign.appId,
      timestamp: $.sign.timestamp,
      nonceStr: $.sign.nonceStr,
      signature: $.sign.signature,
      jsApiList: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ]
    })
    // 在需要配置分享内容的时候调用
    // wxShareConfig()
  },
  data () {
    return {
      isIndex: true
    }
  },
  components: {
    Bar,
    BarItem
  }
}
</script>

<style>
@import './assets/css/sm.css';
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
.titlee{
    position: absolute;
    display: block;
    padding-left: 1rem;
    margin: 0 -0.5rem;
    font-size: 0.85rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: #3d4145;
    text-align: center;
    white-space: nowrap;
}
.active {
 color: #09BB07 !important;
}
</style>

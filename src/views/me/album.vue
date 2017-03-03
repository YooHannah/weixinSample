<template>
  <div class="container">
    <header class="bar bar-nav" style="background:#3C3C3C">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem"> 我的相册 </span>
    <i class="icon"> &#xe617;</i>
    </header>
    <div class="content">
    <img src="/static/img/psb.jpg" style="width:100%;height:50%;z-index:-1;position:absolute">
    <div style="">
    <div style="color:#ffffff;margin-left:48%;margin-top:75%"> <span>Pre-dawn</span> </div>
    <img src="/static/img/mini.png" style="width:25%;height:25%;margin-top:-13%;border:0.15rem solid #ffffff;float:right;margin-right:4%">
    <div style="margin-top:10%;margin-left:70%"><span style="font-size:0.75rem">Close the door.</span></div>
    </div>
    <div style="background:#ffffff;margin-top: -3.3rem;padding-top: 3rem;">
      <ul>
          <li class="item-content" v-for="item in items" track-by="$index">
            <div class="item-inner" v-link="{ path: '/'}" style="padding-left:0.75rem;">
              <div class="weui-media-box__bd" style="margin-right:-6rem;margin-bottom:-3rem">
               <p class="weui-media-box__title" v-show="item.day == 'today'" style="font-size:1.5rem;margin-top:0rem"><b>今天</b></p>
               <p class="weui-media-box__title" v-show="item.day != 'today'" style="font-size:1.2rem;margin-top:0rem"> <b>{{item.day}}<span style="font-size:0.75rem">{{item.month}}</span></b></p>
              </div>
                <div v-for="term in item.content" track-by="$index" style="margin-left:3rem;display:table;margin-bottom:0.2rem">
                  <div  v-show="term.islink == 'false'" style="margin-right: 1rem;">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" style="margin-bottom:1rem">
                      <div class="weui-media-box__hd" v-show="term.img.length==1" style="height:4rem;width:4rem">
                        <img class="weui-media-box__thumb" :src="term.img[0]" style="height:4rem">
                      </div>
                      <div class="weui-media-box__hd" v-show="term.img.length>=4" style="margin-left:0.6rem">
                        <div class="img_container" >
                            <div class="img_parent">
                              <div class="img_item"><img :src="term.img[0]" height="40" width="40"></div>
                              <div class="img_item"><img :src="term.img[2]" height="40" width="40"></div>
                            </div>
                            <div class="img_parent">
                              <div class="img_item"><img :src="term.img[1]" height="40" width="40"></div>
                              <div class="img_item"><img :src="term.img[3]" height="40" width="40"></div>
                            </div>
                          </div>
                      </div>
                      <div class="weui-media-box__bd" style="margin-top:-3rem;" v-show="term.img.length<4">
                        <p class="weui-media-box__desc" style="color:#000;font-size:0.75rem"> {{term.comment}}</p>
                      </div>
                      <div class="weui-media-box__bd" style="margin-top:-2rem;" v-show="term.img.length>=4">
                        <p class="weui-media-box__desc" style="color:#000;padding-left:0.5rem;font-size:0.75rem"> {{term.comment}}</p>
                      </div>
                    </a>
                  </div>
                  <div class="media-list list-block" v-show="term.islink =='true'" style="margin-right: 1rem;">
                    <ul>
                      <li class="item-content" style="padding-top:0.2rem;margin-bottom:-2rem" v-show="term.comment!=''">
                        <div class="item-text" style="color:#272727;margin-bottom:0.2rem">
                         {{term.comment}}
                       </div>
                     </li>
                     <div class="weui-panel__bd">
                      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                        <div class="weui-media-box__hd" v-show="term.ismusic =='false'">
                          <img class="weui-media-box__thumb" width="60" height="60" :src="term.img[0]">
                        </div>
                         <div class="weui-media-box__hd" v-show="term.ismusic =='true'">
                          <img  style="position:absolute;height: 35px; margin: 11px 11px;" src="/static/img/album17.png">
                          <img  width="60" height="60" :src="term.img[0]">
                        </div>
                         <div class="weui-media-box__bd" v-show="term.ismusic =='false'">
                          <p class="weui-media-box__desc" style="margin-top:auto;color:#6C6C6C">{{term.linktitle}}</p>
                        </div>
                        <div class="weui-media-box__bd" v-show="term.ismusic =='true'">
                           <p class="weui-media-box__title" style="font-size:0.75rem;margin-top:auto;margin-bottom:auto">{{term.linktitle}}</p>
                          <p class="weui-media-box__desc" style="margin-top:auto;color:#6C6C6C">{{term.singer}}</p>
                        </div>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
      return this.$http.get('/static/data/album.json')
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
.list-block {
  margin: .1rem 0;
}
.list {
  bottom: 2.5rem;
  padding-bottom: 1rem;
}
.list-block .item-inner:after {
    display: none;
}
.list-block ul {
  background-color: #FCFCFC;
  width: 14rem;
}
.list-block ul:before {
   display: none;
}
.list-block ul:after {
   display: none;
}
.weui-media-box__title{
  white-space:normal;
}
.img_container{
        display: flex;
        flex-flow:column nowrap;
        width: 4.1rem;/*任意改变长宽*/
        height: 4.1rem;
        background:#fff;
        margin-left: -0.6rem;
    }
.img_parent{
    display: flex;
    flex-flow:row nowrap;
    flex:1 1 0;/*元素弹性*/
    text-align: center;
}
.img_container .img_parent:first-child{margin-bottom: 1rem;}
.img_item{
    flex:1 1 0;/*元素弹性*/
    background: green;
}
/*.img_parent .img_item:first-child{margin-right: 0.1rem;}*/
</style>

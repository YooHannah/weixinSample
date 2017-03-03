<template>
  <div class="container">
    <header class="bar bar-nav" style="background:#3C3C3C">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem"> 朋友圈 </span>
    <i class="icon"> &#xe617;</i>
    </header>
    <div class="content">
    <img src="/static/img/psb.jpg" style="width:100%;height:50%;z-index:-1;position:absolute">
    <div style="">
    <div style="color:#ffffff;margin-left:48%;margin-top:75%"> <span>Pre-dawn</span> </div>
    <img src="/static/img/mini.png" style="width:25%;height:25%;margin-top:-13%;border:0.15rem solid #ffffff;float:right;margin-right:4%">
    <div style="margin-top:10%;margin-left:70%"><span style="font-size:0.75rem">Close the door.</span></div>
    </div>
    <div class="underline">
      <ul>
          <li class="item-content" v-for="item in items" track-by="$index">
            <div class="item-inner" style="padding-left:0.75rem;">
              <div class="weui-media-box__bd" style="margin-right:-6rem;">
                <img class="weui-media-box__thumb" :src="item.Avatar" height="40" width="40">
                <a class="weui-media-box__title" style="font-size:1.2rem;margin-top:0rem">
                <span style="font-size:0.75rem;display: block;padding-left: 2.5rem;margin-top: -2.8rem;font-size:0.75rem">{{item.name}}</span>
                </a>
                <span class="selfcomment">{{item.content.self_comment}}</span>
                <span class="allcontent" v-show="item.content.self_comment.length > 130" @click="show($index)">全文</span>
                <span class="closeallcontent" v-show="item.content.self_comment.length > 130" @click="hide($index)">关闭</span>
              </div>
                  <div  v-show="item.content.islink == 'false'" style="margin-left:1.5rem;margin-right: 1rem;">
                    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                      <div  v-show="item.content.img.length==1" style="margin-left:0.2rem">
                        <img  :src="item.content.img[0]" height="50%" width="50%">
                      </div>
                       <div v-show="item.content.img.length>1" style="margin-left:0.75rem">
                        <div class="img_container" >
                            <div class="img_parent">
                              <div class="img_item"><img :src="item.content.img[0]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[2]!= undefined"><img :src="item.content.img[2]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[4]!= undefined"><img :src="item.content.img[4]" height="77" width="77"></div>
                            </div>
                            <div class="img_parent">
                              <div class="img_item" v-show="item.content.img[1]!= undefined"><img :src="item.content.img[1]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[3]!= undefined"><img :src="item.content.img[3]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[5]!= undefined"><img :src="item.content.img[5]" height="77" width="77"></div>
                            </div>
                             <div class="img_parent">
                              <div class="img_item" v-show="item.content.img[6]!= undefined"><img :src="item.content.img[6]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[7]!= undefined"><img :src="item.content.img[7]" height="77" width="77"></div>
                              <div class="img_item" v-show="item.content.img[8]!= undefined"><img :src="item.content.img[8]" height="77" width="77"></div>
                            </div>
                          </div>
                      </div>
                    </a>
                  </div>
                   <div v-show="item.content.islink =='true'" style="margin-left:1.5rem;margin-right: 1rem;margin-bottom:0.5rem">
                      <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" style="margin-left:1rem;background-color:#FCFCFC;padding:0.2rem">
                        <div class="weui-media-box__hd" v-show="item.content.ismusic =='false'" style="margin-right:0.2rem;padding-top:0.4rem">
                          <img width="45" height="45" :src="item.content.img[0]">
                        </div>
                         <div class="weui-media-box__hd" v-show="item.content.ismusic =='true'" style="margin-right:0.2rem;padding-top:0.4rem">
                          <img  style="position:absolute;height: 25px; margin: 11px 11px;" src="/static/img/album17.png">
                          <img  width="45" height="45" :src="item.content.img[0]">
                        </div>
                         <div class="weui-media-box__bd" v-show="item.content.ismusic =='false'" style="margin-top:0.3rem">
                          <p class="weui-media-box__desc" style="margin-top:auto;color:#000000;">{{item.content.linktitle}}</p>
                        </div>
                        <div class="weui-media-box__bd" v-show="item.content.ismusic =='true'" style="margin-top:0.3rem">
                           <p class="weui-media-box__title" style="font-size:0.75rem;margin-top:auto;margin-bottom:auto">{{item.content.linktitle}}</p>
                           <p class="weui-media-box__desc" style="margin-top:auto;color:#6C6C6C;height:0.8rem">{{item.content.singer}}</p>
                        </div>
                      </a>
                </div>
                <div style="margin-bottom:2rem;margin-left:2.5rem;">
                  <div v-show="item.addr!=''" style="font-size:0.6rem;">
                   {{item.addr}}
                 </div>
                 <div>
                   <span style="float:left;font-size:0.6rem"> {{item.time}} </span>
                   <img src="/static/img/me7.png" style="float:right;margin-right:1rem" height="20" width="30">
                 </div>
               </div>
               <div style="margin-bottom:2rem;margin-left:2.5rem;background-color:#FCFCFC;margin-right:1rem">
                  <div v-show="item.content.likefriends.length==1" class="likefriends">
                   <i class="icon" style="margin-right:0.2rem">&#xe616;</i> <span>{{item.content.likefriends[0]}}/</span>
                 </div>
                 <div v-show="item.content.likefriends.length>1" class="likefriends">
                   <i class="icon" style="margin-right:0.2rem">&#xe616;</i><span v-for="term in item.content.likefriends">{{term}}、</span>
                 </div>
                 <div v-show="item.content.friends_comment.length>0 && item.content.likefriends.length>0" class="likefriendscomment"></div>
                 <div v-show="item.content.friends_comment.length>0" class="friends_comment">
                    <div v-for="term in item.content.friends_comment">
                      <p v-show="term.response==''"><a href="">{{term.friend}}:</a>{{term.content}} </p>
                      <p v-show="term.response!=''"><a href="">{{term.response}}</a>回复<a href="">{{term.friend}}:</a>{{term.content}} </p>
                    </div>
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
import $ from 'zepto'

export default {
  route: {
    data () {
      return this.$http.get('/static/data/friendscircle.json')
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
    show (val) {
      let selfcomment = $(this.$el).find('.selfcomment')
      let allcontent = $(this.$el).find('.allcontent')
      let closeallcontent = $(this.$el).find('.closeallcontent')
      selfcomment[val].style.overflow = 'visible'
      selfcomment[val].style.maxHeight = 'none'
      allcontent[val].style.display = 'none'
      closeallcontent[val].style.display = 'block'
    },
    hide (val) {
      let selfcomment = $(this.$el).find('.selfcomment')
      let allcontent = $(this.$el).find('.allcontent')
      let closeallcontent = $(this.$el).find('.closeallcontent')
      selfcomment[val].style.overflow = 'hidden'
      selfcomment[val].style.maxHeight = '6rem'
      allcontent[val].style.display = 'block'
      closeallcontent[val].style.display = 'none'
    }
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

.list-block ul {
  background-color: #FCFCFC;
  width: 14rem;
}
.weui-media-box__title{
  white-space:normal;
}
.img_container{
        display: flex;
        flex-flow:column nowrap;
        width: 12rem;/*任意改变长宽*/
        height: 12.2rem;
        background:#fff;
        margin-left: -0.6rem;
    }
.img_parent{
    display: flex;
    flex-flow:row nowrap;
    flex:1 1 0;/*元素弹性*/
    /*text-align: center;*/
}
.img_container .img_parent{margin-bottom: 0.2rem;}
.img_item{
    flex:1 1 0;/*元素弹性*/
    background: #ffffff;
}
.img_parent .img_item{margin-right: 0.2rem;}
/*.img_parent .img_item:second-child{margin-right: 0.2rem;}*/
.selfcomment{
     font-size:0.75rem;
     display: block;
     padding-left: 2.5rem;
     width:17rem;
     font-size:0.75rem;
     overflow:hidden;
     max-height: 6rem
}
.allcontent{
  margin-left: 2.5rem;
  font-size: 0.7rem;
  color:blue
}
.closeallcontent{
  margin-left: 2.5rem;
  font-size: 0.7rem;
  color:blue;
  display: none
}
.underline{
  background:#ffffff;
  margin-top: -3.3rem;
  padding-top: 3rem
}
.underline li:after{
    content: '';
    left: 0;
    bottom: 0;
    margin-bottom: 1rem;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #e7e7e7;
    display: block;
    z-index: 15;
    /*-webkit-transform-origin: 50% 100%;*/
    transform-origin: 50% 100%;
}
.likefriends{
  font-size: 0.6rem
}
.friends_comment{
  font-size: 0.6rem
}
.likefriendscomment{
    content: '';
    left: 0;
    bottom: 0;
    right: auto;
    top: auto;
    height: 1px;
    width: 100%;
    background-color: #e7e7e7;
    display: block;
    z-index: 15;
    /*-webkit-transform-origin: 50% 100%;*/
    transform-origin: 50% 100%;
}
</style>

<template>
  <div class="container">
    <header class="bar bar-nav" style="background:#3C3C3C">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem">个人信息</span>
    </header>
    <div class="content list">
      <div class="list-block infinite-list">
        <ul>
          <li class="item-content" v-for="item in items[0]" track-by="$index">
            <div class="item-inner">
              <div class="item-title fontsize">{{item.name}}</div>
              <div class="item-after" v-show="$index==0" style="margin-bottom:1rem">
              <img :src="item.value" width="50" height="50">
              </div>
              <div class="item-after fontsize2" v-show="$index==1||$index==2">{{item.value}}</div>
              <div class="item-after" v-show="$index==3" style="color:#ADADAD;font-size:0.9rem"><i class="icon"> &#xe62e;</i></div>
            </div>
          </li>
        </ul>
      </div>

       <div class="list-block infinite-list" >
        <ul>
          <li class="item-content" v-for="item in items[1]" track-by="$index">
            <div class="item-inner">
              <div class="item-title fontsize">{{item.name}}</div>
              <div class="item-after fontsize2">{{item.value}}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  route: {
    data () {
      return this.$http.get('/static/data/personalinformation.json')
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
.list-block .item-inner:after {
    display: block;
}
.fontsize{
  font-size:0.75rem;
  color:#000000;
}
.fontsize2{
  font-size:0.6rem;
  color:#ADADAD;
}
</style>

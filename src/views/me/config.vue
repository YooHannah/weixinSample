<template>
  <div class="container">
    <header class="bar bar-nav" style="background:#393a3e">
    <i class="icon icon-left" style="color:#ffffff" v-link="{path: '/me', replace: true}"> &#xe6a4;</i>
    <span style="font-size:18px;color:#ffffff;margin-left:1.5rem"> 设置</span>
    </header>
    <div class="content list">
      <div class="list-block infinite-list">
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 新消息提醒</div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 勿扰模式 </div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 聊天 </div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 隐私 </div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 通用 </div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize"> 账号与安全 </div>
            </div>
          </li>
        </ul>
      </div>

       <div class="list-block infinite-list" >
        <ul>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize">关于微信</div>
            </div>
          </li>
          <li class="item-content">
            <div class="item-inner">
              <div class="item-title fontsize">退出</div>
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
  computed: {
    length () {
      return this.items.length
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
</style>

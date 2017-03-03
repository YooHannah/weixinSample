import $ from 'zepto'

export default function (router) {
  router.map({
    '*': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/': {
      component (resolve) {
        require(['./views/welcome'], resolve)
      }
    },
    '/weixin': {
      component (resolve) {
        require(['./views/weixin/index'], resolve)
      }
    },
    '/contacts': {
      component (resolve) {
        require(['./views/contacts/index'], resolve)
      }
    },
    '/discovery': {
      component (resolve) {
        require(['./views/discovery/index'], resolve)
      }
    },
    '/discovery/friendscircle': {
      component (resolve) {
        require(['./views/discovery/friendscircle'], resolve)
      }
    },
    '/me': {
      component (resolve) {
        require(['./views/me/index'], resolve)
      }
    },
    '/me/Personalinformation': {
      component (resolve) {
        require(['./views/me/Personalinformation'], resolve)
      }
    },
    '/me/collection': {
      component (resolve) {
        require(['./views/me/collection'], resolve)
      }
    },
    '/me/config': {
      component (resolve) {
        require(['./views/me/config'], resolve)
      }
    },
    '/me/card': {
      component (resolve) {
        require(['./views/me/card'], resolve)
      }
    },
    '/me/album': {
      component (resolve) {
        require(['./views/me/album'], resolve)
      }
    },
    '/me/purse': {
      component (resolve) {
        require(['./views/me/purse'], resolve)
      }
    }
  })

  router.beforeEach(({to, from, next}) => {
    let toPath = to.path
    let fromPath = from.path
    console.log(`to: ${toPath} from: ${fromPath}`)
    if (toPath.replace(/[^/]/g, '').length > 1) {
      router.app.isIndex = false
    }
    else {
      let depath = toPath === '/' || toPath === '/invite' || toPath === '/rank'
      router.app.isIndex = depath ? 0 : 1
    }
    next()
  })

  router.afterEach(function ({to}) {
    console.log(`成功浏览到: ${to.path}`)
    $.refreshScroller()
  })
}

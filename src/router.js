const index = [{
  path: '/',
  meta: {
    title: ''
  },
  component: (resolve) => require(['./views/index.vue'], resolve)
}];

const basic = [{
    path: '/basic/grid',
    meta: {
      title: 'grid 栅格'
    },
    component: (resolve) => require(['./views/basic/grid.vue'], resolve)
  }, {
    path: '/basic/layout',
    meta: {
      title: 'layout 布局'
    },
    component: (resolve) => require(['./views/basic/layout.vue'], resolve)
  },
  {
    path: '/basic/button',
    meta: {
      title: 'button 按钮'
    },
    component: (resolve) => require(['./views/basic/button.vue'], resolve)
  }
];

const form = [{
    path: '/form/input',
    meta: {
      title: 'input 输入框'
    },
    component: (resolve) => require(['./views/form/input.vue'], resolve)
  },
  {
    path: '/form/radio',
    meta: {
      title: 'radio 单选框'
    },
    component: (resolve) => require(['./views/form/radio.vue'], resolve)
  },
  {
    path: '/form/checkbox',
    meta: {
      title: 'checkbox 多选框'
    },
    component: (resolve) => require(['./views/form/checkbox.vue'], resolve)
  },
  {
    path: '/form/switch',
    meta: {
      title: 'switch 开关'
    },
    component: (resolve) => require(['./views/form/switch.vue'], resolve)
  },
  {
    path: '/form/select',
    meta: {
      title: 'select 选择器'
    },
    component: (resolve) => require(['./views/form/select.vue'], resolve)
  },
  {
    path: '/form/rate',
    meta: {
      title: 'rate 评分'
    },
    component: (resolve) => require(['./views/form/rate.vue'], resolve)
  }
];

const view = [{
    path: '/view/card',
    meta: {
      title: 'card 卡片'
    },
    component: (resolve) => require(['./views/view/card.vue'], resolve)
  },
  {
    path: '/view/message',
    meta: {
      title: 'message 全局提示'
    },
    component: (resolve) => require(['./views/view/message.vue'], resolve)
  },
  {
    path: '/view/notice',
    meta: {
      title: 'notice 通知提醒'
    },
    component: (resolve) => require(['./views/view/notice.vue'], resolve)
  },
  {
    path: '/view/modal',
    meta: {
      title: 'modal 对话框'
    },
    component: (resolve) => require(['./views/view/modal.vue'], resolve)
  },
  {
    path: '/view/progress',
    meta: {
      title: 'progress 进度条'
    },
    component: (resolve) => require(['./views/view/progress.vue'], resolve)
  },
  {
    path: '/view/avatar',
    meta: {
      title: 'avatar 头像'
    },
    component: (resolve) => require(['./views/view/avatar.vue'], resolve)
  },
  {
    path: '/view/badge',
    meta: {
      title: 'badge 徽标数'
    },
    component: (resolve) => require(['./views/view/badge.vue'], resolve)
  },
  {
    path: '/view/collapse',
    meta: {
      title: 'collapse 折叠面板'
    },
    component: (resolve) => require(['./views/view/collapse.vue'], resolve)
  },
  {
    path: '/view/timeline',
    meta: {
      title: 'timeline 时间轴'
    },
    component: (resolve) => require(['./views/view/timeline.vue'], resolve)
  },
  {
    path: '/view/carousel',
    meta: {
      title: 'carousel 走马灯'
    },
    component: (resolve) => require(['./views/view/carousel.vue'], resolve)
  }
];

const navigation = [{
    path: '/navigation/menu',
    meta: {
      title: 'menu 导航菜单'
    },
    component: (resolve) => require(['./views/navigation/menu.vue'], resolve)
  },
  {
    path: '/navigation/tabs',
    meta: {
      title: 'tabs 标签页'
    },
    component: (resolve) => require(['./views/navigation/tabs.vue'], resolve)
  },
  {
    path: '/navigation/steps',
    meta: {
      title: 'steps 步骤条'
    },
    component: (resolve) => require(['./views/navigation/steps.vue'], resolve)
  }
];

const chart = [{
  path: '/chart/circle',
  meta: {
    title: 'circle 进度环'
  },
  component: (resolve) => require(['./views/chart/circle.vue'], resolve)
}];

const other = [{
    path: '/other/backtop',
    meta: {
      title: 'backtop 返回顶部'
    },
    component: (resolve) => require(['./views/other/backtop.vue'], resolve)
  },
  {
    path: '/other/spin',
    meta: {
      title: 'spin 加载中'
    },
    component: (resolve) => require(['./views/other/spin.vue'], resolve)
  }
];

const routers = [...index, ...basic, ...form, ...view, ...navigation, ...chart, ...other];

export default routers;
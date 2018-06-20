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
      title: 'grid'
    },
    component: (resolve) => require(['./views/basic/grid.vue'], resolve)
  }, {
    path: '/basic/layout',
    meta: {
      title: 'layout'
    },
    component: (resolve) => require(['./views/basic/layout.vue'], resolve)
  },
  {
    path: '/basic/button',
    meta: {
      title: 'button'
    },
    component: (resolve) => require(['./views/basic/button.vue'], resolve)
  }
];

const form = [{
    path: '/form/input',
    meta: {
      title: 'input'
    },
    component: (resolve) => require(['./views/form/input.vue'], resolve)
  },
  {
    path: '/form/radio',
    meta: {
      title: 'radio'
    },
    component: (resolve) => require(['./views/form/radio.vue'], resolve)
  },
  {
    path: '/form/checkbox',
    meta: {
      title: 'checkbox'
    },
    component: (resolve) => require(['./views/form/checkbox.vue'], resolve)
  },
  {
    path: '/form/switch',
    meta: {
      title: 'switch'
    },
    component: (resolve) => require(['./views/form/switch.vue'], resolve)
  },
  {
    path: '/form/select',
    meta: {
      title: 'select'
    },
    component: (resolve) => require(['./views/form/select.vue'], resolve)
  },
  {
    path: '/form/rate',
    meta: {
      title: 'rate'
    },
    component: (resolve) => require(['./views/form/rate.vue'], resolve)
  }
];

const routers = [...index, ...basic, ...form];

export default routers;
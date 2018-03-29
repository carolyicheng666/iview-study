const routers = [{
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
  },
  {
    path: '/basic/grid',
    meta: {
      title: 'grid'
    },
    component: (resolve) => require(['./views/basic/grid.vue'], resolve)
  },
  {
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
export default routers;
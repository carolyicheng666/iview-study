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
  }
];
export default routers;
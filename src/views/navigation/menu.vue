<style scoped lang="less">
.menu {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
}

h1 {
  color: #f00;
}
</style>
<template>
  <div class="menu">
    <div class="content">
      <h1>顶部导航</h1>
      <p>水平的顶部导航菜单。</p>
      <p>通过设置属性 theme 为 light、dark、primary 可以选择主题。</p>
      <p>通过事件 on-select 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。</p>
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
        <Icon type="ios-paper"></Icon>
        内容管理
        </MenuItem>
        <MenuItem name="2">
        <Icon type="ios-people"></Icon>
        用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
        <Icon type="settings"></Icon>
        综合设置
        </MenuItem>
      </Menu>
      <br>
      <h3>切换主题</h3>
      <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
      </RadioGroup>
    </div>

    <div class="content">
      <h1>侧栏导航</h1>
      <p>垂直导航菜单，可以内嵌子菜单。</p>
      <p>设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。</p>
      <p>设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。</p>
      <p>通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。</p>
      <Row>
        <Col span="8">
          <Menu :theme="theme2">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Col>
        <Col span="8">
          <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Col>
        <Col span="8">
          <Menu :theme="theme2" :open-names="['1']" accordion>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                内容管理
              </template>
              <MenuItem name="1-1">文章管理</MenuItem>
              <MenuItem name="1-2">评论管理</MenuItem>
              <MenuItem name="1-3">举报管理</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
              </template>
              <MenuItem name="2-1">新增用户</MenuItem>
              <MenuItem name="2-2">活跃用户</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
              </template>
              <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
              </MenuGroup>
              <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
              </MenuGroup>
            </Submenu>
          </Menu>
        </Col>
      </Row>
      <br>
      <p>Change theme</p>
      <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
      </RadioGroup>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long disabled size="large">previous</Button>
      </Col>
      <Col span="8">
        <Button type="error" long @click="home" size="large">home</Button>
      </Col>
      <Col span="8">
        <Button type="primary" long @click="next" size="large">next</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme1: "light",
      theme2: "light"
    }
  },
  methods: {
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './tabs'
    }
  }
}
</script>

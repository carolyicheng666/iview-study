<style scoped lang="less">
.avatar {
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
  <div class="avatar">
    <div class="content">
      <h1>基础用法</h1>
      <p>头像有三种尺寸，两种形状可选。</p>
      <div class="demo-avatar">
        <Avatar icon="person" size="large" />
        <Avatar icon="person" />
        <Avatar icon="person" size="small" />
      </div>
      <div class="demo-avatar">
        <Avatar shape="square" icon="person" size="large" />
        <Avatar shape="square" icon="person" />
        <Avatar shape="square" icon="person" size="small" />
      </div>
    </div>

    <div class="content">
      <h1>类型</h1>
      <p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</p>
      <div class="demo-avatar">
        <Avatar icon="person" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
        <Avatar style="background-color: #87d068" icon="person" />
      </div>
    </div>

    <div class="content">
      <h1>带徽标的头像</h1>
      <p style="padding-bottom: 10px;">通常用于消息提示。</p>
      <div class="demo-avatar-badge">
        <Badge count="1">
          <Avatar shape="square" icon="person" />
        </Badge>
        <Badge dot>
          <Avatar shape="square" icon="person" />
        </Badge>
      </div>
    </div>

    <div class="content">
      <h1>自动调整字符大小</h1>
      <p>对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。</p>
      <div class="demo-avatar">
        <Avatar :style="{background: color}">{{ user }}</Avatar>
        <Button size="small" @click="handleChange">Change</Button>
      </div>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long @click="previous" size="large">previous</Button>
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
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
export default {
  data() {
    return {
      user: UserList[0],
      color: ColorList[0]
    }
  },
  methods: {
    handleChange() {
      const index = UserList.indexOf(this.user);
      this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
      this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
    },
    previous() {
      window.location.href = './progress'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './badge'
    }
  }
}
</script>
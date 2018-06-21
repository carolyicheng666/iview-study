<style scoped lang="less">
.badge {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
}

h1 {
  color: #f00;
}

.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;
}
</style>
<template>
  <div class="badge">
    <div class="content">
      <h1 style="margin-bottom: 10px;">基础用法</h1>
      <Badge count="3">
        <a href="#" class="demo-badge"></a>
      </Badge>
    </div>

    <div class="content">
      <h1>小红点</h1>
      <Badge dot>
        <a href="#" class="demo-badge"></a>
      </Badge>
      <Badge dot style="margin-left: 50px; margin-right: 50px;">
        <Icon type="ios-bell-outline" size="26"></Icon>
      </Badge>
      <Badge dot>
        <a href="#">可以是一个链接</a>
      </Badge>
    </div>

    <div class="content">
      <h1>封顶数字</h1>
      <p style="margin-bottom: 10px;">通过设置overflow-count属性设置一个封顶值，当超过时，会显示封顶值，默认值99</p>
      <Badge count="100">
        <a href="#" class="demo-badge"></a>
      </Badge>
      <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
      </Badge>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long @click="previous" size="large">previous</Button>
      </Col>
      <Col span="8">
        <Button type="error" long @click="home" size="large">home</Button>
      </Col>
      <Col span="8">
        <Button type="primary" long disabled size="large">next</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  methods: {
    previous() {
      window.location.href = './avatar'
    },
    home() {
      window.location.href = '../../'
    }
  }
}
</script>
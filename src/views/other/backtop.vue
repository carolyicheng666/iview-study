<style scoped lang="less">
.backtop {
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
  <div class="backtop">
    <div class="content" style="height: 2000px;">
      <h1>返回顶部-基础用法</h1>
      <p>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</p>
      <BackTop></BackTop>
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
  methods: {
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './spin'
    }
  }
};
</script>

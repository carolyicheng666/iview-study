<style scoped lang="less">
.progress {
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
  <div class="progress">
    <div class="content">
      <h1>基本用法</h1>
      <p>处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success</p>
      <Progress :percent="25"></Progress>
      <Progress :percent="45" status="active"></Progress>
      <Progress :percent="65" status="wrong"></Progress>
      <Progress :percent="100"></Progress>
      <Progress :percent="25" hide-info></Progress>
    </div>

    <div class="content">
      <h1>垂直方向</h1>
      <p>设置属性 vertical 将以垂直方向显示。</p>
      <div style="height: 100px;">
        <Progress vertical :percent="25"></Progress>
        <Progress vertical :percent="45" status="active"></Progress>
        <Progress vertical :percent="65" status="wrong"></Progress>
        <Progress vertical :percent="100"></Progress>
        <Progress vertical :percent="25" hide-info></Progress>
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
export default {
  methods: {
    previous() {
      window.location.href = './modal'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './avatar'
    }
  }
}
</script>
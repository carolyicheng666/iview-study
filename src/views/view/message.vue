<style scoped lang="less">
.message {
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
  <div class="message">
    <div class="content">
      <h1>普通提示</h1>
      <p>最基本的提示，默认在1.5秒后消失。</p>
      <Button type="primary" @click="info">显示普通提示</Button>
      <Button type="success" @click="success">显示成功提示</Button>
      <Button type="warning" @click="warning">显示警告提示</Button>
      <Button type="error" @click="error">显示错误提示</Button>
    </div>

    <div class="content">
      <h1>加载中</h1>
      <p>Loading 的状态，并异步在某个时机移除。</p>
      <Button @click="loading">显示加载中...</Button>
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
    info() {
      this.$Message.info('This is a info tip');
    },
    success() {
      this.$Message.success('This is a success tip');
    },
    warning() {
      this.$Message.warning('This is a warning tip');
    },
    error() {
      this.$Message.error('This is an error tip');
    },
    loading() {
      const msg = this.$Message.loading({
        content: 'Loading...',
        duration: 0
      });
      setTimeout(msg, 3000);
    },
    previous() {
      window.location.href = './card'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './notice'
    }
  }
}
</script>
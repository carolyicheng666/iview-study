<style scoped lang="less">
.notice {
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
  <div class="notice">
    <div class="content">
      <h1>基础用法</h1>
      <p>基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。</p>
      <Button type="primary" @click="open(false)">Open notice</Button>
      <Button @click="open(true)">Open notice(only title)</Button>
    </div>

    <div class="content">
      <h1>提醒类型</h1>
      <p>带有状态图标的提醒。</p>
      <p>With desc</p>
      <Button @click="info(false)">Info</Button>
      <Button @click="success(false)">Success</Button>
      <Button @click="warning(false)">Warning</Button>
      <Button @click="error(false)">Error</Button>
      <p>Only title</p>
      <Button @click="info(true)">Info</Button>
      <Button @click="success(true)">Success</Button>
      <Button @click="warning(true)">Warning</Button>
      <Button @click="error(true)">Error</Button>
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
    open(nodesc) {
      this.$Notice.open({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    info(nodesc) {
      this.$Notice.info({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    success(nodesc) {
      this.$Notice.success({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    warning(nodesc) {
      this.$Notice.warning({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    error(nodesc) {
      this.$Notice.error({
        title: 'Notification title',
        desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
      });
    },
    previous() {
      window.location.href = './message'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './modal'
    }
  }
}
</script>
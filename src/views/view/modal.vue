<style scoped lang="less">
.modal {
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
  <div class="modal">
    <div class="content">
      <h1>基础用法</h1>
      <p>最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。</p>
      <p>可以使用 v-model 实现双向绑定。</p>
      <p>默认按键盘ESC键也可以关闭。</p>
      <Button type="primary" @click="modal1 = true">Display dialog box</Button>
      <Modal v-model="modal1" title="Common Modal dialog box title" @on-ok="ok" @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </div>

    <div class="content">
      <h1>实例化使用方法</h1>
      <Button @click="instance('info')">Info</Button>
      <Button @click="instance('success')">Success</Button>
      <Button @click="instance('warning')">Warning</Button>
      <Button @click="instance('error')">Error</Button>
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
  data() {
    return {
      modal1: false
    }
  },
  methods: {
    ok() {
      this.$Message.info('Clicked ok');
    },
    cancel() {
      this.$Message.info('Clicked cancel');
    },
    instance(type) {
      const title = 'Title';
      const content = '<p>Content of dialog</p><p>Content of dialog</p>';
      switch (type) {
        case 'info':
          this.$Modal.info({
            title: title,
            content: content
          });
          break;
        case 'success':
          this.$Modal.success({
            title: title,
            content: content
          });
          break;
        case 'warning':
          this.$Modal.warning({
            title: title,
            content: content
          });
          break;
        case 'error':
          this.$Modal.error({
            title: title,
            content: content
          });
          break;
      }
    },
    previous() {
      window.location.href = './notice'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './progress'
    }
  }
}
</script>
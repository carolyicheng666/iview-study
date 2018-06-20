<style scoped lang="less">
.switch {
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
  <div class="switch">
    <div class="content">
      <h1>基本</h1>
      <p>基本用法，状态切换时会触发事件。</p>
      <Switch v-model="switch1" @on-change="change"></Switch>
    </div>

    <div class="content">
      <h1>尺寸</h1>
      <p>设置size为 large 或 small 使用大号和小号的开关。</p>
      <Switch size="large"></Switch>
      <Switch></Switch>
      <Switch size="small"></Switch>
    </div>

    <div class="content">
      <h1>文字和图标</h1>
      <p>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</p>
      <Switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
      </Switch>
      <Switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
      </Switch>
      <br><br>
      <Switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
      </Switch>
      <Switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
      </Switch>
    </div>

    <div class="content">
      <h1>不可用</h1>
      <p>禁用开关。</p>
      <Switch :disabled="disabled"></Switch>
      <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
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
    data () {
      return {
        switch1: false,
        disabled: true
      }  
    },
    methods: {
      change (status) {
        this.$Message.info('开关状态：' + status);
      },
      previous() {
        window.location.href = './checkbox'
      },
      home() {
        window.location.href = '../../'
      },
      next() {
        window.location.href = './select'
      }
    }
  }
</script>

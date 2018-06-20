<style scoped lang="less">
.rate {
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
  <div class="rate">
    <div class="content">
      <h1>基础用法</h1>
      <p>基本用法。</p>
      <Rate v-model="value"></Rate>
    </div>

    <div class="content">
      <h1>显示提示</h1>
      <p>设置属性 show-text 可以显示提示文字。</p>
      <p>提示内容也可以通过 slot 自定义。</p>
      <Row>
        <Col span="12">
          <Rate show-text v-model="valueText"></Rate>
        </Col>
        <Col span="12">
          <Rate show-text allow-half v-model="valueCustomText">
            <span style="color: #f5a623">{{ valueCustomText }}</span>
          </Rate>
        </Col>
      </Row>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long @click="previous" size="large">previous</Button>
      </Col>
      <Col span="8">
        <Button type="error" long @click="home" size="large">home</Button>
      </Col>
      <Col span="8">
        <Button type="primary" long size="large" disabled>next</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 0,
        valueText: 3,
        valueCustomText: 3.8
      }
    },
    methods: {
      previous() {
        window.location.href = './select'
      },
      home() {
        window.location.href = '../../'
      }
    }
  }
</script>

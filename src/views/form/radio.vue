<style scoped lang="less">
.radio {
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
  <div class="radio">
    <div class="content">
      <h1>单独使用</h1>
      <p>使用 v-model 可以双向绑定数据。</p>
      <Radio v-model="single">Radio</Radio>
    </div>

    <div class="content">
      <h1>组合使用</h1>
      <p>使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。</p>
      <RadioGroup v-model="phone">
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
      <br>
      <RadioGroup v-model="animal">
        <Radio label="金斑蝶"></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
    </div>

    <div class="content">
      <h1>不可用</h1>
      <p>通过设置disabled属性来禁用单选框。</p>
      <Radio v-model="disabledSingle" disabled>Radio</Radio>
      <br>
      <RadioGroup v-model="disabledGroup" disabled>
        <Radio label="金斑蝶" disabled></Radio>
        <Radio label="爪哇犀牛"></Radio>
        <Radio label="印度黑羚"></Radio>
      </RadioGroup>
    </div>

    <div class="content">
      <h1>垂直</h1>
      <p>设置属性 vertical 可以垂直显示，按钮样式下无效。</p>
      <RadioGroup v-model="vertical" vertical>
        <Radio label="apple">
          <Icon type="social-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="social-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="social-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup>
    </div>

    <div class="content">
      <h1>按钮样式</h1>
      <p>组合使用时可以设置属性type为 button 来应用按钮的样式。</p>
      <RadioGroup v-model="button1" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
    </div>

    <div class="content">
      <h1>尺寸</h1>
      <p>通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。</p>
      <RadioGroup v-model="button2" type="button" size="large">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup v-model="button3" type="button">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup v-model="button4" type="button" size="small">
        <Radio label="北京"></Radio>
        <Radio label="上海"></Radio>
        <Radio label="深圳"></Radio>
        <Radio label="杭州"></Radio>
      </RadioGroup>
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
        single: false,
        phone: 'apple',
        animal: '爪哇犀牛',
        disabledSingle: true,
        disabledGroup: '爪哇犀牛',
        vertical: 'apple',
        button1: '北京',
        button2: '北京',
        button3: '北京',
        button4: '北京'
      }
    },
    methods: {
      previous() {
        window.location.href = './input'
      },
      home() {
        window.location.href = '../../'
      },
      next() {
        window.location.href = './checkbox'
      }
    }
  }
</script>

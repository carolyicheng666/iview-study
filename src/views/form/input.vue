<style scoped lang="less">
.input {
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
  <div class="input">
    <div class="content">
      <h1>基础用法</h1>
      <p>基本用法，可以使用 v-model 实现数据的双向绑定。可以直接设置 style 来改变输入框的宽度，默认 100%。</p>
      <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
    </div>
    
    <div class="content">
      <h1>尺寸</h1>
      <p>输入框有三种尺寸：大、默认（中）、小</p>
      <p>通过设置 size 为 large 和 small 设置为大和小尺寸，不设置为默认（中）尺寸。</p>
      <Row :gutter="16">
        <Col span="6">
          <Input v-model="value1" size="large" placeholder="large size"></Input>
        </Col>
        <Col span="6">
          <Input v-model="value2" placeholder="default size"></Input>
        </Col>
        <Col span="6">
          <Input v-model="value3" size="small" placeholder="small size"></Input>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>可清空</h1>
      <p>开启属性 clearable 可显示清空按钮。</p>
      <Input v-model="value14" placeholder="Enter something..." clearable style="width: 300px"></Input>
    </div>

    <div class="content">
      <h1>带Icon的输入框</h1>
      <p>通过 icon 属性可以在输入框右边加一个图标。点击图标，会触发 on-click 事件。</p>
      <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 300px"></Input>
    </div>

    <div class="content">
      <h1>文本域</h1>
      <p>通过设置属性 type 为 textarea 来使用文本域，用于多行输入。</p>
      <p>通过设置属性 rows 控制文本域默认显示的行数。</p>
      <Row :gutter="16">
        <Col span="8">
          <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
        </Col>
        <Col span="8">
          <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>适应文本高度的文本域</h1>
      <p>设置属性 autosize，文本域会自动适应高度的变化。</p>
      <p>autosize也可以设定为一个对象，指定最小行数和最大行数。</p>
      <Row :gutter="16">
        <Col span="8">
          <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>
        </Col>
        <Col span="8">
          <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>禁用状态</h1>
      <p>通过添加 disabled 属性可设置为不可用状态。</p>
      <Row :gutter="16">
        <Col span="8">
          <Input v-model="value9" disabled placeholder="Enter something..."></Input>
        </Col>
        <Col span="8">
          <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>复合型输入框</h1>
      <p>通过前置和后置的 slot 可以实现复合型的输入框。</p>
      <Input v-model="value11">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
      </Input>
      <br>
      <Input v-model="value12">
        <Select v-model="select1" slot="prepend" style="width: 80px">
          <Option value="http">http://</Option>
          <Option value="https">https://</Option>
        </Select>
        <Select v-model="select2" slot="append" style="width: 70px">
          <Option value="com">.com</Option>
          <Option value="org">.org</Option>
          <Option value="io">.io</Option>
        </Select>
      </Input>
      <br>
      <Input v-model="value13">
        <Select v-model="select3" slot="prepend" style="width: 80px">
          <Option value="day">Day</Option>
          <Option value="month">Month</Option>
        </Select>
        <Button slot="append" icon="ios-search"></Button>
      </Input>

      <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
        <Col span="8">
          <Button type="primary" long size="large" disabled>previous</Button>
        </Col>
        <Col span="8">
          <Button type="error" long @click="home" size="large">home</Button>
        </Col>
        <Col span="8">
          <Button type="primary" long @click="next" size="large">next</Button>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value14: 'Hello World',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        select1: 'http',
        select2: 'com',
        select3: 'day'
      }
    },
    methods: {
      home() {
        window.location.href = '../../'
      },
      next() {
        window.location.href = './radio'
      }
    }
  }
</script>
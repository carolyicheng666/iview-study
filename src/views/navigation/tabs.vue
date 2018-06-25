<style scoped lang="less">
.tabs {
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
  <div class="tabs">
    <div class="content">
      <h1>标签页</h1>
      <Form :model="setting" :label-width="100">
        <FormItem label="尺寸">
          <RadioGroup v-model="setting.size" type="button">
            <Radio label="default">默认</Radio>
            <Radio label="small">小</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="顶部样式">
          <RadioGroup v-model="setting.type" type="button">
            <Radio label="line">默认</Radio>
            <Radio label="card">卡片</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="可关闭">
          <Switch v-model="setting.closable">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </Switch>
          只在顶部样式是 “卡片” 时有效
        </FormItem>
        <FormItem label="动画效果">
          <Switch v-model="setting.animated">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </Switch>
        </FormItem>
      </Form>
      <br>
      <Tabs :size="setting.size" :value="name" :type="setting.type" :closable="setting.closable" @on-tab-remove="handleTabRemove" :animated="setting.animated">
        <TabPane label="macOS" icon="social-apple" name="macOS" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="Windows" icon="social-windows" disabled name="Windows" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="Linux" icon="social-tux" name="Linux" v-if="tab2">标签三的内容</TabPane>
      </Tabs>
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
      name: "Linux",
      tab0: true,
      tab1: true,
      tab2: true,
      tabs: 3,
      setting: {
        size: "default",
        type: "line",
        closable: true,
        animated: true
      }
    };
  },
  methods: {
    handleTabRemove(name) {
      this["tab" + name] = false;
    },
    previous() {
      window.location.href = './menu'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './steps'
    }
  }
};
</script>

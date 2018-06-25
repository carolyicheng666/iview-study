<style scoped lang="less">
.steps {
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
  <div class="step">
    <div class="content">
      <h1>进度条</h1>
      <Form v-model="setting" :label-width="100">
        <FormItem label="指示器位置">
          <RadioGroup v-model="setting.size" type="button">
            <Radio label="">默认</Radio>
            <Radio label="small">小</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="指示器位置">
          <RadioGroup v-model="setting.direction" type="button">
            <Radio label="horizontal">横向</Radio>
            <Radio label="vertical">纵向</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
      <p>当前正在进行第 {{ setting.current + 1 }} 步</p>
      <Steps :current="setting.current" :size="setting.size" :direction="setting.direction">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      </Steps>
      <Button type="primary" @click="next">下一步</Button>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long @click="previous" size="large">previous</Button>
      </Col>
      <Col span="8">
        <Button type="error" long @click="home" size="large">home</Button>
      </Col>
      <Col span="8">
        <Button type="primary" long disabled size="large">next</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      setting: {
        current: 1,
        size: "",
        direction: 'horizontal'
      }
    }
  },
  methods: {
    next() {
      if (this.setting.current == 3) {
        this.setting.current = 0;
      } else {
        this.setting.current += 1;
      }
    },
    previous() {
      window.location.href = './tabs'
    },
    home() {
      window.location.href = '../../'
    }
  }
}
</script>

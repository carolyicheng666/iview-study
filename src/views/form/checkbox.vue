<style scoped lang="less">
.checkbox {
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
  <div class="checkbox">
    <div class="content">
      <h1>单独使用</h1>
      <p>使用 v-model 可以双向绑定数据。</p>
      <Checkbox v-model="single">Checkbox</Checkbox>
    </div>

    <div class="content">
      <h1>组合使用</h1>
      <p>使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。</p>
      <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
    </div>

    <div class="content">
      <h1>不可用</h1>
      <p>通过设置disabled属性来禁用多选框。</p>
      <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
      <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
    </div>

    <div class="content">
      <h1>与其它组件通信</h1>
      <p>与其它组件进行数据联动。</p>
      <Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
         - 
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
      </Checkbox>
      <br>
      <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
      </Button>
      <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
      </Button>
    </div>

    <div class="content">
      <h1>与其它组件通信</h1>
      <p>与其它组件进行数据联动。</p>
      <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
          :indeterminate="indeterminate"
          :value="checkAll"
          @click.prevent.native="handleCheckAll">全选</Checkbox>
      </div>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup>
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
        social: ['facebook', 'github'],
        fruit: ['苹果'],
        disabledSingle: true,
        disabledGroup: ['苹果'],
        checked: true,
        disabled: false,
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜']
      }
    },
    methods: {
      handleCheckAll () {
        if (this.indeterminate) {
          this.checkAll = false;
        } else {
          this.checkAll = !this.checkAll;
        }
        this.indeterminate = false;

        if (this.checkAll) {
          this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
        } else {
          this.checkAllGroup = [];
        }
      },
      checkAllGroupChange (data) {
        if (data.length === 3) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (data.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      },
      previous() {
        window.location.href = './radio'
      },
      home() {
        window.location.href = '../../'
      },
      next() {
        window.location.href = './switch'
      }
    }
  }
</script>

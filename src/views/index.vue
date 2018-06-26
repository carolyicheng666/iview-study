<style scoped lang="less">
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  h1 {
    height: 150px;
    img {
      height: 100%;
    }
  }
  h2 {
    color: #666;
    margin-bottom: 200px;
    p {
      margin: 0 0 50px;
    }
  }
  .ivu-row-flex {
    height: 100%;
  }
}
</style>
<template>
  <div class="index">
    <Row type="flex" justify="center" align="middle">
      <Col span="24">
      <h1>
        <img src="../images/logo.png">
      </h1>
      <h2>
        <p>Welcome to your iView app!</p>
        <Button type="ghost" @click="handleStart">Start iView</Button>
        <Row type="flex" justify="space-around" class="code-row-bg" style="padding-top: 20px;">
          <Col span="8">
            <Button type="primary" long @click="basic" size="large" shape="circle">Basic</Button>
          </Col>
          <Col span="8">
            <Button type="warning" long @click="form" size="large" shape="circle">Form</Button>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" class="code-row-bg" style="padding-top: 20px;">
          <Col span="8">
            <Button type="success" long @click="view" size="large" shape="circle">View</Button>
          </Col>
          <Col span="8">
            <Button type="error" long @click="navigation" size="large" shape="circle">Navigation</Button>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" class="code-row-bg" style="padding-top: 20px;">
          <Col span="8">
            <Button type="warning" long @click="chart" size="large" shape="circle">Chart</Button>
          </Col>
          <Col span="8">
            <Button type="info" long @click="other" size="large" shape="circle">Other</Button>
          </Col>
        </Row>
      </h2>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  methods: {
    handleStart() {
      this.$Modal.info({
        title: 'Bravo',
        content: 'Now, enjoy the convenience of iView.'
      });
    },
    basic() {
      window.location.href = './basic/grid'
    },
    form() {
      window.location.href = './form/input'
    },
    view() {
      window.location.href = './view/card'
    },
    navigation() {
      window.location.href = './navigation/menu'
    },
    chart() {
      window.location.href = './chart/circle'
    },
    other() {
      window.location.href = './other/backtop'
    }
  }
}
</script>
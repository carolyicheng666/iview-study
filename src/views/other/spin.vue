<style scoped lang="less">
.spin {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
}

h1 {
  color: #f00;
}

.demo-spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}

.demo-spin-article {
  width: 400px;
  height: 200px;
  padding: 10px;
  text-align: center;
  position: relative;
  border: 1px solid #eee;
  & h3 {
    font-size: 16px;
    font-weight: 400;
    margin: 8px 0;
  }
  & address {
    color: #999;
    font-style: normal;
    font-size: 14px;
  }
  & p {
    margin: 5px;
    font-size: 14px;
  }
}
</style>
<template>
  <div class="spin">
    <div class="content">
      <h1>各种尺寸</h1>
      <p>通过设置size属性为large和small将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。</p>
      <Row>
        <Col span="8">
        <Spin size="small"></Spin>
        </Col>
        <Col span="8">
        <Spin></Spin>
        </Col>
        <Col span="8">
        <Spin size="large"></Spin>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>居中固定</h1>
      <p>在容器内部垂直居中固定，需要父级有relative或absolute。</p>
      <div class="demo-spin-container">
        <Spin fix></Spin>
      </div>
    </div>

    <div class="content">
      <h1>自定义内容</h1>
      <p>自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。</p>
      <Row>
        <Col class="demo-spin-col" span="8">
        <Spin fix>加载中...</Spin>
        </Col>
        <Col class="demo-spin-col" span="8">
        <Spin fix>
          <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
          <div>Loading</div>
        </Spin>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>状态切换</h1>
      <p>控制 Spin 组件的显示和消失。</p>
      <div class="demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
          <p>凤凰台上凤凰游，凤去台空江自流。</p>
          <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
          <p>三山半落青天外，二水中分白鹭洲。</p>
          <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <Spin size="large" fix v-if="spinShow"></Spin>
      </div>
      <br> 切换显示状态：
      <Switch @on-change="spinShow = !spinShow"></Switch>
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
      spinShow: true
    };
  },
  methods: {
     previous() {
      window.location.href = './backtop'
    },
    home() {
      window.location.href = '../../'
    }
  }
};
</script>

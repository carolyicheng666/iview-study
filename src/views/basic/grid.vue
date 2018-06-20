<style scoped lang="less">
.color {
  &:nth-child(odd) {
    background: #4cb7ed;
  }
  &:nth-child(even) {
    background: #19a3e8;
  }
}
.grid {
  padding: 20px;
  .ivu-col {
    line-height: 50px;
    color: #fff;
    text-align: center;
    .block {
      .color();
    }
  }
  .basic, .push-pull, .offset, .f, .bs { 
    .color();
  }
}
</style>
<template>
  <div class="grid">
    <h1>基础用法</h1>
    <p>水平排列的布局。col必须放在row里面。</p>
    <Row>
      <Col span="12" class="basic">col-12</Col>
      <Col span="12" class="basic">col-12</Col>
    </Row>
    <br>
    <Row>
      <Col span="8" class="basic">col-8</Col>
      <Col span="8" class="basic">col-8</Col>
      <Col span="8" class="basic">col-8</Col>
    </Row>
    <br>
    <Row>
      <Col span="6" class="basic">col-6</Col>
      <Col span="6" class="basic">col-6</Col>
      <Col span="6" class="basic">col-6</Col>
      <Col span="6" class="basic">col-6</Col>
    </Row>
    <br>
    <h1>区块间隔</h1>
    <p>通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。</p>
    <Row :gutter="24">
      <Col span="6"><div class="block">col-6</div></Col>
      <Col span="6"><div class="block">col-6</div></Col>
      <Col span="6"><div class="block">col-6</div></Col>
      <Col span="6"><div class="block">col-6</div></Col>
    </Row>
    <br>
    <h1>栅格排序</h1>
    <p>通过设置push和pull来改变栅格的顺序。</p>
    <Row>
      <Col span="18" push="6" class="push-pull">col-18 | push-6</Col>
      <Col span="6" pull="18" class="push-pull">col-6 | pull-18</Col>
    </Row>
    <br>
    <h1>左右偏移</h1>
    <p>通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</p>
    <Row>
      <Col span="8" class="offset">col-8</Col>
      <Col span="8" offset="8" class="offset">col-8 | offset-8</Col>
    </Row>
    <br>
    <Row>
      <Col span="6" offset="8" class="offset">col-6 | offset-8</Col>
      <Col span="6" offset="4" class="offset">col-6 | offset-4</Col>
    </Row>
    <br>
    <Row>
      <Col span="12" offset="8" class="offset">col-12 | offset-8</Col>
    </Row>
    <br>
    <h1>Flex布局</h1>
    <p>通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。</p>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg">
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
      <Col span="4" class="f">col-4</Col>
    </Row>
    <br>
    <h1>Flex对齐</h1>
    <p>通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。</p>
    <p>顶部对齐</p>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
      <Col span="4" class="f"><p style="line-height: 80px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 30px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 100px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 60px">col-4</p></Col>
    </Row>
    <p>底部对齐</p>
    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
      <Col span="4" class="f"><p style="line-height: 80px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 30px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 100px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 60px">col-4</p></Col>
    </Row>
    <p>居中对齐</p>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
      <Col span="4" class="f"><p style="line-height: 80px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 30px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 100px">col-4</p></Col>
      <Col span="4" class="f"><p style="line-height: 60px">col-4</p></Col>
    </Row>
    <br>
    <h1>响应式布局</h1>
    <p>参照 Bootstrap 的 响应式设计，预设四个响应尺寸：xs sm md lg。</p>
    <Row>
      <Col class="bs" :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
      <Col class="bs" :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
      <Col class="bs" :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
    </Row>
    <br>
    <h1>其它属性的响应式</h1>
    <p>span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs="6" 相当于 :xs="{ span: 6 }"。</p>
    <Row>
      <Col class="bs" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
      <Col class="bs" :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
      <Col class="bs" :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    </Row>

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
</template>
<script>
export default {
  methods: {
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './layout'
    }
  }
}
</script>
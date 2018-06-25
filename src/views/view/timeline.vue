<style scoped lang="less">
.timeline {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
  padding-left: 5px;
}

h1 {
  color: #f00;
}

.time {
  font-size: 14px;
  font-weight: bold;
}
</style>
<template>
  <div class="timeline">
    <div class="content">
      <h1>基础用法</h1>
      <p style="padding-bottom: 10px;">最简单定义一个时间轴的用法。</p>
      <Timeline>
        <TimelineItem>
          <p class="time">1976年</p>
          <p class="content">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">1984年</p>
          <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2007年</p>
          <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2010年</p>
          <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
          <p class="time">2011年10月5日</p>
          <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
      </Timeline>
    </div>

    <div class="content">
      <h1>圆圈颜色</h1>
      <p style="padding-bottom: 10px;">用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。</p>
      <Timeline>
        <TimelineItem color="green">发布1.0版本</TimelineItem>
        <TimelineItem color="green">发布2.0版本</TimelineItem>
        <TimelineItem color="red">严重故障</TimelineItem>
        <TimelineItem color="blue">发布3.0版本</TimelineItem>
      </Timeline>
    </div>

    <div class="content">
      <h1>最后一个</h1>
      <p style="padding-bottom: 10px;">通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。</p>
      <Timeline pending>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
        <TimelineItem><a href="#">查看更多</a></TimelineItem>
      </Timeline>
    </div>

    <div class="content">
      <h1>自定义时间轴点</h1>
      <p style="padding-bottom: 10px;">接受一个 slot 来自定义轴点的内容，比如一个图标。</p>
      <Timeline>
        <TimelineItem color="green">
          <Icon type="trophy" slot="dot"></Icon>
          <span>发布里程碑版本</span>
        </TimelineItem>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
      </Timeline>
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
  methods: {
    previous() {
      window.location.href = './collapse'
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './carousel'
    }
  }
}
</script>
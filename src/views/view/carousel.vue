<style scoped lang="less">
.carousel {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
}

h1 {
  color: #f00;
}

.demo-carousel {
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  background: #506b9e;
}
</style>
<template>
  <div class="carousel">
    <div class="content">
      <h1>走马灯</h1>
      <Form :model="setting" :label-width="100">
        <FormItem label="自动切换">
          <Switch v-model="setting.autoplay">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </Switch>
        </FormItem>
        <FormItem label="圆形指示器">
          <Switch v-model="setting.radiusDot">
            <span slot="open">开</span>
            <span slot="close">关</span>
          </Switch>
        </FormItem>
        <FormItem label="自动切换速度">
          <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </FormItem>
        <FormItem label="指示器位置">
          <RadioGroup v-model="setting.dots" type="button">
            <Radio label="inside">内部</Radio>
            <Radio label="outside">外部</Radio>
            <Radio label="none">不显示</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="切换箭头">
          <RadioGroup v-model="setting.arrow" type="button">
            <Radio label="hover">悬停时显示</Radio>
            <Radio label="always">一直显示</Radio>
            <Radio label="never">不显示</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="指示器触发方式">
          <RadioGroup v-model="setting.trigger" type="button">
            <Radio label="click">点击</Radio>
            <Radio label="hover">悬停</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
      <Carousel v-model="value3" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
        <CarouselItem>
          <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
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
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      }
    }
  },
  methods: {
    previous() {
      window.location.href = './timeline'
    },
    home() {
      window.location.href = '../../'
    }
  }
}
</script>
<style scoped lang="less">
.button {
  padding: 10px;
}
</style>
<template>
  <div class="button">
    <h1>按钮类型</h1>
    <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
    <p>通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。</p>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br>
    <br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <br>
    <br>
    <h1>图标按钮及按钮形状</h1>
    <p>通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。</p>
    <p>使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件</p>
    <p>通过设置shape属性为circle，可将按钮置为圆的形状。</p>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br>
    <br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle">Circle</Button>
    <br>
    <br>
    <h1>按钮尺寸</h1>
    <p>按钮有三种尺寸：大、默认（中）、小</p>
    <p>通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br>
    <br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>
    <br>
    <br>
    <h1>长按钮</h1>
    <p>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
    <p>使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。</p>
    <Button type="success" long>SUBMIT</Button>
    <br>
    <br>
    <Button type="error" long>DELETE</Button>
    <br>
    <br>
    <h1>不可用状态</h1>
    <p>通过添加disabled属性可将按钮设置为不可用状态。</p>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
    <br>
    <br>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
      <span v-if="!loading">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
      <span v-if="!loading2">Click me!</span>
      <span v-else>Loading...</span>
    </Button>
    <br>
    <br>
    <h1>按钮组合</h1>
    <p>将多个Button放入ButtonGroup内，可实现按钮组合的效果。</p>
    <p>通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。</p>
    <p>通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。</p>
    <h4>Basic</h4>
    <br>
    <br>
    <ButtonGroup>
      <Button>Cancel</Button>
      <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button disabled>Yesterday</Button>
      <Button disabled>Today</Button>
      <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary">L</Button>
      <Button>M</Button>
      <Button type="ghost">M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>
    <br>
    <br>
    <h4>Icons</h4>
    <br>
    <br>
    <ButtonGroup>
      <Button type="primary">
        <Icon type="chevron-left"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="chevron-right"></Icon>
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="primary" icon="ios-skipbackward"></Button>
      <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="ghost" icon="ios-color-wand-outline"></Button>
      <Button type="ghost" icon="ios-sunny-outline"></Button>
      <Button type="ghost" icon="ios-crop"></Button>
      <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br>
    <br>
    <h4>Circle</h4>
    <br>
    <br>
    <ButtonGroup shape="circle">
      <Button type="primary">
        <Icon type="chevron-left"></Icon>
        Backward
      </Button>
      <Button type="primary">
        Forward
        <Icon type="chevron-right"></Icon>
      </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button type="primary" icon="ios-skipbackward"></Button>
      <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button type="ghost" icon="ios-color-wand-outline"></Button>
      <Button type="ghost" icon="ios-sunny-outline"></Button>
      <Button type="ghost" icon="ios-crop"></Button>
      <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br>
    <br>
    <h4>Size</h4>
    <br>
    <br>
    <ButtonGroup size="large">
      <Button type="ghost">Large</Button>
      <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button type="ghost">Default</Button>
      <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button type="ghost">Small</Button>
      <Button type="ghost">Small</Button>
    </ButtonGroup>
    <br>
    <br>
    <ButtonGroup size="large" shape="circle">
      <Button type="ghost">Large</Button>
      <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
      <Button type="ghost">Default</Button>
      <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
      <Button type="ghost">Small</Button>
      <Button type="ghost">Small</Button>
    </ButtonGroup>
    <br>
    <br>
    <h1>按钮组纵向排列</h1>
    <p>通过设置ButtonGroup的属性vertical，可以使按钮组纵向排列。</p>
    <ButtonGroup vertical>
      <Button type="ghost" icon="social-facebook"></Button>
      <Button type="ghost" icon="social-twitter"></Button>
      <Button type="ghost" icon="social-googleplus"></Button>
      <Button type="ghost" icon="social-tumblr"></Button>
    </ButtonGroup>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long @click="previous" size="large">previous</Button>
      </Col>
      <Col span="8">
        <Button type="error" long @click="home" size="large">home</Button>
      </Col>
      <Col span="8">
        <Button type="primary" long size="large" disabled>next</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      loading2: false
    }
  },
  methods: {
    toLoading() {
      this.loading = true;
    },
    toLoading2() {
      this.loading2 = true;
    },
    previous() {
      window.location.href = './layout'
    },
    home() {
      window.location.href = '../../'
    }
  }
}
</script>
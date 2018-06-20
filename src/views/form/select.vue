<style scoped lang="less">
.select {
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
  <div class="select">
    <div class="content">
      <h1>基础用法</h1>
      <p>基本用法。可以使用 v-model 双向绑定数据。</p>
      <p>单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。</p>
      <p>可以给Select添加 style 样式，比如宽度。</p>
      <p>在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。</p>
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="content">
      <h1>尺寸</h1>
      <p>通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p>
      <Select v-model="model2" size="small" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model3" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model4" size="large" style="width:100px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="content">
      <h1>禁用</h1>
      <p>通过给Select设置属性disabled禁用整个选择器。</p>
      <p>通过给Option设置属性disabled可以禁用当前项。</p>
      <Select v-model="model5" disabled style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model6" style="width:200px">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
      </Select>
    </div>

    <div class="content">
      <h1>可清空</h1>
      <p>通过设置属性clearable可以清空已选项，仅适用于单选模式。</p>
      <Select v-model="model8" clearable style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="content">
      <h1>分组</h1>
      <p>使用OptionGroup可将选项进行分组。</p>
      <Select v-model="model7" style="width:200px">
        <OptionGroup label="Hot Cities">
          <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
        <OptionGroup label="Other Cities">
          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
      </Select>
    </div>

    <div class="content">
      <h1>自定义模板</h1>
      <p>对选项内容可以进行自定义。注意在Option中使用label属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。</p>
      <p>对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。</p>
      <Select v-model="model9" style="width:200px">
        <Option value="New York" label="New York">
          <span>New York</span>
          <span style="float:right;color:#ccc">America</span>
        </Option>
        <Option value="London" label="London">
          <span>London</span>
          <span style="float:right;color:#ccc">U.K.</span>
        </Option>
        <Option value="Sydney" label="Sydney">
          <span>Sydney</span>
          <span style="float:right;color:#ccc">Australian</span>
        </Option>
      </Select>
    </div>

    <div class="content">
      <h1>多选</h1>
      <p>通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。</p>
      <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>

    <div class="content">
      <h1>可搜索</h1>
      <p>通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘Delete快捷删除最后一个已选项。</p>
      <Row>
        <Col span="12" style="padding-right:10px">
          <Select v-model="model11" filterable>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Col>
        <Col span="12">
          <Select v-model="model12" filterable multiple>
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </Col>
      </Row>
    </div>

    <div class="content">
      <h1>远程搜索</h1>
      <p>远程搜索需同时设置 filterable、remote、remote-method、loading 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。</p>
      <p>注意：需要给 Option 设置 key。</p>
      <p>设置初始显示值，需设置 label 属性。</p>
      <p>本例为美国州名，尝试输入一些字母。</p>
      <Row>
        <Col span="12" style="padding-right:10px">
          <Select
              v-model="model13"
              filterable
              remote
              :remote-method="remoteMethod1"
              :loading="loading1">
              <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
          </Select>
        </Col>
        <Col span="12">
          <Select
              v-model="model14"
              multiple
              filterable
              remote
              :remote-method="remoteMethod2"
              :loading="loading2">
              <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
          </Select>
        </Col>
      </Row>
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
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        cityList1: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          }
        ],
        cityList2: [
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: '',
        model2: '',
        model3: '',
        model4: '',
        model5: '',
        model6: '',
        model8: '',
        model7: '',
        model9: '',
        model10: [],
        model11: '',
        model12: [],
        model13: '',
        loading1: false,
        options1: [],
        model14: [],
        loading2: false,
        options2: [],
        list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
      }
    },
    methods: {
      remoteMethod1 (query) {
        if (query !== '') {
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options1 = [];
        }
      },
      remoteMethod2 (query) {
        if (query !== '') {
          this.loading2 = true;
          setTimeout(() => {
            this.loading2 = false;
            const list = this.list.map(item => {
              return {
                value: item,
                label: item
              };
            });
            this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options2 = [];
        }
      },
      previous() {
        window.location.href = './switch'
      },
      home() {
        window.location.href = '../../'
      },
      next() {
        window.location.href = './rate'
      }
    }
  }
</script>

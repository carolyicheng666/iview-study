<style scoped lang="less">
.card {
  padding: 20px;
}

.content {
  padding-bottom: 30px;
}

h1 {
  color: #f00;
}

.ivu-card ul li {
  list-style: none;
  a[target=_blank]:after {
    content: "\F220";
    font-family: Ionicons;
    color: #aaa;
    margin-left: 3px;
  }
  span {
    float: right;
    color: #ffac2d;
    i:last-child {
      margin-right: 5px;
    }
  }
}
</style>
<template>
  <div class="card">
    <div class="content">
      <h1>基本用法</h1>
      <p>自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。</p>
      <Card style="width:350px">
        <p slot="title">
          <Icon type="ios-film-outline"></Icon>
          Classic film
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
          <Icon type="ios-loop-strong"></Icon>
          Change
        </a>
        <ul>
          <li v-for="item in randomMovieList">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span style="float: right;">
              <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
              <Icon type="ios-star-half" v-else></Icon>
              {{ item.rate }}
            </span>
          </li>
        </ul>
      </Card>
    </div>

    <div class="content">
      <h1>无边框</h1>
      <p>通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。</p>
      <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
          <p slot="title">No border title</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </div>
    </div>

    <div class="content">
      <h1>简洁卡片</h1>
      <p>只包含内容区域，没有标题。</p>
      <Card style="width:320px">
        <div style="text-align:center">
          <img src="../../images/logo.png">
          <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
      </Card>
    </div>

    <Row :gutter="32" style="border-top: 1px solid #ccc; margin-top: 50px; padding-top: 20px;">
      <Col span="8">
        <Button type="primary" long disabled size="large">previous</Button>
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
      movieList: [{
          name: 'The Shawshank Redemption',
          url: 'https://movie.douban.com/subject/1292052/',
          rate: 9.6
        },
        {
          name: 'Leon:The Professional',
          url: 'https://movie.douban.com/subject/1295644/',
          rate: 9.4
        },
        {
          name: 'Farewell to My Concubine',
          url: 'https://movie.douban.com/subject/1291546/',
          rate: 9.5
        },
        {
          name: 'Forrest Gump',
          url: 'https://movie.douban.com/subject/1292720/',
          rate: 9.4
        },
        {
          name: 'Life Is Beautiful',
          url: 'https://movie.douban.com/subject/1292063/',
          rate: 9.5
        },
        {
          name: 'Spirited Away',
          url: 'https://movie.douban.com/subject/1291561/',
          rate: 9.2
        },
        {
          name: 'Schindler\'s List',
          url: 'https://movie.douban.com/subject/1295124/',
          rate: 9.4
        },
        {
          name: 'The Legend of 1900',
          url: 'https://movie.douban.com/subject/1292001/',
          rate: 9.2
        },
        {
          name: 'WALL·E',
          url: 'https://movie.douban.com/subject/2131459/',
          rate: 9.3
        },
        {
          name: 'Inception',
          url: 'https://movie.douban.com/subject/3541415/',
          rate: 9.2
        }
      ],
      randomMovieList: []
    }
  },
  methods: {
    changeLimit() {
      function getArrayItems(arr, num) {
        const temp_array = [];
        for (let index in arr) {
          temp_array.push(arr[index]);
        }
        const return_array = [];
        for (let i = 0; i < num; i++) {
          if (temp_array.length > 0) {
            const arrIndex = Math.floor(Math.random() * temp_array.length);
            return_array[i] = temp_array[arrIndex];
            temp_array.splice(arrIndex, 1);
          } else {
            break;
          }
        }
        return return_array;
      }
      this.randomMovieList = getArrayItems(this.movieList, 5);
    },
    home() {
      window.location.href = '../../'
    },
    next() {
      window.location.href = './message'
    }
  },
  mounted() {
    this.changeLimit();
  }
}
</script>
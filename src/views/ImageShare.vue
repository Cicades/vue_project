<template>
  <div class="image-share">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="cate in cates" :class="{'active':currentCateId===cate.id}" @click="changeCate(cate.id)" :key="cate.id">
          {{cate.title}}
        </li>
      </ul>
    </div>
    <div class="content">
      <ul>
        <li v-for="imgItem in imgList" :key="imgItem.id">
          <div>
            <img v-lazy="imgItem.img_url" alt="imgItem.title" @click="$router.push({name:'imgDetail',params:{id:imgItem.id}})">
            <span v-html="imgItem.zhaiyao"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import request from '@/models/model.js'
export default {
  created () {
    this.initCates() // 初始化滑动导航
    this.changeCate(this.currentCateId)
  },
  data () {
    return {
      cates: [],
      currentCateId: 0,
      imgList: []
    }
  },
  methods: {
    initCates () {
      request.get('/getimgcategory').then(res => {
        if (res.data.status === 0) {
          this.cates = res.data.message
          this.cates.unshift({ title: '全部', id: 0 })
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {
              scrollX: true,
              scrollY: false,
              click: true
            })
          })
        }
      })
    },
    changeCate (id) {
      this.currentCateId = id
      request.get(`getimages/${id}`).then(res => {
        if (res.data.status === 0) {
          this.imgList = res.data.message
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
  .wrapper{

    margin: 10px 0;
    .content{
      width: 200%;
      padding: 10px;
      display: flex;
      justify-content: space-around;
    }
  }
  .active{
    color: aqua;
  }
  .content{
    >ul{
      >li{
          padding: 0 10px;
        >div{
          text-align: center;
          position: relative;
          margin-bottom: 10px;
          >img{
            width: 100%;
            vertical-align: middle;
            box-shadow: 0 0 7px #333333a8;
            border-radius: 2px
          }
          >span{
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 0 5px;
            text-align: left;
            background-color: rgba(0,0,0,0.5);
            color: #fff;
            max-height: 4em;
            overflow-y: hidden;
          }
        }
      }
    }
  }
</style>

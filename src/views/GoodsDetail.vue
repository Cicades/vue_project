<template>
  <div class="goods-detail">
    <div class="carousel card">
      <carousel :imgUrl="'/getthumimages/'+this.id"></carousel>
    </div>
    <div class="card">
      <h3>{{info.title}}</h3>
      <div class="card-content">
        <div class="price">
          <span class="market">市场价：<del>&yen;{{info.market_price}}</del></span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="sale">销售价：<strong>&yen;{{info.sell_price}}</strong></span>
        </div>
        <div class="buy-box">
          购买数量：<numbox v-model="goodsCount"></numbox>
        </div>
        <div class="commit-box">
          <mt-button type="primary" size="small" @click.native="Buy">立即购买</mt-button>
          &nbsp;&nbsp;
          <mt-button type="danger" size="small" @click.native="addToCart" ref="cartBtn">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <div class="card">
      <h3>商品参数<router-link :to="{name:'goodsDesc', params:{id:this.id}}">详情&gt;&gt;</router-link></h3>
      <div class="card-content">
        <ul>
          <li>商品货号：{{info.goods_no}}</li>
          <li>库存情况：{{info.stock_quantity}}</li>
          <li>上架时间：{{info.add_time|dateFormat}}</li>
        </ul>
      </div>
    </div>
    <div>
      <h3>评论</h3>
      <comment-input :article-id="id" @updateComment="updateComment"></comment-input>
      <comment-item v-for="comment in comments" :key="comment.add_time+Math.random().toFixed(5)" :comment="comment"></comment-item>
      <mt-button plain size="large" type="danger" @click="getMoreComments">加载更多</mt-button>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div id="ball" v-if="ballFlag" ref="ball"></div>
    </transition>
  </div>
</template>
<script>
  import request from '@/models/model.js'
  import Carousel from '@/components/Carousel.vue'
  export default {
    data(){
      return {
        info: {},
        id: this.$route.params.id,
        goodsCount: 1,
        ballFlag: false,
        comments: [],
        page: 1
      }
    },
    created(){
      request.get('/goods/getinfo/' + this.id)
      .then( res => {
        if(res.data.status === 0){
          this.info = res.data.message[0]
          return request.get(`/getcomments/${this.id}?pageindex=${this.page}`)
        }
      })
      .then(res => {
        if (res.data.status === 0) {
          this.comments = res.data.message
        }
      })
    },
    components: {
      Carousel
    },
    methods: {
      addToCart(){
        this.ballFlag = !this.ballFlag
        this.$store.commit('addGoods', [this.id, this.goodsCount])
      },
      beforeEnter(el){
        el.style.transform ='translate(0,0)'
      },
      enter(el, done){
        el.offsetWidth
        let ballRect = this.$refs.ball.getBoundingClientRect()
        let badgeRect = document.querySelector('.fa-shopping-cart').getBoundingClientRect()
        el.style.transition = "all 0.5s ease"
        el.style.transform = `translate(${badgeRect.left-ballRect.left+35}px, ${badgeRect.top-ballRect.top}px)`
        done()
      },
      afterEnter(el){
        this.ballFlag = !this.ballFlag
      },
      getMoreComments () {
          this.page++
          request.get(`/getcomments/${this.id}?pageindex=${this.page}`).then(res => {
            if (res.data.status === 0) { this.comments = this.comments.concat(res.data.message) }
          })
      },
      updateComment (data) {
          this.comments.unshift(data)
      }
    }
  }
</script>
<style scoped lang="scss">
  .goods-detail{
    padding: 10px;
    .card{
      padding: 10px 0;
      border-radius: 2px;
      box-shadow: 0 0 5px #ccc;
      margin-bottom: 10px;
      >h3{
        border-bottom: 1px solid #ccc;
        margin: 0;
        padding: 0 10px;
        line-height: 30px;
        >a{
          color: #333;
          font-size: 12px;
          display: inline-block;
          float: right;
          font-weight: lighter;
        }
      }
      .card-content{
        padding: 10px 10px 0 10px;
        li{
          color: #ccc;
          margin-bottom: 10px;
        }
        div{
          margin-bottom: 10px;
        }
        .price{
          .sale{
            strong{
              color: red;
            }
          }
        }
      }
    }
  }
  #ball{
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    top: 408px;
    left: 150px;
    z-index: 99;
  }
</style>

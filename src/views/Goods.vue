<template>
  <div class="goods-list">
    <ul>
      <li v-for="goodsItem in goodsList" :key="goodsItem.id" @click="$router.push({name: 'goodsDetail', params:{id:goodsItem.id}})">
        <div class="goods-item">
          <div class="goods-desc">
            <img :src="goodsItem.img_url" :alt="goodsItem.title">
            <span>{{goodsItem.title}}</span>
          </div>
          <div class="goods-info">
            <div class="top">
              <span class="now">&yen;{{goodsItem.sell_price}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <del class="old">&yen;{{goodsItem.market_price}}</del>
            </div>
            <div class="bottom">
              <span>热卖中</span>
              <span>剩余{{goodsItem.stock_quantity}}件</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
  import request from '@/models/model.js'
  export default {
    data(){
      return {
        goodsList: [],
        page:1
      }
    },
    created(){
      request.get('/getgoods?pageindex=' + this.page)
      .then( res => {
        if (res.data.status === 0) {
          this.goodsList = res.data.message
        }
      } )
    },
    methods: {
      getMore(){
        this.page ++
          request.get('/getgoods?pageindex=' + this.page)
            .then( res => {
              if (res.data.status === 0) {
                this.goodsList = this.goodsList.concat(res.data.message)
              }
          } )
      }
    }
  }
</script>
<style scoped lang="scss">
  .goods-list{
    padding: 10px 5px;
    >ul{
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      >li{
        border: 1px solid #ccc;
        border-radius: 2px;
        box-shadow: 0 0 10px #ccc;
        margin-bottom: 10px;
        width: 48%;
        .goods-item{
          height: 100%;
          box-sizing: border-box;
          padding: 5px;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          .goods-desc{
            img{
              width: 100%;
            }
          }
          .goods-info{
            background-color: #e1e0cc96;
            .bottom{
              display: flex;
              justify-content: space-between;
              margin-top: 10px;
              color: #333;
            }
            .top{
              .now{
                color: red;
                font-weight: bolder;
                font-size: 16px;
              }
              .old{
                color: #ccc;
                font-size: 13px;
              }
            }
          }
        }
      }
    }
  }
</style>

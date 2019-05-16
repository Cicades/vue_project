<template>
  <div class="shop-cart">
    <cart-goods-item v-for="goods in goodsList" :key="goods.id" :goods="goods" @updateGoodsList="getGoodsList"></cart-goods-item>
    <div class="order-info">
      <div class="left">
        <span>总计（不含运费）</span>
        <span>已勾选商品&nbsp;<strong class="red">{{total.count}}</strong>&nbsp;件，总价：<strong class="red">&yen;{{total.totalPrice}}</strong></span>
      </div>
      <mt-button type="danger">去结算</mt-button>
    </div>
  </div>
</template>
<script>
  import CartGoodsItem from '@/components/CartGoodsItem.vue'
  import request from '@/models/model.js'
  export default {
    data(){
      return {
        goodsList: []
      }
    },
    components: {
      CartGoodsItem
    },
    created(){
      this.getGoodsList()
    },
    methods: {
      getGoodsList(){
        if (this.$store.getters.goodsSum){
          request.get(`/goods/getshopcarlist/${this.$store.getters.goodsIds}`)
          .then(res => {
            if(res.data.status === 0) {
             res.data.message.forEach(item => item.selected = true)
             this.goodsList = res.data.message
           }
          })
        } else {
          this.goodsList = []
        }
      }
    },
    computed: {
      total(){
        let totalPrice = 0
        let count = 0
        this.goodsList.forEach(item =>{
          if (item.selected) {
            let subCount = this.$store.getters.getCountById(item.id)
            count += subCount
            totalPrice += subCount * item.sell_price
          }
        })
        return {count, totalPrice}
      }
    }
  }
</script>
<style scoped lang="scss">
  .shop-cart{
    padding: 10px;
  }
  .order-info{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    box-shadow: 0 0 5px rgba(0,0,0,.5);
    margin-top: 20px;
    .left{
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .red{
    color: red;
  }
</style>

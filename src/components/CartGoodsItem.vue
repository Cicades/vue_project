<template>
  <div class="cart-goods-item">
    <mt-switch v-model="goods.selected"></mt-switch>
    <img :src="goods.thumb_path" alt="">
    <div class="goods-info">
      <div class="top">{{goods.title}}</div>
      <div class="bottom">
        <span class="red">&yen;{{goods.sell_price}}</span>
        <numbox v-model="count"></numbox>
        <a href="#" class="blue" @click.prevent="delGoods">删除</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['goods'],
    data(){
      return {
        count: this.$store.getters.getCountById(this.goods.id)
      }
    },
    watch: {
      count(newVal){
        this.$store.commit('updateGoods', [this.goods.id, this.count])
      }
    },
    methods: {
      delGoods(){
        this.$store.commit('delGoods', this.goods.id)
        this.$emit('updateGoodsList')
      }
    }
  }
</script>
<style scoped lang="scss">
  .cart-goods-item{
    max-height: 110px;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    >img{
      width: 100px;
    }
    .goods-info{
      display: flex;
      height: 110px;
      flex-direction: column;
      justify-content: space-around;
      .top{
        font-weight: bolder;
      }
      .bottom{
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    }
  }
  .red{
    color: red;
  }
  .blue{
    color: blue;
  }
</style>

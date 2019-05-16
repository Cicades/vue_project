<template>
  <div class="numbox">
    <span @click="count>1&&count--">-</span>
    <span><input type="text" v-model="count"></span>
    <span @click="count++">+</span>
  </div>
</template>
<script>
  export default{
    model:{
      prop: 'goodsNum',
      event: 'change'
    },
    props: ['goodsNum'],
    data(){
      return {
        count: this.goodsNum
      }
    },
    watch:{
      count(newVal, oldVal){
        this.$emit('change', newVal)
      },
      goodsNum(newVal, oldVal){
        this.count = newVal
      }
    }
  }
</script>
<style scoped lang="scss">
  .numbox{
    width: 90px;
    display: inline-block;
    span{
      box-sizing: border-box;
      display: inline-block;
      width: 30px;
      height: 20px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 20px;
      overflow: hidden;
      input{
        padding: 0;
        margin: 0;
        text-align: center;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    }
  }
</style>

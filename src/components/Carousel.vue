<template>
  <div>
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="img in swipeImages" :key="img.id">
      <img :src="img.img||img.src" alt="" :class="{'full': isFull}">
    </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import request from '@/models/model.js'
import { Toast } from 'mint-ui'
export default {
  created () {
    let t = Toast('图片加载中')
    request.get(this.imgUrl).then(res => {
      this.swipeImages = res.data.message
      t.close()
    })
  },
  data: function () {
    return {
      swipeImages: null
    }
  },
  props: ['imgUrl', 'isFull']
}
</script>
<style scoped lang="scss">
  .mint-swipe{
    height: 200px;
    text-align: center;
    img{
      height: 100%;
    }
  }
  .full{
    width: 100%;
  }
</style>

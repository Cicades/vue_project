<template>
  <div class="news-list">
    <mt-cell :title="news.title" v-for="news in newsList" :key="news.id" is-link :to="'/news/detail/'+ news.id">
      <img slot="icon" :src="news.img_url" width="40" height="40">
      <span>{{news.add_time|dateFormat('MM-DD')}}</span>
      <span><i class="fa fa-eye"></i>&nbsp;{{news.click}}</span>
    </mt-cell>
  </div>
</template>
<script>
import request from '@/models/model.js'
import { Toast } from 'mint-ui'
export default {
  methods: {
    getNewsList () {
      let t = Toast('列表加载中...')
      request.get('/getnewslist').then(res => {
        if (res.data.status === 0) {
          this.newsList = res.data.message
          t.close()
        } else {
          t.close()
          Toast('列表加载失败')
        }
      })
    }
  },
  created () {
    this.getNewsList()
  },
  data: function () {
    return {
      newsList: null
    }
  }
}
</script>
<style lang="scss">
  .news-list{
    padding-top: 10px;
    .mint-cell-text{
      font-size: 14px;
      display: inline-block;
      width: 14em;
      color: #333;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .mint-cell-value{
      font-size: 14px;
      font-weight: lighter;
      display: inline-block;
      >span{
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
</style>

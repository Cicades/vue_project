<template>
  <article>
    <header>
      <h3>{{news.title}}</h3>
      <div class="news-info">
        <span>{{news.add_time|dateFormat}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>浏览量：&nbsp;{{news.click}}</span>
      </div>
    </header>
    <hr>
    <section v-html="news.content"></section>
    <footer>
      <h3>评论</h3>
      <comment-input :article-id="id" @updateComment="updateComment"></comment-input>
      <comment-item v-for="comment in comments" :key="comment.add_time+Math.random().toFixed(5)" :comment="comment"></comment-item>
      <mt-button plain size="large" type="danger" @click="getMoreComments">加载更多</mt-button>
    </footer>
  </article>
</template>
<script>
import request from '@/models/model.js'
import { Toast } from 'mint-ui'
export default {
  created () {
    this.getNewsDetail()
  },
  data: function () {
    return {
      id: this.$route.params.id,
      news: {},
      comments: [],
      page: 1
    }
  },
  methods: {
    getNewsDetail () {
      let t = Toast({ message: '新闻加载中...', duration: -1 })
      request.get('/getnew/' + this.id).then(res => {
        if (res.data.status === 0) {
          this.news = res.data.message[0]
          return request.get(`/getcomments/${this.id}?pageindex=${this.page}`)
        }
      }).then(res => {
        if (res.data.status === 0) {
          this.comments = res.data.message
          t.close()
        }
      })
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
  article{
    padding: 10px;
    >header{
      >h3{
        padding: 0 45px;
        text-align: center;
      }
      .news-info{
        text-align: center;
        color:#ccc;
      }
    }
    section{
      font-size: 14px;
    }
  }
</style>

<template>
    <article class="img-detail">
      <header>
        <h3>{{imgInfo.title}}</h3>
        <div>
          <span>发表时间:{{imgInfo.add_tiem|dateFormat}}</span>
          <span>点击:{{imgInfo.click}}次</span>
        </div>
      </header>
      <hr>
      <main>
        <vue-preview :slides="thumbImgs"></vue-preview>
        <section v-html="imgInfo.content"></section>
      </main>
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
  export default {
    data(){
      return {
        id: this.$route.params.id,
        imgInfo: {},
        thumbImgs: [],
        page: 1,
        comments: []
      }
    },
    created(){
        request.get('/getimageInfo/'+this.id)
        .then(res => {
            if(res.data.status === 0){
              this.imgInfo = res.data.message[0]
              return request.get('getthumimages/'+this.id)
            }
        })
        .then(res => {
          if(res.data.status === 0){
            //获取缩略图
            res.data.message.forEach(function(item, index){
              let extendObj = {
                msrc: item.src,
                alt: '',
                title: '',
                w: 600,
                h: 400
              }
              Object.assign(item, extendObj)
            })
            this.thumbImgs = res.data.message
            return request.get(`/getcomments/${this.id}?pageindex=${this.page}`)
          }
        })
        .then(res => {
          // 获取评论
          if( res.data.status === 0 ){
            this.comments = res.data.message
          }
        })
    },
    methods:{
      getMoreComments(){
        this.page ++
        request.get(`/getcomments/${this.id}?pageindex=${this.page}`).then(res => {
          if (res.data.status === 0)
            this.comments = this.comments.concat(res.data.message)
        })
      },
      updateComment(data){
        this.comments.unshift(data)
      }
    }
  }
</script>
<style lang="scss">
  article.img-detail{
      padding: 10px;
    >header{
      >h3{
        padding: 0 30px;
        text-align: center;
        color: aqua;
      }
      >div{
        display: flex;
        justify-content: space-between;
        color: #bbb;
      }
    }
    >main{
      div.my-gallery{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        figure{
          margin: 0;
          padding: 0;
          img{
            width: 110px;
            box-shadow: 0 0 10px #ccc;
            border-radius: 2px;
          }
        }
      }
      section{
        margin-top: 10px;
      }
    }
  }
</style>

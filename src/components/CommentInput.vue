<template>
  <div class="comment-input-wrapper">
    <textarea placeholder="请输入不超过120字" maxlength="120" v-model="content"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
  </div>
</template>
<script>
  import request from '@/models/model.js'
  import qs from 'qs'
  export default {
    data(){
      return {
        content: ''
      }
    },
    props: ['articleId'],
    methods: {
      postComment(){
        request.request({
          url: '/postcomment/' + this.articleId,
          method: 'post',
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: qs.stringify({content: this.content})
        }).then(res => {
          if(res.data.status === 0){
            this.$emit('updateComment', {user_name: '匿名用户', add_time: Date.now(), content: this.content})
            this.content = ''
          }
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .comment-input-wrapper{
    text-align: center;
    textarea{
      width: 100%;
      height: 100px;
      border: 1px solid #ccc;
      border-radius: 2px;
    }
  }
</style>

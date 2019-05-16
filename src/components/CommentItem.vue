<template>
  <div class="comment-item">
    <div class="comment-info">
      <span class="uname">{{comment.user_name}}</span>
      <span class="add-time">{{comment.add_time|dateFormat}}</span>
    </div>
    <div class="comment-content" v-html="comment.content"></div>
    <hr>
  </div>
</template>
<script>
export default {
  props: ['comment']
}
</script>
<style scoped lang="scss">
  .comment-item{
    margin: 10px 0;
    .comment-info{
      display: flex;
      justify-content: space-between;
      .uname{
        font-weight: bolder;
      }
      .add-time{
        color: #ccc;
      }
    }
    .comment-content{
      padding: 10px 0;
      text-indent: 2em;
    }
  }
</style>

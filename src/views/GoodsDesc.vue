<template>
  <article class="goods-desc">
    <header>
      <h3>{{title}}</h3>
    </header>
    <main v-html="content"></main>
  </article>
</template>
<script>
  import request from '@/models/model.js'
  export default{
    data(){
      return {
        title: '',
        content: '',
        id: this.$route.params.id
      }
    },
    created(){
      request.get('/goods/getdesc/' + this.id)
      .then( res => {
        if(res.data.status === 0){
          this.content = res.data.message[0].content
          this.title = res.data.message[0].title
        }
      })
    }
  }
</script>
<style lang="scss">
  .goods-desc{
    >header{
      border-bottom: 1px solid #ccc;
      >h3{
        color: aqua;
        padding: 0 30px;
        text-align: center;
      }
    }
    >main{
      padding: 0 10px;
      img{
        width: 100%;
      }
    }
  }
</style>

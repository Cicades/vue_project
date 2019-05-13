<template>
  <nav class="nav">
    <ul>
      <li><router-link :to="{name: 'news'}"><img src="@/assets/images/menu1.png" alt=""><span>新闻资讯</span></router-link></li>
      <li><router-link :to="{name: 'imageShare'}"><img src="@/assets/images/menu2.png" alt=""><span>图片分享</span></router-link></li>
      <li><router-link to="/home/goods"><img src="@/assets/images/menu3.png" alt=""><span>商品购买</span></router-link></li>
    </ul>
    <ul>
      <li><router-link to="/home/news"><img src="@/assets/images/menu4.png" alt=""><span>留言反馈</span></router-link></li>
      <li><router-link to="/home/news"><img src="@/assets/images/menu5.png" alt=""><span>视频专区</span></router-link></li>
      <li><router-link to="/home/news"><img src="@/assets/images/menu6.png" alt=""><span>联系我们</span></router-link></li>
    </ul>
  </nav>
</template>
<script>
</script>
<style scoped lang="scss">
  .nav{
    width: 100%;
    padding-top: 10px;
    >ul{
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 10px;
      >li{
        flex: 1;
        text-align: center;
        img{
          width: 60px;
        }
        span{
          display: block;
          font-size: 14px;
          font-weight: lighter;
          color: #333;
          padding: 5px 0;
        }
      }
    }
  }
</style>

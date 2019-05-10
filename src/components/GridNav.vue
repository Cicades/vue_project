<template>
  <nav class="nav">
    <ul>
      <li><a href=""><img src="@/assets/images/menu1.png" alt=""><span>新闻资讯</span></a></li>
      <li><a href=""><img src="@/assets/images/menu2.png" alt=""><span>图片分享</span></a></li>
      <li><a href=""><img src="@/assets/images/menu3.png" alt=""><span>商品购买</span></a></li>
    </ul>
    <ul>
      <li><a href=""><img src="@/assets/images/menu4.png" alt=""><span>留言反馈</span></a></li>
      <li><a href=""><img src="@/assets/images/menu5.png" alt=""><span>视频专区</span></a></li>
      <li><a href=""><img src="@/assets/images/menu6.png" alt=""><span>联系我们</span></a></li>
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

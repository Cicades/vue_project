<template>
  <div class="tab-bar">
    <ul>
      <li v-for="(itemclass,index) in itemClasses">
        <router-link :to="links[index]">
        <i :class="itemclass"></i>
        <span>{{titles[index]}}</span>
        </router-link>
        <mt-badge v-show="index===2" type="error" size="small">0</mt-badge>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['itemClasses', 'titles', 'links']
  }
</script>
<style scoped lang="scss">
  $itemColor: #616060;
  $itemFontSize: 35px;
  .tab-bar{
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #ccc;
    padding: 5px 0;
    background-color: #fff;
    >ul{
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      >li{
        flex: 1;
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 14px;
        color: $itemColor;
        .router-link-active{
          i, span {
            color: aqua;
          }
        }
        i{
          font-size: $itemFontSize;
          font-weight: lighter;
          margin: 0;
          color: $itemColor;
        }
        span{
          display: block;
        }
        .mint-badge{
          position: absolute;
          right: 20px;
          top: 0;
        }
        &:nth-of-type(3){
          position: relative;
        }
      }
    }
  }
</style>

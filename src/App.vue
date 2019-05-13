<template>
  <div id="app">
    <mt-header fixed title='cicades'>
      <mt-button icon="back" slot="left" v-if="$route.path!=='/home'" @click="$router.go(-1)">返回</mt-button>
    </mt-header>
    <transition name="router" mode="out-in">
    <router-view></router-view>
    </transition>
    <tab-bar :item-classes="[['fa', 'fa-home', 'fa-fw'], ['fa', 'fa-envelope', 'fa-fw'], ['fa', 'fa-shopping-cart', 'fa-fw'], ['fa', 'fa-search', 'fa-fw']]" :titles="['首页', '会员', '购物车', '搜索']" :links="['/home', '/member', '/cart', '/search']">
    </tab-bar>
  </div>
</template>
<script>
export default {
  components: {
    TabBar: () => import('@/components/TabBar.vue')
  }
}
</script>

<style scoped lang="scss">
  #app{
    padding-top: 40px;
    overflow-x: hidden;
    padding-bottom: 60px;
  }
  .router-enter-active, .router-leave-active{
    transition: all 0.3s ease;
  }
  .router-enter{
    opacity: 0;
    transform: translateX(100%);
  }
  .router-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
</style>

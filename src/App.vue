<template>
  <div id="app">
    <mt-header fixed title='cicades'></mt-header>
    <transition name="router" mode="out-in">
    <router-view></router-view>
    </transition>
    <tab-bar :item-classes="[['fa', 'fa-home', 'fa-fw'], ['fa', 'fa-envelope', 'fa-fw'], ['fa', 'fa-cog', 'fa-fw'], ['fa', 'fa-search', 'fa-fw']]" :titles="['首页', '会员', '购物车', '搜索']" :links="['/index', '/member', '/cart', '/search']">
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
